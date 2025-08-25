import { useCallback, useEffect } from "react";


export function usePaletaCores(referencia, cor) {
    const paletaCores = useCallback({
        "cor-1": () => {
            referencia.current.style.setProperty("--cor-contraste-card", "#D4A360");
            referencia.current.style.setProperty("--cor-media-card", "#F5CC93");
            referencia.current.style.setProperty("--cor-base-card", "#fff3e2ff");
            referencia.current.style.setProperty("--cor-clara-escura-card", "#F6E2C7");
            referencia.current.style.setProperty("--cor-clara-card", "#fffffeff");
        },
        "cor-2": () => {
            referencia.current.style.setProperty("--cor-contraste-card", "#c76053ff")
            referencia.current.style.setProperty("--cor-media-card", "#FDA99E")
            referencia.current.style.setProperty("--cor-base-card", "#FFE0DB")
            referencia.current.style.setProperty("--cor-clara-escura-card", "#F4B0A7")
            referencia.current.style.setProperty("--cor-clara-card", "#FFEEEF")
        },

        "cor-3": () => {
            referencia.current.style.setProperty("--cor-contraste-card", "#442C6C")
            referencia.current.style.setProperty("--cor-media-card", "#9080C7")
            referencia.current.style.setProperty("--cor-base-card", "#ded3f7ff")
            referencia.current.style.setProperty("--cor-clara-escura-card", "#BFB5E8")
            referencia.current.style.setProperty("--cor-clara-card", "#F0E9FF")
        },

        "cor-4": () => {
            referencia.current.style.setProperty("--cor-contraste-card", "#345B4D")
            referencia.current.style.setProperty("--cor-media-card", "#5E9985")
            referencia.current.style.setProperty("--cor-base-card", "#DEF4EC")
            referencia.current.style.setProperty("--cor-clara-escura-card", "#A8DECC")
            referencia.current.style.setProperty("--cor-clara-card", "#F3FFFA")
        },

        "cor-5": () => {
            referencia.current.style.setProperty("--cor-contraste-card", "#AA938B")
            referencia.current.style.setProperty("--cor-media-card", "#C4B4AD")
            referencia.current.style.setProperty("--cor-base-card", "#F5EBE6")
            referencia.current.style.setProperty("--cor-clara-escura-card", "#E9D8D0")
            referencia.current.style.setProperty("--cor-clara-card", "#FFFAF8")

        }
    })

    useEffect(() => {
        try {
            paletaCores[cor]()
        } catch {
            console.log("deu erro ao mudar cor")
        }
    }, [cor])
}