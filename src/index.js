import Vue from 'vue'
import App from './App'//引入自定义组件


//注册全局组件
//Vue.component('App',App)

Vue.config.productionTip=false

Vue.prototype.globalEventBus = new Vue()

new Vue({
   el:'#root',
    
   //注册局部组件
   components:{
     App:App
   },
   template:'<App/>'
})