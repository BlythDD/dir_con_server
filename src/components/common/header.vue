<template id="app">
  <div>
      <div v-if="loginstatic.type==1" class="clearfix font033 header_weixinBox       backgroundColorF3F3FA border_bottom">
           <div class="clearfix fl header_weixinPic" onclick="window.history.back();"></div>
           <div class="fl textCenter header_weixinTitle">
               <span class="color333333">{{loginstatic.title}}</span>
           </div>
       </div>
       <div v-else>
        <div class="none">
          <img src="" width="0" height="0"/>
        </div>
        <div class="mainContent">
          <div class="header clearfix">
               <a href="" class="logo"></a>
               <a href="invest/userDraw" v-if="loginstatic.static" class="userDraw"></a>
                <p class="headeLogin" v-else>
                    <a class="font029" href="user/login">{{loginstatic.static}} 登录</a>
                </p>
          </div>
          <div style="display:none;"><img src="" width="0" height="0" />
          </div>
       </div>
     </div>
   </div>
</template>
<script>
export default {
  name: 'commonheader',
  props: ['loginstatic'],
  data () {
    return {
    }
  }
}
</script>
