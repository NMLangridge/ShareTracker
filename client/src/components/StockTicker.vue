<template lang="html">
  <div class="ticker-box">
  <article class="media">
    <div class="media-content">
      <span class="stock-news media-left">Current Stock Prices</span>
        <span class="time">{{ this.time }}</span>
        <transition name="fade" tag="div" mode="out-in">
          <span class="stock" v-if="stock[0]" key="0">Microsoft - {{ this.MSFT["Meta Data"]["2. Symbol"] }} - {{ this.MSFT["Time Series (Daily)"][this.yesterday]["4. close"] }}</span>
          <span class="stock" v-if="stock[1]" key="1">Facebook - {{ this.FB["Meta Data"]["2. Symbol"] }} - {{ this.FB["Time Series (Daily)"][this.yesterday]["4. close"] }}</span>
          <span class="stock" v-if="stock[2]" key="2">Apple - {{ this.AAPL["Meta Data"]["2. Symbol"] }} - {{ this.AAPL["Time Series (Daily)"][this.yesterday]["4. close"] }}</span>
          <span class="stock" v-if="stock[3]" key="3">Amazon - {{ this.AMZN["Meta Data"]["2. Symbol"] }} - {{ this.AMZN["Time Series (Daily)"][this.yesterday]["4. close"] }}</span>
          <span class="stock" v-if="stock[4]" key="4">Starbucks Coffee - {{ this.SBUX["Meta Data"]["2. Symbol"] }} - {{ this.SBUX["Time Series (Daily)"][this.yesterday]["4. close"] }}</span>
        </transition>
      </div>
   </article>
</div>
</template>

<script>
export default {
  name: 'stock-ticker',
  props: ['MSFT', 'FB', 'AAPL', 'AMZN', 'SBUX'],
  data() {
    return {
      tickerLocation: 0,
      stock: [
        true,
        false,
        false,
        false,
        false
      ],
      time: "",
      yesterday: ""
    }
  },
  created: function() {
    setInterval(this.updateTicker, 4500);
  },
  methods: {
    updateTicker: function() {
      const removed = this.stock.pop();
      this.stock.unshift(removed);
      this.getCurrentTime();
    },
    setYesterday() {
      let today = new Date();
      let dd = String(today.getDate()).padStart(2, '0');
      let mm = String(today.getMonth() + 1).padStart(2, '0');
      let yyyy = today.getFullYear();

      this.yesterday = yyyy + '-' + mm + '-' + (dd - 1);
    },
    getCurrentTime(){
      this.time = new Date().toLocaleTimeString();
    }
  },
  mounted(){
    this.getCurrentTime();
    this.setYesterday();
  }
}
</script>

<style lang="css" scoped>
span {
  padding: 0.5rem;
  margin-left: 0.25rem;
}

.stock-news {
  background-color: #33A3F1;
  color: #ffffff;
  border-radius: 10px 50px 50px 10px;
  padding: 5px;
}

.media-content {
  padding: 0.5rem;
  text-align: center;
  background-color: black;
  width: 100vmax;
  margin-left: -0.5rem;
  margin-top: -0.5rem;
}

.time {
  color: #33A3F1;
}

.stock {
  color: #ffffff;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>
