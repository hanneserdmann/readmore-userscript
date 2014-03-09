// ==UserScript==
// @name            Readmore Userscript
// @version         2.1.8
// @description     Fügt der deutschen eSport-Webseite zusätzliche Funktionen hinzu
// @author          thextor, vntw
// @credits         IllDependence (Extrabuttons), Biki (RM Plus)
// @namespace       readmore
// @include         *.readmore.de/*
// ==/UserScript==
/*! jQuery v1.8.3 jquery.com | jquery.org/license */
(function(e,t){function _(e){var t=M[e]={};return v.each(e.split(y),function(e,n){t[n]=!0}),t}function H(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(P,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:D.test(r)?v.parseJSON(r):r}catch(s){}v.data(e,n,r)}else r=t}return r}function B(e){var t;for(t in e){if(t==="data"&&v.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function et(){return!1}function tt(){return!0}function ut(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function at(e,t){do e=e[t];while(e&&e.nodeType!==1);return e}function ft(e,t,n){t=t||0;if(v.isFunction(t))return v.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return v.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=v.grep(e,function(e){return e.nodeType===1});if(it.test(t))return v.filter(t,r,!n);t=v.filter(t,r)}return v.grep(e,function(e,r){return v.inArray(e,t)>=0===n})}function lt(e){var t=ct.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function At(e,t){if(t.nodeType!==1||!v.hasData(e))return;var n,r,i,s=v._data(e),o=v._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)v.event.add(t,n,u[n][r])}o.data&&(o.data=v.extend({},o.data))}function Ot(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?(t.parentNode&&(t.outerHTML=e.outerHTML),v.support.html5Clone&&e.innerHTML&&!v.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):n==="input"&&Et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(v.expando)}function Mt(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function _t(e){Et.test(e.type)&&(e.defaultChecked=e.checked)}function Qt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Jt.length;while(i--){t=Jt[i]+n;if(t in e)return t}return r}function Gt(e,t){return e=t||e,v.css(e,"display")==="none"||!v.contains(e.ownerDocument,e)}function Yt(e,t){var n,r,i=[],s=0,o=e.length;for(;s<o;s++){n=e[s];if(!n.style)continue;i[s]=v._data(n,"olddisplay"),t?(!i[s]&&n.style.display==="none"&&(n.style.display=""),n.style.display===""&&Gt(n)&&(i[s]=v._data(n,"olddisplay",nn(n.nodeName)))):(r=Dt(n,"display"),!i[s]&&r!=="none"&&v._data(n,"olddisplay",r))}for(s=0;s<o;s++){n=e[s];if(!n.style)continue;if(!t||n.style.display==="none"||n.style.display==="")n.style.display=t?i[s]||"":"none"}return e}function Zt(e,t,n){var r=Rt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function en(e,t,n,r){var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;for(;i<4;i+=2)n==="margin"&&(s+=v.css(e,n+$t[i],!0)),r?(n==="content"&&(s-=parseFloat(Dt(e,"padding"+$t[i]))||0),n!=="margin"&&(s-=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0)):(s+=parseFloat(Dt(e,"padding"+$t[i]))||0,n!=="padding"&&(s+=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0));return s}function tn(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=!0,s=v.support.boxSizing&&v.css(e,"boxSizing")==="border-box";if(r<=0||r==null){r=Dt(e,t);if(r<0||r==null)r=e.style[t];if(Ut.test(r))return r;i=s&&(v.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+en(e,t,n||(s?"border":"content"),i)+"px"}function nn(e){if(Wt[e])return Wt[e];var t=v("<"+e+">").appendTo(i.body),n=t.css("display");t.remove();if(n==="none"||n===""){Pt=i.body.appendChild(Pt||v.extend(i.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!Ht||!Pt.createElement)Ht=(Pt.contentWindow||Pt.contentDocument).document,Ht.write("<!doctype html><html><body>"),Ht.close();t=Ht.body.appendChild(Ht.createElement(e)),n=Dt(t,"display"),i.body.removeChild(Pt)}return Wt[e]=n,n}function fn(e,t,n,r){var i;if(v.isArray(t))v.each(t,function(t,i){n||sn.test(e)?r(e,i):fn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&v.type(t)==="object")for(i in t)fn(e+"["+i+"]",t[i],n,r);else r(e,t)}function Cn(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i,s,o=t.toLowerCase().split(y),u=0,a=o.length;if(v.isFunction(n))for(;u<a;u++)r=o[u],s=/^\+/.test(r),s&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[s?"unshift":"push"](n)}}function kn(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u,a=e[s],f=0,l=a?a.length:0,c=e===Sn;for(;f<l&&(c||!u);f++)u=a[f](n,r,i),typeof u=="string"&&(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=kn(e,n,r,i,u,o)));return(c||!u)&&!o["*"]&&(u=kn(e,n,r,i,"*",o)),u}function Ln(e,n){var r,i,s=v.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&v.extend(!0,e,i)}function An(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(s in l)s in r&&(n[l[s]]=r[s]);while(f[0]==="*")f.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){f.unshift(s);break}if(f[0]in r)o=f[0];else{for(s in r){if(!f[0]||e.converters[s+" "+f[0]]){o=s;break}u||(u=s)}o=o||u}if(o)return o!==f[0]&&f.unshift(o),r[o]}function On(e,t){var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;e.dataFilter&&(t=e.dataFilter(t,e.dataType));if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!=="*"){if(u!=="*"&&u!==i){n=a[u+" "+i]||a["* "+i];if(!n)for(r in a){s=r.split(" ");if(s[1]===i){n=a[u+" "+s[0]]||a["* "+s[0]];if(n){n===!0?n=a[r]:a[r]!==!0&&(i=s[0],o.splice(f--,0,i));break}}}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(l){return{state:"parsererror",error:n?l:"No conversion from "+u+" to "+i}}}u=i}return{state:"success",data:t}}function Fn(){try{return new e.XMLHttpRequest}catch(t){}}function In(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function $n(){return setTimeout(function(){qn=t},0),qn=v.now()}function Jn(e,t){v.each(t,function(t,n){var r=(Vn[t]||[]).concat(Vn["*"]),i=0,s=r.length;for(;i<s;i++)if(r[i].call(e,t,n))return})}function Kn(e,t,n){var r,i=0,s=0,o=Xn.length,u=v.Deferred().always(function(){delete a.elem}),a=function(){var t=qn||$n(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,i=1-r,s=0,o=f.tweens.length;for(;s<o;s++)f.tweens[s].run(i);return u.notifyWith(e,[f,i,n]),i<1&&o?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:v.extend({},t),opts:v.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:qn||$n(),duration:n.duration,tweens:[],createTween:function(t,n,r){var i=v.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(i),i},stop:function(t){var n=0,r=t?f.tweens.length:0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;Qn(l,f.opts.specialEasing);for(;i<o;i++){r=Xn[i].call(f,e,l,f.opts);if(r)return r}return Jn(f,l),v.isFunction(f.opts.start)&&f.opts.start.call(e,f),v.fx.timer(v.extend(a,{anim:f,queue:f.opts.queue,elem:e})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function Qn(e,t){var n,r,i,s,o;for(n in e){r=v.camelCase(n),i=t[r],s=e[n],v.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=v.cssHooks[r];if(o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function Gn(e,t,n){var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},m=[],g=e.nodeType&&Gt(e);n.queue||(l=v._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,h.always(function(){h.always(function(){l.unqueued--,v.queue(e,"fx").length||l.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],v.css(e,"display")==="inline"&&v.css(e,"float")==="none"&&(!v.support.inlineBlockNeedsLayout||nn(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",v.support.shrinkWrapBlocks||h.done(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t){s=t[r];if(Un.exec(s)){delete t[r],a=a||s==="toggle";if(s===(g?"hide":"show"))continue;m.push(r)}}o=m.length;if(o){u=v._data(e,"fxshow")||v._data(e,"fxshow",{}),"hidden"in u&&(g=u.hidden),a&&(u.hidden=!g),g?v(e).show():h.done(function(){v(e).hide()}),h.done(function(){var t;v.removeData(e,"fxshow",!0);for(t in d)v.style(e,t,d[t])});for(r=0;r<o;r++)i=m[r],f=h.createTween(i,g?u[i]:0),d[i]=u[i]||v.style(e,i),i in u||(u[i]=f.start,g&&(f.end=f.start,f.start=i==="width"||i==="height"?1:0))}}function Yn(e,t,n,r,i){return new Yn.prototype.init(e,t,n,r,i)}function Zn(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=$t[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function tr(e){return v.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var n,r,i=e.document,s=e.location,o=e.navigator,u=e.jQuery,a=e.$,f=Array.prototype.push,l=Array.prototype.slice,c=Array.prototype.indexOf,h=Object.prototype.toString,p=Object.prototype.hasOwnProperty,d=String.prototype.trim,v=function(e,t){return new v.fn.init(e,t,n)},m=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,g=/\S/,y=/\s+/,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,S=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,T=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,N=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,C=/^-ms-/,k=/-([\da-z])/gi,L=function(e,t){return(t+"").toUpperCase()},A=function(){i.addEventListener?(i.removeEventListener("DOMContentLoaded",A,!1),v.ready()):i.readyState==="complete"&&(i.detachEvent("onreadystatechange",A),v.ready())},O={};v.fn=v.prototype={constructor:v,init:function(e,n,r){var s,o,u,a;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?s=[null,e,null]:s=w.exec(e);if(s&&(s[1]||!n)){if(s[1])return n=n instanceof v?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:i,e=v.parseHTML(s[1],a,!0),E.test(s[1])&&v.isPlainObject(n)&&this.attr.call(e,n,!0),v.merge(this,e);o=i.getElementById(s[2]);if(o&&o.parentNode){if(o.id!==s[2])return r.find(e);this.length=1,this[0]=o}return this.context=i,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return v.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),v.makeArray(e,this))},selector:"",jquery:"1.8.3",length:0,size:function(){return this.length},toArray:function(){return l.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=v.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return v.each(this,e,t)},ready:function(e){return v.ready.promise().done(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(l.apply(this,arguments),"slice",l.call(arguments).join(","))},map:function(e){return this.pushStack(v.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:[].sort,splice:[].splice},v.fn.init.prototype=v.fn,v.extend=v.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!v.isFunction(u)&&(u={}),f===a&&(u=this,--a);for(;a<f;a++)if((e=arguments[a])!=null)for(n in e){r=u[n],i=e[n];if(u===i)continue;l&&i&&(v.isPlainObject(i)||(s=v.isArray(i)))?(s?(s=!1,o=r&&v.isArray(r)?r:[]):o=r&&v.isPlainObject(r)?r:{},u[n]=v.extend(l,o,i)):i!==t&&(u[n]=i)}return u},v.extend({noConflict:function(t){return e.$===v&&(e.$=a),t&&e.jQuery===v&&(e.jQuery=u),v},isReady:!1,readyWait:1,holdReady:function(e){e?v.readyWait++:v.ready(!0)},ready:function(e){if(e===!0?--v.readyWait:v.isReady)return;if(!i.body)return setTimeout(v.ready,1);v.isReady=!0;if(e!==!0&&--v.readyWait>0)return;r.resolveWith(i,[v]),v.fn.trigger&&v(i).trigger("ready").off("ready")},isFunction:function(e){return v.type(e)==="function"},isArray:Array.isArray||function(e){return v.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):O[h.call(e)]||"object"},isPlainObject:function(e){if(!e||v.type(e)!=="object"||e.nodeType||v.isWindow(e))return!1;try{if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||p.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return!e||typeof e!="string"?null:(typeof t=="boolean"&&(n=t,t=0),t=t||i,(r=E.exec(e))?[t.createElement(r[1])]:(r=v.buildFragment([e],t,n?null:[]),v.merge([],(r.cacheable?v.clone(r.fragment):r.fragment).childNodes)))},parseJSON:function(t){if(!t||typeof t!="string")return null;t=v.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(S.test(t.replace(T,"@").replace(N,"]").replace(x,"")))return(new Function("return "+t))();v.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!="string")return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&v.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&g.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(C,"ms-").replace(k,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,s=0,o=e.length,u=o===t||v.isFunction(e);if(r){if(u){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;s<o;)if(n.apply(e[s++],r)===!1)break}else if(u){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;s<o;)if(n.call(e[s],s,e[s++])===!1)break;return e},trim:d&&!d.call("\ufeff\u00a0")?function(e){return e==null?"":d.call(e)}:function(e){return e==null?"":(e+"").replace(b,"")},makeArray:function(e,t){var n,r=t||[];return e!=null&&(n=v.type(e),e.length==null||n==="string"||n==="function"||n==="regexp"||v.isWindow(e)?f.call(r,e):v.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(c)return c.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,n,r){var i,s,o=[],u=0,a=e.length,f=e instanceof v||a!==t&&typeof a=="number"&&(a>0&&e[0]&&e[a-1]||a===0||v.isArray(e));if(f)for(;u<a;u++)i=n(e[u],u,r),i!=null&&(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&&(o[o.length]=i);return o.concat.apply([],o)},guid:1,proxy:function(e,n){var r,i,s;return typeof n=="string"&&(r=e[n],n=e,e=r),v.isFunction(e)?(i=l.call(arguments,2),s=function(){return e.apply(n,i.concat(l.call(arguments)))},s.guid=e.guid=e.guid||v.guid++,s):t},access:function(e,n,r,i,s,o,u){var a,f=r==null,l=0,c=e.length;if(r&&typeof r=="object"){for(l in r)v.access(e,n,l,r[l],1,o,i);s=1}else if(i!==t){a=u===t&&v.isFunction(i),f&&(a?(a=n,n=function(e,t,n){return a.call(v(e),n)}):(n.call(e,i),n=null));if(n)for(;l<c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);s=1}return s?e:f?n.call(e):c?n(e[0],r):o},now:function(){return(new Date).getTime()}}),v.ready.promise=function(t){if(!r){r=v.Deferred();if(i.readyState==="complete")setTimeout(v.ready,1);else if(i.addEventListener)i.addEventListener("DOMContentLoaded",A,!1),e.addEventListener("load",v.ready,!1);else{i.attachEvent("onreadystatechange",A),e.attachEvent("onload",v.ready);var n=!1;try{n=e.frameElement==null&&i.documentElement}catch(s){}n&&n.doScroll&&function o(){if(!v.isReady){try{n.doScroll("left")}catch(e){return setTimeout(o,50)}v.ready()}}()}}return r.promise(t)},v.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){O["[object "+t+"]"]=t.toLowerCase()}),n=v(i);var M={};v.Callbacks=function(e){e=typeof e=="string"?M[e]||_(e):v.extend({},e);var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){n=e.memory&&t,r=!0,u=s||0,s=0,o=a.length,i=!0;for(;a&&u<o;u++)if(a[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}i=!1,a&&(f?f.length&&l(f.shift()):n?a=[]:c.disable())},c={add:function(){if(a){var t=a.length;(function r(t){v.each(t,function(t,n){var i=v.type(n);i==="function"?(!e.unique||!c.has(n))&&a.push(n):n&&n.length&&i!=="string"&&r(n)})})(arguments),i?o=a.length:n&&(s=t,l(n))}return this},remove:function(){return a&&v.each(arguments,function(e,t){var n;while((n=v.inArray(t,a,n))>-1)a.splice(n,1),i&&(n<=o&&o--,n<=u&&u--)}),this},has:function(e){return v.inArray(e,a)>-1},empty:function(){return a=[],this},disable:function(){return a=f=n=t,this},disabled:function(){return!a},lock:function(){return f=t,n||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],a&&(!r||f)&&(i?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},v.extend({Deferred:function(e){var t=[["resolve","done",v.Callbacks("once memory"),"resolved"],["reject","fail",v.Callbacks("once memory"),"rejected"],["notify","progress",v.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return v.Deferred(function(n){v.each(t,function(t,r){var s=r[0],o=e[t];i[r[1]](v.isFunction(o)?function(){var e=o.apply(this,arguments);e&&v.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])}:n[s])}),e=null}).promise()},promise:function(e){return e!=null?v.extend(e,r):r}},i={};return r.pipe=r.then,v.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=l.call(arguments),r=n.length,i=r!==1||e&&v.isFunction(e.promise)?r:0,s=i===1?e:v.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?l.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&v.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),v.support=function(){var t,n,r,s,o,u,a,f,l,c,h,p=i.createElement("div");p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];if(!n||!r||!n.length)return{};s=i.createElement("select"),o=s.appendChild(i.createElement("option")),u=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:u.value==="on",optSelected:o.selected,getSetAttribute:p.className!=="t",enctype:!!i.createElement("form").enctype,html5Clone:i.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:i.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},u.checked=!0,t.noCloneChecked=u.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!o.disabled;try{delete p.test}catch(d){t.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",h=function(){t.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick"),p.detachEvent("onclick",h)),u=i.createElement("input"),u.value="t",u.setAttribute("type","radio"),t.radioValue=u.value==="t",u.setAttribute("checked","checked"),u.setAttribute("name","t"),p.appendChild(u),a=i.createDocumentFragment(),a.appendChild(p.lastChild),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=u.checked,a.removeChild(u),a.appendChild(p);if(p.attachEvent)for(l in{submit:!0,change:!0,focusin:!0})f="on"+l,c=f in p,c||(p.setAttribute(f,"return;"),c=typeof p[f]=="function"),t[l+"Bubbles"]=c;return v(function(){var n,r,s,o,u="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=i.getElementsByTagName("body")[0];if(!a)return;n=i.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",a.insertBefore(n,a.firstChild),r=i.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",s=r.getElementsByTagName("td"),s[0].style.cssText="padding:0;margin:0;border:0;display:none",c=s[0].offsetHeight===0,s[0].style.display="",s[1].style.display="none",t.reliableHiddenOffsets=c&&s[0].offsetHeight===0,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(r,null)||{width:"4px"}).width==="4px",o=i.createElement("div"),o.style.cssText=r.style.cssText=u,o.style.marginRight=o.style.width="0",r.style.width="1px",r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),typeof r.style.zoom!="undefined"&&(r.innerHTML="",r.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),a.removeChild(n),n=r=s=o=null}),a.removeChild(p),n=r=s=o=u=a=p=null,t}();var D=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;v.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(v.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?v.cache[e[v.expando]]:e[v.expando],!!e&&!B(e)},data:function(e,n,r,i){if(!v.acceptData(e))return;var s,o,u=v.expando,a=typeof n=="string",f=e.nodeType,l=f?v.cache:e,c=f?e[u]:e[u]&&u;if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t)return;c||(f?e[u]=c=v.deletedIds.pop()||v.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=v.noop));if(typeof n=="object"||typeof n=="function")i?l[c]=v.extend(l[c],n):l[c].data=v.extend(l[c].data,n);return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[v.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[v.camelCase(n)])):o=s,o},removeData:function(e,t,n){if(!v.acceptData(e))return;var r,i,s,o=e.nodeType,u=o?v.cache:e,a=o?e[v.expando]:v.expando;if(!u[a])return;if(t){r=n?u[a]:u[a].data;if(r){v.isArray(t)||(t in r?t=[t]:(t=v.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(i=0,s=t.length;i<s;i++)delete r[t[i]];if(!(n?B:v.isEmptyObject)(r))return}}if(!n){delete u[a].data;if(!B(u[a]))return}o?v.cleanData([e],!0):v.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null},_data:function(e,t,n){return v.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&v.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),v.fn.extend({data:function(e,n){var r,i,s,o,u,a=this[0],f=0,l=null;if(e===t){if(this.length){l=v.data(a);if(a.nodeType===1&&!v._data(a,"parsedAttrs")){s=a.attributes;for(u=s.length;f<u;f++)o=s[f].name,o.indexOf("data-")||(o=v.camelCase(o.substring(5)),H(a,o,l[o]));v._data(a,"parsedAttrs",!0)}}return l}return typeof e=="object"?this.each(function(){v.data(this,e)}):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",v.access(this,function(n){if(n===t)return l=this.triggerHandler("getData"+i,[r[0]]),l===t&&a&&(l=v.data(a,e),l=H(a,e,l)),l===t&&r[1]?this.data(r[0]):l;r[1]=n,this.each(function(){var t=v(this);t.triggerHandler("setData"+i,r),v.data(this,e,n),t.triggerHandler("changeData"+i,r)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){v.removeData(this,e)})}}),v.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=v._data(e,t),n&&(!r||v.isArray(n)?r=v._data(e,t,v.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=v.queue(e,t),r=n.length,i=n.shift(),s=v._queueHooks(e,t),o=function(){v.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return v._data(e,n)||v._data(e,n,{empty:v.Callbacks("once memory").add(function(){v.removeData(e,t+"queue",!0),v.removeData(e,n,!0)})})}}),v.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?v.queue(this[0],e):n===t?this:this.each(function(){var t=v.queue(this,e,n);v._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&v.dequeue(this,e)})},dequeue:function(e){return this.each(function(){v.dequeue(this,e)})},delay:function(e,t){return e=v.fx?v.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=v.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!="string"&&(n=e,e=t),e=e||"fx";while(u--)r=v._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));return a(),s.promise(n)}});var j,F,I,q=/[\t\r\n]/g,R=/\r/g,U=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea|)$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,V=v.support.getSetAttribute;v.fn.extend({attr:function(e,t){return v.access(this,v.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){v.removeAttr(this,e)})},prop:function(e,t){return v.access(this,v.prop,e,t,arguments.length>1)},removeProp:function(e){return e=v.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(v.isFunction(e))return this.each(function(t){v(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(y);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++)s.indexOf(" "+t[o]+" ")<0&&(s+=t[o]+" ");i.className=v.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(v.isFunction(e))return this.each(function(t){v(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(y);for(u=0,a=this.length;u<a;u++){i=this[u];if(i.nodeType===1&&i.className){r=(" "+i.className+" ").replace(q," ");for(s=0,o=n.length;s<o;s++)while(r.indexOf(" "+n[s]+" ")>=0)r=r.replace(" "+n[s]+" "," ");i.className=e?v.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return v.isFunction(e)?this.each(function(n){v(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,s=0,o=v(this),u=t,a=e.split(y);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&v._data(this,"__className__",this.className),this.className=this.className||e===!1?"":v._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s)return n=v.valHooks[s.type]||v.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(R,""):r==null?"":r);return}return i=v.isFunction(e),this.each(function(r){var s,o=v(this);if(this.nodeType!==1)return;i?s=e.call(this,r,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":v.isArray(s)&&(s=v.map(s,function(e){return e==null?"":e+""})),n=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,s,"value")===t)this.value=s})}}),v.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(v.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!v.nodeName(n.parentNode,"optgroup"))){t=v(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n=v.makeArray(t);return v(e).find("option").each(function(){this.selected=v.inArray(v(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;if(i&&v.isFunction(v.fn[n]))return v(e)[n](r);if(typeof e.getAttribute=="undefined")return v.prop(e,n,r);u=a!==1||!v.isXMLDoc(e),u&&(n=n.toLowerCase(),o=v.attrHooks[n]||(X.test(n)?F:j));if(r!==t){if(r===null){v.removeAttr(e,n);return}return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r)}return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)},removeAttr:function(e,t){var n,r,i,s,o=0;if(t&&e.nodeType===1){r=t.split(y);for(;o<r.length;o++)i=r[o],i&&(n=v.propFix[i]||i,s=X.test(i),s||v.attr(e,i,""),e.removeAttribute(V?i:n),s&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(U.test(e.nodeName)&&e.parentNode)v.error("type property can't be changed");else if(!v.support.radioValue&&t==="radio"&&v.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return j&&v.nodeName(e,"button")?j.get(e,t):t in e?e.value:null},set:function(e,t,n){if(j&&v.nodeName(e,"button"))return j.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;return o=u!==1||!v.isXMLDoc(e),o&&(n=v.propFix[n]||n,s=v.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):z.test(e.nodeName)||W.test(e.nodeName)&&e.href?0:t}}}}),F={get:function(e,n){var r,i=v.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?v.removeAttr(e,n):(r=v.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},V||(I={name:!0,id:!0,coords:!0},j=v.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(I[n]?r.value!=="":r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=i.createAttribute(n),e.setAttributeNode(r)),r.value=t+""}},v.each(["width","height"],function(e,t){v.attrHooks[t]=v.extend(v.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),v.attrHooks.contenteditable={get:j.get,set:function(e,t,n){t===""&&(t="false"),j.set(e,t,n)}}),v.support.hrefNormalized||v.each(["href","src","width","height"],function(e,n){v.attrHooks[n]=v.extend(v.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),v.support.style||(v.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+""}}),v.support.optSelected||(v.propHooks.selected=v.extend(v.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),v.support.enctype||(v.propFix.enctype="encoding"),v.support.checkOn||v.each(["radio","checkbox"],function(){v.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),v.each(["radio","checkbox"],function(){v.valHooks[this]=v.extend(v.valHooks[this],{set:function(e,t){if(v.isArray(t))return e.checked=v.inArray(v(e).val(),t)>=0}})});var $=/^(?:textarea|input|select)$/i,J=/^([^\.]*|)(?:\.(.+)|)$/,K=/(?:^|\s)hover(\.\S+|)\b/,Q=/^key/,G=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=function(e){return v.event.special.hover?e:e.replace(K,"mouseenter$1 mouseleave$1")};v.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,m,g;if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=v._data(e)))return;r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=v.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof v=="undefined"||!!e&&v.event.triggered===e.type?t:v.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=v.trim(Z(n)).split(" ");for(f=0;f<n.length;f++){l=J.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),g=v.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=v.event.special[c]||{},p=v.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,needsContext:s&&v.expr.match.needsContext.test(s),namespace:h.join(".")},d),m=a[c];if(!m){m=a[c]=[],m.delegateCount=0;if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)}g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),v.event.global[c]=!0}e=null},global:{},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,m,g=v.hasData(e)&&v._data(e);if(!g||!(h=g.events))return;t=v.trim(Z(t||"")).split(" ");for(s=0;s<t.length;s++){o=J.exec(t[s])||[],u=a=o[1],f=o[2];if(!u){for(u in h)v.event.remove(e,u+t[s],n,r,!0);continue}p=v.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(c=0;c<d.length;c++)m=d[c],(i||a===m.origType)&&(!n||n.guid===m.guid)&&(!f||f.test(m.namespace))&&(!r||r===m.selector||r==="**"&&m.selector)&&(d.splice(c--,1),m.selector&&d.delegateCount--,p.remove&&p.remove.call(e,m));d.length===0&&l!==d.length&&((!p.teardown||p.teardown.call(e,f,g.handle)===!1)&&v.removeEvent(e,u,g.handle),delete h[u])}v.isEmptyObject(h)&&(delete g.handle,v.removeData(e,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,s,o){if(!s||s.nodeType!==3&&s.nodeType!==8){var u,a,f,l,c,h,p,d,m,g,y=n.type||n,b=[];if(Y.test(y+v.event.triggered))return;y.indexOf("!")>=0&&(y=y.slice(0,-1),a=!0),y.indexOf(".")>=0&&(b=y.split("."),y=b.shift(),b.sort());if((!s||v.event.customEvent[y])&&!v.event.global[y])return;n=typeof n=="object"?n[v.expando]?n:new v.Event(y,n):new v.Event(y),n.type=y,n.isTrigger=!0,n.exclusive=a,n.namespace=b.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,h=y.indexOf(":")<0?"on"+y:"";if(!s){u=v.cache;for(f in u)u[f].events&&u[f].events[y]&&v.event.trigger(n,r,u[f].handle.elem,!0);return}n.result=t,n.target||(n.target=s),r=r!=null?v.makeArray(r):[],r.unshift(n),p=v.event.special[y]||{};if(p.trigger&&p.trigger.apply(s,r)===!1)return;m=[[s,p.bindType||y]];if(!o&&!p.noBubble&&!v.isWindow(s)){g=p.delegateType||y,l=Y.test(g+y)?s:s.parentNode;for(c=s;l;l=l.parentNode)m.push([l,g]),c=l;c===(s.ownerDocument||i)&&m.push([c.defaultView||c.parentWindow||e,g])}for(f=0;f<m.length&&!n.isPropagationStopped();f++)l=m[f][0],n.type=m[f][1],d=(v._data(l,"events")||{})[n.type]&&v._data(l,"handle"),d&&d.apply(l,r),d=h&&l[h],d&&v.acceptData(l)&&d.apply&&d.apply(l,r)===!1&&n.preventDefault();return n.type=y,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(s.ownerDocument,r)===!1)&&(y!=="click"||!v.nodeName(s,"a"))&&v.acceptData(s)&&h&&s[y]&&(y!=="focus"&&y!=="blur"||n.target.offsetWidth!==0)&&!v.isWindow(s)&&(c=s[h],c&&(s[h]=null),v.event.triggered=y,s[y](),v.event.triggered=t,c&&(s[h]=c)),n.result}return},dispatch:function(n){n=v.event.fix(n||e.event);var r,i,s,o,u,a,f,c,h,p,d=(v._data(this,"events")||{})[n.type]||[],m=d.delegateCount,g=l.call(arguments),y=!n.exclusive&&!n.namespace,b=v.event.special[n.type]||{},w=[];g[0]=n,n.delegateTarget=this;if(b.preDispatch&&b.preDispatch.call(this,n)===!1)return;if(m&&(!n.button||n.type!=="click"))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!=="click"){u={},f=[];for(r=0;r<m;r++)c=d[r],h=c.selector,u[h]===t&&(u[h]=c.needsContext?v(h,this).index(s)>=0:v.find(h,this,null,[s]).length),u[h]&&f.push(c);f.length&&w.push({elem:s,matches:f})}d.length>m&&w.push({elem:this,matches:d.slice(m)});for(r=0;r<w.length&&!n.isPropagationStopped();r++){a=w[r],n.currentTarget=a.elem;for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){c=a.matches[i];if(y||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))n.data=c.data,n.handleObj=c,o=((v.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,g),o!==t&&(n.result=o,o===!1&&(n.preventDefault(),n.stopPropagation()))}}return b.postDispatch&&b.postDispatch.call(this,n),n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,s,o,u=n.button,a=n.fromElement;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||i,s=r.documentElement,o=r.body,e.pageX=n.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),!e.which&&u!==t&&(e.which=u&1?1:u&2?3:u&4?2:0),e}},fix:function(e){if(e[v.expando])return e;var t,n,r=e,s=v.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;e=v.Event(r);for(t=o.length;t;)n=o[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||i),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){v.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=v.extend(new v.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?v.event.trigger(i,null,t):v.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},v.event.handle=v.event.dispatch,v.removeEvent=i.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]=="undefined"&&(e[r]=null),e.detachEvent(r,n))},v.Event=function(e,t){if(!(this instanceof v.Event))return new v.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?tt:et):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||v.now(),this[v.expando]=!0},v.Event.prototype={preventDefault:function(){this.isDefaultPrevented=tt;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=tt;var e=this.originalEvent;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=tt,this.stopPropagation()},isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et},v.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;if(!i||i!==r&&!v.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),v.support.submitBubbles||(v.event.special.submit={setup:function(){if(v.nodeName(this,"form"))return!1;v.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=v.nodeName(n,"input")||v.nodeName(n,"button")?n.form:t;r&&!v._data(r,"_submit_attached")&&(v.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),v._data(r,"_submit_attached",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&v.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(v.nodeName(this,"form"))return!1;v.event.remove(this,"._submit")}}),v.support.changeBubbles||(v.event.special.change={setup:function(){if($.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")v.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),v.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),v.event.simulate("change",this,e,!0)});return!1}v.event.add(this,"beforeactivate._change",function(e){var t=e.target;$.test(t.nodeName)&&!v._data(t,"_change_attached")&&(v.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&v.event.simulate("change",this.parentNode,e,!0)}),v._data(t,"_change_attached",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return v.event.remove(this,"._change"),!$.test(this.nodeName)}}),v.support.focusinBubbles||v.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){v.event.simulate(t,e.target,v.event.fix(e),!0)};v.event.special[t]={setup:function(){n++===0&&i.addEventListener(e,r,!0)},teardown:function(){--n===0&&i.removeEventListener(e,r,!0)}}}),v.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],s);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=et;else if(!i)return this;return s===1&&(o=i,i=function(e){return v().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=v.guid++)),this.each(function(){v.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,v(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e=="object"){for(s in e)this.off(s,n,e[s]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=et),this.each(function(){v.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return v(this.context).on(e,this.selector,t,n),this},die:function(e,t){return v(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return v.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||v.guid++,r=0,i=function(n){var i=(v._data(this,"lastToggle"+e.guid)||0)%r;return v._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){v.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Q.test(t)&&(v.event.fixHooks[t]=v.event.keyHooks),G.test(t)&&(v.event.fixHooks[t]=v.event.mouseHooks)}),function(e,t){function nt(e,t,n,r){n=n||[],t=t||g;var i,s,a,f,l=t.nodeType;if(!e||typeof e!="string")return n;if(l!==1&&l!==9)return[];a=o(t);if(!a&&!r)if(i=R.exec(e))if(f=i[1]){if(l===9){s=t.getElementById(f);if(!s||!s.parentNode)return n;if(s.id===f)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(f))&&u(t,s)&&s.id===f)return n.push(s),n}else{if(i[2])return S.apply(n,x.call(t.getElementsByTagName(e),0)),n;if((f=i[3])&&Z&&t.getElementsByClassName)return S.apply(n,x.call(t.getElementsByClassName(f),0)),n}return vt(e.replace(j,"$1"),t,n,r,a)}function rt(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function it(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function st(e){return N(function(t){return t=+t,N(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function ot(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function ut(e,t){var n,r,s,o,u,a,f,l=L[d][e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=i.preFilter;while(u){if(!n||(r=F.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(s=[]);n=!1;if(r=I.exec(u))s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=r[0].replace(j," ");for(o in i.filter)(r=J[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=o,n.matches=r);if(!n)break}return t?u.length:u?nt.error(e):L(e,a).slice(0)}function at(e,t,r){var i=t.dir,s=r&&t.dir==="parentNode",o=w++;return t.first?function(t,n,r){while(t=t[i])if(s||t.nodeType===1)return e(t,n,r)}:function(t,r,u){if(!u){var a,f=b+" "+o+" ",l=f+n;while(t=t[i])if(s||t.nodeType===1){if((a=t[d])===l)return t.sizset;if(typeof a=="string"&&a.indexOf(f)===0){if(t.sizset)return t}else{t[d]=l;if(e(t,r,u))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[i])if(s||t.nodeType===1)if(e(t,r,u))return t}}function ft(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function lt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function ct(e,t,n,r,i,s){return r&&!r[d]&&(r=ct(r)),i&&!i[d]&&(i=ct(i,s)),N(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||dt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?lt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&&n(m,g,u,a);if(r){f=lt(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?T.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=lt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):S.apply(o,g)})}function ht(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,f=at(function(e){return e===t},u,!0),l=at(function(e){return T.call(t,e)>-1},u,!0),h=[function(e,n,r){return!o&&(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))}];for(;a<s;a++)if(n=i.relative[e[a].type])h=[at(ft(h),n)];else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[d]){r=++a;for(;r<s;r++)if(i.relative[e[r].type])break;return ct(a>1&&ft(h),a>1&&e.slice(0,a-1).join("").replace(j,"$1"),n,a<r&&ht(e.slice(a,r)),r<s&&ht(e=e.slice(r)),r<s&&e.join(""))}h.push(n)}return ft(h)}function pt(e,t){var r=t.length>0,s=e.length>0,o=function(u,a,f,l,h){var p,d,v,m=[],y=0,w="0",x=u&&[],T=h!=null,N=c,C=u||s&&i.find.TAG("*",h&&a.parentNode||a),k=b+=N==null?1:Math.E;T&&(c=a!==g&&a,n=o.el);for(;(p=C[w])!=null;w++){if(s&&p){for(d=0;v=e[d];d++)if(v(p,a,f)){l.push(p);break}T&&(b=k,n=++o.el)}r&&((p=!v&&p)&&y--,u&&x.push(p))}y+=w;if(r&&w!==y){for(d=0;v=t[d];d++)v(x,m,a,f);if(u){if(y>0)while(w--)!x[w]&&!m[w]&&(m[w]=E.call(l));m=lt(m)}S.apply(l,m),T&&!u&&m.length>0&&y+t.length>1&&nt.uniqueSort(l)}return T&&(b=k,c=N),x};return o.el=0,r?N(o):o}function dt(e,t,n){var r=0,i=t.length;for(;r<i;r++)nt(e,t[r],n);return n}function vt(e,t,n,r,s){var o,u,f,l,c,h=ut(e),p=h.length;if(!r&&h.length===1){u=h[0]=h[0].slice(0);if(u.length>2&&(f=u[0]).type==="ID"&&t.nodeType===9&&!s&&i.relative[u[1].type]){t=i.find.ID(f.matches[0].replace($,""),t,s)[0];if(!t)return n;e=e.slice(u.shift().length)}for(o=J.POS.test(e)?-1:u.length-1;o>=0;o--){f=u[o];if(i.relative[l=f.type])break;if(c=i.find[l])if(r=c(f.matches[0].replace($,""),z.test(u[0].type)&&t.parentNode||t,s)){u.splice(o,1),e=r.length&&u.join("");if(!e)return S.apply(n,x.call(r,0)),n;break}}}return a(e,h)(r,t,s,n,z.test(e)),n}function mt(){}var n,r,i,s,o,u,a,f,l,c,h=!0,p="undefined",d=("sizcache"+Math.random()).replace(".",""),m=String,g=e.document,y=g.documentElement,b=0,w=0,E=[].pop,S=[].push,x=[].slice,T=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},N=function(e,t){return e[d]=t==null||t,e},C=function(){var e={},t=[];return N(function(n,r){return t.push(n)>i.cacheLength&&delete e[t.shift()],e[n+" "]=r},e)},k=C(),L=C(),A=C(),O="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",_=M.replace("w","w#"),D="([*^$|!~]?=)",P="\\["+O+"*("+M+")"+O+"*(?:"+D+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+_+")|)|)"+O+"*\\]",H=":("+M+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+P+")|[^:]|\\\\.)*|.*))\\)|)",B=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)",j=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),F=new RegExp("^"+O+"*,"+O+"*"),I=new RegExp("^"+O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*"),q=new RegExp(H),R=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,U=/^:not/,z=/[\x20\t\r\n\f]*[+~]/,W=/:not\($/,X=/h\d/i,V=/input|select|textarea|button/i,$=/\\(?!\\)/g,J={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),NAME:new RegExp("^\\[name=['\"]?("+M+")['\"]?\\]"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+H),POS:new RegExp(B,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),needsContext:new RegExp("^"+O+"*[>+~]|"+B,"i")},K=function(e){var t=g.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},Q=K(function(e){return e.appendChild(g.createComment("")),!e.getElementsByTagName("*").length}),G=K(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==p&&e.firstChild.getAttribute("href")==="#"}),Y=K(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),Z=K(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),et=K(function(e){e.id=d+0,e.innerHTML="<a name='"+d+"'></a><div name='"+d+"'></div>",y.insertBefore(e,y.firstChild);var t=g.getElementsByName&&g.getElementsByName(d).length===2+g.getElementsByName(d+0).length;return r=!g.getElementById(d),y.removeChild(e),t});try{x.call(y.childNodes,0)[0].nodeType}catch(tt){x=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}nt.matches=function(e,t){return nt(e,null,null,t)},nt.matchesSelector=function(e,t){return nt(t,null,null,[e]).length>0},s=nt.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=s(t);return n},o=nt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},u=nt.contains=y.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:y.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},nt.attr=function(e,t){var n,r=o(e);return r||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):r||Y?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)},i=nt.selectors={cacheLength:50,createPseudo:N,match:J,attrHandle:G?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:r?function(e,t,n){if(typeof t.getElementById!==p&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==p&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==p&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:Q?function(e,t){if(typeof t.getElementsByTagName!==p)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&&i.push(r);return i}return n},NAME:et&&function(e,t){if(typeof t.getElementsByName!==p)return t.getElementsByName(name)},CLASS:Z&&function(e,t,n){if(typeof t.getElementsByClassName!==p&&!n)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace($,""),e[3]=(e[4]||e[5]||"").replace($,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||nt.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&nt.error(e[0]),e},PSEUDO:function(e){var t,n;if(J.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])q.test(t)&&(n=ut(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:r?function(e){return e=e.replace($,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace($,""),function(t){var n=typeof t.getAttributeNode!==p&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace($,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[d][e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==p&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r,i){var s=nt.attr(r,e);return s==null?t==="!=":t?(s+="",t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.substr(s.length-n.length)===n:t==="~="?(" "+s+" ").indexOf(n)>-1:t==="|="?s===n||s.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r){return e==="nth"?function(e){var t,i,s=e.parentNode;if(n===1&&r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e==="first")return!0;n=t;case"last":while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||nt.error("unsupported pseudo: "+e);return r[d]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?N(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=T.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:N(function(e){var t=[],n=[],r=a(e.replace(j,"$1"));return r[d]?N(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:N(function(e){return function(t){return nt(e,t).length>0}}),contains:N(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!i.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return X.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:rt("radio"),checkbox:rt("checkbox"),file:rt("file"),password:rt("password"),image:rt("image"),submit:it("submit"),reset:it("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return V.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement},first:st(function(){return[0]}),last:st(function(e,t){return[t-1]}),eq:st(function(e,t,n){return[n<0?n+t:n]}),even:st(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:st(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:st(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:st(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},f=y.compareDocumentPosition?function(e,t){return e===t?(l=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t)return l=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u)return ot(e,t);if(!o)return-1;if(!u)return 1;while(a)i.unshift(a),a=a.parentNode;a=u;while(a)s.unshift(a),a=a.parentNode;n=i.length,r=s.length;for(var f=0;f<n&&f<r;f++)if(i[f]!==s[f])return ot(i[f],s[f]);return f===n?ot(e,s[f],-1):ot(i[f],t,1)},[0,0].sort(f),h=!l,nt.uniqueSort=function(e){var t,n=[],r=1,i=0;l=h,e.sort(f);if(l){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},nt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},a=nt.compile=function(e,t){var n,r=[],i=[],s=A[d][e+" "];if(!s){t||(t=ut(e)),n=t.length;while(n--)s=ht(t[n]),s[d]?r.push(s):i.push(s);s=A(e,pt(i,r))}return s},g.querySelectorAll&&function(){var e,t=vt,n=/'|\\/g,r=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[":focus"],s=[":active"],u=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector||y.oMatchesSelector||y.msMatchesSelector;K(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||i.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||i.push(":checked")}),K(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&i.push("[*^$]="+O+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||i.push(":enabled",":disabled")}),i=new RegExp(i.join("|")),vt=function(e,r,s,o,u){if(!o&&!u&&!i.test(e)){var a,f,l=!0,c=d,h=r,p=r.nodeType===9&&e;if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){a=ut(e),(l=r.getAttribute("id"))?c=l.replace(n,"\\$&"):r.setAttribute("id",c),c="[id='"+c+"'] ",f=a.length;while(f--)a[f]=c+a[f].join("");h=z.test(e)&&r.parentNode||r,p=a.join(",")}if(p)try{return S.apply(s,x.call(h.querySelectorAll(p),0)),s}catch(v){}finally{l||r.removeAttribute("id")}}return t(e,r,s,o,u)},u&&(K(function(t){e=u.call(t,"div");try{u.call(t,"[test!='']:sizzle"),s.push("!=",H)}catch(n){}}),s=new RegExp(s.join("|")),nt.matchesSelector=function(t,n){n=n.replace(r,"='$1']");if(!o(t)&&!s.test(n)&&!i.test(n))try{var a=u.call(t,n);if(a||e||t.document&&t.document.nodeType!==11)return a}catch(f){}return nt(n,null,null,[t]).length>0})}(),i.pseudos.nth=i.pseudos.eq,i.filters=mt.prototype=i.pseudos,i.setFilters=new mt,nt.attr=v.attr,v.find=nt,v.expr=nt.selectors,v.expr[":"]=v.expr.pseudos,v.unique=nt.uniqueSort,v.text=nt.getText,v.isXMLDoc=nt.isXML,v.contains=nt.contains}(e);var nt=/Until$/,rt=/^(?:parents|prev(?:Until|All))/,it=/^.[^:#\[\.,]*$/,st=v.expr.match.needsContext,ot={children:!0,contents:!0,next:!0,prev:!0};v.fn.extend({find:function(e){var t,n,r,i,s,o,u=this;if(typeof e!="string")return v(e).filter(function(){for(t=0,n=u.length;t<n;t++)if(v.contains(u[t],this))return!0});o=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++){r=o.length,v.find(e,this[t],o);if(t>0)for(i=r;i<o.length;i++)for(s=0;s<r;s++)if(o[s]===o[i]){o.splice(i--,1);break}}return o},has:function(e){var t,n=v(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(v.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1),"not",e)},filter:function(e){return this.pushStack(ft(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?st.test(e)?v(e,this.context).index(this[0])>=0:v.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=st.test(e)||typeof e!="string"?v(e,t||this.context):0;for(;r<i;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(o?o.index(n)>-1:v.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}return s=s.length>1?v.unique(s):s,this.pushStack(s,"closest",e)},index:function(e){return e?typeof e=="string"?v.inArray(this[0],v(e)):v.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?v(e,t):v.makeArray(e&&e.nodeType?[e]:e),r=v.merge(this.get(),n);return this.pushStack(ut(n[0])||ut(r[0])?r:v.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),v.fn.andSelf=v.fn.addBack,v.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return v.dir(e,"parentNode")},parentsUntil:function(e,t,n){return v.dir(e,"parentNode",n)},next:function(e){return at(e,"nextSibling")},prev:function(e){return at(e,"previousSibling")},nextAll:function(e){return v.dir(e,"nextSibling")},prevAll:function(e){return v.dir(e,"previousSibling")},nextUntil:function(e,t,n){return v.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return v.dir(e,"previousSibling",n)},siblings:function(e){return v.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return v.sibling(e.firstChild)},contents:function(e){return v.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:v.merge([],e.childNodes)}},function(e,t){v.fn[e]=function(n,r){var i=v.map(this,t,n);return nt.test(e)||(r=n),r&&typeof r=="string"&&(i=v.filter(r,i)),i=this.length>1&&!ot[e]?v.unique(i):i,this.length>1&&rt.test(e)&&(i=i.reverse()),this.pushStack(i,e,l.call(arguments).join(","))}}),v.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?v.find.matchesSelector(t[0],e)?[t[0]]:[]:v.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!v(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var ct="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ht=/ jQuery\d+="(?:null|\d+)"/g,pt=/^\s+/,dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,vt=/<([\w:]+)/,mt=/<tbody/i,gt=/<|&#?\w+;/,yt=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,wt=new RegExp("<(?:"+ct+")[\\s/>]","i"),Et=/^(?:checkbox|radio)$/,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/\/(java|ecma)script/i,Tt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Nt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ct=lt(i),kt=Ct.appendChild(i.createElement("div"));Nt.optgroup=Nt.option,Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead,Nt.th=Nt.td,v.support.htmlSerialize||(Nt._default=[1,"X<div>","</div>"]),v.fn.extend({text:function(e){return v.access(this,function(e){return e===t?v.text(this):this.empty().append((this[0]&&this[0].ownerDocument||i).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(v.isFunction(e))return this.each(function(t){v(this).wrapAll(e.call(this,t))});if(this[0]){var t=v(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return v.isFunction(e)?this.each(function(t){v(this).wrapInner(e.call(this,t))}):this.each(function(){var t=v(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v.isFunction(e);return this.each(function(n){v(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){v.nodeName(this,"body")||v(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(e,this),"before",this.selector)}},after:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(this,e),"after",this.selector)}},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++)if(!e||v.filter(e,[n]).length)!t&&n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),v.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n);return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&&v.cleanData(e.getElementsByTagName("*"));while(e.firstChild)e.removeChild(e.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return v.clone(this,e,t)})},html:function(e){return v.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(ht,""):t;if(typeof e=="string"&&!yt.test(e)&&(v.support.htmlSerialize||!wt.test(e))&&(v.support.leadingWhitespace||!pt.test(e))&&!Nt[(vt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(dt,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return ut(this[0])?this.length?this.pushStack(v(v.isFunction(e)?e():e),"replaceWith",e):this:v.isFunction(e)?this.each(function(t){var n=v(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=v(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;v(this).remove(),t?v(t).before(e):v(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,s,o,u,a=0,f=e[0],l=[],c=this.length;if(!v.support.checkClone&&c>1&&typeof f=="string"&&St.test(f))return this.each(function(){v(this).domManip(e,n,r)});if(v.isFunction(f))return this.each(function(i){var s=v(this);e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){i=v.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&&(o=s);if(s){n=n&&v.nodeName(s,"tr");for(u=i.cacheable||c-1;a<c;a++)r.call(n&&v.nodeName(this[a],"table")?Lt(this[a],"tbody"):this[a],a===u?o:v.clone(o,!0,!0))}o=s=null,l.length&&v.each(l,function(e,t){t.src?v.ajax?v.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):v.error("no ajax"):v.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Tt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),v.buildFragment=function(e,n,r){var s,o,u,a=e[0];return n=n||i,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,e.length===1&&typeof a=="string"&&a.length<512&&n===i&&a.charAt(0)==="<"&&!bt.test(a)&&(v.support.checkClone||!St.test(a))&&(v.support.html5Clone||!wt.test(a))&&(o=!0,s=v.fragments[a],u=s!==t),s||(s=n.createDocumentFragment(),v.clean(e,n,s,r),o&&(v.fragments[a]=u&&s)),{fragment:s,cacheable:o}},v.fragments={},v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){v.fn[e]=function(n){var r,i=0,s=[],o=v(n),u=o.length,a=this.length===1&&this[0].parentNode;if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1)return o[t](this[0]),this;for(;i<u;i++)r=(i>0?this.clone(!0):this).get(),v(o[i])[t](r),s=s.concat(r);return this.pushStack(s,e,o.selector)}}),v.extend({clone:function(e,t,n){var r,i,s,o;v.support.html5Clone||v.isXMLDoc(e)||!wt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(kt.innerHTML=e.outerHTML,kt.removeChild(o=kt.firstChild));if((!v.support.noCloneEvent||!v.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!v.isXMLDoc(e)){Ot(e,o),r=Mt(e),i=Mt(o);for(s=0;r[s];++s)i[s]&&Ot(r[s],i[s])}if(t){At(e,o);if(n){r=Mt(e),i=Mt(o);for(s=0;r[s];++s)At(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var s,o,u,a,f,l,c,h,p,d,m,g,y=t===i&&Ct,b=[];if(!t||typeof t.createDocumentFragment=="undefined")t=i;for(s=0;(u=e[s])!=null;s++){typeof u=="number"&&(u+="");if(!u)continue;if(typeof u=="string")if(!gt.test(u))u=t.createTextNode(u);else{y=y||lt(t),c=t.createElement("div"),y.appendChild(c),u=u.replace(dt,"<$1></$2>"),a=(vt.exec(u)||["",""])[1].toLowerCase(),f=Nt[a]||Nt._default,l=f[0],c.innerHTML=f[1]+u+f[2];while(l--)c=c.lastChild;if(!v.support.tbody){h=mt.test(u),p=a==="table"&&!h?c.firstChild&&c.firstChild.childNodes:f[1]==="<table>"&&!h?c.childNodes:[];for(o=p.length-1;o>=0;--o)v.nodeName(p[o],"tbody")&&!p[o].childNodes.length&&p[o].parentNode.removeChild(p[o])}!v.support.leadingWhitespace&&pt.test(u)&&c.insertBefore(t.createTextNode(pt.exec(u)[0]),c.firstChild),u=c.childNodes,c.parentNode.removeChild(c)}u.nodeType?b.push(u):v.merge(b,u)}c&&(u=c=y=null);if(!v.support.appendChecked)for(s=0;(u=b[s])!=null;s++)v.nodeName(u,"input")?_t(u):typeof u.getElementsByTagName!="undefined"&&v.grep(u.getElementsByTagName("input"),_t);if(n){m=function(e){if(!e.type||xt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)};for(s=0;(u=b[s])!=null;s++)if(!v.nodeName(u,"script")||!m(u))n.appendChild(u),typeof u.getElementsByTagName!="undefined"&&(g=v.grep(v.merge([],u.getElementsByTagName("script")),m),b.splice.apply(b,[s+1,0].concat(g)),s+=g.length)}return b},cleanData:function(e,t){var n,r,i,s,o=0,u=v.expando,a=v.cache,f=v.support.deleteExpando,l=v.event.special;for(;(i=e[o])!=null;o++)if(t||v.acceptData(i)){r=i[u],n=r&&a[r];if(n){if(n.events)for(s in n.events)l[s]?v.event.remove(i,s):v.removeEvent(i,s,n.handle);a[r]&&(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,v.deletedIds.push(r))}}}}),function(){var e,t;v.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=v.uaMatch(o.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),v.browser=t,v.sub=function(){function e(t,n){return new e.fn.init(t,n)}v.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,i){return i&&i instanceof v&&!(i instanceof e)&&(i=e(i)),v.fn.init.call(this,r,i,t)},e.fn.init.prototype=e.fn;var t=e(i);return e}}();var Dt,Pt,Ht,Bt=/alpha\([^)]*\)/i,jt=/opacity=([^)]*)/,Ft=/^(top|right|bottom|left)$/,It=/^(none|table(?!-c[ea]).+)/,qt=/^margin/,Rt=new RegExp("^("+m+")(.*)$","i"),Ut=new RegExp("^("+m+")(?!px)[a-z%]+$","i"),zt=new RegExp("^([-+])=("+m+")","i"),Wt={BODY:"block"},Xt={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:0,fontWeight:400},$t=["Top","Right","Bottom","Left"],Jt=["Webkit","O","Moz","ms"],Kt=v.fn.toggle;v.fn.extend({css:function(e,n){return v.access(this,function(e,n,r){return r!==t?v.style(e,n,r):v.css(e,n)},e,n,arguments.length>1)},show:function(){return Yt(this,!0)},hide:function(){return Yt(this)},toggle:function(e,t){var n=typeof e=="boolean";return v.isFunction(e)&&v.isFunction(t)?Kt.apply(this,arguments):this.each(function(){(n?e:Gt(this))?v(this).show():v(this).hide()})}}),v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Dt(e,"opacity");return n===""?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":v.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var s,o,u,a=v.camelCase(n),f=e.style;n=v.cssProps[a]||(v.cssProps[a]=Qt(f,a)),u=v.cssHooks[n]||v.cssHooks[a];if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];o=typeof r,o==="string"&&(s=zt.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(v.css(e,n)),o="number");if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!v.cssNumber[a]&&(r+="px");if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{f[n]=r}catch(l){}},css:function(e,n,r,i){var s,o,u,a=v.camelCase(n);return n=v.cssProps[a]||(v.cssProps[a]=Qt(e.style,a)),u=v.cssHooks[n]||v.cssHooks[a],u&&"get"in u&&(s=u.get(e,!0,i)),s===t&&(s=Dt(e,n)),s==="normal"&&n in Vt&&(s=Vt[n]),r||i!==t?(o=parseFloat(s),r||v.isNumeric(o)?o||0:s):s},swap:function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=s[i];return r}}),e.getComputedStyle?Dt=function(t,n){var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;return u&&(r=u.getPropertyValue(n)||u[n],r===""&&!v.contains(t.ownerDocument,t)&&(r=v.style(t,n)),Ut.test(r)&&qt.test(n)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r}:i.documentElement.currentStyle&&(Dt=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;return i==null&&s&&s[t]&&(i=s[t]),Ut.test(i)&&!Ft.test(t)&&(n=s.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":i,i=s.pixelLeft+"px",s.left=n,r&&(e.runtimeStyle.left=r)),i===""?"auto":i}),v.each(["height","width"],function(e,t){v.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&It.test(Dt(e,"display"))?v.swap(e,Xt,function(){return tn(e,t,r)}):tn(e,t,r)},set:function(e,n,r){return Zt(e,n,r?en(e,t,r,v.support.boxSizing&&v.css(e,"boxSizing")==="border-box"):0)}}}),v.support.opacity||(v.cssHooks.opacity={get:function(e,t){return jt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=v.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&v.trim(s.replace(Bt,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=Bt.test(s)?s.replace(Bt,i):s+" "+i}}),v(function(){v.support.reliableMarginRight||(v.cssHooks.marginRight={get:function(e,t){return v.swap(e,{display:"inline-block"},function(){if(t)return Dt(e,"marginRight")})}}),!v.support.pixelPosition&&v.fn.position&&v.each(["top","left"],function(e,t){v.cssHooks[t]={get:function(e,n){if(n){var r=Dt(e,t);return Ut.test(r)?v(e).position()[t]+"px":r}}}})}),v.expr&&v.expr.filters&&(v.expr.filters.hidden=function(e){return e.offsetWidth===0&&e.offsetHeight===0||!v.support.reliableHiddenOffsets&&(e.style&&e.style.display||Dt(e,"display"))==="none"},v.expr.filters.visible=function(e){return!v.expr.filters.hidden(e)}),v.each({margin:"",padding:"",border:"Width"},function(e,t){v.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+$t[r]+t]=i[r]||i[r-2]||i[0];return s}},qt.test(e)||(v.cssHooks[e+t].set=Zt)});var rn=/%20/g,sn=/\[\]$/,on=/\r?\n/g,un=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,an=/^(?:select|textarea)/i;v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?v.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||an.test(this.nodeName)||un.test(this.type))}).map(function(e,t){var n=v(this).val();return n==null?null:v.isArray(n)?v.map(n,function(e,n){return{name:t.name,value:e.replace(on,"\r\n")}}):{name:t.name,value:n.replace(on,"\r\n")}}).get()}}),v.param=function(e,n){var r,i=[],s=function(e,t){t=v.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=v.ajaxSettings&&v.ajaxSettings.traditional);if(v.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){s(this.name,this.value)});else for(r in e)fn(r,e[r],n,s);return i.join("&").replace(rn,"+")};var ln,cn,hn=/#.*$/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,dn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,mn=/^\/\//,gn=/\?/,yn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bn=/([?&])_=[^&]*/,wn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,En=v.fn.load,Sn={},xn={},Tn=["*/"]+["*"];try{cn=s.href}catch(Nn){cn=i.createElement("a"),cn.href="",cn=cn.href}ln=wn.exec(cn.toLowerCase())||[],v.fn.load=function(e,n,r){if(typeof e!="string"&&En)return En.apply(this,arguments);if(!this.length)return this;var i,s,o,u=this,a=e.indexOf(" ");return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),v.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(s="POST"),v.ajax({url:e,type:s,dataType:"html",data:n,complete:function(e,t){r&&u.each(r,o||[e.responseText,t,e])}}).done(function(e){o=arguments,u.html(i?v("<div>").append(e.replace(yn,"")).find(i):e)}),this},v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){v.fn[t]=function(e){return this.on(t,e)}}),v.each(["get","post"],function(e,n){v[n]=function(e,r,i,s){return v.isFunction(r)&&(s=s||i,i=r,r=t),v.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),v.extend({getScript:function(e,n){return v.get(e,t,n,"script")},getJSON:function(e,t,n){return v.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?Ln(e,v.ajaxSettings):(t=e,e=v.ajaxSettings),Ln(e,t),e},ajaxSettings:{url:cn,isLocal:dn.test(ln[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Tn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":v.parseJSON,"text xml":v.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Cn(Sn),ajaxTransport:Cn(xn),ajax:function(e,n){function T(e,n,s,a){var l,y,b,w,S,T=n;if(E===2)return;E=2,u&&clearTimeout(u),o=t,i=a||"",x.readyState=e>0?4:0,s&&(w=An(c,x,s));if(e>=200&&e<300||e===304)c.ifModified&&(S=x.getResponseHeader("Last-Modified"),S&&(v.lastModified[r]=S),S=x.getResponseHeader("Etag"),S&&(v.etag[r]=S)),e===304?(T="notmodified",l=!0):(l=On(c,w),T=l.state,y=l.data,b=l.error,l=!b);else{b=T;if(!T||e)T="error",e<0&&(e=0)}x.status=e,x.statusText=(n||T)+"",l?d.resolveWith(h,[y,T,x]):d.rejectWith(h,[x,T,b]),x.statusCode(g),g=t,f&&p.trigger("ajax"+(l?"Success":"Error"),[x,c,l?y:b]),m.fireWith(h,[x,T]),f&&(p.trigger("ajaxComplete",[x,c]),--v.active||v.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var r,i,s,o,u,a,f,l,c=v.ajaxSetup({},n),h=c.context||c,p=h!==c&&(h.nodeType||h instanceof v)?v(h):v.event,d=v.Deferred(),m=v.Callbacks("once memory"),g=c.statusCode||{},b={},w={},E=0,S="canceled",x={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=w[n]=w[n]||e,b[e]=t}return this},getAllResponseHeaders:function(){return E===2?i:null},getResponseHeader:function(e){var n;if(E===2){if(!s){s={};while(n=pn.exec(i))s[n[1].toLowerCase()]=n[2]}n=s[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return E||(c.mimeType=e),this},abort:function(e){return e=e||S,o&&o.abort(e),T(0,e),this}};d.promise(x),x.success=x.done,x.error=x.fail,x.complete=m.add,x.statusCode=function(e){if(e){var t;if(E<2)for(t in e)g[t]=[g[t],e[t]];else t=e[x.status],x.always(t)}return this},c.url=((e||c.url)+"").replace(hn,"").replace(mn,ln[1]+"//"),c.dataTypes=v.trim(c.dataType||"*").toLowerCase().split(y),c.crossDomain==null&&(a=wn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ln[1]&&a[2]===ln[2]&&(a[3]||(a[1]==="http:"?80:443))==(ln[3]||(ln[1]==="http:"?80:443)))),c.data&&c.processData&&typeof c.data!="string"&&(c.data=v.param(c.data,c.traditional)),kn(Sn,c,n,x);if(E===2)return x;f=c.global,c.type=c.type.toUpperCase(),c.hasContent=!vn.test(c.type),f&&v.active++===0&&v.event.trigger("ajaxStart");if(!c.hasContent){c.data&&(c.url+=(gn.test(c.url)?"&":"?")+c.data,delete c.data),r=c.url;if(c.cache===!1){var N=v.now(),C=c.url.replace(bn,"$1_="+N);c.url=C+(C===c.url?(gn.test(c.url)?"&":"?")+"_="+N:"")}}(c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",c.contentType),c.ifModified&&(r=r||c.url,v.lastModified[r]&&x.setRequestHeader("If-Modified-Since",v.lastModified[r]),v.etag[r]&&x.setRequestHeader("If-None-Match",v.etag[r])),x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Tn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)x.setRequestHeader(l,c.headers[l]);if(!c.beforeSend||c.beforeSend.call(h,x,c)!==!1&&E!==2){S="abort";for(l in{success:1,error:1,complete:1})x[l](c[l]);o=kn(xn,c,n,x);if(!o)T(-1,"No Transport");else{x.readyState=1,f&&p.trigger("ajaxSend",[x,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){x.abort("timeout")},c.timeout));try{E=1,o.send(b,T)}catch(k){if(!(E<2))throw k;T(-1,k)}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var Mn=[],_n=/\?/,Dn=/(=)\?(?=&|$)|\?\?/,Pn=v.now();v.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Mn.pop()||v.expando+"_"+Pn++;return this[e]=!0,e}}),v.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&&Dn.test(f),h=l&&!c&&typeof a=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dn.test(a);if(n.dataTypes[0]==="jsonp"||c||h)return s=n.jsonpCallback=v.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(Dn,"$1"+s):h?n.data=a.replace(Dn,"$1"+s):l&&(n.url+=(_n.test(f)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){return u||v.error(s+" was not called"),u[0]},n.dataTypes[0]="json",e[s]=function(){u=arguments},i.always(function(){e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Mn.push(s)),u&&v.isFunction(o)&&o(u[0]),u=o=t}),"script"}),v.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return v.globalEval(e),e}}}),v.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),v.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=i.head||i.getElementsByTagName("head")[0]||i.documentElement;return{send:function(s,o){n=i.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Hn,Bn=e.ActiveXObject?function(){for(var e in Hn)Hn[e](0,1)}:!1,jn=0;v.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&Fn()||In()}:Fn,function(e){v.extend(v.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(v.ajaxSettings.xhr()),v.support.ajax&&v.ajaxTransport(function(n){if(!n.crossDomain||v.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(u in i)a.setRequestHeader(u,i[u])}catch(f){}a.send(n.hasContent&&n.data||null),r=function(e,i){var u,f,l,c,h;try{if(r&&(i||a.readyState===4)){r=t,o&&(a.onreadystatechange=v.noop,Bn&&delete Hn[o]);if(i)a.readyState!==4&&a.abort();else{u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&&h.documentElement&&(c.xml=h);try{c.text=a.responseText}catch(p){}try{f=a.statusText}catch(p){f=""}!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)}}}catch(d){i||s(-1,d)}c&&s(u,f,c,l)},n.async?a.readyState===4?setTimeout(r,0):(o=++jn,Bn&&(Hn||(Hn={},v(e).unload(Bn)),Hn[o]=r),a.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var qn,Rn,Un=/^(?:toggle|show|hide)$/,zn=new RegExp("^(?:([-+])=|)("+m+")([a-z%]*)$","i"),Wn=/queueHooks$/,Xn=[Gn],Vn={"*":[function(e,t){var n,r,i=this.createTween(e,t),s=zn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2],r=s[3]||(v.cssNumber[e]?"":"px");if(r!=="px"&&u){u=v.css(i.elem,e,!0)||n||1;do a=a||".5",u/=a,v.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)}i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n}return i}]};v.Animation=v.extend(Kn,{tweener:function(e,t){v.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;r<i;r++)n=e[r],Vn[n]=Vn[n]||[],Vn[n].unshift(t)},prefilter:function(e,t){t?Xn.unshift(e):Xn.push(e)}}),v.Tween=Yn,Yn.prototype={constructor:Yn,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(v.cssNumber[n]?"":"px")},cur:function(){var e=Yn.propHooks[this.prop];return e&&e.get?e.get(this):Yn.propHooks._default.get(this)},run:function(e){var t,n=Yn.propHooks[this.prop];return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Yn.propHooks._default.set(this),this}},Yn.prototype.init.prototype=Yn.prototype,Yn.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=v.css(e.elem,e.prop,!1,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){v.fx.step[e.prop]?v.fx.step[e.prop](e):e.elem.style&&(e.elem.style[v.cssProps[e.prop]]!=null||v.cssHooks[e.prop])?v.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Yn.propHooks.scrollTop=Yn.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},v.each(["toggle","show","hide"],function(e,t){var n=v.fn[t];v.fn[t]=function(r,i,s){return r==null||typeof r=="boolean"||!e&&v.isFunction(r)&&v.isFunction(i)?n.apply(this,arguments):this.animate(Zn(t,!0),r,i,s)}}),v.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Gt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=v.isEmptyObject(e),s=v.speed(t,n,r),o=function(){var t=Kn(this,v.extend({},e),s);i&&t.stop(!0)};return i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=e!=null&&e+"queueHooks",s=v.timers,o=v._data(this);if(n)o[n]&&o[n].stop&&i(o[n]);else for(n in o)o[n]&&o[n].stop&&Wn.test(n)&&i(o[n]);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1));(t||!r)&&v.dequeue(this,e)})}}),v.each({slideDown:Zn("show"),slideUp:Zn("hide"),slideToggle:Zn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){v.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),v.speed=function(e,t,n){var r=e&&typeof e=="object"?v.extend({},e):{complete:n||!n&&t||v.isFunction(e)&&e,duration:e,easing:n&&t||t&&!v.isFunction(t)&&t};r.duration=v.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in v.fx.speeds?v.fx.speeds[r.duration]:v.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){v.isFunction(r.old)&&r.old.call(this),r.queue&&v.dequeue(this,r.queue)},r},v.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},v.timers=[],v.fx=Yn.prototype.init,v.fx.tick=function(){var e,n=v.timers,r=0;qn=v.now();for(;r<n.length;r++)e=n[r],!e()&&n[r]===e&&n.splice(r--,1);n.length||v.fx.stop(),qn=t},v.fx.timer=function(e){e()&&v.timers.push(e)&&!Rn&&(Rn=setInterval(v.fx.tick,v.fx.interval))},v.fx.interval=13,v.fx.stop=function(){clearInterval(Rn),Rn=null},v.fx.speeds={slow:600,fast:200,_default:400},v.fx.step={},v.expr&&v.expr.filters&&(v.expr.filters.animated=function(e){return v.grep(v.timers,function(t){return e===t.elem}).length});var er=/^(?:body|html)$/i;v.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){v.offset.setOffset(this,e,t)});var n,r,i,s,o,u,a,f={top:0,left:0},l=this[0],c=l&&l.ownerDocument;if(!c)return;return(r=c.body)===l?v.offset.bodyOffset(l):(n=c.documentElement,v.contains(n,l)?(typeof l.getBoundingClientRect!="undefined"&&(f=l.getBoundingClientRect()),i=tr(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{top:f.top+u-s,left:f.left+a-o}):f)},v.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return v.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(v.css(e,"marginTop"))||0,n+=parseFloat(v.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=v.css(e,"position");r==="static"&&(e.style.position="relative");var i=v(e),s=i.offset(),o=v.css(e,"top"),u=v.css(e,"left"),a=(r==="absolute"||r==="fixed")&&v.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),v.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},v.fn.extend({position:function(){if(!this[0])return;var e=this[0],t=this.offsetParent(),n=this.offset(),r=er.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(v.css(e,"marginTop"))||0,n.left-=parseFloat(v.css(e,"marginLeft"))||0,r.top+=parseFloat(v.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(v.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||i.body;while(e&&!er.test(e.nodeName)&&v.css(e,"position")==="static")e=e.offsetParent;return e||i.body})}}),v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);v.fn[e]=function(i){return v.access(this,function(e,i,s){var o=tr(e);if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];o?o.scrollTo(r?v(o).scrollLeft():s,r?s:v(o).scrollTop()):e[i]=s},e,i,arguments.length,null)}}),v.each({Height:"height",Width:"width"},function(e,n){v.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){v.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border");return v.access(this,function(n,r,i){var s;return v.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?v.css(n,r,i,u):v.style(n,r,i,u)},n,o?i:t,o,null)}})}),e.jQuery=e.$=v,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return v})})(window);
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
            permissionDenied: null
        };

        this.permission = null;

        if (!this.isSupported()) {
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

            //callback user grants permission for notification
            if (typeof this.options.permissionGranted === 'function') {
                this.onPermissionGrantedCallback = this.options.permissionGranted;
            }

            //callback user denies permission for notification
            if (typeof this.options.permissionDenied === 'function') {
                this.onPermissionDeniedCallback = this.options.permissionDenied;
            }
        }
    }

    Notify.prototype.needsPermission = function () {
        if ('Notification' in w && Notification.permission === 'granted') {
            return false;
        }
        return true;
    };

    Notify.prototype.requestPermission = function () {
        var that = this;
        w.Notification.requestPermission(function (perm) {
            that.permission = perm;
            switch (that.permission) {
            case 'granted':
                that.onPermissionGranted();
                break;
            case 'denied':
                that.onPermissionDenied();
                break;
            }
        });
    };

    Notify.prototype.show = function () {

        if (!this.isSupported()) {
            return;
        }

        this.myNotify = new Notification(this.title, {
            'body': this.options.body,
            'tag' : this.options.tag,
            'icon' : this.options.icon
        });

        this.myNotify.addEventListener('show', this, false);
        this.myNotify.addEventListener('error', this, false);
        this.myNotify.addEventListener('close', this, false);
        this.myNotify.addEventListener('click', this, false);
    };

    Notify.prototype.onShowNotification = function () {
        if (this.onShowCallback) {
            this.onShowCallback();
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

    Notify.prototype.onPermissionGranted = function () {
        if (this.onPermissionGrantedCallback) {
            this.onPermissionGrantedCallback();
        }
    };

    Notify.prototype.onPermissionDenied = function () {
        if (this.onPermissionDeniedCallback) {
            this.onPermissionDeniedCallback();
        }
    };

    Notify.prototype.destroy = function () {
        this.myNotify.removeEventListener('show', this, false);
        this.myNotify.removeEventListener('error', this, false);
        this.myNotify.removeEventListener('close', this, false);
        this.myNotify.removeEventListener('click', this, false);
    };

    Notify.prototype.isSupported = function () {
        if ('Notification' in w) {
            return true;
        }
        return false;
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
// Keine Ahnung warum, aber wenn ich diese Zeile hinzufüge läuft das Script auch mit Greasemonkey..
try {
    GM_log("[Readmore Userscript]");
} catch (e) {}

function RMUS() {
    "use strict";
}
/**
 * RMUSContent
 * ===========
 *
 * Simple Klasse um auszulesen wo wir uns auf der Readmore.de Seite befinden.
 * Dadurch werden Funktionen des Userscriptes gesteuert.
 */
function RMUSContent(){

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
 * RMUSExtrabuttons
 * ================
 *
 * Klasse für die Extrabuttons. Ursprünglich von IllDepence entwickelt.
 * http://www.readmore.de/index.php?cont=profile&id=29432
 * @param Content {RMUSContent}
 * @constructor
 */

function RMUSExtrabuttons(Content){

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
     * Quasi-Konstuktor. Methode wird bei der Instanziierung des Objektes ausgeführt.
     * Selektiert das Formular, die CommentBox und startet anschließend die Initialisierung
     * der Extrabuttons.
     * @private
     */
    var _init = function(){
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

        if (Content.getMultipleContent(['news', 'matches', 'profile'], 'OR')) {
            container = _form.parent('div.center');

            if ($('div.headline_bg', container).length === 0) {
                toolbar = $('<div class="headline_bg" />');
                toolbar.css('padding', '3px 0px');
                container.prepend(toolbar);
            }

            returnValue = $('div.headline_bg', container);
        } else if (Content.getMultipleContent(['forum_thread', 'forum_edit', 'forum_newtopic'], 'OR')) {
            returnValue = $('div.headline_bg', _form);
        } else if (Content.getContent('msg')) {
            container = _commentBox.parent();

            if ($('div.headline_bg', container).length === 0) {
                toolbar = $('<div class="headline_bg" />');
                toolbar.css('padding', '3px 0px');
                container.prepend(toolbar);
            }

            returnValue = $('div.headline_bg', container);
        } else if (Content.getContent('groups_show_group')) {
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

        if (Content.getMultipleContent(['news', 'matches', 'profile'], 'OR')) {
            returnValue = $('form[name=form_comment]');
        } else if (Content.getMultipleContent(['forum_thread', 'forum_newtopic'], 'OR')) {
            returnValue = $('form[name=submitpost]');
        } else if (Content.getContent('forum_edit')) {
            returnValue = $('form[name=submiteditthread]');
        } else if (Content.getContent('msg')) {
            returnValue = $('td.text_h1_j form');
        } else if (Content.getContent('groups_show_group')) {
            if (Content.getAction() === 'threadedit') {
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

        if (Content.getContent('profile')) {
            returnValue = $('textarea[name=comment]', _form);
        } else if (Content.getContent('msg')) {
            returnValue = $('textarea[name=msg]', _form);
        } else if (Content.getContent('groups_show_group')) {
            if (Content.getAction() === 'threadedit') {
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

    /**
     * Init Methode starten
     */
    _init();
}
/**
 * RMUSOptions
 * ===========
 *
 * Klasse um die Optionen des Userscript zu handeln. Braucht zum instanziieren keine weiteren
 * Parameter, ruft direkt die _init() Methode auf um die Settings auszulesen.
 */
function RMUSOptions(){
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
    var _version = '2.1.8';

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
    _init = function(){
        // Optionen aus dem Localstorage auslesen
        _readOptionsFromLocalstorage();
    };

    /**
     * Funktion um den Wert einer bestimmten Option zurückzugeben.
     * @param {String} what
     */
    this.getOption = function(what){
        return _options[what];
    };

    /**
     * Gibt die aktuelle Version zurück.
     * @returns {string}
     */
    this.getVersion = function(){
        return _version;
    };

    /**
     * Fügt den Link für die Optionen in die Userbar auf der Readmore Seite ein.
     * Dadurch wird später das Fenster mit den Einstellungen verfügbar.
     */
    this.insertOptionsLink = function(){
        $('div.floatl.vcenter.elf.dgray:last').after('<div class="floatl vcenter" style="padding-top:4px;"><img src="http://images.readmore.de/img/header/line.jpg" alt="" style="height:25px; width:2px;"></div><div class="floatl vcenter elf dgray" style="margin:11px 10px;"><a id="openUserscriptOptions" href="#" class="black">Userscript</a></div>');
    };

    /**
     * Liest die Optionen aus dem HTML aus und speichert sie anschließend als JSON-String den Localstorage
     * des Browsers. Gibt im Fehlerfall eine einfache Meldung zurück.
     * @return {boolean}
     */
    this.saveOptions = function(){
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
    var _readOptionsFromHTML = function(){
        var userscriptOptions = {};

        // Geht alle Checkboxen durch, prüft ob die Box gechecked ist und setzt den passenden
        // Wert in den Optionen.
        $('input[type=checkbox].userscriptOptions').each(function () {
            var attr = $(this).attr('checked');
            if (attr == true || attr == 'checked') {
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
     * Attribut der klasse. Wird im Konstruktor aufgerunden, sollte also stets verfügbar sein.     *
     * @private
     */
    var _readOptionsFromLocalstorage = function(){
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
    var _writeOptionsToHTML = function(){
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
RMUS.leftColumn = {

    www : {
        // Wer Wohin Warum ausblenden
        hideWww : function () {
            $('#leftc>div.block:eq(0), div.line2:eq(0), div.line2:eq(1)').css('display', 'none');
            return false;
        }
    },

    streams : {
        // Array in dem die Stream-Images gepusht werden
        streamsToHide : [],

        // Alle Streams ausblenden
        hideStreams : function () {
            $('#leftc>div.block:eq(1), #leftc>div.block:eq(2), #leftc>div.block:eq(4), .line2:eq(1), .line2:eq(2), .line2:eq(0)').css('display', 'none');			
            return false;
        },

        // Forennavigation neuladen
        reloadStreams : function(){
            var caster = '';
            var player = '';
            var user = '';

            caster = $(RMUS.miscellaneous.reloadMainpageData.mainpageData).find('div.frontpage_stream:first').html();
            player = $(RMUS.miscellaneous.reloadMainpageData.mainpageData).find('div.frontpage_stream:last').html();
            user   = $(RMUS.miscellaneous.reloadMainpageData.mainpageData).find('#profilestream').html();

            $('div.frontpage_stream:first').html(caster);
            $('div.frontpage_stream:last').html(player);
            $('#profilestream').html(user);

            return false;
        }
    }
};
RMUS.messages = {

    iconUrl: 'http://readmore.thextor.de/userscript/img/msg-notification-icon.png',
    messageCount: 0,
    getUserBarItem: function (ns) {
        if (!ns) {
            ns = $('body > div.user_band');
        }

        return $('div.floatl.vcenter > a[href="index.php?cont=msg"]', ns);
    },
    checkForNewMessages: function () {
        $.ajax({
            type: 'POST',
            async: true,
            cache: false,
            url: 'http://www.readmore.de/index.php?cont=msg',
            contentType: 'text/html; charset=iso-8859-1;',
            dataType: 'html',
            success: function (data) {
                var newMsgCount = $('div#content table.p0:first td.ofhidden.bold', data).length,
                    currentMsgCount = 0,
                    currentLinkNode = RMUS.messages.getUserBarItem();

                if (currentLinkNode.length === 1) {
                    currentMsgCount = parseInt(currentLinkNode.text().match(/\d+/g)[0]);

                    if (newMsgCount !== currentMsgCount) {
                        RMUS.messages.messageCount = newMsgCount;

                        if (newMsgCount > currentMsgCount) {
                            var msgsReceived = newMsgCount - currentMsgCount;

                            RMUS.messages.changeUserBar(newMsgCount, true);
                            RMUS.messages.notifyUser(msgsReceived);
                        } else if (newMsgCount < currentMsgCount) {
                            RMUS.messages.changeUserBar(newMsgCount, newMsgCount > 0);
                        }
                    }
                }
            }
        });
    },
    changeUserBar: function (msgCount, showImg) {
        // Standard Animation für die User-Navi
        var node = RMUS.messages.getUserBarItem(),
            nodeParent = node.parent('div');

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
    },
    notifyUser: function (msgsReceived) {
        var title, msg;

        if (msgsReceived > 1) {
            title = 'Neue Readmore Nachrichten!';
            msg = 'Du hast ' + msgsReceived + ' neue Nachrichten erhalten!';
        } else {
            title = 'Neue Readmore Nachricht!';
            msg = 'Du hast eine neue Nachricht erhalten!';
        }

        if (Options.getOption('miscellaneous_reloadMessages_desktopNotifications') == 'checked') {
            RMUS.messages.notifications.create(title, msg);
        }

        if (Options.getOption('miscellaneous_reloadMessages_alertBox') == 'checked') {
            alert(msg);
        }

        if (Options.getOption('miscellaneous_reloadMessages_playSound') == 'checked') {
            RMUS.messages.playSound();
        }
    },
    playSound: function () {
        var audioUrl = Options.getOption('miscellaneous_reloadMessages_playSoundUrl');

        if (audioUrl) {
            try {
                if (audioElement === undefined) {
                    var audioElement = new Audio(audioUrl);
                }

                audioElement.pause();
                audioElement.play();
            } catch (e) {}
        }
    },
    notifications: {

        create: function (title, msg, options) {
            var defaultOptions = {
                icon: RMUS.messages.iconUrl,
                body: msg
            };

            var opts = $.extend(defaultOptions, (typeof options === 'object' ? options : {}));
            var notification = new Notify(title, opts);

            if (!notification.isSupported()) {
                return;
            }

            notification.show();
        }

    }

};
RMUS.middleColumn = {

/************************
*	FORUM		*
*************************/
    forum : {

        threadlink : '',
        page : '',

        // Link zum Thread ohne Seitenzahl ermitteln
        readThreadlink : function () {
            RMUS.middleColumn.forum.threadlink = $(location).attr('href').replace(/\&pagenum=.+$/, '');
            return false;
        },

        // Aktuelle Seite ermitteln
        readPage : function () {
            RMUS.middleColumn.forum.page = parseInt($('div.floatl.m2.elf').html().match(/<b>(.+?)<\/b>/)[1], 10);
            return false;
        },

/************************
*	 RELOAD POSTS	*
*************************/
        reloadPosts : {
            postcount : 0,
            waitUntilReload : 5,
            finishedPages : 0,
            oldLimit : 0,
            markPostColor : '#EEEEEE',                  // Hellgrau
            markPostColorRgb : 'rgb(238, 238, 238)',    // Hellgrau
            oldTitle : '',
            unseenPosts : [],

            // Anzhal der aktuellen Posts ermitteln
            readPostcount : function () {
                RMUS.middleColumn.forum.reloadPosts.postcount = $('[class^=post_]').length;
                return false;
            },

            // Neue Posts nachladen und einfügen
            readNewPosts : function () {
                // Nur wenn wir uns auf der letzten seite befinden
                var lastpage = $.trim($('div.floatl.m2.elf').html());

                if (lastpage.substr(lastpage.length-4) == '</b>'){
                    // Seiten endlos erweitern
                    if (Options.getOption('middleColumn_forum_reloadPosts_endlessPage') == 'checked') {
                        RMUS.middleColumn.forum.reloadPosts.endlessPage();
                    }

                    // Der eigentliche Reload
                    $.ajax({
                        type: 'POST',
                        async: true,
                        cache: false,
                        url: RMUS.middleColumn.forum.threadlink + '&pagenum=' + RMUS.middleColumn.forum.page,
                        contentType: 'text/html; charset=iso-8859-1;',
                        dataType: 'html',
                        success: function (data) {
                            var posts = data.match(/\<tr class=\"post\_[^"]+\"\>[^]+?\<\/tr\>/g);
                            if (posts != null) {
                                var footer = data.match(/\<tr class=\"cellheadercolor footer\_[^"]+\"\>[^]+?\<\/tr\>/g),
                                    oldPosts = (25 * RMUS.middleColumn.forum.reloadPosts.finishedPages),
                                    postNumber = posts.length + oldPosts,
                                    userid = $('div.floatl.vcenter.elf.dgray:eq(1)').html().match(/id=(.+?)"/)[1],
                                    i = RMUS.middleColumn.forum.reloadPosts.postcount;

                                for (i; i < postNumber; i++) {
                                    $('table.elf.forum.p2.bogray2').append(posts[i-oldPosts]);
                                    $('table.elf.forum.p2.bogray2').append(footer[i-oldPosts]);

                                    RMUS.middleColumn.forum.reloadPosts.unseenPosts.push(parseInt($('[class^=post_]:last').offset().top, 10));  // Zum markieren der neuen Posts
                                    RMUS.middleColumn.forum.reloadPosts.postcount++;
                                }

                                RMUS.middleColumn.forum.reloadPosts.oldLimit = window.pageYOffset + (window.innerHeight * 0.55);
                                // Beiträge aus den neuen Posts ignorieren
                                if (Options.getOption('miscellaneous_ignoreUser') == 'checked') RMUS.miscellaneous.ignoreUser.doIgnore(true, false, false);
                                // Edit vorbereiten
                                if (Options.getOption('middleColumn_forum_editPost') == 'checked') RMUS.middleColumn.forum.editPost.initializeEvent();
                                // Notzizen einblenden
                                if(Options.getOption('miscellaneous_note') == 'checked') RMUS.miscellaneous.note.initialize();
                                // Edit vorbereiten
                                if (Options.getOption('middleColumn_forum_editPost') == 'checked') RMUS.middleColumn.forum.editPost.initializeEvent();
                                // Youtubeplayer ersetzen
                                if(Options.getOption('miscellaneous_convertYoutube') == 'checked') RMUS.miscellaneous.convertYoutube();
                            }
                        },
                        beforeSend: function(jqXHR) {
                            jqXHR.overrideMimeType('text/html;charset=iso-8859-1');
                        }
                    });

                    // Rausfinden ob eine neue Seite existiert
                    if (Options.getOption('middleColumn_forum_reloadPosts_endlessPage') != 'checked') RMUS.middleColumn.forum.reloadPosts.checkForNewPage();
                    return false;
                }
            },

            // Neue Posts markieren
            markNewPosts : function () {
                var numberOfNewPosts = RMUS.middleColumn.forum.reloadPosts.unseenPosts.length,
                    i = 1;

                for(i; i <= numberOfNewPosts; i++) {
                    // Überprüfen ob der Posts bereits markiert ist, wenn ja die Schleife verlassen
                    if ($.trim(($('[class^=post_]:eq(' + (RMUS.middleColumn.forum.reloadPosts.postcount - i) + ')').css('background-color'))) == RMUS.middleColumn.forum.reloadPosts.markPostColorRgb) {
                        break;
                    }
                    $('[class^=post_]:eq(' + (RMUS.middleColumn.forum.reloadPosts.postcount - i) + ')').css('background-color', RMUS.middleColumn.forum.reloadPosts.markPostColor);
                }

                // Demarkieren starten
                RMUS.middleColumn.forum.reloadPosts.unmarkNewPosts();
                return false;
            },

            // Entfernt die Markierung von (ehemals) neuen Posts
            unmarkNewPosts : function() {
                var i = 0,
                    limit = window.pageYOffset + (window.innerHeight * 0.55),
                    deleteArray = [];

                $(RMUS.middleColumn.forum.reloadPosts.unseenPosts).each(function (index, value) {
                    // Nur demarkieren, wenn wir das Limit überschritten und uns bewegt / gescrollt haben
                    if(value < limit && limit != RMUS.middleColumn.forum.reloadPosts.oldLimit) {
                        $('[class^=post_]:eq(' + (RMUS.middleColumn.forum.reloadPosts.postcount - (RMUS.middleColumn.forum.reloadPosts.unseenPosts.length) + i) + ')').css('background-color', '#FFF');
                        i++;
                        deleteArray.push(index);
                    }
                });

                $(deleteArray).each(function (index, value) {
                    RMUS.middleColumn.forum.reloadPosts.unseenPosts.splice(value, 1);   // Unmarkierte / Gelesene Posts aus dem Array entfernen
                });

                return false;
            },

            // Anzahl der ungelesenen Posts im Titel / Tab anzeigen
            showNewPostsTitle : function () {
                if (RMUS.middleColumn.forum.reloadPosts.oldTitle == '') {
                    RMUS.middleColumn.forum.reloadPosts.oldTitle = $('title').text();
                }

                var title = RMUS.middleColumn.forum.reloadPosts.oldTitle;
                if (RMUS.middleColumn.forum.reloadPosts.unseenPosts.length) title = '(' + RMUS.middleColumn.forum.reloadPosts.unseenPosts.length + ') ' + title;

                $('title').text(title);
                return false;
            },

            // Ändert das Favicon wenn ungelesene Posts vorhanden sind
            changeFavicon : function () {
                var currentIcon = $('head>link[rel="shortcut icon"]').attr('href');
                if (RMUS.middleColumn.forum.reloadPosts.unseenPosts.length > 0 && currentIcon == '/favicon.ico') {
                    $('head>link[rel="shortcut icon"]').remove();
                    $('head').append('<link rel="shortcut icon" type="image/png" href="http://readmore.thextor.de/userscript/img/favicon.png">');
                }
                if (RMUS.middleColumn.forum.reloadPosts.unseenPosts.length == 0 && currentIcon == 'http://readmore.thextor.de/userscript/img/favicon.png') {
                    $('head>link[rel="shortcut icon"]').remove();
                    $('head').append('<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">');
                }
                return false;
            },

            // Setzt die Farbe (HEX + GRB) in der die neuen Posts markiert werden
            setMarkPostColor : function () {
                // Nur wenn eine HEX-Zahl eingegeben wurde
                if (Options.getOption('middleColumn_forum_reloadPosts_markPostColor')[0] == '#' && Options.getOption('middleColumn_forum_reloadPosts_markPostColor').length == 7) {
                    RMUS.middleColumn.forum.reloadPosts.markPostColor = Options.getOption('middleColumn_forum_reloadPosts_markPostColor');
                    RMUS.middleColumn.forum.reloadPosts.markPostColorRgb = "rgb(" + parseInt(RMUS.middleColumn.forum.reloadPosts.markPostColor.substr(1, 2), 16).toString() + ", " + parseInt(RMUS.middleColumn.forum.reloadPosts.markPostColor.substr(3, 2), 16).toString() + ", " + parseInt(RMUS.middleColumn.forum.reloadPosts.markPostColor.substr(5, 2), 16).toString() + ")";
                }
                return false;
            },

            // Ermöglicht das unbegrenzte Erweitern einer Seite
            endlessPage : function () {
                if (RMUS.middleColumn.forum.reloadPosts.postcount == (25 + (25 * RMUS.middleColumn.forum.reloadPosts.finishedPages))) {
                    RMUS.middleColumn.forum.reloadPosts.finishedPages++;
                    RMUS.middleColumn.forum.page++;
                }

                return false;
            },

            // Prüft ob eine neue Seite im Forum vorhanden ist
            checkForNewPage : function () {
                if (Options.getOption('middleColumn_forum_reloadPosts_checkForNewPage') == 'checked'){
                    if (RMUS.middleColumn.forum.reloadPosts.postcount == (25 + (25 * RMUS.middleColumn.forum.reloadPosts.finishedPages)) && $('#userscriptNewPage').length < 1) {

                        $.ajax({
                            type: 'POST',
                            async: true,
                            cache: false,
                            url: RMUS.middleColumn.forum.threadlink + '&pagenum=' + (RMUS.middleColumn.forum.page + 1),
                            contentType: 'text/html; charset=iso-8859-1;',
                            dataType: 'html',
                            success: function (data) {
                                var posts = data.match(/\<tr class=\"post\_[^"]+\"\>[^]+?\<\/tr\>/g);
                                if (posts != null) {
                                    $('table.elf.forum.p2:last').after('<br/><div id="userscriptNewPage" style="width:520px; height: 23px; background-color: #2B91FF; text-align: right; vertical-align:middle; display:table-cell"><a style="color: #fff; font-weight: bold; padding-right: 10px;" href="' + RMUS.middleColumn.forum.threadlink + '&pagenum=' + (RMUS.middleColumn.forum.page + 1) + '">Zur n&auml;chsten Seite</a></div>');
                                }
                            },
                            beforeSend: function(jqXHR) {
                                jqXHR.overrideMimeType('text/html;charset=iso-8859-1');
                            }
                        });
                    }
                }

                return false;
            },

            // Zu neuen Posts scrollen
            jumpToNewPosts :{
                waitUntilNextJump : 5,
                oldmimit : 0,

                setWaitUntilNextJump : function(){
                    var timeToWait = parseInt(Options.getOption('middleColumn_forum_reloadPosts_jumpToNewPosts_waitUntilNextJump'), 10);
                    if (timeToWait > 0){
                        RMUS.middleColumn.forum.reloadPosts.jumpToNewPosts.waitUntilNextJump = timeToWait;
                    }
                    return false;
                },

                jump : function(){
                    if (RMUS.middleColumn.forum.reloadPosts.unseenPosts.length > 0){
                        if ($('#userscript_enable_jump').attr('checked') == 'checked'){
                            var jumpto = RMUS.middleColumn.forum.reloadPosts.unseenPosts[0] - (window.innerHeight * 0.55) + 25;
                            if (jumpto <= RMUS.middleColumn.forum.reloadPosts.jumpToNewPosts.oldmimit) jumpto = RMUS.middleColumn.forum.reloadPosts.jumpToNewPosts.oldmimit + 25;
                            window.scrollTo(0, jumpto);
                            RMUS.middleColumn.forum.reloadPosts.jumpToNewPosts.oldmimit = jumpto;
                        }
                    }
                    return false;
                }
            }
        },

        // Vorschau für Forenposts
        preview : {
            userid : 0,
            username : '',
            previewIsEnabled : false,

            // HTML injizieren
            insertPreviewHtml : function () {
                $('<br /><table border="0" id="previewtable" style="display: none"><tr><td valign="top" id="previewleft" style="border: solid 1px #dddddd; border-right: none; width:110px; height:auto; min-height: 150px;"></td><td valign="top" id="preview" style="font-size: 11px; border: solid 1px #dddddd; width:408px; height:auto; min-height: 150px;"></td><td><img style="border: none; marin: 0, padding: 0;" src="http://readmore.thextor.de/userscript/img/minheight150.gif"></img></td></tr><tr><td colspan="2" style="border: solid 1px #dddddd; border-top: none; background-color: #DEDEDE; height: 12px;"></td><td style="border: none;"></td></table>').insertAfter('.center:last');
                $('<input type="button" value="Vorschau ein-/ausblenden" class="form" id="triggerPreview" style="margin-left: 10px;">').appendTo('.center:last');
            },

            // Grundgerüst des Preview (ohne den eigentlichen Post)
            initializePreview : function () {
                var d = new Date(),
                    timedata = {};

                timedata.day = d.getDate();
                timedata.month = (d.getMonth() + 1);
                timedata.year = d.getFullYear();
                timedata.hours = d.getHours();
                timedata.minutes = d.getMinutes();

                $.each(timedata, function (key, value) {
                    if (String(value).length == 1) {
                        timedata[key] = '0' + value;
                    }
                });

                RMUS.middleColumn.forum.preview.readUserid();	// User-ID auslesen
                RMUS.middleColumn.forum.preview.readUsername();	// Usernamen auslesen

                var firstRow = '<span style="font-size: 10px;"><a href="javascript:void(0)">#1337</a></span><br>',
                    secontRow = '<span style="font-size: 10px;">' + timedata.day + '.' + timedata.month + '.' + timedata.year + ', ' + timedata.hours + ':' + timedata.minutes + '</span><br>',
                    thirdRow = '<span style="font-size: 11px;"><img style="height: 11px;" src="http://images.readmore.de/img/icons/online.gif"><img src="http://readmore.thextor.de/userscript/img/space.gif" style="border: none; height: 1px; width: 5px;"><a class="bml" href="index.php?cont=profile&amp;id=' + RMUS.middleColumn.forum.preview.userid + '" title="' + RMUS.middleColumn.forum.preview.username + '">' + RMUS.middleColumn.forum.preview.username + '</a></span><br><br>',
                    fourthRow = '<span style="font-size: 10px;">Beitr&auml;ge: 1337</span><br><br>',
                    fifthRow = '<a href="index.php?cont=profile&amp;id=' + RMUS.middleColumn.forum.preview.userid + '" title="' + RMUS.middleColumn.forum.preview.username + '"><img src="' + $('.floatl.vcenter.elf.dgray.vcenter:first').html().match(/src="(.+?)" alt/)[1] + '"></a>';

                $('#previewleft').html(firstRow + secontRow + thirdRow + fourthRow + fifthRow);
                return false;
            },

            // User-ID auslesen
            readUserid : function () {
                RMUS.middleColumn.forum.preview.userid = $('div.floatl.vcenter.elf.dgray:eq(1)').html().match(/id=(.+?)"/)[1];
            },

            // Usernamen auslesen
            readUsername : function () {
                RMUS.middleColumn.forum.preview.username = $('div.floatl.vcenter.elf.dgray:eq(1)').html().match(/">(.+?)<\/a>/)[1]
            },

            // Den Post in die Preview umwandeln
            convertToPreview : function (raw_post) {
                var previewTags = {};
                previewTags['\\[b\\]'] = '<b>';
                previewTags['\\[/b\\]'] = '</b>';
                previewTags['\\[i\\]'] = '<i>';
                previewTags['\\[/i\\]'] = '</i>';
                previewTags['\\[u\\]'] = '<u>';
                previewTags['\\[/u\\]'] = '</u>';
                previewTags['\\[s\\]'] = '<s>';
                previewTags['\\[/s\\]'] = '</s>';
                previewTags['\\[hr\\]'] = '<hr style="margin:0; padding:0;">';
                previewTags['\\[center\\]'] = '<center>';
                previewTags['\\[/center\\]'] = '</center>';
                previewTags['\\[spoiler\\]'] = '<div><a href="#" onclick="spoiler(this);return false;" class="spoiler-link" style="background-image: url(http://images.readmore.de/img/icons/plus.jpg);">Spoiler</a><div class="spoiler-cont" style="display: none; ">';
                previewTags['\\[/spoiler\\]'] = '</div></div>';
                previewTags['\\[youtube]'] = '<iframe width="380" height="270" src="http://www.youtube.com/embed/';
                previewTags['\\[/youtube]'] = '" frameborder="0" allowfullscreen></iframe><br>';
                previewTags['\\[img]'] = '<img src="';
                previewTags['\\[/img]'] = '" alt="" title="" class="center" style="max-width:98%; border: 1px solid #CDCDCD;">';
                previewTags['\\[image]'] = '<img src="';
                previewTags['\\[/image]'] = '" alt="" title="" class="center" style="max-width:98%; border: 1px solid #CDCDCD;">';
                previewTags['\\[url]'] = '<a>';
                previewTags['\\[/url]'] = '</a>';
                previewTags['\\[/color]'] = '</span>';
                previewTags['\\[list]'] = '<ul style="margin: 0; padding: 0; padding-left: 20px;">';
                previewTags['\\[/list]'] = '</ul>';
                previewTags['\\[\\*]'] = '<li style="margin: 0; padding: 0; list-style-image: url(http://images.readmore.de/img/icons/else.png);">';

                var text = raw_post;

                // BB-Code ersetzen
                $.each(previewTags, function (key, value) {
                    var regEx = new RegExp(key, 'g');
                    text = text.replace(regEx, value);
                });

                // URL mit Link
                var urlPreview = text.match(/\[url=[^\]]+/g);
                if (urlPreview) {
                    $.each(urlPreview, function (key) {
                        var link = urlPreview[key].replace(/\[url=/, '').replace(/http:\/\//, '').replace(/https:\/\//, ''),
                            regEx = new RegExp('\\' + urlPreview[key].replace(/\(/g, '\\(').replace(/\)/g, '\\)').replace(/\?/g, '\\?') + '\\]');
                        text = text.replace(regEx, '<a href="http://' + link + '">');
                    });
                }

                // color
                var colorPreview = text.match(/\[color=[^\]]+/g);
                if (colorPreview) {
                    $.each(colorPreview, function (key) {
                        var color = text.match(/\[color=(.+?)\]/)[1],
                            regEx = new RegExp('\\' + colorPreview[key] + '\\]');
                        text = text.replace(regEx, '<span style="color: ' + color + ';">');
                    });
                }

                // Quote
                var quotes = text.match(/\[quot(.*?)\]/g);

                if (quotes != null) {
                    $.each(quotes, function (index, value) {
                        var quoteHead = '<div class="bggray2 bogray2 quote_titel">Zitat',
                            name = value.match(/\[quote=(.*?)\]/);

                        if (name != null) {
                            quoteHead = quoteHead + ' von ' + name[1];
                        }
                        quoteHead = quoteHead + ':</div>';
                        text = text.replace(value, quoteHead + '<div class="bogray2 quote">');
                    });
                }

                text = text.replace(/\[\/quote\]/g, '</div>');
                return text;
            },

            // Preview darstellen
            showPreview: function(){
                $('#preview').html(RMUS.middleColumn.forum.preview.convertToPreview(String($('#c_comment').val().replace(/(\r\n|\n|\r)/gm, '<br />'))));
            },

            // Preview starten / Ein- und ausblenden
            triggerPreview : function () {
                if (RMUS.middleColumn.forum.preview.previewIsEnabled == true) {
                    RMUS.middleColumn.forum.preview.deactivatePreview();
                } else {
                    RMUS.middleColumn.forum.preview.activatePreview();
                }
            },

            // Preview einblenden
            activatePreview: function () {
                RMUS.middleColumn.forum.preview.initializePreview();
                RMUS.middleColumn.forum.preview.showPreview();

                $('#previewtable').css('display', 'block');
                $('#c_comment').keyup(RMUS.middleColumn.forum.preview.showPreview);
                $('#c_comment').focus(RMUS.middleColumn.forum.preview.showPreview);
                RMUS.middleColumn.forum.preview.previewIsEnabled = true;
            },

            // Preview ausblenden
            deactivatePreview: function () {
                $('#previewtable').css('display', 'none');
                $('#c_comment').unbind("keyup", RMUS.middleColumn.forum.preview.showPreview);
                $('#c_comment').unbind("focus", RMUS.middleColumn.forum.preview.showPreview);
                RMUS.middleColumn.forum.preview.previewIsEnabled = false;
            }
        },

        replaceSpecialChars : function(text){
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

            replacePost['%E2%82%AC'] = '%80';		// €
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
        },

        // Post im Hintergrund
        postPerAjax : function () {
            var post = $('form[name=submitpost]').serialize();

            // Sonderzeichen ersetzen
             post = String(RMUS.middleColumn.forum.replaceSpecialChars(post));

            // Während der Wartezeiten den Submit-Knopf ausblenden
            $('.center:last').css('display', 'none');

            // Ist das Automatische neuladen deaktiviert, die nötigen Vorkehrungen dazu treffen
            if(RMUS.middleColumn.forum.reloadPosts.postcount == 0) {
                RMUS.middleColumn.forum.reloadPosts.readPostcount();
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
                        RMUS.middleColumn.forum.preview.deactivatePreview();
                        RMUS.middleColumn.forum.reloadPosts.readNewPosts();
                    }

                    // Submit-Knopf wieder einblenden
                    $('.center:last').css('display', 'block');
                },
                error: function (){
                    // Submit-Knopf wieder einblenden
                    $('.center:last').css('display', 'block');
                }
            });

            return false;
        },

        scrollForNewPage : {
            oldPosts : 0,
            insertPosts : function (){
                var limit = parseInt($('#c_comment').offset().top, 10) - 190;
                var position = window.pageYOffset + (window.innerHeight * 0.55);
                if (position >= limit){
                    // Der eigentliche Reload
                    $.ajax({
                        type: 'POST',
                        async: false,
                        cache: false,
                        url: String(RMUS.middleColumn.forum.threadlink + '&pagenum=' + (RMUS.middleColumn.forum.page + 1)),
                        contentType: 'text/html; charset=iso-8859-1;',
                        dataType: 'html',
                        success: function (data) {
                            var posts = data.match(/\<tr class=\"post\_[^"]+\"\>[^]+?\<\/tr\>/g);
                            if (posts != null) {
                                var postCharLenth = JSON.stringify(posts).length;
                                if (postCharLenth !== RMUS.middleColumn.forum.scrollForNewPage.oldPosts){
                                    RMUS.middleColumn.forum.scrollForNewPage.oldPosts = postCharLenth;

                                    var footer = data.match(/\<tr class=\"cellheadercolor footer\_[^"]+\"\>[^]+?\<\/tr\>/g);
                                    for (i = 0, k = parseInt(posts.length, 10); i < k; i++) {
                                        $('table.elf.forum.p2.bogray2').append(posts[i]);
                                        $('table.elf.forum.p2.bogray2').append(footer[i]);
                                    }

                                    RMUS.middleColumn.forum.page++;
                                    // Beiträge aus den neuen Posts ignorieren
                                    if (Options.getOption('miscellaneous_ignoreUser') == 'checked') RMUS.miscellaneous.ignoreUser.doIgnore(true, false, false);
                                    // Notzizen einblenden
                                    if(Options.getOption('miscellaneous_note') == 'checked') RMUS.miscellaneous.note.initialize();
                                }
                            }
                        },
                        beforeSend: function(jqXHR) {
                            jqXHR.overrideMimeType('text/html;charset=iso-8859-1');
                        }
                    });
                }

                return false;
            },
            editboxTop : function (){
                $('#content h1:first').after('<a id="RMUSeditboxTop" href="javascript:void(0);" style="float: right;" onclick="$(\'#content h1:first\').after($(\'form[name=submitpost]\')); $(this).css(\'display\',\'none\'); $(\'#RMUSeditboxBottom\').css(\'display\',\'\');">Editbox anzeigen<br /><br /></a>');
                $('#content br.clear:last').after('<a id="RMUSeditboxBottom" href="javascript:void(0);" style="float: right; display: none;" onclick="$(\'#content br.clear:last\').after($(\'form[name=submitpost]\')); $(this).css(\'display\',\'none\'); $(\'#RMUSeditboxTop\').css(\'display\',\'\');">Editbox anzeigen<br /><br /></a>');
            }
        },

        // Edit ohne Reload
        editPost : {

            originalPosts : [],

            initializeEvent : function(){
                $('tr[class*=footer_]>td>a[href*=edit]').click(function () {
                    var hrefParts = String($(this).attr('href')).match(/postid=(.*)/);

                    if (null !== hrefParts) {
                        var postid = parseInt(hrefParts[1], 10);
                        $(this).attr('href', 'javascript:void(0);');

                        RMUS.middleColumn.forum.editPost.loadPost(postid);
                        RMUS.middleColumn.forum.editPost.showEditMenu(postid);
                    }
                });

                return false;
            },

            loadPost : function(postid){
                var height = $('tr[class=post_' + postid + ']>td:last').css('height');
                RMUS.middleColumn.forum.editPost.originalPosts[postid] = $('tr[class=post_' + postid + ']>td:last').html();

                $('tr[class=post_' + postid + ']>td:last').html('');
                $('tr[class=post_' + postid + ']>td:last').append('<textarea style="width: 100%; height: ' + height + '; padding: 0; margin: 0;"></textarea>');

                $.ajax({
                    type: 'POST',
                    async: true,
                    cache: false,
                    url: 'index.php?cont=forum/edit&postid=' + postid,
                    contentType: 'text/html; charset=iso-8859-1;',
                    dataType: 'html',
                    success: function (data) {
                        $('tr[class=post_' + postid + ']>td:last textarea').val(data.replace(/(\r\n|\n|\r)/gm,'[newline]').match(/<textarea(.*?)>(.*?)<\/textarea>/)[2].replace(/\[newline\]/g, '\r\n'));
                    },
                    beforeSend: function(jqXHR) {
                        jqXHR.overrideMimeType('text/html;charset=iso-8859-1');
                    }
                });

                return false;
            },

            showEditMenu : function(postid){
                var submit = '<a class="edit_submit_' + postid + '" href="javascript:void(0);" style="margin-right: 4px;">Edit absenden</a>';
                var cancel = '<a class="edit_cancel_' + postid + '"href="javascript:void(0);" style="color: gray;">Edit abrechen</a>&nbsp;|&nbsp;';
                $('tr[class*=footer_' + postid + ']>td').append('<div>' + cancel + submit + '</div>');

                $('tr[class*=footer_' + postid + ']>td>div>a:first').click(function () {
                    RMUS.middleColumn.forum.editPost.cancelEdit(postid);
                });

                $('tr[class*=footer_' + postid + ']>td>div>a:last').click(function () {
                    RMUS.middleColumn.forum.editPost.submitEdit(postid);
                });

                return false;
            },

            cancelEdit : function(postid){
                $('tr[class*=footer_' + postid + ']>td>div').remove();
                $('tr[class=post_' + postid + ']>td:last').html('');
                $('tr[class*=footer_' + postid + ']>td>a:eq(1)').attr('href', 'http://www.readmore.de/index.php?cont=forum/edit&postid=' + postid);

                $('tr[class=post_' + postid + ']>td:last').html(RMUS.middleColumn.forum.editPost.originalPosts[postid]);
                RMUS.middleColumn.forum.editPost.originalPosts[postid] = null;

                $('tr[class*=footer_' + postid + ']>td>div>a:first').off('click');
                $('tr[class*=footer_' + postid + ']>td>div>a:last').off('click');
                $('tr[class*=footer_' + postid + ']>td>a:eq(1)').off('click');
                RMUS.middleColumn.forum.editPost.initializeEvent();
                return false;
            },

            submitEdit : function(postid){
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
                        var f_uid = $(datafirst).find('input[name="f_uid"]').val();
                        var boardid = $(datafirst).find('input[name="thread[boardid]"]').val();
                        var threadid = $(datafirst).find('input[name="thread[threadid]"]').val();
                        var postidedit = $(datafirst).find('input[name="post[postid]"]').val();
                        var threadtopic = $(datafirst).find('input[name="thread[threadtopic]"]').val();

                        newpost = $('tr[class=post_' + postid + ']>td:last textarea').val();
                        postdata = 'f_uid=' + f_uid + '&thread[boardid]=' + boardid + '&thread[threadid]=' + threadid + '&post[postid]=' + postidedit + '&postnew_newposttext=' + encodeURI(newpost).replace(/&amp;/g, '&').replace(/&/g, '%26');
                        if (threadtopic != null){
                            if (threadtopic.trim().length > 0) postdata += '&thread[threadtopic]=' + encodeURI(threadtopic).replace(/&amp;/g, '&').replace(/&/g, '%26');
                        }
                        postdata = RMUS.middleColumn.forum.replaceSpecialChars(postdata);

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
                                if(content.match(/Fehler/)){
                                    alert('Es ist leider ein Fehler aufgetreten. Bitte lade die Seite neu!');
                                }
                            },
                            error: function (){
                                alert('Es ist leider ein Fehler aufgetreten. Bitte lade die Seite neu!');
                            }
                        });
                    },
                    beforeSend: function(jqXHR) {
                        jqXHR.overrideMimeType('text/html;charset=iso-8859-1');
                    }
                });

                $('tr[class*=footer_' + postid + ']>td>div>a:first').off('click');
                $('tr[class*=footer_' + postid + ']>td>div>a:last').off('click');
                $('tr[class*=footer_' + postid + ']>td>a:eq(1)').off('click');

                $('tr[class*=footer_' + postid + ']>td>div').remove();
                $('tr[class=post_' + postid + ']>td:last').html(RMUS.middleColumn.forum.preview.convertToPreview(newpost.replace(/(\r\n|\n|\r)/gm, '<br />')));
                $('tr[class*=footer_' + postid + ']>td>a:eq(1)').attr('href', 'http://www.readmore.de/index.php?cont=forum/edit&postid=' + postid);
                RMUS.middleColumn.forum.editPost.initializeEvent();

                return false;
            }
        }
    },

    searchJumpToLastpage : {
        displayLink : function(){
            $('#content a[href^="index.php?cont=forum/thread&threadid="]').each(function(){
                var link = $(this).attr('href').replace('&page=1', '&pagenum=lastpage');
                $(this).parent().append('<a href="' + link + '" class="floatr" title="Last Page"><img src="http://images.readmore.de/img/icons/high_next.gif" height="9" width="11" alt=""></a>');
            });

            return false;
        }
    }
};
RMUS.miscellaneous = {
    // Blendet einen Button zum Runterscrollen ein
    buttonScrollDown : function () {
        $('.floatr.m2:first').append('<img onclick="window.scrollTo(0, $(\'td.ten.vtop:last\').offset().top-50);" style="top: 0; height: 13px; padding-right: 2px; cursor: pointer;" alt="scroll down" src="http://readmore.thextor.de/userscript/img/arrow_down_alt1_16x16.png" />');
        return false;
    },

    // Blendet einen Button zum Hochscrollen ein
    buttonScrollUp : function () {
        $('.floatl.m2.elf:last').css('width', '100%');
        $('.floatl.m2.elf:last').append('<img onclick="window.scrollTo(0,0)" style="float: right; height: 13px; padding-right: 10px; cursor: pointer;" alt="scroll up" src="http://readmore.thextor.de/userscript/img/arrow_up_alt1_16x16.png" />');
        return false;
    },

    // Sortiert den Titel um
    reSortTitle : function () {
        var title = $('title').text(),
            pieces = title.split('\u00BB');	// Bei den Doppelpfeilen trennen

        title = pieces[2] + ' ' + '\u00BB' + pieces[1] + '\u00BB' + ' ' + pieces[0];
        $('title').text(title);
        return false;
    },

    // Wandelt Bilder-URLs in eigentliche Bilder um
    convertImageLinks: function() {
    	$('a[href$=".png"], a[href$=".jpg"], a[href$=".gif"], a[href$=".bmp"]').each(function() {
    	    $(this).html('<img src="' + $(this).attr('href') + '" class="center" style="max-width: 98%; border: 1px solid #CDCDCD" />');
    	});
    },

    // Zum letzten Post springen
    lastPageJumpToLastPost : function () {
        var lastpage = document.location.href.match(/pagenum=lastpage/);
        if (lastpage != null) {
            if (lastpage[0] == 'pagenum=lastpage') {
                window.scrollTo(0, $('td.ten.vtop:last').offset().top - 50);
            }
        }

        return false;
    },

    createFixedToolbar: function () {
        $('body > div.user_band').css({
            'position': 'fixed',
            'width': '100%'
        });
        $('div#wrapper').css('margin-top', '34px');
    },

    reloadMainpageData : {
        mainpageData : '',

        readPage : function() {
            $.ajax({
                type: 'POST',
                async: true,
                cache: false,
                url: 'http://www.readmore.de/index.php?cont=userstream_overview',
                contentType: 'text/html; charset=iso-8859-1;',
                dataType: 'html',
                success: function (data) {
                    var pageData = data;

                    if(pageData != null){
                        // Prüft auf Fehler beim Laden der Seite
                        if (pageData.search('<div class="error">') != -1) {
                            RMUS.miscellaneous.reloadMainpageData.readPage();
                        } else {
                            RMUS.miscellaneous.reloadMainpageData.mainpageData = pageData.replace(/(\r\n|\n|\r)/gm,' ').replace(/\s+/g," ");
                        }
                    }
                },
                beforeSend: function(jqXHR) {
                    jqXHR.overrideMimeType('text/html;charset=iso-8859-1');
                }
            });

            return false;
        }
    },

    stopAvatarAnimation : {
        isGifImage : function(i){
            return /^(?!data:).*?\/user.*?\.gif/i.test(i.src);
        },

        freeze_gif : function (i) {
            var c = document.createElement('canvas');
            var w = c.width = i.width;
            var h = c.height = i.height;
            c.getContext('2d').drawImage(i, 0, 0, w, h);
            try {
                i.src = c.toDataURL("image/gif");
            } catch(e) {
                for (var j = 0, a; a = i.attributes[j]; j++)
                    c.setAttribute(a.name, a.value);
                i.parentNode.replaceChild(c, i);
            }

            return false;
        },

        stopAnimation : function (){
            [].slice.apply(document.images).filter(RMUS.miscellaneous.stopAvatarAnimation.isGifImage).map(RMUS.miscellaneous.stopAvatarAnimation.freeze_gif);
            return false;
        }
    },

    convertYoutube : function(){
        $('iframe[width=380][height=270][frameborder=0]').each(function() {
            var link = 'http://www.youtube.com/watch?v=' + String($(this).attr('src')).trim().replace('http://www.youtube.com/embed/', '');
            $(this).after('<a href="' + link + '">' + link + '</a>');
            $(this).remove();
        });

        return false;
    },

    ignoreUser : {
        user : [],
        ignoreCount : 0,

        setUser : function(){
            var user = [];
            $(String(Options.getOption('miscellaneous_ignoreUser_usernames')).split(',')).each(function(index, value){
                user.push(value.trim());
            });

            RMUS.miscellaneous.ignoreUser.user = user;
            return false;
        },

        doIgnore : function(thread, ticker, profile) {
            if (RMUS.miscellaneous.ignoreUser.user.length == 0) {
                RMUS.miscellaneous.ignoreUser.setUser();
            }

            if (thread) {
                $(RMUS.miscellaneous.ignoreUser.user).each(function(index, value) {
                    $('tr[class*=post_]:has(a[title="' + value + '"]) td').each(function() {

                        if (this.innerHTML.match(/ignored_/) == null){
                            if (RMUS.miscellaneous.ignoreUser.ignoreCount % 2){
                                RMUS.miscellaneous.ignoreUser.ignoreCount--;
                                $(this).html('<div style="display:none;" class="ignored_' + RMUS.miscellaneous.ignoreUser.ignoreCount + '">' + $(this).html() + '</div>');
                                RMUS.miscellaneous.ignoreUser.ignoreCount = RMUS.miscellaneous.ignoreUser.ignoreCount + 2;
                            }
                            else{
                                $(this).html('<a style="font-size: 9px;" href="javascript:void(0)" onclick="$(\'.ignored_' + RMUS.miscellaneous.ignoreUser.ignoreCount + '\').toggle(); if(this.innerHTML == \'Beitrag einblenden\'){this.innerHTML = \'Beitrag ausblenden\';}else{this.innerHTML = \'Beitrag einblenden\';}">Beitrag einblenden</a><br/>' + '<br/><div style="display:none;" class="ignored_' + RMUS.miscellaneous.ignoreUser.ignoreCount + '">' + $(this).html() + '</div>');
                                RMUS.miscellaneous.ignoreUser.ignoreCount++;
                            }
                        }
                    });
                });
            }

            if (ticker || profile) {
                $(RMUS.miscellaneous.ignoreUser.user).each(function(index, value) {
                    $('div .elf.cmt_kopf:has(a.cmt_head:contains(' + value + '))').next().each(function(){
                        $(this).html('<a href="javascript:void(0)" onclick="$(\'.ignored_' + RMUS.miscellaneous.ignoreUser.ignoreCount + '\').toggle();">Beitrag einblenden</a><br/>' + '<br/><div style="display:none;" class="ignored_' + RMUS.miscellaneous.ignoreUser.ignoreCount + '">' + $(this).html() + '</div>');
                        RMUS.miscellaneous.ignoreUser.ignoreCount++;
                    });
                });
            }

            return false;
        }
    },
    note : {
        notenumber : 0,
        initialize : function() {
            $('tr[class*=post_]>td:even:not(:has(textarea))').each(function(){
                var br = '<br />';
                var user = String($(this).find('a.bml').attr('title'));
                var notenr = RMUS.miscellaneous.note.notenumber++;

                if ($($(this).html()).length > 0) br = '<br /><br />';
                $(this).append(br + '<center><a href="javascript:void(o);" name="note_' + user + '_' + notenr + '">Notiz</a><br /><br /><textarea style="display:none;height:100px;width:98%" name="note_' + user + '_' + notenr + '"></textarea></center>');

                $('a[name="note_' + user + '_' + notenr + '"]').click(function () {
                    var notes = JSON.parse(localStorage.getItem('userscriptNote')),
                        note = $('textarea[name="note_' + user + '_' + notenr + '"]'),
                        closing = note.is(':visible');

                    if (notes == null) notes = {};

                    if (true === closing) {
                        notes[user] = String(note.val()).trim();
                    } else {
                        note.val(notes[user]);
                    }

                    note.toggle();
                    localStorage.setItem('userscriptNote', JSON.stringify(notes));
                });
            });

            return false;
        }
    }
};
RMUS.rightColumn = {

/************************
*	TICKER		*
*************************/
    ticker : {
        // Blendet den Ticker komplett aus
        hideTicker : function () {
            $('#tickr, div.line3:eq(0), div.line3:eq(1)').css('display','none');
            return false;
        },

        reloadTicker : function(){
            var reloadData = '';
            reloadData = $(RMUS.miscellaneous.reloadMainpageData.mainpageData).find('#nav_matchticker').html();

            if (reloadData && reloadData.length > 0) {
                $('#nav_matchticker').html(reloadData);
            }

            return false;
        }
    },

/************************
*	HEADLINES	*
*************************/
    headlines : {

        headlineElements: [],

        // Blendet die Schlagzeilen komplett aus
        hideHeadlines : function () {
            document.getElementById('headlines').style.display = "none";
            return false;
        },

        // Blendet Counterstrike aus
        hideCounterstrike : function () {
            if (this.headlineElements.length === 0) this.readHeadlineElements();
            $(this.headlineElements[0]).css('display', 'none');
            return false;
        },

        // Blendet Starcraft aus
        hideStarcraft : function () {
            if (this.headlineElements.length === 0) this.readHeadlineElements();
            $(this.headlineElements[1]).css('display', 'none');
            return false;
        },

        // Blendet Dota aus
        hideDefenseOfTheAncients : function () {
            if (this.headlineElements.length === 0) this.readHeadlineElements();
            $(this.headlineElements[2]).css('display', 'none');
            return false;
        },

        // Blendet LoL aus
        hideLeagueOfLegends : function () {
            if (this.headlineElements.length === 0) this.readHeadlineElements();
            $(this.headlineElements[3]).css('display', 'none');
            return false;
        },

        // Blendet Warcraft aus
        hideWarcraft3 : function () {
            if (this.headlineElements.length === 0) this.readHeadlineElements();
            $(this.headlineElements[4]).css('display', 'none');
            return false;
        },

        // Blendet Sonstiges aus
        hideSonstiges : function () {
            if (this.headlineElements.length === 0) this.readHeadlineElements();
            $(this.headlineElements[5]).css('display', 'none');
            return false;
        },

        readHeadlineElements: function(){
            var elements    = document.getElementById('nav_schlagzeilen').children;
            var count       = elements.length - 4; // Einsenden, Archiv, Übersicht

            this.headlineElements = [];

            for(var i = 0, k = -1; i < count; i++){
                if (elements[i].className === 'bml'){
                    this.headlineElements[++k] = [];
                }

                this.headlineElements[k].push(elements[i]);
            }
        }
    },

/************************
*	FORUM		*
*************************/
    forum : {
        // Startet das umsortieren des Forums
        initializeForum : function () {
            var html = '';
            var sortForum = [Options.getOption('rightColumn_forum_hideForum_0'), Options.getOption('rightColumn_forum_hideForum_1'), Options.getOption('rightColumn_forum_hideForum_2'), Options.getOption('rightColumn_forum_hideForum_3'), Options.getOption('rightColumn_forum_hideForum_4')];
            var menuItems	= document.getElementsByClassName('cont_box')[1].children;
            var sections	= ['','','','',''];

            // Alle Menueinträge durchgehen
            for (var j = 0, k = menuItems.length, l = -1, item = ''; j < k; j++){
                // HTML-Auslesen
                item = menuItems[j].outerHTML;
                // Sektionen hochzählen
                if (item.indexOf('class="bml"') !== -1)	l++;
                // Bilder in der "Featured Thread" Sektion anpassen
                if (l === 0) item = item.replace('" height="11px"', '" height="11px" class="userscript11px" ');
                // Eintrag zur Sektion hinzufügen
                sections[l] += item;
            }

            // Leerzeilen entfernen
            for (var n = 0, o = sections.length; n < o; n++){
                sections[n] = sections[n].replace(/(<div class="spacer_s"><\/div>)|(<br>)|(<br \/>)/g, '');
            }

            // Keine Featured Threads vorhanden -> rauswerfen
            if (sections[4] === ''){
                var sectionsNew = [''];
                for (var i = 0, m = sections.length; i < m; i++) {
                    if (sections[i] !== ''){
                        sectionsNew.push(sections[i]);
                    }
                }
                sections = sectionsNew;
            }

            // Reihenfolge der Sektionen entsprechen den Optionen anpassen
            for (var i = 0, m = sections.length; i < m; i++) {
                switch (sortForum[i]){
                    case 'featuredthreads':	html += sections[0] + '<br>';
                                break;
                    case 'esportforen':	html += sections[1] + '<br>';
                                break;
                    case 'technik':		html += sections[2] + '<br>';
                                break;
                    case 'offtopicforen':	html += sections[3] + '<br>';
                                break;
                    case 'spiele':		html += sections[4] + '<br>';
                                break;
                }
            }

            // Noch einmal prüfen ob Leerzeilen vorhanden sind, nötig wegen dem Featured Thread fix
            html = html.replace(/(<br>|<br \/>)+/gi, '<br>');

            // Einfügen
            document.getElementsByClassName('cont_box')[1].innerHTML = html;

            // Größte der Bilder anpassen
            $('.userscript11px').css('height', '11px').css('width', '11px');

            return false;
        },

        // Forennavigation neuladen
        reloadForum : function() {
            var reloadData = '';
            reloadData = $(RMUS.miscellaneous.reloadMainpageData.mainpageData).find('div.cont_box:last').html();

            if (reloadData && reloadData.length > 0) {
                $('.cont_box:last').html(reloadData);
                if (Options.getOption('rightColumn_forum_sections') == 'checked') RMUS.rightColumn.forum.initializeForum();
            }

            return false;
        },

        // Forennavigation manuell neuladen
        reloadForumPerClick : {
            addimage : function (){
                $('a.headline_link[href="index.php?cont=forum/forum"]').parent().append('<span style="float: right;"><img id="userscript_reloadForumButton" src="http://readmore.thextor.de/userscript/img/refresh.png" style="height: 13px; padding-top: 2px; cursor: pointer;">&nbsp;</span>');
                return false;
            },

            reload : function(){
                RMUS.miscellaneous.reloadMainpageData.readPage();
                window.setTimeout(function () {RMUS.rightColumn.forum.reloadForum();}, 1500);
            }
        },

        // Blendet das Forum komplett aus
        hideForum : function () {
            $('div.headline_bg:last, div.cont_box:last').css('display','none');
            return false;
        }
    }
};
// Global FIX ME
var Options = new RMUSOptions();
var Content = new RMUSContent();

RMUS.start = function () {

    var Options = new RMUSOptions();
    var Content = new RMUSContent();

    /********************************
    *	Funktionen aktivieren	*
    *********************************/

    // BC: Einmal speichern, damit auch die nicht-selektierten Checkboxen gespeichert werden.
    if (!localStorage.getItem('bcOptionsSaved')) {
        Options.saveOptions();
        localStorage.setItem('bcOptionsSaved', true);
    }

    if (Options.getOption('miscellaneous_fixedToolbar')) {
        RMUS.miscellaneous.createFixedToolbar();
    }

    // WWW, Streams, Galerie, Ergebnisticker, Schlagzeilen und Forum angezeigt
    if (!Content.getMultipleContent(['profile', 'guides'], 'OR')) {
        // WWW ausblenden
        if (Options.getOption('leftColumn_www_hideWww') === 'checked') RMUS.leftColumn.www.hideWww();

        // Streams ausblenden
        if (Options.getOption('leftColumn_streams_hideStreams') === 'checked') {
            RMUS.leftColumn.streams.hideStreams();
        }

        // Ticker ausblenden
        if (Options.getOption('rightColumn_ticker_hideTicker') === 'checked') RMUS.rightColumn.ticker.hideTicker();

        // Schlagzeilen ausblenden
        if (Options.getOption('rightColumn_headlines_hideHeadlines') === 'checked') RMUS.rightColumn.headlines.hideHeadlines();  // Alle
        else{	// Individuell
            if (Options.getOption('rightColumn_headlines_hideCounterstrike') === 'checked') RMUS.rightColumn.headlines.hideCounterstrike();
            if (Options.getOption('rightColumn_headlines_hideStarcraft') === 'checked') RMUS.rightColumn.headlines.hideStarcraft();
            if (Options.getOption('rightColumn_headlines_hideDefenseOfTheAncients') === 'checked') RMUS.rightColumn.headlines.hideDefenseOfTheAncients();
            if (Options.getOption('rightColumn_headlines_hideLeagueOfLegends') === 'checked') RMUS.rightColumn.headlines.hideLeagueOfLegends();
            if (Options.getOption('rightColumn_headlines_hideWarcraft3') === 'checked') RMUS.rightColumn.headlines.hideWarcraft3();
            if (Options.getOption('rightColumn_headlines_hideSonstiges') === 'checked') RMUS.rightColumn.headlines.hideSonstiges();

            // Fixt die Größe des Bildes
            $('#nav_schlagzeilen img[alt=activity]').css('height', '11px');
            $('#nav_schlagzeilen img[alt=activity]').css('width', '11px');
        }

        // Forum ausblenden
        if (Options.getOption('rightColumn_forum_hideForum') === 'checked')	RMUS.rightColumn.forum.hideForum();	// Komplett ausblenden
        else{	// Individuell
            if (Options.getOption('rightColumn_forum_sections') === 'checked') {
                RMUS.rightColumn.forum.initializeForum();
            }
        }

        // Neuladen der Forannavigation beziehungsweise der Streams oder Ticker
        if (Options.getOption('rightColumn_forum_reloadForum') === 'checked' || Options.getOption('leftColumn_streams_reloadStreams') === 'checked' || Options.getOption('rightColumn_ticker_reloadTicker') === 'checked'){
            RMUS.miscellaneous.reloadMainpageData.readPage();
        }

        // Button um die Forennavigation zu aktualisieren
        RMUS.rightColumn.forum.reloadForumPerClick.addimage();
        $('#userscript_reloadForumButton').click(function () { RMUS.rightColumn.forum.reloadForumPerClick.reload(); });
    }

        // Sprung zur letzten Seite in den Suchergebnissen
        if (Content.getContent('search')){
            if (Options.getOption('middleColumn_search_jump_to_last_page') === 'checked') RMUS.middleColumn.searchJumpToLastpage.displayLink();
        }

    // Nur im Forum (Threadansicht) aktivieren
    if (Content.getContent('forum_thread')) {

        // Link zum Thread und Seite herausfinden
        RMUS.middleColumn.forum.readThreadlink();
        RMUS.middleColumn.forum.readPage();

        // Wenn Lastpage gesetzt ist, zum letzten Post springen
        if (Options.getOption('miscellaneous_lastPageJumpToLastPost') === 'checked') RMUS.miscellaneous.lastPageJumpToLastPost();

        // Knopf zum hochscrollen
        if (Options.getOption('miscellaneous_buttonScrollUp') === 'checked') RMUS.miscellaneous.buttonScrollUp();

        // Knopf zum runterscrollen
        if (Options.getOption('miscellaneous_buttonScrollDown') === 'checked') RMUS.miscellaneous.buttonScrollDown();

        // Titel umsortieren
        if (Options.getOption('miscellaneous_reSortTitle') === 'checked') RMUS.miscellaneous.reSortTitle();

        // Bilderlinks umwandeln
        if (Options.getOption('miscellaneous_convertImageLinks') === 'checked') RMUS.miscellaneous.convertImageLinks();

        // Vorschau
        if (Options.getOption('middleColumn_forum_preview') === 'checked') {
            RMUS.middleColumn.forum.preview.insertPreviewHtml();
            $('#triggerPreview').click(RMUS.middleColumn.forum.preview.triggerPreview);
        }

        // Posten im Hintergrund
        if (Options.getOption('middleColumn_forum_postPerAjax') === 'checked') {
            $('input[name=submit_thread]').click(function (event) {
                event.preventDefault();
                RMUS.middleColumn.forum.postPerAjax();
            });
        }

        // Posts nachladen
        if (Options.getOption('middleColumn_forum_reloadPosts_readNewPosts') === 'checked') {
            RMUS.middleColumn.forum.reloadPosts.readPostcount();

            // Ungelesene Posts markieren
            if (Options.getOption('middleColumn_forum_reloadPosts_markNewPosts') === 'checked') {
                // Farbe zum markieren setzen
                if (Options.getOption('middleColumn_forum_reloadPosts_markPostColor') &&
                    Options.getOption('middleColumn_forum_reloadPosts_markPostColor').length){

                    RMUS.middleColumn.forum.reloadPosts.setMarkPostColor();
                }
            }

            if (Options.getOption('options.middleColumn_forum_reloadPosts_jumpToNewPosts') === 'checked' && Options.getOption('middleColumn_forum_reloadPosts_endlessPage') === 'checked'){
                $('a.bookmark').after('<input style="margin-left: 2px;" type="checkbox" id="userscript_enable_jump" name="userscript_enable_jump">');
                RMUS.middleColumn.forum.reloadPosts.jumpToNewPosts.setWaitUntilNextJump();
                window.setInterval(function () {
                    RMUS.middleColumn.forum.reloadPosts.jumpToNewPosts.jump();
                }, parseInt(RMUS.middleColumn.forum.reloadPosts.jumpToNewPosts.waitUntilNextJump, 10) * 1000);
            }
        }

        // Avataranimationen stoppen
        if (Options.getOption('miscellaneous_stopAvatarAnimation') === 'checked') {
            RMUS.miscellaneous.stopAvatarAnimation.stopAnimation();
        }

        // Notzizen einblenden
        if(Options.getOption('miscellaneous_note') === 'checked') {
            RMUS.miscellaneous.note.initialize();
        }

        // Edit vorbereiten
        if (Options.getOption('middleColumn_forum_editPost') === 'checked'){
            RMUS.middleColumn.forum.editPost.initializeEvent();
        }

        // Youtubeplayer ersetzen
        if(Options.getOption('miscellaneous_convertYoutube') === 'checked') {
            RMUS.miscellaneous.convertYoutube();
        }

        // Editbox verschieben
        if (Options.getOption('middleColumn_forum_hideForum_editboxTop')){
            RMUS.middleColumn.forum.scrollForNewPage.editboxTop();
        }
    }

    // User ignorieren
    if (Options.getOption('miscellaneous_ignoreUser') === 'checked'){
        RMUS.miscellaneous.ignoreUser.doIgnore(Content.getContent('forum_thread'), Content.getContent('matches'), Content.getContent('profile'));
    }

    // Extrabuttons in den entsprechenden Seiten initialisieren
    if (Content.getMultipleContent(['forum_thread', 'forum_newtopic', 'forum_edit', 'matches', 'msg', 'profile', 'groups_show_group'], 'OR')) {
        if (Options.getOption('miscellaneous_extraButtons') === 'checked') {
            var Extrabuttons = new RMUSExtrabuttons(Content);
        }
    }

    // Fix image jumping in forum box between requests
    $('head').append('<style type="text/css">div#nav_schlagzeilen div.listing > a > img {width: 11px; height: 11px;} div.cont_box div.listing > img {width: 5px; height: 7px;}</style>');

    // Optionen einfügen
    $('body').append('<style type="text/css">div#userscriptOptionsOverlay { position: absolute; top: 0; left: 0; width: 100%; z-index: 1337; display: none; background-color: #fff; opacity: 0.8; } #userscriptOptions.rmus-options { display: none; box-shadow: 0px 0px 6px 1px #80D4EE; position: absolute; width: 600px; left: 50%; margin-left: -300px; top: 75px; border: 2px solid #00aeed; border-radius: 3px; background-color: #fff; z-index: 1338; } #userscriptOptions.rmus-options-wrapper { position: relative; } #userscriptOptions .rmus-options-header { border-bottom: 2px solid #e2e2e2; padding: 10px; color: #fff; background: #46c1ea; background: -moz-linear-gradient(top, #46c1ea 0%, #00aeed 100%); background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#46c1ea), color-stop(100%,#00aeed)); background: -webkit-linear-gradient(top, #46c1ea 0%,#00aeed 100%); background: -o-linear-gradient(top, #46c1ea 0%,#00aeed 100%); background: -ms-linear-gradient(top, #46c1ea 0%,#00aeed 100%); background: linear-gradient(to bottom, #46c1ea 0%,#00aeed 100%); } #userscriptOptions .rmus-options-header h1 { font-size: 16px; text-transform: uppercase; float: left; text-shadow: 1px 1px #A0A0A0; color: #fff; } #userscriptOptions .rmus-options-header a { color: #fff; border-bottom: 1px dotted #fff; } #userscriptOptions .rmus-options-header a:hover { text-decoration: none; } #userscriptOptions .rmus-options-header .rmus-links { float: right; margin-top: 2px; } #userscriptOptions .rmus-options-header .rmus-links .rmus-version { font-weight: bold; } #userscriptOptions .rmus-options-content { overflow-y: scroll; height: 592px; } #userscriptOptions .rmus-options-content table { border: none; width: 100%; margin-top: -1px; } #userscriptOptions .rmus-options-content table .menuparent { background-color: #fff; padding: 0; } #userscriptOptions .rmus-options-content table .menufirstchild { display: none; background-color: #f1f1f1; margin: 0; padding: 0; } #userscriptOptions .rmus-options-content table .menusecondchild { display: none; background-color: #e2e2e2; margin: 0; padding: 0; } #userscriptOptions .rmus-options-content table .headline td { color: #7A7A7A; font-size: 14px; margin: 0px; padding: 5px 0 5px 39px; width: 100%; border-top: 1px solid #ccc; border-bottom: 1px solid #ccc; background: #f2f5f6; background: -moz-linear-gradient(top, #f2f5f6 0%, #e3eaed 100%); background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#f2f5f6), color-stop(100%,#e3eaed)); background: -webkit-linear-gradient(top, #f2f5f6 0%,#e3eaed 100%); background: -o-linear-gradient(top, #f2f5f6 0%,#e3eaed 100%); background: -ms-linear-gradient(top, #f2f5f6 0%,#e3eaed 100%); background: linear-gradient(to bottom, #f2f5f6 0%,#e3eaed 100%); } #userscriptOptions .rmus-options-footer { text-align: right; padding: 8px 10px; border-top: 1px solid #ccc; background: #ffffff; background: -moz-linear-gradient(top, #ffffff 0%, #ededed 100%); background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ffffff), color-stop(100%,#ededed)); background: -webkit-linear-gradient(top, #ffffff 0%,#ededed 100%); background: -o-linear-gradient(top, #ffffff 0%,#ededed 100%); background: -ms-linear-gradient(top, #ffffff 0%,#ededed 100%); background: linear-gradient(to bottom, #ffffff 0%,#ededed 100%); } #userscriptOptions .rmus-options-footer #rmus-options-imexport { clear: both; text-align: left; margin-top: 10px; display: none; } #userscriptOptions .rmus-options-footer #rmus-options-imexport .rmus-options-imexport-help { font-size: 10px; } #userscriptOptions .rmus-options-footer #rmus-options-imexport textarea { width: 568px; font-family: Verdana; font-size: 10px; padding: 5px; margin: 5px 0 3px; height: 21px; } #userscriptOptions input[type=checkbox], #userscriptOptions input[type=select], #userscriptOptions input[type=text] { margin: 0; padding: 0; } .btn-rm { background-color: #fff; border: 1px solid #ccccce; color: #222222; font-family: Verdana; font-size: 10px; min-height: 14px; padding: 4px 8px; } .btn-rm.primary { color: #fff; border-color: #00A4E4; background: #00bded; background: -moz-linear-gradient(top, #00bded 0%, #00aeed 100%); background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#00bded), color-stop(100%,#00aeed)); background: -webkit-linear-gradient(top, #00bded 0%,#00aeed 100%); background: -o-linear-gradient(top, #00bded 0%,#00aeed 100%); background: -ms-linear-gradient(top, #00bded 0%,#00aeed 100%); background: linear-gradient(to bottom, #00bded 0%,#00aeed 100%); }</style><div id="userscriptOptions" class="rmus-options"><div class="rmus-options-wrapper"><div class="rmus-options-header"><h1>RM Userscript - Optionen</h1><div class="rmus-links"><a href="index.php?cont=forum/thread&threadid=111239&pagenum=1">Thread</a> | Version <span class="rmus-version">2.1.8</span></div><div style="clear: both"></div></div><div class="rmus-options-content"><table><tr class="headline"><td colspan="4">Funktionen</td></tr><tr><td style="width:30px"></td><td></td><td style="width:180px"></td><td style="width:25px"></td></tr><tr class="menuparent"><td align="center"><img id="toggle_sub_middleColumn_forum_reloadPosts_readNewPosts" src="http://readmore.thextor.de/userscript/img/plus_alt_16x16.png" alt="more" title="Weitere Optionen"></td><td align="left">Neue Forenbeitr&auml;ge im Hintergrund nachladen</td><td align="right"><input type="checkbox" class="userscriptOptions" name="middleColumn_forum_reloadPosts_readNewPosts"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Neue Beitr&auml;ge im Readmore.de-Froum werden automatisch nachgeladen. Ein Refresh des Threads entf&auml;llt somit."></td></tr><tr class="menufirstchild sub_middleColumn_forum_reloadPosts_readNewPosts"><td align="center"><img id="toggle_sub_middleColumn_forum_reloadPosts_endlessPage" src="http://readmore.thextor.de/userscript/img/plus_alt_16x16.png" alt="more" title="Weitere Optionen"></td><td align="left">Seite endlos erweitern</td><td align="right"><input type="checkbox" class="userscriptOptions" name="middleColumn_forum_reloadPosts_endlessPage"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Neue Posts werden einfach eingeblendet. Es muss also nicht mehr auf eine neue Seite gewechselt werden."></td></tr><tr class="menusecondchild sub_middleColumn_forum_reloadPosts_endlessPage"><td align="center"></td><td align="left">Automatisch zu neuen Posts scrollen/springen</td><td align="right"><input type="checkbox" class="userscriptOptions" name="middleColumn_forum_reloadPosts_jumpToNewPosts"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Springt zu neuen posts."></td></tr><tr class="menusecondchild sub_middleColumn_forum_reloadPosts_endlessPage"><td align="center"></td><td align="left">Zeit zwischen zwei Spr&uuml;ngen</td><td align="right"><input type="text" class="userscriptOptions" name="middleColumn_forum_reloadPosts_jumpToNewPosts_waitUntilNextJump" value="10"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Zeit in Sekunden, die zwischen 2 Spr&uuml;ngen mindestens vergehen muss."></td></tr><tr class="menufirstchild sub_middleColumn_forum_reloadPosts_readNewPosts"><td align="center"><img id="toggle_sub_middleColumn_forum_reloadPosts_markNewPosts" src="http://readmore.thextor.de/userscript/img/plus_alt_16x16.png" alt="more" title="Weitere Optionen"></td><td align="left">Neue Eintr&auml;ge farblich markieren</td><td align="right"><input type="checkbox" class="userscriptOptions" name="middleColumn_forum_reloadPosts_markNewPosts"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Die neu eingetragenen Posts werden markiert."></td></tr><tr class="menusecondchild sub_middleColumn_forum_reloadPosts_markNewPosts"><td align="center"></td><td align="left">Farbe ausw&auml;hlen (HEX-Code)</td><td align="right"><input type="text" class="userscriptOptions" name="middleColumn_forum_reloadPosts_markPostColor" value="#EEEEEE"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Bitte eine HEX Zahl eingeben. Beispiel: #FFEE11"></td></tr><tr class="menusecondchild sub_middleColumn_forum_reloadPosts_markNewPosts"><td align="center"></td><td align="left">Ungelesene Posts im Titel / Tab anzeigen</td><td align="right"><input type="checkbox" class="userscriptOptions" name="middleColumn_forum_reloadPosts_showNewPostsTitle"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Die Anzahl der Ungelesenen Posts im Tab anzeigen."></td></tr><tr class="menusecondchild sub_middleColumn_forum_reloadPosts_markNewPosts"><td align="center"></td><td align="left">Favicon ver&auml;ndern</td><td align="right"><input type="checkbox" class="userscriptOptions" name="middleColumn_forum_reloadPosts_changeFavicon"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Bei ungelesenen Posts das Favicon ver&auml;ndern."></td></tr><tr class="menufirstchild sub_middleColumn_forum_reloadPosts_readNewPosts"><td align="center"></td><td align="left">Hinweis bei neuen Seiten einblenden</td><td align="right"><input type="checkbox" class="userscriptOptions" name="middleColumn_forum_reloadPosts_checkForNewPage"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Achtung: Funktioniert nur, wenn Seite endlos erweitern deaktiv ist. Weist auf eine neue Seite hin."></td></tr><tr class="menufirstchild sub_middleColumn_forum_reloadPosts_readNewPosts"><td align="center"></td><td align="left">Zeit zwischen dem Nachladen (Sekunden)</td><td align="right"><input type="text" class="userscriptOptions" name="middleColumn_forum_reloadPosts_timeToWait" value="15"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Sekunden die zwischen dem Nachladen gewartet werden muss."></td></tr><tr class="menuparent"><td align="center"><img id="toggle_sub_miscellaneous_reloadMessages" src="http://readmore.thextor.de/userscript/img/plus_alt_16x16.png" alt="more" title="Weitere Optionen"></td><td align="left">Neue Nachrichten im Hintergrund nachladen</td><td align="right"><input type="checkbox" class="userscriptOptions" name="miscellaneous_reloadMessages"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Neue Nachrichten (PM) werden nachgeladen. Ein Refresh der Seite entf&auml;llt somit."></td></tr><tr class="menufirstchild sub_miscellaneous_reloadMessages"><td align="center"></td><td align="left">Desktop-Benachrichtigungen aktivieren</td><td align="right"><input type="checkbox" class="userscriptOptions" id="miscellaneous_reloadMessages_desktopNotifications" name="miscellaneous_reloadMessages_desktopNotifications"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Deskop-Benachrichtigungen anzeigen sobald es neue Nachrichten gibt. Dies wird derzeit nicht von allen Browsern unterstützt (caniuse.com/notifications)."></td></tr><tr class="menufirstchild sub_miscellaneous_reloadMessages"><td align="center"></td><td align="left">Alert-Box bei neuen Nachrichten anzeigen</td><td align="right"><input type="checkbox" class="userscriptOptions" name="miscellaneous_reloadMessages_alertBox"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Benachrichtigungen sobald es neue Nachrichten gibt."></td></tr><tr class="menufirstchild sub_miscellaneous_reloadMessages"><td align="center"></td><td align="left">Sound bei neuen Nachrichten abspielen</td><td align="right"><input type="checkbox" class="userscriptOptions" id="notification_playsound_cb" name="miscellaneous_reloadMessages_playSound"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Deskop-Benachrichtigungen sobald es neue Nachrichten gibt."></td></tr><tr class="menufirstchild sub_miscellaneous_reloadMessages"><td align="center"></td><td align="left">URL f&uuml;r die Audiodatei</td><td align="right"><input type="text" class="userscriptOptions" id="miscellaneous_reloadMessages_playSoundUrl" name="miscellaneous_reloadMessages_playSoundUrl" value="http://"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Direkt-Url für den Notification Sound"></td></tr><tr class="menuparent"><td align="center"><img id="toggle_sub_miscellaneous_ignoreUser" src="http://readmore.thextor.de/userscript/img/plus_alt_16x16.png" alt="more" title="Weitere Optionen"></td><td align="left">Readmore User ignorieren</td><td align="right"><input type="checkbox" class="userscriptOptions" name="miscellaneous_ignoreUser"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Blendet Foreneintr&auml;ge, Tickercomments und G&auml;stebucheintr&auml;ge aus."></td></tr><tr class="menufirstchild sub_miscellaneous_ignoreUser"><td align="center"></td><td align="left">Usernamen (kommasepariert)</td><td align="right"><input type="text" class="userscriptOptions" id="miscellaneous_reloadMessages_playSoundUrl" name="miscellaneous_ignoreUser_usernames" value=" "></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Beispielsweise: DanielaKatzenberger,ScriptKiddy99,randomreadmoremod. Gross und Kleinschreibung beachten!"></td></tr><tr class="menuparent"><td align="center"></td><td align="left">Beitr&auml;ge ohne Reload senden</td><td align="right"><input type="checkbox" class="userscriptOptions" name="middleColumn_forum_postPerAjax"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Beitr&auml;ge werden im Hintergrund gepostet. Ein manueller Refresh der Seite entfällt."></td></tr><tr class="menuparent"><td align="center"></td><td align="left">Editieren ohne Reload</td><td align="right"><input type="checkbox" class="userscriptOptions" name="middleColumn_forum_editPost"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Beitr&auml;ge werden im Hintergrund Editiert. Ein manueller Refresh der Seite entfällt."></td></tr><tr class="menuparent"><td align="center"></td><td align="left">Streams aktualisieren</td><td align="right"><input type="checkbox" class="userscriptOptions" name="leftColumn_streams_reloadStreams"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Aktualisiert die Streams im Hintergund."></td></tr><tr class="menuparent"><td align="center"></td><td align="left">Matchticker aktualisieren</td><td align="right"><input type="checkbox" class="userscriptOptions" name="rightColumn_ticker_reloadTicker"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Aktualisiert den Matchticker im Hintergund."></td></tr><tr class="menuparent"><td align="center"></td><td align="left">Forennavigation aktualisieren</td><td align="right"><input type="checkbox" class="userscriptOptions" name="rightColumn_forum_reloadForum"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Aktualisiert die Navigation des Forums (unten rechts) im Hintergund."></td></tr><tr class="menuparent"><td align="center"></td><td align="left">Vorschaufunktion aktivieren</td><td align="right"><input type="checkbox" class="userscriptOptions" name="middleColumn_forum_preview"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Vorschau f&uuml;r neue Beitr&auml;ge einbinden."></td></tr><tr class="menuparent"><td align="center"><img id="toggle_sub_middleColumn_forum_scrollForNewPage" src="http://readmore.thextor.de/userscript/img/plus_alt_16x16.png" alt="more" title="Weitere Optionen"></td><td align="left">Scrollen bis zum Seitenende l&auml;dt die N&auml;chste</td><td align="right"><input type="checkbox" class="userscriptOptions" name="middleColumn_forum_scrollForNewPage"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Beim ereichen des letzten Posts ggf. die n&auml;chste Seite nachladen."></td></tr><tr class="menufirstchild sub_middleColumn_forum_scrollForNewPage"><td align="center"></td><td align="left">Postbox nach oben verschieben</td><td align="right"><input type="checkbox" class="userscriptOptions" name="middleColumn_forum_hideForum_editboxTop"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Kopiert die Box zum Posten an den Anfang der Seite."></td></tr><tr><td style="width:30px"></td><td></td><td style="width:180px"></td><td style="width:25px"></td></tr><tr class="headline"><td colspan="4">Optische Ver&auml;nderungen</td></tr><tr><td style="width:30px"></td><td></td><td style="width:180px"></td><td style="width:25px"></td></tr><tr class="menuparent"><td align="center"><img id="toggle_sub_rightColumn_forum_hideForum" src="http://readmore.thextor.de/userscript/img/plus_alt_16x16.png" alt="more" title="Weitere Optionen"></td><td align="left">Forum ausblenden und umsortieren</td><td align="right"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Das Forum ausblenden oder umsortieren."></td></tr><tr class="menufirstchild sub_rightColumn_forum_hideForum"><td align="center"></td><td align="left">Komplett ausblenden</td><td align="right"><input type="checkbox" class="userscriptOptions" name="rightColumn_forum_hideForum"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Das komplette Forum ausblenden."></td></tr><tr class="menufirstchild sub_rightColumn_forum_hideForum"><td align="center"><img id="toggle_sub_rightColumn_forum_sections" src="http://readmore.thextor.de/userscript/img/plus_alt_16x16.png" alt="more" title="Weitere Optionen"></td><td align="left">Foren umsortieren</td><td align="right"><input type="checkbox" class="userscriptOptions" name="rightColumn_forum_sections"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Ermöglicht das Umsortieren des Forums."></td></tr><tr class="menusecondchild sub_rightColumn_forum_sections"><td align="center"></td><td align="left">An erster Stelle</td><td align="right"><select size="1" class="userscriptOptions" name="rightColumn_forum_hideForum_0"><option value="">Nichts anzeigen</option><option value="featuredthreads">Featured Threads</option><option value="esportforen">eSport Foren</option><option value="technik">Technik</option><option value="offtopicforen">Offtopic Foren</option><option value="spiele">Spiele</option></select></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Erste Stelle bei der Anzeige der Foren."></td></tr><tr class="menusecondchild sub_rightColumn_forum_sections"><td align="center"></td><td align="left">An zweiter Stelle</td><td align="right"><select size="1" class="userscriptOptions" name="rightColumn_forum_hideForum_1"><option value="">Nichts anzeigen</option><option value="featuredthreads">Featured Threads</option><option value="esportforen">eSport Foren</option><option value="technik">Technik</option><option value="offtopicforen">Offtopic Foren</option><option value="spiele">Spiele</option></select></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Zweite Stelle bei der Anzeige der Foren."></td></tr><tr class="menusecondchild sub_rightColumn_forum_sections"><td align="center"></td><td align="left">An dritter Stelle</td><td align="right"><select size="1" class="userscriptOptions" name="rightColumn_forum_hideForum_2"><option value="">Nichts anzeigen</option><option value="featuredthreads">Featured Threads</option><option value="esportforen">eSport Foren</option><option value="technik">Technik</option><option value="offtopicforen">Offtopic Foren</option><option value="spiele">Spiele</option></select></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Dritte Stelle bei der Anzeige der Foren."></td></tr><tr class="menusecondchild sub_rightColumn_forum_sections"><td align="center"></td><td align="left">An vierter Stelle</td><td align="right"><select size="1" class="userscriptOptions" name="rightColumn_forum_hideForum_3"><option value="">Nichts anzeigen</option><option value="featuredthreads">Featured Threads</option><option value="esportforen">eSport Foren</option><option value="technik">Technik</option><option value="offtopicforen">Offtopic Foren</option><option value="spiele">Spiele</option></select></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Viere Stelle bei der Anzeige der Foren."></td></tr><tr class="menusecondchild sub_rightColumn_forum_sections"><td align="center"></td><td align="left">An f&uuml;nfter Stelle</td><td align="right"><select size="1" class="userscriptOptions" name="rightColumn_forum_hideForum_4"><option value="">Nichts anzeigen</option><option value="featuredthreads">Featured Threads</option><option value="esportforen">eSport Foren</option><option value="technik">Technik</option><option value="offtopicforen">Offtopic Foren</option><option value="spiele">Spiele</option></select></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="F&uuml;nfte Stelle bei der Anzeige der Foren."></td></tr><tr class="menuparent"><td align="center"><img id="toggle_sub_rightColumn_headlines_hideHeadlines" src="http://readmore.thextor.de/userscript/img/plus_alt_16x16.png" alt="more" title="Weitere Optionen"></td><td align="left">Schlagzeilen ausblenden</td><td align="right"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Bestimmte oder alle Schlagzeilen ausblenden"></td></tr><tr class="menufirstchild sub_rightColumn_headlines_hideHeadlines"><td align="center"></td><td align="left">Alle ausblenden</td><td align="right"><input type="checkbox" class="userscriptOptions" name="rightColumn_headlines_hideHeadlines"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Blendet alle Schlagzeilen aus."></td></tr><tr class="menufirstchild sub_rightColumn_headlines_hideHeadlines"><td align="center"></td><td align="left">Counter-Strike ausblenden</td><td align="right"><input type="checkbox" class="userscriptOptions" name="rightColumn_headlines_hideCounterstrike"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Blendet die Counter-Strike Schlagzeilen aus."></td></tr><tr class="menufirstchild sub_rightColumn_headlines_hideHeadlines"><td align="center"></td><td align="left">Starcraft ausblenden</td><td align="right"><input type="checkbox" class="userscriptOptions" name="rightColumn_headlines_hideStarcraft"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Blendet die Starcraft Schlagzeilen aus."></td></tr><tr class="menufirstchild sub_rightColumn_headlines_hideHeadlines"><td align="center"></td><td align="left">DotA ausblenden</td><td align="right"><input type="checkbox" class="userscriptOptions" name="rightColumn_headlines_hideDefenseOfTheAncients"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Blendet die DotA Schlagzeilen aus."></td></tr><tr class="menufirstchild sub_rightColumn_headlines_hideHeadlines"><td align="center"></td><td align="left">League of Legends ausblenden</td><td align="right"><input type="checkbox" class="userscriptOptions" name="rightColumn_headlines_hideLeagueOfLegends"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Blendet die League of Legends Schlagzeilen aus."></td></tr><tr class="menufirstchild sub_rightColumn_headlines_hideHeadlines"><td align="center"></td><td align="left">Warcraft 3 ausblenden</td><td align="right"><input type="checkbox" class="userscriptOptions" name="rightColumn_headlines_hideWarcraft3"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Blendet die Warcraft 3 Schlagzeilen aus."></td></tr><tr class="menufirstchild sub_rightColumn_headlines_hideHeadlines"><td align="center"></td><td align="left">Sonstiges ausblenden</td><td align="right"><input type="checkbox" class="userscriptOptions" name="rightColumn_headlines_hideSonstiges"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Blendet die Sonstigen Schlagzeilen aus."></td></tr><tr class="menuparent"><td align="center"></td><td align="left">Alle Streams ausblenden</td><td align="right"><input type="checkbox" class="userscriptOptions" name="leftColumn_streams_hideStreams"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Alle Streams ausblenden"></td></tr><tr class="menuparent"><td align="center"></td><td align="left">Fixierte Toolbar</td><td align="right"><input type="checkbox" class="userscriptOptions" name="miscellaneous_fixedToolbar"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Die Toolbar wird am oberen Fensterrand fixiert."></td></tr><tr class="menuparent"><td align="center"></td><td align="left">Ticker ausblenden</td><td align="right"><input type="checkbox" class="userscriptOptions" name="rightColumn_ticker_hideTicker"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Der Ticker wird komplett ausgeblendet."></td></tr><tr class="menuparent"><td align="center"></td><td align="left">Wer? Wohin? Warum? ausblenden</td><td align="right"><input type="checkbox" class="userscriptOptions" name="leftColumn_www_hideWww"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Blendet die komplette Wer? Wohin? Warum? Sektion aus."></td></tr><tr class="menuparent"><td align="center"></td><td align="left">Bilderlinks umwandeln</td><td align="right"><input type="checkbox" class="userscriptOptions" name="miscellaneous_convertImageLinks"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Wandelt Bilderlinks automatisch in Bilder um."></td></tr><tr><td style="width:30px"></td><td></td><td style="width:180px"></td><td style="width:25px"></td></tr><tr class="headline"><td colspan="4">Sonstiges</td></tr><tr><td style="width:30px"></td><td></td><td style="width:180px"></td><td style="width:25px"></td></tr><tr class="menuparent"><td align="center"></td><td align="left">Notizen</td><td align="right"><input type="checkbox" class="userscriptOptions" name="miscellaneous_note"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Ermöglicht es für jeden Forenuser eine Notiz zu hinterlegen."></td></tr><tr class="menuparent"><td align="center"></td><td align="left">Titel / Tab umsortieren</td><td align="right"><input type="checkbox" class="userscriptOptions" name="miscellaneous_reSortTitle"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Wenn diese Option aktiviert ist, wird der Threadname an den Anfang des Titels gestellt. Offene Tabs können so besser den verschiedenen Threads zugeordnet werden."></td></tr><tr class="menuparent"><td align="center"></td><td align="left">Readmore Extrabuttons</td><td align="right"><input type="checkbox" class="userscriptOptions" name="miscellaneous_extraButtons"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Mehr Buttons um einen Post im Forum ansehnlicher zu gestalten."></td></tr><tr class="menuparent"><td align="center"></td><td align="left">Youtubeplayer ersetzen</td><td align="right"><input type="checkbox" class="userscriptOptions" name="miscellaneous_convertYoutube"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Ersetzt den Youtubeplayer durch einen einfachen Link."></td></tr><tr class="menuparent"><td align="center"></td><td align="left">Avataranimationen anhalten</td><td align="right"><input type="checkbox" class="userscriptOptions" name="miscellaneous_stopAvatarAnimation"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Die Animation von Avataren stoppen."></td></tr><tr class="menuparent"><td align="center"></td><td align="left">Button zum Hochscrollen anzeigen</td><td align="right"><input type="checkbox" class="userscriptOptions" name="miscellaneous_buttonScrollUp"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Im Forum wird ein Icon eingefügt, beim betätigen wird zum ersten Post gesprungen."></td></tr><tr class="menuparent"><td align="center"></td><td align="left">Button zum Runterscrollen anzeigen</td><td align="right"><input type="checkbox" class="userscriptOptions" name="miscellaneous_buttonScrollDown"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Im Forum wird ein Icon eingefügt, beim betätigen wird zum letzten Post gesprungen."></td></tr><tr class="menuparent"><td align="center"></td><td align="left">In der Suche zum letzten Post springen</td><td align="right"><input type="checkbox" class="userscriptOptions" name="middleColumn_search_jump_to_last_page"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Hinter den Suchergebnissen wird ein Icon eingefügt, beim betätigen wird zum letzten Post gesprungen."></td></tr><tr class="menuparent"><td align="center"></td><td align="left">Last-Page-Pfeil springt zum letzten Post</td><td align="right"><input type="checkbox" class="userscriptOptions" name="miscellaneous_lastPageJumpToLastPost"></td><td align="right"><img src="http://readmore.thextor.de/userscript/img/magnifying_glass_16x16.png" alt="info" title="Nach dem Bet&auml;tigen des Pfeils (ganz Recht im Forum, hinter den Threads) wird zum aktuellsten Post gesprungen."></td></tr><tr><td style="width:30px"></td><td></td><td style="width:180px"></td><td style="width:25px"></td></tr></table></div><div class="rmus-options-footer"><div style="float: left"><input class="btn-rm imexp" type="button" id="importUserscriptOptions" value="Import">&nbsp;<input class="btn-rm imexp" type="button" id="exportUserscriptOptions" value="Export"></div><input class="btn-rm" type="button" id="closeUserscriptOptions" value="Abbrechen">&nbsp;<input class="btn-rm primary" type="button" value="Speichern" id="saveUserscriptOptions"><div id="rmus-options-imexport"><div class="rmus-options-imexport-help"></div><textarea class="btn-rm"></textarea><input class="btn-rm primary" style="margin-right: 4px" type="button" value="Importieren" id="importUserscriptOptionsBtn"><input class="btn-rm" type="button" value="Schlie&szlig;en" id="imexportUserscriptOptionsCloseBtn"></div></div></div></div><div id="userscriptOptionsOverlay"></div>');
    Options.insertOptionsLink();

    // Eventhandler für die Optionen setzen
    $('#saveUserscriptOptions').click(function () {
        if (Options.saveOptions()){
            Options.hideOptions();
        }
    });

    $('#openUserscriptOptions').click(function () {
        Options.showOptions();
    });

    $('#closeUserscriptOptions,#userscriptOptionsOverlay').click(function () {
        Options.hideOptions();
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
            var opts = Options.getOptionsRaw();

            if (opts === 'null') {
                alert('Es sind keine gespeicherten Optionen zum Exportieren vorhanden. Bitte speichere deine Optionen zuerst ab.');
                return;
            }

            importBtn.hide();
            helpContainer.text('Kopiere diesen JSON-String für den späteren Import:');
            textarea.val(opts);
        }

        imexportContainer.slideToggle(250, function () { textarea.select(); });
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
            Options.backupOptions();
            Options.setOptionsRaw(opts);

            // Optionen schließen, damit sie neu geladen werden beim nächsten öffnen.
            Options.hideOptions();

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
                icon: RMUS.messages.iconUrl,
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
    $('[id*=toggle_sub]').click(function(){
        var img = $(this).attr('src').trim();
        if (img == 'http://readmore.thextor.de/userscript/img/plus_alt_16x16.png') $(this).attr('src', 'http://readmore.thextor.de/userscript/img/minus_alt_16x16.png');
        else $(this).attr('src', 'http://readmore.thextor.de/userscript/img/plus_alt_16x16.png');
    });

    // Prüfen ob eine neue Version erschienen ist
    RMUS.update.checkVersion();

/*    // content in den LocalStorage speichern
    var seen = [];
    localStorage.setItem('userscriptContent',
        JSON.stringify(content, function(key, val) {
            if (typeof val == "object") {
                if (seen.indexOf(val) >= 0) {
                    return undefined
                }
                seen.push(val);
            }

            return val;
        })
    );
*/
    // Im Hintergrund ausgeführte Aktionen starten (zeitunkritisch)
    window.setInterval(function(){

/*        // content auslesen
        if (!content){
            content = JSON.parse(localStorage.getItem('userscriptContent'));
        }
*/
        // Wenn wir uns in einem Thread befinden
        if (Content.getContent('forum_thread')) {

            // Posts nachladen
            if (Options.getOption('middleColumn_forum_reloadPosts_readNewPosts') === 'checked') {
                RMUS.middleColumn.forum.reloadPosts.readNewPosts();
            }

            // Avataranimationen stoppen
            if (Options.getOption('miscellaneous_stopAvatarAnimation') === 'checked') {
                RMUS.miscellaneous.stopAvatarAnimation.stopAnimation();
            }
        }
    }, (parseInt(Options.getOption('sub_middleColumn_forum_reloadPosts_timeToWait'), 10) > 2) ? parseInt(Options.getOption('sub_middleColumn_forum_reloadPosts_timeToWait'), 10) * 1000 : 3000);

    // Im Hintergrund ausgeführte Aktionen starten (3x in der Sekunde, sehr zeitkritisch)
    window.setInterval(function(){

/*        // Content auslesen
        if (!content){
            content = JSON.parse(localStorage.getItem('userscriptContent'));
        }
*/
        if (Content.getContent('forum_thread')) {
            if (Options.getOption('middleColumn_forum_reloadPosts_readNewPosts') === 'checked') {
                if (Options.getOption('middleColumn_forum_reloadPosts_markNewPosts') === 'checked') {
                    // (de)-Markieren
                    RMUS.middleColumn.forum.reloadPosts.markNewPosts();

                    // Favicon verändern
                    if (Options.getOption('middleColumn_forum_reloadPosts_changeFavicon') === 'checked'){
                        RMUS.middleColumn.forum.reloadPosts.changeFavicon();
                    }

                    // Postanzahl im Tab anzeigen
                    if (Options.getOption('middleColumn_forum_reloadPosts_showNewPostsTitle') === 'checked') {
                        RMUS.middleColumn.forum.reloadPosts.showNewPostsTitle();
                    }
                }
            }

            // Beim ereichen des letzten Posts ggf. die nächste Seite nachladen. Nur wenn wir uns nicht auf der letzten Seite befinden!
            if (Options.getOption('middleColumn_forum_scrollForNewPage') === 'checked' && $.trim($('div.floatl.m2.elf').html()).substr($.trim($('div.floatl.m2.elf').html()).length-4) != '</b>') {
                RMUS.middleColumn.forum.scrollForNewPage.insertPosts();
            }
        }
    }, 500);

    // Im Hintergrund ausgeführte Aktionen starten (Nur alle 15 Sekunden)
    window.setInterval(function(){

        // Außer auf dem Profil und der Guides
        if (!Content.getMultipleContent(['profile', 'guides'], 'OR')) {

            // Streams und Forennavigation nachladen (Nur, wenn auch eingeblendet)
            if (Options.getOption('rightColumn_forum_reloadForum') === 'checked' && Options.getOption('rightColumn_forum_hideForum') != 'checked'
                || Options.getOption('leftColumn_streams_reloadStreams') === 'checked' && Options.getOption('options.leftColumn_streams_hideStreams') != 'checked'
                || Options.getOption('rightColumn_ticker_reloadTicker') === 'checked' && Options.getOption('rightColumn_ticker_hideTicker') != 'checked') {

                RMUS.miscellaneous.reloadMainpageData.readPage();

                // Forennavigation
                if (Options.getOption('rightColumn_forum_hideForum') !== 'checked'
                    && Options.getOption('rightColumn_forum_reloadForum') === 'checked') {

                    // Lag im FF vermindern
                    window.setTimeout(RMUS.rightColumn.forum.reloadForum(), 2000);
                }

                // Streams
                if (Options.getOption('leftColumn_streams_hideStream') != 'checked'
                    && Options.getOption('leftColumn_streams_reloadStreams') === 'checked') {

                    // Lag im FF vermindern
                    window.setTimeout(RMUS.leftColumn.streams.reloadStreams(), 4000);
                }

                // Ticker
                if (Options.getOption('rightColumn_ticker_hideTicker') != 'checked'
                    && Options.getOption('rightColumn_ticker_reloadTicker') === 'checked') {

                    // Lag im FF vermindern
                    window.setTimeout(RMUS.rightColumn.ticker.reloadTicker(), 6000);
                }
            }
        }

        // PMs auf jeder Seite überprüfen (Usernavi buggy, daher nicht Teil der mainPageData)
        if(Options.getOption('miscellaneous_reloadMessages') === 'checked') {
            RMUS.messages.checkForNewMessages();
        }

    }, 15000);
};
RMUS.update = {

    // Meldung, dass ein Update zur Verfügung steht
    showUpdateMsg: function () {
        $('div.floatl.vcenter.elf.dgray:last').append('<a style="color: #F00; margin-left: 10px;" href="/index.php?cont=forum/thread&threadid=111239&pagenum=1">(Update verf&uuml;gbar!)</a>');
    },

    // Aus '2.1.5' wird '215'
    getRawVersion: function (prettyVersion) {
        return prettyVersion.replace(/[^0-9]/g, '');
    },

    // Einmal täglich prüfen, ob es eine neue Version gibt
    refreshLatestVersion: function () {
        var self = this,
            today = new Date();

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
                    var latestPrettyVersion = $.trim(posts[0].match(/<span class="i">-(.+?)-<\/span>/)[1]),
                        latestRawVersion = self.getRawVersion(latestPrettyVersion),
                        currentRawVersion = self.getRawVersion(Options.getVersion());

                    if (currentRawVersion < latestRawVersion) {
                        self.showUpdateMsg();
                    }

                    today.setHours(6);
                    today.setMinutes(0);
                    today.setSeconds(0);

                    localStorage.setItem('lastVersionCheck', JSON.stringify({
                        version: latestRawVersion,
                        prettyVersion: latestPrettyVersion,
                        checkDate: today.toUTCString()
                    }));
                }
            }
        });
    },

    // Prüft, ob eine neue Version des Scriptes verfügbar ist
    checkVersion : function () {
        var today = new Date(),
            self = this,
            lastVersionCheck = localStorage.getItem('lastVersionCheck');

        if (lastVersionCheck) {
            lastVersionCheck = JSON.parse(localStorage.getItem('lastVersionCheck'));

            if (lastVersionCheck.checkDate) {
                var lastCheck = new Date(Date.parse(lastVersionCheck.checkDate));

                // Älter als 1 Tag?
                lastCheck.setDate(lastCheck.getDate() + 1);

                if (lastCheck > today) {
                    var currentRawVersion = self.getRawVersion(Options.getVersion());

                    // Ist die cached Version neuer als die aktuelle Version?
                    if (lastVersionCheck.version > currentRawVersion) {
                        self.showUpdateMsg();
                    }

                    return;
                }
            }
        }

        this.refreshLatestVersion();
    }
};
RMUS.start();