<template lang="html">
  <div>
    <highcharts :options="chartOptions"></highcharts>
    <button type="button" name="button" v-on:click="fillPrices"></button>
  </div>
</template>

<script>
import HighCharts from 'highcharts'
import exportingInit from 'highcharts/modules/exporting'
export default {
  name: 'chart',
  props: ['msftData'],
  data() {
    return {
      prices: [],
      chartOptions: {
        title: {
          text: "Stock Trend"
        },
        series: [{
          name: "MSFT",
          data: []
        }]
      }
    }
  },
  methods: {
    fillPrices() {
      for (var day in this.msftData['Time Series (Daily)']) {
        if (this.msftData['Time Series (Daily)'].hasOwnProperty(day)) {
          let obj = this.msftData['Time Series (Daily)'][day];
          let price = parseFloat(obj['4. close']);
          if (this.chartOptions.series[0].data.length < 50){
            this.chartOptions.series[0].data.push(price)
          }
        }
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
