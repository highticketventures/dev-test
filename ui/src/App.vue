<template>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import { usePageTitle } from './composables/usePageTitle';

// Initialize page title management
usePageTitle();
</script>