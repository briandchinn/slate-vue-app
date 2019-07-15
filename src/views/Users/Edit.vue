<template>
  <div class="users-edit">
  
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <!-- Beginning of Edit Form -->
    <!-- <form v-on:submit.prevent="submit()">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="first_name">First Name</label>
          <input type="text" class="form-control" id="first_name" placeholder="" v-model="user.first_name">
        </div>
        <div class="form-group col-md-6">
          <label for="last_name">Last Name</label>
          <input type="text" class="form-control" id="last_name" placeholder="" v-model="user.last_name">
        </div>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" class="form-control" id="email" placeholder="" v-model="user.email">
      </div>
      <div class="form-group">
        <label for="image">Image</label>
        <input type="file" class="form-control" id="image" v-on:change="setFile($event)" ref="fileInput">
      </div>      
      <div class="form-group">
        <label for="address">Address</label>
        <input type="text" class="form-control" id="address" placeholder="" v-model="user.address">
      </div>
      <div class="form-group">
        <label for="phone_number">Phone Number</label>
        <input type="text" class="form-control" id="phone_number" placeholder="" v-model="user.phone_number">
      </div>
      <div class="form-group">
        <label for="imdb_url">IMDB Url</label>
        <input type="text" class="form-control" id="imdb_url" placeholder="" v-model="user.imdb_url">
      </div>
      <div class="form-group">
        <label for="resume">Resume</label>
        <input type="file" class="form-control" id="resume" v-on:change="setResumeFile($event)" ref="fileInput">
      </div>
      <div class="form-group">
        <label for="current_job_title">Current Position</label>
        <input type="text" class="form-control" id="current_job_title" list="titles" placeholder="" v-model="user.current_job_title">
      </div>
      <button type="submit" class="btn btn-success">Update</button>
      <datalist id="titles">
        <option value="1st Assistant Director"></option>
        <option value="2nd Assistant Director"></option>
        <option value="2nd 2nd Assistant Director"></option>
        <option value="Key Set Production Assistant"></option>
        <option value="Basecamp Production Assistant"></option>
        <option value="Production Assistant"></option>
      </datalist>
    </form> -->
    <!-- End of Edit Form -->
    
    <div class="container">
      <form class="form-default mt-4 mb-4" data-toggle="validator" role="form" v-on:submit.prevent="submit()">
        <div class="card z-depth-1">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-8">
                <h1 class="heading heading-6 strong-600">Edit {{ user.first_name }} {{ user.last_name }}'s Profile</h1>

                <p class="c-gray-light mt-2">
                    Editing your profile can't be undone. 
                </p>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-6">
                <div class="form-group">
                  <label class="control-label">First Name</label>
                  <div class="input-group input-group--style-1">
                    <input type="text" class="form-control form-control-lg" v-model="user.first_name">
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label class="control-label">Last Name</label>
                  <div class="input-group input-group--style-1">
                    <input type="text" class="form-control form-control-lg" v-model="user.last_name">
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-6">
                <div class="form-group">
                  <label class="control-label">Email</label>
                  <div class="input-group input-group--style-1">
                    <input type="text" class="form-control form-control-lg" v-model="user.email">
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label class="control-label">Phone Number</label>
                  <div class="input-group input-group--style-1">
                    <input type="text" class="form-control form-control-lg" v-model="user.phone_number">
                  </div>
                </div>
              </div>
            </div> 
            <div class="row mt-3">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="control-label">Location</label>
                  <div class="input-group input-group--style-1">
                    <input type="text" class="form-control form-control-lg" v-model="user.address">
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label class="control-label">Image</label>
                  <input type="file" class="form-control form-control-lg" id="image" v-on:change="setFile($event)" ref="fileInput">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label class="control-label">Resume</label>
                  <input type="file" class="form-control form-control-lg" id="resume" v-on:change="setResumeFile($event)" ref="fileInput">
                </div>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="control-label">IMDB Url</label>
                  <div class="input-group input-group--style-1">
                    <input type="text" class="form-control form-control-lg"  v-model="user.imdb_url">
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <label class="control-label">Current Position</label>
                  <div class="input-group input-group--style-1">
                    <input type="text" list="titles" class="form-control form-control-lg"  v-model="user.current_job_title">
                  </div>
                </div>
              </div>
            </div>

            <datalist id="titles">
              <option value="1st Assistant Director"></option>
              <option value="2nd Assistant Director"></option>
              <option value="2nd 2nd Assistant Director"></option>
              <option value="Key Set Production Assistant"></option>
              <option value="Basecamp Production Assistant"></option>
              <option value="Production Assistant"></option>
            </datalist>
            
            <div class="row">
              <div class="col-md-12">
                <div class="text-left">
                  <button class="btn btn-base-1" type="submit">Edit Profile</button>
                  

                  <div class="btn btn-secondary ml-2">
                    <router-link :to="`/users/${user.id}`">
                      Cancel
                    </router-link>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>

  </div>
</template>

<script>

import axios from "axios";

export default {
  data: function() {
    return {
      user: {},
      errors: [],
    };
  },
  created: function() {
    axios.get("api/users/" + this.$route.params.id).then(response => {
      this.user = response.data;
      console.log(this.user)
    });
  },
  methods: {
    setFile: function(event) {
      if (event.target.files.length > 0) {
        this.user.image = event.target.files[0];
      }
    },
    setResumeFile: function(event) {
      if (event.target.files.length > 0) {
        this.user.resume = event.target.files[0];
      }
    },
    submit: function(){
      var formData = new FormData();
      formData.append("first_name", this.user.first_name);
      formData.append("last_name", this.user.last_name);
      formData.append("email", this.user.email);
      formData.append("image", this.user.image);
      formData.append("address", this.user.address);
      formData.append("phone_number", this.user.phone_number);
      formData.append("imdb_url", this.user.imdb_url);
      formData.append("resume", this.user.resume);
      formData.append("current_job_title", this.user.current_job_title);
      
      axios.patch("api/users/" + this.user.id, formData).then(response => {
        console.log("Success!", response.data)
        this.$router.push("/users/" + this.user.id);
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    }
  }
};
</script>