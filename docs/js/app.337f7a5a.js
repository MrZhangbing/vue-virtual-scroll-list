(function(e){function t(t){for(var n,a,o=t[0],l=t[1],c=t[2],u=0,h=[];u<o.length;u++)a=o[u],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&h.push(s[a][0]),s[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(h.length)h.shift()();return r.push.apply(r,c||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],n=!0,a=1;a<i.length;a++){var o=i[a];0!==s[o]&&(n=!1)}n&&(r.splice(t--,1),e=l(l.s=i[0]))}return e}var n={},a={app:0},s={app:0},r=[];function o(e){return l.p+"js/"+({"dynamic-size~fixed-size~horizontal~infinite-loading~keep-state":"dynamic-size~fixed-size~horizontal~infinite-loading~keep-state","dynamic-size":"dynamic-size","fixed-size":"fixed-size",horizontal:"horizontal","infinite-loading":"infinite-loading","keep-state":"keep-state"}[e]||e)+"."+{"dynamic-size~fixed-size~horizontal~infinite-loading~keep-state":"0372d99f","dynamic-size":"2109cee7","fixed-size":"92c37058",horizontal:"2cab1358","infinite-loading":"0325de6f","keep-state":"b1579677"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.e=function(e){var t=[],i={"dynamic-size":1,"fixed-size":1,horizontal:1,"infinite-loading":1,"keep-state":1};a[e]?t.push(a[e]):0!==a[e]&&i[e]&&t.push(a[e]=new Promise((function(t,i){for(var n="css/"+({"dynamic-size~fixed-size~horizontal~infinite-loading~keep-state":"dynamic-size~fixed-size~horizontal~infinite-loading~keep-state","dynamic-size":"dynamic-size","fixed-size":"fixed-size",horizontal:"horizontal","infinite-loading":"infinite-loading","keep-state":"keep-state"}[e]||e)+"."+{"dynamic-size~fixed-size~horizontal~infinite-loading~keep-state":"31d6cfe0","dynamic-size":"681ebb77","fixed-size":"840ec49f",horizontal:"c4223f3f","infinite-loading":"404ee309","keep-state":"067be71f"}[e]+".css",s=l.p+n,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var c=r[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===s))return t()}var h=document.getElementsByTagName("style");for(o=0;o<h.length;o++){c=h[o],u=c.getAttribute("data-href");if(u===n||u===s)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||s,r=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete a[e],d.parentNode.removeChild(d),i(r)},d.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[e]=0})));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,i){n=s[e]=[t,i]}));t.push(n[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=o(e);var h=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(d);var i=s[e];if(0!==i){if(i){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",h.name="ChunkLoadError",h.type=n,h.request=a,i[1](h)}s[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,i){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(i,n,function(t){return e[t]}.bind(null,n));return i},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var h=0;h<c.length;h++)t(c[h]);var d=u;r.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},2345:function(e,t,i){"use strict";var n=i("67ef"),a=i.n(n);a.a},2395:function(e,t,i){},"2f31":function(e,t,i){},"36ee":function(e,t,i){},"3f05":function(e,t,i){"use strict";t["a"]=function(){var e=(location.hash||"").substr(2);return e?"https://github.com/tangbc/vue-virtual-scroll-list/tree/master/example/src/views/".concat(e,"/Main.vue"):"https://github.com/tangbc/vue-virtual-scroll-list"}},"3f57":function(e,t,i){"use strict";var n=i("caf6"),a=i.n(n);a.a},"56d7":function(e,t,i){"use strict";i.r(t);i("b0c0"),i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("e832"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("div",{attrs:{id:"nav"}},[i("router-link",{attrs:{to:"/"}},[e._v("home")]),i("router-link",{attrs:{to:"/fixed-size"}},[e._v("fixed size")]),i("router-link",{attrs:{to:"/dynamic-size"}},[e._v("dynamic size")]),i("router-link",{attrs:{to:"/horizontal"}},[e._v("horizontal")]),i("router-link",{attrs:{to:"/infinite-loading"}},[e._v("infinite loading")]),i("router-link",{attrs:{to:"/keep-state"}},[e._v("keep state")])],1),i("router-view")],1)},s=[],r=(i("7c55"),i("2877")),o={},l=Object(r["a"])(o,a,s,!1,null,null,null),c=l.exports,u=(i("d3b7"),i("8c4f")),h=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"index"},[i("github-corner"),i("h2",{staticClass:"name"},[e._v("vue-virtual-scroll-list")]),e._m(0),i("h3",{staticClass:"title"},[e._v("What's news in v2.0")]),e._m(1),i("h3",{staticClass:"title"},[e._v("Todos")]),e._m(2)],1)},d=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"head"},[i("img",{attrs:{src:"https://nodei.co/npm/vue-virtual-scroll-list.png?downloads=true&downloadRank=true&stars=true"}})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[e._v("Support header, footer slot, horizontal direction.")]),i("li",[e._v("Code structure is more reasonable and good maintainability.")]),i("li",[e._v("Abandoned v-for mode and variable mode, all condition unify into one mode.")]),i("li",[e._v("Don't have to care about each item size, in sometimes it's difficult to know that.")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[e._v("Improve calculate offset efficient.")]),i("li",[e._v("Support page scroll, table layout, unit test.")]),i("li",[e._v("......")])])}],f={name:"index",data:function(){return{}}},p=f,g=(i("fb5f"),Object(r["a"])(p,h,d,!1,null,"fade3cce",null)),m=g.exports;n["a"].use(u["a"]);var v=[{path:"/",name:"home",component:m},{path:"/fixed-size",name:"fixed-size",component:function(){return Promise.all([i.e("dynamic-size~fixed-size~horizontal~infinite-loading~keep-state"),i.e("fixed-size")]).then(i.bind(null,"c227"))}},{path:"/dynamic-size",name:"dynamic-size",component:function(){return Promise.all([i.e("dynamic-size~fixed-size~horizontal~infinite-loading~keep-state"),i.e("dynamic-size")]).then(i.bind(null,"960e"))}},{path:"/horizontal",name:"horizontal",component:function(){return Promise.all([i.e("dynamic-size~fixed-size~horizontal~infinite-loading~keep-state"),i.e("horizontal")]).then(i.bind(null,"a2ab"))}},{path:"/infinite-loading",name:"infinite-loading",component:function(){return Promise.all([i.e("dynamic-size~fixed-size~horizontal~infinite-loading~keep-state"),i.e("infinite-loading")]).then(i.bind(null,"077d"))}},{path:"/keep-state",name:"keep-state",component:function(){return Promise.all([i.e("dynamic-size~fixed-size~horizontal~infinite-loading~keep-state"),i.e("keep-state")]).then(i.bind(null,"0786"))}}],y=new u["a"]({routes:v}),z=y,b=(i("99af"),i("d81d"),i("4ec9"),i("3ca3"),i("ddb0"),i("d4ec")),S=i("bee2"),x={FRONT:"FRONT",BEHIND:"BEHIND"},C={INIT:"INIT",FIXED:"FIXED",DYNAMIC:"DYNAMIC"},k=2,O=function(){function e(t,i){Object(b["a"])(this,e),this.init(t,i)}return Object(S["a"])(e,[{key:"init",value:function(e,t){this.param=e,this.updateHook=t,this.sizes=new Map,this.firstRangeTotalSize=0,this.firstRangeAverageSize=0,this.lastCalcIndex=0,this.fixedSizeValue=0,this.calcType=C.INIT,this.offset=0,this.direction="",this.range=Object.create(null),this.param&&this.checkRange(0,e.keeps-1)}},{key:"destroy",value:function(){this.init(null,null)}},{key:"getRange",value:function(){var e=Object.create(null);return e.start=this.range.start,e.end=this.range.end,e.padFront=this.range.padFront,e.padBehind=this.range.padBehind,e}},{key:"isBehind",value:function(){return this.direction===x.BEHIND}},{key:"isFront",value:function(){return this.direction===x.FRONT}},{key:"getOffset",value:function(e){return this.getIndexOffset(e)}},{key:"updateParam",value:function(e,t){this.param&&e in this.param&&(this.param[e]=t)}},{key:"saveSize",value:function(e,t){this.sizes.set(e,t),this.calcType===C.INIT?(this.fixedSizeValue=t,this.calcType=C.FIXED):this.calcType===C.FIXED&&this.fixedSizeValue!==t&&(this.calcType=C.DYNAMIC,delete this.fixedSizeValue),this.sizes.size<=this.param.keeps?(this.firstRangeTotalSize=this.firstRangeTotalSize+t,this.firstRangeAverageSize=Math.round(this.firstRangeTotalSize/this.sizes.size)):delete this.firstRangeTotalSize}},{key:"handleDataSourcesChange",value:function(){var e=this.range.start;this.isFront()?e-=k:this.isBehind()&&(e+=k),e=Math.max(e,0),this.updateRange(this.range.start,this.getEndByStart(e))}},{key:"handleSlotSizeChange",value:function(){this.handleDataSourcesChange()}},{key:"handleScroll",value:function(e){this.direction=e<this.offset?x.FRONT:x.BEHIND,this.offset=e,this.direction===x.FRONT?this.handleFront():this.direction===x.BEHIND&&this.handleBehind()}},{key:"handleFront",value:function(){var e=this.getScrollOvers();if(!(e>this.range.start)){var t=Math.max(e-this.param.buffer,0);this.checkRange(t,this.getEndByStart(t))}}},{key:"handleBehind",value:function(){var e=this.getScrollOvers();e<this.range.start+this.param.buffer||this.checkRange(e,this.getEndByStart(e))}},{key:"getScrollOvers",value:function(){var e=this.offset-this.param.slotHeaderSize;if(e<=0)return 0;if(this.isFixedType())return Math.floor(e/this.fixedSizeValue);var t=0,i=0,n=0,a=this.param.uniqueIds.length;while(t<=a){if(i=t+Math.floor((a-t)/2),n=this.getIndexOffset(i),n===e)return i;n<e?t=i+1:n>e&&(a=i-1)}return t>0?--t:0}},{key:"getIndexOffset",value:function(e){if(!e)return 0;for(var t=0,i=0,n=0;n<e;n++)i=this.sizes.get(this.param.uniqueIds[n]),t+=i||this.getEstimateSize();return this.lastCalcIndex=Math.max(this.lastCalcIndex,e-1),this.lastCalcIndex=Math.min(this.lastCalcIndex,this.getLastIndex()),t}},{key:"isFixedType",value:function(){return this.calcType===C.FIXED}},{key:"getLastIndex",value:function(){return this.param.uniqueIds.length-1}},{key:"checkRange",value:function(e,t){var i=this.param.keeps,n=this.param.uniqueIds.length;n<=i?(e=0,t=this.getLastIndex()):t-e<i-1&&(e=t-i+1),this.range.start!==e&&this.updateRange(e,t)}},{key:"updateRange",value:function(e,t){this.range.start=e,this.range.end=t,this.range.padFront=this.getPadFront(),this.range.padBehind=this.getPadBehind(),this.updateHook(this.getRange())}},{key:"getEndByStart",value:function(e){var t=e+this.param.keeps-1,i=Math.min(t,this.getLastIndex());return i}},{key:"getPadFront",value:function(){return this.isFixedType()?this.fixedSizeValue*this.range.start:this.getIndexOffset(this.range.start)}},{key:"getPadBehind",value:function(){var e=this.range.end,t=this.getLastIndex();return this.isFixedType()?(t-e)*this.fixedSizeValue:this.lastCalcIndex===t?this.getIndexOffset(t)-this.getIndexOffset(e):(t-e)*this.getEstimateSize()}},{key:"getEstimateSize",value:function(){return this.firstRangeAverageSize||this.param.size}}]),e}(),E=i("5530"),I=(i("a9e3"),{size:{type:Number},keeps:{type:Number,require:!0},dataKey:{type:String,require:!0},dataSources:{type:Array,require:!0},dataComponent:{type:Object,require:!0},extraProps:{type:Object},rootTag:{type:String,default:"div"},wrapTag:{type:String,default:"div"},wrapClass:{type:String,default:""},direction:{type:String,default:"vertical"},upperThreshold:{type:Number,default:0},lowerThreshold:{type:Number,default:0},start:{type:Number,default:0},offset:{type:Number,default:0},itemTag:{type:String,default:"div"},itemClass:{type:String,default:""},headerTag:{type:String,default:"div"},headerClass:{type:String,default:""},footerTag:{type:String,default:"div"},footerClass:{type:String,default:""},disabled:{type:Boolean,default:!1}}),T={event:{type:String},tag:{type:String},horizontal:{type:Boolean},source:{type:Object},component:{type:Object},uniqueKey:{type:String},extraProps:{type:Object}},_={event:{type:String},uniqueKey:{type:String},tag:{type:String},horizontal:{type:Boolean}},w={created:function(){this.hasInitial=!1,this.shapeKey=this.horizontal?"offsetWidth":"offsetHeight"},mounted:function(){var e=this;this.dispatchSizeChange(),"undefined"!==typeof ResizeObserver&&(this.resizeObserver=new ResizeObserver((function(){e.hasInitial?e.dispatchSizeChange():e.hasInitial=!0})),this.resizeObserver.observe(this.$el))},beforeDestroy:function(){this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null)},methods:{getCurrentSize:function(){return this.$el?this.$el[this.shapeKey]:0},dispatchSizeChange:function(){this.$parent.$emit(this.event,this.uniqueKey,this.getCurrentSize(),this.hasInitial)}}},R=n["a"].component("virtual-list-item",{mixins:[w],props:T,render:function(e){return e(this.tag,{role:"item"},[e(this.component,{props:Object(E["a"])({},this.extraProps,{source:this.source})})])}}),F=n["a"].component("virtual-list-slot",{mixins:[w],props:_,render:function(e){return e(this.tag,{attrs:{role:this.uniqueKey}},this.$slots.default)}}),P={ITEM:"item_resize",SLOT:"slot_resize"},j={HEADER:"header",FOOTER:"footer"},D="virtual-list",$=n["a"].component(D,{props:I,data:function(){return{range:null}},watch:{dataSources:function(e,t){e.length!==t.length&&(this.virtual.updateParam("uniqueIds",this.getUniqueIdFromDataSources()),this.virtual.handleDataSourcesChange())}},created:function(){this.isHorizontal="horizontal"===this.direction,this.directionKey=this.isHorizontal?"scrollLeft":"scrollTop",this.virtual=new O({size:this.size,slotHeaderSize:0,slotFooterSize:0,keeps:this.keeps,buffer:Math.round(this.keeps/3),uniqueIds:this.getUniqueIdFromDataSources()},this.onRangeChanged),this.range=this.virtual.getRange(),this.$on(P.ITEM,this.onItemResized),(this.$slots.header||this.$slots.footer)&&this.$on(P.SLOT,this.onSlotResized)},beforeDestroy:function(){this.virtual.destroy()},mounted:function(){this.start?this.setScrollOffset(this.virtual.getOffset(this.start)):this.offset&&this.setScrollOffset(this.offset)},methods:{onItemResized:function(e,t){this.virtual.saveSize(e,t)},onSlotResized:function(e,t,i){e===j.HEADER?this.virtual.updateParam("slotHeaderSize",t):e===j.FOOTER&&this.virtual.updateParam("slotFooterSize",t),i&&this.virtual.handleSlotSizeChange()},onRangeChanged:function(e){this.range=e},onScroll:function(e){var t=this.$refs.root;if(t){var i=t[this.directionKey];this.virtual.handleScroll(i),this.emitEvent(i,e)}},getUniqueIdFromDataSources:function(){var e=this;return this.dataSources.map((function(t){return t[e.dataKey]}))},setScrollOffset:function(e){var t=this.$refs.root;t&&(t[this.directionKey]=e||0)},emitEvent:function(e,t){var i=this.$refs.root,n=this.virtual.getRange(),a=this.virtual.isFront(),s=this.virtual.isBehind(),r=i[this.isHorizontal?"clientWidth":"clientHeight"],o=i[this.isHorizontal?"scrollWidth":"scrollHeight"];a&&this.dataSources.length&&e-this.upperThreshold<=0?this.$emit("totop",t,n):s&&e+r+this.lowerThreshold>=o?this.$emit("tobottom",t,n):this.$emit("scroll",t,n)},getRenderSlots:function(e){for(var t=[],i=this.disabled?0:this.range.start,n=this.disabled?this.dataSources.length-1:this.range.end,a=i;a<=n;a++){var s=this.dataSources[a];s?t.push(e(R,{class:this.itemClass,props:{tag:this.itemTag,event:P.ITEM,horizontal:this.isHorizontal,uniqueKey:s[this.dataKey],source:s,extraProps:this.extraProps,component:this.dataComponent}})):console.warn("[".concat(D,"]: cannot get the index ").concat(a," from data-sources."))}return t}},render:function(e){var t=this.$slots,i=t.header,n=t.footer,a=this.disabled?0:this.isHorizontal?"0px ".concat(this.range.padBehind,"px 0px ").concat(this.range.padFront,"px"):"".concat(this.range.padFront,"px 0px ").concat(this.range.padBehind,"px");return e(this.rootTag,{ref:"root",on:{"&scroll":this.onScroll}},[i?e(F,{class:this.headerClass,props:{tag:this.headerTag,event:P.SLOT,uniqueKey:j.HEADER}},i):null,e(this.wrapTag,{class:this.wrapClass,attrs:{role:"group"},style:{padding:a}},this.getRenderSlots(e)),n?e(F,{class:this.footerClass,props:{tag:this.footerTag,event:P.SLOT,uniqueKey:j.FOOTER}},n):null])}}),B=$,M=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"introduction",domProps:{innerHTML:e._s(e.description)}})},N=[],H={name:"introduction",props:{description:{type:String}}},L=H,q=(i("de3a"),Object(r["a"])(L,M,N,!1,null,"0c507b69",null)),V=q.exports,A=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.code?i("pre",{class:e.type,domProps:{innerHTML:e._s(e.encode(e.code))}}):e._e()},K=[],W=(i("ac1f"),i("5319"),{name:"code-high-light",props:{type:{type:String,required:!0},code:{type:String,required:!0}},mounted:function(){"undefined"!==typeof window.hljs&&this.$el.textContent&&window.hljs.highlightBlock(this.$el)},methods:{encode:function(e){return"html"===this.type&&(e=e.replace(/</g,"&lt;"),e=e.replace(/>/g,"&gt;")),e=e.replace(/\s/,""),e}}}),U=W,X=(i("595a"),Object(r["a"])(U,A,K,!1,null,"99fd125a",null)),Y=X.exports,J=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.isMobile?e._e():i("a",{staticClass:"github-corner",attrs:{href:e.url,"aria-label":"View source on GitHub"}},[i("svg",{staticStyle:{fill:"#9b4dca",color:"#fff",position:"absolute",top:"0",border:"0",right:"0","z-index":"1000"},attrs:{width:e.size,height:e.size,viewBox:"0 0 250 250","aria-hidden":"true"}},[i("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),i("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),i("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])])},Z=[],G=i("835c"),Q=i("3f05"),ee={name:"github-corner",data:function(){return{url:"",size:80,isMobile:G["a"]}},mounted:function(){this.url=Object(Q["a"])()}},te=ee,ie=(i("3f57"),Object(r["a"])(te,J,Z,!1,null,"821512e4",null)),ne=ie.exports,ae=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"tab"},[i("div",{staticClass:"tab-item view",class:{active:e.isView},on:{click:e.eventClickView}},[e._v("VIEW")]),i("div",{staticClass:"tab-item code",class:{active:!e.isView},on:{click:e.eventClickCode}},[e._v("CODE")]),i("a",{directives:[{name:"show",rawName:"v-show",value:!e.isView,expression:"!isView"}],staticClass:"complete-code-url",attrs:{target:"_blank",href:e.completeCodeUrl}},[e._v("COMPLETE CODE")])])},se=[],re=i("b95e"),oe={name:"tab",data:function(){return{completeCodeUrl:"",active:re["a"]}},computed:{isView:function(){return this.active===re["b"].VIEW}},mounted:function(){this.completeCodeUrl=Object(Q["a"])()},methods:{eventClickView:function(){this.active=re["b"].VIEW,this.emitEvent()},eventClickCode:function(){this.active=re["b"].CODE,this.emitEvent()},emitEvent:function(){this.$emit("tab-change",this.active)}}},le=oe,ce=(i("2345"),Object(r["a"])(le,ae,se,!1,null,"13711752",null)),ue=ce.exports;n["a"].component("virtual-list",B),n["a"].component(V.name,V),n["a"].component(Y.name,Y),n["a"].component(ne.name,ne),n["a"].component(ue.name,ue),n["a"].config.devtools=!1,n["a"].config.productionTip=!1,new n["a"]({router:z,render:function(e){return e(c)}}).$mount("#app")},"595a":function(e,t,i){"use strict";var n=i("a5ff"),a=i.n(n);a.a},"67ef":function(e,t,i){},"7c55":function(e,t,i){"use strict";var n=i("2395"),a=i.n(n);a.a},"835c":function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));i("ac1f"),i("466d");var n=navigator.userAgent,a=!!n.match(/Android/i),s=!!n.match(/iPhone|iPad|iPod/i),r=a||s},a5ff:function(e,t,i){},b95e:function(e,t,i){"use strict";i.d(t,"c",(function(){return n})),i.d(t,"b",(function(){return a})),i.d(t,"a",(function(){return s}));var n=1e4,a={VIEW:1,CODE:2},s=a.VIEW},caf6:function(e,t,i){},de3a:function(e,t,i){"use strict";var n=i("2f31"),a=i.n(n);a.a},fb5f:function(e,t,i){"use strict";var n=i("36ee"),a=i.n(n);a.a}});
//# sourceMappingURL=app.337f7a5a.js.map