import "./CriarCard.css"
import MudarCor from "./MudarCor"
import { useEffect, useState } from "react"
 

export const CriarCard = ({setTdados}) => {
    const [estadoButonCriar, setEstadoButonCriar] = useState(false)


    const [titulo, setTitulo] = useState("")
    const [subtitulo, setSubtitulo] = useState("")
    
    const handleInputTitulo = (event) => {
        setTitulo(event.target.value)
        setEstadoButonCriar(true)
    }

    const handleInputDescricao = (event) => {
        setSubtitulo(event.target.textContent)
    }

    const handleClick = (event) => {
        setTdados({titulo, 
                subtitulo})
        event.preventDefault()
    }

    useEffect(() =>{
        if(!titulo){
            setEstadoButonCriar(false)
        }else{
           setEstadoButonCriar(true) 
        }
    }, [titulo])

    return (
        <div className="container-card-criar">
            <form>
                <div className='head-card-criar'>
                    <input type="text" placeholder="Titulo" onChange={handleInputTitulo} />
                    <MudarCor/>
                    
                </div>
                <span className="textarea-descricao-card" role="textarea" contentEditable onInput={handleInputDescricao}></span>
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

