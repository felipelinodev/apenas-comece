import './App.css';
import { useState, useEffect } from 'react';

//Componets
import CriarCard from './components/CriarCard/CriarCard';
import Card from './components/Card/Card';
import CaixaDeCards from './components/CaixaDeCards/CaixaDeCards';

function App() {

  const [cards, setCards] = useState([])
  const [dados, setTdados] = useState({})
  

  useEffect(() => {
    if (Object.keys(dados).length > 0) {
      setCards((prevState) => [...prevState, dados])
    }
  }, [dados])


  return (
    <div className="App">
      {/* <EntradaCampoCriar setValorInput={handleSetValor}/> */}
      <CriarCard setTdados={setTdados}/>
      <CaixaDeCards>
        {cards.map((tarefa, index) => (
        <Card key={index} titulo={tarefa.titulo} subtitulo={tarefa.subtitulo}/>
      ))}
      </CaixaDeCards>
      
    </div>
  );
}

export default App;
