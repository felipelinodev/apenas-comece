import "./Card.css"
import MudarCor from "../CriarCard/MudarCor"
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
