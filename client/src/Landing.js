import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Download from './Download';
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
                        <header className="major">
                            <h2>Reiwa Company</h2>
                        </header>

                        <p>Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi lorem vulputate lorem neque cubilia
                        ac in adipiscing in curae lobortis tortor primis integer massa adipiscing id nisi accumsan pellentesque
                        commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi
				lorem vulputate lorem neque cubilia.</p>

                        <ul className="actions">
                            <li> <Link to='/about'>
                                <button type='submit'>Nosotros</button>
                            </Link></li>
                        </ul>

                    </section>
                    <section id="two">
                        <h2>Reiwa Total Software Solution, <br />
					convierte el análisis de datos en algo simple.</h2>
                        <article className="work-item">
                            <a>Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi lorem vulputate lorem neque cubilia
                            ac in adipiscing in curae lobortis tortor primis integer massa adipiscing id nisi accumsan pellentesque
                            commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi
				lorem vulputate lorem neque cubilia.</a>

                            <div className='container align-center' >
                                <br /> <h2>Interesado en obtener nuestro producto?</h2>
                                <br />
                                <StripeButton />

                            </div>


                        </article>
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
                            <li>&copy; ReiwaCo.</li>
                        </ul>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Landing
