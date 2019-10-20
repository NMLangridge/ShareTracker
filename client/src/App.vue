<template lang="html">
  <div class="app-wrapper">
    <div id="Header bar">
        <h1>Share Tracker</h1>
    </div>
  </div>
</template>

<script>
import apiKeyA from './assets/secretConfig.js';
import apiKeyB from './assets/secretConfig.js';
import apiKeyC from './assets/secretConfig.js';

export default {
  name: 'app',
  data() {
    return {
      msftData: null,
      fbData: null,
      aaplData: null,
      amznData: null,
      nflxData: null,
      tslaData: null
    }
  },
  mounted(){
    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=${apiKeyA}`)
    .then(res => res.json())
    .then(msftData => this.msftData = msftData);

    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=FB&apikey=${apiKeyA}`)
    .then(res => res.json())
    .then(fbData => this.fbData = fbData);

    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=AAPL&apikey=${apiKeyB}`)
    .then(res => res.json())
    .then(aaplData => this.aaplData = aaplData);

    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=AMZN&apikey=${apiKeyB}`)
    .then(res => res.json())
    .then(amznData => this.amznData = amznData);

    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=NFLX&apikey=${apiKeyC}`)
    .then(res => res.json())
    .then(nflxData => this.nflxData =nflxData);

    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=TSLA&apikey=${apiKeyC}`)
    .then(res => res.json())
    .then(tslaData => this.tslaData = tslaData);
  }
}
</script>

<style lang="css" scoped>
</style>
