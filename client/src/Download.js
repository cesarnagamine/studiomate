import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Header from './Header';


export class Download extends Component {


    render() {
        return (
            <div id="main">
                <Header />
                <Link to='/'>
                    <button >Inicio</button>
                </Link>
                <br />

                <section id="one">
                    <header className="major">
                        <h2>¡Felicitaciones por la compra!<br />
					Para mayores detalles sobre el uso del producto revise la documentación.</h2>
                    </header>
                    <p>Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi lorem vulputate lorem neque cubilia
                    ac in adipiscing in curae lobortis tortor primis.</p>
                    <div className="container align-center">
                        <button>
                            <a href='/ReiwaCo.Software.exe' download="">Descargar</a>
                        </button>

                    </div>
                </section>
            </div>
        )
    }
}

export default Download
