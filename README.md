# 1. Vue.js：预览
## 1.1 准备
### 下载 Vue.js 
`curl -O http://vuejs.org/js/vue.js`
### Browser-sync 安装与使用
Browsersync 能让浏览器实时、快速响应您的文件更改（html、js、css、sass、less等）并自动刷新页面
##### 1.安装 browser-sync
` npm install -g browser-sync`
##### 2.启动 BrowserSync
` browser-sync start --server --no-notify --files ='index.html, index.js'`
## 1.2 渲染
动态显示数据
```
var app =new Vue({
    el: '#app',
    data:{
        message:'Hello',
        title:'Title',
    },
})
```
### 1.3 绑定元素属性
给元素绑定一些属性，可以给元素添加一些指令，这些指令就是一些特别的属性，它们一般会用字母 v 作为前缀
```
<div v-bind:title="title">
{{ message }}
</div>
```
### 1.4 条件
`v-if` 是动态添加，当值为 false 时，是完全移除该元素，即 dom 树中不存在该元素。

`v-show` 仅是隐藏 / 显示，值为 false 时，该元素依旧存在于 dom 树中。若其原有样式设置了 display: none 则会导致其无法正常显示。
### 1.5 用户输入
`v-on` 事件监听指令
`v-on:click` 绑定一个 click ，点击事件
`v-on:click="logMessage"` 用 logMessage 这个方法来处理这个点击事件
`v-model` 实现双向数据绑定
`<input type="text" v-model="message">` 这个 input 元素跟应用里的 message 属性绑定到一块儿
### 1.6 循环
`v-for` 循环指令，指令需要以 site in sites 形式的特殊语法，sites 是源数据数组并且 site 是数组元素迭代的别名。  
```
<div id="app">
  <ol>
    <li v-for="site in sites">
      {{ site.name }}
    </li>
  </ol>
</div>
 
<script>
new Vue({
  el: '#app',
  data: {
    sites: [
      { name: 'Runoob' },
      { name: 'Google' },
      { name: 'Taobao' }
    ]
  }
})
</script>
```
### 1.7 组件
注册一个全局组件语法格式如下：  
`Vue.component(tagName, options)`  
tagName 为组件名，options 为配置选项。注册后，我们可以使用以下方式来调用组件：  
`<tagName></tagName>`  
注册一个简单的全局组件 runoob，并使用它：  
```
<div id="app">
    <commentli></commentli>
</div>
 
<script>
// 注册
Vue.component('commentli', {
  template: '<h1>自定义组件!</h1>'
})
// 创建根实例
new Vue({
  el: '#app'
})
</script>
```