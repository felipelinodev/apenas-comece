const SalvarLocalStorage = (meusCards, categorias, numCardsConcluidos = null, numCardsPendentes = null) => {
    try {
        if (meusCards !== null) {
            localStorage.setItem("todosCards", JSON.stringify(meusCards))
        }

        if (categorias !== null) {
            localStorage.setItem('todasCategorias', JSON.stringify(categorias))
        }

        if (numCardsConcluidos !== null) {
            localStorage.setItem('numCardsConcluidos', JSON.stringify(numCardsConcluidos))
        }

        if (numCardsPendentes !== null) {
            localStorage.setItem('numCardsPendentes', JSON.stringify(numCardsPendentes))
        }
    } catch (error) {
        console.error('Erro ao salvar dados no localStorage:', error);
    }
}

const PegarDadosLocalStorage = (chave, id = null) => {
    try {
        const dadosLocal = JSON.parse(localStorage.getItem(chave))

        if (!dadosLocal) {
            return null
        }

        if (id !== null) {
            return dadosLocal.find(card => card.id === id);
        }

        return dadosLocal;
    } catch (error) {
        console.error('Erro ao recuperar dados do localStorage:', error);
        return null;
    }
}

const RemoverDadosLocalStorage = (chave, id = null, elementoArray) => {

    const dadosLocal = JSON.parse(localStorage.getItem(chave))

    if (!dadosLocal) {
        return null
    }

    if (id !== null) {
        const dadosFiltrados = dadosLocal.filter(card => card.id !== id)

        if (dadosFiltrados.length > 0) {
            localStorage.removeItem(chave)
            localStorage.setItem(chave, JSON.stringify(dadosFiltrados))

            return
        }

    }

    localStorage.removeItem(chave)
}

export {
    SalvarLocalStorage,
    PegarDadosLocalStorage,
    RemoverDadosLocalStorage,
}