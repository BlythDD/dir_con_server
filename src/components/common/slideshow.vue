/**
* Created by lsp on 2018/2/11.
* 轮播图
*/

<template>
  <div>
    <div class="slide_box">

      <div class="swiper-container">
        <div class="swiper-pagination">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>

        </div>

      </div>
    </div>


  </div>

</template>


<style>
  .slide_box{width: 600px;
    height: 300px;
    border:14px solid #333;margin-bottom: 60px;}

  .swiper-container {
    width: 600px;
    height: 300px;
    border:14px solid #333;
  }
</style>

<script>


  import Swiper from '@/assets/plug_in/swiper/swiper-4.1.0.min';
  import '@/assets/plug_in/swiper/swiper-4.1.0.min.css';

  export default {
    name: 'userLogin',
    data () {
      return {

      }
    },
    methods(){
      var mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical',
        loop: true,

        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
//        navigation: {
//          nextEl: '.swiper-button-next',
//          prevEl: '.swiper-button-prev',
//        },

        // 如果需要滚动条
//        scrollbar: {
//          el: '.swiper-scrollbar',
//        },
      })
    }
  }






</script>
