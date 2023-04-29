import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import MenuIcon from "@mui/icons-material/Menu";
import "./App.css";
import { MyRoutes } from "./routers/routes";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Container fluid>
      <Navbar className="my-navbar" bg="light" expand="50%">
        <Navbar.Brand href="#home">
          <MenuIcon
            className="menu-icon"
            onClick={toggleMenu}
          />
          <span className="logo-text"></span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" style={{ display: showMenu ? "block" : "none" }}>
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
