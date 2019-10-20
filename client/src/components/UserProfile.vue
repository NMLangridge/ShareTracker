<template lang="html">
  <div>
    <p>Current Share Total: {{shareTotal.toFixed(2)}}</p>
  </div>
</template>

<script>
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
  }
}
</script>

<style lang="css" scoped>
</style>
