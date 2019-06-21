<template>
  <div class="users-show">
    
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
    

  </div>

  </div>
</template>

<script>

import axios from "axios";

export default {
  data: function() {
    return {
      message: 'This is the Users Show Page',
      user: {}
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