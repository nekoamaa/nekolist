import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./scss/App.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/index"
import Anime from "./pages/anime"
import Manga from "./pages/manga"
import Favorite from "./pages/favorite"
import Stats from "./pages/stats"

function App() {
    return (
        <HashRouter>
            <Navbar />
            <div className="container-fluid">
                <Route path="/" exact component={Home} />
                <Route path="/anime" exact component={Anime} />
                <Route path="/manga" exact component={Manga} />
                <Route path="/favorite" exact component={Favorite} />
                <Route path="/stats" exact component={Stats} />
            </div>
            <Footer />
        </HashRouter>
    );
}

export default App;
