import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';

import Book from "../Book/Book";

const BookList = () => {
    const [ books, setBooks ] = useState([]);

    useEffect(() => {
        axios.get( process.env.REACT_APP_API_URL + "/books")
            .then( response => {
                setBooks( response.data );
            }
        )}, []);

    if (books.length === 0) {
        return <Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner>;
    }

    return (
        <Container>
            <Row sm={3}>
                { books.map( book => { return (
                    <Col key={book.id}><Book book={book} /></Col>
                    )})
                }            
            </Row>
        </Container>
    );
}

export default BookList;