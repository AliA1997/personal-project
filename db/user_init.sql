CREATE TABLE munther_auction_users (
    id SERIAL PRIMARY KEY UNIQUE, 
    name VARCHAR(100),
    dealer BOOLEAN, /*BOOLEAN or BOOL*/
    account_id TEXT UNIQUE, 
    email TEXT UNIQUE,
    username VARCHAR(80) UNIQUE, 
    password TEXT,  
    company_name VARCHAR(90),
    phone_number TEXT,
    seller_id TEXT  UNIQUE,
    imageurl TEXT,
    cars_bid_on JSONB[],
    verification_link TEXT,
    verified BOOLEAN
);


ALTER TABLE munther_auction_users ADD COLUMN imageurl TEXT;