(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,function(t,e,n){t.exports=n.p+"static/media/logo.5d5d9eef.svg"},,,function(t,e,n){t.exports=n(15)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(2),s=n(3),i=n(7),o=n(6),c=n(0),u=n.n(c),l=n(4),r=n.n(l);n(13),n(5),n(14);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var h=function(t){Object(i.a)(n,t);var e=Object(o.a)(n);function n(t){var s;return Object(a.a)(this,n),(s=e.call(this,t)).state={count:"0"},s}return Object(s.a)(n,[{key:"clearr",value:function(){this.setState({count:"0"})}},{key:"one1",value:function(){0==this.state.count&&(this.state.count=""),this.setState((function(t){return{count:t.count+"1"}}))}},{key:"two2",value:function(){0==this.state.count&&(this.state.count=""),this.setState((function(t){return{count:t.count+"2"}}))}},{key:"three3",value:function(){0==this.state.count&&(this.state.count=""),this.setState((function(t){return{count:t.count+"3"}}))}},{key:"four4",value:function(){0==this.state.count&&(this.state.count=""),this.setState((function(t){return{count:t.count+"4"}}))}},{key:"five5",value:function(){0==this.state.count&&(this.state.count=""),this.setState((function(t){return{count:t.count+"5"}}))}},{key:"six6",value:function(){0==this.state.count&&(this.state.count=""),this.setState((function(t){return{count:t.count+"6"}}))}},{key:"seven7",value:function(){0==this.state.count&&(this.state.count=""),this.setState((function(t){return{count:t.count+"7"}}))}},{key:"eight8",value:function(){0==this.state.count&&(this.state.count=""),this.setState((function(t){return{count:t.count+"8"}}))}},{key:"nine9",value:function(){0==this.state.count&&(this.state.count=""),this.setState((function(t){return{count:t.count+"9"}}))}},{key:"zero0",value:function(){0!=this.state.count&&this.setState((function(t){return{count:t.count+"0"}}))}},{key:"addd",value:function(){" "!=this.state.count[this.state.count.length-1]&&this.setState((function(t){return{count:t.count+" + "}}))}},{key:"dividee",value:function(){" "!=this.state.count[this.state.count.length-1]&&this.setState((function(t){return{count:t.count+" / "}}))}},{key:"multiplyy",value:function(){" "!=this.state.count[this.state.count.length-1]&&this.setState((function(t){return{count:t.count+" * "}}))}},{key:"subtractt",value:function(){" "!=this.state.count[this.state.count.length-1]&&this.setState((function(t){return{count:t.count+" - "}}))}},{key:"equall",value:function(){for(var t,e=this.state.count.split(" "),n=0,a=0;a<e.length;a++)"*"!==e[a]&&"/"!==e[a]||(n="*"===e[a]?parseFloat(e[a-1])*parseFloat(e[a+1]):parseFloat(e[a-1])/parseFloat(e[a+1]),e.splice(a-1,2),e[a-1]=n,a=0);for(var s=0;s<e.length;s++)"+"!==e[s]&&"-"!==e[s]||(n="+"===e[s]?parseFloat(e[s-1])+parseFloat(e[s+1]):parseFloat(e[s-1])-parseFloat(e[s+1]),e.splice(s-1,2),e[s-1]=n,s=0);t=e[0].toFixed(1),this.state.count=t,this.setState((function(t){return{count:t.count}}))}},{key:"render",value:function(){return u.a.createElement("div",{id:"calculator"},u.a.createElement("div",{id:"buttons"},u.a.createElement("h1",{className:"vision"},this.state.count),u.a.createElement("button",{className:"clear",onClick:this.clearr.bind(this)},"AC"),u.a.createElement("button",{className:"divide",onClick:this.dividee.bind(this)},"/"),u.a.createElement("button",{className:"multiply",onClick:this.multiplyy.bind(this)},"*"),u.a.createElement("button",{className:"seven",onClick:this.seven7.bind(this)},"7"),u.a.createElement("button",{className:"eight",onClick:this.eight8.bind(this)},"8"),u.a.createElement("button",{className:"nine",onClick:this.nine9.bind(this)},"9"),u.a.createElement("button",{className:"subtract",onClick:this.subtractt.bind(this)},"-"),u.a.createElement("button",{className:"four",onClick:this.four4.bind(this)},"4"),u.a.createElement("button",{className:"five",onClick:this.five5.bind(this)},"5"),u.a.createElement("button",{className:"six",onClick:this.six6.bind(this)},"6"),u.a.createElement("button",{className:"add",onClick:this.addd.bind(this)},"+"),u.a.createElement("button",{className:"once",onClick:this.one1.bind(this)},"1"),u.a.createElement("button",{className:"two",onClick:this.two2.bind(this)},"2"),u.a.createElement("button",{className:"three",onClick:this.three3.bind(this)},"3"),u.a.createElement("button",{className:"equal",onClick:this.equall.bind(this)},"="),u.a.createElement("button",{className:"zero",onClick:this.zero0.bind(this)},"0"),u.a.createElement("button",{className:"decimal"},".")))}}]),n}(u.a.Component);r.a.render(u.a.createElement(u.a.StrictMode,null,u.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.1a781c13.chunk.js.map