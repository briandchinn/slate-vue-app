<template>
  <div class="projects-new">
    <h1>{{ message }}</h1>
    
    <form v-on:submit.prevent="submit()">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="title">Title</label>
          <input type="text" class="form-control" id="title" placeholder="" v-model="newProjectTitle">
        </div>
        <div class="form-group col-md-6">
          <label for="description">Description</label>
          <input type="text" class="form-control" id="description" placeholder="" v-model="newProjectDescription">
        </div>
      </div>
      <div class="form-group">
        <label for="address">Location</label>
        <input type="text" class="form-control" id="address" placeholder="City, State, Zip" v-model="newProjectAddress">
      </div>
      <div class="form-group">
        <label for="start_date">Start Date</label>
        <input type="text" class="form-control" id="start_date" placeholder="" v-model="newProjectStartDate">
      </div>
      <div class="form-group">
        <label for="end_date">End Date</label>
        <input type="text" class="form-control" id="end_date" placeholder="" v-model="newProjectEndDate">
      </div>      
      <div class="form-group">
        <label for="number_of_positions">Number of Positions</label>
        <input type="number" class="form-control" id="number_of_positions" placeholder="" v-model="newProjectPositions">
      </div>
      <button type="submit" class="btn btn-success">Create</button>
    </form>
    
  </div>
</template>

<script>


import axios from "axios";
import Datepicker from 'vuejs-datepicker';

export default {
  data: function() {
    return {
      message: 'Create New Project',
      errors: [],
      projects: [],
      newProjectTitle: "",
      newProjectDescription: "",
      newProjectAddress: "",
      newProjectStartDate: "",
      newProjectEndDate: "",
      newProjectPositions: "",
    };
  },
  created: function() {
  },
  methods: {
    submit: function(){
      var params = {
        title: this.newProjectTitle,
        description: this.newProjectDescription,
        address: this.newProjectAddress,
        start_date: this.newProjectStartDate,
        end_date: this.newProjectEndDate,
        number_of_positions: this.newProjectPositions,
      };
      axios.post("api/projects", params).then(response => {
        this.$router.push("/projects");
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    },
  },
  components: {
    Datepicker
  }
};

</script>