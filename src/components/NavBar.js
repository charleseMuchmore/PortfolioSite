import {NavLink} from 'react-router-dom'; 
import "./NavBar.css";

function NavBar() {

    return (
        <div className="navbar mx-s-1 mx-md-3 mx-lg-5 px-sm-1 px-md-3 px-lg-5">
            <NavLink className="navbar-brand house" to="/">
            </NavLink>
            <NavLink className="nav-link" to="/Projects">Projects</NavLink>
            <NavLink className="nav-link" to="/Learning">Learning</NavLink>
            <NavLink className="nav-link" to="/History">History</NavLink>
            <NavLink className="nav-link" to="/Interests">Interests</NavLink>
            <NavLink className="nav-link" to="/Contact">Contact</NavLink>
            <div className="moon"></div>
        </div>
    )
}

export default NavBar;