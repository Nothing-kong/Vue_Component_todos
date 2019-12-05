<template>
  <div>
    <h2>{{title}}</h2>
    <Blogs/>
  </div>
</template>

<script type="text/ecmascript-6">
import Blogs from './components/Blogs'
  export default {//配置对象
  data() {
    return {
      title:'App的组件22222'
    }
  },

  components:{
    Blogs
  }
  }
</script>

<style scoped>

 
</style>
