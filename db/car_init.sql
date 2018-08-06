CREATE TABLE munther_auction_cars (
    id SERIAL PRIMARY KEY, 
    user_id INTEGER REFERENCES munther_auction_users(id) ON UPDATE CASCADE ON DELETE CASCADE, /*Integer */
    seller_id TEXT REFERENCES munther_auction_users(seller_id) ON UPDATE CASCADE ON DELETE CASCADE,
    username TEXT REFERENCES munther_auction_users(username) ON UPDATE CASCADE ON DELETE CASCADE,
    type TEXT, 
    make VARCHAR(50),
    model VARCHAR(50),
    year INTEGER, 
    odometer INTEGER, 
    condition_report_id TEXT, 
    location TEXT,
    price TEXT,
    imageurl TEXT,
    expiration_date TIMESTAMP,
    bids JSONB[]
);
ALTER TABLE munther_auction_cars ADD COLUMN description VARCHAR(160);

CREATE TABLE munther_auction_sold_cars (
    id SERIAL PRIMARY KEY,
    buyer INTEGER REFERENCES munther_auction_users(id) ON UPDATE CASCADE ON DELETE CASCADE,
    seller TEXT REFERENCES munther_auction_users(seller_id) ON UPDATE CASCADE ON DELETE CASCADE,
    username TEXT REFERENCES munther_auction_users(username) ON UPDATE CASCADE ON DELETE CASCADE,
    type TEXT,
    make VARCHAR(50),
    model VARCHAR(50),
    year INTEGER,
    odometer INTEGER,
    condition_report_id TEXT,
    location TEXT,
    price TEXT,
    imageurl TEXT,
    sold BOOLEAN
);