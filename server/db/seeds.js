use shareData;

db.dropDatabase();

db.boughtPrice.insertMany([
  {
    company: 'Facebook',
    stockSymbol: 'FB',
    boughtPrice: 185.85
  },

  {
    company: 'Microsoft',
    stockSymbol: 'MSFT',
    boughtPrice: 137.41
  },

  {
    company: 'Apple',
    stockSymbol: 'AAPL',
    boughtPrice: 236.41
  }

]);
