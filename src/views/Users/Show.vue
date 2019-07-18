<template>
  <div class="users-show">
    
    <!-- {{ user }} -->
    <!-- <h1>{{ user.first_name }} {{ user.last_name }}</h1>
    <img v-bind:src="user.image">
    <h3>Current Position: {{ user.current_job_title }}</h3> -->
    <!-- <h3>Email: {{ user.email }}</h3>
    <h3>Address: {{ user.address }}</h3>
    <h3>Phone Number: {{ user.phone_number }}</h3>
    <h3>IMDB:<a :href="user.imdb_url"> Click to Visit IMDB Page</a></h3>
    <h3>Resume: <a :href="user.resume" target="_blank">Click to Download</a></h3> -->
    
  <!--   <template v-if="user.id == $parent.user_id">
      <button>
        <router-link v-bind:to="'/users/' + user.id + '/edit'">Edit User</router-link>
      </button>
      <button v-on:click="destroy(user)">Destroy User</button>
    </template> -->

<!--     <br>
    <hr>

    <h1>{{ user.first_name }} {{ user.last_name }}'s Projects</h1>
    
    <div>
      <h3 v-if="user.projects == false">No Existing Projects</h3>
      <button v-if="user.id == $parent.user_id">
        <router-link v-bind:to="'/projects/new'">Create New Project</router-link>
      </button>
    </div>
    
    <div v-for="project in user.projects">
      <br>
      <router-link v-bind:to="'/projects/' + project.id">{{ project.title }}</router-link>
      <h5>{{ project.address }}</h5>
      <h5>{{ newDate(project.start_date) }} - {{ newDate(project.end_date) }}</h5>
      <hr>
    </div> -->

    <!-- My Applications Section -->
<!--     <h1 v-if="user.id == $parent.user_id">My Applications</h1>
 -->
<!--     <div>
      <h3 v-if="user.applications == false">No Existing Applications</h3>
      <button v-if="user.id == $parent.user_id && user.applications == false">
        <router-link v-bind:to="'/projects'">Browse Current Projects</router-link>
      </button>
    </div>
    <br> -->
    
<!--     <div v-if="user.id == $parent.user_id">
      <div class="form-group">
        <button v-on:click="setSortAttribute('offered')">Sort by Offer Status
          <span v-if="sortAttribute === 'offered' && sortAscending === 1">^</span>
          <span v-if="sortAttribute === 'offered' && sortAscending === -1">V</span>
        </button>
      </div>
      <div class="form-group">
        <button v-on:click="setSortAttribute('accepted')">Sort by Accepted
          <span v-if="sortAttribute === 'accepted' && sortAscending === 1">^</span>
          <span v-if="sortAttribute === 'accepted' && sortAscending === -1">V</span>
        </button>
      </div>
      <div class="form-group">
        <button v-on:click="setSortAttribute('created')">Sort by created
          <span v-if="sortAttribute === 'created' && sortAscending === 1">^</span>
          <span v-if="sortAttribute === 'created' && sortAscending === -1">V</span>
        </button>
      </div>
    </div>
    <br>

    <div v-for="application in orderBy(filterBy(user.applications, filter, 'offered', 'accepted', 'created'), sortAttribute, sortAscending)">
      <router-link v-bind:to="'/projects/' + application.project.id">{{ application.project.title }}</router-link>
      <h5>{{ application.project.description }}</h5>
      <h5>{{ application.project.address }}</h5>
      <h5>{{ newDate(application.project.start_date) }} - {{ newDate(application.project.end_date) }}</h5>
      <h5>Offer Status: {{ application.offered }}</h5>
      <h5>Accepted Status: {{ application.accepted }}</h5>
      <h5>Created: {{ newDate(application.created) }}</h5>

      <form v-if="application.offered == true && application.accepted == false" v-on:submit.prevent="submit(application)">
        <div class="form-group">
          <label for="note">Note</label>
          <input type="text" class="form-control" id="note" placeholder="Send a message to Project Owner" v-model="newAcceptedNote">
        </div>
        <button type="submit" class="btn btn-success">Accept</button>
      </form>

      <hr>
    </div> -->
    <!-- End of My Applications Section -->

    <!-- Beginning of New Theme Section -->
    <section class="slice-sm sct-color-1 bg-minimalist">
      <div class="profile">
        <div class="container">
          <div class="row cols-xs-space cols-sm-space cols-md-space">
            <div class="col-lg-4">
              <div class="sidebar sidebar--style-2 no-border stickyfill bg-white">
                <div class="widget">
                    <!-- Profile picture -->
                  <div class="profile-picture profile-picture--style-2">
                    <img v-bind:src="user.image" class="img-center">
                    <a href="#" class="btn-aux">
                        <i class="ion ion-edit"></i>
                    </a>
                  </div>

                  <!-- Profile details -->
                  <div class="profile-details">
                    <h2 class="heading heading-4 strong-500 profile-name">{{ user.first_name }} {{ user.last_name }}</h2>
                    <h3 class="heading heading-6 strong-400 profile-occupation mt-3">{{ user.current_job_title }}</h3>
                    <h3 class="heading heading-light heading-6 strong-400 profile-location">{{ user.address }}</h3>
                  </div>

                  <!-- Profile connect -->
                  <div class="profile-connect mt-4" v-if="user.id == $parent.user_id">
                    <router-link v-bind:to="'/users/' + user.id + '/edit'" class="btn btn-styled btn-block btn-rounded btn-base-3 mb-3">Edit Profile</router-link>
                    <a href="#" class="card-link text-danger"  v-on:click="destroy(user)">Delete Profile</a>
                  </div>

                  <!-- Profile stats -->
                  <div class="profile-stats clearfix mt-3">
                    <div class="stats-entry">
                      <span class="stats-count">180</span>
                      <span class="stats-label text-uppercase">Projects</span>
                    </div>
                    <div class="stats-entry">
                      <span class="stats-count">1.3K</span>
                      <span class="stats-label text-uppercase">Followers</span>
                    </div>
                  </div>
                  <!-- End Profile stats -->

                  <!-- Profile connected accounts -->
                  <div class="profile-useful-links clearfix">
                    <div class="useful-links">
                      <a :href="user.imdb_url" class="link link--style-1" target="_blank">
                        <i class="fa fa-imdb"></i>
                        imdb/{{user.first_name}}_{{user.last_name}}
                      </a>
                      <a :href="user.resume" class="link link--style-1">
                        <i class="fa fa-file"></i>
                        {{user.first_name}} {{user.last_name}}'s Resume
                      </a>

                      <a href="#" class="link link--style-1">
                        <i class="fa fa-envelope"></i>
                        {{user.email}}
                      </a>

                      <a href="" class="link link--style-1">
                        <i class="fa fa-phone"></i>
                        {{ user.phone_number }}
                      </a>
                    </div>
                  </div>
                  <!-- End Profile connected accounts -->
                </div>
              </div>
              
              <!-- Begin Quote -->
              <div class="block--style-4 block--style-4-v2 mt-4">
                  <div class="block-body bg-base-1">
                      <p>
                          <span class="quote"><i class="fa fa-quote-left"></i></span>
                          {{user.first_name}} is a pleasure to work with. Experience on set is second to none and is the person you want to go to battle with!
                      </p>
                  </div>
                  <div class="info-author">
                      <div class="author-img">
                        <img src="https://preview.webpixels.io/boomerang-v3.6.1/assets/images/prv/people/person-1-75x75.png" class="rounded-circle">
                      </div>
                      <div class="author-info">
                          <span class="author-name strong-600">David Wally</span>
                          <span class="author-pos">Key Set PA</span>
                      </div>
                  </div>
              </div>
              <!-- End Quote -->
            </div>
            
            <!-- Begin Right Rail -->
            <div class="col-lg-8">
              <div class="main-content">

                <!-- Begin Projects -->
                <div class="row mb-3">

                  <div class="col-md-12 ">
                    <h3 class="d-inline-block align-middle" v-if="user.id == $parent.user_id">My Projects</h3>
                    <h3 class="d-inline-block align-middle" v-else>{{ user.first_name }} {{ user.last_name }}'s Projects</h3>
                      
                      <!-- Begin Link Currrent Project Owner Has Projects -->
                      <router-link v-if="user.id == $parent.user_id && user.projects.length > 0" class="btn btn-base-1 btn-lg pull-right" v-bind:to="'/projects/new'">Create New Project</router-link>
                    
                  </div>
                </div>
                
                <!-- Begin Card Current Project Owner if No Projects Exist -->
                <div class="card mb-5" v-if="user.id == $parent.user_id && user.projects.length < 1">
                  <div class="card-body text-center">
                    <p class="mb-0">You haven't created any projects yet. Get started by clicking below!</p>
                    <router-link v-bind:to="'/projects/new'" class="btn btn-base-1 mt-2">Create Project</router-link>
                  </div>
                </div>
                <!-- End Card Current Project Owner if No Projects Exist -->

                <!-- Begin Card if not Current Project Owner and No Projects Exist --> 
                <div class="card mb-5" v-if="user.id !== $parent.user_id && user.projects.length < 1">
                  <div class="card-body text-center">
                    <p class="mb-0">{{ user.first_name }} {{ user.last_name }} does not have any Projects yet. Please check back later or browse other projects</p>
                    <router-link v-bind:to="'/projects/'" class="btn btn-base-1 mt-2">Browse Projects</router-link>
                  </div>
                </div>
                <!-- ENd Card if not Current Project Owner and No Projects Exist -->

                <!-- Begin Projects Loop -->
                <div class="card mt-3 z-depth-1--hover" v-for="project in user.projects">
                  <div class="card-body mt-3">
                    <span class="block-ribbon block-ribbon-right badge badge-pill bg-green text-uppercase">Project Open</span>
                    <!-- <span v-else class="block-ribbon block-ribbon-right badge badge-pill bg-red text-uppercase">Project Closed</span> -->
                    <h5 class="heading heading-5 strong-600">{{ project.title }}</h5>
                    <h6 class="heading heading-sm strong-400 text-muted mb-4">
                        {{ project.address }}
                    </h6>

                    <p class="card-text">{{ newDate(project.start_date) }} - {{ newDate(project.end_date) }}</p>
                    <router-link class="btn btn-styled btn-base-1 btn-outline btn-sm" v-bind:to="'/projects/' + project.id">View Project</router-link>
                  </div>
                </div>
                <!-- End Projects Loop -->
                <!-- End Projects -->
                

                <!-- Begin Applications Sorting -->
                <div v-if="user.id == $parent.user_id">
                  <div class="row mt-5">
                    <div class="container col-md-12">
                      <div class="form-group">
                        <h3 v-if="user.id == $parent.user_id" class="d-inline-block align-middle">My Applications</h3>
                        <button class="badge badge-pill badge-dark badge-lg pull-right" v-on:click="setSortAttribute('offered')">Sort by Offer Status
                          <span v-if="sortAttribute === 'offered' && sortAscending === 1">^</span>
                          <span v-if="sortAttribute === 'offered' && sortAscending === -1">V</span>
                        </button>
                        <button class="badge badge-pill badge-dark badge-lg pull-right mr-1" v-on:click="setSortAttribute('accepted')">Sort by Accepted
                          <span v-if="sortAttribute === 'accepted' && sortAscending === 1">^</span>
                          <span v-if="sortAttribute === 'accepted' && sortAscending === -1">V</span>
                        </button>
                        <button class="badge badge-pill badge-dark badge-lg pull-right mr-1" v-on:click="setSortAttribute('created')">Sort by created
                          <span v-if="sortAttribute === 'created' && sortAscending === 1">^</span>
                          <span v-if="sortAttribute === 'created' && sortAscending === -1">V</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- End Applications Sorting -->

                <!-- Begin Applications Loop -->
                <div class="card mt-2 z-depth-1--hover" v-for="application in orderBy(filterBy(user.applications, filter, 'offered', 'accepted', 'created'), sortAttribute, sortAscending)">
                  <div class="card-body">
                    <router-link class="heading heading-5 strong-600" v-bind:to="'/projects/' + application.project.id">{{ application.project.title }}</router-link>
                    <h6 class="heading heading-sm strong-400 text-muted mb-4">Description: {{ application.project.description }}</h6>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item"><span class="font-weight-bold">Dates:</span> {{ newDate(application.project.start_date) }} - {{ newDate(application.project.end_date) }}</li>
                      <li class="list-group-item"><span class="font-weight-bold">Location:</span> {{ application.project.address }}</li>

                      <!-- Offer and accepted should be one section. 

                      If offered = false Application Status: Application Pending. You will be notified if offered the job. -->
                      
                      <li class="list-group-item" v-if="!application.offered"><span class="font-weight-bold">Application Status:</span><span class="text-dark bg-warning"> Application Pending. You will be notified if offered the job.</span></li>

                      <!-- If offered = true Application Status: Congratulations! You've been offered this job. Please confirm below. --> 

                      <!-- <li class="list-group-item" v-else-if="application.offered"><span class="font-weight-bold">Application Status:</span> Congratulations! You've been offered this job. Please confirm below.</li>   -->                  

                      <!-- Begin Acceptance Form -->
                      <form  class="mt-3" v-else-if="application.offered == true && application.accepted == false" v-on:submit.prevent="submit(application)">
                        <h6><span class="font-weight-bold">Application Status:</span> <span class="text-white bg-success">Congratulations! You've been offered this job. Please confirm below.</span></h6>
                        {{ message }}
                        <div class="form-group">
                          <label for="note">Personal Note</label>
                          <input type="text" class="form-control" id="note" placeholder="Send a message to Project Owner" v-model="newAcceptedNote">
                        </div>
                        <button type="submit" class="btn btn-success">Accept</button>
                      </form>
                      
                      <!-- End Acceptance Form -->
                      
                      <!-- If accepted = true Application Status: You've accepted this job. -->

                      <li class="list-group-item" v-else="application.accepted"><span class="font-weight-bold">Application Status:</span> <span class="text-white bg-success"> Congratulations! You've accepted this job. Please reach out to finalize details.</span></li>

                    </ul>
                    <!-- <router-link class="btn btn-styled btn-base-1 btn-outline btn-sm mt-3" v-bind:to="'/projects/' + application.project.id">View Project</router-link> -->
                  </div>
                </div>
                <!-- End Applications Loop -->

                <!-- Begin Card if No Projects Exist -->
                <div class="card mb-5" v-if="user.applications == false">
                  <div class="card-body text-center">
                    <p class="mb-0">You haven't applied to any projects yet. Start searching by clicking below!</p>
                    <router-link v-bind:to="'/projects'" class="btn btn-base-1 mt-2">Search Open Projects</router-link>
                  </div>
                </div>
                <!-- End of Card if No Projects Exist -->
                <!-- End Applications -->

              </div>
            </div>
            <!-- End Right Rail -->

          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>

import axios from "axios";
import Vue2Filters from "vue2-filters";
import moment from "moment";


export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      user: {},
      project: [],
      newAcceptedNote: "",
      message: "",
      application: {},
      sortAttribute: "",
      sortAscending: 1,
      filter:""
    };
  },
  created: function() {
    axios.get("/api/users/" + this.$route.params.id).then(response => {
      this.user = response.data;
      console.log("Success", response.data)
    });
  },
  methods: {
    destroy: function(user) {
      axios
        .delete("/api/users/" + user.id)
        .then(response => {
          console.log("Success!", response.data);
          this.$router.push("/signup");
        });
    },
    submit: function(application){
      var params = {
        accepted: true
      };
      axios.patch("api/applications/"+ application.id, params).then(response => {
        this.newAcceptedNote = "";
        this.message = "You've accepted this job!";
        console.log("Success", response.data);
      })
    },
    setSortAttribute: function(attribute){
      if (this.sortAttribute = attribute) {
        this.sortAscending = this.sortAscending * -1;
      } else {
        this.sortAscending = 1;
      }
      this.sortAttribute = attribute;
    },
    newDate: function(date) {
      return moment(date).format('MMMM Do YYYY');
    },
    datePastCheck: function(){  
      dateA = moment(this.project.start_date, "MM-DD-YYYY");
      dateB = moment(new Date(), "MM-DD-YYYY");
      if (dateA.diff(dateB) > 0){
          return true
        } else {
          return false
      }
    }
  }
};
</script>