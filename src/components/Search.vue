<template>
  <div class="search" @click="childeev">
      <sea   v-model="value" cancel-text="取消" placeholder="搜索"></sea>
  </div>
</template>

<script>
import { Search } from 'mint-ui'
export default {
  name: 'Search',
  data () {
    return {
    msg:'发现页',
    value:''
    }
  },
  methods:{
    childeev:function(){
      alert("xiaohua")
      this.$emit('toparent')
    }
  },
  components:{
    'sea':Search
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search{
  height: 50px;

}
</style>