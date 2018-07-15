UPDATE munther_auction_addresses 
SET address = $1,
city = $2,
state = $3,
country = $4,
zipcode = $5
WHERE user_id = $6;
SELECT * FROM munther_auction_addresses WHERE user_id = $6;