INSERT INTO munther_auction_cars 
(user_id, username, seller_id, type, make, model, year, odometer, condition_report_id, expiration_date, 
location, price, imageurl, description) VALUES
(${user_id}, ${username}, ${seller_id}, ${type}, ${make}, ${model}, ${year}, ${odometer}, 
${condition_report_id}, NOW() + ${expiration_date}, ${location}, ${price}, ${imageurl}, ${description}) RETURNING *;


