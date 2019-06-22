<template>
  <div class="projects-edit">

    <h1>{{ message }}</h1>
    
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <form v-on:submit.prevent="submit()">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="title">Title</label>
          <input type="text" class="form-control" id="title" placeholder="" v-model="project.title">
        </div>
        <div class="form-group col-md-6">
          <label for="description">Description</label>
          <input type="text" class="form-control" id="description" placeholder="" v-model="project.description">
        </div>
      </div>
      <div class="form-group">
        <label for="address">Location</label>
        <input type="text" class="form-control" id="address" placeholder="City, State, Zip" v-model="project.address">
      </div>
      <div class="form-group">
        <label for="start_date">Start Date</label>
        <input type="text" class="form-control" id="start_date" placeholder="" v-model="project.start_date">
      </div>
      <div class="form-group">
        <label for="end_date">End Date</label>
        <input type="text" class="form-control" id="end_date" placeholder="" v-model="project.end_date">
      </div>      
      <div class="form-group">
        <label for="number_of_positions">Number of Positions</label>
        <input type="number" class="form-control" id="number_of_positions" placeholder="" v-model="project.number_of_positions">
      </div>
      <button type="submit" class="btn btn-success">Update</button>
    </form>

  </div>
</template>

<script>

import axios from "axios";

export default {
  data: function() {
    return {
      message: 'This is the Edit Project Page',
      project: {},
      errors: []
    };
  },
  created: function() {
    axios.get("api/projects/" + this.$route.params.id).then(response => {
      this.project = response.data;
      console.log(this.project)
    });
  },
  methods: {
    submit: function(){
      var params = {
        title: this.project.title,
        description: this.project.description,
        address: this.project.address,
        start_date: this.project.start_date,
        end_date: this.project.end_date,
        number_of_positions: this.project.number_of_positions,
      };
      axios.patch("api/projects/" + this.project.id, params).then(response => {
        console.log("Success!", response.data)
        this.$router.push("/projects/" + this.project.id);
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    }
  }
};
</script>