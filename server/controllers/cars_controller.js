const uuid = require('uuid');
const nodeCron = require('node-cron');
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
            const sortedBids = car[0].bids.sort((a, b) => +a.bid < b.bid)
            res.status(200).json({car, bids: sortedBids.map((bid, i) => i < 5 && bid)});
        }).catch(err => console.log('Select Buyer Car Database Error-----------', err));
    },
    readAllCars: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.select_cars().then(cars => {
            res.status(200).json({cars});
        }).catch(err => console.log('Read ALl Cars Error--------------', err));
    },
    crteCars: (req, res) => {
        const dbInstance = req.app.get('db');
        const { user_id, username, seller_id } = req.session.user;
        console.log('id-------------', user_id);
        const {type, make, model, year, odometer, location, price, imageurl, description, expiration_date} = req.body;
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
            expiration_date: `${expiration_date} days`
        };
        // const task = nodeCron.schedule(`* * */${+expiration_date} * * *`, function() {
        //     carBidExpire(dbInstance, newCar);
        // }, false);
        nodeCron.schedule(`* ${expiration_date} * * *`, function() {
            console.log('task hit---------');
            carBidExpire(dbInstance, nsewCar);
        }, false);
        console.log(newCar);        
        dbInstance.create_car(newCar).then(newCar => {
            res.json({newCar});
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
    bid: (req, res) => {
        const dbInstance = req.app.get('db');
        const { car_id } = req.params;
        const { username } = req.session.user;
        console.log('req.body------------', req.body);
        const { bid } = req.body;
        dbInstance.bid({car_id: +car_id, bid: {bid: +bid, username }})
        .then(bids => {
            const sortedBids = bids[0].bids.sort((a, b) => a.bid < b.bid);
            // console.log('bids-----------', sortedBids);
            res.json({message: 'Just Bidded', bids: sortedBids.map((bid, i) => i < 5 && bid)});
        }).catch(err => console.log("Bidding Database Error----------", err));
    },
    delCars: (req, res) => {
        const { id, carId } = req.params;
      const dbInstance = req.app.get('db');
      dbInstance.delete_car([id, carId]).then(() => {
          res.status(200).json({message: 'Delete was successful!!!'});
      }).catch(err => console.log('Delete Car Database Error------------', err));
    },
    //Car bought methods. 
    readCarsNotBought: (req, res) => {
        //Define the database request from the app's request 
        const dbInstance = req.app.get('db');
        dbInstance.read_cars_not_bought().then(cars => {
            res.status(200).json({cars});
        }).catch(err => console.log('Car Not Bought Database Error-----------', err));
    },
    readBoughtCars: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.read_bought_cars().then(cars => {
            res.status(200).json({cars});
        }).catch(err => console.log('Read Bought Cars Database Error-----------', err));
    },
    carBidExpire(dbInstance, newCar) {
            const { user_id, type, make, model, year, odometer, location, price, imageurl, description} = newCar;
            const newSoldCar = {
                buyer: +user_id,
                username,
                seller: seller_id,
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
            };
            dbInstance.add_cars_to_sold(newSoldCar).then(cars => {
                console.log('Cars added to sold-------------');
            }).catch(err => console.log('Add cars to sold database error----------', err));
    },
    boughtCar: (req, res) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params;
        dbInstance.buy_car(id).then(cars => {
            res.status(200).json({cars});
        }).catch(err => console.log("Buy Car Error-----------------", err));
    }, 
}