<template>
  <div class="swiper-slide">
    <div class="swiper-container" id="swiper-container2">
      <div class="swiper-wrapper">
        <!-- 主题 -->
        <div class="swiper-slide SwiperFour">
          <div class="FourBox">
            <div class="title">
              <h3>项目经历</h3>
            </div>
            <!-- 内容区域 -->
            <!-- 第一个经历 -->
            <el-card class="box-card" v-for="item in expList" :key="item.id">
              <div slot="header" class="clearfix">
                <span>{{ item.h3 }}</span>
                <el-button
                  style="float: right; padding: 3px 0"
                  type="text"
                  v-if="item.go"
                  @click="goGame"
                  >前往查看</el-button
                >
              </div>
              <div class="text item">
                <strong>项目介绍：</strong>
                <p>{{ item.IntroductionList }}</p>
                <strong>技术栈：</strong>
                <p>{{ item.stack }}</p>
                <strong>项目职责：</strong>
                <p
                  v-for="(o, index) in item.responsibilities"
                  :key="index + 'a'"
                >
                  {{ o.title }}
                </p>
                <strong>项目业绩：</strong>
                <p v-for="(itemess, index) in item.performance" :key="index">
                  {{ itemess.text }}
                </p>
              </div>
            </el-card>
          </div>
        </div>
      </div>
      <div class="swiper-scrollbar"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'FourHtml',
  data () {
    return {
      // 项目经历
      expList: [
        // 1
        {
          id: 0,
          h3: '商城后台管理系统',
          IntroductionList:
            '提供商品各项指标报表、商品增删改查，后台管理人员数据可视化功能管理，实现智能化运营',
          stack: 'Vue2 + node + Element-UI + Axios + git + Echarts',
          // 项目职责
          responsibilities: [
            {
              title: '1.独立构建SPA脚手架，配合效果图完成页面布局。'
            },
            {
              title:
                '2.使用axios实现动态渲染数据，使用vue-router配置路由，实现组件之间的页面切换'
            },
            {
              title: '3.进行二次业务组件，将重复组件封装成公共组件。'
            }
          ],

          // 项目业绩
          performance: [
            {
              text: '1.通过vue-cli进行了打包依赖优化，节省了大概30%的编译时间。'
            },
            {
              text: '2.利用elementUI封装的组件统一了各个业务模块的UI交互，大大减低了研发成本。'
            },
            {
              text: '3.通过压缩图片以及路由懒加载减小打包体积加快了首页打开速度。'
            },
            {
              text: '4.基于echart完成的动态报表组件，渲染图表界面，让数据清晰明了。'
            }
          ]
        },
        // 2
        {
          id: 1,
          go: true,
          h3: 'DREADFUL HAZY_死|霏游戏网页',
          IntroductionList:
            '该项目为游戏DREADFUL HAZY_死|霏的网页，用户可以通过网页查看游戏内容、玩法、更新日志，并且下载游戏',
          stack: 'Vue2 + Element-UI + git',
          // 项目职责
          responsibilities: [
            {
              title: '1.独立构建SPA脚手架，按需求完成页面布局'
            },
            {
              title: '2.项目支持PC端、IPAD端和手机端的自适应布局'
            },
            {
              title:
                '3.将项目部署在github pages，克服了没有服务器困难，让用户可以随时访问。'
            }
          ],

          // 项目业绩
          performance: [
            {
              text: '1.进行了图片压缩、路由懒加载、js优化等打包优化，加快网页打开速度。'
            },
            {
              text: '2.利用animate美化和统一了各个路由切换动画。'
            },
            {
              text: '3.利用elementUI制作作者简历，让用户更好了解作者信息。'
            },
            {
              text: '4.利用vuex来存储各种数据，让作者后续修改更加简便、快速。'
            }
          ]
        }
      ]
    }
  },
  mounted () {
    // eslint-disable-next-line no-unused-vars
    const mySwiper2 = new Swiper('#swiper-container2', {
      // 子swiper
      direction: 'vertical',
      nested: true,
      mousewheel: true,
      // resistanceRatio: 0,
      slidesPerView: 'auto',
      freeMode: true,
      scrollbar: {
        el: '.swiper-scrollbar'
      }
    })
  },
  methods: {
    goGame () {
      window.location.href = 'https://kaixliu.github.io/game_web/dist'
    }
  }
}
</script>

<style lang="less" scoped>
.swiper-container {
  width: 100%;
  height: 100%;
  // 内部长图
  #swiper-container2 .swiper-slide {
    height: auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: block;
  }
  .SwiperFour {
    background-color: aqua;
    .FourBox {
      .title {
        line-height: 50px;
        text-align: center;
        font-size: 32px;
      }
      .box-card {
        margin: 20px;
        // 头部前大小
        .clearfix {
          font-size: 26px;
          font-weight: 600;
        }
        // 小子
        .text {
          font-size: 24px;
          line-height: 36px;
        }
      }
    }
  }
}
// 小于800px
@media screen and (max-width: 800px) {
  .swiper-container {
    .SwiperFour {
      background-color: aqua;
      .FourBox {
        .title {
          line-height: 40px;
          text-align: center;
          font-size: 30px;
        }
        .box-card {
          margin: 20px;
          // 头部前大小
          .clearfix {
            font-size: 24px;
          }
          // 小子
          .text {
            font-size: 22px;
            line-height: 34px;
          }
        }
      }
    }
  }
}
// 小于700px
@media screen and (max-width: 700px) {
  .swiper-container {
    .SwiperFour {
      background-color: aqua;
      .FourBox {
        .title {
          line-height: 30px;
          text-align: center;
          font-size: 28px;
        }
        .box-card {
          margin: 20px;
          // 头部前大小
          .clearfix {
            font-size: 22px;
          }
          // 小子
          .text {
            font-size: 20px;
            line-height: 34px;
          }
        }
      }
    }
  }
}
// 小于600px
@media screen and (max-width: 600px) {
  .swiper-container {
    .SwiperFour {
      background-color: aqua;
      .FourBox {
        .title {
          line-height: 30px;
          text-align: center;
          font-size: 24px;
        }
        .box-card {
          margin: 20px;
          // 头部前大小
          .clearfix {
            font-size: 18px;
          }
          // 小子
          .text {
            font-size: 16px;
            line-height: 34px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 500px) {
  .swiper-container {
    .SwiperFour {
      background-color: aqua;
      .FourBox {
        .title {
          line-height: 30px;
          text-align: center;
          font-size: 20px;
        }
        .box-card {
          margin: 10px;
          // 头部前大小
          .clearfix {
            font-size: 16px;
          }
          // 小子
          .text {
            font-size: 14px;
            line-height: 34px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 400px) {
  .swiper-container {
    .SwiperFour {
      background-color: aqua;
      .FourBox {
        .title {
          line-height: 30px;
          text-align: center;
          font-size: 20px;
        }
        .box-card {
          margin: 10px;
          // 头部前大小
          .clearfix {
            font-size: 14px;
          }
          // 小子
          .text {
            font-size: 12px;
            line-height: 30px;
          }
        }
      }
    }
  }
}
</style>
