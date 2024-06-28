<template>
  <div id="app">
    <RouterView />
    <tab-bar v-show="!route.meta.hideTabBar" />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TabBar from '@/components/TabBar.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style scoped>
</style>
