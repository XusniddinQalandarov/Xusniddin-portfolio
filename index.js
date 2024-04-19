const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(express.urlencoded({ extended: true })); 

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'xusniddinqalandarov2004@gmail.com',
    pass: process.env.GMAIL_PASSWORD
  }
});

app.post('/subscribe', (req, res) => {
    let subscriberEmail = req.body.email;  

    let mailOptions = {
        from: 'xusniddinqalandarov2004@gmail.com',
        to: 'xusniddinqalandarov2004@gmail.com',
        subject: 'New Subscriber',
        text: `You have a new subscriber with the following email: ${subscriberEmail}`
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    res.send('Subscription successful');
});

app.listen(3000, () => console.log('Server started on port 3000'));

function mover(obj){
    obj.innerHTML = "Junior Web Developer";
    obj.style.fontSize = "25px";
}
function movout(obj){
    obj.innerHTML = "Follow on socials!";
}
