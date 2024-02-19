// import {NavLink} from 'react-router-dom'; 
import "./Footer.css";

function Footer() {

    return (
    // <footer className="footer">
    //     <div className="row">
    //         <div className="col-sm">
    //         <NavLink className="App-link" to="/">
    //             Logo
    //         </NavLink>
    //         </div>
    //         <div className="col-sm">
    //         LinkedIn
    //         </div>
    //         <div className="col-sm">
    //         Trailhead
    //         </div>
    //         <div className="col-sm">
    //         Facebook
    //         </div>
    //         <div className="col-sm">
    //         Email
    //         </div>
    //         <div className="col-sm">
    //         Copyright
    //         </div>
    //     </div>
    // </footer>
    <footer className="bg-body-tertiary text-center">
        <div className="container p-4">
            <section className="">
            <div className="row">
                <div className="col">
                <div data-mdb-ripple-init
                    className="bg-image hover-overlay shadow-1-strong rounded"
                    data-ripple-color="light">
                    <div className="w-100">LinkedIn</div>
                    <a href="#!">
                    <div className="mask style1"></div>
                    </a>
                </div>
                </div>

                <div className="col">
                <div data-mdb-ripple-init
                    className="bg-image hover-overlay shadow-1-strong rounded"
                    data-ripple-color="light">
                    <div className="w-100">Email</div>
                    <a href="#!">
                    <div className="mask style1"></div>
                    </a>
                </div>
                </div>

                <div className="col">
                <div data-mdb-ripple-init
                    className="bg-image hover-overlay shadow-1-strong rounded"
                    data-ripple-color="light">
                    <div className="w-100">Facebook</div>
                    <a href="#!">
                    <div className="mask style1"></div>
                    </a>
                </div>
                </div>

                <div className="col">
                <div data-mdb-ripple-init
                    className="bg-image hover-overlay shadow-1-strong rounded"
                    data-ripple-color="light">
                    <div className="w-100">Trailhead</div>
                    <a href="#!">
                    <div className="mask style1"></div>
                    </a>
                </div>
                </div>

                <div className="col">
                <div data-mdb-ripple-init
                    className="bg-image hover-overlay shadow-1-strong rounded"
                    data-ripple-color="light">
                    <div className="w-100">Instagram?</div>
                    <a href="#!">
                    <div className="mask style1"></div>
                    </a>
                </div>
                </div>

            </div>
            </section>
        </div>

        <div className="text-center p-3 bg-light">
            © 2024 Copyright Charlese Muchmore
        </div>
        </footer>
    )
}

export default Footer;