import { Link } from "react-router-dom";
import logo from "../images/nekolistLogo.png"


function Home() {
    return (
        <div className="row home-content">
            <div className="col-12 home-hero">
                <p>Welcome to <br></br><img src={logo} alt="logo"></img></p>
                <Link to="/section2"><button type="button" class="btn btn-primary">Get Started</button></Link>
            </div>

            <div className="col-6 home-about">
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

            <div className="col-6 home-about-img">
                <p>img</p>
            </div>

            <div className="col-6 home-info-img">
                <p>img</p>
            </div>

            <div className="col-6 home-info">
                <h1>NekoList</h1>
                <p>
                    I created NekoList to showcase all of the anime I have watched, all the
                    manga I have read, and some of my favorite charactesr. This site was
                    inspired by AniList.
                </p>
            </div>

            <div className="col-12 home-bg1">
                <p>img</p>
            </div>

            <div className="col-12 home-anime">
                <h1>Anime</h1>
                <p>Click here to view my anime list!</p>
            </div>

            <div className="col-12 home-bg2">
                <p>img</p>
            </div>

            <div className="col-12 home-manga">
                <h1>Manga</h1>
                <p>Click here to view my manga list!</p>
            </div>

            <div className="col-6 home-favorite">
                <h1>Favorite</h1>
                <p>Here are some of my favorite animes and manga</p>
            </div>

            <div className="col-6 home-stats">
                <h1>Stats</h1>
                <p>Click to view my stats!</p>
            </div>
        </div>
    );
}

export default Home;
