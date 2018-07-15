const cloudinary = require('cloudinary');
module.exports = {
    upload(req, res) {
        //Define the time stamp
        const timestamp = Math.round((new Date()).getTime() / 1000);   
        //Use api secret
        const api_secret = process.env.CLOUDINARY_SECRET_API;
        console.log('api secret------------', api_secret);
        // console.log('------------payload', timestamp);
        //Sign api request
        const signature = cloudinary.utils.api_sign_request({timestamp}, api_secret);
        //REturn the payload 
        const payload = {
            signature, 
            timestamp
        }
        res.json(payload);
    }
}