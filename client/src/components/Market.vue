<template lang="html">
<div class="market">
  <h2>Marketplace</h2>
  <form v-on:submit="buyShares" method="post">
    <div id="buy-form">
      <label class="form-item" for="share-select">Select a Company </label>
      <select class="form-item" v-model="selectedShare">
        <option disabled value="">Select Company</option>
        <option :value="MSFT">Microsoft</option>
        <option :value="FB">Facebook</option>
        <option :value="AAPL">Apple</option>
        <option :value="AMZN">Amazon</option>
        <option :value="SBUX">Starbucks</option>
        <option :value="TSLA">Tesla</option>
      </select>
      <label class="form-item" for="amount"> Number of Shares </label>
      <input class="form-item" type="number" id="amount" v-model="shareAmount">
    </div>
    <input id="buy-button" class="buy-btn" type="submit" name="BUY" value="Buy">
  </form>
</div>
</template>

<script>
import { eventBus } from '../main.js';
import ShareService from '../services/ShareService.js';
export default {
  name: 'market',
  props: ['MSFT', 'FB', 'AAPL', 'AMZN', 'SBUX', 'TSLA'],
  data() {
    return {
      selectedShare: null,
      shareAmount: null,
      yesterday: ""
    }
  },
  mounted() {
    this.setYesterday();
    console.log(this.yesterday);
  },
  methods: {
    buyShares(event) {
      event.preventDefault();

      let payload = {
        stockSymbol: this.selectedShare["Meta Data"]["2. Symbol"],
        boughtPrice: this.selectedShare["Time Series (Daily)"][this.yesterday]["4. close"],
        quantity: this.shareAmount
      }
      ShareService.postShare(payload)
      .then(purchase => {
        eventBus.$emit("purchase-added", purchase)
      })
    },
    setYesterday() {
      let today = new Date();
      let dd = String(today.getDate()).padStart(2, '0');
      let mm = String(today.getMonth() + 1).padStart(2, '0');
      let yyyy = today.getFullYear();

      this.yesterday = yyyy + '-' + mm + '-' + (dd - 1);
    }
  }
}
</script>

<style lang="css" scoped>
.market {

}

h2 {
  text-align: center;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: white;
  font-size: 32px;
}

#buy-form {
  display: flex;
  justify-content: center;
  position: relative;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 25px;
}

#buy-button {
  display: block;
  position: relative;
  margin-right: auto;
  margin-left: auto;
}

.market {
  width: 100vmax;
  margin-left: -0.5rem;
  padding-top: 20px;
  padding-bottom: 40px;
}

.form-item {
  margin-left: 10px;
  margin-right: 10px;
}

.buy-btn {
  background-color: #3CB3AD;
  color: ghostwhite;
  border: 1px solid white;
  padding: 10px 30px;
  cursor: pointer;
  border-radius: 10px;
}

.buy-btn:hover {
  background-color: mediumseagreen;
}
</style>
