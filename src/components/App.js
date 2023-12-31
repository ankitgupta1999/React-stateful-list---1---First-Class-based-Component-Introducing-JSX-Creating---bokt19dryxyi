// import React from 'react'

// import '../styles/App.css';

// const data = {
//   '2018': [
//     'Avengers 1',
//     'Now you see me',
//     'Fast and Furious 7'
//   ],
//   '2019': [
//     'Avengers 2',
//     'Now you see me 2',
//     'Fast and Furious 8'
//   ],
//   '2020': [
//     'Final Avengers Movie(Iron man dies)',
//     'Now you finally used Lenskart',
//     'Covid Came'
//   ],
//   '2021': [
//     'Covid Returns',
//   ],
//   '2022': [
//     'Adventures of Saiman',
//     'Adventures of Shaktiman'
//   ]
// }
// const App = () => {

//   return (
//     <div id="main">
//       <select value={selectedYear} onChange={handleYearChange}>
//         <option value={null}></option>
//         {Object.keys(data).map((year) => (
//           <option key={year} value={year}>
//             {year}
//           </option>
//         ))}
//       </select>
//       <div id="selected-year">
//         {selectedYear ? `Selected year-${selectedYear}` : 'No year selected'}
//       </div>
//       {selectedYear && (
//         <ul>
//           {data[selectedYear].map((movie) => (
//             <li key={movie}>{movie}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   )
// }


// export default App;


import React, { useState } from 'react';
import '../styles/App.css';

const data = {
  '2018': [
    'Avengers 1',
    'Now you see me',
    'Fast and Furious 7'
  ],
  '2019': [
    'Avengers 2',
    'Now you see me 2',
    'Fast and Furious 8'
  ],
  '2020': [
    'Final Avengers Movie(Iron man dies)',
    'Now you finally used Lenskart',
    'Covid Came'
  ],
  '2021': [
    'Covid Returns',
  ],
  '2022': [
    'Adventures of Saiman',
    'Adventures of Shaktiman'
  ]
};

const App = () => {
  const [selectedYear, setSelectedYear] = useState(null);

  const handleChange = (event) => {
    const selectedYear = event.target.value;
    setSelectedYear(selectedYear);
  };

  const movieList = selectedYear ? data[selectedYear].map((movie, index) => <li key={index}>{movie}</li>) : null;

  return (
    <div id="main">
      <select onChange={handleChange}>
        <option value={null}>No year selected</option>
        {Object.keys(data).map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <div id="selected-year">{selectedYear ? `Selected year: ${selectedYear}` : 'No year selected'}</div>
      <ul>{movieList}</ul>
    </div>
  );
};

export default App;
