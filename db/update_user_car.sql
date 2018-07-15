UPDATE munther_auction_cars 
SET id = ${id},
    user_id = ${user_id}, 
    type = ${type}, 
    make = ${make}, 
    model = ${model},
    year = ${year},
    odometer = ${odometer},
    location = ${location},
    price = ${price},
    imageurl = ${imageurl}
WHERE id = ${id} AND user_id = ${user_id};

SELECT * FROM munther_auction_cars WHERE id = ${id} AND user_id = ${user_id};