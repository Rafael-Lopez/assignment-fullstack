import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import axios from 'axios';

const Book = ( {book} ) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDelete= (id) => {
        axios.delete(`/books/${id}`)
            .then( response => {
                setShow(false);
            });
    };

    return (
        <Card className='m-2'>
            <Card.Body>
                <Card.Title>{book.name}</Card.Title>
                <Card.Text>Author: {book.author}</Card.Text>
                <Card.Text>Year: {book.publishingYear}</Card.Text>
                <Card.Text>ISBN: {book.isbnNumber}</Card.Text>
                <Container>
                <Row className="justify-content-md-center">
                    <Col><Button variant="danger" className='w-100' onClick={handleShow}>Delete</Button></Col>
                </Row></Container>
            </Card.Body>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you sure you want to delete this book?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={() => handleDelete(book.id)}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </Card>
    );
}

export default Book;