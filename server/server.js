require('dotenv').config();
const express = require('express');
const userCtrl = require('./controllers/user_controller');
const carsCtrl = require('./controllers/cars_controller');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const massive = require('massive'); 
const PORT = 5050;

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 14,
    }
}))

massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database);
});

app.get('/api/cars', carsCtrl.retrCars);
app.post('/api/:userId/cars', carsCtrl.crteCars);
app.post('/api/register', userCtrl.register);
app.patch('/api/:userId', userCtrl.editProfile);
// app.patch('/api/:userId/cars/:carId', carsCtrl.updateCars);

app.post('/api/login', userCtrl.login);

app.listen(PORT, () => console.log('Listening on Port: ', PORT));