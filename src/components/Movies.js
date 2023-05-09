import Movie from "./Movie";
import { ListGroup } from 'react-bootstrap';

function Movies({ movies, onDeleteMovie }) {

    return (
        <div>
            <h3>Inlagda filmer</h3>
            <ListGroup>
            {movies.map((movie) => (

                <Movie key={movie.title} movie={movie} onDelete={() => onDeleteMovie(movie)}/> 
            ))}
            </ListGroup>
        </div>
    );
}

export default Movies;