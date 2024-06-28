<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <item-v9></item-v9>
      <item-v3></item-v3>
      <item-v9></item-v9>
      <item-v3></item-v3>
      <item-v9></item-v9>
      <item-v3></item-v3>
      <item-v9></item-v9>
      <item-v3></item-v3>
      <item-v9></item-v9>
      <item-v3></item-v3>
    </div>
  </div>
</template>

<script setup>
import itemV3 from '@/components/item-v3.vue'
import itemV9 from '@/components/item-v9.vue'
</script>

<style lang="less" scoped>
.content {
  padding: 10px 8px;

  .title {
    font-size: 22px;
    padding: 10px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>