
      const paletaCores = {
        "cor-1": () => {
          btnCorRef.current.style.setProperty("--cor-contraste-btn-cor", "#D4A360");
          btnCorRef.current.style.setProperty("--cor-media-btn-cor", "#F5CC93");
          btnCorRef.current.style.setProperty("--cor-base-btn-cor", "#fff3e2ff");
          btnCorRef.current.style.setProperty("--cor-clara-escura-btn-cor", "#F6E2C7");
          btnCorRef.current.style.setProperty("--cor-clara-btn-cor", "#fffffeff");
        },
        "cor-2": () => {
          btnCorRef.current.style.setProperty("--cor-contraste-btn-cor", "#c76053ff")
          btnCorRef.current.style.setProperty("--cor-media-btn-cor", "#FDA99E")
          btnCorRef.current.style.setProperty("--cor-base-btn-cor", "#FFE0DB")
          btnCorRef.current.style.setProperty("--cor-clara-escura-btn-cor", "#F4B0A7")
          btnCorRef.current.style.setProperty("--cor-clara-btn-cor", "#FFEEEF")

        },

        "cor-3": () => {
          btnCorRef.current.style.setProperty("--cor-contraste-btn-cor", "#442C6C")
          btnCorRef.current.style.setProperty("--cor-media-btn-cor", "#9080C7")
          btnCorRef.current.style.setProperty("--cor-base-btn-cor", "#ded3f7ff")
          btnCorRef.current.style.setProperty("--cor-clara-escura-btn-cor", "#BFB5E8")
          btnCorRef.current.style.setProperty("--cor-clara-btn-cor", "#F0E9FF")

        },

        "cor-4": () => {
          btnCorRef.current.style.setProperty("--cor-contraste-btn-cor", "#345B4D")
          btnCorRef.current.style.setProperty("--cor-media-btn-cor", "#5E9985")
          btnCorRef.current.style.setProperty("--cor-base-btn-cor", "#DEF4EC")
          btnCorRef.current.style.setProperty("--cor-clara-escura-btn-cor", "#A8DECC")
          btnCorRef.current.style.setProperty("--cor-clara-btn-cor", "#F3FFFA")

        },

        "cor-5": () => {
          btnCorRef.current.style.setProperty("--cor-contraste-btn-cor", "#AA938B")
          btnCorRef.current.style.setProperty("--cor-media-btn-cor", "#C4B4AD")
          btnCorRef.current.style.setProperty("--cor-base-btn-cor", "#F5EBE6")
          btnCorRef.current.style.setProperty("--cor-clara-escura-btn-cor", "#E9D8D0")
          btnCorRef.current.style.setProperty("--cor-clara-btn-cor", "#FFFAF8")

        }
      }
      try {
        paletaCores[btnClasse]()
      } catch {
        console.log("deu erro ao mudar cor")
      }