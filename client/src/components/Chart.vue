<template lang="html">
  <div>
    <button type="button" class="show-btn" name="button" @click="refreshData">Show Performance Data</button>
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
import HighCharts from 'highcharts'
import exportingInit from 'highcharts/modules/exporting'
export default {
  name: 'chart',
  props: ['stock'],
  data() {
    return {
      prices: [],
      chartOptions: {
        chart: {
          zoomType: 'x'
        },
        title: {
          text: "Stock Trend"
        },
        xAxis: {
          type: 'datetime'
        },
        yAxis: {
          title: {
            text: "Price"
          }
        },
        series: [{
          name: this.stock["Meta Data"]["2. Symbol"],
          data: []
        }],
        xAxis: {
          categories: []
        }
      }
    }
  },
  methods: {
    fillPrices() {
      for (var day in this.stock['Time Series (Daily)']) {
        if (this.stock['Time Series (Daily)'].hasOwnProperty(day)) {
          let obj = this.stock['Time Series (Daily)'][day];
          let price = parseFloat(obj['4. close']);
          if (this.chartOptions.series[0].data.length < 50){
            this.chartOptions.series[0].data.push(price)
          }
        }
      }
    },
    fillCategories() {
      for (var day in this.stock['Time Series (Daily)']) {
        if (this.chartOptions.xAxis.categories.length < 50){
          this.chartOptions.xAxis.categories.push(day)
        }
      }
    },
    refreshData() {
      this.chartOptions.series[0].data = [];
      this.fillPrices();
      this.chartOptions.series[0].data.reverse();
      this.chartOptions.xAxis.categories = [];
      this.fillCategories();
      this.chartOptions.xAxis.categories.reverse();
      this.chartOptions.series[0].name = this.stock["Meta Data"]["2. Symbol"];
    }
  }
  // mounted() {
  //   this.fillPrices();
  //   this.fillCategories();
  //
  // }
}
</script>

<style lang="css" scoped>
.show-btn{
  background-color: ghostwhite;
  color: black;
  border: 1px solid white;
  padding: 5px 20px;
  cursor: pointer;
  border-radius: 10px;
  max-width: 50vmax;
}

.show-btn:hover{
  background-color: #3CB3AD;
  color: ghostwhite;
}
</style>
