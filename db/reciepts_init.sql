
CREATE TABLE munther_auction_reciepts (
    id SERIAL PRIMARY KEY,
    last_four INTEGER,
    exp_date VARCHAR(60),
    type_of_payment VARCHAR(60),
    date_of_registration VARCHAR(60),
    email TEXT REFERENCES munther_auction_users(email) ON DELETE CASCADE ON UPDATE CASCADE,
    currency VARCHAR(60)
);
