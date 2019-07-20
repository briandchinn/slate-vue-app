<template>
  <div class="users-index">
    
    <div class="container col-md-8 mt-3" style="max-width:1000px">
      <div class="form-group mt-3">
        <input type="text" class="form-control form-control-xl" placeholder="Search by first name or job title..." v-model="filter" list="titles">
      </div><br>
      <div class="row">
        <div class="container col-md-12">
          <div class="form-group">
            <h3 class="d-inline-block align-middle">Search Users<small> (11)</small> </h3>
            <button class="badge badge-pill badge-dark badge-lg pull-right" v-on:click="setSortAttribute('address')">Sort by Location
              <span v-if="sortAttribute === 'created_at' && sortAscending === 1"><i class="fa fa-sort-up"></i></span>
              <span v-if="sortAttribute === 'created_at' && sortAscending === -1"><i class="fa fa-sort-down"></i></span>
            </button>
            <button class="badge badge-pill badge-dark badge-lg pull-right" v-on:click="setSortAttribute('current_job_title')">Sort by Job Title
              <span v-if="sortAttribute === 'created_at' && sortAscending === 1"><i class="fa fa-sort-up"></i></span>
              <span v-if="sortAttribute === 'created_at' && sortAscending === -1"><i class="fa fa-sort-down"></i></span>
            </button>
          </div>
        </div>
      </div>
    </div>


    <div class="container col-md-8" style="max-width:1000px" >
      <div class="widget">
        <div class="row-wrapper">
          <div class="row cols-md-space cols-sm-space cols-xs-space">

            <div class="col-lg-4 mb-3" v-for="user in orderBy(filterBy(users, filter, 'first_name', 'current_job_title'), sortAttribute, sortAscending)">
              <div class="block block--style-3 z-depth-1--hover">
                <div class="profile-picture profile-picture--style-2">
                  <img v-bind:src="user.image">
                </div>
                <div class="block-body text-center">
                  <h3 class="heading heading-6 strong-600 mb-0 mb-0">{{ user.first_name }} {{ user.last_name }}</h3>
                  <h3 class="heading heading-light heading-sm strong-300">{{ user.current_job_title}}</h3>
                  <h4 class="heading heading-light heading-sm strong-300">{{ user.address }}</h4>

                  <router-link class="btn btn-base-1 btn-shadow px-4 mt-2" v-bind:to="'/users/' + user.id">View Profile</router-link>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    

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
      users: [],
      filter: "",
      sortAttribute: "",
      sortAscending: 1
    };
  },
  created: function() {
    axios.get("/api/users").then(response => {
      this.users = response.data;
    });
  },
  methods: {
    relativeDate: function(date){
      return moment(date).fromNow();
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
  },
};
</script>