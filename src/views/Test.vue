<template>
  <div class="test">

    <h1>Test Page</h1>
    
    <div v-if="!myFavorite">
      <font-awesome-icon @click='favorite()' :icon="[`fas`,`star`]" size="lg" style="color:grey"/>
    </div>
    <div v-else>
      <font-awesome-icon @click='favorite()' :icon="[`fas`,`star`]" size="lg" style="color:gold"/>
    </div>
   
  </div>
</template>

<script>


export default {
  data: function() {
    return {
      myFavorite: false,
    };
  },
  created: function() {
  },
  methods: {
    favorite: function(){
      this.myFavorite = !this.myFavorite
    },
  }
};
</script>