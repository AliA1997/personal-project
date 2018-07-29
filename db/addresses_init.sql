CREATE TABLE munther_auction_addresses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES munther_auction_users(id) ON UPDATE CASCADE ON DELETE CASCADE,
    username VARCHAR(120) REFERENCES munther_auction_users(username) ON UPDATE CASCADE ON DELETE CASCADE,
    address TEXT,
    city VARCHAR(50),
    state VARCHAR(50),
    country VARCHAR(50),
    zipcode VARCHAR(50)
);