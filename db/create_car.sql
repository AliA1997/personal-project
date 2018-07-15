INSERT INTO munther_auction_cars 
(user_id, username, seller_id, type, make, model, year, odometer, condition_report_id, location, price, imageurl, description) VALUES
(${user_id}, ${username}, ${seller_id}, ${type}, ${make}, ${model}, ${year}, ${odometer}, 
${condition_report_id}, ${location}, ${price}, ${imageurl}, ${description});

SELECT * FROM munther_auction_cars WHERE user_id = ${user_id};


