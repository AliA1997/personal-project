const uuid = require('uuid');
let accountIds = [];
let users = [];
module.exports = {
    register: (req, res) => {
        const { type, name, username, email, password  } = req.body;
        const accountId = uuid.v4();
        accountIds.push(accountId);
        const newUser = {
            type,
            name, 
            username,
            email, 
            password, 
            account_id: accountId 
        }
        users.push(newUser);
        res.status(200).send(users);
    },
    login: (req, res) => {
        const { username, password } = req.body;
    },
    editProfile: (req, res) => {
        const { userId } = req.params;
        const { type, name, username, email, password  } = req.body;
        users.findIndex(u => u.id === userId);
    }
}