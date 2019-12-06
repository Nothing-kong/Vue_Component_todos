<template>
<div class="todo-container">
  <div class="todo-wrap">
     <Header :addTodo='addTodo'/>
     <List :todos='todos' :deleteTodo='deleteTodo'/>
     <Footer :todos="todos" :clearCompletedTodos='clearCompletedTodos' :checkAll='checkAll'/> 
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
    mounted(){
      setTimeout(() => {
       this.todos = JSON.parse(localStorage.getItem('todos_key') || '[]')
      }, 1000);
    },
    methods: {
        addTodo(todo) {
          this.todos.unshift(todo)
        },
        deleteTodo (index){
          this.todos.splice(index, 1)
        },
        clearCompletedTodos(){
          this.todos = this.todos.filter((todo,index) => !todo.completed)
        },
        checkAll(isCheckAll){
          this.todos.forEach( todo=> todo.completed = isCheckAll)
        },
    },
    watch:{
        todos:{
          deep:true,
          handler(value){
            localStorage.setItem('todos_key',JSON.stringify(value))
          }
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
