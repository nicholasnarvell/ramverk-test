import Movie from "./Movie";
import { ListGroup } from 'react-bootstrap';

//component used to render the list of movies, updated when state of movies changes
//passes the functionality to delete a movie to every individual movie-component
function Movies({ movies, onDeleteMovie }) {

    return (
        <>
            <h3>Inlagda filmer</h3>
            <ListGroup>
                {movies.map((movie) => (
                    <Movie key={movie.title} movie={movie} onDelete={() => onDeleteMovie(movie)} />
                ))}
            </ListGroup>
        </>
    );
}

export default Movies;