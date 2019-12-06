<template>
<div class="todo-container">
  <div class="todo-wrap">
     <Header/>
     <List :todos='todos'/>
     <Footer/> 
  </div>
</div>
</template>

<script type="text/ecmascript-6">
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
  export default {
    data(){
      return {
        todos:[
          {id:1,title:'A',complated:false},
          {id:2,title:'B',complated:true},
          {id:3,title:'C',complated:false},
          {id:4,title:'D',complated:true},
        ]
      }
      
    },
  
  components:{
    Header,
    List,
    Footer
  }
  }
</script>

<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
