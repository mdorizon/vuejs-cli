<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        title: String,
        list: Array,
        total: Number
    })
</script>

<template>
    <h2>{{ props.title }}</h2>
    <div style="display: flex; flex-direction: column;">
        <p v-for="item in list" :key="item.id">
            {{ item.quantity }} x
            {{ item.title }}
            <button @click="item.quantity++; $emit('update-price')" >+</button>
            <button @click="item.quantity > 1 ? item.quantity-- : $emit('remove-item', item.id); $emit('update-price')">-</button>
            <button @click="$emit('remove-item', item.id)">Remove</button>
        </p>
    </div>
    <h4>{{ props.total }} €</h4>
</template>