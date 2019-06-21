<template>
  <div class="projects-index">
    <h1>{{ message }}</h1>

    <div v-for="project in projects">
      <h3>Title: {{ project.title }}</h3>
      <h3>Address: {{ project.address }}</h3>
      <h3>Start Date: {{ project.start_date }}</h3>
      <h3>End Date: {{ project.end_date }}</h3>
      <h3>Posted By: {{ project.user.first_name }} {{ project.user.last_name }}</h3>
      <h3>Posted: {{ relativeDate(project.created_at) }}</h3>
      <button>
        <router-link v-bind:to="'/projects/' + project.id">View Details</router-link>
      </button>
      <hr>
    </div>

  </div>
</template>

<script>

import axios from "axios";
import moment from "moment";

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
  methods: {
    relativeDate: function(date){
      return moment(date).fromNow();
    }
  }
};
</script>