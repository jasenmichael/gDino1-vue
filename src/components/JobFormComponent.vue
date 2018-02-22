<template>
<aside id="side-bar">
  <h3>Add a Job</h3>
  <form class="job-form" @submit.prevent="submit().addNewJob()">
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
      var self = this

      return {
        addNewJob() {
          let newJob = {}
          newJob.title = self.title
          newJob.description = self.description
          newJob.pay = self.pay
          newJob.interested = ''
          console.log(newJob);
          //this.listings.unshift(newJob)
          this.postNewJob(newJob)
        },
        postNewJob(newJob) {
          self.listings.unshift(newJob)
        }

      }
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
