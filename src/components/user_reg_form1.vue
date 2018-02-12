/**
* Created by lsp on 2018/2/11.
* 个人注册表单；
*/

<template>
  <div>
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
        <input type="text" class="input_code" placeholder="请输入验证码">
        <div class="get_code_img btn_hollow">发送验证码1</div>
      </li>
      <li class="items">
        <span class="tit_icon">
          <img src="" alt="">
        </span>
        <input type="text" class="input_pwd" placeholder="请输入密码">
      </li>
      <li class="items">
        <span class="tit_icon">
          <img src="" alt="">
        </span>
        <input type="text" class="input_pwds" placeholder="请再次输入密码">
      </li>
    </ul>
    <div class="user_ag mgt_14">
      <span class="check">
        <input type="hidden" name="user_ag" class="ag_input">

      </span>
      <span class="text col_57 fn_16">我已阅读并同意《<a href="javascript:;" class="col_main2">用户协议</a>》</span>
    </div>
    <div class="btn btn_solid btn_submit mgt_20">注册并登录</div>
  </div>

</template>

<style>

</style>

<script>
  export default {
    name: 'userReg',
    data () {
      return {

      }
    },
    methods : {
      realName: function(event){

      },

    }
  }

</script>
