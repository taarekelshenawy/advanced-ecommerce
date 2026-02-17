import Badge from 'react-bootstrap/Badge';
import styles from './styles.module.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { HeaderBasket } from '@components/ecommerce/HeaderBasket';

const {headerContainer,headerLogo}=styles;

export default function Header() {
  return (
    <header>
        <div className={headerContainer}>
            <div className={headerLogo}>
                <h1>our<span><Badge bg="primary">Ecom</Badge></span></h1>
            </div>
            <HeaderBasket/>
        </div>
          <Navbar expand="lg" className="bg-dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/">Link</Nav.Link>
                </Nav>
                   <Nav>
                    <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                    <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
         </Navbar>

    </header>
  )
}
