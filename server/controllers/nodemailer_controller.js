const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, 
    auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_PASSWORD
    }
});
module.exports = {
    verificationEmail(username, email, verification_link) {
        let mailOptions = {
            from: `smtp.${process.env.ADMIN_EMAIL}`,
            to: email,
            subject: 'Welcome to MU-Auction',
            text: 'Must verify email',
            html: `<div style="background=transparent">
                    <h2>Welcome to Mu-Auction</h2>
                    <h2>Please Verify Account ${username}</h2>
                    <a href="http://localhost:3000/verification/${verification_link}" style="text-decoration=none color=gold">Verify Account</a>
                  </div>`
        }
        transporter.sendMail(mailOptions, (err, data) => {
            if(err) console.log('send mail error-----------', err);
            console.log('Mail Sent---------', data);
        });
    }
}