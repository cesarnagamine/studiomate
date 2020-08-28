import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";




export class Download extends Component {

                   

    render() {
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
                    <h2>Gracias por su compra!</h2>
                    <Link to="/">
                        <button className="button next scrolly">Inicio</button>
                      </Link>
                  </header>
                  <p>
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
                    
                      
                            <button className='button scrolly' href='/MeijiShot.exe' download="">Descargar</button>
                      
                    </li>
                  </ul>
                </div>
              </section>
    
            <div id="main">
              
            <section id="one" className="tiles">
            <article>
              <span className="image">
                <img src="images/pic01.jpg" alt="" />
              </span>
              <header className="major"></header>
            </article>
            <article>
              <span className="image">
                <img src="images/pic02.jpg" alt="" />
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
        )
    }
}

export default Download
