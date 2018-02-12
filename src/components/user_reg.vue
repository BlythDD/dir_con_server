/**
* Created by lsp on 2018/2/11.
*/

<template>
  <div>
    <div class="product_box col_64 mgt_20 text_cen">
      <div class="logo_box">
        <img :src="logoSrc" alt="" class="logo_icon">
      </div>
      <p class="title mgt_6 fn_22 fn_bold">空调大师</p>
      <p class="des mgt_4 fn_12 col_96">空调问题就上空调大师</p>
    </div>
    <div class="reg_msg mbtn_submit mgt_22 text_cen">
      <ul class="role_list fn_16 col_main1">
        <li v-for="(tab_role,index) in tabs_role" :class="{active:active===index}" @click="role_toggle(index,tab_role.view)">
          {{ tab_role.item }}
        </li>
        <!--<li class="items">{{ role.item }}</li>-->
      </ul>
      <div class="reg_form_box">
        <component :is="tabs_role_cont" keep-alive></component>

        <p class="mgt_20 clear">
          <router-link to="/login" class="pull_r sign_in fn_16 col_58">登录</router-link>
        </p>
      </div>
    </div>
  </div>


</template>


<style>


  .product_box{width: 100%;}
  .logo_box{margin:0 auto; width:8rem;height:8rem;text-align:center;line-height:8rem;border-radius: 50%;border: 1px solid #c2c6cf;}
  .logo_box .logo_icon{width: 60%;}
  .reg_form_box,.role_list{margin:0 auto;width:29rem;}
  .role_list{display: flex;justify-content:space-around;height:3.2rem;line-height:3.2rem;border-radius:2px;border: 1px solid #4c5773;}
  .role_list>li{width:25%;padding: 0 .4rem;}
  .role_list>li + li{border-left:1px solid #4c5773;}
  .role_list .active{color: #fff;background-color: #4c5773;}

  .reg_list{}
  .items .tit_icon{display: inline-block;width: 2.4rem;height: 2.8rem;border:1px solid #ccc;vertical-align: middle;}
  .items{position:relative;display:flex;justify-content:flex-start;padding:.4rem .4rem;border-bottom: 1px solid #c1c1c1;}
  .items{margin-top: 1rem;}
  .items input{display:inline-block;width: 16rem;padding:.2rem 1rem;height:3rem;line-height: 3rem;font-size:1.4rem;border:0;vertical-align: middle;}
  .items .get_code_img{position: absolute;top:.2rem;right: 0;padding:.8rem 1.4rem;}
  .items .input_real{background-color: #fff;}
  .items .real_name{position: absolute;top:.2rem;right: 0;padding:.8rem 1.4rem;border:1px solid #000000;}

  .user_ag{text-align: left;}
  .user_ag .check{display: inline-block;width:1.4rem;height: 1.4rem;border:1px solid #333;vertical-align: middle;}
  .user_ag .text{vertical-align: middle;}
  .btn_submit{padding:1rem 3rem;font-size:1.8rem;border-radius: .1rem;}

</style>


<script>
  import logo from '@/assets/images/site_base/logo.png';
  import regForm1 from '@/components/user_reg_form1';
  import regForm2 from '@/components/user_reg_form2';
  import regForm3 from '@/components/user_reg_form3';
  import regForm4 from '@/components/user_reg_form4';

  export default {
    name: 'userReg',
    data () {
      return {
//        logoSrc: './assets/images/site_base/logo.png',
        logoSrc : logo,
        active: 0,
        tabs_role_cont: regForm3,
        tabs_role:[
          {
            item: "个人",
            view : regForm1
          },{
            item: "维修师傅",
            view : regForm2
          },{
            item : "经销商",
            view : regForm3
          },{
            item : "厂商",
            view : regForm4
          }

        ],
      }
    },
    methods : {
      link_btn: function(event){
        $(".h1").click(function(){
          console.log("444")
        })
//        window.open("www.baidu.com");
      },
      role_toggle(index,view){
        this.active = index;
        this.tabs_role_cont = view;
      },
//      realName: function(event){
//
//      },
    }
  }

</script>
