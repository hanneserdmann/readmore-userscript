// ==UserScript==
// @name            Readmore Userscript
// @version         3.0.1
// @description     Fügt der deutschen eSport-Webseite zusätzliche Funktionen hinzu
// @author          thextor, vntw
// @credits         IllDependence (Extrabuttons), Biki (RM Plus)
// @namespace       readmore
// @include         *.readmore.de/*
// ==/UserScript==
/*! jQuery v2.1.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m=a.document,n="2.1.0",o=function(a,b){return new o.fn.init(a,b)},p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};o.fn=o.prototype={jquery:n,constructor:o,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=o.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return o.each(this,a,b)},map:function(a){return this.pushStack(o.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},o.extend=o.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||o.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(o.isPlainObject(d)||(e=o.isArray(d)))?(e?(e=!1,f=c&&o.isArray(c)?c:[]):f=c&&o.isPlainObject(c)?c:{},g[b]=o.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},o.extend({expando:"jQuery"+(n+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===o.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isPlainObject:function(a){if("object"!==o.type(a)||a.nodeType||o.isWindow(a))return!1;try{if(a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(b){return!1}return!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=o.trim(a),a&&(1===a.indexOf("use strict")?(b=m.createElement("script"),b.text=a,m.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":k.call(a)},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?o.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),o.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||o.guid++,f):void 0},now:Date.now,support:l}),o.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=o.type(a);return"function"===c||o.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);o.find=t,o.expr=t.selectors,o.expr[":"]=o.expr.pseudos,o.unique=t.uniqueSort,o.text=t.getText,o.isXMLDoc=t.isXML,o.contains=t.contains;var u=o.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(o.isFunction(b))return o.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return o.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return o.filter(b,a,c);b=o.filter(b,a)}return o.grep(a,function(a){return g.call(b,a)>=0!==c})}o.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?o.find.matchesSelector(d,a)?[d]:[]:o.find.matches(a,o.grep(b,function(a){return 1===a.nodeType}))},o.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(o(a).filter(function(){for(b=0;c>b;b++)if(o.contains(e[b],this))return!0}));for(b=0;c>b;b++)o.find(a,e[b],d);return d=this.pushStack(c>1?o.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?o(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=o.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof o?b[0]:b,o.merge(this,o.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:m,!0)),v.test(c[1])&&o.isPlainObject(b))for(c in b)o.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=m.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=m,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):o.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(o):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),o.makeArray(a,this))};A.prototype=o.fn,y=o(m);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};o.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&o(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),o.fn.extend({has:function(a){var b=o(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(o.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?o(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&o.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?o.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(o(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(o.unique(o.merge(this.get(),o(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}o.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return o.dir(a,"parentNode")},parentsUntil:function(a,b,c){return o.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return o.dir(a,"nextSibling")},prevAll:function(a){return o.dir(a,"previousSibling")},nextUntil:function(a,b,c){return o.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return o.dir(a,"previousSibling",c)},siblings:function(a){return o.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return o.sibling(a.firstChild)},contents:function(a){return a.contentDocument||o.merge([],a.childNodes)}},function(a,b){o.fn[a]=function(c,d){var e=o.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=o.filter(d,e)),this.length>1&&(C[a]||o.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return o.each(a.match(E)||[],function(a,c){b[c]=!0}),b}o.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):o.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){o.each(b,function(b,c){var d=o.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&o.each(arguments,function(a,b){var c;while((c=o.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?o.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},o.extend({Deferred:function(a){var b=[["resolve","done",o.Callbacks("once memory"),"resolved"],["reject","fail",o.Callbacks("once memory"),"rejected"],["notify","progress",o.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return o.Deferred(function(c){o.each(b,function(b,f){var g=o.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&o.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?o.extend(a,d):d}},e={};return d.pipe=d.then,o.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&o.isFunction(a.promise)?e:0,g=1===f?a:o.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&o.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;o.fn.ready=function(a){return o.ready.promise().done(a),this},o.extend({isReady:!1,readyWait:1,holdReady:function(a){a?o.readyWait++:o.ready(!0)},ready:function(a){(a===!0?--o.readyWait:o.isReady)||(o.isReady=!0,a!==!0&&--o.readyWait>0||(H.resolveWith(m,[o]),o.fn.trigger&&o(m).trigger("ready").off("ready")))}});function I(){m.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),o.ready()}o.ready.promise=function(b){return H||(H=o.Deferred(),"complete"===m.readyState?setTimeout(o.ready):(m.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},o.ready.promise();var J=o.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===o.type(c)){e=!0;for(h in c)o.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,o.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(o(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};o.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=o.expando+Math.random()}K.uid=1,K.accepts=o.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,o.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(o.isEmptyObject(f))o.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,o.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{o.isArray(b)?d=b.concat(b.map(o.camelCase)):(e=o.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!o.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?o.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}o.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),o.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;
    while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=o.camelCase(d.slice(5)),P(f,d,e[d]));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=o.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),o.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||o.isArray(c)?d=L.access(a,b,o.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=o.queue(a,b),d=c.length,e=c.shift(),f=o._queueHooks(a,b),g=function(){o.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:o.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),o.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?o.queue(this[0],a):void 0===b?this:this.each(function(){var c=o.queue(this,a,b);o._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&o.dequeue(this,a)})},dequeue:function(a){return this.each(function(){o.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=o.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===o.css(a,"display")||!o.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=m.createDocumentFragment(),b=a.appendChild(m.createElement("div"));b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";l.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return m.activeElement}catch(a){}}o.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=o.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof o!==U&&o.event.triggered!==b.type?o.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||"").split(".").sort(),n&&(l=o.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=o.event.special[n]||{},k=o.extend({type:n,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&o.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(n,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),o.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||"").split(".").sort(),n){l=o.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||o.removeEvent(a,n,r.handle),delete i[n])}else for(n in i)o.event.remove(a,n+b[j],c,d,!0);o.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,p=[d||m],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||m,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+o.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[o.expando]?b:new o.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:o.makeArray(c,[b]),n=o.event.special[q]||{},e||!n.trigger||n.trigger.apply(d,c)!==!1)){if(!e&&!n.noBubble&&!o.isWindow(d)){for(i=n.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||m)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:n.bindType||q,l=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),l&&l.apply(g,c),l=k&&g[k],l&&l.apply&&o.acceptData(g)&&(b.result=l.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||n._default&&n._default.apply(p.pop(),c)!==!1||!o.acceptData(d)||k&&o.isFunction(d[q])&&!o.isWindow(d)&&(h=d[k],h&&(d[k]=null),o.event.triggered=q,d[q](),o.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=o.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=o.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=o.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((o.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?o(e,this).index(i)>=0:o.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||m,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[o.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new o.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=m),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&o.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return o.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=o.extend(new o.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?o.event.trigger(e,null,b):o.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},o.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},o.Event=function(a,b){return this instanceof o.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.getPreventDefault&&a.getPreventDefault()?Z:$):this.type=a,b&&o.extend(this,b),this.timeStamp=a&&a.timeStamp||o.now(),void(this[o.expando]=!0)):new o.Event(a,b)},o.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z,this.stopPropagation()}},o.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){o.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!o.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.focusinBubbles||o.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){o.event.simulate(b,a.target,o.event.fix(a),!0)};o.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),o.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return o().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=o.guid++)),this.each(function(){o.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,o(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){o.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){o.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?o.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return o.nodeName(a,"table")&&o.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)o.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=o.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&o.nodeName(a,b)?o.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}o.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=o.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||o.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,n=a.length;n>m;m++)if(e=a[m],e||0===e)if("object"===o.type(e))o.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;o.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===o.inArray(e,d))&&(i=o.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f,g,h=o.event.special,i=0;void 0!==(c=a[i]);i++){if(o.acceptData(c)&&(f=c[L.expando],f&&(b=L.cache[f]))){if(d=Object.keys(b.events||{}),d.length)for(g=0;void 0!==(e=d[g]);g++)h[e]?o.event.remove(c,e):o.removeEvent(c,e,b.handle);L.cache[f]&&delete L.cache[f]}delete M.cache[c[M.expando]]}}}),o.fn.extend({text:function(a){return J(this,function(a){return void 0===a?o.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?o.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||o.cleanData(ob(c)),c.parentNode&&(b&&o.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(o.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return o.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(o.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,o.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,n=k-1,p=a[0],q=o.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(c=o.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=o.map(ob(c,"script"),kb),g=f.length;k>j;j++)h=c,j!==n&&(h=o.clone(h,!0,!0),g&&o.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,o.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&o.contains(i,h)&&(h.src?o._evalUrl&&o._evalUrl(h.src):o.globalEval(h.textContent.replace(hb,"")))}return this}}),o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){o.fn[a]=function(a){for(var c,d=[],e=o(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),o(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d=o(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:o.css(d[0],"display");return d.detach(),e}function tb(a){var b=m,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||o("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||o.contains(a.ownerDocument,a)||(g=o.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",e=m.documentElement,f=m.createElement("div"),g=m.createElement("div");g.style.backgroundClip="content-box",g.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===g.style.backgroundClip,f.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",f.appendChild(g);function h(){g.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",e.appendChild(f);var d=a.getComputedStyle(g,null);b="1%"!==d.top,c="4px"===d.width,e.removeChild(f)}a.getComputedStyle&&o.extend(l,{pixelPosition:function(){return h(),b},boxSizingReliable:function(){return null==c&&h(),c},reliableMarginRight:function(){var b,c=g.appendChild(m.createElement("div"));return c.style.cssText=g.style.cssText=d,c.style.marginRight=c.style.width="0",g.style.width="1px",e.appendChild(f),b=!parseFloat(a.getComputedStyle(c,null).marginRight),e.removeChild(f),g.innerHTML="",b}})}(),o.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:0,fontWeight:400},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=o.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=o.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=o.css(a,"border"+R[f]+"Width",!0,e))):(g+=o.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=o.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===o.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):f[g]||(e=S(d),(c&&"none"!==c||!e)&&L.set(d,"olddisplay",e?c:o.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}o.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=o.camelCase(b),i=a.style;return b=o.cssProps[h]||(o.cssProps[h]=Fb(i,h)),g=o.cssHooks[b]||o.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(o.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||o.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]="",i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=o.camelCase(b);return b=o.cssProps[h]||(o.cssProps[h]=Fb(a.style,h)),g=o.cssHooks[b]||o.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||o.isNumeric(f)?f||0:e):e}}),o.each(["height","width"],function(a,b){o.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&zb.test(o.css(a,"display"))?o.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===o.css(a,"boxSizing",!1,e),e):0)}}}),o.cssHooks.marginRight=yb(l.reliableMarginRight,function(a,b){return b?o.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),o.each({margin:"",padding:"",border:"Width"},function(a,b){o.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(o.cssHooks[a+b].set=Gb)}),o.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(o.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=o.css(a,b[g],!1,d);return f}return void 0!==c?o.style(a,b,c):o.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?o(this).show():o(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}o.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(o.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?o.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=o.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){o.fx.step[a.prop]?o.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[o.cssProps[a.prop]]||o.cssHooks[a.prop])?o.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},o.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},o.fx=Kb.prototype.init,o.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(o.cssNumber[a]?"":"px"),g=(o.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(o.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,o.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=o.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k=this,l={},m=a.style,n=a.nodeType&&S(a),p=L.get(a,"fxshow");c.queue||(h=o._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,k.always(function(){k.always(function(){h.unqueued--,o.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],j=o.css(a,"display"),"none"===j&&(j=tb(a.nodeName)),"inline"===j&&"none"===o.css(a,"float")&&(m.display="inline-block")),c.overflow&&(m.overflow="hidden",k.always(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(n?"hide":"show")){if("show"!==e||!p||void 0===p[d])continue;n=!0}l[d]=p&&p[d]||o.style(a,d)}if(!o.isEmptyObject(l)){p?"hidden"in p&&(n=p.hidden):p=L.access(a,"fxshow",{}),f&&(p.hidden=!n),n?o(a).show():k.done(function(){o(a).hide()}),k.done(function(){var b;L.remove(a,"fxshow");for(b in l)o.style(a,b,l[b])});for(d in l)g=Ub(n?p[d]:0,d,k),d in p||(p[d]=g.start,n&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=o.camelCase(c),e=b[d],f=a[c],o.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=o.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=o.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:o.extend({},b),opts:o.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=o.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return o.map(k,Ub,j),o.isFunction(j.opts.start)&&j.opts.start.call(a,j),o.fx.timer(o.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}o.Animation=o.extend(Xb,{tweener:function(a,b){o.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),o.speed=function(a,b,c){var d=a&&"object"==typeof a?o.extend({},a):{complete:c||!c&&b||o.isFunction(a)&&a,duration:a,easing:c&&b||b&&!o.isFunction(b)&&b};return d.duration=o.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in o.fx.speeds?o.fx.speeds[d.duration]:o.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){o.isFunction(d.old)&&d.old.call(this),d.queue&&o.dequeue(this,d.queue)},d},o.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=o.isEmptyObject(a),f=o.speed(b,c,d),g=function(){var b=Xb(this,o.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=o.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&o.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=o.timers,g=d?d.length:0;for(c.finish=!0,o.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),o.each(["toggle","show","hide"],function(a,b){var c=o.fn[b];o.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),o.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){o.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),o.timers=[],o.fx.tick=function(){var a,b=0,c=o.timers;for(Lb=o.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||o.fx.stop(),Lb=void 0},o.fx.timer=function(a){o.timers.push(a),a()?o.fx.start():o.timers.pop()},o.fx.interval=13,o.fx.start=function(){Mb||(Mb=setInterval(o.fx.tick,o.fx.interval))},o.fx.stop=function(){clearInterval(Mb),Mb=null},o.fx.speeds={slow:600,fast:200,_default:400},o.fn.delay=function(a,b){return a=o.fx?o.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=m.createElement("input"),b=m.createElement("select"),c=b.appendChild(m.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=m.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var Yb,Zb,$b=o.expr.attrHandle;o.fn.extend({attr:function(a,b){return J(this,o.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){o.removeAttr(this,a)})}}),o.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?o.prop(a,b,c):(1===f&&o.isXMLDoc(a)||(b=b.toLowerCase(),d=o.attrHooks[b]||(o.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=o.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void o.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=o.propFix[c]||c,o.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&o.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?o.removeAttr(a,c):a.setAttribute(c,c),c}},o.each(o.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||o.find.attr;$b[b]=function(a,b,d){var e,f;
    return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;o.fn.extend({prop:function(a,b){return J(this,o.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[o.propFix[a]||a]})}}),o.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!o.isXMLDoc(a),f&&(b=o.propFix[b]||b,e=o.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),l.optSelected||(o.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),o.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){o.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;o.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(o.isFunction(a))return this.each(function(b){o(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=o.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(o.isFunction(a))return this.each(function(b){o(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?o.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(o.isFunction(a)?function(c){o(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=o(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;o.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=o.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,o(this).val()):a,null==e?e="":"number"==typeof e?e+="":o.isArray(e)&&(e=o.map(e,function(a){return null==a?"":a+""})),b=o.valHooks[this.type]||o.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=o.valHooks[e.type]||o.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),o.extend({valHooks:{select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&o.nodeName(c.parentNode,"optgroup"))){if(b=o(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=o.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=o.inArray(o(d).val(),f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),o.each(["radio","checkbox"],function(){o.valHooks[this]={set:function(a,b){return o.isArray(b)?a.checked=o.inArray(o(a).val(),b)>=0:void 0}},l.checkOn||(o.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),o.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){o.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),o.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=o.now(),dc=/\?/;o.parseJSON=function(a){return JSON.parse(a+"")},o.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&o.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=m.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(o.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,o.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=o.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&o.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}o.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":o.parseJSON,"text xml":o.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,o.ajaxSettings),b):tc(o.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=o.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?o(l):o.event,n=o.Deferred(),p=o.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(n.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=o.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=o.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===o.active++&&o.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(o.lastModified[d]&&v.setRequestHeader("If-Modified-Since",o.lastModified[d]),o.etag[d]&&v.setRequestHeader("If-None-Match",o.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(o.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(o.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?n.resolveWith(l,[r,x,v]):n.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--o.active||o.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return o.get(a,b,c,"json")},getScript:function(a,b){return o.get(a,void 0,b,"script")}}),o.each(["get","post"],function(a,b){o[b]=function(a,c,d,e){return o.isFunction(c)&&(e=e||d,d=c,c=void 0),o.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),o.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){o.fn[b]=function(a){return this.on(b,a)}}),o._evalUrl=function(a){return o.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},o.fn.extend({wrapAll:function(a){var b;return o.isFunction(a)?this.each(function(b){o(this).wrapAll(a.call(this,b))}):(this[0]&&(b=o(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(o.isFunction(a)?function(b){o(this).wrapInner(a.call(this,b))}:function(){var b=o(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=o.isFunction(a);return this.each(function(c){o(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){o.nodeName(this,"body")||o(this).replaceWith(this.childNodes)}).end()}}),o.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},o.expr.filters.visible=function(a){return!o.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(o.isArray(b))o.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==o.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}o.param=function(a,b){var c,d=[],e=function(a,b){b=o.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=o.ajaxSettings&&o.ajaxSettings.traditional),o.isArray(a)||a.jquery&&!o.isPlainObject(a))o.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},o.fn.extend({serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=o.prop(this,"elements");return a?o.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!o(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=o(this).val();return null==c?null:o.isArray(c)?o.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),o.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=o.ajaxSettings.xhr();a.ActiveXObject&&o(a).on("unload",function(){for(var a in Dc)Dc[a]()}),l.cors=!!Fc&&"withCredentials"in Fc,l.ajax=Fc=!!Fc,o.ajaxTransport(function(a){var b;return l.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort"),f.send(a.hasContent&&a.data||null)},abort:function(){b&&b()}}:void 0}),o.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return o.globalEval(a),a}}}),o.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),o.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=o("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),m.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;o.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||o.expando+"_"+cc++;return this[a]=!0,a}}),o.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=o.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||o.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&o.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),o.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||m;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=o.buildFragment([a],b,e),e&&e.length&&o(e).remove(),o.merge([],d.childNodes))};var Ic=o.fn.load;o.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h),a=a.slice(0,h)),o.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&o.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?o("<div>").append(o.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},o.expr.filters.animated=function(a){return o.grep(o.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return o.isWindow(a)?a:9===a.nodeType&&a.defaultView}o.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=o.css(a,"position"),l=o(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=o.css(a,"top"),i=o.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),o.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},o.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){o.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,o.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===o.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),o.nodeName(a[0],"html")||(d=a.offset()),d.top+=o.css(a[0],"borderTopWidth",!0),d.left+=o.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-o.css(c,"marginTop",!0),left:b.left-d.left-o.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!o.nodeName(a,"html")&&"static"===o.css(a,"position"))a=a.offsetParent;return a||Jc})}}),o.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;o.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),o.each(["top","left"],function(a,b){o.cssHooks[b]=yb(l.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?o(a).position()[b]+"px":c):void 0})}),o.each({Height:"height",Width:"width"},function(a,b){o.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){o.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return o.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?o.css(b,c,g):o.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),o.fn.size=function(){return this.length},o.fn.andSelf=o.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return o});var Lc=a.jQuery,Mc=a.$;return o.noConflict=function(b){return a.$===o&&(a.$=Mc),b&&a.jQuery===o&&(a.jQuery=Lc),o},typeof b===U&&(a.jQuery=a.$=o),o});
/*! notify.js | https://github.com/alexgibson/notify.js */
(function (root, factory) {

    'use strict';

    if (typeof define === 'function' && define.amd) {
        // AMD environment
        define('notify', [], function () {
            return factory(root, document);
        });
    } else {
        // Browser environment
        root.Notify = factory(root, document);
    }

}(this, function (w, d) {

    'use strict';

    function Notify(title, options) {

        this.title = typeof title === 'string' ? title : null;

        this.options = {
            icon: '',
            body: '',
            tag: '',
            notifyShow: null,
            notifyClose: null,
            notifyClick: null,
            notifyError: null,
            permissionGranted: null,
            permissionDenied: null,
            timeout: null
        };

        this.permission = null;

        if (!Notify.isSupported()) {
            return;
        }

        if (!this.title) {
            throw new Error('Notify(): first arg (title) must be a string.');
        }

        //User defined options for notification content
        if (typeof options === 'object') {

            for (var i in options) {
                if (options.hasOwnProperty(i)) {
                    this.options[i] = options[i];
                }
            }

            //callback when notification is displayed
            if (typeof this.options.notifyShow === 'function') {
                this.onShowCallback = this.options.notifyShow;
            }

            //callback when notification is closed
            if (typeof this.options.notifyClose === 'function') {
                this.onCloseCallback = this.options.notifyClose;
            }

            //callback when notification is clicked
            if (typeof this.options.notifyClick === 'function') {
                this.onClickCallback = this.options.notifyClick;
            }

            //callback when notification throws error
            if (typeof this.options.notifyError === 'function') {
                this.onErrorCallback = this.options.notifyError;
            }
        }
    }

    // return true if the browser supports HTML5 Notification
    Notify.isSupported = function () {
        if ('Notification' in w) {
            return true;
        }
        return false;
    };

    // returns true if the permission is not granted
    Notify.needsPermission = function () {
        if (Notify.isSupported() && Notification.permission === 'granted') {
            return false;
        }
        return true;
    };

    // asks the user for permission to display notifications.  Then calls the callback functions is supplied.
    Notify.requestPermission = function (onPermissionGrantedCallback, onPermissionDeniedCallback) {
        if (Notify.isSupported()) {
            w.Notification.requestPermission(function (perm) {
                switch (perm) {
                    case 'granted':
                        if (typeof onPermissionGrantedCallback === 'function') {
                            onPermissionGrantedCallback();
                        }
                        break;
                    case 'denied':
                        if (typeof onPermissionDeniedCallback === 'function') {
                            onPermissionDeniedCallback();
                        }
                        break;
                }
            });
        }
    };


    Notify.prototype.show = function () {
        var that = this;

        if (!Notify.isSupported()) {
            return;
        }

        this.myNotify = new Notification(this.title, {
            'body': this.options.body,
            'tag' : this.options.tag,
            'icon' : this.options.icon
        });

        if (this.options.timeout && !isNaN(this.options.timeout)) {
            setTimeout(this.close.bind(this), this.options.timeout * 1000);
        }

        this.myNotify.addEventListener('show', this, false);
        this.myNotify.addEventListener('error', this, false);
        this.myNotify.addEventListener('close', this, false);
        this.myNotify.addEventListener('click', this, false);
    };

    Notify.prototype.onShowNotification = function (e) {
        if (this.onShowCallback) {
            this.onShowCallback(e);
        }
    };

    Notify.prototype.onCloseNotification = function () {
        if (this.onCloseCallback) {
            this.onCloseCallback();
        }
        this.destroy();
    };

    Notify.prototype.onClickNotification = function () {
        if (this.onClickCallback) {
            this.onClickCallback();
        }
    };

    Notify.prototype.onErrorNotification = function () {
        if (this.onErrorCallback) {
            this.onErrorCallback();
        }
        this.destroy();
    };

    Notify.prototype.destroy = function () {
        this.myNotify.removeEventListener('show', this, false);
        this.myNotify.removeEventListener('error', this, false);
        this.myNotify.removeEventListener('close', this, false);
        this.myNotify.removeEventListener('click', this, false);
    };

    Notify.prototype.close = function () {
        this.myNotify.close();
    };

    Notify.prototype.handleEvent = function (e) {
        switch (e.type) {
            case 'show':
                this.onShowNotification(e);
                break;
            case 'close':
                this.onCloseNotification(e);
                break;
            case 'click':
                this.onClickNotification(e);
                break;
            case 'error':
                this.onErrorNotification(e);
                break;
        }
    };

    return Notify;

}));
// Greasemonkey FIX
try {
    GM_log("[Readmore Userscript]");
} catch (e) {
}
/**
 * AjaxPost
 * ========
 *
 * Ermöglicht das Posten ohne Seitenrefresh. Wie schon am Namen
 * erkennbar wird der Post per jQuery Ajax abgeschickt.
 */

function AjaxPost(_preview, _reloadPosts){

    /**
     * jQuery Object. Formular das serialisiert und dann abgeschickt wird.
     * @type {{}}
     * @private
     */
    var _$submitForm = {};

    /**
     * jQuery Object. Knopf zum abschicken.
     * @type {{}}
     * @private
     */
    var _$sendButton = {};

    /**
     * Schickt den Post per Ajax ab und triggert das Nachladen im Hintergrund.
     * @private
     */
    var _sendPost = function(){
        var post = _$submitForm.serialize();

        // Sonderzeichen ersetzen
        post = String(ReadmoreUserscript.replaceSpecialChars(post));

        // Während der Wartezeiten den Submit-Knopf ausblenden
        _$sendButton.css('display', 'none');

        // Ist das Automatische neuladen deaktiviert, die nötigen Vorkehrungen dazu treffen
        if(_reloadPosts.getPostcount() == 0) {
            _reloadPosts.init();
        }

        // Der eigentliche Post
        $.ajax({
            type:'POST',
            url: '?cont=forum/do_reply',
            data: post,
            async: true,
            cache: false,
            contentType: 'application/x-www-form-urlencoded; charset=iso-8859-1;',
            dataType: 'html',

            success: function (response) {
                // Prüft ob der Beitrag lang genug war
                var error = response.match('Dein Beitrag muss aus mindestens 3 Zeichen bestehen.');

                if(error != null) {
                    // Fehlermeldung ausgeben
                    alert('Dein Beitrag muss aus mindestens 3 Zeichen bestehen!');
                } else {
                    // Nachricht aus dem Feld löschen und Posts neuladen
                    $('#c_comment').val('');

                    // Falls die Preview an ist -> ausschalten
                    if (_preview.isEnabled()){
                        _preview.triggerPreview();
                    }

                    _reloadPosts.readNewPosts();
                }

                // Submit-Knopf wieder einblenden
                _$sendButton.css('display', 'block');
            },
            error: function (){
                // Submit-Knopf wieder einblenden
                _$sendButton.css('display', 'block');

                // Fehlermeldung
                alert('Leider ist ein Fehler ist aufgetreten!');
            }
        });
    };

    /**
     * Fügt den Eventhandler hinzu und triggert so den eigentlichen
     * Post im Hintergrund
     */
    this.init = function(){
        _$submitForm = $('form[name=submitpost]');
        _$sendButton = $('.center:last');

        $('input[name=submit_thread]').click(function (event) {
            event.preventDefault();
            _sendPost();
        });
    };
}
/**
 * Content
 * =======
 *
 * Simple Pseudoklasse um auszulesen wo wir uns auf der Readmore.de Seite befinden.
 * Dadurch werden Funktionen des Userscriptes gesteuert.
 */
function Content(){

    /**
     * Property in dem alle content Möglichkeiten aufgelistet sind. Default sind alle false, die _init Methode
     * liest die aktuelle Seite aus.
     * @type {{mainpage: boolean, profile: boolean, groups_new: boolean, groups_group_list: boolean, groups_show_group: boolean, msg: boolean, news_archive: boolean, headlines_overview: boolean, www: boolean, widget_create_ticker: boolean, guides: boolean, articles: boolean, news: boolean, search: boolean, match_overview: boolean, db: boolean, coverages: boolean, demo_overview_pov: boolean, demo_overview_hltv: boolean, demo_overview: boolean, video_overview: boolean, gallery_sets: boolean, forum_forum: boolean, forum_board: boolean, forum_thread: boolean, forum_edit: boolean, forum_newtopic: boolean, community: boolean, blog: boolean, poll_archive: boolean, rules: boolean, team: boolean, imprint: boolean, userstream: boolean, gallery_images: boolean, matches: boolean}}
     * @private
     */
    var _content = {
        mainpage                : false,
        profile                 : false,
        groups_new              : false,
        groups_group_list       : false,
        groups_show_group       : false,
        msg                     : false,
        news_archive            : false,
        headlines_overview      : false,
        www                     : false,
        widget_create_ticker    : false,
        guides                  : false,
        articles                : false,
        news                    : false,
        search                  : false,
        match_overview          : false,
        db                      : false,
        coverages               : false,
        demo_overview_pov       : false,
        demo_overview_hltv      : false,
        demo_overview           : false,
        video_overview          : false,
        gallery_sets            : false,
        forum_forum             : false,
        forum_board             : false,
        forum_thread            : false,
        forum_edit              : false,
        forum_newtopic          : false,
        community               : false,
        blog                    : false,
        poll_archive            : false,
        rules                   : false,
        team                    : false,
        imprint                 : false,
        userstream              : false,
        gallery_images          : false,
        matches                 : false
    };

    /**
     * Action Parameter in der URL
     * @type {String | Null}
     * @private
     */
    var _action = null;

    /**
     * Aktuelle Seite auf der wir uns befinden
     * @type {string}
     * @private
     */
    var _currentPage = '';

    /**
     * Methode wird bei der Instanziierung des Objektes ausgeführt. Liest sowohl den Action und die
     * aktuelle Seite aus.
     * @private
     */
    var _init = function(){

        _readAction();
        _readCurrentPage();

        if (_content.hasOwnProperty(_currentPage)){
            _content[_currentPage] = true;
        }
        else{
            _content['mainpage'] = true;
        }
    };

    /**
     * Übergeben wird welche Seite abgefragt werden soll, die Funktion liefert dann true oder falls zurück,
     * je nachdem ob wir aktuell auf der Seite sind oder nicht.
     * @param what {String}
     * @returns {Boolean}
     */
    this.getContent = function(what){
        return _content[what];
    };

    /**
     * Erlaubt es direkt mehrere Abfragen mit einer Methode zu erledigen. Ist minimal langsamer, bringt
     * meiner Meinung nach aber einen Vorteil in der Übersichtlchkeit des Codes.
     * @param what {Array}
     * @param type {String} Möglichkeiten sind AND/OR. Wird ein andere Parameter übergeben, wird OR als
     *                      Default-Wert gesetzt.
     * @returns {boolean}
     */
    this.getMultipleContent = function(what, type){
        var returnValue = false;
        var that        = this;

        switch(type){
            // AND wurde angegeben
            case 'AND':
                returnValue = true;

                $(what).each(function(index, value){
                    if (!that.getContent(value)){
                        return returnValue = false;
                    }
                });
            break;

            // OR oder ein falscher Parameter wurde angegeben
            default:
                $(what).each(function(index, value){
                    if (that.getContent(value)){
                        returnValue = true;
                        return false;
                    }
                });
            break;
        }

        return returnValue;
    };

    /**
     * Gibt den Action-Parameter zurück
     * @returns {String|Null}
     */
    this.getAction = function(){
        return _action;
    };

    /**
     * Liest aus der URL (codument.location) Parameter aus und extrahiert den Content-Part,
     * damit wir wissen, auf welcher Seite wir und momentan befinden.
     * @private
     */
    var _readCurrentPage = function(){
        var getVars = document.location.search.replace(/[?]/g, '').replace(/[&]/g, '=').split('=');
        var curPage = '';

        $.each(getVars, function (index, value) {
            if (value == 'cont') {
                curPage = getVars[index+1].replace(/\//g, '_');
            }
        });

        _currentPage = curPage;
    };

    /**
     * Liest den action Parameter aus der URL aus. Wird beispielsweise in den Gruppen gesetzt. Die Extrabuttons
     * benötigen diese Informationen.
     * @private
     */
    var _readAction = function(){
        var action = document.location.search.match(/action=([a-zA-Z]+)/i);

        if (action && action[1]) {
            action = action[1];
        } else {
            action = null;
        }

        _action = action;
    };

    /**
     * Init Methode starten
     */
    _init();
}
/**
 * EditPosts
 * =========
 *
 * Ermöglicht das Editieren von Posts ohne Reload. Die Daten werden
 * per Ajax übermittelt.
 * @param _preview {Preview}
 */

function EditPosts(_preview) {

    /**
     * Array mit den original Posts, damit sie wiederhergestellt werden
     * können.
     * @type {Array}
     * @private
     */
    var _originalPosts = [];

    /**
     * Fügt den Event-Handler ein um das Editieren für einen Post zu starten.
     */
    this.initializeEvent = function () {
        $('tr[class*=footer_] a:contains("editieren")').on('click', function () {
            var $this = $(this);
            var postid = 0;

            if ($this.data('postid') !== undefined) {
                postid = $this.data('postid');
            }
            else {
                var hrefParts = String($this.attr('href')).match(/postid=(.*)/);
                $this.attr('href', 'javascript:void(0);');

                if (null !== hrefParts) {
                    postid = parseInt(hrefParts[1], 10);
                    $this.attr('href', 'javascript:void(0);');
                    $this.data('postid', postid);
                }
            }

            if (postid) {
                if ($('tr[class*=footer_' + postid + ']').find('a[class^="edit_submit_"]').length <= 0) {
                    _loadPost(postid);
                    _showEditMenu(postid);
                }
            }
        });
    };

    /**
     * Lädt den Post per AJAX nach
     * @param postid {number}
     * @private
     */
    var _loadPost = function (postid) {
        var $postElm = $('tr[class=post_' + postid + ']>td:last');
        var height = $postElm.css('height');
        _originalPosts[postid] = $postElm.html();

        $postElm.html('');
        $postElm.append('<textarea style="width: 100%; height: ' + height + '; padding: 0; margin: 0;"></textarea>');

        $.ajax({
            type: 'POST',
            async: true,
            cache: false,
            url: 'index.php?cont=forum/edit&postid=' + postid,
            contentType: 'text/html; charset=iso-8859-1;',
            dataType: 'html',
            success: function (data) {
                $('tr[class=post_' + postid + ']>td:last textarea').val(data.replace(/(\r\n|\n|\r)/gm, '[newline]').match(/<textarea(.*?)>(.*?)<\/textarea>/)[2].replace(/\[newline\]/g, '\r\n'));
            },
            beforeSend: function (jqXHR) {
                jqXHR.overrideMimeType('text/html;charset=iso-8859-1');
            }
        });
    };

    /**
     * Zeigt die zusätzlichen Knöpfe für den Edit
     * @param postid {number}
     * @private
     */
    var _showEditMenu = function (postid) {
        var submit = '<a class="edit_submit_' + postid + '" href="javascript:void(0);" style="margin-right: 4px;">Edit absenden</a>';
        var cancel = '<a class="edit_cancel_' + postid + '"href="javascript:void(0);" style="color: gray;">Edit abrechen</a>&nbsp;|&nbsp;';
        var $footerElm = $('tr[class*=footer_' + postid + ']');

        $footerElm.find('>td').append('<div>' + cancel + submit + '</div>');
        $footerElm.find('>td>div>a:first').on('click', function () {
            _cancelEdit(postid);
        });

        $footerElm.find('>td>div>a:last').on('click', function () {
            _submitEdit(postid);
        });
    };

    /**
     * Bricht den Edit ab
     * @param postid {number}
     * @private
     */
    var _cancelEdit = function (postid) {
        $('tr[class*=footer_' + postid + ']>td>div>a:first').off('click');
        $('tr[class*=footer_' + postid + ']>td>div>a:last').off('click');

        $('tr[class*=footer_' + postid + ']>td>div').remove();
        $('tr[class=post_' + postid + ']>td:last').html(_originalPosts[postid]);

        _originalPosts[postid] = null;
    };

    /**
     * Feuert den Ajax Request ab um den Edit durchzuführen
     * @param postid {number}
     * @private
     */
    var _submitEdit = function (postid) {
        var newpost = '';
        var postdata = '';

        $.ajax({
            type: 'POST',
            async: false,
            cache: false,
            url: 'http://www.readmore.de/index.php?cont=forum/edit&postid=' + postid,
            contentType: 'text/html; charset=iso-8859-1;',
            dataType: 'html',
            success: function (datafirst) {
                var $datafirst = $(datafirst);
                var f_uid = $datafirst.find('input[name="f_uid"]').val();
                var boardid = $datafirst.find('input[name="thread[boardid]"]').val();
                var threadid = $datafirst.find('input[name="thread[threadid]"]').val();
                var postidedit = $datafirst.find('input[name="post[postid]"]').val();
                var threadtopic = $datafirst.find('input[name="thread[threadtopic]"]').val();

                newpost = $('tr[class=post_' + postid + ']>td:last textarea').val();
                postdata = 'f_uid=' + f_uid + '&thread[boardid]=' + boardid + '&thread[threadid]=' + threadid + '&post[postid]=' + postidedit + '&postnew_newposttext=' + encodeURI(newpost).replace(/&amp;/g, '&').replace(/&/g, '%26');
                if (threadtopic != null) {
                    if (threadtopic.trim().length > 0) postdata += '&thread[threadtopic]=' + encodeURI(threadtopic).replace(/&amp;/g, '&').replace(/&/g, '%26');
                }

                postdata = ReadmoreUserscript.replaceSpecialChars(postdata);

                $.ajax({
                    type: 'POST',
                    async: false,
                    cache: false,
                    url: 'http://www.readmore.de/index.php?cont=forum/do_edit',
                    data: postdata,
                    contentType: 'application/x-www-form-urlencoded; charset=iso-8859-1;',
                    dataType: 'html',
                    success: function (response) {
                        var content = $(response).find('#content').html();
                        if (content.match(/Fehler/)) {
                            alert('Es ist leider ein Fehler aufgetreten. Bitte lade die Seite neu!');
                        }
                    },
                    error: function () {
                        alert('Es ist leider ein Fehler aufgetreten. Bitte lade die Seite neu!');
                    }
                });
            },
            beforeSend: function (jqXHR) {
                jqXHR.overrideMimeType('text/html;charset=iso-8859-1');
            }
        });

        $('tr[class*=footer_' + postid + ']>td>div>a:first').off('click');
        $('tr[class*=footer_' + postid + ']>td>div>a:last').off('click');
        $('tr[class*=footer_' + postid + ']>td>div').remove();
        $('tr[class=post_' + postid + ']>td:last').html(_preview.convertToPreview(newpost.replace(/(\r\n|\n|\r)/gm, '<br />')));
    };
}
/**
 * Extrabuttons
 * ============
 *
 * Pseudoklasse für die Extrabuttons. Ursprünglich von IllDepence entwickelt.
 * http://www.readmore.de/index.php?cont=profile&id=29432
 * @param _content {Content}
 */

function Extrabuttons(_content){

    var _form       = null;
    var _commentBox = null;
    var _toolbar    = null;
    var _colorSet   = [
        ["#ff0000", "http://readmore.thextor.de/userscript/img/extrabuttons/yK4UQ.png"],
        ["#ff8000", "http://readmore.thextor.de/userscript/img/extrabuttons/xdj9r.png"],
        ["#ffff00", "http://readmore.thextor.de/userscript/img/extrabuttons/cQrl0.png"],
        ["#80ff00", "http://readmore.thextor.de/userscript/img/extrabuttons/KTpVX.png"],
        ["#00ff00", "http://readmore.thextor.de/userscript/img/extrabuttons/NhpYN.png"],
        ["#00ff80", "http://readmore.thextor.de/userscript/img/extrabuttons/D4JCR.png"],
        ["#00ffff", "http://readmore.thextor.de/userscript/img/extrabuttons/jA74E.png"],
        ["#0080ff", "http://readmore.thextor.de/userscript/img/extrabuttons/cQpDh.png"],
        ["#0000ff", "http://readmore.thextor.de/userscript/img/extrabuttons/7DXlk.png"],
        ["#8000ff", "http://readmore.thextor.de/userscript/img/extrabuttons/t79Yf.png"],
        ["#ff00ff", "http://readmore.thextor.de/userscript/img/extrabuttons/IwKL1.png"],
        ["#ff0080", "http://readmore.thextor.de/userscript/img/extrabuttons/cKrre.png"],
        ["#000000", "http://readmore.thextor.de/userscript/img/extrabuttons/eeX1k.png"],
        ["#333333", "http://readmore.thextor.de/userscript/img/extrabuttons/B4ToQ.png"],
        ["#666666", "http://readmore.thextor.de/userscript/img/extrabuttons/OuClO.png"],
        ["#999999", "http://readmore.thextor.de/userscript/img/extrabuttons/gc8Za.png"],
        ["#cccccc", "http://readmore.thextor.de/userscript/img/extrabuttons/TwNb6.png"],
        ["#ffffff", "http://readmore.thextor.de/userscript/img/extrabuttons/uq9mG.png"]
    ];
    var _toolbarButtonTags = [
        ["http://images.readmore.de/img/icons/ubb/b.png", "fett", "b", 0, true],
        ["http://images.readmore.de/img/icons/ubb/i.png", "kursiv", "i", 0, true],
        ["http://images.readmore.de/img/icons/ubb/u.png", "unterstrichen", "u", 0, true],
        ["http://images.readmore.de/img/icons/ubb/s.png", "durchgestrichen", "s", 0, true],
        ["http://readmore.thextor.de/userscript/img/extrabuttons//yPNsn.png", "zentriert", "center", 0, true],
        ["http://readmore.thextor.de/userscript/img/extrabuttons//74lEI.png", "hr", "hr", 0, false],
        ["http://images.readmore.de/img/icons/ubb/url2.png", "url", "url", 0, true],
        ["http://images.readmore.de/img/icons/ubb/quote.png", "quote", "quote", 0, true],
        ["http://images.readmore.de/img/icons/ubb/spoil.png", "spoiler", "spoiler", 0, true],
        ["http://images.readmore.de/img/icons/ubb/youtube.png", "youtube", "youtube", 0, true],
        ["http://readmore.thextor.de/userscript/img/extrabuttons/ZQ5jN.png", "img", "img", 0, true]
    ];
    var _ubbHelp = '<a onclick="window.open(\'http://www.readmore.de/mod/ubb.mod.php\', \'UBB Hilfe\', \'scrollbars=1,width=600,height=490,left=100,top=200\');return false;" href="/index.php?cont=ubb" style="font-weight:bold; color:#fff; margin-left: 8px; font-size: 11px;" class="ten hgray">?</a>';

    /**
     * Startet die Extrabuttons.
     * Selektiert das Formular, die CommentBox und startet anschließend die Initialisierung
     * der Extrabuttons.
     * @private
     */
    this.init = function(){
        _form       = _getForm();
        _commentBox = _getCommentBox();
        _toolbar    = _getToolbar();

        try {
            _getToolbar().css('height', 'auto').html(_getToolbarHtml());
        } catch (e) {}

        $('a.rmus-control-btn').click(function (e) {
            e.preventDefault();

            var btype   = $(this).attr('data-btype');
            var params  = $(this).attr('data-params');

            switch(btype) {
                case 'tag':
                    params = params.split(',');
                    _insertTag(params[0], params[1], params[2]);
                    break;
            }
        });
    };

    /**
     * Gibt die Toolbar für die RM Extrabuttons zurück
     * @returns {{}}
     * @private
     */
    var _getToolbar = function(){
        var toolbar = '';
        var container = '';
        var returnValue = null;

        if (_content.getMultipleContent(['news', 'matches', 'profile'], 'OR')) {
            container = _form.parent('div.center');

            if ($('div.headline_bg', container).length === 0) {
                toolbar = $('<div class="headline_bg" />');
                toolbar.css('padding', '3px 0px');
                container.prepend(toolbar);
            }

            returnValue = $('div.headline_bg', container);
        } else if (_content.getMultipleContent(['forum_thread', 'forum_edit', 'forum_newtopic'], 'OR')) {
            returnValue = $('div.headline_bg', _form);
        } else if (_content.getContent('msg')) {
            container = _commentBox.parent();

            if ($('div.headline_bg', container).length === 0) {
                toolbar = $('<div class="headline_bg" />');
                toolbar.css('padding', '3px 0px');
                container.prepend(toolbar);
            }

            returnValue = $('div.headline_bg', container);
        } else if (_content.getContent('groups_show_group')) {
            // First Post im Thread?
            if ($('input[name="threadtitle"]').length === 1) {
                container = $('<div/>').insertBefore(_commentBox);
            } else {
                container = _commentBox.parent();
            }

            if ($('div.headline_bg', container).length === 0) {
                toolbar = $('<div class="headline_bg" />');
                toolbar.css('padding', '3px 0px');
                container.prepend(toolbar);
            }

            returnValue = $('div.headline_bg', container);
        }

        return returnValue;
    };

    /**
     * Gibt das DOM-Object des Formulars zurück
     * @returns {Null, {}}
     * @private
     */
    var _getForm = function(){
        var returnValue = null;

        if (_content.getMultipleContent(['news', 'matches', 'profile'], 'OR')) {
            returnValue = $('form[name=form_comment]');
        } else if (_content.getMultipleContent(['forum_thread', 'forum_newtopic'], 'OR')) {
            returnValue = $('form[name=submitpost]');
        } else if (_content.getContent('forum_edit')) {
            returnValue = $('form[name=submiteditthread]');
        } else if (_content.getContent('msg')) {
            returnValue = $('td.text_h1_j form');
        } else if (_content.getContent('groups_show_group')) {
            if (_content.getAction() === 'threadedit') {
                returnValue = $('form[name="submiteditthread"]');
            }

            if (returnValue === null){
                returnValue = $('div.elf form[name="submitpost"]');
            }
        }

        return returnValue;
    };

    /**
     * Gibt die Textbox für den neuen Beitrag zurück.
     * @returns {{}}
     * @private
     */
    var _getCommentBox = function(){
        var returnValue = null;

        if (_content.getContent('profile')) {
            returnValue = $('textarea[name=comment]', _form);
        } else if (_content.getContent('msg')) {
            returnValue = $('textarea[name=msg]', _form);
        } else if (_content.getContent('groups_show_group')) {
            if (_content.getAction() === 'threadedit') {
                returnValue = $('textarea[name=new_comment].form', _form);
            }

            if (returnValue === null){
                returnValue = $('textarea[name=comment].form', _form);
            }
        }

        if (returnValue === null){
            returnValue = $('textarea#c_comment', _form);
        }

        return returnValue;
    };

    /**
     * Fügt ein Tag in der CommentBox hinzu.
     * @param tname {String}
     * @param attr {*}
     * @param endTag {String}
     * @private
     */
    var _insertTag = function(tname, attr, endTag){
        if (tname === 'url') {
            attr = prompt('Bitte gib den gewünschten Link an: ', 'http://');
        }

        var commentBox  = _commentBox.get(0);
        var currText    = commentBox.value;
        var pos1        = commentBox.selectionStart + tname.length + 2 + (attr != 0 ? (attr.length + 1) : 0);
        var pos2        = commentBox.selectionEnd + tname.length + 2 + (attr != 0 ? (attr.length + 1) : 0) + (endTag ? (tname.length + 3) : 0);
        var range       = (commentBox.selectionStart != commentBox.selectionEnd);

        commentBox.value = currText.substring(0, commentBox.selectionStart) + '[' + tname + (attr != 0 ? '=' + attr + '' : '') + ']' + (endTag ? currText.substring(commentBox.selectionStart, commentBox.selectionEnd) + '[/' + tname + ']' : '') + currText.substring(commentBox.selectionEnd, currText.length);
        commentBox.focus();

        if (range) {
            commentBox.setSelectionRange(pos2, pos2);
        } else {
            commentBox.setSelectionRange(pos1, pos1);
        }
    };

    /**
     * Generiert ein Tag und gibt es zurück.
     * @param img
     * @param text
     * @param tag
     * @param attr
     * @param endTag
     * @returns {string}
     * @private
     */
    var _makeTag = function (img, text, tag, attr, endTag) {
        return '<a href="" class="rmus-control-btn" data-btype="tag" data-params="' + tag + ',' + attr + ',' + endTag + '"><img style="vertical-align: text-top;" src="' + img + '" alt="' + text + '" title="' + text + '" /></a>';
    };

    /**
     * Generiert die Toolbar als HTML, fügt also alle Bestandteile zusammen
     * und gibt sie anschließend zurück.
     * @returns {string}
     * @private
     */
    var _getToolbarHtml = function () {
        var colorButtons    = '';
        var btnTags         = '';

        $.each(_colorSet, function (index, color) {
            colorButtons += (index > 0 ? '&thinsp;' : '') + _makeTag(color[1], color[0], 'color', color[0], true);
        });

        $.each(_toolbarButtonTags, function (index, btnTag) {
            btnTags += _makeTag(btnTag[0], btnTag[1], btnTag[2], btnTag[3]) + '&nbsp;';
        });

        return  '<div id="rmus-container" style="text-align: left; color: #fff; font-weight: bold; padding-left: 5px; font-size: 11px;">Text' +
                '<div id="rmus-toolbar" style="margin-right: 12px; float: right;">' +
                '<div id="rmus-toolbar-main" style="margin-bottom: 1px;text-align:right;">' +
                btnTags + '&emsp;' +
                colorButtons +
                _ubbHelp +
                '</div></div></div>' +
                '<div style="clear: right;"></div></div>';
    };
}
function ForumNavigation(_options, _reloadPageData) {
    var _self = this;

    this.initializeForum = function () {
        var html = '';
        var sortForum = [ _options.getOption('rightColumn_forum_hideForum_0'),
            _options.getOption('rightColumn_forum_hideForum_1'),
            _options.getOption('rightColumn_forum_hideForum_2'),
            _options.getOption('rightColumn_forum_hideForum_3'),
            _options.getOption('rightColumn_forum_hideForum_4')];
        var menuItems = document.getElementsByClassName('cont_box')[1].children;
        var sections = ['', '', '', '', ''];

        // Alle Menueinträge durchgehen
        for (var j = 0, k = menuItems.length, l = -1, item = ''; j < k; j++) {
            // HTML-Auslesen
            item = menuItems[j].outerHTML;
            // Sektionen hochzählen
            if (item.indexOf('class="bml"') !== -1)    l++;
            // Bilder in der "Featured Thread" Sektion anpassen
            if (l === 0) item = item.replace('" height="11px"', '" height="11px" class="userscript11px" ');
            // Eintrag zur Sektion hinzufügen
            sections[l] += item;
        }

        // Leerzeilen entfernen
        for (var n = 0, o = sections.length; n < o; n++) {
            sections[n] = sections[n].replace(/(<div class="spacer_s"><\/div>)|(<br>)|(<br \/>)/g, '');
        }

        // Keine Featured Threads vorhanden -> rauswerfen
        if (sections[4] === '') {
            var sectionsNew = [''];
            for (var i = 0, m = sections.length; i < m; i++) {
                if (sections[i] !== '') {
                    sectionsNew.push(sections[i]);
                }
            }
            sections = sectionsNew;
        }

        // Reihenfolge der Sektionen entsprechen den Optionen anpassen
        for (var i = 0, m = sections.length; i < m; i++) {
            switch (sortForum[i]) {
                case 'featuredthreads':
                    html += sections[0] + '<br>';
                    break;
                case 'esportforen':
                    html += sections[1] + '<br>';
                    break;
                case 'technik':
                    html += sections[2] + '<br>';
                    break;
                case 'offtopicforen':
                    html += sections[3] + '<br>';
                    break;
                case 'spiele':
                    html += sections[4] + '<br>';
                    break;
            }
        }

        // Noch einmal prüfen ob Leerzeilen vorhanden sind, nötig wegen dem Featured Thread fix
        html = html.replace(/(<br>|<br \/>)+/gi, '<br>');

        // Einfügen
        document.getElementsByClassName('cont_box')[1].innerHTML = html;

        // Größe der Bilder anpassen
        $('.userscript11px').css('height', '11px').css('width', '11px');
    };

    this.reloadForum = function () {
        var reloadData = $(_reloadPageData.getPageData()).find('div.cont_box:last').html();

        if (reloadData && reloadData.length > 0) {
            $('.cont_box:last').html(reloadData);
            if (_options.getOption('rightColumn_forum_sections') == 'checked') {
                _self.initializeForum();
            }
        }
    };

    this.reloadForumPerClickAddImage = function () {
        $('a.headline_link[href="index.php?cont=forum/forum"]').parent().append('<span style="float: right;"><img id="userscript_reloadForumButton" src="http://readmore.thextor.de/userscript/img/refresh.png" style="height: 13px; padding-top: 2px; cursor: pointer;">&nbsp;</span>');
    };

    this.reloadForumPerClickDoReload = function () {
        _reloadPageData.readPage();
        window.setTimeout(function () {
            _self.reloadForum();
        }, 1500);
    };

    this.hideForum = function () {
        $('div.headline_bg:last, div.cont_box:last').css('display', 'none');
    };
}
/**
 * Headlines
 * =========
 *
 * Methoden um die Schlagezeilen auszublenden.
 */

function Headlines(){
    _headlineElements = [];

    /**
     * Alle Headline ausblenden
     */
    this.hideAllHeadlines = function(){
        document.getElementById('headlines').style.display = "none";
    };

    /**
     * Blendet Counterstrike aus
     */
    this.hideCounterstrike = function(){
        if (_headlineElements.length === 0){
            _readHeadlineElements();
        }
        $(_headlineElements[0]).css('display', 'none');
    };

    /**
     * Blendet Starcraft aus
     */
    this.hideStarcraft = function(){
        if (_headlineElements.length === 0){
            _readHeadlineElements();
        }
        $(_headlineElements[1]).css('display', 'none');
    };

    /**
     * Blendet Dota aus
     */
    this.hideDefenseOfTheAncients = function(){
        if (_headlineElements.length === 0){
            _readHeadlineElements();
        }
        $(_headlineElements[2]).css('display', 'none');
    };

    /**
     * Blendet LoL aus
     */
    this.hideLeagueOfLegends = function(){
        if (_headlineElements.length === 0){
            _readHeadlineElements();
        }
        $(_headlineElements[3]).css('display', 'none');
    };

    /**
     * Blendet Warcraft aus
     */
    this.hideWarcraft3 = function(){
        if (_headlineElements.length === 0){
            _readHeadlineElements();
        }
        $(_headlineElements[4]).css('display', 'none');
    };

    /**
     * Blendet Sonstiges aus
     */
    this.hideSonstiges = function(){
        if (_headlineElements.length === 0){
            _readHeadlineElements();
        }
        $(_headlineElements[5]).css('display', 'none');
    };

    /**
     * Liest die Schlagzeilen ein, bereitet also das Ausblenden von
     * einzelnen Kategorien vor.
     * @private
     */
    _readHeadlineElements = function(){
        var elements    = document.getElementById('nav_schlagzeilen').children;
        var count       = elements.length - 4; // Einsenden, Archiv, Übersicht

        _headlineElements = [];

        for(var i = 0, k = -1; i < count; i++){
            if (elements[i].className === 'bml'){
                _headlineElements[++k] = [];
            }

            _headlineElements[k].push(elements[i]);
        }
    };
}
/**
 * IgnoreUser
 * ==========
 *
 * Bietet die Möglichkeit einen User auf der Readmore-Seite zu ignorieren. Die
 * Posts im Forum werden versteckt.
 * @param _options {Options}
 * @constructor
 */

function IgnoreUser(_options){
    var _user = [];
    var _ignoreCount = 0;

    /**
     * Liest die User aus den Optionen aus und packt sie in ein Array.
     * @private
     */
    var _readUser = function(){
        var user = [];
        $(String(_options.getOption('miscellaneous_ignoreUser_usernames')).split(',')).each(function(index, value){
            value = value.trim();
            if (value !== ''){
                user.push(value);
            }
        });

        _user = user;
    };

    /**
     * Blendet die Posts der User aus.
     * @param thread {Boolean}
     * @param ticker {Boolean}
     * @param profile {Boolean}
     */
    this.ignore = function(thread, ticker, profile){
        // Falls das Array mit den Usern leer ist, wird es eingelesen.
        if (_user.length < 1){
            _readUser();
        }

        if (thread) {
            $(_user).each(function(index, value) {
                $('tr[class*=post_]:has(a[title="' + value + '"]) td').each(function() {

                    if (this.innerHTML.match(/ignored_/) == null){
                        if (_ignoreCount % 2){
                            _ignoreCount--;
                            $(this).html('<div style="display:none;" class="ignored_' + _ignoreCount + '">' + $(this).html() + '</div>');
                            _ignoreCount += 2;
                        }
                        else{
                            $(this).html('<a style="font-size: 9px;" href="javascript:void(0)" onclick="$(\'.ignored_' + _ignoreCount + '\').toggle(); if(this.innerHTML == \'Beitrag einblenden\'){this.innerHTML = \'Beitrag ausblenden\';}else{this.innerHTML = \'Beitrag einblenden\';}">Beitrag einblenden</a><br/>' + '<br/><div style="display:none;" class="ignored_' + _ignoreCount + '">' + $(this).html() + '</div>');
                            _ignoreCount++;
                        }
                    }
                });
            });
        }

        if (ticker || profile) {
            $(_user).each(function(index, value) {
                $('div .elf.cmt_kopf:has(a.cmt_head:contains(' + value + '))').next().each(function(){
                    $(this).html('<a href="javascript:void(0)" onclick="$(\'.ignored_' + _ignoreCount + '\').toggle();">Beitrag einblenden</a><br/>' + '<br/><div style="display:none;" class="ignored_' + _ignoreCount + '">' + $(this).html() + '</div>');
                    _ignoreCount++;
                });
            });
        }
    };
}
/**
 * Messages
 * ========
 *
 * Pseudoklasse für PMs. Zeigt an wenn eine neue Nachricht eingegangen ist.
 * Zusätzlich werden desktop notifications (notify.js) bereitgestellt.
 */

function Messages(_options) {
    /**
     * Link zum Icon
     * @type {string}
     */
    var ICON_URL = 'http://readmore.thextor.de/userscript/img/msg-notification-icon.png';

    /**
     * Anzahl an Nachrichten
     * @type {number}
     * @private
     */
    var _messageCount = 0;

    /**
     * Gibt das den Link zum Icon zurück.
     * @returns {string}
     */
    this.getIcon = function () {
        return ICON_URL;
    };

    /**
     * Checkt ob neue Nachrichten eingegangen sind und löst ggf.
     * die Benachrichtigung für den User aus.
     */
    this.checkForNewMessages = function () {
        $.ajax({
            type: 'POST',
            async: true,
            cache: false,
            url: 'http://www.readmore.de/index.php?cont=msg',
            contentType: 'text/html; charset=iso-8859-1;',
            dataType: 'html',
            success: function (data) {
                var newMsgCount = $('div#content table.p0:first td.ofhidden.bold', data).length;
                var currentMsgCount = 0;
                var currentLinkNode = _getUserBarItem();

                if (currentLinkNode.length === 1) {
                    currentMsgCount = parseInt(currentLinkNode.text().match(/\d+/g)[0]);

                    if (newMsgCount !== currentMsgCount) {
                        _messageCount = newMsgCount;

                        if (newMsgCount > currentMsgCount) {
                            var msgsReceived = newMsgCount - currentMsgCount;

                            _changeUserBar(newMsgCount, true);
                            _notifyUser(msgsReceived);
                        } else if (newMsgCount < currentMsgCount) {
                            _changeUserBar(newMsgCount, newMsgCount > 0);
                        }
                    }
                }
            }
        });
    };

    var _getUserBarItem = function (ns) {
        if (!ns) {
            ns = $('body > div.user_band');
        }

        return $('div.floatl.vcenter > a[href="index.php?cont=msg"]', ns);
    };

    var _changeUserBar = function (msgCount, showImg) {
        // Standard Animation für die User-Navi
        var node = _getUserBarItem();
        var nodeParent = node.parent('div');

        nodeParent.animate({
            'margin-top': '-12px'
        }, 333, function () {
            nodeParent.css('margin-top', '32px');
            node.text('Nachrichten: ' + msgCount);
            var msgImg = $('img', nodeParent);

            if (true === showImg) {
                if (msgImg.length === 0) {
                    node.html(node.text() + ' <img src="http://images.readmore.de/img/icons/newmsgs.gif" alt="Neue Nachrichten">');
                }
            } else {
                if (msgImg.length > 0) {
                    msgImg.remove();
                }
            }

            nodeParent.animate({
                'margin-top': '11px'
            }, 333);
        });
    };

    var _notifyUser = function (msgsReceived) {
        var title, msg;

        if (msgsReceived > 1) {
            title = 'Neue Readmore Nachrichten!';
            msg = 'Du hast ' + msgsReceived + ' neue Nachrichten erhalten!';
        } else {
            title = 'Neue Readmore Nachricht!';
            msg = 'Du hast eine neue Nachricht erhalten!';
        }

        if (_options.getOption('miscellaneous_reloadMessages_desktopNotifications') == 'checked') {
            _createDesktopNotification(title, msg);
        }

        if (_options.getOption('miscellaneous_reloadMessages_alertBox') == 'checked') {
            alert(msg);
        }

        if (_options.getOption('miscellaneous_reloadMessages_playSound') == 'checked') {
            _playSound();
        }
    };

    var _createDesktopNotification = function (title, msg, options) {
        var defaultOptions = {
            icon: ICON_URL,
            body: msg
        };

        var opts = $.extend(defaultOptions, (typeof options === 'object' ? options : {}));
        var notification = new Notify(title, opts);

        if (!notification.isSupported()) {
            return;
        }

        notification.show();
    };

    var _playSound = function () {
        var audioUrl = _options.getOption('miscellaneous_reloadMessages_playSoundUrl');

        if (audioUrl) {
            try {
                var audioElement = new Audio(audioUrl);
                audioElement.pause();
                audioElement.play();
            }
            catch (e) {
            }
        }
    }
}
/**
 * Miscellaneous
 * =============
 *
 * Sammlung von Funktionen die nicht besser zugeordnet werden konnten.
 */

function Miscellaneous() {
    this.searchJumpToLastpage = function () {
        var $elm = $('#content').find('a[href^="index.php?cont=forum/thread&threadid="]');
        $elm.each(function () {
            var link = $(this).attr('href').replace('&page=1', '&pagenum=lastpage');
            $(this).parent().append('<a href="' + link + '" class="floatr" title="Last Page"><img src="http://images.readmore.de/img/icons/high_next.gif" height="9" width="11" alt=""></a>');
        });
    };

    this.hideWww = function () {
        $('#leftc>div.block:eq(0), div.line2:eq(0), div.line2:eq(1)').css('display', 'none');
    };

    this.buttonScrollDown = function () {
        $('.floatr.m2:first').append('<img onclick="window.scrollTo(0, $(\'td.ten.vtop:last\').offset().top-50);" style="top: 0; height: 13px; padding-right: 2px; cursor: pointer;" alt="scroll down" src="http://readmore.thextor.de/userscript/img/arrow_down_alt1_16x16.png" />');
    };

    this.buttonScrollUp = function () {
        $('.floatl.m2.elf:last')
            .css('width', '100%')
            .append('<img onclick="window.scrollTo(0,0)" style="float: right; height: 13px; padding-right: 10px; cursor: pointer;" alt="scroll up" src="http://readmore.thextor.de/userscript/img/arrow_up_alt1_16x16.png" />');
    };

    this.reSortTitle = function () {
        var $head = $('head');
        var $title = $head.find('title');
        var title = $title.text();
        var pieces = title.split('\u00BB');	// Bei den Doppelpfeilen trennen

        title = pieces[2] + ' ' + '\u00BB' + pieces[1] + '\u00BB' + ' ' + pieces[0];
        $title.remove();
        $head.append('<title>' + title + '</title>');
    };

    this.lastPageJumpToLastPost = function () {
        var lastpage = document.location.href.match(/pagenum=lastpage/);
        if (lastpage != null) {
            if (lastpage[0] == 'pagenum=lastpage') {
                window.scrollTo(0, $('td.ten.vtop:last').offset().top - 50);
            }
        }
    };

    this.convertImageLinks = function () {
        $('a[href$=".png"], a[href$=".jpg"], a[href$=".gif"], a[href$=".bmp"]').each(function () {
            $(this).html('<img src="' + $(this).attr('href') + '" class="center" style="max-width: 98%; border: 1px solid #CDCDCD" />');
        });
    };

    this.createFixedToolbar = function () {
        $('body > div.user_band').css({
            'position': 'fixed',
            'width': '100%'
        });
        $('div#wrapper').css('margin-top', '34px');
    };

    this.convertYoutube = function () {
        $('iframe[width=380][height=270][frameborder=0]').each(function () {
            var link = 'http://www.youtube.com/watch?v=' + String($(this).attr('src')).trim().replace('http://www.youtube.com/embed/', '');
            $(this).after('<a href="' + link + '">' + link + '</a>');
            $(this).remove();
        });
    };

    this.stopAvatarAnimation = function () {
        [].slice
            .apply(document.images)
            .filter(_isGifImage)
            .map(_freeze_gif);

        function _isGifImage(i) {
            return /^(?!data:).*?\/user.*?\.gif/i.test(i.src);
        }

        function _freeze_gif(i) {
            var c = document.createElement('canvas');
            var w = c.width = i.width;
            var h = c.height = i.height;
            c.getContext('2d').drawImage(i, 0, 0, w, h);
            try {
                i.src = c.toDataURL("image/gif");
            } catch (e) {
                for (var j = 0, a; a = i.attributes[j]; j++)
                    c.setAttribute(a.name, a.value);
                i.parentNode.replaceChild(c, i);
            }
        }
    };
}
/**
 * Notes
 * =====
 *
 * Notizfunktion um Text zu Usern zu verfassen.
 * Unter dem Avatar in Posts wird eine Textarea eingeblendet.
 */

function Notes(){

    /**
     * Object aus dem Localstorage
     * @type {{}}
     * @private
     */
    var _notes = {};

    /**
     * Fügt eine Textarea unter dem User-Avatar ein. Übergeben wird das TD und die
     * Userid des Benutzers/Posts.
     * @param $element {{}}
     * @param userid {Integer}
     * @private
     */
    var _appendTextarea = function($element, userId){
        $element.append('<textarea class="IgnoreUser" style="width: 95.5%; height: 80px;" data-userid="' + userId + '"></textarea>');
    };

    /**
     * Fügt den Text in die Textarea ein.
     * @private
     */
    var _insertNoteText = function(){
        $('textarea.IgnoreUser').each(function(){
            var $this   = $(this);
            var userId  = $this.data('userid');

            if (_notes.hasOwnProperty(userId)){
                $this.html(_notes[userId]);
            }
        });
    };

    /**
     * Fügt den Event-Handler hinzu, damit die Notizen
     * gespeichert werden.
     * @private
     */
    var _addEventHandler = function(){
        var $elements = $('textarea.IgnoreUser');

        console.log('_addEventHandler');

        // Alte Handler entfernen
        $elements.off('focusout');

        // Beim rausklicken abfeuern
        $elements.on('focusout', function(){
            var $this   = $(this);
            var userId  = $this.data('userid');

            // Text einlesen
            _notes[userId] = $this.val();

            // Textareas updaten
            _insertNoteText();
            _saveNotes();
        });
    };

    /**
     * Liest die Notizen aus dem Localstorage aus. Falls readFromStorage mit false übergeben wird,
     * werden die Notizen nicht aus dem localstorage geladen.
     * @param readFromStorage {Boolean}
     * @private
     */
    var _readNotes = function(){
        _notes = JSON.parse(localStorage.getItem('userscriptNote'));
        if (typeof _notes === "undefined" || _notes === null){
            _notes = {};
        }
    };

    /**
     * Speichert die Notes.
     * @private
     */
    var _saveNotes = function(){
        localStorage.setItem('userscriptNote', JSON.stringify(_notes));
    }

    /**
     * Starten die Notizfunktion
     * @param readFromStorage
     */
    this.init = function(readFromStorage){
        var $posts = $('tr[class*=post_]');

        readFromStorage = typeof readFromStorage !== 'undefined' ? readFromStorage : true;

        if (readFromStorage){
            _readNotes();
        }

        $posts.find('td:first').not(':has(textarea)').each(function(){
            var $this   = $(this);
            var userId  = $this.find('a.bml').attr('href').match(/&id=([0-9]+)/)[1];
            _appendTextarea($this, userId);
        });

        _addEventHandler();
        _insertNoteText();
    };
}
/**
 * Options
 * =======
 *
 * Pseudoklasse um die Optionen des Userscript zu handeln. Braucht zum instanziieren keine weiteren
 * Parameter, ruft direkt die _init() Methode auf um die Settings auszulesen.
 */
function Options() {
    /**
     * Name der benutzt wird um die Optionen im Localstorage zu speichern.
     * @type {string}
     */
    var LOCALSTORAGE_NAME = 'userscriptOptions';

    /**
     * Name der benutzt wird um das Backup der Optionen im Localstorage zu speichern.
     * @type {string}
     */
    var LOCALSTORAGE_NAME_BACKUP = 'userscriptOptionsBackup';

    /**
     * Version des Scriptes, wird durch GrundJS im Buildprozess ersetzt.
     * @type {string}
     * @private
     */
    var _version = '3.0.1';

    /**
     * Property für die Optionen. Werden über entsprechende Methoden abgefragt, sind daher
     * nicht mehr public.
     * @type {{}}
     * @private
     */
    var _options = {};

    /**
     * Missbrauche diese Funktion einfach mal als Konstuktor-Ersatz. Finde es einfach schöner
     * dafür eine separate Methode zu haben. Wird als letzte Zeile ausgerufen.     *
     * @private
     */
    var _init = function () {
        // Optionen aus dem Localstorage auslesen
        _readOptionsFromLocalstorage();
    };

    /**
     * Funktion um den Wert einer bestimmten Option zurückzugeben.
     * @param {String} what
     */
    this.getOption = function (what) {
        return _options[what];
    };

    /**
     * Gibt die aktuelle Version zurück.
     * @returns {string}
     */
    this.getVersion = function () {
        return _version;
    };

    /**
     * Fügt den Link für die Optionen in die Userbar auf der Readmore Seite ein.
     * Dadurch wird später das Fenster mit den Einstellungen verfügbar.
     */
    this.insertOptionsLink = function () {
        $('div.floatl.vcenter.elf.dgray:last').after('<div class="floatl vcenter" style="padding-top:4px;"><img src="http://images.readmore.de/img/header/line.jpg" alt="" style="height:25px; width:2px;"></div><div class="floatl vcenter elf dgray" style="margin:11px 10px;"><a id="openUserscriptOptions" href="#" class="black">Userscript</a></div>');
    };

    /**
     * Liest die Optionen aus dem HTML aus und speichert sie anschließend als JSON-String den Localstorage
     * des Browsers. Gibt im Fehlerfall eine einfache Meldung zurück.
     * @return {boolean}
     */
    this.saveOptions = function () {
        _readOptionsFromHTML();

        try {
            localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify(_options));
        } catch (e) {
            alert('Es ist ein Fehler beim Speichern aufgetreten: ' + e);
            return false;
        }

        return true;
    };

    /**
     * Funktion um die Optionen als JSON-String auszulesen und zurück zu geben. Wird für den
     * Export der Settings benutzt.
     * @returns {String}
     */
    this.getOptionsRaw = function () {
        return localStorage.getItem(LOCALSTORAGE_NAME);
    };

    /**
     * Funktion um die Optionen als JSON-String zu übergeben und in den Localstorage zu speichern. Wird für
     * den Import benutzt.
     * @param options {String}
     */
    this.setOptionsRaw = function (options) {
        localStorage.setItem(LOCALSTORAGE_NAME, options + "");
    };

    /**
     * Sichert die aktuelle Konfiguration für Backupzwecke. Falls ein Import schief geht kann so der alte
     * Stand wieder hergestellt werdne.
     */
    this.backupOptions = function () {
        localStorage.setItem(LOCALSTORAGE_NAME_BACKUP, localStorage.getItem(LOCALSTORAGE_NAME));
    };

    /**
     * Blendet das Fenster mit den Optionen ein.
     */
    this.showOptions = function () {
        _writeOptionsToHTML();

        $('div#userscriptOptionsOverlay').css('height', $(document).height()).fadeIn(200, function () {
            // Reset scroll
            $('div#userscriptOptions div.rmus-options-content').animate({scrollTop: 0}, 50);

            // Im-/Export ausblenden
            $('div#rmus-options-imexport').hide();
            $('div#userscriptOptions').fadeIn(250);
        });
    };

    /**
     * Schließt das Fenster mit den Optionen.
     */
    this.hideOptions = function () {
        $('div#userscriptOptions').fadeOut(250, function () {
            $('div#userscriptOptionsOverlay').fadeOut(200);
        });

        _readOptionsFromLocalstorage();
    };

    /**
     * Private Methode um die aktuellen Einstellung aus den Input-Feldern der Optionen auszulesen
     * und in das entsprechende Property zu schreiben.     *
     * @private
     */
    var _readOptionsFromHTML = function () {
        var userscriptOptions = {};

        // Geht alle Checkboxen durch, prüft ob die Box gechecked ist und setzt den passenden
        // Wert in den Optionen.
        $('input[type=checkbox].userscriptOptions').each(function () {
            var attr = $(this).prop('checked');
            if (attr === true) {
                userscriptOptions[$(this).attr('name')] = 'checked';
            } else {
                userscriptOptions[$(this).attr('name')] = false;
            }
        });

        // Liest den Wert der Textfelder aus.
        $('input.userscriptOptions[type!=checkbox]').each(function () {
            userscriptOptions[$(this).attr('name')] = $(this).val();
        });

        // Liest den Wert der Selects aus.
        $('select.userscriptOptions').each(function () {
            userscriptOptions[$(this).attr('name')] = $(this).val();
        });

        // Nachdem alle Daten eingelesen wurden, werden die Settings in dem Attribut gesichert.
        _options = userscriptOptions;
    };

    /**
     * Liest den JSON-String aus dem Localstorage aus und setzt das passende
     * Attribut der Pseudoklasse. Wird im Konstruktor aufgerunden, sollte also stets verfügbar sein.     *
     * @private
     */
    var _readOptionsFromLocalstorage = function () {
        // JSON-String aus dem Localstorage auslesen und wieder in ein Objekt umwandeln
        _options = JSON.parse(localStorage.getItem(LOCALSTORAGE_NAME));

        if (_options == null) {
            _options = {};
        }
    };

    /**
     * Private Methode um die Inputboxen im Menu zu setzen. Die Optionen werden aus dem
     * Attribut entnommen.
     * @private
     */
    var _writeOptionsToHTML = function () {
        var type = '';

        if (!$.isEmptyObject(_options)) {
            $.each(_options, function (index, value) {
                // Typ der Option bestimmen
                type = $('[name=' + index + ']').attr('type');

                // Checkboxen auslesen und den Wert zuweisen
                if (type == 'checkbox') {
                    // Checkboxen setzen
                    if (value == 'checked') {
                        $('[name=' + index + ']').attr('checked', true);
                    } else {
                        $('[name=' + index + ']').attr('checked', false);
                    }
                    return true;
                }

                // Textfelder auslesen und den Wert zuweisen
                if (type == 'text' || type == null) {
                    $('[name=' + index + ']').val(value);
                    return true;
                }

                // Selectboxen auslesen und den Wert zuweisen
                if (index.match('rightColumn_forum_hideForum_') != null) {
                    $('[name=' + index + ']').val(value);
                    return true;
                }
            });
        }
    };

    /**
     * Init Methode aufrufen!
     */
    _init();
}
/**
 * Preview
 * =======
 *
 * Pseudoklasse für die Preview eines Readmore.de Posts. Der BBCode wird durch das entsprechende
 * HTML ersetzt.
 */

function Preview(){

    var _self = this;

    /**
     * UserID des aktuellen Benutzers
     * @type {number}
     * @private
     */
    var _userid = 0;

    /**
     * Name des aktuellen Users
     * @type {string}
     * @private
     */
    var _username = '';

    /**
     * Ist die Vorschau aktiv oder nicht?
     * @type {boolean}
     * @private
     */
    var _previewIsEnabled = false;

    /**
     * Tags die in der Vorschau ersetzt werden müssen.
     * @type {{\\[b\\]: string, \\[/b\\]: string, \\[i\\]: string, \\[/i\\]: string, \\[u\\]: string, \\[/u\\]: string, \\[s\\]: string, \\[/s\\]: string, \\[hr\\]: string, \\[center\\]: string, \\[/center\\]: string, \\[spoiler\\]: string, \\[/spoiler\\]: string, \\[youtube]: string, \\[/youtube]: string, \\[img]: string, \\[/img]: string, \\[image]: string, \\[/image]: string, \\[url]: string, \\[/url]: string, \\[/color]: string, \\[list]: string, \\[/list]: string, \\[\\*]: string}}
     * @private
     */
    var _previewTags = {
        '\\[b\\]'           : '<b>',
        '\\[/b\\]'          : '</b>',
        '\\[i\\]'           : '<i>',
        '\\[/i\\]'          : '</i>',
        '\\[u\\]'           : '<u>',
        '\\[/u\\]'          : '</u>',
        '\\[s\\]'           : '<s>',
        '\\[/s\\]'          : '</s>',
        '\\[hr\\]'          : '<hr style="margin:0; padding:0;">',
        '\\[center\\]'      : '<center>',
        '\\[/center\\]'     : '</center>',
        '\\[spoiler\\]'     : '<div><a href="#" onclick="spoiler(this);return false;" class="spoiler-link" style="background-image: url(http://images.readmore.de/img/icons/plus.jpg);">Spoiler</a><div class="spoiler-cont" style="display: none; ">',
        '\\[/spoiler\\]'    : '</div></div>',
        '\\[youtube]'       : '<iframe width="380" height="270" src="http://www.youtube.com/embed/',
        '\\[/youtube]'      : '" frameborder="0" allowfullscreen></iframe><br>',
        '\\[img]'           : '<img src="',
        '\\[/img]'          : '" alt="" title="" class="center" style="max-width:98%; border: 1px solid #CDCDCD;">',
        '\\[image]'         : '<img src="',
        '\\[/image]'        : '" alt="" title="" class="center" style="max-width:98%; border: 1px solid #CDCDCD;">',
        '\\[url]'           : '<a>',
        '\\[/url]'          : '</a>',
        '\\[/color]'        : '</span>',
        '\\[list]'          : '<ul style="margin: 0; padding: 0; padding-left: 20px;">',
        '\\[/list]'         : '</ul>',
        '\\[\\*]'           : '<li style="margin: 0; padding: 0; list-style-image: url(http://images.readmore.de/img/icons/else.png);">'
    };

    /**
     * jQuery Element der Preview. Damit das entsprechende Element nicht immer wieder ausgelesen werden muss.
     * Wird am ende der _init-Methode gesetzt.
     * @type {{}}
     * @private
     */
    var _previewElement = {};

    /**
     * Wie bei _previewElement: Wird 1x selektiert, damit die Arbeit später entfällt.
     * @type {{}}
     * @private
     */
    var _c_comment = {};

    /**
     * Wie bei _c_comment: Wird 1x selektiert, damit die Arbeit später entfällt.
     * @type {{}}
     * @private
     */
    var _previewtable = {};

    /**
     * Fügt den Button zum ein und ausblenden sowie die Grundlage für das Gerüst der Vorschau
     * auf die Readmore Seite ein.
     * @private
     */
    var _insertPreviewHtml = function () {
        var $div = $('.center:last');

        $('<br /><table border="0" id="previewtable" style="display: none"><tr><td valign="top" id="previewleft" style="border: solid 1px #dddddd; border-right: none; width:110px; height:auto; min-height: 150px;"></td><td valign="top" id="preview" style="font-size: 11px; border: solid 1px #dddddd; width:408px; height:auto; min-height: 150px;"></td><td><img style="border: none; margin: 0; padding: 0;" src="http://readmore.thextor.de/userscript/img/minheight150.gif"></td></tr><tr><td colspan="2" style="border: solid 1px #dddddd; border-top: none; background-color: #DEDEDE; height: 12px;"></td><td style="border: none;"></td></table>').insertAfter($div);
        $('<input type="button" value="Vorschau ein-/ausblenden" class="form" id="triggerPreview" style="margin-left: 10px;">').appendTo($div);
    };

    /**
     * Grundgerüst für die Preview einfügen. Userid und Name sind schon ausgelesen, Button zum einblenden ist auch
     * schon vorhanden.
     * @private
     */
    var _initializePreview = function () {
        var d           = new Date();
        var timedata    = {};
        var rows        = [];

        timedata.day     = d.getDate();
        timedata.month   = d.getMonth() + 1;
        timedata.year    = d.getFullYear();
        timedata.hours   = d.getHours();
        timedata.minutes = d.getMinutes();

        $.each(timedata, function (key, value) {
            if (String(value).length == 1) {
                timedata[key] = '0' + value;
            }
        });

        rows.push('<span style="font-size: 10px;"><a href="javascript:void(0)">#1337</a></span><br>');
        rows.push('<span style="font-size: 10px;">' + timedata.day + '.' + timedata.month + '.' + timedata.year + ', ' + timedata.hours + ':' + timedata.minutes + '</span><br>');
        rows.push('<span style="font-size: 11px;"><img style="height: 11px;" src="http://images.readmore.de/img/icons/online.gif"><img src="http://readmore.thextor.de/userscript/img/space.gif" style="border: none; height: 1px; width: 5px;"><a class="bml" href="index.php?cont=profile&amp;id=' + _userid + '" title="' + _username + '">' + _username + '</a></span><br><br>');
        rows.push('<span style="font-size: 10px;">Beitr&auml;ge: 1337</span><br><br>');
        rows.push('<a href="index.php?cont=profile&amp;id=' + _userid + '" title="' + _username + '"><img src="' + $('.floatl.vcenter.elf.dgray.vcenter:first').html().match(/src="(.+?)" alt/)[1] + '"></a>');

        $('#previewleft').html(rows.join(''));
    };

    /**
     * Liest UserID und UserName aus.
     * @private
     */
    var _readUseridAndUsername = function () {
        var profileLinkHTML = $('div.floatl.vcenter.elf.dgray:eq(1)').html();

        _userid     = profileLinkHTML.match(/id=(.+?)"/)[1];
        _username   = profileLinkHTML.match(/">(.+?)<\/a>/)[1];
    };

    /**
     * Stellt die Preview da
     * @private
     */
    var _showPreview = function(){
        _previewElement.html(_self.convertToPreview(String(_c_comment.val().replace(/(\r\n|\n|\r)/gm, '<br />'))));
    };

    /**
     * Preview einschalten
     * @private
     */
    var _activatePreview = function(){
        _showPreview();


        _previewtable.css('display', 'block');
        _c_comment.on('keyup', _showPreview);
        _c_comment.on('focus', _showPreview);

        _previewIsEnabled = true;
    };

    /**
     * Preview ausschalten
     * @private
     */
    var _deactivatePreview = function(){
        _previewtable.css('display', 'none');
        _c_comment.off('keyup', _showPreview);
        _c_comment.off('focus', _showPreview);

        _previewIsEnabled = false;
    };

    /**
     * Gibt zurück ob die Preview aktuell an ist.
     * @returns {boolean}
     */
    this.isEnabled = function(){
        return _previewIsEnabled;
    };

    /**
     * Öffentliche Methode um die Preview ein- oder auszuschalten. Orientiert sich an dem
     * Attribut _previewIsEnabled.
     */
    this.triggerPreview = function() {
        if (_previewIsEnabled) {
            _deactivatePreview();
        }
        else {
            _activatePreview();
        }
    };

    /**
     * Liest UserID und Name aus, fügt dann das Grundgerüst für die Preview ein.
     * @private
     */
    this.init = function(){
        _readUseridAndUsername();
        _insertPreviewHtml();
        _initializePreview();

        _previewElement = $('#preview');
        _c_comment      = $('#c_comment');
        _previewtable   = $('#previewtable');
    };

    /**
     * Ersetzt den Text mit BBCODE durch HTML-Code.
     * Herzstück der Preview.
     * @param raw_post  {String}    Beitrag mit BBCODE
     * @returns         {String}    Beitrag übersetzt nach HTML
     */
    this.convertToPreview = function(raw_post){
        var text            = raw_post;
        var urlPreview      = '';
        var colorPreview    = '';
        var quotes          = '';

        // BB-Code ersetzen
        $.each(_previewTags, function (key, value) {
            var regEx = new RegExp(key, 'g');
            text = text.replace(regEx, value);
        });

        // URL mit Link
        urlPreview = text.match(/\[url=[^\]]+/g);
        if (urlPreview) {
            $.each(urlPreview, function (key) {
                var link    = urlPreview[key].replace(/\[url=/, '').replace(/http:\/\//, '').replace(/https:\/\//, '');
                var regEx   = new RegExp('\\' + urlPreview[key].replace(/\(/g, '\\(').replace(/\)/g, '\\)').replace(/\?/g, '\\?') + '\\]');

                text = text.replace(regEx, '<a href="http://' + link + '">');
            });
        }

        // Color
        colorPreview = text.match(/\[color=[^\]]+/g);
        if (colorPreview) {
            $.each(colorPreview, function (key) {
                var color = text.match(/\[color=(.+?)\]/)[1];
                var regEx = new RegExp('\\' + colorPreview[key] + '\\]');

                text = text.replace(regEx, '<span style="color: ' + color + ';">');
            });
        }

        // Quote
        quotes = text.match(/\[quot(.*?)\]/g);
        if (quotes != null) {
            $.each(quotes, function (index, value) {
                var quoteHead   = '<div class="bggray2 bogray2 quote_titel">Zitat';
                var name        = value.match(/\[quote=(.*?)\]/);

                if (name != null) {
                    quoteHead = quoteHead + ' von ' + name[1];
                }

                quoteHead = quoteHead + ':</div>';
                text = text.replace(value, quoteHead + '<div class="bogray2 quote">');
            });
        }

        text = text.replace(/\[\/quote\]/g, '</div>');
        return text;
    };
}
function ReadmoreUserscript() {
    var _options = new Options();
    var _content = new Content();
    var _preview = new Preview();
    var _miscellaneous = new Miscellaneous();
    var _notes = new Notes();
    var _headlines = new Headlines();
    var _update = new Update(_options);
    var _editPosts = new EditPosts(_preview);
    var _extraButtons = new Extrabuttons(_content);
    var _reloadPageData = new ReloadPageData();
    var _ignoreUser = new IgnoreUser(_options);
    var _reloadPosts = new ReloadPosts(_options, _ignoreUser, _editPosts, _notes, _miscellaneous);
    var _ajaxPost = new AjaxPost(_preview, _reloadPosts);
    var _messages = new Messages(_options);
    var _streams = new Streams(_reloadPageData);
    var _scrollForNewPage = new ScrollForNewPage(_reloadPosts, _ignoreUser, _notes);
    var _ticker = new Ticker(_reloadPageData);
    var _forumNavigation = new ForumNavigation(_options, _reloadPageData);

    this.start = function () {
        // BC: Einmal speichern, damit auch die nicht-selektierten Checkboxen gespeichert werden.
        if (!localStorage.getItem('bcOptionsSaved')) {
            _options.saveOptions();
            localStorage.setItem('bcOptionsSaved', true);
        }

        if (_options.getOption('miscellaneous_fixedToolbar')) {
            _miscellaneous.createFixedToolbar();
        }

        // WWW, Streams, Galerie, Ergebnisticker, Schlagzeilen und Forum angezeigt
        if (!_content.getMultipleContent(['profile', 'guides'], 'OR')) {
            // WWW ausblenden
            if (_options.getOption('leftColumn_www_hideWww') === 'checked') {
                _miscellaneous.hideWww();
            }

            // Streams ausblenden
            if (_options.getOption('leftColumn_streams_hideStreams') === 'checked') {
                _streams.hideStreams();
            }

            // Ticker ausblenden
            if (_options.getOption('rightColumn_ticker_hideTicker') === 'checked') {
                _ticker.hideTicker();
            }

            // Schlagzeilen ausblenden
            if (_options.getOption('rightColumn_headlines_hideHeadlines') === 'checked') {
                _headlines.hideAllHeadlines();
            }
            // Individuell
            else {
                if (_options.getOption('rightColumn_headlines_hideCounterstrike') === 'checked') {
                    _headlines.hideCounterstrike();
                }
                if (_options.getOption('rightColumn_headlines_hideStarcraft') === 'checked') {
                    _headlines.hideStarcraft();
                }
                if (_options.getOption('rightColumn_headlines_hideDefenseOfTheAncients') === 'checked') {
                    _headlines.hideDefenseOfTheAncients();
                }
                if (_options.getOption('rightColumn_headlines_hideLeagueOfLegends') === 'checked') {
                    _headlines.hideLeagueOfLegends();
                }
                if (_options.getOption('rightColumn_headlines_hideWarcraft3') === 'checked') {
                    _headlines.hideWarcraft3();
                }
                if (_options.getOption('rightColumn_headlines_hideSonstiges') === 'checked') {
                    _headlines.hideSonstiges();
                }

                // Fixt die Größe des Bildes
                $('#nav_schlagzeilen').find('img[alt=activity]')
                    .css('height', '11px')
                    .css('width', '11px');
            }

            // Forum ausblenden
            if (_options.getOption('rightColumn_forum_hideForum') === 'checked') {
                _forumNavigation.hideForum();	// Komplett ausblenden
            }
            else {	// Individuell
                if (_options.getOption('rightColumn_forum_sections') === 'checked') {
                    _forumNavigation.initializeForum();
                }
            }

            // Neuladen der Forannavigation beziehungsweise der Streams oder Ticker
            if (_options.getOption('rightColumn_forum_reloadForum') === 'checked' || _options.getOption('leftColumn_streams_reloadStreams') === 'checked' || _options.getOption('rightColumn_ticker_reloadTicker') === 'checked') {
                _reloadPageData.readPage();
            }

            // Button um die Forennavigation zu aktualisieren
            _forumNavigation.reloadForumPerClickAddImage();
            $('#userscript_reloadForumButton').click(function () {
                _forumNavigation.reloadForumPerClickDoReload();
            });
        }

        // Sprung zur letzten Seite in den Suchergebnissen
        if (_content.getContent('search')) {
            if (_options.getOption('middleColumn_search_jump_to_last_page') === 'checked') {
                _miscellaneous.searchJumpToLastpage();
            }
        }

        // Nur im Forum (Threadansicht) aktivieren
        if (_content.getContent('forum_thread')) {

            _reloadPosts.init();

            // Wenn Lastpage gesetzt ist, zum letzten Post springen
            if (_options.getOption('miscellaneous_lastPageJumpToLastPost') === 'checked') {
                _miscellaneous.lastPageJumpToLastPost();
            }

            // Knopf zum hochscrollen
            if (_options.getOption('miscellaneous_buttonScrollUp') === 'checked') {
                _miscellaneous.buttonScrollUp();
            }

            // Knopf zum runterscrollen
            if (_options.getOption('miscellaneous_buttonScrollDown') === 'checked') {
                _miscellaneous.buttonScrollDown();
            }

            // Titel umsortieren
            if (_options.getOption('miscellaneous_reSortTitle') === 'checked') {
                _miscellaneous.reSortTitle();
            }

            // Bilderlinks umwandeln
            if (_options.getOption('miscellaneous_convertImageLinks') === 'checked') {
                _miscellaneous.convertImageLinks();
            }

            // Vorschau
            if (_options.getOption('middleColumn_forum_preview') === 'checked') {
                _preview.init();
                $('#triggerPreview').on('click', _preview.triggerPreview);
            }

            // Posten im Hintergrund
            if (_options.getOption('middleColumn_forum_postPerAjax') === 'checked') {
                _ajaxPost.init();
            }

            // Posts nachladen
            if (_options.getOption('middleColumn_forum_reloadPosts_readNewPosts') === 'checked') {
                if (_options.getOption('middleColumn_forum_reloadPosts_jumpToNewPosts') === 'checked' && _options.getOption('middleColumn_forum_reloadPosts_endlessPage') === 'checked') {
                    _reloadPosts.jumpToNewPosts();
                    window.setInterval(function () {
                        _reloadPosts.jumpToNewPosts();
                    }, (parseInt(_options.getOption('middleColumn_forum_reloadPosts_jumpToNewPosts_waitUntilNextJump'), 10) > 1 ? parseInt(_options.getOption('middleColumn_forum_reloadPosts_jumpToNewPosts_waitUntilNextJump'), 10) : 1) * 1000);
                }
            }

            // Avataranimationen stoppen
            if (_options.getOption('miscellaneous_stopAvatarAnimation') === 'checked') {
                _miscellaneous.stopAvatarAnimation();
            }

            // Notzizen einblenden
            if (_options.getOption('miscellaneous_note') === 'checked') {
                _notes.init();
            }

            // Edit vorbereiten
            if (_options.getOption('middleColumn_forum_editPost') === 'checked') {
                _editPosts.initializeEvent();
            }

            // Youtubeplayer ersetzen
            if (_options.getOption('miscellaneous_convertYoutube') === 'checked') {
                _miscellaneous.convertYoutube();
            }

            // Editbox verschieben
            if (_options.getOption('middleColumn_forum_hideForum_editboxTop')) {
                _scrollForNewPage.editboxTop();
            }
        }

        // User ignorieren
        if (_options.getOption('miscellaneous_ignoreUser') === 'checked') {
            _ignoreUser.ignore(_content.getContent('forum_thread'), _content.getContent('matches'), _content.getContent('profile'));
        }

        // Extrabuttons in den entsprechenden Seiten initialisieren
        if (_content.getMultipleContent(['forum_thread', 'forum_newtopic', 'forum_edit', 'matches', 'msg', 'profile', 'groups_show_group'], 'OR')) {
            if (_options.getOption('miscellaneous_extraButtons') === 'checked') {
                _extraButtons.init();
            }
        }

        // Fix image jumping in forum box between requests
        $('head').append('<style type="text/css">div#nav_schlagzeilen div.listing > a > img {width: 11px; height: 11px;} div.cont_box div.listing > img {width: 5px; height: 7px;}</style>');

        // Optionen einfügen
        $('body').append('<style type="text/css">div#userscriptOptionsOverlay { position: absolute; top: 0; left: 0; width: 100%; z-index: 1337; display: none; background-color: #fff; opacity: 0.8; } #userscriptOptions.rmus-options { display: none; box-shadow: 0px 0px 6px 1px #80D4EE; position: absolute; width: 600px; left: 50%; margin-left: -300px; top: 75px; border: 2px solid #00aeed; border-radius: 3px; background-color: #fff; z-index: 1338; } #userscriptOptions.rmus-options-wrapper { position: relative; } #userscriptOptions .rmus-options-header { border-bottom: 2px solid #e2e2e2; padding: 10px; color: #fff; background: #46c1ea; background: -moz-linear-gradient(top, #46c1ea 0%, #00aeed 100%); background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#46c1ea), color-stop(100%,#00aeed)); background: -webkit-linear-gradient(top, #46c1ea 0%,#00aeed 100%); background: -o-linear-gradient(top, #46c1ea 0%,#00aeed 100%); background: -ms-linear-gradient(top, #46c1ea 0%,#00aeed 100%); background: linear-gradient(to bottom, #46c1ea 0%,#00aeed 100%); } #userscriptOptions .rmus-options-header h1 { font-size: 16px; text-transform: uppercase; float: left; text-shadow: 1px 1px #A0A0A0; color: #fff; } #userscriptOptions .rmus-options-header a { color: #fff; border-bottom: 1px dotted #fff; } #userscriptOptions .rmus-options-header a:hover { text-decoration: none; } #userscriptOptions .rmus-options-header .rmus-links { float: right; margin-top: 2px; } #userscriptOptions .rmus-options-header .rmus-links .rmus-version { font-weight: bold; } #userscriptOptions .rmus-options-content { overflow-y: scroll; height: 592px; } #userscriptOptions .rmus-options-content table { border: none; width: 100%; margin-top: -1px; } #userscriptOptions .rmus-options-content table .menuparent { background-color: #fff; padding: 0; } #userscriptOptions .rmus-options-content table .menufirstchild { display: none; background-color: #f1f1f1; margin: 0; padding: 0; } #userscriptOptions .rmus-options-content table .menusecondchild { display: none; background-color: #e2e2e2; margin: 0; padding: 0; } #userscriptOptions .rmus-options-content table .headline td { color: #7A7A7A; font-size: 14px; margin: 0px; padding: 5px 0 5px 39px; width: 100%; border-top: 1px solid #ccc; border-bottom: 1px solid #ccc; background: #f2f5f6; background: -moz-linear-gradient(top, #f2f5f6 0%, #e3eaed 100%); background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#f2f5f6), color-stop(100%,#e3eaed)); background: -webkit-linear-gradient(top, #f2f5f6 0%,#e3eaed 100%); background: -o-linear-gradient(top, #f2f5f6 0%,#e3eaed 100%); background: -ms-linear-gradient(top, #f2f5f6 0%,#e3eaed 100%); background: linear-gradient(to bottom, #f2f5f6 0%,#e3eaed 100%); } #userscriptOptions .rmus-options-footer { text-align: right; padding: 8px 10px; border-top: 1px solid #ccc; background: #ffffff; background: -moz-linear-gradient(top, #ffffff 0%, #ededed 100%); background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ffffff), color-stop(100%,#ededed)); background: -webkit-linear-gradient(top, #ffffff 0%,#ededed 100%); background: -o-linear-gradient(top, #ffffff 0%,#ededed 100%); background: -ms-linear-gradient(top, #ffffff 0%,#ededed 100%); background: linear-gradient(to bottom, #ffffff 0%,#ededed 100%); } #userscriptOptions .rmus-options-footer #rmus-options-imexport { clear: both; text-align: left; margin-top: 10px; display: none; } #userscriptOptions .rmus-options-footer #rmus-options-imexport .rmus-options-imexport-help { font-size: 10px; } #userscriptOptions .rmus-options-footer #rmus-options-imexport textarea { width: 568px; font-family: Verdana; font-size: 10px; padding: 5px; margin: 5px 0 3px; height: 21px; } #userscriptOptions input[type=checkbox], #userscriptOptions input[type=select], #userscriptOptions input[type=text] { margin: 0; padding: 0; } .btn-rm { background-color: #fff; border: 1px solid #ccccce; color: #222222; font-family: Verdana; font-size: 10px; min-height: 14px; padding: 4px 8px; } .btn-rm.primary { color: #fff; border-color: #00A4E4; background: #00bded; background: -moz-linear-gradient(top, #00bded 0%, #00aeed 100%); background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#00bded), color-stop(100%,#00aeed)); background: -webkit-linear-gradient(top, #00bded 0%,#00aeed 100%); background: -o-linear-gradient(top, #00bded 0%,#00aeed 100%); background: -ms-linear-gradient(top, #00bded 0%,#00aeed 100%); background: linear-gradient(to bottom, #00bded 0%,#00aeed 100%); }</style><div id="userscriptOptions" class="rmus-options"><div class="rmus-options-wrapper"><div class="rmus-options-header"><h1>RM Userscript - Optionen</h1><div class="rmus-links"><a href="index.php?cont=forum/thread&threadid=111239&pagenum=1">Thread</a> | Version <span class="rmus-version">3.0.1</span></div><div style="clear: both"></div></div><div class="rmus-options-content"><table><tr class="headline"><td colspan="4">Funktionen</td></tr><tr><td style="width:30px"></td><td></td><td style="width:180px"></td><td style="width:25px"></td></tr><tr class="menuparent"><td align="center"><img id="toggle_sub_middleColumn_forum_reloadPosts_readNewPosts" src="http://readmore.thextor.de/userscript/img/plus_alt_16x16.png" alt="more" title="Weitere Optionen"></td><td align="left">Neue Forenbeitr&auml;ge im Hintergrund nachladen</td><td align="right"><input type="checkbox" class="userscriptOptions" name="middleColumn_forum_reloadPosts_readNewPosts"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Neue Beitr&auml;ge im Readmore.de-Froum werden automatisch nachgeladen. Ein Refresh des Threads entf&auml;llt somit."></td></tr><tr class="menufirstchild sub_middleColumn_forum_reloadPosts_readNewPosts"><td align="center"><img id="toggle_sub_middleColumn_forum_reloadPosts_endlessPage" src="http://readmore.thextor.de/userscript/img/plus_alt_16x16.png" alt="more" title="Weitere Optionen"></td><td align="left">Seite endlos erweitern</td><td align="right"><input type="checkbox" class="userscriptOptions" name="middleColumn_forum_reloadPosts_endlessPage"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Neue Posts werden einfach eingeblendet. Es muss also nicht mehr auf eine neue Seite gewechselt werden."></td></tr><tr class="menusecondchild sub_middleColumn_forum_reloadPosts_endlessPage"><td align="center"></td><td align="left">Automatisch zu neuen Posts scrollen/springen</td><td align="right"><input type="checkbox" class="userscriptOptions" name="middleColumn_forum_reloadPosts_jumpToNewPosts"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Springt zu neuen posts."></td></tr><tr class="menusecondchild sub_middleColumn_forum_reloadPosts_endlessPage"><td align="center"></td><td align="left">Zeit zwischen zwei Spr&uuml;ngen</td><td align="right"><input type="text" class="userscriptOptions" name="middleColumn_forum_reloadPosts_jumpToNewPosts_waitUntilNextJump" value="10"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Zeit in Sekunden, die zwischen 2 Spr&uuml;ngen mindestens vergehen muss."></td></tr><tr class="menufirstchild sub_middleColumn_forum_reloadPosts_readNewPosts"><td align="center"><img id="toggle_sub_middleColumn_forum_reloadPosts_markNewPosts" src="http://readmore.thextor.de/userscript/img/plus_alt_16x16.png" alt="more" title="Weitere Optionen"></td><td align="left">Neue Eintr&auml;ge farblich markieren</td><td align="right"><input type="checkbox" class="userscriptOptions" name="middleColumn_forum_reloadPosts_markNewPosts"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Die neu eingetragenen Posts werden markiert."></td></tr><tr class="menusecondchild sub_middleColumn_forum_reloadPosts_markNewPosts"><td align="center"></td><td align="left">Farbe ausw&auml;hlen (HEX-Code)</td><td align="right"><input type="text" class="userscriptOptions" name="middleColumn_forum_reloadPosts_markPostColor" value="#EEEEEE"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Bitte eine HEX Zahl eingeben. Beispiel: #FFEE11"></td></tr><tr class="menusecondchild sub_middleColumn_forum_reloadPosts_markNewPosts"><td align="center"></td><td align="left">Ungelesene Posts im Titel / Tab anzeigen</td><td align="right"><input type="checkbox" class="userscriptOptions" name="middleColumn_forum_reloadPosts_showNewPostsTitle"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Die Anzahl der Ungelesenen Posts im Tab anzeigen."></td></tr><tr class="menusecondchild sub_middleColumn_forum_reloadPosts_markNewPosts"><td align="center"></td><td align="left">Favicon ver&auml;ndern</td><td align="right"><input type="checkbox" class="userscriptOptions" name="middleColumn_forum_reloadPosts_changeFavicon"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Bei ungelesenen Posts das Favicon ver&auml;ndern."></td></tr><tr class="menufirstchild sub_middleColumn_forum_reloadPosts_readNewPosts"><td align="center"></td><td align="left">Hinweis bei neuen Seiten einblenden</td><td align="right"><input type="checkbox" class="userscriptOptions" name="middleColumn_forum_reloadPosts_checkForNewPage"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Achtung: Funktioniert nur, wenn Seite endlos erweitern deaktiv ist. Weist auf eine neue Seite hin."></td></tr><tr class="menufirstchild sub_middleColumn_forum_reloadPosts_readNewPosts"><td align="center"></td><td align="left">Zeit zwischen dem Nachladen (Sekunden)</td><td align="right"><input type="text" class="userscriptOptions" name="middleColumn_forum_reloadPosts_timeToWait" value="15"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Sekunden die zwischen dem Nachladen gewartet werden muss."></td></tr><tr class="menuparent"><td align="center"><img id="toggle_sub_miscellaneous_reloadMessages" src="http://readmore.thextor.de/userscript/img/plus_alt_16x16.png" alt="more" title="Weitere Optionen"></td><td align="left">Neue Nachrichten im Hintergrund nachladen</td><td align="right"><input type="checkbox" class="userscriptOptions" name="miscellaneous_reloadMessages"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Neue Nachrichten (PM) werden nachgeladen. Ein Refresh der Seite entf&auml;llt somit."></td></tr><tr class="menufirstchild sub_miscellaneous_reloadMessages"><td align="center"></td><td align="left">Desktop-Benachrichtigungen aktivieren</td><td align="right"><input type="checkbox" class="userscriptOptions" id="miscellaneous_reloadMessages_desktopNotifications" name="miscellaneous_reloadMessages_desktopNotifications"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Deskop-Benachrichtigungen anzeigen sobald es neue Nachrichten gibt. Dies wird derzeit nicht von allen Browsern unterstützt (caniuse.com/notifications)."></td></tr><tr class="menufirstchild sub_miscellaneous_reloadMessages"><td align="center"></td><td align="left">Alert-Box bei neuen Nachrichten anzeigen</td><td align="right"><input type="checkbox" class="userscriptOptions" name="miscellaneous_reloadMessages_alertBox"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Benachrichtigungen sobald es neue Nachrichten gibt."></td></tr><tr class="menufirstchild sub_miscellaneous_reloadMessages"><td align="center"></td><td align="left">Sound bei neuen Nachrichten abspielen</td><td align="right"><input type="checkbox" class="userscriptOptions" id="notification_playsound_cb" name="miscellaneous_reloadMessages_playSound"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Deskop-Benachrichtigungen sobald es neue Nachrichten gibt."></td></tr><tr class="menufirstchild sub_miscellaneous_reloadMessages"><td align="center"></td><td align="left">URL f&uuml;r die Audiodatei</td><td align="right"><input type="text" class="userscriptOptions" id="miscellaneous_reloadMessages_playSoundUrl" name="miscellaneous_reloadMessages_playSoundUrl" value="http://"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Direkt-Url für den Notification Sound"></td></tr><tr class="menuparent"><td align="center"><img id="toggle_sub_miscellaneous_ignoreUser" src="http://readmore.thextor.de/userscript/img/plus_alt_16x16.png" alt="more" title="Weitere Optionen"></td><td align="left">Readmore User ignorieren</td><td align="right"><input type="checkbox" class="userscriptOptions" name="miscellaneous_ignoreUser"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Blendet Foreneintr&auml;ge, Tickercomments und G&auml;stebucheintr&auml;ge aus."></td></tr><tr class="menufirstchild sub_miscellaneous_ignoreUser"><td align="center"></td><td align="left">Usernamen (kommasepariert)</td><td align="right"><input type="text" class="userscriptOptions" id="miscellaneous_reloadMessages_playSoundUrl" name="miscellaneous_ignoreUser_usernames" value=" "></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Beispielsweise: DanielaKatzenberger,ScriptKiddy99,randomreadmoremod. Gross und Kleinschreibung beachten!"></td></tr><tr class="menuparent"><td align="center"></td><td align="left">Beitr&auml;ge ohne Reload senden</td><td align="right"><input type="checkbox" class="userscriptOptions" name="middleColumn_forum_postPerAjax"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Beitr&auml;ge werden im Hintergrund gepostet. Ein manueller Refresh der Seite entfällt."></td></tr><tr class="menuparent"><td align="center"></td><td align="left">Editieren ohne Reload</td><td align="right"><input type="checkbox" class="userscriptOptions" name="middleColumn_forum_editPost"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Beitr&auml;ge werden im Hintergrund Editiert. Ein manueller Refresh der Seite entfällt."></td></tr><tr class="menuparent"><td align="center"></td><td align="left">Streams aktualisieren</td><td align="right"><input type="checkbox" class="userscriptOptions" name="leftColumn_streams_reloadStreams"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Aktualisiert die Streams im Hintergund."></td></tr><tr class="menuparent"><td align="center"></td><td align="left">Matchticker aktualisieren</td><td align="right"><input type="checkbox" class="userscriptOptions" name="rightColumn_ticker_reloadTicker"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Aktualisiert den Matchticker im Hintergund."></td></tr><tr class="menuparent"><td align="center"></td><td align="left">Forennavigation aktualisieren</td><td align="right"><input type="checkbox" class="userscriptOptions" name="rightColumn_forum_reloadForum"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Aktualisiert die Navigation des Forums (unten rechts) im Hintergund."></td></tr><tr class="menuparent"><td align="center"></td><td align="left">Vorschaufunktion aktivieren</td><td align="right"><input type="checkbox" class="userscriptOptions" name="middleColumn_forum_preview"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Vorschau f&uuml;r neue Beitr&auml;ge einbinden."></td></tr><tr class="menuparent"><td align="center"><img id="toggle_sub_middleColumn_forum_scrollForNewPage" src="http://readmore.thextor.de/userscript/img/plus_alt_16x16.png" alt="more" title="Weitere Optionen"></td><td align="left">Scrollen bis zum Seitenende l&auml;dt die N&auml;chste</td><td align="right"><input type="checkbox" class="userscriptOptions" name="middleColumn_forum_scrollForNewPage"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Beim ereichen des letzten Posts ggf. die n&auml;chste Seite nachladen."></td></tr><tr class="menufirstchild sub_middleColumn_forum_scrollForNewPage"><td align="center"></td><td align="left">Postbox nach oben verschieben</td><td align="right"><input type="checkbox" class="userscriptOptions" name="middleColumn_forum_hideForum_editboxTop"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Kopiert die Box zum Posten an den Anfang der Seite."></td></tr><tr><td style="width:30px"></td><td></td><td style="width:180px"></td><td style="width:25px"></td></tr><tr class="headline"><td colspan="4">Optische Ver&auml;nderungen</td></tr><tr><td style="width:30px"></td><td></td><td style="width:180px"></td><td style="width:25px"></td></tr><tr class="menuparent"><td align="center"><img id="toggle_sub_rightColumn_forum_hideForum" src="http://readmore.thextor.de/userscript/img/plus_alt_16x16.png" alt="more" title="Weitere Optionen"></td><td align="left">Forum ausblenden und umsortieren</td><td align="right"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Das Forum ausblenden oder umsortieren."></td></tr><tr class="menufirstchild sub_rightColumn_forum_hideForum"><td align="center"></td><td align="left">Komplett ausblenden</td><td align="right"><input type="checkbox" class="userscriptOptions" name="rightColumn_forum_hideForum"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Das komplette Forum ausblenden."></td></tr><tr class="menufirstchild sub_rightColumn_forum_hideForum"><td align="center"><img id="toggle_sub_rightColumn_forum_sections" src="http://readmore.thextor.de/userscript/img/plus_alt_16x16.png" alt="more" title="Weitere Optionen"></td><td align="left">Foren umsortieren</td><td align="right"><input type="checkbox" class="userscriptOptions" name="rightColumn_forum_sections"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Ermöglicht das Umsortieren des Forums."></td></tr><tr class="menusecondchild sub_rightColumn_forum_sections"><td align="center"></td><td align="left">An erster Stelle</td><td align="right"><select size="1" class="userscriptOptions" name="rightColumn_forum_hideForum_0"><option value="">Nichts anzeigen</option><option value="featuredthreads">Featured Threads</option><option value="esportforen">eSport Foren</option><option value="technik">Technik</option><option value="offtopicforen">Offtopic Foren</option><option value="spiele">Spiele</option></select></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Erste Stelle bei der Anzeige der Foren."></td></tr><tr class="menusecondchild sub_rightColumn_forum_sections"><td align="center"></td><td align="left">An zweiter Stelle</td><td align="right"><select size="1" class="userscriptOptions" name="rightColumn_forum_hideForum_1"><option value="">Nichts anzeigen</option><option value="featuredthreads">Featured Threads</option><option value="esportforen">eSport Foren</option><option value="technik">Technik</option><option value="offtopicforen">Offtopic Foren</option><option value="spiele">Spiele</option></select></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Zweite Stelle bei der Anzeige der Foren."></td></tr><tr class="menusecondchild sub_rightColumn_forum_sections"><td align="center"></td><td align="left">An dritter Stelle</td><td align="right"><select size="1" class="userscriptOptions" name="rightColumn_forum_hideForum_2"><option value="">Nichts anzeigen</option><option value="featuredthreads">Featured Threads</option><option value="esportforen">eSport Foren</option><option value="technik">Technik</option><option value="offtopicforen">Offtopic Foren</option><option value="spiele">Spiele</option></select></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Dritte Stelle bei der Anzeige der Foren."></td></tr><tr class="menusecondchild sub_rightColumn_forum_sections"><td align="center"></td><td align="left">An vierter Stelle</td><td align="right"><select size="1" class="userscriptOptions" name="rightColumn_forum_hideForum_3"><option value="">Nichts anzeigen</option><option value="featuredthreads">Featured Threads</option><option value="esportforen">eSport Foren</option><option value="technik">Technik</option><option value="offtopicforen">Offtopic Foren</option><option value="spiele">Spiele</option></select></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Viere Stelle bei der Anzeige der Foren."></td></tr><tr class="menusecondchild sub_rightColumn_forum_sections"><td align="center"></td><td align="left">An f&uuml;nfter Stelle</td><td align="right"><select size="1" class="userscriptOptions" name="rightColumn_forum_hideForum_4"><option value="">Nichts anzeigen</option><option value="featuredthreads">Featured Threads</option><option value="esportforen">eSport Foren</option><option value="technik">Technik</option><option value="offtopicforen">Offtopic Foren</option><option value="spiele">Spiele</option></select></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="F&uuml;nfte Stelle bei der Anzeige der Foren."></td></tr><tr class="menuparent"><td align="center"><img id="toggle_sub_rightColumn_headlines_hideHeadlines" src="http://readmore.thextor.de/userscript/img/plus_alt_16x16.png" alt="more" title="Weitere Optionen"></td><td align="left">Schlagzeilen ausblenden</td><td align="right"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Bestimmte oder alle Schlagzeilen ausblenden"></td></tr><tr class="menufirstchild sub_rightColumn_headlines_hideHeadlines"><td align="center"></td><td align="left">Alle ausblenden</td><td align="right"><input type="checkbox" class="userscriptOptions" name="rightColumn_headlines_hideHeadlines"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Blendet alle Schlagzeilen aus."></td></tr><tr class="menufirstchild sub_rightColumn_headlines_hideHeadlines"><td align="center"></td><td align="left">Counter-Strike ausblenden</td><td align="right"><input type="checkbox" class="userscriptOptions" name="rightColumn_headlines_hideCounterstrike"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Blendet die Counter-Strike Schlagzeilen aus."></td></tr><tr class="menufirstchild sub_rightColumn_headlines_hideHeadlines"><td align="center"></td><td align="left">Starcraft ausblenden</td><td align="right"><input type="checkbox" class="userscriptOptions" name="rightColumn_headlines_hideStarcraft"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Blendet die Starcraft Schlagzeilen aus."></td></tr><tr class="menufirstchild sub_rightColumn_headlines_hideHeadlines"><td align="center"></td><td align="left">DotA ausblenden</td><td align="right"><input type="checkbox" class="userscriptOptions" name="rightColumn_headlines_hideDefenseOfTheAncients"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Blendet die DotA Schlagzeilen aus."></td></tr><tr class="menufirstchild sub_rightColumn_headlines_hideHeadlines"><td align="center"></td><td align="left">League of Legends ausblenden</td><td align="right"><input type="checkbox" class="userscriptOptions" name="rightColumn_headlines_hideLeagueOfLegends"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Blendet die League of Legends Schlagzeilen aus."></td></tr><tr class="menufirstchild sub_rightColumn_headlines_hideHeadlines"><td align="center"></td><td align="left">Warcraft 3 ausblenden</td><td align="right"><input type="checkbox" class="userscriptOptions" name="rightColumn_headlines_hideWarcraft3"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Blendet die Warcraft 3 Schlagzeilen aus."></td></tr><tr class="menufirstchild sub_rightColumn_headlines_hideHeadlines"><td align="center"></td><td align="left">Sonstiges ausblenden</td><td align="right"><input type="checkbox" class="userscriptOptions" name="rightColumn_headlines_hideSonstiges"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Blendet die Sonstigen Schlagzeilen aus."></td></tr><tr class="menuparent"><td align="center"></td><td align="left">Alle Streams ausblenden</td><td align="right"><input type="checkbox" class="userscriptOptions" name="leftColumn_streams_hideStreams"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Alle Streams ausblenden"></td></tr><tr class="menuparent"><td align="center"></td><td align="left">Fixierte Toolbar</td><td align="right"><input type="checkbox" class="userscriptOptions" name="miscellaneous_fixedToolbar"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Die Toolbar wird am oberen Fensterrand fixiert."></td></tr><tr class="menuparent"><td align="center"></td><td align="left">Ticker ausblenden</td><td align="right"><input type="checkbox" class="userscriptOptions" name="rightColumn_ticker_hideTicker"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Der Ticker wird komplett ausgeblendet."></td></tr><tr class="menuparent"><td align="center"></td><td align="left">Wer? Wohin? Warum? ausblenden</td><td align="right"><input type="checkbox" class="userscriptOptions" name="leftColumn_www_hideWww"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Blendet die komplette Wer? Wohin? Warum? Sektion aus."></td></tr><tr class="menuparent"><td align="center"></td><td align="left">Bilderlinks umwandeln</td><td align="right"><input type="checkbox" class="userscriptOptions" name="miscellaneous_convertImageLinks"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Wandelt Bilderlinks automatisch in Bilder um."></td></tr><tr><td style="width:30px"></td><td></td><td style="width:180px"></td><td style="width:25px"></td></tr><tr class="headline"><td colspan="4">Sonstiges</td></tr><tr><td style="width:30px"></td><td></td><td style="width:180px"></td><td style="width:25px"></td></tr><tr class="menuparent"><td align="center"></td><td align="left">Notizen</td><td align="right"><input type="checkbox" class="userscriptOptions" name="miscellaneous_note"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Ermöglicht es für jeden Forenuser eine Notiz zu hinterlegen."></td></tr><tr class="menuparent"><td align="center"></td><td align="left">Titel / Tab umsortieren</td><td align="right"><input type="checkbox" class="userscriptOptions" name="miscellaneous_reSortTitle"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Wenn diese Option aktiviert ist, wird der Threadname an den Anfang des Titels gestellt. Offene Tabs können so besser den verschiedenen Threads zugeordnet werden."></td></tr><tr class="menuparent"><td align="center"></td><td align="left">Readmore Extrabuttons</td><td align="right"><input type="checkbox" class="userscriptOptions" name="miscellaneous_extraButtons"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Mehr Buttons um einen Post im Forum ansehnlicher zu gestalten."></td></tr><tr class="menuparent"><td align="center"></td><td align="left">Youtubeplayer ersetzen</td><td align="right"><input type="checkbox" class="userscriptOptions" name="miscellaneous_convertYoutube"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Ersetzt den Youtubeplayer durch einen einfachen Link."></td></tr><tr class="menuparent"><td align="center"></td><td align="left">Avataranimationen anhalten</td><td align="right"><input type="checkbox" class="userscriptOptions" name="miscellaneous_stopAvatarAnimation"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Die Animation von Avataren stoppen."></td></tr><tr class="menuparent"><td align="center"></td><td align="left">Button zum Hochscrollen anzeigen</td><td align="right"><input type="checkbox" class="userscriptOptions" name="miscellaneous_buttonScrollUp"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Im Forum wird ein Icon eingefügt, beim betätigen wird zum ersten Post gesprungen."></td></tr><tr class="menuparent"><td align="center"></td><td align="left">Button zum Runterscrollen anzeigen</td><td align="right"><input type="checkbox" class="userscriptOptions" name="miscellaneous_buttonScrollDown"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Im Forum wird ein Icon eingefügt, beim betätigen wird zum letzten Post gesprungen."></td></tr><tr class="menuparent"><td align="center"></td><td align="left">In der Suche zum letzten Post springen</td><td align="right"><input type="checkbox" class="userscriptOptions" name="middleColumn_search_jump_to_last_page"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Hinter den Suchergebnissen wird ein Icon eingefügt, beim betätigen wird zum letzten Post gesprungen."></td></tr><tr class="menuparent"><td align="center"></td><td align="left">Last-Page-Pfeil springt zum letzten Post</td><td align="right"><input type="checkbox" class="userscriptOptions" name="miscellaneous_lastPageJumpToLastPost"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Nach dem Bet&auml;tigen des Pfeils (ganz Recht im Forum, hinter den Threads) wird zum aktuellsten Post gesprungen."></td></tr><tr><td style="width:30px"></td><td></td><td style="width:180px"></td><td style="width:25px"></td></tr></table></div><div class="rmus-options-footer"><div style="float: left"><input class="btn-rm imexp" type="button" id="importUserscriptOptions" value="Import">&nbsp;<input class="btn-rm imexp" type="button" id="exportUserscriptOptions" value="Export"></div><input class="btn-rm" type="button" id="closeUserscriptOptions" value="Abbrechen">&nbsp;<input class="btn-rm primary" type="button" value="Speichern" id="saveUserscriptOptions"><div id="rmus-options-imexport"><div class="rmus-options-imexport-help"></div><textarea class="btn-rm"></textarea><input class="btn-rm primary" style="margin-right: 4px" type="button" value="Importieren" id="importUserscriptOptionsBtn"><input class="btn-rm" type="button" value="Schlie&szlig;en" id="imexportUserscriptOptionsCloseBtn"></div></div></div></div><div id="userscriptOptionsOverlay"></div>');
        _options.insertOptionsLink();

        // Eventhandler für die Optionen setzen
        $('#saveUserscriptOptions').click(function () {
            if (_options.saveOptions()) {
                _options.hideOptions();
            }
        });

        $('#openUserscriptOptions').click(function () {
            _options.showOptions();
        });

        $('#closeUserscriptOptions,#userscriptOptionsOverlay').click(function () {
            _options.hideOptions();
        });

        $('div#userscriptOptions input.imexp').click(function () {
            var $this = $(this),
                imexportContainer = $('div#rmus-options-imexport'),
                importBtn = $('div#rmus-options-imexport input#importUserscriptOptionsBtn'),
                helpContainer = $('div.rmus-options-imexport-help', imexportContainer),
                textarea = $('textarea', imexportContainer);

            imexportContainer.hide();

            if ($this.prop('id') === 'importUserscriptOptions') {
                importBtn.show();
                helpContainer.text('Füge den exportierten JSON-String in das Textfeld ein:');
                textarea.val('');
                textarea.focus();
            } else {
                var opts = _options.getOptionsRaw();

                if (opts === 'null') {
                    alert('Es sind keine gespeicherten Optionen zum Exportieren vorhanden. Bitte speichere deine Optionen zuerst ab.');
                    return;
                }

                importBtn.hide();
                helpContainer.text('Kopiere diesen JSON-String für den späteren Import:');
                textarea.val(opts);
            }

            imexportContainer.slideToggle(250, function () {
                textarea.select();
            });
        });
        $('#imexportUserscriptOptionsCloseBtn').click(function () {
            $('div#rmus-options-imexport').hide();
        });
        $('#importUserscriptOptionsBtn').click(function () {
            var opts = $('div#rmus-options-imexport textarea').val(),
                validJson = true;

            try {
                JSON.parse(opts);
            } catch (e) {
                validJson = false;
            }

            if (validJson) {
                _options.backupOptions();
                _options.setOptionsRaw(opts);

                // Optionen schließen, damit sie neu geladen werden beim nächsten öffnen.
                _options.hideOptions();

                alert('Die Optionen wurden erfolgreich importiert! Du musst die Seite neu laden, damit die Optionen vollständig übernommen werden.');
            } else {
                alert('Die Optionen konnten nicht importiert werden! Der eingegebene Text ist kein valider JSON-String.');
            }
        });

        // Click Handler für Desktop-Notifications um die Berechtigung einzuholen
        $('input#miscellaneous_reloadMessages_desktopNotifications').click(function () {
            var checkbox = $(this),
                uncheckBox = function () {
                    checkbox.attr('checked', false);
                };

            if (checkbox.is(':checked')) {
                var notification = new Notify('Notifications aktiviert!', {
                    //tag: 'activated-notifications',
                    icon: _messages.getIcon(),
                    body: 'Notifications sind nun für alle Nachrichten aktiviert.',
                    permissionGranted: function () {
                        notification.show();
                    },
                    permissionDenied: function () {
                        alert('Du hast die nötige Berechtigung für Notifications nicht erteilt. Bitte überprüfe, ob Notifications in deinen Browser-Einstellungen für readmore.de blockiert sind.');
                        uncheckBox();
                    }
                });

                if (!notification.isSupported()) {
                    alert('Diese Funktion wird von deinem Browser derzeit leider nicht unterstützt.');
                    uncheckBox();
                    return;
                }

                if (notification.needsPermission()) {
                    notification.requestPermission();
                    return;
                }

                notification.show();
            }
        });

        // Auf- und Einklappen von Unterkategorien
        $('#toggle_sub_middleColumn_forum_reloadPosts_readNewPosts').click(function () {
            $('.sub_middleColumn_forum_reloadPosts_readNewPosts').toggle();
            $('.sub_middleColumn_forum_reloadPosts_markNewPosts').css('display', 'none');
            $('.sub_middleColumn_forum_reloadPosts_endlessPage').css('display', 'none');
        });
        $('#toggle_sub_middleColumn_forum_reloadPosts_endlessPage').click(function () {
            $('.sub_middleColumn_forum_reloadPosts_endlessPage').toggle();
        });
        $('#toggle_sub_middleColumn_forum_reloadPosts_markNewPosts').click(function () {
            $('.sub_middleColumn_forum_reloadPosts_markNewPosts').toggle();
        });
        $('#toggle_sub_rightColumn_headlines_hideHeadlines').click(function () {
            $('.sub_rightColumn_headlines_hideHeadlines').toggle();
        });
        $('#toggle_sub_rightColumn_forum_hideForum').click(function () {
            $('.sub_rightColumn_forum_hideForum').toggle();
            $('.sub_rightColumn_forum_sections').css('display', 'none');
        });
        $('#toggle_sub_rightColumn_forum_sections').click(function () {
            $('.sub_rightColumn_forum_sections').toggle();
        });
        $('#toggle_sub_miscellaneous_reloadMessages').click(function () {
            $('.sub_miscellaneous_reloadMessages').toggle();
        });
        $('#toggle_sub_miscellaneous_ignoreUser').click(function () {
            $('.sub_miscellaneous_ignoreUser').toggle();
        });
        $('#toggle_sub_middleColumn_forum_scrollForNewPage').click(function () {
            $('.sub_middleColumn_forum_scrollForNewPage').toggle();
        });

        // Icon fuer das Auf- und Zuklappen anpassen
        $('[id*=toggle_sub]').click(function () {
            var img = $(this).attr('src').trim();
            if (img == 'http://readmore.thextor.de/userscript/img/plus_alt_16x16.png') $(this).attr('src', 'http://readmore.thextor.de/userscript/img/minus_alt_16x16.png');
            else $(this).attr('src', 'http://readmore.thextor.de/userscript/img/plus_alt_16x16.png');
        });

        // Prüfen ob eine neue Version erschienen ist
        _update.checkVersion();
    };

    this.startIntervalReloadPosts = function () {
        window.setInterval(function () {

            /*        // content auslesen
             if (!content){
             content = JSON.parse(localStorage.getItem('userscriptContent'));
             }
             */
            // Wenn wir uns in einem Thread befinden
            if (_content.getContent('forum_thread')) {

                // Posts nachladen
                if (_options.getOption('middleColumn_forum_reloadPosts_readNewPosts') === 'checked') {
                    _reloadPosts.readNewPosts();
                }

                // Avataranimationen stoppen
                if (_options.getOption('miscellaneous_stopAvatarAnimation') === 'checked') {
                    _miscellaneous.stopAvatarAnimation();
                }
            }
        }, (parseInt(_options.getOption('middleColumn_forum_reloadPosts_timeToWait'), 10) > 2) ? parseInt(_options.getOption('middleColumn_forum_reloadPosts_timeToWait'), 10) * 1000 : 3000);
    };

    this.startInvervalRapid = function () {
        window.setInterval(function () {
            if (_content.getContent('forum_thread')) {
                if (_options.getOption('middleColumn_forum_reloadPosts_readNewPosts') === 'checked') {
                    if (_options.getOption('middleColumn_forum_reloadPosts_markNewPosts') === 'checked') {
                        // (de)-Markieren
                        _reloadPosts.unmarkNewPosts();

                        // Favicon verändern
                        if (_options.getOption('middleColumn_forum_reloadPosts_changeFavicon') === 'checked') {
                            _reloadPosts.changeFavicon();
                        }

                        // Postanzahl im Tab anzeigen
                        if (_options.getOption('middleColumn_forum_reloadPosts_showNewPostsTitle') === 'checked') {
                            _reloadPosts.showNewPostsTitle();
                        }
                    }
                }

                // Beim ereichen des letzten Posts ggf. die nächste Seite nachladen. Nur wenn wir uns nicht auf der letzten Seite befinden!
                if (_options.getOption('middleColumn_forum_scrollForNewPage') === 'checked' && $.trim($('div.floatl.m2.elf').html()).substr($.trim($('div.floatl.m2.elf').html()).length - 4) != '</b>') {
                    _scrollForNewPage.insertPosts();
                }
            }
        }, 500);
    };

    this.startInvervalSlow = function () {
        window.setInterval(function () {

            // Außer auf dem Profil und der Guides
            if (!_content.getMultipleContent(['profile', 'guides'], 'OR')) {

                // Streams und Forennavigation nachladen (Nur, wenn auch eingeblendet)
                if (_options.getOption('rightColumn_forum_reloadForum') === 'checked' && _options.getOption('rightColumn_forum_hideForum') != 'checked'
                    || _options.getOption('leftColumn_streams_reloadStreams') === 'checked' && _options.getOption('options.leftColumn_streams_hideStreams') != 'checked'
                    || _options.getOption('rightColumn_ticker_reloadTicker') === 'checked' && _options.getOption('rightColumn_ticker_hideTicker') != 'checked') {

                    _reloadPageData.readPage();

                    // Forennavigation
                    if (_options.getOption('rightColumn_forum_hideForum') !== 'checked'
                        && _options.getOption('rightColumn_forum_reloadForum') === 'checked') {

                        // Lag im FF vermindern
                        window.setTimeout(_forumNavigation.reloadForum(), 2000);
                    }

                    // Streams
                    if (_options.getOption('leftColumn_streams_hideStream') != 'checked'
                        && _options.getOption('leftColumn_streams_reloadStreams') === 'checked') {

                        // Lag im FF vermindern
                        window.setTimeout(_streams.reloadStreams(), 4000);
                    }

                    // Ticker
                    if (_options.getOption('rightColumn_ticker_hideTicker') != 'checked'
                        && _options.getOption('rightColumn_ticker_reloadTicker') === 'checked') {

                        // Lag im FF vermindern
                        window.setTimeout(_ticker.reloadTicker(), 6000);
                    }
                }
            }

            // PMs auf jeder Seite überprüfen (Usernavi buggy, daher nicht Teil der mainPageData)
            if (_options.getOption('miscellaneous_reloadMessages') === 'checked') {
                _messages.checkForNewMessages();
            }

        }, 15000);
    };
}

/**
 * Funktion zum ersetzen von Sonderzeichen.
 * @param text
 * @returns {String}
 */
ReadmoreUserscript.replaceSpecialChars = function (text) {
    var replacePost = {};

    replacePost['%C3%A4'] = '%E4';		// ä
    replacePost['%C3%84'] = '%C4';		// Ä
    replacePost['%C3%B6'] = '%F6';		// ö
    replacePost['%C3%96'] = '%D6';		// Ö
    replacePost['%C3%BC'] = '%FC';		// ü
    replacePost['%C3%9C'] = '%DC';		// Ü
    replacePost['%C3%9F'] = '%DF';		// ß
    replacePost['%C3%9C'] = '%DC';		// <
    replacePost['%C3%9F'] = '%DF';		// >
    replacePost['%C2%B0'] = '%B0';		// °
    replacePost['%C2%B4'] = '%B4';		// ´
    replacePost['%C3%A1'] = '%E1';		// á
    replacePost['%C3%81'] = '%C1';		// Á
    replacePost['%C3%A2'] = '%E2';		// â
    replacePost['%C3%82'] = '%C2';		// Â
    replacePost['%C3%A9'] = '%E9';		// é
    replacePost['%C3%89'] = '%C9';		// É
    replacePost['%C3%AA'] = '%EA';		// ê
    replacePost['%C3%8A'] = '%CA';		// Ê
    replacePost['%C3%AD'] = '%ED';		// í
    replacePost['%C3%8D'] = '%CD';		// Í
    replacePost['%C3%AE'] = '%EE';		// î
    replacePost['%C3%8E'] = '%CE';		// Î
    replacePost['%C3%B3'] = '%F3';		// ó
    replacePost['%C3%93'] = '%D3';		// Ó
    replacePost['%C3%B4'] = '%F4';		// ô
    replacePost['%C3%94'] = '%D4';		// Ô
    replacePost['%C3%BA'] = '%FA';		// ú
    replacePost['%C3%9A'] = '%DA';		// Ú
    replacePost['%C3%BB'] = '%FB';		// û
    replacePost['%C3%9B'] = '%DB';		// Û
    replacePost['%C2%A7'] = '%A7';		// §

    replacePost['%E2%82%AC'] = '%80';		    // €
    replacePost['%E2%95%AF'] = '%26#9583;';		// ╯
    replacePost['%E2%96%A1'] = '%26#9633;';		// □
    replacePost['%EF%BC%89'] = '%26#65289;';	// ）
    replacePost['%EF%B8%B5'] = '%26#65077;';	// ︵
    replacePost['%E2%94%BB'] = '%26#9531;';		// ┻
    replacePost['%E2%94%81'] = '%26#9473;';		// ━

    // Sonderzeichen ersetzen
    $.each(replacePost, function (key, value) {
        var regEx = new RegExp(key, 'g');
        text = text.replace(regEx, value);
    });

    return text;
};
/**
 * ReloadPageData
 * ==============
 *
 * Ermöglicht das Posten ohne Seitenrefresh. Der Post wird über
 * Ajax abgeschickt, danach wird die Seite im Hintergrund nachgeladen.
 */

function ReloadPageData(){

    var _self = this;

    /**
     * HTML String der Readmore-Stream-Übersicht,
     * daraus werden verschiedene Teile der Page geupdated.
     * @type {string}
     * @private
     */
    var _pageData = '';

    /**
     * Gibt den HTML String zurück
     * @returns {string}
     */
    this.getPageData = function(){
      return _pageData;
    };

    /**
     * Liest die Seite neu ein.
     * Die Funktion ist asynchron.
     * @returns {boolean}
     */
    this.readPage = function(){
        $.ajax({
            type: 'POST',
            async: true,
            cache: false,
            url: 'http://www.readmore.de/index.php?cont=userstream_overview',
            contentType: 'text/html; charset=iso-8859-1;',
            dataType: 'html',
            timeout: 10000,
            success: function (data) {
                if(data != null){
                    // Prüft auf Fehler beim Laden der Seite
                    if (data.search('<div class="error">') != -1) {
                        _self.readPage();
                    } else {
                        _pageData = data.replace(/(\r\n|\n|\r)/gm,' ').replace(/\s+/g," ");
                    }
                }
            },
            beforeSend: function(jqXHR) {
                jqXHR.overrideMimeType('text/html;charset=iso-8859-1');
            }
        });
    };
}
/**
 * ReloadPosts
 * ===========
 *
 * Ermöglicht das nachladen von Posts im Hintergrund. Bietet außerdem
 * Methoden um das Favicon zu verändern oder die neuen Posts einzufärben.
 *
 * @param _options          {Options}
 * @param _ignoreUser       {IgnoreUser}
 * @param _editPosts        {EditPosts}
 * @param _notes            {Notes}
 * @param _miscellaneous    {Miscellaneous}
 * @constructor
 */

function ReloadPosts(_options, _ignoreUser, _editPosts, _notes, _miscellaneous) {
    var _postcount = 0;
    var _finishedPages = 0;
    var _currentPage = 1;
    var _oldLimit = 0;
    var _oldJumpLimit = 0;
    var _threadlink = '';
    var _oldTitle = '';
    var _$postTableElm = null;
    var _$titleElm = null;
    var _$headElm = null;
    var _$jumpToChkElm = null;
    var _unseenPosts = [];
    var _markPostColor = {
        hex: '#EEEEEE',
        rgb: 'rgb(238, 238, 238)'
    };

    /**
     * Bereitet das Nachladen vor.
     */
    this.init = function () {
        _$postTableElm = $('table.elf.forum.p2.bogray2');
        _$titleElm = $('title');
        _$headElm = $('head');
        _oldTitle = _$titleElm.text();

        _readCurrentPage();
        _readThreadLink();
        _readPostcount();
        _setMarkPostColor();
    };

    /**
     * Gibt den Postcount zurück
     * @returns {number}
     */
    this.getPostcount = function () {
        return _postcount;
    };

    this.getThreadlink = function () {
        return _threadlink;
    };

    this.setPostcount = function (postcount) {
        _postcount = postcount;
    };

    /**
     * Lädt die neuen Posts nach und führt anschließend eine ganze Reihe
     * an Funktionen aus (Favicon anpassen, Markieren der Posts, ...)
     */
    this.readNewPosts = function () {
        if (_isLastpage()) {
            // Seiten endlos erweitern
            if (_options.getOption('middleColumn_forum_reloadPosts_endlessPage') == 'checked') {
                _prepareEndlessPage();
            }

            // Der eigentliche Reload
            $.ajax({
                type: 'POST',
                async: true,
                cache: false,
                url: _threadlink + '&pagenum=' + _currentPage,
                contentType: 'text/html; charset=iso-8859-1;',
                dataType: 'html',
                success: function (data) {
                    var posts = data.match(/\<tr class=\"post\_[^"]+\"\>[^]+?\<\/tr\>/g);
                    if (posts != null) {
                        var footer = data.match(/\<tr class=\"cellheadercolor footer\_[^"]+\"\>[^]+?\<\/tr\>/g);
                        var oldPosts = (25 * _finishedPages);
                        var postNumber = posts.length + oldPosts;
                        var i = _postcount;

                        for (i; i < postNumber; i++) {
                            _$postTableElm.append(posts[i - oldPosts]);
                            _$postTableElm.append(footer[i - oldPosts]);

                            _unseenPosts.push(parseInt($('[class^=post_]:last').offset().top, 10));  // Zum markieren der neuen Posts
                            _postcount++;
                        }

                        _oldLimit = window.pageYOffset + (window.innerHeight * 0.55);

                        // Beiträge aus den neuen Posts ignorieren
                        if (_options.getOption('miscellaneous_ignoreUser') == 'checked') {
                            _ignoreUser.ignore(true, false, false);
                        }

                        // Edit vorbereiten
                        if (_options.getOption('middleColumn_forum_editPost') == 'checked') {
                            _editPosts.initializeEvent();
                        }

                        // Notzizen einblenden
                        if (_options.getOption('miscellaneous_note') == 'checked') {
                            _notes.init(false);
                        }

                        // Youtubeplayer ersetzen
                        if (_options.getOption('miscellaneous_convertYoutube') == 'checked') {
                            _miscellaneous.convertYoutube();
                        }

                        // Ungelesene Posts makieren
                        if (_options.getOption('middleColumn_forum_reloadPosts_markNewPosts') === 'checked') {
                            _markNewPosts();
                        }
                    }
                },
                beforeSend: function (jqXHR) {
                    jqXHR.overrideMimeType('text/html;charset=iso-8859-1');
                }
            });

            // Rausfinden ob eine neue Seite existiert
            if (_options.getOption('middleColumn_forum_reloadPosts_endlessPage') != 'checked') {
                _checkForNewPage();
            }
        }
    };

    /**
     * Entfernt die Markierung und bereits gelesenen Posts.
     */
    this.unmarkNewPosts = function () {
        var i = 0;
        var limit = window.pageYOffset + (window.innerHeight * 0.55);
        var deleteArray = [];

        $(_unseenPosts).each(function (index, value) {
            // Nur demarkieren, wenn wir das Limit überschritten und uns bewegt / gescrollt haben
            if (value < limit && limit != _oldLimit) {
                $('[class^=post_]:eq(' + (_postcount - (_unseenPosts.length) + i) + ')').css('background-color', '#FFF');
                i++;
                deleteArray.push(index);
            }
        });

        // Unmarkierte / Gelesene Posts aus dem Array entfernen
        $(deleteArray).each(function (index, value) {
            _unseenPosts.splice(value, 1);
        });
    };

    /**
     * Zeigt die Anzahl der neuen Posts im Titel / Tab an.
     */
    this.showNewPostsTitle = function () {
        var title   = _oldTitle;
        var $elm    = $('title');

        if (_unseenPosts.length) {
            title = '(' + _unseenPosts.length + ') ' + title;
        }

        if ($elm.text() !== title) {
            $elm.remove();
            $('head').append('<title>' + title + '</title>');
        }
    };

    /**
     * Tauscht das Favicon falls ein ungelesener Post existiert
     */
    this.changeFavicon = function () {
        var favIconElm = _$headElm.find('link[rel="shortcut icon"]');
        var currentIcon = favIconElm.attr('href');

        if (_unseenPosts.length > 0 && currentIcon == '/favicon.ico') {
            favIconElm.remove();
            _$headElm.append('<link rel="shortcut icon" type="image/png" href="http://readmore.thextor.de/userscript/img/favicon.png">');
        }
        else {
            if (_unseenPosts.length == 0 && currentIcon == 'http://readmore.thextor.de/userscript/img/favicon.png') {
                favIconElm.remove();
                _$headElm.append('<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">');
            }
        }
    };

    /**
     * Springt automatisch zu neuen Posts.
     */
    this.jumpToNewPosts = function () {
        if (_$jumpToChkElm === null) {
            $('a.bookmark').after('<input style="margin-left: 2px;" type="checkbox" id="userscript_enable_jump" name="userscript_enable_jump">');
            _$jumpToChkElm = $('#userscript_enable_jump');
        }
        else{
            if (_unseenPosts.length > 0) {
                if (_$jumpToChkElm.prop('checked')) {
                    var jumpto = _unseenPosts[0] - (window.innerHeight * 0.55) + 25;
                    if (jumpto <= _oldJumpLimit) {
                        jumpto = _oldJumpLimit + 25;
                    }

                    _oldJumpLimit = jumpto;
                    window.scrollTo(0, jumpto);
                }
            }
        }
    };

    /**
     * Überschreibt die Farbe für die Markierung der Posts.
     * Wenn ein valider Hexwert in den Optionen angegeben ist.
     * @private
     */
    var _setMarkPostColor = function () {
        var hexColor = _options.getOption('middleColumn_forum_reloadPosts_markPostColor') | [];

        // Nur wenn eine HEX-Zahl eingegeben wurde
        if (hexColor[0] === '#' && hexColor === 7) {
            _markPostColor.hex = hexColor;
            _markPostColor.rgb = "rgb(" + parseInt(_markPostColor.hex.substr(1, 2), 16).toString() + ", " + parseInt(_markPostColor.hex.substr(3, 2), 16).toString() + ", " + parseInt(_markPostColor.hex.substr(5, 2), 16).toString() + ")";
        }
    };

    /**
     * Markiert ungelesene Posts.
     * @private
     */
    var _markNewPosts = function () {
        var numberOfNewPosts = _unseenPosts.length;
        var i = 1;

        for (i; i <= numberOfNewPosts; i++) {
            var $elm = $('[class^=post_]:eq(' + (_postcount - i) + ')');

            // Überprüfen ob der Posts bereits markiert ist, wenn ja die Schleife verlassen
            if ($.trim(($elm.css('background-color'))) == _markPostColor.rgb) {
                break;
            }
            $elm.css('background-color', _markPostColor.rgb);
        }
    };

    /**
     * Liest die aktuelle Anzahl der Posts auf der aktuellen
     * Seite aus.
     * @private
     */
    var _readPostcount = function () {
        _postcount = $('[class^=post_]').length;
    };

    /**
     * Prüft ob wir uns auf der letzten Seite eines Threads befinden.
     * @returns {boolean}
     * @private
     */
    var _isLastpage = function () {
        var lastPage = false;
        var html = $.trim($('div.floatl.m2.elf').html());

        if (html.substr(html.length - 4) === '</b>') {
            lastPage = true;
        }

        return lastPage;
    };

    /**
     * Ermöglicht das endlose Nachladen auf einer Seite.
     * @private
     */
    var _prepareEndlessPage = function () {
        if (_postcount == (25 + (25 * _finishedPages))) {
            _finishedPages++;
            _currentPage++;
        }
    };

    /**
     * Liest die aktuelle Seitenzahl aus.
     * @private
     */
    var _readCurrentPage = function () {
        _currentPage = parseInt($('div.floatl.m2.elf').html().match(/<b>(.+?)<\/b>/)[1], 10);
    };

    /**
     * Liest den Link der aktuellen Seite ohne Seitenzahl aus.
     * @private
     */
    var _readThreadLink = function () {
        _threadlink = $(location).attr('href').replace(/\&pagenum=.+$/, '');
    };

    /**
     * Prüft ob eine neue Seite verfügbar und und blendet ggf.
     * eine Meldung ein.
     * @private
     */
    var _checkForNewPage = function () {
        if (_options.getOption('middleColumn_forum_reloadPosts_checkForNewPage') == 'checked') {
            if (_postcount === (25 + (25 * _finishedPages)) && $('#userscriptNewPage').length < 1) {
                $.ajax({
                    type: 'POST',
                    async: true,
                    cache: false,
                    url: _threadlink + '&pagenum=' + (_currentPage + 1),
                    contentType: 'text/html; charset=iso-8859-1;',
                    dataType: 'html',
                    success: function (data) {
                        var posts = data.match(/\<tr class=\"post\_[^"]+\"\>[^]+?\<\/tr\>/g);
                        if (posts != null) {
                            $('table.elf.forum.p2:last').after('<br/><div id="userscriptNewPage" style="width:520px; height: 23px; background-color: #2B91FF; text-align: right; vertical-align:middle; display:table-cell"><a style="color: #fff; font-weight: bold; padding-right: 10px;" href="' + _threadlink + '&pagenum=' + (_currentPage + 1) + '">Zur n&auml;chsten Seite</a></div>');
                        }
                    },
                    beforeSend: function (jqXHR) {
                        jqXHR.overrideMimeType('text/html;charset=iso-8859-1');
                    }
                });
            }
        }
    };
}
/**
 * ScrollForNewPage
 * ================
 *
 * Beim Runterscrollen werden neue Seiten nachgeladen und angezeigt.
 */

function ScrollForNewPage(_reloadPosts, _ignoreUser, _notes) {
    var _oldPosts = 0;

    this.insertPosts = function () {
        var limit = parseInt($('#c_comment').offset().top, 10) - 190;
        var position = window.pageYOffset + (window.innerHeight * 0.55);
        if (position >= limit) {
            // Der eigentliche Reload
            $.ajax({
                type: 'POST',
                async: false,
                cache: false,
                url: String(_reloadPosts.getThreadlink() + '&pagenum=' + (_reloadPosts.getPostcount() + 1)),
                contentType: 'text/html; charset=iso-8859-1;',
                dataType: 'html',
                success: function (data) {
                    var posts = data.match(/\<tr class=\"post\_[^"]+\"\>[^]+?\<\/tr\>/g);
                    if (posts != null) {
                        var postCharLenth = JSON.stringify(posts).length;
                        var $postsTable = $('table.elf.forum.p2.bogray2');

                        if (postCharLenth !== _oldPosts) {
                            _oldPosts = postCharLenth;

                            var footer = data.match(/\<tr class=\"cellheadercolor footer\_[^"]+\"\>[^]+?\<\/tr\>/g);
                            for (i = 0, k = parseInt(posts.length, 10); i < k; i++) {
                                $postsTable.append(posts[i]);
                                $postsTable.append(footer[i]);
                            }

                            _reloadPosts.setPostcount(_reloadPosts.getPostcount() + 1);

                            // Beiträge aus den neuen Posts ignorieren
                            if (Options.getOption('miscellaneous_ignoreUser') == 'checked') {
                                _ignoreUser.ignore(true, false, false);
                            }
                            // Notzizen einblenden
                            if (Options.getOption('miscellaneous_note') == 'checked') {
                                _notes.init(false);
                            }
                        }
                    }
                },
                beforeSend: function (jqXHR) {
                    jqXHR.overrideMimeType('text/html;charset=iso-8859-1');
                }
            });
        }
    };

    this.editboxTop = function () {
        var $content = $('#content');

        $content.find('h1:first').after('<a id="RMUSeditboxTop" href="javascript:void(0);" style="float: right;" onclick="$(\'#content h1:first\').after($(\'form[name=submitpost]\')); $(this).css(\'display\',\'none\'); $(\'#RMUSeditboxBottom\').css(\'display\',\'\');">Editbox anzeigen<br /><br /></a>');
        $content.find('br.clear:last').after('<a id="RMUSeditboxBottom" href="javascript:void(0);" style="float: right; display: none;" onclick="$(\'#content br.clear:last\').after($(\'form[name=submitpost]\')); $(this).css(\'display\',\'none\'); $(\'#RMUSeditboxTop\').css(\'display\',\'\');">Editbox anzeigen<br /><br /></a>');
    };
}
/**
 * Streams
 * =======
 *
 * Ausblenden und Reloaden von Streams.
 */

function Streams(_reloadPageData) {
    this.hideStreams = function () {
        $('#leftc>div.block:eq(1), #leftc>div.block:eq(2), #leftc>div.block:eq(4), .line2:eq(1), .line2:eq(2), .line2:eq(0)').css('display', 'none');
    };

    this.reloadStreams = function () {
        var $pageData = $(_reloadPageData.getPageData());
        var caster = $pageData.find('div.frontpage_stream:first').html();
        var player = $pageData.find('div.frontpage_stream:last').html();
        var user = $pageData.find('#profilestream').html();

        $('div.frontpage_stream:first').html(caster);
        $('div.frontpage_stream:last').html(player);
        $('#profilestream').html(user);
    };
}
function Ticker(_reloadPageData) {
    this.hideTicker = function () {
        $('#tickr, div.line3:eq(0), div.line3:eq(1)').css('display', 'none');
    };

    this.reloadTicker = function () {
        var reloadData = $(_reloadPageData.getPageData()).find('#nav_matchticker').html();

        if (reloadData && reloadData.length > 0) {
            $('#nav_matchticker').html(reloadData);
        }

        return false;
    };
}
/**
 * Update
 * ======
 *
 * Pseudoklasse um zu checken ob ein Update verfügbar ist. Schaut einfach im Thread nach
 * ob sich die Versionsnummer verändert hat. Autoupdate ist leider im Userscript nicht möglich,
 * für die Extensions ist die Funktion eigentlich überflüssig.
 * @param _options {Options}
 */

function Update(_options){

    /**
     * Aktueller Timestamp
     * @type {number}
     * @private
     */
    var _today = +new Date();

    /**
     * Aktuelle Versionsnummer
     * @type {string}
     * @private
     */
    var _currentVersion = _options.getVersion();

    /**
     * Zeigt in der Userbar den Hinweis an, dass eine neue Version des Userscriptes
     * verfügbar ist und verlinkt auf den Thread.
     * @private
     */
    var _showUpdateMsg = function(){
        $('div.floatl.vcenter.elf.dgray:last').append('<a style="color: #F00; margin-left: 10px;" href="/index.php?cont=forum/thread&threadid=111239&pagenum=1">(Update verf&uuml;gbar!)</a>');
    };

    /**
     * Feuert den Ajax Request ab um die Versionen miteinander zu vergleichen.
     * @private
     */
    var _refreshLatestVersion = function(){
        $.ajax({
            type: 'POST',
            async: true,
            cache: true,
            url: 'index.php?cont=forum/thread&threadid=111239&pagenum=1',
            contentType: 'text/html; charset=iso-8859-1;',
            dataType: 'html',
            success: function (data) {
                var posts = data.match(/\<tr class=\"post\_[^"]+\"\>[^]+?\<\/tr\>/g);

                if (posts !== null) {
                    var latestVersion   = $.trim(posts[0].match(/<span class="i">-(.+?)-<\/span>/)[1]);

                    if (_compareVersions(latestVersion, _currentVersion)) {
                        _showUpdateMsg();
                    }

                    localStorage.setItem('lastVersionCheck', JSON.stringify({
                        version: latestVersion,
                        checkDate: _today
                    }));
                }
            }
        });
    };

    /**
     * An die Funktionen werden die Versionsnummern im Format x.x.x übergeben.
     * Ist die erste Versionsnummer größer wird true, sonst false zurückgegeben. Bei der alten Methode konnte
     * es Probleme mit Versionsnummern geben (2.10.1 > 3.1.1).
     * @param v1 {String}
     * @param v2 {String}
     * @returns {boolean}
     * @private
     */
    var _compareVersions = function(v1, v2){
        var version1    = v1.split('.');
        var version2    = v2.split('.');
        var returnVal   = false;

        if      (version1[0] > version2[0]) returnVal = true;
        else if (version1[1] > version2[1]) returnVal = true;
        else if (version1[2] > version2[2]) returnVal = true;

        return returnVal;
    };

    /**
     * Triggert die Prüfung ob eine neue Version verfügbar ist. Ajax Request wird nur abgefeuert wenn die letzte
     * Prüfung 4 Stunden alt ist.
     */
    this.checkVersion = function(){
        var lastVersionCheckJSON    = localStorage.getItem('lastVersionCheck');
        var lastVersionCheck        = {};

        if (lastVersionCheckJSON) {
            lastVersionCheck = JSON.parse(lastVersionCheckJSON);
            if (lastVersionCheck.checkDate) {

                // Erst aus der Funktion springen wenn _today größer als der letzte Checkdatum + 4 Stunden ist,
                // ansonsten wird die Prüfung durchgeführt
                if (_today < (lastVersionCheck.checkDate + 4*60*60*1000)){

                    // Ist die cached Version neuer als die aktuelle Version?
                    if (_compareVersions(lastVersionCheck.version, _currentVersion)) {
                        _showUpdateMsg();
                    }

                    // Arbeit ist getan, aus der Funktion springen!
                    return;
                }
            }
        }

        // Refresh starten!
        _refreshLatestVersion();
    };
}
var readmoreUserscript = new ReadmoreUserscript();

readmoreUserscript.start();
readmoreUserscript.startIntervalReloadPosts();
readmoreUserscript.startInvervalRapid();
readmoreUserscript.startInvervalSlow();