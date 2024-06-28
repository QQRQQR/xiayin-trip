<template>
  <div class="city">
    <div class="top">
      <!-- 搜索框 -->
      <van-search
        placeholder="城市/区域/位置"
        shape="round"
        show-action
        @cancel="cancelClick"
      />
      <!-- tab的切换 -->
      <van-tabs v-model:active="tabActive" color="#ff9854" line-height="3">
        <template v-for="(value, key) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <!-- 可选选项 -->
    <div class="content">
      <template v-for="(value, key, index) in allCities" :key="index">
        <!-- <h2 v-show="tabActive === key">{{ value.title }}</h2> -->
        <city-group v-show="tabActive === key" :group-data="value" />
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia';
import useCityStore from '@/stores/modules/city';
import { useRouter } from 'vue-router';
import CityGroup from './cpns/CityGroup.vue';
const tabActive = ref()

const router = useRouter()
const cancelClick = () => {
  router.back()
}

const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const { allCities } = storeToRefs(cityStore)
console.log('allCities', allCities)
</script>

<style lang="less" scoped>
</style>