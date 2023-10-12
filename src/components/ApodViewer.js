import React, { useState, useEffect } from 'react';
import ApodList from './ApodList';
import axios from 'axios';

const ApodViewer = ({ apiKey, date }) => {
  const [apodData, setApodData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [newEntryData, setNewEntryData] = useState({ title: '', date: '', description: '',  });
  const [apodEntries, setApodEntries] = useState([]);

  useEffect(() => {
    const fetchApodData = async () => {
      try {
        const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`);
        setApodData(response.data);
      } catch (error) {
        console.error('Error fetching APOD data:', error);
      }
    };
    
    // Fetch APOD data and entries on component mount
    fetchApodData();
    fetchApodEntries();
  }, [apiKey, date]);
  
  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get('https://api.nasa.gov/planetary/apod', {
        params: {
          api_key: 'zpRiS2yvyDGn9PA6CLXnshAaGadPt9A1Y3gNhkrP',// Correctly pass the API key
          date: searchTerm, // Make sure searchTerm contains the date
        },
      });
      setSearchResults([response.data]);
    } catch (error) {
      console.error('Error searching APOD data:', error);
      // Handle the error gracefully, e.g., set an error state or display an error message
    }
  };
  
  const createApodEntry = async () => {
    try {
      console.log('Received APOD data:', apodData); // Log the received APOD data
      // Map the APOD data to the newEntryData object
      const newEntryData = {
        title: apodData.title,
        date: apodData.date,
        description: apodData.explanation,
        
        // mediaType: apodData.media_type,
      };

      console.log('newEntryData:', newEntryData); // Log the newEntryData

      const response = await axios.post('/apods', newEntryData);
      console.log('Created APOD entry:', response.data);
      fetchApodEntries(); // Fetch updated entries after creating a new one
    } catch (error) {
      console.error('Error creating APOD entry:', error);
    }
  };
  
  const fetchApodEntries = async () => {
    try {
      const response = await axios.get('/apods');
      setApodEntries(response.data);
    } catch (error) {
      // Handle errors appropriately, e.g., display an error message
    }
  };

  // Add functions for update and delete operations

  return (
    <div className="apod-container">
      {apodData ? (
        <div>
          <h1>{apodData.title}</h1>
          <img src={apodData.url} alt={apodData.title} />
          <p>{apodData.explanation}</p>
        </div>
      ) : null}

      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter date (YYYY-MM-DD)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {apodEntries && apodEntries.length > 0 ? (
        <ApodList apodEntries={apodEntries} />
      ) : (
        <p>Loading...</p>
      )}

      <form onSubmit={createApodEntry}>
        <input
          type="text"
          placeholder="Title"
          value={newEntryData.title}
          onChange={(e) => setNewEntryData({ ...newEntryData, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Date"
          value={newEntryData.date}
          onChange={(e) => setNewEntryData({ ...newEntryData, date: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newEntryData.description}
          onChange={(e) => setNewEntryData({ ...newEntryData, description: e.target.value })}
        />
        
        <button type="submit">Create</button>
      </form>

      {searchResults.length > 0 ? (
        <div>
          <h2>Search Results</h2>
          {searchResults.map((result, index) => (
            <div key={result.date || index}>
              <h3>{result.title}</h3>
              <img src={result.url} alt={result.title} />
              <p>{result.explanation}</p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default ApodViewer;
