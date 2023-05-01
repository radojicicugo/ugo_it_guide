import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar(props) {
     return (
          <div>
               <Navbar bg="primary" variant="dark">
                    <Container>
                         <Navbar.Brand href="/"><strong className='logo'>Ugo <span className='spann'>IT</span> Technical Guide</strong></Navbar.Brand>
                         <Nav className="me-auto">
                              <Nav.Link href="/" className='blink'>Home</Nav.Link>
                              <Nav.Link href="/contact" className='blink1'>Contact</Nav.Link>
                              <Nav.Link href="/"></Nav.Link>
                         </Nav>
                    </Container>
               </Navbar>
          </div>
     );
}

export default NavBar;