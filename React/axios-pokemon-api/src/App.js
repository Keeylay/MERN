import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect( () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=807`)
      // .then (response => {return response.json()})
      .then((res) => {
        console.log(res);
        setPokemon(res.data.results)})
      .catch(err => {console.log(err)})
  }, []);

  return (
    <div className="App">
      <button>Get Pokemon</button>
      {
        pokemon.map((item, i) => <h1 key = {i}> {item.name} </h1>)
      }
    </div>
  );
}

export default App;