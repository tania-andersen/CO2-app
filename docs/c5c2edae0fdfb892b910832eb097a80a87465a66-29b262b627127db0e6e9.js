(self.webpackChunkgatsby_material_typescript_starter=self.webpackChunkgatsby_material_typescript_starter||[]).push([[534],{1293:function(t,e,n){"use strict";var r=n(7462),i=n(5987),o=n(4942),a=n(7294),s=n(5505),c=n(4621),u=n(1664),l=a.forwardRef((function(t,e){var n=t.classes,o=t.className,c=t.component,l=void 0===c?"div":c,f=t.disableGutters,d=void 0!==f&&f,p=t.fixed,m=void 0!==p&&p,y=t.maxWidth,h=void 0===y?"lg":y,g=(0,i.Z)(t,["classes","className","component","disableGutters","fixed","maxWidth"]);return a.createElement(l,(0,r.Z)({className:(0,s.Z)(n.root,o,m&&n.fixed,d&&n.disableGutters,!1!==h&&n["maxWidth".concat((0,u.Z)(String(h)))]),ref:e},g))}));e.Z=(0,c.Z)((function(t){return{root:(0,o.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:t.spacing(2),paddingRight:t.spacing(2),display:"block"},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(t.breakpoints.values).reduce((function(e,n){var r=t.breakpoints.values[n];return 0!==r&&(e[t.breakpoints.up(n)]={maxWidth:r}),e}),{}),maxWidthXs:(0,o.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),maxWidthSm:(0,o.Z)({},t.breakpoints.up("sm"),{maxWidth:t.breakpoints.values.sm}),maxWidthMd:(0,o.Z)({},t.breakpoints.up("md"),{maxWidth:t.breakpoints.values.md}),maxWidthLg:(0,o.Z)({},t.breakpoints.up("lg"),{maxWidth:t.breakpoints.values.lg}),maxWidthXl:(0,o.Z)({},t.breakpoints.up("xl"),{maxWidth:t.breakpoints.values.xl})}}),{name:"MuiContainer"})(l)},1510:function(t,e,n){"use strict";function r(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var a=this,s=function(){t.apply(a,i)};clearTimeout(e),e=setTimeout(s,n)}return r.clear=function(){clearTimeout(e)},r}n.d(e,{Z:function(){return r}})},2993:function(t){var e="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var s,c,u,l;if(Array.isArray(t)){if((s=t.length)!=a.length)return!1;for(c=s;0!=c--;)if(!o(t[c],a[c]))return!1;return!0}if(n&&t instanceof Map&&a instanceof Map){if(t.size!==a.size)return!1;for(l=t.entries();!(c=l.next()).done;)if(!a.has(c.value[0]))return!1;for(l=t.entries();!(c=l.next()).done;)if(!o(c.value[1],a.get(c.value[0])))return!1;return!0}if(r&&t instanceof Set&&a instanceof Set){if(t.size!==a.size)return!1;for(l=t.entries();!(c=l.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(a)){if((s=t.length)!=a.length)return!1;for(c=s;0!=c--;)if(t[c]!==a[c])return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===a.toString();if((s=(u=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,u[c]))return!1;if(e&&t instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==u[c]&&"__v"!==u[c]&&"__o"!==u[c]||!t.$$typeof)&&!o(t[u[c]],a[u[c]]))return!1;return!0}return t!=t&&a!=a}t.exports=function(t,e){try{return o(t,e)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(t,e,n){"use strict";var r,i=n(7294),o=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,u=[];function l(){c=t(u.map((function(t){return t.props}))),f.canUseDOM?e(c):n&&(c=n(c))}var f=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,i.peek=function(){return c},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=c;return c=void 0,u=[],t};var a=i.prototype;return a.UNSAFE_componentWillMount=function(){u.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var t=u.indexOf(this);u.splice(t,1),l()},a.render=function(){return o.createElement(r,this.props)},i}(i.PureComponent);return a(f,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),a(f,"canUseDOM",s),f}}},2508:function(t,e,n){"use strict";n.d(e,{oM:function(){return Yt},pQ:function(){return gt}});var r,i,o,a,s=n(7294),c=n(5697),u=n.n(c),l=n(4839),f=n.n(l),d=n(2993),p=n.n(d),m=n(6494),y=n.n(m),h="bodyAttributes",g="htmlAttributes",v="titleAttributes",b={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(b).map((function(t){return b[t]})),"charset"),T="cssText",w="href",x="http-equiv",C="innerHTML",S="itemprop",O="name",A="property",k="rel",Z="src",j="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",L="defer",R="encodeSpecialCharacters",I="onChangeClientState",N="titleTemplate",_=Object.keys(P).reduce((function(t,e){return t[P[e]]=e,t}),{}),H=[b.NOSCRIPT,b.SCRIPT,b.STYLE],D="data-react-helmet",W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Y=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),q=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},z=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},F=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},U=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(t){var e=$(t,b.TITLE),n=$(t,N);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var r=$(t,M);return e||r||void 0},V=function(t){return $(t,I)||function(){}},X=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return q({},t,e)}),{})},G=function(t,e){return e.filter((function(t){return void 0!==t[b.BASE]})).map((function(t){return t[b.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==t.indexOf(o)&&n[o])return e.concat(n)}return e}),[])},Q=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&rt("Helmet: "+t+' should be of type "Array". Instead found type "'+W(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var i={};n.filter((function(t){for(var n=void 0,o=Object.keys(t),a=0;a<o.length;a++){var s=o[a],c=s.toLowerCase();-1===e.indexOf(c)||n===k&&"canonical"===t[n].toLowerCase()||c===k&&"stylesheet"===t[c].toLowerCase()||(n=c),-1===e.indexOf(s)||s!==C&&s!==T&&s!==S||(n=s)}if(!n||!t[n])return!1;var u=t[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][u]&&(i[n][u]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var o=Object.keys(i),a=0;a<o.length;a++){var s=o[a],c=y()({},r[s],i[s]);r[s]=c}return t}),[]).reverse()},$=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},J=(r=Date.now(),function(t){var e=Date.now();e-r>16?(r=e,t(e)):setTimeout((function(){J(t)}),0)}),tt=function(t){return clearTimeout(t)},et="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||J:n.g.requestAnimationFrame||J,nt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||tt:n.g.cancelAnimationFrame||tt,rt=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},it=null,ot=function(t,e){var n=t.baseTag,r=t.bodyAttributes,i=t.htmlAttributes,o=t.linkTags,a=t.metaTags,s=t.noscriptTags,c=t.onChangeClientState,u=t.scriptTags,l=t.styleTags,f=t.title,d=t.titleAttributes;ct(b.BODY,r),ct(b.HTML,i),st(f,d);var p={baseTag:ut(b.BASE,n),linkTags:ut(b.LINK,o),metaTags:ut(b.META,a),noscriptTags:ut(b.NOSCRIPT,s),scriptTags:ut(b.SCRIPT,u),styleTags:ut(b.STYLE,l)},m={},y={};Object.keys(p).forEach((function(t){var e=p[t],n=e.newTags,r=e.oldTags;n.length&&(m[t]=n),r.length&&(y[t]=p[t].oldTags)})),e&&e(),c(t,m,y)},at=function(t){return Array.isArray(t)?t.join(""):t},st=function(t,e){void 0!==t&&document.title!==t&&(document.title=at(t)),ct(b.TITLE,e)},ct=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(D),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(e),s=0;s<a.length;s++){var c=a[s],u=e[c]||"";n.getAttribute(c)!==u&&n.setAttribute(c,u),-1===i.indexOf(c)&&i.push(c);var l=o.indexOf(c);-1!==l&&o.splice(l,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);i.length===o.length?n.removeAttribute(D):n.getAttribute(D)!==a.join(",")&&n.setAttribute(D,a.join(","))}},ut=function(t,e){var n=document.head||document.querySelector(b.HEAD),r=n.querySelectorAll(t+"["+"data-react-helmet]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===C)n.innerHTML=e.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var s=void 0===e[r]?"":e[r];n.setAttribute(r,s)}n.setAttribute(D,"true"),i.some((function(t,e){return a=e,n.isEqualNode(t)}))?i.splice(a,1):o.push(n)})),i.forEach((function(t){return t.parentNode.removeChild(t)})),o.forEach((function(t){return n.appendChild(t)})),{oldTags:i,newTags:o}},lt=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},ft=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[P[n]||n]=t[n],e}),e)},dt=function(t,e,n){switch(t){case b.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})[D]=!0,i=ft(n,r),[s.createElement(b.TITLE,i,t)];var t,n,r,i},toString:function(){return function(t,e,n,r){var i=lt(n),o=at(e);return i?"<"+t+' data-react-helmet="true" '+i+">"+U(o,r)+"</"+t+">":"<"+t+' data-react-helmet="true">'+U(o,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case h:case g:return{toComponent:function(){return ft(e)},toString:function(){return lt(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,i=((r={key:n})[D]=!0,r);return Object.keys(e).forEach((function(t){var n=P[t]||t;if(n===C||n===T){var r=e.innerHTML||e.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=e[t]})),s.createElement(t,i)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var i=Object.keys(r).filter((function(t){return!(t===C||t===T)})).reduce((function(t,e){var i=void 0===r[e]?e:e+'="'+U(r[e],n)+'"';return t?t+" "+i:i}),""),o=r.innerHTML||r.cssText||"",a=-1===H.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+i+(a?"/>":">"+o+"</"+t+">")}),"")}(t,e,n)}}}},pt=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,i=t.htmlAttributes,o=t.linkTags,a=t.metaTags,s=t.noscriptTags,c=t.scriptTags,u=t.styleTags,l=t.title,f=void 0===l?"":l,d=t.titleAttributes;return{base:dt(b.BASE,e,r),bodyAttributes:dt(h,n,r),htmlAttributes:dt(g,i,r),link:dt(b.LINK,o,r),meta:dt(b.META,a,r),noscript:dt(b.NOSCRIPT,s,r),script:dt(b.SCRIPT,c,r),style:dt(b.STYLE,u,r),title:dt(b.TITLE,{title:f,titleAttributes:d},r)}},mt=f()((function(t){return{baseTag:G([w,j],t),bodyAttributes:X(h,t),defer:$(t,L),encode:$(t,R),htmlAttributes:X(g,t),linkTags:Q(b.LINK,[k,w],t),metaTags:Q(b.META,[O,E,x,A,S],t),noscriptTags:Q(b.NOSCRIPT,[C],t),onChangeClientState:V(t),scriptTags:Q(b.SCRIPT,[Z,C],t),styleTags:Q(b.STYLE,[T],t),title:K(t),titleAttributes:X(v,t)}}),(function(t){it&&nt(it),t.defer?it=et((function(){ot(t,(function(){it=null}))})):(ot(t),it=null)}),pt)((function(){return null})),yt=(i=mt,a=o=function(t){function e(){return B(this,e),F(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!p()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case b.SCRIPT:case b.NOSCRIPT:return{innerHTML:e};case b.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,i=t.newChildProps,o=t.nestedChildren;return q({},r,((e={})[n.type]=[].concat(r[n.type]||[],[q({},i,this.mapNestedChildrenToProps(n,o))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,i=t.newProps,o=t.newChildProps,a=t.nestedChildren;switch(r.type){case b.TITLE:return q({},i,((e={})[r.type]=a,e.titleAttributes=q({},o),e));case b.BODY:return q({},i,{bodyAttributes:q({},o)});case b.HTML:return q({},i,{htmlAttributes:q({},o)})}return q({},i,((n={})[r.type]=q({},o),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=q({},e);return Object.keys(t).forEach((function(e){var r;n=q({},n,((r={})[e]=t[e],r))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return s.Children.forEach(t,(function(t){if(t&&t.props){var i=t.props,o=i.children,a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[_[n]||n]=t[n],e}),e)}(z(i,["children"]));switch(n.warnOnInvalidChildren(t,o),t.type){case b.LINK:case b.META:case b.NOSCRIPT:case b.SCRIPT:case b.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:a,nestedChildren:o});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:a,nestedChildren:o})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=z(t,["children"]),r=q({},n);return e&&(r=this.mapChildrenToProps(e,r)),s.createElement(i,r)},Y(e,null,[{key:"canUseDOM",set:function(t){i.canUseDOM=t}}]),e}(s.Component),o.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=i.peek,o.rewind=function(){var t=i.rewind();return t||(t=pt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},a);yt.renderStatic=yt.rewind;var ht=n(5444),gt=function(t){var e=(0,ht.useStaticQuery)("712016698").site,n=t.description||e.siteMetadata.description;return s.createElement(yt,{htmlAttributes:{lang:t.lang||"en"},title:t.title,titleTemplate:"%s | "+e.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:t.title},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.siteMetadata.author.name},{name:"twitter:title",content:t.title},{name:"twitter:description",content:n}].concat(t.meta||[])})},vt=((0,n(7627).Z)((function(t){return{heroContent:{backgroundColor:t.palette.background.paper,padding:t.spacing(8,0,6)}}})),n(7462)),bt=n(885),Et=n(5987),Tt=n(5505),wt=n(1423),xt=n(4621),Ct=n(381),St=n(9701),Ot=n(9355),At=n(1291),kt=s.forwardRef((function(t,e){var n=t.children,r=t.classes,i=t.className,o=t.collapsedHeight,a=t.collapsedSize,c=void 0===a?"0px":a,u=t.component,l=void 0===u?"div":u,f=t.disableStrictModeCompat,d=void 0!==f&&f,p=t.in,m=t.onEnter,y=t.onEntered,h=t.onEntering,g=t.onExit,v=t.onExited,b=t.onExiting,E=t.style,T=t.timeout,w=void 0===T?Ct.x9.standard:T,x=t.TransitionComponent,C=void 0===x?wt.ZP:x,S=(0,Et.Z)(t,["children","classes","className","collapsedHeight","collapsedSize","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),O=(0,Ot.Z)(),A=s.useRef(),k=s.useRef(null),Z=s.useRef(),j="number"==typeof(o||c)?"".concat(o||c,"px"):o||c;s.useEffect((function(){return function(){clearTimeout(A.current)}}),[]);var P=O.unstable_strictMode&&!d,M=s.useRef(null),L=(0,At.Z)(e,P?M:void 0),R=function(t){return function(e,n){if(t){var r=P?[M.current,e]:[e,n],i=(0,bt.Z)(r,2),o=i[0],a=i[1];void 0===a?t(o):t(o,a)}}},I=R((function(t,e){t.style.height=j,m&&m(t,e)})),N=R((function(t,e){var n=k.current?k.current.clientHeight:0,r=(0,St.C)({style:E,timeout:w},{mode:"enter"}).duration;if("auto"===w){var i=O.transitions.getAutoHeightDuration(n);t.style.transitionDuration="".concat(i,"ms"),Z.current=i}else t.style.transitionDuration="string"==typeof r?r:"".concat(r,"ms");t.style.height="".concat(n,"px"),h&&h(t,e)})),_=R((function(t,e){t.style.height="auto",y&&y(t,e)})),H=R((function(t){var e=k.current?k.current.clientHeight:0;t.style.height="".concat(e,"px"),g&&g(t)})),D=R(v),W=R((function(t){var e=k.current?k.current.clientHeight:0,n=(0,St.C)({style:E,timeout:w},{mode:"exit"}).duration;if("auto"===w){var r=O.transitions.getAutoHeightDuration(e);t.style.transitionDuration="".concat(r,"ms"),Z.current=r}else t.style.transitionDuration="string"==typeof n?n:"".concat(n,"ms");t.style.height=j,b&&b(t)}));return s.createElement(C,(0,vt.Z)({in:p,onEnter:I,onEntered:_,onEntering:N,onExit:H,onExited:D,onExiting:W,addEndListener:function(t,e){var n=P?t:e;"auto"===w&&(A.current=setTimeout(n,Z.current||0))},nodeRef:P?M:void 0,timeout:"auto"===w?null:w},S),(function(t,e){return s.createElement(l,(0,vt.Z)({className:(0,Tt.Z)(r.root,r.container,i,{entered:r.entered,exited:!p&&"0px"===j&&r.hidden}[t]),style:(0,vt.Z)({minHeight:j},E),ref:L},e),s.createElement("div",{className:r.wrapper,ref:k},s.createElement("div",{className:r.wrapperInner},n)))}))}));kt.muiSupportAuto=!0;var Zt=(0,xt.Z)((function(t){return{root:{height:0,overflow:"hidden",transition:t.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(kt),jt={entering:{opacity:1},entered:{opacity:1}},Pt={enter:Ct.x9.enteringScreen,exit:Ct.x9.leavingScreen},Mt=s.forwardRef((function(t,e){var n=t.children,r=t.disableStrictModeCompat,i=void 0!==r&&r,o=t.in,a=t.onEnter,c=t.onEntered,u=t.onEntering,l=t.onExit,f=t.onExited,d=t.onExiting,p=t.style,m=t.TransitionComponent,y=void 0===m?wt.ZP:m,h=t.timeout,g=void 0===h?Pt:h,v=(0,Et.Z)(t,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","TransitionComponent","timeout"]),b=(0,Ot.Z)(),E=b.unstable_strictMode&&!i,T=s.useRef(null),w=(0,At.Z)(n.ref,e),x=(0,At.Z)(E?T:void 0,w),C=function(t){return function(e,n){if(t){var r=E?[T.current,e]:[e,n],i=(0,bt.Z)(r,2),o=i[0],a=i[1];void 0===a?t(o):t(o,a)}}},S=C(u),O=C((function(t,e){(0,St.n)(t);var n=(0,St.C)({style:p,timeout:g},{mode:"enter"});t.style.webkitTransition=b.transitions.create("opacity",n),t.style.transition=b.transitions.create("opacity",n),a&&a(t,e)})),A=C(c),k=C(d),Z=C((function(t){var e=(0,St.C)({style:p,timeout:g},{mode:"exit"});t.style.webkitTransition=b.transitions.create("opacity",e),t.style.transition=b.transitions.create("opacity",e),l&&l(t)})),j=C(f);return s.createElement(y,(0,vt.Z)({appear:!0,in:o,nodeRef:E?T:void 0,onEnter:O,onEntered:A,onEntering:S,onExit:Z,onExited:j,onExiting:k,timeout:g},v),(function(t,e){return s.cloneElement(n,(0,vt.Z)({style:(0,vt.Z)({opacity:0,visibility:"exited"!==t||o?void 0:"hidden"},jt[t],p,n.props.style),ref:x},e))}))})),Lt=n(3337),Rt=n(3935),It=n(1510);function Nt(t,e){var n=function(t,e){var n,r=e.getBoundingClientRect();if(e.fakeTransform)n=e.fakeTransform;else{var i=window.getComputedStyle(e);n=i.getPropertyValue("-webkit-transform")||i.getPropertyValue("transform")}var o=0,a=0;if(n&&"none"!==n&&"string"==typeof n){var s=n.split("(")[1].split(")")[0].split(",");o=parseInt(s[4],10),a=parseInt(s[5],10)}return"left"===t?"translateX(".concat(window.innerWidth,"px) translateX(").concat(o-r.left,"px)"):"right"===t?"translateX(-".concat(r.left+r.width-o,"px)"):"up"===t?"translateY(".concat(window.innerHeight,"px) translateY(").concat(a-r.top,"px)"):"translateY(-".concat(r.top+r.height-a,"px)")}(t,e);n&&(e.style.webkitTransform=n,e.style.transform=n)}var _t={enter:Ct.x9.enteringScreen,exit:Ct.x9.leavingScreen},Ht=s.forwardRef((function(t,e){var n=t.children,r=t.direction,i=void 0===r?"down":r,o=t.in,a=t.onEnter,c=t.onEntered,u=t.onEntering,l=t.onExit,f=t.onExited,d=t.onExiting,p=t.style,m=t.timeout,y=void 0===m?_t:m,h=t.TransitionComponent,g=void 0===h?wt.ZP:h,v=(0,Et.Z)(t,["children","direction","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),b=(0,Ot.Z)(),E=s.useRef(null),T=s.useCallback((function(t){E.current=Rt.findDOMNode(t)}),[]),w=(0,At.Z)(n.ref,T),x=(0,At.Z)(w,e),C=function(t){return function(e){t&&(void 0===e?t(E.current):t(E.current,e))}},S=C((function(t,e){Nt(i,t),(0,St.n)(t),a&&a(t,e)})),O=C((function(t,e){var n=(0,St.C)({timeout:y,style:p},{mode:"enter"});t.style.webkitTransition=b.transitions.create("-webkit-transform",(0,vt.Z)({},n,{easing:b.transitions.easing.easeOut})),t.style.transition=b.transitions.create("transform",(0,vt.Z)({},n,{easing:b.transitions.easing.easeOut})),t.style.webkitTransform="none",t.style.transform="none",u&&u(t,e)})),A=C(c),k=C(d),Z=C((function(t){var e=(0,St.C)({timeout:y,style:p},{mode:"exit"});t.style.webkitTransition=b.transitions.create("-webkit-transform",(0,vt.Z)({},e,{easing:b.transitions.easing.sharp})),t.style.transition=b.transitions.create("transform",(0,vt.Z)({},e,{easing:b.transitions.easing.sharp})),Nt(i,t),l&&l(t)})),j=C((function(t){t.style.webkitTransition="",t.style.transition="",f&&f(t)})),P=s.useCallback((function(){E.current&&Nt(i,E.current)}),[i]);return s.useEffect((function(){if(!o&&"down"!==i&&"right"!==i){var t=(0,It.Z)((function(){E.current&&Nt(i,E.current)}));return window.addEventListener("resize",t),function(){t.clear(),window.removeEventListener("resize",t)}}}),[i,o]),s.useEffect((function(){o||P()}),[o,P]),s.createElement(g,(0,vt.Z)({nodeRef:E,onEnter:S,onEntered:A,onEntering:O,onExit:Z,onExited:j,onExiting:k,appear:!0,in:o,timeout:y},v),(function(t,e){return s.cloneElement(n,(0,vt.Z)({ref:x,style:(0,vt.Z)({visibility:"exited"!==t||o?void 0:"hidden"},p,n.props.style)},e))}))})),Dt={entering:{transform:"none"},entered:{transform:"none"}},Wt={enter:Ct.x9.enteringScreen,exit:Ct.x9.leavingScreen},Bt=s.forwardRef((function(t,e){var n=t.children,r=t.disableStrictModeCompat,i=void 0!==r&&r,o=t.in,a=t.onEnter,c=t.onEntered,u=t.onEntering,l=t.onExit,f=t.onExited,d=t.onExiting,p=t.style,m=t.timeout,y=void 0===m?Wt:m,h=t.TransitionComponent,g=void 0===h?wt.ZP:h,v=(0,Et.Z)(t,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),b=(0,Ot.Z)(),E=b.unstable_strictMode&&!i,T=s.useRef(null),w=(0,At.Z)(n.ref,e),x=(0,At.Z)(E?T:void 0,w),C=function(t){return function(e,n){if(t){var r=E?[T.current,e]:[e,n],i=(0,bt.Z)(r,2),o=i[0],a=i[1];void 0===a?t(o):t(o,a)}}},S=C(u),O=C((function(t,e){(0,St.n)(t);var n=(0,St.C)({style:p,timeout:y},{mode:"enter"});t.style.webkitTransition=b.transitions.create("transform",n),t.style.transition=b.transitions.create("transform",n),a&&a(t,e)})),A=C(c),k=C(d),Z=C((function(t){var e=(0,St.C)({style:p,timeout:y},{mode:"exit"});t.style.webkitTransition=b.transitions.create("transform",e),t.style.transition=b.transitions.create("transform",e),l&&l(t)})),j=C(f);return s.createElement(g,(0,vt.Z)({appear:!0,in:o,nodeRef:E?T:void 0,onEnter:O,onEntered:A,onEntering:S,onExit:Z,onExited:j,onExiting:k,timeout:y},v),(function(t,e){return s.cloneElement(n,(0,vt.Z)({style:(0,vt.Z)({transform:"scale(0)",visibility:"exited"!==t||o?void 0:"hidden"},Dt[t],p,n.props.style),ref:x},e))}))}));var Yt=function(t){var e=(0,s.useState)(!1),n=e[0],r=e[1],i="number"==typeof t.delay?setTimeout((function(){r(!0)}),t.delay):null;if((0,s.useEffect)((function(){return function(){null!==i&&clearTimeout(i)}}),[i]),!0===t.dry)return t.children;var o=s.createElement("div",{style:{overflow:"hidden"}},t.children),a=void 0!==t.in?t.in:n,c=Object.assign({},t,{dry:void 0});switch(t.type){case"collapse":return s.createElement(Zt,Object.assign({},c,{in:a}),o);case"fade":return s.createElement(Mt,Object.assign({},c,{in:a}),o);case"grow":return s.createElement(Lt.Z,Object.assign({},c,{in:a}),o);case"slide":return s.createElement(Ht,Object.assign({},c,{in:a}),o);case"zoom":return s.createElement(Bt,Object.assign({},c,{in:a}),o);default:return null}}}}]);
//# sourceMappingURL=c5c2edae0fdfb892b910832eb097a80a87465a66-29b262b627127db0e6e9.js.map