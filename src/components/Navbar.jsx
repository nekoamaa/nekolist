import { Link } from "react-router-dom";
import logo from "../images/nekolistLogo.png"

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark sticky">
                <Link to="/"><img className="logo" src={logo} alt="logo"></img></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-item nav-link active">Home<span className="sr-only">(current)</span></Link>
                        <Link to="/anime" className="nav-item nav-link">Anime</Link>
                        <Link to="/manga" className="nav-item nav-link">Manga</Link>
                        <Link to="/favorite" className="nav-item nav-link">Favorite</Link>
                        <Link to="/stats" className="nav-item nav-link">Stats</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar