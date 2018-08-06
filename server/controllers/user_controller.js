const nodemailerCtrl = require('./nodemailer_controller');
const uuid = require('uuid');
const bcrypt = require('bcrypt');
const saltRounds = 12;
module.exports = {
    getUserData: (req, res) => {
        console.log('Session user------', req.session.user);
        res.json({user: req.session.user});
    },
    /* DONE  */
    register: (req, res) => {
        //Both user info and addresss info comes from request body.
        //User data
        const { name, username, email, password, phone_number, company_name, imageurl, dealer  } = req.body;
        //Address data 
        const { address, city, state, country, zipcode } = req.body;
        const accountId = uuid.v4();
        // bcrypt.genSalt(saltRounds).then(salt => {

        // });
        bcrypt.hash(String(password), saltRounds).then(hashPass => {
    
        const newUser = {
            dealer: dealer,
            name, 
            username,
            phone_number,
            email, 
            password: hashPass, 
            company_name,
            imageurl,
            seller_id: dealer ? uuid.v4() : null,
            account_id: `${username}-${accountId}-${email}`,
            verification_link: uuid.v4()
        }
        console.log('newUser-------------------------------------', newUser);
        const userAddress = {
            username,
            address,
            city, 
            state,
            country,
            zipcode
        };
        const dbInstance = req.app.get('db');
        dbInstance.register_user(newUser).then(user => {
            req.session.user = user[0];
            //Sends a verification email after the user registers, by retrieving the email, username, and verification_link from user.
            nodemailerCtrl.verificationEmail(req.session.user.username, req.session.user.email, req.session.user.verification_link);
            req.session.save();
            console.log('User Registered!!', req.session.user);
            userAddress.user_id = req.session.user.id;
            dbInstance.create_address(userAddress).then(userAdd => {
                console.log(userAddress);
                res.status(200).json({message: 'Congrats you successfully registered!'});
            })
            .catch(err => console.log('Address Error', err));
        })
        //Todo Define the Catch statement, to return values if there is the same username, email
        .catch(err => console.log('User Database error', err));

    }).catch(err => console.log('Bcrypt error', err));
    },
    /////D
    ////O
    ///N
    //E
    login: (req, res) => {
        const { username, password } = req.body;
        const dbInstance = req.app.get('db');
        dbInstance.find_user(username).then(user => {
            bcrypt.compare(password, user[0].password).then(passwordMatch => {
                if(passwordMatch) {
                    //Deletes the usernames information from the session.
                    delete user[0].password;
                    req.session.user = user[0];
                    req.session.save();
                    res.status(200).json({user: user[0]});
                } else {
                    res.json({message: 'Invalid Password or Username!!!!'});
                }
            }).catch(err => console.log('Bcrypt Error!', err));
        }).catch(err => console.log('Database error', err));
    },
    logout: (req, res) => {
        req.session.destroy();
        res.status(200).json({message: 'Logout successfully!!!'});
    },
    updateEmail: (req, res) => {
        //Define your database instance fron your app.get.('db')
        const dbInstance = req.app.get('db');
        const { id } = req.params;
        const { email } = req.body;
        dbInstance.patch_email([email, id]).then(updatedUser => {
            res.status(200).json({user: updatedUser, message: 'Email Updated Successfully!'});
        }).catch(err => console.log('Patch Email Database Error-----------------', err));
    },
    updateName: (req, res) => {
        //Define your database instance fron your app.get.('db')
        const dbInstance = req.app.get('db');
        const { id } = req.params;
        const { name } = req.body;
        dbInstance.patch_name([name, id]).then(updatedUser => {
            res.status(200).json({user: updatedUser, message: 'Name Updated Successfully!'});
        }).catch(err => console.log('Patch Name Database Error-------------', err));
    },
    updateUsername: (req, res) => {
        //Define your database instance fron your app.get.('db')
        const dbInstance = req.app.get('db');
        const { id } = req.params;
        const { username } = req.body;
        dbInstance.patch_username([username, id]).then(updatedUser => {
            res.status(200).json({user: updatedUser, message: 'Username Updated Successfully!'});
        }).catch(err => console.log('Patch Usrename Database Error----------------', err));
    },
    updateDealer: (req, res) => {
        //Define your database instance fron your app.get.('db')
        const dbInstance = req.app.get('db');
        const { id } = req.params;
        const { dealer } = req.body;
        dbInstance.patch_dealer([dealer, id]).then(updatedUser => {
            res.status(200).json({user: updatedUser, message: 'Dealer Updated Successfully!'});
        }).catch(err => console.log('Patch Dealer Database Errro----------------', err));
    },
    updatePhoneNumber: (req, res) => {
        //Define your database instance fron your app.get.('db')
        const dbInstance = req.app.get('db');
        const { id } = req.params;
        const { phone_number } = req.body;
        dbInstance.patch_phone_number([phone_number, id]).then(updatedUser => {
            res.status(200).json({user: updatedUser, message: 'Phone Number Updated Successfully!'});
        }).catch(err => console.log('Patch Phone NUmber Database Error-------------', err));
    },
    updateCompanyName: (req, res) => {
        //Define your database instance fron your app.get.('db')
        const dbInstance = req.app.get('db');
        const { id } = req.params;
        const { company_name } = req.body;
        dbInstance.patch_company_name([company_name, id]).then(updatedUser => {
            res.status(200).json({user: updatedUser, message: 'Company Name Updated Successfully!'});
        }).catch(err => console.log('Patch Company Name Database Error-----------', err));
    },
    updateAddress: (req, res) => {
        //Define your database instance fron your app.get.('db')
        const dbInstance = req.app.get('db');
        const { id } = req.params;
        const { address } = req.body;
        dbInstance.patch_address([address, id]).then(updatedUser => {
            res.status(200).json({user: updatedUser, message: 'Address Updated Successfully!'});
        }).catch(err => console.log('Patch Address Database Error--------------', err));
    },
    updateZipcode: (req, res) => {
        //Define your database instance fron your app.get.('db')
        const dbInstance = req.app.get('db');
        const { id } = req.params;
        const { zipcode } = req.body;
        dbInstance.patch_zipcode([zipcode, id]).then(updatedUser => {
            res.status(200).json({user: updatedUser, message: 'Zipcode Updated Successfully!'});
        }).catch(err => console.log('Patch Zipcode Database Error---------------', err));
    },
    updateCity: (req, res) => {
        //Define your database instance fron your app.get.('db')
        const dbInstance = req.app.get('db');
        const { id } = req.params;
        const { city } = req.body;
        dbInstance.patch_city([city, id]).then(updatedUser => {
            res.status(200).json({user: updatedUser, message: 'City Updated Successfully!'});
        }).catch(err => console.log('Patch City Database Error------------', err));
    },
    updateState: (req, res) => {
        //Define your database instance fron your app.get.('db')
        const dbInstance = req.app.get('db');
        const { id } = req.params;
        const { state } = req.body;
        dbInstance.patch_state([state, id]).then(updatedUser => {
            res.status(200).json({user: updatedUser, message: 'State Updated Successfully!'});
        }).catch(err => console.log('Patch State Database Error---------------', err));
    },
    updateCountry: (req, res) => {
        //Define your database instance fron your app.get.('db')
        const dbInstance = req.app.get('db');
        const { id } = req.params;
        const { country } = req.body;
        dbInstance.patch_country([country, id]).then(updatedUser => {
            res.status(200).json({user: updatedUser, message: 'Country Updated Successfully!'});
        }).catch(err => console.log('Patch Country Database Error--------------', err));
    }
}