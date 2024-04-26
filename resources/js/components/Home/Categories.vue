<template>
  <div class="text-caption text-center">{{ SubTitle }}</div>
  <div class="text-h3 text-center">{{ title }}</div>
  <v-container class="">
    <v-row no-gutters>

      <v-col v-for="category in categories" :key="category.id" cols="12" sm="4">
        <v-sheet class="ma-2 pa-2">
          <v-card>
            <v-img
              :src="`/uploads/categories/${category.image_url}`"
              class="align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              cover
            >
              <v-card-title class="text-white" v-text="category.title"></v-card-title>
            </v-img>

            <!-- <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                color="medium-emphasis"
                icon="mdi-heart"
                size="small"
              ></v-btn>

              <v-btn
                color="medium-emphasis"
                icon="mdi-bookmark"
                size="small"
              ></v-btn>

              <v-btn
                color="medium-emphasis"
                icon="mdi-share-variant"
                size="small"
              ></v-btn>
            </v-card-actions> -->
          </v-card>
        </v-sheet>
      </v-col>

    </v-row>
  </v-container>

</template>

<script>
import useCategories from '../../composables/categories.js'
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
    const {categories,getCategories} = useCategories()
      onMounted(getCategories)

      // const deleteCompany = async (id) => {
      //   if (!window.confirm("Are you sure you want to delete this company?")) return //return in case of cancel
      //   await destroyCompany(id)
      //   getcategories()
      // }
    
    return {
      categories,
    
      // // test,
      // deleteCompany,
    }
  }
}
</script>

<style>
</style>