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
app.use('/static', express.static(path.join(__dirname, 'static')));
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

// Routes that don't require login
app.get('/', (req, res) => {
    res.redirect('/login'); // Redirect to login by default
});

app.get('/login', (req, res) => {
    res.render('login.pug');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'admin' && password === 'password') {
        req.session.loggedIn = true;
        res.redirect('/home'); // Redirect to home after successful login
    } else {
        res.render('login.pug', { error: 'Invalid username or password' });
    }
});

// 🟢 Allow public access to 'about' and 'service' pages
app.get('/about', (req, res) => {
    res.render('about.pug');
});

app.get('/service', (req, res) => {
    res.render('service.pug');
});

// Routes that require login
app.get('/home', requireLogin, (req, res) => {
    res.render('home.pug');
});

app.get('/contact', requireLogin, (req, res) => {
    res.render('contact.pug');
});

const fs = require("fs"); // Import file system module
app.post('/contact', requireLogin, (req, res) => {
    console.log("Form Data Received:", req.body); // Debugging

    // Convert dob (date) to Date object if needed
    if (req.body.dob) {
        req.body.dob = new Date(req.body.dob);
    }

    var myData = new Contact(req.body);

    myData.save()
        .then(() => {
            console.log("Data saved successfully!");

            // Format data for output.txt
            const logEntry = `Name: ${req.body.myname}, Mother: ${req.body.mother_name}, Father: ${req.body.father_name}, Age: ${req.body.age}, Email: ${req.body.email}, DOB: ${req.body.dob}, More: ${req.body.more}\n`;

            // Append data to output.txt
            fs.appendFile("output.txt", logEntry, (err) => {
                if (err) {
                    console.error("Error writing to file:", err);
                }
            });

            res.render('contact.pug', { message: 'Your form submitted successfully' });
        })
        .catch((err) => {
            console.error("Error saving contact:", err);
            res.status(500).send("Error saving contact details");
        });
});

// Logout route
app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login'); // Redirect to login after logout
    });
});


// Start the server
app.listen(port, () => {
    console.log(`App started successfully on port ${port}`);
});

