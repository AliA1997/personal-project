const uuid = require('uuid');
module.exports = {
    readFilteredCars: (req, res) => {
        const { state } = req.params;
        const dbInstance = req.app.get('db');
        dbInstance.select_cars().then(cars => {
            const filterCars = cars.filter(c => {
                const returnedLoc = c.location.split('').splice(c.location.length - 2).join('');
                return returnedLoc === state;
            }).catch(err => console.log("Select FIltered Cars Database Error----------", err));
            res.status(200).json({cars: filterCars});
        })        
    },
    readBuyerCars: (req, res) => {
        const { id } = req.params;
        const dbInstance = req.app.get('db');
        dbInstance.select_buyer_car(id).then(car => {
            res.status(200).json({car});
        }).catch(err => console.log('Select Buyer Car Database Error-----------', err));
    },
    readAllCars: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.select_cars().then(cars => {
            res.status(200).json({cars});
        }).catch(err => console.log('Read ALl Cars Error--------------', err));
    },
    crteCars: (req, res) => {
        const { id, user_id, username, seller_id } = req.session.user;
        console.log(user_id);
        console.log('id-------------', id);
        const {type, make, model, year, odometer, location, price, imageurl, description} = req.body;
        const newCar = {
            user_id: +user_id,
            username,
            seller_id,
            type,
            make, 
            model, 
            year: Number(year), 
            description,
            odometer: Number(odometer), 
            location,
            price: Number(price), 
            imageurl,
            condition_report_id: `${uuid.v4()}`,
        }
        console.log(newCar);        
        const dbInstance = req.app.get('db');
        dbInstance.create_car(newCar).then(newCar => {
            res.status(200).json({newCar});
        }).catch(err => console.log(err));
    },
    readCars: (req, res) => {
        const { id } = req.params;
        console.log('user_id----------------', id);
        const dbInstance = req.app.get('db');
        dbInstance.select_user_cars(+id).then(user_cars => {
            console.log('usercars----------------------', user_cars);
            res.status(200).json({user_cars});
        }).catch(err => console.log('Select User Cars Database Error---------------', err));
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
            year: Number(year),
            odometer,
            location,
            price: Number(price),
            imageurl,
        }
        const dbInstance = req.app.get('db');
        dbInstance.update_user_car(updatedCar).then(updatedCar => {
            res.status(200).json({updatedCar});
        }).catch(err => console.log('Update user Cars database error----------', err));
    },
    delCars: (req, res) => {
      const { id, carId } = req.params;
      const dbInstance = req.app.get('db');
      dbInstance.delete_car([id, carId]).then(() => {
          res.status(200).json({message: 'Delete was successful!!!'});
      }).catch(err => console.log('Delete Car Database Error------------', err));
    }
}