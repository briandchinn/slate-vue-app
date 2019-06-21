<template>
  <div class="signup">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Signup</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>First Name:</label> 
          <input type="text" class="form-control" v-model="first_name">
        </div>
        <div class="form-group">
          <label>Last Name:</label> 
          <input type="text" class="form-control" v-model="last_name">
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <div class="form-group">
          <label>Password confirmation:</label>
          <input type="password" class="form-control" v-model="passwordConfirmation">
        </div>
        <div class="form-group">
          <label>Address:</label>
          <input type="text" class="form-control" v-model="address">
        </div>
        <div class="form-group">
          <label>Phone Number:</label>
          <input type="text" class="form-control" v-model="phone_number">
        </div>
        <div class="form-group">
          <label>User Photo:</label>
          <input type="text" class="form-control" v-model="image">
        </div>
        <div class="form-group">
          <label>IMDB Link:</label>
          <input type="text" class="form-control" v-model="imdb_url">
        </div>
        <div class="form-group">
          <label>Resume:</label>
          <input type="text" class="form-control" v-model="resume">
        </div>
        <div class="form-group">
          <label>Current Job Title:</label>
          <input type="text" class="form-control" v-model="current_job_title">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      address: "",
      phone_number: "",
      image: "",
      imdb_url: "",
      resume: "",
      current_job_title: "",
      errors: []
          };
        },
  methods: {
    submit: function() {
      var params = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation,
        address: this.address,
        phone_number: this.phone_number,
        image: this.image,
        imdb_url: this.imdb_url,
        resume: this.resume,
        current_job_title: this.current_job_title
      };
      axios
        .post("/api/users", params)
        .then(response => {
          this.$router.push("/users/" + user.id);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>