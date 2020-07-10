import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Header() {
    return (
        <div>
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src="images/reiwa-kanji.png" alt="" /></a>
                    <h1><strong>Reiwa Co.</strong>, compañía de SaaS <br />
				con presencia en el mercado global.</h1>



                </div>
            </header>
        </div>
    )
}

export default Header
