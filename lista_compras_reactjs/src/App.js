import React, { useState } from "react";
import './App.css';

function App() {
  const [Lista, setLista] = useState(""); 
  const [ItensLista, setItensLista] = useState([]); 

  function adicionar(event) {
    const inputLista = event.target.value;
    
    setLista(inputLista); 
  }

  
  function ItemCompra(event) {
    event.preventDefault(); 

    if (!Lista) { 
      return
    };
    
    setItensLista([...ItensLista, Lista]);
    setLista(""); 
  }

    function Excluir(event){
      const inputItensLista = event.target.value

      setItensLista(inputItensLista);
    }

  return (
    <div className="add">
      <h1>Lista de Compras</h1>
      <form onSubmit={ItemCompra}>
        <input type="text" placeholder="Adicione seu item" onChange={adicionar} value={Lista} />

        <button type="submit">Adicionar</button>
      
      </form>

      <div className="add-item" >
        {ItensLista.map((item) => (
          <li>item</li>
        ))}
      </div>
      <button type="submit">Excluir</button>
      <inputItensLista onChange={Excluir} value={setItensLista} />
    </div>
  );

}

export default App;
