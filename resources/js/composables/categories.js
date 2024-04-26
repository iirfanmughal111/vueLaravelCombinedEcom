import { ref } from 'vue';
import axios from 'axios'
import router from '@/router';
export default function useCategories() {
    const categories = ref([]);
    const errors = ref([]);
    const getCategories = async () => {
        const response = await axios.get('/api/categories');
        categories.value = response.data.data;
    }
   return {
        categories,
        errors,
        getCategories
    };
}