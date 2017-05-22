import React from 'react';
import { movies } from '../data';


const Movies = () => {
  const moviesArray = movies.map((movie, index) => (
      <div key={index}>
          <h3>Name: {movie.title}</h3>
          <p>Time: {movie.time}</p>
          <p>Genres:</p>
          <ul>
              {movie.genres.map((genre, index) => (
                  <li key={index}>{genre}</li>
              ))}
          </ul>
      </div>
  ))

  // movies.map(function(movie){
  //   <div>
  //     {movie.title}
  //     {movie.time}
  //     <ul>
  //       {movie.genres.map(function(genre){<li>{genre}</li>})}
  //     </ul>
  //   </div>
  // })

  return (
    <div>
      <h1>Movies Page</h1>
      { moviesArray }
    </div>
  );
};

export default Movies;
