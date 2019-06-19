<template>
  <div class="users-edit">

    <h1>{{ message }}</h1>
    
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
        <input type="text" class="form-control" id="image" placeholder="" v-model="user.image">
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
      message: 'This is the Edit User Page',
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
    submit: function(){
      var params = {
        first_name: this.user.first_name,
        last_name: this.user.last_name,
        email: this.user.email,
        image: this.user.image,
        address: this.user.address,
        phone_number: this.user.phone_number,
        imdb_url: this.user.imdb_url,
        resume: this.user.resume,
        current_job_title: this.user.current_job_title,
      };
      axios.patch("api/users/" + this.user.id, params).then(response => {
        console.log("Success!", response.data)
        this.$router.push("/users/" + this.user.id);
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    }
  }
};
</script>