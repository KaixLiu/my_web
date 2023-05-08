<template>
  <div class="VitaBox">
    <div class="swiper swiper-container">
      <div class="swiper-wrapper">
        <!-- 1 -->
        <div class="swiper-slide SwiperOne">
          <div class="OneBox">
            <div class="title">
              <div class="avatar">
                <img src="@/img/avatar.jpg" alt="" />
              </div>
              <h2>刘铠熙</h2>
              <hr style="width: 80%; margin: 0 auto; margintop: 10px" />
              <p>找工作的程序员</p>
            </div>
          </div>
        </div>
        <!-- 2 -->
        <div class="swiper-slide SwiperTwo">
          <div class="TwoBox">
            <div class="title">
              <h3>我的情况</h3>
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
              <hr style="width: 80%; margin: 0 auto; marginbottom: 20px" />
              <div class="textBox">
                <p>开发前端代码，实现产品的页面交互和数据逻辑展示</p>
                <p>与产品讨论确定，实现良好体验的交互效果</p>
                <p>解决兼容性问题，优化前端性能，改善用户体验</p>
              </div>
            </div>
          </div>
        </div>
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
              <hr style="width: 80%; margin: 0 auto; marginbottom: 20px" />
              <div class="text">
                <p>
                  熟练使用各种 web 前端技术,包括 HTML/CSS/JS 等,能快速还原 PSD
                  源文件
                </p>
                <p>
                  熟练使用 vue
                  框架快速的构建项目,以及第三方库(ElementUI、bootstrap)
                </p>
                <p>熟悉webpack自动化构建工具，熟练使用less预处理器</p>
                <p>熟悉使用Git项目管理工具</p>
                <p>了解Node、eslint具有良好的编码规范</p>
              </div>
            </div>
          </div>
        </div>
        <!-- 4 -->
        <div class="swiper-slide SwiperFour">
          <div class="FourBox">
            <div class="title">
              <h3>项目经历</h3>
              <div class="proBox">
                <el-card
                  class="box-card"
                  v-for="item in textList"
                  :key="item.id"
                >
                  <div class="text item">
                    <h4>{{ item.h4 }}</h4>
                    <p><strong>项目描述：</strong>{{ item.refer }}</p>
                    <p><strong>项目技术栈：</strong>{{ item.art }}</p>
                    <p><strong>项目职责：</strong>{{ item.job }}</p>
                    <p><strong>项目业绩：</strong>{{ item.yeji }}</p>
                    <el-button
                      v-if="item.index"
                      type="primary"
                      round
                      @click="goGame"
                      >前往查看</el-button
                    >
                  </div>
                </el-card>
              </div>
            </div>
          </div>
        </div>
        <!-- 5 -->
        <div class="swiper-slide SwiperFive">
          <div class="FiveBox">
            <div class="title">
              <h3>联系我吧</h3>
              <!-- 联系方式 -->
              <div class="ContactBox">
                <el-tooltip
                  v-for="L in fiveList"
                  :key="L.id"
                  class="item"
                  effect="dark"
                  :content="L.content"
                  placement="bottom-start"
                >
                  <span
                    class="iconfont"
                    :class="[L.class, L.IconClass]"
                    :data-clipboard-text="L.content"
                    :style="{ color: L.color }"
                    @click="LXW(L.click)"
                  ></span>
                </el-tooltip>
                <!--  -->
              </div>
              <hr style="width: 80%; margin: 0 auto; marginbottom: 20px" />
              <p>
                个性乐观开朗，逻辑性强，善于合作<br />良好的沟通能力、团队合作能力、抗压能力<br />对IT行业充满热爱，期待有一个发展的机会
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/js/swiper'
import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper'
import Clipboard from 'clipboard'
export default {
  name: 'MyHome',
  data () {
    return {
      // 我的情况
      TwoList: [
        { id: 0, color: '#ff80b1', class: 'icon-nianling', text: '22' },
        { id: 1, color: '#0197d1', class: 'icon-xueli', text: '大专' },
        { id: 2, color: '#fc490b', class: 'icon-zuobiaofill', text: '南昌' }
      ],
      // 技术栈
      threeList: [
        { id: 0, color: '#fc490b', class: 'icon-html', text: 'HTML' },
        { id: 1, color: ' #2196f3', class: 'icon-css', text: 'CSS' },
        { id: 2, color: ' #f4de51', class: 'icon-js', text: 'JS' },
        { id: 3, color: ' #41b883', class: 'icon-Vue', text: 'Vue' },
        { id: 4, color: ' #f05030', class: 'icon-git', text: 'Git' }
      ],
      // 项目经历
      textList: [
        {
          id: 0,
          h4: '商城后台管理系统',
          refer:
            '提供商城后台人员对用户进行权限的分配，对商品进行分类、增删标签、展示数据报表，实现智能化运营',
          art: 'Vue2 + node + Element-UI + Axios + git +Echarts',
          job: '项目支持PC端与IPAD端自适应布局，使用Axios进行调用后台数据来渲染页面',
          yeji: '通过vue-ui进行了打包依赖优化，节省了大概20%的编译时间,'
        },
        {
          id: 1,
          index: true,
          h4: 'DREADFUL HAZY_死|霏游戏网页',
          refer:
            '该项目是游戏DREADFUL HAZY_死|霏的网页，用户可以通过网页查看了解游戏内容与玩法，并且下载游戏',
          art: 'Vue2 + Element-UI + git',
          job: '主要负责项目页面搭建，使用组件渲染部分内容，考虑pc端与移动端的响应式布局。',
          yeji: '进行打包优化图片压缩，提速80%，将项目模块化处理优化修改代码速度'
        }
      ],
      // 联系我
      fiveList: [
        {
          id: 0,
          content: 'S207789',
          color: '#28c445',
          class: 'tag-weChat',
          IconClass: 'icon-weixin',
          click: 'weChat'
        },
        {
          id: 1,
          content: '2250832184',
          color: '#30a5dd',
          class: 'tag-QQ',
          IconClass: 'icon-QQ',
          click: 'QQ'
        },
        {
          id: 2,
          content: '15216173039',
          color: '#ff9000',
          class: 'tag-Phone',
          IconClass: 'icon-dianhuatianchong',
          click: 'Phone'
        },
        {
          id: 3,
          content: '2250832184@qq.com',
          color: '#51a9ff',
          class: 'tag-email',
          IconClass: 'icon-youxiang',
          click: 'email'
        }
      ]
    }
  },
  mounted () {
    // eslint-disable-next-line no-new
    new Swiper('.swiper-container', {
      // 轮播图样式
      direction: 'vertical',
      mousewheel: true, // 循环模式选项
      // 分页器
      pagination: {
        el: '.swiper-pagination',
        clickable: true, // 分页器可以点击
        dynamicBullets: true
      }
    })
  },
  methods: {
    goGame () {
      window.location.href = 'https://kaixliu.github.io/game_web/dist'
    },
    // 点击复制相关信息
    LXW (method) {
      if (method === 'weChat') {
        const clipboard = new Clipboard('.tag-weChat')
        clipboard.on('success', (e) => {
          this.$message.success('微信号复制成功')
          // 释放内存
          clipboard.destroy()
        })
        clipboard.on('error', (e) => {
          // 不支持复制
          this.$message.error('该浏览器不支持复制')
          // 释放内存
          clipboard.destroy()
        })
      } else if (method === 'QQ') {
        const clipboard = new Clipboard('.tag-QQ')
        clipboard.on('success', (e) => {
          this.$message.success('QQ号复制成功')
          // 释放内存
          clipboard.destroy()
        })
        clipboard.on('error', (e) => {
          // 不支持复制
          this.$message.error('该浏览器不支持复制')
          // 释放内存
          clipboard.destroy()
        })
      } else if (method === 'Phone') {
        const clipboard = new Clipboard('.tag-Phone')
        clipboard.on('success', (e) => {
          this.$message.success('手机号复制成功')
          // 释放内存
          clipboard.destroy()
        })
        clipboard.on('error', (e) => {
          // 不支持复制
          this.$message.error('该浏览器不支持复制')
          // 释放内存
          clipboard.destroy()
        })
      } else if (method === 'email') {
        const clipboard = new Clipboard('.tag-email')
        clipboard.on('success', (e) => {
          this.$message.success('邮箱号复制成功')
          // 释放内存
          clipboard.destroy()
        })
        clipboard.on('error', (e) => {
          // 不支持复制
          this.$message.error('该浏览器不支持复制')
          // 释放内存
          clipboard.destroy()
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.iconfont {
  font-family: 'iconfont' !important;
  font-size: 64px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor: pointer;
}

.VitaBox {
  width: 100%;
  height: 100%;
  // 轮播图
  .swiper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // 第一个页面
    .SwiperOne {
      position: relative;
      // background: url('@/img/bj1.png') no-repeat;
      // background-position: top center;
      // background-size: cover;
      background-color: #f2f2f2;
      // 内容
      .OneBox {
        position: absolute;
        top: 50%;
        width: 100%;
        transform: translateY(-50%);
        // background-color: pink;
        .title {
          text-align: center;
          width: 100%;
          font-size: 24px;
          p {
            padding-top: 10px;
          }
          // 头像
          .avatar {
            width: 150px;
            // 居中
            margin: 0 auto;
            img {
              width: 100%;
              border-radius: 50%;
            }
          }
        }
      }
    }
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
          .iconBox {
            width: 800px;
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
    // 第四个页面
    .SwiperFour {
      position: relative;
      background-color: #f2f2f2;
      .FourBox {
        position: absolute;
        top: 50%;
        width: 100%;
        transform: translateY(-50%);
        .title {
          text-align: center;
          width: 100%;
          font-size: 24px;
          .proBox {
            display: flex;
            .box-card {
              width: 50%;
              margin: 20px;
              text-align: left;
              font-size: 24px;
              p {
                padding: 5px 0;
              }
            }
          }
        }
      }
    }
    // .第五个页面
    .SwiperFive {
      position: relative;
      background-color: #f2f2f2;
      .FiveBox {
        position: absolute;
        top: 50%;
        width: 100%;
        transform: translateY(-50%);
        .title {
          text-align: center;
          width: 100%;
          font-size: 24px;
          .ContactBox {
            display: flex;
            width: 800px;
            margin: 0 auto;
            justify-content: space-around;
            margin: 50px auto;
          }
          p {
            padding: 20px;
            line-height: 32px;
          }
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
// 小于900
@media screen and (max-width: 900px) {
  .VitaBox {
    .swiper {
      // 第二个页面
      .SwiperTwo {
        .TwoBox {
          .title {
            font-size: 24px;
            .iconBox {
              width: 700px;
              margin: 40px auto;
            }
            .textBox {
              font-size: 20px;
              line-height: 36px;
            }
          }
        }
      }
      // 第三个页面
      .SwiperThree {
        .ThreeBox {
          .title {
            font-size: 24px;
            .iconBox {
              width: 700px;
              margin: 40px auto;
            }
            .text {
              font-size: 24px;
            }
          }
        }
      }
      // 第四个页面
      .SwiperFour {
        .FourBox {
          .title {
            font-size: 24px;
            .proBox {
              .box-card {
                width: 50%;
                margin: 20px;
                text-align: left;
                font-size: 22px;
                p {
                  padding: 5px 0;
                }
              }
            }
          }
        }
      }
      // .第五个页面
      .SwiperFive {
        .FiveBox {
          .title {
            font-size: 24px;
            .ContactBox {
              width: 700px;
            }
            p {
              padding: 20px;
              line-height: 32px;
            }
          }
        }
      }
    }
  }
}
// 小于800
@media screen and (max-width: 800px) {
  .VitaBox {
    .swiper {
      // 第二个页面
      .SwiperTwo {
        .TwoBox {
          .title {
            font-size: 22px;
            .iconBox {
              width: 500px;
              margin: 40px auto;
            }
            .textBox {
              font-size: 18px;
              line-height: 32px;
            }
          }
        }
      }
      // 第三个页面
      .SwiperThree {
        .ThreeBox {
          .title {
            font-size: 22px;
            .iconBox {
              width: 500px;
              margin: 40px auto;
            }
            .text {
              font-size: 22px;
            }
          }
        }
      }
      // 第四个页面
      .SwiperFour {
        .FourBox {
          .title {
            font-size: 22px;
            .proBox {
              .box-card {
                margin: 16px;
                font-size: 20px;
                p {
                  padding: 5px 0;
                }
              }
            }
          }
        }
      }
      // .第五个页面
      .SwiperFive {
        .FiveBox {
          .title {
            font-size: 22px;
            .ContactBox {
              width: 500px;
            }
            p {
              padding: 20px;
              line-height: 32px;
            }
          }
        }
      }
    }
  }
}
// 小于600
@media screen and (max-width: 600px) {
  .iconfont {
    font-size: 52px;
  }
  .VitaBox {
    .swiper {
      // 第二个页面
      .SwiperTwo {
        .TwoBox {
          .title {
            font-size: 22px;
            .iconBox {
              width: 400px;
              margin: 40px auto;
            }
            .textBox {
              font-size: 18px;
              line-height: 32px;
            }
          }
        }
      }
      // 第三个页面
      .SwiperThree {
        .ThreeBox {
          .title {
            font-size: 22px;
            .iconBox {
              width: 380px;
              margin: 40px auto;
            }
            .text {
              font-size: 20px;
            }
          }
        }
      }
      // 第四个页面
      .SwiperFour {
        .FourBox {
          .title {
            font-size: 22px;
            .proBox {
              display: block;
              padding: 10px;
              .box-card {
                width: 100%;
                margin: 0;
                margin-top: 10px;
                font-size: 18px;
                p {
                  padding: 5px 0;
                }
              }
            }
          }
        }
      }
      // .第五个页面
      .SwiperFive {
        .FiveBox {
          .title {
            font-size: 22px;
            .ContactBox {
              width: 400px;
            }
            p {
              font-size: 22px;
              padding: 20px;
              line-height: 32px;
            }
          }
        }
      }
    }
  }
}
// 小于400
@media screen and (max-width: 400px) {
  .iconfont {
    font-size: 42px;
  }
  .VitaBox {
    .swiper {
      // 第二个页面
      .SwiperTwo {
        .TwoBox {
          .title {
            font-size: 22px;
            .iconBox {
              width: 300px;
              margin: 20px auto;
            }
            .textBox {
              font-size: 16px;
              line-height: 32px;
            }
          }
        }
      }
      // 第三个页面
      .SwiperThree {
        .ThreeBox {
          .title {
            font-size: 22px;
            .iconBox {
              width: 300px;
              margin: 20px auto;
            }
            .text {
              font-size: 18px;
            }
          }
        }
      }
      // 第四个页面
      .SwiperFour {
        .FourBox {
          .title {
            font-size: 22px;
            .proBox {
              display: block;
              padding: 5px;
              .box-card {
                width: 100%;
                margin: 0;
                margin-top: 5px;
                font-size: 12px;
                p {
                  padding: 2px 0;
                }
              }
            }
          }
        }
      }
      // .第五个页面
      .SwiperFive {
        .FiveBox {
          .title {
            font-size: 22px;
            .ContactBox {
              width: 300px;
            }
            p {
              font-size: 18px;
              padding: 10px;
              line-height: 32px;
            }
          }
        }
      }
    }
  }
}
</style>
