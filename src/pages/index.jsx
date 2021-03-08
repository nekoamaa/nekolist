/* import { Link } from "react-router-dom"; */
import logo from "../images/nekolistLogo.png"
/* import logoBlack from "../images/nekolistLogoBlack.png" */
import nekoLogo from "../images/nekoLogo.png"

function Home() {
    return (
        <div className="row home-content">
            <div className="col-12 home-hero">
                <p>Welcome to <br></br><img src={logo} alt="logo"></img></p>
                <a href="#section2"><button type="button" class="btn btn-dark">Get Started</button></a>
            </div>

            <div className="col-6 home-about">
                <div className="home-about-info elevation-beta" id="#section2">
                    <h1>About Me</h1>
                    <p>
                        Hello! Welcome to my site, NekoList, created by yours truly, nekoama.
                        I am a noob web developer making sites for fun. However, I hope to
                        become a web devloper in the future. Currently, I am a sophmore in
                        highscool taking it easy. In my free time I like to make stuff while
                        listening to weeb music. When I am not doing that, I am either watching
                        anime or reading manga.
                    </p>
                </div>
            </div>

            <div className="col-1 vertical-line-info"></div>

            <div className="col-5 home-about-image"><img src={nekoLogo} alt="neko logo"></img></div>

            <div className="col-5 home-info-logo">
                <img src={logo} alt="logo"></img>
            </div>

            <div className="col-1 vertical-line-info"></div>

            <div className="col-6 home-info">
                <div className="home-nekolist-info elevation-beta">
                    <h1>NekoList</h1>
                    <p>
                        I created NekoList to showcase all of the anime I have watched, all the
                        manga I have read, and some of my favorite charactesrs. This site was
                        inspired by AniList.
                    </p>
                    <button type="button" class="btn btn-dark">Anime</button>
                    <button type="button" class="btn btn-dark">Manga</button>
                    <button type="button" class="btn btn-dark">Favorite</button>
                    <button type="button" class="btn btn-dark">Stats</button>
                </div>
            </div>

            <div className="col-12 home-anime-bg"></div>

            <div className="col-12 home-anime">
                <h1>Anime</h1>
                <p>Click here to view my anime list!</p>
            </div>

            <div className="col-12 home-manga-bg">
                <p>img</p>
            </div>

            <div className="col-12 home-manga">
                <h1>Manga</h1>
                <p>Click here to view my manga list!</p>
            </div>

            <div className="col-12 home-favorite-bg"></div>

            <div className="col-5 home-favorite">
                <h1>Favorite</h1>
                <p>Here are some of my favorite anime and manga</p>
            </div>

            <div className="col-2 vertical-line-favorite"></div>

            <div className="col-5 home-stats">
                <h1>Stats</h1>
                <p>Click to view my stats!</p>
            </div>
        </div>
    );
}

export default Home;
