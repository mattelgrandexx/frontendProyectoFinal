import { Navbar, Nav, Container, Button} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {

  
  
  return (
    <Navbar bg="danger" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          LENO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className='nav-item nav-link'>
              Inicio
            </NavLink>
                <NavLink end to="/administrar" className="nav-item nav-link">
                  Administrar
                </NavLink>
                <NavLink end to="/administrar/registro" className="nav-item nav-link">
                  registro
                </NavLink>
                <Button variant='dark'>
                  Logout
                </Button>
              <NavLink end to="/login" className="nav-item nav-link">
                login
              </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
