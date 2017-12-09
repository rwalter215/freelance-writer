var express = require('express')
var bodyParser = require('body-parser')
var sgMail = require('@sendgrid/mail')
var path = require('path')

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.resolve(__dirname, 'build')));
app.get('*', (req, res) => {
  res.sendFile(express.static(path.resolve(__dirname, 'build', index.html)))
})

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post('/contact', (req, res) => {
  const { email = '', name = '', message = '', subject='', test='' } = req.body
  const msg = {
    to: 'carlacpro@gmail.com',
    from: email,
    subject: subject,
    text: message,
  };
  if(test.length === 0) {
    sgMail.send(msg)
    .then(resp => {
      console.log('in the .then')
      res.send(resp)
    }).catch(err => {
      res.status(400).send(err)
    });
  } else {
    res.status(200).send("Someone has been a bad boy")
  }
})

const PORT = process.env.PORT || 4000;


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
})
