import 'babel-polyfill'
import express from 'express'
import bodyParser from 'body-parser'
import sgMail from '@sendgrid/mail';

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('*', (req, res) => {
  res.send('Server is working. Please post at "/contact" to submit a message.')
})

sgMail.setApiKey(process.env.API_KEY);

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
      res.send(201)
    }).catch(err => {
      res.send(err)
    });
  } else {
    res.send(200)
  }
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
})
