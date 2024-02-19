// import {Link, NavLink} from 'react-router-dom'; 
import {NavLink} from 'react-router-dom'; 
import "./NavBar.css";

function NavBar() {

    return (
    <div>
        <NavLink className="App-link" to="/">
            <h3>My Blogging App</h3>
        </NavLink>
    </div>
    )
}

export default NavBar;