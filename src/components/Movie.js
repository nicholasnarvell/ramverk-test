import Button from 'react-bootstrap/Button';
import StarIcon from './StarIcon';
import { ListGroup } from 'react-bootstrap';

//Component that gets a movie and method onDelete as props
function Movie({ movie, onDelete }) {

    //Based on grade input, add correct amount of StarIcon components to our ListGroup.Item
    const stars = [];
    for (let i = 0; i < movie.grade; i++) {
        stars.push(<StarIcon key={i} />)
    }

    return (
        /* Builds out container of movie title, grade-icons and deletebutton.
            button is mapped to onDelete-method that was passed in as prop*/
        <ListGroup.Item id="movieContainer">
            <span id='movieTitle'>{movie.title}</span>
            <div id="starBtnContainer">
                <span id="starSpan">{stars}</span>
                <Button variant="danger" id="deleteBtn" onClick={onDelete}>X</Button>{' '}
            </div>
        </ListGroup.Item>
    );
}


export default Movie;