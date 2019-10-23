<template lang="html">
  <div id="share-item">
    <p>{{ share.quantity }} shares in {{ share.stockSymbol }} @ {{this.share.boughtPrice}} each</p>
    <button  v-on:click="deleteShare" class="close-btn" type="button" name="close-trade"> Close Trade</button>
  </div>
</template>

<script>
import {  eventBus } from '../main.js'
import ShareService from '../services/ShareService.js';
export default {
  name: 'share-item',
  props: ['share'],
  methods: {
    deleteShare: function() {
      ShareService.deleteShare(this.share._id)
      .then(() => eventBus.$emit('share-deleted', this.share._id))
    }
  }
}
</script>

<style lang="css" scoped>

#share-item {
  padding-top: 20px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 5px;
  font-size: 20px;
  box-shadow: 2px 5px #3B7DB3;
}

p {
  display: inline-block;
  padding-right: 15px;
  padding-top: 10px;
}

button {
  display: inline-block;
}

.close-btn {
  background-color: mediumseagreen;
  color: ghostwhite;
  border: 1px solid white;
  padding: 5px;
  cursor: pointer;
  border-radius: 10px;
}

.close-btn:hover {
  background-color: #3CB3AD;
}
</style>
