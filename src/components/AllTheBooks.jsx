import { Container, Card, Button, Row } from "react-bootstrap";
import fantasy from "../Json/fantasy.json";

const AllTheBooks = () => (
  <Container className="d-flex">
    <Row className="row-cols-3">
      {fantasy.map((book) => (
        <Card className="mx-3 my-3" key={book.asin} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.Title}</Card.Title>
            <Card.Text>{book.price}$</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </Row>
  </Container>
);

export default AllTheBooks;
