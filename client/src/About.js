import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Header from './Header';

function About() {
    return (
        <div id="main">
            <Header />
            <section id="one">

                <header className="major">
                    <h2>Quiénes somos?.</h2>
                </header>
                <p> Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi lorem vulputate lorem neque cubilia
                ac in adipiscing in curae lobortis tortor primis integer massa adipiscing id nisi accumsan pellentesque
                commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi
				lorem vulputate lorem neque cubilia.</p>
                <ul className="actions">
                    <li>
                        <Link to='/'>
                            <button>Inicio</button>
                        </Link>
                    </li>

                </ul>
            </section>
        </div>
    )
}

export default About
