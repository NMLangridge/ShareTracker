<template lang="html">
  <div>
    <select v-model="stock">
      <option disabled value="">Select Company</option>
      <option value="MSFT">Microsoft</option>
      <option value="FB">Facebook</option>
      <option value="AAPL">Apple</option>
      <option value="AMZN">Amazon</option>
      <option value="NFLX">Netflix</option>
      <option value="TSLA">Tesla</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'stock-selector',
  data(){
    return {
      stock: null
    }
  },
  props: ['MSFT', 'FB', 'AAPL', 'AMZN', 'NFLX', 'TSLA']
}
</script>

<style lang="css" scoped>
</style>
