UPDATE cars 
SET id = ${id},
    user_id = ${user_id}, 
    type = ${type}, 
    make = ${make}, 
    model = ${model},
    year = ${year},
    odometer = ${odometer},
    condition_report_id = ${condition_report_id}, 
    location = ${location},
    price = ${price},
    imageurl = ${imageurl}
WHERE id = ${id} AND user_id = ${user_id};

SELECT * FROM cars WHERE id = ${id} AND user_id = ${user_id};