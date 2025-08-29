import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"



//Componets
import CriarCard from './components/CriarCard/CriarCard';
import Card from './components/Card/Card';
import CaixaDeCards from './components/CaixaDeCards/CaixaDeCards';
import EditCard from './pages/EditCard/EditCard';
import EntradaCampoCriar from "./components/EntradaCampoCriar/EntradaCampoCriar"

function App() {

  const [cards, setCards] = useState([])
  const [dados, setTdados] = useState({})

  const [seAlgumCardCriou, setSeAlgumCardCriou] = useState(false)

  const [comecoDeDigito, setComecoDeDigito] = useState()

  const [idCardDubleClicado, setidCardDubleClicado] = useState(0)

  useEffect(() => {
    if (Object.keys(dados).length > 0) {
      setCards((prevState) => [...prevState, dados])

    }
  }, [dados])

  const removerTarefa = (id) => {
    setCards((prevState) => prevState.filter((card) => card.id !== id))
  }

  cards.map((a) => {
    if (a.id === 16) {
      console.log("CONFERINDO SE MUDOU")
      console.log(a)
    }
  })

  return (
    <div className="App">
      <BrowserRouter>

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
                        setidCardDubleClicado={setidCardDubleClicado} />
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
                        setidCardDubleClicado={setidCardDubleClicado} />
                    ))}
                  </CaixaDeCards>
            </>
          } />
          <Route path='/criar_card' element={<CriarCard setTdados={setTdados} comecoDeDigito={comecoDeDigito} setSeAlgumCardCriou={setSeAlgumCardCriou} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
