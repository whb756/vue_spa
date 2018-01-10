<template>
	<div class="home" >
		<Search @toparent="parentev"></Search>
		<Swipe :msgs="msg"></Swipe>
		<mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" ref="loadmore">
		<ul  v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
		<li v-for="(item,index) in items">
			<h3 :title="置顶" class="title">{{item.title}}</h3>
			<div id="content">
				<img :src="item.author.avatar_url"/>
				<div class="info">
				<span class="name">{{item.author.loginname}}</span>
				<sapn class="status"> 
					<b>{{item.reply_count}}</b>
                     /{{item.visit_count}}
				</sapn>
				</div>
			</div>
		</li>
		</ul>
		 <div slot="top" class="mint-loadmore-top">
      	<span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
      	<span v-show="topStatus === 'loading'">加载中。。。。</span>
    	</div>
		</mt-loadmore>
		<!-- <ul>
			<li v-for="a in items">{{a.title}}</li>
		</ul> -->
	</div>
</template>

<script>
import Swipe from '@/components/Swipe'
import Search from '@/components/Search'
import { Loadmore } from 'mint-ui'
import axios from 'axios'
export default {
	name: 'home',
	data () {
		return {
			msg: 'Welcome to Your Vue.js App',
			list:[1,2,3,4,5],
			items:[],
			 topStatus: ''
		}
	},
	components:{
		Swipe,
		Search,
		'mt-loadmore':Loadmore 
	},
	// mounted:function(){
	// 	this.fetchData()
	// },
	methods:{
		handleTopChange(status) {
        this.topStatus = status;
      },
		loadTop() {
	// 加载更多数据
	this.$refs.loadmore.onTopLoaded();
	this.fetchData()
},
	loadMore() {
  this.loading = true;
  setTimeout(() =>{
    let last = this.list[this.list.length - 1];
    for (let i = 1; i <= 10; i++) {
      this.list.push(last + i);
    }
    this.loading = false;
  }, 2500);
},
	parentev(){
		alert("子组件触发了我")
	},
	fetchData (){
		let  c=this.list.length+1;
		console.log(c)
		this.list = this.list.concat(c)
		console.log(this.list)
	}
	},
	mounted () {
		// axios.get('http://localhost:3000/').then((res)=>{
		// 	console.log('数据3000:',res.data)
		// })

		// if(localStorage.name && JSON.parse(localStorage.name).name == '冰花'){
		// 	alert('冰花登陆了')
		// 	return
		// }
		
		axios.get('https://cnodejs.org/api/v1/topics')
		.then((res)=>{
			let result=res.data
			this.items=result.data
	
			console.log('数据:',res.data.data)
			if(res.data.resultCode == 0){
				var obj = {
					name:'冰花'
				}
				window.localStorage.setItem('name',JSON.stringify(obj))
			}
		});
		navigator.geolocation.getCurrentPosition(function(position){
			console.log('定位：',position)
		})
	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home li{
	/* height: 50px; */
	/* line-height: 30px; */
	border-top:1px solid blanchedalmond;
}
.Swipe{
	margin-top: 5px;
}
.title{
	text-overflow:ellipsis;
	white-space:nowrap;
	font-size: 16px;
	margin-left: 10px;
	overflow: hidden;
}
#content{
	
	padding-top: 10px;
	display: flex;
}
#content img{
	border-radius: 50%;
	margin-right: 10px;
	border: 1px solid black;
	width: 40px;
	height: 40px;
}
.info{
display: flex;
width: 100%;
}
.info span{
	flex: 1;
}
</style>
