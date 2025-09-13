import { useEffect, useRef } from "react"
import "./MudarCor.css"
import { BaldeSvg } from "../../svg/BaldeSvg"
export const MudarCor = ({ setCor, cor }) => {


  const opcoesCores = useRef(null)
  const esconder = "esconder-opcoes"
  const mostrar = "opcoes-cores"
  const refBtnCor = useRef(null)


  const paletaCores = {
    "cor-1": () => {
      refBtnCor.current.style.setProperty("--cor-contraste-btn-cor", "#D4A360");
      refBtnCor.current.style.setProperty("--cor-media-btn-cor", "#F5CC93");
      refBtnCor.current.style.setProperty("--cor-base-btn-cor", "#fff3e2ff");
      refBtnCor.current.style.setProperty("--cor-clara-escura-btn-cor", "#F6E2C7");
      refBtnCor.current.style.setProperty("--cor-clara-btn-cor", "#fffffeff");
    },
    "cor-2": () => {
      refBtnCor.current.style.setProperty("--cor-contraste-btn-cor", "#c76053ff")
      refBtnCor.current.style.setProperty("--cor-media-btn-cor", "#FDA99E")
      refBtnCor.current.style.setProperty("--cor-base-btn-cor", "#FFE0DB")
      refBtnCor.current.style.setProperty("--cor-clara-escura-btn-cor", "#F4B0A7")
      refBtnCor.current.style.setProperty("--cor-clara-btn-cor", "#FFEEEF")

    },

    "cor-3": () => {
      refBtnCor.current.style.setProperty("--cor-contraste-btn-cor", "#442C6C")
      refBtnCor.current.style.setProperty("--cor-media-btn-cor", "#9080C7")
      refBtnCor.current.style.setProperty("--cor-base-btn-cor", "#ded3f7ff")
      refBtnCor.current.style.setProperty("--cor-clara-escura-btn-cor", "#BFB5E8")
      refBtnCor.current.style.setProperty("--cor-clara-btn-cor", "#F0E9FF")

    },

    "cor-4": () => {
      refBtnCor.current.style.setProperty("--cor-contraste-btn-cor", "#345B4D")
      refBtnCor.current.style.setProperty("--cor-media-btn-cor", "#5E9985")
      refBtnCor.current.style.setProperty("--cor-base-btn-cor", "#DEF4EC")
      refBtnCor.current.style.setProperty("--cor-clara-escura-btn-cor", "#A8DECC")
      refBtnCor.current.style.setProperty("--cor-clara-btn-cor", "#F3FFFA")

    },

    "cor-5": () => {
      refBtnCor.current.style.setProperty("--cor-contraste-btn-cor", "#AA938B")
      refBtnCor.current.style.setProperty("--cor-media-btn-cor", "#C4B4AD")
      refBtnCor.current.style.setProperty("--cor-base-btn-cor", "#F5EBE6")
      refBtnCor.current.style.setProperty("--cor-clara-escura-btn-cor", "#E9D8D0")
      refBtnCor.current.style.setProperty("--cor-clara-btn-cor", "#FFFAF8")

    }
  }


  const handleOpenMudarCor = () => {
    if (opcoesCores.current.className === mostrar) {
      opcoesCores.current.className = esconder
    } else {
      opcoesCores.current.className = mostrar
    }
  }



  useEffect(() => {
    try {
      paletaCores[cor]()
    } catch {
      console.log("deu erro ao mudar cor")
    }

  }, [cor])

  const handleMudaCor = (event) => {
    const btnClasse = event.target.className
    if (btnClasse !== "opcoes-cores") {
      setCor(btnClasse)
    }

    if (opcoesCores.current.className === mostrar) {
      opcoesCores.current.className = esconder
    } else {
      opcoesCores.current.className = mostrar
    }
  }



  return (
    <>

      <div className="esconder-opcoes" ref={opcoesCores} onClick={handleMudaCor}>
        <span className="cor-1" ></span>
        <span className="cor-2"></span>
        <span className="cor-3"></span>
        <span className="cor-4"></span>
        <span className="cor-5"></span>
      </div>
      <div ref={refBtnCor} className="btn-cor-tarefa" onClick={handleOpenMudarCor} >
        <BaldeSvg />
      </div>

    </>
  )
}

export default MudarCor
