<template>
  <div class="notifications-index">
    
    <h1>{{ message }}</h1>

    <div v-for="notification in notifications">
      <h5>{{ newDate(notification.created) }}</h5>
      <h4>{{ notification.note }}</h4>
      <router-link v-bind:to="'/projects/' + notification.project.id">Related Project: {{ notification.project.title }} </router-link>
      <br>
      <button v-on:click="destroy(notification)">Destroy Notification</button>
      <hr>
    </div>

  </div>
</template>

<script>

import axios from "axios";
import moment from "moment";


export default {
  data: function() {
    return {
      message: 'Recent Notifications',
      notifications: [],
    };
  },
  created: function() {
    axios.get("/api/notifications").then(response => {
      this.notifications = response.data;
    });
  },
  methods: {
    newDate: function(date) {
      return moment(date).format('MMMM Do YYYY');
    },
    destroy: function(notification) {
      axios
        .delete("/api/notifications/" + notification.id)
        .then(response => {
          console.log("Success!", response.data);
          // this.$router.push("/notifications");
          var index = this.notifications.indexOf(notification);
          this.notifications.splice(index, 1);
        });
      }
    },
};
</script>