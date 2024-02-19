// import {Link, NavLink} from 'react-router-dom'; 
import {NavLink} from 'react-router-dom'; 
import "./NavBar.css";

function NavBar() {

    return (
        <div className="navbar navbar-light bg-light">
            <NavLink className="navbar-brand" to="/">Logo</NavLink>
            <NavLink className="nav-link" to="/">Link</NavLink>
            <NavLink className="nav-link" to="/">Link</NavLink>
            <NavLink className="nav-link" to="/">Link</NavLink>
            <NavLink className="nav-link" to="/">Link</NavLink>
            <NavLink className="nav-link" to="/">Link</NavLink>
            <NavLink className="nav-link" to="/">Link</NavLink>
        </div>
    )
}

export default NavBar;