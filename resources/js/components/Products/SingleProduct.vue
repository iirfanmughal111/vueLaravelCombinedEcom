<template>
   

    <v-container class="">
    <v-row >

      <v-col cols="12" sm="4">
  
        <v-carousel show-arrows="hover" cycle>
          <v-carousel-item
        :src="`/uploads/products/featured_images/${product.featured_image}`"
          cover
        ></v-carousel-item>

        
        <v-carousel-item  v-for="gallery_img in product.gallery" :key="gallery_img.id" 
        :src="`/uploads/products/gallery_images/${gallery_img.value}`"
          cover
        ></v-carousel-item>
      </v-carousel>

      </v-col>
      <v-col cols="12 pa-6" sm="8">
        <v-card>
              <v-card-title> <h2> {{product.title}} </h2> </v-card-title>
             
                <span v-if="product.sale_price">
                  <span class="text-decoration-line-through"> Price: {{product.regular_price}} </span>
                  <span> Price: {{product.sale_price}} </span>
                  
                </span>
                


              <v-card-subtitle :class="product.sale_price==null ? '' : 'text-decoration-line-through' "> Price: {{product.regular_price}} </v-card-subtitle>
           
              <v-card-text>
                <p>  {{product.short_description}} </p>
                <router-link :to="{name:'categoryArchive',params: {id:product.category_id}}">

                <p>  {{product.category ? product.category.title : 'uncategorized'}} </p>
          </router-link>

              </v-card-text>
            </v-card>
            <p> {{ product.order_count }} People Buy this product</p>
            <p> {{ product.wishList_count }} People liked this product</p>
            <p> {{ product.cart_count }} People added into thier this product</p>
            
        <v-row>
          <v-col cols="6">
            
          </v-col>
        </v-row>
       
       
        {{product}}
      </v-col>

    </v-row>
  </v-container>
 </template>
 
 <script>
import useProducts from '../../composables/products.js'
import { onMounted } from 'vue'
export default {
  
  props: {
    id: {
      required: true,
      type: String
    },

  },
     setup (props) {
      console.log('before -> '+props.id);
        const { product,getProduct } = useProducts()
        onMounted(() => {
            getProduct(props.id);
    });
    
       return {
           product
       }
     },
 }
 </script>
 
 <style>
 
 </style>