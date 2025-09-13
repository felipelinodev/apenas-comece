import { useCallback, useEffect } from "react";


export function usePaletaCores(referencia, cor, component) {
    const paletaCores = useCallback({
        "cor-1": () => {
            referencia.current.style.setProperty(`--cor-contraste-${component}`, "#D4A360");
            referencia.current.style.setProperty(`--cor-media-${component}`, "#F5CC93");
            referencia.current.style.setProperty(`--cor-base-${component}`, "#fff3e2ff");
            referencia.current.style.setProperty(`--cor-clara-escura-${component}`, "#F6E2C7");
            referencia.current.style.setProperty(`--cor-clara-${component}`, "#fffffeff");
        },
        "cor-2": () => {
            referencia.current.style.setProperty(`--cor-contraste-${component}`, "#c76053ff")
            referencia.current.style.setProperty(`--cor-media-${component}`, "#FDA99E")
            referencia.current.style.setProperty(`--cor-base-${component}`, "#FFE0DB")
            referencia.current.style.setProperty(`--cor-clara-escura-${component}`, "#F4B0A7")
            referencia.current.style.setProperty(`--cor-clara-${component}`, "#FFEEEF")
        },

        "cor-3": () => {
            referencia.current.style.setProperty(`--cor-contraste-${component}`, "#442C6C")
            referencia.current.style.setProperty(`--cor-media-${component}`, "#9080C7")
            referencia.current.style.setProperty(`--cor-base-${component}`, "#ded3f7ff")
            referencia.current.style.setProperty(`--cor-clara-escura-${component}`, "#BFB5E8")
            referencia.current.style.setProperty(`--cor-clara-${component}`, "#F0E9FF")
        },

        "cor-4": () => {
            referencia.current.style.setProperty(`--cor-contraste-${component}`, "#345B4D")
            referencia.current.style.setProperty(`--cor-media-${component}`, "#5E9985")
            referencia.current.style.setProperty(`--cor-base-${component}`, "#DEF4EC")
            referencia.current.style.setProperty(`--cor-clara-escura-${component}`, "#A8DECC")
            referencia.current.style.setProperty(`--cor-clara-${component}`, "#F3FFFA")
        },

        "cor-5": () => {
            referencia.current.style.setProperty(`--cor-contraste-${component}`, "#AA938B")
            referencia.current.style.setProperty(`--cor-media-${component}`, "#C4B4AD")
            referencia.current.style.setProperty(`--cor-base-${component}`, "#F5EBE6")
            referencia.current.style.setProperty(`--cor-clara-escura-${component}`, "#E9D8D0")
            referencia.current.style.setProperty(`--cor-clara-${component}`, "#FFFAF8")

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