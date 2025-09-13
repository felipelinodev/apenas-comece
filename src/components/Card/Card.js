import "./Card.css"
import MudarCor from "../MudarCor/MudarCor"
import { useState, useRef, useEffect, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { LixeiraSvg } from "../../svg/LixeiraSvg"


const Card = ({ titulo, corDeCriacao, removerTarefa, subtitulo, id, categoria, setidCardDubleClicado, setNumCardsLixeira, setNumCardsConcluidos }) => {


    const [cor, setCor] = useState("")
    const cardRef = useRef(null)
    const [estadoCheck, setEstadoCheck] = useState(false)

    const navigate = useNavigate()


    useEffect(() => {
        setCor(corDeCriacao)

    }, [corDeCriacao])

    //Design patern Strategy para reduzir ifs feiosos

    const paletaCores = useMemo(() => ({
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
    }), [])

    useEffect(() => {
        try {
            paletaCores[cor]()
        } catch {
        }
    }, [cor, paletaCores])



    const deletarCard = () => {
        removerTarefa(id)
        setNumCardsLixeira((prevNumCardLixeira) => prevNumCardLixeira + 1)

        if (estadoCheck) {
            setNumCardsConcluidos((prevNumCardsConcluidos) => prevNumCardsConcluidos - 1)
        }

    }

    const handleCheck = () => {
        // Quando eu checar, muda as classes daquele card em especifico
        setEstadoCheck(!estadoCheck)

        if (!estadoCheck) {
            setNumCardsConcluidos((prevNumCardsConcluidos) => prevNumCardsConcluidos + 1)
        } else {
            setNumCardsConcluidos((prevNumCardsConcluidos) => prevNumCardsConcluidos - 1)
        }


    }

    const handleDoubleClick = () => {
        if (!estadoCheck) {
            setidCardDubleClicado(id)
            navigate("/edit")
        }

    }




    return (
        <>
            <div className='card' ref={cardRef} onDoubleClick={handleDoubleClick}>
                <div className={estadoCheck ? 'card_head_check' : 'card-head'}>
                    <h1>{titulo}</h1>
                    <input type="checkbox" className="checkbox-redondo" onClick={handleCheck} />
                </div>
                <div className={estadoCheck ? 'card-text-check' : 'card-text'}>
                    <p>{subtitulo}</p>
                </div>
                <div className='card-bottom'>
                    <div className='card-left'>
                        <span className='card-tag'><p>{categoria === "" ? "Categoria" : categoria}</p></span>
                        {estadoCheck ? (
                            <></>
                        ) : (
                            <>
                                <MudarCor setCor={setCor} cor={cor} />
                            </>
                        )}

                    </div>
                    <div className='card-delete-bottom' onClick={deletarCard}>
                        <LixeiraSvg />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
