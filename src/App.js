import logo from './logo.svg';
import './App.css';
import AddMovieForm from './components/AddMovieForm';
import Movies from './components/Movies';
import Movie from './components/Movie';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';


function App() {

  const [movies, setMovies] = useState([]);

  function addNewMovie(newMovie) {
    setMovies(previousMovies => [...movies, newMovie]);
    console.log(movies);
  }

  function deleteMovie(toDelete) {
    setMovies(previousMovies => previousMovies.filter(movie => movie !== toDelete));
  }

  function orderAlphabetically() {
    const sorted = [...movies].sort((a, b) => a.title.localeCompare(b.title));
    setMovies(sorted);
  }

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
        <AddMovieForm onSaveMovie={addNewMovie}>

        </AddMovieForm>
        <Movies movies={movies} onDeleteMovie={deleteMovie}>
        </Movies>
        <Button variant="primary" onClick={orderAlphabetically}>Alfabetisk ordning</Button>{' '}
        <Button variant="primary" onClick={orderByGrade}>Betygsordning</Button>{' '}
      </header>
    </div>
  );
}

export default App;
