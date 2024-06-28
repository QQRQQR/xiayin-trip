<template>
  <div class="home" ref="homeRef">
    <!--  标题 -->
    <nav-bar />
    <!-- banner图 -->
    <div class="banner">
      <!-- <img src="@/assets/img/home/banner.webp" /> -->
      <img src="" alt="" />
    </div>
    <!-- 搜索框 -->
    <search-box />
    <!-- 分类 -->
    <categories />
    <!-- 悬浮在顶部的搜索框 -->
    <!-- <div class="search-bar">
      <search-bar></search-bar>
    </div> -->
    <!-- 热门精选 -->
    <content />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { NavBar, SearchBox, Categories, Content } from '@/views/home/cpns/index.js'
import SearchBar from '@/components/SearchBar.vue'

import useScroll from '@/hooks/useScroll'

// 监听滚动到底部
const homeRef = ref()
const { isReachBottom, scrollTop } = useScroll(homeRef)
watch(isReachBottom, (newValue) => {
  if (newValue) {
    console.log('newValue', newValue)
    // homeStore.fetchHouselistData().then(() => {
    //   isReachBottom.value = false
    // })
  }
})
</script>

<style lang="less" scoped>
.home {
  height: 100vh; //明确高度
  overflow-y: auto; // 超过则自动生成滚动条，这个滚动条属于home；若滚动条属于屏幕，有最高显示权，会覆盖tabber
  box-sizing: border-box; // 设定的宽高包括padding+border+content
  padding-bottom: 60px;
}
.banner {
  img {
    width: 100%;
  }
}
</style>