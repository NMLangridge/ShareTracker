<template lang="html">
  <div class="app-wrapper">
    <div id="Header bar">
        <h1>Share Tracker</h1>
    </div>
  </div>
</template>

<script>
import apiKey from './assets/secretConfig.js';

export default {
  name: 'app',
  data() {
    return {
      msftData: null,
      fbData: null,
      applData: null,
      amznData: null,
      nflxData: null,
      tslaData: null,
      sbuxData: null
    }
  },
  mounted(){
    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=${apiKey}`)
    .then(res => res.json())
    .then(msftData => this.msftData = msftData);

    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=FB&apikey=${apiKey}`)
    .then(res => res.json())
    .then(fbData => this.fbData = fbData);

  }
}
</script>

<style lang="css" scoped>
</style>
