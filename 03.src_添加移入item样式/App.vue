<template>
<div class="todo-container">
  <div class="todo-wrap">
     <Header :addTodo='addTodo'/>
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
          {id:1,title:'A',completed:false},
          {id:2,title:'B',completed:true},
          {id:3,title:'C',completed:false},
          {id:4,title:'D',completed:true},
          {id:5,title:'E',completed:true},
        ]
      }
    },
    methods: {
        addTodo(todo) {
          this.todos.unshift(todo)
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
