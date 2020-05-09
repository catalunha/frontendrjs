import React,{useState} from 'react';
import Header from './components/Header'

function App() {
  const [counter,setCounter] = useState(0)
  //Array[valor,funcaoDeAtualizacao]
  function increment() {
    setCounter(counter + 1)
  }
  return (
    <div>
      <Header>Contador: {counter} </Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default App;
