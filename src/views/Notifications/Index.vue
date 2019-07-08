<template>
  <div class="notifications-index">

    {{ notifications }}
    <h1>{{ message }}</h1>

    <div v-for="notification in notifications">
      <h3>{{ notification.note }}</h3>
      <button v-on:click="destroy(notification)">Destroy Notification</button>
      <hr>
    </div>

  </div>
</template>

<script>

import axios from "axios";

export default {
  data: function() {
    return {
      message: 'This is a users Notification Page',
      notifications: []
    };
  },
  created: function() {
    axios.get("/api/notifications").then(response => {
      this.notifications = response.data;
    });
  },
  methods: {
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
  }
};
</script>