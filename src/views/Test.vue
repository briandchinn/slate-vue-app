<template>
  <div class="test">

    <h1>Test Page</h1>
    


    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
      Launch demo modal
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Delete User</h5>
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
    </div>



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