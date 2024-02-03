import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar
      bg='primary'
      variant='dark'
      expand='lg'
      className='mt-4 mb-4 rounded'
    >
      <Navbar.Brand href='/' style={{ marginLeft: '0.5rem' }}>
        Waiter.app
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='ms-auto'>
          <Nav.Link as={NavLink} to='/' style={{ marginLeft: 'auto' }}>
            Home
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
