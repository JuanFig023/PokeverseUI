import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./header.css";
import { Button } from 'react-bootstrap';


function Header({ squadList}){

return(

    <div>
        <Navbar expand="lg" className="navbar-css">
            <Container>
                <Navbar.Brand>Pokéverse | All Pokémon</Navbar.Brand>
                <Button style={{ backgroundColor: '#3abb43' }} className="squad-button" disabled={squadList.length < 2}>Battle</Button>
            </Container>
        </Navbar>
    </div>
    
)}

export default Header