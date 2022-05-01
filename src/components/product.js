import { Card, Button } from "react-bootstrap";
function Product(props) {
  const { data } = props;
  return (
    <Card className="card">
      <Card.Img variant="top" src={data.image} className="card-image" />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>{data.description}</Card.Text>
        <Button variant="primary">{`$${data.price}`}</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
