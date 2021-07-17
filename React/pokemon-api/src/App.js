import './App.css';
import React, { useState } from 'react';

function App() {
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=807`)
      .then (response => {return response.json()})
      .then((res) => {setPokemon(res.results)})
      .catch(err => {console.log(err)})
  }

  return (
    <div className="App">
      <button onClick = {fetchPokemon}>Get Pokemon</button>
      {
        pokemon.map((item, i) => <h1 key = {i}> {item.name} </h1>)
      } 
    </div>
  );
}

export default App;
