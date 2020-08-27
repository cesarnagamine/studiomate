import React from "react";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

import Header from './Header';
import StripeButton from './StripeButton';
import "bootstrap/dist/css/bootstrap.min.css";
import MailForm from './MailForm';



class Landing extends React.Component {
    render() {
        return (

            <div>
                <Header />
                <div id="main">

                    <section id="one">
                        <header className="major" className='container align-center'>
                            <h2>Meiji Studio Co.</h2>
                        </header>

                        <p>Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi lorem vulputate lorem neque cubilia
                        ac in adipiscing in curae lobortis tortor primis integer massa adipiscing id nisi accumsan pellentesque
                        commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi
				lorem vulputate lorem neque cubilia.</p>

                        <ul className="actions" className='container align-center'>
                            <Link to='/about'>
                                <button type='submit' className='btn btn-success'>Nosotros</button>
                            </Link>
                        </ul>

                    </section>
                    <section id="two" className='container align-center'>
                        <h2>Meiji Studio Co. <br />
					convierte el análisis de datos en algo simple.</h2>
                        <article className="work-item">
                            <a>Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi lorem vulputate lorem neque cubilia
                            ac in adipiscing in curae lobortis tortor primis integer massa adipiscing id nisi accumsan pellentesque
                            commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi
				lorem vulputate lorem neque cubilia.</a>

                            


                        </article>
                    </section>
                    <section id="two">
						<h2>Recent Work</h2>
						<div className="row">
							<article className="col-6 col-12-xsmall work-item">
								<a href="images/fulls/01.jpg" class="image fit thumb"><img src="images/thumbs/01.jpg" alt="" /></a>
								<h3>Magna sed consequat tempus</h3>
								<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
							</article>
							<article className="col-6 col-12-xsmall work-item">
								<a href="images/fulls/02.jpg" className="image fit thumb"><img src="images/thumbs/02.jpg" alt="" /></a>
								<h3>Ultricies lacinia interdum</h3>
								<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
							</article>
							<article className="col-6 col-12-xsmall work-item">
								<a href="images/fulls/03.jpg" className="image fit thumb"><img src="images/thumbs/03.jpg" alt="" /></a>
								<h3>Tortor metus commodo</h3>
								<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
							</article>
							<article className="col-6 col-12-xsmall work-item">
								<a href="images/fulls/04.jpg" className="image fit thumb"><img src="images/thumbs/04.jpg" alt="" /></a>
								<h3>Quam neque phasellus</h3>
								<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
							</article>
                            <div className='container align-center' >
                                <br /> <h2>Interesado en obtener nuestro producto?</h2>
                                <br />
                                <StripeButton />

                            </div>
							
						</div>
						
					</section>

                    <section id="three">
                        <h2>Contáctate con nosotros</h2>
                        <p>Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu
				lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor.</p>
                        <div className="row">
                            <div className="col-8 col-12-small">
                                <MailForm />

                            </div>
                            <div className="col-4 col-12-small">

                                <h3 className="icon solid fa-home"><span className="label">Address</span></h3>
							1234 Av.Nose Donde.<br />
							Lima,<br /> San Miguel<br />
							Perú

                                        <h3 className="icon solid fa-mobile-alt"><span className="label">Phone</span></h3>
							987-654-321


                            </div>
                        </div>
                    </section>
                </div>

                <footer id="footer">
                    <div className="inner">

                        <ul className="copyright">
                            <li>&copy; Meiji Studio Co.</li>
                        </ul>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Landing
