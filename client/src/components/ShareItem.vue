<template lang="html">
  <div>
    <p>{{ share.quantity }} shares in {{ share.stockSymbol }} @ {{this.share.boughtPrice}} each</p>
    <button id="deleteButton" v-on:click="deleteShare" type="button" name="close-trade"> Close Trade</button>
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

p {
  display: inline-block;
}

button {
  border: 1px black solid;
  display: block;
  position: relative;
}

</style>
