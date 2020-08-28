import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";



export class Download extends Component {


    render() {
        return (
            <div id="wrapper">
              

                <br />

                <section id="one">
                    <header className="major">
                        <h2>¡Felicitaciones por la compra!<br />
					Para mayores detalles sobre el uso del producto revise la documentación.</h2>
                    </header>
                    <p>Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi lorem vulputate lorem neque cubilia
                    ac in adipiscing in curae lobortis tortor primis.</p>  <Link to='/'>
                        <button className='btn btn-success'>Inicio</button>
                    </Link>
                    <div className="container align-center">
                        <button className='btn btn-outline-primary'>
                            <a href='/MeijiShot.exe' download="">Descargar</a>
                        </button>

                    </div>
                </section>
            </div>
        )
    }
}

export default Download
