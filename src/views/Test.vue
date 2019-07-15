<template>
  <div class="test">

    <h1>Test Page</h1>
    
    <!-- Favorite Start -->
<!--     <div>
      <div v-if="!myFavorite">
      <font-awesome-icon @click='favorite()' :icon="[`fas`,`star`]" size="lg" style="color:grey"/>
      </div>
      <div v-else>
      <font-awesome-icon @click='favorite()' :icon="[`fas`,`star`]" size="lg" style="color:gold"/>
      </div>
    </div> -->
    <!-- Favorite End -->

    <!-- Form Start -->
<!--     <form v-on:submit.prevent="submit()">
      <div class="form-row">
        <div class="form-group">
          <label for="start_date">Start Date</label>
          <input type="text" class="form-control" id="start_date" placeholder="" v-model="newProjectStartDate">
        </div>
        <div class="form-group">
          <label for="end_date">End Date</label>
          <input type="text" class="form-control" id="end_date" placeholder="" v-model="newProjectEndDate">
        </div>      
      </div>
    </form> -->
    <!-- Form End -->

    <div class="text-center">
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
    </template>

  </div>
</template>

<script>
import VuePikaday from '@enrian/vue-pikaday';
import BootstrapVue from 'bootstrap-vue';

export default {
  name: 'App',
  data: function() {
    return {
      myFavorite: false,
      now: null,
      now2: null,
      pickadayOptions: {
        format: 'MM/DD/YYYY',
        },
    };
  },
  created: function() {
  },
  methods: {
    favorite: function(){
      this.myFavorite = !this.myFavorite
    },
    clear() {
      this.now = null;
    },
  },
};
</script>