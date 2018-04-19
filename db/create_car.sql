INSERT INTO cars (user_id, type, make, model, year, odometer, condition_report_id, location, price, imageurl) VALUES
(${user_id}, ${type}, ${make}, ${model}, ${year}, ${odometer}, ${condition_report_id}, ${location}, ${price}, ${imageurl});

SELECT * FROM cars WHERE user_id = ${user_id};


