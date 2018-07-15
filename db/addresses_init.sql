CREATE TABLE munther_auction_addresses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
    username VARHCHAR(80) REFERENCES users(username) ON UPDATE CASCADE ON DELETE CASCADE,
    address TEXT,
    city VARCHAR(20),
    state VARCHAR(20),
    country VARCHAR(20),
    zipcode VARCHAR(20)
);