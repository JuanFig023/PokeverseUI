import React, { useState, useEffect } from 'react';
import { Card, Row, Button } from 'react-bootstrap';
import "./pokemon.css"

function PokemonList( { setSquadList }) {
    
  const [pokemonList, setPokemonList] = useState([]);
  const [detailedPokemonList, setDetailedPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151');
        const data = await response.json();
        setPokemonList(data.results);

        // Fetch additional data for each Pokémon
        const detailedData = await Promise.all(
          data.results.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            const data = await response.json();
            return data;
          })
        );

        setDetailedPokemonList(detailedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPokemonList();
  }, []);


  const handleAddToSquad = (pokemon) => {
    setSquadList(squad => {
        if (squad.length >= 6) {
            alert("Don't be Greedy! You can only have 6 Pokemon in your squad.");
            return squad;
        }

        if (squad.some(p => p.name === pokemon.name)) {
            alert(`${pokemon.name} is already in your squad!`);
            return squad;
        }

        return [...squad,pokemon];
    });
  };

return(        
    <div>  
        <h1>Pokémon List</h1>
        <Row xs={1} md={2} lg={5} className="g-3 justify-content-center" style={{ marginTop: '20px' }}>
        {detailedPokemonList.map((pokemon, index) => (
            <Card key={index} style={{ width: '13rem', backgroundColor: '#fffccf' }}>
                <Card.Img variant="top" src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <Card.Body>
                        <Card.Title>{pokemon.name}</Card.Title>
                        <Card.Text>
                            {pokemon.moves[0].move.name}
                        </Card.Text>
                        <Button variant="primary" onClick={() => handleAddToSquad(pokemon)} style={{ fontWeight: 'bold'}}>Add</Button>
                    </Card.Body>
            </Card>
        ))}
        </Row>
    </div>
)}

export default PokemonList