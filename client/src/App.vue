<template lang="html">

</template>

<script>
import apiKey from './assets/secretConfig.js';

export default {
  name: 'app',
  data() {
    return {
      shareData: []
    }
  },
  mounted(){
    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=${apiKey}`)
    .then(response => response.json())
    .then(shareData => this.shareData = shareData)
  }
}
</script>

<style lang="css" scoped>
</style>
