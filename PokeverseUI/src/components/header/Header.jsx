import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./header.css";


function Header(){

return(

    <div>
        <Navbar expand="lg" className="navbar-css">
            <Container>
                <Navbar.Brand>Pokeverse | All Pokemon</Navbar.Brand>
            </Container>
        </Navbar>
    </div>
    
)}

export default Header