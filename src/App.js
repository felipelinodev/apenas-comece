import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"


//Componets
import CriarCard from './components/CriarCard/CriarCard';
import Card from './components/Card/Card';
import CaixaDeCards from './components/CaixaDeCards/CaixaDeCards';
import EditCard from './pages/EditCard/EditCard';

function App() {

  const [cards, setCards] = useState([])
  const [dados, setTdados] = useState({})

  const [cardDeletar, setCardDeletar] = useState()

  const [corDeCriacao, setCorDeCriacao] = useState("")

  console.log(cardDeletar)

  useEffect(() => {
    if (Object.keys(dados).length > 0) {
      setCorDeCriacao(dados.cor)
      setCards((prevState) => [...prevState, dados])

    }
  }, [dados])

  const removerTarefa = (id) => {
    setCards((prevState) => prevState.filter((card) => card.id !== id))
  }

  console.log(cardDeletar)

  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path='/' element={
            <>
              {/* <EntradaCampoCriar setValorInput={handleSetValor}/> */}
              <CriarCard setTdados={setTdados} />
              <CaixaDeCards>
                {cards.map((tarefa) => (
                  <Card
                    id={tarefa.id}
                    key={tarefa.id}
                    removerTarefa={removerTarefa}
                    titulo={tarefa.titulo}
                    subtitulo={tarefa.subtitulo}
                    corDeCriacao={corDeCriacao} />
                ))}
              </CaixaDeCards>
            </>
          } />
          <Route path='/edit' element={<EditCard cards={cards} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
