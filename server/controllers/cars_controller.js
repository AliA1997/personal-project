const uuid = require('uuid');
const cars = [
    {
        id: 1,
        make: 'bmw',
        model: '525i',
        year: 2002
    },
    {
        id: 2,
        make: 'mercedes-benz',
        model: 'c-class',
        year: 2012
    },
    {
        id: 1,
        make: 'honda',
        model: 'civic',
        year: 2018
    },
    {
        id: 2,
        make: 'toyota',
        model: 'camry',
        year: 2010
    }
]
module.exports = {
    // retrieveCars: (req, res) => {
    //     const dbInstance = req.app.get('db');
    //     dbInstance.select_cars().then(cars => {
    //         res.status(200).send(cars);
    //     }).catch(err => console.log(err));
    // }
    retrCars: (req, res) => {
        res.status(200).send(cars);
    },
    retrCarsByUser: (req, res) => {
        const { id } = req.params;
        const userCars = cars.filter(c => c.id === id);
        res.status(200).send(userCars);        
    }, 
    crteCars: (req, res) => {
        const {type, make, model, year, odometer, location} = req.body;
        const newCar = {
            type, 
            make, 
            model, 
            year, 
            odometer, 
            location,
            condition_report_id: uuid.v4()
        }
        cars.push(newCar);
        res.status(200).send({cars});
    }
}