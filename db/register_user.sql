INSERT INTO munther_auction_users (name, username, email, password, phone_number, company_name, imageurl, dealer, account_id, seller_id) 
VALUES  (${name}, ${username}, ${email}, ${password}, ${phone_number}, ${company_name}, 
${imageurl}, ${dealer}, ${account_id}, ${seller_id});
SELECT username, email, name, company_name, account_id, id FROM munther_auction_users WHERE account_id = ${account_id};