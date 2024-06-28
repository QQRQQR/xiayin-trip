<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="(item, index) in TAB_BAR_MAP" :key="index">
        <van-tabbar-item :to="item.path" :name="item.name">
          {{ item.text }}
          <template #icon>
            <img v-if="currentIndex !== index" :src="getImageUrl(item.image)" />
            <img v-else :src="getImageUrl(item.imageActive)" />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TAB_BAR_MAP, getImageUrl } from '@/utils/common.js'
const currentIndex = ref(0)
</script>

<style lang="less" scoped>
.tab-bar {
  img {
    width: 26px;
  }
}
</style>