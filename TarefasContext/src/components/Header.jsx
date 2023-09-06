import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import { Link } from 'react-router-dom'

function Header(){
    const {theme, changeTheme} = useContext(ThemeContext)

    return(
        <>
            <header>
                <nav>
                    <Link to="/"> Home</Link>
                    <Link to="/cadastrar"> Cadastrar</Link>
                    <Link to="/listar_tarefas"> Listar</Link>
                </nav>
                <section>
                    <button className={"btnTheme"} onClick={changeTheme}>
                        <span className={"material-symbols-outlined"}>{theme == 'dark' ? 'dark_mode' : 'light_mode'}</span>
                    </button>
                </section>
            </header>
        </>
    )
}
export default Header