<template>
  <div class="projects-index">
    
    <div class="container">
      <div class="form-group mt-3">
        <input type="text" class="form-control" placeholder="Search for..." v-model="filter" list="titles">
      </div><br>

      <datalist id="titles">
        <option v-for="project in projects">{{ project.title }}</option>
      </datalist>

      <div class="form-group">
        <button class="btn btn-styled btn-dark btn-xs" v-on:click="setSortAttribute('created_at')">Sort by Posted Date
          <span v-if="sortAttribute === 'created_at' && sortAscending === 1">^</span>
          <span v-if="sortAttribute === 'created_at' && sortAscending === -1">V</span>
        </button>
      </div>
    </div>

    


    <!-- <div v-for="project in orderBy(filterBy(projects, filter, 'title'), sortAttribute, sortAscending)">
      <h3>Title: {{ project.title }}</h3>
      <h3>Location: {{ project.address }}</h3>
      <h3>Dates: {{ newDate(project.start_date) }} - {{ newDate(project.end_date) }}</h3>
      <h3>Posted: {{ relativeDate(project.created_at) }} by
      <router-link v-bind:to="'/users/' + project.user.id">{{ project.user.first_name }} {{ project.user.last_name }}</router-link>
      </h3>
      <button>
        <router-link v-bind:to="'/projects/' + project.id">View Details</router-link>
      </button>
      <hr>
    </div> -->

 <!--    <section class="slice sct-color-1">
        <div class="container container-sm">
            <div class="row">


                <div v-for="project in orderBy(filterBy(projects, filter, 'title'), sortAttribute, sortAscending)" class="masonry-item col-md-6 design">
                    <div class="block block--style-3">
                        <div class="block-image relative">
                            <div class="">
                                <a href="#">
                                    <img src="/assets/images/prv/blog/img-1.jpg">
                                    <span class="block-date-over">{{ newDate(project.start_date) }}</span>
                                </a>
                            </div>
                        </div>
                        <div class="block-body">
                            <h3 class="heading heading-5 strong-500">
                               {{ project.title }}
                            </h3>
                            <p>
                                {{ project.address }}
                            </p>
                            <p>
                              Posted by: 
                              <router-link v-bind:to="'/users/' + project.user.id">
                                {{ project.user.first_name }} {{ project.user.last_name }}
                              </router-link>
                            </p>
                        </div>
                        <div class="block-footer border-top">
                            <div class="row align-items-center">
                                <div class="col-6">
                                    <ul class="inline-links inline-links--style-3">
                                        <li>
                                            Posted {{ relativeDate(project.created_at) }}
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-6 text-right">
                                    <router-link class="link link-sm link--style-2" v-bind:to="'/projects/' + project.id">
                                        <i class="fa fa-long-arrow-right"></i> Details
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </section> -->


    <!-- With shadow -->
    <div class="container">
      <h1>Projects</h1>
      <div v-for="project in orderBy(filterBy(projects, filter, 'title'), sortAttribute, sortAscending)" class="block block--style-3 list z-depth-2-top mb-3">
          <div class="block-image block-image-sm">
              <a href="#">
                  <img v-bind:src="project.user.image" alt="">
              </a>
          </div>

          <div class="block-title-wrapper">
<!--               <span class="badge label-md bg-pink">Picked</span>
 -->              <span class="badge label-md bg-green">Open</span>
              <h3 class="heading heading-5 strong-500 mt-1">
                  {{ project.title }}
              </h3>
              <h4 class="heading heading-xs c-gray-light text-uppercase strong-400">{{ project.address }}</h4>
          </div>
          <span class="clearfix"></span>
          <div class="block-body bt">
              <h4 class="heading heading-xs c-style-1 text-uppercase">Description:</h4>
              <p class="c-light">
                  {{ project.description }}
              </p>
          </div>
          <div class="block-footer border-top">
              <div class="row align-items-center">
                  <div class="col-sm-8 col-12">
                      <ul class="inline-links inline-links--style-3">
                          <li>
                              <a href="#">
                                  <i class="fa fa-heart"></i> 50
                              </a>
                          </li>
                          <li>
                              <i class="fa fa-eye"></i> 750
                          </li>
                      </ul>
                  </div>
                  <div class="col-sm-4 col-6 text-right">
                      <div class="btn-container">
                          <router-link v-bind:to="'/projects/' + project.id">View Details</router-link>
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