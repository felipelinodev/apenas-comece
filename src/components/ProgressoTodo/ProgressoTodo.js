import { useEffect, useState } from "react"
import "./ProgressoTodo.css"
const ProgressoTodo = ({ numCardsConcluidos, totalCards }) => {
    const [porcetagem, setPorcetagem] = useState("")

    const umDecimo = "aaaaa"

    useEffect(() => {
        const numeroPorcent = Math.floor(totalCards / 5)
        setPorcetagem(umDecimo.repeat(numeroPorcent))
        console.log(`porcentagem É: ${porcetagem}`)
    }, [numCardsConcluidos])


    return (
        <div className="progresso-todo">
            <div className="procentagem">
                <p>{numCardsConcluidos}/{totalCards}</p>
            </div>
            <div className="barra-progresso">
                <p>Status de progresso</p>
                <div className="barProgress">
                    <span className="content-progress">
                        {/* aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}
                        aaaaa
                    </span>
                </div>

            </div>
        </div>
    )
}

export default ProgressoTodo