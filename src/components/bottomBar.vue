<template>
  <div class="bottomBar">
   <Tabbar>
     <TabItem>外卖</TabItem>
     <TabItem>订单</TabItem>
     <TabItem>发现</TabItem>
     <TabItem>我的</TabItem>
   </Tabbar>
  </div>
</template>

<script>
import { Tabbar, TabItem } from 'mint-ui'
export default {
  name: 'bottomBar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
      
    }
  },
  components:{
    Header,
    Tabbar, 
    TabItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
