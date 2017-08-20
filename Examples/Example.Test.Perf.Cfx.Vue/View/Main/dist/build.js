!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=8)}([function(t,e){t.exports=function(t,e,n,o){var r,u=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(r=t,u=t.default);var i="function"==typeof u?u.options:u;if(e&&(i.render=e.render,i.staticRenderFns=e.staticRenderFns),n&&(i._scopeId=n),o){var a=i.computed||(i.computed={});Object.keys(o).forEach(function(t){var e=o[t];a[t]=function(){return e}})}return{esModule:r,exports:u,options:i}}},function(t,e,n){n(15);var o=n(0)(n(6),n(23),null,null);t.exports=o.exports},function(t,e,n){n(16);var o=n(0)(n(4),n(24),null,null);t.exports=o.exports},function(t,e){t.exports=Vue},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(9),r=n.n(o),u=n(12),c=(n.n(u),n(13)),i=(n.n(c),n(1)),a=n.n(i),s=n(21),f=n.n(s),l=n(20),d=n.n(l),p={viewModel:Object};e.default={name:"app",props:p,components:{commandButton:a.a,counter:f.a,rawDisplay:d.a},data:function(){return this.viewModel},computed:{bigVm:function(){return r()(this.viewModel.Big,null,2)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{object:String}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(18);e.default={mixins:[o.a],props:{name:String}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n.n(o);e.default={props:{counter:Number,state:String,command:Object},components:{commandButton:r.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r=n.n(o),u=n(2),c=n.n(u);r.a.component("app",c.a)},function(t,e,n){t.exports={default:n(10),__esModule:!0}},function(t,e,n){var o=n(11),r=o.JSON||(o.JSON={stringify:JSON.stringify});t.exports=function(t){return r.stringify.apply(r,arguments)}},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){"use strict";const o={props:{command:{required:!0,validator:function(t){return"object"==typeof t}},arg:{type:Object,required:!1,default:null}},computed:{canExecute:function(){return null!==this.command&&this.command.CanExecuteValue}},watch:{"command.CanExecuteCount":function(){this.computeCanExecute()},arg:function(){this.computeCanExecute()}},methods:{computeCanExecute:function(){null!==this.command&&this.command.CanExecute(this.arg)},execute:function(){if(this.canExecute){var t=this.beforeCommand;t&&t(),this.command.Execute(this.arg)}}}};e.a=o},function(t,e,n){t.exports=n.p+"810a1b930979de83478be0f458b51dd8.png"},function(t,e,n){n(14);var o=n(0)(n(5),n(22),null,null);t.exports=o.exports},function(t,e,n){n(17);var o=n(0)(n(7),n(25),null,null);t.exports=o.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("pre",[t._v(t._s(t.object))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:t.execute}},[t._v(t._s(t.name))])},staticRenderFns:[]}},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fluid container",attrs:{id:"app"}},[t._m(0),t._v(" "),n("div",{staticClass:"list-group col-md-3"},[n("counter",{attrs:{counter:t.Counter,state:t.State,command:t.Count}})],1),t._v(" "),n("div",{staticClass:"list-group col-md-3"},[n("raw-display",{attrs:{object:t.bigVm}})],1),t._v(" "),n("command-button",{attrs:{command:t.BuildBigModel,name:"Build Big Model"}})],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"jumbotron logo",attrs:{id:"main-menu"}},[o("img",{attrs:{src:n(19)}}),t._v(" "),o("p",[t._v("Neutronium Demo Perf Application")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[t._v("\n        "+t._s(t.counter)+"\n    ")]),t._v(" "),n("div",[t._v("\n        "+t._s(t.state)+"\n    ")]),t._v(" "),n("command-button",{attrs:{command:t.command,name:"Run"}})],1)},staticRenderFns:[]}}]);