const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('Hello Eric!');
});

app.listen(3000, function() {
  console.log('App running on port 3000');
});
