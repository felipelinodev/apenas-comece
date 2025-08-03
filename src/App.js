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

  const [cardDeletar, setCardDeletar] = useState()

  const [corDeCriacao, setCorDeCriacao] = useState("")


  const [comecoDeDigito, setComecoDeDigito] = useState()

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
          <Route path='/' element={<EntradaCampoCriar setComecoDeDigito={setComecoDeDigito}/>} />

          <Route path='/cards' element={
            <>
              {/* {ComecoDeDigito !== "" ? (

              ) : (


              )} */}
              <EntradaCampoCriar setComecoDeDigito={setComecoDeDigito}/>
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
          <Route path='/criar_card' element={<CriarCard setTdados={setTdados} comecoDeDigito={comecoDeDigito}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
