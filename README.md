# 自定义Vue开发环境
## 1. 搭建基本开发环境
    1). 下载依赖包
        yarn add -D webpack webpack-cli
        yarn add -D html-webpack-plugin
        yarn add -D webpack-dev-server
        yarn add -D babel-loader @babel/core @babel/preset-env
        yarn add -D css-loader style-loader
        yarn add -D url-loader@2.3.0 file-loader@4.3.0
    
    2). webpack的基本配置: webpack.config.js
        module.exports = {
          mode: 'production|development'
          entry: {

          },
          output: {

          },
          module: {
            rules: [

            ]
          },
          plugins: [

          ],
          devServer: {

          },
          devtool: ''
        }

    3). 区分使用生产环境与开发环境
        使用生产环境:
            npm run build   ==> webpack
            1). 在内存中进行编译打包, 生成内存中的打包文件
            2). 保存到本地(在本地生成打包文件)   ===> 此时还不能通过浏览器来访问, 需要启动服务器运行
        使用开发环境
            npm run dev   ==> webpack-dev-server
            1). 在内存中进行编译打包, 生成内存中的打包文件
            2). 启动服务器, 运行内存中的打包文件   ===> 可以通过浏览器虚拟路径访问
## 2. vue单文件组件
    <template>
      <div>xxx</div>
    </template>
    <script>
      export default {
        props: []/{}
        data(){},
        computed: {}
        methods: {},
        watch: {}
        filters: {}
        directives: {}
        components: {}
      }
    </script>
    <style scoped>
    </style>
## 3. 组件化编码的基本流程
    1). 拆分界面, 抽取组件
    2). 编写静态组件
    3). 编写动态组件
        初始化数据, 动态显示初始化界面
        实现与用户交互功能

    设计data
        类型: [{id: 1, title: 'xxx', completed: false}]
        名称: todos
        位置: 如果只是哪个组件用, 交给它, 如果是哪些组件用, 交给共同的父组件
    
    关于状态数据的更新
        data数据定义在哪个组件, 更新数据的行为就定义在哪个组件
        如果子组件要更新父组件的数据, 调用父组件的更新函数来更新父组件的数据
        一个组件接收属性数据不要直接修改, 只是用来读取显示的
## 4. 组件间通信
    1). 组件通信的5种方式
        props
        vue的自定义事件
        全局事件总线
        slot
        vuex(后面单独讲)
    2). props:
        父子组件间通信的基本方式
        属性值的2大类型:
            一般/非函数: 父组件-->子组件
            函数: 子组件-->父组件
        问题: 
            隔层组件间传递: 必须逐层传递(麻烦)
            兄弟组件间: 必须借助父组件(麻烦)
    2). vue自定义事件
        给子组件标签绑定事件监听
        子组件向父组件的通信方式
        功能类似于function props
        不适合隔层组件和兄弟组件间的通信
    3). 全局事件总线
        利用vm对象的$on()/$emit()/$off()
        利用vm对象是组件对象的原型对象
        创建vm对象作为全局事件总线对象保存到Vue的原型对象上, 所有的组件对象都可以直接可见:
            Vue.prototype.$bus = new Vue()
            任意组件A可以通过this.$bus.$on()绑定监听接收数据
            任意组件B可以通过this.$bus.$emit()分发事件, 传递数据
    4). slot
        父组件向子组件通信
        通信是带数据的标签
        注意: 标签是在父组件中解析
    5). vuex
        多组件共享状态(数据的管理)
        组件间的关系也没有限制
        功能比事件总线强大, 更适用于vue项目
