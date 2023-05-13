<template>
  <div class="swiper-slide SwiperOne">
    <div class="OneBox">
      <div class="title">
        <div class="avatar">
          <img src="@//img/avatar.jpg" alt="" />
        </div>
        <h2>刘铠熙</h2>
        <hr style="width: 80%; margin: 0 auto; marginTop: 10px" />
        <p>找工作的程序员</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OneHtml'
}
</script>

<style lang="less" scoped>
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
</style>
