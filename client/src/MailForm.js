import React from "react";
import axios from "axios";
import ReactStars from "react-rating-stars-component";

class MailForm extends React.Component {
  //Initialize the class component State:s
  state = {
    name: "",
    rate: "",
    message: ""
  };

  //Manage all the form inputs:
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //Manage rating:
  ratingChanged = (newRate) => {
    this.setState({rate: newRate});
 };

  //Handle the Submit:
  handleSubmit = (event) => {
    //Prevent the page from re-loading by defaut:
    event.preventDefault();

    //Object where all the form input data will be store to be used around:
    const user = {
      name: this.state.name,
      rate: this.state.rate,
      message: this.state.message,
    };

    // AXIOS post to use the post request from nodemailer at 'server.js' file:
    // axios.post('http://localhost:3001/api/form', { user })
    //     .then(res => {
    //         console.log(res);
    //         console.log(res.data);
    //     })

    // AXIOS post to use the post request from routes on 'routes/posts.js' file:
    axios.post("https://studiomate.herokuapp.com/posts", { user }).then((res) => {
      console.log(res);
      console.log(res.data);
      window.location = '/'
    });

   
  };

  //Resetea estado inicial:
  resetForm = (e) => {
    this.setState({
      name: "",
      message: "",
    });

    setTimeout(() => {
      this.setState({
        sent: false,
      });
    }, 1500);

    // window.location = '/'
  };

  // JSX Form element (check for properties!):
  render() {

    return (
      <div className="inner">
        <div className="col-12">
          <form method="post" action="send" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-12">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="@Nombre"
                  onChange={this.handleChange}
                />
              </div>
              <ReactStars
                type="number"
                name="rate"
                id="rate"
                count={5}
                value={0}
                edit={true}
                onChange={this.ratingChanged}
                size={24}
                activeColor="#ffd700"
              />
              <div className="col-12">
                <textarea
                  type="text"
                  name="message"
                  id="message"
                  placeholder="Mensaje"
                  onChange={this.handleChange}
                ></textarea>
              </div>
              
              <div className="col-12">
                <ul className="actions">
                  <li>
                    <input
                      type="submit"
                      value="Enviar"
                      className="alt scrolly"
                    />
                  </li>
                  <li>
                    <input
                      type="reset"
                      value="Borrar"
                      className="alt scrolly"
                      onClick={this.resetForm}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

//Export component to be used elsewhere:
export default MailForm;
