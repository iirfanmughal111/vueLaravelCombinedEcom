import { ref } from 'vue';
import axios from 'axios'
import router from '@/router';
export default function useProducts() {
    const products = ref([]);
    const product = ref([]);
    const errors = ref([]);
    
    const getProducts = async (id) => {
        const response = await axios.get('/api/products');
        products.value = response.data.data;
    }
    const getProduct = async (id) => {
        const response = await axios.get('http://127.0.0.1:8000/api/products/'+id);
        product.value = response.data.data;
    }
    const destroyCompany = async (id) => {
        await axios.delete('http://127.0.0.1:8000/api/products/'+id);
    }
    const createCompany = async (data) => {
       await axios.post('http://127.0.0.1:8000/api/products/',data);
        router.push({ name: 'home' });
    }
    const updateCompany = async (company) => {
        await axios.put('http://127.0.0.1:8000/api/products/'+company.value.id,company.value);
         router.push({ name: 'home' });
    }
    return {
        products,
        product,
        errors,
        getProducts,
        updateCompany,
        getProduct,
        destroyCompany,
        createCompany
    };
}