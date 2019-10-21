<template lang="html">
  <div>
    <select v-model="stock">
      <option disabled value="">Select Company</option>
      <option :value="MSFT">Microsoft</option>
      <option :value="FB">Facebook</option>
      <option :value="AAPL">Apple</option>
      <option :value="AMZN">Amazon</option>
      <option :value="NFLX">Netflix</option>
      <option :value="TSLA">Tesla</option>
    </select>
    <!-- <button @click="handleAdd">Add to Portfolio</button> -->
    <chart v-if="stock" :stock="stock"></chart>
  </div>
</template>

<script>
import Chart from './Chart.vue';
import {eventBus} from '../main.js'

export default {
  name: 'stock-selector',
  data(){
    return {
      stock: null
    }
  },
  props: ['MSFT', 'FB', 'AAPL', 'AMZN', 'NFLX', 'TSLA'],
  components: {
    'chart': Chart
  }
}
</script>

<style lang="css" scoped>
</style>
