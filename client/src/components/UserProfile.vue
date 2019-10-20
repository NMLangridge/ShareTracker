<template lang="html">
  <div>
    <ul>
      <li v-for="share in shares">{{ share.company }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'user-profile',
  props: ['shares'],
  data() {
    return{
      name: 'Nathan Buffet'
    }
  }
}
</script>

<style lang="css" scoped>
</style>
