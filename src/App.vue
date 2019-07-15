<template>
  <div id="app">

<!--     <div id="nav">
      <router-link v-if="isLoggedIn()" to="/projects">Projects</router-link> |
      <router-link v-if="isLoggedIn()" to="/projects/new">New Project</router-link> |
      <router-link v-if="isLoggedIn()" :to="`/users/${user_id}`">My Profile</router-link> |
      <router-link v-if="isLoggedIn()" to="/notifications">My Notifications</router-link> |
      <router-link v-if="!isLoggedIn()" to="/signup">Sign Up | </router-link> 
      <router-link v-if="!isLoggedIn()" to="/login">Login |</router-link>
      <router-link v-if="isLoggedIn()" to="/logout">Logout</router-link>
      <p v-if="isLoggedIn()">You are logged in as: {{ firstname}} {{ lastname }}<img v-bind:src="image" height="70" width="50"></p>
    </div> -->
    
        <!-- Navbar -->
      <nav class="navbar navbar-expand-lg navbar-inverse bg-gradient-1 navbar--link-arrow navbar sticky-top">
        <div class="container navbar-container">
          <!-- Brand/Logo -->
          <a class="navbar-brand" href="/index.html">
            <img src="/assets/images/logo/logo-1-a.png" class="d-none d-lg-inline-block" alt="Boomerang">
            <img src="/assets/images/logo/logo-1-a.png" class="d-lg-none" alt="Boomerang">            
          </a>
                  
          <div class="d-inline-block">
            <!-- Navbar toggler  -->
            <button class="navbar-toggler hamburger hamburger-js hamburger--spring" type="button" data-toggle="collapse" data-target="#navbar_main" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
          </div>

          <div class="collapse navbar-collapse align-items-center justify-content-end" id="navbar_main">
            <!-- Navbar search - For small resolutions -->
            <div class="navbar-search-widget b-xs-bottom py-3 d-lg-none d-none">
              <form class="" role="form">
                <div class="input-group input-group-lg">
                  <input type="text" class="form-control" placeholder="Search for...">
                  <span class="input-group-btn">
                  <button class="btn btn-base-3" type="button">Go!</button>
                  </span>
                </div>
              </form>
            </div>

            <!-- Navbar links -->
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link v-if="isLoggedIn()" to="/projects" class="nav-link">Projects</router-link>
              </li>
              <li class="nav-item">
                <router-link v-if="!isLoggedIn()" to="/index" class="nav-link">Home</router-link>
              </li>
            </ul>

            <ul class="navbar-nav ml-lg-auto">
              <li class="nav-item">
                <router-link v-if="isLoggedIn()" to="/notifications" class="nav-link">My Notifications<b-badge variant="light">4</b-badge></router-link>
              </li>
              <li class="nav-item">
                <router-link v-if="isLoggedIn()" :to="`/users/${user_id}`" class="nav-link">My Profile</router-link>
              </li>
            </ul>
          </div>
          <div class="pl-4 d-none d-lg-inline-block">
            <router-link v-if="!isLoggedIn()" to="/signup" class="btn btn-styled  btn-base-1 text-uppercase btn-round">Sign Up</router-link>
          </div>
          <div class="pl-4 d-none d-lg-inline-block">
            <router-link v-if="!isLoggedIn()" to="/login" class="btn btn-styled   btn-base-1 text-uppercase btn-round">Sign In</router-link>
          </div>
          <div class="pl-4 d-none d-lg-inline-block">
            <router-link v-if="isLoggedIn()" to="/logout" class="btn btn-styled btn-dark btn-base-1 text-uppercase btn-round btn-icon-left">
            <i class="fas fa-sign-out-alt"></i>Log Out</router-link>
          </div>         
        </div>
      </nav>

        <router-view/>

      <!-- FOOTER -->
      <footer id="footer" class="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row cols-xs-space cols-sm-space cols-md-space">
              <div class="col-lg-5">
                <div class="col">
                  <img src="/assets/images/logo/logo-1-c.png">
                  <span class="clearfix"></span>
                  <span class="heading heading-sm c-gray-light strong-400">One template. Infinite solutions.</span>
                  <p class="mt-3">
                    All the components included in Boomerang are built to the same level of quality as Bootstrap and highlighted with several example pages.
                  </p>

                  <div class="copyright mt-4">
                    <p>
                      Copyright &copy; 2018                                <a href="https://webpixels.io" target="_blank">
                        <strong>Webpixels</strong>
                      </a> -
                      All rights reserved
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-2">
                <div class="col">
                 <h4 class="heading heading-xs strong-600 text-uppercase mb-1">
                   Support
                 </h4>

                 <ul class="footer-links">
                  <li><a href="#" title="Help center">Help center</a></li>
                  <li><a href="#" title="Discussions">Discussions</a></li>
                  <li><a href="#" title="Contact support">Contact</a></li>
                  <li><a href="#" title="Blog">Blog</a></li>
                  <li><a href="#" title="Jobs">FAQ</a></li>
                </ul>
              </div>
            </div>

            <div class="col-lg-2">
              <div class="col">
                <h4 class="heading heading-xs strong-600 text-uppercase mb-1">
                  Company
                </h4>

                <ul class="footer-links">
                   <li>
                     <a href="#" title="Home">
                       Home
                     </a>
                   </li>
                   <li>
                     <a href="#" title="About us">
                       About us
                     </a>
                   </li>
                   <li>
                     <a href="#" title="Services">
                       Services
                     </a>
                   </li>
                   <li>
                     <a href="#" title="Blog">
                       Blog
                     </a>
                   </li>
                   <li>
                     <a href="#" title="Contact">
                       Contact
                     </a>
                   </li>
                 </ul>
               </div>
             </div>

             <div class="col-lg-3">
            <div class="col">
              <h4 class="heading heading-xs strong-600 text-uppercase mb-1">
                Get in touch
              </h4>

              <ul class="social-media social-media--style-1-v4">
                <li>
                  <a href="#" class="facebook" target="_blank" data-toggle="tooltip" data-original-title="Facebook">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="instagram" target="_blank" data-toggle="tooltip" data-original-title="Instagram">
                    <i class="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="dribbble" target="_blank" data-toggle="tooltip" data-original-title="Dribbble">
                    <i class="fa fa-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="dribbble" target="_blank" data-toggle="tooltip" data-original-title="Github">
                    <i class="fa fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>


  </div>
</template>


<script>
import axios from "axios";


export default {
  name: 'App',
  data: function() {
    return {
      user: {},
      firstname: localStorage.getItem('firstname'),
      lastname: localStorage.getItem('lastname'),
      user_id: localStorage.getItem('user_id'),
      image: localStorage.getItem('image'),
    };

  },
  created: function() {
  },
  methods: {
    isLoggedIn: function() {
      if(localStorage.getItem('jwt')) {
        return true;
      } else {
        return false;
      }
    }
  }
}

</script>