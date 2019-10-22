<template lang="html">
  <div>
    <p v-on:click="deleteShare">{{ share.quantity }} shares in {{ share.stockSymbol }}</p>
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
</style>
