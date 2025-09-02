import { useState } from "react"
import "./Rodape.css"

const Rodape = ({ numCardsConcluidos, numCardsPendentes, numCardsLixeira }) => {


    return (
        <div className="menu-redape">
            <div className="btn-concluidos">
                <button>
                    Concluidos <span>{numCardsConcluidos}</span>
                </button>
            </div>

            <div className="btn-pendentes">
                <button>
                    Pendentes <span>{numCardsPendentes}</span>
                </button>
            </div>
            <div className="btn-deletados">
                <button>
                    Deletados <span>{numCardsLixeira}</span>
                </button>
            </div>
        </div>
    )
}

export default Rodape