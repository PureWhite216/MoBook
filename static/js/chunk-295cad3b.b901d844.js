(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-295cad3b"],{1613:function(e,t,o){"use strict";o.d(t,"a",(function(){return m})),o.d(t,"b",(function(){return g}));var a=o("2b0e");const s=a["default"].prototype.$isServer,i=(s||Number(document.documentMode),function(){return!s&&document.addEventListener?function(e,t,o){e&&t&&o&&e.addEventListener(t,o,!1)}:function(e,t,o){e&&t&&o&&e.attachEvent("on"+t,o)}}());(function(){!s&&document.removeEventListener})();const r=[],n="@@clickoutsideContext";let c,d=0;function l(e,t,o){return function(a={},s={}){!(o&&o.context&&a.target&&s.target)||e.contains(a.target)||e.contains(s.target)||e===a.target||o.context.popperElm&&(o.context.popperElm.contains(a.target)||o.context.popperElm.contains(s.target))||(t.expression&&e[n].methodName&&o.context[e[n].methodName]?o.context[e[n].methodName]():e[n].bindingFn&&e[n].bindingFn())}}!a["default"].prototype.$isServer&&i(document,"mousedown",e=>c=e),!a["default"].prototype.$isServer&&i(document,"mouseup",e=>{r.forEach(t=>t[n].documentHandler(e,c))});var m={bind(e,t,o){r.push(e);const a=d++;e[n]={id:a,documentHandler:l(e,t,o),methodName:t.expression,bindingFn:t.value}},update(e,t,o){e[n].documentHandler=l(e,t,o),e[n].methodName=t.expression,e[n].bindingFn=t.value},unbind(e){let t=r.length;for(let o=0;o<t;o++)if(r[o][n].id===e[n].id){r.splice(o,1);break}delete e[n]}},g={bind:function(e,t){e.onmousedown=function(e){var o=document.querySelector(String(t.arg));if(o){var a=e.clientX-o.offsetLeft,s=e.clientY-o.offsetTop,i=0,r=window.innerWidth-o.clientWidth,n=0,c=window.innerHeight-o.clientHeight;document.addEventListener("mousemove",d),document.addEventListener("mouseup",(function(){document.removeEventListener("mousemove",d),document.onmouseup=null}))}function d(e){var t=Math.min(Math.max(e.clientX-a,i),r),d=Math.min(Math.max(e.clientY-s,n),c);o.style.left=t+"px",o.style.top=d+"px"}}}}},"452c":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"main-container"},[t("el-row",{staticStyle:{background:"#2f2f2f","min-height":"40px"}},[t("el-col",{attrs:{span:8}},[t("el-button",{staticClass:"backbutton",staticStyle:{"margin-left":"20px","margin-top":"3px"},on:{click:e.back}},[t("i",{staticClass:"el-icon-back",staticStyle:{"font-size":"x-large"}})])],1),t("el-col",{staticStyle:{"text-align":"center","margin-top":"12px"},attrs:{span:8}},[t("div",{staticStyle:{"font-size":"16px",color:"#ececec"},attrs:{contenteditable:"true"}},[e._v(" "+e._s(e.title)+" ")]),t("div")])],1),t("el-dialog",{attrs:{title:"创建团队文件",visible:e.dialogCreateDoc},on:{"update:visible":function(t){e.dialogCreateDoc=t}}},[t("el-form",{attrs:{model:e.form_createDoc}},[t("el-form-item",{attrs:{label:"文档名称","label-width":e.formLabelWidth}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form_createDoc.doc_name,callback:function(t){e.$set(e.form_createDoc,"doc_name",t)},expression:"form_createDoc.doc_name"}})],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.dialogCreateDoc=!1,e.form_createDoc.doc_name=""}}},[e._v("取 消")]),t("el-button",{on:{click:function(t){e.CreateDoc(),e.dialogCreateDoc=!1}}},[e._v("确 定")])],1)],1),t("el-dialog",{attrs:{title:"创建文档目录",visible:e.dialogCreateDir},on:{"update:visible":function(t){e.dialogCreateDir=t}}},[t("el-form",{attrs:{model:e.form_createDir}},[t("el-form-item",{attrs:{label:"目录名称","label-width":e.formLabelWidth}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form_createDir.dict_name,callback:function(t){e.$set(e.form_createDir,"dict_name",t)},expression:"form_createDir.dict_name"}})],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.dialogCreateDir=!1,e.form_createDir.dict_name=""}}},[e._v("取 消")]),t("el-button",{on:{click:function(t){e.CreateDir(),e.dialogCreateDir=!1}}},[e._v("确 定")])],1)],1),t("el-card",{staticStyle:{"max-width":"950px",margin:"auto"},attrs:{"body-style":{padding:"0"}},scopedSlots:e._u([{key:"header",fn:function(){return[t("p",{staticStyle:{color:"black","font-family":"等线","font-size":"20px","font-weight":"bold"}},[e._v("Title")])]},proxy:!0}])},[t("el-input",{staticClass:"title-input",attrs:{placeholder:"请输入文章标题"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}})],1),t("el-card",{staticClass:"margin-top-xs",staticStyle:{"max-width":"950px",margin:"auto"},attrs:{"body-style":{padding:"0"}},scopedSlots:e._u([{key:"header",fn:function(){return[t("div",{staticClass:"flex"},[t("div",{staticClass:"flex-sub"}),t("el-button",{staticStyle:{"margin-inline":"10px",background:"#49aaef",color:"white",border:"0"},on:{click:e.Save}},[t("i",{staticClass:"el-icon-plus"}),e._v(" 保存")]),e.is_favorite?e._e():t("el-button",{staticStyle:{"margin-inline":"10px",background:"orange",color:"white",border:"0"},on:{click:e.likeDoc}},[t("i",{staticClass:"el-icon-star-on"}),e._v(" 收藏")]),e.is_favorite?t("el-button",{staticStyle:{"margin-inline":"10px",background:"orange",color:"white",border:"0"},on:{click:e.unlikeDoc}},[t("i",{staticClass:"el-icon-star-off"}),e._v(" 取消收藏")]):e._e(),t("el-button",{staticStyle:{"margin-inline":"10px",background:"#16dcea",color:"white",border:"0"},on:{click:e.exportPDF}},[t("i",{staticClass:"el-icon-upload"}),e._v(" 导出")]),t("el-button",{staticStyle:{"margin-inline":"10px",background:"#2ce8b9",color:"white",border:"0"},on:{click:e.openPreview}},[t("i",{staticClass:"el-icon-share"}),e._v(" 生成预览")]),t("el-button",{staticStyle:{"margin-inline":"10px",background:"#2ce8b9",color:"white",border:"0"},on:{click:e.closePreview}},[t("i",{staticClass:"el-icon-s-release"}),e._v(" 关闭预览")])],1)]},proxy:!0}])},[t("RichTextEditor",{ref:"richTextEditor",attrs:{id:"pdfDom",height:1e3},model:{value:e.editor,callback:function(t){e.editor=t},expression:"editor"}})],1),t("div",{directives:[{name:"drag",rawName:"v-drag:#drag",arg:"#drag"}],staticClass:"drag-box",attrs:{id:"drag"}},[e._m(0),t("el-table",{ref:"table",attrs:{data:e.data,"default-expand-all":!0,lazy:"","row-key":"dir_id","expand-row-keys":e.expands,"tree-props":{children:"children",hasChildren:"hasChildren"}},on:{"row-dblclick":e.toDocEditor}},[t("el-table-column",{attrs:{align:"left",label:"团队文档"},scopedSlots:e._u([{key:"default",fn:function(o){return["documentation"===o.row.type?t("i",{staticClass:"el-icon-document"}):e._e(),"documentation"!==o.row.type?t("i",{staticClass:"el-icon-folder"}):e._e(),t("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(o.row.dir_name))]),"dir"===o.row.type&&o.row.dir_id!==e.prj_root_id&&o.row.dir_parent_id!==e.prj_root_id?t("i",{staticClass:"el-icon-document-add",staticStyle:{"margin-left":"10px"},on:{click:function(t){e.form_createDoc.dest_folder_id=o.row.dir_id,e.dialogCreateDoc=!0}}}):e._e(),"dir"===o.row.type&&o.row.dir_id!==e.prj_root_id&&o.row.dir_parent_id!==e.prj_root_id?t("i",{staticClass:"el-icon-folder-add",staticStyle:{"margin-left":"5px"},on:{click:function(t){e.form_createDir.dest_folder_id=o.row.dir_id,e.dialogCreateDir=!0}}}):e._e()]}}])})],1)],1)],1)},s=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"boxhead"},[t("i",{staticClass:"el-icon-menu"}),t("p",[e._v("团队文档")])])}],i=(o("a9e3"),o("fb6a"),o("74ca")),r=o("0f9a"),n=o("4328"),c=o.n(n),d=o("8159"),l=o("1613"),m={name:"RichText",components:{RichTextEditor:i["default"]},directives:{drag:l["b"]},data:function(){return{url_preview:null,is_favorite:"true"===localStorage.getItem("is_favorite"),form_likeDoc:{token:r["getters"].getToken(r["state"]),doc_id:null,undo:null},imgUrl:"",dialogCreateDoc:!1,dialogCreateDir:!1,prj_root_id:localStorage.getItem("prj_root_id"),dialogVisible_share:!1,form_openPreview:{token:r["getters"].getToken(r["state"]),doc_id:localStorage.getItem("doc_id"),html_code:null},form_closePreview:{token:r["getters"].getToken(r["state"]),doc_id:localStorage.getItem("doc_id")},form_createDoc:{token:r["getters"].getToken(r["state"]),doc_name:"",team_id:localStorage.getItem("team_id"),dest_folder_id:""},form_createDir:{token:r["getters"].getToken(r["state"]),dict_name:"",dest_folder_id:""},form:{token:r["getters"].getToken(r["state"]),user_id:r["getters"].getUserId(r["state"]),username:r["getters"].getUserName(r["state"]),word_id:localStorage.getItem("word_id"),word_content:""},form1:{token:r["getters"].getToken(r["state"]),user_id:r["getters"].getUserId(r["state"]),username:r["getters"].getUserName(r["state"]),word_id:localStorage.getItem("word_id"),word_name:""},form_save:{token:r["getters"].getToken(r["state"]),doc_id:localStorage.getItem("doc_id"),doc_content:""},form_Model:{token:r["getters"].getToken(r["state"]),name:"模板",content:""},form3:{token:r["getters"].getToken(r["state"]),user_id:r["getters"].getUserId(r["state"]),username:r["getters"].getUserName(r["state"]),word_id:localStorage.getItem("word_id")},form4:{word_id:Number(localStorage.getItem("word_id")),word_name:localStorage.getItem("word_name")},form_invite:{token:r["getters"].getToken(r["state"]),user_id:r["getters"].getUserId(r["state"]),username:r["getters"].getUserName(r["state"]),accept_id:null,word_id:localStorage.getItem("word_id")},form_getCooperatorList:{token:r["getters"].getToken(r["state"]),user_id:r["getters"].getUserId(r["state"]),username:r["getters"].getUserName(r["state"]),word_id:localStorage.getItem("word_id")},form_getCommentList:{token:r["getters"].getToken(r["state"]),user_id:r["getters"].getUserId(r["state"]),username:r["getters"].getUserName(r["state"]),word_id:localStorage.getItem("word_id")},form_addComment:{token:r["getters"].getToken(r["state"]),user_id:r["getters"].getUserId(r["state"]),username:r["getters"].getUserName(r["state"]),word_id:localStorage.getItem("word_id"),comment_content:""},form_deleteCooperator:{token:r["getters"].getToken(r["state"]),user_id:r["getters"].getUserId(r["state"]),username:r["getters"].getUserName(r["state"]),word_id:localStorage.getItem("word_id"),cooperation_id:0},form_getTeam:{token:r["getters"].getToken(r["state"]),user_id:r["getters"].getUserId(r["state"]),teamId:Number(localStorage.getItem("team_id"))},isShow:!0,invite_visible:!1,comment_visible:!1,title:localStorage.getItem("doc_name"),htmlContent:"",jsonContent:"",comment:"",ID:"",cooperatorList:[],commentList:[],loading:!1,data:[]}},created:function(){this.getModel(),this.getDocTree(),d["a"].changeDevice("mobile"),d["a"].toggleCollapse(!0),"true"===localStorage.getItem("shareFlag")&&"false"===localStorage.getItem("addCooper")&&(this.isShow=!1)},mounted:function(){d["a"].changeDevice("mobile"),d["a"].toggleCollapse(!0)},beforeDestroy:function(){this.exitEdit()},destroyed:function(){d["a"].changeDevice("pc"),d["a"].toggleCollapse(!1)},methods:{openPreview:function(){var e=this;this.getHtmlContent(),this.form_openPreview.html_code=this.htmlContent,this.$axios.post("/doc/uploadDoc",c.a.stringify(this.form_openPreview)).then((function(t){t.data.success?(e.url_preview=t.data.data[0].url,alert("您的分享链接是"+e.url_preview),localStorage.setItem("refresh","1")):e.$message.error(t.data.message)}))},closePreview:function(){var e=this;this.$axios.post("/doc/disableSharing",c.a.stringify(this.form_closePreview)).then((function(t){t.data.success?e.$message.success(t.data.message):e.$message.error(t.data.message)}))},getModel:function(){this.$axios.get("/doc/getTemplateList",{params:{token:r["getters"].getToken(r["state"])}}).then((function(e){e.data.success&&console.log(e.data.data)}))},CreateDir:function(){var e=this;this.$axios.post("/doc/mkdir",c.a.stringify(this.form_createDir)).then((function(t){t.data.success?e.$message.success(t.data.message):e.$message.error(t.data.message),e.getDocTree()}))},CreateDoc:function(){var e=this;this.$axios.post("/doc/newDoc",c.a.stringify(this.form_createDoc)).then((function(t){t.data.success?e.$message.success(t.data.message):e.$message.error(t.data.message),e.getDocTree()}))},toDocEditor:function(e){var t=this;"documentation"===e.type&&(localStorage.setItem("flag","in"),localStorage.setItem("doc_id",e.doc_id),localStorage.setItem("doc_name",e.doc_name),this.$axios.get("/doc/getDocInfo",{params:{token:r["getters"].getToken(r["state"]),doc_id:localStorage.getItem("doc_id")}}).then((function(e){e.data.success?(localStorage.setItem("in_word_content",e.data.data[0].doc_content),t.$router.push("/redirect/editor/rich-text")):t.$message.error(e.data.message)})))},getDocTree:function(){var e=this;this.$axios.post("/team/getTeam",c.a.stringify(this.form_getTeam)).then((function(t){t.data.success&&e.$axios.get("/doc/walkDir",{params:{token:r["getters"].getToken(r["state"]),folder_id:t.data.data[0].root_id}}).then((function(t){t.data.success?e.data=t.data.data:e.$message.error(t.data.message)}))}))},handleNodeClick:function(e){console.log(e)},likeDoc:function(){var e=this;this.form_likeDoc.doc_id=localStorage.getItem("doc_id"),this.form_likeDoc.undo=!1,this.$axios.post("/user/favorite",c.a.stringify(this.form_likeDoc)).then((function(t){t.data.success?(e.is_favorite=!0,e.$message.success(t.data.message)):e.$message.error(t.data.message)}))},unlikeDoc:function(){var e=this;this.form_likeDoc.doc_id=localStorage.getItem("doc_id"),this.form_likeDoc.undo=!0,this.$axios.post("/user/favorite",c.a.stringify(this.form_likeDoc)).then((function(t){t.data.success?(e.is_favorite=!1,e.$message.success(t.data.message)):e.$message.error(t.data.message)}))},share:function(){var e=this;this.$axios.post("/worddocx/share",c.a.stringify(this.form4)).then((function(t){0===t.data.result?(alert("您的分享链接是http://124.220.205.84/#/share"+t.data.x),localStorage.setItem("refresh","1")):e.$message.error(t.data.message)}))},Like:function(){var e=this;this.$axios.post("/worddocx/user_collect_word",c.a.stringify(this.form3)).then((function(t){4===t.data.result?e.$message.success(t.data.message):e.$message.error(t.data.message)}))},back:function(){this.$router.go(-1)},deleteCooperator:function(e){var t=this;this.form_deleteCooperator.cooperation_id=e.id,this.$axios.post("/team/out_cooperate",c.a.stringify(this.form_deleteCooperator)).then((function(e){4===e.data.result?(t.getCooperatorList(),t.$message.success(e.data.message)):t.$message.error(e.data.message)}))},addComment:function(){var e=this;this.$axios.post("/worddocx/user_comment_word",c.a.stringify(this.form_addComment)).then((function(t){3===t.data.result?(e.getCommentList(),e.$message.success(t.data.message)):e.$message.error(t.data.message)}))},getCooperatorList:function(){var e=this;this.loading=!0,this.cooperatorList=[],this.$axios.post("/team/get_cooperationer_list",c.a.stringify(this.form_getCooperatorList)).then((function(t){if(4===t.data.result)for(var o=0;o<t.data.cooperation_list.length;o++){var a={id:0,username:"",email:""};a.id=t.data.cooperation_list[o].id,a.username=t.data.cooperation_list[o].username,a.email=t.data.cooperation_list[o].email,e.cooperatorList.push(a)}e.loading=!1}))},getCommentList:function(){var e=this;this.loading=!0,this.commentList=[],this.$axios.post("/worddocx/user_get_comment_list",c.a.stringify(this.form_getCommentList)).then((function(t){if(4===t.data.result)for(var o=0;o<t.data.word_comment_list.length;o++){var a={id:0,username:"",time:"",content:""};a.id=t.data.word_comment_list[o].comment_id,a.username=t.data.word_comment_list[o].comment_username,a.time=t.data.word_comment_list[o].comment_time,a.content=t.data.word_comment_list[o].comment_content,e.commentList.push(a)}e.loading=!1}))},addCooperator:function(){var e=this;this.$axios.post("/team/send_cooperate_inviter",c.a.stringify(this.form_invite)).then((function(t){5===t.data.result?(e.getCooperatorList(),e.$message.success(t.data.message)):e.$message.error(t.data.message)}))},exportPDF:function(){this.getPdf("pdfDom",this.title)},uploadModel:function(){var e=this;this.form_Model.content=this.$refs.richTextEditor.getJsonContent().slice(7,-1),this.$axios.post("/doc/editTemplate",c.a.stringify(this.form_Model)).then((function(t){t.data.success?e.$message.success(t.data.message):e.$message.error(t.data.message)}))},Save:function(){var e=this;this.form_save.doc_content=this.$refs.richTextEditor.getJsonContent().slice(7,-1),this.$axios.post("/doc/save",c.a.stringify(this.form_save)).then((function(t){t.data.success?e.$message.success(t.data.message):e.$message.error(t.data.message)}))},exitEdit:function(){var e=this;this.form.word_content=this.$refs.richTextEditor.getJsonContent().slice(7,-1),"true"===localStorage.getItem("shareFlag")?(this.$axios.post("/worddocx/user_out_edit_cooperation_word",c.a.stringify(this.form)).then((function(t){4===t.data.result?(e.$message.success(t.data.message),localStorage.setItem("enable","true"),localStorage.setItem("shareFlag","false")):e.$message.error(t.data.message)})),localStorage.setItem("shareFlag","false")):(this.$axios.post("/worddocx/user_out_edit_word",c.a.stringify(this.form)).then((function(t){3===t.data.result?(e.$message.success(t.data.message),localStorage.setItem("enable","true")):e.$message.error(t.data.message)})),this.form1.word_name=this.title,this.$axios.post("/worddocx/user_rename_word",c.a.stringify(this.form1)))},getHtmlContent:function(){this.htmlContent=this.$refs.richTextEditor.getHtmlContent(),console.log(this.htmlContent)},getJsonContent:function(){console.log(localStorage.getItem("flag")),console.log(JSON.parse(localStorage.getItem("user_word_content"))),this.jsonContent=this.$refs.richTextEditor.getJsonContent()}}},g=m,u=(o("a898"),o("2877")),f=Object(u["a"])(g,a,s,!1,null,"2d3038a9",null);t["default"]=f.exports},a898:function(e,t,o){"use strict";o("e6ed")},e6ed:function(e,t,o){}}]);