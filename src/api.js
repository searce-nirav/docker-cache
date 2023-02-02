const express = require('express');
const app = express();

app.get('/', (req, res) => {

  console.info('Sample received a request.');

  res.send({message: 'Received Request Successfully. Roger That...!!!'});
});

app.get('/sample', (req, res) => {
  console.info('Route /sample received a request.');

  res.send({message: 'Received Request Successfully. Roger That...!!!'});
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Sample listening on port', port);
});