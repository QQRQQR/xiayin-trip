<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img
          src="https://pic.tujia.com/upload/landlordunit/day_200728/thumb/202007281552537926_360_480.jpg"
          alt=""
        />
      </div>
      <div class="info">
        <div class="summary">整套·1居1床 2人 4.8分</div>
        <div class="name">
          【踏春出游季•绿野仙踪】情侣静谧情调小窝•智能大屏投影•沙面公园•夜游珠江•朝拜圣心大教堂
        </div>
        <div class="price">
          <van-rate
            :model-value="4.8"
            color="#fff"
            :size="15"
            readonly
            allow-half
          />
          <div class="new">¥ 225</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="less" scoped>
.house-item {
  width: 50%;
  .item-inner {
    position: relative;
    margin: 5px;
    background-color: #fff;
    border-radius: 6px;
    overflow: hidden;
    .cover {
      img {
        width: 100%;
      }
    }
    .info {
      position: absolute;
      bottom: 0;
      padding: 8px 10px;
      color: #fff;
      .summary {
        font-size: 12px;
      }
      .name {
        // 多余内容省略
        margin: 5px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .price {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
      }
    }
  }
}
</style>