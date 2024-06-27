<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">app</div>
  <van-button type="primary">button</van-button>
  <van-button plain type="primary">朴素按钮</van-button>
  <van-button plain type="success">朴素按钮</van-button>

  <RouterView />
  <router-link to="/home">home</router-link>
  <router-link to="/favor">favor</router-link>
  <router-link to="/order">order</router-link>
  <router-link to="/message">message</router-link>
</template>

<style scoped>
</style>
