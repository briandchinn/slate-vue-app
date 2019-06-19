<template>
  <div class="projects-show">
    {{ project }}
    <h1>{{ message }}</h1>
    <h3>Title: {{ project.title }}</h3>
    <h3>Description: {{ project.description }}</h3>
    <h3>Address: {{ project.address }}</h3>
    <h3>Start Date: {{ project.start_date }}</h3>
    <h3>End Date: {{ project.end_date }}</h3>
    <h3>Number of Positions: {{ project.number_of_positions }}</h3>
    <button v-on:click="edit(project)">Edit Project</button>
    <button v-on:click="destroy(project)">Destroy Project</button>
  </div>

  </div>
</template>

<script>

import axios from "axios";

export default {
  data: function() {
    return {
      message: 'This is the Project Show Page',
      project: {}
    };
  },
  created: function() {
    axios.get("/api/projects/" + this.$route.params.id).then(response => {
      this.project = response.data;
    });
  },
  methods: {
    destroy: function(project) {
      axios
        .delete("/api/projects/" + project.id)
        .then(response => {
          console.log("Success!", response.data);
          this.$router.push("/projects");
        });
      }
  }
};
</script>