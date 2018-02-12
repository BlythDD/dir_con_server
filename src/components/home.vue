/**
* Created by lsp on 2018/2/11.
* 首页
*/

<template>
  <div>
    <slide_view></slide_view>
    <div class="home_cont">
      <div class="user_entry_box">
        <ul class="user_entry text_cen">
          <li class="items" v-for="fun in fun_list">
            <router-link :to="fun.path" class="pull_r sign_in fn_14 col_58">
              <div class="icon_box" :style="{borderColor: fun.color}">
                <img class="icon" :src="fun.imgSrc" alt="">
              </div>
              <p class="tit mgt_10" :style="{color:fun.color}">{{ fun.tit }}</p>
            </router-link>

          </li>
        </ul>
      </div>


    </div>


  </div>

</template>

<style>
  .user_entry_box{margin:0 auto;width: 32rem;}
  .user_entry{width: 100%;margin: 0 auto;display: flex;justify-content: space-around;}
  .user_entry .items{}
  .user_entry .icon_box{margin:0 auto;width: 5.4rem;height: 5.4rem;line-height:5.4rem;border:1px solid #fff;border-radius: 50%;text-align: center;}
  .user_entry .icon{width: 66%;}


</style>


<script>
  import icon1 from '@/assets/images/site_base/logo.png';

  export default {
    name: 'userReg',
    data () {
      return {
        fun_list:[
          {
            tit: "发布调货信息",
            imgSrc : icon1,
            color : '#47556f',
            path : '/reg',
          },{
            tit: "立即抢单",
            imgSrc : icon1,
            color : '#e6102c',
            path : '/reg',
          },{
            tit: "立即竞价",
            imgSrc : icon1,
            color : '#fea203',
            path : '/reg',
          },{
            tit: "发布出售信息",
            imgSrc : icon1,
            color : '#009ae1',
            path : '/reg',
          }
        ],
      }
    },
    methods : {
//      link_btn: function(event){
//        $(".h1").click(function(){
//          console.log("444")
//        })
////        window.open("www.baidu.com");
//      },
//      role_toggle(index,view){
//        this.active = index;
//        this.tabs_role_cont = view;
//      },
//      realName: function(event){
//
//      },
    }
  }

</script>
