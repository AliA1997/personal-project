CREATE TABLE users (
    id SERIAL UNIQUE PRIMARY KEY, 
    type VARCHAR(40),
    name VARCHAR(100),
    dealer BOOLEAN, /*BOOLEAN or BOOL*/
    account_id UNIQUE TEXT, 
    email VARCHAR(80),
    username VARCHAR(80), 
    password TEXT,  
    seller_id TEXT

);