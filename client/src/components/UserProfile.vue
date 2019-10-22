<template lang="html">
  <div>
    <h4>Welcome to your Portfolio {{ this.name }}</h4>
    <p>You're current open trades are: </p>
    <ul>
      <share-item v-for="(share, index) in shares" :key="index" :share="share"></share-item>
    </ul>
    <p>Current Share Total: £{{shareTotal.toFixed(2)}}</p>
  </div>
</template>

<script>
import ShareItem from './ShareItem.vue'
export default {
  name: 'user-profile',
  props: ['shares'],
  data() {
    return{
      name: 'Nathan Buffet',
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
</style>
