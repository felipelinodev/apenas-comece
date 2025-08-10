import "./CriarCategoria.css"

import { useState, useRef } from "react"


const CriarCategoria = () => {
  const [estadoVisible, setEstadoVisible] = useState(false)
  const refCategorias = useRef(null)

    const paletaCores = {
        "cor-1": () => {
          refCategorias.current.style.setProperty("--cor-contraste-btn-cor", "#D4A360");
          refCategorias.current.style.setProperty("--cor-media-btn-cor", "#F5CC93");
          refCategorias.current.style.setProperty("--cor-base-btn-cor", "#fff3e2ff");
          refCategorias.current.style.setProperty("--cor-clara-escura-btn-cor", "#F6E2C7");
          refCategorias.current.style.setProperty("--cor-clara-btn-cor", "#fffffeff");
        },
        "cor-2": () => {
          refCategorias.current.style.setProperty("--cor-contraste-btn-cor", "#c76053ff")
          refCategorias.current.style.setProperty("--cor-media-btn-cor", "#FDA99E")
          refCategorias.current.style.setProperty("--cor-base-btn-cor", "#FFE0DB")
          refCategorias.current.style.setProperty("--cor-clara-escura-btn-cor", "#F4B0A7")
          refCategorias.current.style.setProperty("--cor-clara-btn-cor", "#FFEEEF")

        },

        "cor-3": () => {
          refCategorias.current.style.setProperty("--cor-contraste-btn-cor", "#442C6C")
          refCategorias.current.style.setProperty("--cor-media-btn-cor", "#9080C7")
          refCategorias.current.style.setProperty("--cor-base-btn-cor", "#ded3f7ff")
          refCategorias.current.style.setProperty("--cor-clara-escura-btn-cor", "#BFB5E8")
          refCategorias.current.style.setProperty("--cor-clara-btn-cor", "#F0E9FF")

        },

        "cor-4": () => {
          refCategorias.current.style.setProperty("--cor-contraste-btn-cor", "#345B4D")
          refCategorias.current.style.setProperty("--cor-media-btn-cor", "#5E9985")
          refCategorias.current.style.setProperty("--cor-base-btn-cor", "#DEF4EC")
          refCategorias.current.style.setProperty("--cor-clara-escura-btn-cor", "#A8DECC")
          refCategorias.current.style.setProperty("--cor-clara-btn-cor", "#F3FFFA")

        },

        "cor-5": () => {
          refCategorias.current.style.setProperty("--cor-contraste-btn-cor", "#AA938B")
          refCategorias.current.style.setProperty("--cor-media-btn-cor", "#C4B4AD")
          refCategorias.current.style.setProperty("--cor-base-btn-cor", "#F5EBE6")
          refCategorias.current.style.setProperty("--cor-clara-escura-btn-cor", "#E9D8D0")
          refCategorias.current.style.setProperty("--cor-clara-btn-cor", "#FFFAF8")

        }
      }


  const handleCategoria = (e) => {
    setEstadoVisible(true)

    if(e.target.value.length > 3){
      setEstadoVisible(false)
    }
  }


  return (
    <div>
        <div className="categorias-salvas" ref={refCategorias}>
             <input className="categoria" type="text" placeholder="categoria" onChange={handleCategoria}/>
             <div 
                className={estadoVisible ? "categorias-salvas-visible": "recomendations-categoria"}
                onClick={() => {setEstadoVisible(false)}}
                >
                  <li>Lazer</li>
                  <li>Trabalho</li>
                  <li>Escola</li>
             </div>
        </div>
    </div>
  )
}

export default CriarCategoria

