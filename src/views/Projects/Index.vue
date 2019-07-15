<template>
  <div class="projects-index">
    
    <div class="container col-md-8">
      <div class="form-group mt-3">
        <input type="text" class="form-control form-control-xl" placeholder="Search by title..." v-model="filter" list="titles">
      </div><br>

      <datalist id="titles">
        <option v-for="project in projects">{{ project.title }}</option>
      </datalist>
      
      <div class="row">
        <div class="container col-md-12">
          <div class="form-group">
            <h3 class="d-inline-block align-middle">Search Projects</h3>
            <button class="btn btn-styled btn-dark btn-xs pull-right" v-on:click="setSortAttribute('created_at')">Sort by Posted Date
              <span v-if="sortAttribute === 'created_at' && sortAscending === 1">^</span>
              <span v-if="sortAttribute === 'created_at' && sortAscending === -1">V</span>
            </button>
          </div>
        </div>
      </div>

    </div>

    <!-- Begin Projects -->
    <div class="container col-md-8">
      <div class="card mb-3 z-depth-2" v-for="project in orderBy(filterBy(projects, filter, 'title'), sortAttribute, sortAscending)">
        <div class="card-body">
          <span class="block-ribbon block-ribbon-right badge badge-pill bg-green text-uppercase">Open</span>
          <h5 class="heading heading-5 strong-600">
            <router-link v-bind:to="'/projects/' + project.id">{{ project.title }}</router-link>
          </h5>
          <ul class="inline-links inline-links--style-3 mb-1">
              <li class="mr-2">
                  <i class="fa fa-street-view"></i>{{ project.address }}
              </li>
              <li>
                  <i class="fa fa-calendar"></i>{{ newDate(project.start_date) }} - {{ newDate(project.end_date) }}
              </li>
          </ul>
        </div>
        <div class="card-footer">
          <div class="row align-items-center">
            <div class="col text-right">
              <div class="block-author">
                <div class="author-image author-image-xs">
                    <img v-bind:src="project.user.image">
                </div>
                <div class="author-info">
                    <router-link v-bind:to="'/users/' + project.user.id">{{ project.user.first_name }} {{ project.user.last_name }}</router-link>
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
    <!-- End Projects -->

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
      message: 'This is the Project Page',
      projects: [],
      filter: "",
      sortAttribute: "",
      sortAscending: 1
    };
  },
  created: function() {
    axios.get("/api/projects").then(response => {
      this.projects = response.data;
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
  }
};
</script>