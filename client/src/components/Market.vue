<template lang="html">
<div class="market">
  <form v-on:submit="buyShares" method="post">
    <label for="share-select">Select a Company</label>
    <select v-model="selectedShare">
      <option disabled value="">Select Company</option>
      <option :value="MSFT">Microsoft</option>
      <option :value="FB">Facebook</option>
      <option :value="AAPL">Apple</option>
      <option :value="AMZN">Amazon</option>
      <option :value="NFLX">Netflix</option>
      <option :value="TSLA">Tesla</option>
    </select>
    <label for="amount">Number of Shares</label>
    <input type="number" id="amount" v-model="shareAmount">
    <input type="submit" name="BUY" value="Buy">
  </form>
</div>
</template>

<script>
import { eventBus } from '../main.js';
import ShareService from '../services/ShareService.js';
export default {
  name: 'market',
  props: ['MSFT', 'FB', 'AAPL', 'AMZN', 'NFLX', 'TSLA'],
  data() {
    return {
      selectedShare: null,
      shareAmount: null
    }
  },
  methods: {
    buyShares(event) {
      event.preventDefault();
      debugger;
      const payload = {
        stockSymbol: this.selectedShare["Meta Data"]["2. Symbol"],
        boughtPrice: this.selectedShare["Time Series (Daily)"]["2019-05-30"],
        quantity: this.shareAmount
      };

      ShareService.postShare(payload)
      .then(purchase => {
        eventBus.$emit("purchase-added", purchase)
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
