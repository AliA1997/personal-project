INSERT INTO munther_auction_reciepts (last_four, exp_date, type_of_payment, date_of_registration, email, currency) 
VALUES (${last_four}, ${exp_date}, ${type_of_payment}, ${date_of_registration}, ${email}, ${currency});
SELECT * FROM munther_auction_reciepts WHERE email = ${email};