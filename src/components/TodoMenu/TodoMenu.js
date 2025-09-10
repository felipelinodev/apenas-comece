import { useState } from "react"
import "./TodoMenu.css"

const TodoMenu = ({ setCategoriasSalvas, categoriasSalvas }) => {

    const [categoria, setCategoria] = useState("")

    const handleSetCategory = (e) => {
        e.preventDefault()
        setCategoriasSalvas([...categoriasSalvas, categoria])
    }

    console.log(categoriasSalvas)
    return (

        <div className='todo-menu'>
            <h1>todo menu</h1>

            <div className="container">
                <form className="add-categoria" onSubmit={handleSetCategory}>
                    <input type="text" placeholder="Digite sua categoria..." onChange={(e) => setCategoria(e.target.value)} />
                    <input type="submit" value="+" />
                </form>

                <p className="categories-label">Categorias</p>

                <div className="lista-categoria">
                    {categoriasSalvas.map((cat) => (
                        <p>{cat}</p>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default TodoMenu