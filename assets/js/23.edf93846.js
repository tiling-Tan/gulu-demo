(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{151:function(n,t,o){},272:function(n,t,o){"use strict";var e=o(151);o.n(e).a},293:function(n,t,o){"use strict";o.r(t);o(30);var e=o(0),l=o(154),s=o(48);e.a.use(l.a);var c={name:"toast-demos-3",components:{"g-button":s.a},data:function(){return{content:"\n<style>\n*{\n    box-sizing: border-box;\n}\n.gulu-toast {\n    z-index: 30 !important;\n}\n</style>\n\n<div>\n    <g-button @click=\"onClickButton\">上方弹出</g-button>\n</div>\nmethods: {\n    onClickButton() {\n        this.$toast('<strong><span style=\"color:yellow\">一行黄色加粗的文字</span></strong>', {\n            enableHtml: \"true\",\n            closeButton: {\n                text: '是黄色的',\n                callback: () => {\n                    console.log('好的')\n                }\n            }\n        })\n    }\n}".trim()}},methods:{onClickButton:function(){this.$toast('<strong><span style="color:yellow">一行黄色加粗的文字</span></strong>',{enableHtml:"true",closeButton:{text:"是黄色的",callback:function(){console.log("好的")}}})}}},a=(o(272),o(1)),u=Object(a.a)(c,(function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",[o("g-button",{on:{click:n.onClickButton}},[n._v("上方弹出")]),n._v(" "),o("h4",[n._v("代码")]),n._v(" "),o("pre",[o("code",[n._v(n._s(n.content))])])],1)}),[],!1,null,null,null);t.default=u.exports}}]);