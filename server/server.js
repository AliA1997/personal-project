require('dotenv').config();
const express = require('express');
const userCtrl = require('./controllers/user_controller');
const carsCtrl = require('./controllers/cars_controller');
const stripeCtrl = require('./controllers/stripe_controller');
const cloudinaryCtrl = require('./controllers/cloudinary_controller');

const bodyParser = require('body-parser');
// const helmet = require('helmet');
// const fs = require('fs');
// const path = require('path');
// const https = require('https');
// const bcrypt = require('bcrypt');
const cors = require('cors');
///Middlewares 
const checkBid = require('./middlewares/checkBid');
const checkCar = require('./middlewares/checkCar');
const checkUser = require('./middlewares/checkUser');
///////////
const munther_auction_session = require('express-session');
// const pg = require('pg');
// const pg = require('pg');
const pgSession = require('connect-pg-simple')(munther_auction_session);
// console.log('pgSession--------------', pgSession);
const massive = require('massive'); 
// const stripe = require('stripe')(process.env.REACT_APP_STRIPE_CLIENT_KEY)
const PORT = 5051;

const app = express();

//Middleware
app.use(express.static(`${__dirname}/../build`));
app.use(cors());
app.use(bodyParser.json());
// app.use(cors());
app.use(munther_auction_session({
    secret: process.env.SESSION_SECRET,
    //Connects to database using the connection string and table name
    store: new pgSession({
        conString: process.env.CONNECTION_STRING,
        tableName: 'munther_auction_session',   
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 14,
    }
}))

massive(process.env.CONNECTION_STRING).then(database => {
    // console.log('database-------------', database)
    app.set('db', database);
}).catch(err => {
    console.log('Massive Error', err);
});


// var certOptions = {
//     key: fs.readFileSync(path.resolve('server/server.key')),
//     cert: fs.readFileSync(path.resolve('server/server.crt'))
// }
setTimeout(() => {
    //Cloudianry Endpoints =
    app.get('/api/upload', cloudinaryCtrl.upload);
    //Stripe Endpoints 
    app.post('/api/payment', stripeCtrl.paymentAPI);
    //Buyer Endpoints
    app.get('/api/cars/:state', carsCtrl.readFilteredCars);
    app.get('/api/cars/:state/:id', carsCtrl.readBuyerCars);
    app.get('/api/cars', carsCtrl.readAllCars);
    //Seller Endpoints
    app.get('/api/:id/cars', carsCtrl.readCars);
    app.post('/api/:id/cars', checkCar, carsCtrl.crteCars);
    app.patch('/api/:id/cars/:carId', carsCtrl.updCars);
    app.delete('/api/:id/cars/:carId', carsCtrl.delCars);

    //Bidding Endpoints 
    app.patch('/api/bid/:car_id', checkUser, checkBid, carsCtrl.bid);

    app.post('/api/register', userCtrl.register);
    // app.patch('/api/profile/:id', userCtrl.editProfile);
    app.patch('/api/profile/:id/email', checkUser,  userCtrl.updateEmail);
    app.patch('/api/profile/:id/name', checkUser,  userCtrl.updateName);
    app.patch('/api/profile/:id/username', checkUser,  userCtrl.updateUsername);
    app.patch('/api/profile/:id/dealer', checkUser,  userCtrl.updateDealer);
    app.patch('/api/profile/:id/phone_number', checkUser,  userCtrl.updatePhoneNumber);
    app.patch('/api/profile/:id/company_name', checkUser,  userCtrl.updateCompanyName);
    app.patch('/api/profile/:id/zipcode', checkUser,  userCtrl.updateZipcode);
    app.patch('/api/profile/:id/state', checkUser,  userCtrl.updateState);
    app.patch('/api/profile/:id/address', checkUser,  userCtrl.updateAddress);
    app.patch('/api/profile/:id/country', checkUser,  userCtrl.updateCountry);
    app.patch('/api/profile/:id/city', checkUser,  userCtrl.updateCity);
    app.post('/api/logout', userCtrl.logout);
    app.post('/api/login', userCtrl.login);

    app.get('/api/user-data', userCtrl.getUserData);
    app.get('*', (req, res)=>{
        res.sendFile(path.join(__dirname, '../build/index.html'));
    })
}, 250)
//Profile Page

app.listen(PORT, () => console.log('Listening on Port', PORT));
