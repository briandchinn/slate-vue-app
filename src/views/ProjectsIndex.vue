<template>
  <div class="projects-index">
    <h1>{{ message }}</h1>

    <div v-for="project in projects">
      <h3>Title: {{ project.title }}</h3>
      <h3>Description: {{ project.description }}</h3>
      <h3>Address: {{ project.address }}</h3>
      <h3>Start Date: {{ project.start_date }}</h3>
      <h3>End Date: {{ project.end_date }}</h3>
      <h3>Number of Positions: {{ project.number_of_positions }}</h3>
      <button>
        <router-link v-bind:to="'/projects/' + project.id">View Details</router-link>
      </button>
      <hr>
    </div>

  </div>
</template>

<script>

import axios from "axios";

export default {
  data: function() {
    return {
      message: 'This is the Project Page',
      projects: []
    };
  },
  created: function() {
    axios.get("/api/projects").then(response => {
      this.projects = response.data;
    });
  },
  methods: {}
};
</script>