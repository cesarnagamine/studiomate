import React from 'react'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MailForm from "./MailForm";


function About() {
    return (
      <div id="main">
        <header id="header" className="alt">
          <a className="logo">
            <strong>StudioMate Co.</strong> <span>by César Nagamine</span>
          </a>
          <nav>{/* <a className="logo">Menu</a> */}</nav>
        </header>

        <nav id="menu">
          {/* <ul className="links">
							<li><a href="index.html">Home</a></li>
							<li><a >Landing</a></li>
							<li><a href="generic.html">Generic</a></li>
							<li><a href="elements.html">Elements</a></li>
						</ul>
						<ul className="actions stacked">
							<li><a href="#" className="button primary fit">Get Started</a></li>
							<li><a href="#" className="button fit">Log In</a></li>
						</ul> */}
        </nav>

        <section id="two">
            <div className="inner">
              <header className="major">
                <h2>Nosotros</h2>
              </header>
              <p>
                Somos un equipo de más de 16 colaboradores alrededor del mundo. 
                Llevando a cabo un gran trabajo filmográfico en escenarios únicos, 
                vibrantes y maravillosos, aplicando lo mejor de la fotografía para lograr 
                las tomas correctas en cada ocasión. Te invitamos a darle un vistazo a 
                nuestro trabajo, te podemos asegurar que encontrarás material de sobra 
                para llevar tus proyecto al siguiente nivel.
              <br/>
                Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
                Pellentesque condimentum sem. In efficitur ligula tate urna.
                Maecenas laoreet massa vel lacinia pellentesque lorem ipsum
                dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et
                sagittis libero. Mauris aliquet magna magna sed nunc rhoncus
                amet pharetra et feugiat tempus.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/">
                    <button className="button">Inicio</button>
                  </Link>
                </li>
              </ul>
            </div>
          </section>

        <div id="main">
          <section id="one" className="tiles">
            
            <article>
              <span className="image">
                <img src="images/pic03.jpg" alt="" />
              </span>
              <header className="major"></header>
            </article>
            <article>
              <span className="image">
                <img src="images/pic04.jpg" alt="" />
              </span>
              <header className="major"></header>
            </article>
          </section>

          
        </div>

        <section id="contact">
          <div className="inner">
          
           
          </div>
          <div className="inner">
            <ul className="icons">
              <li>
                <a href="#" className="icon brands alt fa-facebook-f">
                  <span className="label">Facebook</span>
                </a>
              </li>

              <li>
                <a href="#" className="icon brands alt fa-github">
                  <span className="label">GitHub</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon brands alt fa-linkedin-in">
                  <span className="label">LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </section>

        <footer id="footer"></footer>
      </div>
    );
}

export default About
