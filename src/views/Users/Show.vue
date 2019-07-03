<template>
  <div class="users-show">
    
    {{ user }}
    <h1>{{ user.first_name }} {{ user.last_name }}</h1>
    <img v-bind:src="user.image">
    <h3>Current Position: {{ user.current_job_title }}</h3>
    <h3><a href="https://www.w3schools.com/html/">IMDB URL</a></h3>
    <h3>Email: {{ user.email }}</h3>
    <h3>Address: {{ user.address }}</h3>
    <h3>Phone Number: {{ user.phone_number }}</h3>
    <h3>Resume: {{ user.resume }}</h3>
    
    <template v-if="user.id == $parent.user_id">
      <button>
        <router-link v-bind:to="'/users/' + user.id + '/edit'">Edit User</router-link>
      </button>
      <button v-on:click="destroy(user)">Destroy User</button>
    </template>

    <br>
    <hr>

    <h1>{{ user.first_name }} {{ user.last_name }}'s Projects</h1>
    <div v-for="project in user.projects">
      <router-link v-bind:to="'/projects/' + project.id">{{ project.title }}</router-link>
      <h5>{{ project.description }}</h5>
      <h5>{{ project.address }}</h5>
      <h5>{{ project.start_date }} - {{ project.end_date }}</h5>
      <hr>
    </div>
    
    <h1 v-if="user.id == $parent.user_id">My Applications</h1>
    <div v-for="application in user.applications">
      <router-link v-bind:to="'/projects/' + application.project.id">{{ application.project.title }}</router-link>
      <h5>{{ application.project.description }}</h5>
      <h5>{{ application.project.address }}</h5>
      <h5>{{ application.project.start_date }} - {{ application.project.end_date }}</h5>
      <h5>Offer Status: {{ application.offered }}</h5>
      <h5>Accepted Status: {{ application.accepted }}</h5>

      <form v-on:submit.prevent="submit(application)">
        <div class="form-group">
          <label for="note">Note</label>
          <input type="text" class="form-control" id="note" placeholder="Send a message to Project Owner" v-model="newAcceptedNote">
        </div>
        <button type="submit" class="btn btn-success">Accept</button>
      </form>

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
      newAcceptedNote: "",
      application: {}
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
    },
    submit: function(application){
      var params = {
        accepted: true
      };
      axios.patch("api/applications/"+ application.id, params).then(response => {
        this.newAcceptedNote = "";
        this.message = "You've accepted this job!";
      })
    }
  }
};
</script>