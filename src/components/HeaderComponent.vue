<template>
  <header>
    <img src="static/g-dino.png"/>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data () {
    return {
      msg: 'this is the header component'
    }
  }
}

</script>

<style scoped>
header {
  grid-row: 1 / 2;
  display: grid;
  grid-template-columns: 25% 50% 15%;
  grid-template-rows: 50% 50%;
  padding-top: 10px;
}

img {
  grid-row: 1/3;
  grid-column: 1/2;
  height: 100px;
  width: auto;
}
</style>
