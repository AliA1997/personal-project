UPDATE munther_auction_addresses
SET zipcode = $1
WHERE id = $2;
SELECT * FROM munther_auction_addresses WHERE id = $2;