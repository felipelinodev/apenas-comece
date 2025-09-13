import "./TodoMenu.css"

import { useState } from "react"

import LogoTodo from "../../icones/LOGO_OFICIAL.png"
import { LampadaSvg } from "../../svg/LampadaSvg"
import { SeloSvg } from "../../svg/SeloSvg"
import { DeleteSvg } from "../../svg/DeleteSvg"

const TodoMenu = ({ setCategoriasSalvas, categoriasSalvas }) => {

    const [categoria, setCategoria] = useState("")
    const [estadoClickAddCategory, setEstadoClickAddCategory] = useState(true)


    const handleSetCategory = (e) => {
        e.preventDefault()
        if (categoria !== "") {
            setCategoriasSalvas([...categoriasSalvas, categoria])
        }


        //Mudar estado
        setEstadoClickAddCategory(!estadoClickAddCategory)

        setCategoria("")
    }

    const handleRemoverItamCategoria = (nomeCateg) => {


        setCategoriasSalvas(categoriasSalvas.filter(categoria => categoria !== nomeCateg))


    }


    return (

        <div className='todo-menu'>
            <div className="logo-todo">
                <img src={LogoTodo} alt="Logo oficial" />
            </div>

            <div className="container">
                <form className="add-categoria" onSubmit={handleSetCategory}>
                    {estadoClickAddCategory && (
                        <div className="categ-div">
                            <LampadaSvg />
                            <p className="categories-label">Categorias</p>
                        </div>)}
                    <input className={estadoClickAddCategory ? "input-hide" : ""} type="text" placeholder="Digite sua categoria..." onChange={(e) => setCategoria(e.target.value)} value={categoria} />


                    <input type="submit" value="+" />
                </form>



                <div className="lista-categoria">
                    <ul>
                        <li>
                            {categoriasSalvas.map((cat) => (
                                <div className="items-categ">
                                    <div className="children-items-1">
                                        <SeloSvg />
                                        {cat}
                                    </div>
                                    <div className="delete-items" onClick={() => handleRemoverItamCategoria(cat)}>
                                        <DeleteSvg />
                                    </div>
                                </div>
                            ))}
                        </li>
                    </ul>

                </div>
            </div>

        </div>
    )
}

export default TodoMenu