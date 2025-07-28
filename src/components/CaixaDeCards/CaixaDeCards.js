import "./CaixaDeCards.css"
const CaixaDeCards = (props) => {
  return (
    <div className='caixa-todos-cards'>
        {props.children}
    </div>
  )
}

export default CaixaDeCards