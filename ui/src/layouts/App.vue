<template>
    <Nav />
    <main class="pt-16">
        <RouterView />
    </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import Nav from '../components/Nav.vue';
</script>
