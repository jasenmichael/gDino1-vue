<template>
<div id="app">
  <HeaderComponent></HeaderComponent>
  <main>
    <JobListComponent :setListings="setListings" :listings="listings"></JobListComponent>
    <JobFormComponent :listings="listings"></JobFormComponent>
  </main>
  <FooterComponent></FooterComponent>
</div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent'
import JobFormComponent from '@/components/JobFormComponent'
import JobListComponent from '@/components/JobListComponent'
import FooterComponent from '@/components/FooterComponent'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    JobFormComponent,
    JobListComponent,
    FooterComponent
  },
  methods: {
    setListings(listings) {
      this.listings = listings
    },
    postNewJob(newJob) {
      this.listings.unshift(newJob)
    }
  },
  data() {
    return {
      listings: [],
      newJob: {}
    }
  },
  mounted() {
    //do something after mounting vue instance
  }
}
</script>

<style>
html {
  margin: 0;
  padding: 0;
}

#app {
  margin: 0 30px 0 30px;
  padding: 0;
  font-family: sans-serif;
  color: #1B997A;
  display: grid;
  grid-template-rows: 15% 75% 10%;
}

main {
  grid-row: 2/3;
  display: grid;
  grid-template-columns: 5% 42.5% 5% 42.5% 5%;
}

main section {
  grid-column: 2/3;
}

main section h2 {
  margin: 0;
  color: #61CCB1;
}

ul {
  list-style: none;
}

h4 {
  margin: 0;
}

small {
  color: black;
  font-size: .5rem;
  margin-left: 10px;
}

p {
  font-size: .8rem;
}
</style>
