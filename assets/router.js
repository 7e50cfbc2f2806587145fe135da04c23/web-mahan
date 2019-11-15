!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],e):e((t=t||self).ReactRouter={},t.React)}(this,function(t,c){"use strict";var s="default"in c?c.default:c;function r(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}var u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function n(t,e){return t(e={exports:{}},e.exports),e.exports}var o=n(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,c=n?Symbol.for("react.profiler"):60114,u=n?Symbol.for("react.provider"):60109,s=n?Symbol.for("react.context"):60110,p=n?Symbol.for("react.async_mode"):60111,f=n?Symbol.for("react.concurrent_mode"):60111,l=n?Symbol.for("react.forward_ref"):60112,h=n?Symbol.for("react.suspense"):60113,d=n?Symbol.for("react.suspense_list"):60120,m=n?Symbol.for("react.memo"):60115,y=n?Symbol.for("react.lazy"):60116,v=n?Symbol.for("react.fundamental"):60117,g=n?Symbol.for("react.responder"):60118;function b(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case r:switch(t=t.type){case p:case f:case i:case c:case a:case h:return t;default:switch(t=t&&t.$$typeof){case s:case l:case u:return t;default:return e}}case y:case m:case o:return e}}}function x(t){return b(t)===f}e.typeOf=b,e.AsyncMode=p,e.ConcurrentMode=f,e.ContextConsumer=s,e.ContextProvider=u,e.Element=r,e.ForwardRef=l,e.Fragment=i,e.Lazy=y,e.Memo=m,e.Portal=o,e.Profiler=c,e.StrictMode=a,e.Suspense=h,e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===i||t===f||t===c||t===a||t===h||t===d||"object"==typeof t&&null!==t&&(t.$$typeof===y||t.$$typeof===m||t.$$typeof===u||t.$$typeof===s||t.$$typeof===l||t.$$typeof===v||t.$$typeof===g)},e.isAsyncMode=function(t){return x(t)||b(t)===p},e.isConcurrentMode=x,e.isContextConsumer=function(t){return b(t)===s},e.isContextProvider=function(t){return b(t)===u},e.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===r},e.isForwardRef=function(t){return b(t)===l},e.isFragment=function(t){return b(t)===i},e.isLazy=function(t){return b(t)===y},e.isMemo=function(t){return b(t)===m},e.isPortal=function(t){return b(t)===o},e.isProfiler=function(t){return b(t)===c},e.isStrictMode=function(t){return b(t)===a},e.isSuspense=function(t){return b(t)===h}});e(o);o.typeOf,o.AsyncMode,o.ConcurrentMode,o.ContextConsumer,o.ContextProvider,o.Element,o.ForwardRef,o.Fragment,o.Lazy,o.Memo,o.Portal,o.Profiler,o.StrictMode,o.Suspense,o.isValidElementType,o.isAsyncMode,o.isConcurrentMode,o.isContextConsumer,o.isContextProvider,o.isElement,o.isForwardRef,o.isFragment,o.isLazy,o.isMemo,o.isPortal,o.isProfiler,o.isStrictMode,o.isSuspense;var i=n(function(t,e){});e(i);i.typeOf,i.AsyncMode,i.ConcurrentMode,i.ContextConsumer,i.ContextProvider,i.Element,i.ForwardRef,i.Fragment,i.Lazy,i.Memo,i.Portal,i.Profiler,i.StrictMode,i.Suspense,i.isValidElementType,i.isAsyncMode,i.isConcurrentMode,i.isContextConsumer,i.isContextProvider,i.isElement,i.isForwardRef,i.isFragment,i.isLazy,i.isMemo,i.isPortal,i.isProfiler,i.isStrictMode,i.isSuspense;var a=n(function(t){t.exports=o}),p=(a.isValidElementType,Object.getOwnPropertySymbols),f=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;!function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()||Object.assign,Function.call.bind(Object.prototype.hasOwnProperty);function h(){}function d(){}d.resetWarningCache=h;var m=n(function(t){t.exports=function(){function t(t,e,n,r,o,i){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==i){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return t}var n={array:t.isRequired=t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:d,resetWarningCache:h};return n.PropTypes=n}()});function v(){return(v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function y(t){return"/"===t.charAt(0)}function g(t,e){for(var n=e,r=n+1,o=t.length;r<o;n+=1,r+=1)t[n]=t[r];t.pop()}var b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};var x="Invariant failed";function P(t){if(!t)throw new Error(x)}function C(t){var e=t.pathname,n=t.search,r=t.hash,o=e||"/";return n&&"?"!==n&&(o+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function w(t,e,n,r){var o;"string"==typeof t?(o=function(t){var e=t||"/",n="",r="",o=e.indexOf("#");-1!==o&&(r=e.substr(o),e=e.substr(0,o));var i=e.indexOf("?");return-1!==i&&(n=e.substr(i),e=e.substr(0,i)),{pathname:e,search:"?"===n?"":n,hash:"#"===r?"":r}}(t)).state=e:(void 0===(o=v({},t)).pathname&&(o.pathname=""),o.search?"?"!==o.search.charAt(0)&&(o.search="?"+o.search):o.search="",o.hash?"#"!==o.hash.charAt(0)&&(o.hash="#"+o.hash):o.hash="",void 0!==e&&void 0===o.state&&(o.state=e));try{o.pathname=decodeURI(o.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return n&&(o.key=n),r?o.pathname?"/"!==o.pathname.charAt(0)&&(o.pathname=function(t,e){var n=1<arguments.length&&void 0!==e?e:"",r=t&&t.split("/")||[],o=n&&n.split("/")||[],i=t&&y(t),a=n&&y(n),c=i||a;if(t&&y(t)?o=r:r.length&&(o.pop(),o=o.concat(r)),!o.length)return"/";var u=void 0;if(o.length){var s=o[o.length-1];u="."===s||".."===s||""===s}else u=!1;for(var p=0,f=o.length;0<=f;f--){var l=o[f];"."===l?g(o,f):".."===l?(g(o,f),p++):p&&(g(o,f),p--)}if(!c)for(;p--;)o.unshift("..");!c||""===o[0]||o[0]&&y(o[0])||o.unshift("");var h=o.join("/");return u&&"/"!==h.substr(-1)&&(h+="/"),h}(o.pathname,r.pathname)):o.pathname=r.pathname:o.pathname||(o.pathname="/"),o}function E(t,e){return t.pathname===e.pathname&&t.search===e.search&&t.hash===e.hash&&t.key===e.key&&function n(e,r){if(e===r)return!0;if(null==e||null==r)return!1;if(Array.isArray(e))return Array.isArray(r)&&e.length===r.length&&e.every(function(t,e){return n(t,r[e])});var t=void 0===e?"undefined":b(e);if(t!==(void 0===r?"undefined":b(r)))return!1;if("object"!==t)return!1;var o=e.valueOf(),i=r.valueOf();if(o!==e||i!==r)return n(o,i);var a=Object.keys(e),c=Object.keys(r);return a.length===c.length&&a.every(function(t){return n(e[t],r[t])})}(t.state,e.state)}"undefined"!=typeof window&&window.document&&window.document.createElement;function O(t,e,n){return Math.min(Math.max(t,e),n)}function S(t){void 0===t&&(t={});var e=t,o=e.getUserConfirmation,n=e.initialEntries,r=void 0===n?["/"]:n,i=e.initialIndex,a=void 0===i?0:i,c=e.keyLength,u=void 0===c?6:c,s=function(){var i=null,r=[];return{setPrompt:function(t){return i=t,function(){i===t&&(i=null)}},confirmTransitionTo:function(t,e,n,r){if(null!=i){var o="function"==typeof i?i(t,e):i;"string"==typeof o?"function"==typeof n?n(o,r):r(!0):r(!1!==o)}else r(!0)},appendListener:function(t){var e=!0;function n(){e&&t.apply(void 0,arguments)}return r.push(n),function(){e=!1,r=r.filter(function(t){return t!==n})}},notifyListeners:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];r.forEach(function(t){return t.apply(void 0,e)})}}}();function p(t){v(y,t),y.length=y.entries.length,s.notifyListeners(y.location,y.action)}function f(){return Math.random().toString(36).substr(2,u)}var l=O(a,0,r.length-1),h=r.map(function(t){return w(t,void 0,"string"==typeof t?f():t.key||f())}),d=C;function m(t){var e=O(y.index+t,0,y.entries.length-1),n=y.entries[e];s.confirmTransitionTo(n,"POP",o,function(t){t?p({action:"POP",location:n,index:e}):p()})}var y={length:h.length,action:"POP",location:h[l],index:l,entries:h,createHref:d,push:function(t,e){var r=w(t,e,f(),y.location);s.confirmTransitionTo(r,"PUSH",o,function(t){if(t){var e=y.index+1,n=y.entries.slice(0);n.length>e?n.splice(e,n.length-e,r):n.push(r),p({action:"PUSH",location:r,index:e,entries:n})}})},replace:function(t,e){var n="REPLACE",r=w(t,e,f(),y.location);s.confirmTransitionTo(r,n,o,function(t){t&&(y.entries[y.index]=r,p({action:n,location:r}))})},go:m,goBack:function(){m(-1)},goForward:function(){m(1)},canGo:function(t){var e=y.index+t;return 0<=e&&e<y.entries.length},block:function(t){return void 0===t&&(t=!1),s.setPrompt(t)},listen:function(t){return s.appendListener(t)}};return y}var M=function(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e},R="__global_unique_id__",_=1073741823;var j=s.createContext||function(r,o){var t,e,i="__create-react-context-"+(u[R]=(u[R]||0)+1)+"__",n=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).emitter=function(n){var r=[];return{on:function(t){r.push(t)},off:function(e){r=r.filter(function(t){return t!==e})},get:function(){return n},set:function(t,e){n=t,r.forEach(function(t){return t(n,e)})}}}(t.props.value),t}M(t,e);var n=t.prototype;return n.getChildContext=function(){var t;return(t={})[i]=this.emitter,t},n.componentWillReceiveProps=function(t){if(this.props.value!==t.value){var e,n=this.props.value,r=t.value;!function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}(n,r)?(e="function"==typeof o?o(n,r):_,0!==(e|=0)&&this.emitter.set(t.value,e)):e=0}},n.render=function(){return this.props.children},t}(c.Component);n.childContextTypes=((t={})[i]=m.object.isRequired,t);var a=function(t){function e(){var n;return(n=t.apply(this,arguments)||this).state={value:n.getValue()},n.onUpdate=function(t,e){0!=((0|n.observedBits)&e)&&n.setState({value:n.getValue()})},n}M(e,t);var n=e.prototype;return n.componentWillReceiveProps=function(t){var e=t.observedBits;this.observedBits=null==e?_:e},n.componentDidMount=function(){this.context[i]&&this.context[i].on(this.onUpdate);var t=this.props.observedBits;this.observedBits=null==t?_:t},n.componentWillUnmount=function(){this.context[i]&&this.context[i].off(this.onUpdate)},n.getValue=function(){return this.context[i]?this.context[i].get():r},n.render=function(){return function(t){return Array.isArray(t)?t[0]:t}(this.props.children)(this.state.value)},e}(c.Component);return a.contextTypes=((e={})[i]=m.object,e),{Provider:n,Consumer:a}},T=function(t){var e=j();return e.displayName=t,e}("Router"),A=function(n){function t(t){var e;return(e=n.call(this,t)||this).state={location:t.history.location},e._isMounted=!1,e._pendingLocation=null,t.staticContext||(e.unlisten=t.history.listen(function(t){e._isMounted?e.setState({location:t}):e._pendingLocation=t})),e}r(t,n),t.computeRootMatch=function(t){return{path:"/",url:"/",params:{},isExact:"/"===t}};var e=t.prototype;return e.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},e.componentWillUnmount=function(){this.unlisten&&this.unlisten()},e.render=function(){return s.createElement(T.Provider,{children:this.props.children||null,value:{history:this.props.history,location:this.state.location,match:t.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}})},t}(s.Component),$=function(o){function t(){for(var t,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return(t=o.call.apply(o,[this].concat(n))||this).history=S(t.props),t}return r(t,o),t.prototype.render=function(){return s.createElement(A,{history:this.history,children:this.props.children})},t}(s.Component),k=function(t){function e(){return t.apply(this,arguments)||this}r(e,t);var n=e.prototype;return n.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},n.componentDidUpdate=function(t){this.props.onUpdate&&this.props.onUpdate.call(this,this,t)},n.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},n.render=function(){return null},e}(s.Component);function U(t,e){return z(V(t,e))}var L=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},F=Y,I=V,N=z,B=G,D=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function V(t,e){for(var n,r,o=[],i=0,a=0,c="",u=e&&e.delimiter||"/";null!=(n=D.exec(t));){var s=n[0],p=n[1],f=n.index;if(c+=t.slice(a,f),a=f+s.length,p)c+=p[1];else{var l=t[a],h=n[2],d=n[3],m=n[4],y=n[5],v=n[6],g=n[7];c&&(o.push(c),c="");var b=null!=h&&null!=l&&l!==h,x="+"===v||"*"===v,P="?"===v||"*"===v,C=n[2]||u,w=m||y;o.push({name:d||i++,prefix:h||"",delimiter:C,optional:P,repeat:x,partial:b,asterisk:!!g,pattern:w?(r=w,r.replace(/([=!:$\/()])/g,"\\$1")):g?".*":"[^"+H(C)+"]+?"})}}return a<t.length&&(c+=t.substr(a)),c&&o.push(c),o}function W(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function z(p){for(var f=new Array(p.length),t=0;t<p.length;t++)"object"==typeof p[t]&&(f[t]=new RegExp("^(?:"+p[t].pattern+")$"));return function(t,e){for(var n="",r=t||{},o=(e||{}).pretty?W:encodeURIComponent,i=0;i<p.length;i++){var a=p[i];if("string"!=typeof a){var c,u=r[a.name];if(null==u){if(a.optional){a.partial&&(n+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be defined')}if(L(u)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but received `'+JSON.stringify(u)+"`");if(0===u.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var s=0;s<u.length;s++){if(c=o(u[s]),!f[i].test(c))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'", but received `'+JSON.stringify(c)+"`");n+=(0===s?a.prefix:a.delimiter)+c}}else{if(c=a.asterisk?encodeURI(u).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):o(u),!f[i].test(c))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but received "'+c+'"');n+=a.prefix+c}}else n+=a}return n}}function H(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function q(t,e){return t.keys=e,t}function J(t){return t.sensitive?"":"i"}function G(t,e,n){L(e)||(n=e||n,e=[]);for(var r=(n=n||{}).strict,o=!1!==n.end,i="",a=0;a<t.length;a++){var c=t[a];if("string"==typeof c)i+=H(c);else{var u=H(c.prefix),s="(?:"+c.pattern+")";e.push(c),c.repeat&&(s+="(?:"+u+s+")*"),i+=s=c.optional?c.partial?u+"("+s+")?":"(?:"+u+"("+s+"))?":u+"("+s+")"}}var p=H(n.delimiter||"/"),f=i.slice(-p.length)===p;return r||(i=(f?i.slice(0,-p.length):i)+"(?:"+p+"(?=$))?"),i+=o?"$":r&&f?"":"(?="+p+"|$)",q(new RegExp("^"+i,J(n)),e)}function Y(t,e,n){return L(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?function(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return q(t,e)}(t,e):L(t)?function(t,e,n){for(var r=[],o=0;o<t.length;o++)r.push(Y(t[o],e,n).source);return q(new RegExp("(?:"+r.join("|")+")",J(n)),e)}(t,e,n):function(t,e,n){return G(V(t,n),e,n)}(t,e,n)}F.parse=I,F.compile=U,F.tokensToFunction=N,F.tokensToRegExp=B;var K={},Q=1e4,X=0;function Z(t,e){return void 0===t&&(t="/"),void 0===e&&(e={}),"/"===t?t:function(t){if(K[t])return K[t];var e=F.compile(t);return X<Q&&(K[t]=e,X++),e}(t)(e,{pretty:!0})}var tt={},et=1e4,nt=0;function rt(s,t){void 0===t&&(t={}),"string"!=typeof t&&!Array.isArray(t)||(t={path:t});var e=t,n=e.path,r=e.exact,p=void 0!==r&&r,o=e.strict,f=void 0!==o&&o,i=e.sensitive,l=void 0!==i&&i;return[].concat(n).reduce(function(t,e){if(!e&&""!==e)return null;if(t)return t;var n=function(t,e){var n=""+e.end+e.strict+e.sensitive,r=tt[n]||(tt[n]={});if(r[t])return r[t];var o=[],i={regexp:F(t,o,e),keys:o};return nt<et&&(r[t]=i,nt++),i}(e,{end:p,strict:f,sensitive:l}),r=n.regexp,o=n.keys,i=r.exec(s);if(!i)return null;var a=i[0],c=i.slice(1),u=s===a;return p&&!u?null:{path:e,url:"/"===e&&""===a?"/":a,isExact:u,params:o.reduce(function(t,e,n){return t[e.name]=c[n],t},{})}},null)}var ot=function(t){function e(){return t.apply(this,arguments)||this}return r(e,t),e.prototype.render=function(){var c=this;return s.createElement(T.Consumer,null,function(t){t||P(!1);var e=c.props.location||t.location,n=v({},t,{location:e,match:c.props.computedMatch?c.props.computedMatch:c.props.path?rt(e.pathname,c.props):t.match}),r=c.props,o=r.children,i=r.component,a=r.render;return Array.isArray(o)&&0===o.length&&(o=null),s.createElement(T.Provider,{value:n},n.match?o?"function"==typeof o?o(n):o:i?s.createElement(i,n):a?a(n):null:"function"==typeof o?o(n):null)})},e}(s.Component);function it(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],0<=e.indexOf(n)||(o[n]=t[n]);return o}function at(t){return"/"===t.charAt(0)?t:"/"+t}function ct(t){return"string"==typeof t?t:C(t)}function ut(){return function(){P(!1)}}function st(){}var pt=function(o){function t(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=o.call.apply(o,[this].concat(n))||this).handlePush=function(t){return e.navigateTo(t,"PUSH")},e.handleReplace=function(t){return e.navigateTo(t,"REPLACE")},e.handleListen=function(){return st},e.handleBlock=function(){return st},e}r(t,o);var e=t.prototype;return e.navigateTo=function(t,e){var n=this.props,r=n.basename,o=void 0===r?"":r,i=n.context,a=void 0===i?{}:i;a.action=e,a.location=function(t,e){return t?v({},e,{pathname:at(t)+e.pathname}):e}(o,w(t)),a.url=ct(a.location)},e.render=function(){var t=this.props,e=t.basename,n=void 0===e?"":e,r=t.context,o=void 0===r?{}:r,i=t.location,a=void 0===i?"/":i,c=it(t,["basename","context","location"]),u={createHref:function(t){return at(n+ct(t))},action:"POP",location:function(t,e){if(!t)return e;var n=at(t);return 0!==e.pathname.indexOf(n)?e:v({},e,{pathname:e.pathname.substr(n.length)})}(n,w(a)),push:this.handlePush,replace:this.handleReplace,go:ut(),goBack:ut(),goForward:ut(),listen:this.handleListen,block:this.handleBlock};return s.createElement(A,v({},c,{history:u,staticContext:o}))},t}(s.Component),ft=function(t){function e(){return t.apply(this,arguments)||this}return r(e,t),e.prototype.render=function(){var t=this;return s.createElement(T.Consumer,null,function(n){n||P(!1);var r,o,i=t.props.location||n.location;return s.Children.forEach(t.props.children,function(t){if(null==o&&s.isValidElement(t)){var e=(r=t).props.path||t.props.from;o=e?rt(i.pathname,v({},t.props,{path:e})):n.match}}),o?s.cloneElement(r,{location:i,computedMatch:o}):null})},e}(s.Component),lt={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ht={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},dt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},mt={};function yt(t){return a.isMemo(t)?dt:mt[t.$$typeof]||lt}mt[a.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0};var vt=Object.defineProperty,gt=Object.getOwnPropertyNames,bt=Object.getOwnPropertySymbols,xt=Object.getOwnPropertyDescriptor,Pt=Object.getPrototypeOf,Ct=Object.prototype;var wt=function t(e,n,r){if("string"==typeof n)return e;if(Ct){var o=Pt(n);o&&o!==Ct&&t(e,o,r)}var i=gt(n);bt&&(i=i.concat(bt(n)));for(var a=yt(e),c=yt(n),u=0;u<i.length;++u){var s=i[u];if(!(ht[s]||r&&r[s]||c&&c[s]||a&&a[s])){var p=xt(n,s);try{vt(e,s,p)}catch(t){}}}return e};var Et=s.useContext;function Ot(){return Et(T).location}t.MemoryRouter=$,t.Prompt=function(t){var r=t.message,e=t.when,o=void 0===e||e;return s.createElement(T.Consumer,null,function(t){if(t||P(!1),!o||t.staticContext)return null;var n=t.history.block;return s.createElement(k,{onMount:function(t){t.release=n(r)},onUpdate:function(t,e){e.message!==r&&(t.release(),t.release=n(r))},onUnmount:function(t){t.release()},message:r})})},t.Redirect=function(t){var i=t.computedMatch,a=t.to,e=t.push,c=void 0!==e&&e;return s.createElement(T.Consumer,null,function(t){t||P(!1);var e=t.history,n=t.staticContext,r=c?e.push:e.replace,o=w(i?"string"==typeof a?Z(a,i.params):v({},a,{pathname:Z(a.pathname,i.params)}):a);return n?(r(o),null):s.createElement(k,{onMount:function(){r(o)},onUpdate:function(t,e){var n=w(e.to);E(n,v({},o,{key:n.key}))||r(o)},to:a})})},t.Route=ot,t.Router=A,t.StaticRouter=pt,t.Switch=ft,t.__RouterContext=T,t.generatePath=Z,t.matchPath=rt,t.useHistory=function(){return Et(T).history},t.useLocation=Ot,t.useParams=function(){var t=Et(T).match;return t?t.params:{}},t.useRouteMatch=function(t){return t?rt(Ot().pathname,t):Et(T).match},t.withRouter=function(r){function t(t){var e=t.wrappedComponentRef,n=it(t,["wrappedComponentRef"]);return s.createElement(T.Consumer,null,function(t){return t||P(!1),s.createElement(r,v({},n,t,{ref:e}))})}var e="withRouter("+(r.displayName||r.name)+")";return t.displayName=e,t.WrappedComponent=r,wt(t,r)},Object.defineProperty(t,"__esModule",{value:!0})});