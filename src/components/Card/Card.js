import "./Card.css"
import MudarCor from "../CriarCard/MudarCor"
import { useState, useRef, useEffect } from "react"


const Card = (props) => {
    const [cor, setCor] = useState("")
    const cardRef = useRef(null)
    const [estadoCheck, setEstadoCheck] = useState(false)

    useEffect(() => {
        setCor(props.corDeCriacao)

        console.log(cardRef.current)

    }, [props.corDeCriacao])

    //Design patern Strategy para reduzir ifs feiosos
    const paletaCores = {
        "cor-1": () => {
            cardRef.current.style.setProperty("--cor-contraste-card", "#D4A360");
            cardRef.current.style.setProperty("--cor-media-card", "#F5CC93");
            cardRef.current.style.setProperty("--cor-base-card", "#fff3e2ff");
            cardRef.current.style.setProperty("--cor-clara-escura-card", "#F6E2C7");
            cardRef.current.style.setProperty("--cor-clara-card", "#fffffeff");
        },
        "cor-2": () => {
            cardRef.current.style.setProperty("--cor-contraste-card", "#c76053ff")
            cardRef.current.style.setProperty("--cor-media-card", "#FDA99E")
            cardRef.current.style.setProperty("--cor-base-card", "#FFE0DB")
            cardRef.current.style.setProperty("--cor-clara-escura-card", "#F4B0A7")
            cardRef.current.style.setProperty("--cor-clara-card", "#FFEEEF")
        },

        "cor-3": () => {
            cardRef.current.style.setProperty("--cor-contraste-card", "#442C6C")
            cardRef.current.style.setProperty("--cor-media-card", "#9080C7")
            cardRef.current.style.setProperty("--cor-base-card", "#ded3f7ff")
            cardRef.current.style.setProperty("--cor-clara-escura-card", "#BFB5E8")
            cardRef.current.style.setProperty("--cor-clara-card", "#F0E9FF")
        },

        "cor-4": () => {
            cardRef.current.style.setProperty("--cor-contraste-card", "#345B4D")
            cardRef.current.style.setProperty("--cor-media-card", "#5E9985")
            cardRef.current.style.setProperty("--cor-base-card", "#DEF4EC")
            cardRef.current.style.setProperty("--cor-clara-escura-card", "#A8DECC")
            cardRef.current.style.setProperty("--cor-clara-card", "#F3FFFA")
        },

        "cor-5": () => {
            cardRef.current.style.setProperty("--cor-contraste-card", "#AA938B")
            cardRef.current.style.setProperty("--cor-media-card", "#C4B4AD")
            cardRef.current.style.setProperty("--cor-base-card", "#F5EBE6")
            cardRef.current.style.setProperty("--cor-clara-escura-card", "#E9D8D0")
            cardRef.current.style.setProperty("--cor-clara-card", "#FFFAF8")

        }
    }

    useEffect(() => {
        try {
            paletaCores[cor]()
        } catch {
            console.log("deu erro ao mudar cor")
        }
    }, [cor])



    const deletarCard = () => {
        props.removerTarefa(props.id)
    }

    const handleCheck = () => {
        // Quando eu checar, muda as classes daquele card em especifico
        console.log("Card concluido")
        setEstadoCheck(!estadoCheck)

    }




    return (
        <>
            <div className='card' ref={cardRef}>
                <div className={estadoCheck ? 'card_head_check' : 'card-head'}>
                    <h1>{props.titulo}</h1>
                    <input type="checkbox" className="checkbox-redondo" onClick={handleCheck}/>
                </div>
                <div className={estadoCheck ? 'card-text-check' : 'card-text'}>
                    <p>{props.subtitulo}</p>
                </div>
                <div className='card-bottom'>
                    <div className='card-left'>
                        <span className='card-tag'><p>Categoria</p></span>
                        {estadoCheck ? (
                            <></>
                        ) : (
                            <>
                                <MudarCor setCor={setCor} cor={cor} />
                            </>
                        ) }
                        
                    </div>
                    <div className='card-delete-bottom' onClick={deletarCard}>
                        <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.39447 14.42C1.95548 14.42 1.57969 14.2637 1.26707 13.9511C0.954462 13.6385 0.798157 13.2627 0.798157 12.8237V2.44763H0V0.851318H3.99078V0.0531616H8.77972V0.851318H12.7705V2.44763H11.9724V12.8237C11.9724 13.2627 11.816 13.6385 11.5034 13.9511C11.1908 14.2637 10.815 14.42 10.376 14.42H2.39447ZM3.99078 11.2274H5.5871V4.04395H3.99078V11.2274ZM7.18341 11.2274H8.77972V4.04395H7.18341V11.2274Z" fill="none" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
