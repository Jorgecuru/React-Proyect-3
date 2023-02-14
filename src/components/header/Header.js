import { Link } from "react-router-dom"
import '../../Css/Header.css'
import Buscador from "../buscador/Buscador"

const Header = () => {


    return(
        <header className="Button">
            <nav>
                <ul className="decoration">
                    <li>
                       <Link to="/">Home</Link> 
                    </li>
                    <li>
                    <Link to="/listado">Personajes</Link> 
                    </li>
                    <li>
                    <Link to="/contacto">Contacto</Link> 
                    </li>
                    <li>
                    <Link to="/favoritos ">Favoritos</Link> 
                    </li>
                </ul>
            </nav>
            <Buscador/>
        </header>
    )
}

export default Header