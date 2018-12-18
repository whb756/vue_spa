<template>
  <div class="find">
    <h2>{{msg}}</h2>
    <Button type="default" @click="toast">点击弹出Toast</Button>
    <Button type="primary" @click="Lndicator">点击弹出indicator</Button>
    <Button type="danger" @click="messgbix">点击弹出indicator</Button>
    <Button type="default" @click="actionSheet">点击上拉Actionsheet</Button>
    <Button type="default" @click="popup">点击中部弹出Popup</Button>
    <Actionsheet :actions="list" v-model="sheetVisible" cancelText='点击取消'></Actionsheet>
    <Popup id="popup" v-model="popupVisible" popup-transition="popup-fade" position="right">更新成功</Popup>
  </div>
</template>

<script>
import { Button } from 'mint-ui';
import { Toast } from 'mint-ui';
import { Indicator } from 'mint-ui';
import { MessageBox } from 'mint-ui';
import { Actionsheet } from 'mint-ui';
import { Popup } from 'mint-ui';
export default {  
  name: 'Search',
  data () {
    return {
    msg:'发现页',
    list:[
      {
        name:'拍照123',
        method:this.getCamera
      },
      {
        name:'点击打开相册',
        method:this.getLibrary
      }
    ],
    sheetVisible: false,
    popupVisible:false
    }
  },
  components:{
    Button,
    Actionsheet,
    Popup
  },
  methods:{
    popup:function(){
      this.popupVisible=true
    },
    actionSheet: function(){
      this.sheetVisible = true;  
    },  
    getCamera: function(){  
      console.log("打开照相机")  
    },  
    getLibrary: function(){  
      console.log("打开相册")  
    },  
    toast:function(){
      Toast({
      message: '提示',
      position: 'bottom',
      duration: 5000
    })
    },
    Lndicator:function(){
      Indicator.open({
          text: '加载中...',
          spinnerType: 'fading-circle'
        })
      setTimeout(function(){Indicator.close()},2000)
    },
    messgbix:function(){
//      MessageBox.prompt('请输入姓名').then(({ value, action })=> {
//       //  if(value!==null&&value!==''){
//       //    MessageBox.alert("你输入的名字是："+value)
//       //  }else{
//       //    MessageBox.alert('请输入正确的名字')
//       //  }
//        MessageBox.alert("你输入的名字是："+value)
// });
       MessageBox.alert("确认执行此操作","警告")
    }
  }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#popup{
  width: 10rem;
  height: 50px;
  line-height: 50px;
}


</style>
