<script setup>
    import { ref, computed, onMounted,  } from 'vue'
    import { useRoute } from 'vue-router'

    const route = useRoute()

    const title = ref('Hello Vuejs')
    const singleProduct = ref([])
    const fetchAllItems = computed(async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        const product = data.find(product => product.id == route.params.id);
        singleProduct.value = product
    })


    onMounted(() => {
        console.log('App mounted !')
        fetchAllItems.value;
    })
</script>

<template>
    <h1>{{ singleProduct.title }}</h1>
</template>