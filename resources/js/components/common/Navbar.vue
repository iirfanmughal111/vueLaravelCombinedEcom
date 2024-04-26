<template>
   <v-layout>
    <v-app-bar
        color="teal-darken-4"
        image="https://picsum.photos/1920/1080?random"
      >
        <!-- <template v-slot:image>
          <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template> -->

        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Vue Laravel Combined</v-app-bar-title>

        <v-spacer></v-spacer>
        <v-btn height="48">
        <router-link :to="{name:'home'}">Home</router-link>
        </v-btn>
        <v-btn height="48">
        <router-link :to="{name:'about'}">About</router-link>
        </v-btn>
        <v-btn height="48">
            <router-link :to="{name:'contact'}">Contact</router-link>
        </v-btn>
   

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>

    </v-layout>


</template>

<script>

    export default {
        name: "Navbar",
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>