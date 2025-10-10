import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom"



//Componets
import CriarCard from './components/CriarCard/CriarCard';
import Card from './components/Card/Card';
import CaixaDeCards from './components/CaixaDeCards/CaixaDeCards';
import EditCard from './pages/EditCard/EditCard';
import EntradaCampoCriar from "./components/EntradaCampoCriar/EntradaCampoCriar"
import Rodape from './components/RodapeTodo/Rodape';
import TodoMenu from './components/TodoMenu/TodoMenu';
import ProgressoTodo from './components/ProgressoTodo/ProgressoTodo';

//CustomHooks
import { SalvarLocalStorage, PegarDadosLocalStorage } from "./hooks/LocalStorageManager"

function App() {
  const localizacaoPagina = useLocation().pathname


  // States 
  const [cards, setCards] = useState([{
    id: 1,
    categoria: "Começo",
    cor: "cor-1",
    titulo: "Tarefa 1 – Refletir",
    subtitulo: "Pense sobre o que é realmente importante para você — não o que a sociedade diz que você precisa.",
    concluido: false
  },
  {
    id: 2,
    categoria: "Começo",
    cor: "cor-2",
    titulo: "Tarefa 2 – Desconstrução",
    subtitulo: "Liberte-se da ideia de que existe um \"caminho perfeito\".\nSiga o que faz sentido para você agora, aquilo que está alinhado com seus propósitos.",
    concluido: false
  },
  {
    id: 3,
    categoria: "Começo",
    cor: "cor-4",
    titulo: "Tarefa 3 – Apenas Comece",
    subtitulo: "Respire fundo, sinta-se leve e dê o primeiro passo.",
    concluido: false
  }])
  const [dados, setTdados] = useState({})

  const [categoriasSalvas, setCategoriasSalvas] = useState([])

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

  const atualizarEstadoConcluido = (id, concluido) => {
    setCards((prevState) => 
      prevState.map((card) => 
        card.id === id ? { ...card, concluido } : card
      )
    )
  }

  useEffect(() => {
    const cardsConcluidos = cards.filter(card => card.concluido).length
    setNumCardsConcluidos(cardsConcluidos)
    setNumCardsPendentes(cards.length - cardsConcluidos)
  }, [cards])

  // const [loadingDados, setLoadingDados] = useState(false)




  useEffect(() => {
    const dadosSalvos = PegarDadosLocalStorage("todosCards")
    const categoriasLocal = PegarDadosLocalStorage("todasCategorias")
    const numCardsConcluidosLocal = PegarDadosLocalStorage("numCardsConcluidos")
    const numCardsPendentesLocal = PegarDadosLocalStorage("numCardsPendentes")

    if (dadosSalvos) {
      // Garantir que todos os cards tenham a propriedade 'concluido'
      const cardsComConcluido = dadosSalvos.map(card => ({
        ...card,
        concluido: card.concluido !== undefined ? card.concluido : false
      }))
      setCards(cardsComConcluido)
      // setLoadingDados(true)
    }

    if (categoriasLocal) {
      setCategoriasSalvas(categoriasLocal)
    }

    if (numCardsConcluidosLocal !== null) {
      setNumCardsConcluidos(numCardsConcluidosLocal)
    }

    if (numCardsPendentesLocal !== null) {
      setNumCardsPendentes(numCardsPendentesLocal)
    }
  }, [])

  // Sempre que cards mudar, salvar no localStorage
  useEffect(() => {
    SalvarLocalStorage(cards, categoriasSalvas, numCardsConcluidos, numCardsPendentes)
  }, [cards, categoriasSalvas, numCardsConcluidos, numCardsPendentes])


  return (
    <div className="App">
      {localizacaoPagina === "/cards" || localizacaoPagina === "/edit" || localizacaoPagina === "/criar_card" ?
        <TodoMenu setCategoriasSalvas={setCategoriasSalvas} categoriasSalvas={categoriasSalvas} /> : null}
      <div className='colum-um-app'>
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
                        concluido={tarefa.concluido}
                        setidCardDubleClicado={setidCardDubleClicado}
                        numCardsLixeira={numCardsLixeira}
                        setNumCardsConcluidos={setNumCardsConcluidos}
                        numCardsConcluidos={numCardsConcluidos}
                        atualizarEstadoConcluido={atualizarEstadoConcluido}
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
                        concluido={tarefa.concluido}
                        setidCardDubleClicado={setidCardDubleClicado}
                        setNumCardsLixeira={setNumCardsLixeira}
                        numCardsLixeira={numCardsLixeira}
                        setNumCardsConcluidos={setNumCardsConcluidos}
                        numCardsConcluidos={numCardsConcluidos}
                        atualizarEstadoConcluido={atualizarEstadoConcluido} />
                    ))}
                  </CaixaDeCards>
                </>
              )}
            </>
          } />
          <Route path='/edit' element={
            <>
              <EditCard cards={cards} idCardDubleClicado={idCardDubleClicado} setCards={setCards} categoriasSalvas={categoriasSalvas} />
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
                    concluido={tarefa.concluido}
                    setidCardDubleClicado={setidCardDubleClicado}
                    setNumCardsLixeira={setNumCardsLixeira}
                    setNumCardsConcluidos={setNumCardsConcluidos}
                    numCardsConcluidos={numCardsConcluidos}
                    atualizarEstadoConcluido={atualizarEstadoConcluido} />
                ))}
              </CaixaDeCards>
            </>
          } />
          <Route path='/criar_card' element={
            <CriarCard setTdados={setTdados}
              comecoDeDigito={comecoDeDigito}
              setSeAlgumCardCriou={setSeAlgumCardCriou}
              categoriasSalvas={categoriasSalvas} />} />

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
      {localizacaoPagina === "/cards" || localizacaoPagina === "/edit" || localizacaoPagina === "/criar_card" ?
        <ProgressoTodo numCardsConcluidos={numCardsConcluidos} totalCards={cards.length} /> : null}

    </div>

  );
}

export default App;
