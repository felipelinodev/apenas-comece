import { useEffect, useRef } from "react"
// import logoMudarCor from "../icones/mudar_cor.svg"
import "./MudarCor.css"

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
        <svg className="logo-mudar-cor" width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.55168 1.70658L4.6276 0.649536L11.102 7.12394C11.3914 7.41337 11.5361 7.77201 11.5361 8.19986C11.5361 8.62772 11.3914 8.98636 11.102 9.27579L7.5156 12.8622C7.22617 13.1516 6.86753 13.2963 6.43968 13.2963C6.01183 13.2963 5.65318 13.1516 5.36376 12.8622L1.77735 9.27579C1.48792 8.98636 1.34321 8.62772 1.34321 8.19986C1.34321 7.77201 1.48792 7.41337 1.77735 7.12394L5.36376 3.51866L3.55168 1.70658ZM6.43968 4.59458L2.8344 8.19986H10.045L6.43968 4.59458ZM13.235 13.4851C12.8197 13.4851 12.4642 13.3372 12.1685 13.0415C11.8728 12.7458 11.7249 12.3903 11.7249 11.975C11.7249 11.7108 11.8036 11.4276 11.9609 11.1256C12.1182 10.8236 12.2912 10.5405 12.4799 10.2762C12.5932 10.1252 12.7127 9.9679 12.8386 9.80431C12.9644 9.64072 13.0966 9.48342 13.235 9.33241C13.3734 9.48342 13.5055 9.64072 13.6314 9.80431C13.7572 9.9679 13.8768 10.1252 13.99 10.2762C14.1788 10.5405 14.3518 10.8236 14.5091 11.1256C14.6664 11.4276 14.745 11.7108 14.745 11.975C14.745 12.3903 14.5972 12.7458 14.3015 13.0415C14.0057 13.3372 13.6502 13.4851 13.235 13.4851ZM0.399414 18.7703V15.7502H15.5001V18.7703H0.399414Z" fill="none" />
        </svg>
      </div>

    </>
  )
}

export default MudarCor
