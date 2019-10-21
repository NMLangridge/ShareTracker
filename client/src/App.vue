<template lang="html">
  <div class="app-wrapper">
    <div id="Header bar">
        <h1>Share Tracker</h1>
    </div>
    <user-profile :shares="currentShares"/>
    <user-stock-selector :MSFT="msftData" :FB="fbData" :AAPL="aaplData" :AMZN="amznData" :NFLX="nflxData" :TSLA="tslaData"/>
    <div class="market">
      <market :MSFT="msftData" :FB="fbData" :AAPL="aaplData" :AMZN="amznData" :NFLX="nflxData" :TSLA="tslaData" />
    </div>
  </div>
</template>

<script>
import { eventBus } from './main.js';
import Market from './components/Market.vue';
import Chart from './components/Chart.vue'
import apiKeyA from './assets/secretConfig.js';
import apiKeyB from './assets/secretConfig.js';
import apiKeyC from './assets/secretConfig.js';
import ShareService from './services/ShareService.js';
import UserProfile from './components/UserProfile.vue';
import UserStockSelector from './components/UserStockSelector.vue';

export default {
  name: 'app',
  data() {
    return {
      msftData: null,
      fbData: null,
      aaplData: null,
      amznData: null,
      nflxData: null,
      tslaData: null,
      currentShares: []
    }
  },
  mounted(){
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo`)
    .then(res => res.json())
    .then(msftData => this.msftData = msftData);

    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=FB&apikey=${apiKeyA}`)
    .then(res => res.json())
    .then(fbData => this.fbData = fbData);

    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&apikey=${apiKeyB}`)
    .then(res => res.json())
    .then(aaplData => this.aaplData = aaplData);

    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AMZN&apikey=${apiKeyB}`)
    .then(res => res.json())
    .then(amznData => this.amznData = amznData);

    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=NFLX&apikey=${apiKeyC}`)
    .then(res => res.json())
    .then(nflxData => this.nflxData = nflxData);

    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TSLA&apikey=${apiKeyC}`)
    .then(res => res.json())
    .then(tslaData => this.tslaData = tslaData);

    this.fetchData();

    eventBus.$on("purchase-added", purchase => {
      this.currentShares.push(purchase)
    })
  },

  methods: {
    fetchData(){
      ShareService.getShares()
      .then(shares => this.currentShares = shares);
    }
  },
  components: {
    'user-profile': UserProfile,
    'user-stock-selector': UserStockSelector,
    'chart': Chart,
    'market': Market
  }
}
</script>

<style lang="css" scoped>
</style>
