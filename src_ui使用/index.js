import Vue from 'vue'
import { Button } from 'mint-ui'
import App from './App'//引入自定义组件


//注册全局组件
Vue.component(Button.name, Button);

Vue.config.productionTip=false

new Vue({
   el:'#root',

   //注册局部组件
   components:{
     App:App
   },
   template:'<App/>'
})