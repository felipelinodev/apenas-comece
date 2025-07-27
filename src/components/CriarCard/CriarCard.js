import "./CriarCard.css"
import MudarCor from "./MudarCor"
import { useState } from "react"
 

export const CriarCard = ({setTdados}) => {

    const [titulo, setTitulo] = useState("")
    const [subtitulo, setSubtitulo] = useState("")
    
    const handleInputTitulo = (event) => {
        setTitulo(event.target.value)
    }

    const handleInputDescricao = (event) => {
        setSubtitulo(event.target.textContent)
    }

    const handleClick = (event) => {
        setTdados({titulo, 
                subtitulo})
        event.preventDefault()
    }


    return (
        <div className="container-card-criar">
            <form>
                <div className='head-card-criar'>
                    <input type="text" placeholder="Titulo" onChange={handleInputTitulo} />
                    <MudarCor PositionToltip="left"/>
                    
                </div>
                <span className="textarea-descricao-card" role="textarea" contentEditable onInput={handleInputDescricao}></span>
                <div className="bottom-card-criar">
                    <span className='tag-card-criar'><p>Faculdade</p></span>
                    <button className="btn-criar-tarefa" onClick={handleClick}>Criar tarefa</button>
                </div>
            </form>
        </div>
    )
}

export default CriarCard

