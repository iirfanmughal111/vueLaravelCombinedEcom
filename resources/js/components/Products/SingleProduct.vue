<template>
    {{product}}
 </template>
 
 <script>
import useProducts from '../../composables/products.js'
import { onMounted } from 'vue'
export default {
  
  props: {
    title: {
      id: true,
      type: String
    },

  },
     setup () {
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