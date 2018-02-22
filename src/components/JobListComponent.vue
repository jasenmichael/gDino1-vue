<template>
<section>
  <h2>Job Listings</h2>

  <ul id="job-listings">
    <li v-for="listing in listings">
      <h4>{{ listing.title }}</h4>
      <small>{{ listing.pay }}</small>
      <p>{{ listing.description }}</p>
      <small>{{ listing.interested.length }} dinos are interested in this job</small></li>
  </ul>

</section>
</template>

<script>
export default {
  name: 'JobListComponent',
  props: [
    'listings',
    'setListings',
    'postNewJob'
  ],
  data() {
    return {
      apiUrl: "static/listings.json"
    }
  },
  methods: {},
  mounted() {
    fetch(this.apiUrl).then(response => {
      return response.json()
    }).then(data => {
      this.setListings(data)
    })
  }
}
</script>

<style scoped>
#job-listings li {
  display: flex;
  flex-flow: column;
  border-radius: 6px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
  padding: 10px;
}
</style>
