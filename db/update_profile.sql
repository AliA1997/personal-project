UPDATE munther_auction_users
SET name = $3, 
email = $5, 
username = $4, 
dealer = $2, 
company_name = $6,
phone_number = $7,
seller_id = $8
WHERE id = $1;
SELECT name, email, dealer, company_name, phone_number, seller_id, id FROM munther_auction_users WHERE id = $1;