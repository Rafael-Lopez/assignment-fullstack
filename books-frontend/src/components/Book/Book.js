import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Book = ( {book} ) => {
    return (
        <Card className='m-2'>
            <Card.Body>
                <Card.Title>{book.name}</Card.Title>
                <Card.Text>Author: {book.author}</Card.Text>
                <Card.Text>Year: {book.publishingYear}</Card.Text>
                <Card.Text>ISBN: {book.isbnNumber}</Card.Text>
                <Button variant="primary">View</Button>
            </Card.Body>
        </Card>
    );
}

export default Book;