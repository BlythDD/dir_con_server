<template>
  <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="str in listImg">
        <a :href="str.href">
          <img :src="str.src" />
        </a>
      </div>
      </div>
      <!-- <div class="swiper-pagination swiper-pagination-white"></div> -->
  </div>
</template>
<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
     export default {
         props: ['listImg'],
         mounted() {
             var swiper = new Swiper('.swiper-container', {
                 pagination: '.swiper-pagination',
                 paginationClickable: true,
                 loop: true,
                 speed: 600,
                 autoplay: 2000,
                 onTouchEnd: function() {
                     swiper.startAutoplay()
                 }
             });
         }
     }
</script>
<style lang="less">
    .swiper-container {
      position: relative;
      overflow: hidden;
      margin: 0px auto 0px auto;
      max-width: 750px;
      height:3rem;
        .swiper-wrapper {
            width: 100%;
            height: inherit;
        }
        .url{
            background-position: center;
            background-size: cover;
            width: 100%;
            height: 100%;
        }
        img {
            width: 100%;
            height: inherit;
        }
        .swiper-pagination-bullet {
            width:0.833rem;
            height: 0.833rem;
            display: inline-block;
            background: #7c5e53;
        }
    }
</style>
