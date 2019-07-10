<template>
  <div class="projects-show">
    
    <!-- {{ project }} -->

    <!-- Project Details -->
    <div>
      <h1>{{ message }}</h1>
      <h3>Title: {{ project.title }}</h3>
      <h3>Description: {{ project.description }}</h3>
      <h3>Address: {{ project.address }}</h3>
      <h3>Start Date: {{ newDate(project.start_date) }}</h3>
      <h3>End Date: {{ newDate(project.end_date) }}</h3>
      <h3>Total Positions: {{ project.number_of_positions }}</h3>
      <h3>Available Positions: {{ project.number_of_positions }}</h3>
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
    </div>
    <!-- End of Project Details -->
    <hr>
    
    <!-- Application Section --> 
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
        <h5>Favorite: {{ application.favorite }} </h5>

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
<!-- 
        <div>
          <button v-on:click='favorite(application)'><font-awesome-icon :icon="[`fas`,`star`]" size="lg" style="color:grey"/></button>
          <button v-on:click='unFavorite(application)'><font-awesome-icon :icon="[`fas`,`star`]" size="lg" style="color:gold"/></button>
        </div> -->
    
        <!-- End of Favorite Logic -->

        <hr>
      </div>
    </template>
    <!-- End of Applicants Section -->

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

