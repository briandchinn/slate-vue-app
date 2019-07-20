<template>
  <div class="test">

    <h1>Test Page</h1>
    
    <div class="container">
        <div v-if="hasBeenSubmitted" class="card text-center mb-3">
          <div class="card-body">
            <h4 class="card-title">You Succesfully Applied!</h4>
            <i class="fa fa-check-circle fa-5x mb-3" style="color: green"></i>
            <p class="card-text">You will be notified if user offer's you the position. <br>Good luck!</p>
            <a href="#" class="btn btn-primary">Back to Profile</a>
          </div>
        </div>

        <div v-else class="card mt-4 mb-3">
          <div class="card-body">
            <div class="row">
              <div class="col-8">
                <h3 class="heading heading-6 strong-600" for="radioPayment_2">Apply</h3>
                <p class="c-gray-light mt-2">
                    If you'd like to let know that you're interested and available for the project then apply below. You'll be notified should you be accepted. 
                </p>
              </div>
              <div class="col-4 text-right">
                <img src="/assets/images/quick-apply.png" width="100">
              </div>
            </div>
            <div class="row mt-3 mb-3">
              <div class="col-md-12">
                <form v-on:submit.prevent="doSubmit()">
                  <div class="form-group">
                    <label class="control-label">Send Message</label>
                    <div class="form-group">
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                  </div>
                  <div class="text-right mt-3">
                    <button type="submit" class="btn btn-styled btn-block btn-lg btn-base-1">Apply Now</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

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
      hasBeenSubmitted: false
    };
  },
  methods: {
    doSubmit(){
      console.log("This submitted succesfully");
      this.hasBeenSubmitted = true;
    }
  },
};
</script>