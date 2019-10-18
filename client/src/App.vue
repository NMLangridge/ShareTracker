<template lang="html">

</template>

<script>
export default {
  name: 'app',

  mounted(){
    fetch("http://localhost:3000/")
    .then(response => response.json())
    .then(json => console.log(json));
  },

}
</script>

<style lang="css" scoped>
</style>
