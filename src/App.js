// import React from 'react';
// import './App.css';
// import ApodViewer from './components/ApodViewer';
// import ApodList from './components/ApodList';
// // import SearchBar from './components/SearchBar';

// function App() {
//   return (
//     <div className="App">
//       {/* <SearchBar /> */}
//       <ApodViewer />
//       {/* <ApodList /> */}
//     </div>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import './App.css';
// import ApodViewer from './components/ApodViewer';
// import DateInput from './components/DateInput';
// import Index from './views/Index';
// import Index from './views/Index';
// import New from './views/New';
// import Edit from './views/Edit';


// function App() {
//   const [selectedDate, setSelectedDate] = useState('');
//   const apiKey = 'zpRiS2yvyDGn9PA6CLXnshAaGadPt9A1Y3gNhkrP'; // Replace with your NASA API key

//   const handleDateSubmit = (date) => {
//     setSelectedDate(date);
//   };

//   return (
//     <div className="App">
//       <h1>Astronomy Picture of the Day Viewer</h1>
//       <main>
//         <DateInput onDateSubmit={handleDateSubmit} />
//         {selectedDate && <ApodViewer apiKey={apiKey} date={selectedDate} />}
//       </main>
//       <Router>
//         <Routes>
//         <Route path="/" element={<ApodViewer />} />
//           <Route path="/show/:id" element={<Show />} />
//           <Route path="/index" element={<Index />} />
//           <Route path="/new" element={<New />} />
//           <Route path="/edit/:id" element={<Edit />} />
//           </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;



import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route

import './App.css';
import ApodViewer from './components/ApodViewer';
import DateInput from './components/DateInput';
import Index from './views/Index';
import New from './views/New';
import Show from './views/Show';
import Edit from './views/Edit';


function App() {
  const [selectedDate, setSelectedDate] = useState('');
  const apiKey = 'zpRiS2yvyDGn9PA6CLXnshAaGadPt9A1Y3gNhkrP'; // Replace with your NASA API key

  const handleDateSubmit = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="App">
      <h1>Astronomy Picture of the Day Viewer</h1>
      <main>
        <DateInput onDateSubmit={handleDateSubmit} />
        {selectedDate && <ApodViewer apiKey={apiKey} date={selectedDate} />}
      </main>
      <Routes> {/* Use Routes to define your routes */}
        <Route path="/" element={<ApodViewer />} />
        <Route path="/:id" element={<Show />} />
        <Route path="/" element={<Index />} />
        <Route path="/new" element={<New />} />
        <Route path="/:id/edit" element={<Edit />} />
        
      </Routes>
    </div>
  );
}



export default App;

