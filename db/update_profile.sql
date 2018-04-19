UPDATE users 
SET type = ${type}, 
name = ${name}, 
email = ${email}, 
username = ${username}, 
password = ${password}, 
dealer = ${dealer}, 
account_id = ${account_id} 
WHERE id = ${id};
SELECT * FROM users WHERE id = ${id};