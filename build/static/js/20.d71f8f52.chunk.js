webpackJsonp([20],{899:function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(a,o){try{var i=t[a](o),s=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)});e(s)}return r("next")})}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(867),c=(n.n(s),n(868)),u=n.n(c),d=n(78),l=n.n(d),f=n(0),p=n.n(f),g=n(79),h=n(175),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),y=function(e){function t(){var e,n,i,s,c=this;a(this,t);for(var u=arguments.length,d=Array(u),f=0;f<u;f++)d[f]=arguments[f];return n=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(d))),i.state={filter:{},expand:!0,selectedRowKeys:[],pagedList:[],pagination:{current:1,pageSize:10,showQuickJumper:!0,showSizeChanger:!0,showTotal:function(e){return"Total "+e+" items"}},sorter:{field:"createdDate",order:"descend"},loading:!1},i.columns=[{title:"用户",dataIndex:"createdByName"},{title:"IP",dataIndex:"ip"},{title:"方法",dataIndex:"method"},{title:"请求",dataIndex:"request"},{title:"耗时(ms)",dataIndex:"time"},{title:"时间",dataIndex:"createdDate",sorter:!0,render:function(e,t){return Object(h.b)(t.createdDate)}}],i.fetch=r(l.a.mark(function e(){var t,n,r,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i.setState({loading:!0}),e.next=3,Object(g.getRequestLogPagedList)(a);case 3:t=e.sent,n=t.data,r=Object.assign({},i.state.pagination),r.total=n.totalCount,i.setState({loading:!1,pagedList:n.rows,pagination:r});case 8:case"end":return e.stop()}},e,c)})),i.handleTableChange=function(e,t,n){var r=Object.assign({},i.state.pagination);r.current=e.current,r.pageSize=e.pageSize,i.setState({pagination:r,sorter:{field:n.field,order:n.order}});var a={pageIndex:r.current,pageSize:r.pageSize,sortBy:n.field,descending:"descend"===n.order,filter:i.state.filter};i.fetch(a)},s=n,o(i,s)}return i(t,e),b(t,[{key:"componentDidMount",value:function(){this.fetch({pageIndex:this.state.pagination.current,pageSize:this.state.pagination.pageSize,sortBy:this.state.sorter.field,descending:"descend"===this.state.sorter.order,filter:this.state.filter})}},{key:"render",value:function(){return p.a.createElement(u.a,{columns:this.columns,rowKey:function(e){return e.id},dataSource:this.state.pagedList,pagination:this.state.pagination,loading:this.state.loading,onChange:this.handleTableChange,scroll:{x:768},bordered:!0})}}]),t}(p.a.PureComponent);t.default=y}});
//# sourceMappingURL=20.d71f8f52.chunk.js.map