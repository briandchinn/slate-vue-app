<template>
  <div class="projects-show">
    
<!--     {{ project }}
 -->
    <!-- Project Details -->
    <!-- <div>
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
      <br> -->
      
      <!-- Begin of Edit and Destroy -->
      <!-- <template v-if="project.user.id == $parent.user_id">
        <button>
          <router-link v-bind:to="'/projects/' + project.id + '/edit'">Edit Project</router-link>
        </button>
        <button v-on:click="destroy(project)">Destroy Project</button>
      </template> -->
      <!-- End of Edit and Destroy -->
<!--     </div>
 -->    <!-- End of Project Details -->
    <!-- <hr>
    
    <h1 v-if="project.start_date > today()">You are too late</h1> -->

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
    <!-- <template v-if="project.user.id == $parent.user_id">

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
      <br> -->

      <!-- <div v-for="application in orderBy(filterBy(project.applications, filter, 'offered', 'created', 'favorite'), sortAttribute, sortAscending)">
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
        </div> -->
        
        <!-- Favorite Logic -->
    <!--     <div v-if="application.favorite">
          <font-awesome-icon v-on:click='favorite(application, true)' :icon="[`fas`,`star`]" size="lg" style="color:gold"/>
        </div>
        <div v-else>
          <font-awesome-icon v-on:click='favorite(application, false)' :icon="[`fas`,`star`]" size="lg" style="color:grey"/>
        </div> -->
        <!-- End of Favorite Logic -->
        
      <!--   <hr>
      </div>
    </template> -->
    <!-- End of Applicants Section -->
    
    <!-- !!!!!!!!!!NEW THEME SECTION!!!!!!!!!!!!-->

    <!-- Begin New Project Details -->
    <div class="container col-md-8 mt-5" style="max-width:1000px">
      <div class="row mt-5" v-if="project.user.id == $parent.user_id">
        <div class="container col-md-12 ">
          <div class="form-group">
            <h3 class="d-inline-block align-middle">My Project</h3>
              <button class="btn btn-danger btn-lg pull-right mr-2 align-middle" v-on:click="destroy(project)">Delete Project</button>
              <router-link class="btn btn-secondary btn-lg pull-right mr-2 align-middle" v-bind:to="'/projects/' + project.id + '/edit'">Edit Project</router-link>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h3 class="d-inline-block heading heading-4">{{ project.title }}</h3>
          <span v-if="project.remaining_positions == 0"class="block-ribbon block-ribbon-right badge badge-pill bg-red text-uppercase align-middle">Full</span>
          <span v-else class="block-ribbon block-ribbon-right badge badge-pill bg-green text-uppercase align-middle">Open</span>
        </div>
        <div class="card-body">
          <p class="card-text"><span class="font-weight-bold">Description:</span> {{ project.description }}</p>
          <p class="card-text"><span class="font-weight-bold">Location:</span> {{ project.address }}</p>
          <p class="card-text"><span class="font-weight-bold">Dates:</span> {{ newDate(project.start_date) }} - {{ newDate(project.end_date) }}</p>
          <p class="card-text"><span class="font-weight-bold">Number of Positions:</span> {{ project.number_of_positions }}</p>
          <p class="card-text"><span class="font-weight-bold">Available Positions:</span> {{ project.remaining_positions }}</p>
        </div>
        <div class="card-footer text-muted">
          <div class="row align-items-center">
            <div class="col text-right">
              <div class="block-author">
                <div class="author-image author-image-md">
                  <img v-bind:src="project.user.image">
                </div>
                <div class="author-info">
                  Posted By: <router-link v-bind:to="'/users/' + project.user.id">{{ project.user.first_name }} {{ project.user.last_name }}</router-link>
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
    <div class="container col-md-8" style="max-width:1000px">
      <!-- Begin Quick Apply Section -->
      <div class="card mb-5 mt-3" v-if="project.remaining_positions == 0">
        <div class="card-body text-center">
          <p class="mb-0">Sorry. Project has been fully staffed! Please browse other projects</p>
          <router-link v-bind:to="'/projects/'" class="btn btn-base-1 mt-2">Browse Projects</router-link>
        </div>
      </div>

      <div class="card mt-4" v-else-if="project.user.id !== $parent.user_id && project.current_user_has_applied === false">
        <div class="card-body">
          <div class="row">
            <div class="col-8">
              <h3 class="heading heading-6 strong-600" for="radioPayment_2">Apply</h3>
              <p class="c-gray-light mt-2">
                  If you'd like to let <strong>{{ project.user.first_name }} {{ project.user.last_name }}</strong> know that you're interested and available for the project then apply below. You'll be notified should you be accepted. 
              </p>
            </div>
            <div class="col-4 text-right">
              <img src="/assets/images/quick-apply.png" width="100">
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
                  <h5>{{ message }}</h5>
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
      <!-- <div v-else class="container col-md-8" style="max-width:1000px"> -->
      <div v-else class="card text-center mt-4">
        <div class="card-body">
          <h4 class="card-title">You aleady applied to this job.</h4>
          <p class="card-text">Jump over to your profile page to check the status of the offer for this application!</p>
          <router-link class="btn btn-base-1" :to="`/users/` + $parent.user_id">
            Go to Your Profile
          </router-link>
        </div>
      </div>
      <!-- </div> -->
    </div>
    <!-- End Apply Section -->

    <!-- Begin Applicants Details -->
    <div class="container col-md-8 mb-3 mt-3" style="max-width:1000px" v-if="project.user.id == $parent.user_id">
      
      
      <!-- Begin Applications Sort -->
      <div v-if="project.user.id == $parent.user_id">
        <div class="row mt-5">
          <div class="container col-md-12">
            <div class="form-group">
              <h3 class="d-inline-block align-middle">My Applicants</h3>
              <button class="badge badge-pill badge-dark badge-lg pull-right" v-on:click="setSortAttribute('offered')">Offer Status
                <span v-if="sortAttribute === 'offered' && sortAscending === 1">^</span>
                <span v-if="sortAttribute === 'offered' && sortAscending === -1">V</span>
              </button>
              <button class="badge badge-pill badge-dark badge-lg pull-right mr-1" v-on:click="setSortAttribute('favorite')">Favorite
                <span v-if="sortAttribute === 'accepted' && sortAscending === 1">^</span>
                <span v-if="sortAttribute === 'accepted' && sortAscending === -1">V</span>
              </button>
              <button class="badge badge-pill badge-dark badge-lg pull-right mr-1" v-on:click="setSortAttribute('created')">Created
                <span v-if="sortAttribute === 'created' && sortAscending === 1">^</span>
                <span v-if="sortAttribute === 'created' && sortAscending === -1">V</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- End Applications Sort -->


      <!-- Begin Applictions Loop -->
      <div v-for="application in orderBy(filterBy(project.applications, filter, 'offered', 'created', 'favorite'), sortAttribute, sortAscending)">
        <div class="card mb-3">
          <div class="card-title">
            <div class="row align-items-center">
              <div class="col-8">
                  <div class="block-author">
                    <div class="author-image author-image-md">
                      <img v-bind:src="application.user.image">
                    </div>
                    <div class="author-info">
                      <router-link class="heading heading-5 strong-600" v-bind:to="'/users/' + application.user.id">{{ application.user.first_name }} {{ application.user.last_name }}</router-link>
                    </div>
                  </div>
              </div>
              <div class="col-4">
                <div class="card-icon-actions text-right">
                  <!-- Favorite Logic -->
                  <div v-if="application.favorite">
                    <font-awesome-icon v-on:click='favorite(application, true)' :icon="[`fas`,`star`]" size="lg" style="color:gold"/>
                  </div>
                  <div v-else>
                    <font-awesome-icon v-on:click='favorite(application, false)' :icon="[`fas`,`star`]" size="lg" style="color:grey"/>
                  </div>
                  <!-- End of Favorite Logic -->
                </div>
              </div>
            </div>
          </div>
          <div class="card-body">
            <p class="card-text"><span class="font-weight-bold">Applied On:</span> {{ newDate(application.created) }}</p>
            <p class="card-text"><span class="font-weight-bold">Note:</span> {{ application.note }}</p>
            <p class="card-text" v-if="application.offered == false"><span class="font-weight-bold">Application Status:</span>  <span class="text-dark bg-warning"> Offer is pending. If you want to hire {{ application.user.first_name }} click hire button below.</span></p>
            <p class="card-text" v-if="application.accepted == true"><span class="font-weight-bold">Application Status:</span>  <span class="text-white bg-success"> {{ application.user.first_name }} {{ application.user.last_name }} has accepted the offer.</span></p>
          </div>
          <div class="card-footer">
            <div class="row align-items-center">
              <!-- <div class="col-6">
                <a href="#" class="btn btn-base-1">Hire Applicant</a>
              </div> -->
              <div v-if="application.offered == !true" class="col-6">
                <button class="btn btn-base-1" v-on:click="hire(application)">Hire Applicant</button>
                {{ messageOffer }}
              </div>
              <div v-else>
                <p class="ml-3"><span class="text-success">You offered {{application.user.first_name}} {{application.user.last_name}} the Job!</span></p>
              </div>
             <!--  <div class="col-6 text-right">
                <h6 class="heading heading-sm strong-400 text-muted mb-0">Applied On: {{ newDate(application.created) }}</h6>
              </div> -->
            </div>
          </div>
        </div>
      </div>
      <!-- End Applications Loop -->

      <!-- Begin Card if No Applicants Exist -->
      <div class="card" v-if="project.applications == false">
        <div class="card-body text-center">
          <p class="mb-1">You dont have any applicants yet. Browse users to find talent that might be a good fit.</p>
          <router-link v-bind:to="'/projects'" class="btn btn-base-1 mt-2" disabled>Search Users</router-link>
        </div>
      </div>
      <!-- End of Card if No Applicants Exist -->
    </div>
    <!-- End Applicants Details -->
    

    <!-- Bottom Info Bloc -->
    <div class="container col-md-8 mb-3" style="max-width:1000px">
      <div class="sidebar sidebar--style-2 mt-5 bg-secondary">
        <div class="sidebar-object mb-0">
          <div class="icon-block icon-block--style-1-v2">
            <div class="block-icon block-icon-sm pt-2">
              <i class="icon-clock" style="color:#FFFFFF;"></i>
            </div>
            <div class="block-content">
              <h3 class="heading heading-6 strong-500 text-white">Most Offers Happen within 48 Hours</h3>
              <p class="text-white">
                Should you receive an offer do your best to respond within 24 hours. 
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
      messageOffer: "",
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
        this.messageOffer = "You've made an offer!";
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

