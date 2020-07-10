import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Download from './Download';
import About from './About';
import Landing from './Landing';
import StripeButton from './StripeButton';
import "bootstrap/dist/css/bootstrap.min.css";


export default function App() {
    return (
        <Router>
            <Route path="/" exact component={Landing} />
            <Route path="/download" exact component={Download} />
            <Route path="/about" exact component={About} />
        </Router>
    );
}


