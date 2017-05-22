import React from 'react';
import { directors } from '../data';

let directorsArray = directors.map((director, index) => (
  <div key={index}>
    <h3>{director.name}</h3>
    <ul>
      {director.movies.map((movie, index) => (
        <li key={index}>{movie}</li>
      ))}
    </ul>
  </div>
))

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      { directorsArray }
    </div>
  );
}

export default Directors
