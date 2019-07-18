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
      <nav class="navbar navbar-expand-lg navbar-inverse bg-base-2 navbar--link-arrow navbar sticky-top navbar--uppercase">
        <div class="container navbar-container">
          <!-- Brand/Logo -->
          <a class="navbar-brand" href="/">
            <img src="/assets/images/logo/slate_logo.png" class="d-none d-lg-inline-block" alt="Boomerang">
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
                <router-link v-if="isLoggedIn()" to="/projects/new" class="nav-link">New Project</router-link>
              </li>
              <li class="nav-item">
                <router-link v-if="!isLoggedIn()" to="/index" class="nav-link"></router-link>
              </li>
            </ul>

          </div>
          <div class="pl-4 d-none d-lg-inline-block">
            <router-link v-if="!isLoggedIn()" to="/signup" class="btn btn-styled  btn-base-3 btn-outline text-uppercase btn-round">Sign Up</router-link>
          </div>
          <div class="pl-2 d-none d-lg-inline-block">
            <router-link v-if="!isLoggedIn()" to="/login" class="btn btn-styled   btn-base-3 btn-outline text-uppercase btn-round">Sign In</router-link>
          </div>
          
          <!-- Begin User Nav Dropdown -->
          <div class="dropdown dropdown--style-2" v-if="isLoggedIn()">
              <a class="dropdown-toggle has-badge" href="#" data-toggle="dropdown" aria-expanded="false">
                <img class="dropdown-image rounded-circle" :src="image">
                <!-- <sup class="badge bg-blue">3</sup> -->
                <span class="dropdown-text text-white">{{firstname }} {{ lastname }}</span>
              </a>
              <div class="dropdown-menu">
                <h6 class="dropdown-header">User menu</h6>
                <router-link v-if="isLoggedIn()" :to="`/users/${user_id}`">
                  <a class="dropdown-item" href="">
                    <i class="ion-ios-gear-outline icon-lg text-primary"></i>Profile
                  </a>
                </router-link>
                <router-link v-if="isLoggedIn()" to="/notifications">
                  <a class="dropdown-item" href="">
                    <!-- <span class="float-right badge badge-primary">4</span> -->
                    <i class="ion-ios-email-outline icon-lg text-primary"></i>Notifications
                  </a>
                </router-link>
                <div class="dropdown-divider" role="presentation"></div>
                <router-link v-if="isLoggedIn()" to="/logout">
                  <a class="dropdown-item" href="">
                    <i class="ion-log-out icon-lg text-primary"></i>Log out
                  </a>
                </router-link>
              </div>
          </div> 
          <!-- End User Nav Dropdown -->

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
                  <img src="/assets/images/logo/slate_logo.png">
                  <span class="clearfix"></span>
                  <span class="heading heading-sm c-gray-light strong-400">Hiring Shouldn't be this Simple</span>
                  <p class="mt-3">
                    All the components included in Boomerang are built to the same level of quality as Bootstrap and highlighted with several example pages.
                  </p>

                  <div class="copyright mt-4">
                    <p>
                      Copyright &copy; 2019                                
                        <strong>Slate</strong>
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