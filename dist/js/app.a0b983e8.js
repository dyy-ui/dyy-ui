(function(e){function t(t){for(var o,a,l=t[0],s=t[1],c=t[2],u=0,m=[];u<l.length;u++)a=l[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&m.push(r[a][0]),r[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);f&&f(t);while(m.length)m.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},a={app:0},r={app:0},i=[];function l(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-201cd8fd":"4702f474","chunk-555959e7":"7d97f955"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-201cd8fd":1,"chunk-555959e7":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-201cd8fd":"0812625c","chunk-555959e7":"0812625c"}[e]+".css",r=s.p+o,i=document.getElementsByTagName("link"),l=0;l<i.length;l++){var c=i[l],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===o||u===r))return t()}var m=document.getElementsByTagName("style");for(l=0;l<m.length;l++){c=m[l],u=c.getAttribute("data-href");if(u===o||u===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){a[e]=0})));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=l(e);var m=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",m.name="ChunkLoadError",m.type=o,m.request=a,n[1](m)}r[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var m=0;m<c.length;m++)t(c[m]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1796:function(e,t,n){},2395:function(e,t,n){},"4ca1":function(e,t,n){},"4f67":function(e,t,n){"use strict";n("fdb7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],i={name:"App",components:{}},l=i,s=(n("7c55"),n("2877")),c=Object(s["a"])(l,a,r,!1,null,null,null),u=c.exports,m=n("9483");Object(m["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var f=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",[n("el-aside",{staticClass:"aside",attrs:{width:"200px"}},[n("menu-side")],1),n("el-main",[n("router-view")],1)],1)},p=[],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1-4-1"}},e._l(e.routes,(function(t){return n("el-menu-item-group",{key:t.name},[n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.meta.title))]),e._l(t.children,(function(t){return n("el-menu-item",{key:t.name,on:{click:function(n){return e.jumpPage(t)}}},[e._v(" "+e._s(t.meta.title)+" ")])}))],2)})),1)],1)},y=[],v={name:"MenuSide",data:function(){return{routes:C}},methods:{jumpPage:function(e){var t=this.$route.path;t!==e.path&&this.$router.push({path:e.path})}}},g=v,b=Object(s["a"])(g,h,y,!1,null,"abaecba0",null),_=b.exports,w={name:"Layout",components:{menuSide:_}},x=w,k=(n("4f67"),Object(s["a"])(x,d,p,!1,null,"0841fde4",null)),L=k.exports;o["default"].use(f["a"]);var C=[{path:"/",component:L,meta:{title:"form"},children:[{path:"/",name:"About",component:function(){return n.e("chunk-201cd8fd").then(n.bind(null,"45e0"))},meta:{title:"About"}},{path:"/mg-search-form",name:"mgSearchForm",component:function(){return n.e("chunk-555959e7").then(n.bind(null,"97f4"))},meta:{title:"mgSearchForm"}}]}],M=new f["a"]({mode:"hash",base:"/",routes:C}),j=M,E=n("2f62");o["default"].use(E["a"]);var T=new E["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Y=(n("e4cb"),n("d81d"),n("b0c0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-form",e._g(e._b({ref:"form",attrs:{model:e.form}},"el-form",e.$attrs,!1),e.$listeners),[n("el-row",[e._l(e.formItemList,(function(t,o){return n("el-col",{directives:[{name:"show",rawName:"v-show",value:o<=e.firstIndex||e.expandType,expression:"index <= firstIndex || expandType"}],key:o,attrs:{span:t.span||6}},[t.turnLabel?n("el-form-item",{scopedSlots:e._u([{key:"label",fn:function(){return[n("el-dropdown",{on:{command:function(n){return e.handleCommand(n,t)}}},[n("span",{staticClass:"dropdown-label"},[e._v(" "+e._s(t.label)+" "),n("i",{staticClass:"el-icon-caret-bottom el-icon--right dropdown-icon"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(t.attrs.options,(function(t,o){return n("el-dropdown-item",{key:o,attrs:{command:t.model}},[e._v(" "+e._s(t.label)+" ")])})),1)],1)]},proxy:!0}],null,!0)},[n("el-input",{attrs:{placeholder:t.placeholder,clearable:""},model:{value:e.form[t.model],callback:function(n){e.$set(e.form,t.model,n)},expression:"form[item.model]"}})],1):n("el-form-item",{attrs:{label:t.label,prop:t.model}},["input"===t.type?n("el-input",{attrs:{placeholder:t.placeholder||"请输入",clearable:""},model:{value:e.form[t.model],callback:function(n){e.$set(e.form,t.model,n)},expression:"form[item.model]"}}):e._e(),"select"===t.type?n("el-select",{attrs:{multiple:Array.isArray(t.initialValue||""),"collapse-tags":"",clearable:"",filterable:"",placeholder:t.placeholder||"请选择"},on:{change:function(n){return e.selectChange(n,t)}},model:{value:e.form[t.model],callback:function(n){e.$set(e.form,t.model,n)},expression:"form[item.model]"}},e._l(t.options,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1):e._e(),"date"===t.type?n("el-date-picker",{style:"date"===t.type&&"daterange"===t.attrs.type?{width:"264px",marginRight:"10px"}:{},attrs:{type:t.attrs.type||"date",format:t.attrs.format||"yyyy-MM-dd","value-format":t.attrs.valueFormat||"timestamp",placeholder:t.placeholder||"请选择","range-separator":t.attrs.rangeSeparator||"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:function(n){return e.dateChange(n,t)}},model:{value:e.form[t.model],callback:function(n){e.$set(e.form,t.model,n)},expression:"form[item.model]"}}):e._e(),"date"===t.type&&"daterange"===t.attrs.type?n("div",{staticStyle:{display:"inline-block",position:"relative",top:"-1px"}},e._l(e.dateList,(function(o){return n("el-button",{key:o.value,on:{click:function(n){return e.createDate(o,t)}}},[e._v(" "+e._s(o.name)+" ")])})),1):e._e(),"range"===t.type?n("div",[n("el-input-number",{attrs:{placeholder:t.placeholder,controls:!1},on:{blur:function(n){return e.rangeBlur("min",t)}},model:{value:e.form[t.model],callback:function(n){e.$set(e.form,t.model,n)},expression:"form[item.model]"}}),n("span",{staticStyle:{padding:"0 5px"}},[e._v(e._s(t.separator))]),n("el-input-number",{attrs:{placeholder:t.maxPlaceholder,controls:!1},on:{blur:function(n){return e.rangeBlur("max",t)}},model:{value:e.form[t.maxModel],callback:function(n){e.$set(e.form,t.maxModel,n)},expression:"form[item.maxModel]"}})],1):e._e()],1)],1)})),n("el-col",{staticClass:"button_box",attrs:{span:6}},[n("el-form-item",{staticClass:"button_position",attrs:{"label-width":"0"}},[n("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleSearch}},[e._v(" 查询 ")]),n("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:e.handleReset}},[e._v(" 重置 ")]),n("el-button",{directives:[{name:"show",rawName:"v-show",value:e.spanLength>=24*e.row,expression:"spanLength >= 24 * row"}],attrs:{type:"text"},on:{click:e.openForm}},[e.expandType?n("span",[e._v("收起筛选")]):n("span",[e._v("更多筛选")]),e.expandType?n("i",{staticClass:"el-icon-arrow-up"}):n("i",{staticClass:"el-icon-arrow-down"})])],1)],1)],2)],1),!e.expandType&&e.hideFormList.length>0?n("section",{staticClass:"form_footer"},[n("div",{staticClass:"tag_title"},[e._v(" 已选条件： ")]),n("div",{staticClass:"tag_content"},e._l(e.hideFormList,(function(t,o){return n("el-tag",{key:o,staticClass:"tag_box",attrs:{closable:"",size:"mini"},on:{close:function(n){return e.closeTag(t)}}},["input"===t.type?n("span",[e._v(" "+e._s(t.label)+": "+e._s(t.value)+" ")]):"select"===t.type?n("span",[e._v(" "+e._s(t.label)+": "+e._s(t.value.map((function(e){return e.label})).toString())+" ")]):"daterange"===t.type?n("span",[e._v(" "+e._s(t.label)+": "+e._s(e.dayjs(t.value[0]).format("YYYY-MM-DD"))+" 至 "+e._s(e.dayjs(t.value[1]).format("YYYY-MM-DD"))+" ")]):"datetimerange"===t.type?n("span",[e._v(" "+e._s(t.label)+": "+e._s(e.dayjs(t.value[0]).format("YYYY-MM-DD HH:mm:ss"))+" 至 "+e._s(e.dayjs(t.value[1]).format("YYYY-MM-DD HH:mm:ss"))+" ")]):"monthrange"===t.type?n("span",[e._v(" "+e._s(t.label)+": "+e._s(e.dayjs(t.value[0]).format("YYYY-MM"))+" 至 "+e._s(e.dayjs(t.value[1]).format("YYYY-MM"))+" ")]):"dates"===t.type?n("span",[e._v(" "+e._s(t.label)+": "+e._s(t.value.map((function(t){return e.dayjs(t).format("YYYY-MM-DD")})).toString())+" ")]):"week"===t.type?n("span",[e._v(" "+e._s(t.label)+": "+e._s(t.value)+" ")]):"date"===t.type?n("span",[e._v(" "+e._s(t.label)+": "+e._s(e.dayjs(t.value).format("YYYY-MM-DD"))+" ")]):"range"===t.type?n("span",[e._v(" "+e._s(t.label)+": "+e._s(t.value)+" ")]):e._e()])})),1),n("div",{staticClass:"tag_close"},[n("el-button",{attrs:{type:"text"},on:{click:e.handleReset}},[e._v(" 清除 ")])],1)]):e._e()],1)}),F=[],D=n("5530"),O=(n("a9e3"),n("159b"),n("4de4"),n("b64b"),n("e9c4"),{methods:{getHideData:function(){var e=this;this.hideFormList=[];var t=[];this.formItemList.forEach((function(n,o){o>e.firstIndex&&Object.keys(e.form).forEach((function(o){n.model===o&&("string"===typeof e.form[o]&&""!==e.form[o]&&null!==e.form[o]||e.form[o]instanceof Array&&e.form[o].length>0||"number"===typeof e.form[o]&&""!==e.form[o]&&null!==e.form[o])&&t.push(!0)}))})),this.formItemList.forEach((function(n){t.length>0&&Object.keys(e.form).forEach((function(t){n.model===t&&("string"===typeof e.form[t]&&""!==e.form[t]&&null!==e.form[t]||e.form[t]instanceof Array&&e.form[t].length>0||"number"===typeof e.form[t]&&""!==e.form[t]&&null!==e.form[t])&&e.getItemData(n,t)}))}))},getItemData:function(e,t){var n=this;if("input"===e.type)this.hideFormList.push({type:e.type,key:t,value:this.form[t],label:e.label});else if("select"===e.type){if(e.initialValue instanceof Array&&this.form[t].length>0){var o=[];e.options.forEach((function(e){n.form[t].forEach((function(t){e.value===t&&o.push({label:e.label,value:t})}))})),this.hideFormList.push({type:e.type,key:t,value:o,label:e.label})}else if(""!==this.form[t]){var a=[];e.options.forEach((function(e){e.value===n.form[t]&&a.push({label:e.label,value:e.value})})),this.hideFormList.push({type:e.type,key:t,value:a,label:e.label})}}else"date"===e.type&&null!==this.form[t]?e.initialValue instanceof Array?this.hideFormList.push({type:e.attrs.type,valueFormat:e.attrs.valueFormat,key:t,value:this.form[t],label:e.label}):null!==this.form[t]&&this.hideFormList.push({type:e.attrs.type,key:t,value:this.form[t],label:e.label}):"range"===e.type&&""!==this.form[t]&&null!==this.form[t]&&void 0!==this.form[t]&&this.hideFormList.push({type:e.type,key:t,value:this.form[t]+e.separator+this.form[e.maxModel],label:e.label})}}}),S=n("5a0c"),$=n.n(S),A={name:"MgSearchForm",mixins:[O],props:{formItemList:{type:Array,default:function(){return[]}},row:{type:Number,default:1}},data:function(){return{dayjs:$.a,form:{},expandType:!1,itemList:[],firstIndex:0,spanLength:0,hideFormList:[],dateList:[{name:"今",type:"today"},{name:"昨",type:"yesterday"},{name:"近7天",type:"week"},{name:"近30天",type:"month"}]}},mounted:function(){var e=this;this.spanLength=0;var t={};this.formItemList.forEach((function(n,o){e.spanLength+=n.span||6,"range"===n.type?(t[n.model]=n.initialValue||void 0,t[n.maxModel]=n.maxInitialValue||void 0):t[n.model]=n.initialValue||"",e.spanLength<24*e.row&&(e.firstIndex=o)})),this.form=t},methods:{handleSearch:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.spreadData(e.form),e.expandType=!1,e.getHideData())}))},createDate:function(e,t){var n=new Date;"today"===e.type?this.form[t.model]=[n.getTime(),n.getTime()]:"yesterday"===e.type?this.form[t.model]=[n.getTime()-864e5,n.getTime()-864e5]:"week"===e.type?this.form[t.model]=[n.getTime()-6048e5,n.getTime()]:"month"===e.type&&(this.form[t.model]=[n.getTime()-2592e6,n.getTime()])},selectChange:function(e,t){t.change&&t.change(e,t)},dateChange:function(e,t){t.change&&t.change(e,t)},handleCommand:function(e,t){var n=this;this.formItemList.forEach((function(o,a){o.dropdownType===t.dropdownType&&t.attrs.options.forEach((function(o){o.model===e?n.$set(n.formItemList,a,Object(D["a"])(Object(D["a"])({},t),o)):n.form[o.model]=""}))})),this.getHideData()},closeTag:function(e){this.hideFormList=this.hideFormList.filter((function(t){return t.key!==e.key})),this.resetForm(e)},resetForm:function(e){var t=this;Object.keys(this.form).forEach((function(n){n===e.key&&("string"===typeof t.form[n]?t.$set(t.form,n,""):t.form[n]instanceof Array?t.$set(t.form,n,[]):t.$set(t.form,n,""))})),this.spreadData(this.form)},openForm:function(){this.expandType=!this.expandType,this.getHideData()},handleReset:function(){var e={};this.formItemList.forEach((function(t){"range"===t.type?(e[t.model]=t.initialValue||void 0,e[t.maxModel]=t.maxInitialValue||void 0):e[t.model]=t.initialValue||""})),this.hideFormList=[],this.form=e,this.spreadData(this.form)},rangeBlur:function(e,t){"min"===e?this.form[t.maxModel]&&this.form[t.model]>this.form[t.maxModel]&&this.$message.warning("".concat(t.label," 最小值不能大于最大值")):this.form[t.model]&&this.form[t.model]>this.form[t.maxModel]&&this.$message.warning("".concat(t.label," 最大值不能小于最小值"))},spreadData:function(e){var t=JSON.parse(JSON.stringify(e));this.formItemList.forEach((function(e){Object.keys(t).forEach((function(n){e.turnKey&&e.model===n?("date"===e.type&&"timestamp"===e.attrs.valueFormat?(t[e.attrs.begin]=t[n][0]||"",t[e.attrs.end]=t[n][1]?t[n][1]+86399e3:""):"date"===e.type&&"yyyy-MM-dd"===e.attrs.valueFormat?(t[e.attrs.begin]=t[n][0]||"",t[e.attrs.end]=t[n][1]?t[n][1]+"23:59:59":""):"date"===e.type&&"yyyy-MM-dd HH:mm:ss"===e.attrs.valueFormat&&(t[e.attrs.begin]=t[n][0]||"",t[e.attrs.end]=t[n][1]||""),delete t[n]):e.turnKey&&e.model===n&&0===t[n].length?delete t[n]:e.turnLabel&&e.model===n&&e.attrs.options.forEach((function(n){n.model!==e.model&&(t[n.model]="")}))}))})),this.$emit("get-search-form-data",t)}}},I=A,H=(n("e1f6"),Object(s["a"])(I,Y,F,!1,null,"08ea375a",null)),N=H.exports;N.install=function(e){e.component(N.name,N)};var P=N,V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" mgTable ")])},B=[],J={name:"MgTable"},R=J,q=Object(s["a"])(R,V,B,!1,null,"642cba2c",null),K=q.exports;K.install=function(e){e.component(K.name,K)};var z=K,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dyy_code"},[n("height-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.codeContent,expression:"codeContent"}],ref:"codeContent",staticClass:"dyy_code_content"},[e._t("default")],2)]),n("div",{staticClass:"dyy_code_footer",on:{click:e.handleExpand}},[n("i",{class:e.codeContent?"el-icon-caret-top":"el-icon-caret-bottom"})])],1)},G=[],Q="0.3s height ease-in-out",W={beforeEnter:function(e){e.style.transition=Q,e.dataset||(e.dataset={}),e.style.height=0},enter:function(e){0!==e.scrollHeight?e.style.height="".concat(e.scrollHeight,"px"):e.style.height="",e.style.overflow="hidden"},afterEnter:function(e){e.style.transition="",e.style.height=""},beforeLeave:function(e){e.dataset||(e.dataset={}),e.style.height="".concat(e.scrollHeight,"px"),e.style.overflow="hidden"},leave:function(e){0!==e.scrollHeight&&(e.style.transition=Q,e.style.height=0)},afterLeave:function(e){e.style.transition="",e.style.height=""}},X={name:"CollapseTransition",functional:!0,render:function(e,t){var n=t.children,o={on:W};return e("transition",o,n)}},Z={name:"DyyCode",components:{heightTransition:X},data:function(){return{codeContent:!1}},methods:{handleExpand:function(){this.codeContent=!this.codeContent}}},ee=Z,te=(n("e4e3"),Object(s["a"])(ee,U,G,!1,null,"075d5bf2",null)),ne=te.exports;ne.install=function(e){e.component(ne.name,ne)};var oe=ne,ae=[P,z,oe],re=function e(t){e.installed||ae.map((function(e){return t.component(e.name,e)}))};"undefined"!==typeof window&&window.Vue&&re(window.Vue);var ie={install:re,mgSearchForm:P,mgTable:z,dyyCode:oe},le=n("5c96"),se=n.n(le);n("0fae"),n("9f21"),n("8e1f");o["default"].config.productionTip=!1,o["default"].use(ie),o["default"].use(se.a),new o["default"]({router:j,store:T,render:function(e){return e(u)}}).$mount("#app")},"7c55":function(e,t,n){"use strict";n("2395")},"8e1f":function(e,t,n){},e1f6:function(e,t,n){"use strict";n("1796")},e4e3:function(e,t,n){"use strict";n("4ca1")},fdb7:function(e,t,n){}});
//# sourceMappingURL=app.a0b983e8.js.map