(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{101:function(t,n,s){"use strict";var a=s(61);s.n(a).a},102:function(t,n,s){"use strict";var a=s(62);s.n(a).a},103:function(t,n,s){"use strict";var a=s(110),r=(s(55),s(106),s(107),s(54),s(53),s(93),function(t){var n=Object.keys(t),s=!0;return n.forEach((function(t){["span","offset"].includes(t)||(s=!1)})),s}),e={name:"GuluCol",props:{span:{type:[Number,String]},offset:{type:[Number,String]},ipad:{type:Object,validator:r},narrowPc:{type:Object,validator:r},pc:{type:Object,validator:r},widePc:{type:Object,validator:r}},data:function(){return{gutter:0}},methods:{creatClasses:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t)return[];var s=[];return t.span&&s.push("col-".concat(n).concat(t.span)),t.offset&&s.push("offset-".concat(n).concat(t.offset)),s}},computed:{colClass:function(){var t=this.span,n=this.offset,s=this.ipad,r=this.narrowPc,e=this.pc,c=this.widePc,i=this.creatClasses;return[].concat(Object(a.a)(i({span:t,offset:n})),Object(a.a)(i(s,"ipad-")),Object(a.a)(i(r,"narrow-pc-")),Object(a.a)(i(e,"pc-")),Object(a.a)(i(c,"wide-pc-")))},colStyle:function(){var t=this.gutter;return{paddingLeft:t/2+"px",paddingRight:t/2+"px"}}}},c=(s(102),s(1)),i=Object(c.a)(e,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"col",class:this.colClass,style:this.colStyle},[this._t("default")],2)}),[],!1,null,"b5932b14",null);n.a=i.exports},104:function(t,n,s){"use strict";s(53),s(54),s(29),s(55);var a={name:"GuluRow",props:{gutter:{type:[Number,String]},align:{type:String,validator:function(t){return["left","right","center"].indexOf(t)>=0}}},computed:{rowStyle:function(){var t=this.gutter;return{marginLeft:-t/2+"px",marginRight:-t/2+"px"}},rowClass:function(){var t=this.align;return[t&&"align-".concat(t)]}},mounted:function(){var t=this;this.$children.forEach((function(n){n.gutter=t.gutter}))}},r=(s(101),s(1)),e=Object(r.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row",class:this.rowClass,style:this.rowStyle},[this._t("default")],2)}),[],!1,null,"f034ec0a",null);n.a=e.exports},286:function(t,n,s){"use strict";s.r(n);s(30);var a=s(104),r=s(103),e={name:"Grid-demos-2",components:{"g-row":a.a,"g-col":r.a},data:function(){return{content:'\n*{\n    box-sizing: border-box;\n}\n<g-row class="Row" gutter="10">\n    <g-col span="8">\n        <div class="Col">8</div>\n    </g-col>\n    <g-col span="8">\n        <div class="Col">8</div>\n    </g-col>\n    <g-col span="8">\n        <div class="Col">8</div>\n    </g-col>\n</g-row>\n<g-row class="Row" gutter="10">\n    <g-col span="6">\n        <div class="Col">6</div>\n    </g-col>\n    <g-col span="6">\n        <div class="Col">6</div>\n    </g-col>\n    <g-col span="6">\n        <div class="Col">6</div>\n    </g-col>\n    <g-col span="6">\n        <div class="Col">6</div>\n    </g-col>\n</g-row>\n'.trim()}}},c=s(1),i=Object(c.a)(e,(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",[s("g-row",{staticClass:"Row",attrs:{gutter:"10"}},[s("g-col",{attrs:{span:"8"}},[s("div",{staticClass:"Col"},[t._v("8")])]),t._v(" "),s("g-col",{attrs:{span:"8"}},[s("div",{staticClass:"Col"},[t._v("8")])]),t._v(" "),s("g-col",{attrs:{span:"8"}},[s("div",{staticClass:"Col"},[t._v("8")])])],1),t._v(" "),s("g-row",{staticClass:"Row",attrs:{gutter:"10"}},[s("g-col",{attrs:{span:"6"}},[s("div",{staticClass:"Col"},[t._v("6")])]),t._v(" "),s("g-col",{attrs:{span:"6"}},[s("div",{staticClass:"Col"},[t._v("6")])]),t._v(" "),s("g-col",{attrs:{span:"6"}},[s("div",{staticClass:"Col"},[t._v("6")])]),t._v(" "),s("g-col",{attrs:{span:"6"}},[s("div",{staticClass:"Col"},[t._v("6")])])],1),t._v(" "),s("h4",[t._v("代码")]),t._v(" "),s("pre",[s("code",[t._v(t._s(t.content))])])],1)}),[],!1,null,"75b827e6",null);n.default=i.exports},54:function(t,n,s){"use strict";var a=s(15),r=s(59)(0),e=s(28)([].forEach,!0);a(a.P+a.F*!e,"Array",{forEach:function(t){return r(this,t,arguments[1])}})},55:function(t,n,s){"use strict";var a=s(11),r=s(20),e=s(25),c=s(73),i=s(27),o=s(12),l=s(74).f,u=s(65).f,f=s(18).f,p=s(38).trim,v=a.Number,g=v,d=v.prototype,h="Number"==e(s(57)(d)),C="trim"in String.prototype,_=function(t){var n=i(t,!1);if("string"==typeof n&&n.length>2){var s,a,r,e=(n=C?n.trim():p(n,3)).charCodeAt(0);if(43===e||45===e){if(88===(s=n.charCodeAt(2))||120===s)return NaN}else if(48===e){switch(n.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+n}for(var c,o=n.slice(2),l=0,u=o.length;l<u;l++)if((c=o.charCodeAt(l))<48||c>r)return NaN;return parseInt(o,a)}}return+n};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var n=arguments.length<1?0:t,s=this;return s instanceof v&&(h?o((function(){d.valueOf.call(s)})):"Number"!=e(s))?c(new g(_(n)),s,v):_(n)};for(var b,w=s(13)?l(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),m=0;w.length>m;m++)r(g,b=w[m])&&!r(v,b)&&f(v,b,u(g,b));v.prototype=d,d.constructor=v,s(22)(a,"Number",v)}},61:function(t,n,s){},62:function(t,n,s){}}]);