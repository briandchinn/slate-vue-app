<template>
  <div class="signup">

    <!-- <div class="container">
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
          <label for="resume">Resume</label>
          <input type="file" class="form-control" id="resume" v-on:change="setResumeFile($event)" ref="fileInput">
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
    </div> -->

    <div class="body-wrap">
      <section class="slice sct-color-2">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="card form-card form-card--style-2 z-depth-1">
                <div class="form-header text-center">
                  <div class="form-header-icon">
                    <i class="icon icon-3x ion-ios-personadd-outline"></i>
                  </div>
                </div>
                <div class="form-body">
                  <div class="text-center px-2">
                    <h4 class="heading heading-4 strong-400 mb-0">Create a new account. No payment required.</h4>
                  </div>
                  <form class="form-default mt-4" data-toggle="validator" role="form" v-on:submit.prevent="submit()">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="control-label">First name</label>
                          <input type="text" class="form-control form-control-lg" v-model="first_name">
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="control-label">Last name</label>
                          <input type="text" class="form-control form-control-lg" v-model="last_name">
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                            <label class="control-label">Email</label>
                            <input type="email" class="form-control form-control-lg" v-model="email">
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                            <label class="control-label">Phone</label>
                            <input type="text" class="form-control form-control-lg" v-model="phone_number">
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                            <label class="control-label">Address</label>
                            <input type="text" class="form-control form-control-lg" v-model="address" placeholder="City, State Zip">
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                            <label class="control-label">IMDB</label>
                            <input type="text" class="form-control form-control-lg" v-model="imdb_url">
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                            <label class="control-label">Current Job Title</label>
                            <input type="text" class="form-control form-control-lg" list="titles" v-model="current_job_title">
                        </div>
                      </div>

                    </div>

                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                            <label class="control-label">Resume</label>
                            <input type="file" class="form-control form-control-lg" id="resume" v-on:change="setResumeFile($event)" ref="fileInput">
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                            <label class="control-label">Image</label>
                            <input type="file" class="form-control form-control-lg" id="image" v-on:change="setFile($event)" ref="fileInput">
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="control-label">Password</label>
                          <input type="password" class="form-control form-control-lg" v-model="password">
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group has-feedback">
                          <label class="control-label">Confirm Password</label>
                          <input type="password" class="form-control form-control-lg" v-model="password_confirmation">
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

                    <div class="mt-1 ">
                      <small class="">By clicking "Sign up" you agree to our terms and conditions</small>
                    </div>

                    <button type="submit" class="btn btn-styled  btn-base-1 mt-4">
                        Sign Up
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
    setResumeFile: function(event) {
      if (event.target.files.length > 0) {
        this.resume = event.target.files[0];
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