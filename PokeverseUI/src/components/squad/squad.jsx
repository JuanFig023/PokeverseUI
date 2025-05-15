import React, { useState, useEffect } from 'react';
import { Card, Row, Button } from 'react-bootstrap';

function Squad ( { squadList, setSquadList }) {


const handleSquadDelete = (pokemonToDelete) => {
  setSquadList(squad => squad.filter(pokemon => pokemon.name !== pokemonToDelete.name));
};


return (
    <div>
        <h1>Your Squad!</h1>
        <Row xs={1} md={2} lg={5} className="g-3 justify-content-center" style={{ marginBottom: '20px', marginTop: '20px' }}>
        {squadList.map((pokemonSquad, index) => (
            <Card key={index} style={{ width: '13rem', backgroundColor: '#fffccf' }}>
                <Card.Img variant="top" src={pokemonSquad.sprites.front_default} alt={pokemonSquad.name} />
                    <Card.Body>
                        <Card.Title>{pokemonSquad.name}</Card.Title>
                        <Card.Text>
                            {pokemonSquad.moves[0].move.name}
                        </Card.Text>
                        <Button variant="danger" onClick={() => handleSquadDelete(pokemonSquad)} style={{ fontWeight: 'bold'}}>Delete</Button>
                    </Card.Body>
            </Card>
        ))}
        </Row>
    </div>
)}

export default Squad