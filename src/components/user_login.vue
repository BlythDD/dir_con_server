/**
* Created by lsp on 2018/2/8.
* login.page
*/

<template>
  <div>
    <div class="product_box col_64 mgt_20 text_cen">
      <div class="logo_box">
        <img :src="logoSrc" alt="" class="logo_icon">
      </div>
      <p class="title mgt_6 fn_24 fn_bold">空调大师</p>
      <p class="des mgt_6 fn_14 col_96">空调问题就上空调大师</p>
    </div>
    <div class="lgn_msg mgt_50 text_cen">
      <div class="lgn_form_box">
        <ul class="reg_list fn_16 col_58">
          <li class="items">
            <span class="tit_icon">
              <img src="" alt="">
            </span>
            <input type="number" class="input_tel" placeholder="请输入手机号码">
          </li>
          <li class="items">
            <span class="tit_icon">
              <img src="" alt="">
            </span>
            <input type="text" class="input_pwd" placeholder="请输入密码">
          </li>
        </ul>
        <div class="btn btn_solid btn_submit mgt_20">立即登录</div>

        <p class="mgt_20 clear">
          <router-link to="/" class="pull_l sign_in fn_16 col_58">忘记密码？</router-link>
          <router-link to="/reg" class="pull_r sign_in fn_16 col_58">注册</router-link>
        </p>
      </div>


    </div>
  </div>


</template>


<style>
  .product_box {
    width: 100%;
  }

  .logo_box {
    margin: 0 auto;
    width: 12rem;
    height: 12rem;
    text-align: center;
    line-height: 12rem;
    border-radius: 50%;
    border: 1px solid #c2c6cf;
  }

  .logo_box .logo_icon {
    width: 60%;
  }

  .lgn_form_box{
    margin:0 auto;width:29rem;
  }

  .items .tit_icon {
    display: inline-block;
    width: 2.4rem;
    height: 2.8rem;
    border: 1px solid #ccc;
    vertical-align: middle;
  }

  .items {
    position: relative;
    display: flex;
    justify-content: flex-start;
    padding: .4rem .4rem;
    border-bottom: 1px solid #c1c1c1;
  }

  .items {
    margin-top: 1rem;
  }

  .items input {
    display: inline-block;
    width: 16rem;
    padding: .2rem 1rem;
    height: 3rem;
    line-height: 3rem;
    font-size: 1.4rem;
    border: 0;
    vertical-align: middle;
  }
  .btn_submit{padding:1rem 3rem;font-size:1.8rem;border-radius: .1rem;}

</style>


<script>
  import logo from '@/assets/images/site_base/logo.png';

  export default {
    name: 'userLogin',
    data () {
      return {
//        logoSrc: './assets/images/site_base/logo.png',
        logoSrc: logo,
      }
    },
    methods: {

    }
  }

</script>
