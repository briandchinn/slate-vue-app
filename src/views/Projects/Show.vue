<template>
  <div class="projects-show">
    
    {{ project }}
    <h1>{{ message }}</h1>
    <h3>Title: {{ project.title }}</h3>
    <h3>Description: {{ project.description }}</h3>
    <h3>Address: {{ project.address }}</h3>
    <h3>Start Date: {{ project.start_date }}</h3>
    <h3>End Date: {{ project.end_date }}</h3>
    <h3>Number of Positions: {{ project.number_of_positions }}</h3>
    <h3>Posted: {{ relativeDate(project.created_at) }}</h3>
    <router-link v-bind:to="'/users/' + project.user.id">by {{ project.user.first_name }} {{ project.user.last_name }}</router-link>
    <br>
    <br>

    <template v-if="project.user.id == $parent.user_id">
      <button>
        <router-link v-bind:to="'/projects/' + project.id + '/edit'">Edit Project</router-link>
      </button>
      <button v-on:click="destroy(project)">Destroy Project</button>
    </template>

    <hr>

    <template v-if="project.user.id != $parent.user_id">
      <h1>Would You Like to Apply?</h1>
      <form v-on:submit.prevent="submit()">
        <div class="form-group">
          <label for="note">Note</label>
          <input type="text" class="form-control" id="note" placeholder="Send a message to Project Owner" v-model="newProjectNote">
        </div>
        <button type="submit" class="btn btn-success">Apply</button>
      </form>
      {{ message }}
      <hr>
    </template>

    <template v-if="project.user.id == $parent.user_id">
      <h1>Applicants</h1>
      <div v-for="application in project.applications">
        <router-link v-bind:to="/users/ + application.user_id">{{ application.user.first_name }}</router-link>
        <h5>Application ID: {{ application.id }} </h5>
        <h5>Note: {{ application.note }} </h5>
        <h5>Offer Status: {{ application.offered }} </h5>
        <h5>Accepted Status: {{ application.accepted }} </h5>
        <h5>Favorite: {{ application.favorite }} </h5>
        <h5>User ID: {{ application.user.id }} </h5>
        <h5>First Name:{{ application.user.first_name }} </h5>
        <h5>Last Name: {{ application.user.last_name }} </h5>
        <h5>Email: {{ application.user.email }} </h5>
        <img v-bind:src="application.user.image" alt="user images" width="50"><br>
        <button v-on:click="hire(application)">Hire Applicant</button>
        <button v-on:click="favorite(application)">Favorite</button>
        <hr>
      </div>
    </template>
    
  </div>
</template>

<script>

import axios from "axios";
import moment from "moment";


export default {
  data: function() {
    return {
      project: {},
      application: {},
      newProjectNote: "",
      message: ""
    };
  },
  created: function() {
    axios.get("/api/projects/" + this.$route.params.id).then(response => {
      this.project = response.data;
      console.log("Success", response.data)
    });
  },
  methods: {
    destroy: function(project) {
      axios
        .delete("/api/projects/" + project.id)
        .then(response => {
          console.log("Success!", response.data);
          this.$router.push("/projects");
        });
    },
    relativeDate: function(date) {
      return moment(date).fromNow();
    },
    submit: function(){
      var params = {
        project_id: this.project.id,
        note: this.newProjectNote
      };
      axios.post("api/applications", params).then(response => {
        this.newProjectNote = "";
        this.message = "You've succesfully applied!";
      })
    },
    hire: function(application){
      var params = {
        offered: true
      };
      axios.patch("api/applications/" + application.id, params).then(response => {
        console.log("Success", response.data);
      });
    },
    favorite: function(application){
      var params = {
        favorite: true
      };
      axios.patch("api/applications/" + application.id, params).then(response => {
        console.log("Success", response.data);
      });
    },
  }
};
</script>

