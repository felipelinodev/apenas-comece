import "./EntradaCampoCriar.css"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"

export const EntradaCampoCriar = ({setComecoDeDigito}) => {

  const refValor = useRef("")
  const navigate = useNavigate()

  // const handleKeyDown = (event) => {
  //   if(event.key === "Enter"){
  //     event.preventDefault();
  //     setValorInput(refValor.current.value)
  //   }
  // }

  const redirecionarCriar = (e) => {
    const valorDigite = e.target.value
    
    if(valorDigite.length > 1){
      setComecoDeDigito(valorDigite)
      navigate("/criar_card")
    }
    
    
  }



  return (
    <>
      <form>
        <input type="text" 
          onChange={redirecionarCriar}
          placeholder="Criar uma nota..."
          className="input-campo-criar"
          // onKeyDown={handleKeyDown}
          ref={refValor} />
      </form>
    </>
  )
}

export default EntradaCampoCriar
