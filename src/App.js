import './App.css';
import { useState, useEffect } from 'react';
import { FormatacaoTexto } from './components/FormatacaoTexto/FormatacaoTexto';

//Componets
import EntradaCampoCriar from './components/EntradaCampoCriar/EntradaCampoCriar';
import CriarCard from './components/CriarCard/CriarCard';
import Card from './components/Card/Card';

function App() {

  const [cards, setCards] = useState([])

  const [dados, setTdados] = useState({})

  useEffect(() => {
    if (Object.keys(dados).length > 0) {
      setCards((prevState) => [...prevState, dados])
    }
  }, [dados])


  console.log(cards)

  return (
    <div className="App">
      {/* <EntradaCampoCriar setValorInput={handleSetValor}/> */}
      <CriarCard setTdados={setTdados} />
      {cards.map((tarefa, index) => (
        <Card key={index} titulo={tarefa.titulo} subtitulo={tarefa.subtitulo}/>
      ))}
    </div>
  );
}

export default App;
