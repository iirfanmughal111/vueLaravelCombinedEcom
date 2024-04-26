<template>
  <div>
      <Carousel />
      <Categories title="BROWSE OUR TOP CATEGORIES"  SubTitle="CAREFULLY CREATED COLLECTIONS" />
      <Products  title="TOP TRENDING PRODUCTS"  SubTitle="MADE THE HARD WAY"  />

  </div>
</template>

<script>
import Carousel from '@/components/partials/Carousel.vue';
import Categories from '@/components/Home/Categories.vue';
import Products from '@/components/Home/Products.vue';

export default {
  name: "App",
components: {
  Carousel,
  Categories,
  Products,
},
}
</script>

<style>

</style>