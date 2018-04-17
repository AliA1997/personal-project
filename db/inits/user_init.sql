CREATE TABLE users (
    id SERIAL UNIQUE PRIMARY KEY, 
    type VARCHAR(40),
    name VARCHAR(100),
    dealer BOOLEAN, /*BOOLEAN or BOOL*/
    account_id INTEGER, 
    email VARCHAR(80),
    username VARCHAR(80), 
    password INTEGER,  
    seller_id INTEGER UNIQUE REFERENCES users(id)

);