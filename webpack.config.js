const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 模式: 生产环境
  mode:'production',
  // 入口
  entry:{
    app:path.resolve(__dirname,'src/index.js')
  },
  // 出口(打包生成js)
  output:{
    filename:'static/js/[name].bundle.js',
    path:path.resolve(__dirname,'dist')
  },
  // 模块加载器
  module:{
    rules:[
      //处理ES6
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      //处理CSS
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // 多个loader从右到左处理
      },
      //处理图片
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: 'static/img/[name].[hash:7].[ext]' // 相对于output.path
        }
      }
    ]
  },
  // 插件
  plugins:[
    new HtmlWebpackPlugin({
      template:'index.html',//将那个页面作为模板页面处理
      filename:'index.html'//生成页面（在output指定的path下）
    }) 
  ],
  //配置开发服务器
  devServer: {
    open: true, // 自动打开浏览器
    quiet: true, // 不做太多日志输出
  },

  //配置开启source-map调试
  devtool: 'cheap-module-eval-source-map',//提示那个文件哪一行出了问题
  

}