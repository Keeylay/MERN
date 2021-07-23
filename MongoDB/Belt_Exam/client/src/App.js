import { Router } from '@reach/router';
import './App.css';
import AllPets from './components/AllPets';
import AddPet from './components/PetForm';
import OnePet from './components/OnePet';
import EditPet from './components/EditPet';

function App() {
  return (
    <div className="App">
      <h1>Pet Shelter</h1>
      <Router>
        <AllPets path = "/" />
        <AddPet path = "/api/pet/new" />
        <OnePet path = '/api/pet/:_id' />
        <EditPet path = '/api/pet/edit/:_id' />
      </Router>
    </div>
  );
}

export default App;
