(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dd5538fa"],{"084c":function(e,t,o){"use strict";o.d(t,"d",(function(){return i})),o.d(t,"c",(function(){return r})),o.d(t,"a",(function(){return s})),o.d(t,"b",(function(){return n})),o.d(t,"e",(function(){return l}));o("d9e2");function a(e){var t=e.url,o=void 0===t?"":t,a=e.method,i=void 0===a?"GET":a;if(!o)throw new Error("url must be not null");if("GET"!==i.toUpperCase()&&"POST"!==i.toUpperCase())throw new Error('Illegal request method, Methods can only be "GET" or "POST"');return!0}function i(e){var t=e.url,o=void 0===t?"":t,i=e.method,r=void 0===i?"GET":i,s=e.data,n=e.beforeRequest,l=e.afterRequest;if(a({url:o,method:r}))return this["$".concat(r.toLowerCase())]({url:o,data:s,beforeRequest:n,afterRequest:l});throw new Error("params check failed")}function r(e){var t=e.url,o=void 0===t?"":t,i=e.method,r=void 0===i?"GET":i,s=e.data,n=e.beforeRequest,l=e.afterRequest;if(a({url:o,method:r}))return this["$".concat(r.toLowerCase())]({url:o,data:s,beforeRequest:n,afterRequest:l});throw new Error("params check failed")}function s(e){var t=e.url,o=void 0===t?"":t,i=e.method,r=void 0===i?"GET":i,s=e.data,n=e.beforeRequest,l=e.afterRequest;if(a({url:o,method:r}))return this["$".concat(r.toLowerCase())]({url:o,data:s,beforeRequest:n,afterRequest:l});throw new Error("params check failed")}function n(e){var t=e.url,o=void 0===t?"":t,i=e.method,r=void 0===i?"GET":i,s=e.data,n=e.beforeRequest,l=e.afterRequest;if(a({url:o,method:r}))return this["$".concat(r.toLowerCase())]({url:o,data:s,beforeRequest:n,afterRequest:l});throw new Error("params check failed")}function l(e){var t=e.url,o=void 0===t?"":t,i=e.method,r=void 0===i?"GET":i,s=e.data,n=e.beforeRequest,l=e.afterRequest;if(a({url:o,method:r}))return this["$".concat(r.toLowerCase())]({url:o,data:s,beforeRequest:n,afterRequest:l});throw new Error("params check failed")}},"0a5e":function(e,t,o){"use strict";o.d(t,"a",(function(){return s}));var a=o("5530"),i=o("3c24"),r={setTotalSize:function(e){this.pageModel.totalSize=e}},s={mixins:[i["d"]],data:function(){return{pageModel:{currentPage:1,pageSize:10,totalSize:0}}},methods:{pageSizeChanged:function(e){this.pageModel.pageSize=e,this.pageModel.currentPage=1,this.publishEvent("pageChanged",this.pageModel)},currentChanged:function(e){this.pageModel.currentPage=e,this.publishEvent("pageChanged",this.pageModel)},withPageInfoData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a["a"])(Object(a["a"])({},e),{},{page:this.pageModel.currentPage,pageSize:this.pageModel.pageSize})}},created:function(){this.registeEvent(r)}},n={pageChanged:function(){this.doRefresh()}};t["b"]={data:function(){return{dataList:[],tableConfig:{size:"small",headerCellStyle:{backgroundColor:"rgb(255, 255, 255)","text-align":"left","font-weight":"bold","font-size":"18px","font-family":"等线",color:"#151515"},cellStyle:{"text-align":"left","font-size":"18px","font-family":"等线"},height:"100%"},tableLoading:!1}},mounted:function(){var e=this;this.$on("tableHeightChanged",(function(t){e.tableConfig.height=e.$refs.tableBody?e.$refs.tableBody.$el.offsetHeight-10-2:"100%",e.$refs.table&&e.$refs.table.doLayout()}))},methods:{handleSuccess:function(e){var t=e.data,o=void 0===t?[]:t,a=e.totalSize,i=void 0===a?10:a;this.publishEvent("setTotalSize",i),this.dataList=o}},created:function(){this.registeEvent(n)}}},"3c24":function(e,t,o){"use strict";o.d(t,"c",(function(){return d})),o.d(t,"b",(function(){return c})),o.d(t,"e",(function(){return u})),o.d(t,"a",(function(){return m})),o.d(t,"d",(function(){return f}));o("5530"),o("d9e2"),o("d3b7"),o("159b"),o("13d5"),o("b0c0");var a=o("084c"),i=o("fa7d");function r(e,t){e.onResult&&e.onResult(t),e.afterAction&&e.afterAction(t)}function s(e,t){e.onError&&e.onError(t),e.afterAction&&e.afterAction(t)}function n(e){return Object(i["c"])(e.params)?e.params():!!Object(i["d"])(e.params)&&e.params}var l={data:function(){return{selectedItems:[]}},methods:{handleSelectionChange:function(e){this.selectedItems=e}}},d={data:function(){return{getDataModel:{init:!1}}},methods:{initGetData:function(e){var t=e.url,o=e.method,a=e.params,i=e.beforeAction,r=e.onResult,s=e.onError,n=e.afterAction;if(!t)throw new Error("please init url");return this.getDataModel.url=t,this.getDataModel.method=o,this.getDataModel.onResult=r,this.getDataModel.onError=s,this.getDataModel.params=a||{},this.getDataModel.beforeAction=i,this.getDataModel.afterAction=n,this.getDataModel.init=!0,Promise.resolve(this.getDataModel.init)},getData:function(){var e=this,t=n(this.getDataModel);if(!t)throw new Error("please set get param");this.getDataModel.beforeAction&&this.getDataModel.beforeAction(),a["d"].call(this,{url:this.getDataModel.url,method:this.getDataModel.method||"post",data:t}).then((function(t){r.call(e,e.getDataModel,t)})).catch((function(t){s.call(e,e.getDataModel,t)}))}}},c={mixins:[l],data:function(){return{deleteItemsModel:{init:!1}}},methods:{initDeleteItem:function(e){var t=e.url,o=e.method,a=e.params,i=e.multiParams,r=e.onDeleteItem,s=e.onDeleteMultiItem,n=e.beforeAction,l=e.onResult,d=e.onError,c=e.afterAction;if(!t)throw new Error("please init url");this.deleteItemsModel.url=t,this.deleteItemsModel.method=o,this.deleteItemsModel.onResult=l,this.deleteItemsModel.onError=d,this.deleteItemsModel.beforeAction=n,this.deleteItemsModel.afterAction=c,this.deleteItemsModel.params=a,this.deleteItemsModel.multiParams=i,this.deleteItemsModel.onDeleteItem=r,this.deleteItemsModel.onDeleteMultiItem=s,this.deleteItemsModel.init=!0},onDeleteItem:function(e){if(!this.deleteItemsModel.onDeleteItem)throw new Error("please init onDeleteItem");if(!(this.deleteItemsModel.onDeleteItem instanceof Function))throw new Error("onDeleteItem must be Function");this.deleteItemsModel.onDeleteItem(e)},onDeleteMultiItem:function(){if(!this.deleteItemsModel.onDeleteMultiItem)throw new Error("please init onDeleteMultiItem");if(!(this.deleteItemsModel.onDeleteMultiItem instanceof Function))throw new Error("onDeleteMultiItem must be Function");this.deleteItemsModel.onDeleteMultiItem()},doDeleteItem:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"single";if(!this.deleteItemsModel.init)throw new Error("please init deleteItemsModel first");var o={};if("single"===t)o=n(this.deleteItemsModel);else{if("multi"!==t)throw new Error("only support delete single or multi");if(!this.deleteItemsModel.multiParams||!Object(i["c"])(this.deleteItemsModel.multiParams))throw new Error("please set multi params and `multiParams` must be Function type");o=this.deleteItemsModel.multiParams(this.selectedItems)}if(!o)throw new Error("please set delete param");a["b"].call(this,{url:this.deleteItemsModel.url,method:this.deleteItemsModel.method||"post",data:o}).then((function(t){r.call(e,e.deleteItemsModel,t)})).catch((function(t){s.call(e,e.deleteItemsModel,t)}))}}},u={data:function(){return{updateItemModel:{init:!1}}},methods:{initUpdateItem:function(e){var t=e.url,o=e.method,a=e.params,i=e.onUpdateItem,r=e.beforeAction,s=e.onResult,n=e.onError,l=e.afterAction;if(!t)throw new Error("please init url");this.updateItemModel.url=t,this.updateItemModel.method=o,this.updateItemModel.params=a,this.updateItemModel.onResult=s,this.updateItemModel.onError=n,this.updateItemModel.beforeAction=r,this.updateItemModel.afterAction=l,this.updateItemModel.onUpdateItem=i,this.updateItemModel.init=!0},onUpdateItem:function(e){if(!this.updateItemModel.onUpdateItem)throw new Error("please init onUpdateItem");if(!(this.updateItemModel.onUpdateItem instanceof Function))throw new Error("onUpdateItem must be Function");this.updateItemModel.onUpdateItem(e)},doUpdateItem:function(){var e=this;if(!this.updateItemModel.init)throw new Error("please init updateItemModel first");var t=n(this.updateItemModel);if(!t)throw new Error("please set update param");a["e"].call(this,{url:this.updateItemModel.url,method:this.updateItemModel.method||"post",data:t}).then((function(t){r.call(e,e.updateItemModel,t)})).catch((function(t){s.call(e,e.updateItemModel,t)}))}}},m={data:function(){return{addItemModel:{init:!1}}},methods:{initAddItem:function(e){var t=e.url,o=e.method,a=e.params,i=e.onAddItem,r=e.beforeAction,s=e.onResult,n=e.onError,l=e.afterAction;if(!t)throw new Error("please init url");this.addItemModel.url=t,this.addItemModel.method=o,this.addItemModel.params=a,this.addItemModel.onResult=s,this.addItemModel.onError=n,this.addItemModel.beforeAction=r,this.addItemModel.afterAction=l,this.addItemModel.onAddItem=i,this.addItemModel.init=!0},onAddItem:function(){if(!this.addItemModel.onAddItem)throw new Error("please init onAddItem");if(!(this.addItemModel.onAddItem instanceof Function))throw new Error("onAddItem must be Function");this.addItemModel.onAddItem()},doAddItem:function(){var e=this;if(!this.addItemModel.init)throw new Error("please init addItemModel first");var t=n(this.addItemModel);if(!t)throw new Error("please set add param");a["a"].call(this,{url:this.addItemModel.url,method:this.addItemModel.method||"post",data:t}).then((function(t){r.call(e,e.addItemModel,t)})).catch((function(t){s.call(e,e.addItemModel,t)}))}}},f={methods:{doRefresh:function(){if(this.isInited("likeSearchModel"))this.hasSearchParams()?this.doSearch():this.getData();else{if(!this.isInited("getDataModel"))throw new Error("can`t exec doRefresh function");this.getData()}}}}},"4e73":function(e,t,o){e.exports=o.p+"static/img/id_5.85a9c587.jpg"},"53ca":function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));o("a4d3"),o("e01a"),o("d3b7"),o("d28b"),o("3ca3"),o("ddb0");function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}},"598b":function(e,t,o){"use strict";o("cadc")},"8de8":function(e,t,o){e.exports=o.p+"static/img/id_6.6d9c7c21.jpg"},a807:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"main-container"},[t("TableHeader",{attrs:{"can-collapsed":!1}},[t("template",{slot:"left"},[t("el-button",{staticClass:"back-button",attrs:{slot:"reference",float:"left"},on:{click:function(t){return e.toProject()}},slot:"reference"},[t("i",{staticClass:"el-icon-back"})]),t("div",{staticStyle:{float:"right"}},[t("div",{staticClass:"projecttitle",attrs:{id:"projectName"}},[e._v(" "+e._s(e.project_name)+" ")]),t("div",{staticClass:"teamtitle",attrs:{id:"teamName"}},[e._v(" 该项目属于团队"+e._s(e.team_name)+" ")])])],1),t("template",{slot:"right"},[t("el-popover",{attrs:{placement:"top",width:"350"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[t("el-button",{staticClass:"button-style",staticStyle:{"border-color":"#57b1ff"},attrs:{slot:"reference"},on:{click:function(t){e.dialogWordVisible=!0}},slot:"reference"},[e._v("创建文档 "),t("i",{staticClass:"el-icon-plus"})])],1),t("el-popover",{attrs:{placement:"top",width:"350",trigger:"click"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[t("el-button",{staticClass:"button-style",staticStyle:{"border-color":"#a15aff"},attrs:{slot:"reference"},on:{click:function(t){e.dialogPageVisible=!0}},slot:"reference"},[e._v("创建原型 "),t("i",{staticClass:"el-icon-plus"})])],1),t("el-popover",{attrs:{placement:"top",width:"350"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[t("el-button",{staticClass:"button-style",staticStyle:{"border-color":"#ffd45c"},attrs:{slot:"reference"},on:{click:function(t){return e.createUML()}},slot:"reference"},[e._v("创建uml "),t("i",{staticClass:"el-icon-plus"})])],1),t("el-popover",{attrs:{placement:"top",width:"350"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[t("el-button",{staticClass:"button-style",attrs:{slot:"reference"},slot:"reference"},[t("el-dropdown",{attrs:{trigger:"click"},on:{command:e.onCommad}},[t("div",{staticClass:"action-wrapper",staticStyle:{"font-size":"18px","font-weight":"bold","font-family":"等线"}},[e._v(" 设置 "),t("i",{staticClass:"el-icon-setting"})]),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("el-dropdown-item",{attrs:{icon:"el-icon-edit-outline",command:"personalCenter"}},[t("el-button",{attrs:{type:"text"},on:{click:function(t){e.form_updateProject.project_name=e.project_name,e.form_updateProject.project_info=e.project_info,e.dialogUpdateProjectVisible=!0}}},[e._v("修改项目信息")])],1),t("el-dropdown-item",{attrs:{icon:"el-icon-switch-button",command:"logout"}},[t("el-button",{staticStyle:{color:"red"},attrs:{type:"text"},on:{click:e.deleteProject}},[e._v("删除项目")])],1)],1)],1)],1)],1)],1)],2),t("el-dialog",{staticStyle:{width:"120%"},attrs:{title:"创建文档",visible:e.dialogWordVisible},on:{"update:visible":function(t){e.dialogWordVisible=t}}},[t("el-form",{attrs:{model:e.form_word}},[t("el-form-item",{attrs:{label:"文档名称","label-width":e.formLabelWidth}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form_word.doc_name,callback:function(t){e.$set(e.form_word,"doc_name",t)},expression:"form_word.doc_name"}})],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.dialogWordVisible=!1,e.form_word.doc_name=""}}},[e._v("取 消")]),t("el-button",{on:{click:function(t){e.dialogWordVisible=!1,e.createWord()}}},[e._v("无模板创建")])],1),t("el-row",{staticStyle:{"flex-wrap":"wrap","flex-direction":"row"},attrs:{gutter:10,type:"flex",justify:"start"}},e._l(4,(function(a,i){return t("el-col",{key:a,attrs:{span:12}},[t("el-card",{staticStyle:{"margin-top":"20px","margin-left":"0px",width:"300px"},attrs:{"body-style":{padding:"0px"}}},[0===i?t("img",{staticClass:"image",attrs:{src:o("fde4")}}):e._e(),1===i?t("img",{staticClass:"image",attrs:{src:o("4e73")}}):e._e(),2===i?t("img",{staticClass:"image",attrs:{src:o("8de8")}}):e._e(),3===i?t("img",{staticClass:"image",attrs:{src:o("e7cd")}}):e._e(),t("div",{staticStyle:{padding:"0px"}},[0===i?t("span",[e._v("会议纪要")]):e._e(),1===i?t("span",[e._v("项目工作汇报")]):e._e(),2===i?t("span",[e._v("个人学习计划")]):e._e(),3===i?t("span",[e._v("年度工作总结")]):e._e(),t("div",[t("el-button",{staticClass:"button",attrs:{type:"text"},on:{click:function(t){e.dialogWordVisible=!1,e.form_word.template_id=i,e.createWord()}}},[e._v("创建")])],1)])])],1)})),1)],1),t("el-dialog",{attrs:{title:"创建原型",visible:e.dialogPageVisible},on:{"update:visible":function(t){e.dialogPageVisible=t}}},[t("el-form",{attrs:{model:e.form_createAxure}},[t("el-form-item",{attrs:{label:"原型名称","label-width":e.formLabelWidth}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form_createAxure.axure_name,callback:function(t){e.$set(e.form_createAxure,"axure_name",t)},expression:"form_createAxure.axure_name"}})],1),t("el-form-item",{attrs:{label:"原型简介（可不填）","label-width":e.formLabelWidth}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form_createAxure.axure_info,callback:function(t){e.$set(e.form_createAxure,"axure_info",t)},expression:"form_createAxure.axure_info"}})],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.dialogPageVisible=!1,e.form_createAxure.axure_name=""}}},[e._v("取消")]),t("el-button",{on:{click:function(t){e.createAxure(),e.form_createAxure.axure_name="",e.dialogPageVisible=!1}}},[e._v("空模板创建")])],1),t("el-row",{staticStyle:{"flex-wrap":"wrap","flex-direction":"row"},attrs:{gutter:10,type:"flex",justify:"start"}},e._l(3,(function(o,a){return t("el-col",{key:o,attrs:{span:12}},[t("el-card",{staticStyle:{"margin-top":"20px","margin-left":"0px",width:"300px"},attrs:{"body-style":{padding:"0px"}}},[t("div",{staticStyle:{padding:"14px"}},[0===a?t("span",[e._v("登录模板")]):e._e(),1===a?t("span",[e._v("论坛app")]):e._e(),2===a?t("span",[e._v("web开发主页")]):e._e(),t("div",{staticClass:"bottom clearfix"},[t("el-button",{staticClass:"button",attrs:{type:"text"},on:{click:function(t){e.flag=a+1,e.toPreview()}}},[e._v("预览")]),t("el-button",{staticClass:"button",attrs:{type:"text"},on:{click:function(t){e.form_createAxure.axure_template_id=a+1,e.createAxure(),e.dialogPageVisible=!1}}},[e._v("创建")])],1)])])],1)})),1)],1),t("el-dialog",{attrs:{title:"修改项目信息",visible:e.dialogUpdateProjectVisible},on:{"update:visible":function(t){e.dialogUpdateProjectVisible=t}}},[t("el-form",{attrs:{model:e.form_updateProject}},[t("el-form-item",{attrs:{label:"项目新名称","label-width":e.formLabelWidth}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form_updateProject.project_name,callback:function(t){e.$set(e.form_updateProject,"project_name",t)},expression:"form_updateProject.project_name"}})],1),t("el-form-item",{attrs:{label:"项目新简介（可不填）","label-width":e.formLabelWidth}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form_updateProject.project_info,callback:function(t){e.$set(e.form_updateProject,"project_info",t)},expression:"form_updateProject.project_info"}})],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.dialogUpdateProjectVisible=!1,e.form_updateProject.project_name=""}}},[e._v("取 消")]),t("el-button",{on:{click:function(t){e.updateProject(),e.dialogUpdateProjectVisible=!1}}},[e._v("确 定")])],1)],1),t("el-dialog",{attrs:{title:"修改文档信息",visible:e.dialogUpdateDocInfoVisible},on:{"update:visible":function(t){e.dialogUpdateDocInfoVisible=t}}},[t("el-form",{attrs:{model:e.form_updateDocInfo}},[t("el-form-item",{attrs:{label:"文档新名称","label-width":e.formLabelWidth}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form_updateDocInfo.doc_name,callback:function(t){e.$set(e.form_updateDocInfo,"doc_name",t)},expression:"form_updateDocInfo.doc_name"}})],1),t("el-form-item",{attrs:{label:"文档新简介（可不填）","label-width":e.formLabelWidth}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form_updateDocInfo.doc_description,callback:function(t){e.$set(e.form_updateDocInfo,"doc_description",t)},expression:"form_updateDocInfo.doc_description"}})],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.dialogUpdateDocInfoVisible=!1}}},[e._v("取 消")]),t("el-button",{on:{click:function(t){e.updateDocInfo(),e.dialogUpdateDocInfoVisible=!1}}},[e._v("确 定")])],1)],1),t("el-dialog",{attrs:{title:"修改原型信息",visible:e.dialogUpdateAxureInfoVisible},on:{"update:visible":function(t){e.dialogUpdateAxureInfoVisible=t}}},[t("el-form",{attrs:{model:e.form_updateAxureInfo}},[t("el-form-item",{attrs:{label:"原型新名称","label-width":e.formLabelWidth}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form_updateAxureInfo.axure_name,callback:function(t){e.$set(e.form_updateAxureInfo,"axure_name",t)},expression:"form_updateAxureInfo.axure_name"}})],1),t("el-form-item",{attrs:{label:"原型新简介（可不填）","label-width":e.formLabelWidth}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form_updateAxureInfo.axure_info,callback:function(t){e.$set(e.form_updateAxureInfo,"axure_info",t)},expression:"form_updateAxureInfo.axure_info"}})],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.dialogUpdateAxureInfoVisible=!1,e.form_updateAxureInfo.axure_name="",e.form_updateAxureInfo.axure_info=""}}},[e._v("取 消")]),t("el-button",{on:{click:function(t){e.updateAxureInfo(),e.dialogUpdateAxureInfoVisible=!1}}},[e._v("确 定")])],1)],1),t("TableBody",{ref:"tableBody",staticClass:"temptablebody"},[[t("el-tabs",{staticClass:"messagecss",staticStyle:{height:"200px"},attrs:{"tab-position":e.top}},[t("el-tab-pane",[t("span",{staticClass:"fontClass",staticStyle:{"font-size":"large",color:"#2c2c2c"},attrs:{slot:"label"},slot:"label"},[t("i",{staticClass:"el-icon-folder-opened"}),e._v("文档")]),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableloading,expression:"tableloading"}],ref:"table",staticClass:"table-custom",attrs:{data:e.docList,"header-cell-style":e.tableConfig.headerCellStyle,"cell-style":e.tableConfig.cellStyle,size:e.tableConfig.size},on:{"row-dblclick":e.toDocEditor}},[t("el-table-column",{attrs:{width:"20"}}),t("el-table-column",{attrs:{align:"center",label:"名称",prop:"doc_name",width:"375px",sortable:""}}),t("el-table-column",{attrs:{align:"center",label:"更新时间",prop:"last_edit_time",width:"250px",sortable:""}}),t("el-table-column",{attrs:{align:"center",label:"创建者",prop:"creator_name",width:"200px"}}),t("el-table-column",{attrs:{align:"center",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(o){return[t("el-dropdown",{attrs:{trigger:"click"},on:{command:e.onCommad}},[t("div",{staticClass:"action-wrapper"},[t("span",{staticClass:"nick-name el-dropdown-link"},[t("i",{staticClass:"el-icon-more"})])]),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[o.row.is_favorite?e._e():t("el-dropdown-item",{attrs:{icon:"el-icon-star-off",command:"personalCenter"}},[t("el-button",{attrs:{type:"text"},on:{click:function(t){return e.likeDoc(o.row)}}},[e._v("收藏")])],1),o.row.is_favorite?t("el-dropdown-item",{attrs:{icon:"el-icon-star-on",command:"personalCenter"}},[t("el-button",{attrs:{type:"text"},on:{click:function(t){return e.unlikeDoc(o.row)}}},[e._v("取消收藏")])],1):e._e(),t("el-dropdown-item",{attrs:{icon:"el-icon-edit-outline",command:"personalCenter"}},[t("el-button",{attrs:{type:"text"},on:{click:function(t){e.form_updateDocInfo.doc_id=o.row.doc_id,e.dialogUpdateDocInfoVisible=!0}}},[e._v("重命名")])],1),t("el-dropdown-item",{attrs:{icon:"el-icon-switch-button",command:"logout"}},[t("el-button",{attrs:{type:"text"},on:{click:function(t){e.form_deleteDoc.doc_id=o.row.doc_id,e.deleteDoc()}}},[e._v("删除文件")])],1)],1)],1)]}}])})],1)],1),t("el-tab-pane",[t("span",{staticClass:"fontClass",staticStyle:{"font-size":"large",color:"#2c2c2c"},attrs:{slot:"label"},slot:"label"},[t("i",{staticClass:"el-icon-monitor"}),e._v("原型")]),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"table",staticClass:"table-custom",attrs:{data:e.axureList,"header-cell-style":e.tableConfig.headerCellStyle,size:e.tableConfig.size,"cell-style":e.tableConfig.cellStyle},on:{"row-dblclick":e.toAxureEditor}},[t("el-table-column",{attrs:{width:"20"}}),t("el-table-column",{attrs:{align:"center",label:"名称",prop:"axure_name",width:"375px",sortable:""}}),t("el-table-column",{attrs:{align:"center",label:"更新时间",prop:"last_edit",width:"250px",sortable:""}}),t("el-table-column",{attrs:{align:"center",label:"创建者",prop:"create_user",width:"200px"}}),t("el-table-column",{attrs:{align:"center",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(o){return[t("el-dropdown",{attrs:{trigger:"click"},on:{command:e.onCommad}},[t("div",{staticClass:"action-wrapper"},[t("span",{staticClass:"nick-name el-dropdown-link"},[t("i",{staticClass:"el-icon-more"})])]),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[o.row.isFavorite?e._e():t("el-dropdown-item",{attrs:{icon:"el-icon-star-off",command:"personalCenter"}},[t("el-button",{attrs:{type:"text"},on:{click:function(t){return e.likeAxure(o.row)}}},[e._v("收藏")])],1),o.row.isFavorite?t("el-dropdown-item",{attrs:{icon:"el-icon-star-on",command:"personalCenter"}},[t("el-button",{attrs:{type:"text"},on:{click:function(t){return e.unlikeAxure(o.row)}}},[e._v("取消收藏")])],1):e._e(),t("el-dropdown-item",{attrs:{icon:"el-icon-edit-outline",command:"personalCenter"}},[t("el-button",{attrs:{type:"text"},on:{click:function(t){e.form_updateAxureInfo.axure_id=o.row.axure_id,e.dialogUpdateAxureInfoVisible=!0}}},[e._v("重命名")])],1),t("el-dropdown-item",{attrs:{icon:"el-icon-switch-button",command:"logout"}},[t("el-button",{attrs:{type:"text"},on:{click:function(t){return e.deleteAxure(o.row)}}},[e._v("删除原型")])],1)],1)],1)]}}])})],1)],1)],1)]],2),t("TableBody",{ref:"tableBody",staticClass:"rightside"},[[t("div",{staticClass:"rightsidefont"},[e._v(" About ")]),t("el-divider"),t("div",[t("span",[e._v(e._s(e.project_info))]),t("el-divider")],1)]],2)],1)},i=[],r=(o("a9e3"),o("ac1f"),o("5319"),o("0a5e")),s=o("3c24"),n=o("f385"),l=o("46da"),d=o("a991"),c=o("8159"),u=o("4328"),m=o.n(u),f=o("0f9a"),p=o("a18c"),g={name:"TableGroupMember",components:{SingleUpload:n["default"],BaseForm:l["default"]},directives:{draggable:d["a"]},mixins:[r["b"],r["a"],s["c"],s["a"],s["b"],s["e"],s["d"]],data:function(){return{visible_setPerm:!0,loading:!1,flag:"",form_likeAxure:{token:f["getters"].getToken(f["state"]),axure_id:null},form_updateAxureInfo:{token:f["getters"].getToken(f["state"]),axure_id:null,axure_name:null,axure_info:null},form_likeDoc:{token:f["getters"].getToken(f["state"]),doc_id:null,undo:null},form_deleteAxure:{token:f["getters"].getToken(f["state"]),axure_id:null},form_createAxure:{token:f["getters"].getToken(f["state"]),axure_name:null,axure_info:null,project_id:localStorage.getItem("project_id"),axure_template_id:0},form_getAxureList:{token:f["getters"].getToken(f["state"]),project_id:localStorage.getItem("project_id")},form_deleteDoc:{token:f["getters"].getToken(f["state"]),doc_id:null,recycle:!1},form_updateDocInfo:{token:f["getters"].getToken(f["state"]),doc_id:null,doc_name:null,doc_description:null},form_deleteProject:{token:f["getters"].getToken(f["state"]),user_id:f["getters"].getUserId(f["state"]),project_id:localStorage.getItem("project_id")},form_updateProject:{token:f["getters"].getToken(f["state"]),user_id:f["getters"].getUserId(f["state"]),project_id:localStorage.getItem("project_id"),project_name:"",project_info:""},form_member:{token:f["getters"].getToken(f["state"]),username:f["getters"].getUserName(f["state"]),user_id:f["getters"].getUserId(f["state"]),team_id:Number(localStorage.getItem("team_id"))},project_info:localStorage.getItem("project_info"),visible:!1,form_word:{token:f["getters"].getToken(f["state"]),project_id:localStorage.getItem("project_id"),doc_name:"",doc_description:"",template_id:""},form_page:{token:f["getters"].getToken(f["state"]),username:f["getters"].getUserName(f["state"]),page_name:"",team_id:Number(localStorage.getItem("team_id"))},form_getDocInfo:{token:f["getters"].getToken(f["state"]),doc_id:localStorage.getItem("doc_id")},form_deleteMember:{token:f["getters"].getToken(f["state"]),username:f["getters"].getUserName(f["state"]),user_id:f["getters"].getUserId(f["state"]),team_id:Number(localStorage.getItem("team_id")),deleted_id:null},form_quitTeam:{token:f["getters"].getToken(f["state"]),username:f["getters"].getUserName(f["state"]),user_id:f["getters"].getUserId(f["state"]),team_id:Number(localStorage.getItem("team_id"))},form_setPerm:{token:f["getters"].getToken(f["state"]),username:f["getters"].getUserName(f["state"]),user_id:f["getters"].getUserId(f["state"]),team_id:Number(localStorage.getItem("team_id")),member_id:0,perm:null},project_name:localStorage.getItem("project_name"),team_name:localStorage.getItem("team_name"),dialogWordVisible:!1,dialogPageVisible:!1,dialogMethodVisible:!1,dialogUpdateProjectVisible:!1,dialogUpdateDocInfoVisible:!1,dialogUpdateAxureInfoVisible:!1,axureList:[],deleteMemberList:[],docList:[],powerOptions:[{value:1,label:"队长"},{value:2,label:"开发者"},{value:3,label:"观察者"}],userModel:{address:"",avatar:"",gender:1,id:1,lastLoginIp:"",lastLoginTime:"",nickName:"",status:0,vip:1}}},created:function(){this.getModel(),this.getDocList(),this.getAxureList(),localStorage.setItem("flag","user"),localStorage.setItem("enable","true")},methods:{toPreview:function(){1===this.flag&&window.open("http://101.42.171.88:8090/file/1/2022-08-10_20:43:39.003_34c2a9f2c8ebc5ce91f89093847b0ca.jpg"),2===this.flag&&window.open("http://101.42.171.88:8090/file/1/2022-08-10_23:46:05.107_1031674e6fd66b54c5961c8ea82b92b.jpg"),3===this.flag&&window.open("http://101.42.171.88:8090/file/1/2022-08-10_23:49:31.864_d7c3de135e0d2ac17f0524952057757.jpg")},getModel:function(){this.$axios.get("/axure/getAxureTemplateList",{params:{token:f["getters"].getToken(f["state"])}}).then((function(e){e.data.success&&console.log(e.data.data)}))},likeAxure:function(e){var t=this;this.form_likeAxure.axure_id=e.axure_id,e.isFavorite=!0,this.$axios.post("/axure/addFavoriteAxure",m.a.stringify(this.form_likeAxure)).then((function(e){e.data.success?t.$message.success(e.data.message):t.$message.error(e.data.message)}))},unlikeAxure:function(e){var t=this;this.form_likeAxure.axure_id=e.axure_id,e.isFavorite=!1,this.$axios.post("/axure/deleteFavoriteAxure",m.a.stringify(this.form_likeAxure)).then((function(e){e.data.success?t.$message.success(e.data.message):t.$message.error(e.data.message)}))},updateAxureInfo:function(){var e=this;this.$axios.post("/axure/updateInfo",m.a.stringify(this.form_updateAxureInfo)).then((function(t){t.data.success?(e.$message.success(t.data.message),e.getAxureList()):e.$message.error(t.data.message)}))},likeDoc:function(e){var t=this;this.form_likeDoc.doc_id=e.doc_id,this.form_likeDoc.undo=!1,e.is_favorite=!0,this.$axios.post("/user/favorite",m.a.stringify(this.form_likeDoc)).then((function(e){e.data.success?t.$message.success(e.data.message):t.$message.error(e.data.message)}))},unlikeDoc:function(e){var t=this;this.form_likeDoc.doc_id=e.doc_id,this.form_likeDoc.undo=!0,e.is_favorite=!1,this.$axios.post("/user/favorite",m.a.stringify(this.form_likeDoc)).then((function(e){e.data.success?t.$message.success(e.data.message):t.$message.error(e.data.message)}))},deleteAxure:function(e){var t=this;this.$confirm("此操作将使您删除此原型, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.form_deleteAxure.axure_id=e.axure_id,t.$axios.post("/axure/delete",m.a.stringify(t.form_deleteAxure)).then((function(e){e.data.success?(t.$message.success(e.data.message),t.getAxureList()):t.$message.error(e.data.message)}))})).catch((function(){t.$message({type:"info",message:"已取消操作"})}))},toAxureEditor:function(e){localStorage.setItem("axure_id",e.axure_id),localStorage.setItem("axure_name",e.axure_name),localStorage.setItem("axure_info",e.axure_info),localStorage.setItem("Token",f["getters"].getToken(f["state"])),this.$router.push("/posterEditor")},createAxure:function(){var e=this;this.$axios.post("/axure/create",m.a.stringify(this.form_createAxure)).then((function(t){t.data.success?(e.$message.success(t.data.message),e.getAxureList()):e.$message.error(t.data.message)}))},getAxureList:function(){var e=this;this.loading=!0,this.axureList=[],this.$axios.post("/axure/getAxureList",m.a.stringify(this.form_getAxureList)).then((function(t){if(t.data.success)for(var o=0;o<t.data.data.length;o++){var a={axure_info:null,axure_id:null,project_id:null,axure_name:null,title:null,config:null,items:null,last_edit:null,create_user:null,isFavorite:null};a.axure_info=t.data.data[o].axure_info,a.axure_id=t.data.data[o].axure_id,a.project_id=t.data.data[o].project_id,a.axure_name=t.data.data[o].axure_name,a.title=t.data.data[o].title,a.config=t.data.data[o].config,a.items=t.data.data[o].items,a.last_edit=t.data.data[o].last_edit,a.create_user=t.data.data[o].create_user,a.isFavorite=1===t.data.data[o].isFavorite;for(var i=0,r=0;r<e.axureList.length;r++)if(e.axureList[r].axure_id===a.axure_id){i=1;break}i||e.axureList.push(a)}e.loading=!1}))},toDocEditor:function(e){var t=this;localStorage.setItem("flag","out"),localStorage.setItem("doc_id",e.doc_id),localStorage.setItem("doc_name",e.doc_name),localStorage.setItem("is_favorite",e.is_favorite),this.$axios.get("/doc/getDocInfo",{params:{token:f["getters"].getToken(f["state"]),doc_id:localStorage.getItem("doc_id")}}).then((function(e){e.data.success?(localStorage.setItem("doc_content",e.data.data[0].doc_content),t.$router.push("/editor/rich-text")):t.$message.error(e.data.message)}))},deleteDoc:function(){var e=this;this.$confirm("此操作将使您删除此文档, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.$axios.post("/doc/deleteDoc",m.a.stringify(e.form_deleteDoc)).then((function(t){t.data.success?(e.$message.success(t.data.message),e.getDocList()):e.$message.error(t.data.message)}))})).catch((function(){e.$message({type:"info",message:"已取消操作"})}))},updateDocInfo:function(){var e=this;this.$axios.post("/doc/updateDocInfo",m.a.stringify(this.form_updateDocInfo)).then((function(t){t.data.success?(e.$message.success(t.data.message),e.getDocList()):e.$message.error(t.data.message)}))},deleteProject:function(){var e=this;this.$confirm("此操作将使您删除此项目, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.$axios.post("/project/delete",m.a.stringify(e.form_deleteProject)).then((function(t){t.data.success?(e.$message.success(t.data.message),e.toProject()):e.$message.error(t.data.message)}))})).catch((function(){e.$message({type:"info",message:"已取消操作"})}))},updateProject:function(){var e=this;this.$axios.post("/project/update",m.a.stringify(this.form_updateProject)).then((function(t){t.data.success?(e.$message.success(t.data.message),e.project_name=e.form_updateProject.project_name,e.project_info=e.form_updateProject.project_info,localStorage.setItem("project_name",e.project_name),localStorage.setItem("project_info",e.project_info)):e.$message.error(t.data.message)}))},getDocList:function(){var e=this;this.docList=[],this.$axios.get("/doc/getDocList",{params:{token:f["getters"].getToken(f["state"]),project_id:localStorage.getItem("project_id")}}).then((function(t){if(t.data.success)for(var o=0;o<t.data.data.length;o++){var a={doc_name:null,last_edit_time:null,project_id:null,doc_description:null,creator_id:null,doc_content:null,creator_name:null,doc_id:null,is_favorite:null};a.doc_name=t.data.data[o].doc_name,a.last_edit_time=t.data.data[o].last_edit_time,a.project_id=t.data.data[o].project_id,a.doc_description=t.data.data[o].doc_description,a.creator_id=t.data.data[o].creator_id,a.doc_content=t.data.data[o].doc_content,a.creator_name=t.data.data[o].creator_name,a.doc_id=t.data.data[o].doc_id,a.is_favorite=t.data.data[o].is_favorite;for(var i=0,r=0;r<e.docList.length;r++)if(e.docList[r].doc_id===a.doc_id){i=1;break}i||e.docList.push(a)}else e.$message.error(t.data.message)}))},createUML:function(){p["a"].push("/drawio")},setPerm:function(e){var t=this;this.form_setPerm.member_id=e.id,this.$axios.post("/team/set_perm",m.a.stringify(this.form_setPerm)).then((function(e){7===e.data.result?t.$message.success(e.data.message):t.$message.error(e.data.message),t.getMemberList()}))},deleteItem:function(e){var t=this;e.id===this.form_deleteMember.user_id?this.$confirm("此操作将使您退出此团队, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.quitTeam()})).catch((function(){t.$message({type:"info",message:"已取消操作"})})):this.$confirm("此操作将踢出用户成员"+e.username+", 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.deleteMember(e)})).catch((function(){t.$message({type:"info",message:"已取消操作"})}))},handleSelectionChange:function(e){this.deleteMemberList=e},deleteMultiItem:function(){var e=this;this.$confirm("此操作将踢出您选中的所有成员, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){for(var t=0;t<e.deleteMemberList.length;t++)e.deleteMember(e.deleteMemberList[t]);e.getMemberList()})).catch((function(){e.$message({type:"info",message:"已取消踢出"})}))},deleteMember:function(e){var t=this;this.form_deleteMember.deleted_id=e.id,this.$axios.post("/team/delete_member",m.a.stringify(this.form_deleteMember)).then((function(e){5===e.data.result?t.$message.success(e.data.message):t.$message.error(e.data.message),t.getMemberList()}))},quitTeam:function(){var e=this;this.$axios.post("/team/quit_team",m.a.stringify(this.form_quitTeam)).then((function(t){5===t.data.result?e.$message.success(t.data.message):e.$message.error(t.data.message),e.onGroupSpace()}))},onGroupSpace:function(){c["a"].toGroupSpace&&c["a"].toGroupSpace()},clearList:function(){this.memberList=[]},onFile:function(){this.$router.push("/list/table-group-file")},toProject:function(){this.$router.replace("/list/table-group-message")},createWord:function(){var e=this;0===this.form_word.template_id&&(this.form_word.template_id=4),1===this.form_word.template_id&&(this.form_word.template_id=5),2===this.form_word.template_id&&(this.form_word.template_id=6),3===this.form_word.template_id&&(this.form_word.template_id=7),this.$axios.post("/doc/newDoc",m.a.stringify(this.form_word)).then((function(t){t.data.success?(e.$message.success(t.data.message),e.getDocList()):e.$message.error(t.data.message)}))},onRichTextEditor:function(){c["a"].toRichTextEditor&&c["a"].toRichTextEditor()},onChooseTemplate:function(){c["a"].toChooseTemplate&&c["a"].toChooseTemplate()},onSingleSuccess:function(e){var t=e.res;200!==t.status?this.$errorMsg(t.msg):this.userModel=t.obj},beforeUpload:function(e){var t=e.size;if(t/1024>500)return this.$errorMsg("上传文件最大不能超过500K"),!1}}},h=g,_=(o("598b"),o("2877")),b=Object(_["a"])(h,a,i,!1,null,"58294074",null);t["default"]=b.exports},a991:function(e,t,o){"use strict";var a=o("53ca"),i={left:0,right:0,top:0,bottom:0},r={inserted:function(e,t,o){var a=e.querySelector(".el-dialog__header");a.style.cursor="move";var r=e.querySelector(".el-dialog"),s=0,n=0,l="";a.addEventListener("mousedown",(function(e){e.preventDefault(),l="down",i.left=-(document.documentElement.clientWidth-r.clientWidth)/2,i.right=Math.abs(i.left);var t=parseInt(r.style.marginTop)/100;i.top=-document.documentElement.clientHeight*t,i.bottom=document.documentElement.clientHeight*(1-t)-r.clientHeight,s=e.clientX-parseInt(r.style.left||0),n=e.clientY-parseInt(r.style.top||0);var o=function(e){if("down"===l){var t=e.clientX,o=e.clientY,a=t-s,d=o-n;a<=i.left&&(a=i.left),a>=i.right&&(a=i.right),d<=i.top&&(d=i.top),d>=i.bottom&&(d=i.bottom),r.style.left=a+"px",r.style.top=d+"px"}},a=function e(){l="up",document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",e)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",a)}))}},s=function(e){e.directive("draggable",r)};r.install=s,void 0!==("undefined"===typeof window?"undefined":Object(a["a"])(window))&&Window.vue&&s(window.Vue);t["a"]=r},cadc:function(e,t,o){},e7cd:function(e,t,o){e.exports=o.p+"static/img/id_7.62d11753.jpg"},fde4:function(e,t,o){e.exports=o.p+"static/img/id_4.35c93bcb.jpg"}}]);