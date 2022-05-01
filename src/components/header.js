import { Container, Navbar } from "react-bootstrap";
function Header() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Products Available</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
