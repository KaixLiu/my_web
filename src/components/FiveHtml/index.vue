<template>
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
</template>

<script>
import Clipboard from 'clipboard'
import throttle from '@//assets/throttle.js'
import Vue from 'vue'
export default {
  name: 'FiveHtml',
  data () {
    return {
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
  created () {
    // this.LXW()
  },
  methods: {
    LXW: throttle(function (method) {
      if (method === 'weChat') {
        const clipboard = new Clipboard('.tag-weChat')
        clipboard.on('success', (e) => {
          // this.$message.success('微信号复制成功')
          Vue.prototype.$message({
            message: '微信号复制成功',
            type: 'success',
            duration: '800'
          })
          // 释放内存
          clipboard.destroy()
        })
        clipboard.on('error', (e) => {
          // 不支持复制
          Vue.prototype.$message({
            message: '该浏览器不支持复制',
            type: 'error'
          })
          // 释放内存
          clipboard.destroy()
        })
      } else if (method === 'QQ') {
        const clipboard = new Clipboard('.tag-QQ')
        clipboard.on('success', (e) => {
          Vue.prototype.$message({
            message: 'QQ号复制成功',
            type: 'success',
            duration: '800'
          })
          // 释放内存
          clipboard.destroy()
        })
        clipboard.on('error', (e) => {
          // 不支持复制
          Vue.prototype.$message({
            message: '该浏览器不支持复制',
            type: 'error'
          })
          // 释放内存
          clipboard.destroy()
        })
      } else if (method === 'Phone') {
        const clipboard = new Clipboard('.tag-Phone')
        clipboard.on('success', (e) => {
          Vue.prototype.$message({
            message: '手机号复制成功',
            type: 'success',
            duration: '800'
          })
          // 释放内存
          clipboard.destroy()
        })
        clipboard.on('error', (e) => {
          // 不支持复制
          Vue.prototype.$message({
            message: '该浏览器不支持复制',
            type: 'error'
          })
          // 释放内存
          clipboard.destroy()
        })
      } else if (method === 'email') {
        const clipboard = new Clipboard('.tag-email')
        clipboard.on('success', (e) => {
          Vue.prototype.$message({
            message: '邮箱号复制成功',
            type: 'success',
            duration: '800'
          })
          // 释放内存
          clipboard.destroy()
        })
        clipboard.on('error', (e) => {
          // 不支持复制
          Vue.prototype.$message({
            message: '该浏览器不支持复制',
            type: 'error'
          })
          // 释放内存
          clipboard.destroy()
        })
      }
    }, 800)
  }
}
</script>

<style lang="less" scoped>
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
        max-width: 800px;
        min-width: 300px;
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
// 小于900px
@media screen and (max-width: 900px) {
  .SwiperFive {
    .FiveBox {
      .title {
        font-size: 22px;
        .ContactBox {
          margin: 40px auto;
        }
      }
    }
  }
}
// 小于600px
@media screen and (max-width: 600px) {
}
// 小于400px
@media screen and (max-width: 400px) {
  .iconfont {
    font-size: 52px;
  }
  .SwiperFive {
    .FiveBox {
      .title {
        font-size: 20px;
        .ContactBox {
          margin: 20px auto;
        }
      }
      p {
        font-size: 18px;
      }
    }
  }
}
</style>
