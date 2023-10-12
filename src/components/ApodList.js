// // src/components/ApodList.js
// import React from 'react';

// const ApodList = ({ apodEntries }) => {
//   if (!apodEntries) {
//     return <p>Loading...</p>; // or any other appropriate loading state
//   }

//   return (
//     <div>
//       <h1>Astronomy Picture of the Day (APOD)</h1>
//       <ul>
//         {apodEntries.map((entry, index) => (
//           <li key={index}>
//             <h2>{entry.title}</h2>
//             <p>Date: {entry.date}</p>
//             <p>{entry.description}</p>
//             <img src={entry.imageUrl} alt={entry.title} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ApodList;

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

