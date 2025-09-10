import "./EditCard.css"
import MudarCor from "./MudarCor"
import CriarCategoria from "../../components/CriarCategoria/CriarCategoria"


import { useEffect, useState, useRef, useMemo } from "react"
import { useNavigate, useLocation } from "react-router-dom"


const EditCard = ({ cards, setCards, idCardDubleClicado }) => {


    const id_card_edit = idCardDubleClicado

    const navigate = useNavigate()

    const [id, setId] = useState(0)

    const [cor, setCor] = useState("cor-5")
    const criarCardRef = useRef(null)



    //Design patern Strategy para reduzir ifs feiosos
    const paletaCores = useMemo(() => ({
        "cor-1": () => {
            criarCardRef.current.style.setProperty("--cor-contraste-criar-card", "#D4A360");
            criarCardRef.current.style.setProperty("--cor-media-criar-card", "#F5CC93");
            criarCardRef.current.style.setProperty("--cor-base-criar-card", "#fff3e2ff");
            criarCardRef.current.style.setProperty("--cor-clara-escura-criar-card", "#F6E2C7");
            criarCardRef.current.style.setProperty("--cor-clara-criar-card", "#fffffeff");
        },
        "cor-2": () => {
            criarCardRef.current.style.setProperty("--cor-contraste-criar-card", "#c76053ff")
            criarCardRef.current.style.setProperty("--cor-media-criar-card", "#FDA99E")
            criarCardRef.current.style.setProperty("--cor-base-criar-card", "#FFE0DB")
            criarCardRef.current.style.setProperty("--cor-clara-escura-criar-card", "#F4B0A7")
            criarCardRef.current.style.setProperty("--cor-clara-criar-card", "#FFEEEF")

        },

        "cor-3": () => {
            criarCardRef.current.style.setProperty("--cor-contraste-criar-card", "#442C6C")
            criarCardRef.current.style.setProperty("--cor-media-criar-card", "#9080C7")
            criarCardRef.current.style.setProperty("--cor-base-criar-card", "#ded3f7ff")
            criarCardRef.current.style.setProperty("--cor-clara-escura-criar-card", "#BFB5E8")
            criarCardRef.current.style.setProperty("--cor-clara-criar-card", "#F0E9FF")

        },

        "cor-4": () => {
            criarCardRef.current.style.setProperty("--cor-contraste-criar-card", "#345B4D")
            criarCardRef.current.style.setProperty("--cor-media-criar-card", "#5E9985")
            criarCardRef.current.style.setProperty("--cor-base-criar-card", "#DEF4EC")
            criarCardRef.current.style.setProperty("--cor-clara-escura-criar-card", "#A8DECC")
            criarCardRef.current.style.setProperty("--cor-clara-criar-card", "#F3FFFA")

        },

        "cor-5": () => {
            criarCardRef.current.style.setProperty("--cor-contraste-criar-card", "#AA938B")
            criarCardRef.current.style.setProperty("--cor-media-criar-card", "#C4B4AD")
            criarCardRef.current.style.setProperty("--cor-base-criar-card", "#F5EBE6")
            criarCardRef.current.style.setProperty("--cor-clara-escura-criar-card", "#E9D8D0")
            criarCardRef.current.style.setProperty("--cor-clara-criar-card", "#FFFAF8")
        },


    }), [])


    useEffect(() => {
        try {
            paletaCores[cor]()
        } catch {
        }
    }, [cor, paletaCores])


    const [estadoButonCriar, setEstadoButonCriar] = useState(false)
    const [titulo, setTitulo] = useState("")

    const refTitulo = useRef()

    const [subtitulo, setSubtitulo] = useState("")
    const [subtituloEdit, setSubtituloEdit] = useState("")
    const [categoria, setCategoria] = useState("")
    const [printTituo, setPrintTitulo] = useState(false)

    const [editCardClicado, setEditCardClicado] = useState(false)
    const localizacaoPagina = useLocation().pathname



    useEffect(() => {
        cards.map((tarefa) => {
            if (tarefa.id === id_card_edit) {
                setCor(tarefa.cor)
                setTitulo(tarefa.titulo)
                setCategoria(tarefa.categoria)
                setSubtituloEdit(tarefa.subtitulo)
            }
        })
    }, [])


    useEffect(() => {
        const handdleDoubleClick = () => {
            if(!editCardClicado){
                navigate("/cards")}
        }

        document.addEventListener("dblclick", handdleDoubleClick)
        
        return () => {
            document.removeEventListener("dblclick", handdleDoubleClick)
        }

    }, [navigate])


    const handleInputTitulo = (event) => {
        setTitulo(event.target.value)
        setEstadoButonCriar(true)
    }

    const handleInputDescricao = (event) => {
        setSubtitulo(event.target.textContent)
    }


    

    const handleSave = (event) => {
        event.preventDefault()
        if (!setCards) {
            console.error("A função setCards não foi passada como prop para EditCard!");
            return;
        }

        const updatedCards = cards.map((tarefa) => {
            if (tarefa.id === idCardDubleClicado) {
                return {
                    ...tarefa,
                    titulo,
                    subtitulo,
                    cor,
                    categoria,
                }
            }
            return tarefa
        })

        setCards(updatedCards)
        navigate("/cards")
    }


    useEffect(() => {
        if (!titulo) {
            setEstadoButonCriar(false)
        } else {
            setEstadoButonCriar(true)
        }
    }, [titulo])


    
    
    return (
        <div ref={criarCardRef} className="container-card-ediar">
            <form>
                <div className='head-card-criar'>
                    <input type="text" placeholder="Titulo" onChange={handleInputTitulo} ref={refTitulo} value={titulo} />
                    <MudarCor setCor={setCor} cor={cor} />

                </div>
                <span className="textarea-descricao-editar" contentEditable onInput={handleInputDescricao}>{subtituloEdit != "" ? subtituloEdit : null}</span>
                <div className="bottom-card-criar">
                    {/* <span className='tag-card-criar'><p>Categoria</p></span> */}
                    <CriarCategoria cor={cor} setCategoria={setCategoria} categoria={categoria} />
                    {estadoButonCriar && <button className="btn-criar-tarefa" onClick={handleSave}>Editar</button>}
                    {!estadoButonCriar && <button className="btn-criar-desable" onClick={handleSave} disabled>Editar</button>}
                    
                </div>
            </form>
        </div>
    )
}

export default EditCard

