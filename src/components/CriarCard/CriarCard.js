import "./CriarCard.css"
import MudarCor from "./MudarCor"
import { useEffect, useState, useRef, useMemo } from "react"
import { useNavigate } from "react-router-dom"


export const CriarCard = ({ setTdados, comecoDeDigito }) => {

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
            console.log("deu erro ao mudar cor")
        }
    }, [cor, paletaCores])


    const [estadoButonCriar, setEstadoButonCriar] = useState(false)
    const [titulo, setTitulo] = useState("")
    const refTitulo = useRef()

    const [subtitulo, setSubtitulo] = useState("")


    const handleInputTitulo = (event) => {
        setTitulo(event.target.value)
        setEstadoButonCriar(true)
    }

    const handleInputDescricao = (event) => {
        setSubtitulo(event.target.textContent)
    }

    
    useEffect(() => {
        if(comecoDeDigito !== ""){
            setTitulo(comecoDeDigito)
            refTitulo.current.focus() 
        }
    }, [comecoDeDigito])



    const handleClick = (event) => {
        setId((prevId) => prevId + Math.floor(Math.random() * 50))
        
        setTdados({
            titulo,
            subtitulo,
            cor,
            id,
        })

        setTitulo("")
        setSubtitulo("")

        navigate("/cards")
        event.preventDefault()
    }


    useEffect(() => {
        if (!titulo) {
            setEstadoButonCriar(false)
        } else {
            setEstadoButonCriar(true)
        }
    }, [titulo])

    return (
        <div ref={criarCardRef} className="container-card-criar">
            <form>
                <div className='head-card-criar'>
                    <input type="text" placeholder="Titulo" onChange={handleInputTitulo} ref={refTitulo} value={titulo}/>
                    <MudarCor setCor={setCor} cor={cor} />

                </div>
                <span className="textarea-descricao-card" contentEditable onInput={handleInputDescricao}></span>
                <div className="bottom-card-criar">
                    <span className='tag-card-criar'><p>Faculdade</p></span>
                    {estadoButonCriar && <button className="btn-criar-tarefa" onClick={handleClick}>Criar tarefa</button>}
                    {!estadoButonCriar && <button className="btn-criar-desable" onClick={handleClick} disabled>Criar tarefa</button>}
                </div>
            </form>
        </div>
    )
}

export default CriarCard

