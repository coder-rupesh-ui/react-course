import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      // const res = await fetch('http://swapi.dev/api/film/'); // wrong api just to imitate failure
      // const res = await fetch('http://swapi.dev/api/films/');
      const res = await fetch('https://react-http-714a7-default-rtdb.firebaseio.com/movies.json');
      if (!res.ok) {
        throw new Error('Something went wrong');
      }
      const data = await res.json();
      const loadedMovies = [];
      for(let key in data) {
        loadedMovies.push({
          episode_id: key,
          title: data[key].title,
          releaseDate: data[key].releaseDate,
          opening_crawl: data[key].openingText
        });
      }
      setMovies(loadedMovies);
    } catch (err) {
      setError(err.message);

    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  async function addMovieHandler(movie) {
    const res = await fetch('https://react-http-714a7-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = res.json();
    console.log(data);
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler}></AddMovie>
      </section>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>No Movies to show.</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
