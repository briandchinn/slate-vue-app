<template>
  <div class="users-show">
    
    {{ user }}
    <h1>{{ message }}</h1>
    <img v-bind:src="user.image">
    <h3>First Name: {{ user.first_name }}</h3>
    <h3>Last Name: {{ user.last_name }}</h3>
    <h3>Email: {{ user.email }}</h3>
    <h3>Address: {{ user.address }}</h3>
    <h3>Phone Number: {{ user.phone_number }}</h3>
    <h3>IMDB Url: {{ user.imdb_url }}</h3>
    <h3>Resume: {{ user.resume }}</h3>
    <h3>Current Position: {{ user.current_job_title }}</h3>
    <button>
      <router-link v-bind:to="'/users/' + user.id + '/edit'">Edit User</router-link>
    </button>

    <button v-on:click="destroy(user)">Destroy User</button>
    <hr>
    <h1>Applications</h1>

    <div v-for="application in user.applications">
      <h5>{{ application.project.title }}</h5>
      <h5>{{ application.project.description }}</h5>
      <h5>{{ application.project.address }}</h5>
      <h5>{{ application.project.start_date }} - {{ application.project.end_date }}</h5>
      <hr>
    </div>
    

  </div>
</template>

<script>

import axios from "axios";

export default {
  data: function() {
    return {
      message: 'This is a Users Show Page',
      user: {},
    };
  },
  created: function() {
    axios.get("/api/users/" + this.$route.params.id).then(response => {
      this.user = response.data;
    });
  },
  methods: {
    destroy: function(user) {
      axios
        .delete("/api/users/" + user.id)
        .then(response => {
          console.log("Success!", response.data);
          this.$router.push("/");
        });
    }
  }
};
</script>