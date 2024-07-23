// app.js

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
const port = 8000;

// MongoDB connection setup
mongoose.connect('mongodb://localhost/contactDance', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Mongoose schema and model definition
var contactSchema = new mongoose.Schema({
    myname: String,
    mother_name: String,
    father_name: String,
    age: Number,
    email: String,
    dob: Date,
    more: String
});

var Contact = mongoose.model('Contact', contactSchema);

// Middleware setup
app.use('/static', express.static('static'));
app.use(express.urlencoded({ extended: true }));

// Setup express-session middleware
app.use(session({
    secret: 'your-secret-key', // Change this to a long, random string
    resave: false,
    saveUninitialized: true
}));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middleware to redirect to login page if not authenticated
function requireLogin(req, res, next) {
    if (req.session.loggedIn) {
        next();
    } else {
        res.redirect('/login');
    }
}

// Routes
app.get('/', (req, res) => {
    res.redirect('/login'); // Redirect to login by default
});

app.get('/login', (req, res) => {
    res.render('login.pug');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Example authentication logic (replace with your actual authentication)
    if (username === 'admin' && password === 'password') {
        req.session.loggedIn = true;
        res.redirect('/home'); // Redirect to home page after successful login
    } else {
        res.render('login.pug', { error: 'Invalid username or password' });
    }
});



app.get('/home', requireLogin, (req, res) => {
    const params = {};
    res.render('home.pug', params);
});

app.get('/contact', requireLogin, (req, res) => {
    const params = {};
    res.render('contact.pug', params);
});

app.get('/service', requireLogin, (req, res) => {
    const params = {};
    res.render('service.pug', params);
});

app.get('/about', requireLogin, (req, res) => {
    const params = {};
    res.render('about.pug', params);
});

app.post('/contact', requireLogin, (req, res) => {
    var myData = new Contact(req.body);
    myData.save()
        .then(() => {
            res.render('contact.pug', { message: 'Your form submitted successfully' });
        })
        .catch((err) => {
            console.error('Error saving contact:', err);
            res.status(500).send('Error saving contact details');
        });
});

// Start the server
app.listen(port, () => {
    console.log(`App started successfully on port ${port}`);
});

