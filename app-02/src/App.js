import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const [Loading, setLoading] = useState(false);//loafing e variavel e stloading é o alterador de estado
  useEffect(()=>{
    console.log("Renderizou");
  }, [Loading]);
  return (
    <div className="App">
      <button onClick={() => setLoading(true)}>{Loading ? "Loading..." :"Salvar"} </button>
    </div>
  );
}

export default App;
