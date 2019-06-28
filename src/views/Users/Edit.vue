<template>
  <div class="users-edit">

    <h1>Edit {{ user.first_name }} {{ user.last_name }}'s Profile</h1>
    
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <form v-on:submit.prevent="submit()">
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
        <input type="text" class="form-control" id="resume" placeholder="" v-model="user.resume">
      </div>
      <div class="form-group">
        <label for="current_job_title">Current Position</label>
        <input type="text" class="form-control" id="current_job_title" placeholder="" v-model="user.current_job_title">
      </div>
      <button type="submit" class="btn btn-success">Update</button>
    </form>

  </div>
</template>

<script>

import axios from "axios";

export default {
  data: function() {
    return {
      user: {},
      errors: []
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
        this.image = event.target.files[0];
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