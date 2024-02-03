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
      <Nav className='ms-auto'>
        <Nav.Link
          as={NavLink}
          to='/'
          style={{ marginLeft: 'auto', marginRight: '0.5rem' }}
        >
          Home
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
