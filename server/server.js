const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
app.use(bodyParser.json());

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('shareData');
  const boughtPriceCollection = db.collection('boughtPrice');
  const boughtPriceRouter = createRouter(boughtPriceCollection);
  app.use('/api/boughtPrice', boughtPriceRouter);
})
.catch(console.err);

app.listen(3000, function() {
  console.log('App running on port 3000');
});
