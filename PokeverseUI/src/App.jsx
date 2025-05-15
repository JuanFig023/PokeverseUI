import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/header/Header.jsx";
import PokemonList from "./components/pokemon/pokemon.jsx";
import Squad from "./components/squad/squad.jsx";

function App(){
  const [squadList, setSquadList] = useState([]);

  let squadComponent = null;
  if(squadList.length > 0){
    squadComponent = <Squad squadList={squadList} setSquadList={setSquadList}/>;
  }

  return (
    <div>
    <Header squadList={squadList}/>
    {squadComponent}
    <PokemonList setSquadList={setSquadList}/>

    </div>
  )
}

export default App
