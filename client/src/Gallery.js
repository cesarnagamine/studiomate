import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import axios from "axios";
import StripeButton from "./StripeButton";
import "bootstrap/dist/css/bootstrap.min.css";
import MailForm from "./MailForm";
import ReactStars from "react-rating-stars-component";

class Gallery extends React.Component {
    render() {
        return (
            <div>
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

            </div>
        )
    }
}

export default Gallery