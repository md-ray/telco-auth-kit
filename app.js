const express = require('express')
const app = express()

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.send('Hello World!')
})

// about page 
// var thename = "Rayhan";

app.get('/sms', function(req, res) {
    if( typeof req.query.appsid == 'undefined') {
        res.status(500).send("Appsid not supplied");
    } else {
        // TODO = harusnya pengecekan appsid di DB
        var data = {'appsid': req.query.appsid};
        res.render('sms/index', data);
    }
});

app.get('/sms/otp', function(req, res) {
    if( typeof req.query.appsid == 'undefined') {
        res.status(500).send("Appsid not supplied");
    } else if( typeof req.query.msisdn == 'undefined') {
        res.status(500).send("Msisdn not supplied");
    } else {
        // TODO submit OTP and update DB
        res.send("OTP Sent!");
    }
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})