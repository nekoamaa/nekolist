import { Link } from "react-router-dom";
import logo from "../images/nekolistLogo.png"


function Home() {
    return (
        <div className="row home-content">
            <div className="col-12 home-hero">
                <p>Welcome to <br></br><img src={logo} alt="logo"></img></p>
                <Link to="/section2"><button type="button" class="btn btn-primary">Get Started</button></Link>
            </div>

            <div className="col-6 home-info" id="section2">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet esse ullam, veritatis porro placeat ipsa, dolores quasi magni quis perferendis inventore ipsum hic sed reiciendis impedit nam tempora possimus, dolorum fugiat? Odit, soluta voluptatum ipsa tempora sequi dolore? Mollitia, eum nihil. Alias similique dolorum perspiciatis deleniti corporis facilis vitae tempora, ut quae voluptatibus tenetur excepturi exercitationem modi iure ab quos voluptas inventore nam id odio dicta veniam repellendus molestias enim. Nulla commodi veritatis porro voluptatem laudantium nobis recusandae ea odit minus quo libero architecto ullam iure impedit dolore, dolorum corrupti inventore tempora itaque nesciunt eos? Veritatis esse distinctio quod accusantium, rem delectus harum laudantium reprehenderit et maxime temporibus autem asperiores provident! Obcaecati ea recusandae, autem magni rerum vel omnis quidem!</p>
            </div>

            <div className="col-6 home-img">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet esse ullam, veritatis porro placeat ipsa, dolores quasi magni quis perferendis inventore ipsum hic sed reiciendis impedit nam tempora possimus, dolorum fugiat? Odit, soluta voluptatum ipsa tempora sequi dolore? Mollitia, eum nihil. Alias similique dolorum perspiciatis deleniti corporis facilis vitae tempora, ut quae voluptatibus tenetur excepturi exercitationem modi iure ab quos voluptas inventore nam id odio dicta veniam repellendus molestias enim. Nulla commodi veritatis porro voluptatem laudantium nobis recusandae ea odit minus quo libero architecto ullam iure impedit dolore, dolorum corrupti inventore tempora itaque nesciunt eos? Veritatis esse distinctio quod accusantium, rem delectus harum laudantium reprehenderit et maxime temporibus autem asperiores provident! Obcaecati ea recusandae, autem magni rerum vel omnis quidem!</p>
            </div>

            <div className="col-12 home-bg1">
                <p>img</p>
            </div>

            <div className="col-12 home-anime">
                <p>anime</p>
            </div>

            <div className="col-12 home-bg2">
                <p>img</p>
            </div>

            <div className="col-12 home-manga">
                <p>manga</p>
            </div>

            <div className="col-6 home-favorite">
                <p>favorite</p>
            </div>

            <div className="col-6 home-stats">
                <p>stats</p>
            </div>
        </div>
    );
}

export default Home;
