INSERT INTO users (type, name, username, email, password, phone_number, company_name, imageurl, dealer, account_id, seller_id) 
VALUES  (${type}, ${name}, ${username}, ${email}, ${password}, ${phone_number}, ${company_name}, ${imageurl}, ${dealer}, ${account_id}, ${seller_id});
SELECT username, email, name, company_name, type, id FROM users WHERE account_id = ${account_id};