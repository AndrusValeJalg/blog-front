<script setup>
defineProps(['items', 'title']);
</script>

<template>
    <h1 class="title"> {{ title }}</h1>
    <ul>
        <li v-for="item in items" :key="item.id" style="display: flex; flex-direction: row; justify-content: space-between;">
                {{ item.name }}
                <input type="checkbox" v-model="item.isDone">
        </li>
    </ul>
</template>