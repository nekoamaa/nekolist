import { Link } from "react-router-dom";
import logo from "../images/nekolistLogo.png"

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark sticky">
                <Link to="/"><img className="logo" src={logo} alt="logo"></img></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/" class="nav-item nav-link active">Home<span class="sr-only">(current)</span></Link>
                        <Link to="/anime" class="nav-item nav-link">Anime</Link>
                        <Link to="/manga" class="nav-item nav-link">Manga</Link>
                        <Link to="/favorite" class="nav-item nav-link">Favorite</Link>
                        <Link to="/stats" class="nav-item nav-link">Stats</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar