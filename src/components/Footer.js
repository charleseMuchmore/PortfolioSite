import "./Footer.css";
import LinkedinImage from "../images/linkedin.png";
import EmailImage from "../images/mail.png";
import FacebookImage from "../images/facebook.png";
import TrailheadImage from "../images/trailhead.png";

function Footer() {

    return (
    <footer className="fixed-bottom mx-s-1 mx-md-3 mx-lg-5 px-sm-1 px-md-3 px-lg-5">
        <div className="container p-3">
            <div className="row">
                <div className="col">
                    <a href="https://www.linkedin.com/in/muchmorec/">
                    <img alt="LinkedIn" src={LinkedinImage} className="socialLinkIcon"></img>
                    </a>
                </div>
                <div className="col">
                    <a href="https://www.facebook.com/profile.php?id=100093591189476">
                    <img alt="Facebook" src={FacebookImage} className="socialLinkIcon"></img>
                    </a>
                </div>
                <div className="col">
                    <a href="https://www.salesforce.com/trailblazer/profile">
                    <img alt="Trailhead" src={TrailheadImage} className="socialLinkIcon"></img>
                    </a>
                </div>
                <div className="col">
                    <a href="charlymuchmore@gmail.com">
                    <img alt="Email" src={EmailImage} className="socialLinkIcon"></img>
                    </a>
                </div>
            </div>
        </div>
        <div className="text-center p-2 bg-light">
            © 2024 Copyright Charlese Muchmore
        </div>
        </footer>
    )
}

export default Footer;