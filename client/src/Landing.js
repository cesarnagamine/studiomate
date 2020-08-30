import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import axios from "axios";
import Gallery from "./Gallery";
import "bootstrap/dist/css/bootstrap.min.css";
import MailForm from "./MailForm";
import ReactStars from "react-rating-stars-component";

const Exercise = props => (
  <div className='inner'>
    <h6>@{props.exercise.name}:</h6>  <ReactStars
                type="number"
                name="rate"
                id="rate"
                count={5}
                value={props.exercise.rate}
                edit={false}

                size={24}
                activeColor="#ffd700"
              />
  <p>{props.exercise.message}</p>
  <br/>
  </div>
)


class Landing extends React.Component {
    
  state = {
    comments: []
  };
  
  
  exerciseList() {
    return this.state.comments.map(currentcomments => {
      return <Exercise exercise={currentcomments}  key={currentcomments._id} />;
    })
  }

  componentDidMount() {
    axios.get('http://localhost:3001/posts/')
      .then(response => {
        this.setState({ comments: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {

    
    return (
      <div id="wrapper">
        <header id="header" className="alt">
          <a className="logo">
            <strong>StudioMate Co.</strong> <span>by César Nagamine</span>
          </a>
        </header>


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
          <Gallery />
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

          <div className='inner'>
          <header className="major">
                <h2>Feeds:</h2>
              </header>
            { this.exerciseList() }
          </div>
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
                  <a href="#">cesarnagamine@gmail.com</a>
                </div>
              </section>
              <section>
                <div className="contact-method">
                  <span className="icon solid alt fa-phone"></span>
                  <h3>Phone</h3>
                  <span>987-654-321</span>
                </div>
              </section>
              <section>
                <div className="contact-method">
                  <span className="icon solid alt fa-home"></span>
                  <h3>Dirección</h3>
                  <span>
                    Algun Lugar 5432
                    <br />
                    Lima, Perú
                    
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
