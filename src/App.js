import logo from './logo.svg';
import './App.css';
import AddMovieForm from './components/AddMovieForm';
import Movies from './components/Movies';
import Movie from './components/Movie';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

//main component of the application
function App() {

  //state for current movie list
  const [movies, setMovies] = useState([]);

  //function used to add a new movie to the collection
  function addNewMovie(newMovie) {
    setMovies(previousMovies => [...movies, newMovie]);
  }

  //function used to delete a movie from the collection
  function deleteMovie(toDelete) {
    setMovies(previousMovies => previousMovies.filter(movie => movie !== toDelete));
  }

  //function used to sort list of movies alphabetically
  function orderAlphabetically() {
    const sorted = [...movies].sort((a, b) => a.title.localeCompare(b.title));
    setMovies(sorted);
  }

  //function used to sort list of movies by grade
  function orderByGrade() {
    const sorted = [...movies].sort((a, b) => b.grade - a.grade);
    setMovies(sorted);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Min filmlista</h1>
        <h2>Lägg till en film</h2>
        <hr></hr>
        {/* Passes the functionality to save a new movie to the form component */}
        <AddMovieForm onSaveMovie={addNewMovie} />
        <hr></hr>
        {/* Passes the movie-state to its own component for rendering
          also passes the functionality to delete a movie*/}
        <Movies id="movieList" movies={movies} onDeleteMovie={deleteMovie} />
        <Button variant="primary" onClick={orderAlphabetically}>Alfabetisk ordning</Button>{' '}
        <Button variant="primary" onClick={orderByGrade}>Betygsordning</Button>{' '}
      </header>
    </div>
  );
}

export default App;
