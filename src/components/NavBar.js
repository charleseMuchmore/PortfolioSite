import {NavLink} from 'react-router-dom'; 
import "./NavBar.css";
import MoonImage from "../images/moon.jpg";

function NavBar() {

    return (
        <div className="navbar mx-s-1 mx-md-3 mx-lg-5 px-sm-1 px-md-3 px-lg-5">
            <NavLink className="navbar-brand" to="/">Logo</NavLink>
            <NavLink className="nav-link" to="/">Projects</NavLink>
            <NavLink className="nav-link" to="/">Learning</NavLink>
            <NavLink className="nav-link" to="/">History</NavLink>
            <NavLink className="nav-link" to="/">Interests</NavLink>
            <NavLink className="nav-link" to="/">Contact</NavLink>
            <img className="moon" src={MoonImage} alt="moon"></img>
        </div>
    )
}

export default NavBar;