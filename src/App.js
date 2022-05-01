import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./App.css";
import Product from "./components/product";
import Header from "./components/header";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const loadProducts = () => {
    return products.map((product, i) => {
      return (
        <>
          <Product data={product} />
          <br />
        </>
      );
    });
  };

  return (
    <Container>
      <Row>
        <Col
          md={{ span: 6, offset: 3 }}
          style={{
            backgroundColor: "#f7f7f7",
            padding: 20,
            border: "1px solid #e7e7e7",
          }}
        >
          <Header />
          <br />
          {products.length > 0 ? loadProducts() : "Loading.."}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
