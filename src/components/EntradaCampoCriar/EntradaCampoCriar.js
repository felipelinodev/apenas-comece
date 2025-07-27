import "./EntradaCampoCriar.css"
import { useRef } from "react"

export const EntradaCampoCriar = ({setValorInput}) => {

  const refValor = useRef("")

  const handleKeyDown = (event) => {
    if(event.key === "Enter"){
      event.preventDefault();
      setValorInput(refValor.current.value)
    }
  }

  return (
    <>
      <form>
        <input type="text" 
          placeholder="Criar uma nota..."
          className="input-campo-criar"
          onKeyDown={handleKeyDown}
          ref={refValor} />
      </form>
    </>
  )
}

export default EntradaCampoCriar
