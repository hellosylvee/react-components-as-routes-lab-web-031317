import React from 'react';
import { actors } from '../data';

let actorsArray = actors.map((actor, index) => (
  <div key={index}>
    <h3>Name: {actor.name}</h3>
    <p>Movies:</p>
    <ul>
      {actor.movies.map((movie, index) => (
        <li key={index}>{movie}</li>))}
    </ul>
  </div>
))

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      { actorsArray }
    </div>
  );
};

export default Actors;
