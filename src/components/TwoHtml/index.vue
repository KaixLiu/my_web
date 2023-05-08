<template>
  <div class="swiper-slide SwiperTwo">
    <div class="TwoBox">
      <div class="title">
        <h3>关于我</h3>
        <div class="iconBox">
          <!-- 年龄学历定位for渲染 -->
          <div class="iconOne" v-for="o in TwoList" :key="o.id">
            <span
              class="iconfont"
              :class="o.class"
              :style="{ color: o.color }"
            ></span>
            <p>{{ o.text }}</p>
          </div>
        </div>
        <hr style="width: 80%; margin: 0 auto; marginBottom: 20px" />
        <div class="textBox">
          <p>开发前端代码，实现产品的页面交互和数据逻辑展示</p>
          <p>与产品讨论确定，实现良好体验的交互效果</p>
          <p>解决兼容性问题，优化前端性能，改善用户体验</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TwoHtml',
  data () {
    return {
      // 我的情况
      TwoList: [
        { id: 0, color: '#ff80b1', class: 'icon-nianling', text: '22' },
        { id: 1, color: '#0197d1', class: 'icon-xueli', text: '大专' },
        { id: 2, color: '#fc490b', class: 'icon-zuobiaofill', text: '南昌' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
// 第二个页面
.SwiperTwo {
  position: relative;
  background-color: #f2f2f2;
  .TwoBox {
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
    // background-color: pink;
    .title {
      text-align: center;
      width: 100%;
      font-size: 24px;
      h3 {
        font-size: 32px;
      }
      .iconBox {
        max-width: 800px;
        min-width: 300px;
        display: flex;
        justify-content: space-around;
        margin: 50px auto;
      }
      .textBox {
        font-size: 24px;
        line-height: 36px;
      }
    }
  }
}
// 小于900px
@media screen and (max-width: 900px) {
  .SwiperTwo {
    .TwoBox {
      .title {
        text-align: center;
        width: 100%;
        font-size: 22px;
        .iconBox {
          margin: 40px auto;
        }
        .textBox {
          font-size: 22px;
          line-height: 36px;
        }
      }
    }
  }
}
// 小于600px
@media screen and (max-width: 600px) {
  .SwiperTwo {
    .TwoBox {
      .title {
        text-align: center;
        width: 100%;
        font-size: 22px;
        h3 {
          font-size: 30px;
        }
        .iconBox {
          margin: 30px auto;
        }
        .textBox {
          font-size: 20px;
          line-height: 36px;
        }
      }
    }
  }
}
// 小于400px
@media screen and (max-width: 400px) {
  .iconfont {
  font-size: 52px;
}
  .SwiperTwo {
    .TwoBox {
      .title {
        text-align: center;
        width: 100%;
        font-size: 20px;
        h3 {
          font-size: 28px;
        }
        .iconBox {
          margin: 20px auto;
        }
        .textBox {
          font-size: 18px;
          line-height: 36px;
        }
      }
    }
  }
}
</style>
