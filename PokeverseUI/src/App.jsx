import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/header/Header.jsx";
import PokemonList from "./components/pokemon/pokemon.jsx";


function App(){
  const [count, setCount] = useState(0)

  return (
    <div>
    <Header />
    <PokemonList />

    </div>
  )
}

export default App
