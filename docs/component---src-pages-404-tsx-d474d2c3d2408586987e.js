(self.webpackChunkgatsby_material_typescript_starter=self.webpackChunkgatsby_material_typescript_starter||[]).push([[218],{2993:function(t){var e="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var c,u,s,l;if(Array.isArray(t)){if((c=t.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(t[u],a[u]))return!1;return!0}if(n&&t instanceof Map&&a instanceof Map){if(t.size!==a.size)return!1;for(l=t.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;for(l=t.entries();!(u=l.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&t instanceof Set&&a instanceof Set){if(t.size!==a.size)return!1;for(l=t.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(a)){if((c=t.length)!=a.length)return!1;for(u=c;0!=u--;)if(t[u]!==a[u])return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===a.toString();if((c=(s=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(e&&t instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!t.$$typeof)&&!i(t[s[u]],a[s[u]]))return!1;return!0}return t!=t&&a!=a}t.exports=function(t,e){try{return i(t,e)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(t,e,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=t(s.map((function(t){return t.props}))),f.canUseDOM?e(u):n&&(u=n(u))}var f=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=u;return u=void 0,s=[],t};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var t=s.indexOf(this);s.splice(t,1),l()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},5657:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return jt}});var r,o,i,a,c=n(7294),u=n(7462),s=n(5987),l=n(4942),f=n(5505),p=n(4621),d=n(1664),h=c.forwardRef((function(t,e){var n=t.classes,r=t.className,o=t.component,i=void 0===o?"div":o,a=t.disableGutters,l=void 0!==a&&a,p=t.fixed,h=void 0!==p&&p,m=t.maxWidth,y=void 0===m?"lg":m,b=(0,s.Z)(t,["classes","className","component","disableGutters","fixed","maxWidth"]);return c.createElement(i,(0,u.Z)({className:(0,f.Z)(n.root,r,h&&n.fixed,l&&n.disableGutters,!1!==y&&n["maxWidth".concat((0,d.Z)(String(y)))]),ref:e},b))})),m=(0,p.Z)((function(t){return{root:(0,l.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:t.spacing(2),paddingRight:t.spacing(2),display:"block"},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(t.breakpoints.values).reduce((function(e,n){var r=t.breakpoints.values[n];return 0!==r&&(e[t.breakpoints.up(n)]={maxWidth:r}),e}),{}),maxWidthXs:(0,l.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),maxWidthSm:(0,l.Z)({},t.breakpoints.up("sm"),{maxWidth:t.breakpoints.values.sm}),maxWidthMd:(0,l.Z)({},t.breakpoints.up("md"),{maxWidth:t.breakpoints.values.md}),maxWidthLg:(0,l.Z)({},t.breakpoints.up("lg"),{maxWidth:t.breakpoints.values.lg}),maxWidthXl:(0,l.Z)({},t.breakpoints.up("xl"),{maxWidth:t.breakpoints.values.xl})}}),{name:"MuiContainer"})(h),y=n(453),b=n(920),g=n(5697),v=n.n(g),T=n(4839),w=n.n(T),A=n(2993),O=n.n(A),C=n(6494),S=n.n(C),E="bodyAttributes",x="htmlAttributes",k="titleAttributes",j={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},P=(Object.keys(j).map((function(t){return j[t]})),"charset"),L="cssText",I="href",M="http-equiv",N="innerHTML",R="itemprop",_="name",W="property",B="rel",Z="src",D="target",H={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},q="defaultTitle",Y="defer",F="encodeSpecialCharacters",U="onChangeClientState",z="titleTemplate",K=Object.keys(H).reduce((function(t,e){return t[H[e]]=e,t}),{}),G=[j.NOSCRIPT,j.SCRIPT,j.STYLE],V="data-react-helmet",X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Q=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),J=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},tt=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},et=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},nt=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},rt=function(t){var e=ut(t,j.TITLE),n=ut(t,z);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var r=ut(t,q);return e||r||void 0},ot=function(t){return ut(t,U)||function(){}},it=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return J({},t,e)}),{})},at=function(t,e){return e.filter((function(t){return void 0!==t[j.BASE]})).map((function(t){return t[j.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==t.indexOf(i)&&n[i])return e.concat(n)}return e}),[])},ct=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&dt("Helmet: "+t+' should be of type "Array". Instead found type "'+X(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var o={};n.filter((function(t){for(var n=void 0,i=Object.keys(t),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===e.indexOf(u)||n===B&&"canonical"===t[n].toLowerCase()||u===B&&"stylesheet"===t[u].toLowerCase()||(n=u),-1===e.indexOf(c)||c!==N&&c!==L&&c!==R||(n=c)}if(!n||!t[n])return!1;var s=t[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=S()({},r[c],o[c]);r[c]=u}return t}),[]).reverse()},ut=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},st=(r=Date.now(),function(t){var e=Date.now();e-r>16?(r=e,t(e)):setTimeout((function(){st(t)}),0)}),lt=function(t){return clearTimeout(t)},ft="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||st:n.g.requestAnimationFrame||st,pt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||lt:n.g.cancelAnimationFrame||lt,dt=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},ht=null,mt=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,c=t.noscriptTags,u=t.onChangeClientState,s=t.scriptTags,l=t.styleTags,f=t.title,p=t.titleAttributes;gt(j.BODY,r),gt(j.HTML,o),bt(f,p);var d={baseTag:vt(j.BASE,n),linkTags:vt(j.LINK,i),metaTags:vt(j.META,a),noscriptTags:vt(j.NOSCRIPT,c),scriptTags:vt(j.SCRIPT,s),styleTags:vt(j.STYLE,l)},h={},m={};Object.keys(d).forEach((function(t){var e=d[t],n=e.newTags,r=e.oldTags;n.length&&(h[t]=n),r.length&&(m[t]=d[t].oldTags)})),e&&e(),u(t,h,m)},yt=function(t){return Array.isArray(t)?t.join(""):t},bt=function(t,e){void 0!==t&&document.title!==t&&(document.title=yt(t)),gt(j.TITLE,e)},gt=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(V),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(e),c=0;c<a.length;c++){var u=a[c],s=e[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(V):n.getAttribute(V)!==a.join(",")&&n.setAttribute(V,a.join(","))}},vt=function(t,e){var n=document.head||document.querySelector(j.HEAD),r=n.querySelectorAll(t+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===N)n.innerHTML=e.innerHTML;else if(r===L)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var c=void 0===e[r]?"":e[r];n.setAttribute(r,c)}n.setAttribute(V,"true"),o.some((function(t,e){return a=e,n.isEqualNode(t)}))?o.splice(a,1):i.push(n)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),i.forEach((function(t){return n.appendChild(t)})),{oldTags:o,newTags:i}},Tt=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},wt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[H[n]||n]=t[n],e}),e)},At=function(t,e,n){switch(t){case j.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})[V]=!0,o=wt(n,r),[c.createElement(j.TITLE,o,t)];var t,n,r,o},toString:function(){return function(t,e,n,r){var o=Tt(n),i=yt(e);return o?"<"+t+' data-react-helmet="true" '+o+">"+nt(i,r)+"</"+t+">":"<"+t+' data-react-helmet="true">'+nt(i,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case E:case x:return{toComponent:function(){return wt(e)},toString:function(){return Tt(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,o=((r={key:n})[V]=!0,r);return Object.keys(e).forEach((function(t){var n=H[t]||t;if(n===N||n===L){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]})),c.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var o=Object.keys(r).filter((function(t){return!(t===N||t===L)})).reduce((function(t,e){var o=void 0===r[e]?e:e+'="'+nt(r[e],n)+'"';return t?t+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===G.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+t+">")}),"")}(t,e,n)}}}},Ot=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,c=t.noscriptTags,u=t.scriptTags,s=t.styleTags,l=t.title,f=void 0===l?"":l,p=t.titleAttributes;return{base:At(j.BASE,e,r),bodyAttributes:At(E,n,r),htmlAttributes:At(x,o,r),link:At(j.LINK,i,r),meta:At(j.META,a,r),noscript:At(j.NOSCRIPT,c,r),script:At(j.SCRIPT,u,r),style:At(j.STYLE,s,r),title:At(j.TITLE,{title:f,titleAttributes:p},r)}},Ct=w()((function(t){return{baseTag:at([I,D],t),bodyAttributes:it(E,t),defer:ut(t,Y),encode:ut(t,F),htmlAttributes:it(x,t),linkTags:ct(j.LINK,[B,I],t),metaTags:ct(j.META,[_,P,M,W,R],t),noscriptTags:ct(j.NOSCRIPT,[N],t),onChangeClientState:ot(t),scriptTags:ct(j.SCRIPT,[Z,N],t),styleTags:ct(j.STYLE,[L],t),title:rt(t),titleAttributes:it(k,t)}}),(function(t){ht&&pt(ht),t.defer?ht=ft((function(){mt(t,(function(){ht=null}))})):(mt(t),ht=null)}),Ot)((function(){return null})),St=(o=Ct,a=i=function(t){function e(){return $(this,e),et(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!O()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case j.SCRIPT:case j.NOSCRIPT:return{innerHTML:e};case j.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,o=t.newChildProps,i=t.nestedChildren;return J({},r,((e={})[n.type]=[].concat(r[n.type]||[],[J({},o,this.mapNestedChildrenToProps(n,i))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,o=t.newProps,i=t.newChildProps,a=t.nestedChildren;switch(r.type){case j.TITLE:return J({},o,((e={})[r.type]=a,e.titleAttributes=J({},i),e));case j.BODY:return J({},o,{bodyAttributes:J({},i)});case j.HTML:return J({},o,{htmlAttributes:J({},i)})}return J({},o,((n={})[r.type]=J({},i),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=J({},e);return Object.keys(t).forEach((function(e){var r;n=J({},n,((r={})[e]=t[e],r))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return c.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,i=o.children,a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[K[n]||n]=t[n],e}),e)}(tt(o,["children"]));switch(n.warnOnInvalidChildren(t,i),t.type){case j.LINK:case j.META:case j.NOSCRIPT:case j.SCRIPT:case j.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:a,nestedChildren:i})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=tt(t,["children"]),r=J({},n);return e&&(r=this.mapChildrenToProps(e,r)),c.createElement(o,r)},Q(e,null,[{key:"canUseDOM",set:function(t){o.canUseDOM=t}}]),e}(c.Component),i.propTypes={base:v().object,bodyAttributes:v().object,children:v().oneOfType([v().arrayOf(v().node),v().node]),defaultTitle:v().string,defer:v().bool,encodeSpecialCharacters:v().bool,htmlAttributes:v().object,link:v().arrayOf(v().object),meta:v().arrayOf(v().object),noscript:v().arrayOf(v().object),onChangeClientState:v().func,script:v().arrayOf(v().object),style:v().arrayOf(v().object),title:v().string,titleAttributes:v().object,titleTemplate:v().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var t=o.rewind();return t||(t=Ot({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},a);St.renderStatic=St.rewind;var Et=n(5444),xt=function(t){var e=(0,Et.useStaticQuery)("712016698").site,n=t.description||e.siteMetadata.description;return c.createElement(St,{htmlAttributes:{lang:t.lang||"en"},title:t.title,titleTemplate:"%s | "+e.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:t.title},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.siteMetadata.author.name},{name:"twitter:title",content:t.title},{name:"twitter:description",content:n}].concat(t.meta||[])})};(0,n(7627).Z)((function(t){return{heroContent:{backgroundColor:t.palette.background.paper,padding:t.spacing(8,0,6)}}}));var kt=(0,b.Z)((function(t){return{root:{marginTop:t.spacing(8),marginBottom:t.spacing(2)}}})),jt=function(){var t=kt();return c.createElement(m,{maxWidth:"md",className:t.root},c.createElement(xt,{title:"404: Not found"}),c.createElement(y.Z,{variant:"h2",gutterBottom:!0,component:"h1"},"NOT FOUND"),c.createElement(y.Z,{variant:"body1"},"You just hit a route that doesn't exist... the sadness."))}}}]);
//# sourceMappingURL=component---src-pages-404-tsx-d474d2c3d2408586987e.js.map