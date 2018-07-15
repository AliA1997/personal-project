CREATE TABLE munther_auction_cars (
    id SERIAL PRIMARY KEY, 
    user_id INTEGER REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE, /*Integer */
    seller_id TEXT REFERENCES users(seller_id) ON UPDATE CASCADE ON DELETE CASCADE,
    username TEXT REFERENCES users(username) ON UPDATE CASCADE ON DELETE CASCADE,
    type TEXT, 
    make VARCHAR(50),
    model VARCHAR(50),
    year INTEGER, 
    odometer INTEGER, 
    condition_report_id TEXT, 
    location TEXT,
    price TEXT,
    imageurl TEXT
);
