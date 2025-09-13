
const SalvarLocalStorage = (meusCards, categorias) => {
    if(meusCards !== null){
        localStorage.setItem("todosCards", JSON.stringify(meusCards))}

    if(categorias !== null){
       localStorage.setItem('todasCategorias', JSON.stringify(categorias))}

}


const PegarDadosLocalStorage = (chave, id = null) => {

    const dadosLocal = JSON.parse(localStorage.getItem(chave))

    if(!dadosLocal){
        return null}

    if(id !== null){
        return dadosLocal.find(card => card.id === id);}
  
    return dadosLocal;
}

const RemoverDadosLocalStorage = (chave, id = null, elementoArrat) => {

    const dadosLocal = JSON.parse(localStorage.getItem(chave))

    if(!dadosLocal){
        return null}

    if(id !== null){
        const dadosFiltrados = dadosLocal.filter(card => card.id !== id)

        if(dadosFiltrados.length > 0){
            localStorage.removeItem(chave)
            localStorage.setItem(chave, JSON.stringify(dadosFiltrados))

            return
        }
        
    }

    localStorage.removeItem(chave)
}

export{
    SalvarLocalStorage,
    PegarDadosLocalStorage,
    RemoverDadosLocalStorage,
}