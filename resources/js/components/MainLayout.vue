<template>
    <div>
        <Navbar />
        
        <div class="wrapper">
            <router-view></router-view>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Navbar from '@/components/common/Navbar.vue';
import Footer from '@/components/common/Footer.vue';

export default {
    name: "App",
  components: {
    Navbar,
    Footer,
  },
}
</script>

<style scoped>
.wrapper{
    margin-top: 72px;
}
</style>