<template>
  <div class="notifications-index">
    
    <section class="slice-xl page-title border-bottom has-bg-cover bg-size-cover" style="background-image: url(/assets/images/backgrounds/slider/paramount.jpg);">
        <div class="container mask-container">
            <div class="row">
                <div class="col-md-6">
                    <!-- Fluid text paragraph -->
                    <div class="pb-4 mt-4">
                      <p class="lead text-white">
                          Recent Notifications.
                      </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    

    <!-- <section class="slice sct-color-1 bg-minimalist"> -->
      <div class="container bg-minimalist">
        <div class="row justify-content-center">
          <div class="col-lg-12 mt--150">
              <div class="card mb-5">
                <div class="card-body">
                  <table class="table-cart">
                    <thead>
                      <tr>
                        <th class="product-name">Date</th>
                        <th class="product-size d-none d-lg-table-cell">Notification</th>
                        <th class="product-price d-none d-lg-table-cell">Project</th>
                        <th class="product-remove"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="cart-item" v-for="notification in notifications">
                          <td class="product-name">
                              {{ newDate(notification.created) }}
                          </td>

                          <td class="product-size product-size d-none d-lg-table-cell">
                              <span class="strong-600">{{ notification.note }}</span>
                          </td>
                          <td class="product-size product-size d-none d-lg-table-cell">
                              <router-link v-bind:to="'/projects/' + notification.project.id">Related Project: {{ notification.project.title }} </router-link>
                          </td>
                          <td class="product-remove">
                              <a href="#" class="text-right pl-4">
                                  <i class="ion-trash-a" v-on:click="destroy(notification)"></i>
                              </a>
                          </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
          </div>
        </div>
      </div>
    <!-- </section> -->

    <!-- <h1>{{ message }}</h1>

    <div v-for="notification in notifications">
      <h5>{{ newDate(notification.created) }}</h5>
      <h4>{{ notification.note }}</h4>
      <router-link v-bind:to="'/projects/' + notification.project.id">Related Project: {{ notification.project.title }} </router-link>
      <br>
      <button v-on:click="destroy(notification)">Destroy Notification</button>
      <hr>
    </div> -->
    

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