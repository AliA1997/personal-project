INSERT INTO munther_auction_sold_cars
(user_id, username, buyer, seller, type, make, model, year, odometer, condition_report_id, location, price, imageurl, description) VALUES
(${user_id}, ${username}, ${buyer}, ${seller}, ${type}, ${make}, ${model}, ${year}, ${odometer}, 
${condition_report_id}, ${location}, ${price}, ${imageurl}, ${description}, false);