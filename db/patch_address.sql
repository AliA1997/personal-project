UPDATE munther_auction_addresses
SET address = $1
WHERE id = $2;
SELECT * FROM munther_auction_addresses WHERE id = $2;
