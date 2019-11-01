(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{281:function(t,s,a){"use strict";a.r(s);var e=a(1),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("p",[t._v("本文用来记录入门React项目开发时的踩坑集合。\n")]),t._v(" "),t._m(0),t._v(" "),a("p",[t._v("    最近在学习react项目的开发，刚开始搭建项目结构时遇到了不少问题，特此记录一下。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),a("p",[t._v("解决方法：初始化git")]),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),a("p",[t._v("至于为什么react的配置与vue不同呢，按道理来说应该都只是webpack相关啊。去so上搜了一下大概说是因为脚手架开发人员增加的特殊限制。。。具体请移步"),a("a",{attrs:{href:"https://stackoverflow.com/questions/44114436/the-create-react-app-imports-restriction-outside-of-src-directory",target:"_blank",rel:"noopener noreferrer"}},[t._v("The create-react-app imports restriction outside of src directory"),a("OutboundLink")],1)]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._m(21),t._v(" "),a("p",[t._v("在打包时默认配置会生成map文件（用于定位bug），在上线产品中是没什么用处的，因此可以去掉.map文件优化打包速度。")]),t._v(" "),t._m(22),t._m(23),t._v(" "),a("p",[t._v("在使用redux的时候，在reducer中不能直接对state进行改变，因为它是引用类型，要进行对象的拷贝之后再进行赋值操作。如下")]),t._v(" "),t._m(24)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍","aria-hidden":"true"}},[this._v("#")]),this._v(" 介绍")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"正文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#正文","aria-hidden":"true"}},[this._v("#")]),this._v(" 正文")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"弹出webpack配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#弹出webpack配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 弹出webpack配置")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 借助CRA进行搭建")]),t._v("\ncreate-react-app react-demo\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装依赖")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" react-demo\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("    借助create-react-app开始快速的搭建项目的结构，但是我们往往想要自己进行webpack的配置，在vue中一般都是添加vue.config.js（vue-cli3.0），但是react好像并不能这样做，这时我们可以利用"),s("code",[this._v("eject")]),this._v("进行配置的弹出然后进行配置。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在"),s("code",[this._v("package.json")]),this._v("中可以看到"),s("code",[this._v("eject")]),this._v("的命令，使用"),s("code",[this._v("node")]),this._v("运行即可")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# 进行反编译")]),this._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("yarn")]),this._v(" run "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("eject")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("一般运行此命令是可以的，但总有不一般的时候，如下所示：\n"),s("img",{attrs:{src:"https://img.fog3211.com/40LKI$EG$@C$8V$G7%5DPI$D2.png",alt:"avatar"}}),this._v("\n这里报错的原因是在初始化项目之后，该项目并没有本地 git 仓库，而此项目目录下又有"),s("code",[this._v(".gitignore")]),this._v("文件，所以此时会向上级寻找未提交的项目。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'初始化项目'")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这样再去反编译就可以了,完成后多出来的配置目录："),s("br"),this._v(" "),s("img",{attrs:{src:"https://img.fog3211.com/SZCGB4IX2JDP@~V60Q%29U~RO.png",alt:"avatar"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),s("p",[this._v("千万不要按提示进行删除，尤其是vscode的git放弃所有更改，亲测巨大的坑。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("以下为反编译前后package.json的对比图(当然，后者多了很多依赖和配置这里没有截取)。\n"),s("img",{attrs:{src:"https://img.fog3211.com/M%5BVDAR6YR~EQUWFGRJ8R3@F.png",alt:"avatar"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"package-json依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#package-json依赖","aria-hidden":"true"}},[this._v("#")]),this._v(" package.json依赖")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("细心的小伙伴可能会发现package.json中只有"),s("code",[this._v("dependencies")]),this._v("而没有"),s("code",[this._v("devDependencies")]),this._v("，按常理来说应该把webpack以及各种loader放在dev里啊。具体原因我也查了一下，引用一下"),s("code",[this._v("kfll")]),this._v("的回答。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("blockquote",[a("p",[t._v("在这个解决方案里面，事情是这样的：")]),t._v(" "),a("ol",[a("li",[t._v("首先要理解 react 和 webpack 分到两组去没有必要（两者均只在开发及构建阶段用到")]),t._v(" "),a("li",[t._v("分到哪组去只是选择问题，问题都不是很大，以我经验来看，deps 是比较适合的："),a("br"),t._v("\ni. 感情上：没有运行阶段，构建是一等公民"),a("br"),t._v("\nii. 减少约定：由于社区滥用 NODE_ENV，很可能构建脚本一开始或执行之前就设置了 NODE_ENV=production，默认情况下 devDeps 会被忽略，全都放 > deps 能避免出错。")]),t._v(" "),a("li",[t._v("真要分，建议构建依赖放 deps，测试依赖放 devDeps")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("自"),s("code",[this._v("eject")]),this._v(" 1.0.8以后，脚手架开发人员就合并了两个依赖。总的来说就是因为放在dependencies里更保险也简单，因此做了一些不太符合规范的修改。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"webpack别名配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack别名配置","aria-hidden":"true"}},[this._v("#")]),this._v(" webpack别名配置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("用惯了vue默认配置的别名"),s("code",[this._v("@")]),this._v("后，在开发react也想偷个懒，那么怎么配置呢？")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意有两个点，这里和vue的配置不同")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("dir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'..'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// modules中添加")]),t._v("\nalias"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react-native'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react-native-web'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这是项目自带的")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"src路径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#src路径","aria-hidden":"true"}},[this._v("#")]),this._v(" src路径")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在src中直接使用图片路径无法显示图片（不会报错），不论相对路径还是绝对路径")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("img src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@/assets/logo.svg"')]),t._v(" className"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"logo"')]),t._v(" alt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"logo"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 正确写法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" logo "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/assets/logo.svg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("img src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("logo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" className"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"logo"')]),t._v(" alt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"logo"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"打包优化——map"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打包优化——map","aria-hidden":"true"}},[this._v("#")]),this._v(" 打包优化——map")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在webpack.config.js中搜索")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更改shouldUseSourceMap为false")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" shouldUseSourceMap "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更改devtool为false")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// devtool: isEnvProduction ?")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     shouldUseSourceMap ?")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     'source-map' :")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     false : isEnvDevelopment && 'cheap-module-source-map',")]),t._v("\ndevtool"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"redux视图更新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redux视图更新","aria-hidden":"true"}},[this._v("#")]),this._v(" redux视图更新")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("reducer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("state "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" action")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不能直接更改state，否则react会认为state没有改变导致视图不能更新")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" newState "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assign")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// newState的相关操作 ···")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" newState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" reducer\n")])])])}],!1,null,null,null);s.default=n.exports}}]);