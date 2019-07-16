<template>
  <div class="projects-new">
    
    <!-- Beggining of Form -->
    <!-- <form v-on:submit.prevent="submit()">
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
        <template>
          <vue-pikaday 
            v-model="newProjectStartDate"
            placeholder="Start Date"
            :options="pickadayOptions"
          />
        </template>
      </div>
      <div class="form-group">
        <label for="end_date">End Date</label>
        <template>
          <vue-pikaday 
            v-model="newProjectEndDate"
            placeholder="End Date"
            :options="pickadayOptions"
          />
        </template>
      </div>
      <div class="form-group">
        <label for="number_of_positions">Number of Positions</label>
        <input type="number" class="form-control" id="number_of_positions" placeholder="" v-model="newProjectPositions">
      </div>
      <button type="submit" class="btn btn-success">Create</button>
    </form> -->
    <!-- End of Form -->
    
    <!-- Beginning of New Template Form -->
    <div class="container col-md-8">
      <form class="form-default mt-4 mb-4" data-toggle="validator" role="form" v-on:submit.prevent="submit()">
        <div class="card z-depth-1">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-8">
                <h1 class="heading heading-6 strong-600">Create New Project</h1>

                <p class="c-gray-light mt-2">
                    Upon submit the project will be placed on the main project page. Should you need to edit your project you can locate it on the main project page or from your profile page. 
                </p>
              </div>
            </div>

            <div class="row mt-3">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="control-label">Title</label>
                  <div class="input-group input-group--style-1">
                    <input type="text" class="form-control form-control-lg" v-model="newProjectTitle">
                  </div>
                </div>
              </div>
            </div>
            
            <div class="row mt-3">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="control-label">Description</label>
                  <div class="input-group input-group--style-1">
                    <input type="text" class="form-control form-control-lg" v-model="newProjectDescription">
                  </div>
                </div>
              </div>
            </div>
            
            <div class="row mt-3">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="control-label">Location</label>
                  <div class="input-group input-group--style-1">
                    <input type="text" class="form-control form-control-lg" v-model="newProjectAddress">
                  </div>
                </div>
              </div>
            </div>
            
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="start_date" class="control-label">Start Date</label>
                  <template>
                    <vue-pikaday class="input-group input-group--style-1" 
                      v-model="newProjectStartDate"
                      placeholder=""
                      :options="pickadayOptions"
                    />
                  </template>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="end_date" class="control-label">End Date</label>
                  <template>
                    <vue-pikaday class="input-group input-group--style-1" 
                      v-model="newProjectEndDate"
                      placeholder=""
                      :options="pickadayOptions"
                    />
                  </template>
                </div>
              </div>
            </div>

            <div class="row mt-3">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="control-label">Number of Positions</label>
                  <div class="input-group input-group--style-1">
                    <input type="number" class="form-control form-control-lg"  v-model="newProjectPositions">
                  </div>
                </div>
              </div>
            </div>

            <div class="text-left">
              <!-- <a href="#" class="btn btn-base-1" type="submit">Create Project</a> -->
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
import Datepicker from 'vuejs-datepicker';
import VuePikaday from '@enrian/vue-pikaday';


export default {
  data: function() {
    return {
      message: 'Create New Project',
      errors: [],
      projects: [],
      newProjectTitle: "",
      newProjectDescription: "",
      newProjectAddress: "",
      newProjectStartDate: null,
      newProjectEndDate: null,
      newProjectPositions: "",
      pickadayOptions: {
        format: 'MM/DD/YYYY',
        minDate: new Date(),
        },
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
    clear() {
      this.newProjectStartDate = null;
      this.newProjectEndDate = null;
    },
  },
};

</script>