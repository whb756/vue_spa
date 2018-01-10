<template>
  <div class="Swipe">
  <!-- <div style="color:red">{{msgs}}</div> -->
   <mt-swipe>
       <mt-swipeItem class="slide1">1</mt-swipeItem>
       <mt-swipeItem class="slide1">2</mt-swipeItem>
       <mt-swipeItem class="slide1">3</mt-swipeItem>
   </mt-swipe>
     
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui'
export default {
  name: 'Swipe',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props:['msgs'],
  components:{
    'mt-swipe':Swipe, 
    'mt-swipeItem':SwipeItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .Swipe{
        width: 10rem;
        height: 200px;
        font-size: 30px;
        text-align: center;
        color: #fff;
       
}
.slide1{
    background: #0089dc;
     line-height: 260px;
}
.slide2{
    background: #ffd705;
     line-height: 260px;
}
.slide3{
    background: #ff2d4b;
     line-height: 260px;
}
</style>
