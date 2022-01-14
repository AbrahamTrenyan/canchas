import { Link } from "react-router-dom";
import Inicio from "../Inicio";
import Logo from '../../img/Logo.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/">
                <img src={Logo} alt='logo' width="80" height="50" style={{marginLeft:"50px"}}/>
                </Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Futbol">Futbol</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Voley">Voley</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Tenis">Tenis</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;