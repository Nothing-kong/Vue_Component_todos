<template>
<div class="todo-container">
  <div class="todo-wrap">
      <!-- 给当前header对象绑定自定义事件监听 -->
      <!--<Header @addTodo='addTodo'/>-->
      <Header ref='header'/>
      <List :todos='todos' :updateTodo='updateTodo'/>
      <Footer :todos="todos" :clearCompletedTodos='clearCompletedTodos' :checkAll='checkAll'>
        <input type="checkbox"  v-model="isCheckAll" slot='left'/>
        <span slot="middle">
          <span>已完成{{completeSize}}</span> / 全部{{todos.length}}
        </span>
        <button class="btn btn-danger" v-show="completeSize>0" @click='clearCompletedTodos' slot="right">清除已完成任务</button>
     </Footer> 
  </div>
</div>
</template>

<script type="text/ecmascript-6">
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import {saveTodos,readTodos} from './utils/storageUyils'//数据存储工具模块
  export default {//配置对象
    data(){
      return {
        todos:[
          
        ]
      }
    },
    computed: {
      completeSize(){
        return this.todos.reduce((preTotal,todo,index) => preTotal + (todo.completed ? 1 : 0),0)
      },

      isCheckAll:{
        get(){//读取属性会自动调用对应的getter方法
          return this.todos.length === this.completeSize && this.completeSize>0
        },
        set(value){//value代表当前勾选状态的Boolean值
          this.checkAll(value)
        }
      }
    },
    mounted(){
      
      //给header绑定事件监听
      this.$refs.header.$on('addTodo', this.addTodo)


      //通过globalEventBus绑定删除事件的事件监听
      this.globalEventBus.$on('deleteTodo',this.deleteTodo)

      //模拟异步读取数据
      setTimeout(() => {
        //读取local中保存的todos，更新数据
       this.todos = readTodos()//引用数据存储工具模块
      }, 1000);
    },
    methods: {
        addTodo(todo) {//添加
          this.todos.unshift(todo)
        },
        deleteTodo (index){//删除
          this.todos.splice(index, 1)
        },
        clearCompletedTodos(){//删除选中项
          this.todos = this.todos.filter((todo,index) => !todo.completed)
        },
        checkAll(isCheckAll){//Footer全选框
          this.todos.forEach( todo=> todo.completed = isCheckAll)
        },
        updateTodo(todo,isCheck){//更新状态
          todo.completed = isCheck
        }
    },
    watch:{
        todos:{
          deep:true,//深度监视（本事及内部所有层次的数据）
          // handler(value){
          //   saveTodos(value)
          // }
          handler:saveTodos
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
