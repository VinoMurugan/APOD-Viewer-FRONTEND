

import React from 'react';

const ApodList = ({ apodEntries }) => {
  return (
    <div className="apod-list">
      {apodEntries.map((entry, index) => (
        <div key={entry._id || index}>
          <h3>{entry.title}</h3>
          <img src={entry.imageUrl} alt={entry.title} />
          <p>{entry.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ApodList;

