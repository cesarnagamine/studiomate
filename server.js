const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const postRoute = require('./routes/posts');
const cors = require('cors');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const path = require('path');


const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const publicPath = path.join(__dirname, 'client/public');
app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});


//Routes:
//Importa archivo 'posts' desde el folder 'routes'
//Usa las rutas del archivo 'posts' para el endpoint '/posts'


app.use('/posts', postRoute);
//Post request to send emails authomatically using nodemailer
//Triggerd from the 'Form' component handleSubmit() function:
app.post('/api/form', (req, res) => {
    console.log(req.body);

    //Set transporter, in this case Google Gmail account created by you:
    const transporter = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        auth: {
            user: 'nagamine.soft.dev@gmail.com',
            pass: 'codingpath2020'
        }
    }));

    //Get the data from the 'handleSubmit()' function from the Form component:
    const mailOptions = {
        from: req.body.user.name,
        to: [req.body.user.email, 'nagamine.soft.dev@gmail.com'],
        subject: req.body.user.subject,
        text: req.body.user.message
    };

    //Use transporter to send 'mailOptions' data, if there's an error
    //print it in the console, otherwise print the 'mailOptions' data:
    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });

});

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB!')
}).catch((err) => {
    console.error('Error!', err)
});

//ADDED FOR DEPLOYMENT:
if (process.env.NODE_ENV === 'production') {

    app.use(express.static('client/build'));

    app.get('*', () => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(port);
console.log('3001');