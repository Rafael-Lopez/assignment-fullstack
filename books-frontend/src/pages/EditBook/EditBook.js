import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { addBook, editBook } from '../../store/actions';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';

const EditBook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { state } = useLocation();
    const book = state ? state.book : null;

    const onFormSubmit = e => {
        e.preventDefault();
        
        const name = e.target.elements.name.value;
        const author = e.target.elements.author.value;
        const publishingYear = e.target.elements.publishingYear.value;
        const isbnNumber = e.target.elements.isbn.value;

        if (book) {
            const id = book.id;
            dispatch( editBook({id, name, author, publishingYear, isbnNumber}) );
        } else {
            dispatch( addBook({name, author, publishingYear, isbnNumber}) );
        }
        
        navigate('/');
    }

    return (
        <Container>
            <Row>
                <Col></Col>
                <Col>
                    <Form onSubmit={onFormSubmit}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Book name" defaultValue={book ? book.name : ''} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="author">
                            <Form.Label>Author</Form.Label>
                            <Form.Control type="text" placeholder="Author" defaultValue={book ? book.author : ''} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="publishingYear">
                            <Form.Label>Publishing Year</Form.Label>
                            <Form.Control type="text" placeholder="Publishing Year" defaultValue={book ? book.publishingYear : ''} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="isbn">
                            <Form.Label>ISBN</Form.Label>
                            <Form.Control type="text" placeholder="ISBN" defaultValue={book ? book.isbnNumber : ''} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
};

export default EditBook;