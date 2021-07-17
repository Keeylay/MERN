import { Router } from '@reach/router';
import React, { useState } from 'react';
import './App.css';
import Search from './components/Search';
import PeopleDisplay from './components/PeopleDisplay';
import PlanetDisplay from './components/PlanetDisplay';

function App() {
  const [personData, setPersonData] = useState([]);
  const [planetData, setPlanetData] = useState([]);

  const personSearch = (data) => {
    setPersonData( [data] );
    let tempUrl = data.homeworld;
    fetch(tempUrl)
      .then(res => {
        res.json().then(json => {
          data.homeworldName = json.name 
          setPersonData( [data] );
          setPlanetData([]);
        })
      })
    }

    const planetSearch = (data) => {
      setPlanetData( [data] );
      setPersonData([]);
    }

  return (
    <div className="App">
      <div>
        <Search onPersonSearch = {personSearch} onPlanetSearch = {planetSearch} />
      <div>
        <Router>
          <PeopleDisplay path = '/person/:id' personData = {personData} onPlanetSearch = {planetSearch} />
          <PlanetDisplay path = '/planet/:id' planetData = {planetData} />  
        </Router>
      </div>
    </div>
  </div>
  );
}

export default App;
