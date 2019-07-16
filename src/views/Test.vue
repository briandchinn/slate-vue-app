<template>
  <div class="test">

    <h1>Test Page</h1>
    
    <paginated-list :list-data="projects"/>
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


    <div>
      <button @click="prevPage">
        Previous
      </button>
      <button @click="nextPage">
        Next
      </button>
    </div>


<!--     <div class="text-center">
      <b-button variant="primary">
        Notifications <b-badge variant="light">4</b-badge>
      </b-button>
    </div>

    <template>
      <vue-pikaday 
        v-model="now"
        placeholder="Start Date"
        :options="pickadayOptions"
      />
    </template>

    <template>
      <vue-pikaday 
        v-model="now2"
        placeholder="Start Date"
        :options="pickadayOptions"
      />
    </template> -->

  </div>
</template>

<script>
import VuePikaday from '@enrian/vue-pikaday';
import BootstrapVue from 'bootstrap-vue';
import moment from "moment";
import Vue2Filters from "vue2-filters";
import axios from "axios";


export default {
  name: 'App',
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      myFavorite: false,
      now: null,
      now2: null,
      pickadayOptions: {
        format: 'MM/DD/YYYY',
        },
      projects:[],
      filter: "",
      sortAttribute: "",
      sortAscending: 1,
      pageNumber: 0
    };
  },
  props:{
      listData:{
        type:Array,
        required:true
      },
      size:{
        type:Number,
        required:false,
        default: 4
      }
  },
  created: function() {
    axios.get("/api/projects").then(response => {
      this.projects = response.data;
    });
  },
  methods: {
    favorite: function(){
      this.myFavorite = !this.myFavorite
    },
    clear() {
      this.now = null;
    },
    newDate: function(date) {
      return moment(date).format('MMMM Do YYYY');
    },
    relativeDate: function(date){
      return moment(date).fromNow();
    },
    nextPage(){
      this.pageNumber++;
    },
    prevPage(){
      this.pageNumber--;
    }
  },
  computed: {
    pageCOunt(){
      let l = this.listData.length,
          s = this.size;
      return Math.ceil(l/s);
    },
    projects(){
      const start = this.pageNumber * this.size,
            end = start + this.size;
      return this.listData.slice(start, end);
    }
  }
};
</script>