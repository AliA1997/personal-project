UPDATE munther_auction_users
SET name = $1
WHERE id = $2;
SELECT * FROM munther_auction_users WHERE id = $2;