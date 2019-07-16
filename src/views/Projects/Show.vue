<template>
  <div class="projects-show">
    
    {{ project }}

    <!-- Project Details -->
    <div>
      <h1>{{ message }}</h1>
      <h3>Title: {{ project.title }}</h3>
      <h3>Description: {{ project.description }}</h3>
      <h3>Address: {{ project.address }}</h3>
      <h3>Start Date: {{ newDate(project.start_date) }}</h3>
      <h3>End Date: {{ newDate(project.end_date) }}</h3>
      <h3>Total Positions: {{ project.number_of_positions }}</h3>
      <h3 v-if="project.remaining_positions > 0">Available Positions: {{ project.remaining_positions }}</h3>
      <h3 v-else>Sorry Project is Full</h3>
      <h3>Posted: {{ relativeDate(project.created_at) }}</h3>
      <router-link v-bind:to="'/users/' + project.user.id">by {{ project.user.first_name }} {{ project.user.last_name }}</router-link>
      <br>
      <br>
      
      <!-- Begin of Edit and Destroy -->
      <template v-if="project.user.id == $parent.user_id">
        <button>
          <router-link v-bind:to="'/projects/' + project.id + '/edit'">Edit Project</router-link>
        </button>
        <button v-on:click="destroy(project)">Destroy Project</button>
      </template>
      <!-- End of Edit and Destroy -->
    </div>
    <!-- End of Project Details -->
    <hr>
    
    <h1 v-if="project.start_date > today()">You are too late</h1>

    <!-- Application Section --> 
<!--     <template v-if="project.user.id != $parent.user_id && project.remaining_positions > 0 && project.start_date < today()">
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
    <h1 v-if="project.start_date > today()">This project is in the past. Applications no longer accepted.</h1> -->
    <!-- End of Application Section -->

    <!-- Applicants Section -->
    <template v-if="project.user.id == $parent.user_id">

      <h1>Applicants</h1>

      <div class="form-group">
        <button v-on:click="setSortAttribute('offered')">Sort by Offer Status
          <span v-if="sortAttribute === 'offered' && sortAscending === 1">^</span>
          <span v-if="sortAttribute === 'offered' && sortAscending === -1">V</span>
        </button>
      </div>
      <div class="form-group">
        <button v-on:click="setSortAttribute('created')">Sort by Date
          <span v-if="sortAttribute === 'created' && sortAscending === 1">^</span>
          <span v-if="sortAttribute === 'created' && sortAscending === -1">V</span>
        </button>
      </div>
      <div class="form-group">
        <button v-on:click="setSortAttribute('favorite')">Sort by Favorite
          <span v-if="sortAttribute === 'favorite' && sortAscending === 1">^</span>
          <span v-if="sortAttribute === 'favorite' && sortAscending === -1">V</span>
        </button>
      </div>
      <br>

      <div v-for="application in orderBy(filterBy(project.applications, filter, 'offered', 'created', 'favorite'), sortAttribute, sortAscending)">
        <img v-bind:src="application.user.image" alt="user images" width="50"><br>
        <h5>{{ application.user.first_name }} {{ application.user.last_name }}</h5>
        <h5>Applied on: {{ newDate(application.created) }} </h5>
        <h5>Note: {{ application.note }} </h5>
        <h5>Offer Status: {{ application.offered }} </h5>
        <h5>Accepted Status: {{ application.accepted }} </h5>

        <div v-if="application.offered == !true">
          <button v-on:click="hire(application)">Hire Applicant</button>
        </div>
        <div v-else>
          <h4>You offered {{application.user.first_name}} {{application.user.last_name}} the Job</h4>
        </div>
        
        <!-- Favorite Logic -->
        <div v-if="application.favorite">
          <font-awesome-icon v-on:click='favorite(application, true)' :icon="[`fas`,`star`]" size="lg" style="color:gold"/>
        </div>
        <div v-else>
          <font-awesome-icon v-on:click='favorite(application, false)' :icon="[`fas`,`star`]" size="lg" style="color:grey"/>
        </div>
        <!-- End of Favorite Logic -->
        
        <hr>
      </div>
    </template>
    <!-- End of Applicants Section -->
    
    <!-- !!!!!!!!!!NEW THEME SECTION!!!!!!!!!!!!-->

    <!-- Begin New Project Details -->
    <div class="container col-md-8 mb-3">
      <div class="card">
        <div class="card-header">
          <h3 class="heading heading-5">Project</h3>
        </div>
        <div class="card-body">
          <h4 class="card-title">{{ project.title }}</h4>
          <p class="card-text">{{ project.description }}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        <div class="card-footer text-muted">
          <div class="row align-items-center">
            <div class="col text-right">
              <div class="block-author">
                <div class="author-image author-image-xs">
                  <img v-bind:src="project.user.image">
                </div>
                <div class="author-info">
                  <router-link v-bind:to="'/users/' + project.user.id">Posted By: {{ project.user.first_name }} {{ project.user.last_name }}</router-link>
                </div>
              </div>
            </div>

            <div class="col text-right text-xs-right">
              <h6 class="heading heading-sm strong-400 text-muted mb-0">
                  {{ relativeDate(project.created_at) }}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End New Project Details -->
    
    <!-- Begin Apply Section -->
    <div class="container col-md-8">
      <!-- Simple Card Section -->
      <div class="card no-border">
        <div class="card-title no-border">
            <h3 class="heading heading-6 strong-600">
                My cards
            </h3>
            <p class="mt-1 mb-0">
                Add you credit card for faster checkout process.
            </p>
        </div>
      </div>
      <!-- End Simple Card Section -->

      <!-- Begin Quick Apply Section -->
      <div class="card mt-4" v-if="project.user.id != $parent.user_id">
        <div class="card-body">
          <div class="row">
              <div class="col-8">
                  <h3 class="heading heading-6 strong-600" for="radioPayment_2">Quick Apply</h3>

                  <p class="c-gray-light mt-2">
                      If you'd like to let {{ project.user.first_name }} {{ project.user.last_name }} know that you're interested and available for the project then apply below. You'll be notified should you be accepted. 
                  </p>
              </div>
              <div class="col-4 text-right">
                  <img src="/assets/images/icons/cards/paypal-256x160.png" width="100">
              </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12">
              <form v-on:submit.prevent="submit()">
                <div class="form-group">
                  <label class="control-label">Send Message</label>
                  <div class="form-group">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="newProjectNote"></textarea>
                  </div>
                  {{ message }}
                </div>
                <div class="text-right mt-3">
                  <button type="submit" class="btn btn-styled btn-block btn-lg btn-base-1">Apply Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- End Quick Apply Section -->
    </div>
    <!-- End Apply Section -->

    <!-- Begin Applicants Details -->
    <div class="container col-md-8 mb-3 mt-3" v-if="project.user.id == $parent.user_id">
  
      <div class="row mt-5">
        <div class="col-md-12 ">
          <h3 class="d-inline-block align-middle" v-if="project.user.id == $parent.user_id">My Applicants</h3>
          <h5 class="d-inline-block align-middle" v-else>'s Projects</h5>
            <router-link v-if="project.user.id == $parent.user_id" class="btn btn-success btn-lg pull-right ml-2" v-bind:to="'/projects/new'">Sort by Offer Status</router-link>
            <router-link v-if="project.user.id == $parent.user_id" class="btn btn-success btn-lg pull-right ml-2" v-bind:to="'/projects/new'">Sort by Date</router-link>
            <router-link v-if="project.user.id == $parent.user_id" class="btn btn-success btn-lg pull-right" v-bind:to="'/projects/new'">Sort by Favorite</router-link>
        </div>
      </div>

      <div v-for="application in orderBy(filterBy(project.applications, filter, 'offered', 'created', 'favorite'), sortAttribute, sortAscending)">
        <div class="card">
          <div class="card-title">
            <div class="row align-items-center">
              <div class="col-8">
                  <h4 class="heading heading-5 strong-600">{{ application.user.first_name }} {{ application.user.last_name }}</h4>
              </div>
              <div class="col-4">
                <div class="card-icon-actions text-right">
                  <a href="#" class="favorite active" data-toggle="tooltip" data-original-title="Save to favorites"><i class="fa fa-star fa-2x"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body">
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div class="card-footer">
            <div class="row align-items-center">
              <div class="col-6">
                <a href="#" class="btn btn-base-1">Hire Applicant</a>
              </div>
              <div class="col-6 text-right">
                <h6 class="heading heading-sm strong-400 text-muted mb-0">{{ newDate(application.created) }}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Applicants Details -->
    

    <!-- Bottom Info Bloc -->
    <div class="container col-md-8 mb-3">
      <div class="sidebar sidebar--style-2 mt-5 bg-secondary">
        <div class="sidebar-object mb-0">
          <div class="icon-block icon-block--style-1-v2">
            <div class="block-icon block-icon-sm pt-2">
              <i class="icon-transport-025" style="color:#FFFFFF;"></i>
            </div>
            <div class="block-content">
              <h3 class="heading heading-6 strong-500 text-white">Fast shipping from 24 to 38 hours</h3>
              <p class="text-white">
                Lorem ipsum dolor sit amet consectetur adipiscing elit eiusmod tempor incididunt.
              </p>
            </div>
          </div>

          <div class="icon-block icon-block--style-1-v2 mt-5">
            <div class="block-icon block-icon-sm pt-2">
              <i class="icon-finance-114" style="color:#FFFFFF;"></i>
            </div>
            <div class="block-content">
              <h3 class="heading heading-6 strong-500 text-white">30 days money back guarantee</h3>
              <p class="text-white">
                Lorem ipsum dolor sit amet consectetur adipiscing elit eiusmod tempor incididunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End of Bottom Info Bloc -->
    


  </div>
</template>

<script>

import axios from "axios";
import moment from "moment";
import Vue2Filters from "vue2-filters";


export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      project: {},
      application: {},
      newProjectNote: "",
      message: "",
      sortAttribute: "",
      sortAscending: 1,
      filter:"",
      isFavorite: false,
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
    newDate: function(date) {
      return moment(date).format('MMMM Do YYYY');
    },
    today: function() {
      return moment(new Date()).format('MMMM Do YYYY');
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
    favorite: function(application, favoriteValue){
      var params = {
        favorite: !favoriteValue
      };
      axios.patch("api/applications/" + application.id, params).then(response => {
        console.log("Success", response.data);
        application.favorite = !favoriteValue
      });
    },
    setSortAttribute: function(attribute){
      if (this.sortAttribute = attribute) {
        this.sortAscending = this.sortAscending * -1;
      } else {
        this.sortAscending = 1;
      }
      this.sortAttribute = attribute;
    },
  }
};
</script>

