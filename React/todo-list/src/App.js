import './App.css';
import React, {useState} from 'react';
import Input from './components/Input';
import Stuff from './components/Task';


function App() {
  const [list, setList] = useState([]);

  return (
    <div className="App">

      {list.map((task, i) => (
        <Stuff task = {task} setList = {setList} index = {i} list = {list} />
      ))}

      <Input list = {list} setList = {setList} />
    </div>
  );
}

export default App;
