<template>
  <div class="login">

    <!-- <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Login</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div> -->

    <section class="slice-lg has-bg-cover bg-size-cover">
      <div class="container">
        <div class="row justify-content-center cols-xs-space">
          <div class="col-lg-4">
            <div class="form-card form-card--style-2 z-depth-1">
              <div class="form-header text-center">
                <div class="form-header-icon">
                  <i class="icon ion-log-in"></i>
                </div>
              </div>
              <div class="form-body">
                <div class="text-center px-2">
                  <h4 class="heading heading-4 strong-400 mb-4">Sign in to your account</h4>
                  <ul>
                    <li class="text-danger" v-for="error in errors">{{ error }}</li>
                  </ul>
                </div>
                <form class="form-default" role="form" v-on:submit.prevent="submit()">
                  <div class="row">
                    <div class="col-12">
                      <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control form-control-lg" v-model="email">
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-12">
                      <div class="form-group has-feedback">
                        <label>Password</label>
                        <input type="password" class="form-control form-control-lg" v-model="password">
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-12">
                      <div class="checkbox">
                        <input type="checkbox" id="chkRemember">
                        <label for="chkRemember">Remember me</label>
                      </div>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-styled btn-lg btn-block btn-base-1 mt-4">Sign in</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          localStorage.setItem("firstname", response.data.firstname);
          localStorage.setItem("lastname", response.data.lastname);
          localStorage.setItem("image", response.data.image);
          this.$router.push("/projects");
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>
