import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';
import PageFour from './components/PageFour';



function App() {
  return (
    <div className="App">
      <Router>
        <PageOne path='/home'/>
        <PageTwo path='/:num' />
        <PageThree path = '/:word' />
        <PageFour path = '/:word/:wordColor/:backColor' />
      </Router>
    </div>
  );
}

export default App;
