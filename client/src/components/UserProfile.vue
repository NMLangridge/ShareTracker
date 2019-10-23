<template lang="html">
  <div>
    <h1>Welcome to your Portfolio, {{ this.name }}.</h1>
    <p>Your current open trades are: </p>
    <ul class="boxes">
      <share-item class="share-text" v-for="(share, index) in shares" :key="index" :share="share"></share-item>
    </ul>
    <p>Current Share Total: <span id="share-total">£{{shareTotal.toFixed(2)}}</span></p>
  </div>
</template>

<script>
import ShareItem from './ShareItem.vue'
export default {
  name: 'user-profile',
  props: ['shares'],
  data() {
    return{
      name: 'Nate Buffet',
      total: 0
    }
  },
  computed: {
    shareTotal: function() {
      return this.shares.reduce((runningTotal, share) => {
        return runningTotal + (share.boughtPrice * share.quantity)
      }, 0)
    }
  },
  components: {
    'share-item': ShareItem
  }
}
</script>

<style lang="css" scoped>

div {
  font-family: 'Orienta', sans-serif;
  font-size: 24px;
  background-color: mediumseagreen;
  width: 100vmax;
  margin-left: -0.5rem;
  padding-top: 10px;
  padding-bottom: 10px;
}

h1 {
  text-align: center;
  -webkit-text-stroke-width: 0.75px;
  -webkit-text-stroke-color: white;
}

p {
  text-align: center;
  padding-left: 10px;
}

ul {
  line-height: 0.1;
}

.share-text {
  display: inline-block;
  width: auto;
  height: 70px;
  margin: 20px;
  background-color: #3CB3AD;
}

.boxes {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: -50px;
}

#share-total {
  color: #f8f8ff;
  /* -webkit-text-stroke: 0.5px #3b8ca1; */

}

</style>
