SELECT * FROM munther_auction_users JOIN munther_auction_addresses ON munther_auction_users.username = munther_auction_addresses.username
WHERE munther_auction_users.username = $1;