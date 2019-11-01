(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{253:function(a,s,t){"use strict";t.r(s);var e=t(1),r=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"content"},[t("p",[a._v("本文将介绍如何使用ssh为git配置多个用户。\n")]),a._v(" "),t("h2",{attrs:{id:"介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍","aria-hidden":"true"}},[a._v("#")]),a._v(" 介绍")]),a._v(" "),t("p",[a._v("    Git作为一个版本控制工具，极大的提高了多人合作开发的效率，但是当我们进入公司以后，就需要使用新的git账号了（一般是在内网搭建的git社区），而这时我们又不想放弃自己本来的Git账户，那该怎么办呢？这时我们可以通过配置多个账户来解决问题。")]),a._v(" "),t("h2",{attrs:{id:"正文"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正文","aria-hidden":"true"}},[a._v("#")]),a._v(" 正文")]),a._v(" "),t("h3",{attrs:{id:"准备条件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备条件","aria-hidden":"true"}},[a._v("#")]),a._v(" 准备条件")]),a._v(" "),t("p",[a._v("假设我们需要3个git账号（"),t("code",[a._v("github.com")]),a._v("，"),t("code",[a._v("gitlab.com")]),a._v("，以及公司的社区版，这里假设以"),t("code",[a._v("192.168.0.0")]),a._v("为例）")]),a._v(" "),t("h3",{attrs:{id:"创建公钥和私钥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建公钥和私钥","aria-hidden":"true"}},[a._v("#")]),a._v(" 创建公钥和私钥")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 输入自己的邮箱")]),a._v("\nssh-keygen -t rsa -C "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"fog3211@163.com"')]),a._v("\n")])])]),t("p",[a._v("这时会看到:"),t("br"),a._v(" "),t("img",{attrs:{src:"https://img.fog3211.com/%5B$_G%7BX3__MJEMXL%7B21RV3H.png",alt:"avatar"}})]),a._v(" "),t("p",[a._v("然后提示我们为文件命名（回车的话是默认名字，对应一个账号的情况），对于多个账可以更具自己的爱好去命名。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("Enter "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("which")]),a._v(" to save the key "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("/c/Users/fog3211/.ssh/id_rsa"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(": /c/Users/fog3211/.ssh/id_rsa_github\n")])])]),t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),t("ol",[t("li",[a._v("这里需要写全路径，不然会在当前目录下创建文件")]),a._v(" "),t("li",[a._v(".ssh目录默认是隐藏的，需要选择显示隐藏文件夹。")])])]),a._v(" "),t("p",[a._v("然后就是输入密码阶段了（回车默认没有密码）")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://img.fog3211.com/Q%60S3X%7DU_H%7BT%7DB0%5BCF19M3GU.png",alt:"avatar"}})]),a._v(" "),t("p",[a._v("以上便创建好了公钥和私钥。")]),a._v(" "),t("h3",{attrs:{id:"设置公钥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置公钥","aria-hidden":"true"}},[a._v("#")]),a._v(" 设置公钥")]),a._v(" "),t("p",[a._v("这个很简单，登录网页版github或gitlab，在设置里找到SSH Keys，新建并粘贴刚才创建好的"),t("code",[a._v("id_rsa.pub")]),a._v("文件（用记事本打开即可）。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://img.fog3211.com/I7~0I1ZSBP8G9Y~%60B6B%7BXD.png",alt:"avatar"}}),a._v(" "),t("img",{attrs:{src:"https://img.fog3211.com/7%7DRO8I8RMBTI~3~122HIZMF.png",alt:"avatar"}})]),a._v(" "),t("h3",{attrs:{id:"管理公钥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#管理公钥","aria-hidden":"true"}},[a._v("#")]),a._v(" 管理公钥")]),a._v(" "),t("p",[a._v("在公钥的目录（/c/Users/fog3211/.ssh/）下面新建一个config文件(没有后缀名)，然后自己进行配置")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 配置文件参数")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Host : Host可以看作是一个你要识别的模式，对识别的模式，进行配置对应的的主机名和ssh文件")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# HostName : 要登录主机的主机名")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# User : 登录名")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# IdentityFile : 指明上面User对应的identityFile路径")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# gitlab")]),a._v("\nHost gitlab.com\n    HostName gitlab.com\n    User fog3211 \n    PreferredAuthentications publickey\n    IdentityFile ~/.ssh/id_rsa_gitlab\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# github")]),a._v("\nHost github.com\n    HostName github.com\n    User lisi\n    PreferredAuthentications publickey\n    IdentityFile ~/.ssh/id_rsa_github\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# local")]),a._v("\nHost 192.168.0.0\n    HostName 192.168.0.0\n    User zhangsan\n    PreferredAuthentications publickey\n    IdentityFile ~/.ssh/pica_gitlab\n\n")])])]),t("p",[a._v("    这里的配置文件会根据你访问的域名进行判断去使用哪一个私钥，而用户名的话一般是用于区分昵称和真名（公司的话一般都是真名拼音，自己用的话一般就是昵称的吧）")]),a._v(" "),t("h3",{attrs:{id:"添加及验证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加及验证","aria-hidden":"true"}},[a._v("#")]),a._v(" 添加及验证")]),a._v(" "),t("p",[a._v("    这时一般就ok了，但是ssh会有缓存，因此如果我们不是第一次使用git，那就需要清一下缓存。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("ssh-add -D\n")])])]),t("p",[a._v("如果有报错的话，提示"),t("code",[a._v("Could not open a connection to your authentication agent.")])]),a._v(" "),t("p",[a._v("输入以下命令并重复上一步即可")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("eval")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("ssh-agent -s"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("\n")])])]),t("p",[a._v("然后重新添加")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 对应自己的文件名")]),a._v("\nssh-add ~/.ssh/id_rsa\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#  查看添加结果 ")]),a._v("\nssh-add -l\n")])])]),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),t("p",[a._v("    之前都是自己使用一个git账号进行开发，自从进了公司之后才发现原来的很多习惯和配置都需要调整，像git配置就是这样，单个账号用习惯了再次添加的话会默认覆盖第一个，不过如果不是这样恐怕我也不会知道怎么去配置多用户吧。。。")])])}],!1,null,null,null);s.default=r.exports}}]);