import { Navbar, Nav, Container } from "react-bootstrap";
import "./App.css";
import { MyRoutes } from "./routers/routes";

function App() {
  return (
    <Container fluid>
<Navbar className="my-navbar" bg="light" expand="lg">
        <Navbar.Brand href="#home">Mi aplicación</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Página 1</Nav.Link>
            <Nav.Link href="#link">Página 2</Nav.Link>
            <Nav.Link href="#link">Página 3</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <MyRoutes />
    </Container>
  );
}


export default App;