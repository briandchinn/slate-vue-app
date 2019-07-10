<template>
  <div class="users-show">
    
    <!-- {{ user }} -->
    <h1>{{ user.first_name }} {{ user.last_name }}</h1>
    <img v-bind:src="user.image">
    <h3>Current Position: {{ user.current_job_title }}</h3>
    <h3>Email: {{ user.email }}</h3>
    <h3>Address: {{ user.address }}</h3>
    <h3>Phone Number: {{ user.phone_number }}</h3>
    <h3>IMDB:<a :href="user.imdb_url"> Click to Visit IMDB Page</a></h3>
    <h3>Resume: <a :href="user.resume" target="_blank">Click to Download</a></h3>
    
    <template v-if="user.id == $parent.user_id">
      <button>
        <router-link v-bind:to="'/users/' + user.id + '/edit'">Edit User</router-link>
      </button>
      <button v-on:click="destroy(user)">Destroy User</button>
    </template>

    <br>
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
    </div>

    <!-- My Applications Section -->
    <h1 v-if="user.id == $parent.user_id">My Applications</h1>

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
    </div>
    <!-- End of My Applications Section -->

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
          this.$router.push("/");
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