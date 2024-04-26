<template>
   <v-layout>
    <v-footer class="bg-teal-darken-4">
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        class="mx-2"
        color="white"
        rounded="xl"
        variant="text"
      >
        {{ link }}
      </v-btn>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>Muhammad Irfan</strong>
      </v-col>
    </v-row>
  </v-footer>

    </v-layout>


</template>

<script>

    export default {
        name: "Navbar",
        setup(){
        links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ]

        return {
          links: [
            'Home',
            'About Us',
            'Team',
            'Services',
            'Blog',
            'Contact Us',
          ]
        }
        }
   
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>