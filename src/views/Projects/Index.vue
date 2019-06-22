<template>
  <div class="projects-index">

    <div class="form-group">
      <label for="title">Search</label>
      <input type="text" class="form-control" placeholder="Enter title..." v-model="filter" list="titles">
    </div><br>

    <datalist id="titles">
      <option v-for="project in projects">{{ project.title }}</option>
    </datalist>

    <div class="form-group">
      <button v-on:click="setSortAttribute('created_at')">Sort by Posted Date
        <span v-if="sortAttribute === 'created_at' && sortAscending === 1">^</span>
        <span v-if="sortAttribute === 'created_at' && sortAscending === -1">V</span>
      </button>
    </div><br>

    <h1>{{ message }}</h1>

    <div v-for="project in orderBy(filterBy(projects, filter, 'title'), sortAttribute, sortAscending)">
      <h3>Title: {{ project.title }}</h3>
      <h3>Location: {{ project.address }}</h3>
      <h3>Dates: {{ project.start_date }} - {{ project.end_date }}</h3>
      <h3>Posted: {{ relativeDate(project.created_at) }} by
      <router-link v-bind:to="'/users/' + project.user.id">{{ project.user.first_name }} {{ project.user.last_name }}</router-link>
      </h3>
<!--       <h3>Posted: {{ relativeDate(project.created_at) }}</h3>
 -->      <button>
        <router-link v-bind:to="'/projects/' + project.id">View Details</router-link>
      </button>
      <hr>
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
    }
  }
};
</script>