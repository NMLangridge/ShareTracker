<template lang="html">
<div class="market">
  <h2>Marketplace</h2>
  <form v-on:submit="buyShares" method="post">
    <div id="buy-form">
      <label for="share-select">Select a Company </label>
      <select v-model="selectedShare">
        <option disabled value="">Select Company</option>
        <option :value="MSFT">Microsoft</option>
        <option :value="FB">Facebook</option>
        <option :value="AAPL">Apple</option>
        <option :value="AMZN">Amazon</option>
        <option :value="SBUX">Starbucks</option>
        <option :value="TSLA">Tesla</option>
      </select>
      <label for="amount"> Number of Shares </label>
      <input type="number" id="amount" v-model="shareAmount">
    </div>
    <input id="buy-button" type="submit" name="BUY" value="Buy">
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
  border: 1px black solid;
}

h2 {
  text-align: center;
}

#buy-form {
  border: 1px black solid;
  display: inline-block;
  position: relative;
  margin-right: auto;
  margin-left: auto;
}

#buy-button {
  border: 1px black solid;
  display: block;
  position: relative;
  margin-right: auto;
  margin-left: auto;
}
</style>
