<template>
<aside id="side-bar">
  <h3>Add a Job</h3>
  <form class="job-form" @submit.prevent="submit">
    <label for="title">Title</label>
    <input type="text" name="title" v-model="title">
    <label for="pay">Compensation</label>
    <input type="text" name="pay" v-model="pay">
    <label for="description">Description</label>
    <textarea name="description" rows="8" cols="40" v-model="description"></textarea>
    <input type="submit" name="submit" value="Submit" />
  </form>
</aside>
</template>

<script>
export default {
  name: 'JobFormComponent',
  props: [
    'listings',
    'setListings',
    'postNewJob'
  ],
  data() {
    return {
      title: "",
      description: "",
      pay: "",
      interested: ""
    }
  },
  methods: {
    submit() {
      let newJob = {}
      newJob.title = this.title
      newJob.description = this.description
      newJob.pay = this.pay
      newJob.interested = ''
      this.listings.unshift(newJob)
    }
  }
}
</script>

<style scoped>
#side-bar {
  grid-column: 4/5;
}

form {
  display: flex;
  flex-flow: column;
  justify-content: space-around;
}
</style>
