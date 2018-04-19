CREATE TABLE cars (
    id SERIAL PRIMARY KEY, 
    user_id INTEGER REFERENCES users(id), /*Integer */
    seller_id INTEGER REFERENCES users(seller_id),
    type TEXT, 
    make VARCHAR(20),
    model VARCHAR(40),
    year INTEGER, 
    odometer INTEGER, 
    condition_report_id TEXT, 
    location TEXT,
    price INTEGER,
    imageurl TEXT
);
