import "./Card.css"
import MudarCorCard, { MudarCor } from "../CriarCard/MudarCor"
export const Card = (props) => {
  return (
    <>
        <div className='card'>
            <div className='card-head'>
                 <h1>{props.titulo}</h1>
                 <input type="checkbox" />
            </div>
            <div className='card-text'>
                <p>{props.subtitulo}</p>
            </div>
            <div className='card-bottom'>
                <div className='card-left'>
                    <span className='card-tag'><p>Faculdade</p></span>
                    <MudarCor />
                </div>
                <div className='card-delete-bottom'>

                </div>
            </div>
        </div>
    </>
  )
}

export default Card
