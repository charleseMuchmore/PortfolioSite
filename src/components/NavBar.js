// import {Link, NavLink} from 'react-router-dom'; 
import {NavLink} from 'react-router-dom'; 
import "./NavBar.css";

function NavBar() {

    return (
<div class="navbar container-fluid mb-auto">
        <div class="row">
            <div class="col-sm">
                <NavLink className="App-link" 
                to="/">
                Logo
                </NavLink>
            </div>
            <div class="col-sm">
                <NavLink className="App-link" 
                to="../pages/Page1">
                Page1
                </NavLink>
            </div>
            <div class="col-sm">
                <NavLink className="App-link" 
                to="/">
                Page2
                </NavLink>
            </div>
            <div class="col-sm">
                <NavLink className="App-link" 
                to="/">
                Page3
                </NavLink>
            </div>
        </div>
    </div>
    )
}

export default NavBar;