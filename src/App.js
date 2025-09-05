import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"



//Componets
import CriarCard from './components/CriarCard/CriarCard';
import Card from './components/Card/Card';
import CaixaDeCards from './components/CaixaDeCards/CaixaDeCards';
import EditCard from './pages/EditCard/EditCard';
import EntradaCampoCriar from "./components/EntradaCampoCriar/EntradaCampoCriar"
import Rodape from './components/RodapeTodo/Rodape';

function App() {
  const localizacaoPagina = useLocation().pathname

  const [cards, setCards] = useState([])
  const [dados, setTdados] = useState({})

  const [seAlgumCardCriou, setSeAlgumCardCriou] = useState(false)

  const [comecoDeDigito, setComecoDeDigito] = useState()

  const [idCardDubleClicado, setidCardDubleClicado] = useState(0)

  const [numCardsConcluidos, setNumCardsConcluidos] = useState(0)
  const [numCardsPendentes, setNumCardsPendentes] = useState(0)
  const [numCardsLixeira, setNumCardsLixeira] = useState(0)


  useEffect(() => {
    if (Object.keys(dados).length > 0) {
      setCards((prevState) => [...prevState, dados])

    }
  }, [dados])

  const removerTarefa = (id) => {
    setCards((prevState) => prevState.filter((card) => card.id !== id))
  }

  useEffect(() => {
    setNumCardsPendentes(cards.length - numCardsConcluidos)
  }, [cards, numCardsConcluidos])


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<EntradaCampoCriar setComecoDeDigito={setComecoDeDigito} />} />

        <Route path='/cards' element={
          <>
            {comecoDeDigito !== "" && !seAlgumCardCriou ? (
              <>
                <CriarCard setTdados={setTdados} comecoDeDigito={comecoDeDigito} />
                <CaixaDeCards>
                  {cards.map((tarefa) => (
                    <Card
                      id={tarefa.id}
                      key={tarefa.id}
                      removerTarefa={removerTarefa}
                      titulo={tarefa.titulo}
                      subtitulo={tarefa.subtitulo}
                      corDeCriacao={tarefa.cor}
                      categoria={tarefa.categoria}
                      setidCardDubleClicado={setidCardDubleClicado}
                      numCardsLixeira={numCardsLixeira}
                      setNumCardsConcluidos={setNumCardsConcluidos}
                      numCardsConcluidos={numCardsConcluidos}
                    />

                  ))}
                </CaixaDeCards>
              </>
            ) : (
              <>
                <EntradaCampoCriar setComecoDeDigito={setComecoDeDigito} />
                <CaixaDeCards>
                  {cards.map((tarefa) => (
                    <Card
                      id={tarefa.id}
                      key={tarefa.id}
                      removerTarefa={removerTarefa}
                      titulo={tarefa.titulo}
                      subtitulo={tarefa.subtitulo}
                      corDeCriacao={tarefa.cor}
                      categoria={tarefa.categoria}
                      setidCardDubleClicado={setidCardDubleClicado}
                      setNumCardsLixeira={setNumCardsLixeira}
                      numCardsLixeira={numCardsLixeira}
                      setNumCardsConcluidos={setNumCardsConcluidos}
                      numCardsConcluidos={numCardsConcluidos} />
                  ))}
                </CaixaDeCards>
              </>
            )}
          </>
        } />
        <Route path='/edit' element={
          <>
            <EditCard cards={cards} idCardDubleClicado={idCardDubleClicado} setCards={setCards} />
            <CaixaDeCards>
              {cards.map((tarefa) => (
                <Card
                  id={tarefa.id}
                  key={tarefa.id}
                  removerTarefa={removerTarefa}
                  titulo={tarefa.titulo}
                  subtitulo={tarefa.subtitulo}
                  corDeCriacao={tarefa.cor}
                  categoria={tarefa.categoria}
                  setidCardDubleClicado={setidCardDubleClicado}
                  setNumCardsLixeira={setNumCardsLixeira} />
              ))}
            </CaixaDeCards>
          </>
        } />
        <Route path='/criar_card' element={<CriarCard setTdados={setTdados} comecoDeDigito={comecoDeDigito} setSeAlgumCardCriou={setSeAlgumCardCriou} />} />

        <Route path='/criar_card' element={<CriarCard setTdados={setTdados} comecoDeDigito={comecoDeDigito} setSeAlgumCardCriou={setSeAlgumCardCriou} />} />

      </Routes>
      {localizacaoPagina === "/cards" || localizacaoPagina === "/edit" ?
        <Rodape
          numCardsLixeira={numCardsLixeira}
          numCardsConcluidos={numCardsConcluidos}
          numCardsPendentes={numCardsPendentes}
        />

        :
        null}

    </div>
  );
}

export default App;
