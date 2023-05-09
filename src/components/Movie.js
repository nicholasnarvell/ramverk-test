import Button from 'react-bootstrap/Button';
import StarIcon from './StarIcon';
import { ListGroup } from 'react-bootstrap';

function Movie({ movie, onDelete }) {

    const stars = [];
    for (let i = 0; i < movie.grade; i++) {
        stars.push(<StarIcon/>)
    }

    return (
        <ListGroup.Item>
            <span>{movie.title}</span>
            <span>{stars}</span>
            <Button variant="danger" onClick={onDelete}>X</Button>{' '}
        </ListGroup.Item>
    );
}



export default Movie;