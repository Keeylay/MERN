import './App.css';
import React, {useState} from 'react';
import HookForm from "./components/HookForm";
import HookData from './components/HookData';

function App() {
  const [state, setState] = useState ({
    firstName: "",
    lastName: "",
    email:"",
    password:"",
    confirmPassword:""
  });

  return (
    <div className="App">
      <HookForm inputs={state} setInputs = {setState} />
      <HookData data={state}/>
    </div>
  );
}

export default App;
