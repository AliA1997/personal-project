const uuid = require('uuid');
module.exports = {
    readAllCars: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.select_cars().then(cars => {
            res.status(200).json({cars});
        })
    },
    crteCars: (req, res) => {
        const { id } = req.params;
        const {type, make, model, year, odometer, location, price, imageurl} = req.body;
        const newCar = {
            user_id: id,
            type, 
            make, 
            model, 
            year, 
            odometer, 
            location,
            price, 
            imageurl,
            condition_report_id: `${uuid.v4()}`,
        }
        const dbInstance = req.app.get('db');
        dbInstance.create_car(newCar).then(newCar => {
            res.status(200).json({newCar});
        }).catch(err => console.log(err));
    },
    readCars: (req, res) => {
        const { id } = req.params;
        const dbInstance = req.app.get('db');
        dbInstance.select_user_cars(id).then(user_cars => {
            res.status(200).json({user_cars});
        })
    },
    updCars: (req, res) => {
        const { id, carId } = req.params;
        const {type, make, model, year, odometer, location, price, imageurl} = req.body;
        const updatedCar = {
            id: carId,
            user_id: id,
            type, 
            make, 
            model,
            year,
            odometer,
            location,
            price,
            imageurl,
            condition_report_id: `${id} ${uuid.v4()} ${carId}`
        }
        const dbInstance = req.app.get('db');
        dbInstance.update_user_car(updatedCar).then(updatedCar => {
            res.status(200).json({updatedCar});
        });
    },
    delCars: (req, res) => {
      const { id, carId } = req.params;
      const dbInstance = req.app.get('db');
      dbInstance.delete_car([id, carId]).then(() => {
          res.status(200).json({message: 'Delete was successful!!!'});
      });
    }
}