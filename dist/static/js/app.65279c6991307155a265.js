webpackJsonp([1],{"6P3x":function(e,t){},E1eo:function(e,t){},NHnr:function(e,t,n){"use strict";function i(e){n("ph0O")}function s(e){n("E1eo")}function o(e){n("y2HA")}function r(e){n("6P3x")}function a(e){n("bHhO")}function l(e){n("moTd")}Object.defineProperty(t,"__esModule",{value:!0});var c=n("7+uW"),u=n("TXMN"),f=new u.a,p=n("JnRc"),m=n.n(p),d={data:function(){return{msg:"免费注册",exit:"立即登录",currentUser:null}},mounted:function(){var e=this;f.$on("login",function(t){(e.msg="你好！"+t)&&(e.exit="退出")})},methods:{preview:function(){this.$emit("preview")},login:function(){this.$emit("login"),"退出"===this.exit&&(console.log(11),m.a.User.logOut(),this.currentUser=null,window.location.reload())},signUp:function(){this.$emit("signUp")}}},v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"Cephalosome"}},[n("div",{staticClass:"logo"},[e._v("\n    RESUME\n  ")]),e._v(" "),n("div",{staticClass:"actions"},[n("el-button",{attrs:{round:""},on:{click:e.signUp}},[e._v(e._s(e.msg))]),e._v(" "),n("el-button",{attrs:{round:""},on:{click:e.login}},[e._v(e._s(e.exit))]),e._v(" "),n("el-button",{attrs:{round:""},on:{click:e.preview}},[e._v("预览")])],1)])},_=[],h={render:v,staticRenderFns:_},g=h,b=n("VU/8"),k=i,x=b(d,g,!1,k,null,null),w=x.exports,U={props:["profile"]},y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("个人信息")]),e._v(" "),n("el-form",[n("el-form-item",{attrs:{label:"姓名"}},[n("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:e.profile.name,callback:function(t){e.$set(e.profile,"name",t)},expression:"profile.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"城市"}},[n("el-input",{attrs:{placeholder:"请输入城市"},model:{value:e.profile.city,callback:function(t){e.$set(e.profile,"city",t)},expression:"profile.city"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"出生年月"}},[n("el-input",{attrs:{placeholder:"请输入出生年月"},model:{value:e.profile.bitrh,callback:function(t){e.$set(e.profile,"bitrh",t)},expression:"profile.bitrh"}})],1)],1)],1)},E=[],C={render:y,staticRenderFns:E},M=C,$=n("VU/8"),T=$(U,M,!1,null,null,null),D=T.exports,S=n("fZjL"),R=n.n(S),W={props:["workExperience","labels","title"],computed:{keys:function(){return R()(this.workExperience[0])}},methods:{addItem:function(){var e={};this.keys.map(function(t){e[t]=""}),this.workExperience.push(e)},ctrl:function(e){this.workExperience.splice(e,1)}}},X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v(e._s(e.title))]),e._v(" "),n("el-form",[e._l(e.workExperience,function(t,i){return n("div",{key:i,staticClass:"useless"},[e._l(e.keys,function(i){return n("el-form-item",{key:i,attrs:{label:e.labels[i]||i}},[n("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t[i],callback:function(n){e.$set(t,i,n)},expression:"item[key]"}})],1)}),e._v(" "),n("i",{staticClass:"el-icon-delete",on:{click:function(t){e.ctrl(i)}}})],2)}),e._v(" "),n("el-button",{on:{click:e.addItem}},[e._v("添加")])],2)],1)},B=[],O={render:X,staticRenderFns:B},P=O,F=n("VU/8"),H=F(W,P,!1,null,null,null),V=H.exports,j={components:{EditPersonal:D,EditWork:V},props:["resume"],data:function(){return{currentTab:0}}},z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"EditBox"}},[n("nav",[n("ol",[n("li",{class:{active:0===e.currentTab},on:{click:function(t){e.currentTab=0}}},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"个人信息",placement:"right-end"}},[n("svg",{staticClass:"icon"},[n("use",{attrs:{"xlink:href":"#icon-fon1"}})])])],1),e._v(" "),n("li",{class:{active:1===e.currentTab},on:{click:function(t){e.currentTab=1}}},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"工作经历",placement:"right-end"}},[n("svg",{staticClass:"icon"},[n("use",{attrs:{"xlink:href":"#icon-fon2"}})])])],1),e._v(" "),n("li",{class:{active:2===e.currentTab},on:{click:function(t){e.currentTab=2}}},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"项目经历",placement:"right-end"}},[n("svg",{staticClass:"icon"},[n("use",{attrs:{"xlink:href":"#icon-fon3"}})])])],1),e._v(" "),n("li",{class:{active:3===e.currentTab},on:{click:function(t){e.currentTab=3}}},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"教育信息",placement:"right-end"}},[n("svg",{staticClass:"icon"},[n("use",{attrs:{"xlink:href":"#icon-fon4"}})])])],1),e._v(" "),n("li",{class:{active:4===e.currentTab},on:{click:function(t){e.currentTab=4}}},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"获奖情况",placement:"right-end"}},[n("svg",{staticClass:"icon"},[n("use",{attrs:{"xlink:href":"#icon-fon5"}})])])],1),e._v(" "),n("li",{class:{active:5===e.currentTab},on:{click:function(t){e.currentTab=5}}},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"联系方式",placement:"right-end"}},[n("svg",{staticClass:"icon"},[n("use",{attrs:{"xlink:href":"#icon-fon6"}})])])],1)])]),e._v(" "),n("ol",{staticClass:"write"},[n("li",{class:{active:0===e.currentTab}},[n("EditPersonal",{attrs:{profile:e.resume.profile}})],1),e._v(" "),n("li",{class:{active:1===e.currentTab}},[n("EditWork",{attrs:{workExperience:e.resume.work,labels:{company:"公司名称",date:"工作时间",content:"工作内容"},title:"工作经历"}})],1),e._v(" "),n("li",{class:{active:2===e.currentTab}},[n("EditWork",{attrs:{workExperience:e.resume.project,labels:{name:"项目名称",introduce:"项目介绍",site:"项目地址"},title:"项目经历"}})],1),e._v(" "),n("li",{class:{active:3===e.currentTab}},[n("EditWork",{attrs:{workExperience:e.resume.education,labels:{school:"学校",time:"时间",degree:"学历"},title:"教育信息"}})],1),e._v(" "),n("li",{class:{active:4===e.currentTab}},[n("EditWork",{attrs:{workExperience:e.resume.award,labels:{name:"奖项",time:"时间"},title:"获奖情况"}})],1),e._v(" "),n("li",{class:{active:5===e.currentTab}},[n("h2",[e._v("联系方式")]),e._v(" "),n("el-form",[n("el-form-item",{attrs:{label:"手机"}},[n("el-input",{attrs:{placeholder:"请输入手机"},model:{value:e.resume.contact.mobile,callback:function(t){e.$set(e.resume.contact,"mobile",t)},expression:"resume.contact.mobile"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"微信"}},[n("el-input",{attrs:{placeholder:"请输入微信"},model:{value:e.resume.contact.WeChat,callback:function(t){e.$set(e.resume.contact,"WeChat",t)},expression:"resume.contact.WeChat"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"邮箱"}},[n("el-input",{attrs:{placeholder:"请输入邮箱"},model:{value:e.resume.contact.email,callback:function(t){e.$set(e.resume.contact,"email",t)},expression:"resume.contact.email"}})],1)],1)],1)])])},A=[],I={render:z,staticRenderFns:A},N=I,L=n("VU/8"),J=s,q=L(j,N,!1,J,null,null),K=q.exports,G={props:["resume"],methods:{filter:function(e){var t=this;return e.filter(function(e){return!t.isEmpty(e)})},isEmpty:function(e){var t=!0;for(var n in e)if(e[n]){t=!1;break}return t}}},Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"ShowBox"}},[n("section",[n("h2",[e._v(e._s(e.resume.profile.name||"你的名字"))]),e._v(" "),n("span",[e._v("|"+e._s(e.resume.profile.bitrh||"出生年月")+"|"+e._s(e.resume.profile.city||"通讯地址")+"|")])]),e._v(" "),n("section",[n("h3",[e._v("联系方式")]),e._v(" "),n("ul",[n("li",[e._v(e._s(e.resume.contact.WeChat||"微信"))]),e._v(" "),n("li",[e._v(e._s(e.resume.contact.email||"邮箱")+"/"+e._s(e.resume.contact.mobile||"电话"))]),e._v(" "),n("li")])]),e._v(" "),e.filter(e.resume.work).length>0?n("section",[n("h3",[e._v("工作经历")]),e._v(" "),e._l(e.filter(e.resume.work),function(t){return n("ul",[n("li",[e._v(e._s(t.date||"开始日期 - 结束日期"))]),e._v(" "),n("li",[n("span",[e._v(e._s(t.company||"公司名称"))]),e._v(" "),n("span",[e._v(e._s(t.content||"工作内容"))])])])})],2):e._e(),e._v(" "),e.filter(e.resume.project).length>0?n("section",[n("h3",[e._v("项目经历")]),e._v(" "),e._l(e.filter(e.resume.project),function(t){return n("ul",[n("li",[e._v(e._s(t.name||"项目名称"))]),e._v(" "),n("li",[n("span",[e._v(e._s(t.introduce||"项目介绍"))]),e._v(" "),n("span",[e._v(e._s(t.site||"项目地址"))])])])})],2):e._e(),e._v(" "),e.filter(e.resume.education).length>0?n("section",[n("h3",[e._v("教育信息")]),e._v(" "),e._l(e.filter(e.resume.education),function(t){return n("ul",[n("li",[e._v(e._s(t.time||"时间段"))]),e._v(" "),n("li",[n("span",[e._v(e._s(t.school||"学校名称"))]),e._v(" "),n("span",[e._v(e._s(t.degree||"学历"))])])])})],2):e._e(),e._v(" "),e.filter(e.resume.award).length>0?n("section",[n("h3",[e._v("获奖情况")]),e._v(" "),e._l(e.filter(e.resume.award),function(t){return n("ul",[n("li",[e._v(e._s(t.time||"时间段"))]),e._v(" "),n("li",[e._v(e._s(t.name||"获奖情况"))])])})],2):e._e()])},Z=[],Q={render:Y,staticRenderFns:Z},ee=Q,te=n("VU/8"),ne=o,ie=te(G,ee,!1,ne,null,null),se=ie.exports,oe={props:["title"],data:function(){return{formData:{username:"",password:""}}},methods:{loginSubmit:function(){this.login()},exitX:function(){this.$emit("exitX")},login:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){""===this.formData.username?alert("请输入账号"):""===this.formData.password?alert("请输入密码"):m.a.User.logIn(this.formData.username,this.formData.password).then(function(e){console.log(e),f.$emit("login",e.attributes.username),login.style.display="none"},function(e){alert("密码错误呗")})})}},re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("div",{staticClass:"logo"},[e._m(0,!1,!1),e._v(" "),n("span",[n("svg",{staticClass:"icon",on:{click:e.exitX}},[n("use",{attrs:{"xlink:href":"#icon-fon8"}})])])]),e._v(" "),n("el-form",{staticClass:"two",attrs:{"label-width":"50px"},on:{refer:function(t){t.preventDefault(),e.login(t)}}},[n("el-form-item",{attrs:{label:"账号",prop:"pass"}},[n("el-input",{attrs:{type:"texe","auto-complete":"off"},model:{value:e.formData.username,callback:function(t){e.$set(e.formData,"username",t)},expression:"formData.username"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"密码",prop:"pass"}},[n("el-input",{attrs:{type:"password","auto-complete":"off"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.loginSubmit(t)}},model:{value:e.formData.password,callback:function(t){e.$set(e.formData,"password",t)},expression:"formData.password"}})],1),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.login("refer")}}},[e._v("登录")])],1)],1)},ae=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("h2",[e._v("RESUME")]),e._v(" "),n("p",[e._v("高效-便捷-实用")])])}],le={render:re,staticRenderFns:ae},ce=le,ue=n("VU/8"),fe=r,pe=ue(oe,ce,!1,fe,null,null),me=pe.exports,de={props:["title"],data:function(){return{formData:{username:"",password:""}}},methods:{loginSubmit:function(){this.signUp()},exitX:function(){this.$emit("exitX")},addTodo:function(){},removeTodo:function(e){},signUp:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){if(""===this.formData.username)alert("请输入账号");else if(""===this.formData.password)alert("请输入密码");else{var e=new m.a.User;e.setUsername(this.formData.username),e.setPassword(this.formData.password),e.signUp().then(function(e){console.log(e),signUp.style.display="none"},function(e){alert("注册失败")})}})}},ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"signUp"},[n("div",{staticClass:"logo"},[e._m(0,!1,!1),e._v(" "),n("span",[n("svg",{staticClass:"icon",on:{click:e.exitX}},[n("use",{attrs:{"xlink:href":"#icon-fon8"}})])])]),e._v(" "),n("el-form",{staticClass:"two",attrs:{"label-width":"50px"},on:{refer:function(t){t.preventDefault(),e.signUp(t)}}},[n("el-form-item",{attrs:{label:"账号",prop:"pass"}},[n("el-input",{attrs:{type:"texe","auto-complete":"off"},model:{value:e.formData.username,callback:function(t){e.$set(e.formData,"username",t)},expression:"formData.username"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"密码",prop:"pass"}},[n("el-input",{attrs:{type:"password","auto-complete":"off"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.loginSubmit(t)}},model:{value:e.formData.password,callback:function(t){e.$set(e.formData,"password",t)},expression:"formData.password"}})],1),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.signUp("refer")}}},[e._v("注册")])],1)],1)},_e=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("h2",[e._v("RESUME")]),e._v(" "),n("p",[e._v("高效-便捷-实用")])])}],he={render:ve,staticRenderFns:_e},ge=he,be=n("VU/8"),ke=a,xe=be(de,ge,!1,ke,null,null),we=xe.exports,Ue={data:function(){return{previewMode:!1,loginMode:!1,signUpMode:!1,resume:{profile:{name:"",city:"",bitrh:""},work:[{company:"",date:"",content:""}],education:[{school:"",time:"",degree:""}],project:[{name:"",introduce:"",site:""}],award:[{name:"",time:""}],contact:[{mobile:"",WeChat:"",email:""}]}}},methods:{exitButton:function(){this.previewMode=!1},exitX:function(){this.loginMode=!1,this.signUpMode=!1},preview:function(){this.previewMode=!0,this.signUpMode=!1,this.loginMode=!1},login:function(e){this.loginMode=!0,this.signUpMode=!1},signUp:function(){this.signUpMode=!0,this.loginMode=!1},hideModal:function(){this.signUpMode=!1,this.loginMode=!1},hide:function(){this.signUpMode=!1,this.loginMode=!1}},components:{Cephalosome:w,EditBox:K,ShowBox:se,Login:me,SignUp:we}},ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{previewMode:e.previewMode},attrs:{id:"app"}},[n("Login",{class:{loginMode:e.loginMode},attrs:{id:"login"},on:{exitX:e.exitX,login:e.login}}),e._v(" "),n("SignUp",{class:{signUpMode:e.signUpMode},attrs:{id:"signUp"},on:{exitX:e.exitX}}),e._v(" "),n("Cephalosome",{staticClass:"cephalosome",on:{preview:e.preview,login:e.login,signUp:e.signUp}}),e._v(" "),n("main",{on:{click:e.hide}},[n("EditBox",{staticClass:"editBox",attrs:{resume:e.resume}}),e._v(" "),n("ShowBox",{staticClass:"showBox",attrs:{resume:e.resume}})],1),e._v(" "),n("el-button",{attrs:{id:"exitButton",round:""},on:{click:e.exitButton}},[e._v("退出预览")])],1)},Ee=[],Ce={render:ye,staticRenderFns:Ee},Me=Ce,$e=n("VU/8"),Te=l,De=$e(Ue,Me,!1,Te,null,null),Se=De.exports,Re=(n("uMhA"),n("NcP2"),n("zL8q")),We=n.n(Re);n("tvR6");m.a.init({appId:"9OjuxqtJW77d99IuXSp1Eug1-gzGzoHsz",appKey:"t9H4TMWKyXzEP2xn2wW1oYzt"}),c.default.use(We.a),c.default.config.productionTip=!1,new c.default({el:"#app",template:"<App/>",components:{App:Se}})},NcP2:function(e,t){},bHhO:function(e,t){},moTd:function(e,t){},ph0O:function(e,t){},tvR6:function(e,t){},uMhA:function(e,t){},y2HA:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.65279c6991307155a265.js.map