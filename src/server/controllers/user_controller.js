const uuid = require('uuid');

module.exports = {
    getUserData: (req, res) => {
        res.status(200).json({user: req.session.user});
    },
    register: (req, res) => {
        const { type, name, username, email, password, phone_number, company_name, imageurl, dealer  } = req.body;
        const accountId = uuid.v4();
        const newUser = {
            type,
            dealer: dealer,
            name, 
            username,
            phone_number,
            email, 
            password, 
            company_name,
            imageurl,
            seller_id: dealer ? uuid.v4() : null,
            account_id: `${username}-${accountId}-${email}` 
        }
        const dbInstance = req.app.get('db');
        dbInstance.register_user(newUser).then(user => {
            req.session.user = user;
            console.log(req.session.user);
            res.status(200).json({message: 'Congrats you successfully registered!'});
        });
    },
    login: (req, res) => {
        const { username, password } = req.body;
        const dbInstance = req.app.get('db');
        dbInstance.login_user([username, password]).then(user => {
            req.session.user = user;
            console.log(req.session.user);            
            res.status(200).json({user});
        });
    },
    logout: (req, res) => {
        req.session.destroy();
        res.status(200).json({message: 'Logout successfully!!!'});
    },
    editProfile: (req, res) => {
        const { userId } = req.params;
        const { type, name, username, email, password  } = req.body;
        users.findIndex(u => u.id === userId);
    }
}