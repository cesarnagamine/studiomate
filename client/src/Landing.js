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
						<a className="logo"><strong>StudioMate Co.</strong> <span>by César Nagamine</span></a>
						<nav>
							<a className="logo">Menu</a>
						</nav>
					</header>
           
              

				
					<nav id="menu">
						{/* <ul className="links">
							<li><a href="index.html">Home</a></li>
							<li><a href="landing.html">Landing</a></li>
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
								<p>A responsive site template designed by HTML5 UP<br />
								and released under the Creative Commons.</p>
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
										<h3><a href="landing.html" className="link">Aliquam</a></h3>
										<p>Ipsum dolor sit amet</p>
									</header>
								</article>
								<article>
									<span className="image">
										<img src="images/pic02.jpg" alt="" />
									</span>
									<header className="major">
										<h3><a href="landing.html" className="link">Tempus</a></h3>
										<p>feugiat amet tempus</p>
									</header>
								</article>
								<article>
									<span className="image">
										<img src="images/pic03.jpg" alt="" />
									</span>
									<header className="major">
										<h3><a href="landing.html" className="link">Magna</a></h3>
										<p>Lorem etiam nullam</p>
									</header>
								</article>
								<article>
									<span className="image">
										<img src="images/pic04.jpg" alt="" />
									</span>
									<header className="major">
										<h3><a href="landing.html" className="link">Ipsum</a></h3>
										<p>Nisl sed aliquam</p>
									</header>
								</article>
								<article>
									<span className="image">
										<img src="images/pic05.jpg" alt="" />
									</span>
									<header className="major">
										<h3><a href="landing.html" className="link">Consequat</a></h3>
										<p>Ipsum dolor sit amet</p>
									</header>
								</article>
								<article>
									<span className="image">
										<img src="images/pic06.jpg" alt="" />
									</span>
									<header className="major">
										<h3><a href="landing.html" className="link">Etiam</a></h3>
										<p>Feugiat amet tempus</p>
									</header>
								</article>
							</section>

					
							<section id="two">
								<div className="inner">
									<header className="major">
										<h2>Massa libero</h2>
									</header>
									<p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
									<ul className="actions">
										<li> <StripeButton /></li>
									</ul>
								</div>
							</section>

					</div>

			
					<section id="contact">
						<div className="inner">
							<section>
              <MailForm />
							</section>
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
										<span>1234 Somewhere Road #5432<br />
										Nashville, TN 00000<br />
										United States of America</span>
									</div>
								</section>
							</section>
						</div>
            <div className="inner">
							<ul className="icons">
								<li><a href="#" className="icon brands alt fa-twitter"><span className="label">Twitter</span></a></li>
								<li><a href="#" className="icon brands alt fa-facebook-f"><span className="label">Facebook</span></a></li>
								<li><a href="#" className="icon brands alt fa-instagram"><span className="label">Instagram</span></a></li>
								<li><a href="#" className="icon brands alt fa-github"><span className="label">GitHub</span></a></li>
								<li><a href="#" className="icon brands alt fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
							</ul>
						</div>
					</section>

				
					<footer id="footer">
				
					</footer>

			</div>
    );
  }
}

export default Landing;
