SELECT munther_auction_users.username, munther_auction_users.id, name, email, company_name, phone_number, seller_id, dealer, 
address, zipcode, city, state, country FROM munther_auction_users JOIN munther_auction_addresses
ON users.id = munther_auction_addresses.user_id WHERE munther_auction_users.id = $1;