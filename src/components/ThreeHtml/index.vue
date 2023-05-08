<template>
  <!-- 3 -->
  <div class="swiper-slide SwiperThree">
    <div class="ThreeBox">
      <div class="title">
        <h3>技术栈</h3>
        <div class="iconBox">
          <div class="iconOne" v-for="J in threeList" :key="J.id">
            <span
              class="iconfont"
              :class="J.class"
              :style="{ color: J.color }"
            ></span>
            <p>{{ J.text }}</p>
          </div>
        </div>
        <hr style="width: 80%; margin: 0 auto; marginBottom: 20px" />
        <div class="text">
          <p>
            熟练使用各种 web 前端技术,包括 HTML/CSS/JS 等,能快速还原 PSD 源文件
          </p>
          <p>
            熟练使用 vue 框架快速的构建项目,以及第三方库(ElementUI、bootstrap)
          </p>
          <p>熟悉webpack自动化构建工具，熟练使用less预处理器</p>
          <p>熟悉使用Git项目管理工具</p>
          <p>了解Node、eslint具有良好的编码规范</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThreeHtml',
  data () {
    return {
      // 技术栈
      threeList: [
        { id: 0, color: '#fc490b', class: 'icon-html', text: 'HTML' },
        { id: 1, color: ' #2196f3', class: 'icon-css', text: 'CSS' },
        { id: 2, color: ' #f4de51', class: 'icon-js', text: 'JS' },
        { id: 3, color: ' #41b883', class: 'icon-Vue', text: 'Vue' },
        { id: 4, color: ' #f05030', class: 'icon-git', text: 'Git' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
// 第三个页面
.SwiperThree {
  position: relative;
  background-color: #f2f2f2;
  .ThreeBox {
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
    .title {
      text-align: center;
      width: 100%;
      font-size: 24px;
      h3 {
        font-size: 32px;
      }
      .iconBox {
        width: 800px;
        display: flex;
        justify-content: space-around;
        margin: 50px auto;
        animation: myMove 3s infinite;
      }
      .text {
        font-size: 24px;
        p {
          padding: 5px;
        }
      }
    }
  }
}
// 呼吸灯
@keyframes myMove {
  0% {
    transform: scale(1, 1);
    -moz-transform: scale(1, 1);
    -webkit-transform: scale(1, 1);
    -o-transform: scale(1, 1);
    -ms-transform: scale(1, 1);
  }
  50% {
    transform: scale(1.2, 1.2);
    -moz-transform: scale(1.2, 1.2);
    -webkit-transform: scale(1.2, 1.2);
    -o-transform: scale(1.2, 1.2);
    -ms-transform: scale(1.2, 1.2);
  }
  100% {
    transform: scale(1, 1);
    -moz-transform: scale(1, 1);
    -webkit-transform: scale(1, 1);
    -o-transform: scale(1, 1);
    -ms-transform: scale(1, 1);
  }
}
// 小于900px
@media screen and (max-width: 900px) {
  .SwiperThree {
    .ThreeBox {
      .title {
        font-size: 22px;
        .iconBox {
          width: 700px;
          margin: 40px auto;
        }
        .text {
          font-size: 22px;
        }
      }
    }
  }
}
// 小于800
@media screen and (max-width: 800px) {
  .SwiperThree {
    .ThreeBox {
      .title {
        font-size: 22px;
        .iconBox {
          width: 500px;
          margin: 40px auto;
        }
        .text {
          font-size: 20px;
        }
      }
    }
  }
}
// 小于600px
@media screen and (max-width: 600px) {
  .iconfont {
    font-size: 52px;
  }
  .SwiperThree {
    .ThreeBox {
      .title {
        font-size: 22px;
        h3 {
          font-size: 30px;
        }
        .iconBox {
          width: 380px;
          margin: 30px auto;
        }
        .text {
          font-size: 20px;
        }
      }
    }
  }
}
// 小于400px
@media screen and (max-width: 400px) {
  .iconfont {
    font-size: 48px;
  }
  .SwiperThree {
    .ThreeBox {
      .title {
        font-size: 20px;
        h3{
          font-size: 28px;
        }
        .iconBox {
          width: 300px;
          margin: 20px auto;
        }
        .text {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
