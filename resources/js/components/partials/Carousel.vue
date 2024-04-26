<template>
   <v-carousel
    height="400"
    progress="primary"
    hide-delimiters
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        height="100%"
      >
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2">           
            <img class="img-fluid" :src="`/uploads/products/${slide.id}.jpg`" alt="Third-slide" title="Third-slide">
          </div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
    data () {
      return {
        slides: [
          {id:'jum1', title: 'First', text: 'First Slide'},
          {id:'jum2', title: 'second', text: 'second Slide'},
          {id:'jum3', title: '3', text: '3 Slide'},
          {id:'jum22', title: '4', text: '4 Slide'},
          {id:'13', title: '5', text: '5 Slide'},
          {id:'14', title: '6', text: '6 Slide'},

        ],
      }
    },
}
</script>

<style>

</style>