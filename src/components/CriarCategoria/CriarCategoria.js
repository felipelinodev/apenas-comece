import "./CriarCategoria.css"

import { useState, useRef, useEffect } from "react"


const CriarCategoria = ({cor}) => {
  const [estadoVisible, setEstadoVisible] = useState(false)
  const refCategorias = useRef(null)
  const [valorCategoria, setValorCategoria] = useState("")

  const paletaCores = {
    "cor-1": () => {
      refCategorias.current.style.setProperty("--cor-contraste-categ", "#D4A360");
      refCategorias.current.style.setProperty("--cor-media-categ", "#F5CC93");
      refCategorias.current.style.setProperty("--cor-base-categ", "#fff3e2ff");
      refCategorias.current.style.setProperty("--cor-clara-escura-categ", "#F6E2C7");
      refCategorias.current.style.setProperty("--cor-clara-categ", "#fffffeff");
    },
    "cor-2": () => {
      refCategorias.current.style.setProperty("--cor-contraste-categ", "#c76053ff")
      refCategorias.current.style.setProperty("--cor-media-categ", "#FDA99E")
      refCategorias.current.style.setProperty("--cor-base-categ", "#FFE0DB")
      refCategorias.current.style.setProperty("--cor-clara-escura-categ", "#F4B0A7")
      refCategorias.current.style.setProperty("--cor-clara-categ", "#FFEEEF")

    },

    "cor-3": () => {
      refCategorias.current.style.setProperty("--cor-contraste-categ", "#442C6C")
      refCategorias.current.style.setProperty("--cor-media-categ", "#9080C7")
      refCategorias.current.style.setProperty("--cor-base-categ", "#ded3f7ff")
      refCategorias.current.style.setProperty("--cor-clara-escura-categ", "#BFB5E8")
      refCategorias.current.style.setProperty("--cor-clara-categ", "#F0E9FF")

    },

    "cor-4": () => {
      refCategorias.current.style.setProperty("--cor-contraste-categ", "#345B4D")
      refCategorias.current.style.setProperty("--cor-media-categ", "#5E9985")
      refCategorias.current.style.setProperty("--cor-base-categ", "#DEF4EC")
      refCategorias.current.style.setProperty("--cor-clara-escura-categ", "#A8DECC")
      refCategorias.current.style.setProperty("--cor-clara-categ", "#F3FFFA")

    },

    "cor-5": () => {
      refCategorias.current.style.setProperty("--cor-contraste-categ", "#AA938B")
      refCategorias.current.style.setProperty("--cor-media-categ", "#C4B4AD")
      refCategorias.current.style.setProperty("--cor-base-categ", "#F5EBE6")
      refCategorias.current.style.setProperty("--cor-clara-escura-categ", "#E9D8D0")
      refCategorias.current.style.setProperty("--cor-clara-categ", "#FFFAF8")

    }
  }

   useEffect(() => {
          try {
              paletaCores[cor]()
          } catch {
              console.log("deu erro ao mudar cor")
          }
      }, [cor, paletaCores])


  const handleCategoria = (e) => {
    setValorCategoria(e.target.value)
    setEstadoVisible(true)

    if (e.target.value.length > 3) {
      setEstadoVisible(false)
    }
  }


  return (
    <div>
      <div className="categorias-salvas" ref={refCategorias}>
        <input className="categoria" type="text" placeholder="categoria" onChange={handleCategoria} value={valorCategoria} />
        <div
          className={estadoVisible ? "categorias-salvas-visible" : "recomendations-categoria"}
          onClick={() => { setEstadoVisible(false) }}
        >
          <li onClick={() => setValorCategoria("Treino")}>Treino</li>
          <li onClick={() => setValorCategoria("Trabalho")}>Trabalho</li>
          <li onClick={() => setValorCategoria("Estudos")}>Estudos</li>
          <li onClick={() => setValorCategoria("Social")}>Social</li>
        </div>
      </div>
    </div>
  )
}

export default CriarCategoria

