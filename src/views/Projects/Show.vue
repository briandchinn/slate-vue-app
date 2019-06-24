<template>
  <div class="projects-show">
    
    {{ project }}
    <h1>{{ message }}</h1>
<!--     <h3>Posted By: {{ project.user.first_name }} {{ project.user.last_name }}</h3> -->
    <h3>Title: {{ project.title }}</h3>
    <h3>Description: {{ project.description }}</h3>
    <h3>Address: {{ project.address }}</h3>
    <h3>Start Date: {{ project.start_date }}</h3>
    <h3>End Date: {{ project.end_date }}</h3>
    <h3>Number of Positions: {{ project.number_of_positions }}</h3>
    <h3>Posted: {{ relativeDate(project.created_at) }}</h3>
    <button>
    <router-link v-bind:to="'/projects/' + project.id + '/edit'">Edit Project</router-link>
    </button>    
    <button v-on:click="destroy(project)">Destroy Project</button>


    <h1>Would You Like to Apply?</h1>
    <form v-on:submit.prevent="submit()">
      <div class="form-group">
        <label for="note">Note</label>
        <input type="text" class="form-control" id="note" placeholder="Send a message to Project Owner" v-model="newProjectNote">
      </div>
      <button type="submit" class="btn btn-success">Apply</button>
    </form>
    {{ message }}

  </div>
</template>

<script>

import axios from "axios";
import moment from "moment";


export default {
  data: function() {
    return {
      message: 'This is the Project Show Page',
      project: {},
      newProjectNote: "",
      message: ""
    };
  },
  created: function() {
    axios.get("/api/projects/" + this.$route.params.id).then(response => {
      this.project = response.data;
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
        // this.$router.push("/projects/" + this.project.id)
        this.newProjectNote = "";
        this.message = "You've succesfully applied!";
      })
      axios.post("api/notifications", params).then(response => {
        console.log("Successfully pushed to notifications")
      })
    }
  }
};
</script>

