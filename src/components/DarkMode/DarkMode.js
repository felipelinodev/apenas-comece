import { useState } from "react"


export const DarkMode = () => {
    const [click, setClick] = useState(false)

    const mudarCord = () => {

        if (click) {
            document.documentElement.style.setProperty("--cor-contraste", "#AA938B")
            document.documentElement.style.setProperty("--cor-media", "#2c170fff")
            document.documentElement.style.setProperty("--cor-base", "#310c06ff")
            document.documentElement.style.setProperty("--cor-clara-escura", "#361c14ff")
            document.documentElement.style.setProperty("--cor-clara", "#3A2B24")
            setClick(!click)
        } else {
            document.documentElement.style.setProperty("--cor-contraste", "#AA938B")
            document.documentElement.style.setProperty("--cor-media", "#C4B4AD")
            document.documentElement.style.setProperty("--cor-base", "#F5EBE6")
            document.documentElement.style.setProperty("--cor-clara-escura", "#E9D8D0")
            document.documentElement.style.setProperty("--cor-clara", "#FFFAF8")
            setClick(!click)
        }

    }

    return (
        <button onClick={mudarCord}>Modo dark</button>
    )
}
