<template>
  <div id="app">
  <div class="bottomBar">
    <Tabbar>
     <TabItem id="" ><div @click="home"><img src="./assets/首页.png"/><div class="tab">首页</div></div></TabItem>
     <TabItem id=""><router-link to="/Find"><img src="./assets/发现.png"/><div class="tab">发现</div></router-link></TabItem>
     <TabItem id=""><div><img src="./assets/订单.png"/><div class="tab">订单</div></div ></TabItem>
     <TabItem id=""><div><img src="./assets/我 的.png"/><div class="tab">我的</div></div ></TabItem>
   </Tabbar>
  </div>
  
  <router-view></router-view>
  </div>
  
</template>

<script>
import { Tabbar, TabItem } from 'mint-ui'
export default {
  name: 'app',
  data () {
   return {
      value:''
   }
  },
  components:{
    Tabbar, 
    TabItem
  },
  methods:{
    home:function(){
      this.$router.push({
        path:'/'
      })
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
   font-size: 16px; 
  color: #2c3e50; 
 /* margin-top: 60px; */
}
.bottomBar{
  position: fixed;
  bottom: 0;
  width: 10rem;
}
.bottomBar img{
width: 0.64rem;
height: 0.64rem;
margin-bottom: 5px;
}
.tab{
  font-size: 0.32rem;
}


</style>
