import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import StripeButton from "./StripeButton";
import "bootstrap/dist/css/bootstrap.min.css";
import MailForm from "./MailForm";

class Landing extends React.Component {



  render() {
    return (
      <div id="wrapper">
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

        <section id="banner" className="major">
          <div className="inner">
            <header className="major">
              <h1>Hola, somos StudioMate Co.</h1>
            </header>
            <div className="content">
              <p>
                Te ofrecemos los mejores Drone B-rolls <br />
                para resaltar el profesionalismo de tus proyectos.
              </p>
              <ul className="actions">
                <Link to="/about">
                  <button type="submit" className="button next scrolly">
                    Nosotros
                  </button>
                </Link>
              </ul>
            </div>
          </div>
        </section>

        <div id="main">
          <section id="one" className="tiles">
            <article>
              <span className="image">
                <img src="images/pic01.jpg" alt="" />
              </span>
              <header className="major">
                <h3>
                  <a className="link">Forrest</a><p>Nice vertical shot.</p>
                </h3>

                
                  <a href="https://youtu.be/LkWcj8juJv4" target="blank" type="submit" className="button next scrolly">
                    Ver Demo
                  </a>
               
                <StripeButton />
              </header>
            </article>
            <article>
              <span className="image">
                <img src="images/pic02.jpg" alt="" />
              </span>
              <header className="major">
                <h3>
                  <a className="link">Highway</a><p>Rural side.</p>
                </h3>

            
                  <a href="https://youtu.be/N0rntG60qbs" target="blank" type="submit" className="button next scrolly">
                    Ver Demo
                  </a>
              
                <StripeButton />
              </header>
            </article>
            <article>
              <span className="image">
                <img src="images/pic03.jpg" alt="" />
              </span>
              <header className="major">
                <h3>
                  <a className="link">Lake</a><p>Beautiful sunset.</p>
                </h3>

               
                  <a href="https://youtu.be/UmjygJTCRHc" target="blank" type="submit" className="button next scrolly">
                    Ver Demo
                  </a>
               
                <StripeButton />
              </header>
            </article>
            <article>
              <span className="image">
                <img src="images/pic04.jpg" alt="" />
              </span>
              <header className="major">
                <h3>
                  <a className="link">Beach</a><p>Tropical paradise.</p>
                </h3>

                
                  <a href="https://youtu.be/xvZQQ7s-4E8" target="blank" type="submit" className="button next scrolly">
                    Ver Demo
                  </a>
               
                <StripeButton />
              </header>
            </article>
            <article>
              <span className="image">
                <img src="images/pic05.jpg" alt="" />
              </span>
              <header className="major">
                <h3>
                  <a className="link">Storm</a><p>From the air.</p>
                </h3>

                
                  <a href="https://youtu.be/e6MgmlpxXc0" target="blank" type="submit" className="button next scrolly">
                    Ver Demo
                  </a>
              
                <StripeButton />
              </header>
            </article>
            <article>
              <span className="image">
                <img src="images/pic06.jpg" alt="" />
              </span>
              <header className="major">
                <h3>
                  <a className="link">Snow</a><p>Winter path.</p>
                </h3>

               
                  <a href="https://youtu.be/rE0zHqp7IW8" target="blank" type="submit" className="button next scrolly">
                    Ver Demo
                  </a>
             
                <StripeButton />
              </header>
            </article>
          </section>

          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>Feedbacks</h2>
              </header>
              <p>
                En StudioMate Co. valoramos todas y cada una de las recomendaciones de nuestros usuarios 
				prestando atención a sus requerimientos y procesando la información de manera rápida 
				con el fin de ofrecerles mejores productos día a día.
              </p>
              <MailForm />
              <p>{/* <ul className="actions">
										<li> </li>
									
									</ul> */}</p>
            </div>
          </section>
        </div>

        <section id="contact">
          <div className="inner">
            <section></section>
            <section className="split">
              <section>
                <div className="contact-method">
                  <span className="icon solid alt fa-envelope"></span>
                  <h3>Email</h3>
                  <a href="#">information@untitled.tld</a>
                </div>
              </section>
              <section>
                <div className="contact-method">
                  <span className="icon solid alt fa-phone"></span>
                  <h3>Phone</h3>
                  <span>(000) 000-0000 x12387</span>
                </div>
              </section>
              <section>
                <div className="contact-method">
                  <span className="icon solid alt fa-home"></span>
                  <h3>Address</h3>
                  <span>
                    1234 Somewhere Road #5432
                    <br />
                    Nashville, TN 00000
                    <br />
                    United States of America
                  </span>
                </div>
              </section>
            </section>
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
}

export default Landing;
