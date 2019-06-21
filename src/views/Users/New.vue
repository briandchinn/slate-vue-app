<template>
  <div class="users-new">
    <h1>{{ message }}</h1>
    
    <ul>
      <li v-for="erro in errors">{{ errors }}</li>
    </ul>

    <form v-on:submit.prevent="submit()">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="first_name">First Name</label>
          <input type="text" class="form-control" id="first_name" placeholder="" v-model="newUserFirstName">
        </div>
        <div class="form-group col-md-6">
          <label for="last_name">Last Name</label>
          <input type="text" class="form-control" id="last_name" placeholder="" v-model="newUserLastName">
        </div>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" class="form-control" id="email" placeholder="" v-model="newUserEmail">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="text" class="form-control" id="password" placeholder="" v-model="newUserPassword">
      </div>
      <div class="form-group">
        <label for="password_confirmation">Password Confirmation</label>
        <input type="text" class="form-control" id="password_confirmation" placeholder="" v-model="newUserPasswordConfirmation">
      </div>
      <div class="form-group">
        <label for="image">Image</label>
        <input type="text" class="form-control" id="image" placeholder="" v-model="newUserImage">
      </div>
      <div class="form-group">
        <label for="address">Address</label>
        <input type="text" class="form-control" id="address" placeholder="" v-model="newUserAddress">
      </div>      
      <div class="form-group">
        <label for="phone_number">Phone Number</label>
        <input type="text" class="form-control" id="phone_number" placeholder="" v-model="newUserPhoneNumber">
      </div>
      <div class="form-group">
        <label for="imdb_url">Imdb url</label>
        <input type="text" class="form-control" id="imdb_url" placeholder="" v-model="newUserImdb">
      </div>
      <div class="form-group">
        <label for="resume">Resume url</label>
        <input type="text" class="form-control" id="resume" placeholder="" v-model="newUserResume">
      </div>
      <div class="form-group">
        <label for="current_job_title">Current Position</label>
        <input type="text" class="form-control" id="current_job_title" placeholder="" v-model="newUserCurrentPosition">
      </div>
      <button type="submit" class="btn btn-success">Create</button>
    </form>

  </div>
</template>

<script>

import axios from "axios";

export default {
  data: function() {
    return {
      message: 'This is the New Users Page',
      errors: [],
      projects: [],
      newUserFirstName: "",
      newUserLastName: "",
      newUserEmail: "",
      newUserPassword: "",
      newUserPasswordConfirmation: "",
      newUserImage: "",
      newUserAddress: "",
      newUserPhoneNumber: "",
      newUserImdb: "",
      newUserResume: "",
      newUserCurrentPosition: "",
    };
  },
  created: function() {
  },
  methods: {
    submit: function(){
      var params = {
        first_name: this.newUserFirstName,
        last_name: this.newUserLastName,
        email: this.newUserEmail,
        password: this.newUserPassword,
        password_confirmation: this.newUserPasswordConfirmation,
        image: this.newUserImage,
        address: this.newUserAddress,
        phone_number: this.newUserPhoneNumber,
        imdb_url: this.newUserImdb,
        resume: this.newUserResume,
        current_job_title: this.newUserCurrentPosition
      };
      axios.post("api/users", params).then(response => {
        console.log("Success!", response.data);
        this.$router.push("/users/" + this.user.id);
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    }
  }
};
</script>