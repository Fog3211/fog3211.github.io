(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{278:function(t,s,e){"use strict";e.r(s);var r=e(1),a=Object(r.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("p",[t._v("本文主要介绍前端如何优化页面加载速度，提高网站性能。\n")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("p",[t._v("网络请求速度对浏览器页面的渲染有着很大影响。")]),t._v(" "),t._m(4),t._v(" "),e("p",[t._v("首先，建立一次网络连接是需要时间成本的，因此我们应该在尽可能少的请求下获得所需要的资源。")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),e("p",[t._v("适当的利用缓存也可以提高网站性能。")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),e("ol",[t._m(9),t._v(" "),t._m(10),t._v(" "),e("li",[e("p",[t._v("图片压缩。尽量压缩图片，使用png等图片格式，减少矢量图、高清图等的使用，在这安利一个好用的网站 "),e("a",{attrs:{href:"https://tinypng.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("压缩图片"),e("OutboundLink")],1),t._v("。")])])]),t._v(" "),t._m(11),t._v(" "),e("p",[t._v("    众所周知js是单线程的，因此正常请求多个js文件是同步执行的。defer属性可以多线程加载js文件，HTML5的async属性也可以执行js文件的异步加载，区别是后者在加载js后立即执行，不会等待所有js加载完后再一起执行。")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),e("p",[t._v("DOM操作非常消耗性能，因为其会引起页面的重排和重绘。")]),t._v(" "),t._m(14),t._v(" "),e("p",[t._v("使用更高级的算法往往更好，比如一个排序算法使用两层for循环自然不如sort()。")]),t._v(" "),t._m(15),t._v(" "),e("p",[t._v("使用css预处理器不仅可以减少代码量，还可以优化选择器的书写，有利于dom节点的查找。")]),t._v(" "),t._m(16),t._v(" "),e("p",[t._v("做好函数的防抖与节流，不必要的定时器应当及时清除，另外应避免使用类似mousemove的事件监测。")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),e("p",[t._v("如果不标明宽高，浏览器在渲染图片时会一边下载图片一边计算大小，如果图片过多，会导致多次重绘。")]),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),e("p",[t._v("    以上便是前端性能优化的一些小技巧，通过这些，我们可以让网站页面“飞速”起来。但是这些还是远远不够的，对于越来越严苛的用户需求，前端的性能优化还任重而道远啊。")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍","aria-hidden":"true"}},[this._v("#")]),this._v(" 介绍")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("    一般来说，打开一个网页的速度对网站的访问量起着至关重要的影响。像我自己的话，如果打开一个网页的时间超过5秒（墙内的话），我可能会抱着试一试的想法刷新一下浏览器，如果这时网页加载依旧那么慢，我可能就没有兴趣等下去了。我想这对大多数人也比较适用吧。"),s("br"),this._v("\n由此可见，前端页面的加载速度对网站的推广还是十分重要的。下面我就来总结一下几种常见的性能优化方案。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"正文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#正文","aria-hidden":"true"}},[this._v("#")]),this._v(" 正文")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"网络请求方面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络请求方面","aria-hidden":"true"}},[this._v("#")]),this._v(" 网络请求方面")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"减少http请求数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#减少http请求数","aria-hidden":"true"}},[this._v("#")]),this._v(" 减少Http请求数")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[s("p",[this._v("合并js，css。通过前端打包工具（如webpack）我们可以将所需要的文件打包在一个js文件里，这样便大大减少了请求数。")])]),this._v(" "),s("li",[s("p",[this._v("使用雪碧图。将较小的图片或图标整合到一张雪碧图里也可以减少http请求数，也可以增加用户体验，常用的工具如CssSprite。")])]),this._v(" "),s("li",[s("p",[this._v("使用base64表示较为简单的图片。在webpack中就可以借助"),s("code",[this._v("url-loader")]),this._v("将较小的文件打包成base64格式。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存","aria-hidden":"true"}},[this._v("#")]),this._v(" 缓存")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[s("p",[this._v("DNS缓存。浏览器会在DNS解析步骤中消耗一定的时间，做好DNS的缓存也比较有用。")])]),this._v(" "),s("li",[s("p",[this._v("http缓存。也是给资源设定缓存时间，防止在有效的缓存时间内对资源进行重复的下载，从而提升整体网页的加载速度。")])]),this._v(" "),s("li",[s("p",[this._v("CDN（内容分发网络）。相当于要访问国外的某个库，而在国内每个城市都有该库的备份，那么就不需要再去国外请求资源了，直接请求国内的备份资源即可。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"资源压缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#资源压缩","aria-hidden":"true"}},[this._v("#")]),this._v(" 资源压缩")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("Gzip压缩。通过将html中重复的部分进行一个打包（类似混入）并进行压缩，浏览器解析html时在进行解压，可以大大减少html文件的体积。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("js混淆。通过webpack可以将js文件中的变量名改写为更简单的单个字符并去掉不必要的空格等，也可以减少请求资源的体积。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"异步加载js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异步加载js","aria-hidden":"true"}},[this._v("#")]),this._v(" 异步加载js")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"代码方面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码方面","aria-hidden":"true"}},[this._v("#")]),this._v(" 代码方面")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"减少dom操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#减少dom操作","aria-hidden":"true"}},[this._v("#")]),this._v(" 减少DOM操作")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"优化算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优化算法","aria-hidden":"true"}},[this._v("#")]),this._v(" 优化算法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"使用预处理器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用预处理器","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用预处理器")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"防抖节流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#防抖节流","aria-hidden":"true"}},[this._v("#")]),this._v(" 防抖节流")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"渲染方面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渲染方面","aria-hidden":"true"}},[this._v("#")]),this._v(" 渲染方面")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"css-js位置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-js位置","aria-hidden":"true"}},[this._v("#")]),this._v(" css,js位置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("css放在html头部，因为css会阻塞DOM渲染，先加载css，可以加快网页构建速度，还可以避免样式改变是页面的重排。"),s("br"),this._v("\njs放在body标签末尾，因为js文件加载的时候会阻塞dom树的渲染。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"减少重排和重绘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#减少重排和重绘","aria-hidden":"true"}},[this._v("#")]),this._v(" 减少重排和重绘")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("重排（reflow）:浏览器会使渲染树中受到影响的部分失效，并重新构造渲染树。这个过程称为重排。"),s("br"),this._v("\n重绘（repaint）:完成重排后，浏览器会重新绘制受影响的部分到屏幕,该过程称为重绘。"),s("br"),this._v("\n每次重排，浏览器就会重新计算页面元素的位置，因此，减少重排更有利于网页渲染速度的提升。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"标明宽度高度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标明宽度高度","aria-hidden":"true"}},[this._v("#")]),this._v(" 标明宽度高度")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("关于为什么要用外链样式，虽然看上去行内样式会减少http请求数，但外链的css可以被浏览器缓存，方便之后的访问，同时也是为了代码的可读性考虑。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[this._v("#")]),this._v(" 总结")])}],!1,null,null,null);s.default=a.exports}}]);