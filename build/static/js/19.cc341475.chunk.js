webpackJsonp([19],{903:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(867),u=(n.n(i),n(868)),c=n.n(u),s=n(880),l=(n.n(s),n(881)),f=n.n(l),d=n(0),m=n.n(d),p=n(872),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),b=[{title:"服务名",dataIndex:"name",key:"name"},{title:"状态",dataIndex:"status",key:"status",render:function(e,t){return"off"===e?m.a.createElement(f.a,{status:"error",text:"OFF"}):m.a.createElement(f.a,{status:"success",text:"ON"})}},{title:"版本号",dataIndex:"version",key:"version"},{title:"地域",dataIndex:"region",key:"region"},{title:"云节点数",dataIndex:"nodes_num",key:"nodes_num"},{title:"其他",dataIndex:"other",key:"other"}],k=function(e,t){return t},h=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.mockWbsocket=function(){n.getNodes().then(function(e){var t=e.services;n.destroy||n.setState({data:t},function(){n.mockWSTimer=setTimeout(n.mockWbsocket,5e3)})})},n.getNodes=function(){return Object(p.j)().then(function(e){return e.data})},n.state={data:[]},n.columns=b,n.mockWSTimer=null,n.destroy=!1,n}return a(t,e),y(t,[{key:"componentDidMount",value:function(){this.mockWbsocket()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.mockWSTimer),this.destroy=!0}},{key:"render",value:function(){var e=this.state.data;return m.a.createElement("div",null,m.a.createElement(c.a,{columns:b,rowKey:k,dataSource:e,pagination:!1}))}}]),t}(d.PureComponent);t.default=h}});
//# sourceMappingURL=19.cc341475.chunk.js.map