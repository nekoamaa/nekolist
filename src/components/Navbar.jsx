import { Link, NavLink } from "react-router-dom";
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
                        <NavLink to="/" exact activeClassName="active" className="nav-item nav-link">Home</NavLink>
                        <NavLink to="/anime" exact activeClassName="active" className="nav-item nav-link">Anime</NavLink>
                        <NavLink to="/manga" exact activeClassName="active" className="nav-item nav-link">Manga</NavLink>
                        <NavLink to="/favorite" exact activeClassName="active" className="nav-item nav-link">Favorite</NavLink>
                        <NavLink to="/stats" exact activeClassName="active" className="nav-item nav-link">Stats</NavLink>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar