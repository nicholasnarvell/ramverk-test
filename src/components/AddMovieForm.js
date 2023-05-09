import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function AddMovieForm({ onSaveMovie }) {
    const [title, setTitle] = useState("");
    const [grade, setGrade] = useState("Välj betyg här...");

    const saveMovie = (event) => {
        event.preventDefault();
        console.log(title, grade);
        if (title === "") {

            alert("Enter a valid title")

        } else if (isNaN(grade)) {

            alert("Enter a valid grade")

        } else {
            const newMovie = { title: title, grade: grade };
            onSaveMovie(newMovie);

            setTitle("");
            setGrade("Välj betyg här...");
        }
    }

    return (
        <Form onSubmit={saveMovie}>
            <Form.Group className="mb-3" controlId="movieBasic">
                <Form.Label>Titel:</Form.Label>
                <Form.Control type="text" value={title} placeholder="Titel här..." onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Betyg:</Form.Label>
                <Form.Select value={grade} onChange={(e) => setGrade(e.target.value)}>
                    <option disabled>Välj betyg här...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </Form.Select>
            </Form.Group>

            <Button variant="success" type="submit">Spara film</Button>{' '}
        </Form>
    );
}

export default AddMovieForm;