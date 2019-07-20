<template>
  <div class="users-index">
    
  <h1>Users Page</h1>
    
    <div v-for="user in users">
      <h5>Name: {{ user.first_name }} {{ user.last_name }}</h5>
      <h5>Job Title: {{ user.current_job_title }}</h5>
      <img v-bind:src="user.image">
      <h5>Location: {{ user.address }}</h5>
      <router-link  class="btn btn-base-1 btn-lg" v-bind:to="'/users/' + user.id">View Profile</router-link>
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
      users: []
    };
  },
  created: function() {
    axios.get("/api/users").then(response => {
      this.users = response.data;
    });
  },
  methods: {
    },
};
</script>