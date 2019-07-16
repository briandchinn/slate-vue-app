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
    <!-- <h1 v-if="user.id == $parent.user_id">My Applications</h1>

    <div>
      <h3 v-if="user.applications == false">No Existing Applications</h3>
      <button v-if="user.id == $parent.user_id && user.applications == false">
        <router-link v-bind:to="'/projects'">Browse Current Projects</router-link>
      </button>
    </div>
    <br>
    
    <div v-if="user.id == $parent.user_id">
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
              <div class="sidebar sidebar--style-2 no-border stickyfill">
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

                  <!-- Delete User Modal -->
     <!--              <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="deleteModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="deleteModalLabel">Delete User</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          Are you sure you want to delete your account? This cannont be undone so proceed with caution!
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary">Delete User</button>
                        </div>
                      </div>
                    </div>
                  </div> -->


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

                </div>
              </div>
            </div>

            <div class="col-lg-8">
              <div class="main-content">
                <!-- Page title -->
                <!-- <div class="page-title">
                  <div class="row align-items-center">
                    <div class="col-lg-6 col-12">
                      <h2 class="heading heading-5 text-capitalize strong-500 mb-0">
                        <a href="#" class="link text-underline--none">
                            <i class="ion-ios-arrow-back"></i> Security
                        </a>
                      </h2>
                    </div>
                      <div class="col-lg-6 col-12">
                      </div>
                  </div>
                </div> -->

  <!--               <div class="link-menu link-menu--style-3 py-4">
                  <a href="/pages/profile/account-settings.html">Settings</a>
                  <a href="/pages/profile/account-orders.html">Orders</a>
                  <a href="/pages/profile/account-cards.html">Cards</a>
                  <a href="/pages/profile/account-security.html" class="active">Security</a>
                  <a href="/pages/profile/account-connections.html">Connections</a>
                </div> -->

<!--                 <hr>
 -->
                <!-- Begin Projects -->
                <div class="row mt-3">
                  <div class="col-md-12 ">
                    <h3 class="d-inline-block align-middle" v-if="user.id == $parent.user_id">My Projects</h3>
                    <h5 class="d-inline-block align-middle" v-else>{{ user.first_name }} {{ user.last_name }}'s Projects</h5>
                    
                      <router-link v-if="user.id == $parent.user_id" class="btn btn-success btn-lg pull-right" v-bind:to="'/projects/new'">Create New Project</router-link>
                    
                  </div>
                </div>

                <div>
                  <h3 v-if="user.projects == false">No Existing Projects</h3>
                </div>

                <div class="card mt-3 z-depth-1--hover" v-for="project in user.projects">
                  <div class="card-body mt-3">
                    <span class="block-ribbon block-ribbon-right badge badge-pill bg-green text-uppercase">Project Open</span>
                    <h5 class="heading heading-5 strong-600">{{ project.title }}</h5>
                    <h6 class="heading heading-sm strong-400 text-muted mb-4">
                        {{ project.address }}
                    </h6>

                    <p class="card-text">{{ newDate(project.start_date) }} - {{ newDate(project.end_date) }}</p>
                    <router-link class="btn btn-styled btn-base-1 btn-outline btn-sm" v-bind:to="'/projects/' + project.id">View Project</router-link>
                  </div>
                </div>
                <!-- End Projects -->
                
                <!-- Begin Applications -->
                <h3 v-if="user.id == $parent.user_id" class="mt-3">My Applications</h3>

                <div class="card mt-3 z-depth-1--hover" v-for="application in user.applications">
                  <div class="card-body mt-3">
                    <h5 class="heading heading-5 strong-600">{{ application.project.title }}</h5>
                    <h6 class="heading heading-sm strong-400 text-muted mb-4">
                        {{ newDate(application.project.start_date) }} - {{ newDate(application.project.end_date) }}
                    </h6>
                    <h6 class="heading heading-sm strong-400 text-muted mb-4">
                        {{ application.project.address }}
                    </h6>
                    <h6 class="heading heading-sm strong-400 text-muted mb-4">
                        Offer Status: {{ application.offered }}
                    </h6>
                    <h6 class="heading heading-sm strong-400 text-muted mb-4">
                        Accepted Status: {{ application.accepted }}
                    </h6>
                    <h6 class="heading heading-sm strong-400 text-muted mb-4">
                        Created: {{ newDate(application.created) }}
                    </h6>
                    <p class="card-text">{{ application.project.description }}</p>
                    <router-link class="btn btn-styled btn-base-1 btn-outline btn-sm" v-bind:to="'/projects/' + application.project.id">View Project</router-link>
                  </div>
                </div>
                <!-- End Applications -->

              </div>
            </div>
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
      newAcceptedNote: "",
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
  }
};
</script>