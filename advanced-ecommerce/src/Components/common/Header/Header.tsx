import Badge from 'react-bootstrap/Badge';
import styles from './styles.module.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { HeaderBasket } from '@components/ecommerce/HeaderBasket';
import HeaderWishlist from '@components/ecommerce/HeaderWishlist/HeaderWishlist';

const {headerContainer,headerLogo,headerLeftBar}=styles;

export default function Header() {
  return (
    <header>
        <div className={headerContainer}>
            <div className={headerLogo}>
                <h1>our<span><Badge bg="primary">Ecom</Badge></span></h1>
            </div>
            <div className={headerLeftBar}>
                <HeaderWishlist/>
                <HeaderBasket/>
            </div>
            
            
        </div>
          <Navbar expand="lg" className="bg-dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand   as={NavLink} to="/" >Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/categories">Categories</Nav.Link>
                    <Nav.Link as={NavLink} to="/">About</Nav.Link>
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
