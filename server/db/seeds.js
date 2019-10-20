use shareData;

db.dropDatabase();

db.boughtPrice.insertMany([
  {
    stockSymbol: 'FB',
    boughtPrice: 185.85,
    quantity: 2
  },

  {
    stockSymbol: 'MSFT',
    boughtPrice: 137.41,
    quantity: 1
  },

  {
    stockSymbol: 'AAPL',
    boughtPrice: 236.41,
    quantity: 3
  }

]);
