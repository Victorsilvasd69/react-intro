import logo from './logo.svg';
import './App.css';
import Header from './Header';
import {useState} from 'react';

function App() {

  const [contador, setContador] = useState(0);
  function increment(){
    setContador(contador+1);
  }
  

  return (
    <div className="App">
    <Header title="Header Param"/>
      <header className="App-header"/>
      
        <img src={logo} className="App-logo" alt="logo" />

      <input type="button"value="Clique" onClick={increment} />
        <p>{contador}</p> cliques!
    </div>
  );
}

export default App;
