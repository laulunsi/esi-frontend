webpackJsonp([15],{910:function(e,t,n){"use strict";function a(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function a(r,o){try{var l=t[r](o),i=l.value}catch(e){return void n(e)}if(!l.done)return Promise.resolve(i).then(function(e){a("next",e)},function(e){a("throw",e)});e(i)}return a("next")})}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(47),c=(n.n(i),n(39)),u=n.n(c),s=n(48),m=(n.n(s),n(49)),p=n.n(m),f=n(50),d=(n.n(f),n(51)),h=n.n(d),y=n(303),g=(n.n(y),n(304)),E=n.n(g),b=n(172),v=(n.n(b),n(173)),w=n.n(v),P=n(78),O=n.n(P),_=n(873),k=(n.n(_),n(874)),x=n.n(k),T=n(0),j=n.n(T),C=n(882),S=n(79),A=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),F=function(e){function t(){var e,n,l,i,c=this;r(this,t);for(var u=arguments.length,s=Array(u),m=0;m<u;m++)s[m]=arguments[m];return n=l=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),l.state={isAdmin:!0,loading:!1},l.adminPermissionToggle=function(e){localStorage.setItem("isAdmin",e?1:0),l.setState({isAdmin:e})},l.doFetch=a(O.a.mark(function e(){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l.setState({loading:!0}),e.prev=1,e.next=4,Object(S.getTopPostByQuery)({});case 4:x.a.success({placement:"bottomLeft bottomRight",message:"请求成功"}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),"403"==e.t0&&x.a.error({placement:"bottomLeft bottomRight",message:"请求被拦截"}),console.log(e.t0);case 11:l.setState({loading:!1});case 12:case"end":return e.stop()}},e,c,[[1,7]])})),i=n,o(l,i)}return l(t,e),A(t,[{key:"render",value:function(){return console.log("PermissionTest render"),j.a.createElement("div",null,j.a.createElement(p.a,null,j.a.createElement(h.a,null,j.a.createElement(E.a,{style:{width:"100%"}},j.a.createElement(w.a,{checkedChildren:"有admin权限",unCheckedChildren:"无admin权限",defaultChecked:!0,onChange:this.adminPermissionToggle})))),j.a.createElement(p.a,null,j.a.createElement(h.a,null,j.a.createElement(E.a,{style:{width:"100%",marginTop:20},title:"元素级权限控制"},j.a.createElement("p",null,"当没有admin权限的时候,权限按钮不可见"),j.a.createElement(u.a,{type:"primary"},"正常按钮"),"    ",j.a.createElement(C.a,{permission:["xxoo"]},j.a.createElement(u.a,null,"权限按钮"),"    ",j.a.createElement(u.a,{type:"dashed"},"权限按钮"),"    ",j.a.createElement(u.a,{type:"danger"},"权限按钮"))))),j.a.createElement(p.a,null,j.a.createElement(h.a,null,j.a.createElement(E.a,{style:{width:"100%",marginTop:20},title:"接口级权限控制"},j.a.createElement("p",null,"当没有admin权限的时候,请求相应接口时,直接拦截请求,F12进行查看"),j.a.createElement(u.a,{type:"primary",loading:this.state.loading,onClick:this.doFetch},"发起请求")))),j.a.createElement(p.a,null,j.a.createElement(h.a,null,j.a.createElement(E.a,{style:{width:"100%",marginTop:20},title:"菜单级权限控制"},j.a.createElement("p",null,"后端返回的菜单都是已经在后端经过权限过滤的,保存在redux中")))))}}]),t}(j.a.PureComponent);t.default=F}});
//# sourceMappingURL=15.4809b839.chunk.js.map