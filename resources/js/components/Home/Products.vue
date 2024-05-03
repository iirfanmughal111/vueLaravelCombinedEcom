<template>
  <div class="text-caption text-center">{{ SubTitle }}</div>
  <div class="text-h3 text-center">{{ title }}</div>
  <v-container class="">
    <v-row no-gutters>

      <v-col v-for="product in products" :key="product.id" cols="12" sm="4">
        <v-sheet class="ma-2 pa-2">
          <router-link :to="{name:'productView',params: {id:product.id}}">

          <v-card class="mx-auto" max-width="400">
            <v-img
              class="align-end text-white"
              height="200"
              :src="`/uploads/products/featured_images/${product.featured_image}`"
              cover
            >
              <v-card-title >
              
          <div class="bg-surface-variant rounded-pill ps-3">{{ product.title }}</div>
     
    
                
              </v-card-title>
            </v-img>

            <v-card-subtitle class="pt-4"> {{ product.category ? product.category.title : 'uncategorized'}} </v-card-subtitle>

            <v-card-text>
              <div>{{ product.short_description }} </div>
            </v-card-text>

            <v-card-actions>
              <v-btn
              class="ma-2"
              color="red-lighten-2"
              icon="mdi-cart-arrow-down"
              variant="text"
            ></v-btn>

              <v-btn 
              class="ma-2"
              color="red-lighten-2"
              icon="mdi-heart-plus"
              variant="text"></v-btn>
            </v-card-actions>
          </v-card>
        </router-link>

        </v-sheet>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import useProducts from '../../composables/products.js'
import { onMounted } from 'vue'
export default {
  
  props: {
    title: {
      required: true,
      type: String
    },
    SubTitle: {
      required: true,
      type: String
    }
  },
  setup(){
    const {products,getProducts} = useProducts()
      onMounted(getProducts)

      // const deleteCompany = async (id) => {
      //   if (!window.confirm("Are you sure you want to delete this company?")) return //return in case of cancel
      //   await destroyCompany(id)
      //   getproducts()
      // }
    
    return {
      products,
      // // test,
      // deleteCompany,
    }
  }
}
</script>

<style>
</style>