(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b209805"],{1247:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"markdown"},[a("html",[a("head"),a("body",[a("dyy-anchor",{attrs:{"anchor-list":"基本用法,select,整合,属性,itemList,贡献者"}}),a("dyy-title",{attrs:{"title-name":"基本用法"}}),a("div",{staticClass:"flex_col"},[a("dyy-code",{scopedSlots:e._u([{key:"code",fn:function(){return[e._v('<template> <el-card shadow="never"> <dyy-search-form :item-list="itemList1" :row="2" size="mini" label-width="100px" @handle-search="handleSearch"> </dyy-search-form> </el-card> </template> <script> export default { data() { return { itemList1:[{type: "input", label: "输入框", prop: \'test\', initialValue: null, placeholder: \'请输入\', span: 6},] } } } <\/script> ')]},proxy:!0}])},[a("pre",{pre:!0},[a("code",[e._v('<template>\n  <el-card shadow="never">\n    <dyy-search-form\n      :item-list="itemList1"\n      :row="2"\n      size="mini"\n      label-width="100px"\n      @handle-search="handleSearch">\n    </dyy-search-form>\n    </el-card>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        itemList1:[{type: "input", label: "输入框", prop: \'test\', initialValue: null, placeholder: \'请输入\', span: 6},] \n      }\n    }\n  }\n<\/script>\n')])])]),[a("el-card",{attrs:{shadow:"never"}},[a("dyy-search-form",{attrs:{"item-list":e.itemList1,row:2,size:"mini","label-width":"100px"},on:{"handle-search":e.handleSearch}})],1)]],2),a("dyy-title",{attrs:{"title-name":"select"}}),a("div",{staticClass:"flex_col"},[a("dyy-code",{scopedSlots:e._u([{key:"code",fn:function(){return[e._v("<template> <el-card shadow=\"never\"> <dyy-search-form :item-list=\"itemList2\" :row=\"2\" size=\"mini\" label-width=\"100px\" @handle-search=\"handleSearch\"> </dyy-search-form> </el-card> </template> <script> export default { data() { return { itemList2:[ { type: \"select\", label: \"选择框\", prop: 'test1', options:[ {label: '选择1', value: 'select1'}, {label: '选择2', value: 'select2'}, ], initialValue: '', placeholder: '请选择', span: 6 }, { type: \"select\", label: \"多选择框\", prop: 'test2', options:[ {label: '选择1', value: 'select1'}, {label: '选择2', value: 'select2'}, {label: '选择3', value: 'select3'}, {label: '选择4', value: 'select4'}, ], initialValue: [], multiple: true, collapseTags: true, placeholder: '请选择', span: 6 }, { type: \"select\", label: \"远程加载\", prop: 'test4', options:[], initialValue: [], multiple: true, collapseTags: true, filterable: true, remote: true, remoteMethod: (key) => this.remoteMethod1(key, 'test4'), isLoadMore: true, reserveKeyword: true, placeholder: '请选择', span: 6 }, ] } }, mounted() { this.remoteMethod1('', 'test4') }, methods: { async remoteMethod1(key, prop) { const {list} = await this.getList({page: 1, size: 10}); this.itemList2.forEach(item => { if(item.prop === prop) { item.options = list } }) }, } } <\/script> ")]},proxy:!0}])},[a("pre",{pre:!0},[a("code",[e._v("<template>\n  <el-card shadow=\"never\">\n    <dyy-search-form\n      :item-list=\"itemList2\"\n      :row=\"2\"\n      size=\"mini\"\n      label-width=\"100px\"\n      @handle-search=\"handleSearch\">\n    </dyy-search-form>\n    </el-card>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        itemList2:[\n          {\n            type: \"select\", \n            label: \"选择框\",\n            prop: 'test1', \n            options:[\n              {label: '选择1', value: 'select1'},\n              {label: '选择2', value: 'select2'},\n            ], \n            initialValue: '',\n            placeholder: '请选择',\n            span: 6\n          },\n          {\n            type: \"select\", \n            label: \"多选择框\",\n            prop: 'test2', \n            options:[\n              {label: '选择1', value: 'select1'},\n              {label: '选择2', value: 'select2'},\n              {label: '选择3', value: 'select3'},\n              {label: '选择4', value: 'select4'},\n            ], \n            initialValue: [],\n            multiple: true,\n            collapseTags: true,\n            placeholder: '请选择',\n            span: 6\n          },\n          {\n            type: \"select\", \n            label: \"远程加载\",\n            prop: 'test4', \n            options:[], \n            initialValue: [],\n            multiple: true,\n            collapseTags: true,\n            filterable: true,\n            remote: true,\n            remoteMethod: (key) => this.remoteMethod1(key, 'test4'),\n            isLoadMore: true,\n            reserveKeyword: true,\n            placeholder: '请选择',\n            span: 6\n          },\n        ] \n      }\n    },\n    mounted() {\n      this.remoteMethod1('', 'test4')\n    },\n    methods: {\n    async remoteMethod1(key, prop) {\n      const {list} = await this.getList({page: 1, size: 10});\n      this.itemList2.forEach(item => {\n        if(item.prop === prop) {\n          item.options = list\n        }\n      })\n    },\n    }\n  }\n<\/script>\n")])])]),[a("el-card",{attrs:{shadow:"never"}},[a("dyy-search-form",{attrs:{"item-list":e.itemList2,row:2,size:"mini","label-width":"100px"},on:{"handle-search":e.handleSearch}})],1)]],2),a("dyy-title",{attrs:{"title-name":"整合"}}),a("div",{staticClass:"flex_col"},[a("dyy-code",{scopedSlots:e._u([{key:"code",fn:function(){return[e._v("<template> <el-card shadow=\"never\"> <dyy-search-form :item-list=\"itemList\" :row=\"2\" size=\"mini\" label-width=\"100px\" @handle-search=\"handleSearch\"> </dyy-search-form> </el-card> </template> <script> export default { data() { return { itemList: [ {type: \"input\", label: \"输入框\", prop: 'test', initialValue: null, placeholder: '请输入', span: 6}, { type: \"select\", label: \"选择框\", prop: 'test1', options:[ {label: '选择1', value: 'select1'}, {label: '选择2', value: 'select2'}, ], initialValue: '', placeholder: '请选择', span: 6 }, { type: \"select\", label: \"多选择框\", prop: 'test2', options:[ {label: '选择1', value: 'select1'}, {label: '选择2', value: 'select2'}, {label: '选择3', value: 'select3'}, {label: '选择4', value: 'select4'}, ], initialValue: [], multiple: true, collapseTags: true, placeholder: '请选择', span: 6 }, { type: \"select\", label: \"远程加载\", prop: 'test4', options:[], initialValue: [], multiple: true, collapseTags: true, filterable: true, remote: true, remoteMethod: (key) => this.remoteMethod(key, 'test4'), reserveKeyword: true, placeholder: '请选择', span: 6 }, {type: \"date\", label: \"日期\", dateType: 'date',prop: 'test5', initialValue: '', placeholder: '请输入', span: 6}, {type: \"date\", label: \"年份\", dateType: 'year', prop: 'test6', initialValue: '', placeholder: '请输入', span: 6}, {type: \"date\", label: \"月份\", dateType: 'month', prop: 'month', initialValue: '', placeholder: '请输入', span: 6}, {type: \"date\", label: \"多日期\", dateType: 'dates', prop: 'dates', initialValue: [], placeholder: '请输入', span: 6}, {type: \"date\", label: \"多月份\", dateType: 'months', prop: 'months', initialValue: [], placeholder: '请输入', span: 6}, {type: \"date\", label: \"多年份\", dateType: 'years', prop: 'years', initialValue: [], placeholder: '请输入', span: 6}, {type: \"date\", label: \"周\", dateType: 'week', prop: 'week', initialValue: '', placeholder: '请输入', span: 6}, {type: \"date\", label: \"时间\", dateType: 'datetime', prop: 'datetime', initialValue: '', placeholder: '请输入', span: 6}, {type: \"date\", label: \"时间区间\", dateType: 'datetimerange', prop: 'datetimerange', initialValue: '', placeholder: '请输入', span: 6}, {type: \"date\", label: \"日期区间\", dateType: 'daterange', prop: 'daterange', initialValue: '', placeholder: '请输入', span: 6}, {type: \"date\", label: \"月份区间\", dateType: 'monthrange', prop: 'monthrange', initialValue: '', placeholder: '请输入', span: 6}, {type: \"radio\", label: \"单选\", prop: 'radio', initialValue: true, options: [{value: true, label: '是'}, {value: false, label: '否'}]}, {type: \"checkbox\", label: \"多选\", prop: 'checkbox', initialValue: [], options: [{value: 'city1', label: '上海'}, {value: 'city2', label: '南京'}]}, {type: \"inputNumber\", label: \"数字\", prop: 'inputNumber', initialValue: ''}, ], queryForm: { size: 20, page: 1, }, } }, mounted() { this.$message.success('加载测试'); this.getList({page:1, size:50}).then(res => { console.log(res); }); this.remoteMethod('', 'test4') }, methods: { handleSearch(data) { console.log(data); }, async remoteMethod(key, prop) { const {list} = await this.getList(this.queryForm); this.itemList.forEach(item => { if(item.prop === prop) { item.options = list } }) }, getList({page, size}) { return new Promise((resolve) => { setTimeout(() => { resolve(this.$DUI.mock({ ['list|'+ size]: [ { 'id|+1': 1, 'value|+1': 1000* page, 'label':'@cname', } ], page, size, total: page* size, })) }, 1000) }) } } } <\/script> ")]},proxy:!0}])},[a("pre",{pre:!0},[a("code",[e._v("<template>\n  <el-card shadow=\"never\">\n    <dyy-search-form\n      :item-list=\"itemList\"\n      :row=\"2\"\n      size=\"mini\"\n      label-width=\"100px\"\n      @handle-search=\"handleSearch\">\n    </dyy-search-form>\n  </el-card>\n</template>\n<script>\n\texport default {\n    data() {\n      return {\n        itemList: [\n          {type: \"input\", label: \"输入框\", prop: 'test', initialValue: null, placeholder: '请输入', span: 6},\n          {\n            type: \"select\", \n            label: \"选择框\",\n            prop: 'test1', \n            options:[\n              {label: '选择1', value: 'select1'},\n              {label: '选择2', value: 'select2'},\n            ], \n            initialValue: '',\n            placeholder: '请选择',\n            span: 6\n          },\n          {\n            type: \"select\", \n            label: \"多选择框\",\n            prop: 'test2', \n            options:[\n              {label: '选择1', value: 'select1'},\n              {label: '选择2', value: 'select2'},\n              {label: '选择3', value: 'select3'},\n              {label: '选择4', value: 'select4'},\n            ], \n            initialValue: [],\n            multiple: true,\n            collapseTags: true,\n            placeholder: '请选择',\n            span: 6\n          },\n          {\n            type: \"select\", \n            label: \"远程加载\",\n            prop: 'test4', \n            options:[], \n            initialValue: [],\n            multiple: true,\n            collapseTags: true,\n            filterable: true,\n            remote: true,\n            remoteMethod: (key) => this.remoteMethod(key, 'test4'),\n            reserveKeyword: true,\n            placeholder: '请选择',\n            span: 6\n          },\n          {type: \"date\", label: \"日期\", dateType: 'date',prop: 'test5', initialValue: '', placeholder: '请输入', span: 6},\n          {type: \"date\", label: \"年份\", dateType: 'year', prop: 'test6', initialValue: '', placeholder: '请输入', span: 6},\n          {type: \"date\", label: \"月份\", dateType: 'month', prop: 'month', initialValue: '', placeholder: '请输入', span: 6},\n          {type: \"date\", label: \"多日期\", dateType: 'dates', prop: 'dates', initialValue: [], placeholder: '请输入', span: 6},\n          {type: \"date\", label: \"多月份\", dateType: 'months', prop: 'months', initialValue: [], placeholder: '请输入', span: 6},\n          {type: \"date\", label: \"多年份\", dateType: 'years', prop: 'years', initialValue: [], placeholder: '请输入', span: 6},\n          {type: \"date\", label: \"周\", dateType: 'week', prop: 'week', initialValue: '', placeholder: '请输入', span: 6},\n          {type: \"date\", label: \"时间\", dateType: 'datetime', prop: 'datetime', initialValue: '', placeholder: '请输入', span: 6},\n          {type: \"date\", label: \"时间区间\", dateType: 'datetimerange', prop: 'datetimerange', initialValue: '', placeholder: '请输入', span: 6},\n          {type: \"date\", label: \"日期区间\", dateType: 'daterange', prop: 'daterange', initialValue: '', placeholder: '请输入', span: 6},\n          {type: \"date\", label: \"月份区间\", dateType: 'monthrange', prop: 'monthrange', initialValue: '', placeholder: '请输入', span: 6},\n          {type: \"radio\", label: \"单选\", prop: 'radio', initialValue: true, options: [{value: true, label: '是'}, {value: false, label: '否'}]},\n          {type: \"checkbox\", label: \"多选\", prop: 'checkbox', initialValue: [], options: [{value: 'city1', label: '上海'}, {value: 'city2', label: '南京'}]},\n          {type: \"inputNumber\", label: \"数字\", prop: 'inputNumber', initialValue: ''},\n        ],\n        queryForm: {\n          size: 20,\n          page: 1,\n        },\n      }\n    },\n    mounted() {\n      this.$message.success('加载测试'); \n      this.getList({page:1, size:50}).then(res => {\n        console.log(res);\n      });\n      this.remoteMethod('', 'test4')\n    },\n    methods: {\n      handleSearch(data) {\n        console.log(data);\n      },\n      async remoteMethod(key, prop) {\n        const {list} = await this.getList(this.queryForm);\n        this.itemList.forEach(item => {\n          if(item.prop === prop) {\n            item.options = list\n          }\n        })\n      },\n      getList({page, size}) {\n        return new Promise((resolve) => {\n          setTimeout(() => {\n            resolve(this.$DUI.mock({\n                  ['list|'+ size]: [\n                    {\n                      'id|+1': 1,\n                      'value|+1': 1000* page,\n                      'label':'@cname',\n                    }\n                  ],\n                  page,\n                  size,\n                  total: page* size,\n              }))\n          }, 1000)\n        })\n      }\n    }\n}\n<\/script>\n")])])]),[a("el-card",{attrs:{shadow:"never"}},[a("dyy-search-form",{attrs:{"item-list":e.itemList,row:2,size:"mini","label-width":"100px"},on:{"handle-search":e.handleSearch}})],1)]],2),a("dyy-title",{attrs:{"title-name":"属性"}}),e._m(0),a("dyy-title",{attrs:{"title-name":"itemList"}}),e._m(1),a("dyy-title",{attrs:{"title-name":"贡献者"}}),a("dyy-contributor",{attrs:{"contribute-list":"dyySearchForm"}}),a("dyy-page")],1)])])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dyy_table"},[a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[e._v("参数")]),a("th",{staticStyle:{"text-align":"left"}},[e._v("描述")]),a("th",{staticStyle:{"text-align":"left"}},[e._v("类型")]),a("th",{staticStyle:{"text-align":"center"}},[e._v("可选值")]),a("th",{staticStyle:{"text-align":"center"}},[e._v("默认值")])])]),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",{pre:!0},[e._v("item-list")])]),a("td",{staticStyle:{"text-align":"left"}},[e._v("搜索表单主数据配置")]),a("td",{staticStyle:{"text-align":"left"}},[a("code",{pre:!0},[e._v("Array")])]),a("td",{staticStyle:{"text-align":"center"}},[e._v("--")]),a("td",{staticStyle:{"text-align":"center"}},[e._v("[]")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",{pre:!0},[e._v("row")])]),a("td",{staticStyle:{"text-align":"left"}},[e._v("最多展示几行")]),a("td",{staticStyle:{"text-align":"left"}},[a("code",{pre:!0},[e._v("number")])]),a("td",{staticStyle:{"text-align":"center"}},[e._v("--")]),a("td",{staticStyle:{"text-align":"center"}},[e._v("2")])])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dyy_table"},[a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[e._v("参数")]),a("th",{staticStyle:{"text-align":"left"}},[e._v("描述")]),a("th",{staticStyle:{"text-align":"left"}},[e._v("类型")]),a("th",{staticStyle:{"text-align":"center"}},[e._v("可选值")]),a("th",{staticStyle:{"text-align":"center"}},[e._v("默认值")])])]),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",{pre:!0},[e._v("type")])]),a("td",{staticStyle:{"text-align":"left"}},[e._v("表单控件类型")]),a("td",{staticStyle:{"text-align":"left"}},[a("code",{pre:!0},[e._v("String")])]),a("td",{staticStyle:{"text-align":"center"}},[a("code",{pre:!0},[e._v("input")]),e._v(" "),a("code",{pre:!0},[e._v("select")]),e._v(" "),a("code",{pre:!0},[e._v("date")]),e._v(" "),a("code",{pre:!0},[e._v("radio")]),e._v(" "),a("code",{pre:!0},[e._v("checkbox")])]),a("td",{staticStyle:{"text-align":"center"}},[e._v("--")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",{pre:!0},[e._v("prop")])]),a("td",{staticStyle:{"text-align":"left"}},[e._v("表单控件 v-model 值")]),a("td",{staticStyle:{"text-align":"left"}},[a("code",{pre:!0},[e._v("String")])]),a("td",{staticStyle:{"text-align":"center"}},[e._v("--")]),a("td",{staticStyle:{"text-align":"center"}},[e._v("--")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",{pre:!0},[e._v("label")])]),a("td",{staticStyle:{"text-align":"left"}},[e._v("表单控件名称")]),a("td",{staticStyle:{"text-align":"left"}},[a("code",{pre:!0},[e._v("String")])]),a("td",{staticStyle:{"text-align":"center"}},[e._v("--")]),a("td",{staticStyle:{"text-align":"center"}},[e._v("--")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",{pre:!0},[e._v("initialValue")])]),a("td",{staticStyle:{"text-align":"left"}},[e._v("表单控件初始值")]),a("td",{staticStyle:{"text-align":"left"}},[e._v("--")]),a("td",{staticStyle:{"text-align":"center"}},[e._v("--")]),a("td",{staticStyle:{"text-align":"center"}},[e._v("--")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",{pre:!0},[e._v("dateType")])]),a("td",{staticStyle:{"text-align":"left"}},[e._v("表单时间控件类型")]),a("td",{staticStyle:{"text-align":"left"}},[a("code",{pre:!0},[e._v("String")])]),a("td",{staticStyle:{"text-align":"center"}},[a("code",{pre:!0},[e._v("year")]),e._v(" "),a("code",{pre:!0},[e._v("month")]),e._v(" "),a("code",{pre:!0},[e._v("date")]),e._v(" "),a("code",{pre:!0},[e._v("dates")]),e._v(" "),a("code",{pre:!0},[e._v("months")]),e._v(" "),a("code",{pre:!0},[e._v("years")]),e._v(" "),a("code",{pre:!0},[e._v("week")]),e._v(" "),a("code",{pre:!0},[e._v("datetime")]),e._v(" "),a("code",{pre:!0},[e._v("datetimerange")]),e._v(" "),a("code",{pre:!0},[e._v("daterange")]),e._v(" "),a("code",{pre:!0},[e._v("monthrange")])]),a("td",{staticStyle:{"text-align":"center"}},[e._v("--")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",{pre:!0},[e._v("span")])]),a("td",{staticStyle:{"text-align":"left"}},[e._v("表单控件每行占比")]),a("td",{staticStyle:{"text-align":"left"}},[a("code",{pre:!0},[e._v("Number")])]),a("td",{staticStyle:{"text-align":"center"}},[e._v("--")]),a("td",{staticStyle:{"text-align":"center"}},[e._v("6")])])])])])}];function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a("d3b7");function i(e,t,a,l,n,r,i){try{var o=e[r](i),s=o.value}catch(p){return void a(p)}o.done?t(s):Promise.resolve(s).then(l,n)}function o(e){return function(){var t=this,a=arguments;return new Promise((function(l,n){var r=e.apply(t,a);function o(e){i(r,l,n,o,s,"next",e)}function s(e){i(r,l,n,o,s,"throw",e)}o(void 0)}))}}a("96cf"),a("159b");var s={mixins:[{data:function(){return{itemList1:[{type:"input",label:"输入框",prop:"test",initialValue:null,placeholder:"请输入",span:6}]}}},{data:function(){var e=this;return{itemList2:[{type:"select",label:"选择框",prop:"test1",options:[{label:"选择1",value:"select1"},{label:"选择2",value:"select2"}],initialValue:"",placeholder:"请选择",span:6},{type:"select",label:"多选择框",prop:"test2",options:[{label:"选择1",value:"select1"},{label:"选择2",value:"select2"},{label:"选择3",value:"select3"},{label:"选择4",value:"select4"}],initialValue:[],multiple:!0,collapseTags:!0,placeholder:"请选择",span:6},{type:"select",label:"远程加载",prop:"test4",options:[],initialValue:[],multiple:!0,collapseTags:!0,filterable:!0,remote:!0,remoteMethod:function(t){return e.remoteMethod1(t,"test4")},isLoadMore:!0,reserveKeyword:!0,placeholder:"请选择",span:6}]}},mounted:function(){this.remoteMethod1("","test4")},methods:{remoteMethod1:function(e,t){var a=this;return o(regeneratorRuntime.mark((function e(){var l,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.getList({page:1,size:10});case 2:l=e.sent,n=l.list,a.itemList2.forEach((function(e){e.prop===t&&(e.options=n)}));case 5:case"end":return e.stop()}}),e)})))()}}},{data:function(){var e=this;return{itemList:[{type:"input",label:"输入框",prop:"test",initialValue:null,placeholder:"请输入",span:6},{type:"select",label:"选择框",prop:"test1",options:[{label:"选择1",value:"select1"},{label:"选择2",value:"select2"}],initialValue:"",placeholder:"请选择",span:6},{type:"select",label:"多选择框",prop:"test2",options:[{label:"选择1",value:"select1"},{label:"选择2",value:"select2"},{label:"选择3",value:"select3"},{label:"选择4",value:"select4"}],initialValue:[],multiple:!0,collapseTags:!0,placeholder:"请选择",span:6},{type:"select",label:"远程加载",prop:"test4",options:[],initialValue:[],multiple:!0,collapseTags:!0,filterable:!0,remote:!0,remoteMethod:function(t){return e.remoteMethod(t,"test4")},reserveKeyword:!0,placeholder:"请选择",span:6},{type:"date",label:"日期",dateType:"date",prop:"test5",initialValue:"",placeholder:"请输入",span:6},{type:"date",label:"年份",dateType:"year",prop:"test6",initialValue:"",placeholder:"请输入",span:6},{type:"date",label:"月份",dateType:"month",prop:"month",initialValue:"",placeholder:"请输入",span:6},{type:"date",label:"多日期",dateType:"dates",prop:"dates",initialValue:[],placeholder:"请输入",span:6},{type:"date",label:"多月份",dateType:"months",prop:"months",initialValue:[],placeholder:"请输入",span:6},{type:"date",label:"多年份",dateType:"years",prop:"years",initialValue:[],placeholder:"请输入",span:6},{type:"date",label:"周",dateType:"week",prop:"week",initialValue:"",placeholder:"请输入",span:6},{type:"date",label:"时间",dateType:"datetime",prop:"datetime",initialValue:"",placeholder:"请输入",span:6},{type:"date",label:"时间区间",dateType:"datetimerange",prop:"datetimerange",initialValue:"",placeholder:"请输入",span:6},{type:"date",label:"日期区间",dateType:"daterange",prop:"daterange",initialValue:"",placeholder:"请输入",span:6},{type:"date",label:"月份区间",dateType:"monthrange",prop:"monthrange",initialValue:"",placeholder:"请输入",span:6},{type:"radio",label:"单选",prop:"radio",initialValue:!0,options:[{value:!0,label:"是"},{value:!1,label:"否"}]},{type:"checkbox",label:"多选",prop:"checkbox",initialValue:[],options:[{value:"city1",label:"上海"},{value:"city2",label:"南京"}]},{type:"inputNumber",label:"数字",prop:"inputNumber",initialValue:""}],queryForm:{size:20,page:1}}},mounted:function(){this.$message.success("加载测试"),this.getList({page:1,size:50}).then((function(e){console.log(e)})),this.remoteMethod("","test4")},methods:{handleSearch:function(e){console.log(e)},remoteMethod:function(e,t){var a=this;return o(regeneratorRuntime.mark((function e(){var l,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.getList(a.queryForm);case 2:l=e.sent,n=l.list,a.itemList.forEach((function(e){e.prop===t&&(e.options=n)}));case 5:case"end":return e.stop()}}),e)})))()},getList:function(e){var t=this,a=e.page,l=e.size;return new Promise((function(e){setTimeout((function(){var n;e(t.$DUI.mock((n={},r(n,"list|"+l,[{"id|+1":1,"value|+1":1e3*a,label:"@cname"}]),r(n,"page",a),r(n,"size",l),r(n,"total",a*l),n)))}),1e3)}))}}}]},p=s,c=a("2877"),d=Object(c["a"])(p,l,n,!1,null,null,null);t["default"]=d.exports},"96cf":function(e,t,a){var l=function(e){"use strict";var t,a=Object.prototype,l=a.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",o=n.toStringTag||"@@toStringTag";function s(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(j){s=function(e,t,a){return e[t]=a}}function p(e,t,a,l){var n=t&&t.prototype instanceof v?t:v,r=Object.create(n.prototype),i=new z(l||[]);return r._invoke=V(e,a,i),r}function c(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(j){return{type:"throw",arg:j}}}e.wrap=p;var d="suspendedStart",u="suspendedYield",h="executing",y="completed",m={};function v(){}function f(){}function g(){}var b={};s(b,r,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(M([])));w&&w!==a&&l.call(w,r)&&(b=w);var x=g.prototype=v.prototype=Object.create(b);function S(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function a(n,r,i,o){var s=c(e[n],e,r);if("throw"!==s.type){var p=s.arg,d=p.value;return d&&"object"===typeof d&&l.call(d,"__await")?t.resolve(d.__await).then((function(e){a("next",e,i,o)}),(function(e){a("throw",e,i,o)})):t.resolve(d).then((function(e){p.value=e,i(p)}),(function(e){return a("throw",e,i,o)}))}o(s.arg)}var n;function r(e,l){function r(){return new t((function(t,n){a(e,l,t,n)}))}return n=n?n.then(r,r):r()}this._invoke=r}function V(e,t,a){var l=d;return function(n,r){if(l===h)throw new Error("Generator is already running");if(l===y){if("throw"===n)throw r;return N()}a.method=n,a.arg=r;while(1){var i=a.delegate;if(i){var o=T(i,a);if(o){if(o===m)continue;return o}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(l===d)throw l=y,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);l=h;var s=c(e,t,a);if("normal"===s.type){if(l=a.done?y:u,s.arg===m)continue;return{value:s.arg,done:a.done}}"throw"===s.type&&(l=y,a.method="throw",a.arg=s.arg)}}}function T(e,a){var l=e.iterator[a.method];if(l===t){if(a.delegate=null,"throw"===a.method){if(e.iterator["return"]&&(a.method="return",a.arg=t,T(e,a),"throw"===a.method))return m;a.method="throw",a.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var n=c(l,e.iterator,a.arg);if("throw"===n.type)return a.method="throw",a.arg=n.arg,a.delegate=null,m;var r=n.arg;return r?r.done?(a[e.resultName]=r.value,a.next=e.nextLoc,"return"!==a.method&&(a.method="next",a.arg=t),a.delegate=null,m):r:(a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,m)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function z(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function M(e){if(e){var a=e[r];if(a)return a.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function a(){while(++n<e.length)if(l.call(e,n))return a.value=e[n],a.done=!1,a;return a.value=t,a.done=!0,a};return i.next=i}}return{next:N}}function N(){return{value:t,done:!0}}return f.prototype=g,s(x,"constructor",g),s(g,"constructor",f),f.displayName=s(g,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,s(e,o,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},S(L.prototype),s(L.prototype,i,(function(){return this})),e.AsyncIterator=L,e.async=function(t,a,l,n,r){void 0===r&&(r=Promise);var i=new L(p(t,a,l,n),r);return e.isGeneratorFunction(a)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},S(x),s(x,o,"Generator"),s(x,r,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){while(t.length){var l=t.pop();if(l in e)return a.value=l,a.done=!1,a}return a.done=!0,a}},e.values=M,z.prototype={constructor:z,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(E),!e)for(var a in this)"t"===a.charAt(0)&&l.call(this,a)&&!isNaN(+a.slice(1))&&(this[a]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var a=this;function n(l,n){return o.type="throw",o.arg=e,a.next=l,n&&(a.method="next",a.arg=t),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=l.call(i,"catchLoc"),p=l.call(i,"finallyLoc");if(s&&p){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!p)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&l.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var r=n;break}}r&&("break"===e||"continue"===e)&&r.tryLoc<=t&&t<=r.finallyLoc&&(r=null);var i=r?r.completion:{};return i.type=e,i.arg=t,r?(this.method="next",this.next=r.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),E(a),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var l=a.completion;if("throw"===l.type){var n=l.arg;E(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,a,l){return this.delegate={iterator:M(e),resultName:a,nextLoc:l},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=l}catch(n){"object"===typeof globalThis?globalThis.regeneratorRuntime=l:Function("r","regeneratorRuntime = r")(l)}}}]);
//# sourceMappingURL=chunk-6b209805.ef233204.js.map