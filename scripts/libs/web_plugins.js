// This file contains all the minified libraries and plugins that we are using
// concatenated into one file rather than serving them a separate, slower files.

// Listing of what is included (in order):

// 1. Underscore.js
// 2. Backbone.js
// 3. Lawnchair v0.6.1
// 4. Twitter Bootstrap.js
// 5. Jquery mousewheel
// 6. Pan and Zoom
// 7. Jath
// 8. URI.js
// 9. ZipFile.complete.js
// 10. Handlebars_runtime.js
// JCD: We also need jquery.transform2d.js
// 11. jquery.transform2d.js

// Underscore.js 1.3.1
// (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Underscore is freely distributable under the MIT license.
// Portions of Underscore are inspired or borrowed from Prototype,
// Oliver Steele's Functional, and John Resig's Micro-Templating.
// For all details and documentation:
// http://documentcloud.github.com/underscore
(function(){function q(a,c,d){if(a===c)return a!==0||1/a==1/c;if(a==null||c==null)return a===c;if(a._chain)a=a._wrapped;if(c._chain)c=c._wrapped;if(a.isEqual&&b.isFunction(a.isEqual))return a.isEqual(c);if(c.isEqual&&b.isFunction(c.isEqual))return c.isEqual(a);var e=l.call(a);if(e!=l.call(c))return false;switch(e){case "[object String]":return a==String(c);case "[object Number]":return a!=+a?c!=+c:a==0?1/a==1/c:a==+c;case "[object Date]":case "[object Boolean]":return+a==+c;case "[object RegExp]":return a.source==
c.source&&a.global==c.global&&a.multiline==c.multiline&&a.ignoreCase==c.ignoreCase}if(typeof a!="object"||typeof c!="object")return false;for(var f=d.length;f--;)if(d[f]==a)return true;d.push(a);var f=0,g=true;if(e=="[object Array]"){if(f=a.length,g=f==c.length)for(;f--;)if(!(g=f in a==f in c&&q(a[f],c[f],d)))break}else{if("constructor"in a!="constructor"in c||a.constructor!=c.constructor)return false;for(var h in a)if(b.has(a,h)&&(f++,!(g=b.has(c,h)&&q(a[h],c[h],d))))break;if(g){for(h in c)if(b.has(c,
h)&&!f--)break;g=!f}}d.pop();return g}var r=this,G=r._,n={},k=Array.prototype,o=Object.prototype,i=k.slice,H=k.unshift,l=o.toString,I=o.hasOwnProperty,w=k.forEach,x=k.map,y=k.reduce,z=k.reduceRight,A=k.filter,B=k.every,C=k.some,p=k.indexOf,D=k.lastIndexOf,o=Array.isArray,J=Object.keys,s=Function.prototype.bind,b=function(a){return new m(a)};if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports)exports=module.exports=b;exports._=b}else r._=b;b.VERSION="1.3.1";var j=b.each=
b.forEach=function(a,c,d){if(a!=null)if(w&&a.forEach===w)a.forEach(c,d);else if(a.length===+a.length)for(var e=0,f=a.length;e<f;e++){if(e in a&&c.call(d,a[e],e,a)===n)break}else for(e in a)if(b.has(a,e)&&c.call(d,a[e],e,a)===n)break};b.map=b.collect=function(a,c,b){var e=[];if(a==null)return e;if(x&&a.map===x)return a.map(c,b);j(a,function(a,g,h){e[e.length]=c.call(b,a,g,h)});if(a.length===+a.length)e.length=a.length;return e};b.reduce=b.foldl=b.inject=function(a,c,d,e){var f=arguments.length>2;a==
null&&(a=[]);if(y&&a.reduce===y)return e&&(c=b.bind(c,e)),f?a.reduce(c,d):a.reduce(c);j(a,function(a,b,i){f?d=c.call(e,d,a,b,i):(d=a,f=true)});if(!f)throw new TypeError("Reduce of empty array with no initial value");return d};b.reduceRight=b.foldr=function(a,c,d,e){var f=arguments.length>2;a==null&&(a=[]);if(z&&a.reduceRight===z)return e&&(c=b.bind(c,e)),f?a.reduceRight(c,d):a.reduceRight(c);var g=b.toArray(a).reverse();e&&!f&&(c=b.bind(c,e));return f?b.reduce(g,c,d,e):b.reduce(g,c)};b.find=b.detect=
function(a,c,b){var e;E(a,function(a,g,h){if(c.call(b,a,g,h))return e=a,true});return e};b.filter=b.select=function(a,c,b){var e=[];if(a==null)return e;if(A&&a.filter===A)return a.filter(c,b);j(a,function(a,g,h){c.call(b,a,g,h)&&(e[e.length]=a)});return e};b.reject=function(a,c,b){var e=[];if(a==null)return e;j(a,function(a,g,h){c.call(b,a,g,h)||(e[e.length]=a)});return e};b.every=b.all=function(a,c,b){var e=true;if(a==null)return e;if(B&&a.every===B)return a.every(c,b);j(a,function(a,g,h){if(!(e=
e&&c.call(b,a,g,h)))return n});return e};var E=b.some=b.any=function(a,c,d){c||(c=b.identity);var e=false;if(a==null)return e;if(C&&a.some===C)return a.some(c,d);j(a,function(a,b,h){if(e||(e=c.call(d,a,b,h)))return n});return!!e};b.include=b.contains=function(a,c){var b=false;if(a==null)return b;return p&&a.indexOf===p?a.indexOf(c)!=-1:b=E(a,function(a){return a===c})};b.invoke=function(a,c){var d=i.call(arguments,2);return b.map(a,function(a){return(b.isFunction(c)?c||a:a[c]).apply(a,d)})};b.pluck=
function(a,c){return b.map(a,function(a){return a[c]})};b.max=function(a,c,d){if(!c&&b.isArray(a))return Math.max.apply(Math,a);if(!c&&b.isEmpty(a))return-Infinity;var e={computed:-Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b>=e.computed&&(e={value:a,computed:b})});return e.value};b.min=function(a,c,d){if(!c&&b.isArray(a))return Math.min.apply(Math,a);if(!c&&b.isEmpty(a))return Infinity;var e={computed:Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b<e.computed&&(e={value:a,computed:b})});
return e.value};b.shuffle=function(a){var b=[],d;j(a,function(a,f){f==0?b[0]=a:(d=Math.floor(Math.random()*(f+1)),b[f]=b[d],b[d]=a)});return b};b.sortBy=function(a,c,d){return b.pluck(b.map(a,function(a,b,g){return{value:a,criteria:c.call(d,a,b,g)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;return c<d?-1:c>d?1:0}),"value")};b.groupBy=function(a,c){var d={},e=b.isFunction(c)?c:function(a){return a[c]};j(a,function(a,b){var c=e(a,b);(d[c]||(d[c]=[])).push(a)});return d};b.sortedIndex=function(a,
c,d){d||(d=b.identity);for(var e=0,f=a.length;e<f;){var g=e+f>>1;d(a[g])<d(c)?e=g+1:f=g}return e};b.toArray=function(a){return!a?[]:a.toArray?a.toArray():b.isArray(a)?i.call(a):b.isArguments(a)?i.call(a):b.values(a)};b.size=function(a){return b.toArray(a).length};b.first=b.head=function(a,b,d){return b!=null&&!d?i.call(a,0,b):a[0]};b.initial=function(a,b,d){return i.call(a,0,a.length-(b==null||d?1:b))};b.last=function(a,b,d){return b!=null&&!d?i.call(a,Math.max(a.length-b,0)):a[a.length-1]};b.rest=
b.tail=function(a,b,d){return i.call(a,b==null||d?1:b)};b.compact=function(a){return b.filter(a,function(a){return!!a})};b.flatten=function(a,c){return b.reduce(a,function(a,e){if(b.isArray(e))return a.concat(c?e:b.flatten(e));a[a.length]=e;return a},[])};b.without=function(a){return b.difference(a,i.call(arguments,1))};b.uniq=b.unique=function(a,c,d){var d=d?b.map(a,d):a,e=[];b.reduce(d,function(d,g,h){if(0==h||(c===true?b.last(d)!=g:!b.include(d,g)))d[d.length]=g,e[e.length]=a[h];return d},[]);
return e};b.union=function(){return b.uniq(b.flatten(arguments,true))};b.intersection=b.intersect=function(a){var c=i.call(arguments,1);return b.filter(b.uniq(a),function(a){return b.every(c,function(c){return b.indexOf(c,a)>=0})})};b.difference=function(a){var c=b.flatten(i.call(arguments,1));return b.filter(a,function(a){return!b.include(c,a)})};b.zip=function(){for(var a=i.call(arguments),c=b.max(b.pluck(a,"length")),d=Array(c),e=0;e<c;e++)d[e]=b.pluck(a,""+e);return d};b.indexOf=function(a,c,
d){if(a==null)return-1;var e;if(d)return d=b.sortedIndex(a,c),a[d]===c?d:-1;if(p&&a.indexOf===p)return a.indexOf(c);for(d=0,e=a.length;d<e;d++)if(d in a&&a[d]===c)return d;return-1};b.lastIndexOf=function(a,b){if(a==null)return-1;if(D&&a.lastIndexOf===D)return a.lastIndexOf(b);for(var d=a.length;d--;)if(d in a&&a[d]===b)return d;return-1};b.range=function(a,b,d){arguments.length<=1&&(b=a||0,a=0);for(var d=arguments[2]||1,e=Math.max(Math.ceil((b-a)/d),0),f=0,g=Array(e);f<e;)g[f++]=a,a+=d;return g};
var F=function(){};b.bind=function(a,c){var d,e;if(a.bind===s&&s)return s.apply(a,i.call(arguments,1));if(!b.isFunction(a))throw new TypeError;e=i.call(arguments,2);return d=function(){if(!(this instanceof d))return a.apply(c,e.concat(i.call(arguments)));F.prototype=a.prototype;var b=new F,g=a.apply(b,e.concat(i.call(arguments)));return Object(g)===g?g:b}};b.bindAll=function(a){var c=i.call(arguments,1);c.length==0&&(c=b.functions(a));j(c,function(c){a[c]=b.bind(a[c],a)});return a};b.memoize=function(a,
c){var d={};c||(c=b.identity);return function(){var e=c.apply(this,arguments);return b.has(d,e)?d[e]:d[e]=a.apply(this,arguments)}};b.delay=function(a,b){var d=i.call(arguments,2);return setTimeout(function(){return a.apply(a,d)},b)};b.defer=function(a){return b.delay.apply(b,[a,1].concat(i.call(arguments,1)))};b.throttle=function(a,c){var d,e,f,g,h,i=b.debounce(function(){h=g=false},c);return function(){d=this;e=arguments;var b;f||(f=setTimeout(function(){f=null;h&&a.apply(d,e);i()},c));g?h=true:
a.apply(d,e);i();g=true}};b.debounce=function(a,b){var d;return function(){var e=this,f=arguments;clearTimeout(d);d=setTimeout(function(){d=null;a.apply(e,f)},b)}};b.once=function(a){var b=false,d;return function(){if(b)return d;b=true;return d=a.apply(this,arguments)}};b.wrap=function(a,b){return function(){var d=[a].concat(i.call(arguments,0));return b.apply(this,d)}};b.compose=function(){var a=arguments;return function(){for(var b=arguments,d=a.length-1;d>=0;d--)b=[a[d].apply(this,b)];return b[0]}};
b.after=function(a,b){return a<=0?b():function(){if(--a<1)return b.apply(this,arguments)}};b.keys=J||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var c=[],d;for(d in a)b.has(a,d)&&(c[c.length]=d);return c};b.values=function(a){return b.map(a,b.identity)};b.functions=b.methods=function(a){var c=[],d;for(d in a)b.isFunction(a[d])&&c.push(d);return c.sort()};b.extend=function(a){j(i.call(arguments,1),function(b){for(var d in b)a[d]=b[d]});return a};b.defaults=function(a){j(i.call(arguments,
1),function(b){for(var d in b)a[d]==null&&(a[d]=b[d])});return a};b.clone=function(a){return!b.isObject(a)?a:b.isArray(a)?a.slice():b.extend({},a)};b.tap=function(a,b){b(a);return a};b.isEqual=function(a,b){return q(a,b,[])};b.isEmpty=function(a){if(b.isArray(a)||b.isString(a))return a.length===0;for(var c in a)if(b.has(a,c))return false;return true};b.isElement=function(a){return!!(a&&a.nodeType==1)};b.isArray=o||function(a){return l.call(a)=="[object Array]"};b.isObject=function(a){return a===Object(a)};
b.isArguments=function(a){return l.call(a)=="[object Arguments]"};if(!b.isArguments(arguments))b.isArguments=function(a){return!(!a||!b.has(a,"callee"))};b.isFunction=function(a){return l.call(a)=="[object Function]"};b.isString=function(a){return l.call(a)=="[object String]"};b.isNumber=function(a){return l.call(a)=="[object Number]"};b.isNaN=function(a){return a!==a};b.isBoolean=function(a){return a===true||a===false||l.call(a)=="[object Boolean]"};b.isDate=function(a){return l.call(a)=="[object Date]"};
b.isRegExp=function(a){return l.call(a)=="[object RegExp]"};b.isNull=function(a){return a===null};b.isUndefined=function(a){return a===void 0};b.has=function(a,b){return I.call(a,b)};b.noConflict=function(){r._=G;return this};b.identity=function(a){return a};b.times=function(a,b,d){for(var e=0;e<a;e++)b.call(d,e)};b.escape=function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")};b.mixin=function(a){j(b.functions(a),
function(c){K(c,b[c]=a[c])})};var L=0;b.uniqueId=function(a){var b=L++;return a?a+b:b};b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var t=/.^/,u=function(a){return a.replace(/\\\\/g,"\\").replace(/\\'/g,"'")};b.template=function(a,c){var d=b.templateSettings,d="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+a.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(d.escape||t,function(a,b){return"',_.escape("+
u(b)+"),'"}).replace(d.interpolate||t,function(a,b){return"',"+u(b)+",'"}).replace(d.evaluate||t,function(a,b){return"');"+u(b).replace(/[\r\n\t]/g," ")+";__p.push('"}).replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');",e=new Function("obj","_",d);return c?e(c,b):function(a){return e.call(this,a,b)}};b.chain=function(a){return b(a).chain()};var m=function(a){this._wrapped=a};b.prototype=m.prototype;var v=function(a,c){return c?b(a).chain():a},K=function(a,c){m.prototype[a]=
function(){var a=i.call(arguments);H.call(a,this._wrapped);return v(c.apply(b,a),this._chain)}};b.mixin(b);j("pop,push,reverse,shift,sort,splice,unshift".split(","),function(a){var b=k[a];m.prototype[a]=function(){var d=this._wrapped;b.apply(d,arguments);var e=d.length;(a=="shift"||a=="splice")&&e===0&&delete d[0];return v(d,this._chain)}});j(["concat","join","slice"],function(a){var b=k[a];m.prototype[a]=function(){return v(b.apply(this._wrapped,arguments),this._chain)}});m.prototype.chain=function(){this._chain=
true;return this};m.prototype.value=function(){return this._wrapped}}).call(this);
// Backbone.js 0.9.1
// (c) 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Backbone may be freely distributed under the MIT license.
// For all details and documentation:
// http://backbonejs.org
(function(){var i=this,r=i.Backbone,s=Array.prototype.slice,t=Array.prototype.splice,g;g="undefined"!==typeof exports?exports:i.Backbone={};g.VERSION="0.9.1";var f=i._;!f&&"undefined"!==typeof require&&(f=require("underscore"));var h=i.jQuery||i.Zepto||i.ender;g.setDomLibrary=function(a){h=a};g.noConflict=function(){i.Backbone=r;return this};g.emulateHTTP=!1;g.emulateJSON=!1;g.Events={on:function(a,b,c){for(var d,a=a.split(/\s+/),e=this._callbacks||(this._callbacks={});d=a.shift();){d=e[d]||(e[d]=
{});var f=d.tail||(d.tail=d.next={});f.callback=b;f.context=c;d.tail=f.next={}}return this},off:function(a,b,c){var d,e,f;if(a){if(e=this._callbacks)for(a=a.split(/\s+/);d=a.shift();)if(f=e[d],delete e[d],b&&f)for(;(f=f.next)&&f.next;)if(!(f.callback===b&&(!c||f.context===c)))this.on(d,f.callback,f.context)}else delete this._callbacks;return this},trigger:function(a){var b,c,d,e;if(!(d=this._callbacks))return this;e=d.all;for((a=a.split(/\s+/)).push(null);b=a.shift();)e&&a.push({next:e.next,tail:e.tail,
event:b}),(c=d[b])&&a.push({next:c.next,tail:c.tail});for(e=s.call(arguments,1);c=a.pop();){b=c.tail;for(d=c.event?[c.event].concat(e):e;(c=c.next)!==b;)c.callback.apply(c.context||this,d)}return this}};g.Events.bind=g.Events.on;g.Events.unbind=g.Events.off;g.Model=function(a,b){var c;a||(a={});b&&b.parse&&(a=this.parse(a));if(c=j(this,"defaults"))a=f.extend({},c,a);b&&b.collection&&(this.collection=b.collection);this.attributes={};this._escapedAttributes={};this.cid=f.uniqueId("c");if(!this.set(a,
{silent:!0}))throw Error("Can't create an invalid model");delete this._changed;this._previousAttributes=f.clone(this.attributes);this.initialize.apply(this,arguments)};f.extend(g.Model.prototype,g.Events,{idAttribute:"id",initialize:function(){},toJSON:function(){return f.clone(this.attributes)},get:function(a){return this.attributes[a]},escape:function(a){var b;if(b=this._escapedAttributes[a])return b;b=this.attributes[a];return this._escapedAttributes[a]=f.escape(null==b?"":""+b)},has:function(a){return null!=
this.attributes[a]},set:function(a,b,c){var d,e;f.isObject(a)||null==a?(d=a,c=b):(d={},d[a]=b);c||(c={});if(!d)return this;d instanceof g.Model&&(d=d.attributes);if(c.unset)for(e in d)d[e]=void 0;if(!this._validate(d,c))return!1;this.idAttribute in d&&(this.id=d[this.idAttribute]);var b=this.attributes,k=this._escapedAttributes,n=this._previousAttributes||{},h=this._setting;this._changed||(this._changed={});this._setting=!0;for(e in d)if(a=d[e],f.isEqual(b[e],a)||delete k[e],c.unset?delete b[e]:b[e]=
a,this._changing&&!f.isEqual(this._changed[e],a)&&(this.trigger("change:"+e,this,a,c),this._moreChanges=!0),delete this._changed[e],!f.isEqual(n[e],a)||f.has(b,e)!=f.has(n,e))this._changed[e]=a;h||(!c.silent&&this.hasChanged()&&this.change(c),this._setting=!1);return this},unset:function(a,b){(b||(b={})).unset=!0;return this.set(a,null,b)},clear:function(a){(a||(a={})).unset=!0;return this.set(f.clone(this.attributes),a)},fetch:function(a){var a=a?f.clone(a):{},b=this,c=a.success;a.success=function(d,
e,f){if(!b.set(b.parse(d,f),a))return!1;c&&c(b,d)};a.error=g.wrapError(a.error,b,a);return(this.sync||g.sync).call(this,"read",this,a)},save:function(a,b,c){var d,e;f.isObject(a)||null==a?(d=a,c=b):(d={},d[a]=b);c=c?f.clone(c):{};c.wait&&(e=f.clone(this.attributes));a=f.extend({},c,{silent:!0});if(d&&!this.set(d,c.wait?a:c))return!1;var k=this,h=c.success;c.success=function(a,b,e){b=k.parse(a,e);c.wait&&(b=f.extend(d||{},b));if(!k.set(b,c))return!1;h?h(k,a):k.trigger("sync",k,a,c)};c.error=g.wrapError(c.error,
k,c);b=this.isNew()?"create":"update";b=(this.sync||g.sync).call(this,b,this,c);c.wait&&this.set(e,a);return b},destroy:function(a){var a=a?f.clone(a):{},b=this,c=a.success,d=function(){b.trigger("destroy",b,b.collection,a)};if(this.isNew())return d();a.success=function(e){a.wait&&d();c?c(b,e):b.trigger("sync",b,e,a)};a.error=g.wrapError(a.error,b,a);var e=(this.sync||g.sync).call(this,"delete",this,a);a.wait||d();return e},url:function(){var a=j(this.collection,"url")||j(this,"urlRoot")||o();return this.isNew()?
a:a+("/"==a.charAt(a.length-1)?"":"/")+encodeURIComponent(this.id)},parse:function(a){return a},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return null==this.id},change:function(a){if(this._changing||!this.hasChanged())return this;this._moreChanges=this._changing=!0;for(var b in this._changed)this.trigger("change:"+b,this,this._changed[b],a);for(;this._moreChanges;)this._moreChanges=!1,this.trigger("change",this,a);this._previousAttributes=f.clone(this.attributes);
delete this._changed;this._changing=!1;return this},hasChanged:function(a){return!arguments.length?!f.isEmpty(this._changed):this._changed&&f.has(this._changed,a)},changedAttributes:function(a){if(!a)return this.hasChanged()?f.clone(this._changed):!1;var b,c=!1,d=this._previousAttributes,e;for(e in a)if(!f.isEqual(d[e],b=a[e]))(c||(c={}))[e]=b;return c},previous:function(a){return!arguments.length||!this._previousAttributes?null:this._previousAttributes[a]},previousAttributes:function(){return f.clone(this._previousAttributes)},
isValid:function(){return!this.validate(this.attributes)},_validate:function(a,b){if(b.silent||!this.validate)return!0;var a=f.extend({},this.attributes,a),c=this.validate(a,b);if(!c)return!0;b&&b.error?b.error(this,c,b):this.trigger("error",this,c,b);return!1}});g.Collection=function(a,b){b||(b={});b.comparator&&(this.comparator=b.comparator);this._reset();this.initialize.apply(this,arguments);a&&this.reset(a,{silent:!0,parse:b.parse})};f.extend(g.Collection.prototype,g.Events,{model:g.Model,initialize:function(){},
toJSON:function(){return this.map(function(a){return a.toJSON()})},add:function(a,b){var c,d,e,g,h,i={},j={};b||(b={});a=f.isArray(a)?a.slice():[a];for(c=0,d=a.length;c<d;c++){if(!(e=a[c]=this._prepareModel(a[c],b)))throw Error("Can't add an invalid model to a collection");if(i[g=e.cid]||this._byCid[g]||null!=(h=e.id)&&(j[h]||this._byId[h]))throw Error("Can't add the same model to a collection twice");i[g]=j[h]=e}for(c=0;c<d;c++)(e=a[c]).on("all",this._onModelEvent,this),this._byCid[e.cid]=e,null!=
e.id&&(this._byId[e.id]=e);this.length+=d;t.apply(this.models,[null!=b.at?b.at:this.models.length,0].concat(a));this.comparator&&this.sort({silent:!0});if(b.silent)return this;for(c=0,d=this.models.length;c<d;c++)if(i[(e=this.models[c]).cid])b.index=c,e.trigger("add",e,this,b);return this},remove:function(a,b){var c,d,e,g;b||(b={});a=f.isArray(a)?a.slice():[a];for(c=0,d=a.length;c<d;c++)if(g=this.getByCid(a[c])||this.get(a[c]))delete this._byId[g.id],delete this._byCid[g.cid],e=this.indexOf(g),this.models.splice(e,
1),this.length--,b.silent||(b.index=e,g.trigger("remove",g,this,b)),this._removeReference(g);return this},get:function(a){return null==a?null:this._byId[null!=a.id?a.id:a]},getByCid:function(a){return a&&this._byCid[a.cid||a]},at:function(a){return this.models[a]},sort:function(a){a||(a={});if(!this.comparator)throw Error("Cannot sort a set without a comparator");var b=f.bind(this.comparator,this);1==this.comparator.length?this.models=this.sortBy(b):this.models.sort(b);a.silent||this.trigger("reset",
this,a);return this},pluck:function(a){return f.map(this.models,function(b){return b.get(a)})},reset:function(a,b){a||(a=[]);b||(b={});for(var c=0,d=this.models.length;c<d;c++)this._removeReference(this.models[c]);this._reset();this.add(a,{silent:!0,parse:b.parse});b.silent||this.trigger("reset",this,b);return this},fetch:function(a){a=a?f.clone(a):{};void 0===a.parse&&(a.parse=!0);var b=this,c=a.success;a.success=function(d,e,f){b[a.add?"add":"reset"](b.parse(d,f),a);c&&c(b,d)};a.error=g.wrapError(a.error,
b,a);return(this.sync||g.sync).call(this,"read",this,a)},create:function(a,b){var c=this,b=b?f.clone(b):{},a=this._prepareModel(a,b);if(!a)return!1;b.wait||c.add(a,b);var d=b.success;b.success=function(e,f){b.wait&&c.add(e,b);d?d(e,f):e.trigger("sync",a,f,b)};a.save(null,b);return a},parse:function(a){return a},chain:function(){return f(this.models).chain()},_reset:function(){this.length=0;this.models=[];this._byId={};this._byCid={}},_prepareModel:function(a,b){a instanceof g.Model?a.collection||
(a.collection=this):(b.collection=this,a=new this.model(a,b),a._validate(a.attributes,b)||(a=!1));return a},_removeReference:function(a){this==a.collection&&delete a.collection;a.off("all",this._onModelEvent,this)},_onModelEvent:function(a,b,c,d){("add"==a||"remove"==a)&&c!=this||("destroy"==a&&this.remove(b,d),b&&a==="change:"+b.idAttribute&&(delete this._byId[b.previous(b.idAttribute)],this._byId[b.id]=b),this.trigger.apply(this,arguments))}});f.each("forEach,each,map,reduce,reduceRight,find,detect,filter,select,reject,every,all,some,any,include,contains,invoke,max,min,sortBy,sortedIndex,toArray,size,first,initial,rest,last,without,indexOf,shuffle,lastIndexOf,isEmpty,groupBy".split(","),
function(a){g.Collection.prototype[a]=function(){return f[a].apply(f,[this.models].concat(f.toArray(arguments)))}});g.Router=function(a){a||(a={});a.routes&&(this.routes=a.routes);this._bindRoutes();this.initialize.apply(this,arguments)};var u=/:\w+/g,v=/\*\w+/g,w=/[-[\]{}()+?.,\\^$|#\s]/g;f.extend(g.Router.prototype,g.Events,{initialize:function(){},route:function(a,b,c){g.history||(g.history=new g.History);f.isRegExp(a)||(a=this._routeToRegExp(a));c||(c=this[b]);g.history.route(a,f.bind(function(d){d=
this._extractParameters(a,d);c&&c.apply(this,d);this.trigger.apply(this,["route:"+b].concat(d));g.history.trigger("route",this,b,d)},this));return this},navigate:function(a,b){g.history.navigate(a,b)},_bindRoutes:function(){if(this.routes){var a=[],b;for(b in this.routes)a.unshift([b,this.routes[b]]);b=0;for(var c=a.length;b<c;b++)this.route(a[b][0],a[b][1],this[a[b][1]])}},_routeToRegExp:function(a){a=a.replace(w,"\\$&").replace(u,"([^/]+)").replace(v,"(.*?)");return RegExp("^"+a+"$")},_extractParameters:function(a,
b){return a.exec(b).slice(1)}});g.History=function(){this.handlers=[];f.bindAll(this,"checkUrl")};var m=/^[#\/]/,x=/msie [\w.]+/,l=!1;f.extend(g.History.prototype,g.Events,{interval:50,getFragment:function(a,b){if(null==a)if(this._hasPushState||b){var a=window.location.pathname,c=window.location.search;c&&(a+=c)}else a=window.location.hash;a=decodeURIComponent(a);a.indexOf(this.options.root)||(a=a.substr(this.options.root.length));return a.replace(m,"")},start:function(a){if(l)throw Error("Backbone.history has already been started");
this.options=f.extend({},{root:"/"},this.options,a);this._wantsHashChange=!1!==this.options.hashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=!(!this.options.pushState||!window.history||!window.history.pushState);var a=this.getFragment(),b=document.documentMode;if(b=x.exec(navigator.userAgent.toLowerCase())&&(!b||7>=b))this.iframe=h('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(a);this._hasPushState?h(window).bind("popstate",
this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!b?h(window).bind("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval));this.fragment=a;l=!0;a=window.location;b=a.pathname==this.options.root;if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!b)return this.fragment=this.getFragment(null,!0),window.location.replace(this.options.root+"#"+this.fragment),!0;this._wantsPushState&&this._hasPushState&&b&&a.hash&&
(this.fragment=a.hash.replace(m,""),window.history.replaceState({},document.title,a.protocol+"//"+a.host+this.options.root+this.fragment));if(!this.options.silent)return this.loadUrl()},stop:function(){h(window).unbind("popstate",this.checkUrl).unbind("hashchange",this.checkUrl);clearInterval(this._checkUrlInterval);l=!1},route:function(a,b){this.handlers.unshift({route:a,callback:b})},checkUrl:function(){var a=this.getFragment();a==this.fragment&&this.iframe&&(a=this.getFragment(this.iframe.location.hash));
if(a==this.fragment||a==decodeURIComponent(this.fragment))return!1;this.iframe&&this.navigate(a);this.loadUrl()||this.loadUrl(window.location.hash)},loadUrl:function(a){var b=this.fragment=this.getFragment(a);return f.any(this.handlers,function(a){if(a.route.test(b))return a.callback(b),!0})},navigate:function(a,b){if(!l)return!1;if(!b||!0===b)b={trigger:b};var c=(a||"").replace(m,"");this.fragment==c||this.fragment==decodeURIComponent(c)||(this._hasPushState?(0!=c.indexOf(this.options.root)&&(c=
this.options.root+c),this.fragment=c,window.history[b.replace?"replaceState":"pushState"]({},document.title,c)):this._wantsHashChange?(this.fragment=c,this._updateHash(window.location,c,b.replace),this.iframe&&c!=this.getFragment(this.iframe.location.hash)&&(b.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,c,b.replace))):window.location.assign(this.options.root+a),b.trigger&&this.loadUrl(a))},_updateHash:function(a,b,c){c?a.replace(a.toString().replace(/(javascript:|#).*$/,
"")+"#"+b):a.hash=b}});g.View=function(a){this.cid=f.uniqueId("view");this._configure(a||{});this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()};var y=/^(\S+)\s*(.*)$/,p="model,collection,el,id,attributes,className,tagName".split(",");f.extend(g.View.prototype,g.Events,{tagName:"div",$:function(a){return this.$el.find(a)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();return this},make:function(a,b,c){a=document.createElement(a);
b&&h(a).attr(b);c&&h(a).html(c);return a},setElement:function(a,b){this.$el=h(a);this.el=this.$el[0];!1!==b&&this.delegateEvents();return this},delegateEvents:function(a){if(a||(a=j(this,"events"))){this.undelegateEvents();for(var b in a){var c=a[b];f.isFunction(c)||(c=this[a[b]]);if(!c)throw Error('Event "'+a[b]+'" does not exist');var d=b.match(y),e=d[1],d=d[2],c=f.bind(c,this),e=e+(".delegateEvents"+this.cid);""===d?this.$el.bind(e,c):this.$el.delegate(d,e,c)}}},undelegateEvents:function(){this.$el.unbind(".delegateEvents"+
this.cid)},_configure:function(a){this.options&&(a=f.extend({},this.options,a));for(var b=0,c=p.length;b<c;b++){var d=p[b];a[d]&&(this[d]=a[d])}this.options=a},_ensureElement:function(){if(this.el)this.setElement(this.el,!1);else{var a=j(this,"attributes")||{};this.id&&(a.id=this.id);this.className&&(a["class"]=this.className);this.setElement(this.make(this.tagName,a),!1)}}});g.Model.extend=g.Collection.extend=g.Router.extend=g.View.extend=function(a,b){var c=z(this,a,b);c.extend=this.extend;return c};
var A={create:"POST",update:"PUT","delete":"DELETE",read:"GET"};g.sync=function(a,b,c){var d=A[a],e={type:d,dataType:"json"};c.url||(e.url=j(b,"url")||o());if(!c.data&&b&&("create"==a||"update"==a))e.contentType="application/json",e.data=JSON.stringify(b.toJSON());g.emulateJSON&&(e.contentType="application/x-www-form-urlencoded",e.data=e.data?{model:e.data}:{});if(g.emulateHTTP&&("PUT"===d||"DELETE"===d))g.emulateJSON&&(e.data._method=d),e.type="POST",e.beforeSend=function(a){a.setRequestHeader("X-HTTP-Method-Override",
d)};"GET"!==e.type&&!g.emulateJSON&&(e.processData=!1);return h.ajax(f.extend(e,c))};g.wrapError=function(a,b,c){return function(d,e){e=d===b?e:d;a?a(b,e,c):b.trigger("error",b,e,c)}};var q=function(){},z=function(a,b,c){var d;d=b&&b.hasOwnProperty("constructor")?b.constructor:function(){a.apply(this,arguments)};f.extend(d,a);q.prototype=a.prototype;d.prototype=new q;b&&f.extend(d.prototype,b);c&&f.extend(d,c);d.prototype.constructor=d;d.__super__=a.prototype;return d},j=function(a,b){return!a||!a[b]?
null:f.isFunction(a[b])?a[b]():a[b]},o=function(){throw Error('A "url" property or function must be specified');}}).call(this);
/**
 * Lawnchair!
 * --- 
 * clientside json store 
 *
 */
var Lawnchair=function(b,a){if(!(this instanceof Lawnchair))return new Lawnchair(b,a);if(!JSON)throw"JSON unavailable! Include http://www.json.org/json2.js to fix.";if(arguments.length<=2&&arguments.length>0)a=typeof arguments[0]==="function"?arguments[0]:arguments[1],b=typeof arguments[0]==="function"?{}:arguments[0];else throw"Incorrect # of ctor args!";if(typeof a!=="function")throw"No callback was provided";this.record=b.record||"record";this.name=b.name||"records";var e;if(b.adapter)for(var c=
0,d=Lawnchair.adapters.length;c<d;c++){if(Lawnchair.adapters[c].adapter===b.adapter){e=Lawnchair.adapters[c].valid()?Lawnchair.adapters[c]:void 0;break}}else{c=0;for(d=Lawnchair.adapters.length;c<d;c++)if(e=Lawnchair.adapters[c].valid()?Lawnchair.adapters[c]:void 0)break}if(!e)throw"No valid adapter.";for(var f in e)this[f]=e[f];c=0;for(d=Lawnchair.plugins.length;c<d;c++)Lawnchair.plugins[c].call(this);this.init(b,a)};Lawnchair.adapters=[];
Lawnchair.adapter=function(b,a){a.adapter=b;var e="adapter valid init keys save batch get exists all remove nuke".split(" "),c=this.prototype.indexOf,d;for(d in a)if(c(e,d)===-1)throw"Invalid adapter! Nonstandard method: "+d;Lawnchair.adapters.push(a)};Lawnchair.plugins=[];Lawnchair.plugin=function(b){for(var a in b)a==="init"?Lawnchair.plugins.push(b[a]):this.prototype[a]=b[a]};
Lawnchair.prototype={isArray:Array.isArray||function(b){return Object.prototype.toString.call(b)==="[object Array]"},indexOf:function(b,a,e,c){if(b.indexOf)return b.indexOf(a);for(e=0,c=b.length;e<c;e++)if(b[e]===a)return e;return-1},lambda:function(b){return this.fn(this.record,b)},fn:function(b,a){return typeof a=="string"?new Function(b,a):a},uuid:function(){var b=function(){return((1+Math.random())*65536|0).toString(16).substring(1)};return b()+b()+"-"+b()+"-"+b()+"-"+b()+"-"+b()+b()+b()},each:function(b){var a=
this.lambda(b);if(this.__results)for(var b=0,e=this.__results.length;b<e;b++)a.call(this,this.__results[b],b);else this.all(function(c){for(var b=0,e=c.length;b<e;b++)a.call(this,c[b],b)});return this}};
Lawnchair.adapter("webkit-sqlite",function(){var b=function(a,b){console.log("error in sqlite adaptor!",a,b)};if(!Function.prototype.bind)Function.prototype.bind=function(b){var e=[].slice,c=e.call(arguments,1),d=this,f=function(){},g=function(){return d.apply(this instanceof f?this:b||{},c.concat(e.call(arguments)))};f.prototype=d.prototype;g.prototype=new f;return g};return{valid:function(){return!!window.openDatabase},init:function(a,e){var c=this,d=c.fn(c.name,e),f="CREATE TABLE IF NOT EXISTS "+
this.name+" (id NVARCHAR(32) UNIQUE PRIMARY KEY, value TEXT, timestamp REAL)",g=function(){return d.call(c,c)};this.db=openDatabase(this.name,"1.0.0",this.name,65536);this.db.transaction(function(c){c.executeSql(f,[],g,b)})},keys:function(a){var e=this.lambda(a),c=this,d="SELECT id FROM "+this.name+" ORDER BY timestamp DESC";this.db.transaction(function(a){a.executeSql(d,[],function(b,a){if(a.rows.length==0)e.call(c,[]);else{for(var d=[],f=0,j=a.rows.length;f<j;f++)d.push(a.rows.item(f).id);e.call(c,
d)}},b)});return this},save:function(a,e){var c=this,d=a.key||c.uuid(),f="INSERT INTO "+this.name+" (value, timestamp, id) VALUES (?,?,?)",g="UPDATE "+this.name+" SET value=?, timestamp=? WHERE id=?",k=function(){if(e)a.key=d,c.lambda(e).call(c,a)},h=[new Date,d];c.exists(a.key,function(e){c.db.transaction(function(c){var d=function(a){delete a.key;h.unshift(JSON.stringify(a));c.executeSql(g,h,k,b)};e?d(a):(h.unshift(JSON.stringify(a)),c.executeSql(f,h,k,b))})});return this},batch:function(a,b){for(var c=
[],d=!1,f=this,g=function(b){c.push(b);d=c.length===a.length},k=setInterval(function(){d&&(b&&f.lambda(b).call(f,c),clearInterval(k))},200),h=0,i=a.length;h<i;h++)this.save(a[h],g);return this},get:function(a,e){var c=this,d="",d=this.isArray(a)?"SELECT id, value FROM "+this.name+" WHERE id IN ('"+a.join("','")+"')":"SELECT id, value FROM "+this.name+" WHERE id = '"+a+"'",f=function(b,d){var f=null,i=[];if(d.rows.length)for(var j=0,l=d.rows.length;j<l;j++)f=JSON.parse(d.rows.item(j).value),f.key=
d.rows.item(j).id,i.push(f);c.isArray(a)||(i=i.length?i[0]:null);e&&c.lambda(e).call(c,i)};this.db.transaction(function(a){a.executeSql(d,[],f,b)});return this},exists:function(a,e){var c="SELECT * FROM "+this.name+" WHERE id = ?",d=this,f=function(b,a){e&&d.fn("exists",e).call(d,a.rows.length>0)};this.db.transaction(function(d){d.executeSql(c,[a],f,b)});return this},all:function(a){var e=this,c="SELECT * FROM "+this.name,d=[],f=this.fn(this.name,a)||void 0,g=function(a,b){if(b.rows.length!=0)for(var c=
0,g=b.rows.length;c<g;c++){var l=JSON.parse(b.rows.item(c).value);l.key=b.rows.item(c).id;d.push(l)}f&&f.call(e,d)};this.db.transaction(function(a){a.executeSql(c,[],g,b)});return this},remove:function(a,e){var c=this,d=typeof a==="string"?a:a.key,f="DELETE FROM "+this.name+" WHERE id = ?",g=function(){e&&c.lambda(e).call(c)};this.db.transaction(function(a){a.executeSql(f,[d],g,b)});return this},nuke:function(a){var e="DELETE FROM "+this.name,c=this,d=a?function(){c.lambda(a).call(c)}:function(){};
this.db.transaction(function(a){a.executeSql(e,[],d,b)});return this}}}());
/**
* Bootstrap.js by @fat & @mdo
* plugins: bootstrap-transition.js, bootstrap-modal.js, bootstrap-tooltip.js, bootstrap-popover.js, bootstrap-alert.js, bootstrap-button.js
* Copyright 2012 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
!function(a){a(function(){"use strict",a.support.transition=function(){var b=document.body||document.documentElement,c=b.style,d=c.transition!==undefined||c.WebkitTransition!==undefined||c.MozTransition!==undefined||c.MsTransition!==undefined||c.OTransition!==undefined;return d&&{end:function(){var b="TransitionEnd";return a.browser.webkit?b="webkitTransitionEnd":a.browser.mozilla?b="transitionend":a.browser.opera&&(b="oTransitionEnd"),b}()}}()})}(window.jQuery),!function(a){function c(){var b=this,c=setTimeout(function(){b.$element.off(a.support.transition.end),d.call(b)},500);this.$element.one(a.support.transition.end,function(){clearTimeout(c),d.call(b)})}function d(a){this.$element.hide().trigger("hidden"),e.call(this)}function e(b){var c=this,d=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var e=a.support.transition&&d;this.$backdrop=a('<div class="modal-backdrop '+d+'" />').appendTo(document.body),this.options.backdrop!="static"&&this.$backdrop.click(a.proxy(this.hide,this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),e?this.$backdrop.one(a.support.transition.end,b):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,a.proxy(f,this)):f.call(this)):b&&b()}function f(){this.$backdrop.remove(),this.$backdrop=null}function g(){var b=this;this.isShown&&this.options.keyboard?a(document).on("keyup.dismiss.modal",function(a){a.which==27&&b.hide()}):this.isShown||a(document).off("keyup.dismiss.modal")}"use strict";var b=function(b,c){this.options=c,this.$element=a(b).delegate('[data-dismiss="modal"]',"click.dismiss.modal",a.proxy(this.hide,this))};b.prototype={constructor:b,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var b=this;if(this.isShown)return;a("body").addClass("modal-open"),this.isShown=!0,this.$element.trigger("show"),g.call(this),e.call(this,function(){var c=a.support.transition&&b.$element.hasClass("fade");!b.$element.parent().length&&b.$element.appendTo(document.body),b.$element.show(),c&&b.$element[0].offsetWidth,b.$element.addClass("in"),c?b.$element.one(a.support.transition.end,function(){b.$element.trigger("shown")}):b.$element.trigger("shown")})},hide:function(b){b&&b.preventDefault();if(!this.isShown)return;var e=this;this.isShown=!1,a("body").removeClass("modal-open"),g.call(this),this.$element.trigger("hide").removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?c.call(this):d.call(this)}},a.fn.modal=function(c){return this.each(function(){var d=a(this),e=d.data("modal"),f=a.extend({},a.fn.modal.defaults,typeof c=="object"&&c);e||d.data("modal",e=new b(this,f)),typeof c=="string"?e[c]():f.show&&e.show()})},a.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},a.fn.modal.Constructor=b,a(function(){a("body").on("click.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d,e=a(c.attr("data-target")||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({},e.data(),c.data());b.preventDefault(),e.modal(f)})})}(window.jQuery),!function(a){"use strict";var b=function(a,b){this.init("tooltip",a,b)};b.prototype={constructor:b,init:function(b,c,d){var e,f;this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.enabled=!0,this.options.trigger!="manual"&&(e=this.options.trigger=="hover"?"mouseenter":"focus",f=this.options.trigger=="hover"?"mouseleave":"blur",this.$element.on(e,this.options.selector,a.proxy(this.enter,this)),this.$element.on(f,this.options.selector,a.proxy(this.leave,this))),this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(b){return b=a.extend({},a.fn[this.type].defaults,b,this.$element.data()),b.delay&&typeof b.delay=="number"&&(b.delay={show:b.delay,hide:b.delay}),b},enter:function(b){var c=a(b.currentTarget)[this.type](this._options).data(this.type);!c.options.delay||!c.options.delay.show?c.show():(c.hoverState="in",setTimeout(function(){c.hoverState=="in"&&c.show()},c.options.delay.show))},leave:function(b){var c=a(b.currentTarget)[this.type](this._options).data(this.type);!c.options.delay||!c.options.delay.hide?c.hide():(c.hoverState="out",setTimeout(function(){c.hoverState=="out"&&c.hide()},c.options.delay.hide))},show:function(){var a,b,c,d,e,f,g;if(this.hasContent()&&this.enabled){a=this.tip(),this.setContent(),this.options.animation&&a.addClass("fade"),f=typeof this.options.placement=="function"?this.options.placement.call(this,a[0],this.$element[0]):this.options.placement,b=/in/.test(f),a.remove().css({top:0,left:0,display:"block"}).appendTo(b?this.$element:document.body),c=this.getPosition(b),d=a[0].offsetWidth,e=a[0].offsetHeight;switch(b?f.split(" ")[1]:f){case"bottom":g={top:c.top+c.height,left:c.left+c.width/2-d/2};break;case"top":g={top:c.top-e,left:c.left+c.width/2-d/2};break;case"left":g={top:c.top+c.height/2-e/2,left:c.left-d};break;case"right":g={top:c.top+c.height/2-e/2,left:c.left+c.width}}a.css(g).addClass(f).addClass("in")}},setContent:function(){var a=this.tip();a.find(".tooltip-inner").html(this.getTitle()),a.removeClass("fade in top bottom left right")},hide:function(){function d(){var b=setTimeout(function(){c.off(a.support.transition.end).remove()},500);c.one(a.support.transition.end,function(){clearTimeout(b),c.remove()})}var b=this,c=this.tip();c.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d():c.remove()},fixTitle:function(){var a=this.$element;(a.attr("title")||typeof a.attr("data-original-title")!="string")&&a.attr("data-original-title",a.attr("title")||"").removeAttr("title")},hasContent:function(){return this.getTitle()},getPosition:function(b){return a.extend({},b?{top:0,left:0}:this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight})},getTitle:function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||(typeof c.title=="function"?c.title.call(b[0]):c.title),a=a.toString().replace(/(^\s*|\s*$)/,""),a},tip:function(){return this.$tip=this.$tip||a(this.options.template)},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(){this[this.tip().hasClass("in")?"hide":"show"]()}},a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("tooltip"),f=typeof c=="object"&&c;e||d.data("tooltip",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.defaults={animation:!0,delay:0,selector:!1,placement:"top",trigger:"hover",title:"",template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'}}(window.jQuery),!function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype,{constructor:b,setContent:function(){var b=this.tip(),c=this.getTitle(),d=this.getContent();b.find(".popover-title")[a.type(c)=="object"?"append":"html"](c),b.find(".popover-content > *")[a.type(d)=="object"?"append":"html"](d),b.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var a,b=this.$element,c=this.options;return a=b.attr("data-content")||(typeof c.content=="function"?c.content.call(b[0]):c.content),a=a.toString().replace(/(^\s*|\s*$)/,""),a},tip:function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip}}),a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("popover"),f=typeof c=="object"&&c;e||d.data("popover",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.defaults=a.extend({},a.fn.tooltip.defaults,{placement:"right",content:"",template:'<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'})}(window.jQuery),!function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype={constructor:c,close:function(b){function f(){e.remove(),e.trigger("closed")}var c=a(this),d=c.attr("data-target"),e;d||(d=c.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),e=a(d),e.trigger("close"),b&&b.preventDefault(),e.length||(e=c.hasClass("alert")?c:c.parent()),e.removeClass("in"),a.support.transition&&e.hasClass("fade")?e.on(a.support.transition.end,f):f()}},a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("alert");e||d.data("alert",e=new c(this)),typeof b=="string"&&e[b].call(d)})},a.fn.alert.Constructor=c,a(function(){a("body").on("click.alert.data-api",b,c.prototype.close)})}(window.jQuery),!function(a){"use strict";var b=function(b,c){this.$element=a(b),this.options=a.extend({},a.fn.button.defaults,c)};b.prototype={constructor:b,setState:function(a){var b="disabled",c=this.$element,d=c.data(),e=c.is("input")?"val":"html";a+="Text",d.resetText||c.data("resetText",c[e]()),c[e](d[a]||this.options[a]),setTimeout(function(){a=="loadingText"?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},toggle:function(){var a=this.$element.parent('[data-toggle="buttons-radio"]');a&&a.find(".active").removeClass("active"),this.$element.toggleClass("active")}},a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("button"),f=typeof c=="object"&&c;e||d.data("button",e=new b(this,f)),c=="toggle"?e.toggle():c&&e.setState(c)})},a.fn.button.defaults={loadingText:"loading..."},a.fn.button.Constructor=b,a(function(){a("body").on("click.button.data-api","[data-toggle^=button]",function(b){a(b.target).button("toggle")})})}(window.jQuery); //<== MUST put a semicolon here because twitter bootstrap is written by a bunch of smelly hipsters
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
/*
(function(d){function e(a){var b=a||window.event,c=[].slice.call(arguments,1),f=0,e=0,g=0,a=d.event.fix(b);a.type="mousewheel";b.wheelDelta&&(f=b.wheelDelta/120);b.detail&&(f=-b.detail/3);g=f;b.axis!==void 0&&b.axis===b.HORIZONTAL_AXIS&&(g=0,e=-1*f);b.wheelDeltaY!==void 0&&(g=b.wheelDeltaY/120);b.wheelDeltaX!==void 0&&(e=-1*b.wheelDeltaX/120);c.unshift(a,f,e,g);return(d.event.dispatch||d.event.handle).apply(this,c)}var c=["DOMMouseScroll","mousewheel"];if(d.event.fixHooks)for(var h=c.length;h;)d.event.fixHooks[c[--h]]=
d.event.mouseHooks;d.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=c.length;a;)this.addEventListener(c[--a],e,!1);else this.onmousewheel=e},teardown:function(){if(this.removeEventListener)for(var a=c.length;a;)this.removeEventListener(c[--a],e,!1);else this.onmousewheel=null}};d.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);
*/
/* Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: Andrew Cobby (@andrewcobby http://github.com/cobbweb)
 *              - Refactored for jQuery 1.7+ only
 *              - Use MozMousePixelScroll for new Gecko browsers
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 2.0.0
 *
 * Recommended for jQuery 1.7+
 * Should work with older versions though
 */

(function($,undefined) {

    var types = ['DOMMouseScroll', 'mousewheel', 'MozMousePixelScroll'];

    if ($.event.fixHooks) {
        for (var i=types.length; i;) {
            $.event.fixHooks[types[--i]] = $.event.mouseHooks;
        }
    }

    $.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener) {
                for (var i=types.length; i;) {
                    this.addEventListener(types[--i], handler, false);
                }
            } else {
                this.onmousewheel = handler;
            }
        },

        teardown: function() {
            if (this.removeEventListener) {
                for (var i=types.length; i;) {
                    this.removeEventListener(types[--i], handler, false);
                }
            } else {
                this.onmousewheel = null;
            }
        }
    };

$.fn.extend({
    mousewheel: function(fn) {
        return fn ? this.on("mousewheel", fn) : this.trigger("mousewheel");
    },
    
    unmousewheel: function(fn) {
        return this.off("mousewheel", fn);
    }
});

    function handler(event) {
        var orgEvent = event || window.event, args = [].slice.call(arguments, 1), delta = 0, deltaX = 0, deltaY = 0;
        event = $.event.fix(orgEvent);
        event.type = "mousewheel";

        // Old school scrollwheel delta
        if (orgEvent.wheelDelta) {
            delta = orgEvent.wheelDelta / 120;
        }

        if (orgEvent.detail) {
            if (orgEvent.type == types[2]) {
                // Firefox 4+, unbind old DOMMouseScroll event
                this.removeEventListener(types[0], handler, false);
                delta = -orgEvent.detail / 42;
            } else {
                delta = -orgEvent.detail / 3;
            }
        }

        // New school multidimensional scroll (touchpads) deltas
        deltaY = delta;

        // Gecko
        if (orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
            deltaY = 0;
            deltaX = -1 * delta;
        }

        // Webkit
        if (orgEvent.wheelDeltaY !== undefined) {
            deltaY = orgEvent.wheelDeltaY / 120;
        }

        if (orgEvent.wheelDeltaX !== undefined) {
            deltaX = -1 * orgEvent.wheelDeltaX / 120;
        }

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

})(jQuery);


/**
* pan_and_zoom.min
*/
; // start this bad boy off with a semicolon, thats right a semicolon

(function($) {

	/************ BEGIN VirtualRectangle Class Definition ***********/
	var VirtualRectangle = function(startRect) {
		this.startRect = startRect;
		this.top 	= startRect.top;
		this.left 	= startRect.left;
		this.width 	= startRect.width;
		this.height = startRect.height;
		this.scale 	= 1.0;
	};

	VirtualRectangle.prototype.applyConstraints = function() {
		
	};

	VirtualRectangle.prototype.getZoom = function() {
		return this.height / this.startRect.height;
	};

	VirtualRectangle.prototype.getOffsetX = function() {
		return (this.left - this.startRect.left) / this.scale;
	};

	VirtualRectangle.prototype.getOffsetY = function() {
		return (this.top - this.startRect.top) / this.scale;
	};

	VirtualRectangle.prototype.pan = function(deltaX, deltaY) {
		this.top += deltaY;
		this.left += deltaX;
	}

	VirtualRectangle.prototype.zoom = function(originX, originY, delta) {
		var scale = (this.width + delta) / this.startRect.width;
		var width = scale * this.startRect.width;
		var height = scale * this.startRect.height;

		// we want to keep the transorm origin in th same place on screen
		// so we need to do a transformation to compensate
		var rightShift = 0; //(originX)/(this.startRect.width) * (width - this.width);
		var upShift = 0;// (originY)/(this.startRect.height) * (height - this.height);
		
		this.width = width;
		this.height = height;
		this.scale = scale;
		this.top -= upShift;
		this.left -= rightShift;
	};

	VirtualRectangle.prototype.applyScale = function(originX, originY, scale) {

		if(scale > 4) scale = 4;
		if(scale < 0.1) scale = 0.1;
		
		var width = scale * this.startRect.width;
		var height = scale * this.startRect.height;
		
		// we want to keep the transorm origin in th same place on screen
		// so we need to do a transformation to compensate
		var rightShift =0// 0.5 * (width - this.width);
		var upShift = 0//.5 * (height - this.height);
		this.width = width;
		this.height = height;
		this.scale = scale;
		this.top -= upShift;
		this.left -= rightShift;
	};

	/************ END VirtualRectangle Class Definition ***********/

	var getTransformString = function(vrect) {
	  // JCD: Stop the image "flipping" upside down because of negative scale coordinates.
		var str =  'scale(' + Math.abs(vrect.getZoom()) + ') ';

    // JCD: Sort out the weird viewport behaviour of the iPad, whereby it cuts off bits of our content.
    var isiPad = /ipad/i.test(navigator.userAgent.toLowerCase());
    if (isiPad) {
      str = "scale(1) "; 
    }

		str +=	'translate('+vrect.getOffsetX()+'px, '+vrect.getOffsetY()+'px)'
		return str;
	};
	
	var bindMouseWheelHandler = function($elem, vRect, startRender, stopRender, options) {
		var timeout = null;
		// zoom via mouse wheel events
		$elem.mousewheel(function(event, dt) {
			event.preventDefault();

			vRect.zoom(event.offsetX, event.offsetY, dt*options.scaleRate);
			
			if(timeout) {
				clearTimeout(timeout);
			}
			startRender();
			// set the timeout to stop running
			timeout = setTimeout(function() {
				stopRender();
			}, 35);
			
		});

	};

	var bindMouseDownHandler = function($elem, vRect, startRender, stopRender, options) {
		var mouseTrack = false;
		var mousePos = {
			x: 0,
			y: 0
		}
		// pan and zoom via click and drag
		$elem.mousedown(function(e) {
			mouseTrack = true;
			mousePos.x = e.clientX;
			mousePos.y = e.clientY;
			startRender();
		}).mouseup(function(e) {
			mouseTrack = false;
			stopRender();
		}).mousemove(function(e) {
			if(mouseTrack) {
				var deltaX = e.clientX - mousePos.x;
				var deltaY = e.clientY - mousePos.y;
				vRect.pan(deltaX, deltaY);
				vRect.applyConstraints();
				mousePos.x = e.clientX;
				mousePos.y = e.clientY;
			}
		});
		
	};

	var bindGestureHandler = function($elem, vRect, startRender, stopRender, options) {

		var timeout; // capture this the click handler functions closure
		var startScale = 1;

		$elem.on("gesturestart", function(event) {
			event.preventDefault();
			startScale = event.originalEvent.scale
			startRender();
		}).on("gestureend", function(event) {
			event.preventDefault();

			stopRender();
		}).on("gesturechange", function(event) {
			event.preventDefault();
			/*var log = ""
			for(x in event) {
				log += x + "\n";
			}
			alert(log);*/
			vRect.applyScale(0, 0, event.originalEvent.scale);
			// if(timeout) {
			// 	clearTimeout(timeout);
			// }
			startRender();
			// set the timeout to stop running
			// timeout = setTimeout(function() {
			// 	stopRender();
			// }, 105);
		});
	}

	$.fn.zoomAndScale = function(options) {

		options = $.extend({}, $.fn.zoomAndScale.defaults, options);

		return this.each(function() {
			var $elem = $(this);
			var $parent = $('body');

			// put it in the center of it's parent
			var right = ($elem.width() -  $parent.width()) / 2;
			var top = ($elem.height() -  $parent.height()) / 2 + 20;
			if(right > 0) {
				$elem.css({
				"position": "relative",
				"right": right + "px",
				"top": "-" + top + "px"
				});
			}
			


			var dontRender = true;
			
			var startRect = {
				top: 0,
				left: 0,
				width: $elem.width(),
				height: $elem.height()
			};
			var virtualRect = new VirtualRectangle(startRect);
			virtualRect.applyScale(0, 0, ( $parent.height() / $elem.height() ) * 0.9 );

			// JCD: Now that we're using jquery.transform2d.js we can make our 2d transforms
			// more browser agnostic by using 'transform' instead of 'webkit-transform'.
			$elem.css('transform', getTransformString(virtualRect) );

			//$elem.css('-webkit-transform-origin', "0 0");

			$elem.css('transform', getTransformString(virtualRect) );

			// render loop for the element
			var render = function() {
				if(dontRender) return;
				$elem.css('transform', getTransformString(virtualRect) );
				setTimeout(render, options.frameRate);
			};

			var startRender = function() {
				if(dontRender) {
					dontRender = false;
					render();
				}
			};

			var stopRender = function() {
				dontRender = true;
			}

			bindMouseDownHandler($elem, virtualRect, startRender, stopRender, options);
			bindMouseWheelHandler($elem, virtualRect, startRender, stopRender, options);
			bindGestureHandler($elem, virtualRect, startRender, stopRender, options);
			
		});
	};

	$.fn.zoomAndScale.defaults = {
		frameRate: 30,
		scaleRate: 30
	}

})(jQuery);
/**
* Jath is free software provided under the MIT license.
*	See LICENSE file for full text of the license.
*	Copyright 2010 Dan Newcome.
*/
(function(){function f(a,b,c){c===void 0&&(c=b);if(h(a)==="array"){var e=[];if(a[0]!=null)if(g=="msie"){b.setProperty("SelectionLanguage","XPath");for(var c=c.selectNodes(a[0]),d;d=c.nextNode();)e.push(f(a[1],b,d))}else if(g=="node"){c=c.find(a[0]);for(d=0;d<c.length;d++)e.push(f(a[1],b,c[d]))}else for(c=b.evaluate(a[0],c,Jath.resolver,XPathResult.ANY_TYPE,null);d=c.iterateNext();)e.push(f(a[1],b,d));else for(d=1;d<a.length;d++)e.push(f(a[d],b,c));a=e}else if(h(a)==="object"){d={};for(e in a)d[e]=
f(a[e],b,c);a=d}else e=c,g=="msie"?(b.setProperty("SelectionLanguage","XPath"),a=h(a)=="string"&&a.substring(0,1)!=Jath.literalChar?e.selectSingleNode(a).text:a.substring(1)):g=="node"?(require("sys").puts(a),a=e.get(a).text()):a=h(a)=="string"&&a[0]!=Jath.literalChar?b.evaluate(a,e,Jath.resolver,XPathResult.STRING_TYPE,null).stringValue:a.substring(1);return a}function h(a){var b=typeof a;b==="object"&&(a?typeof a.length==="number"&&!a.propertyIsEnumerable("length")&&typeof a.splice==="function"&&
(b="array"):b="null");return b}Jath={};Jath.parse=f;Jath.resolver=null;Jath.literalChar=":";var g;typeof WScript!="undefined"?g="msie":typeof process!="undefined"?(g="node",require("libxmljs"),exports.parse=f):g=navigator.userAgent.toLowerCase().indexOf("msie")>-1?"msie":"standards"})();

/*
 * An URI datatype.  Based upon examples in RFC3986.
 *
 * TODO %-escaping
 * TODO split apart authority
 * TODO split apart query_string (on demand, anyway)
 *
 * @(#) $Id$
 */

function URI(b){b||(b="");b=b.match(/^(?:([^:\/?\#]+):)?(?:\/\/([^\/?\#]*))?([^?\#]*)(?:\?([^\#]*))?(?:\#(.*))?/);this.scheme=b[1]||null;this.authority=b[2]||null;this.path=b[3]||null;this.query=b[4]||null;this.fragment=b[5]||null}URI.prototype.toString=function(){var b="";this.scheme&&(b+=this.scheme+":");this.authority&&(b+="//"+this.authority);this.path&&(b+=this.path);this.query&&(b+="?"+this.query);this.fragment&&(b+="#"+this.fragment);return b};
(function(){function b(a){if(!a)return"";a=a.replace(/\/\.\//g,"/");for(a=a.replace(/\/\.$/,"/");a.match(e);)a=a.replace(e,"/");for(a=a.replace(/\/([^\/]*)\/\.\.$/,"/");a.match(/\/\.\.\//);)a=a.replace(/\/\.\.\//,"/");return a}var e=/\/((?!\.\.\/)[^\/]*)\/\.\.\//;URI.prototype.resolve=function(a){var c=new URI;if(this.scheme)c.scheme=this.scheme,c.authority=this.authority,c.path=b(this.path),c.query=this.query;else{if(this.authority)c.authority=this.authority,c.path=b(this.path),c.query=this.query;
else{if(this.path){if(this.path.charAt(0)==="/")c.path=b(this.path);else{var d;d=this.path;var e=/^(.*)\//;d=a.authority&&!a.path?"/"+d:a.path.match(e)[0]+d;c.path=d;c.path=b(c.path)}c.query=this.query}else c.path=a.path,c.query=this.query?this.query:a.query;c.authority=a.authority}c.scheme=a.scheme}c.fragment=this.fragment;return c}})();
/*
*jQuery Mobile touch events
*
*/
(function(a,h,m){function i(c,b,d){var f=d.type;d.type=b;a.event.handle.call(c,d);d.type=f}a.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(c,b){a.fn[b]=function(a){return a?this.bind(b,a):this.trigger(b)};a.attrFn[b]=!0});var n=(h="ontouchend"in document)?"touchstart":"mousedown",o=h?"touchend":"mouseup",j=h?"touchmove":"mousemove";a.event.special.scrollstart={enabled:!0,setup:function(){function c(a,c){d=c;i(b,d?"scrollstart":
"scrollstop",a)}var b=this,d,f;a(b).bind("touchmove scroll",function(b){a.event.special.scrollstart.enabled&&(d||c(b,!0),clearTimeout(f),f=setTimeout(function(){c(b,!1)},50))})}};a.event.special.tap={tapholdThreshold:750,setup:function(){var c=this,b=a(c);b.bind("vmousedown",function(d){function f(){clearTimeout(k)}function e(){f();b.unbind("vclick",g).unbind("vmouseup",f);a(document).unbind("vmousecancel",e)}function g(a){e();l==a.target&&i(c,"tap",a)}if(d.which&&d.which!==1)return!1;var l=d.target,
k;b.bind("vmouseup",f).bind("vclick",g);a(document).bind("vmousecancel",e);k=setTimeout(function(){i(c,"taphold",a.Event("taphold",{target:l}))},a.event.special.tap.tapholdThreshold)})}};a.event.special.swipe={scrollSupressionThreshold:10,durationThreshold:1E3,horizontalDistanceThreshold:30,verticalDistanceThreshold:75,setup:function(){var c=a(this);c.bind(n,function(b){function d(b){if(e){var c=b.originalEvent.touches?b.originalEvent.touches[0]:b;g={time:(new Date).getTime(),coords:[c.pageX,c.pageY]};
Math.abs(e.coords[0]-g.coords[0])>a.event.special.swipe.scrollSupressionThreshold&&b.preventDefault()}}var f=b.originalEvent.touches?b.originalEvent.touches[0]:b,e={time:(new Date).getTime(),coords:[f.pageX,f.pageY],origin:a(b.target)},g;c.bind(j,d).one(o,function(){c.unbind(j,d);e&&g&&g.time-e.time<a.event.special.swipe.durationThreshold&&Math.abs(e.coords[0]-g.coords[0])>a.event.special.swipe.horizontalDistanceThreshold&&Math.abs(e.coords[1]-g.coords[1])<a.event.special.swipe.verticalDistanceThreshold&&
e.origin.trigger("swipe").trigger(e.coords[0]>g.coords[0]?"swipeleft":"swiperight");e=g=m})})}};a.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe",swiperight:"swipe"},function(c,b){a.event.special[c]={setup:function(){a(this).bind(b,a.noop)}}})})(jQuery,this);
/*
 * Handlebars runtime v0.1.0beta6
 */
 var Handlebars={VERSION:"1.0.beta.6",helpers:{},partials:{},registerHelper:function(a,b,c){if(c)b.not=c;this.helpers[a]=b},registerPartial:function(a,b){this.partials[a]=b}};Handlebars.registerHelper("helperMissing",function(a){if(arguments.length!==2)throw Error("Could not find property '"+a+"'");});var toString=Object.prototype.toString,functionType="[object Function]";
Handlebars.registerHelper("blockHelperMissing",function(a,b){var c=b.inverse||function(){},d=b.fn,f="",e=toString.call(a);e===functionType&&(a=a.call(this));if(a===!0)return d(this);else if(a===!1||a==null)return c(this);else if(e==="[object Array]"){if(a.length>0){c=0;for(e=a.length;c<e;c++)f+=d(a[c])}else f=c(this);return f}else return d(a)});Handlebars.registerHelper("each",function(a,b){var c=b.fn,d=b.inverse,f="";if(a&&a.length>0)for(var d=0,e=a.length;d<e;d++)f+=c(a[d]);else f=d(this);return f});
Handlebars.registerHelper("if",function(a,b){toString.call(a)===functionType&&(a=a.call(this));return!a||Handlebars.Utils.isEmpty(a)?b.inverse(this):b.fn(this)});Handlebars.registerHelper("unless",function(a,b){var c=b.fn;b.fn=b.inverse;b.inverse=c;return Handlebars.helpers["if"].call(this,a,b)});Handlebars.registerHelper("with",function(a,b){return b.fn(a)});Handlebars.registerHelper("log",function(a){Handlebars.log(a)});
Handlebars.Exception=function(a){var b=Error.prototype.constructor.apply(this,arguments),c;for(c in b)b.hasOwnProperty(c)&&(this[c]=b[c]);this.message=b.message};Handlebars.Exception.prototype=Error();Handlebars.SafeString=function(a){this.string=a};Handlebars.SafeString.prototype.toString=function(){return this.string.toString()};
(function(){var a={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},b=/&(?!\w+;)|[<>"'`]/g,c=/[&<>"'`]/,d=function(b){return a[b]||"&amp;"};Handlebars.Utils={escapeExpression:function(a){if(a instanceof Handlebars.SafeString)return a.toString();else if(a==null||a===!1)return"";return!c.test(a)?a:a.replace(b,d)},isEmpty:function(a){return typeof a==="undefined"?!0:a===null?!0:a===!1?!0:Object.prototype.toString.call(a)==="[object Array]"&&a.length===0?!0:!1}}})();
Handlebars.VM={template:function(a){var b={escapeExpression:Handlebars.Utils.escapeExpression,invokePartial:Handlebars.VM.invokePartial,programs:[],program:function(a,b,f){var e=this.programs[a];return f?Handlebars.VM.program(b,f):(e||(e=this.programs[a]=Handlebars.VM.program(b)),e)},programWithDepth:Handlebars.VM.programWithDepth,noop:Handlebars.VM.noop};return function(c,d){d=d||{};return a.call(b,Handlebars,c,d.helpers,d.partials,d.data)}},programWithDepth:function(a,b,c){var d=Array.prototype.slice.call(arguments,
2);return function(c,e){e=e||{};return a.apply(this,[c,e.data||b].concat(d))}},program:function(a,b){return function(c,d){d=d||{};return a(c,d.data||b)}},noop:function(){return""},invokePartial:function(a,b,c,d,f,e){options={helpers:d,partials:f,data:e};if(a===void 0)throw new Handlebars.Exception("The partial "+b+" could not be found");else if(a instanceof Function)return a(c,options);else if(Handlebars.compile)return f[b]=Handlebars.compile(a),f[b](c,options);else throw new Handlebars.Exception("The partial "+
b+" could not be compiled when running in runtime-only mode");}};Handlebars.template=Handlebars.VM.template;
/*
 * JCD: jquery.transform2d.js needed to allow browser-agnostic css transforms.
 * JCD: Compressed using http://www.minifyjavascript.com/
 * jquery.transform2d.js
 */
 /*
 * transform: A jQuery cssHooks adding cross-browser 2d transform capabilities to $.fn.css() and $.fn.animate()
 *
 * limitations:
 * - requires jQuery 1.4.3+
 * - Should you use the *translate* property, then your elements need to be absolutely positionned in a relatively positionned wrapper **or it will fail in IE678**.
 * - transformOrigin is not accessible
 *
 * latest version and complete README available on Github:
 * https://github.com/louisremi/jquery.transform.js
 *
 * Copyright 2011 @louis_remi
 * Licensed under the MIT license.
 *
 * This saved you an hour of work?
 * Send me music http://www.amazon.co.uk/wishlist/HNTU0468LQON
 *
 */
(function($,window,document,Math,undefined){var div=document.createElement("div"),divStyle=div.style,suffix="Transform",testProperties=["O"+suffix,"ms"+suffix,"Webkit"+suffix,"Moz"+suffix],i=testProperties.length,supportProperty,supportMatrixFilter,supportFloat32Array="Float32Array"in window,propertyHook,propertyGet,rMatrix=/Matrix([^)]*)/,rAffine=/^\s*matrix\(\s*1\s*,\s*0\s*,\s*0\s*,\s*1\s*(?:,\s*0(?:px)?\s*){2}\)\s*$/,_transform="transform",_transformOrigin="transformOrigin",_translate="translate",_rotate="rotate",_scale="scale",_skew="skew",_matrix="matrix";while(i--){if(testProperties[i]in divStyle){$.support[_transform]=supportProperty=testProperties[i];$.support[_transformOrigin]=supportProperty+"Origin";continue}}if(!supportProperty){$.support.matrixFilter=supportMatrixFilter=divStyle.filter===""}$.cssNumber[_transform]=$.cssNumber[_transformOrigin]=true;if(supportProperty&&supportProperty!=_transform){$.cssProps[_transform]=supportProperty;$.cssProps[_transformOrigin]=supportProperty+"Origin";if(supportProperty=="Moz"+suffix){propertyHook={get:function(elem,computed){return(computed?$.css(elem,supportProperty).split("px").join(""):elem.style[supportProperty])},set:function(elem,value){elem.style[supportProperty]=/matrix\([^)p]*\)/.test(value)?value.replace(/matrix((?:[^,]*,){4})([^,]*),([^)]*)/,_matrix+"$1$2px,$3px"):value}}}else if(/^1\.[0-5](?:\.|$)/.test($.fn.jquery)){propertyHook={get:function(elem,computed){return(computed?$.css(elem,supportProperty.replace(/^ms/,"Ms")):elem.style[supportProperty])}}}}else if(supportMatrixFilter){propertyHook={get:function(elem,computed,asArray){var elemStyle=(computed&&elem.currentStyle?elem.currentStyle:elem.style),matrix,data;if(elemStyle&&rMatrix.test(elemStyle.filter)){matrix=RegExp.$1.split(",");matrix=[matrix[0].split("=")[1],matrix[2].split("=")[1],matrix[1].split("=")[1],matrix[3].split("=")[1]]}else{matrix=[1,0,0,1]}if(!$.cssHooks[_transformOrigin]){matrix[4]=elemStyle?parseInt(elemStyle.left,10)||0:0;matrix[5]=elemStyle?parseInt(elemStyle.top,10)||0:0}else{data=$._data(elem,"transformTranslate",undefined);matrix[4]=data?data[0]:0;matrix[5]=data?data[1]:0}return asArray?matrix:_matrix+"("+matrix+")"},set:function(elem,value,animate){var elemStyle=elem.style,currentStyle,Matrix,filter,centerOrigin;if(!animate){elemStyle.zoom=1}value=matrix(value);Matrix=["Matrix("+"M11="+value[0],"M12="+value[2],"M21="+value[1],"M22="+value[3],"SizingMethod='auto expand'"].join();filter=(currentStyle=elem.currentStyle)&&currentStyle.filter||elemStyle.filter||"";elemStyle.filter=rMatrix.test(filter)?filter.replace(rMatrix,Matrix):filter+" progid:DXImageTransform.Microsoft."+Matrix+")";if(!$.cssHooks[_transformOrigin]){if((centerOrigin=$.transform.centerOrigin)){elemStyle[centerOrigin=="margin"?"marginLeft":"left"]=-(elem.offsetWidth/2)+(elem.clientWidth/2)+"px";elemStyle[centerOrigin=="margin"?"marginTop":"top"]=-(elem.offsetHeight/2)+(elem.clientHeight/2)+"px"}elemStyle.left=value[4]+"px";elemStyle.top=value[5]+"px"}else{$.cssHooks[_transformOrigin].set(elem,value)}}}}if(propertyHook){$.cssHooks[_transform]=propertyHook}propertyGet=propertyHook&&propertyHook.get||$.css;$.fx.step.transform=function(fx){var elem=fx.elem,start=fx.start,end=fx.end,pos=fx.pos,transform="",precision=1E5,i,startVal,endVal,unit;if(!start||typeof start==="string"){if(!start){start=propertyGet(elem,supportProperty)}if(supportMatrixFilter){elem.style.zoom=1}end=end.split("+=").join(start);$.extend(fx,interpolationList(start,end));start=fx.start;end=fx.end}i=start.length;while(i--){startVal=start[i];endVal=end[i];unit=+false;switch(startVal[0]){case _translate:unit="px";case _scale:unit||(unit="");transform=startVal[0]+"("+Math.round((startVal[1][0]+(endVal[1][0]-startVal[1][0])*pos)*precision)/precision+unit+","+Math.round((startVal[1][1]+(endVal[1][1]-startVal[1][1])*pos)*precision)/precision+unit+")"+transform;break;case _skew+"X":case _skew+"Y":case _rotate:transform=startVal[0]+"("+Math.round((startVal[1]+(endVal[1]-startVal[1])*pos)*precision)/precision+"rad)"+transform;break}}fx.origin&&(transform=fx.origin+transform);propertyHook&&propertyHook.set?propertyHook.set(elem,transform,+true):elem.style[supportProperty]=transform};function matrix(transform){transform=transform.split(")");var trim=$.trim,i=-1,l=transform.length-1,split,prop,val,prev=supportFloat32Array?new Float32Array(6):[],curr=supportFloat32Array?new Float32Array(6):[],rslt=supportFloat32Array?new Float32Array(6):[1,0,0,1,0,0];prev[0]=prev[3]=rslt[0]=rslt[3]=1;prev[1]=prev[2]=prev[4]=prev[5]=0;while(++i<l){split=transform[i].split("(");prop=trim(split[0]);val=split[1];curr[0]=curr[3]=1;curr[1]=curr[2]=curr[4]=curr[5]=0;switch(prop){case _translate+"X":curr[4]=parseInt(val,10);break;case _translate+"Y":curr[5]=parseInt(val,10);break;case _translate:val=val.split(",");curr[4]=parseInt(val[0],10);curr[5]=parseInt(val[1]||0,10);break;case _rotate:val=toRadian(val);curr[0]=Math.cos(val);curr[1]=Math.sin(val);curr[2]=-Math.sin(val);curr[3]=Math.cos(val);break;case _scale+"X":curr[0]=+val;break;case _scale+"Y":curr[3]=val;break;case _scale:val=val.split(",");curr[0]=val[0];curr[3]=val.length>1?val[1]:val[0];break;case _skew+"X":curr[2]=Math.tan(toRadian(val));break;case _skew+"Y":curr[1]=Math.tan(toRadian(val));break;case _matrix:val=val.split(",");curr[0]=val[0];curr[1]=val[1];curr[2]=val[2];curr[3]=val[3];curr[4]=parseInt(val[4],10);curr[5]=parseInt(val[5],10);break}rslt[0]=prev[0]*curr[0]+prev[2]*curr[1];rslt[1]=prev[1]*curr[0]+prev[3]*curr[1];rslt[2]=prev[0]*curr[2]+prev[2]*curr[3];rslt[3]=prev[1]*curr[2]+prev[3]*curr[3];rslt[4]=prev[0]*curr[4]+prev[2]*curr[5]+prev[4];rslt[5]=prev[1]*curr[4]+prev[3]*curr[5]+prev[5];prev=[rslt[0],rslt[1],rslt[2],rslt[3],rslt[4],rslt[5]]}return rslt}function unmatrix(matrix){var scaleX,scaleY,skew,A=matrix[0],B=matrix[1],C=matrix[2],D=matrix[3];if(A*D-B*C){scaleX=Math.sqrt(A*A+B*B);A/=scaleX;B/=scaleX;skew=A*C+B*D;C-=A*skew;D-=B*skew;scaleY=Math.sqrt(C*C+D*D);C/=scaleY;D/=scaleY;skew/=scaleY;if(A*D<B*C){A=-A;B=-B;skew=-skew;scaleX=-scaleX}}else{scaleX=scaleY=skew=0}return[[_translate,[+matrix[4],+matrix[5]]],[_rotate,Math.atan2(B,A)],[_skew+"X",Math.atan(skew)],[_scale,[scaleX,scaleY]]]}function interpolationList(start,end){var list={start:[],end:[]},i=-1,l,currStart,currEnd,currType;(start=="none"||isAffine(start))&&(start="");(end=="none"||isAffine(end))&&(end="");if(start&&end&&!end.indexOf("matrix")&&toArray(start).join()==toArray(end.split(")")[0]).join()){list.origin=start;start="";end=end.slice(end.indexOf(")")+1)}if(!start&&!end){return}if(!start||!end||functionList(start)==functionList(end)){start&&(start=start.split(")"))&&(l=start.length);end&&(end=end.split(")"))&&(l=end.length);while(++i<l-1){start[i]&&(currStart=start[i].split("("));end[i]&&(currEnd=end[i].split("("));currType=$.trim((currStart||currEnd)[0]);append(list.start,parseFunction(currType,currStart?currStart[1]:0));append(list.end,parseFunction(currType,currEnd?currEnd[1]:0))}}else{list.start=unmatrix(matrix(start));list.end=unmatrix(matrix(end))}return list}function parseFunction(type,value){var defaultValue=+(!type.indexOf(_scale)),scaleX,cat=type.replace(/e[XY]/,"e");switch(type){case _translate+"Y":case _scale+"Y":value=[defaultValue,value?parseFloat(value):defaultValue];break;case _translate+"X":case _translate:case _scale+"X":scaleX=1;case _scale:value=value?(value=value.split(","))&&[parseFloat(value[0]),parseFloat(value.length>1?value[1]:type==_scale?scaleX||value[0]:defaultValue+"")]:[defaultValue,defaultValue];break;case _skew+"X":case _skew+"Y":case _rotate:value=value?toRadian(value):0;break;case _matrix:return unmatrix(value?toArray(value):[1,0,0,1,0,0]);break}return[[cat,value]]}function isAffine(matrix){return rAffine.test(matrix)}function functionList(transform){return transform.replace(/(?:\([^)]*\))|\s/g,"")}function append(arr1,arr2,value){while(value=arr2.shift()){arr1.push(value)}}function toRadian(value){return~value.indexOf("deg")?parseInt(value,10)*(Math.PI*2/360):~value.indexOf("grad")?parseInt(value,10)*(Math.PI/200):parseFloat(value)}function toArray(matrix){matrix=/([^,]*),([^,]*),([^,]*),([^,]*),([^,p]*)(?:px)?,([^)p]*)(?:px)?/.exec(matrix);return[matrix[1],matrix[2],matrix[3],matrix[4],matrix[5],matrix[6]]}$.transform={centerOrigin:"margin"}})(jQuery,window,document,Math);