UPDATE munther_auction_cars 
SET bids = array_append(bids, ${bid}::JSONB)
WHERE id = ${car_id};
SELECT bids FROM munther_auction_cars WHERE id = ${car_id};