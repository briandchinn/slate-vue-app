<template>
  <div class="projects-edit">

    
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
    
    <!-- Beggining of Form -->
    <!-- <form v-on:submit.prevent="submit()">
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
        <template>
          <vue-pikaday 
            v-model="project.start_date"
            :placeholder="newDate(startDate)"
            :options="pickadayOptions"
          />
        </template>
      </div>
      <div class="form-group">
        <label for="end_date">End Date</label>
        <template>
          <vue-pikaday 
            v-model="project.end_date"
            :placeholder="newDate(endDate)"
            :options="pickadayOptions"
          />
        </template>
      </div>
      
 
      <div class="form-group">
        <label for="number_of_positions">Number of Positions</label>
        <input type="number" class="form-control" id="number_of_positions" placeholder="" v-model="project.number_of_positions">
      </div>
      <button type="submit" class="btn btn-success">Update</button>
    </form> -->
    <!-- End of Form -->

    <!-- Beginning of New Template Form -->
    <div class="container">
      <form class="form-default mt-4 mb-4" data-toggle="validator" role="form" v-on:submit.prevent="submit()">
        <div class="card ">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-8">
                <h1 class="heading heading-6 strong-600">Edit Project</h1>

                <p class="c-gray-light mt-2">
                    Any changes you make here can't be undone.  
                </p>
              </div>
            </div>

            <div class="row mt-3">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="control-label">Title</label>
                  <div class="input-group input-group--style-1">
                    <input type="text" class="form-control form-control-lg" id="title" v-model="project.title">
                  </div>
                </div>
              </div>
            </div>
            
            <div class="row mt-3">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="control-label">Description</label>
                  <div class="input-group input-group--style-1">
                    <input type="text" class="form-control form-control-lg" id="description" v-model="project.description">
                  </div>
                </div>
              </div>
            </div>
            
            <div class="row mt-3">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="control-label">Location</label>
                  <div class="input-group input-group--style-1">
                    <input type="text" class="form-control form-control-lg" id="address" v-model="project.address">
                  </div>
                </div>
              </div>
            </div>
            
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label class="control-label">Start Date</label>
                  <div class="input-group input-group--style-1">
                    <input type="text" class="form-control form-control-lg" id="start_date" v-model="project.start_date">
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label class="control-label">End Date</label>
                  <div class="input-group input-group--style-1">
                    <input type="text" class="form-control form-control-lg" id="end_date" v-model="project.end_date">
                  </div>
                </div>
              </div>
            </div>

            <div class="row mt-3">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="control-label">Number of Positions</label>
                  <div class="input-group input-group--style-1">
                    <input type="number" class="form-control form-control-lg"  id="number_of_positions" v-model="project.number_of_positions">
                  </div>
                </div>
              </div>
            </div>

            <div class="text-left">
              <button class="btn btn-base-1" type="submit">Create Project
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
    <!-- End of Form -->

  </div>
</template>

<script>

import axios from "axios";
import VuePikaday from '@enrian/vue-pikaday';
import moment from "moment";



export default {
  data: function() {
    return {
      project: {},
      startDate:"",
      endDate:"",
      errors: [],
      pickadayOptions: {
        format: 'MM/DD/YYYY',
        },
    };
  },
  created: function() {
    axios.get("api/projects/" + this.$route.params.id).then(response => {
      this.project = response.data;
      this.startDate = response.data.start_date;
      this.endDate = response.data.end_date;
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
    },
    clear() {
      this.project.start_date = null;
      this.project.end_date = null;
    },
    newDate: function(date) {
      return moment(date).format('MMMM Do YYYY');
    },
  }
};
</script>