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
          <input type="password" class="form-control" v-model="password_confirmation">
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
          <label for="image">Image</label>
          <input type="file" class="form-control" id="image" v-on:change="setFile($event)" ref="fileInput">
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
          <input type="text" class="form-control" list="titles" v-model="current_job_title">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
        <datalist id="titles">
          <option value="1st Assistant Director"></option>
          <option value="2nd Assistant Director"></option>
          <option value="2nd 2nd Assistant Director"></option>
          <option value="Key Set Production Assistant"></option>
          <option value="Basecamp Production Assistant"></option>
          <option value="Production Assistant"></option>
        </datalist>
      </form>
    </div>

<!--     <datalist id="titles">
      <option value="1st Assistant Director">
      <option value="2nd Assistant Director">
      <option value="2nd 2nd Assistant Director">
      <option value="Key Set Production Assistant">
      <option value="Basecamp Production Assistant">
      <option value="Production Assistant">
    </datalist> -->

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
      password_confirmation: "",
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
    setFile: function(event) {
      if (event.target.files.length > 0) {
        this.image = event.target.files[0];
      }
    },
    submit: function() {
      var formData = new FormData();
      formData.append("first_name", this.first_name);
      formData.append("last_name", this.last_name);
      formData.append("email", this.email);
      formData.append("password", this.password);
      formData.append("password_confirmation", this.password_confirmation);
      formData.append("address", this.address);
      formData.append("phone_number", this.phone_number);
      formData.append("image", this.image);
      formData.append("imdb_url", this.imdb_url);
      formData.append("resume", this.resume);
      formData.append("current_job_title", this.current_job_title);
      
      axios
        .post("/api/users", formData)
        .then(response => {
          this.$router.push("/login" );
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>