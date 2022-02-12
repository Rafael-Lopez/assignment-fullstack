import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';

import Book from "../Book/Book";

const BookList = ( {loading, error, books =[]} ) => {
    if (loading) {
        return <Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner>;
    }

    if (error) {
        return <Alert variant={'danger'}>{error}</Alert>
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