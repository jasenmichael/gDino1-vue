<template>
  <footer>
    <small>{{ msg }}</small>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      msg: 'Copyright 2018'
    }
  }
}
</script>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  padding: 5px;
}

small {
  margin: 0 auto;
}
</style>
