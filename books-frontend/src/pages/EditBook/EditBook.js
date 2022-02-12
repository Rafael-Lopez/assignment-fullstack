import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const EditBook = ( {book} ) => {
    const onFormSubmit = e => {
        e.preventDefault();
        
        const name = e.target.elements.name.value;
        const author = e.target.elements.author.value;
        const publishingYear = e.target.elements.publishingYear.value;
        const isbn = e.target.elements.isbn.value;

        console.log(name, author, publishingYear, isbn);
        console.log(book);
    }

    return (
        <Container>
            <Row>
                <Col></Col>
                <Col>
                    <Form onSubmit={onFormSubmit}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Book name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="author">
                            <Form.Label>Author</Form.Label>
                            <Form.Control type="text" placeholder="Author" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="publishingYear">
                            <Form.Label>Publishing Year</Form.Label>
                            <Form.Control type="text" placeholder="Publishing Year" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="isbn">
                            <Form.Label>ISBN</Form.Label>
                            <Form.Control type="text" placeholder="ISBN" />
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