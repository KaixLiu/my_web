<template>
  <!-- Swiper -->
  <div class="swiper-container" id="swiper-container1">
    <div class="swiper-wrapper">
      <!-- 1 -->
      <OneHtml></OneHtml>
      <!-- 2 -->
      <TwoHtml></TwoHtml>
      <!-- 3 -->
      <ThreeHtml></ThreeHtml>
      <!-- 4 -->
      <FourHtml></FourHtml>
      <!-- 5 -->
      <FiveHtml></FiveHtml>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import 'swiper/dist/js/swiper'
import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper'
// import Clipboard from 'clipboard'
// 导入第一个页面
import OneHtml from '@//components/OneHtml/index.vue'
// 导入第二个页面
import TwoHtml from '@//components/TwoHtml/index.vue'
// 导入第三个页面
import ThreeHtml from '@//components/ThreeHtml/index.vue'
// 导入第四个页面
import FourHtml from '@//components/FourHtml/index.vue'
// 导入第五个页面
import FiveHtml from '@//components/FiveHtml/index.vue'
export default {
  name: 'MyVita',
  data () {
    return {}
  },
  mounted () {
    // 最外层轮播图
    // eslint-disable-next-line no-unused-vars
    const mySwiper1 = new Swiper('#swiper-container1', {
      direction: 'vertical',
      // mousewheel: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
      }
    })
  },
  components: { OneHtml, TwoHtml, ThreeHtml, FourHtml, FiveHtml }
}
</script>

<style lang="less" scoped>
// 最大盒子轮播图
.swiper-container {
  width: 100%;
  height: 100%;
}
</style>
