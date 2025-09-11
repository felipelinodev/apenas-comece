import { useEffect, useState } from "react"
import "./ProgressoTodo.css"
const ProgressoTodo = ({ numCardsConcluidos, totalCards }) => {
    const [porcetagem, setPorcetagem] = useState("")

    useEffect(() => {
        if(totalCards > 0){
           const porcetagemConclusao = (numCardsConcluidos / totalCards) * 100

           const valorEscalaDe10 = Math.floor(porcetagemConclusao / 10)

           const stringProgresso = "aaaaa".repeat(valorEscalaDe10)
           console.log(`string progresso ${stringProgresso}`) 
           setPorcetagem(stringProgresso)
        }
    }, [numCardsConcluidos, totalCards])


    return (
        <div className="progresso-todo">
            <div className="procentagem">
                <p>{numCardsConcluidos}/{totalCards}</p>
            </div>
            <div className="barra-progresso">
                <p>Status de progresso</p>
                <div className="barProgress">
                    <span className="content-progress">
                        {porcetagem}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ProgressoTodo