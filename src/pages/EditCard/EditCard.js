import "./EditCard.css"
import MudarCor from "../../components/MudarCor/MudarCor"
import CriarCategoria from "../../components/CriarCategoria/CriarCategoria"


import { useEffect, useState, useRef, useMemo } from "react"
import { useNavigate } from "react-router-dom"


const EditCard = ({ cards, setCards, idCardDubleClicado, categoriasSalvas }) => {
    const id_card_edit = idCardDubleClicado

    const navigate = useNavigate()

    const [cor, setCor] = useState("cor-5")
    const criarCardRef = useRef(null)



    //Design patern Strategy para reduzir ifs feiosos
    const paletaCores = useMemo(() => ({
        "cor-1": () => {
            criarCardRef.current.style.setProperty("--cor-contraste-editar-card", "#D4A360");
            criarCardRef.current.style.setProperty("--cor-media-editar-card", "#F5CC93");
            criarCardRef.current.style.setProperty("--cor-base-editar-card", "#fff3e2ff");
            criarCardRef.current.style.setProperty("--cor-clara-escura-editar-card", "#F6E2C7");
            criarCardRef.current.style.setProperty("--cor-clara-editar-card", "#fffffeff");
        },
        "cor-2": () => {
            criarCardRef.current.style.setProperty("--cor-contraste-editar-card", "#c76053ff")
            criarCardRef.current.style.setProperty("--cor-media-editar-card", "#FDA99E")
            criarCardRef.current.style.setProperty("--cor-base-editar-card", "#FFE0DB")
            criarCardRef.current.style.setProperty("--cor-clara-escura-editar-card", "#F4B0A7")
            criarCardRef.current.style.setProperty("--cor-clara-editar-card", "#FFEEEF")

        },

        "cor-3": () => {
            criarCardRef.current.style.setProperty("--cor-contraste-editar-card", "#442C6C")
            criarCardRef.current.style.setProperty("--cor-media-editar-card", "#9080C7")
            criarCardRef.current.style.setProperty("--cor-base-editar-card", "#ded3f7ff")
            criarCardRef.current.style.setProperty("--cor-clara-escura-editar-card", "#BFB5E8")
            criarCardRef.current.style.setProperty("--cor-clara-editar-card", "#F0E9FF")

        },

        "cor-4": () => {
            criarCardRef.current.style.setProperty("--cor-contraste-editar-card", "#345B4D")
            criarCardRef.current.style.setProperty("--cor-media-editar-card", "#5E9985")
            criarCardRef.current.style.setProperty("--cor-base-editar-card", "#DEF4EC")
            criarCardRef.current.style.setProperty("--cor-clara-escura-editar-card", "#A8DECC")
            criarCardRef.current.style.setProperty("--cor-clara-editar-card", "#F3FFFA")

        },

        "cor-5": () => {
            criarCardRef.current.style.setProperty("--cor-contraste-criar-card", "#AA938B")
            criarCardRef.current.style.setProperty("--cor-media-criar-card", "#C4B4AD")
            criarCardRef.current.style.setProperty("--cor-base-criar-card", "#F5EBE6")
            criarCardRef.current.style.setProperty("--cor-clara-escura-criar-card", "#E9D8D0")
            criarCardRef.current.style.setProperty("--cor-clara-editar-card", "#FFFAF8")
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

    const [editCardClicado] = useState(false)


    useEffect(() => {
        cards.forEach((tarefa) => {
            if (tarefa.id === id_card_edit) {
                setCor(tarefa.cor)
                setTitulo(tarefa.titulo)
                setCategoria(tarefa.categoria)
                setSubtituloEdit(tarefa.subtitulo)

                return
            }
        })

    }, [cards, id_card_edit])


    useEffect(() => {
        const handdleDoubleClick = () => {
            if (!editCardClicado) {
                navigate("/cards")
            }
        }

        document.addEventListener("dblclick", handdleDoubleClick)

        return () => {
            document.removeEventListener("dblclick", handdleDoubleClick)
        }

    }, [navigate, editCardClicado])


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
                <div className='head-card-editar'>
                    <input type="text" placeholder="Titulo" onChange={handleInputTitulo} ref={refTitulo} value={titulo} />
                    <MudarCor setCor={setCor} cor={cor} />

                </div>
                <span className="textarea-descricao-editar" contentEditable onInput={handleInputDescricao}>{subtituloEdit !== "" ? subtituloEdit : null}</span>
                <div className="bottom-card-editar">
                    {/* <span className='tag-card-criar'><p>Categoria</p></span> */}
                    <CriarCategoria cor={cor} setCategoria={setCategoria} categoria={categoria} categoriasSalvas={categoriasSalvas} />
                    {estadoButonCriar && <button className="btn-editar-tarefa" onClick={handleSave}>Editar</button>}
                    {!estadoButonCriar && <button className="btn-editar-desable" onClick={handleSave} disabled>Editar</button>}

                </div>
            </form>
        </div>
    )
}


export default EditCard

