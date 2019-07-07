<template>
  <div id="app">

    <div id="nav">
      <router-link v-if="isLoggedIn()" to="/projects">Projects</router-link> |
      <router-link v-if="isLoggedIn()" to="/projects/new">New Project</router-link> |
      <router-link v-if="isLoggedIn()" :to="`/users/${user_id}`">My Profile</router-link> |
      <router-link v-if="isLoggedIn()" to="/notifications">My Notifications</router-link> |
      <router-link v-if="!isLoggedIn()" to="/signup">Sign Up | </router-link> 
      <router-link v-if="!isLoggedIn()" to="/login">Login |</router-link>
      <router-link v-if="isLoggedIn()" to="/logout">Logout</router-link>
      <p v-if="isLoggedIn()">You are logged in as: {{ firstname}} {{ lastname }}</p>
    </div>
    <router-view/>


  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>


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