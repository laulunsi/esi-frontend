webpackJsonp([6],{1509:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=n(869),u=(n.n(o),n(870)),c=n.n(u),l=n(47),s=(n.n(l),n(39)),p=n.n(s),h=n(301),d=(n.n(h),n(302)),f=n.n(d),m=n(53),y=(n.n(m),n(67)),g=n.n(y),b=n(0),v=n.n(b),w=n(871),S=n(81),j=n(1510),E=n.n(j),O=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),x=g.a.TextArea,C={$id:"example-search-schema",title:"example-search-schema",description:"example-search-schema.",type:"object",required:[],properties:{name:{type:"string",title:"账号名称"},email:{type:"string",title:"用户邮箱"},int:{type:"integer",title:"整数组件"},number:{type:"number",title:"浮点数组件"},checkbox:{type:"array",title:"checkbox组件"},password:{type:"string",title:"密码"},datetime:{type:"string",title:"datetime组件"},radio:{type:"string",title:"radio组件"},select:{type:"array",title:"select组件"},switch:{type:"boolean",title:"switch组件"},cascader:{type:"array",title:"级联组件"},numberBetweenBegin:{type:"number",title:"numberBetweenBegin"},numberBetweenEnd:{type:"number",title:"numberBetweenEnd"},dateBetweenBegin:{type:"string",title:"dateBetweenBegin"},dateBetweenEnd:{type:"string",title:"dateBetweenEnd"}}},k={name:{"ui:widget":"input","ui:options":{type:"text",placeholder:"账号名称查询"},"ui:title":"账号名称","ui:description":""},email:{"ui:widget":"input","ui:options":{type:"text",placeholder:"用户邮箱查询"},"ui:title":"用户邮箱","ui:description":""},int:{"ui:widget":"inputNumber","ui:options":{},"ui:defaultValue":0,"ui:title":"整数组件","ui:description":""},number:{"ui:widget":"inputNumber","ui:options":{step:.1},"ui:defaultValue":.1,"ui:title":"浮点数组件","ui:description":""},checkbox:{"ui:widget":"checkbox","ui:options":{options:[{label:"Apple",value:"AppleValue"},{label:"Pear",value:"PearValue"},{label:"Orange",value:"OrangeValue",disabled:!1}]},"ui:defaultValue":["AppleValue"],"ui:title":"checkbox组件","ui:description":""},password:{"ui:widget":"input","ui:options":{type:"password",placeholder:"密码"},"ui:title":"密码","ui:description":""},datetime:{"ui:widget":"datetime","ui:options":{style:{width:120}},"ui:title":"datetime","ui:description":""},radio:{"ui:widget":"radio","ui:options":{options:[{label:"Apple",value:"AppleValue"},{label:"Pear",value:"PearValue"},{label:"Orange",value:"OrangeValue",disabled:!1}]},"ui:defaultValue":"AppleValue","ui:title":"radio组件","ui:description":""},select:{"ui:widget":"select","ui:options":{allowClear:!0,placeholder:"请选择",showSearch:!0},"ui:dataOptions":[{title:"Jack",value:"jack"},{title:"Lucy",value:"lucy"},{title:"Tom",value:"tom",disabled:!0}],"ui:defaultValue":"lucy","ui:title":"select组件","ui:description":""},switch:{"ui:widget":"switch","ui:options":{checkedChildren:"激活",unCheckedChildren:"锁定"},"ui:defaultValue":!0,"ui:title":"switch","ui:description":""},numberBetween:{"ui:widget":"between","ui:type":"number","ui:options":{step:.1},"ui:defaultBeginValue":.1,"ui:defaultEndValue":.2,"ui:title":"范围参数组件","ui:description":""},dateBetween:{"ui:widget":"between","ui:type":"date","ui:options":{style:{width:130}},"ui:title":"范围参数组件","ui:description":""},cascader:{"ui:widget":"cascader","ui:options":{allowClear:!0,expandTrigger:"hover",showSearch:!0,options:[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}]},"ui:defaultValue":["zhejiang","hangzhou","xihu"],"ui:title":"级联组件","ui:description":""}},U=function(e){function t(){var e,n,i,o;r(this,t);for(var u=arguments.length,c=Array(u),l=0;l<u;l++)c[l]=arguments[l];return n=i=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),i.state={searchSchema:C,searchUiSchema:k,error:"",data:""},i.searchSchema=JSON.stringify(C),i.searchUiSchema=JSON.stringify(k),i.searchSchemaChange=function(e){i.searchSchema=e.target.value},i.searchUiSchemaChange=function(e){i.searchUiSchema=e.target.value},i.parseSchema=function(){if(""!=i.searchSchema&&""!=i.searchUiSchema)try{var e=JSON.parse(i.searchSchema),t=JSON.parse(i.searchUiSchema);i.setState({searchSchema:e,searchUiSchema:t,error:""})}catch(e){i.setState({error:e.toString()})}},i.handleSearch=function(e){i.setState({data:JSON.stringify(e,null,4)});var t=E.a.stringify(e);i.props.history.push({path:i.props.location.pathname,search:t})},i.handleReset=function(){i.setState({data:""})},o=n,a(i,o)}return i(t,e),O(t,[{key:"componentDidMount",value:function(){var e=this.props.location.search,t=E.a.parse(e);console.log(t)}},{key:"render",value:function(){return console.log("SearchFormTest render"),v.a.createElement("div",null,v.a.createElement("div",null,v.a.createElement(f.a,{color:"#87d068"},"Schema"),v.a.createElement(x,{rows:15,defaultValue:JSON.stringify(this.state.searchSchema,null,4),onChange:this.searchSchemaChange})),v.a.createElement("div",{style:{marginTop:10}},v.a.createElement(f.a,{color:"#87d068"},"UiSchema"),v.a.createElement(x,{rows:15,defaultValue:JSON.stringify(this.state.searchUiSchema,null,4),onChange:this.searchUiSchemaChange})),v.a.createElement("div",{style:{marginTop:10}},v.a.createElement(p.a,{type:"primary",onClick:this.parseSchema},"重新解析")),""!=this.state.error?v.a.createElement("div",null,this.state.error):null,v.a.createElement(c.a,null),v.a.createElement(w.a,{noCacheSchema:!0,schema:this.state.searchSchema,uiSchema:this.state.searchUiSchema,handleSubmit:this.handleSearch,handleReset:this.handleReset}),""!=this.state.data?v.a.createElement("div",null,this.state.data,v.a.createElement("p",null,"注意看地址栏的变化")):null)}}]),t}(v.a.PureComponent);t.a=Object(S.withRouter)(U)},1510:function(e,t,n){"use strict";function r(e){switch(e.arrayFormat){case"index":return function(t,n,r){return null===n?[i(t,e),"[",r,"]"].join(""):[i(t,e),"[",i(r,e),"]=",i(n,e)].join("")};case"bracket":return function(t,n){return null===n?i(t,e):[i(t,e),"[]=",i(n,e)].join("")};default:return function(t,n){return null===n?i(t,e):[i(t,e),"=",i(n,e)].join("")}}}function a(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){if(t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),!t)return void(r[e]=n);void 0===r[e]&&(r[e]={}),r[e][t[1]]=n};case"bracket":return function(e,n,r){return t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0===r[e]?void(r[e]=[n]):void(r[e]=[].concat(r[e],n)):void(r[e]=n)};default:return function(e,t,n){if(void 0===n[e])return void(n[e]=t);n[e]=[].concat(n[e],t)}}}function i(e,t){return t.encode?t.strict?l(e):encodeURIComponent(e):e}function o(e){return Array.isArray(e)?e.sort():"object"==typeof e?o(Object.keys(e)).sort(function(e,t){return Number(e)-Number(t)}).map(function(t){return e[t]}):e}function u(e){var t=e.indexOf("?");return-1===t?"":e.slice(t+1)}function c(e,t){t=s({arrayFormat:"none"},t);var n=a(t),r=Object.create(null);return"string"!=typeof e?r:(e=e.trim().replace(/^[?#&]/,""))?(e.split("&").forEach(function(e){var t=e.replace(/\+/g," ").split("="),a=t.shift(),i=t.length>0?t.join("="):void 0;i=void 0===i?null:p(i),n(p(a),i,r)}),Object.keys(r).sort().reduce(function(e,t){var n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=o(n):e[t]=n,e},Object.create(null))):r}var l=n(1511),s=n(108),p=n(1512);t.extract=u,t.parse=c,t.stringify=function(e,t){t=s({encode:!0,strict:!0,arrayFormat:"none"},t),!1===t.sort&&(t.sort=function(){});var n=r(t);return e?Object.keys(e).sort(t.sort).map(function(r){var a=e[r];if(void 0===a)return"";if(null===a)return i(r,t);if(Array.isArray(a)){var o=[];return a.slice().forEach(function(e){void 0!==e&&o.push(n(r,e,o.length))}),o.join("&")}return i(r,t)+"="+i(a,t)}).filter(function(e){return e.length>0}).join("&"):""},t.parseUrl=function(e,t){return{url:e.split("?")[0]||"",query:c(u(e),t)}}},1511:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}},1512:function(e,t,n){"use strict";function r(e,t){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;t=t||1;var n=e.slice(0,t),a=e.slice(t);return Array.prototype.concat.call([],r(n),r(a))}function a(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(o),n=1;n<t.length;n++)e=r(t,n).join(""),t=e.match(o);return e}}function i(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},n=u.exec(e);n;){try{t[n[0]]=decodeURIComponent(n[0])}catch(e){var r=a(n[0]);r!==n[0]&&(t[n[0]]=r)}n=u.exec(e)}t["%C2"]="�";for(var i=Object.keys(t),o=0;o<i.length;o++){var c=i[o];e=e.replace(new RegExp(c,"g"),t[c])}return e}var o=new RegExp("%[a-f0-9]{2}","gi"),u=new RegExp("(%[a-f0-9]{2})+","gi");e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return i(e)}}},911:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(48),u=(n.n(o),n(49)),c=n.n(u),l=n(50),s=(n.n(l),n(51)),p=n.n(s),h=n(303),d=(n.n(h),n(304)),f=n.n(d),m=n(0),y=n.n(m),g=n(1509),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),v=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),b(t,[{key:"render",value:function(){return y.a.createElement("div",null,y.a.createElement(c.a,null,y.a.createElement(p.a,null,y.a.createElement(f.a,{style:{width:"100%"},title:"查询表单"},y.a.createElement(g.a,null)))))}}]),t}(y.a.PureComponent);t.default=v}});
//# sourceMappingURL=6.030c43fc.chunk.js.map