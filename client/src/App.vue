<template lang="html">
  <div class="app-wrapper">
    <stock-ticker :MSFT="msftData" :FB="fbData" :AAPL="aaplData" :AMZN="amznData" :SBUX="sbuxData" :TSLA="tslaData" />
    <user-profile id="user-profile" :shares="currentShares"/>
    <user-stock-selector id="stock-selector" :MSFT="msftData" :FB="fbData" :AAPL="aaplData" :AMZN="amznData" :SBUX="sbuxData" :TSLA="tslaData"/>
    <div class="market">
      <market id="market" :MSFT="msftData" :FB="fbData" :AAPL="aaplData" :AMZN="amznData" :SBUX="sbuxData" :TSLA="tslaData" />
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
import StockTicker from './components/StockTicker.vue';

export default {
  name: 'app',
  data() {
    return {
      msftData: null,
      fbData: null,
      aaplData: null,
      amznData: null,
      sbuxData: null,
      tslaData: null,
      currentShares: []
    }
  },
  mounted(){
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=${apiKeyA}`)
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

    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=SBUX&apikey=${apiKeyC}`)
    .then(res => res.json())
    .then(sbuxData => this.sbuxData = sbuxData);

    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TSLA&apikey=${apiKeyC}`)
    .then(res => res.json())
    .then(tslaData => this.tslaData = tslaData);

    this.fetchData();

    eventBus.$on("purchase-added", purchase => {
      this.currentShares.push(purchase)
    })

    eventBus.$on("share-deleted", (id)  => {
      const index = this.currentShares.findIndex(share => {
        return share._id === id
      })
      this.currentShares.splice(index, 1)
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
    'market': Market,
    'stock-ticker': StockTicker
  }
}
</script>

<style lang="css" scoped>

#market {
  background-color: #3cb371;
}

.app-wrapper {
  width: 100%;
  font-family: 'Orienta', sans-serif;
}

.user-profile {
  position: relative;
  left: -20em;
  margin-left: -10rem;
  width: 100vmax;
}

#stock-selector {
  min-height: 450px;
}

</style>
