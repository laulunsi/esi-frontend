webpackJsonp([8],{1514:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=n(869),u=(n.n(o),n(870)),l=n.n(u),s=n(47),c=(n.n(s),n(39)),m=n.n(c),p=n(301),f=(n.n(p),n(302)),d=n.n(f),h=n(53),g=(n.n(h),n(67)),y=n.n(g),b=n(0),w=n.n(b),v=n(1515),C=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),k=y.a.TextArea,E={$id:"dynamic-edit-schema",title:"dynamic-edit-schema",description:"dynamic-edit-schema.",type:"object",required:["moduleId","name","code"],properties:{id:{type:"string"},moduleId:{type:"string",title:"模块Id",description:"相关菜单模块"},module:{type:"string",title:"模块名称"},name:{type:"string",title:"功能名称",maxLength:25,minLength:1},code:{type:"string",title:"功能编码",maxLength:25,minLength:1},description:{type:"string",title:"功能描述",maxLength:300},int:{type:"integer",title:"整数组件"},number:{type:"number",title:"浮点数组件"},checkbox:{type:"array",title:"checkbox组件"},password:{type:"string",title:"密码"},datetime:{type:"string",title:"datetime组件"},radio:{type:"string",title:"radio组件"},select:{type:"array",title:"select组件"},switch:{type:"boolean",title:"switch组件"},numberBetweenBegin:{type:"number",title:"numberBetweenBegin"},numberBetweenEnd:{type:"number",title:"numberBetweenEnd"},dateBetweenBegin:{type:"string",title:"dateBetweenBegin"},dateBetweenEnd:{type:"string",title:"dateBetweenEnd"}}},S={name:{"ui:widget":"input","ui:options":{type:"text",placeholder:""},"ui:rules":[{required:!0,message:"请输入功能名称"},{max:25,message:"最多输入25字符"}],"ui:title":"功能名称","ui:description":"","ui:formItemConfig":{hasFeedback:!0,labelCol:{span:6},wrapperCol:{span:16}}},code:{"ui:widget":"input","ui:options":{type:"text",placeholder:""},"ui:rules":[{required:!0,message:"请输入功能编码"},{max:25,message:"最多输入25字符"}],"ui:title":"功能编码","ui:description":"","ui:formItemConfig":{hasFeedback:!0,labelCol:{span:6},wrapperCol:{span:16}}},description:{"ui:widget":"input.textarea","ui:options":{style:{width:400,height:200},autoSize:{minRows:2,maxRows:6},placeholder:""},"ui:rules":[{max:300,message:"最多输入300字符!"}],"ui:title":"功能描述","ui:description":"","ui:formItemConfig":{hasFeedback:!0,labelCol:{span:6},wrapperCol:{span:16}}},moduleId:{"ui:widget":"cascader","ui:options":{fieldNames:{label:"title",value:"id",children:"children"},options:[]},"ui:rules":[{required:!0,message:"请选择模块!"}],"ui:remoteConfig":{apiKey:"getAllMenu",hand:function(e){return e}},"ui:title":"模块","ui:formItemConfig":{hasFeedback:!0,label:"模块",labelCol:{span:6},wrapperCol:{span:16}}},int:{"ui:widget":"inputNumber","ui:options":{},"ui:rules":[{required:!0,message:"不能为空!"}],"ui:defaultValue":0,"ui:title":"整数组件","ui:description":"","ui:formItemConfig":{hasFeedback:!0,labelCol:{span:6},wrapperCol:{span:16}}},number:{"ui:widget":"inputNumber","ui:options":{step:.1},"ui:rules":[{required:!0,message:"不能为空!"}],"ui:defaultValue":.1,"ui:title":"浮点数组件","ui:description":"","ui:formItemConfig":{hasFeedback:!0,labelCol:{span:6},wrapperCol:{span:16}}},checkbox:{"ui:widget":"checkbox","ui:options":{options:[{label:"Apple",value:"AppleValue"},{label:"Pear",value:"PearValue"},{label:"Orange",value:"OrangeValue",disabled:!1}]},"ui:rules":[{required:!0,message:"不能为空!"}],"ui:defaultValue":["AppleValue"],"ui:title":"checkbox组件","ui:description":"","ui:formItemConfig":{labelCol:{span:6},wrapperCol:{span:16}}},password:{"ui:widget":"input","ui:options":{type:"password",placeholder:"密码"},"ui:rules":[{required:!0,message:"不能为空!"}],"ui:title":"密码","ui:description":"","ui:formItemConfig":{hasFeedback:!0,labelCol:{span:6},wrapperCol:{span:16}}},datetime:{"ui:widget":"datetime","ui:options":{showTime:!0,format:"YYYY-MM-DD HH:mm:ss"},"ui:rules":[{required:!0,message:"不能为空!"}],"ui:title":"datetime","ui:description":"","ui:formItemConfig":{hasFeedback:!0,labelCol:{span:6},wrapperCol:{span:16}}},radio:{"ui:widget":"radio","ui:options":{options:[{label:"Apple",value:"AppleValue"},{label:"Pear",value:"PearValue"},{label:"Orange",value:"OrangeValue",disabled:!1}]},"ui:rules":[{required:!0,message:"不能为空!"}],"ui:defaultValue":"AppleValue","ui:title":"radio组件","ui:description":"","ui:formItemConfig":{labelCol:{span:6},wrapperCol:{span:16}}},select:{"ui:widget":"select","ui:options":{},"ui:rules":[{required:!0,message:"不能为空!"}],"ui:dataOptions":[{title:"Jack",value:"jack"},{title:"Lucy",value:"lucy"},{title:"Tom",value:"tom",disabled:!0}],"ui:defaultValue":"lucy","ui:title":"select组件","ui:description":"","ui:formItemConfig":{hasFeedback:!0,labelCol:{span:6},wrapperCol:{span:16}}},switch:{"ui:widget":"switch","ui:options":{checkedChildren:"激活",unCheckedChildren:"锁定"},"ui:defaultValue":!0,"ui:title":"switch","ui:description":"","ui:formItemConfig":{labelCol:{span:6},wrapperCol:{span:16}}},numberBetween:{"ui:widget":"between","ui:type":"number","ui:options":{step:.1},"ui:rules":[{required:!0,message:"不能为空!"}],"ui:defaultBeginValue":.1,"ui:defaultEndValue":.2,"ui:title":"范围参数组件","ui:description":"","ui:formItemConfig":{labelCol:{span:6},wrapperCol:{span:16}}},dateBetween:{"ui:widget":"between","ui:type":"date","ui:options":{style:{width:130}},"ui:rules":[{required:!0,message:"不能为空!"}],"ui:title":"范围参数组件","ui:description":"","ui:formItemConfig":{labelCol:{span:6},wrapperCol:{span:16}}}},x={name:"1212",code:"1212121",moduleId:["3942a177-a52d-494b-bcd5-c3c1aba90b02","779a4d68-9163-41ff-a9d1-19c6146ef470","6bcf5fd6-3677-45ac-aa3b-7b016ef20f71"]},I=function(e){function t(){var e,n,i,o;a(this,t);for(var u=arguments.length,l=Array(u),s=0;s<u;s++)l[s]=arguments[s];return n=i=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),i.state={toggleParseSchema:!0,schema:E,uiSchema:S,formData:x,error:"",data:""},i.schema=JSON.stringify(E),i.uiSchema=JSON.stringify(S,function(e,t){return"function"==typeof t?t.toString():t}),i.formData=JSON.stringify(x),i.schemaChange=function(e){i.schema=e.target.value},i.uiSchemaChange=function(e){i.uiSchema=e.target.value},i.formDataChange=function(e){i.formData=e.target.value},i.parseSchema=function(){if(""!=i.schema&&""!=i.uiSchema&&""!=i.formData)try{var e=JSON.parse(i.schema),t=JSON.parse(i.uiSchema,function(e,t){return"string"==typeof t&&t.indexOf("function")>-1?new Function("return "+t)():t}),n=JSON.parse(i.formData),a=i.state.toggleParseSchema;i.setState({toggleParseSchema:!a,schema:e,uiSchema:t,formData:n,error:""})}catch(e){i.setState({error:e.toString()})}},i.getFormData=function(e){i.setState({data:JSON.stringify(e,null,4)})},i.handleSubmit=function(){i.editForm.handleSubmit()},i.handleReset=function(){i.editForm.handleReset(),i.setState({data:"",formData:{name:"",code:"",moduleId:[]}})},o=n,r(i,o)}return i(t,e),C(t,[{key:"render",value:function(){var e=this;return console.log("CommonFormTest render"),w.a.createElement("div",null,w.a.createElement("div",null,w.a.createElement(d.a,{color:"#87d068"},"Schema"),w.a.createElement(k,{rows:15,defaultValue:JSON.stringify(this.state.schema,null,4),onChange:this.schemaChange})),w.a.createElement("div",{style:{marginTop:10}},w.a.createElement(d.a,{color:"#87d068"},"UiSchema"),w.a.createElement(k,{rows:15,defaultValue:JSON.stringify(this.state.uiSchema,function(e,t){return"function"==typeof t?t.toString():t},4),onChange:this.uiSchemaChange})),w.a.createElement("div",{style:{marginTop:10}},w.a.createElement(d.a,{color:"#87d068"},"FormData"),w.a.createElement(k,{rows:15,defaultValue:JSON.stringify(x,null,4),onChange:this.formDataChange})),w.a.createElement("div",{style:{marginTop:10}},w.a.createElement(m.a,{type:"primary",onClick:this.parseSchema},"重新解析")),""!=this.state.error?w.a.createElement("div",null,this.state.error):null,w.a.createElement(l.a,null),w.a.createElement(v.a,{ref:function(t){e.editForm=t},toggleParseSchema:this.state.toggleParseSchema,schema:this.state.schema,uiSchema:this.state.uiSchema,formData:this.state.formData,handleSubmit:this.getFormData}),w.a.createElement("div",{style:{marginTop:10}},w.a.createElement(m.a,{type:"primary",onClick:this.handleSubmit},"提交"),"    ",w.a.createElement(m.a,{onClick:this.handleReset},"清空")),""!=this.state.data?w.a.createElement("div",null,this.state.data):null)}}]),t}(w.a.PureComponent);t.a=I},1515:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=n(0),u=n.n(o),l=n(1516),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=function(e){function t(){var e,n,i,o;a(this,t);for(var u=arguments.length,l=Array(u),s=0;s<u;s++)l[s]=arguments[s];return n=i=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),i.handleSubmit=function(){i.formRef.props.form.validateFields(function(e,t){e||i.props.handleSubmit(t)})},i.handleReset=function(){i.formRef.props.form.resetFields()},o=n,r(i,o)}return i(t,e),s(t,[{key:"render",value:function(){var e=this;console.log("DynamicForm render");var t=this.props,n=t.schema,a=t.uiSchema,r=t.formData,i=t.style,o=t.toggleParseSchema,s=l.a.getForm(n,a);return u.a.createElement("div",{style:i},u.a.createElement(s,{toggleParseSchema:o,schema:n,uiSchema:a,formData:r,wrappedComponentRef:function(t){e.formRef=t}}))}}]),t}(u.a.PureComponent);t.a=c},1516:function(e,t,n){"use strict";function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function a(r,i){try{var o=t[r](i),u=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(u).then(function(e){a("next",e)},function(e){a("throw",e)});e(u)}return a("next")})}}var i=n(48),o=(n.n(i),n(49)),u=n.n(o),l=n(50),s=(n.n(l),n(51)),c=n.n(s),m=n(183),p=(n.n(m),n(184)),f=n.n(p),d=n(172),h=(n.n(d),n(173)),g=n.n(h),y=n(107),b=(n.n(y),n(84)),w=n.n(b),v=n(115),C=(n.n(v),n(83)),k=n.n(C),E=n(185),S=(n.n(E),n(186)),x=n.n(S),I=n(116),O=(n.n(I),n(69)),V=n.n(O),D=n(176),F=(n.n(D),n(177)),P=n.n(F),j=n(53),_=(n.n(j),n(67)),B=n.n(_),R=n(78),N=n.n(R),J=n(104),W=(n.n(J),n(105)),A=n.n(W),q=n(0),T=n.n(q),M=n(111),L=n.n(M),Y=n(79),U=n(306),z=A.a.Item,G=new Map,H=new Map,K=new Map,$=new Map,Q=new Map,X={getForm:function(e,t){var n=e.$id;if(H.has(n))return H.get(n);var a=this.createForm(n,e,t);return H.set(n,a),a},createForm:function(e,t,n){console.log("createDynamicForm");var a=this,i=L()({getInitialState:function(){var t=Q.get(e);return t?t++:t=1,Q.set(e,t),$.set(e+"-"+t,this),{inited:!1,index:e+"-"+t,generateJsx:null}},componentWillMount:function(){if(console.log("tmpDynamicForm componentWillMount"),G.has(e))return void this.setState({generateJsx:G.get(e)})},componentDidMount:function(){function i(){return o.apply(this,arguments)}var o=r(N.a.mark(function r(){var i;return N.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(!K.has(e)){r.next=2;break}return r.abrupt("return");case 2:return a.mergeSchema(this.state.index,t,n),r.next=5,a.getRemoteData(e,n);case 5:K.set(e,!0),i=a.parse(e,t,n),this.setState({inited:!0,generateJsx:i});case 8:case"end":return r.stop()}},r,this)}));return i}(),componentDidUpdate:function(t){var n=this;if(this.props.toggleParseSchema!=t.toggleParseSchema){console.log("reParse");var r=this.props.schema,i=this.props.uiSchema;a.mergeSchema(this.state.index,r,i),a.getRemoteData(e,i).then(function(){var t=a.parse(e,r,i);n.setState({generateJsx:t})})}},componentWillUnmount:function(){$.delete(this.state.index),console.log($.size)},render:function(){console.log("tmpDynamicForm render");var e=this.props.formData;return e=e||{},this.state.generateJsx?this.state.generateJsx(this.state.index,e):null}});return A.a.create()(i)},mergeSchema:function(e,t,n){var a=$.get(e);Object.keys(n).forEach(function(e){var r=t.properties[e],i=n[e];i.key=e,void 0===i["ui:rules"]&&(i["ui:rules"]=[]),void 0===i["ui:formItemConfig"]&&(i["ui:formItemConfig"]={}),void 0===i["ui:formItemConfig"].extra&&(i["ui:formItemConfig"].extra=i["ui:description"]),void 0===i["ui:formItemConfig"].extra&&(i["ui:formItemConfig"].extra=r.description),void 0===i["ui:formItemConfig"].label&&(i["ui:formItemConfig"].label=i["ui:title"]),void 0===i["ui:formItemConfig"].label&&(i["ui:formItemConfig"].label=r.title),void 0===i["ui:formItemConfig"].labelCol&&(i["ui:formItemConfig"].labelCol={span:8}),void 0===i["ui:formItemConfig"].wrapperCol&&(i["ui:formItemConfig"].wrapperCol={span:16}),void 0!==i["ui:required"]&&i["ui:rules"].push({validator:function(e,t,n){var r=a.props.form,o=[],u=!0,l=!1,s=void 0;try{for(var c,m=i["ui:required"][Symbol.iterator]();!(u=(c=m.next()).done);u=!0){var p=c.value;t&&!r.getFieldValue(p.name)&&o.push(p.message)}}catch(e){l=!0,s=e}finally{try{!u&&m.return&&m.return()}finally{if(l)throw s}}o.length>0?n(o.join(",")):n()}})})},getRemoteData:function(){function e(e,n){return t.apply(this,arguments)}var t=r(N.a.mark(function e(t,n){var a,r,i;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("getRemoteData"),a=this,r=[],Object.keys(n).forEach(function(e){var i=n[e];if(i["ui:remoteConfig"])switch(i["ui:widget"]){case"select":case"radio":case"checkbox":case"multiSelect":case"between":case"cascader":r.push(a.getCascaderRemoteData(t,i));break;default:r.push(a.getCascaderRemoteData(t,i))}}),i=[],!(r.length>0)){e.next=9;break}return e.next=8,Promise.all([].concat(r));case 8:i=e.sent;case 9:return e.abrupt("return",i);case 10:case"end":return e.stop()}},e,this)}));return e}(),parse:function(e,t,n){console.log("parse DynamicForm schema");var a=[],r=t.properties,i=this;return Object.keys(n).forEach(function(e){var t=n[e],o=r[e];switch(t["ui:widget"]){case"inputNumber":a.push(i.transformInputNumber(t,o));break;case"checkbox":a.push(i.transformCheckbox(t,o));break;case"datetime":a.push(i.transformDatetime(t,o));break;case"radio":a.push(i.transformRadio(t,o));break;case"select":a.push(i.transformSelect(t,o));break;case"switch":a.push(i.transformSwitch(t,o));break;case"cascader":a.push(i.transformCascader(t,o));break;case"between":a.push(i.transformBetween(t,o));break;default:a.push(i.transformNormal(t,o))}}),function(e,t){var n=[],r=$.get(e).props.form.getFieldDecorator,i=!0,o=!1,u=void 0;try{for(var l,s=a[Symbol.iterator]();!(i=(l=s.next()).done);i=!0){var c=l.value;n.push(c(r,t))}}catch(e){o=!0,u=e}finally{try{!i&&s.return&&s.return()}finally{if(o)throw u}}return T.a.createElement(A.a,null,n)}},getCascaderRemoteData:function(e,t){var n=t["ui:remoteConfig"].apiKey;return new Promise(function(a,r){Y[n]().then(function(n){var r=n.data;r=t["ui:remoteConfig"].hand(r),t["ui:options"].options=r,U.a.addData(e+"_"+t.key,r),a(r)})})},transformInput:function(e,t){return this.formItemWrapper(function(t,n){return t(e.key,{initialValue:n[e.key]||e["ui:defaultValue"],rules:[].concat(a(e["ui:rules"]))})(T.a.createElement(B.a,e["ui:options"]))},e)},transformInputNumber:function(e,t){return this.formItemWrapper(function(t,n){return t(e.key,{initialValue:n[e.key]||e["ui:defaultValue"],rules:[].concat(a(e["ui:rules"]))})(T.a.createElement(P.a,e["ui:options"]))},e)},transformCheckbox:function(e,t){return this.formItemWrapper(function(t,n){return t(e.key,{initialValue:n[e.key]||e["ui:defaultValue"],rules:[].concat(a(e["ui:rules"]))})(T.a.createElement(V.a.Group,e["ui:options"]))},e)},transformDatetime:function(e,t){return this.formItemWrapper(function(t,n){return t(e.key,{initialValue:n[e.key]||e["ui:defaultValue"],rules:[].concat(a(e["ui:rules"]))})(T.a.createElement(x.a,e["ui:options"]))},e)},transformRadio:function(e,t){return this.formItemWrapper(function(t,n){return t(e.key,{initialValue:n[e.key]||e["ui:defaultValue"],rules:[].concat(a(e["ui:rules"]))})(T.a.createElement(k.a.Group,e["ui:options"]))},e)},transformSelect:function(e,t){var n=e["ui:dataOptions"]||[],r=[],i=!0,o=!1,u=void 0;try{for(var l,s=n[Symbol.iterator]();!(i=(l=s.next()).done);i=!0){var c=l.value;r.push(T.a.createElement(w.a.Option,{key:c.value,value:c.value,disabled:c.disabled},c.title))}}catch(e){o=!0,u=e}finally{try{!i&&s.return&&s.return()}finally{if(o)throw u}}return this.formItemWrapper(function(t,n){return t(e.key,{initialValue:n[e.key]||e["ui:defaultValue"],rules:[].concat(a(e["ui:rules"]))})(T.a.createElement(w.a,e["ui:options"],r))},e)},transformSwitch:function(e,t){return this.formItemWrapper(function(t,n){return t(e.key,{initialValue:n[e.key]||e["ui:defaultValue"],rules:[].concat(a(e["ui:rules"])),valuePropName:"checked"})(T.a.createElement(g.a,e["ui:options"]))},e)},transformBetween:function(e,t){var n=void 0,r=void 0;switch(e["ui:type"]){case"number":return n=function(t,n){return t(e.key+"Begin",{initialValue:n[e.key+"Begin"]||e["ui:defaultBeginValue"],rules:[].concat(a(e["ui:rules"]))})(T.a.createElement(P.a,e["ui:options"]))},r=function(t,n){return t(e.key+"End",{initialValue:n[e.key+"End"]||e["ui:defaultEndValue"],rules:[].concat(a(e["ui:rules"]))})(T.a.createElement(P.a,e["ui:options"]))},this.betweenFormItemWrapper(n,r,e);default:return n=function(t,n){return t(e.key+"Begin",{initialValue:n[e.key+"Begin"]||e["ui:defaultBeginValue"],rules:[].concat(a(e["ui:rules"]))})(T.a.createElement(x.a,e["ui:options"]))},r=function(t,n){return t(e.key+"End",{initialValue:n[e.key+"End"]||e["ui:defaultEndValue"],rules:[].concat(a(e["ui:rules"]))})(T.a.createElement(x.a,e["ui:options"]))},this.betweenFormItemWrapper(n,r,e)}},transformCascader:function(e,t){return this.formItemWrapper(function(t,n){return t(e.key,{initialValue:n[e.key]||e["ui:defaultEndValue"],rules:[].concat(a(e["ui:rules"]))})(T.a.createElement(f.a,e["ui:options"]))},e)},transformNormal:function(e,t){switch(e["ui:widget"]){case"input.textarea":return this.formItemWrapper(function(t,n){return t(e.key,{initialValue:n[e.key]||e["ui:defaultEndValue"],rules:[].concat(a(e["ui:rules"]))})(T.a.createElement(B.a.TextArea,e["ui:options"]))},e);default:return this.formItemWrapper(function(t,n){return t(e.key,{initialValue:n[e.key]||e["ui:defaultEndValue"],rules:[].concat(a(e["ui:rules"]))})(T.a.createElement(B.a,e["ui:options"]))},e)}},formItemWrapper:function(e,t){return function(n,a){return T.a.createElement(z,Object.assign({key:t.key},t["ui:formItemConfig"]),e(n,a))}},betweenFormItemWrapper:function(e,t,n){var a="number"===n["ui:type"],r=a?8:11,i=a?6:8,o=a?5:6,l=a?3:5;return function(a,s){return T.a.createElement(z,Object.assign({key:n.key},n["ui:formItemConfig"]),T.a.createElement(u.a,null,T.a.createElement(c.a,{xs:11,sm:r,md:i,lg:o,xl:l},T.a.createElement(z,Object.assign({key:"begin"+n.key},n["ui:beginFormItemConfig"]),e(a,s))),T.a.createElement(c.a,{span:1},T.a.createElement("span",{style:{display:"inline-block",width:"100%",textAlign:"center"}},"-")),T.a.createElement(c.a,{xs:11,sm:r,md:i,lg:o,xl:l},T.a.createElement(z,Object.assign({key:"end"+n.key},n["ui:endFormItemConfig"]),t(a,s)))))}}};t.a=X},913:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(48),u=(n.n(o),n(49)),l=n.n(u),s=n(50),c=(n.n(s),n(51)),m=n.n(c),p=n(303),f=(n.n(p),n(304)),d=n.n(f),h=n(0),g=n.n(h),y=n(1514),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),w=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),b(t,[{key:"render",value:function(){return g.a.createElement("div",null,g.a.createElement(l.a,null,g.a.createElement(m.a,null,g.a.createElement(d.a,{style:{width:"100%"},title:"动态表单"},g.a.createElement(y.a,null)))))}}]),t}(g.a.PureComponent);t.default=w}});
//# sourceMappingURL=8.b704d1c5.chunk.js.map