(self.webpackChunkangular_workspace=self.webpackChunkangular_workspace||[]).push([[179],{357:Zs=>{function eo(Ys){return Promise.resolve().then(()=>{var to=new Error("Cannot find module '"+Ys+"'");throw to.code="MODULE_NOT_FOUND",to})}eo.keys=()=>[],eo.resolve=eo,eo.id=357,Zs.exports=eo},938:(Zs,eo,Ys)=>{"use strict";var to=function(t,n){return(to=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,i){e.__proto__=i}||function(e,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])})(t,n)};function To(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function e(){this.constructor=t}to(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}function Tb(t,n){var i,o,r,s,e={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return s={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function l(c){return function(u){return function(c){if(i)throw new TypeError("Generator is already executing.");for(;e;)try{if(i=1,o&&(r=2&c[0]?o.return:c[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,c[1])).done)return r;switch(o=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return e.label++,{value:c[1],done:!1};case 5:e.label++,o=c[1],c=[0];continue;case 7:c=e.ops.pop(),e.trys.pop();continue;default:if(!(r=(r=e.trys).length>0&&r[r.length-1])&&(6===c[0]||2===c[0])){e=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){e.label=c[1];break}if(6===c[0]&&e.label<r[1]){e.label=r[1],r=c;break}if(r&&e.label<r[2]){e.label=r[2],e.ops.push(c);break}r[2]&&e.ops.pop(),e.trys.pop();continue}c=n.call(t,e)}catch(u){c=[6,u],o=0}finally{i=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}}function Ao(t){var n="function"==typeof Symbol&&Symbol.iterator,e=n&&t[n],i=0;if(e)return e.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function Ro(t,n){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var o,s,i=e.call(t),r=[];try{for(;(void 0===n||n-- >0)&&!(o=i.next()).done;)r.push(o.value)}catch(l){s={error:l}}finally{try{o&&!o.done&&(e=i.return)&&e.call(i)}finally{if(s)throw s.error}}return r}function vr(t,n){for(var e=0,i=n.length,o=t.length;e<i;e++,o++)t[o]=n[e];return t}function Po(t){return this instanceof Po?(this.v=t,this):new Po(t)}function k2(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o,i=e.apply(t,n||[]),r=[];return o={},s("next"),s("throw"),s("return"),o[Symbol.asyncIterator]=function(){return this},o;function s(h){i[h]&&(o[h]=function(f){return new Promise(function(p,m){r.push([h,f,p,m])>1||l(h,f)})})}function l(h,f){try{!function(h){h.value instanceof Po?Promise.resolve(h.value.v).then(c,u):d(r[0][2],h)}(i[h](f))}catch(p){d(r[0][3],p)}}function c(h){l("next",h)}function u(h){l("throw",h)}function d(h,f){h(f),r.shift(),r.length&&l(r[0][0],r[0][1])}}function nt(t){return"function"==typeof t}function eh(t){var e=t(function(i){Error.call(i),i.stack=(new Error).stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var th=eh(function(t){return function(e){t(this),this.message=e?e.length+" errors occurred during unsubscription:\n"+e.map(function(i,o){return o+1+") "+i.toString()}).join("\n  "):"",this.name="UnsubscriptionError",this.errors=e}});function nh(t,n){if(t){var e=t.indexOf(n);0<=e&&t.splice(e,1)}}var Ei=function(){function t(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._teardowns=null}return t.prototype.unsubscribe=function(){var n,e,i,o,r;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var l=Ao(s),a=l.next();!a.done;a=l.next())a.value.remove(this)}catch(m){n={error:m}}finally{try{a&&!a.done&&(e=l.return)&&e.call(l)}finally{if(n)throw n.error}}else s.remove(this);var u=this.initialTeardown;if(nt(u))try{u()}catch(m){r=m instanceof th?m.errors:[m]}var d=this._teardowns;if(d){this._teardowns=null;try{for(var h=Ao(d),f=h.next();!f.done;f=h.next()){var p=f.value;try{Bb(p)}catch(m){r=null!=r?r:[],m instanceof th?r=vr(vr([],Ro(r)),Ro(m.errors)):r.push(m)}}}catch(m){i={error:m}}finally{try{f&&!f.done&&(o=h.return)&&o.call(h)}finally{if(i)throw i.error}}}if(r)throw new th(r)}},t.prototype.add=function(n){var e;if(n&&n!==this)if(this.closed)Bb(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._teardowns=null!==(e=this._teardowns)&&void 0!==e?e:[]).push(n)}},t.prototype._hasParent=function(n){var e=this._parentage;return e===n||Array.isArray(e)&&e.includes(n)},t.prototype._addParent=function(n){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n},t.prototype._removeParent=function(n){var e=this._parentage;e===n?this._parentage=null:Array.isArray(e)&&nh(e,n)},t.prototype.remove=function(n){var e=this._teardowns;e&&nh(e,n),n instanceof t&&n._removeParent(this)},t.EMPTY=((n=new t).closed=!0,n),t;var n}(),Rb=Ei.EMPTY;function Pb(t){return t instanceof Ei||t&&"closed"in t&&nt(t.remove)&&nt(t.add)&&nt(t.unsubscribe)}function Bb(t){nt(t)?t():t.unsubscribe()}var nc={setTimeout:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=nc.delegate;return((null==e?void 0:e.setTimeout)||setTimeout).apply(void 0,vr([],Ro(t)))},clearTimeout:function(t){var n=nc.delegate;return((null==n?void 0:n.clearTimeout)||clearTimeout)(t)},delegate:void 0};function Ob(t){nc.setTimeout(function(){throw t})}function ic(){}var A2=ih("C",void 0,void 0);function ih(t,n,e){return{kind:t,value:n,error:e}}function oc(t){t()}var oh=function(t){function n(e){var i=t.call(this)||this;return i.isStopped=!1,e?(i.destination=e,Pb(e)&&e.add(i)):i.destination=O2,i}return To(n,t),n.create=function(e,i,o){return new rh(e,i,o)},n.prototype.next=function(e){this.isStopped?lh(function(t){return ih("N",t,void 0)}(e),this):this._next(e)},n.prototype.error=function(e){this.isStopped?lh(function(t){return ih("E",void 0,t)}(e),this):(this.isStopped=!0,this._error(e))},n.prototype.complete=function(){this.isStopped?lh(A2,this):(this.isStopped=!0,this._complete())},n.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},n.prototype._next=function(e){this.destination.next(e)},n.prototype._error=function(e){try{this.destination.error(e)}finally{this.unsubscribe()}},n.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},n}(Ei),rh=function(t){function n(e,i,o){var s,r=t.call(this)||this;if(nt(e))s=e;else if(e){var l;i=e.error,o=e.complete,l=e,s=null==(s=e.next)?void 0:s.bind(l),i=null==i?void 0:i.bind(l),o=null==o?void 0:o.bind(l)}return r.destination={next:s?sh(s):ic,error:sh(null!=i?i:Lb),complete:o?sh(o):ic},r}return To(n,t),n}(oh);function sh(t,n){return function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];try{t.apply(void 0,vr([],Ro(e)))}catch(o){Ob(o)}}}function Lb(t){throw t}function lh(t,n){var e=null;e&&nc.setTimeout(function(){return e(t,n)})}var O2={closed:!0,next:ic,error:Lb,complete:ic},rc="function"==typeof Symbol&&Symbol.observable||"@@observable";function Lo(t){return t}function Vb(t){return 0===t.length?Lo:1===t.length?t[0]:function(e){return t.reduce(function(i,o){return o(i)},e)}}var qe=function(){function t(n){n&&(this._subscribe=n)}return t.prototype.lift=function(n){var e=new t;return e.source=this,e.operator=n,e},t.prototype.subscribe=function(n,e,i){var o=this,r=function(t){return t&&t instanceof oh||function(t){return t&&nt(t.next)&&nt(t.error)&&nt(t.complete)}(t)&&Pb(t)}(n)?n:new rh(n,e,i);return oc(function(){var l=o.operator,a=o.source;r.add(l?l.call(r,a):a?o._subscribe(r):o._trySubscribe(r))}),r},t.prototype._trySubscribe=function(n){try{return this._subscribe(n)}catch(e){n.error(e)}},t.prototype.forEach=function(n,e){var i=this;return new(e=$b(e))(function(o,r){var s;s=i.subscribe(function(l){try{n(l)}catch(a){r(a),null==s||s.unsubscribe()}},r,o)})},t.prototype._subscribe=function(n){var e;return null===(e=this.source)||void 0===e?void 0:e.subscribe(n)},t.prototype[rc]=function(){return this},t.prototype.pipe=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return Vb(n)(this)},t.prototype.toPromise=function(n){var e=this;return new(n=$b(n))(function(i,o){var r;e.subscribe(function(s){return r=s},function(s){return o(s)},function(){return i(r)})})},t.create=function(n){return new t(n)},t}();function $b(t){var n;return null!==(n=null!=t?t:undefined)&&void 0!==n?n:Promise}var $2=eh(function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),ki=function(t){function n(){var e=t.call(this)||this;return e.closed=!1,e.observers=[],e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return To(n,t),n.prototype.lift=function(e){var i=new Hb(this,this);return i.operator=e,i},n.prototype._throwIfClosed=function(){if(this.closed)throw new $2},n.prototype.next=function(e){var i=this;oc(function(){var o,r;if(i._throwIfClosed(),!i.isStopped){var s=i.observers.slice();try{for(var l=Ao(s),a=l.next();!a.done;a=l.next())a.value.next(e)}catch(u){o={error:u}}finally{try{a&&!a.done&&(r=l.return)&&r.call(l)}finally{if(o)throw o.error}}}})},n.prototype.error=function(e){var i=this;oc(function(){if(i._throwIfClosed(),!i.isStopped){i.hasError=i.isStopped=!0,i.thrownError=e;for(var o=i.observers;o.length;)o.shift().error(e)}})},n.prototype.complete=function(){var e=this;oc(function(){if(e._throwIfClosed(),!e.isStopped){e.isStopped=!0;for(var i=e.observers;i.length;)i.shift().complete()}})},n.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=null},Object.defineProperty(n.prototype,"observed",{get:function(){var e;return(null===(e=this.observers)||void 0===e?void 0:e.length)>0},enumerable:!1,configurable:!0}),n.prototype._trySubscribe=function(e){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,e)},n.prototype._subscribe=function(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)},n.prototype._innerSubscribe=function(e){var i=this,s=i.observers;return i.hasError||i.isStopped?Rb:(s.push(e),new Ei(function(){return nh(s,e)}))},n.prototype._checkFinalizedStatuses=function(e){var i=this,s=i.isStopped;i.hasError?e.error(i.thrownError):s&&e.complete()},n.prototype.asObservable=function(){var e=new qe;return e.source=this,e},n.create=function(e,i){return new Hb(e,i)},n}(qe),Hb=function(t){function n(e,i){var o=t.call(this)||this;return o.destination=e,o.source=i,o}return To(n,t),n.prototype.next=function(e){var i,o;null===(o=null===(i=this.destination)||void 0===i?void 0:i.next)||void 0===o||o.call(i,e)},n.prototype.error=function(e){var i,o;null===(o=null===(i=this.destination)||void 0===i?void 0:i.error)||void 0===o||o.call(i,e)},n.prototype.complete=function(){var e,i;null===(i=null===(e=this.destination)||void 0===e?void 0:e.complete)||void 0===i||i.call(e)},n.prototype._subscribe=function(e){var i,o;return null!==(o=null===(i=this.source)||void 0===i?void 0:i.subscribe(e))&&void 0!==o?o:Rb},n}(ki);function jb(t){return nt(null==t?void 0:t.lift)}function Ut(t){return function(n){if(jb(n))return n.lift(function(e){try{return t(e,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}var Et=function(t){function n(e,i,o,r,s){var l=t.call(this,e)||this;return l.onFinalize=s,l._next=i?function(a){try{i(a)}catch(c){e.error(c)}}:t.prototype._next,l._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:t.prototype._error,l._complete=o?function(){try{o()}catch(a){e.error(a)}finally{this.unsubscribe()}}:t.prototype._complete,l}return To(n,t),n.prototype.unsubscribe=function(){var e,i=this.closed;t.prototype.unsubscribe.call(this),!i&&(null===(e=this.onFinalize)||void 0===e||e.call(this))},n}(oh);function je(t,n){return Ut(function(e,i){var o=0;e.subscribe(new Et(i,function(r){i.next(t.call(n,r,o++))}))})}var zb=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t};function Ub(t){return nt(null==t?void 0:t.then)}function ah(t,n){return new qe(function(e){var i=0;return n.schedule(function(){i===t.length?e.complete():(e.next(t[i++]),e.closed||this.schedule())})})}var Wb="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator";function Gb(t,n){if(!t)throw new Error("Iterable cannot be null");return new qe(function(e){var i=new Ei;return i.add(n.schedule(function(){var o=t[Symbol.asyncIterator]();i.add(n.schedule(function(){var r=this;o.next().then(function(s){s.done?e.complete():(e.next(s.value),r.schedule())})}))})),i})}function qb(t){return nt(t[rc])}function Kb(t){return nt(null==t?void 0:t[Wb])}function Xb(t){return Symbol.asyncIterator&&nt(null==t?void 0:t[Symbol.asyncIterator])}function Qb(t){return new TypeError("You provided "+(null!==t&&"object"==typeof t?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function Zb(t){return k2(this,arguments,function(){var e,i,o;return Tb(this,function(s){switch(s.label){case 0:e=t.getReader(),s.label=1;case 1:s.trys.push([1,,9,10]),s.label=2;case 2:return[4,Po(e.read())];case 3:return i=s.sent(),o=i.value,i.done?[4,Po(void 0)]:[3,5];case 4:return[2,s.sent()];case 5:return[4,Po(o)];case 6:return[4,s.sent()];case 7:return s.sent(),[3,2];case 8:return[3,10];case 9:return e.releaseLock(),[7];case 10:return[2]}})})}function Yb(t){return nt(null==t?void 0:t.getReader)}function Pt(t,n){return n?function(t,n){if(null!=t){if(qb(t))return function(t,n){return new qe(function(e){var i=new Ei;return i.add(n.schedule(function(){var o=t[rc]();i.add(o.subscribe({next:function(r){i.add(n.schedule(function(){return e.next(r)}))},error:function(r){i.add(n.schedule(function(){return e.error(r)}))},complete:function(){i.add(n.schedule(function(){return e.complete()}))}}))})),i})}(t,n);if(zb(t))return ah(t,n);if(Ub(t))return function(t,n){return new qe(function(e){return n.schedule(function(){return t.then(function(i){e.add(n.schedule(function(){e.next(i),e.add(n.schedule(function(){return e.complete()}))}))},function(i){e.add(n.schedule(function(){return e.error(i)}))})})})}(t,n);if(Xb(t))return Gb(t,n);if(Kb(t))return function(t,n){return new qe(function(e){var i;return e.add(n.schedule(function(){i=t[Wb](),function(t,n,e,i){void 0===i&&(i=0);var o=n.schedule(function(){try{e.call(this)}catch(r){t.error(r)}},i);t.add(o)}(e,n,function(){var o=i.next(),r=o.value;o.done?e.complete():(e.next(r),this.schedule())})})),function(){return nt(null==i?void 0:i.return)&&i.return()}})}(t,n);if(Yb(t))return function(t,n){return Gb(Zb(t),n)}(t,n)}throw Qb(t)}(t,n):no(t)}function no(t){if(t instanceof qe)return t;if(null!=t){if(qb(t))return function(t){return new qe(function(n){var e=t[rc]();if(nt(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}(t);if(zb(t))return Jb(t);if(Ub(t))return function(t){return new qe(function(n){t.then(function(e){n.closed||(n.next(e),n.complete())},function(e){return n.error(e)}).then(null,Ob)})}(t);if(Xb(t))return ev(t);if(Kb(t))return function(t){return new qe(function(n){var e,i;try{for(var o=Ao(t),r=o.next();!r.done;r=o.next())if(n.next(r.value),n.closed)return}catch(l){e={error:l}}finally{try{r&&!r.done&&(i=o.return)&&i.call(o)}finally{if(e)throw e.error}}n.complete()})}(t);if(Yb(t))return function(t){return ev(Zb(t))}(t)}throw Qb(t)}function Jb(t){return new qe(function(n){for(var e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function ev(t){return new qe(function(n){(function(t,n){var e,i,o,r;return function(t,n,e,i){return new(e||(e=Promise))(function(r,s){function l(u){try{c(i.next(u))}catch(d){s(d)}}function a(u){try{c(i.throw(u))}catch(d){s(d)}}function c(u){u.done?r(u.value):function(r){return r instanceof e?r:new e(function(s){s(r)})}(u.value).then(l,a)}c((i=i.apply(t,n||[])).next())})}(this,void 0,void 0,function(){var l;return Tb(this,function(a){switch(a.label){case 0:a.trys.push([0,5,6,11]),e=function(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,n=t[Symbol.asyncIterator];return n?n.call(t):(t=Ao(t),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(r){e[r]=t[r]&&function(s){return new Promise(function(l,a){!function(r,s,l,a){Promise.resolve(a).then(function(c){r({value:c,done:l})},s)}(l,a,(s=t[r](s)).done,s.value)})}}}(t),a.label=1;case 1:return[4,e.next()];case 2:if((i=a.sent()).done)return[3,4];if(n.next(i.value),n.closed)return[2];a.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return l=a.sent(),o={error:l},[3,11];case 6:return a.trys.push([6,,9,10]),i&&!i.done&&(r=e.return)?[4,r.call(e)]:[3,8];case 7:a.sent(),a.label=8;case 8:return[3,10];case 9:if(o)throw o.error;return[7];case 10:return[7];case 11:return n.complete(),[2]}})})})(t,n).catch(function(e){return n.error(e)})})}function wt(t,n,e){return void 0===e&&(e=1/0),nt(n)?wt(function(i,o){return je(function(r,s){return n(i,r,o,s)})(no(t(i,o)))},e):("number"==typeof n&&(e=n),Ut(function(i,o){return function(t,n,e,i,o,r,s,l){var a=[],c=0,u=0,d=!1,h=function(){d&&!a.length&&!c&&n.complete()},f=function(m){return c<i?p(m):a.push(m)},p=function(m){c++;var g=!1;no(e(m,u++)).subscribe(new Et(n,function(M){n.next(M)},function(){g=!0},void 0,function(){if(g)try{c--;for(;a.length&&c<i;)C=void 0,C=a.shift(),p(C);h()}catch(C){n.error(C)}var C}))};return t.subscribe(new Et(n,f,function(){d=!0,h()})),function(){}}(i,o,t,e)}))}function Js(t){return void 0===t&&(t=1/0),wt(Lo,t)}function ch(t,n){return n?ah(t,n):Jb(t)}var Si=new qe(function(t){return t.complete()});function uh(t){return t[t.length-1]}function tv(t){return nt(uh(t))?t.pop():void 0}function el(t){return function(t){return t&&nt(t.schedule)}(uh(t))?t.pop():void 0}function nx(t,n){return"number"==typeof uh(t)?t.pop():n}function sc(t){return t<=0?function(){return Si}:Ut(function(n,e){var i=0;n.subscribe(new Et(e,function(o){++i<=t&&(e.next(o),t<=i&&e.complete())}))})}function dh(t,n){for(var e=[],i=2;i<arguments.length;i++)e[i-2]=arguments[i];return!0===n?(t(),null):!1===n?null:n.apply(void 0,vr([],Ro(e))).pipe(sc(1)).subscribe(function(){return t()})}function Ne(t){for(let n in t)if(t[n]===Ne)return n;throw Error("Could not find renamed property on target object.")}function hh(t,n){for(const e in n)n.hasOwnProperty(e)&&!t.hasOwnProperty(e)&&(t[e]=n[e])}function ue(t){if("string"==typeof t)return t;if(Array.isArray(t))return"["+t.map(ue).join(", ")+"]";if(null==t)return""+t;if(t.overriddenName)return`${t.overriddenName}`;if(t.name)return`${t.name}`;const n=t.toString();if(null==n)return""+n;const e=n.indexOf("\n");return-1===e?n:n.substring(0,e)}function fh(t,n){return null==t||""===t?null===n?"":n:null==n||""===n?t:t+" "+n}const rx=Ne({__forward_ref__:Ne});function Me(t){return t.__forward_ref__=Me,t.toString=function(){return ue(this())},t}function V(t){return nv(t)?t():t}function nv(t){return"function"==typeof t&&t.hasOwnProperty(rx)&&t.__forward_ref__===Me}class Vo extends Error{constructor(n,e){super(function(t,n){return`${t?`NG0${t}: `:""}${n}`}(n,e)),this.code=n}}function J(t){return"string"==typeof t?t:null==t?"":String(t)}function Wt(t){return"function"==typeof t?t.name||t.toString():"object"==typeof t&&null!=t&&"function"==typeof t.type?t.type.name||t.type.toString():J(t)}function lc(t,n){const e=n?` in ${n}`:"";throw new Vo("201",`No provider for ${Wt(t)} found${e}`)}function bn(t,n){null==t&&function(t,n,e,i){throw new Error(`ASSERTION ERROR: ${t}`+(null==i?"":` [Expected=> ${e} ${i} ${n} <=Actual]`))}(n,t,null,"!=")}function ie(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function te(t){return{providers:t.providers||[],imports:t.imports||[]}}function Ai(t){return iv(t,ac)||iv(t,rv)}function iv(t,n){return t.hasOwnProperty(n)?t[n]:null}function ov(t){return t&&(t.hasOwnProperty(mh)||t.hasOwnProperty(hx))?t[mh]:null}const ac=Ne({\u0275prov:Ne}),mh=Ne({\u0275inj:Ne}),rv=Ne({ngInjectableDef:Ne}),hx=Ne({ngInjectorDef:Ne});var H=(()=>((H=H||{})[H.Default=0]="Default",H[H.Host=1]="Host",H[H.Self=2]="Self",H[H.SkipSelf=4]="SkipSelf",H[H.Optional=8]="Optional",H))();let gh;function io(t){const n=gh;return gh=t,n}function sv(t,n,e){const i=Ai(t);return i&&"root"==i.providedIn?void 0===i.value?i.value=i.factory():i.value:e&H.Optional?null:void 0!==n?n:void lc(ue(t),"Injector")}function oo(t){return{toString:t}.toString()}var Tn=(()=>((Tn=Tn||{})[Tn.OnPush=0]="OnPush",Tn[Tn.Default=1]="Default",Tn))(),mt=(()=>((mt=mt||{})[mt.Emulated=0]="Emulated",mt[mt.None=2]="None",mt[mt.ShadowDom=3]="ShadowDom",mt))();const px="undefined"!=typeof globalThis&&globalThis,mx="undefined"!=typeof window&&window,gx="undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,bx="undefined"!=typeof global&&global,ke=px||bx||mx||gx,yr={},Oe=[],cc=Ne({\u0275cmp:Ne}),bh=Ne({\u0275dir:Ne}),vh=Ne({\u0275pipe:Ne}),lv=Ne({\u0275mod:Ne}),vx=Ne({\u0275loc:Ne}),Ri=Ne({\u0275fac:Ne}),tl=Ne({__NG_ELEMENT_ID__:Ne});let yx=0;function Dr(t){return oo(()=>{const e={},i={type:t.type,providersResolver:null,decls:t.decls,vars:t.vars,factory:null,template:t.template||null,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:e,inputs:null,outputs:null,exportAs:t.exportAs||null,onPush:t.changeDetection===Tn.OnPush,directiveDefs:null,pipeDefs:null,selectors:t.selectors||Oe,viewQuery:t.viewQuery||null,features:t.features||null,data:t.data||{},encapsulation:t.encapsulation||mt.Emulated,id:"c",styles:t.styles||Oe,_:null,setInput:null,schemas:t.schemas||null,tView:null},o=t.directives,r=t.features,s=t.pipes;return i.id+=yx++,i.inputs=dv(t.inputs,e),i.outputs=dv(t.outputs),r&&r.forEach(l=>l(i)),i.directiveDefs=o?()=>("function"==typeof o?o():o).map(av):null,i.pipeDefs=s?()=>("function"==typeof s?s():s).map(cv):null,i})}function av(t){return Gt(t)||function(t){return t[bh]||null}(t)}function cv(t){return function(t){return t[vh]||null}(t)}const uv={};function oe(t){return oo(()=>{const n={type:t.type,bootstrap:t.bootstrap||Oe,declarations:t.declarations||Oe,imports:t.imports||Oe,exports:t.exports||Oe,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null};return null!=t.id&&(uv[t.id]=t.type),n})}function dv(t,n){if(null==t)return yr;const e={};for(const i in t)if(t.hasOwnProperty(i)){let o=t[i],r=o;Array.isArray(o)&&(r=o[1],o=o[0]),e[o]=i,n&&(n[o]=r)}return e}const F=Dr;function Gt(t){return t[cc]||null}function An(t,n){const e=t[lv]||null;if(!e&&!0===n)throw new Error(`Type ${ue(t)} does not have '\u0275mod' property.`);return e}function fi(t){return Array.isArray(t)&&"object"==typeof t[1]}function Xn(t){return Array.isArray(t)&&!0===t[1]}function Ih(t){return 0!=(8&t.flags)}function fc(t){return 2==(2&t.flags)}function pc(t){return 1==(1&t.flags)}function Qn(t){return null!==t.template}function Mx(t){return 0!=(512&t[2])}function Uo(t,n){return t.hasOwnProperty(Ri)?t[Ri]:null}class fv{constructor(n,e,i){this.previousValue=n,this.currentValue=e,this.firstChange=i}isFirstChange(){return this.firstChange}}function Ot(){return pv}function pv(t){return t.type.prototype.ngOnChanges&&(t.setInput=kx),Ex}function Ex(){const t=gv(this),n=null==t?void 0:t.current;if(n){const e=t.previous;if(e===yr)t.previous=n;else for(let i in n)e[i]=n[i];t.current=null,this.ngOnChanges(n)}}function kx(t,n,e,i){const o=gv(t)||function(t,n){return t[mv]=n}(t,{previous:yr,current:null}),r=o.current||(o.current={}),s=o.previous,l=this.declaredInputs[e],a=s[l];r[l]=new fv(a&&a.currentValue,n,s===yr),t[i]=n}Ot.ngInherit=!0;const mv="__ngSimpleChanges__";function gv(t){return t[mv]||null}let _h;function it(t){return!!t.listen}const yv={createRenderer:(t,n)=>void 0!==_h?_h:"undefined"!=typeof document?document:void 0};function ut(t){for(;Array.isArray(t);)t=t[0];return t}function mc(t,n){return ut(n[t])}function Bn(t,n){return ut(n[t.index])}function Mh(t,n){return t.data[n]}function yn(t,n){const e=n[t];return fi(e)?e:e[0]}function Dv(t){return 4==(4&t[2])}function xh(t){return 128==(128&t[2])}function so(t,n){return null==n?null:t[n]}function Iv(t){t[18]=0}function Fh(t,n){t[5]+=n;let e=t,i=t[3];for(;null!==i&&(1===n&&1===e[5]||-1===n&&0===e[5]);)i[5]+=n,e=i,i=i[3]}const K={lFrame:Ev(null),bindingsEnabled:!0,isInCheckNoChangesMode:!1};function Cv(){return K.bindingsEnabled}function x(){return K.lFrame.lView}function Ie(){return K.lFrame.tView}function gt(){let t=wv();for(;null!==t&&64===t.type;)t=t.parent;return t}function wv(){return K.lFrame.currentTNode}function pi(t,n){const e=K.lFrame;e.currentTNode=t,e.isParent=n}function Eh(){return K.lFrame.isParent}function gc(){return K.isInCheckNoChangesMode}function bc(t){K.isInCheckNoChangesMode=t}function Mr(){return K.lFrame.bindingIndex++}function Gx(t,n){const e=K.lFrame;e.bindingIndex=e.bindingRootIndex=t,Sh(n)}function Sh(t){K.lFrame.currentDirectiveIndex=t}function Mv(){return K.lFrame.currentQueryIndex}function Ah(t){K.lFrame.currentQueryIndex=t}function Kx(t){const n=t[1];return 2===n.type?n.declTNode:1===n.type?t[6]:null}function xv(t,n,e){if(e&H.SkipSelf){let o=n,r=t;for(;!(o=o.parent,null!==o||e&H.Host||(o=Kx(r),null===o||(r=r[15],10&o.type))););if(null===o)return!1;n=o,t=r}const i=K.lFrame=Fv();return i.currentTNode=n,i.lView=t,!0}function vc(t){const n=Fv(),e=t[1];K.lFrame=n,n.currentTNode=e.firstChild,n.lView=t,n.tView=e,n.contextLView=t,n.bindingIndex=e.bindingStartIndex,n.inI18n=!1}function Fv(){const t=K.lFrame,n=null===t?null:t.child;return null===n?Ev(t):n}function Ev(t){const n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return null!==t&&(t.child=n),n}function kv(){const t=K.lFrame;return K.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}const Sv=kv;function yc(){const t=kv();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function Kt(){return K.lFrame.selectedIndex}function lo(t){K.lFrame.selectedIndex=t}function ot(){const t=K.lFrame;return Mh(t.tView,t.selectedIndex)}function Dc(t,n){for(let e=n.directiveStart,i=n.directiveEnd;e<i;e++){const r=t.data[e].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:l,ngAfterViewInit:a,ngAfterViewChecked:c,ngOnDestroy:u}=r;s&&(t.contentHooks||(t.contentHooks=[])).push(-e,s),l&&((t.contentHooks||(t.contentHooks=[])).push(e,l),(t.contentCheckHooks||(t.contentCheckHooks=[])).push(e,l)),a&&(t.viewHooks||(t.viewHooks=[])).push(-e,a),c&&((t.viewHooks||(t.viewHooks=[])).push(e,c),(t.viewCheckHooks||(t.viewCheckHooks=[])).push(e,c)),null!=u&&(t.destroyHooks||(t.destroyHooks=[])).push(e,u)}}function Ic(t,n,e){Tv(t,n,3,e)}function Cc(t,n,e,i){(3&t[2])===e&&Tv(t,n,e,i)}function Rh(t,n){let e=t[2];(3&e)===n&&(e&=2047,e+=1,t[2]=e)}function Tv(t,n,e,i){const r=null!=i?i:-1,s=n.length-1;let l=0;for(let a=void 0!==i?65535&t[18]:0;a<s;a++)if("number"==typeof n[a+1]){if(l=n[a],null!=i&&l>=i)break}else n[a]<0&&(t[18]+=65536),(l<r||-1==r)&&(iF(t,e,n,a),t[18]=(4294901760&t[18])+a+2),a++}function iF(t,n,e,i){const o=e[i]<0,r=e[i+1],l=t[o?-e[i]:e[i]];if(o){if(t[2]>>11<t[18]>>16&&(3&t[2])===n){t[2]+=2048;try{r.call(l)}finally{}}}else try{r.call(l)}finally{}}class sl{constructor(n,e,i){this.factory=n,this.resolving=!1,this.canSeeViewProviders=e,this.injectImpl=i}}function wc(t,n,e){const i=it(t);let o=0;for(;o<e.length;){const r=e[o];if("number"==typeof r){if(0!==r)break;o++;const s=e[o++],l=e[o++],a=e[o++];i?t.setAttribute(n,l,a,s):n.setAttributeNS(s,l,a)}else{const s=r,l=e[++o];Bh(s)?i&&t.setProperty(n,s,l):i?t.setAttribute(n,s,l):n.setAttribute(s,l),o++}}return o}function Av(t){return 3===t||4===t||6===t}function Bh(t){return 64===t.charCodeAt(0)}function _c(t,n){if(null!==n&&0!==n.length)if(null===t||0===t.length)t=n.slice();else{let e=-1;for(let i=0;i<n.length;i++){const o=n[i];"number"==typeof o?e=o:0===e||Rv(t,e,o,null,-1===e||2===e?n[++i]:null)}}return t}function Rv(t,n,e,i,o){let r=0,s=t.length;if(-1===n)s=-1;else for(;r<t.length;){const l=t[r++];if("number"==typeof l){if(l===n){s=-1;break}if(l>n){s=r-1;break}}}for(;r<t.length;){const l=t[r];if("number"==typeof l)break;if(l===e){if(null===i)return void(null!==o&&(t[r+1]=o));if(i===t[r+1])return void(t[r+2]=o)}r++,null!==i&&r++,null!==o&&r++}-1!==s&&(t.splice(s,0,n),r=s+1),t.splice(r++,0,e),null!==i&&t.splice(r++,0,i),null!==o&&t.splice(r++,0,o)}function Pv(t){return-1!==t}function xr(t){return 32767&t}function Fr(t,n){let e=function(t){return t>>16}(t),i=n;for(;e>0;)i=i[15],e--;return i}let Oh=!0;function Nc(t){const n=Oh;return Oh=t,n}let cF=0;function al(t,n){const e=Vh(t,n);if(-1!==e)return e;const i=n[1];i.firstCreatePass&&(t.injectorIndex=n.length,Lh(i.data,t),Lh(n,null),Lh(i.blueprint,null));const o=Mc(t,n),r=t.injectorIndex;if(Pv(o)){const s=xr(o),l=Fr(o,n),a=l[1].data;for(let c=0;c<8;c++)n[r+c]=l[s+c]|a[s+c]}return n[r+8]=o,r}function Lh(t,n){t.push(0,0,0,0,0,0,0,0,n)}function Vh(t,n){return-1===t.injectorIndex||t.parent&&t.parent.injectorIndex===t.injectorIndex||null===n[t.injectorIndex+8]?-1:t.injectorIndex}function Mc(t,n){if(t.parent&&-1!==t.parent.injectorIndex)return t.parent.injectorIndex;let e=0,i=null,o=n;for(;null!==o;){const r=o[1],s=r.type;if(i=2===s?r.declTNode:1===s?o[6]:null,null===i)return-1;if(e++,o=o[15],-1!==i.injectorIndex)return i.injectorIndex|e<<16}return-1}function xc(t,n,e){!function(t,n,e){let i;"string"==typeof e?i=e.charCodeAt(0)||0:e.hasOwnProperty(tl)&&(i=e[tl]),null==i&&(i=e[tl]=cF++);const o=255&i;n.data[t+(o>>5)]|=1<<o}(t,n,e)}function Lv(t,n,e){if(e&H.Optional)return t;lc(n,"NodeInjector")}function Vv(t,n,e,i){if(e&H.Optional&&void 0===i&&(i=null),0==(e&(H.Self|H.Host))){const o=t[9],r=io(void 0);try{return o?o.get(n,i,e&H.Optional):sv(n,i,e&H.Optional)}finally{io(r)}}return Lv(i,n,e)}function $v(t,n,e,i=H.Default,o){if(null!==t){const r=function(t){if("string"==typeof t)return t.charCodeAt(0)||0;const n=t.hasOwnProperty(tl)?t[tl]:void 0;return"number"==typeof n?n>=0?255&n:hF:n}(e);if("function"==typeof r){if(!xv(n,t,i))return i&H.Host?Lv(o,e,i):Vv(n,e,i,o);try{const s=r(i);if(null!=s||i&H.Optional)return s;lc(e)}finally{Sv()}}else if("number"==typeof r){let s=null,l=Vh(t,n),a=-1,c=i&H.Host?n[16][6]:null;for((-1===l||i&H.SkipSelf)&&(a=-1===l?Mc(t,n):n[l+8],-1!==a&&zv(i,!1)?(s=n[1],l=xr(a),n=Fr(a,n)):l=-1);-1!==l;){const u=n[1];if(jv(r,l,u.data)){const d=fF(l,n,e,s,i,c);if(d!==Hv)return d}a=n[l+8],-1!==a&&zv(i,n[1].data[l+8]===c)&&jv(r,l,n)?(s=u,l=xr(a),n=Fr(a,n)):l=-1}}}return Vv(n,e,i,o)}const Hv={};function hF(){return new Er(gt(),x())}function fF(t,n,e,i,o,r){const s=n[1],l=s.data[t+8],u=Fc(l,s,e,null==i?fc(l)&&Oh:i!=s&&0!=(3&l.type),o&H.Host&&r===l);return null!==u?cl(n,s,u,l):Hv}function Fc(t,n,e,i,o){const r=t.providerIndexes,s=n.data,l=1048575&r,a=t.directiveStart,u=r>>20,h=o?l+u:t.directiveEnd;for(let f=i?l:l+u;f<h;f++){const p=s[f];if(f<a&&e===p||f>=a&&p.type===e)return f}if(o){const f=s[a];if(f&&Qn(f)&&f.type===e)return a}return null}function cl(t,n,e,i){let o=t[e];const r=n.data;if(function(t){return t instanceof sl}(o)){const s=o;s.resolving&&function(t,n){throw new Vo("200",`Circular dependency in DI detected for ${t}`)}(Wt(r[e]));const l=Nc(s.canSeeViewProviders);s.resolving=!0;const a=s.injectImpl?io(s.injectImpl):null;xv(t,i,H.Default);try{o=t[e]=s.factory(void 0,r,t,i),n.firstCreatePass&&e>=i.directiveStart&&function(t,n,e){const{ngOnChanges:i,ngOnInit:o,ngDoCheck:r}=n.type.prototype;if(i){const s=pv(n);(e.preOrderHooks||(e.preOrderHooks=[])).push(t,s),(e.preOrderCheckHooks||(e.preOrderCheckHooks=[])).push(t,s)}o&&(e.preOrderHooks||(e.preOrderHooks=[])).push(0-t,o),r&&((e.preOrderHooks||(e.preOrderHooks=[])).push(t,r),(e.preOrderCheckHooks||(e.preOrderCheckHooks=[])).push(t,r))}(e,r[e],n)}finally{null!==a&&io(a),Nc(l),s.resolving=!1,Sv()}}return o}function jv(t,n,e){return!!(e[n+(t>>5)]&1<<t)}function zv(t,n){return!(t&H.Self||t&H.Host&&n)}class Er{constructor(n,e){this._tNode=n,this._lView=e}get(n,e){return $v(this._tNode,this._lView,n,void 0,e)}}function kt(t){return oo(()=>{const n=t.prototype.constructor,e=n[Ri]||$h(n),i=Object.prototype;let o=Object.getPrototypeOf(t.prototype).constructor;for(;o&&o!==i;){const r=o[Ri]||$h(o);if(r&&r!==e)return r;o=Object.getPrototypeOf(o)}return r=>new r})}function $h(t){return nv(t)?()=>{const n=$h(V(t));return n&&n()}:Uo(t)}const Sr="__parameters__";function Wo(t,n,e){return oo(()=>{const i=function(t){return function(...e){if(t){const i=t(...e);for(const o in i)this[o]=i[o]}}}(n);function o(...r){if(this instanceof o)return i.apply(this,r),this;const s=new o(...r);return l.annotation=s,l;function l(a,c,u){const d=a.hasOwnProperty(Sr)?a[Sr]:Object.defineProperty(a,Sr,{value:[]})[Sr];for(;d.length<=u;)d.push(null);return(d[u]=d[u]||[]).push(s),a}}return e&&(o.prototype=Object.create(e.prototype)),o.prototype.ngMetadataName=t,o.annotationCls=o,o})}class ge{constructor(n,e){this._desc=n,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof e?this.__NG_ELEMENT_ID__=e:void 0!==e&&(this.\u0275prov=ie({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}toString(){return`InjectionToken ${this._desc}`}}const bF=new ge("AnalyzeForEntryComponents"),Ec=Function;function On(t,n){void 0===n&&(n=t);for(let e=0;e<t.length;e++){let i=t[e];Array.isArray(i)?(n===t&&(n=t.slice(0,e)),On(i,n)):n!==t&&n.push(i)}return n}function gi(t,n){t.forEach(e=>Array.isArray(e)?gi(e,n):n(e))}function Sc(t,n,e){n>=t.length?t.push(e):t.splice(n,0,e)}function Go(t,n){return n>=t.length-1?t.pop():t.splice(n,1)[0]}function Dn(t,n,e){let i=Ar(t,n);return i>=0?t[1|i]=e:(i=~i,function(t,n,e,i){let o=t.length;if(o==n)t.push(e,i);else if(1===o)t.push(i,t[0]),t[0]=e;else{for(o--,t.push(t[o-1],t[o]);o>n;)t[o]=t[o-2],o--;t[n]=e,t[n+1]=i}}(t,i,n,e)),i}function jh(t,n){const e=Ar(t,n);if(e>=0)return t[1|e]}function Ar(t,n){return function(t,n,e){let i=0,o=t.length>>e;for(;o!==i;){const r=i+(o-i>>1),s=t[r<<e];if(n===s)return r<<e;s>n?o=r:i=r+1}return~(o<<e)}(t,n,1)}const pl={},Uh="__NG_DI_FLAG__",Rr="ngTempTokenPath",xF=/\n/gm,Wh="__source",Gh=Ne({provide:String,useValue:Ne});let ml;function Pr(t){const n=ml;return ml=t,n}function EF(t,n=H.Default){if(void 0===ml)throw new Error("inject() must be called from an injection context");return null===ml?sv(t,void 0,n):ml.get(t,n&H.Optional?null:void 0,n)}function R(t,n=H.Default){return(gh||EF)(V(t),n)}function qo(t){const n=[];for(let e=0;e<t.length;e++){const i=V(t[e]);if(Array.isArray(i)){if(0===i.length)throw new Error("Arguments array must have arguments.");let o,r=H.Default;for(let s=0;s<i.length;s++){const l=i[s],a=kF(l);"number"==typeof a?-1===a?o=l.token:r|=a:o=l}n.push(R(o,r))}else n.push(R(i))}return n}function gl(t,n){return t[Uh]=n,t.prototype[Uh]=n,t}function kF(t){return t[Uh]}function Xv(t,n,e,i){const o=t[Rr];throw n[Wh]&&o.unshift(n[Wh]),t.message=function(t,n,e,i=null){t=t&&"\n"===t.charAt(0)&&"\u0275"==t.charAt(1)?t.substr(2):t;let o=ue(n);if(Array.isArray(n))o=n.map(ue).join(" -> ");else if("object"==typeof n){let r=[];for(let s in n)if(n.hasOwnProperty(s)){let l=n[s];r.push(s+":"+("string"==typeof l?JSON.stringify(l):ue(l)))}o=`{${r.join(", ")}}`}return`${e}${i?"("+i+")":""}[${o}]: ${t.replace(xF,"\n  ")}`}("\n"+t.message,o,e,i),t.ngTokenPath=o,t[Rr]=null,t}const Br=gl(Wo("Inject",t=>({token:t})),-1),un=gl(Wo("Optional"),8),uo=gl(Wo("SkipSelf"),4);class Ko{constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`}}function In(t){return t instanceof Ko?t.changingThisBreaksApplicationSecurity:t}function bi(t,n){const e=function(t){return t instanceof Ko&&t.getTypeName()||null}(t);if(null!=e&&e!==n){if("ResourceURL"===e&&"URL"===n)return!0;throw new Error(`Required a safe ${n}, got a ${e} (see https://g.co/ng/security#xss)`)}return e===n}const eE=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,tE=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;var He=(()=>((He=He||{})[He.NONE=0]="NONE",He[He.HTML=1]="HTML",He[He.STYLE=2]="STYLE",He[He.SCRIPT=3]="SCRIPT",He[He.URL=4]="URL",He[He.RESOURCE_URL=5]="RESOURCE_URL",He))();function ef(t){const n=function(){const t=x();return t&&t[12]}();return n?n.sanitize(He.URL,t)||"":bi(t,"URL")?In(t):function(t){return(t=String(t)).match(eE)||t.match(tE)?t:"unsafe:"+t}(J(t))}const m0="__ngContext__";function Lt(t,n){t[m0]=n}function nf(t){const n=function(t){return t[m0]||null}(t);return n?Array.isArray(n)?n:n.lView:null}function Lc(t){return t.ngOriginalError}function wE(t,...n){t.error(...n)}class Xo{constructor(){this._console=console}handleError(n){const e=this._findOriginalError(n),i=this._findContext(n),o=(t=n)&&t.ngErrorLogger||wE;var t;o(this._console,"ERROR",n),e&&o(this._console,"ORIGINAL ERROR",e),i&&o(this._console,"ERROR CONTEXT",i)}_findContext(n){return n?function(t){return t.ngDebugContext}(n)||this._findContext(Lc(n)):null}_findOriginalError(n){let e=n&&Lc(n);for(;e&&Lc(e);)e=Lc(e);return e||null}}const _0=(()=>("undefined"!=typeof requestAnimationFrame&&requestAnimationFrame||setTimeout).bind(ke))();function yi(t){return t instanceof Function?t():t}var Cn=(()=>((Cn=Cn||{})[Cn.Important=1]="Important",Cn[Cn.DashCase=2]="DashCase",Cn))();function sf(t,n){return undefined(t,n)}function Cl(t){const n=t[3];return Xn(n)?n[3]:n}function lf(t){return E0(t[13])}function af(t){return E0(t[4])}function E0(t){for(;null!==t&&!Xn(t);)t=t[4];return t}function $r(t,n,e,i,o){if(null!=i){let r,s=!1;Xn(i)?r=i:fi(i)&&(s=!0,i=i[0]);const l=ut(i);0===t&&null!==e?null==o?P0(n,e,l):Qo(n,e,l,o||null,!0):1===t&&null!==e?Qo(n,e,l,o||null,!0):2===t?function(t,n,e){const i=$c(t,n);i&&function(t,n,e,i){it(t)?t.removeChild(n,e,i):n.removeChild(e)}(t,i,n,e)}(n,l,s):3===t&&n.destroyNode(l),null!=r&&function(t,n,e,i,o){const r=e[7];r!==ut(e)&&$r(n,t,i,r,o);for(let l=10;l<e.length;l++){const a=e[l];wl(a[1],a,t,n,i,r)}}(n,t,r,e,o)}}function uf(t,n,e){return it(t)?t.createElement(n,e):null===e?t.createElement(n):t.createElementNS(e,n)}function S0(t,n){const e=t[9],i=e.indexOf(n),o=n[3];1024&n[2]&&(n[2]&=-1025,Fh(o,-1)),e.splice(i,1)}function df(t,n){if(t.length<=10)return;const e=10+n,i=t[e];if(i){const o=i[17];null!==o&&o!==t&&S0(o,i),n>0&&(t[e-1][4]=i[4]);const r=Go(t,10+n);!function(t,n){wl(t,n,n[11],2,null,null),n[0]=null,n[6]=null}(i[1],i);const s=r[19];null!==s&&s.detachView(r[1]),i[3]=null,i[4]=null,i[2]&=-129}return i}function T0(t,n){if(!(256&n[2])){const e=n[11];it(e)&&e.destroyNode&&wl(t,n,e,3,null,null),function(t){let n=t[13];if(!n)return hf(t[1],t);for(;n;){let e=null;if(fi(n))e=n[13];else{const i=n[10];i&&(e=i)}if(!e){for(;n&&!n[4]&&n!==t;)fi(n)&&hf(n[1],n),n=n[3];null===n&&(n=t),fi(n)&&hf(n[1],n),e=n&&n[4]}n=e}}(n)}}function hf(t,n){if(!(256&n[2])){n[2]&=-129,n[2]|=256,function(t,n){let e;if(null!=t&&null!=(e=t.destroyHooks))for(let i=0;i<e.length;i+=2){const o=n[e[i]];if(!(o instanceof sl)){const r=e[i+1];if(Array.isArray(r))for(let s=0;s<r.length;s+=2){const l=o[r[s]],a=r[s+1];try{a.call(l)}finally{}}else try{r.call(o)}finally{}}}}(t,n),function(t,n){const e=t.cleanup,i=n[7];let o=-1;if(null!==e)for(let r=0;r<e.length-1;r+=2)if("string"==typeof e[r]){const s=e[r+1],l="function"==typeof s?s(n):ut(n[s]),a=i[o=e[r+2]],c=e[r+3];"boolean"==typeof c?l.removeEventListener(e[r],a,c):c>=0?i[o=c]():i[o=-c].unsubscribe(),r+=2}else{const s=i[o=e[r+1]];e[r].call(s)}if(null!==i){for(let r=o+1;r<i.length;r++)i[r]();n[7]=null}}(t,n),1===n[1].type&&it(n[11])&&n[11].destroy();const e=n[17];if(null!==e&&Xn(n[3])){e!==n[3]&&S0(e,n);const i=n[19];null!==i&&i.detachView(t)}}}function A0(t,n,e){return function(t,n,e){let i=n;for(;null!==i&&40&i.type;)i=(n=i).parent;if(null===i)return e[0];if(2&i.flags){const o=t.data[i.directiveStart].encapsulation;if(o===mt.None||o===mt.Emulated)return null}return Bn(i,e)}(t,n.parent,e)}function Qo(t,n,e,i,o){it(t)?t.insertBefore(n,e,i,o):n.insertBefore(e,i,o)}function P0(t,n,e){it(t)?t.appendChild(n,e):n.appendChild(e)}function B0(t,n,e,i,o){null!==i?Qo(t,n,e,i,o):P0(t,n,e)}function $c(t,n){return it(t)?t.parentNode(n):n.parentNode}let V0=function(t,n,e){return 40&t.type?Bn(t,e):null};function Hc(t,n,e,i){const o=A0(t,i,n),r=n[11],l=function(t,n,e){return V0(t,n,e)}(i.parent||n[6],i,n);if(null!=o)if(Array.isArray(e))for(let a=0;a<e.length;a++)B0(r,o,e[a],l,!1);else B0(r,o,e,l,!1)}function jc(t,n){if(null!==n){const e=n.type;if(3&e)return Bn(n,t);if(4&e)return pf(-1,t[n.index]);if(8&e){const i=n.child;if(null!==i)return jc(t,i);{const o=t[n.index];return Xn(o)?pf(-1,o):ut(o)}}if(32&e)return sf(n,t)()||ut(t[n.index]);{const i=H0(t,n);return null!==i?Array.isArray(i)?i[0]:jc(Cl(t[16]),i):jc(t,n.next)}}return null}function H0(t,n){return null!==n?t[16][6].projection[n.projection]:null}function pf(t,n){const e=10+t+1;if(e<n.length){const i=n[e],o=i[1].firstChild;if(null!==o)return jc(i,o)}return n[7]}function mf(t,n,e,i,o,r,s){for(;null!=e;){const l=i[e.index],a=e.type;if(s&&0===n&&(l&&Lt(ut(l),i),e.flags|=4),64!=(64&e.flags))if(8&a)mf(t,n,e.child,i,o,r,!1),$r(n,t,o,l,r);else if(32&a){const c=sf(e,i);let u;for(;u=c();)$r(n,t,o,u,r);$r(n,t,o,l,r)}else 16&a?z0(t,n,i,e,o,r):$r(n,t,o,l,r);e=s?e.projectionNext:e.next}}function wl(t,n,e,i,o,r){mf(e,i,t.firstChild,n,o,r,!1)}function z0(t,n,e,i,o,r){const s=e[16],a=s[6].projection[i.projection];if(Array.isArray(a))for(let c=0;c<a.length;c++)$r(n,t,o,a[c],r);else mf(t,n,a,s[3],o,r,!0)}function U0(t,n,e){it(t)?t.setAttribute(n,"style",e):n.style.cssText=e}function gf(t,n,e){it(t)?""===e?t.removeAttribute(n,"class"):t.setAttribute(n,"class",e):n.className=e}function W0(t,n,e){let i=t.length;for(;;){const o=t.indexOf(n,e);if(-1===o)return o;if(0===o||t.charCodeAt(o-1)<=32){const r=n.length;if(o+r===i||t.charCodeAt(o+r)<=32)return o}e=o+1}}const G0="ng-template";function XE(t,n,e){let i=0;for(;i<t.length;){let o=t[i++];if(e&&"class"===o){if(o=t[i],-1!==W0(o.toLowerCase(),n,0))return!0}else if(1===o){for(;i<t.length&&"string"==typeof(o=t[i++]);)if(o.toLowerCase()===n)return!0;return!1}}return!1}function q0(t){return 4===t.type&&t.value!==G0}function QE(t,n,e){return n===(4!==t.type||e?t.value:G0)}function ZE(t,n,e){let i=4;const o=t.attrs||[],r=function(t){for(let n=0;n<t.length;n++)if(Av(t[n]))return n;return t.length}(o);let s=!1;for(let l=0;l<n.length;l++){const a=n[l];if("number"!=typeof a){if(!s)if(4&i){if(i=2|1&i,""!==a&&!QE(t,a,e)||""===a&&1===n.length){if(Zn(i))return!1;s=!0}}else{const c=8&i?a:n[++l];if(8&i&&null!==t.attrs){if(!XE(t.attrs,c,e)){if(Zn(i))return!1;s=!0}continue}const d=YE(8&i?"class":a,o,q0(t),e);if(-1===d){if(Zn(i))return!1;s=!0;continue}if(""!==c){let h;h=d>r?"":o[d+1].toLowerCase();const f=8&i?h:null;if(f&&-1!==W0(f,c,0)||2&i&&c!==h){if(Zn(i))return!1;s=!0}}}}else{if(!s&&!Zn(i)&&!Zn(a))return!1;if(s&&Zn(a))continue;s=!1,i=a|1&i}}return Zn(i)||s}function Zn(t){return 0==(1&t)}function YE(t,n,e,i){if(null===n)return-1;let o=0;if(i||!e){let r=!1;for(;o<n.length;){const s=n[o];if(s===t)return o;if(3===s||6===s)r=!0;else{if(1===s||2===s){let l=n[++o];for(;"string"==typeof l;)l=n[++o];continue}if(4===s)break;if(0===s){o+=4;continue}}o+=r?1:2}return-1}return function(t,n){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){const i=t[e];if("number"==typeof i)return-1;if(i===n)return e;e++}return-1}(n,t)}function K0(t,n,e=!1){for(let i=0;i<n.length;i++)if(ZE(t,n[i],e))return!0;return!1}function X0(t,n){return t?":not("+n.trim()+")":n}function i3(t){let n=t[0],e=1,i=2,o="",r=!1;for(;e<t.length;){let s=t[e];if("string"==typeof s)if(2&i){const l=t[++e];o+="["+s+(l.length>0?'="'+l+'"':"")+"]"}else 8&i?o+="."+s:4&i&&(o+=" "+s);else""!==o&&!Zn(s)&&(n+=X0(r,o),o=""),i=s,r=r||!Zn(i);e++}return""!==o&&(n+=X0(r,o)),n}const Q={};function Xe(t){Q0(Ie(),x(),Kt()+t,gc())}function Q0(t,n,e,i){if(!i)if(3==(3&n[2])){const r=t.preOrderCheckHooks;null!==r&&Ic(n,r,e)}else{const r=t.preOrderHooks;null!==r&&Cc(n,r,0,e)}lo(e)}function zc(t,n){return t<<17|n<<2}function Yn(t){return t>>17&32767}function bf(t){return 2|t}function Bi(t){return(131068&t)>>2}function vf(t,n){return-131069&t|n<<2}function yf(t){return 1|t}function sy(t,n){const e=t.contentQueries;if(null!==e)for(let i=0;i<e.length;i+=2){const o=e[i],r=e[i+1];if(-1!==r){const s=t.data[r];Ah(o),s.contentQueries(2,n[r],r)}}}function _l(t,n,e,i,o,r,s,l,a,c){const u=n.blueprint.slice();return u[0]=o,u[2]=140|i,Iv(u),u[3]=u[15]=t,u[8]=e,u[10]=s||t&&t[10],u[11]=l||t&&t[11],u[12]=a||t&&t[12]||null,u[9]=c||t&&t[9]||null,u[6]=r,u[16]=2==n.type?t[16]:u,u}function Hr(t,n,e,i,o){let r=t.data[n];if(null===r)r=function(t,n,e,i,o){const r=wv(),s=Eh(),a=t.data[n]=function(t,n,e,i,o,r){return{type:e,index:i,insertBeforeIndex:null,injectorIndex:n?n.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,value:o,attrs:r,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,s?r:r&&r.parent,e,n,i,o);return null===t.firstChild&&(t.firstChild=a),null!==r&&(s?null==r.child&&null!==a.parent&&(r.child=a):null===r.next&&(r.next=a)),a}(t,n,e,i,o),K.lFrame.inI18n&&(r.flags|=64);else if(64&r.type){r.type=e,r.value=i,r.attrs=o;const s=function(){const t=K.lFrame,n=t.currentTNode;return t.isParent?n:n.parent}();r.injectorIndex=null===s?-1:s.injectorIndex}return pi(r,!0),r}function jr(t,n,e,i){if(0===e)return-1;const o=n.length;for(let r=0;r<e;r++)n.push(i),t.blueprint.push(i),t.data.push(null);return o}function Nl(t,n,e){vc(n);try{const i=t.viewQuery;null!==i&&Pf(1,i,e);const o=t.template;null!==o&&ly(t,n,o,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),t.staticContentQueries&&sy(t,n),t.staticViewQueries&&Pf(2,t.viewQuery,e);const r=t.components;null!==r&&function(t,n){for(let e=0;e<n.length;e++)B3(t,n[e])}(n,r)}catch(i){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),i}finally{n[2]&=-5,yc()}}function zr(t,n,e,i){const o=n[2];if(256==(256&o))return;vc(n);const r=gc();try{Iv(n),function(t){K.lFrame.bindingIndex=t}(t.bindingStartIndex),null!==e&&ly(t,n,e,2,i);const s=3==(3&o);if(!r)if(s){const c=t.preOrderCheckHooks;null!==c&&Ic(n,c,null)}else{const c=t.preOrderHooks;null!==c&&Cc(n,c,0,null),Rh(n,0)}if(function(t){for(let n=lf(t);null!==n;n=af(n)){if(!n[2])continue;const e=n[9];for(let i=0;i<e.length;i++){const o=e[i],r=o[3];0==(1024&o[2])&&Fh(r,1),o[2]|=1024}}}(n),function(t){for(let n=lf(t);null!==n;n=af(n))for(let e=10;e<n.length;e++){const i=n[e],o=i[1];xh(i)&&zr(o,i,o.template,i[8])}}(n),null!==t.contentQueries&&sy(t,n),!r)if(s){const c=t.contentCheckHooks;null!==c&&Ic(n,c)}else{const c=t.contentHooks;null!==c&&Cc(n,c,1),Rh(n,1)}!function(t,n){const e=t.hostBindingOpCodes;if(null!==e)try{for(let i=0;i<e.length;i++){const o=e[i];if(o<0)lo(~o);else{const r=o,s=e[++i],l=e[++i];Gx(s,r),l(2,n[r])}}}finally{lo(-1)}}(t,n);const l=t.components;null!==l&&function(t,n){for(let e=0;e<n.length;e++)P3(t,n[e])}(n,l);const a=t.viewQuery;if(null!==a&&Pf(2,a,i),!r)if(s){const c=t.viewCheckHooks;null!==c&&Ic(n,c)}else{const c=t.viewHooks;null!==c&&Cc(n,c,2),Rh(n,2)}!0===t.firstUpdatePass&&(t.firstUpdatePass=!1),r||(n[2]&=-73),1024&n[2]&&(n[2]&=-1025,Fh(n[3],-1))}finally{yc()}}function g3(t,n,e,i){const o=n[10],r=!gc(),s=Dv(n);try{r&&!s&&o.begin&&o.begin(),s&&Nl(t,n,i),zr(t,n,e,i)}finally{r&&!s&&o.end&&o.end()}}function ly(t,n,e,i,o){const r=Kt(),s=2&i;try{lo(-1),s&&n.length>20&&Q0(t,n,20,gc()),e(i,o)}finally{lo(r)}}function xf(t,n,e){!Cv()||(function(t,n,e,i){const o=e.directiveStart,r=e.directiveEnd;t.firstCreatePass||al(e,n),Lt(i,n);const s=e.initialInputs;for(let l=o;l<r;l++){const a=t.data[l],c=Qn(a);c&&k3(n,e,a);const u=cl(n,t,l,e);Lt(u,n),null!==s&&S3(0,l-o,u,a,0,s),c&&(yn(e.index,n)[8]=u)}}(t,n,e,Bn(e,n)),128==(128&e.flags)&&function(t,n,e){const i=e.directiveStart,o=e.directiveEnd,s=e.index,l=K.lFrame.currentDirectiveIndex;try{lo(s);for(let a=i;a<o;a++){const c=t.data[a],u=n[a];Sh(a),(null!==c.hostBindings||0!==c.hostVars||null!==c.hostAttrs)&&gy(c,u)}}finally{lo(-1),Sh(l)}}(t,n,e))}function Ff(t,n,e=Bn){const i=n.localNames;if(null!==i){let o=n.index+1;for(let r=0;r<i.length;r+=2){const s=i[r+1],l=-1===s?e(n,t):t[s];t[o++]=l}}}function cy(t){const n=t.tView;return null===n||n.incompleteFirstPass?t.tView=Gc(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts):n}function Gc(t,n,e,i,o,r,s,l,a,c){const u=20+i,d=u+o,h=function(t,n){const e=[];for(let i=0;i<n;i++)e.push(i<t?null:Q);return e}(u,d),f="function"==typeof c?c():c;return h[1]={type:t,blueprint:h,template:e,queries:null,viewQuery:l,declTNode:n,data:h.slice().fill(null,u),bindingStartIndex:u,expandoStartIndex:d,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof r?r():r,pipeRegistry:"function"==typeof s?s():s,firstChild:null,schemas:a,consts:f,incompleteFirstPass:!1}}function hy(t,n,e,i){const o=Cy(n);null===e?o.push(i):(o.push(e),t.firstCreatePass&&wy(t).push(i,o.length-1))}function fy(t,n,e){for(let i in t)if(t.hasOwnProperty(i)){const o=t[i];(e=null===e?{}:e).hasOwnProperty(i)?e[i].push(n,o):e[i]=[n,o]}return e}function wn(t,n,e,i,o,r,s,l){const a=Bn(n,e);let u,c=n.inputs;!l&&null!=c&&(u=c[i])?(My(t,e,u,i,o),fc(n)&&function(t,n){const e=yn(n,t);16&e[2]||(e[2]|=64)}(e,n.index)):3&n.type&&(i=function(t){return"class"===t?"className":"for"===t?"htmlFor":"formaction"===t?"formAction":"innerHtml"===t?"innerHTML":"readonly"===t?"readOnly":"tabindex"===t?"tabIndex":t}(i),o=null!=s?s(o,n.value||"",i):o,it(r)?r.setProperty(a,i,o):Bh(i)||(a.setProperty?a.setProperty(i,o):a[i]=o))}function Ef(t,n,e,i){let o=!1;if(Cv()){const r=function(t,n,e){const i=t.directiveRegistry;let o=null;if(i)for(let r=0;r<i.length;r++){const s=i[r];K0(e,s.selectors,!1)&&(o||(o=[]),xc(al(e,n),t,s.type),Qn(s)?(by(t,e),o.unshift(s)):o.push(s))}return o}(t,n,e),s=null===i?null:{"":-1};if(null!==r){o=!0,vy(e,t.data.length,r.length);for(let u=0;u<r.length;u++){const d=r[u];d.providersResolver&&d.providersResolver(d)}let l=!1,a=!1,c=jr(t,n,r.length,null);for(let u=0;u<r.length;u++){const d=r[u];e.mergedAttrs=_c(e.mergedAttrs,d.hostAttrs),yy(t,e,n,c,d),E3(c,d,s),null!==d.contentQueries&&(e.flags|=8),(null!==d.hostBindings||null!==d.hostAttrs||0!==d.hostVars)&&(e.flags|=128);const h=d.type.prototype;!l&&(h.ngOnChanges||h.ngOnInit||h.ngDoCheck)&&((t.preOrderHooks||(t.preOrderHooks=[])).push(e.index),l=!0),!a&&(h.ngOnChanges||h.ngDoCheck)&&((t.preOrderCheckHooks||(t.preOrderCheckHooks=[])).push(e.index),a=!0),c++}!function(t,n){const i=n.directiveEnd,o=t.data,r=n.attrs,s=[];let l=null,a=null;for(let c=n.directiveStart;c<i;c++){const u=o[c],d=u.inputs,h=null===r||q0(n)?null:T3(d,r);s.push(h),l=fy(d,c,l),a=fy(u.outputs,c,a)}null!==l&&(l.hasOwnProperty("class")&&(n.flags|=16),l.hasOwnProperty("style")&&(n.flags|=32)),n.initialInputs=s,n.inputs=l,n.outputs=a}(t,e)}s&&function(t,n,e){if(n){const i=t.localNames=[];for(let o=0;o<n.length;o+=2){const r=e[n[o+1]];if(null==r)throw new Vo("301",`Export of name '${n[o+1]}' not found!`);i.push(n[o],r)}}}(e,i,s)}return e.mergedAttrs=_c(e.mergedAttrs,e.attrs),o}function my(t,n,e,i,o,r){const s=r.hostBindings;if(s){let l=t.hostBindingOpCodes;null===l&&(l=t.hostBindingOpCodes=[]);const a=~n.index;(function(t){let n=t.length;for(;n>0;){const e=t[--n];if("number"==typeof e&&e<0)return e}return 0})(l)!=a&&l.push(a),l.push(i,o,s)}}function gy(t,n){null!==t.hostBindings&&t.hostBindings(1,n)}function by(t,n){n.flags|=2,(t.components||(t.components=[])).push(n.index)}function E3(t,n,e){if(e){if(n.exportAs)for(let i=0;i<n.exportAs.length;i++)e[n.exportAs[i]]=t;Qn(n)&&(e[""]=t)}}function vy(t,n,e){t.flags|=1,t.directiveStart=n,t.directiveEnd=n+e,t.providerIndexes=n}function yy(t,n,e,i,o){t.data[i]=o;const r=o.factory||(o.factory=Uo(o.type)),s=new sl(r,Qn(o),null);t.blueprint[i]=s,e[i]=s,my(t,n,0,i,jr(t,e,o.hostVars,Q),o)}function k3(t,n,e){const i=Bn(n,t),o=cy(e),r=t[10],s=qc(t,_l(t,o,null,e.onPush?64:16,i,n,r,r.createRenderer(i,e),null,null));t[n.index]=s}function Di(t,n,e,i,o,r){const s=Bn(t,n);!function(t,n,e,i,o,r,s){if(null==r)it(t)?t.removeAttribute(n,o,e):n.removeAttribute(o);else{const l=null==s?J(r):s(r,i||"",o);it(t)?t.setAttribute(n,o,l,e):e?n.setAttributeNS(e,o,l):n.setAttribute(o,l)}}(n[11],s,r,t.value,e,i,o)}function S3(t,n,e,i,o,r){const s=r[n];if(null!==s){const l=i.setInput;for(let a=0;a<s.length;){const c=s[a++],u=s[a++],d=s[a++];null!==l?i.setInput(e,d,c,u):e[u]=d}}}function T3(t,n){let e=null,i=0;for(;i<n.length;){const o=n[i];if(0!==o)if(5!==o){if("number"==typeof o)break;t.hasOwnProperty(o)&&(null===e&&(e=[]),e.push(o,t[o],n[i+1])),i+=2}else i+=2;else i+=4}return e}function Dy(t,n,e,i){return new Array(t,!0,!1,n,null,0,i,e,null,null)}function P3(t,n){const e=yn(n,t);if(xh(e)){const i=e[1];80&e[2]?zr(i,e,i.template,e[8]):e[5]>0&&Sf(e)}}function Sf(t){for(let i=lf(t);null!==i;i=af(i))for(let o=10;o<i.length;o++){const r=i[o];if(1024&r[2]){const s=r[1];zr(s,r,s.template,r[8])}else r[5]>0&&Sf(r)}const e=t[1].components;if(null!==e)for(let i=0;i<e.length;i++){const o=yn(e[i],t);xh(o)&&o[5]>0&&Sf(o)}}function B3(t,n){const e=yn(n,t),i=e[1];(function(t,n){for(let e=n.length;e<t.blueprint.length;e++)n.push(t.blueprint[e])})(i,e),Nl(i,e,e[8])}function qc(t,n){return t[13]?t[14][4]=n:t[13]=n,t[14]=n,n}function Tf(t){for(;t;){t[2]|=64;const n=Cl(t);if(Mx(t)&&!n)return t;t=n}return null}function Rf(t,n,e){const i=n[10];i.begin&&i.begin();try{zr(t,n,t.template,e)}catch(o){throw Ny(n,o),o}finally{i.end&&i.end()}}function Iy(t){!function(t){for(let n=0;n<t.components.length;n++){const e=t.components[n],i=nf(e),o=i[1];g3(o,i,o.template,e)}}(t[8])}function Pf(t,n,e){Ah(0),n(t,e)}const H3=(()=>Promise.resolve(null))();function Cy(t){return t[7]||(t[7]=[])}function wy(t){return t.cleanup||(t.cleanup=[])}function Ny(t,n){const e=t[9],i=e?e.get(Xo,null):null;i&&i.handleError(n)}function My(t,n,e,i,o){for(let r=0;r<e.length;){const s=e[r++],l=e[r++],a=n[s],c=t.data[s];null!==c.setInput?c.setInput(a,o,i,l):a[l]=o}}function Li(t,n,e){const i=mc(n,t);!function(t,n,e){it(t)?t.setValue(n,e):n.textContent=e}(t[11],i,e)}function Kc(t,n,e){let i=e?t.styles:null,o=e?t.classes:null,r=0;if(null!==n)for(let s=0;s<n.length;s++){const l=n[s];"number"==typeof l?r=l:1==r?o=fh(o,l):2==r&&(i=fh(i,l+": "+n[++s]+";"))}e?t.styles=i:t.stylesWithoutHost=i,e?t.classes=o:t.classesWithoutHost=o}const Ur=new ge("INJECTOR",-1);class xy{get(n,e=pl){if(e===pl){const i=new Error(`NullInjectorError: No provider for ${ue(n)}!`);throw i.name="NullInjectorError",i}return e}}const Ml=new ge("Set Injector scope."),xl={},U3={};let Bf;function Fy(){return void 0===Bf&&(Bf=new xy),Bf}function Ey(t,n=null,e=null,i){return new G3(t,e,n||Fy(),i)}class G3{constructor(n,e,i,o=null){this.parent=i,this.records=new Map,this.injectorDefTypes=new Set,this.onDestroy=new Set,this._destroyed=!1;const r=[];e&&gi(e,l=>this.processProvider(l,n,e)),gi([n],l=>this.processInjectorType(l,[],r)),this.records.set(Ur,Wr(void 0,this));const s=this.records.get(Ml);this.scope=null!=s?s.value:null,this.source=o||("object"==typeof n?null:ue(n))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{this.onDestroy.forEach(n=>n.ngOnDestroy())}finally{this.records.clear(),this.onDestroy.clear(),this.injectorDefTypes.clear()}}get(n,e=pl,i=H.Default){this.assertNotDestroyed();const o=Pr(this),r=io(void 0);try{if(!(i&H.SkipSelf)){let l=this.records.get(n);if(void 0===l){const a=("function"==typeof(t=n)||"object"==typeof t&&t instanceof ge)&&Ai(n);l=a&&this.injectableDefInScope(a)?Wr(Of(n),xl):null,this.records.set(n,l)}if(null!=l)return this.hydrate(n,l)}return(i&H.Self?Fy():this.parent).get(n,e=i&H.Optional&&e===pl?null:e)}catch(s){if("NullInjectorError"===s.name){if((s[Rr]=s[Rr]||[]).unshift(ue(n)),o)throw s;return Xv(s,n,"R3InjectorError",this.source)}throw s}finally{io(r),Pr(o)}var t}_resolveInjectorDefTypes(){this.injectorDefTypes.forEach(n=>this.get(n))}toString(){const n=[];return this.records.forEach((i,o)=>n.push(ue(o))),`R3Injector[${n.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new Error("Injector has already been destroyed.")}processInjectorType(n,e,i){if(!(n=V(n)))return!1;let o=ov(n);const r=null==o&&n.ngModule||void 0,s=void 0===r?n:r,l=-1!==i.indexOf(s);if(void 0!==r&&(o=ov(r)),null==o)return!1;if(null!=o.imports&&!l){let u;i.push(s);try{gi(o.imports,d=>{this.processInjectorType(d,e,i)&&(void 0===u&&(u=[]),u.push(d))})}finally{}if(void 0!==u)for(let d=0;d<u.length;d++){const{ngModule:h,providers:f}=u[d];gi(f,p=>this.processProvider(p,h,f||Oe))}}this.injectorDefTypes.add(s);const a=Uo(s)||(()=>new s);this.records.set(s,Wr(a,xl));const c=o.providers;if(null!=c&&!l){const u=n;gi(c,d=>this.processProvider(d,u,c))}return void 0!==r&&void 0!==n.providers}processProvider(n,e,i){let o=Gr(n=V(n))?n:V(n&&n.provide);const r=function(t,n,e){return Sy(t)?Wr(void 0,t.useValue):Wr(ky(t),xl)}(n);if(Gr(n)||!0!==n.multi)this.records.get(o);else{let s=this.records.get(o);s||(s=Wr(void 0,xl,!0),s.factory=()=>qo(s.multi),this.records.set(o,s)),o=n,s.multi.push(n)}this.records.set(o,r)}hydrate(n,e){return e.value===xl&&(e.value=U3,e.value=e.factory()),"object"==typeof e.value&&e.value&&null!==(t=e.value)&&"object"==typeof t&&"function"==typeof t.ngOnDestroy&&this.onDestroy.add(e.value),e.value;var t}injectableDefInScope(n){if(!n.providedIn)return!1;const e=V(n.providedIn);return"string"==typeof e?"any"===e||e===this.scope:this.injectorDefTypes.has(e)}}function Of(t){const n=Ai(t),e=null!==n?n.factory:Uo(t);if(null!==e)return e;if(t instanceof ge)throw new Error(`Token ${ue(t)} is missing a \u0275prov definition.`);if(t instanceof Function)return function(t){const n=t.length;if(n>0){const i=function(t,n){const e=[];for(let i=0;i<t;i++)e.push(n);return e}(n,"?");throw new Error(`Can't resolve all parameters for ${ue(t)}: (${i.join(", ")}).`)}const e=function(t){const n=t&&(t[ac]||t[rv]);if(n){const e=function(t){if(t.hasOwnProperty("name"))return t.name;const n=(""+t).match(/^function\s*([^\s(]+)/);return null===n?"":n[1]}(t);return console.warn(`DEPRECATED: DI is instantiating a token "${e}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${e}" class.`),n}return null}(t);return null!==e?()=>e.factory(t):()=>new t}(t);throw new Error("unreachable")}function ky(t,n,e){let i;if(Gr(t)){const o=V(t);return Uo(o)||Of(o)}if(Sy(t))i=()=>V(t.useValue);else if(function(t){return!(!t||!t.useFactory)}(t))i=()=>t.useFactory(...qo(t.deps||[]));else if(function(t){return!(!t||!t.useExisting)}(t))i=()=>R(V(t.useExisting));else{const o=V(t&&(t.useClass||t.provide));if(!function(t){return!!t.deps}(t))return Uo(o)||Of(o);i=()=>new o(...qo(t.deps))}return i}function Wr(t,n,e=!1){return{factory:t,value:n,multi:e?[]:void 0}}function Sy(t){return null!==t&&"object"==typeof t&&Gh in t}function Gr(t){return"function"==typeof t}const Ty=function(t,n,e){return function(t,n=null,e=null,i){const o=Ey(t,n,e,i);return o._resolveInjectorDefTypes(),o}({name:e},n,t,e)};class ye{static create(n,e){return Array.isArray(n)?Ty(n,e,""):Ty(n.providers,n.parent,n.name||"")}}function f6(t,n){Dc(nf(t)[1],gt())}function we(t){let n=function(t){return Object.getPrototypeOf(t.prototype).constructor}(t.type),e=!0;const i=[t];for(;n;){let o;if(Qn(t))o=n.\u0275cmp||n.\u0275dir;else{if(n.\u0275cmp)throw new Error("Directives cannot inherit Components");o=n.\u0275dir}if(o){if(e){i.push(o);const s=t;s.inputs=zf(t.inputs),s.declaredInputs=zf(t.declaredInputs),s.outputs=zf(t.outputs);const l=o.hostBindings;l&&b6(t,l);const a=o.viewQuery,c=o.contentQueries;if(a&&m6(t,a),c&&g6(t,c),hh(t.inputs,o.inputs),hh(t.declaredInputs,o.declaredInputs),hh(t.outputs,o.outputs),Qn(o)&&o.data.animation){const u=t.data;u.animation=(u.animation||[]).concat(o.data.animation)}}const r=o.features;if(r)for(let s=0;s<r.length;s++){const l=r[s];l&&l.ngInherit&&l(t),l===we&&(e=!1)}}n=Object.getPrototypeOf(n)}!function(t){let n=0,e=null;for(let i=t.length-1;i>=0;i--){const o=t[i];o.hostVars=n+=o.hostVars,o.hostAttrs=_c(o.hostAttrs,e=_c(e,o.hostAttrs))}}(i)}function zf(t){return t===yr?{}:t===Oe?[]:t}function m6(t,n){const e=t.viewQuery;t.viewQuery=e?(i,o)=>{n(i,o),e(i,o)}:n}function g6(t,n){const e=t.contentQueries;t.contentQueries=e?(i,o,r)=>{n(i,o,r),e(i,o,r)}:n}function b6(t,n){const e=t.hostBindings;t.hostBindings=e?(i,o)=>{n(i,o),e(i,o)}:n}ye.THROW_IF_NOT_FOUND=pl,ye.NULL=new xy,ye.\u0275prov=ie({token:ye,providedIn:"any",factory:()=>R(Ur)}),ye.__NG_ELEMENT_ID__=-1;let Xc=null;function qr(){if(!Xc){const t=ke.Symbol;if(t&&t.iterator)Xc=t.iterator;else{const n=Object.getOwnPropertyNames(Map.prototype);for(let e=0;e<n.length;++e){const i=n[e];"entries"!==i&&"size"!==i&&Map.prototype[i]===Map.prototype.entries&&(Xc=i)}}}return Xc}function El(t){return!!Uf(t)&&(Array.isArray(t)||!(t instanceof Map)&&qr()in t)}function Uf(t){return null!==t&&("function"==typeof t||"object"==typeof t)}function Vt(t,n,e){return!Object.is(t[n],e)&&(t[n]=e,!0)}function Ci(t,n,e,i){const o=x();return Vt(o,Mr(),n)&&(Ie(),Di(ot(),o,t,n,e,i)),Ci}function Zc(t,n,e,i,o,r,s,l){const a=x(),c=Ie(),u=t+20,d=c.firstCreatePass?function(t,n,e,i,o,r,s,l,a){const c=n.consts,u=Hr(n,t,4,s||null,so(c,l));Ef(n,e,u,so(c,a)),Dc(n,u);const d=u.tViews=Gc(2,u,i,o,r,n.directiveRegistry,n.pipeRegistry,null,n.schemas,c);return null!==n.queries&&(n.queries.template(n,u),d.queries=n.queries.embeddedTView(u)),u}(u,c,a,n,e,i,o,r,s):c.data[u];pi(d,!1);const h=a[11].createComment("");Hc(c,a,h,d),Lt(h,a),qc(a,a[u]=Dy(h,a,h,d)),pc(d)&&xf(c,a,d),null!=s&&Ff(a,d,l)}function I(t,n=H.Default){const e=x();return null===e?R(t,n):$v(gt(),e,V(t),n)}function Ue(t,n,e){const i=x();return Vt(i,Mr(),n)&&wn(Ie(),ot(),i,t,n,i[11],e,!1),Ue}function Xf(t,n,e,i,o){const s=o?"class":"style";My(t,e,n.inputs[s],s,i)}function v(t,n,e,i){const o=x(),r=Ie(),s=20+t,l=o[11],a=o[s]=uf(l,n,K.lFrame.currentNamespace),c=r.firstCreatePass?function(t,n,e,i,o,r,s){const l=n.consts,c=Hr(n,t,2,o,so(l,r));return Ef(n,e,c,so(l,s)),null!==c.attrs&&Kc(c,c.attrs,!1),null!==c.mergedAttrs&&Kc(c,c.mergedAttrs,!0),null!==n.queries&&n.queries.elementStart(n,c),c}(s,r,o,0,n,e,i):r.data[s];pi(c,!0);const u=c.mergedAttrs;null!==u&&wc(l,a,u);const d=c.classes;null!==d&&gf(l,a,d);const h=c.styles;null!==h&&U0(l,a,h),64!=(64&c.flags)&&Hc(r,o,a,c),0===K.lFrame.elementDepthCount&&Lt(a,o),K.lFrame.elementDepthCount++,pc(c)&&(xf(r,o,c),function(t,n,e){if(Ih(n)){const o=n.directiveEnd;for(let r=n.directiveStart;r<o;r++){const s=t.data[r];s.contentQueries&&s.contentQueries(1,e[r],r)}}}(r,c,o)),null!==i&&Ff(o,c)}function y(){let t=gt();Eh()?K.lFrame.isParent=!1:(t=t.parent,pi(t,!1));const n=t;K.lFrame.elementDepthCount--;const e=Ie();e.firstCreatePass&&(Dc(e,t),Ih(t)&&e.queries.elementEnd(t)),null!=n.classesWithoutHost&&function(t){return 0!=(16&t.flags)}(n)&&Xf(e,n,x(),n.classesWithoutHost,!0),null!=n.stylesWithoutHost&&function(t){return 0!=(32&t.flags)}(n)&&Xf(e,n,x(),n.stylesWithoutHost,!1)}function Yo(t,n,e,i){v(t,n,e,i),y()}function Sl(t){return!!t&&"function"==typeof t.then}const Jc=function(t){return!!t&&"function"==typeof t.subscribe};function se(t,n,e,i){const o=x(),r=Ie(),s=gt();return function(t,n,e,i,o,r,s,l){const a=pc(i),u=t.firstCreatePass&&wy(t),d=n[8],h=Cy(n);let f=!0;if(3&i.type||l){const g=Bn(i,n),M=l?l(g):g,C=h.length,k=l?O=>l(ut(O[i.index])):i.index;if(it(e)){let O=null;if(!l&&a&&(O=function(t,n,e,i){const o=t.cleanup;if(null!=o)for(let r=0;r<o.length-1;r+=2){const s=o[r];if(s===e&&o[r+1]===i){const l=n[7],a=o[r+2];return l.length>a?l[a]:null}"string"==typeof s&&(r+=2)}return null}(t,n,o,i.index)),null!==O)(O.__ngLastListenerFn__||O).__ngNextListenerFn__=r,O.__ngLastListenerFn__=r,f=!1;else{r=Qf(i,n,d,r,!1);const Y=e.listen(M,o,r);h.push(r,Y),u&&u.push(o,k,C,C+1)}}else r=Qf(i,n,d,r,!0),M.addEventListener(o,r,s),h.push(r),u&&u.push(o,k,C,s)}else r=Qf(i,n,d,r,!1);const p=i.outputs;let m;if(f&&null!==p&&(m=p[o])){const g=m.length;if(g)for(let M=0;M<g;M+=2){const Ye=n[m[M]][m[M+1]].subscribe(r),qn=h.length;h.push(r,Ye),u&&u.push(o,i.index,qn,-(qn+1))}}}(r,o,o[11],s,t,n,!!e,i),se}function I1(t,n,e,i){try{return!1!==e(i)}catch(o){return Ny(t,o),!1}}function Qf(t,n,e,i,o){return function r(s){if(s===Function)return i;const l=2&t.flags?yn(t.index,n):n;0==(32&n[2])&&Tf(l);let a=I1(n,0,i,s),c=r.__ngNextListenerFn__;for(;c;)a=I1(n,0,c,s)&&a,c=c.__ngNextListenerFn__;return o&&!1===a&&(s.preventDefault(),s.returnValue=!1),a}}function S1(t,n,e,i,o){const r=t[e+1],s=null===n;let l=i?Yn(r):Bi(r),a=!1;for(;0!==l&&(!1===a||s);){const u=t[l+1];sk(t[l],n)&&(a=!0,t[l+1]=i?yf(u):bf(u)),l=i?Yn(u):Bi(u)}a&&(t[e+1]=i?bf(r):yf(r))}function sk(t,n){return null===t||null==n||(Array.isArray(t)?t[1]:t)===n||!(!Array.isArray(t)||"string"!=typeof n)&&Ar(t,n)>=0}function eu(t,n){return function(t,n,e,i){const o=x(),r=Ie(),s=function(t){const n=K.lFrame,e=n.bindingIndex;return n.bindingIndex=n.bindingIndex+t,e}(2);r.firstUpdatePass&&function(t,n,e,i){const o=t.data;if(null===o[e+1]){const r=o[Kt()],s=function(t,n){return n>=t.expandoStartIndex}(t,e);(function(t,n){return 0!=(t.flags&(n?16:32))})(r,i)&&null===n&&!s&&(n=!1),n=function(t,n,e,i){const o=function(t){const n=K.lFrame.currentDirectiveIndex;return-1===n?null:t[n]}(t);let r=i?n.residualClasses:n.residualStyles;if(null===o)0===(i?n.classBindings:n.styleBindings)&&(e=Tl(e=Yf(null,t,n,e,i),n.attrs,i),r=null);else{const s=n.directiveStylingLast;if(-1===s||t[s]!==o)if(e=Yf(o,t,n,e,i),null===r){let a=function(t,n,e){const i=e?n.classBindings:n.styleBindings;if(0!==Bi(i))return t[Yn(i)]}(t,n,i);void 0!==a&&Array.isArray(a)&&(a=Yf(null,t,n,a[1],i),a=Tl(a,n.attrs,i),function(t,n,e,i){t[Yn(e?n.classBindings:n.styleBindings)]=i}(t,n,i,a))}else r=function(t,n,e){let i;const o=n.directiveEnd;for(let r=1+n.directiveStylingLast;r<o;r++)i=Tl(i,t[r].hostAttrs,e);return Tl(i,n.attrs,e)}(t,n,i)}return void 0!==r&&(i?n.residualClasses=r:n.residualStyles=r),e}(o,r,n,i),function(t,n,e,i,o,r){let s=r?n.classBindings:n.styleBindings,l=Yn(s),a=Bi(s);t[i]=e;let u,c=!1;if(Array.isArray(e)){const d=e;u=d[1],(null===u||Ar(d,u)>0)&&(c=!0)}else u=e;if(o)if(0!==a){const h=Yn(t[l+1]);t[i+1]=zc(h,l),0!==h&&(t[h+1]=vf(t[h+1],i)),t[l+1]=function(t,n){return 131071&t|n<<17}(t[l+1],i)}else t[i+1]=zc(l,0),0!==l&&(t[l+1]=vf(t[l+1],i)),l=i;else t[i+1]=zc(a,0),0===l?l=i:t[a+1]=vf(t[a+1],i),a=i;c&&(t[i+1]=bf(t[i+1])),S1(t,u,i,!0),S1(t,u,i,!1),function(t,n,e,i,o){const r=o?t.residualClasses:t.residualStyles;null!=r&&"string"==typeof n&&Ar(r,n)>=0&&(e[i+1]=yf(e[i+1]))}(n,u,t,i,r),s=zc(l,a),r?n.classBindings=s:n.styleBindings=s}(o,r,n,e,s,i)}}(r,t,s,i),n!==Q&&Vt(o,s,n)&&function(t,n,e,i,o,r,s,l){if(!(3&n.type))return;const a=t.data,c=a[l+1];tu(function(t){return 1==(1&t)}(c)?z1(a,n,e,o,Bi(c),s):void 0)||(tu(r)||function(t){return 2==(2&t)}(c)&&(r=z1(a,null,e,o,l,s)),function(t,n,e,i,o){const r=it(t);if(n)o?r?t.addClass(e,i):e.classList.add(i):r?t.removeClass(e,i):e.classList.remove(i);else{let s=-1===i.indexOf("-")?void 0:Cn.DashCase;if(null==o)r?t.removeStyle(e,i,s):e.style.removeProperty(i);else{const l="string"==typeof o&&o.endsWith("!important");l&&(o=o.slice(0,-10),s|=Cn.Important),r?t.setStyle(e,i,o,s):e.style.setProperty(i,o,l?"important":"")}}}(i,s,mc(Kt(),e),o,r))}(r,r.data[Kt()],o,o[11],t,o[s+1]=function(t,n){return null==t||("string"==typeof n?t+=n:"object"==typeof t&&(t=ue(In(t)))),t}(n,e),i,s)}(t,n,null,!0),eu}function Yf(t,n,e,i,o){let r=null;const s=e.directiveEnd;let l=e.directiveStylingLast;for(-1===l?l=e.directiveStart:l++;l<s&&(r=n[l],i=Tl(i,r.hostAttrs,o),r!==t);)l++;return null!==t&&(e.directiveStylingLast=l),i}function Tl(t,n,e){const i=e?1:2;let o=-1;if(null!==n)for(let r=0;r<n.length;r++){const s=n[r];"number"==typeof s?o=s:o===i&&(Array.isArray(t)||(t=void 0===t?[]:["",t]),Dn(t,s,!!e||n[++r]))}return void 0===t?null:t}function z1(t,n,e,i,o,r){const s=null===n;let l;for(;o>0;){const a=t[o],c=Array.isArray(a),u=c?a[1]:a,d=null===u;let h=e[o+1];h===Q&&(h=d?Oe:void 0);let f=d?jh(h,i):u===i?h:void 0;if(c&&!tu(f)&&(f=jh(a,i)),tu(f)&&(l=f,s))return l;const p=t[o+1];o=s?Yn(p):Bi(p)}if(null!==n){let a=r?n.residualClasses:n.residualStyles;null!=a&&(l=jh(a,i))}return l}function tu(t){return void 0!==t}function N(t,n=""){const e=x(),i=Ie(),o=t+20,r=i.firstCreatePass?Hr(i,o,1,n,null):i.data[o],s=e[o]=function(t,n){return it(t)?t.createText(n):t.createTextNode(n)}(e[11],n);Hc(i,e,s,r),pi(r,!1)}function Al(t){return nu("",t,""),Al}function nu(t,n,e){const i=x(),o=function(t,n,e,i){return Vt(t,Mr(),e)?n+J(e)+i:Q}(i,t,n,e);return o!==Q&&Li(i,Kt(),o),nu}function Jf(t,n,e){const i=x();return Vt(i,Mr(),n)&&wn(Ie(),ot(),i,t,n,i[11],e,!0),Jf}const Jo=void 0;var Hk=["en",[["a","p"],["AM","PM"],Jo],[["AM","PM"],Jo,Jo],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],Jo,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],Jo,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",Jo,"{1} 'at' {0}",Jo],[".",",",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0%","\xa4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",function(t){const n=Math.floor(Math.abs(t)),e=t.toString().replace(/^[^.]*\.?/,"").length;return 1===n&&0===e?1:5}];let rs={};function uD(t){return t in rs||(rs[t]=ke.ng&&ke.ng.common&&ke.ng.common.locales&&ke.ng.common.locales[t]),rs[t]}var A=(()=>((A=A||{})[A.LocaleId=0]="LocaleId",A[A.DayPeriodsFormat=1]="DayPeriodsFormat",A[A.DayPeriodsStandalone=2]="DayPeriodsStandalone",A[A.DaysFormat=3]="DaysFormat",A[A.DaysStandalone=4]="DaysStandalone",A[A.MonthsFormat=5]="MonthsFormat",A[A.MonthsStandalone=6]="MonthsStandalone",A[A.Eras=7]="Eras",A[A.FirstDayOfWeek=8]="FirstDayOfWeek",A[A.WeekendRange=9]="WeekendRange",A[A.DateFormat=10]="DateFormat",A[A.TimeFormat=11]="TimeFormat",A[A.DateTimeFormat=12]="DateTimeFormat",A[A.NumberSymbols=13]="NumberSymbols",A[A.NumberFormats=14]="NumberFormats",A[A.CurrencyCode=15]="CurrencyCode",A[A.CurrencySymbol=16]="CurrencySymbol",A[A.CurrencyName=17]="CurrencyName",A[A.Currencies=18]="Currencies",A[A.Directionality=19]="Directionality",A[A.PluralCase=20]="PluralCase",A[A.ExtraData=21]="ExtraData",A))();const iu="en-US";let dD=iu;function ep(t){bn(t,"Expected localeId to be defined"),"string"==typeof t&&(dD=t.toLowerCase().replace(/_/g,"-"))}function ip(t,n,e,i,o){if(t=V(t),Array.isArray(t))for(let r=0;r<t.length;r++)ip(t[r],n,e,i,o);else{const r=Ie(),s=x();let l=Gr(t)?t:V(t.provide),a=ky(t);const c=gt(),u=1048575&c.providerIndexes,d=c.directiveStart,h=c.providerIndexes>>20;if(Gr(t)||!t.multi){const f=new sl(a,o,I),p=rp(l,n,o?u:u+h,d);-1===p?(xc(al(c,s),r,l),op(r,t,n.length),n.push(l),c.directiveStart++,c.directiveEnd++,o&&(c.providerIndexes+=1048576),e.push(f),s.push(f)):(e[p]=f,s[p]=f)}else{const f=rp(l,n,u+h,d),p=rp(l,n,u,u+h),m=f>=0&&e[f],g=p>=0&&e[p];if(o&&!g||!o&&!m){xc(al(c,s),r,l);const M=function(t,n,e,i,o){const r=new sl(t,e,I);return r.multi=[],r.index=n,r.componentProviders=0,PD(r,o,i&&!e),r}(o?LS:OS,e.length,o,i,a);!o&&g&&(e[p].providerFactory=M),op(r,t,n.length,0),n.push(l),c.directiveStart++,c.directiveEnd++,o&&(c.providerIndexes+=1048576),e.push(M),s.push(M)}else op(r,t,f>-1?f:p,PD(e[o?p:f],a,!o&&i));!o&&i&&g&&e[p].componentProviders++}}}function op(t,n,e,i){const o=Gr(n);if(o||function(t){return!!t.useClass}(n)){const s=(n.useClass||n).prototype.ngOnDestroy;if(s){const l=t.destroyHooks||(t.destroyHooks=[]);if(!o&&n.multi){const a=l.indexOf(e);-1===a?l.push(e,[i,s]):l[a+1].push(i,s)}else l.push(e,s)}}}function PD(t,n,e){return e&&t.componentProviders++,t.multi.push(n)-1}function rp(t,n,e,i){for(let o=e;o<i;o++)if(n[o]===t)return o;return-1}function OS(t,n,e,i){return sp(this.multi,[])}function LS(t,n,e,i){const o=this.multi;let r;if(this.providerFactory){const s=this.providerFactory.componentProviders,l=cl(e,e[1],this.providerFactory.index,i);r=l.slice(0,s),sp(o,r);for(let a=s;a<l.length;a++)r.push(l[a])}else r=[],sp(o,r);return r}function sp(t,n){for(let e=0;e<t.length;e++)n.push((0,t[e])());return n}function Re(t,n=[]){return e=>{e.providersResolver=(i,o)=>function(t,n,e){const i=Ie();if(i.firstCreatePass){const o=Qn(t);ip(e,i.data,i.blueprint,o,!0),ip(n,i.data,i.blueprint,o,!1)}}(i,o?o(t):t,n)}}class BD{}const LD="ngComponent";class HS{resolveComponentFactory(n){throw function(t){const n=Error(`No component factory found for ${ue(t)}. Did you add it to @NgModule.entryComponents?`);return n[LD]=t,n}(n)}}class po{}function au(...t){}function ls(t,n){return new U(Bn(t,n))}po.NULL=new HS;const US=function(){return ls(gt(),x())};let U=(()=>{class t{constructor(e){this.nativeElement=e}}return t.__NG_ELEMENT_ID__=US,t})();function VD(t){return t instanceof U?t.nativeElement:t}class cu{}let de=(()=>{class t{}return t.__NG_ELEMENT_ID__=()=>GS(),t})();const GS=function(){const t=x(),e=yn(gt().index,t);return function(t){return t[11]}(fi(e)?e:t)};let ap=(()=>{class t{}return t.\u0275prov=ie({token:t,providedIn:"root",factory:()=>null}),t})();class Ll{constructor(n){this.full=n,this.major=n.split(".")[0],this.minor=n.split(".")[1],this.patch=n.split(".").slice(2).join(".")}}const $D=new Ll("12.2.5");class HD{constructor(){}supports(n){return El(n)}create(n){return new QS(n)}}const XS=(t,n)=>n;class QS{constructor(n){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=n||XS}forEachItem(n){let e;for(e=this._itHead;null!==e;e=e._next)n(e)}forEachOperation(n){let e=this._itHead,i=this._removalsHead,o=0,r=null;for(;e||i;){const s=!i||e&&e.currentIndex<zD(i,o,r)?e:i,l=zD(s,o,r),a=s.currentIndex;if(s===i)o--,i=i._nextRemoved;else if(e=e._next,null==s.previousIndex)o++;else{r||(r=[]);const c=l-o,u=a-o;if(c!=u){for(let h=0;h<c;h++){const f=h<r.length?r[h]:r[h]=0,p=f+h;u<=p&&p<c&&(r[h]=f+1)}r[s.previousIndex]=u-c}}l!==a&&n(s,l,a)}}forEachPreviousItem(n){let e;for(e=this._previousItHead;null!==e;e=e._nextPrevious)n(e)}forEachAddedItem(n){let e;for(e=this._additionsHead;null!==e;e=e._nextAdded)n(e)}forEachMovedItem(n){let e;for(e=this._movesHead;null!==e;e=e._nextMoved)n(e)}forEachRemovedItem(n){let e;for(e=this._removalsHead;null!==e;e=e._nextRemoved)n(e)}forEachIdentityChange(n){let e;for(e=this._identityChangesHead;null!==e;e=e._nextIdentityChange)n(e)}diff(n){if(null==n&&(n=[]),!El(n))throw new Error(`Error trying to diff '${ue(n)}'. Only arrays and iterables are allowed`);return this.check(n)?this:null}onDestroy(){}check(n){this._reset();let o,r,s,e=this._itHead,i=!1;if(Array.isArray(n)){this.length=n.length;for(let l=0;l<this.length;l++)r=n[l],s=this._trackByFn(l,r),null!==e&&Object.is(e.trackById,s)?(i&&(e=this._verifyReinsertion(e,r,s,l)),Object.is(e.item,r)||this._addIdentityChange(e,r)):(e=this._mismatch(e,r,s,l),i=!0),e=e._next}else o=0,function(t,n){if(Array.isArray(t))for(let e=0;e<t.length;e++)n(t[e]);else{const e=t[qr()]();let i;for(;!(i=e.next()).done;)n(i.value)}}(n,l=>{s=this._trackByFn(o,l),null!==e&&Object.is(e.trackById,s)?(i&&(e=this._verifyReinsertion(e,l,s,o)),Object.is(e.item,l)||this._addIdentityChange(e,l)):(e=this._mismatch(e,l,s,o),i=!0),e=e._next,o++}),this.length=o;return this._truncate(e),this.collection=n,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let n;for(n=this._previousItHead=this._itHead;null!==n;n=n._next)n._nextPrevious=n._next;for(n=this._additionsHead;null!==n;n=n._nextAdded)n.previousIndex=n.currentIndex;for(this._additionsHead=this._additionsTail=null,n=this._movesHead;null!==n;n=n._nextMoved)n.previousIndex=n.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(n,e,i,o){let r;return null===n?r=this._itTail:(r=n._prev,this._remove(n)),null!==(n=null===this._unlinkedRecords?null:this._unlinkedRecords.get(i,null))?(Object.is(n.item,e)||this._addIdentityChange(n,e),this._reinsertAfter(n,r,o)):null!==(n=null===this._linkedRecords?null:this._linkedRecords.get(i,o))?(Object.is(n.item,e)||this._addIdentityChange(n,e),this._moveAfter(n,r,o)):n=this._addAfter(new ZS(e,i),r,o),n}_verifyReinsertion(n,e,i,o){let r=null===this._unlinkedRecords?null:this._unlinkedRecords.get(i,null);return null!==r?n=this._reinsertAfter(r,n._prev,o):n.currentIndex!=o&&(n.currentIndex=o,this._addToMoves(n,o)),n}_truncate(n){for(;null!==n;){const e=n._next;this._addToRemovals(this._unlink(n)),n=e}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(n,e,i){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(n);const o=n._prevRemoved,r=n._nextRemoved;return null===o?this._removalsHead=r:o._nextRemoved=r,null===r?this._removalsTail=o:r._prevRemoved=o,this._insertAfter(n,e,i),this._addToMoves(n,i),n}_moveAfter(n,e,i){return this._unlink(n),this._insertAfter(n,e,i),this._addToMoves(n,i),n}_addAfter(n,e,i){return this._insertAfter(n,e,i),this._additionsTail=null===this._additionsTail?this._additionsHead=n:this._additionsTail._nextAdded=n,n}_insertAfter(n,e,i){const o=null===e?this._itHead:e._next;return n._next=o,n._prev=e,null===o?this._itTail=n:o._prev=n,null===e?this._itHead=n:e._next=n,null===this._linkedRecords&&(this._linkedRecords=new jD),this._linkedRecords.put(n),n.currentIndex=i,n}_remove(n){return this._addToRemovals(this._unlink(n))}_unlink(n){null!==this._linkedRecords&&this._linkedRecords.remove(n);const e=n._prev,i=n._next;return null===e?this._itHead=i:e._next=i,null===i?this._itTail=e:i._prev=e,n}_addToMoves(n,e){return n.previousIndex===e||(this._movesTail=null===this._movesTail?this._movesHead=n:this._movesTail._nextMoved=n),n}_addToRemovals(n){return null===this._unlinkedRecords&&(this._unlinkedRecords=new jD),this._unlinkedRecords.put(n),n.currentIndex=null,n._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=n,n._prevRemoved=null):(n._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=n),n}_addIdentityChange(n,e){return n.item=e,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=n:this._identityChangesTail._nextIdentityChange=n,n}}class ZS{constructor(n,e){this.item=n,this.trackById=e,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class YS{constructor(){this._head=null,this._tail=null}add(n){null===this._head?(this._head=this._tail=n,n._nextDup=null,n._prevDup=null):(this._tail._nextDup=n,n._prevDup=this._tail,n._nextDup=null,this._tail=n)}get(n,e){let i;for(i=this._head;null!==i;i=i._nextDup)if((null===e||e<=i.currentIndex)&&Object.is(i.trackById,n))return i;return null}remove(n){const e=n._prevDup,i=n._nextDup;return null===e?this._head=i:e._nextDup=i,null===i?this._tail=e:i._prevDup=e,null===this._head}}class jD{constructor(){this.map=new Map}put(n){const e=n.trackById;let i=this.map.get(e);i||(i=new YS,this.map.set(e,i)),i.add(n)}get(n,e){const o=this.map.get(n);return o?o.get(n,e):null}remove(n){const e=n.trackById;return this.map.get(e).remove(n)&&this.map.delete(e),n}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function zD(t,n,e){const i=t.previousIndex;if(null===i)return i;let o=0;return e&&i<e.length&&(o=e[i]),i+n+o}class UD{constructor(){}supports(n){return n instanceof Map||Uf(n)}create(){return new JS}}class JS{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(n){let e;for(e=this._mapHead;null!==e;e=e._next)n(e)}forEachPreviousItem(n){let e;for(e=this._previousMapHead;null!==e;e=e._nextPrevious)n(e)}forEachChangedItem(n){let e;for(e=this._changesHead;null!==e;e=e._nextChanged)n(e)}forEachAddedItem(n){let e;for(e=this._additionsHead;null!==e;e=e._nextAdded)n(e)}forEachRemovedItem(n){let e;for(e=this._removalsHead;null!==e;e=e._nextRemoved)n(e)}diff(n){if(n){if(!(n instanceof Map||Uf(n)))throw new Error(`Error trying to diff '${ue(n)}'. Only maps and objects are allowed`)}else n=new Map;return this.check(n)?this:null}onDestroy(){}check(n){this._reset();let e=this._mapHead;if(this._appendAfter=null,this._forEach(n,(i,o)=>{if(e&&e.key===o)this._maybeAddToChanges(e,i),this._appendAfter=e,e=e._next;else{const r=this._getOrCreateRecordForKey(o,i);e=this._insertBeforeOrAppend(e,r)}}),e){e._prev&&(e._prev._next=null),this._removalsHead=e;for(let i=e;null!==i;i=i._nextRemoved)i===this._mapHead&&(this._mapHead=null),this._records.delete(i.key),i._nextRemoved=i._next,i.previousValue=i.currentValue,i.currentValue=null,i._prev=null,i._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(n,e){if(n){const i=n._prev;return e._next=n,e._prev=i,n._prev=e,i&&(i._next=e),n===this._mapHead&&(this._mapHead=e),this._appendAfter=n,n}return this._appendAfter?(this._appendAfter._next=e,e._prev=this._appendAfter):this._mapHead=e,this._appendAfter=e,null}_getOrCreateRecordForKey(n,e){if(this._records.has(n)){const o=this._records.get(n);this._maybeAddToChanges(o,e);const r=o._prev,s=o._next;return r&&(r._next=s),s&&(s._prev=r),o._next=null,o._prev=null,o}const i=new eT(n);return this._records.set(n,i),i.currentValue=e,this._addToAdditions(i),i}_reset(){if(this.isDirty){let n;for(this._previousMapHead=this._mapHead,n=this._previousMapHead;null!==n;n=n._next)n._nextPrevious=n._next;for(n=this._changesHead;null!==n;n=n._nextChanged)n.previousValue=n.currentValue;for(n=this._additionsHead;null!=n;n=n._nextAdded)n.previousValue=n.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(n,e){Object.is(e,n.currentValue)||(n.previousValue=n.currentValue,n.currentValue=e,this._addToChanges(n))}_addToAdditions(n){null===this._additionsHead?this._additionsHead=this._additionsTail=n:(this._additionsTail._nextAdded=n,this._additionsTail=n)}_addToChanges(n){null===this._changesHead?this._changesHead=this._changesTail=n:(this._changesTail._nextChanged=n,this._changesTail=n)}_forEach(n,e){n instanceof Map?n.forEach(e):Object.keys(n).forEach(i=>e(n[i],i))}}class eT{constructor(n){this.key=n,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}function WD(){return new Vl([new HD])}let Vl=(()=>{class t{constructor(e){this.factories=e}static create(e,i){if(null!=i){const o=i.factories.slice();e=e.concat(o)}return new t(e)}static extend(e){return{provide:t,useFactory:i=>t.create(e,i||WD()),deps:[[t,new uo,new un]]}}find(e){const i=this.factories.find(o=>o.supports(e));if(null!=i)return i;throw new Error(`Cannot find a differ supporting object '${e}' of type '${function(t){return t.name||typeof t}(e)}'`)}}return t.\u0275prov=ie({token:t,providedIn:"root",factory:WD}),t})();function GD(){return new as([new UD])}let as=(()=>{class t{constructor(e){this.factories=e}static create(e,i){if(i){const o=i.factories.slice();e=e.concat(o)}return new t(e)}static extend(e){return{provide:t,useFactory:i=>t.create(e,i||GD()),deps:[[t,new uo,new un]]}}find(e){const i=this.factories.find(o=>o.supports(e));if(i)return i;throw new Error(`Cannot find a differ supporting object '${e}'`)}}return t.\u0275prov=ie({token:t,providedIn:"root",factory:GD}),t})();function uu(t,n,e,i,o=!1){for(;null!==e;){const r=n[e.index];if(null!==r&&i.push(ut(r)),Xn(r))for(let l=10;l<r.length;l++){const a=r[l],c=a[1].firstChild;null!==c&&uu(a[1],a,c,i)}const s=e.type;if(8&s)uu(t,n,e.child,i);else if(32&s){const l=sf(e,n);let a;for(;a=l();)i.push(a)}else if(16&s){const l=H0(n,e);if(Array.isArray(l))i.push(...l);else{const a=Cl(n[16]);uu(a[1],a,l,i,!0)}}e=o?e.projectionNext:e.next}return i}class $l{constructor(n,e){this._lView=n,this._cdRefInjectingView=e,this._appRef=null,this._attachedToViewContainer=!1}get rootNodes(){const n=this._lView,e=n[1];return uu(e,n,e.firstChild,[])}get context(){return this._lView[8]}set context(n){this._lView[8]=n}get destroyed(){return 256==(256&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const n=this._lView[3];if(Xn(n)){const e=n[8],i=e?e.indexOf(this):-1;i>-1&&(df(n,i),Go(e,i))}this._attachedToViewContainer=!1}T0(this._lView[1],this._lView)}onDestroy(n){hy(this._lView[1],this._lView,null,n)}markForCheck(){Tf(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-129}reattach(){this._lView[2]|=128}detectChanges(){Rf(this._lView[1],this._lView,this.context)}checkNoChanges(){!function(t,n,e){bc(!0);try{Rf(t,n,e)}finally{bc(!1)}}(this._lView[1],this._lView,this.context)}attachToViewContainerRef(){if(this._appRef)throw new Error("This view is already attached directly to the ApplicationRef!");this._attachedToViewContainer=!0}detachFromAppRef(){var n;this._appRef=null,wl(this._lView[1],n=this._lView,n[11],2,null,null)}attachToAppRef(n){if(this._attachedToViewContainer)throw new Error("This view is already attached to a ViewContainer!");this._appRef=n}}class nT extends $l{constructor(n){super(n),this._view=n}detectChanges(){Iy(this._view)}checkNoChanges(){!function(t){bc(!0);try{Iy(t)}finally{bc(!1)}}(this._view)}get context(){return null}}const oT=function(t){return function(t,n,e){if(fc(t)&&!e){const i=yn(t.index,n);return new $l(i,i)}return 47&t.type?new $l(n[16],n):null}(gt(),x(),16==(16&t))};let du=(()=>{class t{}return t.__NG_ELEMENT_ID__=oT,t})();const lT=[new UD],cT=new Vl([new HD]),uT=new as(lT),hT=function(){return hu(gt(),x())};let $i=(()=>{class t{}return t.__NG_ELEMENT_ID__=hT,t})();const fT=$i,pT=class extends fT{constructor(n,e,i){super(),this._declarationLView=n,this._declarationTContainer=e,this.elementRef=i}createEmbeddedView(n){const e=this._declarationTContainer.tViews,i=_l(this._declarationLView,e,n,16,null,e.declTNode,null,null,null,null);i[17]=this._declarationLView[this._declarationTContainer.index];const r=this._declarationLView[19];return null!==r&&(i[19]=r.createEmbeddedView(e)),Nl(e,i,n),new $l(i)}};function hu(t,n){return 4&t.type?new pT(n,t,ls(t,n)):null}class Ni{}class qD{}const bT=function(){return QD(gt(),x())};let ii=(()=>{class t{}return t.__NG_ELEMENT_ID__=bT,t})();const yT=ii,KD=class extends yT{constructor(n,e,i){super(),this._lContainer=n,this._hostTNode=e,this._hostLView=i}get element(){return ls(this._hostTNode,this._hostLView)}get injector(){return new Er(this._hostTNode,this._hostLView)}get parentInjector(){const n=Mc(this._hostTNode,this._hostLView);if(Pv(n)){const e=Fr(n,this._hostLView),i=xr(n);return new Er(e[1].data[i+8],e)}return new Er(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){const e=XD(this._lContainer);return null!==e&&e[n]||null}get length(){return this._lContainer.length-10}createEmbeddedView(n,e,i){const o=n.createEmbeddedView(e||{});return this.insert(o,i),o}createComponent(n,e,i,o,r){const s=i||this.parentInjector;if(!r&&null==n.ngModule&&s){const a=s.get(Ni,null);a&&(r=a)}const l=n.create(s,o,void 0,r);return this.insert(l.hostView,e),l}insert(n,e){const i=n._lView,o=i[1];if(Xn(i[3])){const u=this.indexOf(n);if(-1!==u)this.detach(u);else{const d=i[3],h=new KD(d,d[6],d[3]);h.detach(h.indexOf(n))}}const r=this._adjustIndex(e),s=this._lContainer;!function(t,n,e,i){const o=10+i,r=e.length;i>0&&(e[o-1][4]=n),i<r-10?(n[4]=e[o],Sc(e,10+i,n)):(e.push(n),n[4]=null),n[3]=e;const s=n[17];null!==s&&e!==s&&function(t,n){const e=t[9];n[16]!==n[3][3][16]&&(t[2]=!0),null===e?t[9]=[n]:e.push(n)}(s,n);const l=n[19];null!==l&&l.insertView(t),n[2]|=128}(o,i,s,r);const l=pf(r,s),a=i[11],c=$c(a,s[7]);return null!==c&&function(t,n,e,i,o,r){i[0]=o,i[6]=n,wl(t,i,e,1,o,r)}(o,s[6],a,i,c,l),n.attachToViewContainerRef(),Sc(cp(s),r,n),n}move(n,e){return this.insert(n,e)}indexOf(n){const e=XD(this._lContainer);return null!==e?e.indexOf(n):-1}remove(n){const e=this._adjustIndex(n,-1),i=df(this._lContainer,e);i&&(Go(cp(this._lContainer),e),T0(i[1],i))}detach(n){const e=this._adjustIndex(n,-1),i=df(this._lContainer,e);return i&&null!=Go(cp(this._lContainer),e)?new $l(i):null}_adjustIndex(n,e=0){return null==n?this.length+e:n}};function XD(t){return t[8]}function cp(t){return t[8]||(t[8]=[])}function QD(t,n){let e;const i=n[t.index];if(Xn(i))e=i;else{let o;if(8&t.type)o=ut(i);else{const r=n[11];o=r.createComment("");const s=Bn(t,n);Qo(r,$c(r,s),o,function(t,n){return it(t)?t.nextSibling(n):n.nextSibling}(r,s),!1)}n[t.index]=e=Dy(i,n,o,t),qc(n,e)}return new KD(e,t,n)}const hs={};class gI extends po{constructor(n){super(),this.ngModule=n}resolveComponentFactory(n){const e=Gt(n);return new vI(e,this.ngModule)}}function bI(t){const n=[];for(let e in t)t.hasOwnProperty(e)&&n.push({propName:t[e],templateName:e});return n}const mA=new ge("SCHEDULER_TOKEN",{providedIn:"root",factory:()=>_0});class vI extends BD{constructor(n,e){super(),this.componentDef=n,this.ngModule=e,this.componentType=n.type,this.selector=n.selectors.map(i3).join(","),this.ngContentSelectors=n.ngContentSelectors?n.ngContentSelectors:[],this.isBoundToModule=!!e}get inputs(){return bI(this.componentDef.inputs)}get outputs(){return bI(this.componentDef.outputs)}create(n,e,i,o){const r=(o=o||this.ngModule)?function(t,n){return{get:(e,i,o)=>{const r=t.get(e,hs,o);return r!==hs||i===hs?r:n.get(e,i,o)}}}(n,o.injector):n,s=r.get(cu,yv),l=r.get(ap,null),a=s.createRenderer(null,this.componentDef),c=this.componentDef.selectors[0][0]||"div",u=i?function(t,n,e){if(it(t))return t.selectRootElement(n,e===mt.ShadowDom);let i="string"==typeof n?t.querySelector(n):n;return i.textContent="",i}(a,i,this.componentDef.encapsulation):uf(s.createRenderer(null,this.componentDef),c,function(t){const n=t.toLowerCase();return"svg"===n?"http://www.w3.org/2000/svg":"math"===n?"http://www.w3.org/1998/MathML/":null}(c)),d=this.componentDef.onPush?576:528,h=function(t,n){return{components:[],scheduler:t||_0,clean:H3,playerHandler:n||null,flags:0}}(),f=Gc(0,null,null,1,0,null,null,null,null,null),p=_l(null,f,h,d,null,null,s,a,l,r);let m,g;vc(p);try{const M=function(t,n,e,i,o,r){const s=e[1];e[20]=t;const a=Hr(s,20,2,"#host",null),c=a.mergedAttrs=n.hostAttrs;null!==c&&(Kc(a,c,!0),null!==t&&(wc(o,t,c),null!==a.classes&&gf(o,t,a.classes),null!==a.styles&&U0(o,t,a.styles)));const u=i.createRenderer(t,n),d=_l(e,cy(n),null,n.onPush?64:16,e[20],a,i,u,r||null,null);return s.firstCreatePass&&(xc(al(a,e),s,n.type),by(s,a),vy(a,e.length,1)),qc(e,d),e[20]=d}(u,this.componentDef,p,s,a);if(u)if(i)wc(a,u,["ng-version",$D.full]);else{const{attrs:C,classes:k}=function(t){const n=[],e=[];let i=1,o=2;for(;i<t.length;){let r=t[i];if("string"==typeof r)2===o?""!==r&&n.push(r,t[++i]):8===o&&e.push(r);else{if(!Zn(o))break;o=r}i++}return{attrs:n,classes:e}}(this.componentDef.selectors[0]);C&&wc(a,u,C),k&&k.length>0&&gf(a,u,k.join(" "))}if(g=Mh(f,20),void 0!==e){const C=g.projection=[];for(let k=0;k<this.ngContentSelectors.length;k++){const O=e[k];C.push(null!=O?Array.from(O):null)}}m=function(t,n,e,i,o){const r=e[1],s=function(t,n,e){const i=gt();t.firstCreatePass&&(e.providersResolver&&e.providersResolver(e),yy(t,i,n,jr(t,n,1,null),e));const o=cl(n,t,i.directiveStart,i);Lt(o,n);const r=Bn(i,n);return r&&Lt(r,n),o}(r,e,n);if(i.components.push(s),t[8]=s,o&&o.forEach(a=>a(s,n)),n.contentQueries){const a=gt();n.contentQueries(1,s,a.directiveStart)}const l=gt();return!r.firstCreatePass||null===n.hostBindings&&null===n.hostAttrs||(lo(l.index),my(e[1],l,0,l.directiveStart,l.directiveEnd,n),gy(n,s)),s}(M,this.componentDef,p,h,[f6]),Nl(f,p,null)}finally{yc()}return new vA(this.componentType,m,ls(g,p),p,g)}}class vA extends class{}{constructor(n,e,i,o,r){super(),this.location=i,this._rootLView=o,this._tNode=r,this.instance=e,this.hostView=this.changeDetectorRef=new nT(o),this.componentType=n}get injector(){return new Er(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}}const fs=new Map;class IA extends Ni{constructor(n,e){super(),this._parent=e,this._bootstrapComponents=[],this.injector=this,this.destroyCbs=[],this.componentFactoryResolver=new gI(this);const i=An(n),o=n[vx]||null;o&&ep(o),this._bootstrapComponents=yi(i.bootstrap),this._r3Injector=Ey(n,e,[{provide:Ni,useValue:this},{provide:po,useValue:this.componentFactoryResolver}],ue(n)),this._r3Injector._resolveInjectorDefTypes(),this.instance=this.get(n)}get(n,e=ye.THROW_IF_NOT_FOUND,i=H.Default){return n===ye||n===Ni||n===Ur?this:this._r3Injector.get(n,e,i)}destroy(){const n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}}class Cp extends qD{constructor(n){super(),this.moduleType=n,null!==An(n)&&function(t){const n=new Set;!function e(i){const o=An(i,!0),r=o.id;null!==r&&(function(t,n,e){if(n&&n!==e)throw new Error(`Duplicate module registered for ${t} - ${ue(n)} vs ${ue(n.name)}`)}(r,fs.get(r),i),fs.set(r,i));const s=yi(o.imports);for(const l of s)n.has(l)||(n.add(l),e(l))}(t)}(n)}create(n){return new IA(this.moduleType,n)}}function wp(t){return n=>{setTimeout(t,void 0,n)}}const et=class extends ki{constructor(n=!1){super(),this.__isAsync=n}emit(n){super.next(n)}subscribe(n,e,i){var o,r,s;let l=n,a=e||(()=>null),c=i;if(n&&"object"==typeof n){const d=n;l=null===(o=d.next)||void 0===o?void 0:o.bind(d),a=null===(r=d.error)||void 0===r?void 0:r.bind(d),c=null===(s=d.complete)||void 0===s?void 0:s.bind(d)}this.__isAsync&&(a=wp(a),l&&(l=wp(l)),c&&(c=wp(c)));const u=super.subscribe({next:l,error:a,complete:c});return n instanceof Ei&&n.add(u),u}};function $A(){return this._results[qr()]()}class bu{constructor(n=!1){this._emitDistinctChangesOnly=n,this.dirty=!0,this._results=[],this._changesDetected=!1,this._changes=null,this.length=0,this.first=void 0,this.last=void 0;const e=qr(),i=bu.prototype;i[e]||(i[e]=$A)}get changes(){return this._changes||(this._changes=new et)}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,e){return this._results.reduce(n,e)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,e){const i=this;i.dirty=!1;const o=On(n);(this._changesDetected=!function(t,n,e){if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++){let o=t[i],r=n[i];if(e&&(o=e(o),r=e(r)),r!==o)return!1}return!0}(i._results,o,e))&&(i._results=o,i.length=o.length,i.last=o[this.length-1],i.first=o[0])}notifyOnChanges(){this._changes&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}setDirty(){this.dirty=!0}destroy(){this.changes.complete(),this.changes.unsubscribe()}}Symbol;class _p{constructor(n){this.queryList=n,this.matches=null}clone(){return new _p(this.queryList)}setDirty(){this.queryList.setDirty()}}class Np{constructor(n=[]){this.queries=n}createEmbeddedView(n){const e=n.queries;if(null!==e){const i=null!==n.contentQueries?n.contentQueries[0]:e.length,o=[];for(let r=0;r<i;r++){const s=e.getByIndex(r);o.push(this.queries[s.indexInDeclarationView].clone())}return new Np(o)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let e=0;e<this.queries.length;e++)null!==kI(n,e).matches&&this.queries[e].setDirty()}}class MI{constructor(n,e,i=null){this.predicate=n,this.flags=e,this.read=i}}class Mp{constructor(n=[]){this.queries=n}elementStart(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(n,e)}elementEnd(n){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(n)}embeddedTView(n){let e=null;for(let i=0;i<this.length;i++){const o=null!==e?e.length:0,r=this.getByIndex(i).embeddedTView(n,o);r&&(r.indexInDeclarationView=i,null!==e?e.push(r):e=[r])}return null!==e?new Mp(e):null}template(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].template(n,e)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}}class xp{constructor(n,e=-1){this.metadata=n,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=e}elementStart(n,e){this.isApplyingToNode(e)&&this.matchTNode(n,e)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,e){this.elementStart(n,e)}embeddedTView(n,e){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,e),new xp(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&1!=(1&this.metadata.flags)){const e=this._declarationNodeIndex;let i=n.parent;for(;null!==i&&8&i.type&&i.index!==e;)i=i.parent;return e===(null!==i?i.index:-1)}return this._appliesToNextNode}matchTNode(n,e){const i=this.metadata.predicate;if(Array.isArray(i))for(let o=0;o<i.length;o++){const r=i[o];this.matchTNodeWithReadOption(n,e,zA(e,r)),this.matchTNodeWithReadOption(n,e,Fc(e,n,r,!1,!1))}else i===$i?4&e.type&&this.matchTNodeWithReadOption(n,e,-1):this.matchTNodeWithReadOption(n,e,Fc(e,n,i,!1,!1))}matchTNodeWithReadOption(n,e,i){if(null!==i){const o=this.metadata.read;if(null!==o)if(o===U||o===ii||o===$i&&4&e.type)this.addMatch(e.index,-2);else{const r=Fc(e,n,o,!1,!1);null!==r&&this.addMatch(e.index,r)}else this.addMatch(e.index,i)}}addMatch(n,e){null===this.matches?this.matches=[n,e]:this.matches.push(n,e)}}function zA(t,n){const e=t.localNames;if(null!==e)for(let i=0;i<e.length;i+=2)if(e[i]===n)return e[i+1];return null}function WA(t,n,e,i){return-1===e?function(t,n){return 11&t.type?ls(t,n):4&t.type?hu(t,n):null}(n,t):-2===e?function(t,n,e){return e===U?ls(n,t):e===$i?hu(n,t):e===ii?QD(n,t):void 0}(t,n,i):cl(t,t[1],e,n)}function xI(t,n,e,i){const o=n[19].queries[i];if(null===o.matches){const r=t.data,s=e.matches,l=[];for(let a=0;a<s.length;a+=2){const c=s[a];l.push(c<0?null:WA(n,r[c],s[a+1],e.metadata.read))}o.matches=l}return o.matches}function Fp(t,n,e,i){const o=t.queries.getByIndex(e),r=o.matches;if(null!==r){const s=xI(t,n,o,e);for(let l=0;l<r.length;l+=2){const a=r[l];if(a>0)i.push(s[l/2]);else{const c=r[l+1],u=n[-a];for(let d=10;d<u.length;d++){const h=u[d];h[17]===h[3]&&Fp(h[1],h,c,i)}if(null!==u[9]){const d=u[9];for(let h=0;h<d.length;h++){const f=d[h];Fp(f[1],f,c,i)}}}}}return i}function ps(t){const n=x(),e=Ie(),i=Mv();Ah(i+1);const o=kI(e,i);if(t.dirty&&Dv(n)===(2==(2&o.metadata.flags))){if(null===o.matches)t.reset([]);else{const r=o.crossesNgTemplate?Fp(e,n,i,[]):xI(e,n,o,i);t.reset(r,VD),t.notifyOnChanges()}return!0}return!1}function vu(t,n,e){const i=Ie();i.firstCreatePass&&(function(t,n,e){null===t.queries&&(t.queries=new Mp),t.queries.track(new xp(n,e))}(i,new MI(t,n,e),-1),2==(2&n)&&(i.staticViewQueries=!0)),function(t,n,e){const i=new bu(4==(4&e));hy(t,n,i,i.destroy),null===n[19]&&(n[19]=new Np),n[19].queries.push(new _p(i))}(i,x(),n)}function ms(){return t=x(),n=Mv(),t[19].queries[n].queryList;var t,n}function kI(t,n){return t.queries.getByIndex(n)}const Yl=new ge("Application Initializer");let bs=(()=>{class t{constructor(e){this.appInits=e,this.resolve=au,this.reject=au,this.initialized=!1,this.done=!1,this.donePromise=new Promise((i,o)=>{this.resolve=i,this.reject=o})}runInitializers(){if(this.initialized)return;const e=[],i=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let o=0;o<this.appInits.length;o++){const r=this.appInits[o]();if(Sl(r))e.push(r);else if(Jc(r)){const s=new Promise((l,a)=>{r.subscribe({complete:l,error:a})});e.push(s)}}Promise.all(e).then(()=>{i()}).catch(o=>{this.reject(o)}),0===e.length&&i(),this.initialized=!0}}return t.\u0275fac=function(e){return new(e||t)(R(Yl,8))},t.\u0275prov=ie({token:t,factory:t.\u0275fac}),t})();const Jl=new ge("AppId"),C4={provide:Jl,useFactory:function(){return`${Pp()}${Pp()}${Pp()}`},deps:[]};function Pp(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const KI=new ge("Platform Initializer"),Bp=new ge("Platform ID"),XI=new ge("appBootstrapListener");let Iu=(()=>{class t{log(e){console.log(e)}warn(e){console.warn(e)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=ie({token:t,factory:t.\u0275fac}),t})();const go=new ge("LocaleId"),QI=new ge("DefaultCurrencyCode");class _4{constructor(n,e){this.ngModuleFactory=n,this.componentFactories=e}}const Op=function(t){return new Cp(t)},N4=Op,M4=function(t){return Promise.resolve(Op(t))},ZI=function(t){const n=Op(t),i=yi(An(t).declarations).reduce((o,r)=>{const s=Gt(r);return s&&o.push(new vI(s)),o},[]);return new _4(n,i)},x4=ZI,F4=function(t){return Promise.resolve(ZI(t))};let nr=(()=>{class t{constructor(){this.compileModuleSync=N4,this.compileModuleAsync=M4,this.compileModuleAndAllComponentsSync=x4,this.compileModuleAndAllComponentsAsync=F4}clearCache(){}clearCacheFor(e){}getModuleId(e){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=ie({token:t,factory:t.\u0275fac}),t})();const S4=(()=>Promise.resolve(0))();function Lp(t){"undefined"==typeof Zone?S4.then(()=>{t&&t.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",t)}class dt{constructor({enableLongStackTrace:n=!1,shouldCoalesceEventChangeDetection:e=!1,shouldCoalesceRunChangeDetection:i=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new et(!1),this.onMicrotaskEmpty=new et(!1),this.onStable=new et(!1),this.onError=new et(!1),"undefined"==typeof Zone)throw new Error("In this configuration Angular requires Zone.js");Zone.assertZonePatched();const o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),n&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!i&&e,o.shouldCoalesceRunChangeDetection=i,o.lastRequestAnimationFrameId=-1,o.nativeRequestAnimationFrame=function(){let t=ke.requestAnimationFrame,n=ke.cancelAnimationFrame;if("undefined"!=typeof Zone&&t&&n){const e=t[Zone.__symbol__("OriginalDelegate")];e&&(t=e);const i=n[Zone.__symbol__("OriginalDelegate")];i&&(n=i)}return{nativeRequestAnimationFrame:t,nativeCancelAnimationFrame:n}}().nativeRequestAnimationFrame,function(t){const n=()=>{!function(t){t.isCheckStableRunning||-1!==t.lastRequestAnimationFrameId||(t.lastRequestAnimationFrameId=t.nativeRequestAnimationFrame.call(ke,()=>{t.fakeTopEventTask||(t.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{t.lastRequestAnimationFrameId=-1,$p(t),t.isCheckStableRunning=!0,Vp(t),t.isCheckStableRunning=!1},void 0,()=>{},()=>{})),t.fakeTopEventTask.invoke()}),$p(t))}(t)};t._inner=t._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(e,i,o,r,s,l)=>{try{return YI(t),e.invokeTask(o,r,s,l)}finally{(t.shouldCoalesceEventChangeDetection&&"eventTask"===r.type||t.shouldCoalesceRunChangeDetection)&&n(),JI(t)}},onInvoke:(e,i,o,r,s,l,a)=>{try{return YI(t),e.invoke(o,r,s,l,a)}finally{t.shouldCoalesceRunChangeDetection&&n(),JI(t)}},onHasTask:(e,i,o,r)=>{e.hasTask(o,r),i===o&&("microTask"==r.change?(t._hasPendingMicrotasks=r.microTask,$p(t),Vp(t)):"macroTask"==r.change&&(t.hasPendingMacrotasks=r.macroTask))},onHandleError:(e,i,o,r)=>(e.handleError(o,r),t.runOutsideAngular(()=>t.onError.emit(r)),!1)})}(o)}static isInAngularZone(){return!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!dt.isInAngularZone())throw new Error("Expected to be in Angular Zone, but it is not!")}static assertNotInAngularZone(){if(dt.isInAngularZone())throw new Error("Expected to not be in Angular Zone, but it is!")}run(n,e,i){return this._inner.run(n,e,i)}runTask(n,e,i,o){const r=this._inner,s=r.scheduleEventTask("NgZoneEvent: "+o,n,A4,au,au);try{return r.runTask(s,e,i)}finally{r.cancelTask(s)}}runGuarded(n,e,i){return this._inner.runGuarded(n,e,i)}runOutsideAngular(n){return this._outer.run(n)}}const A4={};function Vp(t){if(0==t._nesting&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function $p(t){t.hasPendingMicrotasks=!!(t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&-1!==t.lastRequestAnimationFrameId)}function YI(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function JI(t){t._nesting--,Vp(t)}class B4{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new et,this.onMicrotaskEmpty=new et,this.onStable=new et,this.onError=new et}run(n,e,i){return n.apply(e,i)}runGuarded(n,e,i){return n.apply(e,i)}runOutsideAngular(n){return n()}runTask(n,e,i,o){return n.apply(e,i)}}let Hp=(()=>{class t{constructor(e){this._ngZone=e,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,this._watchAngularEvents(),e.run(()=>{this.taskTrackingZone="undefined"==typeof Zone?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{dt.assertNotInAngularZone(),Lp(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())Lp(()=>{for(;0!==this._callbacks.length;){let e=this._callbacks.pop();clearTimeout(e.timeoutId),e.doneCb(this._didWork)}this._didWork=!1});else{let e=this.getPendingTasks();this._callbacks=this._callbacks.filter(i=>!i.updateCb||!i.updateCb(e)||(clearTimeout(i.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(e=>({source:e.source,creationLocation:e.creationLocation,data:e.data})):[]}addCallback(e,i,o){let r=-1;i&&i>0&&(r=setTimeout(()=>{this._callbacks=this._callbacks.filter(s=>s.timeoutId!==r),e(this._didWork,this.getPendingTasks())},i)),this._callbacks.push({doneCb:e,timeoutId:r,updateCb:o})}whenStable(e,i,o){if(o&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(e,i,o),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}findProviders(e,i,o){return[]}}return t.\u0275fac=function(e){return new(e||t)(R(dt))},t.\u0275prov=ie({token:t,factory:t.\u0275fac}),t})(),eC=(()=>{class t{constructor(){this._applications=new Map,jp.addToWindow(this)}registerApplication(e,i){this._applications.set(e,i)}unregisterApplication(e){this._applications.delete(e)}unregisterAllApplications(){this._applications.clear()}getTestability(e){return this._applications.get(e)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(e,i=!0){return jp.findTestabilityInTree(this,e,i)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=ie({token:t,factory:t.\u0275fac}),t})();class O4{addToWindow(n){}findTestabilityInTree(n,e,i){return null}}let jp=new O4,tC=!0,nC=!1;let si;const oC=new ge("AllowMultipleToken");class zp{constructor(n,e){this.name=n,this.token=e}}function rC(t,n,e=[]){const i=`Platform: ${n}`,o=new ge(i);return(r=[])=>{let s=sC();if(!s||s.injector.get(oC,!1))if(t)t(e.concat(r).concat({provide:o,useValue:!0}));else{const l=e.concat(r).concat({provide:o,useValue:!0},{provide:Ml,useValue:"platform"});!function(t){if(si&&!si.destroyed&&!si.injector.get(oC,!1))throw new Error("There can be only one platform. Destroy the previous one to create a new one.");si=t.get(lC);const n=t.get(KI,null);n&&n.forEach(e=>e())}(ye.create({providers:l,name:i}))}return function(t){const n=sC();if(!n)throw new Error("No platform exists!");if(!n.injector.get(t,null))throw new Error("A platform with a different configuration has been created. Please destroy it first.");return n}(o)}}function sC(){return si&&!si.destroyed?si:null}let lC=(()=>{class t{constructor(e){this._injector=e,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(e,i){const l=function(t,n){let e;return e="noop"===t?new B4:("zone.js"===t?void 0:t)||new dt({enableLongStackTrace:(nC=!0,tC),shouldCoalesceEventChangeDetection:!!(null==n?void 0:n.ngZoneEventCoalescing),shouldCoalesceRunChangeDetection:!!(null==n?void 0:n.ngZoneRunCoalescing)}),e}(i?i.ngZone:void 0,{ngZoneEventCoalescing:i&&i.ngZoneEventCoalescing||!1,ngZoneRunCoalescing:i&&i.ngZoneRunCoalescing||!1}),a=[{provide:dt,useValue:l}];return l.run(()=>{const c=ye.create({providers:a,parent:this.injector,name:e.moduleType.name}),u=e.create(c),d=u.injector.get(Xo,null);if(!d)throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");return l.runOutsideAngular(()=>{const h=l.onError.subscribe({next:f=>{d.handleError(f)}});u.onDestroy(()=>{Up(this._modules,u),h.unsubscribe()})}),function(t,n,e){try{const i=e();return Sl(i)?i.catch(o=>{throw n.runOutsideAngular(()=>t.handleError(o)),o}):i}catch(i){throw n.runOutsideAngular(()=>t.handleError(i)),i}}(d,l,()=>{const h=u.injector.get(bs);return h.runInitializers(),h.donePromise.then(()=>(ep(u.injector.get(go,iu)||iu),this._moduleDoBootstrap(u),u))})})}bootstrapModule(e,i=[]){const o=aC({},i);return function(t,n,e){const i=new Cp(e);return Promise.resolve(i)}(0,0,e).then(r=>this.bootstrapModuleFactory(r,o))}_moduleDoBootstrap(e){const i=e.injector.get(vs);if(e._bootstrapComponents.length>0)e._bootstrapComponents.forEach(o=>i.bootstrap(o));else{if(!e.instance.ngDoBootstrap)throw new Error(`The module ${ue(e.instance.constructor)} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`);e.instance.ngDoBootstrap(i)}this._modules.push(e)}onDestroy(e){this._destroyListeners.push(e)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new Error("The platform has already been destroyed!");this._modules.slice().forEach(e=>e.destroy()),this._destroyListeners.forEach(e=>e()),this._destroyed=!0}get destroyed(){return this._destroyed}}return t.\u0275fac=function(e){return new(e||t)(R(ye))},t.\u0275prov=ie({token:t,factory:t.\u0275fac}),t})();function aC(t,n){return Array.isArray(n)?n.reduce(aC,t):Object.assign(Object.assign({},t),n)}let vs=(()=>{class t{constructor(e,i,o,r,s){this._zone=e,this._injector=i,this._exceptionHandler=o,this._componentFactoryResolver=r,this._initStatus=s,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const l=new qe(c=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{c.next(this._stable),c.complete()})}),a=new qe(c=>{let u;this._zone.runOutsideAngular(()=>{u=this._zone.onStable.subscribe(()=>{dt.assertNotInAngularZone(),Lp(()=>{!this._stable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks&&(this._stable=!0,c.next(!0))})})});const d=this._zone.onUnstable.subscribe(()=>{dt.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{c.next(!1)}))});return()=>{u.unsubscribe(),d.unsubscribe()}});this.isStable=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=el(t),i=nx(t,1/0),o=t;return o.length?1===o.length?no(o[0]):Js(i)(ch(o,e)):Si}(l,a.pipe(function(t){void 0===t&&(t={});var n=t.connector,e=void 0===n?function(){return new ki}:n,i=t.resetOnError,o=void 0===i||i,r=t.resetOnComplete,s=void 0===r||r,l=t.resetOnRefCountZero,a=void 0===l||l;return function(c){var u=null,d=null,h=null,f=0,p=!1,m=!1,g=function(){null==d||d.unsubscribe(),d=null},M=function(){g(),u=h=null,p=m=!1},C=function(){var k=u;M(),null==k||k.unsubscribe()};return Ut(function(k,O){f++,!m&&!p&&g();var Y=h=null!=h?h:e();O.add(function(){0==--f&&!m&&!p&&(d=dh(C,a))}),Y.subscribe(O),u||(u=new rh({next:function(Ye){return Y.next(Ye)},error:function(Ye){m=!0,g(),d=dh(M,o,Ye),Y.error(Ye)},complete:function(){p=!0,g(),d=dh(M,s),Y.complete()}}),Pt(k).subscribe(u))})(c)}}()))}bootstrap(e,i){if(!this._initStatus.done)throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");let o;o=e instanceof BD?e:this._componentFactoryResolver.resolveComponentFactory(e),this.componentTypes.push(o.componentType);const r=function(t){return t.isBoundToModule}(o)?void 0:this._injector.get(Ni),l=o.create(ye.NULL,[],i||o.selector,r),a=l.location.nativeElement,c=l.injector.get(Hp,null),u=c&&l.injector.get(eC);return c&&u&&u.registerApplication(a,c),l.onDestroy(()=>{this.detachView(l.hostView),Up(this.components,l),u&&u.unregisterApplication(a)}),this._loadComponent(l),l}tick(){if(this._runningTick)throw new Error("ApplicationRef.tick is called recursively");try{this._runningTick=!0;for(let e of this._views)e.detectChanges()}catch(e){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(e))}finally{this._runningTick=!1}}attachView(e){const i=e;this._views.push(i),i.attachToAppRef(this)}detachView(e){const i=e;Up(this._views,i),i.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView),this.tick(),this.components.push(e),this._injector.get(XI,[]).concat(this._bootstrapListeners).forEach(o=>o(e))}ngOnDestroy(){this._views.slice().forEach(e=>e.destroy()),this._onMicrotaskEmptySubscription.unsubscribe()}get viewCount(){return this._views.length}}return t.\u0275fac=function(e){return new(e||t)(R(dt),R(ye),R(Xo),R(po),R(bs))},t.\u0275prov=ie({token:t,factory:t.\u0275fac}),t})();function Up(t,n){const e=t.indexOf(n);e>-1&&t.splice(e,1)}class wu{}class Y4{}const J4={factoryPathPrefix:"",factoryPathSuffix:".ngfactory"};let eR=(()=>{class t{constructor(e,i){this._compiler=e,this._config=i||J4}load(e){return this.loadAndCompile(e)}loadAndCompile(e){let[i,o]=e.split("#");return void 0===o&&(o="default"),Ys(357)(i).then(r=>r[o]).then(r=>hC(r,i,o)).then(r=>this._compiler.compileModuleAsync(r))}loadFactory(e){let[i,o]=e.split("#"),r="NgFactory";return void 0===o&&(o="default",r=""),Ys(357)(this._config.factoryPathPrefix+i+this._config.factoryPathSuffix).then(s=>s[o+r]).then(s=>hC(s,i,o))}}return t.\u0275fac=function(e){return new(e||t)(R(nr),R(Y4,8))},t.\u0275prov=ie({token:t,factory:t.\u0275fac}),t})();function hC(t,n,e){if(!t)throw new Error(`Cannot find '${e}' in '${n}'`);return t}const uR=rC(null,"core",[{provide:Bp,useValue:"unknown"},{provide:lC,deps:[ye]},{provide:eC,deps:[]},{provide:Iu,deps:[]}]),mR=[{provide:vs,useClass:vs,deps:[dt,ye,Xo,po,bs]},{provide:mA,deps:[dt],useFactory:function(t){let n=[];return t.onStable.subscribe(()=>{for(;n.length;)n.pop()()}),function(e){n.push(e)}}},{provide:bs,useClass:bs,deps:[[new un,Yl]]},{provide:nr,useClass:nr,deps:[]},C4,{provide:Vl,useFactory:function(){return cT},deps:[]},{provide:as,useFactory:function(){return uT},deps:[]},{provide:go,useFactory:function(t){return ep(t=t||"undefined"!=typeof $localize&&$localize.locale||iu),t},deps:[[new Br(go),new un,new uo]]},{provide:QI,useValue:"USD"}];let bR=(()=>{class t{constructor(e){}}return t.\u0275fac=function(e){return new(e||t)(R(vs))},t.\u0275mod=oe({type:t}),t.\u0275inj=te({providers:mR}),t})(),Au=null;function Mi(){return Au}const St=new ge("DocumentToken");let rr=(()=>{class t{historyGo(e){throw new Error("Not implemented")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=ie({factory:g5,token:t,providedIn:"platform"}),t})();function g5(){return R(BC)}const b5=new ge("Location Initialized");let BC=(()=>{class t extends rr{constructor(e){super(),this._doc=e,this._init()}_init(){this.location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Mi().getBaseHref(this._doc)}onPopState(e){const i=Mi().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){const i=Mi().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this.location.href}get protocol(){return this.location.protocol}get hostname(){return this.location.hostname}get port(){return this.location.port}get pathname(){return this.location.pathname}get search(){return this.location.search}get hash(){return this.location.hash}set pathname(e){this.location.pathname=e}pushState(e,i,o){OC()?this._history.pushState(e,i,o):this.location.hash=o}replaceState(e,i,o){OC()?this._history.replaceState(e,i,o):this.location.hash=o}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}}return t.\u0275fac=function(e){return new(e||t)(R(St))},t.\u0275prov=ie({factory:v5,token:t,providedIn:"platform"}),t})();function OC(){return!!window.history.pushState}function v5(){return new BC(R(St))}function rm(t,n){if(0==t.length)return n;if(0==n.length)return t;let e=0;return t.endsWith("/")&&e++,n.startsWith("/")&&e++,2==e?t+n.substring(1):1==e?t+n:t+"/"+n}function LC(t){const n=t.match(/#|\?|$/),e=n&&n.index||t.length;return t.slice(0,e-("/"===t[e-1]?1:0))+t.slice(e)}function ji(t){return t&&"?"!==t[0]?"?"+t:t}let Is=(()=>{class t{historyGo(e){throw new Error("Not implemented")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=ie({factory:y5,token:t,providedIn:"root"}),t})();function y5(t){const n=R(St).location;return new VC(R(rr),n&&n.origin||"")}const sm=new ge("appBaseHref");let VC=(()=>{class t extends Is{constructor(e,i){if(super(),this._platformLocation=e,this._removeListenerFns=[],null==i&&(i=this._platformLocation.getBaseHrefFromDOM()),null==i)throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");this._baseHref=i}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return rm(this._baseHref,e)}path(e=!1){const i=this._platformLocation.pathname+ji(this._platformLocation.search),o=this._platformLocation.hash;return o&&e?`${i}${o}`:i}pushState(e,i,o,r){const s=this.prepareExternalUrl(o+ji(r));this._platformLocation.pushState(e,i,s)}replaceState(e,i,o,r){const s=this.prepareExternalUrl(o+ji(r));this._platformLocation.replaceState(e,i,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}historyGo(e=0){var i,o;null===(o=(i=this._platformLocation).historyGo)||void 0===o||o.call(i,e)}}return t.\u0275fac=function(e){return new(e||t)(R(rr),R(sm,8))},t.\u0275prov=ie({token:t,factory:t.\u0275fac}),t})(),D5=(()=>{class t extends Is{constructor(e,i){super(),this._platformLocation=e,this._baseHref="",this._removeListenerFns=[],null!=i&&(this._baseHref=i)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let i=this._platformLocation.hash;return null==i&&(i="#"),i.length>0?i.substring(1):i}prepareExternalUrl(e){const i=rm(this._baseHref,e);return i.length>0?"#"+i:i}pushState(e,i,o,r){let s=this.prepareExternalUrl(o+ji(r));0==s.length&&(s=this._platformLocation.pathname),this._platformLocation.pushState(e,i,s)}replaceState(e,i,o,r){let s=this.prepareExternalUrl(o+ji(r));0==s.length&&(s=this._platformLocation.pathname),this._platformLocation.replaceState(e,i,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}historyGo(e=0){var i,o;null===(o=(i=this._platformLocation).historyGo)||void 0===o||o.call(i,e)}}return t.\u0275fac=function(e){return new(e||t)(R(rr),R(sm,8))},t.\u0275prov=ie({token:t,factory:t.\u0275fac}),t})(),Ru=(()=>{class t{constructor(e,i){this._subject=new et,this._urlChangeListeners=[],this._platformStrategy=e;const o=this._platformStrategy.getBaseHref();this._platformLocation=i,this._baseHref=LC($C(o)),this._platformStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}path(e=!1){return this.normalize(this._platformStrategy.path(e))}getState(){return this._platformLocation.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+ji(i))}normalize(e){return t.stripTrailingSlash(function(t,n){return t&&n.startsWith(t)?n.substring(t.length):n}(this._baseHref,$C(e)))}prepareExternalUrl(e){return e&&"/"!==e[0]&&(e="/"+e),this._platformStrategy.prepareExternalUrl(e)}go(e,i="",o=null){this._platformStrategy.pushState(o,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+ji(i)),o)}replaceState(e,i="",o=null){this._platformStrategy.replaceState(o,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+ji(i)),o)}forward(){this._platformStrategy.forward()}back(){this._platformStrategy.back()}historyGo(e=0){var i,o;null===(o=(i=this._platformStrategy).historyGo)||void 0===o||o.call(i,e)}onUrlChange(e){this._urlChangeListeners.push(e),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}))}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(o=>o(e,i))}subscribe(e,i,o){return this._subject.subscribe({next:e,error:i,complete:o})}}return t.\u0275fac=function(e){return new(e||t)(R(Is),R(rr))},t.normalizeQueryParams=ji,t.joinWithSlash=rm,t.stripTrailingSlash=LC,t.\u0275prov=ie({factory:I5,token:t,providedIn:"root"}),t})();function I5(){return new Ru(R(Is),R(rr))}function $C(t){return t.replace(/\/index.html$/,"")}var ht=(()=>((ht=ht||{})[ht.Zero=0]="Zero",ht[ht.One=1]="One",ht[ht.Two=2]="Two",ht[ht.Few=3]="Few",ht[ht.Many=4]="Many",ht[ht.Other=5]="Other",ht))();const E5=function(t){return function(t){const n=function(t){return t.toLowerCase().replace(/_/g,"-")}(t);let e=uD(n);if(e)return e;const i=n.split("-")[0];if(e=uD(i),e)return e;if("en"===i)return Hk;throw new Error(`Missing locale data for the locale "${t}".`)}(t)[A.PluralCase]};class Uu{}let oP=(()=>{class t extends Uu{constructor(e){super(),this.locale=e}getPluralCategory(e,i){switch(E5(i||this.locale)(e)){case ht.Zero:return"zero";case ht.One:return"one";case ht.Two:return"two";case ht.Few:return"few";case ht.Many:return"many";default:return"other"}}}return t.\u0275fac=function(e){return new(e||t)(R(go))},t.\u0275prov=ie({token:t,factory:t.\u0275fac}),t})();class aP{constructor(n,e,i,o){this.$implicit=n,this.ngForOf=e,this.index=i,this.count=o}get first(){return 0===this.index}get last(){return this.index===this.count-1}get even(){return this.index%2==0}get odd(){return!this.even}}let XC=(()=>{class t{constructor(e,i,o){this._viewContainer=e,this._template=i,this._differs=o,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const e=this._ngForOf;if(!this._differ&&e)try{this._differ=this._differs.find(e).create(this.ngForTrackBy)}catch(i){throw new Error(`Cannot find a differ supporting object '${e}' of type '${function(t){return t.name||typeof t}(e)}'. NgFor only supports binding to Iterables such as Arrays.`)}}if(this._differ){const e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){const i=[];e.forEachOperation((o,r,s)=>{if(null==o.previousIndex){const l=this._viewContainer.createEmbeddedView(this._template,new aP(null,this._ngForOf,-1,-1),null===s?void 0:s),a=new QC(o,l);i.push(a)}else if(null==s)this._viewContainer.remove(null===r?void 0:r);else if(null!==r){const l=this._viewContainer.get(r);this._viewContainer.move(l,s);const a=new QC(o,l);i.push(a)}});for(let o=0;o<i.length;o++)this._perViewChange(i[o].view,i[o].record);for(let o=0,r=this._viewContainer.length;o<r;o++){const s=this._viewContainer.get(o);s.context.index=o,s.context.count=r,s.context.ngForOf=this._ngForOf}e.forEachIdentityChange(o=>{this._viewContainer.get(o.currentIndex).context.$implicit=o.item})}_perViewChange(e,i){e.context.$implicit=i.item}static ngTemplateContextGuard(e,i){return!0}}return t.\u0275fac=function(e){return new(e||t)(I(ii),I($i),I(Vl))},t.\u0275dir=F({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}}),t})();class QC{constructor(n,e){this.record=n,this.view=e}}let xe=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=oe({type:t}),t.\u0275inj=te({providers:[{provide:Uu,useClass:oP}]}),t})();let tw=(()=>{class t{}return t.\u0275prov=ie({token:t,providedIn:"root",factory:()=>new $P(R(St),window)}),t})();class $P{constructor(n,e){this.document=n,this.window=e,this.offset=()=>[0,0]}setOffset(n){this.offset=Array.isArray(n)?()=>n:n}getScrollPosition(){return this.supportsScrolling()?[this.window.pageXOffset,this.window.pageYOffset]:[0,0]}scrollToPosition(n){this.supportsScrolling()&&this.window.scrollTo(n[0],n[1])}scrollToAnchor(n){if(!this.supportsScrolling())return;const e=function(t,n){const e=t.getElementById(n)||t.getElementsByName(n)[0];if(e)return e;if("function"==typeof t.createTreeWalker&&t.body&&(t.body.createShadowRoot||t.body.attachShadow)){const i=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT);let o=i.currentNode;for(;o;){const r=o.shadowRoot;if(r){const s=r.getElementById(n)||r.querySelector(`[name="${n}"]`);if(s)return s}o=i.nextNode()}}return null}(this.document,n);e&&(this.scrollToElement(e),this.attemptFocus(e))}setHistoryScrollRestoration(n){if(this.supportScrollRestoration()){const e=this.window.history;e&&e.scrollRestoration&&(e.scrollRestoration=n)}}scrollToElement(n){const e=n.getBoundingClientRect(),i=e.left+this.window.pageXOffset,o=e.top+this.window.pageYOffset,r=this.offset();this.window.scrollTo(i-r[0],o-r[1])}attemptFocus(n){return n.focus(),this.document.activeElement===n}supportScrollRestoration(){try{if(!this.supportsScrolling())return!1;const n=nw(this.window.history)||nw(Object.getPrototypeOf(this.window.history));return!(!n||!n.writable&&!n.set)}catch(n){return!1}}supportsScrolling(){try{return!!this.window&&!!this.window.scrollTo&&"pageXOffset"in this.window}catch(n){return!1}}}function nw(t){return Object.getOwnPropertyDescriptor(t,"scrollRestoration")}class ym extends class extends class{}{constructor(){super(...arguments),this.supportsDOMEvents=!0}}{static makeCurrent(){var t;t=new ym,Au||(Au=t)}onAndCancel(n,e,i){return n.addEventListener(e,i,!1),()=>{n.removeEventListener(e,i,!1)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.parentNode&&n.parentNode.removeChild(n)}createElement(n,e){return(e=e||this.getDefaultDocument()).createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return"window"===e?window:"document"===e?n:"body"===e?n.body:null}getBaseHref(n){const e=(sa=sa||document.querySelector("base"),sa?sa.getAttribute("href"):null);return null==e?null:function(t){Wu=Wu||document.createElement("a"),Wu.setAttribute("href",t);const n=Wu.pathname;return"/"===n.charAt(0)?n:`/${n}`}(e)}resetBaseElement(){sa=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return function(t,n){n=encodeURIComponent(n);for(const e of t.split(";")){const i=e.indexOf("="),[o,r]=-1==i?[e,""]:[e.slice(0,i),e.slice(i+1)];if(o.trim()===n)return decodeURIComponent(r)}return null}(document.cookie,n)}}let Wu,sa=null;const iw=new ge("TRANSITION_ID"),qP=[{provide:Yl,useFactory:function(t,n,e){return()=>{e.get(bs).donePromise.then(()=>{const i=Mi(),o=n.querySelectorAll(`style[ng-transition="${t}"]`);for(let r=0;r<o.length;r++)i.remove(o[r])})}},deps:[iw,St,ye],multi:!0}];class Dm{static init(){var t;t=new Dm,jp=t}addToWindow(n){ke.getAngularTestability=(i,o=!0)=>{const r=n.findTestabilityInTree(i,o);if(null==r)throw new Error("Could not find testability for element.");return r},ke.getAllAngularTestabilities=()=>n.getAllTestabilities(),ke.getAllAngularRootElements=()=>n.getAllRootElements(),ke.frameworkStabilizers||(ke.frameworkStabilizers=[]),ke.frameworkStabilizers.push(i=>{const o=ke.getAllAngularTestabilities();let r=o.length,s=!1;const l=function(a){s=s||a,r--,0==r&&i(s)};o.forEach(function(a){a.whenStable(l)})})}findTestabilityInTree(n,e,i){if(null==e)return null;const o=n.getTestability(e);return null!=o?o:i?Mi().isShadowRoot(e)?this.findTestabilityInTree(n,e.host,!0):this.findTestabilityInTree(n,e.parentElement,!0):null}}let KP=(()=>{class t{build(){return new XMLHttpRequest}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=ie({token:t,factory:t.\u0275fac}),t})();const la=new ge("EventManagerPlugins");let qu=(()=>{class t{constructor(e,i){this._zone=i,this._eventNameToPlugin=new Map,e.forEach(o=>o.manager=this),this._plugins=e.slice().reverse()}addEventListener(e,i,o){return this._findPluginFor(i).addEventListener(e,i,o)}addGlobalEventListener(e,i,o){return this._findPluginFor(i).addGlobalEventListener(e,i,o)}getZone(){return this._zone}_findPluginFor(e){const i=this._eventNameToPlugin.get(e);if(i)return i;const o=this._plugins;for(let r=0;r<o.length;r++){const s=o[r];if(s.supports(e))return this._eventNameToPlugin.set(e,s),s}throw new Error(`No event manager plugin found for event ${e}`)}}return t.\u0275fac=function(e){return new(e||t)(R(la),R(dt))},t.\u0275prov=ie({token:t,factory:t.\u0275fac}),t})();class Im{constructor(n){this._doc=n}addGlobalEventListener(n,e,i){const o=Mi().getGlobalEventTarget(this._doc,n);if(!o)throw new Error(`Unsupported event target ${o} for event ${e}`);return this.addEventListener(o,e,i)}}let rw=(()=>{class t{constructor(){this._stylesSet=new Set}addStyles(e){const i=new Set;e.forEach(o=>{this._stylesSet.has(o)||(this._stylesSet.add(o),i.add(o))}),this.onStylesAdded(i)}onStylesAdded(e){}getAllStyles(){return Array.from(this._stylesSet)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=ie({token:t,factory:t.\u0275fac}),t})(),aa=(()=>{class t extends rw{constructor(e){super(),this._doc=e,this._hostNodes=new Map,this._hostNodes.set(e.head,[])}_addStylesToHost(e,i,o){e.forEach(r=>{const s=this._doc.createElement("style");s.textContent=r,o.push(i.appendChild(s))})}addHost(e){const i=[];this._addStylesToHost(this._stylesSet,e,i),this._hostNodes.set(e,i)}removeHost(e){const i=this._hostNodes.get(e);i&&i.forEach(sw),this._hostNodes.delete(e)}onStylesAdded(e){this._hostNodes.forEach((i,o)=>{this._addStylesToHost(e,o,i)})}ngOnDestroy(){this._hostNodes.forEach(e=>e.forEach(sw))}}return t.\u0275fac=function(e){return new(e||t)(R(St))},t.\u0275prov=ie({token:t,factory:t.\u0275fac}),t})();function sw(t){Mi().remove(t)}const Cm={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},wm=/%COMP%/g;function Ku(t,n,e){for(let i=0;i<n.length;i++){let o=n[i];Array.isArray(o)?Ku(t,o,e):(o=o.replace(wm,t),e.push(o))}return e}function cw(t){return n=>{if("__ngUnwrap__"===n)return t;!1===t(n)&&(n.preventDefault(),n.returnValue=!1)}}let _m=(()=>{class t{constructor(e,i,o){this.eventManager=e,this.sharedStylesHost=i,this.appId=o,this.rendererByCompId=new Map,this.defaultRenderer=new Nm(e)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;switch(i.encapsulation){case mt.Emulated:{let o=this.rendererByCompId.get(i.id);return o||(o=new c8(this.eventManager,this.sharedStylesHost,i,this.appId),this.rendererByCompId.set(i.id,o)),o.applyToHost(e),o}case 1:case mt.ShadowDom:return new u8(this.eventManager,this.sharedStylesHost,e,i);default:if(!this.rendererByCompId.has(i.id)){const o=Ku(i.id,i.styles,[]);this.sharedStylesHost.addStyles(o),this.rendererByCompId.set(i.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return t.\u0275fac=function(e){return new(e||t)(R(qu),R(aa),R(Jl))},t.\u0275prov=ie({token:t,factory:t.\u0275fac}),t})();class Nm{constructor(n){this.eventManager=n,this.data=Object.create(null)}destroy(){}createElement(n,e){return e?document.createElementNS(Cm[e]||e,n):document.createElement(n)}createComment(n){return document.createComment(n)}createText(n){return document.createTextNode(n)}appendChild(n,e){n.appendChild(e)}insertBefore(n,e,i){n&&n.insertBefore(e,i)}removeChild(n,e){n&&n.removeChild(e)}selectRootElement(n,e){let i="string"==typeof n?document.querySelector(n):n;if(!i)throw new Error(`The selector "${n}" did not match any elements`);return e||(i.textContent=""),i}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,i,o){if(o){e=o+":"+e;const r=Cm[o];r?n.setAttributeNS(r,e,i):n.setAttribute(e,i)}else n.setAttribute(e,i)}removeAttribute(n,e,i){if(i){const o=Cm[i];o?n.removeAttributeNS(o,e):n.removeAttribute(`${i}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,i,o){o&(Cn.DashCase|Cn.Important)?n.style.setProperty(e,i,o&Cn.Important?"important":""):n.style[e]=i}removeStyle(n,e,i){i&Cn.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,i){n[e]=i}setValue(n,e){n.nodeValue=e}listen(n,e,i){return"string"==typeof n?this.eventManager.addGlobalEventListener(n,e,cw(i)):this.eventManager.addEventListener(n,e,cw(i))}}class c8 extends Nm{constructor(n,e,i,o){super(n),this.component=i;const r=Ku(o+"-"+i.id,i.styles,[]);e.addStyles(r),this.contentAttr="_ngcontent-%COMP%".replace(wm,o+"-"+i.id),this.hostAttr=function(t){return"_nghost-%COMP%".replace(wm,t)}(o+"-"+i.id)}applyToHost(n){super.setAttribute(n,this.hostAttr,"")}createElement(n,e){const i=super.createElement(n,e);return super.setAttribute(i,this.contentAttr,""),i}}class u8 extends Nm{constructor(n,e,i,o){super(n),this.sharedStylesHost=e,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const r=Ku(o.id,o.styles,[]);for(let s=0;s<r.length;s++){const l=document.createElement("style");l.textContent=r[s],this.shadowRoot.appendChild(l)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,i){return super.insertBefore(this.nodeOrShadowRoot(n),e,i)}removeChild(n,e){return super.removeChild(this.nodeOrShadowRoot(n),e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}}let d8=(()=>{class t extends Im{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,o){return e.addEventListener(i,o,!1),()=>this.removeEventListener(e,i,o)}removeEventListener(e,i,o){return e.removeEventListener(i,o)}}return t.\u0275fac=function(e){return new(e||t)(R(St))},t.\u0275prov=ie({token:t,factory:t.\u0275fac}),t})();const hw=["alt","control","meta","shift"],v8={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},fw={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","\x90":"NumLock"},y8={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey};let D8=(()=>{class t extends Im{constructor(e){super(e)}supports(e){return null!=t.parseEventName(e)}addEventListener(e,i,o){const r=t.parseEventName(i),s=t.eventCallback(r.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Mi().onAndCancel(e,r.domEventName,s))}static parseEventName(e){const i=e.toLowerCase().split("."),o=i.shift();if(0===i.length||"keydown"!==o&&"keyup"!==o)return null;const r=t._normalizeKey(i.pop());let s="";if(hw.forEach(a=>{const c=i.indexOf(a);c>-1&&(i.splice(c,1),s+=a+".")}),s+=r,0!=i.length||0===r.length)return null;const l={};return l.domEventName=o,l.fullKey=s,l}static getEventFullKey(e){let i="",o=function(t){let n=t.key;if(null==n){if(n=t.keyIdentifier,null==n)return"Unidentified";n.startsWith("U+")&&(n=String.fromCharCode(parseInt(n.substring(2),16)),3===t.location&&fw.hasOwnProperty(n)&&(n=fw[n]))}return v8[n]||n}(e);return o=o.toLowerCase()," "===o?o="space":"."===o&&(o="dot"),hw.forEach(r=>{r!=o&&y8[r](e)&&(i+=r+".")}),i+=o,i}static eventCallback(e,i,o){return r=>{t.getEventFullKey(r)===e&&o.runGuarded(()=>i(r))}}static _normalizeKey(e){switch(e){case"esc":return"escape";default:return e}}}return t.\u0275fac=function(e){return new(e||t)(R(St))},t.\u0275prov=ie({token:t,factory:t.\u0275fac}),t})();const F8=rC(uR,"browser",[{provide:Bp,useValue:"browser"},{provide:KI,useValue:function(){ym.makeCurrent(),Dm.init()},multi:!0},{provide:St,useFactory:function(){return t=document,_h=t,document;var t},deps:[]}]),E8=[[],{provide:Ml,useValue:"root"},{provide:Xo,useFactory:function(){return new Xo},deps:[]},{provide:la,useClass:d8,multi:!0,deps:[St,dt,Bp]},{provide:la,useClass:D8,multi:!0,deps:[St]},[],{provide:_m,useClass:_m,deps:[qu,aa,Jl]},{provide:cu,useExisting:_m},{provide:rw,useExisting:aa},{provide:aa,useClass:aa,deps:[St]},{provide:Hp,useClass:Hp,deps:[dt]},{provide:qu,useClass:qu,deps:[la,dt]},{provide:class{},useClass:KP,deps:[]},[]];let k8=(()=>{class t{constructor(e){if(e)throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")}static withServerTransition(e){return{ngModule:t,providers:[{provide:Jl,useValue:e.appId},{provide:iw,useExisting:Jl},qP]}}}return t.\u0275fac=function(e){return new(e||t)(R(t,12))},t.\u0275mod=oe({type:t}),t.\u0275inj=te({providers:E8,imports:[xe,bR]}),t})();"undefined"!=typeof window&&window;var L8=Array.isArray,V8=Object.getPrototypeOf,$8=Object.prototype,H8=Object.keys;function mw(t){if(1===t.length){var n=t[0];if(L8(n))return{args:n,keys:null};if(function(t){return t&&"object"==typeof t&&V8(t)===$8}(n)){var e=H8(n);return{args:e.map(function(i){return n[i]}),keys:e}}}return{args:t,keys:null}}var z8=Array.isArray;function gw(t){return je(function(n){return function(t,n){return z8(n)?t.apply(void 0,vr([],Ro(n))):t(n)}(t,n)})}function bw(t,n){return t.reduce(function(e,i,o){return e[i]=n[o],e},{})}let vw=(()=>{class t{constructor(e,i){this._renderer=e,this._elementRef=i,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}return t.\u0275fac=function(e){return new(e||t)(I(de),I(U))},t.\u0275dir=F({type:t}),t})(),sr=(()=>{class t extends vw{}return t.\u0275fac=function(){let n;return function(i){return(n||(n=kt(t)))(i||t)}}(),t.\u0275dir=F({type:t,features:[we]}),t})();const Jt=new ge("NgValueAccessor"),q8={provide:Jt,useExisting:Me(()=>Xu),multi:!0},X8=new ge("CompositionEventMode");let Xu=(()=>{class t extends vw{constructor(e,i,o){super(e,i),this._compositionMode=o,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function(){const t=Mi()?Mi().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}())}writeValue(e){this.setProperty("value",null==e?"":e)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}return t.\u0275fac=function(e){return new(e||t)(I(de),I(U),I(X8,8))},t.\u0275dir=F({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,i){1&e&&se("input",function(r){return i._handleInput(r.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(r){return i._compositionEnd(r.target.value)})},features:[Re([q8]),we]}),t})();const jt=new ge("NgValidators"),Do=new ge("NgAsyncValidators");function Ew(t){return null!=t}function kw(t){const n=Sl(t)?Pt(t):t;return Jc(n),n}function Sw(t){let n={};return t.forEach(e=>{n=null!=e?Object.assign(Object.assign({},n),e):n}),0===Object.keys(n).length?null:n}function Tw(t,n){return n.map(e=>e(t))}function Aw(t){return t.map(n=>function(t){return!t.validate}(n)?n:e=>n.validate(e))}function km(t){return null!=t?function(t){if(!t)return null;const n=t.filter(Ew);return 0==n.length?null:function(e){return Sw(Tw(e,n))}}(Aw(t)):null}function Sm(t){return null!=t?function(t){if(!t)return null;const n=t.filter(Ew);return 0==n.length?null:function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=tv(t),i=mw(t),o=i.args,r=i.keys,s=new qe(function(l){var a=o.length;if(a)for(var c=new Array(a),u=a,d=a,h=function(p){var m=!1;no(o[p]).subscribe(new Et(l,function(g){m||(m=!0,d--),c[p]=g},function(){(!--u||!m)&&(d||l.next(r?bw(r,c):c),l.complete())}))},f=0;f<a;f++)h(f);else l.complete()});return e?s.pipe(gw(e)):s}(Tw(e,n).map(kw)).pipe(je(Sw))}}(Aw(t)):null}function Bw(t,n){return null===t?[n]:Array.isArray(t)?[...t,n]:[t,n]}function Tm(t){return t?Array.isArray(t)?t:[t]:[]}function Qu(t,n){return Array.isArray(t)?t.includes(n):t===n}function Vw(t,n){const e=Tm(n);return Tm(t).forEach(o=>{Qu(e,o)||e.push(o)}),e}function $w(t,n){return Tm(n).filter(e=>!Qu(t,e))}let Hw=(()=>{class t{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=km(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Sm(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e){this.control&&this.control.reset(e)}hasError(e,i){return!!this.control&&this.control.hasError(e,i)}getError(e,i){return this.control?this.control.getError(e,i):null}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=F({type:t}),t})(),en=(()=>{class t extends Hw{get formDirective(){return null}get path(){return null}}return t.\u0275fac=function(){let n;return function(i){return(n||(n=kt(t)))(i||t)}}(),t.\u0275dir=F({type:t,features:[we]}),t})();class Ui extends Hw{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}let Am=(()=>{class t extends class{constructor(n){this._cd=n}is(n){var e,i,o;return"submitted"===n?!!(null===(e=this._cd)||void 0===e?void 0:e.submitted):!!(null===(o=null===(i=this._cd)||void 0===i?void 0:i.control)||void 0===o?void 0:o[n])}}{constructor(e){super(e)}}return t.\u0275fac=function(e){return new(e||t)(I(Ui,2))},t.\u0275dir=F({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,i){2&e&&eu("ng-untouched",i.is("untouched"))("ng-touched",i.is("touched"))("ng-pristine",i.is("pristine"))("ng-dirty",i.is("dirty"))("ng-valid",i.is("valid"))("ng-invalid",i.is("invalid"))("ng-pending",i.is("pending"))},features:[we]}),t})();function ca(t,n){(function(t,n){const e=function(t){return t._rawValidators}(t);null!==n.validator?t.setValidators(Bw(e,n.validator)):"function"==typeof e&&t.setValidators([e]);const i=function(t){return t._rawAsyncValidators}(t);null!==n.asyncValidator?t.setAsyncValidators(Bw(i,n.asyncValidator)):"function"==typeof i&&t.setAsyncValidators([i]);const o=()=>t.updateValueAndValidity();ed(n._rawValidators,o),ed(n._rawAsyncValidators,o)})(t,n),n.valueAccessor.writeValue(t.value),function(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,"change"===t.updateOn&&zw(t,n)})}(t,n),function(t,n){const e=(i,o)=>{n.valueAccessor.writeValue(i),o&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}(t,n),function(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,"blur"===t.updateOn&&t._pendingChange&&zw(t,n),"submit"!==t.updateOn&&t.markAsTouched()})}(t,n),function(t,n){if(n.valueAccessor.setDisabledState){const e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}(t,n)}function ed(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function zw(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function nd(t,n){const e=t.indexOf(n);e>-1&&t.splice(e,1)}const ua="VALID",id="INVALID",Cs="PENDING",da="DISABLED";function Vm(t){return(Hm(t)?t.validators:t)||null}function Gw(t){return Array.isArray(t)?km(t):t||null}function $m(t,n){return(Hm(n)?n.asyncValidators:t)||null}function qw(t){return Array.isArray(t)?Sm(t):t||null}function Hm(t){return null!=t&&!Array.isArray(t)&&"object"==typeof t}class jm{constructor(n,e){this._hasOwnPendingAsyncValidator=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=n,this._rawAsyncValidators=e,this._composedValidatorFn=Gw(this._rawValidators),this._composedAsyncValidatorFn=qw(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get valid(){return this.status===ua}get invalid(){return this.status===id}get pending(){return this.status==Cs}get disabled(){return this.status===da}get enabled(){return this.status!==da}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._rawValidators=n,this._composedValidatorFn=Gw(n)}setAsyncValidators(n){this._rawAsyncValidators=n,this._composedAsyncValidatorFn=qw(n)}addValidators(n){this.setValidators(Vw(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(Vw(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators($w(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators($w(n,this._rawAsyncValidators))}hasValidator(n){return Qu(this._rawValidators,n)}hasAsyncValidator(n){return Qu(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){this.touched=!0,this._parent&&!n.onlySelf&&this._parent.markAsTouched(n)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(n=>n.markAllAsTouched())}markAsUntouched(n={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!n.onlySelf&&this._parent._updateTouched(n)}markAsDirty(n={}){this.pristine=!1,this._parent&&!n.onlySelf&&this._parent.markAsDirty(n)}markAsPristine(n={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!n.onlySelf&&this._parent._updatePristine(n)}markAsPending(n={}){this.status=Cs,!1!==n.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!n.onlySelf&&this._parent.markAsPending(n)}disable(n={}){const e=this._parentMarkedDirty(n.onlySelf);this.status=da,this.errors=null,this._forEachChild(i=>{i.disable(Object.assign(Object.assign({},n),{onlySelf:!0}))}),this._updateValue(),!1!==n.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign(Object.assign({},n),{skipPristineCheck:e})),this._onDisabledChange.forEach(i=>i(!0))}enable(n={}){const e=this._parentMarkedDirty(n.onlySelf);this.status=ua,this._forEachChild(i=>{i.enable(Object.assign(Object.assign({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(Object.assign(Object.assign({},n),{skipPristineCheck:e})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n){this._parent&&!n.onlySelf&&(this._parent.updateValueAndValidity(n),n.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(n){this._parent=n}updateValueAndValidity(n={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===ua||this.status===Cs)&&this._runAsyncValidator(n.emitEvent)),!1!==n.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.updateValueAndValidity(n)}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?da:ua}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n){if(this.asyncValidator){this.status=Cs,this._hasOwnPendingAsyncValidator=!0;const e=kw(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:n})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(!1!==e.emitEvent)}get(n){return function(t,n,e){if(null==n||(Array.isArray(n)||(n=n.split(".")),Array.isArray(n)&&0===n.length))return null;let i=t;return n.forEach(o=>{i=i instanceof ha?i.controls.hasOwnProperty(o)?i.controls[o]:null:i instanceof zm&&i.at(o)||null}),i}(this,n)}getError(n,e){const i=e?this.get(e):this;return i&&i.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(n)}_initObservables(){this.valueChanges=new et,this.statusChanges=new et}_calculateStatus(){return this._allControlsDisabled()?da:this.errors?id:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Cs)?Cs:this._anyControlsHaveStatus(id)?id:ua}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n={}){this.pristine=!this._anyControlsDirty(),this._parent&&!n.onlySelf&&this._parent._updatePristine(n)}_updateTouched(n={}){this.touched=this._anyControlsTouched(),this._parent&&!n.onlySelf&&this._parent._updateTouched(n)}_isBoxedValue(n){return"object"==typeof n&&null!==n&&2===Object.keys(n).length&&"value"in n&&"disabled"in n}_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){Hm(n)&&null!=n.updateOn&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}}class ws extends jm{constructor(n=null,e,i){super(Vm(e),$m(i,e)),this._onChange=[],this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(i=>i(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=null,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){nd(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){nd(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(n){this._isBoxedValue(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}}class ha extends jm{constructor(n,e,i){super(Vm(e),$m(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,i={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){this._checkAllValuesPresent(n),Object.keys(n).forEach(i=>{this._throwIfControlMissing(i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){null!=n&&(Object.keys(n).forEach(i=>{this.controls[i]&&this.controls[i].patchValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((i,o)=>{i.reset(n[o],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(n,e,i)=>(n[i]=e instanceof ws?e.value:e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,i)=>!!i._syncPendingControls()||e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_throwIfControlMissing(n){if(!Object.keys(this.controls).length)throw new Error("\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.controls[n])throw new Error(`Cannot find form control with name: ${n}.`)}_forEachChild(n){Object.keys(this.controls).forEach(e=>{const i=this.controls[e];i&&n(i,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(const e of Object.keys(this.controls)){const i=this.controls[e];if(this.contains(e)&&n(i))return!0}return!1}_reduceValue(){return this._reduceChildren({},(n,e,i)=>((e.enabled||this.disabled)&&(n[i]=e.value),n))}_reduceChildren(n,e){let i=n;return this._forEachChild((o,r)=>{i=e(i,o,r)}),i}_allControlsDisabled(){for(const n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_checkAllValuesPresent(n){this._forEachChild((e,i)=>{if(void 0===n[i])throw new Error(`Must supply a value for form control with name: '${i}'.`)})}}class zm extends jm{constructor(n,e,i){super(Vm(e),$m(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(n){return this.controls[n]}push(n,e={}){this.controls.push(n),this._registerControl(n),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(n,e,i={}){this.controls.splice(n,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(n,e,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),e&&(this.controls.splice(n,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(n,e={}){this._checkAllValuesPresent(n),n.forEach((i,o)=>{this._throwIfControlMissing(o),this.at(o).setValue(i,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){null!=n&&(n.forEach((i,o)=>{this.at(o)&&this.at(o).patchValue(i,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n=[],e={}){this._forEachChild((i,o)=>{i.reset(n[o],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(n=>n instanceof ws?n.value:n.getRawValue())}clear(n={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:n.emitEvent}))}_syncPendingControls(){let n=this.controls.reduce((e,i)=>!!i._syncPendingControls()||e,!1);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_throwIfControlMissing(n){if(!this.controls.length)throw new Error("\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.at(n))throw new Error(`Cannot find form control at index ${n}`)}_forEachChild(n){this.controls.forEach((e,i)=>{n(e,i)})}_updateValue(){this.value=this.controls.filter(n=>n.enabled||this.disabled).map(n=>n.value)}_anyControls(n){return this.controls.some(e=>e.enabled&&n(e))}_setUpControls(){this._forEachChild(n=>this._registerControl(n))}_checkAllValuesPresent(n){this._forEachChild((e,i)=>{if(void 0===n[i])throw new Error(`Must supply a value for form control at index: ${i}.`)})}_allControlsDisabled(){for(const n of this.controls)if(n.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(n){n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)}}const h7={provide:Ui,useExisting:Me(()=>od)},Qw=(()=>Promise.resolve(null))();let od=(()=>{class t extends Ui{constructor(e,i,o,r){super(),this.control=new ws,this._registered=!1,this.update=new et,this._parent=e,this._setValidators(i),this._setAsyncValidators(o),this.valueAccessor=function(t,n){if(!n)return null;let e,i,o;return Array.isArray(n),n.forEach(r=>{r.constructor===Xu?e=r:function(t){return Object.getPrototypeOf(t.constructor)===sr}(r)?i=r:o=r}),o||i||e||null}(0,r)}ngOnChanges(e){this._checkForErrors(),this._registered||this._setUpControl(),"isDisabled"in e&&this._updateDisabled(e),function(t,n){if(!t.hasOwnProperty("model"))return!1;const e=t.model;return!!e.isFirstChange()||!Object.is(n,e.currentValue)}(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._parent?function(t,n){return[...n.path,t]}(this.name,this._parent):[this.name]}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){ca(this.control,this),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(e){Qw.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1})})}_updateDisabled(e){const i=e.isDisabled.currentValue,o=""===i||i&&"false"!==i;Qw.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable()})}}return t.\u0275fac=function(e){return new(e||t)(I(en,9),I(jt,10),I(Do,10),I(Jt,10))},t.\u0275dir=F({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[Re([h7]),we,Ot]}),t})(),Yw=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=oe({type:t}),t.\u0275inj=te({}),t})();const Wm=new ge("NgModelWithFormControlWarning"),w7={provide:Jt,useExisting:Me(()=>rd),multi:!0};function o_(t,n){return null==t?`${n}`:(n&&"object"==typeof n&&(n="Object"),`${t}: ${n}`.slice(0,50))}let rd=(()=>{class t extends sr{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(e){this._compareWith=e}writeValue(e){this.value=e;const i=this._getOptionId(e);null==i&&this.setProperty("selectedIndex",-1);const o=o_(i,e);this.setProperty("value",o)}registerOnChange(e){this.onChange=i=>{this.value=this._getOptionValue(i),e(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(e){for(const i of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(i),e))return i;return null}_getOptionValue(e){const i=function(t){return t.split(":")[0]}(e);return this._optionMap.has(i)?this._optionMap.get(i):e}}return t.\u0275fac=function(){let n;return function(i){return(n||(n=kt(t)))(i||t)}}(),t.\u0275dir=F({type:t,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(e,i){1&e&&se("change",function(r){return i.onChange(r.target.value)})("blur",function(){return i.onTouched()})},inputs:{compareWith:"compareWith"},features:[Re([w7]),we]}),t})(),r_=(()=>{class t{constructor(e,i,o){this._element=e,this._renderer=i,this._select=o,this._select&&(this.id=this._select._registerOption())}set ngValue(e){null!=this._select&&(this._select._optionMap.set(this.id,e),this._setElementValue(o_(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._setElementValue(e),this._select&&this._select.writeValue(this._select.value)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}}return t.\u0275fac=function(e){return new(e||t)(I(U),I(de),I(rd,9))},t.\u0275dir=F({type:t,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}}),t})(),g_=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=oe({type:t}),t.\u0275inj=te({imports:[[Yw]]}),t})(),B7=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=oe({type:t}),t.\u0275inj=te({imports:[g_]}),t})(),b_=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Wm,useValue:e.warnOnNgModelWithFormControl}]}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=oe({type:t}),t.\u0275inj=te({imports:[g_]}),t})(),L7=(()=>{class t{group(e,i=null){const o=this._reduceControls(e);let l,r=null,s=null;return null!=i&&(function(t){return void 0!==t.asyncValidators||void 0!==t.validators||void 0!==t.updateOn}(i)?(r=null!=i.validators?i.validators:null,s=null!=i.asyncValidators?i.asyncValidators:null,l=null!=i.updateOn?i.updateOn:void 0):(r=null!=i.validator?i.validator:null,s=null!=i.asyncValidator?i.asyncValidator:null)),new ha(o,{asyncValidators:s,updateOn:l,validators:r})}control(e,i,o){return new ws(e,i,o)}array(e,i,o){const r=e.map(s=>this._createControl(s));return new zm(r,i,o)}_reduceControls(e){const i={};return Object.keys(e).forEach(o=>{i[o]=this._createControl(e[o])}),i}_createControl(e){return e instanceof ws||e instanceof ha||e instanceof zm?e:Array.isArray(e)?this.control(e[0],e.length>1?e[1]:null,e.length>2?e[2]:null):this.control(e)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=ie({factory:function(){return new t},token:t,providedIn:b_}),t})();function ae(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=el(t);return e?ah(t,e):ch(t)}var di=function(t){function n(e){var i=t.call(this)||this;return i._value=e,i}return To(n,t),Object.defineProperty(n.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),n.prototype._subscribe=function(e){var i=t.prototype._subscribe.call(this,e);return!i.closed&&e.next(this._value),i},n.prototype.getValue=function(){var e=this,r=e._value;if(e.hasError)throw e.thrownError;return this._throwIfClosed(),r},n.prototype.next=function(e){t.prototype.next.call(this,this._value=e)},n}(ki);function $7(t,n,e){return void 0===e&&(e=Lo),function(i){v_(n,function(){for(var o=t.length,r=new Array(o),s=o,l=o,a=function(u){v_(n,function(){var d=Pt(t[u],n),h=!1;d.subscribe(new Et(i,function(f){r[u]=f,h||(h=!0,l--),l||i.next(e(r.slice()))},function(){--s||i.complete()}))},i)},c=0;c<o;c++)a(c)},i)}}function v_(t,n,e){t?e.add(t.schedule(n)):n()}var sd=eh(function(t){return function(){t(this),this.name="EmptyError",this.message="no elements in sequence"}});function H7(){return Js(1)}function Zm(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return H7()(ch(t,el(t)))}function y_(t){return new qe(function(n){no(t()).subscribe(n)})}function D_(){return Ut(function(t,n){var e=null;t._refCount++;var i=new Et(n,void 0,void 0,void 0,function(){if(!t||t._refCount<=0||0<--t._refCount)e=null;else{var o=t._connection,r=e;e=null,o&&(!r||o===r)&&o.unsubscribe(),n.unsubscribe()}});t.subscribe(i),i.closed||(e=t.connect())})}var j7=function(t){function n(e,i){var o=t.call(this)||this;return o.source=e,o.subjectFactory=i,o._subject=null,o._refCount=0,o._connection=null,jb(e)&&(o.lift=e.lift),o}return To(n,t),n.prototype._subscribe=function(e){return this.getSubject().subscribe(e)},n.prototype.getSubject=function(){var e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject},n.prototype._teardown=function(){this._refCount=0;var e=this._connection;this._subject=this._connection=null,null==e||e.unsubscribe()},n.prototype.connect=function(){var e=this,i=this._connection;if(!i){i=this._connection=new Ei;var o=this.getSubject();i.add(this.source.subscribe(new Et(o,void 0,function(){e._teardown(),o.complete()},function(r){e._teardown(),o.error(r)},function(){return e._teardown()}))),i.closed&&(this._connection=null,i=Ei.EMPTY)}return i},n.prototype.refCount=function(){return D_()(this)},n}(qe);function lr(t,n){return Ut(function(e,i){var o=null,r=0,s=!1,l=function(){return s&&!o&&i.complete()};e.subscribe(new Et(i,function(a){null==o||o.unsubscribe();var c=0,u=r++;no(t(a,u)).subscribe(o=new Et(i,function(d){return i.next(n?n(a,d,u,c++):d)},function(){o=null,l()}))},function(){s=!0,l()}))})}function U7(t,n,e,i,o){return function(r,s){var l=e,a=n,c=0;r.subscribe(new Et(s,function(u){var d=c++;a=l?t(a,u,d):(l=!0,u),i&&s.next(a)},o&&function(){l&&s.next(a),s.complete()}))}}function I_(t,n){return Ut(U7(t,n,arguments.length>=2,!0))}function _s(t,n){return Ut(function(e,i){var o=0;e.subscribe(new Et(i,function(r){return t.call(n,r,o++)&&i.next(r)}))})}function Co(t){return Ut(function(n,e){var r,i=null,o=!1;i=n.subscribe(new Et(e,void 0,void 0,function(s){r=no(t(s,Co(t)(n))),i?(i.unsubscribe(),i=null,r.subscribe(e)):o=!0})),o&&(i.unsubscribe(),i=null,r.subscribe(e))})}function pa(t,n){return nt(n)?wt(t,n,1):wt(t,1)}function Ym(t){return t<=0?function(){return Si}:Ut(function(n,e){var i=[];n.subscribe(new Et(e,function(o){i.push(o),t<i.length&&i.shift()},function(){var o,r;try{for(var s=Ao(i),l=s.next();!l.done;l=s.next())e.next(l.value)}catch(c){o={error:c}}finally{try{l&&!l.done&&(r=s.return)&&r.call(s)}finally{if(o)throw o.error}}e.complete()},void 0,function(){i=null}))})}function C_(t){return void 0===t&&(t=W7),Ut(function(n,e){var i=!1;n.subscribe(new Et(e,function(o){i=!0,e.next(o)},function(){return i?e.complete():e.error(t())}))})}function W7(){return new sd}function w_(t){return Ut(function(n,e){var i=!1;n.subscribe(new Et(e,function(o){i=!0,e.next(o)},function(){i||e.next(t),e.complete()}))})}function Ns(t,n){var e=arguments.length>=2;return function(i){return i.pipe(t?_s(function(o,r){return t(o,r,i)}):Lo,sc(1),e?w_(n):C_(function(){return new sd}))}}function _n(t,n,e){var i=nt(t)||n||e?{next:t,error:n,complete:e}:t;return i?Ut(function(o,r){var s;null===(s=i.subscribe)||void 0===s||s.call(i);var l=!0;o.subscribe(new Et(r,function(a){var c;null===(c=i.next)||void 0===c||c.call(i,a),r.next(a)},function(){var a;l=!1,null===(a=i.complete)||void 0===a||a.call(i),r.complete()},function(a){var c;l=!1,null===(c=i.error)||void 0===c||c.call(i,a),r.error(a)},function(){var a,c;l&&(null===(a=i.unsubscribe)||void 0===a||a.call(i)),null===(c=i.finalize)||void 0===c||c.call(i)}))}):Lo}class Wi{constructor(n,e){this.id=n,this.url=e}}class Jm extends Wi{constructor(n,e,i="imperative",o=null){super(n,e),this.navigationTrigger=i,this.restoredState=o}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}}class ma extends Wi{constructor(n,e,i){super(n,e),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}}class __ extends Wi{constructor(n,e,i){super(n,e),this.reason=i}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}}class K7 extends Wi{constructor(n,e,i){super(n,e),this.error=i}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}}class X7 extends Wi{constructor(n,e,i,o){super(n,e),this.urlAfterRedirects=i,this.state=o}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class Q7 extends Wi{constructor(n,e,i,o){super(n,e),this.urlAfterRedirects=i,this.state=o}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class Z7 extends Wi{constructor(n,e,i,o,r){super(n,e),this.urlAfterRedirects=i,this.state=o,this.shouldActivate=r}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}}class Y7 extends Wi{constructor(n,e,i,o){super(n,e),this.urlAfterRedirects=i,this.state=o}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class J7 extends Wi{constructor(n,e,i,o){super(n,e),this.urlAfterRedirects=i,this.state=o}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class N_{constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}}class M_{constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}}class eB{constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class tB{constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class nB{constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class iB{constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class x_{constructor(n,e,i){this.routerEvent=n,this.position=e,this.anchor=i}toString(){return`Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`}}const pe="primary";class oB{constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){const e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){const e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}}function Ms(t){return new oB(t)}const F_="ngNavigationCancelingError";function eg(t){const n=Error("NavigationCancelingError: "+t);return n[F_]=!0,n}function sB(t,n,e){const i=e.path.split("/");if(i.length>t.length||"full"===e.pathMatch&&(n.hasChildren()||i.length<t.length))return null;const o={};for(let r=0;r<i.length;r++){const s=i[r],l=t[r];if(s.startsWith(":"))o[s.substring(1)]=l;else if(s!==l.path)return null}return{consumed:t.slice(0,i.length),posParams:o}}function xi(t,n){const e=t?Object.keys(t):void 0,i=n?Object.keys(n):void 0;if(!e||!i||e.length!=i.length)return!1;let o;for(let r=0;r<e.length;r++)if(o=e[r],!E_(t[o],n[o]))return!1;return!0}function E_(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;const e=[...t].sort(),i=[...n].sort();return e.every((o,r)=>i[r]===o)}return t===n}function k_(t){return Array.prototype.concat.apply([],t)}function S_(t){return t.length>0?t[t.length-1]:null}function Tt(t,n){for(const e in t)t.hasOwnProperty(e)&&n(t[e],e)}function Fi(t){return Jc(t)?t:Sl(t)?Pt(Promise.resolve(t)):ae(t)}const cB={exact:function R_(t,n,e){if(!cr(t.segments,n.segments)||!ld(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(const i in n.children)if(!t.children[i]||!R_(t.children[i],n.children[i],e))return!1;return!0},subset:P_},T_={exact:function(t,n){return xi(t,n)},subset:function(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>E_(t[e],n[e]))},ignored:()=>!0};function A_(t,n,e){return cB[e.paths](t.root,n.root,e.matrixParams)&&T_[e.queryParams](t.queryParams,n.queryParams)&&!("exact"===e.fragment&&t.fragment!==n.fragment)}function P_(t,n,e){return B_(t,n,n.segments,e)}function B_(t,n,e,i){if(t.segments.length>e.length){const o=t.segments.slice(0,e.length);return!(!cr(o,e)||n.hasChildren()||!ld(o,e,i))}if(t.segments.length===e.length){if(!cr(t.segments,e)||!ld(t.segments,e,i))return!1;for(const o in n.children)if(!t.children[o]||!P_(t.children[o],n.children[o],i))return!1;return!0}{const o=e.slice(0,t.segments.length),r=e.slice(t.segments.length);return!!(cr(t.segments,o)&&ld(t.segments,o,i)&&t.children[pe])&&B_(t.children[pe],n,r,i)}}function ld(t,n,e){return n.every((i,o)=>T_[e](t[o].parameters,i.parameters))}class ar{constructor(n,e,i){this.root=n,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=Ms(this.queryParams)),this._queryParamMap}toString(){return pB.serialize(this)}}class De{constructor(n,e){this.segments=n,this.children=e,this.parent=null,Tt(e,(i,o)=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return ad(this)}}class ga{constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap||(this._parameterMap=Ms(this.parameters)),this._parameterMap}toString(){return $_(this)}}function cr(t,n){return t.length===n.length&&t.every((e,i)=>e.path===n[i].path)}class tg{}class O_{parse(n){const e=new wB(n);return new ar(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){var t;return`${`/${ba(n.root,!0)}`}${function(t){const n=Object.keys(t).map(e=>{const i=t[e];return Array.isArray(i)?i.map(o=>`${cd(e)}=${cd(o)}`).join("&"):`${cd(e)}=${cd(i)}`}).filter(e=>!!e);return n.length?`?${n.join("&")}`:""}(n.queryParams)}${"string"==typeof n.fragment?`#${t=n.fragment,encodeURI(t)}`:""}`}}const pB=new O_;function ad(t){return t.segments.map(n=>$_(n)).join("/")}function ba(t,n){if(!t.hasChildren())return ad(t);if(n){const e=t.children[pe]?ba(t.children[pe],!1):"",i=[];return Tt(t.children,(o,r)=>{r!==pe&&i.push(`${r}:${ba(o,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}{const e=function(t,n){let e=[];return Tt(t.children,(i,o)=>{o===pe&&(e=e.concat(n(i,o)))}),Tt(t.children,(i,o)=>{o!==pe&&(e=e.concat(n(i,o)))}),e}(t,(i,o)=>o===pe?[ba(t.children[pe],!1)]:[`${o}:${ba(i,!1)}`]);return 1===Object.keys(t.children).length&&null!=t.children[pe]?`${ad(t)}/${e[0]}`:`${ad(t)}/(${e.join("//")})`}}function L_(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function cd(t){return L_(t).replace(/%3B/gi,";")}function ng(t){return L_(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function ud(t){return decodeURIComponent(t)}function V_(t){return ud(t.replace(/\+/g,"%20"))}function $_(t){return`${ng(t.path)}${function(t){return Object.keys(t).map(n=>`;${ng(n)}=${ng(t[n])}`).join("")}(t.parameters)}`}const vB=/^[^\/()?;=#]+/;function dd(t){const n=t.match(vB);return n?n[0]:""}const yB=/^[^=?&#]+/,IB=/^[^?&#]+/;class wB{constructor(n){this.url=n,this.remaining=n}parseRootSegment(){return this.consumeOptional("/"),""===this.remaining||this.peekStartsWith("?")||this.peekStartsWith("#")?new De([],{}):new De([],this.parseChildren())}parseQueryParams(){const n={};if(this.consumeOptional("?"))do{this.parseQueryParam(n)}while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(""===this.remaining)return{};this.consumeOptional("/");const n=[];for(this.peekStartsWith("(")||n.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),n.push(this.parseSegment());let e={};this.peekStartsWith("/(")&&(this.capture("/"),e=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(n.length>0||Object.keys(e).length>0)&&(i[pe]=new De(n,e)),i}parseSegment(){const n=dd(this.remaining);if(""===n&&this.peekStartsWith(";"))throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);return this.capture(n),new ga(ud(n),this.parseMatrixParams())}parseMatrixParams(){const n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){const e=dd(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){const o=dd(this.remaining);o&&(i=o,this.capture(i))}n[ud(e)]=ud(i)}parseQueryParam(n){const e=function(t){const n=t.match(yB);return n?n[0]:""}(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){const s=function(t){const n=t.match(IB);return n?n[0]:""}(this.remaining);s&&(i=s,this.capture(i))}const o=V_(e),r=V_(i);if(n.hasOwnProperty(o)){let s=n[o];Array.isArray(s)||(s=[s],n[o]=s),s.push(r)}else n[o]=r}parseParens(n){const e={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){const i=dd(this.remaining),o=this.remaining[i.length];if("/"!==o&&")"!==o&&";"!==o)throw new Error(`Cannot parse url '${this.url}'`);let r;i.indexOf(":")>-1?(r=i.substr(0,i.indexOf(":")),this.capture(r),this.capture(":")):n&&(r=pe);const s=this.parseChildren();e[r]=1===Object.keys(s).length?s[pe]:new De([],s),this.consumeOptional("//")}return e}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return!!this.peekStartsWith(n)&&(this.remaining=this.remaining.substring(n.length),!0)}capture(n){if(!this.consumeOptional(n))throw new Error(`Expected "${n}".`)}}class H_{constructor(n){this._root=n}get root(){return this._root.value}parent(n){const e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){const e=ig(n,this._root);return e?e.children.map(i=>i.value):[]}firstChild(n){const e=ig(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){const e=og(n,this._root);return e.length<2?[]:e[e.length-2].children.map(o=>o.value).filter(o=>o!==n)}pathFromRoot(n){return og(n,this._root).map(e=>e.value)}}function ig(t,n){if(t===n.value)return n;for(const e of n.children){const i=ig(t,e);if(i)return i}return null}function og(t,n){if(t===n.value)return[n];for(const e of n.children){const i=og(t,e);if(i.length)return i.unshift(n),i}return[]}class Gi{constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}}function va(t){const n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}class j_ extends H_{constructor(n,e){super(n),this.snapshot=e,rg(this,n)}toString(){return this.snapshot.toString()}}function z_(t,n){const e=function(t,n){const s=new hd([],{},{},"",{},pe,n,null,t.root,-1,{});return new W_("",new Gi(s,[]))}(t,n),i=new di([new ga("",{})]),o=new di({}),r=new di({}),s=new di({}),l=new di(""),a=new xs(i,o,s,l,r,pe,n,e.root);return a.snapshot=e.root,new j_(new Gi(a,[]),e)}class xs{constructor(n,e,i,o,r,s,l,a){this.url=n,this.params=e,this.queryParams=i,this.fragment=o,this.data=r,this.outlet=s,this.component=l,this._futureSnapshot=a}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe(je(n=>Ms(n)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe(je(n=>Ms(n)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}}function U_(t,n="emptyOnly"){const e=t.pathFromRoot;let i=0;if("always"!==n)for(i=e.length-1;i>=1;){const o=e[i],r=e[i-1];if(o.routeConfig&&""===o.routeConfig.path)i--;else{if(r.component)break;i--}}return function(t){return t.reduce((n,e)=>({params:Object.assign(Object.assign({},n.params),e.params),data:Object.assign(Object.assign({},n.data),e.data),resolve:Object.assign(Object.assign({},n.resolve),e._resolvedData)}),{params:{},data:{},resolve:{}})}(e.slice(i))}class hd{constructor(n,e,i,o,r,s,l,a,c,u,d){this.url=n,this.params=e,this.queryParams=i,this.fragment=o,this.data=r,this.outlet=s,this.component=l,this.routeConfig=a,this._urlSegment=c,this._lastPathIndex=u,this._resolve=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=Ms(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=Ms(this.queryParams)),this._queryParamMap}toString(){return`Route(url:'${this.url.map(i=>i.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`}}class W_ extends H_{constructor(n,e){super(e),this.url=n,rg(this,e)}toString(){return G_(this._root)}}function rg(t,n){n.value._routerState=t,n.children.forEach(e=>rg(t,e))}function G_(t){const n=t.children.length>0?` { ${t.children.map(G_).join(", ")} } `:"";return`${t.value}${n}`}function sg(t){if(t.snapshot){const n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,xi(n.queryParams,e.queryParams)||t.queryParams.next(e.queryParams),n.fragment!==e.fragment&&t.fragment.next(e.fragment),xi(n.params,e.params)||t.params.next(e.params),function(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!xi(t[e],n[e]))return!1;return!0}(n.url,e.url)||t.url.next(e.url),xi(n.data,e.data)||t.data.next(e.data)}else t.snapshot=t._futureSnapshot,t.data.next(t._futureSnapshot.data)}function lg(t,n){return xi(t.params,n.params)&&function(t,n){return cr(t,n)&&t.every((e,i)=>xi(e.parameters,n[i].parameters))}(t.url,n.url)&&!(!t.parent!=!n.parent)&&(!t.parent||lg(t.parent,n.parent))}function fd(t,n,e){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){const i=e.value;i._futureSnapshot=n.value;const o=function(t,n,e){return n.children.map(i=>{for(const o of e.children)if(t.shouldReuseRoute(i.value,o.value.snapshot))return fd(t,i,o);return fd(t,i)})}(t,n,e);return new Gi(i,o)}{if(t.shouldAttach(n.value)){const r=t.retrieve(n.value);if(null!==r){const s=r.route;return q_(n,s),s}}const i=function(t){return new xs(new di(t.url),new di(t.params),new di(t.queryParams),new di(t.fragment),new di(t.data),t.outlet,t.component,t)}(n.value),o=n.children.map(r=>fd(t,r));return new Gi(i,o)}}function q_(t,n){if(t.value.routeConfig!==n.value.routeConfig)throw new Error("Cannot reattach ActivatedRouteSnapshot created from a different route");if(t.children.length!==n.children.length)throw new Error("Cannot reattach ActivatedRouteSnapshot with a different number of children");n.value._futureSnapshot=t.value;for(let e=0;e<t.children.length;++e)q_(t.children[e],n.children[e])}function pd(t){return"object"==typeof t&&null!=t&&!t.outlets&&!t.segmentPath}function ya(t){return"object"==typeof t&&null!=t&&t.outlets}function ag(t,n,e,i,o){let r={};return i&&Tt(i,(s,l)=>{r[l]=Array.isArray(s)?s.map(a=>`${a}`):`${s}`}),new ar(e.root===t?n:K_(e.root,t,n),r,o)}function K_(t,n,e){const i={};return Tt(t.children,(o,r)=>{i[r]=o===n?e:K_(o,n,e)}),new De(t.segments,i)}class X_{constructor(n,e,i){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=i,n&&i.length>0&&pd(i[0]))throw new Error("Root segment cannot have matrix parameters");const o=i.find(ya);if(o&&o!==S_(i))throw new Error("{outlets:{}} has to be the last command")}toRoot(){return this.isAbsolute&&1===this.commands.length&&"/"==this.commands[0]}}class cg{constructor(n,e,i){this.segmentGroup=n,this.processChildren=e,this.index=i}}function Q_(t,n,e){if(t||(t=new De([],{})),0===t.segments.length&&t.hasChildren())return md(t,n,e);const i=function(t,n,e){let i=0,o=n;const r={match:!1,pathIndex:0,commandIndex:0};for(;o<t.segments.length;){if(i>=e.length)return r;const s=t.segments[o],l=e[i];if(ya(l))break;const a=`${l}`,c=i<e.length-1?e[i+1]:null;if(o>0&&void 0===a)break;if(a&&c&&"object"==typeof c&&void 0===c.outlets){if(!Y_(a,c,s))return r;i+=2}else{if(!Y_(a,{},s))return r;i++}o++}return{match:!0,pathIndex:o,commandIndex:i}}(t,n,e),o=e.slice(i.commandIndex);if(i.match&&i.pathIndex<t.segments.length){const r=new De(t.segments.slice(0,i.pathIndex),{});return r.children[pe]=new De(t.segments.slice(i.pathIndex),t.children),md(r,0,o)}return i.match&&0===o.length?new De(t.segments,{}):i.match&&!t.hasChildren()?ug(t,n,e):i.match?md(t,0,o):ug(t,n,e)}function md(t,n,e){if(0===e.length)return new De(t.segments,{});{const i=function(t){return ya(t[0])?t[0].outlets:{[pe]:t}}(e),o={};return Tt(i,(r,s)=>{"string"==typeof r&&(r=[r]),null!==r&&(o[s]=Q_(t.children[s],n,r))}),Tt(t.children,(r,s)=>{void 0===i[s]&&(o[s]=r)}),new De(t.segments,o)}}function ug(t,n,e){const i=t.segments.slice(0,n);let o=0;for(;o<e.length;){const r=e[o];if(ya(r)){const a=PB(r.outlets);return new De(i,a)}if(0===o&&pd(e[0])){i.push(new ga(t.segments[n].path,Z_(e[0]))),o++;continue}const s=ya(r)?r.outlets[pe]:`${r}`,l=o<e.length-1?e[o+1]:null;s&&l&&pd(l)?(i.push(new ga(s,Z_(l))),o+=2):(i.push(new ga(s,{})),o++)}return new De(i,{})}function PB(t){const n={};return Tt(t,(e,i)=>{"string"==typeof e&&(e=[e]),null!==e&&(n[i]=ug(new De([],{}),0,e))}),n}function Z_(t){const n={};return Tt(t,(e,i)=>n[i]=`${e}`),n}function Y_(t,n,e){return t==e.path&&xi(n,e.parameters)}class OB{constructor(n,e,i,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=i,this.forwardEvent=o}activate(n){const e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,n),sg(this.futureState.root),this.activateChildRoutes(e,i,n)}deactivateChildRoutes(n,e,i){const o=va(e);n.children.forEach(r=>{const s=r.value.outlet;this.deactivateRoutes(r,o[s],i),delete o[s]}),Tt(o,(r,s)=>{this.deactivateRouteAndItsChildren(r,i)})}deactivateRoutes(n,e,i){const o=n.value,r=e?e.value:null;if(o===r)if(o.component){const s=i.getContext(o.outlet);s&&this.deactivateChildRoutes(n,e,s.children)}else this.deactivateChildRoutes(n,e,i);else r&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(n,e){this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){const i=e.getContext(n.value.outlet);if(i&&i.outlet){const o=i.outlet.detach(),r=i.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:o,route:n,contexts:r})}}deactivateRouteAndOutlet(n,e){const i=e.getContext(n.value.outlet),o=i&&n.value.component?i.children:e,r=va(n);for(const s of Object.keys(r))this.deactivateRouteAndItsChildren(r[s],o);i&&i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated(),i.attachRef=null,i.resolver=null,i.route=null)}activateChildRoutes(n,e,i){const o=va(e);n.children.forEach(r=>{this.activateRoutes(r,o[r.value.outlet],i),this.forwardEvent(new iB(r.value.snapshot))}),n.children.length&&this.forwardEvent(new tB(n.value.snapshot))}activateRoutes(n,e,i){const o=n.value,r=e?e.value:null;if(sg(o),o===r)if(o.component){const s=i.getOrCreateContext(o.outlet);this.activateChildRoutes(n,e,s.children)}else this.activateChildRoutes(n,e,i);else if(o.component){const s=i.getOrCreateContext(o.outlet);if(this.routeReuseStrategy.shouldAttach(o.snapshot)){const l=this.routeReuseStrategy.retrieve(o.snapshot);this.routeReuseStrategy.store(o.snapshot,null),s.children.onOutletReAttached(l.contexts),s.attachRef=l.componentRef,s.route=l.route.value,s.outlet&&s.outlet.attach(l.componentRef,l.route.value),J_(l.route)}else{const l=function(t){for(let n=t.parent;n;n=n.parent){const e=n.routeConfig;if(e&&e._loadedConfig)return e._loadedConfig;if(e&&e.component)return null}return null}(o.snapshot),a=l?l.module.componentFactoryResolver:null;s.attachRef=null,s.route=o,s.resolver=a,s.outlet&&s.outlet.activateWith(o,a),this.activateChildRoutes(n,null,s.children)}}else this.activateChildRoutes(n,null,i)}}function J_(t){sg(t.value),t.children.forEach(J_)}class dg{constructor(n,e){this.routes=n,this.module=e}}function wo(t){return"function"==typeof t}function ur(t){return t instanceof ar}const Da=Symbol("INITIAL_VALUE");function Ia(){return lr(t=>function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=el(t),i=tv(t),o=mw(t),r=o.args,s=o.keys;if(0===r.length)return Pt([],e);var l=new qe($7(r,e,s?function(a){return bw(s,a)}:Lo));return i?l.pipe(gw(i)):l}(t.map(n=>n.pipe(sc(1),function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=el(t);return Ut(function(i,o){(e?Zm(t,i,e):Zm(t,i)).subscribe(o)})}(Da)))).pipe(I_((n,e)=>{let i=!1;return e.reduce((o,r,s)=>o!==Da?o:(r===Da&&(i=!0),i||!1!==r&&s!==e.length-1&&!ur(r)?o:r),n)},Da),_s(n=>n!==Da),je(n=>ur(n)?n:!0===n),sc(1)))}let eN=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=Dr({type:t,selectors:[["ng-component"]],decls:1,vars:0,template:function(e,i){1&e&&Yo(0,"router-outlet")},directives:function(){return[bg]},encapsulation:2}),t})();function tN(t,n=""){for(let e=0;e<t.length;e++){const i=t[e];UB(i,WB(n,i))}}function UB(t,n){t.children&&tN(t.children,n)}function WB(t,n){return n?t||n.path?t&&!n.path?`${t}/`:!t&&n.path?n.path:`${t}/${n.path}`:"":t}function hg(t){const n=t.children&&t.children.map(hg),e=n?Object.assign(Object.assign({},t),{children:n}):Object.assign({},t);return!e.component&&(n||e.loadChildren)&&e.outlet&&e.outlet!==pe&&(e.component=eN),e}function Un(t){return t.outlet||pe}function nN(t,n){const e=t.filter(i=>Un(i)===n);return e.push(...t.filter(i=>Un(i)!==n)),e}const iN={matched:!1,consumedSegments:[],lastChild:0,parameters:{},positionalParamSegments:{}};function gd(t,n,e){var i;if(""===n.path)return"full"===n.pathMatch&&(t.hasChildren()||e.length>0)?Object.assign({},iN):{matched:!0,consumedSegments:[],lastChild:0,parameters:{},positionalParamSegments:{}};const r=(n.matcher||sB)(e,t,n);if(!r)return Object.assign({},iN);const s={};Tt(r.posParams,(a,c)=>{s[c]=a.path});const l=r.consumed.length>0?Object.assign(Object.assign({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,lastChild:r.consumed.length,parameters:l,positionalParamSegments:null!==(i=r.posParams)&&void 0!==i?i:{}}}function bd(t,n,e,i,o="corrected"){if(e.length>0&&function(t,n,e){return e.some(i=>vd(t,n,i)&&Un(i)!==pe)}(t,e,i)){const s=new De(n,function(t,n,e,i){const o={};o[pe]=i,i._sourceSegment=t,i._segmentIndexShift=n.length;for(const r of e)if(""===r.path&&Un(r)!==pe){const s=new De([],{});s._sourceSegment=t,s._segmentIndexShift=n.length,o[Un(r)]=s}return o}(t,n,i,new De(e,t.children)));return s._sourceSegment=t,s._segmentIndexShift=n.length,{segmentGroup:s,slicedSegments:[]}}if(0===e.length&&function(t,n,e){return e.some(i=>vd(t,n,i))}(t,e,i)){const s=new De(t.segments,function(t,n,e,i,o,r){const s={};for(const l of i)if(vd(t,e,l)&&!o[Un(l)]){const a=new De([],{});a._sourceSegment=t,a._segmentIndexShift="legacy"===r?t.segments.length:n.length,s[Un(l)]=a}return Object.assign(Object.assign({},o),s)}(t,n,e,i,t.children,o));return s._sourceSegment=t,s._segmentIndexShift=n.length,{segmentGroup:s,slicedSegments:e}}const r=new De(t.segments,t.children);return r._sourceSegment=t,r._segmentIndexShift=n.length,{segmentGroup:r,slicedSegments:e}}function vd(t,n,e){return(!(t.hasChildren()||n.length>0)||"full"!==e.pathMatch)&&""===e.path}function oN(t,n,e,i){return!!(Un(t)===i||i!==pe&&vd(n,e,t))&&("**"===t.path||gd(n,t,e).matched)}function rN(t,n,e){return 0===n.length&&!t.children[e]}class Ca{constructor(n){this.segmentGroup=n||null}}class sN{constructor(n){this.urlTree=n}}function yd(t){return new qe(n=>n.error(new Ca(t)))}function lN(t){return new qe(n=>n.error(new sN(t)))}function QB(t){return new qe(n=>n.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${t}'`)))}class JB{constructor(n,e,i,o,r){this.configLoader=e,this.urlSerializer=i,this.urlTree=o,this.config=r,this.allowRedirects=!0,this.ngModule=n.get(Ni)}apply(){const n=bd(this.urlTree.root,[],[],this.config).segmentGroup,e=new De(n.segments,n.children);return this.expandSegmentGroup(this.ngModule,this.config,e,pe).pipe(je(r=>this.createUrlTree(fg(r),this.urlTree.queryParams,this.urlTree.fragment))).pipe(Co(r=>{if(r instanceof sN)return this.allowRedirects=!1,this.match(r.urlTree);throw r instanceof Ca?this.noMatchError(r):r}))}match(n){return this.expandSegmentGroup(this.ngModule,this.config,n.root,pe).pipe(je(o=>this.createUrlTree(fg(o),n.queryParams,n.fragment))).pipe(Co(o=>{throw o instanceof Ca?this.noMatchError(o):o}))}noMatchError(n){return new Error(`Cannot match any routes. URL Segment: '${n.segmentGroup}'`)}createUrlTree(n,e,i){const o=n.segments.length>0?new De([],{[pe]:n}):n;return new ar(o,e,i)}expandSegmentGroup(n,e,i,o){return 0===i.segments.length&&i.hasChildren()?this.expandChildren(n,e,i).pipe(je(r=>new De([],r))):this.expandSegment(n,i,e,i.segments,o,!0)}expandChildren(n,e,i){const o=[];for(const r of Object.keys(i.children))"primary"===r?o.unshift(r):o.push(r);return Pt(o).pipe(pa(r=>{const s=i.children[r],l=nN(e,r);return this.expandSegmentGroup(n,l,s,r).pipe(je(a=>({segment:a,outlet:r})))}),I_((r,s)=>(r[s.outlet]=s.segment,r),{}),function(t,n){var e=arguments.length>=2;return function(i){return i.pipe(t?_s(function(o,r){return t(o,r,i)}):Lo,Ym(1),e?w_(n):C_(function(){return new sd}))}}())}expandSegment(n,e,i,o,r,s){return Pt(i).pipe(pa(l=>this.expandSegmentAgainstRoute(n,e,i,l,o,r,s).pipe(Co(c=>{if(c instanceof Ca)return ae(null);throw c}))),Ns(l=>!!l),Co((l,a)=>{if(l instanceof sd||"EmptyError"===l.name){if(rN(e,o,r))return ae(new De([],{}));throw new Ca(e)}throw l}))}expandSegmentAgainstRoute(n,e,i,o,r,s,l){return oN(o,e,r,s)?void 0===o.redirectTo?this.matchSegmentAgainstRoute(n,e,o,r,s):l&&this.allowRedirects?this.expandSegmentAgainstRouteUsingRedirect(n,e,i,o,r,s):yd(e):yd(e)}expandSegmentAgainstRouteUsingRedirect(n,e,i,o,r,s){return"**"===o.path?this.expandWildCardWithParamsAgainstRouteUsingRedirect(n,i,o,s):this.expandRegularSegmentAgainstRouteUsingRedirect(n,e,i,o,r,s)}expandWildCardWithParamsAgainstRouteUsingRedirect(n,e,i,o){const r=this.applyRedirectCommands([],i.redirectTo,{});return i.redirectTo.startsWith("/")?lN(r):this.lineralizeSegments(i,r).pipe(wt(s=>{const l=new De(s,{});return this.expandSegment(n,l,e,s,o,!1)}))}expandRegularSegmentAgainstRouteUsingRedirect(n,e,i,o,r,s){const{matched:l,consumedSegments:a,lastChild:c,positionalParamSegments:u}=gd(e,o,r);if(!l)return yd(e);const d=this.applyRedirectCommands(a,o.redirectTo,u);return o.redirectTo.startsWith("/")?lN(d):this.lineralizeSegments(o,d).pipe(wt(h=>this.expandSegment(n,e,i,h.concat(r.slice(c)),s,!1)))}matchSegmentAgainstRoute(n,e,i,o,r){if("**"===i.path)return i.loadChildren?(i._loadedConfig?ae(i._loadedConfig):this.configLoader.load(n.injector,i)).pipe(je(h=>(i._loadedConfig=h,new De(o,{})))):ae(new De(o,{}));const{matched:s,consumedSegments:l,lastChild:a}=gd(e,i,o);if(!s)return yd(e);const c=o.slice(a);return this.getChildConfig(n,i,o).pipe(wt(d=>{const h=d.module,f=d.routes,{segmentGroup:p,slicedSegments:m}=bd(e,l,c,f),g=new De(p.segments,p.children);if(0===m.length&&g.hasChildren())return this.expandChildren(h,f,g).pipe(je(O=>new De(l,O)));if(0===f.length&&0===m.length)return ae(new De(l,{}));const M=Un(i)===r;return this.expandSegment(h,g,f,m,M?pe:r,!0).pipe(je(k=>new De(l.concat(k.segments),k.children)))}))}getChildConfig(n,e,i){return e.children?ae(new dg(e.children,n)):e.loadChildren?void 0!==e._loadedConfig?ae(e._loadedConfig):this.runCanLoadGuards(n.injector,e,i).pipe(wt(o=>{return o?this.configLoader.load(n.injector,e).pipe(je(r=>(e._loadedConfig=r,r))):(t=e,new qe(n=>n.error(eg(`Cannot load children because the guard of the route "path: '${t.path}'" returned false`))));var t})):ae(new dg([],n))}runCanLoadGuards(n,e,i){const o=e.canLoad;return o&&0!==o.length?ae(o.map(s=>{const l=n.get(s);let a;if((t=l)&&wo(t.canLoad))a=l.canLoad(e,i);else{if(!wo(l))throw new Error("Invalid CanLoad guard");a=l(e,i)}var t;return Fi(a)})).pipe(Ia(),_n(s=>{if(!ur(s))return;const l=eg(`Redirecting to "${this.urlSerializer.serialize(s)}"`);throw l.url=s,l}),je(s=>!0===s)):ae(!0)}lineralizeSegments(n,e){let i=[],o=e.root;for(;;){if(i=i.concat(o.segments),0===o.numberOfChildren)return ae(i);if(o.numberOfChildren>1||!o.children[pe])return QB(n.redirectTo);o=o.children[pe]}}applyRedirectCommands(n,e,i){return this.applyRedirectCreatreUrlTree(e,this.urlSerializer.parse(e),n,i)}applyRedirectCreatreUrlTree(n,e,i,o){const r=this.createSegmentGroup(n,e.root,i,o);return new ar(r,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){const i={};return Tt(n,(o,r)=>{if("string"==typeof o&&o.startsWith(":")){const l=o.substring(1);i[r]=e[l]}else i[r]=o}),i}createSegmentGroup(n,e,i,o){const r=this.createSegments(n,e.segments,i,o);let s={};return Tt(e.children,(l,a)=>{s[a]=this.createSegmentGroup(n,l,i,o)}),new De(r,s)}createSegments(n,e,i,o){return e.map(r=>r.path.startsWith(":")?this.findPosParam(n,r,o):this.findOrReturn(r,i))}findPosParam(n,e,i){const o=i[e.path.substring(1)];if(!o)throw new Error(`Cannot redirect to '${n}'. Cannot find '${e.path}'.`);return o}findOrReturn(n,e){let i=0;for(const o of e){if(o.path===n.path)return e.splice(i),o;i++}return n}}function fg(t){const n={};for(const i of Object.keys(t.children)){const r=fg(t.children[i]);(r.segments.length>0||r.hasChildren())&&(n[i]=r)}return function(t){if(1===t.numberOfChildren&&t.children[pe]){const n=t.children[pe];return new De(t.segments.concat(n.segments),n.children)}return t}(new De(t.segments,n))}class aN{constructor(n){this.path=n,this.route=this.path[this.path.length-1]}}class Dd{constructor(n,e){this.component=n,this.route=e}}function nO(t,n,e){const i=t._root;return wa(i,n?n._root:null,e,[i.value])}function Id(t,n,e){const i=function(t){if(!t)return null;for(let n=t.parent;n;n=n.parent){const e=n.routeConfig;if(e&&e._loadedConfig)return e._loadedConfig}return null}(n);return(i?i.module.injector:e).get(t)}function wa(t,n,e,i,o={canDeactivateChecks:[],canActivateChecks:[]}){const r=va(n);return t.children.forEach(s=>{(function(t,n,e,i,o={canDeactivateChecks:[],canActivateChecks:[]}){const r=t.value,s=n?n.value:null,l=e?e.getContext(t.value.outlet):null;if(s&&r.routeConfig===s.routeConfig){const a=function(t,n,e){if("function"==typeof e)return e(t,n);switch(e){case"pathParamsChange":return!cr(t.url,n.url);case"pathParamsOrQueryParamsChange":return!cr(t.url,n.url)||!xi(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!lg(t,n)||!xi(t.queryParams,n.queryParams);case"paramsChange":default:return!lg(t,n)}}(s,r,r.routeConfig.runGuardsAndResolvers);a?o.canActivateChecks.push(new aN(i)):(r.data=s.data,r._resolvedData=s._resolvedData),wa(t,n,r.component?l?l.children:null:e,i,o),a&&l&&l.outlet&&l.outlet.isActivated&&o.canDeactivateChecks.push(new Dd(l.outlet.component,s))}else s&&_a(n,l,o),o.canActivateChecks.push(new aN(i)),wa(t,null,r.component?l?l.children:null:e,i,o)})(s,r[s.value.outlet],e,i.concat([s.value]),o),delete r[s.value.outlet]}),Tt(r,(s,l)=>_a(s,e.getContext(l),o)),o}function _a(t,n,e){const i=va(t),o=t.value;Tt(i,(r,s)=>{_a(r,o.component?n?n.children.getContext(s):null:n,e)}),e.canDeactivateChecks.push(new Dd(o.component&&n&&n.outlet&&n.outlet.isActivated?n.outlet.component:null,o))}class mO{}function cN(t){return new qe(n=>n.error(t))}class bO{constructor(n,e,i,o,r,s){this.rootComponentType=n,this.config=e,this.urlTree=i,this.url=o,this.paramsInheritanceStrategy=r,this.relativeLinkResolution=s}recognize(){const n=bd(this.urlTree.root,[],[],this.config.filter(s=>void 0===s.redirectTo),this.relativeLinkResolution).segmentGroup,e=this.processSegmentGroup(this.config,n,pe);if(null===e)return null;const i=new hd([],Object.freeze({}),Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,{},pe,this.rootComponentType,null,this.urlTree.root,-1,{}),o=new Gi(i,e),r=new W_(this.url,o);return this.inheritParamsAndData(r._root),r}inheritParamsAndData(n){const e=n.value,i=U_(e,this.paramsInheritanceStrategy);e.params=Object.freeze(i.params),e.data=Object.freeze(i.data),n.children.forEach(o=>this.inheritParamsAndData(o))}processSegmentGroup(n,e,i){return 0===e.segments.length&&e.hasChildren()?this.processChildren(n,e):this.processSegment(n,e,e.segments,i)}processChildren(n,e){const i=[];for(const r of Object.keys(e.children)){const s=e.children[r],l=nN(n,r),a=this.processSegmentGroup(l,s,r);if(null===a)return null;i.push(...a)}const o=uN(i);return o.sort((n,e)=>n.value.outlet===pe?-1:e.value.outlet===pe?1:n.value.outlet.localeCompare(e.value.outlet)),o}processSegment(n,e,i,o){for(const r of n){const s=this.processSegmentAgainstRoute(r,e,i,o);if(null!==s)return s}return rN(e,i,o)?[]:null}processSegmentAgainstRoute(n,e,i,o){if(n.redirectTo||!oN(n,e,i,o))return null;let r,s=[],l=[];if("**"===n.path){const f=i.length>0?S_(i).parameters:{};r=new hd(i,f,Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,fN(n),Un(n),n.component,n,dN(e),hN(e)+i.length,pN(n))}else{const f=gd(e,n,i);if(!f.matched)return null;s=f.consumedSegments,l=i.slice(f.lastChild),r=new hd(s,f.parameters,Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,fN(n),Un(n),n.component,n,dN(e),hN(e)+s.length,pN(n))}const a=(t=n).children?t.children:t.loadChildren?t._loadedConfig.routes:[],{segmentGroup:c,slicedSegments:u}=bd(e,s,l,a.filter(f=>void 0===f.redirectTo),this.relativeLinkResolution);var t;if(0===u.length&&c.hasChildren()){const f=this.processChildren(a,c);return null===f?null:[new Gi(r,f)]}if(0===a.length&&0===u.length)return[new Gi(r,[])];const d=Un(n)===o,h=this.processSegment(a,c,u,d?pe:o);return null===h?null:[new Gi(r,h)]}}function DO(t){const n=t.value.routeConfig;return n&&""===n.path&&void 0===n.redirectTo}function uN(t){const n=[],e=new Set;for(const i of t){if(!DO(i)){n.push(i);continue}const o=n.find(r=>i.value.routeConfig===r.value.routeConfig);void 0!==o?(o.children.push(...i.children),e.add(o)):n.push(i)}for(const i of e){const o=uN(i.children);n.push(new Gi(i.value,o))}return n.filter(i=>!e.has(i))}function dN(t){let n=t;for(;n._sourceSegment;)n=n._sourceSegment;return n}function hN(t){let n=t,e=n._segmentIndexShift?n._segmentIndexShift:0;for(;n._sourceSegment;)n=n._sourceSegment,e+=n._segmentIndexShift?n._segmentIndexShift:0;return e-1}function fN(t){return t.data||{}}function pN(t){return t.resolve||{}}function pg(t){return lr(n=>{const e=t(n);return e?Pt(e).pipe(je(()=>n)):ae(n)})}class FO extends class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}}{}const mg=new ge("ROUTES");class mN{constructor(n,e,i,o){this.loader=n,this.compiler=e,this.onLoadStartListener=i,this.onLoadEndListener=o}load(n,e){if(e._loader$)return e._loader$;this.onLoadStartListener&&this.onLoadStartListener(e);const o=this.loadModuleFactory(e.loadChildren).pipe(je(r=>{this.onLoadEndListener&&this.onLoadEndListener(e);const s=r.create(n);return new dg(k_(s.injector.get(mg,void 0,H.Self|H.Optional)).map(hg),s)}),Co(r=>{throw e._loader$=void 0,r}));return e._loader$=new j7(o,()=>new ki).pipe(D_()),e._loader$}loadModuleFactory(n){return"string"==typeof n?Pt(this.loader.load(n)):Fi(n()).pipe(wt(e=>e instanceof qD?ae(e):Pt(this.compiler.compileModuleAsync(e))))}}class EO{constructor(){this.outlet=null,this.route=null,this.resolver=null,this.children=new Fs,this.attachRef=null}}class Fs{constructor(){this.contexts=new Map}onChildOutletCreated(n,e){const i=this.getOrCreateContext(n);i.outlet=e,this.contexts.set(n,i)}onChildOutletDestroyed(n){const e=this.getContext(n);e&&(e.outlet=null)}onOutletDeactivated(){const n=this.contexts;return this.contexts=new Map,n}onOutletReAttached(n){this.contexts=n}getOrCreateContext(n){let e=this.getContext(n);return e||(e=new EO,this.contexts.set(n,e)),e}getContext(n){return this.contexts.get(n)||null}}class SO{shouldProcessUrl(n){return!0}extract(n){return n}merge(n,e){return n}}function TO(t){throw t}function AO(t,n,e){return n.parse("/")}function gN(t,n){return ae(null)}const RO={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},PO={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};let tn=(()=>{class t{constructor(e,i,o,r,s,l,a,c){this.rootComponentType=e,this.urlSerializer=i,this.rootContexts=o,this.location=r,this.config=c,this.lastSuccessfulNavigation=null,this.currentNavigation=null,this.disposed=!1,this.lastLocationChangeInfo=null,this.navigationId=0,this.currentPageId=0,this.isNgZoneEnabled=!1,this.events=new ki,this.errorHandler=TO,this.malformedUriErrorHandler=AO,this.navigated=!1,this.lastSuccessfulId=-1,this.hooks={beforePreactivation:gN,afterPreactivation:gN},this.urlHandlingStrategy=new SO,this.routeReuseStrategy=new FO,this.onSameUrlNavigation="ignore",this.paramsInheritanceStrategy="emptyOnly",this.urlUpdateStrategy="deferred",this.relativeLinkResolution="corrected",this.canceledNavigationResolution="replace",this.ngModule=s.get(Ni),this.console=s.get(Iu);const h=s.get(dt);this.isNgZoneEnabled=h instanceof dt&&dt.isInAngularZone(),this.resetConfig(c),this.currentUrlTree=new ar(new De([],{}),{},null),this.rawUrlTree=this.currentUrlTree,this.browserUrlTree=this.currentUrlTree,this.configLoader=new mN(l,a,f=>this.triggerEvent(new N_(f)),f=>this.triggerEvent(new M_(f))),this.routerState=z_(this.currentUrlTree,this.rootComponentType),this.transitions=new di({id:0,targetPageId:0,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,extractedUrl:this.urlHandlingStrategy.extract(this.currentUrlTree),urlAfterRedirects:this.urlHandlingStrategy.extract(this.currentUrlTree),rawUrl:this.currentUrlTree,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:"imperative",restoredState:null,currentSnapshot:this.routerState.snapshot,targetSnapshot:null,currentRouterState:this.routerState,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.navigations=this.setupNavigations(this.transitions),this.processNavigations()}get browserPageId(){var e;return null===(e=this.location.getState())||void 0===e?void 0:e.\u0275routerPageId}setupNavigations(e){const i=this.events;return e.pipe(_s(o=>0!==o.id),je(o=>Object.assign(Object.assign({},o),{extractedUrl:this.urlHandlingStrategy.extract(o.rawUrl)})),lr(o=>{let r=!1,s=!1;return ae(o).pipe(_n(l=>{this.currentNavigation={id:l.id,initialUrl:l.currentRawUrl,extractedUrl:l.extractedUrl,trigger:l.source,extras:l.extras,previousNavigation:this.lastSuccessfulNavigation?Object.assign(Object.assign({},this.lastSuccessfulNavigation),{previousNavigation:null}):null}}),lr(l=>{const a=!this.navigated||l.extractedUrl.toString()!==this.browserUrlTree.toString(),c=("reload"===this.onSameUrlNavigation||a)&&this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl);if(Cd(l.source)&&(this.browserUrlTree=l.rawUrl),c)return ae(l).pipe(lr(u=>{const d=this.transitions.getValue();return i.next(new Jm(u.id,this.serializeUrl(u.extractedUrl),u.source,u.restoredState)),d!==this.transitions.getValue()?Si:Promise.resolve(u)}),function(t,n,e,i){return lr(o=>function(t,n,e,i,o){return new JB(t,n,e,i,o).apply()}(t,n,e,o.extractedUrl,i).pipe(je(r=>Object.assign(Object.assign({},o),{urlAfterRedirects:r}))))}(this.ngModule.injector,this.configLoader,this.urlSerializer,this.config),_n(u=>{this.currentNavigation=Object.assign(Object.assign({},this.currentNavigation),{finalUrl:u.urlAfterRedirects})}),function(t,n,e,i,o){return wt(r=>function(t,n,e,i,o="emptyOnly",r="legacy"){try{const s=new bO(t,n,e,i,o,r).recognize();return null===s?cN(new mO):ae(s)}catch(s){return cN(s)}}(t,n,r.urlAfterRedirects,e(r.urlAfterRedirects),i,o).pipe(je(s=>Object.assign(Object.assign({},r),{targetSnapshot:s}))))}(this.rootComponentType,this.config,u=>this.serializeUrl(u),this.paramsInheritanceStrategy,this.relativeLinkResolution),_n(u=>{"eager"===this.urlUpdateStrategy&&(u.extras.skipLocationChange||this.setBrowserUrl(u.urlAfterRedirects,u),this.browserUrlTree=u.urlAfterRedirects);const d=new X7(u.id,this.serializeUrl(u.extractedUrl),this.serializeUrl(u.urlAfterRedirects),u.targetSnapshot);i.next(d)}));if(a&&this.rawUrlTree&&this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)){const{id:d,extractedUrl:h,source:f,restoredState:p,extras:m}=l,g=new Jm(d,this.serializeUrl(h),f,p);i.next(g);const M=z_(h,this.rootComponentType).snapshot;return ae(Object.assign(Object.assign({},l),{targetSnapshot:M,urlAfterRedirects:h,extras:Object.assign(Object.assign({},m),{skipLocationChange:!1,replaceUrl:!1})}))}return this.rawUrlTree=l.rawUrl,this.browserUrlTree=l.urlAfterRedirects,l.resolve(null),Si}),pg(l=>{const{targetSnapshot:a,id:c,extractedUrl:u,rawUrl:d,extras:{skipLocationChange:h,replaceUrl:f}}=l;return this.hooks.beforePreactivation(a,{navigationId:c,appliedUrlTree:u,rawUrlTree:d,skipLocationChange:!!h,replaceUrl:!!f})}),_n(l=>{const a=new Q7(l.id,this.serializeUrl(l.extractedUrl),this.serializeUrl(l.urlAfterRedirects),l.targetSnapshot);this.triggerEvent(a)}),je(l=>Object.assign(Object.assign({},l),{guards:nO(l.targetSnapshot,l.currentSnapshot,this.rootContexts)})),function(t,n){return wt(e=>{const{targetSnapshot:i,currentSnapshot:o,guards:{canActivateChecks:r,canDeactivateChecks:s}}=e;return 0===s.length&&0===r.length?ae(Object.assign(Object.assign({},e),{guardsResult:!0})):function(t,n,e,i){return Pt(t).pipe(wt(o=>function(t,n,e,i,o){const r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;return r&&0!==r.length?ae(r.map(l=>{const a=Id(l,n,o);let c;if(function(t){return t&&wo(t.canDeactivate)}(a))c=Fi(a.canDeactivate(t,n,e,i));else{if(!wo(a))throw new Error("Invalid CanDeactivate guard");c=Fi(a(t,n,e,i))}return c.pipe(Ns())})).pipe(Ia()):ae(!0)}(o.component,o.route,e,n,i)),Ns(o=>!0!==o,!0))}(s,i,o,t).pipe(wt(l=>l&&function(t){return"boolean"==typeof t}(l)?function(t,n,e,i){return Pt(n).pipe(pa(o=>Zm(function(t,n){return null!==t&&n&&n(new eB(t)),ae(!0)}(o.route.parent,i),function(t,n){return null!==t&&n&&n(new nB(t)),ae(!0)}(o.route,i),function(t,n,e){const i=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(s=>function(t){const n=t.routeConfig?t.routeConfig.canActivateChild:null;return n&&0!==n.length?{node:t,guards:n}:null}(s)).filter(s=>null!==s).map(s=>y_(()=>ae(s.guards.map(a=>{const c=Id(a,s.node,e);let u;if(function(t){return t&&wo(t.canActivateChild)}(c))u=Fi(c.canActivateChild(i,t));else{if(!wo(c))throw new Error("Invalid CanActivateChild guard");u=Fi(c(i,t))}return u.pipe(Ns())})).pipe(Ia())));return ae(r).pipe(Ia())}(t,o.path,e),function(t,n,e){const i=n.routeConfig?n.routeConfig.canActivate:null;return i&&0!==i.length?ae(i.map(r=>y_(()=>{const s=Id(r,n,e);let l;if(function(t){return t&&wo(t.canActivate)}(s))l=Fi(s.canActivate(n,t));else{if(!wo(s))throw new Error("Invalid CanActivate guard");l=Fi(s(n,t))}return l.pipe(Ns())}))).pipe(Ia()):ae(!0)}(t,o.route,e))),Ns(o=>!0!==o,!0))}(i,r,t,n):ae(l)),je(l=>Object.assign(Object.assign({},e),{guardsResult:l})))})}(this.ngModule.injector,l=>this.triggerEvent(l)),_n(l=>{if(ur(l.guardsResult)){const c=eg(`Redirecting to "${this.serializeUrl(l.guardsResult)}"`);throw c.url=l.guardsResult,c}const a=new Z7(l.id,this.serializeUrl(l.extractedUrl),this.serializeUrl(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);this.triggerEvent(a)}),_s(l=>!!l.guardsResult||(this.restoreHistory(l),this.cancelNavigationTransition(l,""),!1)),pg(l=>{if(l.guards.canActivateChecks.length)return ae(l).pipe(_n(a=>{const c=new Y7(a.id,this.serializeUrl(a.extractedUrl),this.serializeUrl(a.urlAfterRedirects),a.targetSnapshot);this.triggerEvent(c)}),lr(a=>{let c=!1;return ae(a).pipe(function(t,n){return wt(e=>{const{targetSnapshot:i,guards:{canActivateChecks:o}}=e;if(!o.length)return ae(e);let r=0;return Pt(o).pipe(pa(s=>function(t,n,e,i){return function(t,n,e,i){const o=Object.keys(t);if(0===o.length)return ae({});const r={};return Pt(o).pipe(wt(s=>function(t,n,e,i){const o=Id(t,n,i);return Fi(o.resolve?o.resolve(n,e):o(n,e))}(t[s],n,e,i).pipe(_n(l=>{r[s]=l}))),Ym(1),wt(()=>Object.keys(r).length===o.length?ae(r):Si))}(t._resolve,t,n,i).pipe(je(r=>(t._resolvedData=r,t.data=Object.assign(Object.assign({},t.data),U_(t,e).resolve),null)))}(s.route,i,t,n)),_n(()=>r++),Ym(1),wt(s=>r===o.length?ae(e):Si))})}(this.paramsInheritanceStrategy,this.ngModule.injector),_n({next:()=>c=!0,complete:()=>{c||(this.restoreHistory(a),this.cancelNavigationTransition(a,"At least one route resolver didn't emit any value."))}}))}),_n(a=>{const c=new J7(a.id,this.serializeUrl(a.extractedUrl),this.serializeUrl(a.urlAfterRedirects),a.targetSnapshot);this.triggerEvent(c)}))}),pg(l=>{const{targetSnapshot:a,id:c,extractedUrl:u,rawUrl:d,extras:{skipLocationChange:h,replaceUrl:f}}=l;return this.hooks.afterPreactivation(a,{navigationId:c,appliedUrlTree:u,rawUrlTree:d,skipLocationChange:!!h,replaceUrl:!!f})}),je(l=>{const a=function(t,n,e){const i=fd(t,n._root,e?e._root:void 0);return new j_(i,n)}(this.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);return Object.assign(Object.assign({},l),{targetRouterState:a})}),_n(l=>{this.currentUrlTree=l.urlAfterRedirects,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,l.rawUrl),this.routerState=l.targetRouterState,"deferred"===this.urlUpdateStrategy&&(l.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,l),this.browserUrlTree=l.urlAfterRedirects)}),((t,n,e)=>je(i=>(new OB(n,i.targetRouterState,i.currentRouterState,e).activate(t),i)))(this.rootContexts,this.routeReuseStrategy,l=>this.triggerEvent(l)),_n({next(){r=!0},complete(){r=!0}}),function(t){return Ut(function(n,e){try{n.subscribe(e)}finally{e.add(t)}})}(()=>{if(!r&&!s){const l=`Navigation ID ${o.id} is not equal to the current navigation id ${this.navigationId}`;"replace"===this.canceledNavigationResolution?(this.restoreHistory(o),this.cancelNavigationTransition(o,l)):this.cancelNavigationTransition(o,l)}this.currentNavigation=null}),Co(l=>{if(s=!0,function(t){return t&&t[F_]}(l)){const a=ur(l.url);a||(this.navigated=!0,this.restoreHistory(o,!0));const c=new __(o.id,this.serializeUrl(o.extractedUrl),l.message);i.next(c),a?setTimeout(()=>{const u=this.urlHandlingStrategy.merge(l.url,this.rawUrlTree),d={skipLocationChange:o.extras.skipLocationChange,replaceUrl:"eager"===this.urlUpdateStrategy||Cd(o.source)};this.scheduleNavigation(u,"imperative",null,d,{resolve:o.resolve,reject:o.reject,promise:o.promise})},0):o.resolve(!1)}else{this.restoreHistory(o,!0);const a=new K7(o.id,this.serializeUrl(o.extractedUrl),l);i.next(a);try{o.resolve(this.errorHandler(l))}catch(c){o.reject(c)}}return Si}))}))}resetRootComponentType(e){this.rootComponentType=e,this.routerState.root.component=this.rootComponentType}getTransition(){const e=this.transitions.value;return e.urlAfterRedirects=this.browserUrlTree,e}setTransition(e){this.transitions.next(Object.assign(Object.assign({},this.getTransition()),e))}initialNavigation(){this.setUpLocationChangeListener(),0===this.navigationId&&this.navigateByUrl(this.location.path(!0),{replaceUrl:!0})}setUpLocationChangeListener(){this.locationSubscription||(this.locationSubscription=this.location.subscribe(e=>{const i=this.extractLocationChangeInfoFromEvent(e);this.shouldScheduleNavigation(this.lastLocationChangeInfo,i)&&setTimeout(()=>{const{source:o,state:r,urlTree:s}=i,l={replaceUrl:!0};if(r){const a=Object.assign({},r);delete a.navigationId,delete a.\u0275routerPageId,0!==Object.keys(a).length&&(l.state=a)}this.scheduleNavigation(s,o,r,l)},0),this.lastLocationChangeInfo=i}))}extractLocationChangeInfoFromEvent(e){var i;return{source:"popstate"===e.type?"popstate":"hashchange",urlTree:this.parseUrl(e.url),state:(null===(i=e.state)||void 0===i?void 0:i.navigationId)?e.state:null,transitionId:this.getTransition().id}}shouldScheduleNavigation(e,i){if(!e)return!0;const o=i.urlTree.toString()===e.urlTree.toString();return i.transitionId!==e.transitionId||!o||!("hashchange"===i.source&&"popstate"===e.source||"popstate"===i.source&&"hashchange"===e.source)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.currentNavigation}triggerEvent(e){this.events.next(e)}resetConfig(e){tN(e),this.config=e.map(hg),this.navigated=!1,this.lastSuccessfulId=-1}ngOnDestroy(){this.dispose()}dispose(){this.transitions.complete(),this.locationSubscription&&(this.locationSubscription.unsubscribe(),this.locationSubscription=void 0),this.disposed=!0}createUrlTree(e,i={}){const{relativeTo:o,queryParams:r,fragment:s,queryParamsHandling:l,preserveFragment:a}=i,c=o||this.routerState.root,u=a?this.currentUrlTree.fragment:s;let d=null;switch(l){case"merge":d=Object.assign(Object.assign({},this.currentUrlTree.queryParams),r);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=r||null}return null!==d&&(d=this.removeEmptyProps(d)),function(t,n,e,i,o){if(0===e.length)return ag(n.root,n.root,n,i,o);const r=function(t){if("string"==typeof t[0]&&1===t.length&&"/"===t[0])return new X_(!0,0,t);let n=0,e=!1;const i=t.reduce((o,r,s)=>{if("object"==typeof r&&null!=r){if(r.outlets){const l={};return Tt(r.outlets,(a,c)=>{l[c]="string"==typeof a?a.split("/"):a}),[...o,{outlets:l}]}if(r.segmentPath)return[...o,r.segmentPath]}return"string"!=typeof r?[...o,r]:0===s?(r.split("/").forEach((l,a)=>{0==a&&"."===l||(0==a&&""===l?e=!0:".."===l?n++:""!=l&&o.push(l))}),o):[...o,r]},[]);return new X_(e,n,i)}(e);if(r.toRoot())return ag(n.root,new De([],{}),n,i,o);const s=function(t,n,e){if(t.isAbsolute)return new cg(n.root,!0,0);if(-1===e.snapshot._lastPathIndex){const r=e.snapshot._urlSegment;return new cg(r,r===n.root,0)}const i=pd(t.commands[0])?0:1;return function(t,n,e){let i=t,o=n,r=e;for(;r>o;){if(r-=o,i=i.parent,!i)throw new Error("Invalid number of '../'");o=i.segments.length}return new cg(i,!1,o-r)}(e.snapshot._urlSegment,e.snapshot._lastPathIndex+i,t.numberOfDoubleDots)}(r,n,t),l=s.processChildren?md(s.segmentGroup,s.index,r.commands):Q_(s.segmentGroup,s.index,r.commands);return ag(s.segmentGroup,l,n,i,o)}(c,this.currentUrlTree,e,d,null!=u?u:null)}navigateByUrl(e,i={skipLocationChange:!1}){const o=ur(e)?e:this.parseUrl(e),r=this.urlHandlingStrategy.merge(o,this.rawUrlTree);return this.scheduleNavigation(r,"imperative",null,i)}navigate(e,i={skipLocationChange:!1}){return function(t){for(let n=0;n<t.length;n++){const e=t[n];if(null==e)throw new Error(`The requested path contains ${e} segment at index ${n}`)}}(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){let i;try{i=this.urlSerializer.parse(e)}catch(o){i=this.malformedUriErrorHandler(o,this.urlSerializer,e)}return i}isActive(e,i){let o;if(o=!0===i?Object.assign({},RO):!1===i?Object.assign({},PO):i,ur(e))return A_(this.currentUrlTree,e,o);const r=this.parseUrl(e);return A_(this.currentUrlTree,r,o)}removeEmptyProps(e){return Object.keys(e).reduce((i,o)=>{const r=e[o];return null!=r&&(i[o]=r),i},{})}processNavigations(){this.navigations.subscribe(e=>{this.navigated=!0,this.lastSuccessfulId=e.id,this.currentPageId=e.targetPageId,this.events.next(new ma(e.id,this.serializeUrl(e.extractedUrl),this.serializeUrl(this.currentUrlTree))),this.lastSuccessfulNavigation=this.currentNavigation,e.resolve(!0)},e=>{this.console.warn(`Unhandled Navigation Error: ${e}`)})}scheduleNavigation(e,i,o,r,s){var l,a;if(this.disposed)return Promise.resolve(!1);const c=this.getTransition(),u=Cd(i)&&c&&!Cd(c.source),f=(this.lastSuccessfulId===c.id||this.currentNavigation?c.rawUrl:c.urlAfterRedirects).toString()===e.toString();if(u&&f)return Promise.resolve(!0);let p,m,g;s?(p=s.resolve,m=s.reject,g=s.promise):g=new Promise((k,O)=>{p=k,m=O});const M=++this.navigationId;let C;return"computed"===this.canceledNavigationResolution?(0===this.currentPageId&&(o=this.location.getState()),C=o&&o.\u0275routerPageId?o.\u0275routerPageId:r.replaceUrl||r.skipLocationChange?null!==(l=this.browserPageId)&&void 0!==l?l:0:(null!==(a=this.browserPageId)&&void 0!==a?a:0)+1):C=0,this.setTransition({id:M,targetPageId:C,source:i,restoredState:o,currentUrlTree:this.currentUrlTree,currentRawUrl:this.rawUrlTree,rawUrl:e,extras:r,resolve:p,reject:m,promise:g,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),g.catch(k=>Promise.reject(k))}setBrowserUrl(e,i){const o=this.urlSerializer.serialize(e),r=Object.assign(Object.assign({},i.extras.state),this.generateNgRouterState(i.id,i.targetPageId));this.location.isCurrentPathEqualTo(o)||i.extras.replaceUrl?this.location.replaceState(o,"",r):this.location.go(o,"",r)}restoreHistory(e,i=!1){var o,r;if("computed"===this.canceledNavigationResolution){const s=this.currentPageId-e.targetPageId;"popstate"!==e.source&&"eager"!==this.urlUpdateStrategy&&this.currentUrlTree!==(null===(o=this.currentNavigation)||void 0===o?void 0:o.finalUrl)||0===s?this.currentUrlTree===(null===(r=this.currentNavigation)||void 0===r?void 0:r.finalUrl)&&0===s&&(this.resetState(e),this.browserUrlTree=e.currentUrlTree,this.resetUrlToCurrentUrlTree()):this.location.historyGo(s)}else"replace"===this.canceledNavigationResolution&&(i&&this.resetState(e),this.resetUrlToCurrentUrlTree())}resetState(e){this.routerState=e.currentRouterState,this.currentUrlTree=e.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e.rawUrl)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}cancelNavigationTransition(e,i){const o=new __(e.id,this.serializeUrl(e.extractedUrl),i);this.triggerEvent(o),e.resolve(!1)}generateNgRouterState(e,i){return"computed"===this.canceledNavigationResolution?{navigationId:e,\u0275routerPageId:i}:{navigationId:e}}}return t.\u0275fac=function(e){return new(e||t)(R(Ec),R(tg),R(Fs),R(Ru),R(ye),R(wu),R(nr),R(void 0))},t.\u0275prov=ie({token:t,factory:t.\u0275fac}),t})();function Cd(t){return"imperative"!==t}let wd=(()=>{class t{constructor(e,i,o){this.router=e,this.route=i,this.locationStrategy=o,this.commands=[],this.onChanges=new ki,this.subscription=e.events.subscribe(r=>{r instanceof ma&&this.updateTargetUrlAndHref()})}set routerLink(e){this.commands=null!=e?Array.isArray(e)?e:[e]:[]}ngOnChanges(e){this.updateTargetUrlAndHref(),this.onChanges.next(this)}ngOnDestroy(){this.subscription.unsubscribe()}onClick(e,i,o,r,s){if(0!==e||i||o||r||s||"string"==typeof this.target&&"_self"!=this.target)return!0;const l={skipLocationChange:Es(this.skipLocationChange),replaceUrl:Es(this.replaceUrl),state:this.state};return this.router.navigateByUrl(this.urlTree,l),!1}updateTargetUrlAndHref(){this.href=this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree))}get urlTree(){return this.router.createUrlTree(this.commands,{relativeTo:void 0!==this.relativeTo?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:Es(this.preserveFragment)})}}return t.\u0275fac=function(e){return new(e||t)(I(tn),I(xs),I(Is))},t.\u0275dir=F({type:t,selectors:[["a","routerLink",""],["area","routerLink",""]],hostVars:2,hostBindings:function(e,i){1&e&&se("click",function(r){return i.onClick(r.button,r.ctrlKey,r.shiftKey,r.altKey,r.metaKey)}),2&e&&(Jf("href",i.href,ef),Ci("target",i.target))},inputs:{routerLink:"routerLink",target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",preserveFragment:"preserveFragment",skipLocationChange:"skipLocationChange",replaceUrl:"replaceUrl",state:"state",relativeTo:"relativeTo"},features:[Ot]}),t})();function Es(t){return""===t||!!t}let bg=(()=>{class t{constructor(e,i,o,r,s){this.parentContexts=e,this.location=i,this.resolver=o,this.changeDetector=s,this.activated=null,this._activatedRoute=null,this.activateEvents=new et,this.deactivateEvents=new et,this.name=r||pe,e.onChildOutletCreated(this.name,this)}ngOnDestroy(){this.parentContexts.onChildOutletDestroyed(this.name)}ngOnInit(){if(!this.activated){const e=this.parentContexts.getContext(this.name);e&&e.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.resolver||null))}}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Error("Outlet is not activated");return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Error("Outlet is not activated");return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Error("Outlet is not activated");this.location.detach();const e=this.activated;return this.activated=null,this._activatedRoute=null,e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView)}deactivate(){if(this.activated){const e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new Error("Cannot activate an already activated outlet");this._activatedRoute=e;const s=(i=i||this.resolver).resolveComponentFactory(e._futureSnapshot.routeConfig.component),l=this.parentContexts.getOrCreateContext(this.name).children,a=new VO(e,l,this.location.injector);this.activated=this.location.createComponent(s,this.location.length,a),this.changeDetector.markForCheck(),this.activateEvents.emit(this.activated.instance)}}return t.\u0275fac=function(e){return new(e||t)(I(Fs),I(ii),I(po),function(t){return function(t,n){if("class"===n)return t.classes;if("style"===n)return t.styles;const e=t.attrs;if(e){const i=e.length;let o=0;for(;o<i;){const r=e[o];if(Av(r))break;if(0===r)o+=2;else if("number"==typeof r)for(o++;o<i&&"string"==typeof e[o];)o++;else{if(r===n)return e[o+1];o+=2}}}return null}(gt(),t)}("name"),I(du))},t.\u0275dir=F({type:t,selectors:[["router-outlet"]],outputs:{activateEvents:"activate",deactivateEvents:"deactivate"},exportAs:["outlet"]}),t})();class VO{constructor(n,e,i){this.route=n,this.childContexts=e,this.parent=i}get(n,e){return n===xs?this.route:n===Fs?this.childContexts:this.parent.get(n,e)}}class bN{}class vN{preload(n,e){return ae(null)}}let yN=(()=>{class t{constructor(e,i,o,r,s){this.router=e,this.injector=r,this.preloadingStrategy=s,this.loader=new mN(i,o,c=>e.triggerEvent(new N_(c)),c=>e.triggerEvent(new M_(c)))}setUpPreloading(){this.subscription=this.router.events.pipe(_s(e=>e instanceof ma),pa(()=>this.preload())).subscribe(()=>{})}preload(){const e=this.injector.get(Ni);return this.processRoutes(e,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(e,i){const o=[];for(const r of i)if(r.loadChildren&&!r.canLoad&&r._loadedConfig){const s=r._loadedConfig;o.push(this.processRoutes(s.module,s.routes))}else r.loadChildren&&!r.canLoad?o.push(this.preloadConfig(e,r)):r.children&&o.push(this.processRoutes(e,r.children));return Pt(o).pipe(Js(),je(r=>{}))}preloadConfig(e,i){return this.preloadingStrategy.preload(i,()=>(i._loadedConfig?ae(i._loadedConfig):this.loader.load(e.injector,i)).pipe(wt(r=>(i._loadedConfig=r,this.processRoutes(r.module,r.routes)))))}}return t.\u0275fac=function(e){return new(e||t)(R(tn),R(wu),R(nr),R(ye),R(bN))},t.\u0275prov=ie({token:t,factory:t.\u0275fac}),t})(),vg=(()=>{class t{constructor(e,i,o={}){this.router=e,this.viewportScroller=i,this.options=o,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},o.scrollPositionRestoration=o.scrollPositionRestoration||"disabled",o.anchorScrolling=o.anchorScrolling||"disabled"}init(){"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.router.events.subscribe(e=>{e instanceof Jm?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof ma&&(this.lastId=e.id,this.scheduleScrollEvent(e,this.router.parseUrl(e.urlAfterRedirects).fragment))})}consumeScrollEvents(){return this.router.events.subscribe(e=>{e instanceof x_&&(e.position?"top"===this.options.scrollPositionRestoration?this.viewportScroller.scrollToPosition([0,0]):"enabled"===this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition(e.position):e.anchor&&"enabled"===this.options.anchorScrolling?this.viewportScroller.scrollToAnchor(e.anchor):"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(e,i){this.router.triggerEvent(new x_(e,"popstate"===this.lastSource?this.store[this.restoredId]:null,i))}ngOnDestroy(){this.routerEventsSubscription&&this.routerEventsSubscription.unsubscribe(),this.scrollEventsSubscription&&this.scrollEventsSubscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(R(tn),R(tw),R(void 0))},t.\u0275prov=ie({token:t,factory:t.\u0275fac}),t})();const dr=new ge("ROUTER_CONFIGURATION"),DN=new ge("ROUTER_FORROOT_GUARD"),HO=[Ru,{provide:tg,useClass:O_},{provide:tn,useFactory:function(t,n,e,i,o,r,s,l={},a,c){const u=new tn(null,t,n,e,i,o,r,k_(s));return a&&(u.urlHandlingStrategy=a),c&&(u.routeReuseStrategy=c),function(t,n){t.errorHandler&&(n.errorHandler=t.errorHandler),t.malformedUriErrorHandler&&(n.malformedUriErrorHandler=t.malformedUriErrorHandler),t.onSameUrlNavigation&&(n.onSameUrlNavigation=t.onSameUrlNavigation),t.paramsInheritanceStrategy&&(n.paramsInheritanceStrategy=t.paramsInheritanceStrategy),t.relativeLinkResolution&&(n.relativeLinkResolution=t.relativeLinkResolution),t.urlUpdateStrategy&&(n.urlUpdateStrategy=t.urlUpdateStrategy)}(l,u),l.enableTracing&&u.events.subscribe(d=>{var h,f;null===(h=console.group)||void 0===h||h.call(console,`Router Event: ${d.constructor.name}`),console.log(d.toString()),console.log(d),null===(f=console.groupEnd)||void 0===f||f.call(console)}),u},deps:[tg,Fs,Ru,ye,wu,nr,mg,dr,[class{},new un],[class{},new un]]},Fs,{provide:xs,useFactory:function(t){return t.routerState.root},deps:[tn]},{provide:wu,useClass:eR},yN,vN,class{preload(n,e){return e().pipe(Co(()=>ae(null)))}},{provide:dr,useValue:{enableTracing:!1}}];function jO(){return new zp("Router",tn)}let zO=(()=>{class t{constructor(e,i){}static forRoot(e,i){return{ngModule:t,providers:[HO,IN(e),{provide:DN,useFactory:GO,deps:[[tn,new un,new uo]]},{provide:dr,useValue:i||{}},{provide:Is,useFactory:WO,deps:[rr,[new Br(sm),new un],dr]},{provide:vg,useFactory:UO,deps:[tn,tw,dr]},{provide:bN,useExisting:i&&i.preloadingStrategy?i.preloadingStrategy:vN},{provide:zp,multi:!0,useFactory:jO},[yg,{provide:Yl,multi:!0,useFactory:QO,deps:[yg]},{provide:CN,useFactory:ZO,deps:[yg]},{provide:XI,multi:!0,useExisting:CN}]]}}static forChild(e){return{ngModule:t,providers:[IN(e)]}}}return t.\u0275fac=function(e){return new(e||t)(R(DN,8),R(tn,8))},t.\u0275mod=oe({type:t}),t.\u0275inj=te({}),t})();function UO(t,n,e){return e.scrollOffset&&n.setOffset(e.scrollOffset),new vg(t,n,e)}function WO(t,n,e={}){return e.useHash?new D5(t,n):new VC(t,n)}function GO(t){return"guarded"}function IN(t){return[{provide:bF,multi:!0,useValue:t},{provide:mg,multi:!0,useValue:t}]}let yg=(()=>{class t{constructor(e){this.injector=e,this.initNavigation=!1,this.destroyed=!1,this.resultOfPreactivationDone=new ki}appInitializer(){return this.injector.get(b5,Promise.resolve(null)).then(()=>{if(this.destroyed)return Promise.resolve(!0);let i=null;const o=new Promise(l=>i=l),r=this.injector.get(tn),s=this.injector.get(dr);return"disabled"===s.initialNavigation?(r.setUpLocationChangeListener(),i(!0)):"enabled"===s.initialNavigation||"enabledBlocking"===s.initialNavigation?(r.hooks.afterPreactivation=()=>this.initNavigation?ae(null):(this.initNavigation=!0,i(!0),this.resultOfPreactivationDone),r.initialNavigation()):i(!0),o})}bootstrapListener(e){const i=this.injector.get(dr),o=this.injector.get(yN),r=this.injector.get(vg),s=this.injector.get(tn),l=this.injector.get(vs);e===l.components[0]&&(("enabledNonBlocking"===i.initialNavigation||void 0===i.initialNavigation)&&s.initialNavigation(),o.setUpPreloading(),r.init(),s.resetRootComponentType(l.componentTypes[0]),this.resultOfPreactivationDone.next(null),this.resultOfPreactivationDone.complete())}ngOnDestroy(){this.destroyed=!0}}return t.\u0275fac=function(e){return new(e||t)(R(ye))},t.\u0275prov=ie({token:t,factory:t.\u0275fac}),t})();function QO(t){return t.appInitializer.bind(t)}function ZO(t){return t.bootstrapListener.bind(t)}const CN=new ge("Router Initializer");function ne(t,n,e,i){var s,o=arguments.length,r=o<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,n,e,i);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(o<3?s(r):o>3?s(n,e,r):s(n,e))||r);return o>3&&r&&Object.defineProperty(n,e,r),r}function _N(t,n,e,i){return new(e||(e=Promise))(function(r,s){function l(u){try{c(i.next(u))}catch(d){s(d)}}function a(u){try{c(i.throw(u))}catch(d){s(d)}}function c(u){u.done?r(u.value):function(r){return r instanceof e?r:new e(function(s){s(r)})}(u.value).then(l,a)}c((i=i.apply(t,n||[])).next())})}const qi=function(){if("undefined"!=typeof globalThis)return globalThis;if("undefined"!=typeof global)return global;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(t){return{}}}();void 0===qi.trustedTypes&&(qi.trustedTypes={createPolicy:(t,n)=>n});const xN={configurable:!1,enumerable:!1,writable:!1};void 0===qi.FAST&&Reflect.defineProperty(qi,"FAST",Object.assign({value:Object.create(null)},xN));const Na=qi.FAST;if(void 0===Na.getById){const t=Object.create(null);Reflect.defineProperty(Na,"getById",Object.assign({value(n,e){let i=t[n];return void 0===i&&(i=e?t[n]=e():null),i}},xN))}const Ma=Object.freeze([]),Ig=qi.FAST.getById(1,()=>{const t=[],n=[];function e(){if(n.length)throw n.shift()}function i(s){try{s.call()}catch(l){n.push(l),setTimeout(e,0)}}function o(){let l=0;for(;l<t.length;)if(i(t[l]),l++,l>1024){for(let a=0,c=t.length-l;a<c;a++)t[a]=t[a+l];t.length-=l,l=0}t.length=0}return Object.freeze({enqueue:function(s){t.length<1&&qi.requestAnimationFrame(o),t.push(s)},process:o})}),FN=qi.trustedTypes.createPolicy("fast-html",{createHTML:t=>t});let Cg=FN;const xa=`fast-${Math.random().toString(36).substring(2,8)}`,EN=`${xa}{`,wg=`}${xa}`,ve=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(t){if(Cg!==FN)throw new Error("The HTML policy can only be set once.");Cg=t},createHTML:t=>Cg.createHTML(t),isMarker:t=>t&&8===t.nodeType&&t.data.startsWith(xa),extractDirectiveIndexFromMarker:t=>parseInt(t.data.replace(`${xa}:`,"")),createInterpolationPlaceholder:t=>`${EN}${t}${wg}`,createCustomAttributePlaceholder(t,n){return`${t}="${this.createInterpolationPlaceholder(n)}"`},createBlockPlaceholder:t=>`\x3c!--${xa}:${t}--\x3e`,queueUpdate:Ig.enqueue,processUpdates:Ig.process,nextUpdate:()=>new Promise(Ig.enqueue),setAttribute(t,n,e){null==e?t.removeAttribute(n):t.setAttribute(n,e)},setBooleanAttribute(t,n,e){e?t.setAttribute(n,""):t.removeAttribute(n)},removeChildNodes(t){for(let n=t.firstChild;null!==n;n=t.firstChild)t.removeChild(n)},createTemplateWalker:t=>document.createTreeWalker(t,133,null,!1)});class _g{constructor(n,e){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=n,this.sub1=e}has(n){return void 0===this.spillover?this.sub1===n||this.sub2===n:-1!==this.spillover.indexOf(n)}subscribe(n){const e=this.spillover;if(void 0===e){if(this.has(n))return;if(void 0===this.sub1)return void(this.sub1=n);if(void 0===this.sub2)return void(this.sub2=n);this.spillover=[this.sub1,this.sub2,n],this.sub1=void 0,this.sub2=void 0}else-1===e.indexOf(n)&&e.push(n)}unsubscribe(n){const e=this.spillover;if(void 0===e)this.sub1===n?this.sub1=void 0:this.sub2===n&&(this.sub2=void 0);else{const i=e.indexOf(n);-1!==i&&e.splice(i,1)}}notify(n){const e=this.spillover,i=this.source;if(void 0===e){const o=this.sub1,r=this.sub2;void 0!==o&&o.handleChange(i,n),void 0!==r&&r.handleChange(i,n)}else for(let o=0,r=e.length;o<r;++o)e[o].handleChange(i,n)}}class kN{constructor(n){this.subscribers={},this.sourceSubscribers=null,this.source=n}notify(n){var e;const i=this.subscribers[n];void 0!==i&&i.notify(n),null===(e=this.sourceSubscribers)||void 0===e||e.notify(n)}subscribe(n,e){var i;if(e){let o=this.subscribers[e];void 0===o&&(this.subscribers[e]=o=new _g(this.source)),o.subscribe(n)}else this.sourceSubscribers=null!==(i=this.sourceSubscribers)&&void 0!==i?i:new _g(this.source),this.sourceSubscribers.subscribe(n)}unsubscribe(n,e){var i;if(e){const o=this.subscribers[e];void 0!==o&&o.unsubscribe(n)}else null===(i=this.sourceSubscribers)||void 0===i||i.unsubscribe(n)}}const me=Na.getById(2,()=>{const t=/(:|&&|\|\||if)/,n=new WeakMap,e=new WeakMap,i=ve.queueUpdate;let o,r=u=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function s(u){let d=u.$fastController||n.get(u);return void 0===d&&(Array.isArray(u)?d=r(u):n.set(u,d=new kN(u))),d}function l(u){let d=e.get(u);if(void 0===d){let h=Reflect.getPrototypeOf(u);for(;void 0===d&&null!==h;)d=e.get(h),h=Reflect.getPrototypeOf(h);d=void 0===d?[]:d.slice(0),e.set(u,d)}return d}class a{constructor(d){this.name=d,this.field=`_${d}`,this.callback=`${d}Changed`}getValue(d){return void 0!==o&&o.watch(d,this.name),d[this.field]}setValue(d,h){const f=this.field,p=d[f];if(p!==h){d[f]=h;const m=d[this.callback];"function"==typeof m&&m.call(d,p,h),s(d).notify(this.name)}}}class c extends _g{constructor(d,h,f=!1){super(d,h),this.binding=d,this.isVolatileBinding=f,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(d,h){this.needsRefresh&&null!==this.last&&this.disconnect();const f=o;o=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const p=this.binding(d,h);return o=f,p}disconnect(){if(null!==this.last){let d=this.first;for(;void 0!==d;)d.notifier.unsubscribe(this,d.propertyName),d=d.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(d,h){const f=this.last,p=s(d),m=null===f?this.first:{};if(m.propertySource=d,m.propertyName=h,m.notifier=p,p.subscribe(this,h),null!==f){if(!this.needsRefresh){let g;o=void 0,g=f.propertySource[f.propertyName],o=this,d===g&&(this.needsRefresh=!0)}f.next=m}this.last=m}handleChange(){this.needsQueue&&(this.needsQueue=!1,i(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let d=this.first;return{next:()=>{const h=d;return void 0===h?{value:void 0,done:!0}:(d=d.next,{value:h,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(u){r=u},getNotifier:s,track(u,d){void 0!==o&&o.watch(u,d)},trackVolatile(){void 0!==o&&(o.needsRefresh=!0)},notify(u,d){s(u).notify(d)},defineProperty(u,d){"string"==typeof d&&(d=new a(d)),l(u).push(d),Reflect.defineProperty(u,d.name,{enumerable:!0,get:function(){return d.getValue(this)},set:function(h){d.setValue(this,h)}})},getAccessors:l,binding(u,d,h=this.isVolatileBinding(u)){return new c(u,d,h)},isVolatileBinding:u=>t.test(u.toString())})});function E(t,n){me.defineProperty(t,n)}function tL(t,n,e){return Object.assign({},e,{get:function(){return me.trackVolatile(),e.get.apply(this)}})}const SN=Na.getById(3,()=>{let t=null;return{get:()=>t,set(n){t=n}}});class Fa{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return SN.get()}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(n){SN.set(n)}}me.defineProperty(Fa.prototype,"index"),me.defineProperty(Fa.prototype,"length");const Ea=Object.seal(new Fa),TN={toView:t=>t?"true":"false",fromView:t=>!(null==t||"false"===t||!1===t||0===t)},hn={toView(t){if(null==t)return null;const n=1*t;return isNaN(n)?null:n.toString()},fromView(t){if(null==t)return null;const n=1*t;return isNaN(n)?null:n}};class Nd{constructor(n,e,i=e.toLowerCase(),o="reflect",r){this.guards=new Set,this.Owner=n,this.name=e,this.attribute=i,this.mode=o,this.converter=r,this.fieldName=`_${e}`,this.callbackName=`${e}Changed`,this.hasCallback=this.callbackName in n.prototype,"boolean"===o&&void 0===r&&(this.converter=TN)}setValue(n,e){const i=n[this.fieldName],o=this.converter;void 0!==o&&(e=o.fromView(e)),i!==e&&(n[this.fieldName]=e,this.tryReflectToAttribute(n),this.hasCallback&&n[this.callbackName](i,e),n.$fastController.notify(this.name))}getValue(n){return me.track(n,this.name),n[this.fieldName]}onAttributeChangedCallback(n,e){this.guards.has(n)||(this.guards.add(n),this.setValue(n,e),this.guards.delete(n))}tryReflectToAttribute(n){const e=this.mode,i=this.guards;i.has(n)||"fromView"===e||ve.queueUpdate(()=>{i.add(n);const o=n[this.fieldName];switch(e){case"reflect":const r=this.converter;ve.setAttribute(n,this.attribute,void 0!==r?r.toView(o):o);break;case"boolean":ve.setBooleanAttribute(n,this.attribute,o)}i.delete(n)})}static collect(n,...e){const i=[];e.push(n.attributes);for(let o=0,r=e.length;o<r;++o){const s=e[o];if(void 0!==s)for(let l=0,a=s.length;l<a;++l){const c=s[l];i.push("string"==typeof c?new Nd(n,c):new Nd(n,c.property,c.attribute,c.mode,c.converter))}}return i}}function D(t,n){let e;function i(o,r){arguments.length>1&&(e.property=r),(o.constructor.attributes||(o.constructor.attributes=[])).push(e)}return arguments.length>1?(e={},void i(t,n)):(e=void 0===t?{}:t,i)}function b(t,n,e,i){var s,o=arguments.length,r=o<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,n,e,i);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(o<3?s(r):o>3?s(n,e,r):s(n,e))||r);return o>3&&r&&Object.defineProperty(n,e,r),r}class fn{constructor(){this.targets=new WeakSet}addStylesTo(n){this.targets.add(n)}removeStylesFrom(n){this.targets.delete(n)}isAttachedTo(n){return this.targets.has(n)}withBehaviors(...n){return this.behaviors=null===this.behaviors?n:this.behaviors.concat(n),this}}function Mg(t){return t.map(n=>n instanceof fn?Mg(n.styles):[n]).reduce((n,e)=>n.concat(e),[])}function PN(t){return t.map(n=>n instanceof fn?n.behaviors:null).reduce((n,e)=>null===e?n:(null===n&&(n=[]),n.concat(e)),null)}fn.create=(()=>{if(ve.supportsAdoptedStyleSheets){const t=new Map;return n=>new iL(n,t)}return t=>new sL(t)})();class iL extends fn{constructor(n,e){super(),this.styles=n,this.styleSheetCache=e,this._styleSheets=void 0,this.behaviors=PN(n)}get styleSheets(){if(void 0===this._styleSheets){const e=this.styleSheetCache;this._styleSheets=Mg(this.styles).map(i=>{if(i instanceof CSSStyleSheet)return i;let o=e.get(i);return void 0===o&&(o=new CSSStyleSheet,o.replaceSync(i),e.set(i,o)),o})}return this._styleSheets}addStylesTo(n){n.adoptedStyleSheets=[...n.adoptedStyleSheets,...this.styleSheets],super.addStylesTo(n)}removeStylesFrom(n){const e=this.styleSheets;n.adoptedStyleSheets=n.adoptedStyleSheets.filter(i=>-1===e.indexOf(i)),super.removeStylesFrom(n)}}let oL=0;class sL extends fn{constructor(n){super(),this.styles=n,this.behaviors=null,this.behaviors=PN(n),this.styleSheets=Mg(n),this.styleClass="fast-style-class-"+ ++oL}addStylesTo(n){const e=this.styleSheets,i=this.styleClass;n=this.normalizeTarget(n);for(let o=0;o<e.length;o++){const r=document.createElement("style");r.innerHTML=e[o],r.className=i,n.append(r)}super.addStylesTo(n)}removeStylesFrom(n){const e=(n=this.normalizeTarget(n)).querySelectorAll(`.${this.styleClass}`);for(let i=0,o=e.length;i<o;++i)n.removeChild(e[i]);super.removeStylesFrom(n)}isAttachedTo(n){return super.isAttachedTo(this.normalizeTarget(n))}normalizeTarget(n){return n===document?document.body:n}}const BN={mode:"open"},ON={},xg=Na.getById(4,()=>{const t=new Map;return Object.freeze({register:n=>!t.has(n.type)&&(t.set(n.type,n),!0),getByType:n=>t.get(n)})});class xd{constructor(n,e=n.definition){"string"==typeof e&&(e={name:e}),this.type=n,this.name=e.name,this.template=e.template;const i=Nd.collect(n,e.attributes),o=new Array(i.length),r={},s={};for(let l=0,a=i.length;l<a;++l){const c=i[l];o[l]=c.attribute,r[c.name]=c,s[c.attribute]=c}this.attributes=i,this.observedAttributes=o,this.propertyLookup=r,this.attributeLookup=s,this.shadowOptions=void 0===e.shadowOptions?BN:null===e.shadowOptions?void 0:Object.assign(Object.assign({},BN),e.shadowOptions),this.elementOptions=void 0===e.elementOptions?ON:Object.assign(Object.assign({},ON),e.elementOptions),this.styles=void 0===e.styles?void 0:Array.isArray(e.styles)?fn.create(e.styles):e.styles instanceof fn?e.styles:fn.create([e.styles])}get isDefined(){return!!xg.getByType(this.type)}define(n=customElements){const e=this.type;if(xg.register(this)){const i=this.attributes,o=e.prototype;for(let r=0,s=i.length;r<s;++r)me.defineProperty(o,i[r]);Reflect.defineProperty(e,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return n.get(this.name)||n.define(this.name,e,this.elementOptions),this}}xd.forType=xg.getByType;const LN=new WeakMap,lL={bubbles:!0,composed:!0,cancelable:!0};function Fg(t){return t.shadowRoot||LN.get(t)||null}class Eg extends kN{constructor(n,e){super(n),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=n,this.definition=e;const i=e.shadowOptions;if(void 0!==i){const r=n.attachShadow(i);"closed"===i.mode&&LN.set(n,r)}const o=me.getAccessors(n);if(o.length>0){const r=this.boundObservables=Object.create(null);for(let s=0,l=o.length;s<l;++s){const a=o[s].name,c=n[a];void 0!==c&&(delete n[a],r[a]=c)}}}get isConnected(){return me.track(this,"isConnected"),this._isConnected}setIsConnected(n){this._isConnected=n,me.notify(this,"isConnected")}get template(){return this._template}set template(n){this._template!==n&&(this._template=n,this.needsInitialization||this.renderTemplate(n))}get styles(){return this._styles}set styles(n){this._styles!==n&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=n,!this.needsInitialization&&null!==n&&this.addStyles(n))}addStyles(n){const e=Fg(this.element)||this.element.getRootNode();if(n instanceof HTMLStyleElement)e.append(n);else if(!n.isAttachedTo(e)){const i=n.behaviors;n.addStylesTo(e),null!==i&&this.addBehaviors(i)}}removeStyles(n){const e=Fg(this.element)||this.element.getRootNode();if(n instanceof HTMLStyleElement)e.removeChild(n);else if(n.isAttachedTo(e)){const i=n.behaviors;n.removeStylesFrom(e),null!==i&&this.removeBehaviors(i)}}addBehaviors(n){const e=this.behaviors||(this.behaviors=new Map),i=n.length,o=[];for(let r=0;r<i;++r){const s=n[r];e.has(s)?e.set(s,e.get(s)+1):(e.set(s,1),o.push(s))}if(this._isConnected){const r=this.element;for(let s=0;s<o.length;++s)o[s].bind(r,Ea)}}removeBehaviors(n,e=!1){const i=this.behaviors;if(null===i)return;const o=n.length,r=[];for(let s=0;s<o;++s){const l=n[s];if(i.has(l)){const a=i.get(l)-1;0===a||e?i.delete(l)&&r.push(l):i.set(l,a)}}if(this._isConnected){const s=this.element;for(let l=0;l<r.length;++l)r[l].unbind(s)}}onConnectedCallback(){if(this._isConnected)return;const n=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(n,Ea);const e=this.behaviors;if(null!==e)for(const[i]of e)i.bind(n,Ea);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const n=this.view;null!==n&&n.unbind();const e=this.behaviors;if(null!==e){const i=this.element;for(const[o]of e)o.unbind(i)}}onAttributeChangedCallback(n,e,i){const o=this.definition.attributeLookup[n];void 0!==o&&o.onAttributeChangedCallback(this.element,i)}emit(n,e,i){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(n,Object.assign(Object.assign({detail:e},lL),i)))}finishInitialization(){const n=this.element,e=this.boundObservables;if(null!==e){const o=Object.keys(e);for(let r=0,s=o.length;r<s;++r){const l=o[r];n[l]=e[l]}this.boundObservables=null}const i=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():i.template&&(this._template=i.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():i.styles&&(this._styles=i.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(n){const e=this.element,i=Fg(e)||e;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||ve.removeChildNodes(i),n&&(this.view=n.render(e,i,e))}static forCustomElement(n){const e=n.$fastController;if(void 0!==e)return e;const i=xd.forType(n.constructor);if(void 0===i)throw new Error("Missing FASTElement definition.");return n.$fastController=new Eg(n,i)}}function VN(t){return class extends t{constructor(){super(),Eg.forCustomElement(this)}$emit(n,e,i){return this.$fastController.emit(n,e,i)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(n,e,i){this.$fastController.onAttributeChangedCallback(n,e,i)}}}const Fd=Object.assign(VN(HTMLElement),{from:t=>VN(t),define:(t,n)=>new xd(t,n).define().type}),kg=new Map;"metadata"in Reflect||(Reflect.metadata=function(t,n){return function(e){Reflect.defineMetadata(t,n,e)}},Reflect.defineMetadata=function(t,n,e){let i=kg.get(e);void 0===i&&kg.set(e,i=new Map),i.set(t,n)},Reflect.getOwnMetadata=function(t,n){const e=kg.get(n);if(void 0!==e)return e.get(t)});class aL{constructor(n,e){this.container=n,this.key=e}instance(n){return this.registerResolver(0,n)}singleton(n){return this.registerResolver(1,n)}transient(n){return this.registerResolver(2,n)}callback(n){return this.registerResolver(3,n)}cachedCallback(n){return this.registerResolver(3,KN(n))}aliasTo(n){return this.registerResolver(5,n)}registerResolver(n,e){const{container:i,key:o}=this;return this.container=this.key=void 0,i.registerResolver(o,new Nn(o,n,e))}}function ka(t){const n=t.slice(),e=Object.keys(t),i=e.length;let o;for(let r=0;r<i;++r)o=e[r],YN(o)||(n[o]=t[o]);return n}const cL=Object.freeze({none(t){throw Error(`${t.toString()} not registered, did you forget to add @singleton()?`)},singleton:t=>new Nn(t,1,t),transient:t=>new Nn(t,2,t)}),Sg=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:cL.singleton})}),$N=new Map;function HN(t){return n=>Reflect.getOwnMetadata(t,n)}let jN=null;const Te=Object.freeze({createContainer:t=>new Sa(null,Object.assign({},Sg.default,t)),findResponsibleContainer(t){const n=t.$$container$$;return n&&n.responsibleForOwnerRequests?n:Te.findParentContainer(t)},findParentContainer(t){const n=new CustomEvent(qN,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return t.dispatchEvent(n),n.detail.container||Te.getOrCreateDOMContainer()},getOrCreateDOMContainer:(t,n)=>t?t.$$container$$||new Sa(t,Object.assign({},Sg.default,n,{parentLocator:Te.findParentContainer})):jN||(jN=new Sa(null,Object.assign({},Sg.default,n,{parentLocator:()=>null}))),getDesignParamtypes:HN("design:paramtypes"),getAnnotationParamtypes:HN("di:paramtypes"),getOrCreateAnnotationParamTypes(t){let n=this.getAnnotationParamtypes(t);return void 0===n&&Reflect.defineMetadata("di:paramtypes",n=[],t),n},getDependencies(t){let n=$N.get(t);if(void 0===n){const e=t.inject;if(void 0===e){const i=Te.getDesignParamtypes(t),o=Te.getAnnotationParamtypes(t);if(void 0===i)if(void 0===o){const r=Object.getPrototypeOf(t);n="function"==typeof r&&r!==Function.prototype?ka(Te.getDependencies(r)):[]}else n=ka(o);else if(void 0===o)n=ka(i);else{n=ka(i);let s,r=o.length;for(let c=0;c<r;++c)s=o[c],void 0!==s&&(n[c]=s);const l=Object.keys(o);let a;r=l.length;for(let c=0;c<r;++c)a=l[c],YN(a)||(n[a]=o[a])}}else n=ka(e);$N.set(t,n)}return n},defineProperty(t,n,e,i=!1){const o=`$di_${n}`;Reflect.defineProperty(t,n,{get:function(){let r=this[o];if(void 0===r&&(r=(this instanceof HTMLElement?Te.findResponsibleContainer(this):Te.getOrCreateDOMContainer()).get(e),this[o]=r,i&&this instanceof Fd)){const l=this.$fastController,a=()=>{Te.findResponsibleContainer(this).get(e)!==this[o]&&(this[o]=r,l.notify(n))};l.subscribe({handleChange:a},"isConnected")}return r}})},createInterface(t,n){const e="function"==typeof t?t:n,i="string"==typeof t?t:t&&"friendlyName"in t&&t.friendlyName||QN,o="string"!=typeof t&&(t&&"respectConnection"in t&&t.respectConnection||!1),r=function(s,l,a){if(null==s||void 0!==new.target)throw new Error(`No registration for interface: '${r.friendlyName}'`);l?Te.defineProperty(s,l,r,o):Te.getOrCreateAnnotationParamTypes(s)[a]=r};return r.$isInterface=!0,r.friendlyName=null==i?"(anonymous)":i,null!=e&&(r.register=function(s,l){return e(new aL(s,null!=l?l:r))}),r.toString=function(){return`InterfaceSymbol<${r.friendlyName}>`},r},inject:(...t)=>function(n,e,i){if("number"==typeof i){const o=Te.getOrCreateAnnotationParamTypes(n),r=t[0];void 0!==r&&(o[i]=r)}else if(e)Te.defineProperty(n,e,t[0]);else{const o=Te.getOrCreateAnnotationParamTypes(i?i.value:n);let r;for(let s=0;s<t.length;++s)r=t[s],void 0!==r&&(o[s]=r)}},transient:t=>(t.register=function(e){return Ta.transient(t,t).register(e)},t.registerInRequestor=!1,t),singleton:(t,n=dL)=>(t.register=function(i){return Ta.singleton(t,t).register(i)},t.registerInRequestor=n.scoped,t)}),uL=Te.createInterface("Container");function Ed(t){return function(n){const e=function(i,o,r){Te.inject(e)(i,o,r)};return e.$isResolver=!0,e.resolve=function(i,o){return t(n,i,o)},e}}const dL={scoped:!1};function Tg(t,n,e){Te.inject(Tg)(t,n,e)}function UN(t,n){return n.getFactory(t).construct(n)}Ed((t,n,e)=>()=>e.get(t)),Ed((t,n,e)=>{if(e.has(t,!0))return e.get(t)}),Tg.$isResolver=!0,Tg.resolve=()=>{},Ed((t,n,e)=>{const i=UN(t,n),o=new Nn(t,0,i);return e.registerResolver(t,o),i}),Ed((t,n,e)=>UN(t,n));class Nn{constructor(n,e,i){this.key=n,this.strategy=e,this.state=i,this.resolving=!1}get $isResolver(){return!0}register(n){return n.registerResolver(this.key,this)}resolve(n,e){switch(this.strategy){case 0:return this.state;case 1:if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=n.getFactory(this.state).construct(e),this.strategy=0,this.resolving=!1,this.state;case 2:{const i=n.getFactory(this.state);if(null===i)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return i.construct(e)}case 3:return this.state(n,e,this);case 4:return this.state[0].resolve(n,e);case 5:return e.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(n){var e,i,o;switch(this.strategy){case 1:case 2:return n.getFactory(this.state);case 5:return null!==(o=null===(i=null===(e=n.getResolver(this.state))||void 0===e?void 0:e.getFactory)||void 0===i?void 0:i.call(e,n))&&void 0!==o?o:null;default:return null}}}function WN(t){return this.get(t)}function fL(t,n){return n(t)}class pL{constructor(n,e){this.Type=n,this.dependencies=e,this.transformers=null}construct(n,e){let i;return i=void 0===e?new this.Type(...this.dependencies.map(WN,n)):new this.Type(...this.dependencies.map(WN,n),...e),null==this.transformers?i:this.transformers.reduce(fL,i)}registerTransformer(n){(this.transformers||(this.transformers=[])).push(n)}}const mL={$isResolver:!0,resolve:(t,n)=>n};function kd(t){return"function"==typeof t.register}function GN(t){return function(t){return kd(t)&&"boolean"==typeof t.registerInRequestor}(t)&&t.registerInRequestor}function bL(t){return void 0!==t.prototype}const vL=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),qN="__DI_LOCATE_PARENT__",Ag=new Map;class Sa{constructor(n,e){this.owner=n,this.config=e,this._parent=void 0,this.registerDepth=0,this.context=null,null!==n&&(n.$$container$$=this),this.resolvers=new Map,this.resolvers.set(uL,mL),n instanceof Node&&n.addEventListener(qN,i=>{i.composedPath()[0]!==this.owner&&(i.detail.container=this,i.stopImmediatePropagation())})}get parent(){return void 0===this._parent&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return null===this.parent?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(n,...e){return this.context=n,this.register(...e),this.context=null,this}register(...n){if(100==++this.registerDepth)throw new Error("Unable to autoregister dependency");let e,i,o,r,s;const l=this.context;for(let a=0,c=n.length;a<c;++a)if(e=n[a],ZN(e))if(kd(e))e.register(this,l);else if(bL(e))Ta.singleton(e,e).register(this);else for(i=Object.keys(e),r=0,s=i.length;r<s;++r)o=e[i[r]],ZN(o)&&(kd(o)?o.register(this,l):this.register(o));return--this.registerDepth,this}registerResolver(n,e){Sd(n);const i=this.resolvers,o=i.get(n);return null==o?i.set(n,e):o instanceof Nn&&4===o.strategy?o.state.push(e):i.set(n,new Nn(n,4,[o,e])),e}registerTransformer(n,e){const i=this.getResolver(n);if(null==i)return!1;if(i.getFactory){const o=i.getFactory(this);return null!=o&&(o.registerTransformer(e),!0)}return!1}getResolver(n,e=!0){if(Sd(n),void 0!==n.resolve)return n;let o,i=this;for(;null!=i;){if(o=i.resolvers.get(n),null!=o)return o;if(null==i.parent){const r=GN(n)?this:i;return e?this.jitRegister(n,r):null}i=i.parent}return null}has(n,e=!1){return!!this.resolvers.has(n)||!(!e||null==this.parent)&&this.parent.has(n,!0)}get(n){if(Sd(n),n.$isResolver)return n.resolve(this,this);let i,e=this;for(;null!=e;){if(i=e.resolvers.get(n),null!=i)return i.resolve(e,this);if(null==e.parent){const o=GN(n)?this:e;return i=this.jitRegister(n,o),i.resolve(e,this)}e=e.parent}throw new Error(`Unable to resolve key: ${n}`)}getAll(n,e=!1){Sd(n);const i=this;let r,o=i;if(e){let s=Ma;for(;null!=o;)r=o.resolvers.get(n),null!=r&&(s=s.concat(XN(r,o,i))),o=o.parent;return s}for(;null!=o;){if(r=o.resolvers.get(n),null!=r)return XN(r,o,i);if(o=o.parent,null==o)return Ma}return Ma}getFactory(n){let e=Ag.get(n);if(void 0===e){if(yL(n))throw new Error(`${n.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);Ag.set(n,e=new pL(n,Te.getDependencies(n)))}return e}registerFactory(n,e){Ag.set(n,e)}createChild(n){return new Sa(null,Object.assign({},this.config,n,{parentLocator:()=>this}))}jitRegister(n,e){if("function"!=typeof n)throw new Error(`Attempted to jitRegister something that is not a constructor: '${n}'. Did you forget to register this dependency?`);if(vL.has(n.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${n.name}. Did you forget to add @inject(Key)`);if(kd(n)){const i=n.register(e);if(!(i instanceof Object)||null==i.resolve){const o=e.resolvers.get(n);if(null!=o)return o;throw new Error("A valid resolver was not returned from the static register method")}return i}if(n.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${n.friendlyName}`);{const i=this.config.defaultResolver(n,e);return e.resolvers.set(n,i),i}}}const Rg=new WeakMap;function KN(t){return function(n,e,i){if(Rg.has(i))return Rg.get(i);const o=t(n,e,i);return Rg.set(i,o),o}}const Ta=Object.freeze({instance:(t,n)=>new Nn(t,0,n),singleton:(t,n)=>new Nn(t,1,n),transient:(t,n)=>new Nn(t,2,n),callback:(t,n)=>new Nn(t,3,n),cachedCallback:(t,n)=>new Nn(t,3,KN(n)),aliasTo:(t,n)=>new Nn(n,5,t)});function Sd(t){if(null==t)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function XN(t,n,e){if(t instanceof Nn&&4===t.strategy){const i=t.state;let o=i.length;const r=new Array(o);for(;o--;)r[o]=i[o].resolve(n,e);return r}return[t.resolve(n,e)]}const QN="(anonymous)";function ZN(t){return"object"==typeof t&&null!==t||"function"==typeof t}const yL=function(){const t=new WeakMap;let n=!1,e="",i=0;return function(o){return n=t.get(o),void 0===n&&(e=o.toString(),i=e.length,n=i>=29&&i<=100&&125===e.charCodeAt(i-1)&&e.charCodeAt(i-2)<=32&&93===e.charCodeAt(i-3)&&101===e.charCodeAt(i-4)&&100===e.charCodeAt(i-5)&&111===e.charCodeAt(i-6)&&99===e.charCodeAt(i-7)&&32===e.charCodeAt(i-8)&&101===e.charCodeAt(i-9)&&118===e.charCodeAt(i-10)&&105===e.charCodeAt(i-11)&&116===e.charCodeAt(i-12)&&97===e.charCodeAt(i-13)&&110===e.charCodeAt(i-14)&&88===e.charCodeAt(i-15),t.set(o,n)),n}}(),Td={};function YN(t){switch(typeof t){case"number":return t>=0&&(0|t)===t;case"string":{const n=Td[t];if(void 0!==n)return n;const e=t.length;if(0===e)return Td[t]=!1;let i=0;for(let o=0;o<e;++o)if(i=t.charCodeAt(o),0===o&&48===i&&e>1||i<48||i>57)return Td[t]=!1;return Td[t]=!0}default:return!1}}function JN(t){return`${t.toLowerCase()}:presentation`}const Ad=new Map,eM=Object.freeze({define(t,n,e){const i=JN(t);void 0===Ad.get(i)?Ad.set(i,n):Ad.set(i,!1),e.register(Ta.instance(i,n))},forTag(t,n){const e=JN(t),i=Ad.get(e);return!1===i?Te.findResponsibleContainer(n).get(e):i||null}});class DL{constructor(n,e){this.template=n||null,this.styles=void 0===e?null:Array.isArray(e)?fn.create(e):e instanceof fn?e:fn.create([e])}applyTo(n){const e=n.$fastController;null===e.template&&(e.template=this.template),null===e.styles&&(e.styles=this.styles)}}let Pe=(()=>{class t extends Fd{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return void 0===this._presentation&&(this._presentation=eM.forTag(this.tagName,this)),this._presentation}templateChanged(){void 0!==this.template&&(this.$fastController.template=this.template)}stylesChanged(){void 0!==this.styles&&(this.$fastController.styles=this.styles)}connectedCallback(){null!==this.$presentation&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(i={})=>new IL(this===t?class extends t{}:this,e,i)}}return b([E],t.prototype,"template",void 0),b([E],t.prototype,"styles",void 0),t})();function Aa(t,n,e){return"function"==typeof t?t(n,e):t}class IL{constructor(n,e,i){this.type=n,this.elementDefinition=e,this.overrideDefinition=i,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(n,e){const i=this.definition,o=this.overrideDefinition;e.tryDefineElement({name:`${i.prefix||e.elementPrefix}-${i.baseName}`,type:this.type,baseClass:this.elementDefinition.baseClass,callback:l=>{const a=new DL(Aa(i.template,l,i),Aa(i.styles,l,i));l.definePresentation(a);let c=Aa(i.shadowOptions,l,i);l.shadowRootMode&&(c?o.shadowOptions||(c.mode=l.shadowRootMode):null!==c&&(c={mode:l.shadowRootMode})),l.defineElement({elementOptions:Aa(i.elementOptions,l,i),shadowOptions:c,attributes:Aa(i.attributes,l,i)})}})}}let _o=(()=>{class t{}return b([D({attribute:"aria-atomic"})],t.prototype,"ariaAtomic",void 0),b([D({attribute:"aria-busy"})],t.prototype,"ariaBusy",void 0),b([D({attribute:"aria-controls"})],t.prototype,"ariaControls",void 0),b([D({attribute:"aria-current"})],t.prototype,"ariaCurrent",void 0),b([D({attribute:"aria-describedby"})],t.prototype,"ariaDescribedby",void 0),b([D({attribute:"aria-details"})],t.prototype,"ariaDetails",void 0),b([D({attribute:"aria-disabled"})],t.prototype,"ariaDisabled",void 0),b([D({attribute:"aria-errormessage"})],t.prototype,"ariaErrormessage",void 0),b([D({attribute:"aria-flowto"})],t.prototype,"ariaFlowto",void 0),b([D({attribute:"aria-haspopup"})],t.prototype,"ariaHaspopup",void 0),b([D({attribute:"aria-hidden"})],t.prototype,"ariaHidden",void 0),b([D({attribute:"aria-invalid"})],t.prototype,"ariaInvalid",void 0),b([D({attribute:"aria-keyshortcuts"})],t.prototype,"ariaKeyshortcuts",void 0),b([D({attribute:"aria-label"})],t.prototype,"ariaLabel",void 0),b([D({attribute:"aria-labelledby"})],t.prototype,"ariaLabelledby",void 0),b([D({attribute:"aria-live"})],t.prototype,"ariaLive",void 0),b([D({attribute:"aria-owns"})],t.prototype,"ariaOwns",void 0),b([D({attribute:"aria-relevant"})],t.prototype,"ariaRelevant",void 0),b([D({attribute:"aria-roledescription"})],t.prototype,"ariaRoledescription",void 0),t})();class Pg{constructor(){this.targetIndex=0}}class tM extends Pg{constructor(){super(...arguments),this.createPlaceholder=ve.createInterpolationPlaceholder}}class Bg extends Pg{constructor(n,e,i){super(),this.name=n,this.behavior=e,this.options=i}createPlaceholder(n){return ve.createCustomAttributePlaceholder(this.name,n)}createBehavior(n){return new this.behavior(n,this.options)}}function CL(t,n){this.source=t,this.context=n,null===this.bindingObserver&&(this.bindingObserver=me.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(t,n))}function wL(t,n){this.source=t,this.context=n,this.target.addEventListener(this.targetName,this)}function _L(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function NL(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.unbind(),t.needsBindOnly=!0)}function ML(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function xL(t){ve.setAttribute(this.target,this.targetName,t)}function FL(t){ve.setBooleanAttribute(this.target,this.targetName,t)}function EL(t){if(null==t&&(t=""),t.create){this.target.textContent="";let n=this.target.$fastView;void 0===n?n=t.create():this.target.$fastTemplate!==t&&(n.isComposed&&(n.remove(),n.unbind()),n=t.create()),n.isComposed?n.needsBindOnly&&(n.needsBindOnly=!1,n.bind(this.source,this.context)):(n.isComposed=!0,n.bind(this.source,this.context),n.insertBefore(this.target),this.target.$fastView=n,this.target.$fastTemplate=t)}else{const n=this.target.$fastView;void 0!==n&&n.isComposed&&(n.isComposed=!1,n.remove(),n.needsBindOnly?n.needsBindOnly=!1:n.unbind()),this.target.textContent=t}}function kL(t){this.target[this.targetName]=t}function SL(t){const n=this.classVersions||Object.create(null),e=this.target;let i=this.version||0;if(null!=t&&t.length){const o=t.split(/\s+/);for(let r=0,s=o.length;r<s;++r){const l=o[r];""!==l&&(n[l]=i,e.classList.add(l))}}if(this.classVersions=n,this.version=i+1,0!==i){i-=1;for(const o in n)n[o]===i&&e.classList.remove(o)}}class Og extends tM{constructor(n){super(),this.binding=n,this.bind=CL,this.unbind=_L,this.updateTarget=xL,this.isBindingVolatile=me.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(n){if(this.originalTargetName=n,void 0!==n)switch(n[0]){case":":if(this.cleanedTargetName=n.substr(1),this.updateTarget=kL,"innerHTML"===this.cleanedTargetName){const e=this.binding;this.binding=(i,o)=>ve.createHTML(e(i,o))}break;case"?":this.cleanedTargetName=n.substr(1),this.updateTarget=FL;break;case"@":this.cleanedTargetName=n.substr(1),this.bind=wL,this.unbind=ML;break;default:this.cleanedTargetName=n,"class"===n&&(this.updateTarget=SL)}}targetAtContent(){this.updateTarget=EL,this.unbind=NL}createBehavior(n){return new TL(n,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class TL{constructor(n,e,i,o,r,s,l){this.source=null,this.context=null,this.bindingObserver=null,this.target=n,this.binding=e,this.isBindingVolatile=i,this.bind=o,this.unbind=r,this.updateTarget=s,this.targetName=l}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(n){Fa.setEvent(n);const e=this.binding(this.source,this.context);Fa.setEvent(null),!0!==e&&n.preventDefault()}}let Lg=null;class Vg{addFactory(n){n.targetIndex=this.targetIndex,this.behaviorFactories.push(n)}captureContentBinding(n){n.targetAtContent(),this.addFactory(n)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){Lg=this}static borrow(n){const e=Lg||new Vg;return e.directives=n,e.reset(),Lg=null,e}}function AL(t){if(1===t.length)return t[0];let n;const e=t.length,i=t.map(s=>"string"==typeof s?()=>s:(n=s.targetName||n,s.binding)),r=new Og((s,l)=>{let a="";for(let c=0;c<e;++c)a+=i[c](s,l);return a});return r.targetName=n,r}const RL=wg.length;function nM(t,n){const e=n.split(EN);if(1===e.length)return null;const i=[];for(let o=0,r=e.length;o<r;++o){const s=e[o],l=s.indexOf(wg);let a;if(-1===l)a=s;else{const c=parseInt(s.substring(0,l));i.push(t.directives[c]),a=s.substring(l+RL)}""!==a&&i.push(a)}return i}function iM(t,n,e=!1){const i=n.attributes;for(let o=0,r=i.length;o<r;++o){const s=i[o],l=s.value,a=nM(t,l);let c=null;null===a?e&&(c=new Og(()=>l),c.targetName=s.name):c=AL(a),null!==c&&(n.removeAttributeNode(s),o--,r--,t.addFactory(c))}}function PL(t,n,e){const i=nM(t,n.textContent);if(null!==i){let o=n;for(let r=0,s=i.length;r<s;++r){const l=i[r],a=0===r?n:o.parentNode.insertBefore(document.createTextNode(""),o.nextSibling);"string"==typeof l?a.textContent=l:(a.textContent=" ",t.captureContentBinding(l)),o=a,t.targetIndex++,a!==n&&e.nextNode()}t.targetIndex--}}const $g=document.createRange();class OL{constructor(n,e){this.fragment=n,this.behaviors=e,this.source=null,this.context=null,this.firstChild=n.firstChild,this.lastChild=n.lastChild}appendTo(n){n.appendChild(this.fragment)}insertBefore(n){if(this.fragment.hasChildNodes())n.parentNode.insertBefore(this.fragment,n);else{const e=n.parentNode,i=this.lastChild;let r,o=this.firstChild;for(;o!==i;)r=o.nextSibling,e.insertBefore(o,n),o=r;e.insertBefore(i,n)}}remove(){const n=this.fragment,e=this.lastChild;let o,i=this.firstChild;for(;i!==e;)o=i.nextSibling,n.appendChild(i),i=o;n.appendChild(e)}dispose(){const n=this.firstChild.parentNode,e=this.lastChild;let o,i=this.firstChild;for(;i!==e;)o=i.nextSibling,n.removeChild(i),i=o;n.removeChild(e);const r=this.behaviors,s=this.source;for(let l=0,a=r.length;l<a;++l)r[l].unbind(s)}bind(n,e){const i=this.behaviors;if(this.source!==n)if(null!==this.source){const o=this.source;this.source=n,this.context=e;for(let r=0,s=i.length;r<s;++r){const l=i[r];l.unbind(o),l.bind(n,e)}}else{this.source=n,this.context=e;for(let o=0,r=i.length;o<r;++o)i[o].bind(n,e)}}unbind(){if(null===this.source)return;const n=this.behaviors,e=this.source;for(let i=0,o=n.length;i<o;++i)n[i].unbind(e);this.source=null}static disposeContiguousBatch(n){if(0!==n.length){$g.setStartBefore(n[0].firstChild),$g.setEndAfter(n[n.length-1].lastChild),$g.deleteContents();for(let e=0,i=n.length;e<i;++e){const o=n[e],r=o.behaviors,s=o.source;for(let l=0,a=r.length;l<a;++l)r[l].unbind(s)}}}}class oM{constructor(n,e){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=n,this.directives=e}create(n){if(null===this.fragment){let c;const u=this.html;if("string"==typeof u){c=document.createElement("template"),c.innerHTML=ve.createHTML(u);const h=c.content.firstElementChild;null!==h&&"TEMPLATE"===h.tagName&&(c=h)}else c=u;const d=function(t,n){const e=t.content;document.adoptNode(e);const i=Vg.borrow(n);iM(i,t,!0);const o=i.behaviorFactories;i.reset();const r=ve.createTemplateWalker(e);let s;for(;s=r.nextNode();)switch(i.targetIndex++,s.nodeType){case 1:iM(i,s);break;case 3:PL(i,s,r);break;case 8:ve.isMarker(s)&&i.addFactory(n[ve.extractDirectiveIndexFromMarker(s)])}let l=0;(ve.isMarker(e.firstChild)||1===e.childNodes.length&&n.length)&&(e.insertBefore(document.createComment(""),e.firstChild),l=-1);const a=i.behaviorFactories;return i.release(),{fragment:e,viewBehaviorFactories:a,hostBehaviorFactories:o,targetOffset:l}}(c,this.directives);this.fragment=d.fragment,this.viewBehaviorFactories=d.viewBehaviorFactories,this.hostBehaviorFactories=d.hostBehaviorFactories,this.targetOffset=d.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const e=this.fragment.cloneNode(!0),i=this.viewBehaviorFactories,o=new Array(this.behaviorCount),r=ve.createTemplateWalker(e);let s=0,l=this.targetOffset,a=r.nextNode();for(let c=i.length;s<c;++s){const u=i[s],d=u.targetIndex;for(;null!==a;){if(l===d){o[s]=u.createBehavior(a);break}a=r.nextNode(),l++}}if(this.hasHostBehaviors){const c=this.hostBehaviorFactories;for(let u=0,d=c.length;u<d;++u,++s)o[s]=c[u].createBehavior(n)}return new OL(e,o)}render(n,e,i){"string"==typeof e&&(e=document.getElementById(e)),void 0===i&&(i=e);const o=this.create(i);return o.bind(n,Ea),o.appendTo(e),o}}const LL=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function L(t,...n){const e=[];let i="";for(let o=0,r=t.length-1;o<r;++o){const s=t[o];let l=n[o];if(i+=s,l instanceof oM){const a=l;l=()=>a}if("function"==typeof l&&(l=new Og(l)),l instanceof tM){const a=LL.exec(s);null!==a&&(l.targetName=a[2])}l instanceof Pg?(i+=l.createPlaceholder(e.length),e.push(l)):i+=l}return i+=t[t.length-1],new oM(i,e)}class VL{constructor(n,e){this.target=n,this.propertyName=e}bind(n){n[this.propertyName]=this.target}unbind(){}}function Le(t){return new Bg("fast-ref",VL,t)}class Mn{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const xn=(t,n)=>L`
    <span
        part="end"
        ${Le("endContainer")}
        class=${e=>n.end?"end":void 0}
    >
        <slot name="end" ${Le("end")} @slotchange="${e=>e.handleEndContentChange()}">
            ${n.end||""}
        </slot>
    </span>
`,Fn=(t,n)=>L`
    <span
        part="start"
        ${Le("startContainer")}
        class="${e=>n.start?"start":void 0}"
    >
        <slot
            name="start"
            ${Le("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        >
            ${n.start||""}
        </slot>
    </span>
`;function Qe(t,...n){n.forEach(e=>{Object.getOwnPropertyNames(e.prototype).forEach(i=>{"constructor"!==i&&Object.defineProperty(t.prototype,i,Object.getOwnPropertyDescriptor(e.prototype,i))}),e.attributes&&(t.attributes=(t.attributes||[]).concat(e.attributes))})}L`
    <span part="end" ${Le("endContainer")}>
        <slot
            name="end"
            ${Le("end")}
            @slotchange="${t=>t.handleEndContentChange()}"
        ></slot>
    </span>
`,L`
    <span part="start" ${Le("startContainer")}>
        <slot
            name="start"
            ${Le("start")}
            @slotchange="${t=>t.handleStartContentChange()}"
        ></slot>
    </span>
`;let rM=(()=>{class t extends Pe{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}}return b([D],t.prototype,"download",void 0),b([D],t.prototype,"href",void 0),b([D],t.prototype,"hreflang",void 0),b([D],t.prototype,"ping",void 0),b([D],t.prototype,"referrerpolicy",void 0),b([D],t.prototype,"rel",void 0),b([D],t.prototype,"target",void 0),b([D],t.prototype,"type",void 0),b([E],t.prototype,"defaultSlottedContent",void 0),t})(),Hg=(()=>{class t{}return b([D({attribute:"aria-expanded"})],t.prototype,"ariaExpanded",void 0),t})();Qe(Hg,_o),Qe(rM,Mn,Hg);let Ra=(()=>{class t extends rM{constructor(){super(...arguments),this.separator=!0}}return b([E],t.prototype,"separator",void 0),t})();Qe(Ra,Mn,Hg);let sM=(()=>{class t extends Pe{slottedBreadcrumbItemsChanged(){if(this.$fastController.isConnected){if(void 0===this.slottedBreadcrumbItems||0===this.slottedBreadcrumbItems.length)return;const e=this.slottedBreadcrumbItems[this.slottedBreadcrumbItems.length-1];this.slottedBreadcrumbItems.forEach(i=>{const o=i===e;this.setItemSeparator(i,o),this.setAriaCurrent(i,o)})}}setItemSeparator(e,i){e instanceof Ra&&(e.separator=!i)}findChildWithHref(e){var i,o;return e.childElementCount>0?e.querySelector("a[href]"):(null===(i=e.shadowRoot)||void 0===i?void 0:i.childElementCount)?null===(o=e.shadowRoot)||void 0===o?void 0:o.querySelector("a[href]"):null}setAriaCurrent(e,i){const o=this.findChildWithHref(e);null===o&&e.hasAttribute("href")&&e instanceof Ra?i?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current"):null!==o&&(i?o.setAttribute("aria-current","page"):o.removeAttribute("aria-current"))}}return b([E],t.prototype,"slottedBreadcrumbItems",void 0),t})();function ks(t){return t?function(n,e,i){return 1===n.nodeType&&n.matches(t)}:function(n,e,i){return 1===n.nodeType}}class lM{constructor(n,e){this.target=n,this.options=e,this.source=null}bind(n){const e=this.options.property;this.shouldUpdate=me.getAccessors(n).some(i=>i.name===e),this.source=n,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(Ma),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let n=this.getNodes();return void 0!==this.options.filter&&(n=n.filter(this.options.filter)),n}updateTarget(n){this.source[this.options.property]=n}}class $L extends lM{constructor(n,e){super(n,e)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function at(t){return"string"==typeof t&&(t={property:t}),new Bg("fast-slotted",$L,t)}class aM{createCSS(){return""}createBehavior(){}}function jg(t){const n=t.parentElement;if(n)return n;{const e=t.getRootNode();if(e.host instanceof HTMLElement)return e.host}return null}const Ki=document.createElement("div");class zg{setProperty(n,e){ve.queueUpdate(()=>this.target.setProperty(n,e))}removeProperty(n){ve.queueUpdate(()=>this.target.removeProperty(n))}}class WL extends zg{constructor(){super();const n=new CSSStyleSheet;this.target=n.cssRules[n.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,n]}}class GL extends zg{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:n}=this.style;if(n){const e=n.insertRule(":root{}",n.cssRules.length);this.target=n.cssRules[e].style}}}let qL=(()=>{class t{constructor(e){this.store=new Map,this.target=null;const i=e.$fastController;this.style=document.createElement("style"),i.addStyles(this.style),me.getNotifier(i).subscribe(this,"isConnected"),this.handleChange(i,"isConnected")}targetChanged(){if(null!==this.target)for(const[e,i]of this.store.entries())this.target.setProperty(e,i)}setProperty(e,i){this.store.set(e,i),ve.queueUpdate(()=>{null!==this.target&&this.target.setProperty(e,i)})}removeProperty(e){this.store.delete(e),ve.queueUpdate(()=>{null!==this.target&&this.target.removeProperty(e)})}handleChange(e,i){const{sheet:o}=this.style;if(o){const r=o.insertRule(":host{}",o.cssRules.length);this.target=o.cssRules[r].style}else this.target=null}}return b([E],t.prototype,"target",void 0),t})();class KL{constructor(n){this.target=n.style}setProperty(n,e){ve.queueUpdate(()=>this.target.setProperty(n,e))}removeProperty(n){ve.queueUpdate(()=>this.target.removeProperty(n))}}class xt{setProperty(n,e){xt.properties[n]=e;for(const i of xt.roots.values())Ss.getOrCreate(xt.normalizeRoot(i)).setProperty(n,e)}removeProperty(n){delete xt.properties[n];for(const e of xt.roots.values())Ss.getOrCreate(xt.normalizeRoot(e)).removeProperty(n)}static registerRoot(n){const{roots:e}=xt;if(!e.has(n)){e.add(n);const i=Ss.getOrCreate(this.normalizeRoot(n));for(const o in xt.properties)i.setProperty(o,xt.properties[o])}}static unregisterRoot(n){const{roots:e}=xt;if(e.has(n)){e.delete(n);const i=Ss.getOrCreate(xt.normalizeRoot(n));for(const o in xt.properties)i.removeProperty(o)}}static normalizeRoot(n){return n===Ki?document:n}}xt.roots=new Set,xt.properties={};const Ug=new WeakMap,XL=ve.supportsAdoptedStyleSheets?class extends zg{constructor(n){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":host{}")].style,n.$fastController.addStyles(fn.create([e]))}}:qL,Ss=Object.freeze({getOrCreate(t){if(Ug.has(t))return Ug.get(t);let n;return n=t===Ki?new xt:t instanceof Document?ve.supportsAdoptedStyleSheets?new WL:new GL:function(t){return t instanceof Fd}(t)?new XL(t):new KL(t),Ug.set(t,n),n}});class nn extends aM{constructor(n){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=n.name,null!==n.cssCustomPropertyName&&(this.cssCustomProperty=`--${n.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=nn.uniqueId(),nn.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(n){return new nn({name:"string"==typeof n?n:n.name,cssCustomPropertyName:"string"==typeof n?n:void 0===n.cssCustomPropertyName?n.name:n.cssCustomPropertyName})}static isCSSDesignToken(n){return"string"==typeof n.cssCustomProperty}static isDerivedDesignTokenValue(n){return"function"==typeof n}static getTokenById(n){return nn.tokensById.get(n)}getOrCreateSubscriberSet(n=this){return this.subscribers.get(n)||this.subscribers.set(n,new Set)&&this.subscribers.get(n)}createCSS(){return this.cssVar||""}getValueFor(n){const e=ct.getOrCreate(n).get(this);if(void 0!==e)return e;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${n} or an ancestor of ${n}.`)}setValueFor(n,e){return this._appliedTo.add(n),e instanceof nn&&(e=this.alias(e)),ct.getOrCreate(n).set(this,e),this}deleteValueFor(n){return this._appliedTo.delete(n),ct.existsFor(n)&&ct.getOrCreate(n).delete(this),this}withDefault(n){return this.setValueFor(Ki,n),this}subscribe(n,e){const i=this.getOrCreateSubscriberSet(e);e&&!ct.existsFor(e)&&ct.getOrCreate(e),i.has(n)||i.add(n)}unsubscribe(n,e){const i=this.subscribers.get(e||this);i&&i.has(n)&&i.delete(n)}notify(n){const e=Object.freeze({token:this,target:n});this.subscribers.has(this)&&this.subscribers.get(this).forEach(i=>i.handleChange(e)),this.subscribers.has(n)&&this.subscribers.get(n).forEach(i=>i.handleChange(e))}alias(n){return e=>n.getValueFor(e)}}nn.uniqueId=(()=>{let t=0;return()=>(t++,t.toString(16))})(),nn.tokensById=new Map;class ZL{constructor(n,e,i){this.source=n,this.token=e,this.node=i,this.dependencies=new Set,this.observer=me.binding(n,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,Ea))}}class YL{constructor(){this.values=new Map}set(n,e){this.values.get(n)!==e&&(this.values.set(n,e),me.getNotifier(this).notify(n.id))}get(n){return me.track(this,n.id),this.values.get(n)}delete(n){this.values.delete(n)}all(){return this.values.entries()}}const Pa=new WeakMap,Ba=new WeakMap;class ct{constructor(n){this.target=n,this.store=new YL,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(e,i)=>{const o=nn.getTokenById(i);if(o&&(o.notify(this.target),nn.isCSSDesignToken(o))){const r=this.parent,s=this.isReflecting(o);if(r){const l=r.get(o),a=e.get(o);l===a||s?l===a&&s&&this.stopReflectToCSS(o):this.reflectToCSS(o)}else s||this.reflectToCSS(o)}}},Pa.set(n,this),me.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),n instanceof Fd?n.$fastController.addBehaviors([this]):n.isConnected&&this.bind()}static getOrCreate(n){return Pa.get(n)||new ct(n)}static existsFor(n){return Pa.has(n)}static findParent(n){if(Ki!==n.target){let e=jg(n.target);for(;null!==e;){if(Pa.has(e))return Pa.get(e);e=jg(e)}return ct.getOrCreate(Ki)}return null}static findClosestAssignedNode(n,e){let i=e;do{if(i.has(n))return i;i=i.parent?i.parent:i.target!==Ki?ct.getOrCreate(Ki):null}while(null!==i);return null}get parent(){return Ba.get(this)||null}has(n){return this.assignedValues.has(n)}get(n){const e=this.store.get(n);if(void 0!==e)return e;const i=this.getRaw(n);return void 0!==i?(this.hydrate(n,i),this.get(n)):void 0}getRaw(n){var e;return this.assignedValues.has(n)?this.assignedValues.get(n):null===(e=ct.findClosestAssignedNode(n,this))||void 0===e?void 0:e.getRaw(n)}set(n,e){nn.isDerivedDesignTokenValue(this.assignedValues.get(n))&&this.tearDownBindingObserver(n),this.assignedValues.set(n,e),nn.isDerivedDesignTokenValue(e)?this.setupBindingObserver(n,e):this.store.set(n,e)}delete(n){this.assignedValues.delete(n),this.tearDownBindingObserver(n);const e=this.getRaw(n);e?this.hydrate(n,e):this.store.delete(n)}bind(){const n=ct.findParent(this);n&&n.appendChild(this);for(const e of this.assignedValues.keys())e.notify(this.target)}unbind(){this.parent&&Ba.get(this).removeChild(this)}appendChild(n){n.parent&&Ba.get(n).removeChild(n);const e=this.children.filter(i=>n.contains(i));Ba.set(n,this),this.children.push(n),e.forEach(i=>n.appendChild(i)),me.getNotifier(this.store).subscribe(n);for(const[i,o]of this.store.all())n.hydrate(i,this.bindingObservers.has(i)?this.getRaw(i):o)}removeChild(n){const e=this.children.indexOf(n);return-1!==e&&this.children.splice(e,1),me.getNotifier(this.store).unsubscribe(n),n.parent===this&&Ba.delete(n)}contains(n){return function(t,n){let e=n;for(;null!==e;){if(e===t)return!0;e=jg(e)}return!1}(this.target,n.target)}reflectToCSS(n){this.isReflecting(n)||(this.reflecting.add(n),ct.cssCustomPropertyReflector.startReflection(n,this.target))}stopReflectToCSS(n){this.isReflecting(n)&&(this.reflecting.delete(n),ct.cssCustomPropertyReflector.stopReflection(n,this.target))}isReflecting(n){return this.reflecting.has(n)}handleChange(n,e){const i=nn.getTokenById(e);!i||this.hydrate(i,this.getRaw(i))}hydrate(n,e){if(!this.has(n)){const i=this.bindingObservers.get(n);nn.isDerivedDesignTokenValue(e)?i?i.source!==e&&(this.tearDownBindingObserver(n),this.setupBindingObserver(n,e)):this.setupBindingObserver(n,e):(i&&this.tearDownBindingObserver(n),this.store.set(n,e))}}setupBindingObserver(n,e){const i=new ZL(e,n,this);return this.bindingObservers.set(n,i),i}tearDownBindingObserver(n){return!!this.bindingObservers.has(n)&&(this.bindingObservers.get(n).disconnect(),this.bindingObservers.delete(n),!0)}}ct.cssCustomPropertyReflector=new class{startReflection(n,e){n.subscribe(this,e),this.handleChange({token:n,target:e})}stopReflection(n,e){n.unsubscribe(this,e),this.remove(n,e)}handleChange(n){const{token:e,target:i}=n;this.add(e,i)}add(n,e){Ss.getOrCreate(e).setProperty(n.cssCustomProperty,this.resolveCSSValue(ct.getOrCreate(e).get(n)))}remove(n,e){Ss.getOrCreate(e).removeProperty(n.cssCustomProperty)}resolveCSSValue(n){return n&&"function"==typeof n.createCSS?n.createCSS():n}},b([E],ct.prototype,"children",void 0);const ee=Object.freeze({create:function(t){return nn.from(t)},notifyConnection:t=>!(!t.isConnected||!ct.existsFor(t)||(ct.getOrCreate(t).bind(),0)),notifyDisconnection:t=>!(t.isConnected||!ct.existsFor(t)||(ct.getOrCreate(t).unbind(),0)),registerRoot(t=Ki){xt.registerRoot(t)},unregisterRoot(t=Ki){xt.unregisterRoot(t)}}),Wg=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),Gg=new Map,Rd=new Map;let Ts=null;const Oa=Te.createInterface(t=>t.cachedCallback(n=>(null===Ts&&(Ts=new cM(null,n)),Ts))),B=Object.freeze({tagFor:t=>Rd.get(t),responsibleFor:t=>t.$$designSystem$$||Te.findResponsibleContainer(t).get(Oa),getOrCreate(t){if(!t)return null===Ts&&(Ts=Te.getOrCreateDOMContainer().get(Oa)),Ts;const n=t.$$designSystem$$;if(n)return n;const e=Te.getOrCreateDOMContainer(t);if(e.has(Oa,!1))return e.get(Oa);{const i=new cM(t,e);return e.register(Ta.instance(Oa,i)),i}}});class cM{constructor(n,e){this.owner=n,this.container=e,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>Wg.definitionCallbackOnly,null!==n&&(n.$$designSystem$$=this)}withPrefix(n){return this.prefix=n,this}withShadowRootMode(n){return this.shadowRootMode=n,this}withElementDisambiguation(n){return this.disambiguate=n,this}withDesignTokenRoot(n){return this.designTokenRoot=n,this}register(...n){const e=this.container,i=[],o=this.disambiguate,r=this.shadowRootMode,s={elementPrefix:this.prefix,tryDefineElement(l,a,c){const u=function(t,n,e){return"string"==typeof t?{name:t,type:n,callback:e}:t}(l,a,c),{name:d,callback:h,baseClass:f}=u;let{type:p}=u,m=d,g=Gg.get(m),M=!0;for(;g;){const C=o(m,p,g);switch(C){case Wg.ignoreDuplicate:return;case Wg.definitionCallbackOnly:M=!1,g=void 0;break;default:m=C,g=Gg.get(m)}}M&&((Rd.has(p)||p===Pe)&&(p=class extends p{}),Gg.set(m,p),Rd.set(p,m),f&&Rd.set(f,m)),i.push(new tV(e,m,p,r,h,M))}};this.designTokensInitialized||(this.designTokensInitialized=!0,null!==this.designTokenRoot&&ee.registerRoot(this.designTokenRoot)),e.registerWithContext(s,...n);for(const l of i)l.callback(l),l.willDefine&&null!==l.definition&&l.definition.define();return this}}class tV{constructor(n,e,i,o,r,s){this.container=n,this.name=e,this.type=i,this.shadowRootMode=o,this.callback=r,this.willDefine=s,this.definition=null}definePresentation(n){eM.define(this.name,n,this.container)}defineElement(n){this.definition=new xd(this.type,Object.assign(Object.assign({},n),{name:this.name}))}tagFor(n){return B.tagFor(n)}}function S(t,...n){const{styles:e,behaviors:i}=function(t,n){const e=[];let i="";const o=[];for(let r=0,s=t.length-1;r<s;++r){i+=t[r];let l=n[r];if(l instanceof aM){const a=l.createBehavior();l=l.createCSS(),a&&o.push(a)}l instanceof fn||l instanceof CSSStyleSheet?(""!==i.trim()&&(e.push(i),i=""),e.push(l)):i+=l}return i+=t[t.length-1],""!==i.trim()&&e.push(i),{styles:e,behaviors:o}}(t,n),o=fn.create(e);return i.length&&o.withBehaviors(...i),o}function Ge(t){return`:host([hidden]){display:none}:host{display:${t}}`}const dM="#a46eff",hM="#804ad9",At="#f1f1f2",qg="#f5f5f5",Ce="#ffffff",La="#363738",fM="#505153",Pd="#000000",on="#161617",As="#074023",Bd="#009b65",pM="#d63434",mM="#006b46",Kg="#32eb96",_$=new RegExp("[^#a-f\\d]","gi"),N$=new RegExp("^#?[a-f\\d]{3}[a-f\\d]?$|^#?[a-f\\d]{6}([a-f\\d]{2})?$","i");function vM(t,n={}){if("string"!=typeof t||_$.test(t)||!N$.test(t))throw new TypeError("Expected a valid hex string");let e=1;8===(t=t.replace(/^#/,"")).length&&(e=Number.parseInt(t.slice(6,8),16)/255,t=t.slice(0,6)),4===t.length&&(e=Number.parseInt(t.slice(3,4).repeat(2),16)/255,t=t.slice(0,3)),3===t.length&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]);const i=Number.parseInt(t,16),o=i>>16,r=i>>8&255,s=255&i,l="number"==typeof n.alpha?n.alpha:e;return"array"===n.format?[o,r,s,l]:"css"===n.format?`rgb(${o} ${r} ${s}${1===l?"":` / ${Number((100*l).toFixed(2))}%`})`:{red:o,green:r,blue:s,alpha:l}}function $(t,n){const{red:e,green:i,blue:o}=vM(t);return`rgba(${e}, ${i}, ${o}, ${n})`}const Od=$(Pd,.3),Xg=$(Pd,.6),Qg=$(Pd,.6),Fe={light:"light",dark:"dark",color:"color"},ce=t=>`ni-nimble-${t}`;var Ft=(()=>(function(t){t.ltr="ltr",t.rtl="rtl"}(Ft||(Ft={})),Ft))();const x$=L`<slot></slot>`,F$=S`
    :host {
        display: contents;
    }
`,Ha=ee.create({name:"direction",cssCustomPropertyName:null}).withDefault(Ft.ltr),hr=ee.create({name:"theme",cssCustomPropertyName:null}).withDefault(Fe.light);class Zg extends Pe{constructor(){super(...arguments),this.direction=Ft.ltr,this.theme=Fe.light}directionChanged(n,e){null!=e?Ha.setValueFor(this,e):Ha.deleteValueFor(this)}themeChanged(n,e){null!=e?hr.setValueFor(this,e):hr.deleteValueFor(this)}}ne([D({attribute:"direction"})],Zg.prototype,"direction",void 0),ne([D({attribute:"theme"})],Zg.prototype,"theme",void 0);const E$=Zg.compose({baseName:"theme-provider",styles:F$,template:x$});B.getOrCreate().withPrefix("nimble").register(E$());const Ld=ee.create(ce("action-rgb-partial-color")).withDefault(t=>Jg(It(t,on,At,Ce))),ja=ee.create(ce("application-background-color")).withDefault(t=>It(t,Ce,La,As)),Dt=(ee.create(ce("header-background-color")).withDefault(t=>It(t,qg,"#252526",As)),ee.create(ce("section-background-color")).withDefault(t=>It(t,At,fM,As)),ee.create(ce("divider-background-color")).withDefault(t=>It(t,At,fM,As)),ee.create(ce("fill-selected-color")).withDefault(t=>$(tb(t),.2))),Vd=(ee.create(ce("fill-selected-rgb-partial-color")).withDefault(t=>Jg(tb(t))),ee.create(ce("fill-hover-selected-color")).withDefault(t=>$(tb(t),.15))),Rs=ee.create(ce("fill-hover-color")).withDefault(t=>$(function(t){return It(t,on,At,Ce)}(t),.1)),Ps=(ee.create(ce("fill-down-color")).withDefault(t=>$(function(t){return It(t,on,At,Ce)}(t),.15)),ee.create(ce("border-color")).withDefault(t=>_M(t))),_e=ee.create(ce("border-rgb-partial-color")).withDefault(t=>Jg(_M(t))),Xi=ee.create(ce("fail-color")).withDefault(t=>eb(t)),k$=ee.create(ce("warning-color")).withDefault(t=>function(t){return It(t,"#ff4b00","#ff8126",Ce)}(t)),S$=ee.create(ce("pass-color")).withDefault(t=>function(t){return It(t,"#009921","#00c12b",Ce)}(t)),T$=ee.create(ce("information-color")).withDefault(t=>function(t){return It(t,hM,dM,Ce)}(t)),z=ee.create(ce("border-hover-color")).withDefault(t=>It(t,Bd,Bd,Ce)),fr=ee.create(ce("icon-color")).withDefault(t=>It(t,on,At,Ce)),pr=(ee.create(ce("modal-backdrop-color")).withDefault(t=>function(t){switch(hr.getValueFor(t)){case Fe.light:return Od;case Fe.dark:return Xg;case Fe.color:return Qg;default:return Od}}(t)),ee.create(ce("popup-box-shadow-color")).withDefault(t=>$(It(t,"#818386",La,La),.3))),Yg=ee.create(ce("popup-border-color")).withDefault(t=>$(It(t,on,At,Ce),.3)),Be=(ee.create(ce("tooltip-background-color")).withDefault(t=>It(t,At,La,As)),ee.create(ce("control-height")).withDefault("32px")),En=ee.create(ce("small-padding")).withDefault("4px"),Ve=ee.create(ce("standard-padding")).withDefault("16px"),DM=ee.create(ce("label-height")).withDefault("16px"),P=ee.create(ce("border-width")).withDefault("1px"),he=ee.create(ce("icon-size")).withDefault("16px"),A$=ee.create(ce("drawer-width")).withDefault("784px"),[ioe,ooe,roe,soe,loe,aoe,coe,uoe]=zt("headline-font",t=>Ae(t),t=>$(Ae(t),.3),"Noto Serif","400","25px","32px","serif"),[doe,hoe,foe,poe,moe,goe,boe,voe]=zt("headline-plus-1-font",t=>Ae(t),t=>$(Ae(t),.3),"Noto Serif","400","29.100000381469727px","40px","serif"),[yoe,Doe,Ioe,Coe,woe,_oe,Noe,Moe]=zt("title-plus-2-font",t=>Ae(t),t=>$(Ae(t),.3),"Source Sans Pro","400","25px","32px","sans-serif"),[IM,R$,xoe,Foe,Eoe,koe,Soe,Toe]=zt("title-plus-1-font",t=>Ae(t),t=>$(Ae(t),.3),"Source Sans Pro","400","22px","28px","sans-serif"),[Aoe,Roe,Poe,Boe,Ooe,Loe,Voe,$oe]=zt("title-font",t=>Ae(t),t=>$(Ae(t),.3),"Source Sans Pro","400","19px","24px","sans-serif"),[Hoe,joe,zoe,Uoe,Woe,Goe,qoe,Koe]=zt("subtitle-plus-1-font",t=>Ae(t),t=>$(Ae(t),.3),"Source Sans Pro","300","16px","20px","sans-serif"),[P$,B$,Xoe,Qoe,Zoe,Yoe,Joe,ere]=zt("subtitle-font",t=>Ae(t),t=>$(Ae(t),.3),"Source Sans Pro","300","12.800000190734863px","16px","sans-serif"),[tre,nre,ire,ore,rre,sre,lre,are]=zt("link-standard-font",t=>Ae(t),t=>$(Ae(t),.3),"Source Sans Pro","400","14px","18px","sans-serif"),[cre,O$,ure,dre,hre,fre,pre,mre]=zt("placeholder-font",t=>$(Ae(t),.6),t=>$(Ae(t),.3),"Source Sans Pro","400","14px","18px","sans-serif"),[L$,gre,bre,vre,yre,Dre,Ire,Cre]=zt("body-emphasized-font",t=>Ae(t),t=>$(Ae(t),.3),"Source Sans Pro","600","14px","18px","sans-serif"),[kn,Rt,rn,V$,$$,H$,wre,_re]=zt("body-font",t=>Ae(t),t=>$(Ae(t),.3),"Source Sans Pro","400","14px","18px","sans-serif"),[j$,z$,Nre,Mre,xre,Fre,Ere,kre]=zt("group-header-font",t=>Ae(t),t=>$(Ae(t),.3),"Source Sans Pro","600","11px","16px","sans-serif"),[za,No,Bs,Sre,Tre,Are,Rre,Pre]=zt("control-label-font",t=>$(Ae(t),.6),t=>$(Ae(t),.3),"Source Sans Pro","600","11px","16px","sans-serif"),[Ua,Wa,CM,Bre,Ore,Lre,Vre,$re]=zt("button-label-font",t=>Ae(t),t=>$(Ae(t),.3),"Source Sans Pro","400","12.800000190734863px","16px","sans-serif"),[U$,W$,Hre,jre,zre,Ure,Wre,Gre]=zt("tooltip-caption-font",t=>Ae(t),t=>$(Ae(t),.3),"Source Sans Pro","400","11px","14px","sans-serif"),[G$,qre,Kre,Xre,Qre,Zre,Yre,Jre]=zt("error-text-font",t=>eb(t),t=>$(eb(t),.3),"Source Sans Pro","400","11px","14px","sans-serif"),q$=ee.create(ce("group-header-text-transform")).withDefault("uppercase"),pn=ee.create(ce("small-delay")).withDefault("0.075s"),wM=(ee.create(ce("medium-delay")).withDefault("0.15s"),ee.create(ce("large-delay")).withDefault("0.25s"));function Jg(t){const{red:n,green:e,blue:i}=vM(t);return`${n}, ${e}, ${i}`}function zt(t,n,e,i,o,r,s,l){if(""===t||""===i||""===o||""===r||""===s||""===l)throw new Error("createFontTokens parameter unexpectedly set to empty string");const a=ee.create(ce(t)).withDefault(`${o} ${r}/${s} ${i}, ${l}`),c=t.split("-font"),u=c[0];if(void 0===u||""!==c[1])throw new Error(`fontTokenName value of ${t} did not have the expected '-font' suffix`);return[a,ee.create(ce(`${u}-font-color`)).withDefault(C=>n(C)),ee.create(ce(`${u}-disabled-font-color`)).withDefault(C=>e(C)),ee.create(ce(`${u}-font-family`)).withDefault(`${i}`),ee.create(ce(`${u}-font-weight`)).withDefault(`${o}`),ee.create(ce(`${u}-font-size`)).withDefault(`${r}`),ee.create(ce(`${u}-font-line-height`)).withDefault(`${s}`),ee.create(ce(`${u}-fallback-font-family`)).withDefault(`${l}`)]}function It(t,n,e,i){switch(hr.getValueFor(t)){case Fe.light:return n;case Fe.dark:return e;case Fe.color:return i;default:return n}}function eb(t){return It(t,"#c4000c","#ff4646",Ce)}function _M(t){return It(t,on,At,Ce)}function Ae(t){return It(t,on,At,Ce)}function tb(t){return It(t,Bd,Bd,Ce)}class e9{constructor(n,e,i){this.value=n,this.styles=e,this.source=i}handleChange(){const n=hr.getValueFor(this.source);(Array.isArray(this.value)?this.value.includes(n):this.value===n)?this.source.$fastController.addStyles(this.styles):this.source.$fastController.removeStyles(this.styles)}}class t9{constructor(n,e){this.theme=n,this.styles=e,this.cache=new WeakMap}bind(n){const e=this.cache.get(n)||new e9(this.theme,this.styles,n);hr.subscribe(e,n),e.handleChange(),this.cache.set(n,e)}unbind(n){const e=this.cache.get(n);e&&hr.unsubscribe(e)}}const pt=(t,n)=>new t9(t,n),n9=S`
    ${Ge("inline-block")}

    :host {
        box-sizing: border-box;
        font: ${kn};
        --ni-private-breadcrumb-link-font-color: ${Rt};
    }

    .list {
        display: flex;
        flex-wrap: wrap;
    }

    :host([appearance='prominent']) {
        --ni-private-breadcrumb-link-active-font-color: ${Rt};
    }

    ::slotted(*:first-child) {
        padding-left: 0px;
    }

    ::slotted(*:not([href]):last-child) {
        font: ${L$};
    }
`.withBehaviors(pt(Fe.light,S`
            :host {
                --ni-private-breadcrumb-link-active-font-color: ${mM};
            }

            :host([appearance='prominent']) {
                --ni-private-breadcrumb-link-font-color: ${mM};
            }
        `),pt(Fe.dark,S`
            :host {
                --ni-private-breadcrumb-link-active-font-color: ${Kg};
            }

            :host([appearance='prominent']) {
                --ni-private-breadcrumb-link-font-color: ${Kg};
            }
        `),pt(Fe.color,S`
            :host {
                --ni-private-breadcrumb-link-active-font-color: ${$(Ce,.6)};
            }

            :host([appearance='prominent']) {
                --ni-private-breadcrumb-link-font-color: ${Kg};
            }
        `));class NM extends sM{}ne([D],NM.prototype,"appearance",void 0);const i9=NM.compose({baseName:"breadcrumb",baseClass:sM,template:(t,n)=>L`
    <template role="navigation">
        <div role="list" class="list" part="list">
            <slot
                ${at({property:"slottedBreadcrumbItems",filter:ks()})}
            ></slot>
        </div>
    </template>
`,styles:n9});function sn(t,n){const e="function"==typeof n?n:()=>n;return(i,o)=>t(i,o)?e(i,o):null}B.getOrCreate().withPrefix("nimble").register(i9());const s9={name:"add_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M13 7H9V3H7v4H3v2h4v4h2V9h4V7z"/></svg>'},l9={name:"arrow_down_right_and_arrow_up_left_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M13.171 13.933l-2.276-2.247-.447 2.284-1.732-5.246 5.217 1.753-2.284.456 2.291 2.26zM2 2.746l2.29 2.261-2.283.456 5.217 1.753L5.492 1.97l-.447 2.284-2.276-2.247z"/></svg>'},MM={name:"arrow_expander_down_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M3.5 4.737l1.11-.732 3.357 5.472L11.397 4l1.103.743L7.955 12 3.5 4.737z"/></svg>'},a9={name:"arrow_expander_left_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M11.263 3.5l.732 1.11-5.472 3.357L12 11.397l-.743 1.103L4 7.955 11.263 3.5z"/></svg>'},xM={name:"arrow_expander_right_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M4.737 12.5l-.732-1.11 5.472-3.357L4 4.603 4.743 3.5 12 8.045 4.737 12.5z"/></svg>'},FM={name:"arrow_expander_up_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M12.5 11.263l-1.11.732-3.357-5.472L4.603 12 3.5 11.257 8.045 4l4.455 7.263z"/></svg>'},c9={name:"arrow_left_from_line_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M12 14h2V2h-2zM2 7.982L7.9 5 6.588 7.004 11 7v2H6.613L7.9 11z"/></svg>'},u9={name:"arrow_partial_rotate_left_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M8 11.988a3.086 3.086 0 003.143-3.025 3.08 3.08 0 00-3.085-3.02v.088l.826 2.067-5.598-2.796L8.884 2.5l-.742 1.932a4.619 4.619 0 014.572 4.53A4.629 4.629 0 018 13.5z"/></svg>'},d9={name:"arrow_right_to_line_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M12 14h2V2h-2zm-6.9-3l1.287-2H2V7l4.412.004L5.1 5 11 7.982z"/></svg>'},h9={name:"arrow_rotate_right_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M8.9 2.773v1.715a3.366 3.366 0 013.3 3.428 3.366 3.366 0 01-3.3 3.429 3.36 3.36 0 01-3.293-3.366h.095l2.255.901-3.05-6.107L1.85 8.88l2.108-.808A5.039 5.039 0 008.9 13.059a5.05 5.05 0 004.95-5.143A5.05 5.05 0 008.9 2.773z"/></svg>'},f9={name:"arrow_u_rotate_left_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M8.857 9.453l-2.571-1.68v.908a3 3 0 003 3 3 3 0 003-3V3.11H14v5.571a4.714 4.714 0 01-4.714 4.715A4.714 4.714 0 014.57 8.68v-.908L2 9.453l3.403-6.849z"/></svg>'},p9={name:"arrow_up_left_and_arrow_down_right_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M4.195 4.977l-.451 2.296L2 2l5.256 1.762-2.301.458 6.849 6.803.452-2.296L14 14l-5.256-1.762 2.301-.458-6.85-6.803z"/></svg>'},m9={name:"arrows_maximize_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M12.26 8.735L14 14l-5.25-1.763 2.295-.457-3.03-3.022L8 8.742l-.015.016.015.014-3.023 3.023 2.296.45L2 13.985l1.762-5.243.458 2.295 3.015-3.015.007-.007L7.258 8l-.016-.015L7.227 8l-3.03-3.03-.457 2.295L2 2l5.25 1.762-2.295.458 3.03 3.022.015.016.015-.016L8 7.227l3.023-3.022-2.296-.45L14 2.015l-1.762 5.243-.458-2.295L8.742 8l.016.015L8.773 8l3.03 3.03.457-2.295z"/></svg>'},g9={name:"arrows_repeat_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M8.75 11.75L10 14l-6-3 6-3-1.25 2.25zM8 11h1a4 4 0 004-4M7.25 5.75L6 8l6-3-6-3 1.25 2.25zM8 5H7a4 4 0 00-4 4"/></svg>'},b9={name:"bars_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M2 13v-2h12v2zm0-4V7h12v2zm0-4V3h12v2z"/></svg>'},v9={name:"bell_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M8 14a2.05 2.05 0 01-2-2h4a2.05 2.05 0 01-2 2zm-5.25-3s0-.746.5-.746h.065c.935 0 1.435-4.918 1.435-4.918 0-.504.25-.504.25-.504h.067c.075-.037.183-.143.183-.463v-.484c.105-.842.953-1.331 2.25-1.43v-.262c0-.081.09-.15.219-.193h.562c.129.043.219.112.219.193v.263c1.297.098 2.145.587 2.25 1.43v.483c0 .32.108.426.183.463H11s.25 0 .25.483v.02s.5 4.92 1.5 4.92c.5 0 .5.745.5.745z"/></svg>'},y9={name:"bell_and_comment_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M13.836 4.75H9.57a.71.71 0 00-.71.71v2.032a.71.71 0 00.71.711h.356L9.57 9.625l2.488-1.422h1.778a.71.71 0 00.71-.71V5.46a.71.71 0 00-.71-.711zM8.196 11H2.75s0-.746.5-.746h.065c.935 0 1.435-4.918 1.435-4.918 0-.504.25-.504.25-.504h.067c.075-.037.183-.143.183-.463v-.484c.105-.842.953-1.331 2.25-1.43v-.262c0-.081.09-.15.219-.193h.562c.129.043.219.112.219.193v.263c1.224.092 2.04.537 2.217 1.294H9.57a1.713 1.713 0 00-1.71 1.71v2.032a1.712 1.712 0 00.844 1.475zM6 12h4a2.05 2.05 0 01-2 2 2.05 2.05 0 01-2-2zm7.25-1H9.18l2.868-1.64c.198.527.431.894.702.894.5 0 .5.746.5.746z"/></svg>'},D9={name:"bell_circle_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M7.042 11h2a1 1 0 01-2 0zm4.5-1h-7s0-.497.333-.497h.043c.624 0 .957-3.28.957-3.28 0-.335.167-.335.167-.335h.044c.05-.025.122-.095.122-.309v-.322c.07-.561.636-.888 1.5-.953v-.175c0-.054.06-.1.146-.129h.375c.086.029.146.075.146.129v.175c.865.065 1.43.392 1.5.953v.322c0 .214.072.284.122.309h.045s.166 0 .166.322v.014s.334 3.279 1 3.279c.334 0 .334.497.334.497zm-3.5-7.5a5.5 5.5 0 11-5.5 5.5 5.506 5.506 0 015.5-5.5m0-1a6.5 6.5 0 106.5 6.5 6.5 6.5 0 00-6.5-6.5z"/></svg>'},I9={name:"bell_solid_circle_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M1.5 8A6.5 6.5 0 008 14.5 6.5 6.5 0 0014.5 8 6.5 6.5 0 008 1.5 6.5 6.5 0 001.5 8zM8 12a1.025 1.025 0 01-1-1h2a1.025 1.025 0 01-1 1zm-3.5-2s0-.497.333-.497h.043c.624 0 .957-3.28.957-3.28 0-.335.167-.335.167-.335h.045c.05-.025.122-.095.122-.309v-.322c.07-.561.635-.888 1.5-.953v-.175c0-.054.06-.1.145-.129h.376c.085.029.145.075.145.129v.175c.865.065 1.43.392 1.5.953v.322c0 .214.073.284.122.309H10s.167 0 .167.322v.014s.333 3.279 1 3.279c.333 0 .333.497.333.497z"/></svg>'},C9={name:"block_with_ribbon_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M2 2v10h4.762A4.496 4.496 0 0113 5.762V2zm12 7.5a3.5 3.5 0 10-6 2.442V14l2.5-1.667L13 14v-2.058A3.485 3.485 0 0014 9.5zM10.5 8A1.5 1.5 0 119 9.5 1.5 1.5 0 0110.5 8z"/></svg>'},w9={name:"book_magnifying_glass_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M6 10c0-.347.058-.678.142-1H5V8h1.556c.22-.378.498-.714.826-1H5V6h5c.732 0 1.41.212 2 .556V2H3v11h4.382A3.975 3.975 0 016 10zM5 4h5v1H5V4z"/><path class="cls-1" d="M9.99 7.01l-.076.002a3 3 0 101.799 5.452l1.593 1.53.69-.725-1.58-1.516a2.973 2.973 0 00.57-1.816A3 3 0 009.99 7.01zM10 12c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"/></svg>'},_9={name:"calendar_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M4 4.023V2.977A.976.976 0 014.977 2h.046A.976.976 0 016 2.977v1.046A.977.977 0 015.023 5h-.046A.977.977 0 014 4.023zM13 4v.023A1.98 1.98 0 0111.023 6h-.046A1.98 1.98 0 019 4.023V4H7v.023A1.98 1.98 0 015.023 6h-.046A1.98 1.98 0 013 4.023V4a1 1 0 00-1 1v8a1 1 0 001 1h10a1 1 0 001-1V5a1 1 0 00-1-1zm-7 8H4v-1h2zm.001-1.999H4V9h2.001zm0-2.001H4V7h2.001zM9 12H7v-1h2zm0-1.999H7V9h2zM9 8H7V7h2zm3 4h-2v-1h2zm.001-1.999H10V9h2.001zm0-2.001H10V7h2.001zM10 4.023V2.977A.976.976 0 0110.977 2h.046a.976.976 0 01.977.977v1.046a.977.977 0 01-.977.977h-.046A.977.977 0 0110 4.023z"/></svg>'},N9={name:"chart_diagram_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M11 10V7H8V5h1V2H6v3h1v2H4v3H3v3h3v-3H5V8h5v2H9v3h3v-3z"/></svg>'},M9={name:"chart_diagram_child_focus_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M12 10V7H8V5h1V2H6v3h1v2H3v3H2v3h3v-3H4V8h3v2H6v3h3v-3H8V8h3v2h-1v3h3v-3zm-8 2H3v-1h1zm4 0H7v-1h1zm4 0h-1v-1h1z"/></svg>'},x9={name:"chart_diagram_parent_focus_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M12 10V7H8V5h1V2H6v3h1v2H3v3H2v3h3v-3H4V8h3v2H6v3h3v-3H8V8h3v2h-1v3h3v-3zM7 4V3h1v1z"/></svg>'},F9={name:"chart_diagram_parent_focus_two_child_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M11 10V7H8V5h1V2H6v3h1v2H4v3H3v3h3v-3H5V8h5v2H9v3h3v-3zm-6 2H4v-1h1zm6 0h-1v-1h1z"/></svg>'},EM={name:"check_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M13 5.287L6.182 12 3 8.867l1.363-1.343L6.24 9.37 11.693 4z"/></svg>'},E9={name:"check_dot_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><circle class="cls-1" cx="12.5" cy="11.5" r="1.5"/><path class="cls-2" d="M14 4.693l-8.182 8.182L2 9.057 3.636 7.42l2.25 2.25 6.546-6.545z"/></svg>'},k9={name:"circle_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M8 2a6 6 0 106 6 6 6 0 00-6-6zm0 9.429A3.429 3.429 0 1111.429 8 3.429 3.429 0 018 11.429z"/></svg>'},kM={name:"circle_filled_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><circle class="cls-1" cx="8" cy="8" r="4"/></svg>'},S9={name:"circle_broken_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M7 14A6.1 6.1 0 017 2v2.686a3.475 3.475 0 000 6.628zM9 2v2.686a3.475 3.475 0 010 6.628V14A6.1 6.1 0 009 2z"/></svg>'},T9={name:"circle_check_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M8 2a6 6 0 106 6 6 6 0 00-6-6zm-1.212 9.2L4 8.388 5.225 7.2l1.553 1.61 4.06-4.01L12 6.013z"/></svg>'},A9={name:"circle_partial_broken_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M9 2v2.686a3.475 3.475 0 010 6.628V14A6.1 6.1 0 009 2z"/><path class="cls-2" d="M7 11.314a3.475 3.475 0 010-6.628V2a6.1 6.1 0 000 12z"/></svg>'},R9={name:"circle_slash_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M8 2a6 6 0 106 6 6 6 0 00-6-6zm.075 1.714a4.281 4.281 0 013.573 6.647L5.714 4.427a4.262 4.262 0 012.36-.713zM3.789 8a4.261 4.261 0 01.713-2.36l5.934 5.933A4.281 4.281 0 013.789 8z"/></svg>'},P9={name:"circle_x_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M8 2a6 6 0 106 6 6 6 0 00-6-6zm.075 1.714a4.263 4.263 0 012.409.743l-2.37 2.37-2.4-2.4a4.262 4.262 0 012.36-.713zM4.502 5.64l2.4 2.4-2.37 2.37a4.273 4.273 0 01-.03-4.77zm3.573 6.647a4.256 4.256 0 01-2.31-.685l2.349-2.35 2.322 2.322a4.261 4.261 0 01-2.361.713zm3.573-1.925L9.326 8.039l2.35-2.349a4.251 4.251 0 01-.028 4.67z"/></svg>'},B9={name:"clipboard_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M11 5H5a2 2 0 012-2V2a1 1 0 012 0v1a2 2 0 012 2zm1-2v9H4V3H3a1 1 0 00-1 1v9a1 1 0 001 1h10a1 1 0 001-1V4a1 1 0 00-1-1zm-2 4H5v1h5zM8 9H5v1h3z"/></svg>'},O9={name:"clock_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M8 2a6 6 0 106 6 6 6 0 00-6-6m.576 4.87l1.555-1.557a1.635 1.635 0 01.84-.256 1.979 1.979 0 01-.23.791c-.115.163-1.356 1.41-1.571 1.626a1.278 1.278 0 010 1.085l2.376 2.38a1.597 1.597 0 01.458 1.072 1.621 1.621 0 01-1.222-.613c-.456-.456-1.94-1.963-2.207-2.235a1.275 1.275 0 110-2.293"/></svg>'},L9={name:"clock_cog_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M8.108 7.392l.955-.957a1.004 1.004 0 01.516-.157 1.215 1.215 0 01-.14.486c-.072.1-.834.866-.966.999a.785.785 0 010 .666l1.341 1.344a.981.981 0 01.281.658.996.996 0 01-.75-.376c-.28-.28-1.073-1.088-1.237-1.255a.783.783 0 110-1.408m5.69 2.292L14 7.324l-1.327-.113a4.76 4.76 0 00-.402-1.26l1.02-.86-1.527-1.811-1.019.86a4.726 4.726 0 00-.563-.344 4.61 4.61 0 00-.612-.265l.114-1.329L7.324 2l-.113 1.329a4.77 4.77 0 00-1.26.401l-.86-1.02L3.28 4.237l.858 1.02A4.771 4.771 0 003.53 6.43l-1.329-.114L2 8.676l1.329.114a4.69 4.69 0 00.401 1.26l-1.02.86 1.526 1.811 1.02-.859a4.666 4.666 0 001.175.608l-.113 1.33 2.358.2.114-1.328a4.688 4.688 0 001.26-.4l.86 1.02 1.81-1.527-.858-1.02a4.687 4.687 0 00.608-1.175zM8 11.45A3.45 3.45 0 1111.45 8 3.45 3.45 0 018 11.45z"/></svg>'},V9={name:"clock_triangle_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M8 3a4.951 4.951 0 00-2.152.505L7.096 6H3.422A4.997 4.997 0 108 3zm2.003 7.616a453.75 453.75 0 01-1.675-1.7 1.061 1.061 0 110-1.907l1.294-1.297a1.36 1.36 0 01.699-.212 1.646 1.646 0 01-.19.658c-.097.136-1.13 1.173-1.309 1.353a1.063 1.063 0 010 .903l1.817 1.82a1.33 1.33 0 01.381.891 1.35 1.35 0 01-1.017-.51z"/><path class="cls-2" d="M5.477 5H1.522L3.5 1.045 5.477 5z"/></svg>'},$9={name:"clone_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M5 5h5V2H2v8h3zm1 1v8h8V6z"/></svg>'},H9={name:"cloud_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M5.08 11.977a5.123 5.123 0 01-1.295-.2C2.754 11.46 1.883 10.2 1.883 9.022a2.963 2.963 0 012.63-2.937A4.203 4.203 0 018.432 3.48a4.254 4.254 0 014.249 4.17 2.251 2.251 0 011.437 2.09 2.24 2.24 0 01-2.238 2.237l-4.947.003c-1.01 0-1.79-.001-1.853-.003zm-.228-4.573c-.899 0-1.63.725-1.63 1.618 0 .842.702 1.61 1.474 1.61l7.183.007a.9.9 0 000-1.799.883.883 0 00-.337.067l-.493.202.159-.508a2.914 2.914 0 00-2.777-3.783 2.897 2.897 0 00-2.868 2.436l-.044.268-.264-.067a1.641 1.641 0 00-.403-.051z"/></svg>'},j9={name:"cloud_upload_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M8.476 7.298l-1.927 3.848 1.48-.568v3.407h.948v-3.407l1.42.568zM15 9.005a2.374 2.374 0 01-2.371 2.371h-.998l-.5-1h1.498a1.371 1.371 0 10-.516-2.64A3.77 3.77 0 104.797 5.99 2.238 2.238 0 002 8.148a2.223 2.223 0 002.057 2.22l1.758.009-.448.894a10.567 10.567 0 01-2.31-.121 3.224 3.224 0 01.993-6.225 4.77 4.77 0 019.236 1.68c0 .04 0 .081-.002.121A2.375 2.375 0 0115 9.006z"/></svg>'},z9={name:"cloud_with_arrow_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M12.429 10.1l.001-.101A3.998 3.998 0 004.69 8.59a2.715 2.715 0 00-2.557 2.7 2.782 2.782 0 001.725 2.516 4.854 4.854 0 001.225.19h.004c.19.006 6.792 0 6.792 0a1.987 1.987 0 00.55-3.897zm-.55 3.06l-7.183-.008a1.867 1.867 0 01.156-3.728 1.891 1.891 0 01.464.06 3.16 3.16 0 116.13 1.462 1.149 1.149 0 11.433 2.213zM4.5 4.5a1 1 0 111-1 1 1 0 01-1 1zm5.138.681l.496-1.241H7v-.828h3.134l-.496-1.293L13 3.502z"/></svg>'},U9={name:"cog_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M6.823 2l-2.217.914.516 1.25a4.743 4.743 0 00-.95.944L2.925 4.59l-.922 2.212 1.247.52a4.82 4.82 0 00-.002 1.34L2 9.176l.914 2.218 1.248-.515a4.824 4.824 0 00.945.949l-.518 1.247 2.214.921.519-1.246a4.68 4.68 0 00.674.048 4.74 4.74 0 00.666-.047L9.176 14l2.218-.914-.515-1.248a4.828 4.828 0 00.95-.945l1.245.518.922-2.214-1.247-.519a4.73 4.73 0 00.002-1.34L14 6.824l-.914-2.218-1.25.515a4.739 4.739 0 00-.944-.949l.518-1.246-2.212-.922-.52 1.247a4.714 4.714 0 00-.676-.049 4.808 4.808 0 00-.663.047zm1.175 9a2.999 2.999 0 112.77-1.847 2.984 2.984 0 01-2.77 1.846M8 6.801a1.2 1.2 0 10.46.093A1.198 1.198 0 008 6.8"/></svg>'},W9={name:"cog_database_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M13.147 11.648c-.01.006-.02.014-.032.02a4.1 4.1 0 01-.46.224l-.012.005c-.033.015-.068.028-.103.042-.051.019-.11.036-.162.055-.094.034-.186.068-.285.099-.034.01-.064.024-.1.033-.019.007-.042.012-.062.019q-.279.078-.58.144l-.133.03q-.324.068-.668.12l-.135.02c-.214.03-.431.057-.653.079l-.103.012a17.446 17.446 0 01-.903.06c-.254.01-.507.018-.759.018a18.75 18.75 0 01-1.66-.078l-.105-.012a15.901 15.901 0 01-.65-.08l-.134-.018c-.23-.036-.455-.076-.67-.122l-.132-.029a9.372 9.372 0 01-.582-.145l-.059-.017c-.036-.01-.067-.023-.1-.034a7.034 7.034 0 01-.285-.1c-.054-.018-.112-.035-.165-.055l-.101-.041-.01-.005a4.076 4.076 0 01-.462-.223l-.03-.02a2.343 2.343 0 01-.334-.24c-.014-.012-.033-.022-.045-.033v1.013c0 .364.524.749 1.427 1.051a8.098 8.098 0 00.697.197 14.793 14.793 0 003.4.363 14.818 14.818 0 003.403-.362 8.38 8.38 0 00.697-.197c.904-.303 1.43-.688 1.43-1.052v-1.013c-.015.012-.034.022-.047.034a2.478 2.478 0 01-.333.238m.38-1.883c0-.762-2.27-1.61-5.529-1.61-3.256 0-5.524.848-5.524 1.61 0 .365.525.75 1.427 1.052a9.254 9.254 0 00.698.197 14.8 14.8 0 003.399.362 14.817 14.817 0 003.401-.362 8.375 8.375 0 00.7-.197c.902-.302 1.428-.687 1.428-1.052M3.931 7.697L2.802 7.6l.171-1.979 1.129.095a3.984 3.984 0 01.516-.985l-.729-.856 1.537-1.28.73.855a4.085 4.085 0 011.071-.336L7.323 2l2.004.17-.097 1.114a3.949 3.949 0 01.52.223 4.027 4.027 0 01.478.288l.866-.721 1.296 1.52-.866.72a3.961 3.961 0 01.341 1.058l1.127.095-.133 1.539a10.211 10.211 0 00-2.482-.618c.007-.048.021-.094.026-.143a2.48 2.48 0 00-1.346-2.416 2.543 2.543 0 00-2.938.45 2.408 2.408 0 00-.698 2.14 11.88 11.88 0 00-1.482.311l-.008-.033zm4.067-.468c-.331 0-.697.012-1.077.035a.972.972 0 01-.026-.314.99.99 0 01.292-.618 1.011 1.011 0 011.174-.18.992.992 0 01.539.967.923.923 0 01-.036.132 17.817 17.817 0 00-.866-.022z"/></svg>'},G9={name:"cog_database_inset_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M12.751 7.338L14 6.824l-.914-2.218-1.25.515a4.74 4.74 0 00-.944-.949l.518-1.246-2.212-.922-.52 1.247a4.715 4.715 0 00-.676-.049 4.803 4.803 0 00-.663.047L6.823 2l-2.217.914.516 1.25a4.741 4.741 0 00-.95.944L2.925 4.59l-.922 2.212 1.247.52a4.816 4.816 0 00-.002 1.34L2 9.176l.914 2.218 1.248-.515a4.823 4.823 0 00.945.949l-.518 1.247 2.214.921.519-1.246a4.673 4.673 0 00.674.048 4.737 4.737 0 00.666-.047L9.176 14l2.218-.914-.515-1.248a4.826 4.826 0 00.95-.945l1.245.518.922-2.214-1.247-.519a4.729 4.729 0 00.002-1.34zm-1.06 2.418c0 .244-.35.5-.954.703a5.157 5.157 0 01-.466.131 9.896 9.896 0 01-2.273.243 9.88 9.88 0 01-2.271-.243 5.454 5.454 0 01-.466-.131c-.603-.202-.953-.46-.953-.703V9.08c.008.008.02.015.03.023a1.567 1.567 0 00.223.16l.02.013a2.725 2.725 0 00.309.15l.006.002.068.028c.035.013.074.025.11.037.062.023.125.046.19.066.023.008.043.016.067.023l.04.011c.123.036.253.069.389.098l.087.02c.144.03.295.057.448.08l.09.012c.142.021.286.038.434.054l.07.008c.162.014.327.027.491.035l.112.005a11.63 11.63 0 001.013 0l.11-.005c.165-.008.33-.02.493-.035l.069-.008c.148-.015.293-.033.436-.054l.09-.012q.23-.035.447-.08l.088-.02c.135-.03.264-.062.388-.097l.042-.012.066-.023c.066-.02.128-.043.19-.066.036-.012.075-.024.109-.037l.069-.028.007-.003a2.744 2.744 0 00.308-.149l.022-.014a1.651 1.651 0 00.222-.159l.03-.023zm0-1.76c0 .243-.35.5-.954.703a5.157 5.157 0 01-.466.13 9.897 9.897 0 01-2.273.243 9.88 9.88 0 01-2.271-.242 5.44 5.44 0 01-.466-.132c-.603-.202-.953-.459-.953-.703V7.32c.008.008.02.014.03.022a1.566 1.566 0 00.223.16l.02.013a2.716 2.716 0 00.309.15l.006.003c.022.01.046.018.068.027l.11.038c.062.022.125.045.19.066.023.007.043.016.067.023l.04.011c.123.035.253.067.389.097l.087.02c.144.03.295.057.448.08l.09.013c.142.02.286.038.434.053l.07.008a11.715 11.715 0 001.726.035c.165-.008.33-.02.493-.035l.069-.008c.148-.015.293-.033.436-.053l.09-.012q.23-.036.447-.081l.088-.02q.202-.044.388-.097c.014-.004.029-.007.042-.012.023-.006.043-.015.067-.022.065-.02.127-.044.19-.066l.108-.037.069-.028.008-.003a2.735 2.735 0 00.307-.15l.022-.013a1.657 1.657 0 00.222-.16c.009-.007.021-.014.03-.022zm-.953-1.05a5.625 5.625 0 01-.467.132 9.896 9.896 0 01-2.272.24 9.885 9.885 0 01-2.271-.24 6.179 6.179 0 01-.466-.133c-.603-.201-.954-.459-.954-.702 0-.51 1.515-1.076 3.69-1.076 2.177 0 3.694.567 3.694 1.076 0 .243-.351.5-.954.702z"/></svg>'},q9={name:"cog_small_cog_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M6.712 5.956a.76.76 0 01-.224.477.787.787 0 01-.909.139.762.762 0 01-.19-1.224.781.781 0 01.907-.14.767.767 0 01.416.748zM14 11.61l-.441 1.088-.62-.246a2.276 2.276 0 01-.232.268 2.386 2.386 0 01-.23.2l.263.606-1.09.46-.263-.606a2.353 2.353 0 01-.662.008l-.248.612-1.1-.435.249-.612a2.273 2.273 0 01-.256-.215 2.358 2.358 0 01-.218-.243l-.614.26-.466-1.077.614-.259a2.287 2.287 0 01-.008-.654l-.62-.246.44-1.087.62.246a2.38 2.38 0 01.234-.27 2.463 2.463 0 01.229-.198l-.263-.606 1.09-.46.263.605a2.422 2.422 0 01.662-.008l.248-.612 1.1.436-.248.612a2.351 2.351 0 01.473.458l.614-.26.466 1.076-.613.26a2.339 2.339 0 01.008.654zm-1.934-1.591a1.495 1.495 0 00-2.085.011 1.454 1.454 0 00.01 2.081 1.479 1.479 0 00.486.313 1.495 1.495 0 001.6-.324 1.454 1.454 0 00-.01-2.081zM9.036 8.33l-1.189.99-.564-.661a3.104 3.104 0 01-.827.26l-.075.86-1.547-.13.074-.862a3.075 3.075 0 01-.77-.394l-.671.557-1.001-1.174.67-.557a3.015 3.015 0 01-.264-.817L2 6.328 2.132 4.8l.872.074a3.08 3.08 0 01.4-.762l-.564-.66 1.188-.99.565.66a3.159 3.159 0 01.827-.26L5.494 2l1.548.131-.074.861a3.046 3.046 0 01.402.172 3.111 3.111 0 01.369.223l.669-.557L9.41 4.004l-.67.557a3.06 3.06 0 01.264.818l.871.073-.132 1.53-.872-.074a3.026 3.026 0 01-.4.762zM7.874 6.054a1.916 1.916 0 00-1.04-1.868 1.965 1.965 0 00-2.27.348 1.907 1.907 0 00.478 3.06 1.965 1.965 0 002.27-.347 1.903 1.903 0 00.562-1.193zm3.376 4.467a.6.6 0 00-.64.13.591.591 0 00-.131.196.584.584 0 00.33.761.597.597 0 00.64-.13.59.59 0 00.13-.195.583.583 0 00-.135-.637.596.596 0 00-.194-.125z"/></svg>'},K9={name:"cog_zoomed_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M14 3.11l-1.178-.632-1.875 2.133a5.424 5.424 0 00-.716-.094L8.766 2l-2.138.627.2 2.863a5.226 5.226 0 00-.527.47l-2.77-.738-1.056 1.95L4.656 9.04a5.188 5.188 0 00-.087.704L2 11.144l.659 2.1 2.914-.197a4.961 4.961 0 00.453.525l-.13.427h7.232a.818.818 0 00.87-.759L14 13.2zm-1.335 7.876a2.877 2.877 0 01-3.741 1.477 2.768 2.768 0 01-1.51-3.66 2.876 2.876 0 013.729-1.482 2.76 2.76 0 011.535 3.637z"/></svg>'},X9={name:"comment_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M14 3.5v6a1.5 1.5 0 01-1.5 1.5H8.75L3.5 14l.75-3H3.5A1.5 1.5 0 012 9.5v-6A1.5 1.5 0 013.5 2h9A1.5 1.5 0 0114 3.5z"/></svg>'},Q9={name:"computer_and_monitor_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M14 12V6H5v6h4v1H7v1h5v-1h-2v-1zm-8-1V7h7v4zm1-6H4V4h3zm1 0V3H3v7h1v3h2v1H3a1 1 0 01-1-1V3a1 1 0 011-1h5a1 1 0 011 1v2z"/></svg>'},Z9={name:"copy_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M5 5h5V2H2v8h3zm1 1v8h8V6zm7 7H7V7h6z"/></svg>'},Y9={name:"copy_text_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M5 5h5V2H2v8h3zm1 1v8h8V6zm7 7H7V7h6zm-1-4H8V8h4zm-1 2H8v-1h3z"/></svg>'},J9={name:"dashboard_builder_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M4.646 6.646L7 4.293l2 2 1.646-1.646.707.707L9 7.707l-2-2-1.646 1.647zM14 2v12H2V2zM8 9H4v3h4zm4 2H9v1h3zm0-2H9v1h3zm0-5H4v4h8V4zm-5 6H5v1h2z"/></svg>'},eH={name:"dashboard_builder_legend_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M2 2v12h12V2zm10 10H4v-1.293l2.04-2.04 3.804 2.983L12 9.74zm0-7h-2v1h2v2.405L9.805 10.35 5.96 7.333 4 9.293V6h2V5H4V4h8zM9 6H7V5h2z"/></svg>'},tH={name:"dashboard_builder_templates_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M2 2v12h12V2zm11 11H3V3h10z"/><path class="cls-1" d="M9 9h3v1H9zM12 4H4v4h8zm-1 3H5V5h6zM8 9H4v3h4zm-1 2H5v-1h2zM9 11h3v1H9z"/></svg>'},nH={name:"dashboard_builder_tile_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M4.646 10.646L7 8.293l2 2 1.646-1.646.707.707L9 11.707l-2-2-1.646 1.647zM14 2v12H2V2zM4 7h3V4H4zm8 1H4v4h8V8zm0-4H8v3h4z"/></svg>'},iH={name:"database_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M13.588 11.46a2.69 2.69 0 00.36-.257c.015-.012.036-.023.051-.036v1.093c0 .395-.57.81-1.551 1.137a9.133 9.133 0 01-.757.212A16.17 16.17 0 017.997 14a16.144 16.144 0 01-3.69-.391 8.83 8.83 0 01-.757-.213C2.57 13.069 2 12.655 2 12.26v-1.093c.013.013.033.023.049.036a2.61 2.61 0 00.362.26c.012.006.021.013.033.02a4.294 4.294 0 00.502.241l.01.005.11.046c.058.02.121.039.18.06.1.036.202.073.308.106.037.012.07.026.11.037.018.006.042.011.063.017.2.06.412.11.633.159l.142.031c.234.049.478.092.727.13.048.008.098.014.146.02a17.346 17.346 0 00.82.1 24.659 24.659 0 00.98.065c.273.01.55.019.822.019.273 0 .548-.008.824-.02.06-.003.119-.006.179-.007.268-.014.536-.034.801-.057l.112-.014c.24-.023.476-.052.708-.086.048-.006.098-.012.147-.02.25-.038.491-.081.725-.13.05-.012.096-.021.144-.031.219-.049.429-.1.63-.157.022-.008.047-.013.069-.02.037-.01.07-.024.108-.036.107-.034.206-.07.309-.107.057-.02.12-.038.176-.06.037-.014.075-.028.111-.045l.013-.005a4.316 4.316 0 00.5-.241.415.415 0 00.035-.022m0-2.845l-.035.022a4.46 4.46 0 01-.5.241l-.013.005c-.036.016-.074.03-.111.045l-.176.06c-.103.037-.202.073-.31.107-.037.012-.07.025-.107.036-.022.007-.047.012-.069.02a10.638 10.638 0 01-.774.187q-.35.075-.725.13c-.049.009-.099.014-.147.021-.232.034-.468.063-.708.086L9.8 9.59c-.265.024-.533.044-.801.057l-.18.008c-.275.012-.55.02-.823.02a19 19 0 01-.823-.02l-.18-.008a20.583 20.583 0 01-.8-.057l-.113-.013c-.241-.024-.475-.052-.706-.086-.048-.006-.098-.012-.146-.02a12.62 12.62 0 01-1.502-.32c-.021-.006-.045-.01-.063-.017-.04-.012-.073-.025-.11-.037a7.688 7.688 0 01-.309-.107c-.058-.02-.121-.039-.179-.06l-.11-.045-.01-.005a4.436 4.436 0 01-.502-.241c-.012-.007-.02-.014-.033-.02a2.544 2.544 0 01-.362-.26c-.016-.013-.036-.023-.049-.036v1.093c0 .394.57.81 1.55 1.136a8.83 8.83 0 00.757.213 16.145 16.145 0 003.69.39 16.171 16.171 0 003.694-.39 9.133 9.133 0 00.757-.213c.98-.327 1.551-.742 1.551-1.136V8.322c-.015.013-.036.024-.05.036a2.69 2.69 0 01-.361.258m0-2.845l-.035.022a4.463 4.463 0 01-.5.241l-.013.005c-.036.016-.074.03-.111.045l-.176.06c-.103.037-.202.073-.31.107-.037.012-.07.026-.107.036-.022.007-.047.012-.069.02q-.302.084-.63.156l-.144.031q-.351.075-.725.132c-.049.006-.099.012-.147.02-.232.032-.468.061-.708.085l-.112.013a19.05 19.05 0 01-.98.066c-.276.01-.55.018-.824.018a20.457 20.457 0 01-1.802-.084l-.114-.013c-.241-.024-.475-.053-.706-.086l-.146-.02c-.249-.038-.493-.081-.727-.13-.05-.01-.094-.022-.142-.032-.22-.048-.432-.1-.633-.157l-.063-.018c-.04-.011-.073-.025-.11-.037a7.688 7.688 0 01-.309-.107l-.179-.06-.11-.045-.01-.005a4.438 4.438 0 01-.502-.241c-.012-.007-.02-.014-.033-.02a2.544 2.544 0 01-.362-.26C2.033 5.5 2.013 5.488 2 5.476V6.57c0 .394.57.81 1.55 1.136a8.83 8.83 0 00.757.213 16.144 16.144 0 003.69.39 16.17 16.17 0 003.694-.39 9.133 9.133 0 00.757-.213c.98-.327 1.551-.742 1.551-1.136V5.477c-.015.013-.036.024-.05.036a2.69 2.69 0 01-.361.258M14 3.738C14 2.915 11.535 2 7.998 2 4.463 2 2 2.915 2 3.738c0 .394.57.81 1.55 1.135.113.039.23.074.355.11q.192.053.402.103a16.152 16.152 0 003.69.39 16.17 16.17 0 003.692-.39 9.13 9.13 0 00.759-.213C13.429 4.548 14 4.132 14 3.738"/></svg>'},oH={name:"database_check_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M5.919 12.103a11.87 11.87 0 01-1.594-.26 7.445 7.445 0 01-.644-.182c-.835-.28-1.32-.635-1.32-.973v-.936c.011.01.029.02.042.031a2.226 2.226 0 00.308.222l.028.018a3.65 3.65 0 00.428.206l.009.005.093.038c.049.019.103.034.153.051.086.032.173.063.262.092.032.01.06.022.094.032l.054.014c.17.05.35.095.538.136l.121.027c.2.042.408.078.62.111.041.007.083.012.124.018.197.028.396.052.6.073l.038.005-.613.613zm-2.238-7.74a8.567 8.567 0 00.645.182 13.68 13.68 0 003.143.334 13.697 13.697 0 003.144-.334 7.753 7.753 0 00.646-.182c.835-.28 1.32-.635 1.32-.973 0-.704-2.098-1.488-5.11-1.488-3.01 0-5.107.784-5.107 1.488 0 .338.486.694 1.32.973zm5.047 6.495l.008.007.008-.008zm-5.047-4.07a7.471 7.471 0 00.644.182 13.675 13.675 0 003.143.335 13.697 13.697 0 003.146-.335 7.694 7.694 0 00.644-.181c.835-.28 1.321-.636 1.321-.973v-.937c-.013.012-.03.02-.043.032a2.29 2.29 0 01-.307.22.353.353 0 01-.03.02 3.788 3.788 0 01-.426.206l-.01.004c-.031.014-.064.026-.096.039-.047.017-.101.033-.15.05-.087.032-.172.064-.263.092-.032.01-.06.023-.092.032l-.058.016q-.257.073-.537.134l-.122.027q-.3.063-.618.112l-.124.017c-.198.029-.399.053-.604.074l-.095.01a16.15 16.15 0 01-.835.057c-.235.01-.468.016-.701.016a17.43 17.43 0 01-1.535-.072l-.097-.011a14.698 14.698 0 01-.6-.074l-.125-.017c-.212-.033-.42-.07-.62-.112l-.12-.027a8.673 8.673 0 01-.54-.134c-.018-.006-.037-.01-.053-.016-.034-.01-.062-.022-.094-.032a6.551 6.551 0 01-.262-.091c-.05-.018-.104-.034-.153-.052l-.093-.038-.01-.004a3.768 3.768 0 01-.427-.207l-.028-.017a2.167 2.167 0 01-.308-.223c-.013-.011-.031-.02-.042-.03v.936c0 .337.485.692 1.32.972zm0 2.436a7.471 7.471 0 00.644.182 13.147 13.147 0 002.644.328l.318-.318.323.324a14.377 14.377 0 002.473-.222l1.753-1.753-.063.028-.01.004c-.031.014-.063.027-.096.04-.047.017-.101.033-.15.05-.087.032-.171.063-.263.091-.032.01-.06.022-.092.032-.018.006-.04.01-.058.017a9.015 9.015 0 01-.66.16q-.298.064-.617.112l-.124.017c-.198.029-.399.054-.604.074l-.095.011c-.225.02-.454.037-.682.049l-.153.007a16.115 16.115 0 01-1.402 0l-.154-.007a17.43 17.43 0 01-.68-.049l-.097-.011a14.689 14.689 0 01-.6-.074c-.042-.006-.084-.01-.125-.017a10.679 10.679 0 01-1.28-.274l-.053-.015c-.034-.01-.062-.021-.094-.032a6.551 6.551 0 01-.262-.09c-.05-.018-.104-.034-.153-.053-.03-.012-.063-.024-.093-.038l-.01-.004a3.77 3.77 0 01-.427-.207l-.028-.017a2.169 2.169 0 01-.308-.223c-.014-.01-.031-.02-.042-.03v.936c0 .337.485.693 1.32.972zm9.269-1.6L8.736 11.84l-1.449-1.45-1.053 1.055 2.458 2.458 5.268-5.268z"/></svg>'},rH={name:"desktop_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M13 3H2v8h5v1H5v1h6v-1H9v-1h5V3zm0 7H3V4h10z"/></svg>'},sH={name:"donut_chart_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M10.872 10.956a4.123 4.123 0 01-6.997-2.962v-.007H2v.007a5.995 5.995 0 0010.301 4.182zM8.372 2v1.884a4.13 4.13 0 012.992 6.501l1.429 1.224A6.008 6.008 0 008.37 2zM2.048 7.236h1.897a4.117 4.117 0 013.675-3.352V2A6.012 6.012 0 002.05 7.236z"/></svg>'},lH={name:"dot_solid_dot_stroke_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M7 8a3 3 0 11-3-3 3 3 0 013 3zm5-2a2 2 0 102 2 2.002 2.002 0 00-2-2m0-1a3 3 0 11-3 3 3 3 0 013-3z"/></svg>'},aH={name:"download_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M14 9v5H2V9h1v4h10V9zm-5.982 2L11 5.1 8.996 6.412 9 2H7v4.387L5 5.1z"/></svg>'},cH={name:"electronic_chip_zoomed_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M13 14H7.333V9.333a2 2 0 012-2H14V13a1 1 0 01-1 1zM12 2a.667.667 0 00-.667.667v2h1.334v-2A.667.667 0 0012 2zM8.444 2a.667.667 0 00-.666.667v2H9.11v-2A.667.667 0 008.444 2zM2 8.444a.667.667 0 00.667.667h2V7.778h-2A.667.667 0 002 8.444zM2 12a.667.667 0 00.667.667h2v-1.334h-2A.667.667 0 002 12zm11.556-8.222v.889a.444.444 0 01-.445.444H10.89a.444.444 0 01-.445-.444v-.89H10v.89a.444.444 0 01-.444.444H7.333a.444.444 0 01-.444-.444v-.89H4.667a.889.889 0 00-.89.89v2.222h.89a.444.444 0 01.444.444v2.223a.444.444 0 01-.444.444h-.89v.444h.89a.444.444 0 01.444.445v2.222a.444.444 0 01-.444.445h-.89V14H6.89V8.222A1.333 1.333 0 018.222 6.89H14V3.778z"/></svg>'},uH={name:"exclamation_mark_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M6.371 11.873h3.256V14H6.37zM6.316 2l.37 8.542h2.628L9.684 2z"/></svg>'},dH={name:"eye_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M7.856 3.657A7.004 7.004 0 001 8.001a7.588 7.588 0 007.146 4.342A7.002 7.002 0 0015 8a7.586 7.586 0 00-7.144-4.344m-1.199 7.289A5.108 5.108 0 012.443 8s.665-2.585 4.33-3.037a2.786 2.786 0 00-1.414 1.223l2.787 1.22H4.977a3.47 3.47 0 00-.053.576 3.348 3.348 0 001.734 2.962m2.85.02a3.4 3.4 0 00.107-5.908 5.006 5.006 0 013.942 2.944s-.603 2.44-4.05 2.963"/></svg>'},hH={name:"fancy_a_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M10.597 9.844H7.865A7.465 7.465 0 016.19 11.96a3.323 3.323 0 01-2.042.667 2.835 2.835 0 01-1.964-.753L2 11.706l1.153-1.152.157.251a1.347 1.347 0 001.2.716 1.976 1.976 0 001.385-.625 11.546 11.546 0 001.722-2.403l2.252-3.88a7.585 7.585 0 00-.679-.037 2.365 2.365 0 00-1.66.54 1.967 1.967 0 00-.556 1.51V6.7l-.067.106-1.564.762.045-.423a3.845 3.845 0 01.645-1.874 3.312 3.312 0 011.34-1.177 6.74 6.74 0 012.208-.443c.127 0 .277-.013.471-.029l.369-.03 1.387-.257.087 2.154.33 3.886a4.862 4.862 0 00.29 1.701.498.498 0 00.528.31c.057 0 .277 0 .641-.03L14 11.33l-.172.83-3.003.506zm-.086-.896l-.275-3.22-1.855 3.22z"/></svg>'},fH={name:"file_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M4 3v10h8V7H8V3zm5 0v3h3z"/></svg>'},pH={name:"file_drawer_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M2 4v10h12V4zm8 4H6V6h4zm4-5H2V2h12z"/></svg>'},mH={name:"file_search_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M14 6v6h-3.333a3.662 3.662 0 00.249-1.302A3.701 3.701 0 007.22 7 3.654 3.654 0 006 7.223V2h4v4zm-3-4v3h3zm-1.126 8.698a2.697 2.697 0 01-4.73 1.772L2.521 14l-.48-.823 2.613-1.523a2.698 2.698 0 115.22-.956zm-.952 0a1.745 1.745 0 10-1.745 1.745 1.747 1.747 0 001.745-1.745z"/></svg>'},gH={name:"filter_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M2 3.045v1.29h.787a2.069 2.069 0 102.907 2.903l1.32 2.173v4.522l1.973-1.846V9.411l3.878-5.076h1.134v-1.29zm2.033 4.059a1.154 1.154 0 010-2.308c.023 0 .045.006.068.007l1.002 1.575a1.154 1.154 0 01-1.07.726z"/></svg>'},bH={name:"floppy_disk_checkmark_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M12.455 5h-1.041l-1.005 1H12v3H4V6h3.782L6.79 5H3.583A.585.585 0 003 5.598V12.5l1.5 1.497 7.858.003a.602.602 0 00.6-.6L13 5.545A.513.513 0 0012.455 5zM11 13H8v-2H6v2H5v-3h6zm2-10.99L9.091 5.9 7 3.79l.919-.89 1.164 1.208L12.128 1.1l.872.91"/></svg>'},vH={name:"floppy_disk_star_arrow_right_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M5.5 2.5a1 1 0 10-1 1 1 1 0 001-1zm7.5.002L9.638.819l.496 1.293H7v.828h3.134L9.638 4.18zM12.455 5H3.583A.585.585 0 003 5.598V12.5l1.5 1.497 7.858.003a.602.602 0 00.6-.6L13 5.545A.513.513 0 0012.455 5zM11 13H8v-2H6v2H5v-3h6zm1-4H4V6h8z"/></svg>'},yH={name:"floppy_disk_three_dots_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M6 3a1 1 0 10-1 1 1 1 0 001-1zm3 0a1 1 0 10-1 1 1 1 0 001-1zm3 0a1 1 0 10-1 1 1 1 0 001-1zm.455 2H3.583A.585.585 0 003 5.598V12.5l1.5 1.497 7.858.003a.602.602 0 00.6-.6L13 5.545A.513.513 0 0012.455 5zM11 13H8v-2H6v2H5v-3h6zm1-4H4V6h8z"/></svg>'},DH={name:"folder_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M7 4V3H2v10h12V4zm6 2H3V5h10z"/></svg>'},IH={name:"folder_open_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M7 3v1.002h6V6h-1V5H3v1H2V3zM2 13h11l1-6H2z"/></svg>'},SM={name:"forward_slash_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M6.027 14l2.5-12h1.5l-2.5 12h-1.5z"/></svg>'},CH={name:"four_dots_square_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M6.5 11A1.5 1.5 0 115 9.5 1.5 1.5 0 016.5 11zM5 3.5A1.5 1.5 0 106.5 5 1.5 1.5 0 005 3.5zm7.5 7.5A1.5 1.5 0 1111 9.5a1.5 1.5 0 011.5 1.5zM11 3.5A1.5 1.5 0 1012.5 5 1.5 1.5 0 0011 3.5z"/></svg>'},wH={name:"function_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M14 12.643h-1.572l-.898-1.283-.923 1.283h-1.54l1.658-2.146-1.632-2.14h1.572l.883 1.258.888-1.258h1.545l-1.635 2.111zM9.544 4.667H9.31a3.141 3.141 0 00-.394-.1 2.455 2.455 0 00-.483-.05 1.32 1.32 0 00-.832.241 1.334 1.334 0 00-.405.895l-.128.937h1.846v1.282H6.812l-.376 2.462a3.578 3.578 0 01-.462 1.357 2.583 2.583 0 01-.784.808 3.015 3.015 0 01-.938.387A4.823 4.823 0 013.184 13q-.275 0-.629-.03A3.529 3.529 0 012 12.892v-1.815h.12a.56.56 0 00.424.244 2.538 2.538 0 00.5.052 1.304 1.304 0 00.898-.29 1.584 1.584 0 00.424-.985l.33-2.226H3.256V6.59H5.05l.178-1.162a2.942 2.942 0 01.444-1.244 2.516 2.516 0 01.76-.734 2.643 2.643 0 01.94-.356A5.61 5.61 0 018.357 3q.294 0 .588.025t.599.076z"/></svg>'},_H={name:"gauge_simple_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M10.969 5.196a1.763 1.763 0 011.142-.49 1.763 1.763 0 01-.49 1.142L9.205 8.263l.008.025.065.184.03.093a1.352 1.352 0 01.032.295 1.385 1.385 0 01-2.769 0 1.343 1.343 0 01.033-.294l.034-.11.055-.16.012-.033.014-.014a1.389 1.389 0 01.625-.625l.015-.015.033-.011.16-.055.11-.035a1.32 1.32 0 01.588 0l.11.035.16.055.033.011zM14 8.86a5.979 5.979 0 01-1.799 4.28l-1.309-1.308a4.085 4.085 0 00.83-4.78l.55-.55a2.576 2.576 0 00.64-1.082A5.968 5.968 0 0114 8.86zm-6-6a5.998 5.998 0 00-4.201 10.28l1.308-1.308a4.14 4.14 0 014.645-6.725l.564-.564a2.57 2.57 0 011.07-.635A5.97 5.97 0 008 2.86z"/></svg>'},NH={name:"grid_three_by_three_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M2 3v10a1 1 0 001 1h10a1 1 0 001-1V3a1 1 0 00-1-1H3a1 1 0 00-1 1zm4 9H4v-2h2zm.001-2.999H4V7h2.001zm0-3.001H4V4h2.001zM9 12H7v-2h2zm0-2.999H7V7h2zM9 6H7V4h2zm3 6h-2v-2h2zm.001-2.999H10V7h2.001zm0-3.001H10V4h2.001z"/></svg>'},MH={name:"grid_two_by_two_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M4 9h3v3H4zm5 0h3v3H9zM4 4h3v3H4zm5 0h3v3H9zM2 14h12V2H2z"/></svg>'},xH={name:"hammer_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M9 14H6V8h3zM8.875 2H6.723A1.991 1.991 0 015 3a2.486 2.486 0 01-2-1H2v4h1a1.797 1.797 0 011.5-1C5.551 5 5.997 6.99 6 7h3c.333-1.539 1-2.436 1.741-2.436C12.222 4.564 14 6.615 14 6.615S13 2 8.875 2z"/></svg>'},FH={name:"hashtag_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M7.76 14l.752-2.914H6.045L5.299 14H3.532l.746-2.914H2v-1.72h2.712l.701-2.807H2.947v-1.72h2.91L6.567 2h1.766l-.71 2.838h2.46L10.8 2h1.768l-.717 2.838H14v1.72h-2.599l-.706 2.807h2.374v1.72h-2.807L9.501 14zM6.447 9.392h2.506l.72-2.85H7.167z"/></svg>'},EH={name:"home_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M7.988 2L2.5 9H4v5h3v-3h2v3h3V9h1.5L7.988 2z"/></svg>'},kH={name:"hourglass_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M10.774 13.4h-.047v-.49h-.404a2.491 2.491 0 00.355-1.258c0-1.826-2.083-2.886-2.083-3.652s2.083-1.826 2.083-3.652a2.491 2.491 0 00-.355-1.257h.404V2.6h.047a.556.556 0 00.499-.6H4.727a.556.556 0 00.499.6h.047v.49h.404a2.491 2.491 0 00-.355 1.258c0 1.826 2.083 2.87 2.083 3.652s-2.083 1.826-2.083 3.652a2.491 2.491 0 00.355 1.257h-.404v.491h-.047a.556.556 0 00-.499.6h6.546a.556.556 0 00-.499-.6zM8 12.957c-1.565 0-1.975-.585-1.975-1.305a7.183 7.183 0 011.723-.656c.268 0 .289-3.513 0-3.779l-.988-1h2.454l-.962 1c-.268.286-.275 3.779 0 3.779a7.651 7.651 0 011.738.656c0 .72-.409 1.305-1.99 1.305z"/></svg>'},SH={name:"indeterminant_checkbox_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M12 3a1.001 1.001 0 011 1v8a1.001 1.001 0 01-1 1H4a1.001 1.001 0 01-1-1V4a1.001 1.001 0 011-1h8m0-1H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zM4 4v8h8V4zm6 6H6V6h4z"/></svg>'},TH={name:"info_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M7.415 7.75v3.69H6.376v1.576h4.24V11.44H9.6V6.175H6.376V7.75zm.276-2.698a1.19 1.19 0 002.035-.838 1.164 1.164 0 00-.346-.846 1.193 1.193 0 00-1.693 0 1.158 1.158 0 00-.35.846 1.144 1.144 0 00.354.838z"/></svg>'},AH={name:"info_circle_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M8 2a6 6 0 106 6 6 6 0 00-6-6zm-.697 2.28a.951.951 0 011.35 0 .928.928 0 01.276.675.952.952 0 01-1.905 0 .924.924 0 01.279-.674zM9.7 12H6.3v-1.264h.833V7.777H6.3V6.513h2.584v4.223H9.7z"/></svg>'},RH={name:"key_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M12.045 7.348l-.652-.652 1.444-.14zm-3.818.698l-4.912 4.912-.395-.396 4.12-4.12zm4.734-2.918l-1.697.136-.395-.395L11 3.176l.72-.067 1.304 1.304zm-3.524-.386l-.651-.653.791-.791zm-1.955-.653v2.607l-5.074 5.075L2 12.946l.791.791 1.432.129.326-.326v-.652l.652-.652h.652l.326-.325v-.652h.651l.978-.978.014-.652.312-.326h.652l.652-.651h2.607l1.676-1.676L14 4.089l-1.955-1.955-2.887.28z"/></svg>'},PH={name:"laptop_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M13 11V3H3v8H2v2h12v-2zm-2 1H5v-1h6zm1-1.996H4V4h8z"/></svg>'},BH={name:"layer_group_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M3.555 9.546l.89-.445 5.333 2.667 1.778-.89.889.449v1.33L9.778 13.99l-6.223-3.11zm0-6.222L6.222 1.99l6.223 3.112v1.333L9.778 7.768l-6.223-3.11zm0 3.11l.89-.444 5.333 2.667 1.778-.89.889.448v1.33L9.778 10.88 3.555 7.768z"/></svg>'},OH={name:"lightning_bolt_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M4.732 7.953L6.909 2h3.636L8.364 7.013h2.909L4.727 14l2.21-6.049z"/></svg>'},LH={name:"link_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M7.465 5.592A2.908 2.908 0 019.963 7.02l-1.06 1.065c-.053-.103-.095-.192-.144-.276a1.48 1.48 0 00-1.277-.769 1.43 1.43 0 00-.977.394c-.75.694-1.469 1.421-2.165 2.168a1.431 1.431 0 00.054 2.038 1.507 1.507 0 001.039.432 1.28 1.28 0 00.953-.417c.103-.11.435-.44.81-.805a3.458 3.458 0 001.908.188c-1.006 1.035-2.179 2.187-2.996 2.38a2.982 2.982 0 01-.693.082 2.91 2.91 0 01-2.182-4.842A46.793 46.793 0 015.53 6.356a2.826 2.826 0 011.935-.764M10.583 2.5a3.001 3.001 0 00-.69.081 10.376 10.376 0 00-2.996 2.377 3.474 3.474 0 01.568-.054 3.58 3.58 0 011.31.249c.38-.332.701-.646.875-.834a1.221 1.221 0 01.913-.395 1.513 1.513 0 011.074.469 1.433 1.433 0 01.022 2.005c-.7.743-1.42 1.47-2.165 2.167a1.419 1.419 0 01-.975.395 1.483 1.483 0 01-1.28-.768c-.048-.085-.089-.175-.151-.298L6.043 8.987a2.882 2.882 0 002.493 1.42 2.808 2.808 0 001.93-.76 54.2 54.2 0 002.266-2.266A2.911 2.911 0 0010.583 2.5"/></svg>'},VH={name:"link_cancel_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M9.202 9.45a2.638 2.638 0 01.687 2.519l-1.364.002c.032-.1.062-.183.085-.269a1.343 1.343 0 00-.326-1.312 1.297 1.297 0 00-.88-.374 37.657 37.657 0 00-2.779.002 1.298 1.298 0 00-1.273 1.341 1.367 1.367 0 00.39.944 1.162 1.162 0 00.878.344c.137-.005.562-.002 1.036.004a3.137 3.137 0 001.104 1.344 8.133 8.133 0 01-3.45-.395 2.705 2.705 0 01-.496-.392A2.64 2.64 0 014.52 8.702a42.45 42.45 0 012.951-.003 2.564 2.564 0 011.731.751m3.984.017a2.723 2.723 0 00-.495-.39 9.414 9.414 0 00-3.447-.398 3.151 3.151 0 01.4.33 3.247 3.247 0 01.68 1c.457.031.864.035 1.096.027a1.108 1.108 0 01.839.331 1.373 1.373 0 01.389.99 1.3 1.3 0 01-1.272 1.3c-.926.028-1.854.033-2.78.002a1.287 1.287 0 01-.878-.372 1.345 1.345 0 01-.328-1.313c.023-.086.054-.17.093-.289l-1.371.031a2.614 2.614 0 00.688 2.51 2.547 2.547 0 001.726.751c.968.033 1.94.025 2.908 0a2.641 2.641 0 001.752-4.51m-2.701-3.208L8.71 4.485l1.775-1.775-.71-.71L8 3.775 6.225 2l-.71.71L7.29 4.485 5.515 6.259l.71.71L8 5.195l1.775 1.774z"/></svg>'},$H={name:"list_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M4 13H2v-2h2zm10-2H6v2h8zM4 7H2v2h2zm10 0H6v2h8zM4 3H2v2h2zm10 0H6v2h8z"/></svg>'},HH={name:"list_tree_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M10 5v2h4v2h-4v2h4v2H8V5H5V3h9v2zM2 5h2V3H2zm5 6H5v2h2zm0-4H5v2h2z"/></svg>'},jH={name:"list_tree_database_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M13.953 11.81c.013-.011.032-.02.046-.031v.917c0 .33-.523.678-1.42.953a8.234 8.234 0 01-.694.178 16.116 16.116 0 01-3.382.328 16.089 16.089 0 01-3.38-.328 8.77 8.77 0 01-.693-.179c-.898-.274-1.42-.622-1.42-.952v-.917c.012.01.031.02.045.03a2.34 2.34 0 00.332.218l.03.017a4.235 4.235 0 00.46.202l.01.005.1.037c.053.018.11.034.164.05.093.031.186.062.283.09.033.01.064.022.1.031l.058.015c.184.048.378.092.58.132.043.009.084.018.13.026.214.042.438.078.666.11l.134.017c.21.028.425.051.646.072l.104.01c.242.021.487.037.731.049l.166.007c.251.01.504.016.754.016s.501-.007.754-.016l.164-.007c.246-.012.491-.028.734-.048l.102-.011c.22-.02.436-.044.649-.072.044-.006.09-.01.134-.017q.343-.048.664-.11c.046-.008.088-.017.132-.026q.3-.06.577-.13c.02-.007.043-.012.063-.017.034-.009.064-.021.099-.031.098-.028.189-.059.283-.09.052-.017.11-.032.16-.05.035-.012.07-.024.103-.037l.012-.005a4.252 4.252 0 00.457-.202c.013-.006.022-.013.032-.018a2.468 2.468 0 00.33-.216zm-5.45-2.946c-3.237 0-5.492.767-5.492 1.457 0 .33.523.679 1.42.952a9.998 9.998 0 00.694.179 16.101 16.101 0 003.378.327 16.12 16.12 0 003.382-.327 8.892 8.892 0 00.694-.18C13.477 11 14 10.652 14 10.322c0-.69-2.257-1.457-5.497-1.457zM14 6V5H5V3h2V2H2v1h2v5.581a9.632 9.632 0 011-.255V6h3v2h6V7H9V6z"/></svg>'},zH={name:"lock_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M12 8V7a3.888 3.888 0 00-4-4 3.822 3.822 0 00-2.81 1.078A4.349 4.349 0 004.062 7v1H3v6h10V8zM6.062 6.986a2.407 2.407 0 01.566-1.516A1.834 1.834 0 018 5a1.883 1.883 0 012 2v1H6.062z"/></svg>'},UH={name:"magnifying_glass_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M13.073 12.29l-2.926-2.926a3.971 3.971 0 10-.783.783l2.927 2.926zM7.01 9.84a2.83 2.83 0 112.83-2.83 2.833 2.833 0 01-2.83 2.83z"/></svg>'},WH={name:"markdown_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M14.25 3H1.75a.74.74 0 00-.75.73v8.54a.74.74 0 00.75.73h12.5a.74.74 0 00.75-.73V3.73a.74.74 0 00-.75-.73zm-6.285 7.059h-.991V7.773L5.982 9.35l-.99-1.577v2.286H4V5.934h.91L5.982 7.51l1.073-1.576h.91zm2.459.007L8.848 7.945h1.1V5.934h.99v2.01H12z"/></svg>'},TM={name:"minus_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M4 7h8v2H4z"/></svg>'},GH={name:"minus_wide_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M3 7h10v2H3z"/></svg>'},qH={name:"mobile_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M10.462 2.077H4.538A.54.54 0 004 2.615v10.77a.54.54 0 00.538.538h5.924a.54.54 0 00.538-.538V2.615a.54.54 0 00-.538-.538zM10 12H5V3h5z"/></svg>'},KH={name:"notebook_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M13 2h1v3h-1zm0 8h1V6h-1zm0 4h1v-3h-1zM4 7h6V6H4zm0-2h6V4H4zM2 2h10v12H2z"/></svg>'},XH={name:"paste_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M9 5V3H3v6h2v1H2V2h8v3zM6 6v8h8V6z"/></svg>'},QH={name:"pencil_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M11.413 2.674c.326-.288 1.04-.013 1.807.857.768.869.952 1.61.626 1.898l-1.378 1.218-2.433-2.757zm-7.381 9.493l2.97-1.396-1.477.254.064-1.459-.48.25.156-1.013-1.754 2.774zm3.319-1.002L2 13.435 4.917 8.41l3.15-2.78L10.5 8.383zm4.293-3.866L9.21 4.544c-.177-.202.222-.543.394-.349l2.434 2.756c.175.2-.224.54-.394.348m-.783.7L8.428 5.244c-.178-.201.22-.542.393-.347l2.433 2.755c.176.199-.223.54-.393.347"/></svg>'},ZH={name:"pot_with_lid_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M11 4V2H5v2H2v1h12V4zM6 4V3h4v1zm-4 9h1v1h10v-1h1V6H2z"/></svg>'},YH={name:"question_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M11.303 5.594a3.294 3.294 0 01-.195 1.176 2.63 2.63 0 01-.549.885 3.96 3.96 0 01-.852.672 7.46 7.46 0 01-1.121.54v1.501H6.27V8.15q.467-.125.845-.256a3.199 3.199 0 00.793-.429 2.098 2.098 0 00.608-.612 1.45 1.45 0 00.22-.791 1.042 1.042 0 00-.423-.939 2.163 2.163 0 00-1.195-.28 3.338 3.338 0 00-1.068.204 4.853 4.853 0 00-1.09.526h-.263V3.566a8.148 8.148 0 011.296-.372A8.205 8.205 0 017.77 3a4.196 4.196 0 012.579.718 2.241 2.241 0 01.954 1.876zM8.77 13H6.112v-1.737H8.77z"/></svg>'},JH={name:"running_arrow_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M14 7.985l-8.002 4.013L8 8 5.998 3.987zM3.995 2.997L2 2l3 6-3 6 2.002-1.005L6.5 8z"/></svg>'},ej={name:"server_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M13 3H3v3h10zM9 5H4V4h5zM3 7v3h10V7zm6 2H4V8h5zm3 4H3v-2h10v1a1 1 0 01-1 1z"/></svg>'},tj={name:"share_nodes_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M12 10c-.601 0-1.134.27-1.5.69L5.954 8.419a2 2 0 000-.836l4.544-2.273c.367.42.9.691 1.501.691a2 2 0 10-1.955-1.582L5.501 6.691C5.134 6.27 4.6 6 4 6a2 2 0 100 4c.601 0 1.134-.27 1.5-.69l4.545 2.272A2 2 0 1012 10z"/></svg>'},nj={name:"share_square_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M13.984 2.012l-2.069 6.153-.565-2.722-3.544 3.544-.822-.822 3.544-3.544-2.723-.566zM2 4v10h10v-4h-2v2H4V6h2V4z"/></svg>'},ij={name:"shield_check_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M2 2v5.11C2 10.39 8 14 8 14s6-3.281 6-6.89V2zm4.788 8.2L4 7.388 5.225 6.2l1.553 1.61 4.06-4.01L12 5.013z"/></svg>'},oj={name:"shield_xmark_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M2 2v5.11C2 10.39 8 14 8 14s6-3.281 6-6.89V2zm9.5 7.346L10.346 10.5 8 8.154 5.654 10.5 4.5 9.346 6.846 7 4.5 4.654 5.654 3.5 8 5.846 10.346 3.5 11.5 4.654 9.154 7z"/></svg>'},rj={name:"signal_bars_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M4 14H2V2h2zm3-9H5v9h2zm3 3H8v6h2zm3 3h-2v3h2z"/></svg>'},sj={name:"sine_graph_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M14 12H2v-1.63a4.61 4.61 0 001.766-1.967c.636-1.06 1.082-1.705 1.902-1.705s1.266.644 1.902 1.705c.615 1.026 1.312 2.189 2.766 2.189 1.453 0 2.15-1.163 2.764-2.189a6.459 6.459 0 01.9-1.267zm0-6.054a4.613 4.613 0 00-1.764 1.967c-.635 1.061-1.08 1.705-1.9 1.705-.82 0-1.266-.644-1.902-1.705-.615-1.026-1.312-2.189-2.766-2.189S3.517 6.887 2.902 7.913A6.468 6.468 0 012 9.18V4h12z"/></svg>'},lj={name:"skip_arrow_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M10.002 8.29L2 12.304v-8.01zM14 2h-2v12h2z"/></svg>'},aj={name:"spinner",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M3.967 7.143h-.762a4.885 4.885 0 013.938-3.94v.771a4.123 4.123 0 00-3.176 3.169zM8 2v1.875A4.125 4.125 0 113.875 8H2a6 6 0 106-6z"/></svg>'},cj={name:"square_check_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M2 2v12h12V2zm4.788 9.2L4 8.387 5.225 7.2l1.553 1.61 4.06-4.01L12 6.013z"/></svg>'},uj={name:"square_t_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M2 2v12h12V2zm9.033 4.199l-.016-.076a2.34 2.34 0 00-.497-1.18 2.108 2.108 0 00-1.281-.26h-.56v5.941c0 .552.11.718.176.768a1.793 1.793 0 00.88.196l.09.006V12H6.193v-.405l.09-.007c.59-.046.8-.144.87-.218.06-.06.158-.255.158-.884V4.683h-.565a2.19 2.19 0 00-1.274.262 2.015 2.015 0 00-.498 1.174l-.015.08H4.49L4.565 4h6.859l.07 2.199z"/></svg>'},dj={name:"t_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M5.684 13v-.729l.221-.018c.764-.058.947-.19.985-.229.026-.026.157-.202.157-.992V4.078H6.48a2.46 2.46 0 00-1.477.291 2.262 2.262 0 00-.563 1.36l-.038.196h-.797L3.704 3h8.6l.092 2.925h-.784l-.021-.095a2.817 2.817 0 00-.589-1.466c-.147-.131-.523-.286-1.48-.286H8.96V11.2c0 .679.138.819.165.84a2.092 2.092 0 001.01.213l.223.018V13z"/></svg>'},hj={name:"tablet_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M12.5 2h-9a.501.501 0 00-.5.5v11a.501.501 0 00.5.5h9a.501.501 0 00.5-.5v-11a.501.501 0 00-.5-.5zM8 13.25a.75.75 0 11.75-.75.752.752 0 01-.75.75zM12 11H4V3h8z"/></svg>'},fj={name:"tag_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16"><path class="cls-1" d="M8.044 3.588L5.23 3 3 5.229l.588 2.816L8.543 13 13 8.543zM6.5 6.499a1.082 1.082 0 11-.013-1.516A1.072 1.072 0 016.499 6.5z"/></svg>'},pj={name:"tags_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16"><path class="cls-1" d="M8.044 2.338L5.23 1.75 3 3.979l.588 2.816 4.955 4.955L13 7.293zM6.5 5.249a1.082 1.082 0 11-.013-1.516 1.072 1.072 0 01.013 1.516zm6.251 4.794L8.543 14.25 4.257 9.964l-.283-1.369 4.569 4.57L12.207 9.5z"/></svg>'},mj={name:"target_crosshairs_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M8 6.01a2 2 0 102 2 2 2 0 00-2-2zm4.9.99A5.005 5.005 0 009 3.1V1H7v2.1A5.005 5.005 0 003.1 7H1v2h2.1A5.005 5.005 0 007 12.9V15h2v-2.1A5.005 5.005 0 0012.9 9H15V7zM8 12a4 4 0 114-4 4.005 4.005 0 01-4 4z"/></svg>'},gj={name:"target_crosshairs_progress_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M15 7v2h-2.1A5.005 5.005 0 019 12.9V15H7v-2.108a4.99 4.99 0 01-3.898-3.985l-1.52.583 2.003-4 1.998 4L4.11 8.9A3.999 3.999 0 107 4.13V1h2v2.1A5.005 5.005 0 0112.9 7zm-5 1.01a2 2 0 11-2-2 2 2 0 012 2z"/></svg>'},bj={name:"three_dots_line_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M8 6.5A1.5 1.5 0 116.5 8 1.5 1.5 0 018 6.5zM.5 8A1.5 1.5 0 102 6.5 1.5 1.5 0 00.5 8zm12 0A1.5 1.5 0 1014 6.5 1.5 1.5 0 0012.5 8z"/></svg>'},vj={name:"three_vertical_lines_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M11 3h2v10h-2zM7 3h2v10H7zM3 3h2v10H3z"/></svg>'},yj={name:"thumbtack_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M10 7l-.625-5H10V1H5v1h.625L5 7a2 2 0 00-2 2h4v4l.5 2 .5-2V9h4a2 2 0 00-2-2z"/></svg>'},Dj={name:"tile_size_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M2 8h6v6H2zm0-6v5h2V4h8v8H9v2h5V2z"/></svg>'},Ij={name:"times_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M8 9.103L5.102 12 4 10.897 6.898 8 4 5.103 5.102 4 8 6.897 10.898 4 12 5.103 9.102 8 12 10.897 10.898 12 8 9.103z"/></svg>'},Cj={name:"trash_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M10 4V2H6v2H3v2h1v8h8V6h1V4zm-3 9H6V6h1zm2-9H7V3h2zm1 9H9V6h1z"/></svg>'},wj={name:"triangle_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M8 2L2 14h12zm0 4.875l2.438 4.875H5.585z"/></svg>'},_j={name:"true_false_rectangle_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M13.4 3.003H2.6a1.6 1.6 0 00-1.6 1.6v6.8a1.595 1.595 0 001.6 1.594h10.8a1.595 1.595 0 001.6-1.594v-6.8a1.6 1.6 0 00-1.6-1.6zM7.587 6.58H6.141v3.736H4.946V6.58H3.5v-.896h4.087zm4.913 0h-2.13v.862h1.974v.896H10.37v1.978H9.181V5.684H12.5z"/></svg>'},Nj={name:"unlink_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M6.126 8.585c-.581.123-1.117.241-1.362.303a1.547 1.547 0 00-1.182 1.51l.01.155.021.193a1.69 1.69 0 00.216.54l.02.038.105.134.127.144.054.047a1.509 1.509 0 00.992.36h.049a1.306 1.306 0 00.224-.034l.03.015.006-.001c.463-.088.925-.186 1.387-.287l.343 1.538c-.488.11-.976.221-1.467.314a3.112 3.112 0 01-.571.053 3.148 3.148 0 01-2.99-2.258l-.011-.045a3.04 3.04 0 01-.076-.35 3.127 3.127 0 01-.03-.206l-.004-.089a3.112 3.112 0 01-.016-.336A3.164 3.164 0 014.35 7.356c.272-.068.808-.203.802-.206l.623-.137zm4.31-1.544l-.353 1.575c.737.176 1.38.334 1.413.346a1.514 1.514 0 01.789.768l.029.066.053.185.038.164.002.045a1.667 1.667 0 01-.035.58l-.064.185-.056.142a1.546 1.546 0 01-1.4.893 1.661 1.661 0 01-.313-.03 54.946 54.946 0 01-1.15-.24l-.347 1.55.406.097-.013-.017c.276.057.55.118.826.173a3.02 3.02 0 00.578.056 3.188 3.188 0 002.811-1.74 3.018 3.018 0 00.129-.311l.033-.083.061-.197a3.047 3.047 0 00.082-.351l.008-.044a3.132 3.132 0 00-2.281-3.513c-.297-.077-.777-.19-1.245-.299M7.932 2.393L6.875 6.075h.75l.3 3.032 1.2-3.782h-.75z"/></svg>'},Mj={name:"unlock_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M6.062 8V5.986a2.407 2.407 0 01.566-1.516A1.834 1.834 0 018 4a1.883 1.883 0 012 2h2a3.888 3.888 0 00-4-4 3.822 3.822 0 00-2.81 1.078A4.349 4.349 0 004.062 6v2H3v6h10V8z"/></svg>'},xj={name:"upload_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M14 9v5H2V9h1v4h10V9zM7.982 2L5 7.9l2.004-1.312L7 11h2V6.613L11 7.9z"/></svg>'},Fj={name:"user_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M8.004 2a2.18 2.18 0 012.184 2.182v1.09c.647 0 .378.932 0 1.455a4.275 4.275 0 01-.335.364 8.55 8.55 0 01-.31.742l.208 1.076h.437l2.75 1.527A2.148 2.148 0 0114 12.291V14H2v-1.673a2.163 2.163 0 011.063-1.869l2.758-1.55h.437l.21-1.068a8.52 8.52 0 01-.312-.749 4.275 4.275 0 01-.335-.364c-.378-.523-.647-1.454 0-1.454v-1.09A2.18 2.18 0 018.004 2"/></svg>'},Ej={name:"watch_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M12.57 7.28l-.06.013a4.556 4.556 0 00-1.38-2.609V3.44a.481.481 0 00-.48-.48h-.48V2H5.85v.96h-.48a.481.481 0 00-.48.48v1.24a4.545 4.545 0 000 6.64v1.24a.481.481 0 00.48.48h.48V14h4.32v-.96h.48a.481.481 0 00.48-.48v-1.24a4.547 4.547 0 001.379-2.612l.061.012a.481.481 0 00.48-.48v-.48a.481.481 0 00-.48-.48zm-2.3 2.662a1.59 1.59 0 00-.182-.26L8.747 8.338a.785.785 0 000-.666c.132-.133.894-.899.965-1a1.216 1.216 0 00.14-.485 1.004 1.004 0 00-.515.157l-.955.957a.784.784 0 100 1.408c.163.167.956.974 1.236 1.254a1.477 1.477 0 00.36.276 3.055 3.055 0 11.291-.297z"/></svg>'},kj={name:"waveform_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M9.77 11.225c-1.582 0-2.076-1.262-2.512-2.376l-.17-.426a26.242 26.242 0 01-.218-.595c-.32-.9-.41-1.046-.652-1.046-.24 0-.308.065-.612.88-.088.237-.188.504-.317.801l-.098.238c-.486 1.178-1.037 2.513-2.747 2.513H2V9.221h.444c.318 0 .48-.316.9-1.292l.133-.307c.06-.148.121-.304.181-.457.435-1.116.927-2.382 2.56-2.382 1.59 0 2.063 1.274 2.48 2.398l.168.443c.082.205.155.396.221.572.345.905.427 1.03.684 1.03.259 0 .409-.317.742-1.157.08-.201.167-.42.266-.652l.097-.228c.477-1.127 1.016-2.405 2.668-2.412l.444-.002L14 6.782h-.447c-.367 0-.506.245-.994 1.387 0 0-.179.434-.238.584-.433 1.101-.973 2.472-2.55 2.472z"/></svg>'},Sj={name:"webvi_custom_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M8 2a6 6 0 106 6 6 6 0 00-6-6zm4.089 2.526h-1.868a5.598 5.598 0 00-.854-1.712 5.363 5.363 0 012.722 1.712zm-2.722 8.66a5.599 5.599 0 00.854-1.712h1.868a5.363 5.363 0 01-2.722 1.712zm3.181-2.344h-2.146a10.644 10.644 0 00.208-1.187L9.923 10c-.05.294-.106.58-.176.843h-1.51l-1.263.632h2.583C9.145 12.647 8.554 13.368 8 13.368c-.517 0-1.065-.633-1.47-1.672l-.56.28a5.018 5.018 0 00.663 1.21 5.363 5.363 0 01-2.722-1.712h.317a.955.955 0 01-.017-.17v-.462h-.76a5.33 5.33 0 01-.804-2.526h1.564v-.632H2.646a5.33 5.33 0 01.805-2.526h.759V4.69a.95.95 0 01.016-.164h-.316a5.363 5.363 0 012.722-1.712 5.017 5.017 0 00-.663 1.207l.56.28c.406-1.037.953-1.67 1.47-1.67.554 0 1.145.722 1.557 1.895H6.98l1.261.632h1.507c.07.263.126.548.176.842l.687.344a10.66 10.66 0 00-.208-1.186h2.146a5.33 5.33 0 01.804 2.526h-.67a.92.92 0 01-.001.632h.671a5.33 5.33 0 01-.804 2.526zM12.105 8a.326.326 0 01-.19.296l-6.598 3.3-.148.036a.327.327 0 01-.327-.328V4.69a.327.327 0 01.492-.281l6.595 3.302a.326.326 0 01.176.29z"/></svg>'},Tj={name:"webvi_host_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M8 2a6 6 0 106 6 6 6 0 00-6-6zm4.09 2.526H10.22a5.6 5.6 0 00-.854-1.712 5.364 5.364 0 012.722 1.712zm-2.723 8.66a5.6 5.6 0 00.854-1.712h1.868a5.363 5.363 0 01-2.722 1.712zm3.181-2.344h-2.146a10.657 10.657 0 00.208-1.187L9.923 10a9.85 9.85 0 01-.176.843h-1.51l-1.263.632h2.583C9.145 12.647 8.554 13.368 8 13.368c-.517 0-1.064-.633-1.47-1.672l-.56.28a5.02 5.02 0 00.663 1.21 5.363 5.363 0 01-2.722-1.712h.317a.96.96 0 01-.017-.17v-.462h-.76a5.33 5.33 0 01-.804-2.526H4.21v-.632H2.647a5.33 5.33 0 01.805-2.526h.759V4.69a.95.95 0 01.016-.164h-.316a5.364 5.364 0 012.722-1.712 5.02 5.02 0 00-.663 1.207l.56.28c.406-1.037.953-1.67 1.47-1.67.554 0 1.145.722 1.557 1.895H6.98l1.262.632h1.506c.07.263.126.548.176.842l.687.344a10.646 10.646 0 00-.208-1.186h2.146a5.33 5.33 0 01.804 2.526h-.67a.92.92 0 01-.001.632h.671a5.33 5.33 0 01-.804 2.526zm-.619-3.131L5.334 4.409a.327.327 0 00-.492.281v6.613a.327.327 0 00.327.328l.148-.035 6.598-3.3a.326.326 0 00.014-.585zm-6.087 2.505V5.78L10.274 8z"/></svg>'},Aj={name:"window_code_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M2 2v12h12V2zm11 11H3V5h10zM4 9.135l2.698-1.118v.75l-1.588.65 1.588.646v.75l-2.694-1.12zm4.42-1.49h.792l-1.565 3.71h-.783zM12 9.135v.557l-2.694 1.12v-.75l.062-.024 1.526-.626-1.588-.648v-.747z"/></svg>'},Rj={name:"window_text_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M2 2v12h12V2zm11 11H3V5h10zM7 8H4V6h3zm5 2H4V9h8zm0 2H4v-1h8z"/></svg>'},Pj={name:"wrench_hammer_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M12.286 11.714l-5.791-5.79a2.504 2.504 0 00.17-.755 2.149 2.149 0 00-.095-.814 2.12 2.12 0 00-.55-.904 2.328 2.328 0 00-1.76-.685h-.045a2.104 2.104 0 00-.718.155l1.102 1.104.32.32.244.245a1.864 1.864 0 01-.22.854 1.043 1.043 0 01-.114.145 1.648 1.648 0 01-1.003.335L2.61 4.704l-.449-.449a2.074 2.074 0 00-.135.545l-.015.105a2.337 2.337 0 00.384 1.518 2.51 2.51 0 00.295.36 2.205 2.205 0 001.576.65 2.453 2.453 0 00.898-.175l4.793 4.796 1.203 1.2h.668l.663-.665v-.67zM5.75 8.908l1.367 1.367-2.988 2.987h-.923l-.45-.45v-.916zM14 5.906l-1.81 1.809-1.298-1.216-1.38 1.38-1.367-1.365 1.374-1.382-1.622-1.62.683-.774 2.252.45z"/></svg>'},Bj={name:"xmark_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M13 4.667L9.667 7.999 13 11.333 11.333 13 8 9.667 4.667 13 3 11.333 6.333 8 3 4.667 4.667 3 8 6.333 11.333 3z"/></svg>'},Oj={name:"xmark_check_16_x_16",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M8.033 14.026L4.9 10.866 6.277 9.53l1.744 1.81 4.562-4.507 1.307 1.363zm1.155-10.68l-1.321-1.32-2.312 2.311-2.311-2.311-1.321 1.32 2.311 2.312L1.923 7.97l1.32 1.32 2.312-2.31 2.312 2.31 1.32-1.32-2.31-2.312z"/></svg>'};function Os(...t){return t.every(n=>n instanceof HTMLElement)}let Mo;const $e=":"+(function(){if("boolean"==typeof Mo)return Mo;if("undefined"==typeof window||!window.document||!window.document.createElement)return Mo=!1,Mo;const t=document.createElement("style"),n=function(){const t=document.querySelector('meta[property="csp-nonce"]');return t?t.getAttribute("content"):null}();null!==n&&t.setAttribute("nonce",n),document.head.appendChild(t);try{t.sheet.insertRule("foo:focus-visible {color:inherit}",0),Mo=!0}catch(e){Mo=!1}finally{document.head.removeChild(t)}return Mo}()?"focus-visible":"focus"),jj=S`
    ${Ge("inline-flex")}

    :host {
        height: ${Be};
        box-sizing: border-box;
        font: ${kn};
        color: ${Rt};
        padding-left: calc(4px - ${P});
    }

    .listitem {
        display: flex;
        align-items: center;
    }

    .control {
        color: var(--ni-private-breadcrumb-link-font-color);
        cursor: default;
        display: flex;
        align-items: center;
        justify-content: center;
        border: ${P} solid transparent;
        padding-right: calc(4px - ${P});
    }

    .control:any-link {
        cursor: pointer;
        text-decoration: none;
    }

    .control:hover {
        text-decoration: underline;
    }

    .control:active {
        color: var(--ni-private-breadcrumb-link-active-font-color);
        text-decoration: underline;
    }

    .control:any-link${$e} {
        border: ${P} solid ${z};
        outline: 2px solid ${z};
        outline-offset: 1px;
    }

    .start,
    .end {
        display: flex;
        align-items: center;
    }

    .start {
        margin-inline-end: 4px;
    }

    slot[name='separator'] {
        display: flex;
        align-items: center;
    }

    slot[name='separator'] svg {
        width: ${he};
        height: ${he};
    }

    slot[name='separator'] path {
        fill: ${O$};
    }
`,Uj=class extends Ra{}.compose({baseName:"breadcrumb-item",baseClass:Ra,template:(t,n)=>L`
    <div role="listitem" class="listitem" part="listitem">
        ${sn(e=>e.href&&e.href.length>0,L`
                ${((t,n)=>L`
    <a
        class="control"
        part="control"
        download="${e=>e.download}"
        href="${e=>e.href}"
        hreflang="${e=>e.hreflang}"
        ping="${e=>e.ping}"
        referrerpolicy="${e=>e.referrerpolicy}"
        rel="${e=>e.rel}"
        target="${e=>e.target}"
        type="${e=>e.type}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${Le("control")}
    >
        ${Fn(0,n)}
        <span class="content" part="content">
            <slot ${at("defaultSlottedContent")}></slot>
        </span>
        ${xn(0,n)}
    </a>
`)(0,n)}
            `)}
        ${sn(e=>!e.href,L`
                ${Fn(0,n)}
                <slot></slot>
                ${xn(0,n)}
            `)}
        ${sn(e=>e.separator,L`
                <span class="separator" part="separator" aria-hidden="true">
                    <slot name="separator">${n.separator||""}</slot>
                </span>
            `)}
    </div>
`,styles:jj,separator:SM.data});B.getOrCreate().withPrefix("nimble").register(Uj());const Wn="ArrowDown",Vs="ArrowLeft",$s="ArrowRight",Gn="ArrowUp",Qi="Enter",Ga="Escape",Hs="Home",js="End",Fo=" ",zs={ArrowDown:Wn,ArrowLeft:Vs,ArrowRight:$s,ArrowUp:Gn},AM="form-associated-proxy",RM="ElementInternals",PM=RM in window&&"setFormValue"in window[RM].prototype,BM=new WeakMap;function mr(t){const n=class extends t{constructor(...e){super(...e),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return PM}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const e=this.proxy.labels,i=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),o=e?i.concat(Array.from(e)):i;return Object.freeze(o)}return Ma}valueChanged(e,i){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(e,i){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(e,i){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),ve.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(e,i){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(e,i){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),ve.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!PM)return null;let e=BM.get(this);return e||(e=this.attachInternals(),BM.set(this,e)),e}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach(e=>this.proxy.removeEventListener(e,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(e,i,o){this.elementInternals?this.elementInternals.setValidity(e,i,o):"string"==typeof i&&this.proxy.setCustomValidity(i)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var e;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(i=>this.proxy.addEventListener(i,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",AM),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",AM)),null===(e=this.shadowRoot)||void 0===e||e.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var e;this.removeChild(this.proxy),null===(e=this.shadowRoot)||void 0===e||e.removeChild(this.proxySlot)}validate(){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage)}setFormValue(e,i){this.elementInternals&&this.elementInternals.setFormValue(e,i||e)}_keypressHandler(e){switch(e.key){case Qi:if(this.form instanceof HTMLFormElement){const i=this.form.querySelector("[type=submit]");null==i||i.click()}}}stopPropagation(e){e.stopPropagation()}};return D({mode:"boolean"})(n.prototype,"disabled"),D({mode:"fromView",attribute:"value"})(n.prototype,"initialValue"),D({attribute:"current-value"})(n.prototype,"currentValue"),D(n.prototype,"name"),D({mode:"boolean"})(n.prototype,"required"),E(n.prototype,"value"),n}function ib(t){class n extends(mr(t)){}class e extends n{constructor(...o){super(o),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(o,r){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),void 0!==o&&this.$emit("change"),this.validate()}currentCheckedChanged(o,r){this.checked=this.currentChecked}updateForm(){const o=this.checked?this.value:null;this.setFormValue(o,o)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return D({attribute:"checked",mode:"boolean"})(e.prototype,"checkedAttribute"),D({attribute:"current-checked",converter:TN})(e.prototype,"currentChecked"),E(e.prototype,"defaultChecked"),E(e.prototype,"checked"),e}class Wj extends Pe{}class Gj extends(mr(Wj)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let $d=(()=>{class t extends Gj{constructor(){super(...arguments),this.handleClick=e=>{var i;this.disabled&&(null===(i=this.defaultSlottedContent)||void 0===i?void 0:i.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),"function"==typeof this.form.requestSubmit?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;null===(e=this.form)||void 0===e||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,i){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),"submit"===i&&this.addEventListener("click",this.handleSubmission),"submit"===e&&this.removeEventListener("click",this.handleSubmission),"reset"===i&&this.addEventListener("click",this.handleFormReset),"reset"===e&&this.removeEventListener("click",this.handleFormReset)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const i=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);i&&i.forEach(o=>{o.addEventListener("click",this.handleClick)})}disconnectedCallback(){var e;super.disconnectedCallback();const i=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);i&&i.forEach(o=>{o.removeEventListener("click",this.handleClick)})}}return b([D({mode:"boolean"})],t.prototype,"autofocus",void 0),b([D({attribute:"form"})],t.prototype,"formId",void 0),b([D],t.prototype,"formaction",void 0),b([D],t.prototype,"formenctype",void 0),b([D],t.prototype,"formmethod",void 0),b([D({mode:"boolean"})],t.prototype,"formnovalidate",void 0),b([D],t.prototype,"formtarget",void 0),b([D],t.prototype,"type",void 0),b([E],t.prototype,"defaultSlottedContent",void 0),t})(),ob=(()=>{class t{}return b([D({attribute:"aria-expanded"})],t.prototype,"ariaExpanded",void 0),b([D({attribute:"aria-pressed"})],t.prototype,"ariaPressed",void 0),t})();Qe(ob,_o),Qe($d,Mn,ob);const OM=(t,n)=>L`
    <button
        class="control"
        part="control"
        ?autofocus="${e=>e.autofocus}"
        ?disabled="${e=>e.disabled}"
        form="${e=>e.formId}"
        formaction="${e=>e.formaction}"
        formenctype="${e=>e.formenctype}"
        formmethod="${e=>e.formmethod}"
        formnovalidate="${e=>e.formnovalidate}"
        formtarget="${e=>e.formtarget}"
        name="${e=>e.name}"
        type="${e=>e.type}"
        value="${e=>e.value}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-pressed="${e=>e.ariaPressed}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${Le("control")}
    >
        ${Fn(0,n)}
        <span class="content" part="content">
            <slot ${at("defaultSlottedContent")}></slot>
        </span>
        ${xn(0,n)}
    </button>
`;class qj{constructor(n,e,i){this.propertyName=n,this.value=e,this.styles=i}bind(n){me.getNotifier(n).subscribe(this,this.propertyName),this.handleChange(n,this.propertyName)}unbind(n){me.getNotifier(n).unsubscribe(this,this.propertyName),n.$fastController.removeStyles(this.styles)}handleChange(n,e){const i=n[e];(Array.isArray(this.value)?this.value.includes(i):this.value===i)?n.$fastController.addStyles(this.styles):n.$fastController.removeStyles(this.styles)}}function Ct(t,n){return new qj("appearance",t,n)}const LM=S`
    ${Ge("inline-flex")}

    :host {
        background-color: transparent;
        height: ${Be};
        color: ${Wa};
        font: ${Ua};
        cursor: pointer;
        outline: none;
        border: none;
        box-sizing: border-box;
        ${""}
        vertical-align: middle;
    }

    :host([disabled]) {
        color: ${CM};
        cursor: default;
    }

    .control {
        background-color: transparent;
        height: 100%;
        width: 100%;
        border: ${P} solid transparent;
        box-sizing: border-box;
        color: inherit;
        border-radius: inherit;
        fill: inherit;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        cursor: inherit;
        font: inherit;
        outline: none;
        margin: 0;
        padding: 0 ${Ve};
        transition: box-shadow ${pn};
    }

    :host([content-hidden]) .control {
        width: ${Be};
        padding: 0px;
    }

    @media (prefers-reduced-motion) {
        .control {
            transition-duration: 0s;
        }
    }

    .control:hover {
        box-shadow: 0px 0px 0px ${P} ${z} inset;
        outline: none;
    }

    .control${$e} {
        box-shadow: 0px 0px 0px ${P} ${z} inset;
        outline: ${P} solid ${z};
        outline-offset: -4px;
    }

    .control:active {
        box-shadow: none;
        outline: none;
    }

    .control[disabled] {
        box-shadow: none;
        outline: none;
    }

    .content {
        display: contents;
    }

    :host([content-hidden]) .content {
        ${""}
        display: inline-block;
        height: 1px;
        width: 1px;
        position: absolute;
        margin: -1px;
        clip: rect(1px, 1px, 1px, 1px);
        clip-path: inset(50%);
        overflow: hidden;
        padding: 0;
    }

    [part='start'] {
        display: contents;
        ${fr.cssCustomProperty}: ${Wa};
    }

    :host([disabled]) slot[name='start']::slotted(*) {
        opacity: 0.3;
    }

    [part='end'] {
        display: contents;
        ${fr.cssCustomProperty}: ${Wa};
    }

    :host([disabled]) slot[name='end']::slotted(*) {
        opacity: 0.3;
    }

    :host([content-hidden]) [part='end'] {
        display: none;
    }
`.withBehaviors(Ct("outline",S`
            .control {
                background-color: transparent;
                border-color: rgba(${Ld}, 0.3);
            }

            .control:hover {
                background-color: transparent;
                border-color: ${z};
            }

            .control${$e} {
                background-color: transparent;
                border-color: ${z};
            }

            .control:active {
                background-color: ${Dt};
                border-color: ${Dt};
            }

            .control[disabled] {
                background-color: transparent;
                border-color: rgba(${_e}, 0.2);
            }
        `),Ct("ghost",S`
            .control {
                background-color: transparent;
                border-color: transparent;
            }

            .control:hover {
                background-color: transparent;
                border-color: ${z};
            }

            .control${$e} {
                background-color: transparent;
                border-color: ${z};
            }

            .control:active {
                background-color: ${Dt};
                border-color: ${Dt};
            }

            .control[disabled] {
                background-color: transparent;
                border-color: transparent;
            }
        `),Ct("block",S`
            .control {
                background-color: rgba(${_e}, 0.1);
                border-color: transparent;
            }

            .control:hover {
                background-color: transparent;
                border-color: ${z};
            }

            .control${$e} {
                background-color: rgba(${_e}, 0.1);
                border-color: ${z};
            }

            .control${$e}:hover {
                background-color: transparent;
            }

            .control:active {
                background-color: ${Dt};
                border-color: ${Dt};
            }

            .control[disabled] {
                background-color: rgba(${_e}, 0.1);
                border-color: transparent;
            }
        `)),Kj=LM.withBehaviors(Ct("outline",S`
            :host([appearance-variant='primary']) .control {
                box-shadow: 0px 0px 0px ${P}
                    rgba(${Ld}, 0.3) inset;
            }

            :host([appearance-variant='primary']) .control:hover {
                box-shadow: 0px 0px 0px ${P} ${z} inset;
            }

            :host([appearance-variant='primary']) .control${$e} {
                box-shadow: 0px 0px 0px ${P} ${z} inset;
            }

            :host([appearance-variant='primary']) .control:active {
                box-shadow: none;
            }

            :host([appearance-variant='primary']) .control[disabled] {
                box-shadow: none;
            }
        `),Ct("block",S`
            :host([appearance-variant='primary']) .control {
                background-clip: padding-box;
                border-color: rgba(${Ld}, 0.3);
                border-width: calc(2 * ${P});
                padding: 0 calc(${Ve} - ${P});
            }

            :host([appearance-variant='primary'][content-hidden]) .control {
                padding: 0px;
            }

            :host([appearance-variant='primary']) .control:hover {
                border-color: ${z};
                box-shadow: none;
            }

            :host([appearance-variant='primary']) .control${$e} {
                background-clip: border-box;
                border-color: ${z};
                border-width: ${P};
                box-shadow: 0px 0px 0px ${P} ${z} inset;
                padding: 0 ${Ve};
            }

            :host([appearance-variant='primary'][content-hidden])
                .control${$e} {
                padding: 0px;
            }

            :host([appearance-variant='primary']) .control:active {
                background-clip: border-box;
                border-color: ${Dt};
                border-width: ${P};
                box-shadow: none;
                padding: 0 ${Ve};
            }

            :host([appearance-variant='primary'][content-hidden])
                .control:active {
                padding: 0px;
            }

            :host([appearance-variant='primary']) .control[disabled] {
                background-clip: border-box;
                border-color: transparent;
                border-width: ${P};
                box-shadow: none;
                padding: 0 ${Ve};
            }

            :host([appearance-variant='primary'][content-hidden])
                .control[disabled] {
                padding: 0px;
            }
        `));class Eo extends $d{constructor(){super(...arguments),this.appearance="outline",this.contentHidden=!1}}ne([D],Eo.prototype,"appearance",void 0),ne([D({attribute:"appearance-variant"})],Eo.prototype,"appearanceVariant",void 0),ne([D({attribute:"content-hidden",mode:"boolean"})],Eo.prototype,"contentHidden",void 0);const Xj=Eo.compose({baseName:"button",baseClass:$d,template:OM,styles:Kj,shadowOptions:{delegatesFocus:!0}});B.getOrCreate().withPrefix("nimble").register(Xj());const Qj=S`
    ${Ge("inline-flex")}

    :host {
        background-color: transparent;
        color: ${Wa};
        font: ${Ua};
        cursor: pointer;
        outline: none;
        border: none;
        box-sizing: border-box;
        transition: box-shadow ${pn};
    }

    @media (prefers-reduced-motion) {
        :host {
            transition-duration: 0s;
        }
    }

    :host(:hover) {
        box-shadow: 0px 1px 4px ${$(Pd,.3)};
    }

    :host(:active) {
        box-shadow: none;
    }

    :host([disabled]) {
        cursor: default;
        box-shadow: none;
    }

    .control {
        background-color: transparent;
        height: 100%;
        width: 100%;
        border: ${P} solid transparent;
        color: inherit;
        border-radius: inherit;
        fill: inherit;
        cursor: inherit;
        font: inherit;
        outline: none;
        padding: 0px;
    }

    .control:hover {
        background: var(--ni-private-card-button-background-hover-color);
    }

    .control${$e} {
        box-shadow: 0px 0px 0px ${P} ${z} inset;
        border-color: ${z};
        outline: ${P} solid ${z};
        outline-offset: -4px;
    }

    .control:active {
        background: var(--ni-private-card-button-background-active-color);
        border-color: var(--ni-private-card-button-border-active-color);
        outline: none;
        box-shadow: none;
    }

    :host([selected]) .control {
        background: var(--ni-private-card-button-background-active-color);
        border-color: var(--ni-private-card-button-border-selected-color);
    }

    :host([selected]) .control${$e} {
        border-color: ${z};
    }

    :host([selected]) .control:active {
        border-color: var(--ni-private-card-button-border-active-color);
    }

    :host([selected]) .control${$e}:active {
        outline: none;
        box-shadow: none;
    }

    .control[disabled] {
        background: transparent;
        opacity: 0.3;
    }

    .control[disabled]:active {
        border-color: transparent;
    }

    :host([selected]) .control[disabled]:active {
        border-color: var(--ni-private-card-button-border-selected-color);
    }

    .content {
        display: contents;
    }

    slot[name='start'] {
        display: none;
    }

    slot[name='end'] {
        display: none;
    }
`.withBehaviors(pt(Fe.light,S`
            :host {
                --ni-private-card-button-background-hover-color: ${$(Ce,.3)};
                --ni-private-card-button-background-active-color: ${Ce};
                --ni-private-card-button-border-active-color: ${$(on,.2)};
                --ni-private-card-button-border-selected-color: ${$(on,.6)};
            }
        `),pt(Fe.dark,S`
            :host {
                --ni-private-card-button-background-hover-color: ${$(At,.07)};
                --ni-private-card-button-background-active-color: ${$(At,.15)};
                --ni-private-card-button-border-active-color: ${$(At,.2)};
                --ni-private-card-button-border-selected-color: ${At};
            }
        `),pt(Fe.color,S`
            :host {
                --ni-private-card-button-background-hover-color: ${$(Ce,.07)};
                --ni-private-card-button-background-active-color: ${$(Ce,.15)};
                --ni-private-card-button-border-active-color: ${$(Ce,.2)};
                --ni-private-card-button-border-selected-color: ${$(Ce,.6)};
            }
        `));class VM extends $d{constructor(){super(...arguments),this.selected=!1}}ne([D({mode:"boolean"})],VM.prototype,"selected",void 0);const Zj=VM.compose({baseName:"card-button",template:OM,styles:Qj,shadowOptions:{delegatesFocus:!0}});B.getOrCreate().withPrefix("nimble").register(Zj());class Yj extends Pe{}class Jj extends(ib(Yj)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let $M=(()=>{class t extends Jj{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=e=>{if(!this.readOnly)switch(e.key){case Fo:this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked}},this.clickHandler=e=>{!this.disabled&&!this.readOnly&&(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}return b([D({attribute:"readonly",mode:"boolean"})],t.prototype,"readOnly",void 0),b([E],t.prototype,"defaultSlottedNodes",void 0),b([E],t.prototype,"indeterminate",void 0),t})();const tz=S`
    ${Ge("inline-flex")}

    :host {
        font: ${Ua};
        align-items: center;
        cursor: pointer;
        outline: none;
        user-select: none;
    }

    :host([disabled]) {
        cursor: default;
    }

    .control {
        width: calc(${Be} / 2);
        height: calc(${Be} / 2);
        box-sizing: border-box;
        flex-shrink: 0;
        border: ${P} solid ${Ps};
        padding: 2px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: box-shadow ${pn};
        ${""}
        line-height: 0;
    }

    @media (prefers-reduced-motion) {
        .control {
            transition-duration: 0s;
        }
    }

    :host([disabled]) .control {
        background-color: rgba(${_e}, 0.1);
        border-color: rgba(${_e}, 0.2);
    }

    :host(:not([disabled]):not(:active):hover) .control {
        border-color: ${z};
        box-shadow: 0px 0px 0px ${P} ${z} inset;
    }

    :host(${$e}) .control {
        border-color: ${z};
        outline: 2px solid ${z};
        outline-offset: 1px;
    }

    .label {
        font: inherit;
        color: ${Rt};
        padding-left: 1ch;
        cursor: inherit;
    }

    :host([disabled]) .label {
        color: ${rn};
    }

    slot[name='checked-indicator'],
    slot[name='indeterminate-indicator'] {
        display: none;
    }

    slot[name='checked-indicator'] svg {
        height: ${he};
        width: ${he};
        overflow: visible;
    }

    :host(.checked:not(.indeterminate)) slot[name='checked-indicator'] {
        display: contents;
    }

    slot[name='checked-indicator'] path {
        fill: ${Ps};
    }

    :host([disabled]) slot[name='checked-indicator'] path {
        fill: rgba(${_e}, 0.3);
    }

    slot[name='indeterminate-indicator'] svg {
        height: ${he};
        width: ${he};
        overflow: visible;
    }

    :host(.indeterminate) slot[name='indeterminate-indicator'] {
        display: contents;
    }

    slot[name='indeterminate-indicator'] path {
        fill: ${Ps};
    }

    :host([disabled]) slot[name='indeterminate-indicator'] path {
        fill: rgba(${_e}, 0.3);
    }
`,iz=class extends $M{}.compose({baseName:"checkbox",baseClass:$M,template:(t,n)=>L`
    <template
        role="checkbox"
        aria-checked="${e=>e.checked}"
        aria-required="${e=>e.required}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        tabindex="${e=>e.disabled?null:0}"
        @keypress="${(e,i)=>e.keypressHandler(i.event)}"
        @click="${(e,i)=>e.clickHandler(i.event)}"
        class="${e=>e.readOnly?"readonly":""} ${e=>e.checked?"checked":""} ${e=>e.indeterminate?"indeterminate":""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${n.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${n.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${at("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:tz,checkedIndicator:EM.data,indeterminateIndicator:TM.data});B.getOrCreate().withPrefix("nimble").register(iz());let oz=0;function qa(t=""){return`${t}${oz++}`}function HM(t,n,e){return Math.min(Math.max(e,t),n)}function Hd(t,n,e=0){return[n,e]=[n,e].sort((i,o)=>i-o),n<=t&&t<e}function jM(t){return Os(t)&&("option"===t.getAttribute("role")||t instanceof HTMLOptionElement)}let rb=(()=>{class t extends Pe{constructor(e,i,o,r){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,e&&(this.textContent=e),i&&(this.initialValue=i),o&&(this.defaultSelected=o),r&&(this.selected=r),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(e,i){this.ariaChecked="boolean"!=typeof i?null:i?"true":"false"}contentChanged(e,i){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,i){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(e,i){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var e;return null!==(e=this.value)&&void 0!==e?e:this.text}get text(){var e,i;return null!==(i=null===(e=this.textContent)||void 0===e?void 0:e.replace(/\s+/g," ").trim())&&void 0!==i?i:""}set value(e){const i=`${null!=e?e:""}`;this._value=i,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=i),me.notify(this,"value")}get value(){var e;return me.track(this,"value"),null!==(e=this._value)&&void 0!==e?e:this.text}get form(){return this.proxy?this.proxy.form:null}}return b([E],t.prototype,"checked",void 0),b([E],t.prototype,"content",void 0),b([E],t.prototype,"defaultSelected",void 0),b([D({mode:"boolean"})],t.prototype,"disabled",void 0),b([D({attribute:"selected",mode:"boolean"})],t.prototype,"selectedAttribute",void 0),b([E],t.prototype,"selected",void 0),b([D({attribute:"value",mode:"fromView"})],t.prototype,"initialValue",void 0),t})(),zM=(()=>{class t{}return b([E],t.prototype,"ariaChecked",void 0),b([E],t.prototype,"ariaPosInSet",void 0),b([E],t.prototype,"ariaSelected",void 0),b([E],t.prototype,"ariaSetSize",void 0),t})();Qe(zM,_o),Qe(rb,Mn,zM);let Us=(()=>{class t extends Pe{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var e;return null!==(e=this.selectedOptions[0])&&void 0!==e?e:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every(e=>e.disabled)}get length(){var e,i;return null!==(i=null===(e=this.options)||void 0===e?void 0:e.length)&&void 0!==i?i:0}get options(){return me.track(this,"options"),this._options}set options(e){this._options=e,me.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(e){this.typeaheadExpired=e}clickHandler(e){const i=e.target.closest("option,[role=option]");if(i&&!i.disabled)return this.selectedIndex=this.options.indexOf(i),!0}focusAndScrollOptionIntoView(e=this.firstSelectedOption){this.contains(document.activeElement)&&null!==e&&(e.focus(),requestAnimationFrame(()=>{e.scrollIntoView({block:"nearest"})}))}focusinHandler(e){!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),i=new RegExp(`^${e}`,"gi");return this.options.filter(o=>o.text.trim().match(i))}getSelectableIndex(e=this.selectedIndex,i){const o=e>i?-1:e<i?1:0,r=e+o;let s=null;switch(o){case-1:s=this.options.reduceRight((l,a,c)=>!l&&!a.disabled&&c<r?a:l,s);break;case 1:s=this.options.reduce((l,a,c)=>!l&&!a.disabled&&c>r?a:l,s)}return this.options.indexOf(s)}handleChange(e,i){switch(i){case"selected":t.slottedOptionFilter(e)&&(this.selectedIndex=this.options.indexOf(e)),this.setSelectedOptions()}}handleTypeAhead(e){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout(()=>this.typeaheadExpired=!0,t.TYPE_AHEAD_TIMEOUT_MS),!(e.length>1)&&(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${e}`)}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;const i=e.key;switch(i){case Hs:e.shiftKey||(e.preventDefault(),this.selectFirstOption());break;case Wn:e.shiftKey||(e.preventDefault(),this.selectNextOption());break;case Gn:e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break;case js:e.preventDefault(),this.selectLastOption();break;case"Tab":return this.focusAndScrollOptionIntoView(),!0;case Qi:case Ga:return!0;case Fo:if(this.typeaheadExpired)return!0;default:return 1===i.length&&this.handleTypeAhead(`${i}`),!0}}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(e,i){this.ariaMultiSelectable=i?"true":null}selectedIndexChanged(e,i){var o;if(this.hasSelectableOptions){if((null===(o=this.options[this.selectedIndex])||void 0===o?void 0:o.disabled)&&"number"==typeof e){const r=this.getSelectableIndex(e,i),s=r>-1?r:e;return this.selectedIndex=s,void(i===s&&this.selectedIndexChanged(i,s))}this.setSelectedOptions()}else this.selectedIndex=-1}selectedOptionsChanged(e,i){var o;const r=i.filter(t.slottedOptionFilter);null===(o=this.options)||void 0===o||o.forEach(s=>{const l=me.getNotifier(s);l.unsubscribe(this,"selected"),s.selected=r.includes(s),l.subscribe(this,"selected")})}selectFirstOption(){var e,i;this.disabled||(this.selectedIndex=null!==(i=null===(e=this.options)||void 0===e?void 0:e.findIndex(o=>!o.disabled))&&void 0!==i?i:-1)}selectLastOption(){this.disabled||(this.selectedIndex=function(t,n){let e=t.length;for(;e--;)if(n(t[e]))return e;return-1}(this.options,e=>!e.disabled))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var e,i;this.selectedIndex=null!==(i=null===(e=this.options)||void 0===e?void 0:e.findIndex(o=>o.defaultSelected))&&void 0!==i?i:-1}setSelectedOptions(){var e,i,o;(null===(e=this.options)||void 0===e?void 0:e.length)&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=null!==(o=null===(i=this.firstSelectedOption)||void 0===i?void 0:i.id)&&void 0!==o?o:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(e,i){this.options=i.reduce((r,s)=>(jM(s)&&r.push(s),r),[]);const o=`${this.options.length}`;this.options.forEach((r,s)=>{r.id||(r.id=qa("option-")),r.ariaPosInSet=`${s+1}`,r.ariaSetSize=o}),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(e,i){if(this.$fastController.isConnected){const o=this.getTypeaheadMatches();if(o.length){const r=this.options.indexOf(o[0]);r>-1&&(this.selectedIndex=r)}this.typeaheadExpired=!1}}}return t.slottedOptionFilter=n=>jM(n)&&!n.hidden,t.TYPE_AHEAD_TIMEOUT_MS=1e3,b([D({mode:"boolean"})],t.prototype,"disabled",void 0),b([E],t.prototype,"selectedIndex",void 0),b([E],t.prototype,"selectedOptions",void 0),b([E],t.prototype,"slottedOptions",void 0),b([E],t.prototype,"typeaheadBuffer",void 0),t})(),jd=(()=>{class t{}return b([E],t.prototype,"ariaActiveDescendant",void 0),b([E],t.prototype,"ariaDisabled",void 0),b([E],t.prototype,"ariaExpanded",void 0),b([E],t.prototype,"ariaMultiSelectable",void 0),t})();Qe(jd,_o),Qe(Us,jd);class lz extends Us{}class az extends(mr(lz)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let sb=(()=>{class t extends az{constructor(){super(...arguments),this._value="",this.filteredOptions=[],this.filter="",this.forcedPosition=!1,this.listboxId=qa("listbox-"),this.maxHeight=0,this.open=!1}formResetCallback(){super.formResetCallback(),this.setDefaultSelectedOption(),this.updateValue()}get isAutocompleteInline(){return"inline"===this.autocomplete||this.isAutocompleteBoth}get isAutocompleteList(){return"list"===this.autocomplete||this.isAutocompleteBoth}get isAutocompleteBoth(){return"both"===this.autocomplete}openChanged(){if(this.open)return this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),void ve.queueUpdate(()=>this.focus());this.ariaControls="",this.ariaExpanded="false"}get options(){return me.track(this,"options"),this.filteredOptions.length?this.filteredOptions:this._options}set options(e){this._options=e,me.notify(this,"options")}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}positionChanged(e,i){this.positionAttribute=i,this.setPositioning()}get value(){return me.track(this,"value"),this._value}set value(e){var i,o,r;const s=`${this._value}`;if(this.$fastController.isConnected&&this.options){const l=this.options.findIndex(u=>u.text.toLowerCase()===e.toLowerCase()),a=null===(i=this.options[this.selectedIndex])||void 0===i?void 0:i.text,c=null===(o=this.options[l])||void 0===o?void 0:o.text;this.selectedIndex=a!==c?l:this.selectedIndex,e=(null===(r=this.firstSelectedOption)||void 0===r?void 0:r.text)||e}s!==e&&(this._value=e,super.valueChanged(s,e),me.notify(this,"value"))}clickHandler(e){if(!this.disabled){if(this.open){const i=e.target.closest("option,[role=option]");if(!i||i.disabled)return;this.selectedOptions=[i],this.control.value=i.text,this.clearSelectionRange(),this.updateValue(!0)}return this.open=!this.open,this.open&&this.control.focus(),!0}}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.value&&(this.initialValue=this.value)}disabledChanged(e,i){super.disabledChanged&&super.disabledChanged(e,i),this.ariaDisabled=this.disabled?"true":"false"}filterOptions(){(!this.autocomplete||"none"===this.autocomplete)&&(this.filter="");const e=this.filter.toLowerCase();this.filteredOptions=this._options.filter(i=>i.text.toLowerCase().startsWith(this.filter.toLowerCase())),this.isAutocompleteList&&(!this.filteredOptions.length&&!e&&(this.filteredOptions=this._options),this._options.forEach(i=>{i.hidden=!this.filteredOptions.includes(i)}))}focusAndScrollOptionIntoView(){this.contains(document.activeElement)&&(this.control.focus(),this.firstSelectedOption&&requestAnimationFrame(()=>{var e;null===(e=this.firstSelectedOption)||void 0===e||e.scrollIntoView({block:"nearest"})}))}focusoutHandler(e){if(this.syncValue(),!this.open)return!0;const i=e.relatedTarget;this.isSameNode(i)?this.focus():(!this.options||!this.options.includes(i))&&(this.open=!1)}inputHandler(e){if(this.filter=this.control.value,this.filterOptions(),this.isAutocompleteInline||(this.selectedIndex=this.options.map(i=>i.text).indexOf(this.control.value)),e.inputType.includes("deleteContent")||!this.filter.length)return!0;this.isAutocompleteList&&!this.open&&(this.open=!0),this.isAutocompleteInline&&this.filteredOptions.length&&(this.selectedOptions=[this.filteredOptions[0]],this.selectedIndex=this.options.indexOf(this.firstSelectedOption),this.setInlineSelection())}keydownHandler(e){if(e.ctrlKey||e.shiftKey)return!0;switch(e.key){case"Enter":this.syncValue(),this.isAutocompleteInline&&(this.filter=this.value),this.open=!1,this.clearSelectionRange();break;case"Escape":if(this.isAutocompleteInline||(this.selectedIndex=-1),this.open){this.open=!1;break}this.value="",this.control.value="",this.filter="",this.filterOptions();break;case"Tab":if(this.setInputToSelection(),!this.open)return!0;e.preventDefault(),this.open=!1;break;case"ArrowUp":case"ArrowDown":if(this.filterOptions(),!this.open){this.open=!0;break}this.filteredOptions.length>0&&super.keydownHandler(e),this.isAutocompleteInline&&this.setInlineSelection();break;default:return!0}}keyupHandler(e){switch(e.key){case"ArrowLeft":case"ArrowRight":case"Backspace":case"Delete":case"Home":case"End":this.filter=this.control.value,this.selectedIndex=-1,this.filterOptions()}}selectedIndexChanged(e,i){if(this.$fastController.isConnected){if((i=HM(-1,this.options.length-1,i))!==this.selectedIndex)return void(this.selectedIndex=i);super.selectedIndexChanged(e,i)}}selectPreviousOption(){!this.disabled&&this.selectedIndex>=0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){if(this.$fastController.isConnected&&this.options){const e=this.options.findIndex(i=>null!==i.getAttribute("selected")||i.selected);this.selectedIndex=e,!this.dirtyValue&&this.firstSelectedOption&&(this.value=this.firstSelectedOption.text),this.setSelectedOptions()}}setInputToSelection(){this.firstSelectedOption&&(this.control.value=this.firstSelectedOption.text,this.control.focus())}setInlineSelection(){this.firstSelectedOption&&(this.setInputToSelection(),this.control.setSelectionRange(this.filter.length,this.control.value.length,"backward"))}syncValue(){var e;const i=this.selectedIndex>-1?null===(e=this.firstSelectedOption)||void 0===e?void 0:e.text:this.control.value;this.updateValue(this.value!==i)}setPositioning(){const e=this.getBoundingClientRect(),o=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>o?"above":"below",this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight="above"===this.position?~~e.top:~~o}selectedOptionsChanged(e,i){this.$fastController.isConnected&&this._options.forEach(o=>{o.selected=i.includes(o)})}slottedOptionsChanged(e,i){super.slottedOptionsChanged(e,i),this.updateValue()}updateValue(e){var i;this.$fastController.isConnected&&(this.value=(null===(i=this.firstSelectedOption)||void 0===i?void 0:i.text)||this.control.value,this.control.value=this.value),e&&this.$emit("change")}clearSelectionRange(){const e=this.control.value.length;this.control.setSelectionRange(e,e)}}return b([D({attribute:"autocomplete",mode:"fromView"})],t.prototype,"autocomplete",void 0),b([E],t.prototype,"maxHeight",void 0),b([D({attribute:"open",mode:"boolean"})],t.prototype,"open",void 0),b([D],t.prototype,"placeholder",void 0),b([D({attribute:"position"})],t.prototype,"positionAttribute",void 0),b([E],t.prototype,"position",void 0),t})(),UM=(()=>{class t{}return b([E],t.prototype,"ariaAutoComplete",void 0),b([E],t.prototype,"ariaControls",void 0),t})();Qe(UM,jd),Qe(sb,Mn,UM);class uz extends Pe{}class dz extends(ib(uz)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let lb=(()=>{class t extends dz{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{switch(e.key){case Qi:case Fo:this.checked=!this.checked}},this.clickHandler=e=>{!this.disabled&&!this.readOnly&&(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly),this.readOnly?this.classList.add("readonly"):this.classList.remove("readonly")}checkedChanged(e,i){super.checkedChanged(e,i),this.checked?this.classList.add("checked"):this.classList.remove("checked")}}return b([D({attribute:"readonly",mode:"boolean"})],t.prototype,"readOnly",void 0),b([E],t.prototype,"defaultSlottedNodes",void 0),t})();const hz=S`
    ${LM}

    .control[aria-pressed='true'] {
        background-color: ${Dt};
        border-color: ${Dt};
    }

    .control[aria-pressed='true']:hover {
        background-color: ${Dt};
    }

    .control[aria-pressed='true']${$e} {
        background-color: ${Dt};
    }

    .control[aria-pressed='true'][disabled] {
        background-color: ${Dt};
        border-color: ${Dt};
    }

    .control[aria-pressed='true'][disabled]:hover {
        background-color: ${Dt};
        border-color: ${Dt};
    }
`;class ko extends lb{constructor(){super(...arguments),this.appearance="outline",this.contentHidden=!1}}ne([D],ko.prototype,"appearance",void 0),ne([D({attribute:"content-hidden",mode:"boolean"})],ko.prototype,"contentHidden",void 0),Qe(ko,Mn,ob);const pz=ko.compose({baseName:"toggle-button",template:(t,n)=>L`
    <div
        role="button"
        part="control"
        tabindex="${e=>e.disabled?null:0}"
        @keypress="${(e,i)=>e.keypressHandler(i.event)}"
        @click="${(e,i)=>e.clickHandler(i.event)}"
        class="control ${e=>e.checked?"checked":""}"
        ?disabled="${e=>e.disabled}"
        ${""}
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        aria-pressed="${e=>e.checked}"
        ${""}
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${Le("control")}
    >
        ${Fn(0,n)}
        <span class="content" part="content">
            <slot></slot>
        </span>
        ${xn(0,n)}
    </div>
`,styles:hz,shadowOptions:{delegatesFocus:!0}});B.getOrCreate().withPrefix("nimble").register(pz());const Ud=L`
    <div class="error-text" title="${t=>t.errorText}" aria-live="polite">
        ${t=>t.errorText}
    </div>
`,mz=L`
    <template>
        <div class="icon" :innerHTML=${t=>t.icon.data}></div>
    </template
`,gz=S`
    ${Ge("inline-flex")}

    :host {
        align-items: center;
        user-select: none;
        width: ${he};
        height: ${he};
    }

    .icon {
        width: 100%;
        height: 100%;
    }

    :host([severity='error']) {
        ${fr.cssCustomProperty}: ${Xi};
    }

    :host([severity='warning']) {
        ${fr.cssCustomProperty}: ${k$};
    }

    :host([severity='success']) {
        ${fr.cssCustomProperty}: ${S$};
    }

    :host([severity='information']) {
        ${fr.cssCustomProperty}: ${T$};
    }

    .icon svg {
        fill: ${fr};
        width: 100%;
        height: 100%;
    }
`;class w extends Pe{constructor(n){super(),this.icon=n}}ne([D],w.prototype,"severity",void 0);const _=(t,n)=>{const e=n.compose({baseName:t,template:mz,styles:gz,baseClass:n});B.getOrCreate().withPrefix("nimble").register(e())};class ab extends w{constructor(){super(MM)}}_("icon-arrow-expander-down",ab);class hi extends w{constructor(){super(uH)}}_("icon-exclamation-mark",hi);const WM=S`
    ${Ge("inline-flex")}

    :host {
        box-sizing: border-box;
        color: ${Rt};
        font: ${kn};
        height: ${Be};
        position: relative;
        justify-content: center;
        user-select: none;
        min-width: 250px;
        outline: none;
        vertical-align: top;
        --ni-private-hover-indicator-width: calc(${P} + 1px);
        --ni-private-focus-indicator-width: 1px;
        --ni-private-indicator-lines-gap: 1px;
    }

    :host::before {
        content: '';
        position: absolute;
        bottom: calc(${P} + var(--ni-private-indicator-lines-gap));
        width: 0px;
        height: 0px;
        justify-self: center;
        border-bottom: ${z}
            var(--ni-private-focus-indicator-width) solid;
        transition: width ${pn} ease-in;
    }

    @media (prefers-reduced-motion) {
        :host::before {
            transition-duration: 0s;
        }
    }

    :host(${$e})::before {
        width: calc(100% - 8px);
    }

    :host([error-visible]):before {
        border-bottom-color: ${Xi};
    }

    :host::after {
        content: '';
        position: absolute;
        bottom: calc(-1 * ${P});
        width: 0px;
        height: 0px;
        justify-self: center;
        border-bottom: ${z}
            var(--ni-private-hover-indicator-width) solid;
        transition: width ${pn} ease-in;
    }

    @media (prefers-reduced-motion) {
        :host::after {
            transition-duration: 0s;
        }
    }

    :host(:hover)::after,
    :host(${$e})::after {
        width: 100%;
    }

    :host([error-visible]):after {
        border-bottom-color: ${Xi};
    }

    :host([disabled]:hover)::after {
        width: 0px;
    }

    .control {
        align-items: center;
        box-sizing: border-box;
        cursor: pointer;
        display: flex;
        min-height: 100%;
        width: 100%;
        border: 0px solid rgba(${_e}, 0.3);
        background-color: transparent;
        padding: ${P};
    }

    :host([open]:not(:hover)) .control {
        border-bottom-color: ${z};
    }

    :host([disabled]) .control {
        cursor: default;
        color: ${rn};
        border-color: rgba(${_e}, 0.1);
    }

    :host([error-visible]) .control,
    :host([error-visible][open]) .control,
    :host([error-visible][disabled]) .control {
        border-bottom-color: ${Xi};
    }

    .listbox {
        box-sizing: border-box;
        display: inline-flex;
        flex-direction: column;
        left: 0;
        overflow-y: auto;
        position: absolute;
        width: 100%;
        --ni-private-listbox-padding: ${En};
        max-height: calc(
            var(--ni-private-select-max-height) - 2 *
                var(--ni-private-listbox-padding)
        );
        z-index: 1;
        padding: var(--ni-private-listbox-padding);
        box-shadow: 0px 3px 3px ${pr};
        border: 1px solid ${Yg};
        background-color: ${ja};
        background-clip: padding-box;
    }

    .listbox[hidden] {
        display: none;
    }

    :host([open][position='above']) .listbox {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    :host([open][position='below']) .listbox {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }

    :host([open][position='above']) .listbox {
        bottom: ${Be};
    }

    :host([open][position='below']) .listbox {
        top: calc(${Be} + ${En});
    }

    .selected-value {
        flex: auto;
        font-family: inherit;
        text-align: start;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        padding: 0px;
        padding-left: calc(${Ve} / 2);
    }

    .selected-value[disabled]::placeholder {
        color: ${rn};
    }

    .indicator {
        flex: none;
        margin-inline-start: 1em;
        padding-right: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .indicator slot[name='indicator'] svg {
        width: ${he};
        height: ${he};
        fill: ${Rt};
    }

    :host([disabled]) .indicator slot[name='indicator'] svg {
        fill: ${rn};
    }

    slot[name='listbox'] {
        display: none;
        width: 100%;
    }

    :host([open]) slot[name='listbox'] {
        display: flex;
        position: absolute;
    }

    .end {
        margin-inline-start: auto;
    }

    ::slotted([role='option']),
    ::slotted(option) {
        flex: none;
    }
`.withBehaviors(Ct("underline",S`
            .control {
                border-bottom-width: ${P};
                padding-bottom: 0;
            }

            :host([disabled]) .control {
                border-color: rgba(${_e}, 0.1);
            }
        `),Ct("outline",S`
            .control {
                border-width: ${P};
                padding: 0;
            }
        `),Ct("block",S`
            .control {
                background-color: rgba(${_e}, 0.1);
            }

            .control:focus-within {
                border-bottom-width: ${P};
                padding-bottom: 0;
            }

            :host([disabled]) .control {
                background-color: rgba(${_e}, 0.07);
            }
        `)),Wd=S`
    .error-icon {
        display: none;
    }

    :host([error-visible]) .error-icon {
        display: inline-flex;
        width: ${he};
        height: ${he};
        flex: none;
    }

    .error-text {
        display: none;
    }

    :host([error-visible]) .error-text {
        display: block;
        font: ${G$};
        color: ${Xi};
        width: 100%;
        position: absolute;
        top: ${Be};
        left: 0px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    :host([error-visible][readonly]:not([disabled])) .error-text {
        top: calc(${Be} - ${P});
    }

    :host([error-visible]) .error-text:empty {
        display: none;
    }
`,bz=S`
    ${WM}
    ${Wd}

    :host {
        --ni-private-hover-bottom-border-width: 2px;
        --ni-private-bottom-border-width: 1px;
        --ni-private-height-within-border: calc(
            ${Be} - 2 * ${P}
        );
    }

    :host([disabled]) *,
    :host([disabled]) {
        user-select: none;
        color: ${rn};
    }

    .control {
        bottom-border-width: var(--ni-private-bottom-border-width);
    }

    .control:focus-within {
        border-bottom-color: ${z};
    }

    .selected-value {
        -webkit-appearance: none;
        background: transparent;
        border: none;
        color: inherit;
        margin: auto 0;
        width: 100%;
        font: inherit;
        height: var(--ni-private-height-within-border);
    }

    .selected-value:hover,
    .selected-value:disabled,
    .selected-value:active,
    .selected-value${$e} {
        outline: none;
    }

    [part='indicator'] {
        display: none;
    }

    .end-slot-container {
        display: flex;
        align-items: baseline;
        padding-right: ${En};
    }

    .separator {
        display: inline;
        width: 2px;
        border-right: 2px solid rgba(${_e}, 0.15);
        height: calc(${Be} - 12px);
        align-self: center;
        padding-left: 4px;
    }

    .dropdown-button {
        ${Be.cssCustomProperty}: 24px;
        margin-left: ${En};
    }

    :host([disabled]) .dropdown-icon {
        fill: ${rn};
    }

    :host(:empty) .listbox {
        display: none;
    }
`.withBehaviors(Ct("block",S`
            :host([error-visible]) .control {
                border-bottom-width: ${P};
                padding-bottom: 0;
            }
        `));class Ka extends sb{constructor(){super(...arguments),this.appearance="underline",this.errorVisible=!1,this.valueUpdatedByInput=!1}setPositioning(){!this.$fastController.isConnected||super.setPositioning()}slottedOptionsChanged(n,e){const i=this.value;super.slottedOptionsChanged(n,e),i&&(this.value=i)}connectedCallback(){super.connectedCallback(),this.setPositioning(),this.updateInputAriaLabel()}toggleButtonClickHandler(n){n.stopImmediatePropagation()}toggleButtonChangeHandler(n){this.open=this.dropdownButton.checked,n.stopImmediatePropagation()}toggleButtonKeyDownHandler(n){switch(n.key){case Gn:case Wn:case Fo:case Qi:return this.open=!0,this.stopPropagation(n),!1;default:return!0}}filterOptions(){super.filterOptions();const n=this.filteredOptions.filter(e=>!e.disabled);this.filteredOptions=n}inputHandler(n){const e=super.inputHandler(n);return this.valueUpdatedByInput||(this.valueBeforeTextUpdate=this.value),this.value=this.control.value,this.valueUpdatedByInput=!0,e}keydownHandler(n){const e=super.keydownHandler(n);if(n.ctrlKey||n.altKey)return e;switch(n.key){case Qi:this.emitChangeIfValueUpdated();break;case Wn:case Gn:this.open&&this.valueUpdatedByInput&&(this.valueUpdatedByInput=!1);break;default:return e}return e}focusoutHandler(n){const e=super.focusoutHandler(n);return this.open=!1,this.emitChangeIfValueUpdated(),e}openChanged(){super.openChanged(),this.dropdownButton&&(this.dropdownButton.checked=this.open)}ariaLabelChanged(n,e){this.updateInputAriaLabel()}updateInputAriaLabel(){var e;const n=null==(e=this.shadowRoot)?void 0:e.querySelector(".selected-value");this.ariaLabel?null==n||n.setAttribute("aria-label",this.ariaLabel):null==n||n.removeAttribute("aria-label")}emitChangeIfValueUpdated(){this.valueUpdatedByInput&&(this.value!==this.valueBeforeTextUpdate&&this.$emit("change"),this.valueUpdatedByInput=!1)}}ne([D],Ka.prototype,"appearance",void 0),ne([E],Ka.prototype,"dropdownButton",void 0),ne([D({attribute:"error-text"})],Ka.prototype,"errorText",void 0),ne([D({attribute:"error-visible",mode:"boolean"})],Ka.prototype,"errorVisible",void 0);const vz=Ka.compose({baseName:"combobox",baseClass:sb,template:(t,n)=>L`
    <template
        aria-disabled="${e=>e.ariaDisabled}"
        autocomplete="${e=>e.autocomplete}"
        class="${e=>e.open?"open":""} ${e=>e.disabled?"disabled":""} ${e=>e.position}"
        ?open="${e=>e.open}"
        tabindex="${e=>e.disabled?null:"0"}"
        @click="${(e,i)=>e.clickHandler(i.event)}"
        @focusout="${(e,i)=>e.focusoutHandler(i.event)}"
        @keydown="${(e,i)=>e.keydownHandler(i.event)}"
    >
        <div class="control" part="control">
            ${Fn(0,n)}
            <slot name="control">
                <input
                    aria-activedescendant="${e=>e.open?e.ariaActiveDescendant:null}"
                    aria-autocomplete="${e=>e.ariaAutoComplete}"
                    aria-controls="${e=>e.ariaControls}"
                    aria-disabled="${e=>e.ariaDisabled}"
                    aria-expanded="${e=>e.ariaExpanded}"
                    aria-haspopup="listbox"
                    class="selected-value"
                    part="selected-value"
                    placeholder="${e=>e.placeholder}"
                    role="combobox"
                    type="text"
                    ?disabled="${e=>e.disabled}"
                    :value="${e=>e.value}"
                    @input="${(e,i)=>e.inputHandler(i.event)}"
                    @keyup="${(e,i)=>e.keyupHandler(i.event)}"
                    ${Le("control")}
                />
                <div class="indicator" part="indicator" aria-hidden="true">
                    <slot name="indicator">
                        ${n.indicator||""}
                    </slot>
                </div>
            </slot>
            ${xn(0,n)}
        </div>
        <div
            class="listbox"
            id="${e=>e.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${e=>e.disabled}"
            ?hidden="${e=>!e.open}"
            ${Le("listbox")}
        >
            <slot
                ${at({filter:Us.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,styles:bz,shadowOptions:{delegatesFocus:!0},end:L`
        <div class="end-slot-container">
            <${B.tagFor(hi)}
                severity="error"
                class="error-icon"
            ></${B.tagFor(hi)}>
            <div class="separator"></div>
            <${B.tagFor(ko)}
                ${Le("dropdownButton")}
                appearance="ghost"
                ?checked="${t=>t.open}"
                ?disabled="${t=>t.disabled}"
                content-hidden="true"
                @click="${(t,n)=>t.toggleButtonClickHandler(n.event)}"
                @change="${(t,n)=>t.toggleButtonChangeHandler(n.event)}"
                @keydown="${(t,n)=>t.toggleButtonKeyDownHandler(n.event)}"
                class="dropdown-button"
                part="button"
                aria-haspopup="true"
                aria-expanded="${t=>t.open}"
                tabindex="-1"
            >
                <${B.tagFor(ab)}
                    slot="start"
                    class="dropdown-icon"
                >
                </${B.tagFor(ab)}>
            </${B.tagFor(ko)}>
        </div>
        ${Ud}
    `});function GM(t,n,e,i,o,r,s){try{var l=t[r](s),a=l.value}catch(c){return void e(c)}l.done?n(a):Promise.resolve(a).then(i,o)}function Gd(t){return function(){var n=this,e=arguments;return new Promise(function(i,o){var r=t.apply(n,e);function s(a){GM(r,i,o,s,l,"next",a)}function l(a){GM(r,i,o,s,l,"throw",a)}s(void 0)})}}B.getOrCreate().withPrefix("nimble").register(vz());const Gs=Symbol("user dismissed"),yz=S`
    ${Ge("grid")}

    dialog {
        flex-direction: column;
        background-color: ${ja};
        border: none;
        box-shadow: 0px 4px 8px #0000004d;
        padding: 0px;
        width: 400px;
        max-height: 600px;
    }

    dialog[open] {
        display: flex;
    }

    header {
        min-height: 48px;
        padding: 24px 24px 0px 24px;
        flex: none;
        display: flex;
        flex-direction: column;
        gap: ${En};
    }

    :host([header-hidden]) header {
        ${""}
        display: inline-block;
        height: 1px;
        width: 1px;
        position: absolute;
        margin: -1px;
        clip: rect(1px, 1px, 1px, 1px);
        clip-path: inset(50%);
        overflow: hidden;
        padding: 0;
    }

    .title {
        font: ${IM};
        color: ${R$};
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .subtitle {
        font: ${P$};
        color: ${B$};
    }

    section {
        flex: auto;
        overflow-y: auto;
        font: ${kn};
        color: ${Rt};
        display: flex;
        flex-direction: column;
        gap: ${Ve};

        ${""}
        padding: 0px 24px 24px 24px;
        margin-top: 24px;
    }

    footer {
        border-top: 2px solid rgba(${Ld}, 0.1);
        padding: 24px;
        flex: none;
        display: flex;
        justify-content: flex-end;
        gap: ${Ve};
    }

    footer.empty {
        padding: 0px;
        height: 72px;
        border-top: none;
    }

    :host([footer-hidden]) footer {
        display: none;
    }
`.withBehaviors(pt(Fe.light,S`
            dialog::backdrop {
                background: ${Od};
            }
        `),pt(Fe.dark,S`
            dialog::backdrop {
                background: ${Xg};
            }
        `),pt(Fe.color,S`
            dialog::backdrop {
                background: ${Qg};
            }
        `)),Dz=L`
    <template>
        <dialog
            ${Le("dialogElement")}
            role="dialog"
            @cancel="${(t,n)=>t.cancelHandler(n.event)}"
            aria-labelledby="header"
        >
            <header id="header">
                <div class="title">
                    <slot name="title"></slot>
                </div>
                <div class="subtitle">
                    <slot name="subtitle"></slot>
                </div>
            </header>
            <section>
                <slot></slot>
            </section>
            <footer class="${t=>t.footerIsEmpty?"empty":""}">
                <slot
                    name="footer"
                    ${at({property:"slottedFooterElements"})}
                ></slot>
            </footer>
        </dialog>
    </template>
`;class Zi extends Pe{constructor(){super(...arguments),this.preventDismiss=!1,this.headerHidden=!1,this.footerHidden=!1,this.footerIsEmpty=!0}get open(){return void 0!==this.resolveShow}show(){var n=this;return Gd(function*(){if(n.open)throw new Error("Dialog is already open");return n.dialogElement.showModal(),new Promise((e,i)=>{n.resolveShow=e})})()}close(n){if(!this.open)throw new Error("Dialog is not open");this.dialogElement.close(),this.resolveShow(n),this.resolveShow=void 0}slottedFooterElementsChanged(n,e){this.footerIsEmpty=!(null==e?void 0:e.length)}cancelHandler(n){return this.preventDismiss?n.preventDefault():(this.resolveShow(Gs),this.resolveShow=void 0),!0}}Zi.UserDismissed=Gs,ne([D({attribute:"prevent-dismiss",mode:"boolean"})],Zi.prototype,"preventDismiss",void 0),ne([D({attribute:"header-hidden",mode:"boolean"})],Zi.prototype,"headerHidden",void 0),ne([D({attribute:"footer-hidden",mode:"boolean"})],Zi.prototype,"footerHidden",void 0),ne([E],Zi.prototype,"footerIsEmpty",void 0),ne([E],Zi.prototype,"slottedFooterElements",void 0),Qe(Zi,_o);const Iz=Zi.compose({baseName:"dialog",template:Dz,styles:yz,baseClass:Zi});B.getOrCreate().withPrefix("nimble").register(Iz());const cb={left:"left",right:"right"},qM="animationend",ub="change",Cz=S`
    ${Ge("block")}

    :host {
        position: absolute;
        width: auto;
        height: 100%;
        outline: none;
        font: ${kn};
        color: ${Rt};
    }

    dialog {
        color: inherit;
        font: inherit;
        background-color: transparent;
        width: auto;
        top: 0px;
        bottom: 0px;
        border-radius: 0px;
        border-width: 0px;
        height: 100%;
        margin: 0px;
        padding: 0px;
        max-width: none;
        max-height: none;
        overflow: hidden;
    }

    @keyframes ni-private-drawer-fade-in-keyframes {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    dialog.animating::backdrop {
        animation: ni-private-drawer-fade-in-keyframes ${"0.25s"}
            ease-in;
    }

    dialog.closing::backdrop {
        animation-direction: reverse;
    }

    .dialog-contents {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        position: absolute;
        width: ${A$};
        height: 100%;
        background-color: ${ja};
    }

    @keyframes ni-private-drawer-slide-in-left-keyframes {
        0% {
            transform: translate(-100%);
        }
        100% {
            transform: translate(0%);
        }
    }

    :host([location='left']) .dialog-contents {
        border-right: ${P} solid ${pr};
        box-shadow: 3px 0px 8px ${pr};
    }

    :host([location='left']) dialog.animating .dialog-contents {
        animation: ni-private-drawer-slide-in-left-keyframes ${wM}
            ease-in;
    }

    :host([location='left']) dialog.closing .dialog-contents {
        animation-direction: reverse;
    }

    @keyframes ni-private-drawer-slide-in-right-keyframes {
        0% {
            transform: translate(100%);
        }
        100% {
            transform: translate(0%);
        }
    }

    :host([location='right']) .dialog-contents {
        right: 0px;
        border-left: ${P} solid ${pr};
        box-shadow: -3px 0px 8px ${pr};
    }

    :host([location='right']) dialog.animating .dialog-contents {
        animation: ni-private-drawer-slide-in-right-keyframes ${wM}
            ease-in;
    }

    :host([location='right']) dialog.closing .dialog-contents {
        animation-direction: reverse;
    }

    @media (prefers-reduced-motion) {
        :host([location='left']) dialog.animating .dialog-contents,
        :host([location='right']) dialog.animating .dialog-contents {
            animation-duration: 1ms;
        }
    }

    ${""}

    ::slotted(header) {
        padding: ${Ve};
        flex: none;
        font: ${IM};
    }

    ::slotted(section) {
        padding: ${Ve};
        flex: auto;
        overflow-y: auto;
    }

    ::slotted(footer) {
        padding: ${Ve};
        flex: none;
        display: flex;
        justify-content: flex-end;
        border-top: ${P} solid ${Yg};
    }
`.withBehaviors(pt(Fe.light,S`
            dialog::backdrop {
                background: ${Od};
            }
        `),pt(Fe.dark,S`
            dialog::backdrop {
                background: ${Xg};
            }
        `),pt(Fe.color,S`
            dialog::backdrop {
                background: ${Qg};
            }
        `)),wz=L`
    <dialog
        ${Le("dialog")}
        aria-label="${t=>t.ariaLabel}"
        @cancel="${(t,n)=>t.cancelHandler(n.event)}"
    >
        <div class="dialog-contents">
            <slot></slot>
        </div>
    </dialog>
`;class Xa extends Pe{constructor(){super(...arguments),this.location=cb.right,this.preventDismiss=!1,this.closing=!1,this.animationEndHandlerFunction=()=>this.animationEndHandler()}get open(){return void 0!==this.resolveShow}show(){var n=this;return Gd(function*(){if(n.open)throw new Error("Drawer is already open");return n.openDialog(),new Promise((e,i)=>{n.resolveShow=e})})()}close(n){if(!this.open||this.closing)throw new Error("Drawer is not open or already closing");this.closeReason=n,this.closeDialog()}cancelHandler(n){return n.preventDefault(),this.preventDismiss||(this.closeReason=Gs,this.closeDialog()),!0}openDialog(){this.dialog.showModal(),this.triggerAnimation()}closeDialog(){this.closing=!0,this.triggerAnimation()}triggerAnimation(){this.dialog.classList.add("animating"),this.closing&&this.dialog.classList.add("closing"),this.dialog.addEventListener(qM,this.animationEndHandlerFunction)}animationEndHandler(){this.dialog.removeEventListener(qM,this.animationEndHandlerFunction),this.dialog.classList.remove("animating"),this.closing&&(this.dialog.classList.remove("closing"),this.dialog.close(),this.closing=!1,this.resolveShow(this.closeReason),this.resolveShow=void 0)}}Xa.UserDismissed=Gs,ne([D],Xa.prototype,"location",void 0),ne([D({attribute:"prevent-dismiss",mode:"boolean"})],Xa.prototype,"preventDismiss",void 0),Qe(Xa,_o);const _z=Xa.compose({baseName:"drawer",template:wz,styles:Cz});B.getOrCreate().withPrefix("nimble").register(_z());class db extends w{constructor(){super(s9)}}_("icon-add",db),_("icon-arrow-down-right-and-arrow-up-left",class extends w{constructor(){super(l9)}}),_("icon-arrow-expander-left",class extends w{constructor(){super(a9)}}),_("icon-arrow-expander-right",class extends w{constructor(){super(xM)}}),_("icon-arrow-expander-up",class extends w{constructor(){super(FM)}}),_("icon-arrow-left-from-line",class extends w{constructor(){super(c9)}}),_("icon-arrow-partial-rotate-left",class extends w{constructor(){super(u9)}}),_("icon-arrow-right-to-line",class extends w{constructor(){super(d9)}}),_("icon-arrow-rotate-right",class extends w{constructor(){super(h9)}}),_("icon-arrow-u-rotate-left",class extends w{constructor(){super(f9)}}),_("icon-arrow-up-left-and-arrow-down-right",class extends w{constructor(){super(p9)}}),_("icon-arrows-maximize",class extends w{constructor(){super(m9)}}),_("icon-arrows-repeat",class extends w{constructor(){super(g9)}}),_("icon-bars",class extends w{constructor(){super(b9)}}),_("icon-bell",class extends w{constructor(){super(v9)}}),_("icon-bell-and-comment",class extends w{constructor(){super(y9)}}),_("icon-bell-circle",class extends w{constructor(){super(D9)}}),_("icon-bell-solid-circle",class extends w{constructor(){super(I9)}}),_("icon-block-with-ribbon",class extends w{constructor(){super(C9)}}),_("icon-book-magnifying-glass",class extends w{constructor(){super(w9)}}),_("icon-calendar",class extends w{constructor(){super(_9)}}),_("icon-chart-diagram",class extends w{constructor(){super(N9)}}),_("icon-chart-diagram-child-focus",class extends w{constructor(){super(M9)}}),_("icon-chart-diagram-parent-focus",class extends w{constructor(){super(x9)}}),_("icon-chart-diagram-parent-focus-two-child",class extends w{constructor(){super(F9)}}),_("icon-check",class extends w{constructor(){super(EM)}}),_("icon-check-dot",class extends w{constructor(){super(E9)}}),_("icon-circle",class extends w{constructor(){super(k9)}}),_("icon-circle-filled",class extends w{constructor(){super(kM)}}),_("icon-circle-broken",class extends w{constructor(){super(S9)}}),_("icon-circle-check",class extends w{constructor(){super(T9)}}),_("icon-circle-partial-broken",class extends w{constructor(){super(A9)}}),_("icon-circle-slash",class extends w{constructor(){super(R9)}}),_("icon-circle-x",class extends w{constructor(){super(P9)}}),_("icon-clipboard",class extends w{constructor(){super(B9)}}),_("icon-clock",class extends w{constructor(){super(O9)}}),_("icon-clock-cog",class extends w{constructor(){super(L9)}}),_("icon-clock-triangle",class extends w{constructor(){super(V9)}}),_("icon-clone",class extends w{constructor(){super($9)}}),_("icon-cloud",class extends w{constructor(){super(H9)}}),_("icon-cloud-upload",class extends w{constructor(){super(j9)}}),_("icon-cloud-with-arrow",class extends w{constructor(){super(z9)}}),_("icon-cog",class extends w{constructor(){super(U9)}}),_("icon-cog-database",class extends w{constructor(){super(W9)}}),_("icon-cog-database-inset",class extends w{constructor(){super(G9)}}),_("icon-cog-small-cog",class extends w{constructor(){super(q9)}}),_("icon-cog-zoomed",class extends w{constructor(){super(K9)}}),_("icon-comment",class extends w{constructor(){super(X9)}}),_("icon-computer-and-monitor",class extends w{constructor(){super(Q9)}}),_("icon-copy",class extends w{constructor(){super(Z9)}}),_("icon-copy-text",class extends w{constructor(){super(Y9)}}),_("icon-dashboard-builder",class extends w{constructor(){super(J9)}}),_("icon-dashboard-builder-legend",class extends w{constructor(){super(eH)}}),_("icon-dashboard-builder-templates",class extends w{constructor(){super(tH)}}),_("icon-dashboard-builder-tile",class extends w{constructor(){super(nH)}}),_("icon-database",class extends w{constructor(){super(iH)}}),_("icon-database-check",class extends w{constructor(){super(oH)}}),_("icon-desktop",class extends w{constructor(){super(rH)}}),_("icon-donut-chart",class extends w{constructor(){super(sH)}}),_("icon-dot-solid-dot-stroke",class extends w{constructor(){super(lH)}}),_("icon-download",class extends w{constructor(){super(aH)}}),_("icon-electronic-chip-zoomed",class extends w{constructor(){super(cH)}}),_("icon-eye",class extends w{constructor(){super(dH)}}),_("icon-fancy-a",class extends w{constructor(){super(hH)}}),_("icon-file",class extends w{constructor(){super(fH)}}),_("icon-file-drawer",class extends w{constructor(){super(pH)}}),_("icon-file-search",class extends w{constructor(){super(mH)}}),_("icon-filter",class extends w{constructor(){super(gH)}}),_("icon-floppy-disk-checkmark",class extends w{constructor(){super(bH)}}),_("icon-floppy-disk-star-arrow-right",class extends w{constructor(){super(vH)}}),_("icon-floppy-disk-three-dots",class extends w{constructor(){super(yH)}}),_("icon-folder",class extends w{constructor(){super(DH)}}),_("icon-folder-open",class extends w{constructor(){super(IH)}}),_("icon-forward-slash",class extends w{constructor(){super(SM)}}),_("icon-four-dots-square",class extends w{constructor(){super(CH)}}),_("icon-function",class extends w{constructor(){super(wH)}}),_("icon-gauge-simple",class extends w{constructor(){super(_H)}}),_("icon-grid-three-by-three",class extends w{constructor(){super(NH)}}),_("icon-grid-two-by-two",class extends w{constructor(){super(MH)}}),_("icon-hammer",class extends w{constructor(){super(xH)}}),_("icon-hashtag",class extends w{constructor(){super(FH)}}),_("icon-home",class extends w{constructor(){super(EH)}}),_("icon-hourglass",class extends w{constructor(){super(kH)}}),_("icon-indeterminant-checkbox",class extends w{constructor(){super(SH)}});class hb extends w{constructor(){super(TH)}}_("icon-info",hb),_("icon-info-circle",class extends w{constructor(){super(AH)}}),_("icon-key",class extends w{constructor(){super(RH)}}),_("icon-laptop",class extends w{constructor(){super(PH)}}),_("icon-layer-group",class extends w{constructor(){super(BH)}}),_("icon-lightning-bolt",class extends w{constructor(){super(OH)}}),_("icon-link",class extends w{constructor(){super(LH)}}),_("icon-link-cancel",class extends w{constructor(){super(VH)}}),_("icon-list",class extends w{constructor(){super($H)}}),_("icon-list-tree",class extends w{constructor(){super(HH)}}),_("icon-list-tree-database",class extends w{constructor(){super(jH)}}),_("icon-lock",class extends w{constructor(){super(zH)}}),_("icon-magnifying-glass",class extends w{constructor(){super(UH)}}),_("icon-markdown",class extends w{constructor(){super(WH)}}),_("icon-minus",class extends w{constructor(){super(TM)}});class fb extends w{constructor(){super(GH)}}_("icon-minus-wide",fb),_("icon-mobile",class extends w{constructor(){super(qH)}}),_("icon-notebook",class extends w{constructor(){super(KH)}}),_("icon-paste",class extends w{constructor(){super(XH)}}),_("icon-pencil",class extends w{constructor(){super(QH)}}),_("icon-pot-with-lid",class extends w{constructor(){super(ZH)}}),_("icon-question",class extends w{constructor(){super(YH)}}),_("icon-running-arrow",class extends w{constructor(){super(JH)}}),_("icon-server",class extends w{constructor(){super(ej)}}),_("icon-share-nodes",class extends w{constructor(){super(tj)}}),_("icon-share-square",class extends w{constructor(){super(nj)}}),_("icon-shield-check",class extends w{constructor(){super(ij)}}),_("icon-shield-xmark",class extends w{constructor(){super(oj)}}),_("icon-signal-bars",class extends w{constructor(){super(rj)}}),_("icon-sine-graph",class extends w{constructor(){super(sj)}}),_("icon-skip-arrow",class extends w{constructor(){super(lj)}}),_("icon-spinner",class extends w{constructor(){super(aj)}}),_("icon-square-check",class extends w{constructor(){super(cj)}}),_("icon-square-t",class extends w{constructor(){super(uj)}}),_("icon-t",class extends w{constructor(){super(dj)}}),_("icon-tablet",class extends w{constructor(){super(hj)}}),_("icon-tag",class extends w{constructor(){super(fj)}}),_("icon-tags",class extends w{constructor(){super(pj)}}),_("icon-target-crosshairs",class extends w{constructor(){super(mj)}}),_("icon-target-crosshairs-progress",class extends w{constructor(){super(gj)}}),_("icon-three-dots-line",class extends w{constructor(){super(bj)}}),_("icon-three-vertical-lines",class extends w{constructor(){super(vj)}}),_("icon-thumbtack",class extends w{constructor(){super(yj)}}),_("icon-tile-size",class extends w{constructor(){super(Dj)}}),_("icon-times",class extends w{constructor(){super(Ij)}}),_("icon-trash",class extends w{constructor(){super(Cj)}}),_("icon-triangle",class extends w{constructor(){super(wj)}}),_("icon-true-false-rectangle",class extends w{constructor(){super(_j)}}),_("icon-unlink",class extends w{constructor(){super(Nj)}}),_("icon-unlock",class extends w{constructor(){super(Mj)}}),_("icon-upload",class extends w{constructor(){super(xj)}}),_("icon-user",class extends w{constructor(){super(Fj)}}),_("icon-watch",class extends w{constructor(){super(Ej)}}),_("icon-waveform",class extends w{constructor(){super(kj)}}),_("icon-webvi-custom",class extends w{constructor(){super(Sj)}}),_("icon-webvi-host",class extends w{constructor(){super(Tj)}}),_("icon-window-code",class extends w{constructor(){super(Aj)}}),_("icon-window-text",class extends w{constructor(){super(Rj)}}),_("icon-wrench-hammer",class extends w{constructor(){super(Pj)}}),_("icon-xmark",class extends w{constructor(){super(Bj)}}),_("icon-xmark-check",class extends w{constructor(){super(Oj)}});const sG=S`
    ${Ge("flex")}

    :host {
        font: ${kn};
        cursor: pointer;
        justify-content: left;
        height: ${Be};
    }

    .content {
        padding: 8px 4px;
    }

    :host([aria-selected='true']) {
        box-shadow: none;
        outline: none;
        background-color: ${Dt};
    }

    :host([aria-selected='true']:hover) {
        background-color: ${Vd};
    }

    :host(:hover) {
        background-color: ${Rs};
    }

    :host(:hover):host([disabled]) {
        box-shadow: none;
        background-color: transparent;
    }

    :host(:${$e}) {
        box-shadow: 0px 0px 0px 1px ${z} inset;
        outline: 1px solid ${z};
        outline-offset: -4px;
    }

    :host(:active) {
        box-shadow: none;
        outline: none;
        background-color: ${Dt};
    }

    :host([disabled]) {
        color: ${rn};
        cursor: default;
    }

    .content[disabled] {
        box-shadow: none;
        outline: none;
    }
`,aG=class extends rb{get value(){return super.value}set value(n){super.value=`${n}`,this.$fastController.isConnected&&this.setAttribute("value",this.value)}connectedCallback(){super.connectedCallback(),this.setAttribute("value",this.value)}}.compose({baseName:"list-option",baseClass:rb,template:(t,n)=>L`
    <template
        aria-checked="${e=>e.ariaChecked}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-posinset="${e=>e.ariaPosInSet}"
        aria-selected="${e=>e.ariaSelected}"
        aria-setsize="${e=>e.ariaSetSize}"
        class="${e=>[e.checked&&"checked",e.selected&&"selected",e.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${Fn(0,n)}
        <span class="content" part="content">
            <slot ${at("content")}></slot>
        </span>
        ${xn(0,n)}
    </template>
`,styles:sG});B.getOrCreate().withPrefix("nimble").register(aG());const cG={menuitem:"menuitem",menuitemcheckbox:"menuitemcheckbox",menuitemradio:"menuitemradio"},qs=t=>{const n=t.closest("[dir]");return null!==n&&"rtl"===n.dir?Ft.rtl:Ft.ltr};let qd=(()=>{class t extends Pe{constructor(){super(...arguments),this.role="menuitem",this.hasSubmenu=!1,this.currentDirection=Ft.ltr,this.focusSubmenuOnLoad=!1,this.handleMenuItemKeyDown=e=>{if(e.defaultPrevented)return!1;switch(e.key){case Qi:case Fo:return this.invoke(),!1;case $s:return this.expandAndFocus(),!1;case Vs:if(this.expanded)return this.expanded=!1,this.focus(),!1}return!0},this.handleMenuItemClick=e=>(e.defaultPrevented||this.disabled||this.invoke(),!1),this.submenuLoaded=()=>{!this.focusSubmenuOnLoad||(this.focusSubmenuOnLoad=!1,this.hasSubmenu&&(this.submenu.focus(),this.setAttribute("tabindex","-1")))},this.handleMouseOver=e=>(this.disabled||!this.hasSubmenu||this.expanded||(this.expanded=!0),!1),this.handleMouseOut=e=>(!this.expanded||this.contains(document.activeElement)||(this.expanded=!1),!1),this.expandAndFocus=()=>{!this.hasSubmenu||(this.focusSubmenuOnLoad=!0,this.expanded=!0)},this.invoke=()=>{if(!this.disabled)switch(this.role){case"menuitemcheckbox":this.checked=!this.checked;break;case"menuitem":this.updateSubmenu(),this.hasSubmenu?this.expandAndFocus():this.$emit("change");break;case"menuitemradio":this.checked||(this.checked=!0)}},this.updateSubmenu=()=>{this.submenu=this.domChildren().find(e=>"menu"===e.getAttribute("role")),this.hasSubmenu=void 0!==this.submenu}}expandedChanged(e){if(this.$fastController.isConnected){if(void 0===this.submenu)return;!1===this.expanded?this.submenu.collapseExpandedItem():this.currentDirection=qs(this),this.$emit("expanded-change",this,{bubbles:!1})}}checkedChanged(e,i){this.$fastController.isConnected&&this.$emit("change")}connectedCallback(){super.connectedCallback(),ve.queueUpdate(()=>{this.updateSubmenu()}),this.startColumnCount||(this.startColumnCount=1),this.observer=new MutationObserver(this.updateSubmenu)}disconnectedCallback(){super.disconnectedCallback(),this.submenu=void 0,void 0!==this.observer&&(this.observer.disconnect(),this.observer=void 0)}domChildren(){return Array.from(this.children).filter(e=>!e.hasAttribute("hidden"))}}return b([D({mode:"boolean"})],t.prototype,"disabled",void 0),b([D({mode:"boolean"})],t.prototype,"expanded",void 0),b([E],t.prototype,"startColumnCount",void 0),b([D],t.prototype,"role",void 0),b([D({mode:"boolean"})],t.prototype,"checked",void 0),b([E],t.prototype,"submenuRegion",void 0),b([E],t.prototype,"hasSubmenu",void 0),b([E],t.prototype,"currentDirection",void 0),b([E],t.prototype,"submenu",void 0),t})();Qe(qd,Mn);let QM=(()=>{class t extends Pe{constructor(){super(...arguments),this.expandedItem=null,this.focusIndex=-1,this.isNestedMenu=()=>null!==this.parentElement&&Os(this.parentElement)&&"menuitem"===this.parentElement.getAttribute("role"),this.handleFocusOut=e=>{if(!this.contains(e.relatedTarget)&&void 0!==this.menuItems){this.collapseExpandedItem();const i=this.menuItems.findIndex(this.isFocusableElement);this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.menuItems[i].setAttribute("tabindex","0"),this.focusIndex=i}},this.handleItemFocus=e=>{const i=e.target;void 0!==this.menuItems&&i!==this.menuItems[this.focusIndex]&&(this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=this.menuItems.indexOf(i),i.setAttribute("tabindex","0"))},this.handleExpandedChanged=e=>{if(e.defaultPrevented||null===e.target||void 0===this.menuItems||this.menuItems.indexOf(e.target)<0)return;e.preventDefault();const i=e.target;null===this.expandedItem||i!==this.expandedItem||!1!==i.expanded?i.expanded&&(null!==this.expandedItem&&this.expandedItem!==i&&(this.expandedItem.expanded=!1),this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.expandedItem=i,this.focusIndex=this.menuItems.indexOf(i),i.setAttribute("tabindex","0")):this.expandedItem=null},this.removeItemListeners=()=>{void 0!==this.menuItems&&this.menuItems.forEach(e=>{e.removeEventListener("expanded-change",this.handleExpandedChanged),e.removeEventListener("focus",this.handleItemFocus)})},this.setItems=()=>{const e=this.domChildren();this.removeItemListeners(),this.menuItems=e;const i=this.menuItems.filter(this.isMenuItemElement);i.length&&(this.focusIndex=0);const r=i.reduce((s,l)=>{const a=function(s){const l=s.getAttribute("role"),a=s.querySelector("[slot=start]");return"menuitem"!==l&&null===a||"menuitem"===l&&null!==a?1:"menuitem"!==l&&null!==a?2:0}(l);return s>a?s:a},0);i.forEach((s,l)=>{s.setAttribute("tabindex",0===l?"0":"-1"),s.addEventListener("expanded-change",this.handleExpandedChanged),s.addEventListener("focus",this.handleItemFocus),s instanceof qd&&(s.startColumnCount=r)})},this.changeHandler=e=>{if(void 0===this.menuItems)return;const i=e.target,o=this.menuItems.indexOf(i);if(-1!==o&&"menuitemradio"===i.role&&!0===i.checked){for(let s=o-1;s>=0;--s){const l=this.menuItems[s],a=l.getAttribute("role");if("menuitemradio"===a&&(l.checked=!1),"separator"===a)break}const r=this.menuItems.length-1;for(let s=o+1;s<=r;++s){const l=this.menuItems[s],a=l.getAttribute("role");if("menuitemradio"===a&&(l.checked=!1),"separator"===a)break}}},this.isMenuItemElement=e=>Os(e)&&t.focusableElementRoles.hasOwnProperty(e.getAttribute("role")),this.isFocusableElement=e=>this.isMenuItemElement(e)}itemsChanged(e,i){this.$fastController.isConnected&&void 0!==this.menuItems&&this.setItems()}connectedCallback(){super.connectedCallback(),ve.queueUpdate(()=>{this.setItems()}),this.addEventListener("change",this.changeHandler)}disconnectedCallback(){super.disconnectedCallback(),this.removeItemListeners(),this.menuItems=void 0,this.removeEventListener("change",this.changeHandler)}focus(){this.setFocus(0,1)}collapseExpandedItem(){null!==this.expandedItem&&(this.expandedItem.expanded=!1,this.expandedItem=null)}handleMenuKeyDown(e){if(!e.defaultPrevented&&void 0!==this.menuItems)switch(e.key){case Wn:return void this.setFocus(this.focusIndex+1,1);case Gn:return void this.setFocus(this.focusIndex-1,-1);case js:return void this.setFocus(this.menuItems.length-1,-1);case Hs:return void this.setFocus(0,1);default:return!0}}domChildren(){return Array.from(this.children).filter(e=>!e.hasAttribute("hidden"))}setFocus(e,i){if(void 0!==this.menuItems)for(;e>=0&&e<this.menuItems.length;){const o=this.menuItems[e];if(this.isFocusableElement(o)){this.focusIndex>-1&&this.menuItems.length>=this.focusIndex-1&&this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=e,o.setAttribute("tabindex","0"),o.focus();break}e+=i}}}return t.focusableElementRoles=cG,b([E],t.prototype,"items",void 0),t})();const dG=S`
    ${Ge("grid")}

    :host {
        background: ${ja};
        border: ${P} solid ${Yg};
        margin: 0;
        padding: 4px;
        min-width: 168px;
        width: max-content;
        box-shadow: 0px 2px 3px ${pr};
    }
    :host([slot='submenu']) {
        margin: 0 calc(${En} * 2);
    }
    ::slotted(*) {
        padding-left: 8px;
        padding-right: 8px;
    }
    ::slotted(hr) {
        box-sizing: content-box;
        height: 2px;
        margin: ${En};
        border: none;
        background: ${Ps};
        opacity: 0.1;
    }
    ::slotted(header) {
        display: flex;
        font: ${j$};
        color: ${z$};
        text-transform: ${q$};
        padding-top: ${En};
        padding-bottom: ${En};
    }
`,fG=class extends QM{}.compose({baseName:"menu",baseClass:QM,template:(t,n)=>L`
    <template
        slot="${e=>e.slot?e.slot:e.isNestedMenu()?"submenu":void 0}"
        role="menu"
        @keydown="${(e,i)=>e.handleMenuKeyDown(i.event)}"
        @focusout="${(e,i)=>e.handleFocusOut(i.event)}"
    >
        <slot ${at("items")}></slot>
    </template>
`,styles:dG});B.getOrCreate().withPrefix("nimble").register(fG());const pG=S`
    ${Ge("inline-block")}

    :host {
        height: ${Be};
    }

    [part='button'] {
        width: 100%;
        height: 100%;
    }

    slot[name='menu']::slotted(*) {
        margin-top: ${En};
        margin-bottom: ${En};
    }
`;class Ee extends Pe{constructor(){super(...arguments),this.anchor="",this.viewport="",this.horizontalPositioningMode="uncontrolled",this.horizontalDefaultPosition="unset",this.horizontalViewportLock=!1,this.horizontalInset=!1,this.horizontalScaling="content",this.verticalPositioningMode="uncontrolled",this.verticalDefaultPosition="unset",this.verticalViewportLock=!1,this.verticalInset=!1,this.verticalScaling="content",this.fixedPlacement=!1,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.initialLayoutComplete=!1,this.resizeDetector=null,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.pendingPositioningUpdate=!1,this.pendingReset=!1,this.currentDirection=Ft.ltr,this.regionVisible=!1,this.forceUpdate=!1,this.updateThreshold=.5,this.update=()=>{this.pendingPositioningUpdate||this.requestPositionUpdates()},this.startObservers=()=>{this.stopObservers(),null!==this.anchorElement&&(this.requestPositionUpdates(),null!==this.resizeDetector&&(this.resizeDetector.observe(this.anchorElement),this.resizeDetector.observe(this)))},this.requestPositionUpdates=()=>{null===this.anchorElement||this.pendingPositioningUpdate||(Ee.intersectionService.requestPosition(this,this.handleIntersection),Ee.intersectionService.requestPosition(this.anchorElement,this.handleIntersection),null!==this.viewportElement&&Ee.intersectionService.requestPosition(this.viewportElement,this.handleIntersection),this.pendingPositioningUpdate=!0)},this.stopObservers=()=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,Ee.intersectionService.cancelRequestPosition(this,this.handleIntersection),null!==this.anchorElement&&Ee.intersectionService.cancelRequestPosition(this.anchorElement,this.handleIntersection),null!==this.viewportElement&&Ee.intersectionService.cancelRequestPosition(this.viewportElement,this.handleIntersection)),null!==this.resizeDetector&&this.resizeDetector.disconnect()},this.getViewport=()=>"string"!=typeof this.viewport||""===this.viewport?document.documentElement:document.getElementById(this.viewport),this.getAnchor=()=>document.getElementById(this.anchor),this.handleIntersection=n=>{!this.pendingPositioningUpdate||(this.pendingPositioningUpdate=!1,this.applyIntersectionEntries(n)&&this.updateLayout())},this.applyIntersectionEntries=n=>{const e=n.find(r=>r.target===this),i=n.find(r=>r.target===this.anchorElement),o=n.find(r=>r.target===this.viewportElement);return void 0!==e&&void 0!==o&&void 0!==i&&!!(!this.regionVisible||this.forceUpdate||void 0===this.regionRect||void 0===this.anchorRect||void 0===this.viewportRect||this.isRectDifferent(this.anchorRect,i.boundingClientRect)||this.isRectDifferent(this.viewportRect,o.boundingClientRect)||this.isRectDifferent(this.regionRect,e.boundingClientRect))&&(this.regionRect=e.boundingClientRect,this.anchorRect=i.boundingClientRect,this.viewportRect=this.viewportElement===document.documentElement?new DOMRectReadOnly(o.boundingClientRect.x+document.documentElement.scrollLeft,o.boundingClientRect.y+document.documentElement.scrollTop,o.boundingClientRect.width,o.boundingClientRect.height):o.boundingClientRect,this.updateRegionOffset(),this.forceUpdate=!1,!0)},this.updateRegionOffset=()=>{this.anchorRect&&this.regionRect&&(this.baseHorizontalOffset=this.baseHorizontalOffset+(this.anchorRect.left-this.regionRect.left)+(this.translateX-this.baseHorizontalOffset),this.baseVerticalOffset=this.baseVerticalOffset+(this.anchorRect.top-this.regionRect.top)+(this.translateY-this.baseVerticalOffset))},this.isRectDifferent=(n,e)=>Math.abs(n.top-e.top)>this.updateThreshold||Math.abs(n.right-e.right)>this.updateThreshold||Math.abs(n.bottom-e.bottom)>this.updateThreshold||Math.abs(n.left-e.left)>this.updateThreshold,this.handleResize=n=>{this.update()},this.reset=()=>{!this.pendingReset||(this.pendingReset=!1,null===this.anchorElement&&(this.anchorElement=this.getAnchor()),null===this.viewportElement&&(this.viewportElement=this.getViewport()),this.currentDirection=qs(this),this.startObservers())},this.updateLayout=()=>{let n,e;if("uncontrolled"!==this.horizontalPositioningMode){const r=this.getPositioningOptions(this.horizontalInset);if("center"===this.horizontalDefaultPosition)e="center";else if("unset"!==this.horizontalDefaultPosition){let h=this.horizontalDefaultPosition;if("start"===h||"end"===h){const f=qs(this);if(f!==this.currentDirection)return this.currentDirection=f,void this.initialize();h=this.currentDirection===Ft.ltr?"start"===h?"left":"right":"start"===h?"right":"left"}switch(h){case"left":e=this.horizontalInset?"insetStart":"start";break;case"right":e=this.horizontalInset?"insetEnd":"end"}}const s=void 0!==this.horizontalThreshold?this.horizontalThreshold:void 0!==this.regionRect?this.regionRect.width:0,l=void 0!==this.anchorRect?this.anchorRect.left:0,a=void 0!==this.anchorRect?this.anchorRect.right:0,c=void 0!==this.anchorRect?this.anchorRect.width:0,u=void 0!==this.viewportRect?this.viewportRect.left:0,d=void 0!==this.viewportRect?this.viewportRect.right:0;(void 0===e||"locktodefault"!==this.horizontalPositioningMode&&this.getAvailableSpace(e,l,a,c,u,d)<s)&&(e=this.getAvailableSpace(r[0],l,a,c,u,d)>this.getAvailableSpace(r[1],l,a,c,u,d)?r[0]:r[1])}if("uncontrolled"!==this.verticalPositioningMode){const r=this.getPositioningOptions(this.verticalInset);if("center"===this.verticalDefaultPosition)n="center";else if("unset"!==this.verticalDefaultPosition)switch(this.verticalDefaultPosition){case"top":n=this.verticalInset?"insetStart":"start";break;case"bottom":n=this.verticalInset?"insetEnd":"end"}const s=void 0!==this.verticalThreshold?this.verticalThreshold:void 0!==this.regionRect?this.regionRect.height:0,l=void 0!==this.anchorRect?this.anchorRect.top:0,a=void 0!==this.anchorRect?this.anchorRect.bottom:0,c=void 0!==this.anchorRect?this.anchorRect.height:0,u=void 0!==this.viewportRect?this.viewportRect.top:0,d=void 0!==this.viewportRect?this.viewportRect.bottom:0;(void 0===n||"locktodefault"!==this.verticalPositioningMode&&this.getAvailableSpace(n,l,a,c,u,d)<s)&&(n=this.getAvailableSpace(r[0],l,a,c,u,d)>this.getAvailableSpace(r[1],l,a,c,u,d)?r[0]:r[1])}const i=this.getNextRegionDimension(e,n),o=this.horizontalPosition!==e||this.verticalPosition!==n;if(this.setHorizontalPosition(e,i),this.setVerticalPosition(n,i),this.updateRegionStyle(),!this.initialLayoutComplete)return this.initialLayoutComplete=!0,void this.requestPositionUpdates();this.regionVisible||(this.regionVisible=!0,this.style.removeProperty("pointer-events"),this.style.removeProperty("opacity"),this.classList.toggle("loaded",!0),this.$emit("loaded",this,{bubbles:!1})),this.updatePositionClasses(),o&&this.$emit("positionchange",this,{bubbles:!1})},this.updateRegionStyle=()=>{this.style.width=this.regionWidth,this.style.height=this.regionHeight,this.style.transform=`translate(${this.translateX}px, ${this.translateY}px)`},this.updatePositionClasses=()=>{this.classList.toggle("top","start"===this.verticalPosition),this.classList.toggle("bottom","end"===this.verticalPosition),this.classList.toggle("inset-top","insetStart"===this.verticalPosition),this.classList.toggle("inset-bottom","insetEnd"===this.verticalPosition),this.classList.toggle("vertical-center","center"===this.verticalPosition),this.classList.toggle("left","start"===this.horizontalPosition),this.classList.toggle("right","end"===this.horizontalPosition),this.classList.toggle("inset-left","insetStart"===this.horizontalPosition),this.classList.toggle("inset-right","insetEnd"===this.horizontalPosition),this.classList.toggle("horizontal-center","center"===this.horizontalPosition)},this.setHorizontalPosition=(n,e)=>{if(void 0===n||void 0===this.regionRect||void 0===this.anchorRect||void 0===this.viewportRect)return;let i=0;switch(this.horizontalScaling){case"anchor":case"fill":i=this.horizontalViewportLock?this.viewportRect.width:e.width,this.regionWidth=`${i}px`;break;case"content":i=this.regionRect.width,this.regionWidth="unset"}let o=0;switch(n){case"start":this.translateX=this.baseHorizontalOffset-i,this.horizontalViewportLock&&this.anchorRect.left>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.right));break;case"insetStart":this.translateX=this.baseHorizontalOffset-i+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.right));break;case"insetEnd":this.translateX=this.baseHorizontalOffset,this.horizontalViewportLock&&this.anchorRect.left<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.left));break;case"end":this.translateX=this.baseHorizontalOffset+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.left));break;case"center":if(o=(this.anchorRect.width-i)/2,this.translateX=this.baseHorizontalOffset+o,this.horizontalViewportLock){const r=this.anchorRect.left+o,s=this.anchorRect.right-o;r<this.viewportRect.left&&!(s>this.viewportRect.right)?this.translateX=this.translateX-(r-this.viewportRect.left):s>this.viewportRect.right&&!(r<this.viewportRect.left)&&(this.translateX=this.translateX-(s-this.viewportRect.right))}}this.horizontalPosition=n},this.setVerticalPosition=(n,e)=>{if(void 0===n||void 0===this.regionRect||void 0===this.anchorRect||void 0===this.viewportRect)return;let i=0;switch(this.verticalScaling){case"anchor":case"fill":i=this.verticalViewportLock?this.viewportRect.height:e.height,this.regionHeight=`${i}px`;break;case"content":i=this.regionRect.height,this.regionHeight="unset"}let o=0;switch(n){case"start":this.translateY=this.baseVerticalOffset-i,this.verticalViewportLock&&this.anchorRect.top>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.bottom));break;case"insetStart":this.translateY=this.baseVerticalOffset-i+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.bottom));break;case"insetEnd":this.translateY=this.baseVerticalOffset,this.verticalViewportLock&&this.anchorRect.top<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.top));break;case"end":this.translateY=this.baseVerticalOffset+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.top));break;case"center":if(o=(this.anchorRect.height-i)/2,this.translateY=this.baseVerticalOffset+o,this.verticalViewportLock){const r=this.anchorRect.top+o,s=this.anchorRect.bottom-o;r<this.viewportRect.top&&!(s>this.viewportRect.bottom)?this.translateY=this.translateY-(r-this.viewportRect.top):s>this.viewportRect.bottom&&!(r<this.viewportRect.top)&&(this.translateY=this.translateY-(s-this.viewportRect.bottom))}}this.verticalPosition=n},this.getPositioningOptions=n=>n?["insetStart","insetEnd"]:["start","end"],this.getAvailableSpace=(n,e,i,o,r,s)=>{const l=e-r,a=s-(e+o);switch(n){case"start":return l;case"insetStart":return l+o;case"insetEnd":return a+o;case"end":return a;case"center":return 2*Math.min(l,a)+o}},this.getNextRegionDimension=(n,e)=>{const i={height:void 0!==this.regionRect?this.regionRect.height:0,width:void 0!==this.regionRect?this.regionRect.width:0};return void 0!==n&&"fill"===this.horizontalScaling?i.width=this.getAvailableSpace(n,void 0!==this.anchorRect?this.anchorRect.left:0,void 0!==this.anchorRect?this.anchorRect.right:0,void 0!==this.anchorRect?this.anchorRect.width:0,void 0!==this.viewportRect?this.viewportRect.left:0,void 0!==this.viewportRect?this.viewportRect.right:0):"anchor"===this.horizontalScaling&&(i.width=void 0!==this.anchorRect?this.anchorRect.width:0),void 0!==e&&"fill"===this.verticalScaling?i.height=this.getAvailableSpace(e,void 0!==this.anchorRect?this.anchorRect.top:0,void 0!==this.anchorRect?this.anchorRect.bottom:0,void 0!==this.anchorRect?this.anchorRect.height:0,void 0!==this.viewportRect?this.viewportRect.top:0,void 0!==this.viewportRect?this.viewportRect.bottom:0):"anchor"===this.verticalScaling&&(i.height=void 0!==this.anchorRect?this.anchorRect.height:0),i},this.startAutoUpdateEventListeners=()=>{window.addEventListener("resize",this.update,{passive:!0}),window.addEventListener("scroll",this.update,{passive:!0,capture:!0}),null!==this.resizeDetector&&null!==this.viewportElement&&this.resizeDetector.observe(this.viewportElement)},this.stopAutoUpdateEventListeners=()=>{window.removeEventListener("resize",this.update),window.removeEventListener("scroll",this.update),null!==this.resizeDetector&&null!==this.viewportElement&&this.resizeDetector.unobserve(this.viewportElement)}}anchorChanged(){this.initialLayoutComplete&&(this.anchorElement=this.getAnchor())}viewportChanged(){this.initialLayoutComplete&&(this.viewportElement=this.getViewport())}horizontalPositioningModeChanged(){this.requestReset()}horizontalDefaultPositionChanged(){this.updateForAttributeChange()}horizontalViewportLockChanged(){this.updateForAttributeChange()}horizontalInsetChanged(){this.updateForAttributeChange()}horizontalThresholdChanged(){this.updateForAttributeChange()}horizontalScalingChanged(){this.updateForAttributeChange()}verticalPositioningModeChanged(){this.requestReset()}verticalDefaultPositionChanged(){this.updateForAttributeChange()}verticalViewportLockChanged(){this.updateForAttributeChange()}verticalInsetChanged(){this.updateForAttributeChange()}verticalThresholdChanged(){this.updateForAttributeChange()}verticalScalingChanged(){this.updateForAttributeChange()}fixedPlacementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}autoUpdateModeChanged(n,e){this.$fastController.isConnected&&this.initialLayoutComplete&&("auto"===n&&this.stopAutoUpdateEventListeners(),"auto"===e&&this.startAutoUpdateEventListeners())}anchorElementChanged(){this.requestReset()}viewportElementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}connectedCallback(){super.connectedCallback(),"auto"===this.autoUpdateMode&&this.startAutoUpdateEventListeners(),this.initialize()}disconnectedCallback(){super.disconnectedCallback(),"auto"===this.autoUpdateMode&&this.stopAutoUpdateEventListeners(),this.stopObservers(),this.disconnectResizeDetector()}adoptedCallback(){this.initialize()}disconnectResizeDetector(){null!==this.resizeDetector&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.handleResize)}updateForAttributeChange(){this.$fastController.isConnected&&this.initialLayoutComplete&&(this.forceUpdate=!0,this.update())}initialize(){this.initializeResizeDetector(),null===this.anchorElement&&(this.anchorElement=this.getAnchor()),this.requestReset()}requestReset(){this.$fastController.isConnected&&!1===this.pendingReset&&(this.setInitialState(),ve.queueUpdate(()=>this.reset()),this.pendingReset=!0)}setInitialState(){this.initialLayoutComplete=!1,this.regionVisible=!1,this.translateX=0,this.translateY=0,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.viewportRect=void 0,this.regionRect=void 0,this.anchorRect=void 0,this.verticalPosition=void 0,this.horizontalPosition=void 0,this.style.opacity="0",this.style.pointerEvents="none",this.forceUpdate=!1,this.style.position=this.fixedPlacement?"fixed":"absolute",this.updatePositionClasses(),this.updateRegionStyle()}}Ee.intersectionService=new class{constructor(){this.intersectionDetector=null,this.observedElements=new Map,this.requestPosition=(n,e)=>{var i;if(null!==this.intersectionDetector){if(this.observedElements.has(n))return void(null===(i=this.observedElements.get(n))||void 0===i||i.push(e));this.observedElements.set(n,[e]),this.intersectionDetector.observe(n)}},this.cancelRequestPosition=(n,e)=>{const i=this.observedElements.get(n);if(void 0!==i){const o=i.indexOf(e);-1!==o&&i.splice(o,1)}},this.initializeIntersectionDetector=()=>{!qi.IntersectionObserver||(this.intersectionDetector=new IntersectionObserver(this.handleIntersection,{root:null,rootMargin:"0px",threshold:[0,1]}))},this.handleIntersection=n=>{if(null===this.intersectionDetector)return;const e=[],i=[];n.forEach(o=>{var r;null===(r=this.intersectionDetector)||void 0===r||r.unobserve(o.target);const s=this.observedElements.get(o.target);void 0!==s&&(s.forEach(l=>{let a=e.indexOf(l);-1===a&&(a=e.length,e.push(l),i.push([])),i[a].push(o)}),this.observedElements.delete(o.target))}),e.forEach((o,r)=>{o(i[r])})},this.initializeIntersectionDetector()}},b([D],Ee.prototype,"anchor",void 0),b([D],Ee.prototype,"viewport",void 0),b([D({attribute:"horizontal-positioning-mode"})],Ee.prototype,"horizontalPositioningMode",void 0),b([D({attribute:"horizontal-default-position"})],Ee.prototype,"horizontalDefaultPosition",void 0),b([D({attribute:"horizontal-viewport-lock",mode:"boolean"})],Ee.prototype,"horizontalViewportLock",void 0),b([D({attribute:"horizontal-inset",mode:"boolean"})],Ee.prototype,"horizontalInset",void 0),b([D({attribute:"horizontal-threshold"})],Ee.prototype,"horizontalThreshold",void 0),b([D({attribute:"horizontal-scaling"})],Ee.prototype,"horizontalScaling",void 0),b([D({attribute:"vertical-positioning-mode"})],Ee.prototype,"verticalPositioningMode",void 0),b([D({attribute:"vertical-default-position"})],Ee.prototype,"verticalDefaultPosition",void 0),b([D({attribute:"vertical-viewport-lock",mode:"boolean"})],Ee.prototype,"verticalViewportLock",void 0),b([D({attribute:"vertical-inset",mode:"boolean"})],Ee.prototype,"verticalInset",void 0),b([D({attribute:"vertical-threshold"})],Ee.prototype,"verticalThreshold",void 0),b([D({attribute:"vertical-scaling"})],Ee.prototype,"verticalScaling",void 0),b([D({attribute:"fixed-placement",mode:"boolean"})],Ee.prototype,"fixedPlacement",void 0),b([D({attribute:"auto-update-mode"})],Ee.prototype,"autoUpdateMode",void 0),b([E],Ee.prototype,"anchorElement",void 0),b([E],Ee.prototype,"viewportElement",void 0),b([E],Ee.prototype,"initialLayoutComplete",void 0);const bG=S`
    :host {
        contain: layout;
        display: block;
        z-index: 1000;
    }
`;class Qa extends Ee{}const vG=Qa.compose({baseName:"anchored-region",baseClass:Ee,template:(t,n)=>L`
    <template class="${e=>e.initialLayoutComplete?"loaded":""}">
        ${sn(e=>e.initialLayoutComplete,L`
                <slot></slot>
            `)}
    </template>
`,styles:bG});B.getOrCreate().withPrefix("nimble").register(vG());const yG=L`
    <template
        ?open="${t=>t.open}"
        @focusout="${(t,n)=>t.focusoutHandler(n.event)}"
    >
        <${B.tagFor(ko)}
            part="button"
            appearance="${t=>t.appearance}"
            ?content-hidden="${t=>t.contentHidden}"
            ?checked="${t=>t.open}"
            ?disabled="${t=>t.disabled}"
            aria-haspopup="true"
            aria-expanded="${t=>t.open}"
            @change="${(t,n)=>t.toggleButtonCheckedChangeHandler(n.event)}"
            @keydown="${(t,n)=>t.toggleButtonKeyDownHandler(n.event)}"
            ${Le("toggleButton")}
            exportparts="start,end"
        >
            ${""}
            <slot slot="start" name="start"></slot>
            <slot></slot>
            <slot slot="end" name="end"></slot>
        </${B.tagFor(ko)}>
        ${sn(t=>t.open,L`
            <${B.tagFor(Qa)}
                fixed-placement="true"
                auto-update-mode="auto"
                horizontal-inset="true"
                horizontal-positioning-mode="dynamic"
                vertical-positioning-mode="${t=>"auto"===t.position?"dynamic":"locktodefault"}"
                vertical-default-position="${t=>"above"===t.position?"top":"bottom"}"
                @loaded="${t=>t.regionLoadedHandler()}"
                @keydown="${(t,n)=>t.menuKeyDownHandler(n.event)}"
                ${Le("region")}
            >
                <span part="menu">
                    <slot name="menu" ${at({property:"slottedMenus",filter:ks("[role=menu]")})}></slot>
                </span>
            </${B.tagFor(Qa)}>
        `)}
    </template>
`;class Yi extends Pe{constructor(){super(...arguments),this.appearance="outline",this.disabled=!1,this.contentHidden=!1,this.open=!1,this.position="auto",this.focusLastItemWhenOpened=!1,this.menuChangeHandler=()=>{this.open=!1,this.toggleButton.focus()}}disconnectedCallback(){super.disconnectedCallback(),this.region&&this.region.removeEventListener(ub,this.menuChangeHandler)}toggleButtonChanged(n,e){this.region&&this.toggleButton&&(this.region.anchorElement=this.toggleButton)}regionChanged(n,e){n&&n.removeEventListener(ub,this.menuChangeHandler),this.region&&(this.toggleButton&&(this.region.anchorElement=this.toggleButton),this.region.addEventListener(ub,this.menuChangeHandler,{capture:!0}))}openChanged(n,e){this.toggleButton&&(this.toggleButton.checked=this.open),this.open||this.$emit("open-change")}regionLoadedHandler(){this.focusLastItemWhenOpened?(this.focusLastMenuItem(),this.focusLastItemWhenOpened=!1):this.focusMenu(),this.$emit("open-change")}focusoutHandler(n){return!this.open||(!!this.contains(n.relatedTarget)||(this.open=!1,!1))}toggleButtonCheckedChangeHandler(n){return this.open=this.toggleButton.checked,n.stopPropagation(),!1}toggleButtonKeyDownHandler(n){switch(n.key){case Gn:return this.focusLastItemWhenOpened=!0,this.open=!0,!1;case Wn:return this.open=!0,!1;default:return!0}}menuKeyDownHandler(n){switch(n.key){case Ga:return this.open=!1,this.toggleButton.focus(),!1;default:return!0}}get menu(){var n;return(null==(n=this.slottedMenus)?void 0:n.length)?this.slottedMenus[0]:void 0}focusMenu(){var n;null==(n=this.menu)||n.focus()}focusLastMenuItem(){var e;const n=null==(e=this.menu)?void 0:e.querySelectorAll("[role=menuitem]");(null==n?void 0:n.length)&&n[n.length-1].focus()}}ne([D],Yi.prototype,"appearance",void 0),ne([D({mode:"boolean"})],Yi.prototype,"disabled",void 0),ne([D({attribute:"content-hidden",mode:"boolean"})],Yi.prototype,"contentHidden",void 0),ne([D({mode:"boolean"})],Yi.prototype,"open",void 0),ne([D({attribute:"position"})],Yi.prototype,"position",void 0),ne([E],Yi.prototype,"toggleButton",void 0),ne([E],Yi.prototype,"region",void 0),ne([E],Yi.prototype,"slottedMenus",void 0);const IG=Yi.compose({baseName:"menu-button",template:yG,styles:pG,shadowOptions:{delegatesFocus:!0}});B.getOrCreate().withPrefix("nimble").register(IG());const wG=S`
    ${Ge("grid")}

    :host {
        contain: layout;
        overflow: visible;
        box-sizing: border-box;
        height: ${Be};
        grid-template-columns: 1fr;
        column-gap: 8px;
        grid-template-rows: 1fr;
        justify-items: start;
        align-items: center;
        padding-left: 8px;
        padding-right: 8px;
        margin: 0 0;
        white-space: nowrap;
        color: ${Rt};
        fill: currentcolor;
        cursor: pointer;
        font: ${kn};
    }
    :host(${$e}) {
        outline: 2px solid ${z};
        outline-offset: -2px;
    }
    :host([expanded]) {
        background: ${Rs};
    }
    :host(:hover) {
        background: ${Rs};
    }
    :host(:active:not([expanded])) {
        background: ${Dt};
    }
    :host([disabled]) {
        color: ${rn};
        fill: currentcolor;
        cursor: default;
    }
    :host([disabled]:hover) {
        background: transparent;
    }
    :host(.indent-0[aria-haspopup='menu']) {
        grid-template-columns: 1fr ${he};
    }
    :host(.indent-1) {
        grid-template-columns: ${he} 1fr;
    }
    :host(.indent-1[aria-haspopup='menu']) {
        grid-template-columns: ${he} 1fr ${he};
    }
    [part='start'] {
        display: contents;
    }
    slot[name='start']::slotted(*) {
        fill: currentcolor;
        width: ${he};
        height: ${he};
    }
    :host(.indent-1) .start {
        grid-column: 1;
    }
    :host(.indent-1) .content {
        grid-column: 2;
    }
    .expand-collapse-glyph-container {
        grid-row: 1;
        fill: currentcolor;
        width: ${he};
        height: ${he};
    }
    :host(.indent-0) .expand-collapse-glyph-container {
        grid-column: 2;
    }
    :host(.indent-1) .expand-collapse-glyph-container {
        grid-column: 3;
    }
`,NG=class extends qd{}.compose({baseName:"menu-item",baseClass:qd,template:(t,n)=>L`
    <template
        role="${e=>e.role}"
        aria-haspopup="${e=>e.hasSubmenu?"menu":void 0}"
        aria-checked="${e=>"menuitem"!==e.role?e.checked:void 0}"
        aria-disabled="${e=>e.disabled}"
        aria-expanded="${e=>e.expanded}"
        @keydown="${(e,i)=>e.handleMenuItemKeyDown(i.event)}"
        @click="${(e,i)=>e.handleMenuItemClick(i.event)}"
        @mouseover="${(e,i)=>e.handleMouseOver(i.event)}"
        @mouseout="${(e,i)=>e.handleMouseOut(i.event)}"
        class="${e=>e.disabled?"disabled":""} ${e=>e.expanded?"expanded":""} ${e=>`indent-${e.startColumnCount}`}"
    >
            ${sn(e=>"menuitemcheckbox"===e.role,L`
                    <div part="input-container" class="input-container">
                        <span part="checkbox" class="checkbox">
                            <slot name="checkbox-indicator">
                                ${n.checkboxIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
            ${sn(e=>"menuitemradio"===e.role,L`
                    <div part="input-container" class="input-container">
                        <span part="radio" class="radio">
                            <slot name="radio-indicator">
                                ${n.radioIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
        </div>
        ${Fn(0,n)}
        <span class="content" part="content">
            <slot></slot>
        </span>
        ${xn(0,n)}
        ${sn(e=>e.hasSubmenu,L`
                <div
                    part="expand-collapse-glyph-container"
                    class="expand-collapse-glyph-container"
                >
                    <span part="expand-collapse" class="expand-collapse">
                        <slot name="expand-collapse-indicator">
                            ${n.expandCollapseGlyph||""}
                        </slot>
                    </span>
                </div>
            `)}
        ${sn(e=>e.expanded,L`
                <${t.tagFor(Ee)}
                    :anchorElement="${e=>e}"
                    vertical-positioning-mode="dynamic"
                    vertical-default-position="bottom"
                    vertical-inset="true"
                    horizontal-positioning-mode="dynamic"
                    horizontal-default-position="end"
                    class="submenu-region"
                    dir="${e=>e.currentDirection}"
                    @loaded="${e=>e.submenuLoaded()}"
                    ${Le("submenuRegion")}
                    part="submenu-region"
                >
                    <slot name="submenu"></slot>
                </${t.tagFor(Ee)}>
            `)}
    </template>
`,styles:wG,expandCollapseGlyph:xM.data});B.getOrCreate().withPrefix("nimble").register(NG());class MG extends Pe{}class xG extends(mr(MG)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let pb=(()=>{class t extends xG{constructor(){super(...arguments),this.type="text"}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&ve.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}}return b([D({attribute:"readonly",mode:"boolean"})],t.prototype,"readOnly",void 0),b([D({mode:"boolean"})],t.prototype,"autofocus",void 0),b([D],t.prototype,"placeholder",void 0),b([D],t.prototype,"type",void 0),b([D],t.prototype,"list",void 0),b([D({converter:hn})],t.prototype,"maxlength",void 0),b([D({converter:hn})],t.prototype,"minlength",void 0),b([D],t.prototype,"pattern",void 0),b([D({converter:hn})],t.prototype,"size",void 0),b([D({mode:"boolean"})],t.prototype,"spellcheck",void 0),b([E],t.prototype,"defaultSlottedNodes",void 0),t})();class Xd{}Qe(Xd,_o),Qe(pb,Mn,Xd);class EG extends Pe{}class kG extends(mr(EG)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let mb=(()=>{class t extends kG{constructor(){super(...arguments),this.hideStep=!1,this.step=1,this.isUserInput=!1}maxChanged(e,i){var o;this.max=Math.max(i,null!==(o=this.min)&&void 0!==o?o:i);const r=Math.min(this.min,this.max);void 0!==this.min&&this.min!==r&&(this.min=r),this.value=this.getValidValue(this.value)}minChanged(e,i){var o;this.min=Math.min(i,null!==(o=this.max)&&void 0!==o?o:i);const r=Math.max(this.min,this.max);void 0!==this.max&&this.max!==r&&(this.max=r),this.value=this.getValidValue(this.value)}get valueAsNumber(){return parseFloat(super.value)}set valueAsNumber(e){this.value=e.toString()}valueChanged(e,i){this.value=this.getValidValue(i),i===this.value&&(this.control&&!this.isUserInput&&(this.control.value=this.value),super.valueChanged(e,this.value),void 0!==e&&!this.isUserInput&&(this.$emit("input"),this.$emit("change")),this.isUserInput=!1)}getValidValue(e){var i,o;let r=parseFloat(parseFloat(e).toPrecision(12));return isNaN(r)?r="":(r=Math.min(r,null!==(i=this.max)&&void 0!==i?i:r),r=Math.max(r,null!==(o=this.min)&&void 0!==o?o:r).toString()),r}stepUp(){const e=parseFloat(this.value),i=isNaN(e)?this.min>0?this.min:this.max<0?this.max:this.min?0:this.step:e+this.step;this.value=i.toString()}stepDown(){const e=parseFloat(this.value),i=isNaN(e)?this.min>0?this.min:this.max<0?this.max:this.min?0:0-this.step:e-this.step;this.value=i.toString()}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","number"),this.validate(),this.control.value=this.value,this.autofocus&&ve.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.control.value=this.control.value.replace(/[^0-9\-+e.]/g,""),this.isUserInput=!0,this.value=this.control.value}handleChange(){this.$emit("change")}handleKeyDown(e){switch(e.key){case Gn:return this.stepUp(),!1;case Wn:return this.stepDown(),!1}return!0}handleBlur(){this.control.value=this.value}}return b([D({attribute:"readonly",mode:"boolean"})],t.prototype,"readOnly",void 0),b([D({mode:"boolean"})],t.prototype,"autofocus",void 0),b([D({attribute:"hide-step",mode:"boolean"})],t.prototype,"hideStep",void 0),b([D],t.prototype,"placeholder",void 0),b([D],t.prototype,"list",void 0),b([D({converter:hn})],t.prototype,"maxlength",void 0),b([D({converter:hn})],t.prototype,"minlength",void 0),b([D({converter:hn})],t.prototype,"size",void 0),b([D({converter:hn})],t.prototype,"step",void 0),b([D({converter:hn})],t.prototype,"max",void 0),b([D({converter:hn})],t.prototype,"min",void 0),b([E],t.prototype,"defaultSlottedNodes",void 0),t})();Qe(mb,Mn,Xd);const TG=S`
    ${Ge("inline-block")}
    ${Wd}

    :host {
        font: ${kn};
        outline: none;
        user-select: none;
        color: ${Rt};
        height: calc(${DM} + ${Be});
        --ni-private-hover-indicator-width: calc(${P} + 1px);
        --ni-private-height-within-border: calc(
            ${Be} - 2 * ${P}
        );
    }

    :host([disabled]) {
        color: ${rn};
        cursor: default;
    }

    .label {
        display: flex;
        color: ${No};
        font: ${za};
    }

    :host([disabled]) .label {
        color: ${Bs};
    }

    .root {
        box-sizing: border-box;
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 0px;
        border: 0px solid rgba(${_e}, 0.3);
        padding: ${P};
    }

    .root:focus-within {
        border-bottom-color: ${z};
    }

    :host([disabled]) .root {
        border-color: rgba(${_e}, 0.1);
    }

    :host([error-visible]) .root {
        border-bottom-color: ${Xi};
    }

    .root::before {
        ${""}
        content: ' ';
        color: transparent;
        width: 0px;
        user-select: none;
    }

    .root::after {
        content: '';
        position: absolute;
        bottom: calc(-1 * ${P});
        width: 0px;
        height: 0px;
        border-bottom: ${z}
            var(--ni-private-hover-indicator-width) solid;
        transition: width ${pn} ease-in;
    }

    @media (prefers-reduced-motion) {
        .root::after {
            transition-duration: 0s;
        }
    }

    :host([error-visible]) .root::after {
        border-bottom-color: ${Xi};
    }

    :host(:hover) .root::after {
        width: 100%;
    }

    :host([disabled]:hover) .root::after {
        width: 0px;
    }

    [part='start'] {
        display: contents;
    }

    .control {
        -webkit-appearance: none;
        font: inherit;
        background: transparent;
        color: inherit;
        height: var(--ni-private-height-within-border);
        width: 100%;
        border: none;
        padding: 0px;
        padding-left: calc(${Ve} / 2);
    }

    .control:hover,
    .control:focus,
    .control:disabled,
    .control:active {
        outline: none;
    }

    .control::placeholder {
        color: ${No};
    }

    .control[disabled]::placeholder {
        color: ${rn};
    }

    .controls {
        display: contents;
    }

    ${""}
    .step-up {
        order: 3;
        padding-right: calc(${Ve} / 4);
    }

    .step-down {
        order: 2;
    }

    .step-up-down-button {
        ${Be.cssCustomProperty}: 24px;
    }

    [part='end'] {
        display: contents;
    }

    .error-icon {
        order: 1;
        padding-right: calc(${Ve} / 4);
    }
`.withBehaviors(Ct("underline",S`
            .root {
                border-bottom-width: ${P};
                padding-bottom: 0;
            }
        `),Ct("block",S`
            .root {
                background-color: rgba(${_e}, 0.1);
            }

            .root:focus-within,
            :host([error-visible]) .root {
                border-bottom-width: ${P};
                padding-bottom: 0;
            }

            :host(:hover) .root {
                padding-bottom: 0;
            }

            :host([disabled]) .root {
                background-color: rgba(${_e}, 0.07);
            }
        `),Ct("outline",S`
            .root {
                border-width: ${P};
                padding: 0;
            }
        `));class Qd extends mb{constructor(){super(...arguments),this.appearance="underline",this.errorVisible=!1}connectedCallback(){super.connectedCallback(),this.control.setAttribute("role","spinbutton")}}ne([D],Qd.prototype,"appearance",void 0),ne([D({attribute:"error-text"})],Qd.prototype,"errorText",void 0),ne([D({attribute:"error-visible",mode:"boolean"})],Qd.prototype,"errorVisible",void 0);const AG=Qd.compose({baseName:"number-field",baseClass:mb,template:(t,n)=>L`
    <template class="${e=>e.readOnly?"readonly":""}">
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${at("defaultSlottedNodes")}></slot>
        </label>
        <div class="root" part="root">
            ${Fn(0,n)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${e=>e.handleTextInput()}"
                @change="${e=>e.handleChange()}"
                @keydown="${(e,i)=>e.handleKeyDown(i.event)}"
                @blur="${(e,i)=>e.handleBlur()}"
                ?autofocus="${e=>e.autofocus}"
                ?disabled="${e=>e.disabled}"
                list="${e=>e.list}"
                maxlength="${e=>e.maxlength}"
                minlength="${e=>e.minlength}"
                placeholder="${e=>e.placeholder}"
                ?readonly="${e=>e.readOnly}"
                ?required="${e=>e.required}"
                size="${e=>e.size}"
                type="text"
                inputmode="numeric"
                min="${e=>e.min}"
                max="${e=>e.max}"
                step="${e=>e.step}"
                aria-atomic="${e=>e.ariaAtomic}"
                aria-busy="${e=>e.ariaBusy}"
                aria-controls="${e=>e.ariaControls}"
                aria-current="${e=>e.ariaCurrent}"
                aria-describedby="${e=>e.ariaDescribedby}"
                aria-details="${e=>e.ariaDetails}"
                aria-disabled="${e=>e.ariaDisabled}"
                aria-errormessage="${e=>e.ariaErrormessage}"
                aria-flowto="${e=>e.ariaFlowto}"
                aria-haspopup="${e=>e.ariaHaspopup}"
                aria-hidden="${e=>e.ariaHidden}"
                aria-invalid="${e=>e.ariaInvalid}"
                aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
                aria-label="${e=>e.ariaLabel}"
                aria-labelledby="${e=>e.ariaLabelledby}"
                aria-live="${e=>e.ariaLive}"
                aria-owns="${e=>e.ariaOwns}"
                aria-relevant="${e=>e.ariaRelevant}"
                aria-roledescription="${e=>e.ariaRoledescription}"
                ${Le("control")}
            />
            ${sn(e=>!e.hideStep&&!e.readOnly&&!e.disabled,L`
                    <div class="controls" part="controls">
                        <div class="step-up" part="step-up" @click="${e=>e.stepUp()}">
                            <slot name="step-up-glyph">
                                ${n.stepUpGlyph||""}
                            </slot>
                        </div>
                        <div
                            class="step-down"
                            part="step-down"
                            @click="${e=>e.stepDown()}"
                        >
                            <slot name="step-down-glyph">
                                ${n.stepDownGlyph||""}
                            </slot>
                        </div>
                    </div>
                `)}
            ${xn(0,n)}
        </div>
    </template>
`,styles:TG,shadowOptions:{delegatesFocus:!0},stepDownGlyph:L`
        <${B.tagFor(Eo)}
            class="step-up-down-button"
            appearance="ghost"
            content-hidden
            tabindex="-1"
        >
            "Decrement"
            <${B.tagFor(fb)}
                slot="start"
            >
            </${B.tagFor(fb)}>
        </${B.tagFor(Eo)}>
    `,stepUpGlyph:L`
        <${B.tagFor(Eo)}
            class="step-up-down-button"
            appearance="ghost"
            content-hidden
            tabindex="-1"
        >
            "Increment"
            <${B.tagFor(db)}
                slot="start">
            </${B.tagFor(db)}>
        </${B.tagFor(Eo)}>
    `,end:L`
        <${B.tagFor(hi)}
            severity="error"
            class="error-icon"
        ></${B.tagFor(hi)}>
        ${Ud}
    `});B.getOrCreate().withPrefix("nimble").register(AG());let ZM=(()=>{class t extends Pe{constructor(){super(...arguments),this.orientation="horizontal",this.radioChangeHandler=e=>{const i=e.target;i.checked&&(this.slottedRadioButtons.forEach(o=>{o!==i&&(o.checked=!1,this.isInsideFoundationToolbar||o.setAttribute("tabindex","-1"))}),this.selectedRadio=i,this.value=i.value,i.setAttribute("tabindex","0"),this.focusedRadio=i),e.stopPropagation()},this.moveToRadioByIndex=(e,i)=>{const o=e[i];this.isInsideToolbar||(o.setAttribute("tabindex","0"),o.readOnly?this.slottedRadioButtons.forEach(r=>{r!==o&&r.setAttribute("tabindex","-1")}):(o.checked=!0,this.selectedRadio=o)),this.focusedRadio=o,o.focus()},this.moveRightOffGroup=()=>{var e;null===(e=this.nextElementSibling)||void 0===e||e.focus()},this.moveLeftOffGroup=()=>{var e;null===(e=this.previousElementSibling)||void 0===e||e.focus()},this.focusOutHandler=e=>{const i=this.slottedRadioButtons,o=e.target,r=null!==o?i.indexOf(o):0,s=this.focusedRadio?i.indexOf(this.focusedRadio):-1;return(0===s&&r===s||s===i.length-1&&s===r)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),i.forEach(l=>{l!==this.selectedRadio&&l.setAttribute("tabindex","-1")}))):(this.focusedRadio=i[0],this.focusedRadio.setAttribute("tabindex","0"),i.forEach(l=>{l!==this.focusedRadio&&l.setAttribute("tabindex","-1")}))),!0},this.clickHandler=e=>{const i=e.target;if(i){const o=this.slottedRadioButtons;i.checked||0===o.indexOf(i)?(i.setAttribute("tabindex","0"),this.selectedRadio=i):(i.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=i}e.preventDefault()},this.shouldMoveOffGroupToTheRight=(e,i,o)=>e===i.length&&this.isInsideToolbar&&o===$s,this.shouldMoveOffGroupToTheLeft=(e,i)=>(this.focusedRadio?e.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&i===Vs,this.checkFocusedRadio=()=>{null!==this.focusedRadio&&!this.focusedRadio.readOnly&&!this.focusedRadio.checked&&(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=e=>{const i=this.slottedRadioButtons;let o=0;if(o=this.focusedRadio?i.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(o,i,e.key))this.moveRightOffGroup();else for(o===i.length&&(o=0);o<i.length&&i.length>1;){if(!i[o].disabled){this.moveToRadioByIndex(i,o);break}if(this.focusedRadio&&o===i.indexOf(this.focusedRadio))break;if(o+1>=i.length){if(this.isInsideToolbar)break;o=0}else o+=1}},this.moveLeft=e=>{const i=this.slottedRadioButtons;let o=0;if(o=this.focusedRadio?i.indexOf(this.focusedRadio)-1:0,o=o<0?i.length-1:o,this.shouldMoveOffGroupToTheLeft(i,e.key))this.moveLeftOffGroup();else for(;o>=0&&i.length>1;){if(!i[o].disabled){this.moveToRadioByIndex(i,o);break}if(this.focusedRadio&&o===i.indexOf(this.focusedRadio))break;o-1<0?o=i.length-1:o-=1}},this.keydownHandler=e=>{const i=e.key;if(i in zs&&this.isInsideFoundationToolbar)return!0;switch(i){case Qi:this.checkFocusedRadio();break;case $s:case Wn:this.direction===Ft.ltr?this.moveRight(e):this.moveLeft(e);break;case Vs:case Gn:this.direction===Ft.ltr?this.moveLeft(e):this.moveRight(e);break;default:return!0}}}readOnlyChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach(e=>{e.readOnly=!!this.readOnly})}disabledChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach(e=>{e.disabled=!!this.disabled})}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(e=>{e.setAttribute("name",this.name)})}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(e=>{e.value===this.value&&(e.checked=!0,this.selectedRadio=e)}),this.$emit("change")}slottedRadioButtonsChanged(e,i){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var e;return null!==(e=this.parentToolbar)&&void 0!==e&&e}get isInsideFoundationToolbar(){var e;return!!(null===(e=this.parentToolbar)||void 0===e?void 0:e.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=qs(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach(e=>{e.removeEventListener("change",this.radioChangeHandler)})}setupRadioButtons(){const e=this.slottedRadioButtons.filter(r=>r.hasAttribute("checked")),i=e?e.length:0;i>1&&(e[i-1].checked=!0);let o=!1;if(this.slottedRadioButtons.forEach(r=>{void 0!==this.name&&r.setAttribute("name",this.name),this.disabled&&(r.disabled=!0),this.readOnly&&(r.readOnly=!0),this.value&&this.value===r.value?(this.selectedRadio=r,this.focusedRadio=r,r.checked=!0,r.setAttribute("tabindex","0"),o=!0):(this.isInsideFoundationToolbar||r.setAttribute("tabindex","-1"),r.checked=!1),r.addEventListener("change",this.radioChangeHandler)}),void 0===this.value&&this.slottedRadioButtons.length>0){const r=this.slottedRadioButtons.filter(l=>l.hasAttribute("checked")),s=null!==r?r.length:0;if(s>0&&!o){const l=r[s-1];l.checked=!0,this.focusedRadio=l,l.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}return b([D({attribute:"readonly",mode:"boolean"})],t.prototype,"readOnly",void 0),b([D({attribute:"disabled",mode:"boolean"})],t.prototype,"disabled",void 0),b([D],t.prototype,"name",void 0),b([D],t.prototype,"value",void 0),b([D],t.prototype,"orientation",void 0),b([E],t.prototype,"childItems",void 0),b([E],t.prototype,"slottedRadioButtons",void 0),t})();const PG=S`
    ${Ge("inline-block")}

    .positioning-region {
        display: flex;
        gap: ${Ve};
    }

    :host([orientation='vertical']) .positioning-region {
        flex-direction: column;
    }

    :host([orientation='horizontal']) .positioning-region {
        flex-direction: row;
    }

    slot[name='label'] {
        font: ${za};
        color: ${No};
    }

    :host([disabled]) slot[name='label'] {
        color: ${Bs};
    }
`;class YM extends ZM{}const BG=YM.compose({baseName:"radio-group",baseClass:ZM,template:(t,n)=>L`
    <template
        role="radiogroup"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        @click="${(e,i)=>e.clickHandler(i.event)}"
        @keydown="${(e,i)=>e.keydownHandler(i.event)}"
        @focusout="${(e,i)=>e.focusOutHandler(i.event)}"
    >
        <slot name="label"></slot>
        <div
            class="positioning-region ${e=>"horizontal"===e.orientation?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${at({property:"slottedRadioButtons",filter:ks("[role=radio]")})}
            ></slot>
        </div>
    </template>
`,styles:PG,shadowOptions:{delegatesFocus:!0}});B.getOrCreate().withPrefix("nimble").register(BG());class OG extends Pe{}class LG extends(ib(OG)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let JM=(()=>{class t extends LG{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{switch(e.key){case Fo:return void(!this.checked&&!this.readOnly&&(this.checked=!0))}return!0},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var e;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=null!==(e=this.defaultChecked)&&void 0!==e&&e,this.dirtyChecked=!1))}connectedCallback(){var e,i;super.connectedCallback(),this.validate(),"radiogroup"!==(null===(e=this.parentElement)||void 0===e?void 0:e.getAttribute("role"))&&null===this.getAttribute("tabindex")&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=null!==(i=this.defaultChecked)&&void 0!==i&&i,this.dirtyChecked=!1))}isInsideRadioGroup(){return null!==this.closest("[role=radiogroup]")}clickHandler(e){!this.disabled&&!this.readOnly&&!this.checked&&(this.checked=!0)}}return b([D({attribute:"readonly",mode:"boolean"})],t.prototype,"readOnly",void 0),b([E],t.prototype,"name",void 0),b([E],t.prototype,"defaultSlottedNodes",void 0),t})();const $G=S`
    ${Ge("inline-flex")}

    :host {
        font: ${Ua};
        align-items: center;
        outline: none;
        width: fit-content;
        cursor: pointer;
    }

    :host([disabled]) {
        cursor: default;
    }

    .control {
        width: calc(${Be} / 2);
        height: calc(${Be} / 2);
        box-sizing: border-box;
        flex-shrink: 0;
        border: ${P} solid ${Ps};
        border-radius: 100%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: box-shadow ${pn};
        ${""}
        line-height: 0;
    }

    :host([disabled]) .control {
        background-color: rgba(${_e}, 0.1);
        border-color: rgba(${_e}, 0.2);
    }

    :host(:not([disabled]):not(:active):hover) .control {
        border-color: ${z};
        box-shadow: 0px 0px 0px ${P} ${z} inset;
    }

    :host(${$e}) .control {
        border-color: ${z};
    }

    :host(${$e}) .control::after {
        content: '';
        position: absolute;
        width: calc(2px + ${Be} / 2);
        height: calc(2px + ${Be} / 2);
        border: 2px solid ${z};
        border-radius: 100%;
    }

    .label {
        font: inherit;
        color: ${Rt};
        padding-left: 1ch;
        cursor: inherit;
    }

    :host([disabled]) .label {
        color: ${rn};
    }

    slot[name='checked-indicator'] {
        display: none;
    }

    slot[name='checked-indicator'] svg {
        height: ${he};
        width: ${he};
        overflow: visible;
    }

    :host(.checked) slot[name='checked-indicator'] {
        display: contents;
    }

    slot[name='checked-indicator'] circle {
        fill: ${Ps};
    }

    :host([disabled]) slot[name='checked-indicator'] circle {
        fill: rgba(${_e}, 0.3);
    }
`,jG=class extends JM{}.compose({baseName:"radio",baseClass:JM,template:(t,n)=>L`
    <template
        role="radio"
        class="${e=>e.checked?"checked":""} ${e=>e.readOnly?"readonly":""}"
        aria-checked="${e=>e.checked}"
        aria-required="${e=>e.required}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        @keypress="${(e,i)=>e.keypressHandler(i.event)}"
        @click="${(e,i)=>e.clickHandler(i.event)}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${n.checkedIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${at("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:$G,checkedIndicator:kM.data});B.getOrCreate().withPrefix("nimble").register(jG());let zG=(()=>{class t extends Us{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var e;return null===(e=this.options)||void 0===e?void 0:e.filter(i=>i.checked)}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(e,i){var o,r;this.ariaActiveDescendant=null!==(r=null===(o=this.options[i])||void 0===o?void 0:o.id)&&void 0!==r?r:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const e=this.activeOption;e&&(e.checked=!0)}checkFirstOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach((i,o)=>{i.checked=Hd(o,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((i,o)=>{i.checked=Hd(o,this.rangeStartIndex,this.options.length)})):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((i,o)=>{i.checked=Hd(o,this.rangeStartIndex,this.activeIndex+1)})):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),1===this.checkedOptions.length&&(this.rangeStartIndex+=1),this.options.forEach((i,o)=>{i.checked=Hd(o,this.activeIndex,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(e){var i;if(!this.multiple)return super.clickHandler(e);const o=null===(i=e.target)||void 0===i?void 0:i.closest("[role=option]");return o&&!o.disabled?(this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(o),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0):void 0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(e){if(!this.multiple)return super.focusinHandler(e);!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.uncheckAllOptions(),-1===this.activeIndex&&(this.activeIndex=-1!==this.firstSelectedOptionIndex?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(e){this.multiple&&this.uncheckAllOptions()}keydownHandler(e){if(!this.multiple)return super.keydownHandler(e);if(this.disabled)return!0;const{key:i,shiftKey:o}=e;switch(this.shouldSkipFocus=!1,i){case Hs:return void this.checkFirstOption(o);case Wn:return void this.checkNextOption(o);case Gn:return void this.checkPreviousOption(o);case js:return void this.checkLastOption(o);case"Tab":return this.focusAndScrollOptionIntoView(),!0;case Ga:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case Fo:if(e.preventDefault(),this.typeAheadExpired)return void this.toggleSelectedForAllCheckedOptions();default:return 1===i.length&&this.handleTypeAhead(`${i}`),!0}}mousedownHandler(e){if(e.offsetX>=0&&e.offsetX<=this.scrollWidth)return super.mousedownHandler(e)}multipleChanged(e,i){var o;this.ariaMultiSelectable=i?"true":null,null===(o=this.options)||void 0===o||o.forEach(r=>{r.checked=!i&&void 0}),this.setSelectedOptions()}setSelectedOptions(){this.multiple?this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter(e=>e.selected),this.focusAndScrollOptionIntoView()):super.setSelectedOptions()}sizeChanged(e,i){var o;const r=Math.max(0,parseInt(null!==(o=null==i?void 0:i.toFixed())&&void 0!==o?o:"",10));r!==i&&ve.queueUpdate(()=>{this.size=r})}toggleSelectedForAllCheckedOptions(){const e=this.checkedOptions.filter(o=>!o.disabled),i=!e.every(o=>o.selected);e.forEach(o=>o.selected=i),this.selectedIndex=this.options.indexOf(e[e.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(e,i){if(this.multiple){if(this.$fastController.isConnected){const o=this.getTypeaheadMatches(),r=this.options.indexOf(o[0]);r>-1&&(this.activeIndex=r,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}else super.typeaheadBufferChanged(e,i)}uncheckAllOptions(e=!1){this.options.forEach(i=>i.checked=!this.multiple&&void 0),e||(this.rangeStartIndex=-1)}}return b([E],t.prototype,"activeIndex",void 0),b([D({mode:"boolean"})],t.prototype,"multiple",void 0),b([D({converter:hn})],t.prototype,"size",void 0),t})();class UG extends zG{}class WG extends(mr(UG)){constructor(){super(...arguments),this.proxy=document.createElement("select")}}let gb=(()=>{class t extends WG{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=qa("listbox-"),this.maxHeight=0}openChanged(e,i){if(this.collapsible){if(this.open)return this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,void ve.queueUpdate(()=>this.focus());this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||"number"==typeof this.size)}get value(){return me.track(this,"value"),this._value}set value(e){var i,o,r,s,l,a,c;const u=`${this._value}`;if(null===(i=this._options)||void 0===i?void 0:i.length){const d=this._options.findIndex(p=>p.value===e),h=null!==(r=null===(o=this._options[this.selectedIndex])||void 0===o?void 0:o.value)&&void 0!==r?r:null,f=null!==(l=null===(s=this._options[d])||void 0===s?void 0:s.value)&&void 0!==l?l:null;(-1===d||h!==f)&&(e="",this.selectedIndex=d),e=null!==(c=null===(a=this.firstSelectedOption)||void 0===a?void 0:a.value)&&void 0!==c?c:e}u!==e&&(this._value=e,super.valueChanged(u,e),me.notify(this,"value"),this.updateDisplayValue())}updateValue(e){var i,o;this.$fastController.isConnected&&(this.value=null!==(o=null===(i=this.firstSelectedOption)||void 0===i?void 0:i.value)&&void 0!==o?o:""),e&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(e,i){super.selectedIndexChanged(e,i),this.updateValue()}positionChanged(e,i){this.positionAttribute=i,this.setPositioning()}setPositioning(){const e=this.getBoundingClientRect(),o=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>o?"above":"below",this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight="above"===this.position?~~e.top:~~o}get displayValue(){var e,i;return me.track(this,"displayValue"),null!==(i=null===(e=this.firstSelectedOption)||void 0===e?void 0:e.text)&&void 0!==i?i:""}disabledChanged(e,i){super.disabledChanged&&super.disabledChanged(e,i),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),-1===this.selectedIndex&&(this.selectedIndex=0)}clickHandler(e){if(!this.disabled){if(this.open){const i=e.target.closest("option,[role=option]");if(i&&i.disabled)return}return super.clickHandler(e),this.open=this.collapsible&&!this.open,!this.open&&this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0),!0}}focusoutHandler(e){var i;if(super.focusoutHandler(e),!this.open)return!0;const o=e.relatedTarget;this.isSameNode(o)?this.focus():(null===(i=this.options)||void 0===i?void 0:i.includes(o))||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(e,i){super.handleChange(e,i),"value"===i&&this.updateValue()}slottedOptionsChanged(e,i){this.options.forEach(o=>{me.getNotifier(o).unsubscribe(this,"value")}),super.slottedOptionsChanged(e,i),this.options.forEach(o=>{me.getNotifier(o).subscribe(this,"value")}),this.setProxyOptions(),this.updateValue()}mousedownHandler(e){var i;return e.offsetX>=0&&e.offsetX<=(null===(i=this.listbox)||void 0===i?void 0:i.scrollWidth)?super.mousedownHandler(e):this.collapsible}multipleChanged(e,i){super.multipleChanged(e,i),this.proxy&&(this.proxy.multiple=i)}selectedOptionsChanged(e,i){var o;super.selectedOptionsChanged(e,i),null===(o=this.options)||void 0===o||o.forEach((r,s)=>{var l;const a=null===(l=this.proxy)||void 0===l?void 0:l.options.item(s);a&&(a.selected=r.selected)})}setDefaultSelectedOption(){var e;const i=null!==(e=this.options)&&void 0!==e?e:Array.from(this.children).filter(Us.slottedOptionFilter),o=null==i?void 0:i.findIndex(r=>r.hasAttribute("selected")||r.selected||r.value===this.value);this.selectedIndex=-1===o?0:o}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(e=>{const i=e.proxy||(e instanceof HTMLOptionElement?e.cloneNode():null);i&&this.proxy.options.add(i)}))}keydownHandler(e){super.keydownHandler(e);const i=e.key||e.key.charCodeAt(0);switch(i){case Fo:e.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break;case Hs:case js:e.preventDefault();break;case Qi:e.preventDefault(),this.open=!this.open;break;case Ga:this.collapsible&&this.open&&(e.preventDefault(),this.open=!1);break;case"Tab":return this.collapsible&&this.open&&(e.preventDefault(),this.open=!1),!0}return!this.open&&this.indexWhenOpened!==this.selectedIndex&&(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(i===Wn||i===Gn)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(e,i){super.sizeChanged(e,i),this.proxy&&(this.proxy.size=i)}updateDisplayValue(){this.collapsible&&me.notify(this,"displayValue")}}return b([D({attribute:"open",mode:"boolean"})],t.prototype,"open",void 0),b([tL],t.prototype,"collapsible",null),b([E],t.prototype,"control",void 0),b([D({attribute:"position"})],t.prototype,"positionAttribute",void 0),b([E],t.prototype,"position",void 0),b([E],t.prototype,"maxHeight",void 0),t})(),e2=(()=>{class t{}return b([E],t.prototype,"ariaControls",void 0),t})();Qe(e2,jd),Qe(gb,Mn,e2);const qG=S`
    ${WM}
    ${Wd}

    ${""}
    [part='selected-value'] {
        order: 1;
    }

    [part='indicator'] {
        order: 3;
    }

    .error-icon {
        order: 2;
    }

    .end {
        display: contents;
    }
`.withBehaviors(Ct("block",S`
            :host([error-visible]) .control {
                border-bottom-width: ${P};
                padding-bottom: 0;
            }
        `));class Zd extends gb{constructor(){super(...arguments),this.appearance="underline",this.errorVisible=!1}setPositioning(){!this.$fastController.isConnected||(super.setPositioning(),this.updateListboxMaxHeightCssVariable())}slottedOptionsChanged(n,e){const i=this.value;super.slottedOptionsChanged(n,e),i&&(this.value=i)}maxHeightChanged(){this.updateListboxMaxHeightCssVariable()}updateListboxMaxHeightCssVariable(){this.listbox&&this.listbox.style.setProperty("--ni-private-select-max-height",`${this.maxHeight}px`)}}ne([D],Zd.prototype,"appearance",void 0),ne([D({attribute:"error-text"})],Zd.prototype,"errorText",void 0),ne([D({attribute:"error-visible",mode:"boolean"})],Zd.prototype,"errorVisible",void 0);const KG=Zd.compose({baseName:"select",baseClass:gb,template:(t,n)=>L`
    <template
        class="${e=>[e.collapsible&&"collapsible",e.collapsible&&e.open&&"open",e.disabled&&"disabled",e.collapsible&&e.position].filter(Boolean).join(" ")}"
        aria-activedescendant="${e=>e.ariaActiveDescendant}"
        aria-controls="${e=>e.ariaControls}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-haspopup="${e=>e.collapsible?"listbox":null}"
        aria-multiselectable="${e=>e.ariaMultiSelectable}"
        ?open="${e=>e.open}"
        role="combobox"
        tabindex="${e=>e.disabled?null:"0"}"
        @click="${(e,i)=>e.clickHandler(i.event)}"
        @focusin="${(e,i)=>e.focusinHandler(i.event)}"
        @focusout="${(e,i)=>e.focusoutHandler(i.event)}"
        @keydown="${(e,i)=>e.keydownHandler(i.event)}"
        @mousedown="${(e,i)=>e.mousedownHandler(i.event)}"
    >
        ${sn(e=>e.collapsible,L`
                <div
                    class="control"
                    part="control"
                    ?disabled="${e=>e.disabled}"
                    ${Le("control")}
                >
                    ${Fn(0,n)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${e=>e.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${n.indicator||""}
                            </slot>
                        </div>
                    </slot>
                    ${xn(0,n)}
                </div>
            `)}
        <div
            class="listbox"
            id="${e=>e.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${e=>e.disabled}"
            ?hidden="${e=>!!e.collapsible&&!e.open}"
            ${Le("listbox")}
        >
            <slot
                ${at({filter:Us.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,styles:qG,indicator:MM.data,end:L`
        <${B.tagFor(hi)}
            severity="error"
            class="error-icon"
        ></${B.tagFor(hi)}>
        ${Ud}
    `});B.getOrCreate().withPrefix("nimble").register(KG());const XG=S`
    ${Ge("inline-flex")}

    :host {
        outline: none;
        font: ${Ua};
        color: ${Wa};
        flex-direction: column;
        cursor: pointer;
        --ni-private-switch-height: 24px;
        --ni-private-switch-indicator-size: 16px;
        padding-bottom: calc(
            ${Be} - var(--ni-private-switch-height)
        );
    }

    :host([disabled]) {
        cursor: default;
        color: ${CM};
    }

    .label {
        color: ${No};
        font: ${za};
    }

    :host([disabled]) .label {
        color: ${Bs};
    }

    .label__hidden {
        display: none;
        visibility: hidden;
    }

    .switch-container {
        display: flex;
        align-items: center;
    }

    slot[name='unchecked-message']::slotted(*) {
        margin-inline-end: 8px;
    }

    .switch {
        display: flex;
        height: var(--ni-private-switch-height);
        width: calc(var(--ni-private-switch-height) * 2);
        box-sizing: border-box;
        background-color: ${Rs};
        border-radius: calc(var(--ni-private-switch-height) / 2);
        align-items: center;
        border: calc(${P} * 2) solid transparent;
    }

    :host([disabled]) .switch {
        background-color: var(--ni-private-switch-background-disabled-color);
    }

    :host(${$e}) .switch {
        border-color: ${z};
    }

    .checked-indicator-spacer {
        flex-grow: 0;
        transition: flex-grow ${pn} ease-in-out;
    }

    :host([aria-checked='true']) .checked-indicator-spacer {
        flex-grow: 1;
    }

    .checked-indicator {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--ni-private-switch-indicator-background-color);
        box-sizing: border-box;
        width: var(--ni-private-switch-indicator-size);
        height: var(--ni-private-switch-indicator-size);
        border-radius: calc(var(--ni-private-switch-indicator-size) / 2);
        margin: calc(
            calc(
                    var(--ni-private-switch-height) -
                        var(--ni-private-switch-indicator-size)
                ) / 2
        );
        border: ${P} solid
            var(--ni-private-switch-indicator-border-color);
    }

    :host(:hover) .checked-indicator {
        border: calc(${P} * 2) solid ${z};
    }

    :host([disabled]) .checked-indicator {
        background-color: var(
            --ni-private-switch-indicator-background-disabled-color
        );
        border: ${P} solid
            var(--ni-private-switch-indicator-border-disabled-color);
    }

    :host(${$e}) .checked-indicator {
        border: ${P} solid ${z};
    }

    .checked-indicator-inner {
        width: calc(var(--ni-private-switch-indicator-size) / 2);
        height: calc(var(--ni-private-switch-indicator-size) / 2);
        border-radius: calc(var(--ni-private-switch-indicator-size) / 4);
        background-color: var(--ni-private-switch-indicator-border-color);
        opacity: 0;
        transition: opacity ${pn} ease-in-out;
    }

    :host([disabled]) .checked-indicator-inner {
        background-color: var(
            --ni-private-switch-indicator-border-disabled-color
        );
    }

    :host([aria-checked='true']) .checked-indicator-inner {
        opacity: 1;
    }

    slot[name='checked-message']::slotted(*) {
        margin-inline-start: 8px;
    }

    @media (prefers-reduced-motion) {
        .checked-indicator-inner,
        .checked-indicator-spacer {
            transition-duration: 0s;
        }
    }
`.withBehaviors(pt(Fe.light,S`
            :host {
                --ni-private-switch-background-disabled-color: ${$(on,.07)};
                --ni-private-switch-indicator-background-color: ${Ce};
                --ni-private-switch-indicator-background-disabled-color: ${$(Ce,.1)};
                --ni-private-switch-indicator-border-color: ${on};
                --ni-private-switch-indicator-border-disabled-color: ${$(on,.3)};
            }
        `),pt(Fe.dark,S`
            :host {
                --ni-private-switch-background-disabled-color: ${$(At,.07)};
                --ni-private-switch-indicator-background-color: ${$(on,.3)};
                --ni-private-switch-indicator-background-disabled-color: ${$(on,.1)};
                --ni-private-switch-indicator-border-color: ${qg};
                --ni-private-switch-indicator-border-disabled-color: ${$(qg,.3)};
            }
        `),pt(Fe.color,S`
            :host {
                --ni-private-switch-background-disabled-color: ${$(Ce,.07)};
                --ni-private-switch-indicator-background-color: ${$(Ce,.1)};
                --ni-private-switch-indicator-background-disabled-color: ${$(Ce,.1)};
                --ni-private-switch-indicator-border-color: ${Ce};
                --ni-private-switch-indicator-border-disabled-color: ${$(Ce,.3)};
            }
        `)),QG=L`
    <template
        role="switch"
        aria-checked="${t=>t.checked}"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        tabindex="${t=>t.disabled?null:0}"
        @keypress="${(t,n)=>t.keypressHandler(n.event)}"
        @click="${(t,n)=>t.clickHandler(n.event)}"
        class="${t=>t.checked?"checked":""}"
    >
        <label
            part="label"
            class="${t=>{var n;return(null==(n=t.defaultSlottedNodes)?void 0:n.length)?"label":"label label__hidden"}}"
        >
            <slot ${at("defaultSlottedNodes")}></slot>
        </label>
        <div class="switch-container">
            <span class="status-message unchecked-message" part="unchecked-message">
                <slot name="unchecked-message"></slot>
            </span>
            <div part="switch" class="switch">
                <slot name="switch">
                    <span class="checked-indicator-spacer"></span>
                    <span class="checked-indicator" part="checked-indicator">
                        <span class="checked-indicator-inner">
                    </span>
                </slot>
            </div>
            <span class="status-message checked-message" part="checked-message">
                <slot name="checked-message"></slot>
            </span>
        </div>
    </template>
`,YG=class extends lb{}.compose({baseClass:lb,baseName:"switch",template:QG,styles:XG});B.getOrCreate().withPrefix("nimble").register(YG());let t2=(()=>{class t extends Pe{}return b([D({mode:"boolean"})],t.prototype,"disabled",void 0),t})();const eq=S`
    ${Ge("inline-flex")}

    :host {
        position: relative;
        box-sizing: border-box;
        font: ${kn};
        height: ${Be};
        color: ${Rt};
        align-items: center;
        justify-content: center;
        cursor: pointer;
        --ni-private-active-indicator-width: 2px;
        --ni-private-focus-indicator-width: 1px;
        --ni-private-indicator-lines-gap: 1px;
    }

    :host(:hover) {
        background-color: ${Rs};
    }

    :host(:focus) {
        outline: none;
    }

    :host(:focus:hover) {
        background-color: ${Vd};
    }

    :host(${$e}) {
        outline: none;
    }

    :host(:active) {
        background: none;
    }

    :host([disabled]) {
        cursor: default;
        color: ${rn};
        background: none;
    }

    slot {
        display: block;
        padding: calc(${Ve} / 2) ${Ve}
            calc(${Ve} / 2 - ${P});
    }

    :host::before {
        content: '';
        position: absolute;
        bottom: calc(
            var(--ni-private-active-indicator-width) +
                var(--ni-private-indicator-lines-gap)
        );
        width: 0px;
        height: 0px;
        border-bottom: ${z}
            var(--ni-private-focus-indicator-width) solid;
        transition: width ${pn} ease-in;
    }

    @media (prefers-reduced-motion) {
        :host::before {
            transition-duration: 0.01s;
        }
    }

    :host(${$e})::before {
        width: 100%;
    }

    :host::after {
        content: '';
        position: absolute;
        bottom: 0px;
        width: 0px;
        height: 0px;
        border-bottom: ${z}
            var(--ni-private-active-indicator-width) solid;
        transition: width ${pn} ease-in;
    }

    @media (prefers-reduced-motion) {
        :host::after {
            transition-duration: 0.01s;
        }
    }

    :host([aria-selected='true'])::after {
        width: 100%;
    }
`,nq=class extends t2{}.compose({baseName:"tab",baseClass:t2,template:(t,n)=>L`
    <template slot="tab" role="tab" aria-disabled="${e=>e.disabled}">
        <slot></slot>
    </template>
`,styles:eq});B.getOrCreate().withPrefix("nimble").register(nq());class n2 extends Pe{}const oq=S`
    ${Ge("block")}

    :host {
        box-sizing: border-box;
        font: ${kn};
        color: ${Rt};
        padding-top: ${Ve};
    }
`,sq=class extends n2{}.compose({baseName:"tab-panel",baseClass:n2,template:(t,n)=>L`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`,styles:oq});B.getOrCreate().withPrefix("nimble").register(sq());let bb=(()=>{class t extends Pe{constructor(){super(...arguments),this.orientation="horizontal",this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=e=>"true"===e.getAttribute("aria-disabled"),this.isFocusableElement=e=>!this.isDisabledElement(e),this.setTabs=()=>{const e="gridColumn",i="gridRow",o=this.isHorizontal()?e:i;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach((r,s)=>{if("tab"===r.slot){const l=this.activeTabIndex===s&&this.isFocusableElement(r);this.activeindicator&&this.isFocusableElement(r)&&(this.showActiveIndicator=!0);const c=this.tabpanelIds[s];r.setAttribute("id",this.tabIds[s]),r.setAttribute("aria-selected",l?"true":"false"),r.setAttribute("aria-controls",c),r.addEventListener("click",this.handleTabClick),r.addEventListener("keydown",this.handleTabKeyDown),r.setAttribute("tabindex",l?"0":"-1"),l&&(this.activetab=r)}r.style[e]="",r.style[i]="",r.style[o]=`${s+1}`,this.isHorizontal()?r.classList.remove("vertical"):r.classList.add("vertical")})},this.setTabPanels=()=>{this.tabpanels.forEach((e,i)=>{const o=this.tabIds[i];e.setAttribute("id",this.tabpanelIds[i]),e.setAttribute("aria-labelledby",o),this.activeTabIndex!==i?e.setAttribute("hidden",""):e.removeAttribute("hidden")})},this.handleTabClick=e=>{const i=e.currentTarget;1===i.nodeType&&this.isFocusableElement(i)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(i),this.setComponent())},this.handleTabKeyDown=e=>{if(this.isHorizontal())switch(e.key){case Vs:e.preventDefault(),this.adjustBackward(e);break;case $s:e.preventDefault(),this.adjustForward(e)}else switch(e.key){case Gn:e.preventDefault(),this.adjustBackward(e);break;case Wn:e.preventDefault(),this.adjustForward(e)}switch(e.key){case Hs:e.preventDefault(),this.adjust(-this.activeTabIndex);break;case js:e.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1)}},this.adjustForward=e=>{const i=this.tabs;let o=0;for(o=this.activetab?i.indexOf(this.activetab)+1:1,o===i.length&&(o=0);o<i.length&&i.length>1;){if(this.isFocusableElement(i[o])){this.moveToTabByIndex(i,o);break}if(this.activetab&&o===i.indexOf(this.activetab))break;o+1>=i.length?o=0:o+=1}},this.adjustBackward=e=>{const i=this.tabs;let o=0;for(o=this.activetab?i.indexOf(this.activetab)-1:0,o=o<0?i.length-1:o;o>=0&&i.length>1;){if(this.isFocusableElement(i[o])){this.moveToTabByIndex(i,o);break}o-1<0?o=i.length-1:o-=1}},this.moveToTabByIndex=(e,i)=>{const o=e[i];this.activetab=o,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=i,o.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(e,i){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex(o=>o.id===e),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return void 0!==this.activeid?-1===this.tabIds.indexOf(this.activeid)?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map(e=>{var i;return null!==(i=e.getAttribute("id"))&&void 0!==i?i:`tab-${qa()}`})}getTabPanelIds(){return this.tabpanels.map(e=>{var i;return null!==(i=e.getAttribute("id"))&&void 0!==i?i:`panel-${qa()}`})}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return"horizontal"===this.orientation}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const e=this.isHorizontal()?"gridColumn":"gridRow",i=this.isHorizontal()?"translateX":"translateY",o=this.isHorizontal()?"offsetLeft":"offsetTop",r=this.activeIndicatorRef[o];this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`;const s=this.activeIndicatorRef[o];this.activeIndicatorRef.style[e]=`${this.prevActiveTabIndex+1}`,this.activeIndicatorRef.style.transform=`${i}(${s-r}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",()=>{this.ticking=!1,this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${i}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")})}adjust(e){this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=function(t,n,e){return e<0?n:e>n?0:e}(0,this.tabs.length-1,this.activeTabIndex+e),this.setComponent()}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}return b([D],t.prototype,"orientation",void 0),b([D],t.prototype,"activeid",void 0),b([E],t.prototype,"tabs",void 0),b([E],t.prototype,"tabpanels",void 0),b([D({mode:"boolean"})],t.prototype,"activeindicator",void 0),b([E],t.prototype,"activeIndicatorRef",void 0),b([E],t.prototype,"showActiveIndicator",void 0),t})();Qe(bb,Mn);const aq=S`
    ${Ge("grid")}

    :host {
        box-sizing: border-box;
        grid-template-columns: auto auto 1fr;
        grid-template-rows: auto 1fr;
    }

    .tablist {
        display: grid;
        grid-template-rows: auto auto;
        grid-template-columns: auto;
        width: max-content;
        align-self: end;
    }

    .tabpanel {
        grid-row: 2;
        grid-column-start: 1;
        grid-column-end: 4;
    }
`,uq=class extends bb{constructor(){super(),this.activeindicator=!1}}.compose({baseName:"tabs",baseClass:bb,template:(t,n)=>L`
    <template class="${e=>e.orientation}">
        ${Fn(0,n)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${at("tabs")}></slot>

            ${sn(e=>e.showActiveIndicator,L`
                    <div
                        ${Le("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${xn(0,n)}
        <div class="tabpanel">
            <slot name="tabpanel" part="tabpanel" ${at("tabpanels")}></slot>
        </div>
    </template>
`,styles:aq});B.getOrCreate().withPrefix("nimble").register(uq());const dq=S`
    ${Ge("flex")}

    :host {
        align-items: center;
        height: ${Be};
        box-sizing: border-box;
        font: ${kn};
        color: ${Rt};
    }

    .separator {
        display: inline-block;
        height: 24px;
        border-left: calc(${P} * 2) solid
            rgba(${_e}, 0.3);
        margin: calc(${Ve} / 4) calc(${Ve} / 2);
    }
`,hq=L`
    <template slot="end">
        <div class="separator"></div>
        <slot></slot>
    </template>
`,pq=class extends Pe{}.compose({baseName:"tabs-toolbar",template:hq,styles:dq});B.getOrCreate().withPrefix("nimble").register(pq());class mq extends Pe{}class gq extends(mr(mq)){constructor(){super(...arguments),this.proxy=document.createElement("textarea")}}let yb=(()=>{class t extends gq{constructor(){super(...arguments),this.resize="none",this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}select(){this.control.select(),this.$emit("select")}handleChange(){this.$emit("change")}}return b([D({mode:"boolean"})],t.prototype,"readOnly",void 0),b([D],t.prototype,"resize",void 0),b([D({mode:"boolean"})],t.prototype,"autofocus",void 0),b([D({attribute:"form"})],t.prototype,"formId",void 0),b([D],t.prototype,"list",void 0),b([D({converter:hn})],t.prototype,"maxlength",void 0),b([D({converter:hn})],t.prototype,"minlength",void 0),b([D],t.prototype,"name",void 0),b([D],t.prototype,"placeholder",void 0),b([D({converter:hn,mode:"fromView"})],t.prototype,"cols",void 0),b([D({converter:hn,mode:"fromView"})],t.prototype,"rows",void 0),b([D({mode:"boolean"})],t.prototype,"spellcheck",void 0),b([E],t.prototype,"defaultSlottedNodes",void 0),t})();Qe(yb,Xd);const vq=S`
    ${Ge("inline-flex")}

    :host {
        font: ${kn};
        outline: none;
        user-select: none;
        color: ${Rt};
        flex-direction: column;
        vertical-align: top;
    }

    :host([disabled]) {
        color: ${rn};
    }

    .label {
        display: block;
        color: ${No};
        font: ${za};
    }

    :host([disabled]) .label {
        color: ${Bs};
    }

    .control {
        -webkit-appearance: none;
        font: inherit;
        width: 100%;
        flex-grow: 1;
        outline: none;
        box-sizing: border-box;
        position: relative;
        color: inherit;
        border-radius: 0px;
        align-items: flex-end;
        border: ${P} solid transparent;
        padding: 8px;
        transition: box-shadow ${pn}, border ${pn};
        resize: none;
    }

    @media (prefers-reduced-motion) {
        .control {
            transition-duration: 0s;
        }
    }

    .control:hover {
        border-color: ${z};
        box-shadow: 0px 0px 0px 1px ${z};
    }

    .control:focus-within {
        border-color: ${z};
    }

    .control[readonly],
    .control[readonly]:hover,
    .control[readonly]:hover:focus-within,
    .control[disabled],
    .control[disabled]:hover {
        border-color: rgba(${_e}, 0.1);
        box-shadow: none;
    }

    .control::placeholder {
        color: ${No};
    }

    .control[disabled]::placeholder {
        color: ${Bs};
    }

    :host([cols]) .control {
        width: auto;
    }

    :host([rows]) .control {
        flex: none;
    }

    :host([resize='both']) .control {
        resize: both;
    }
    :host([resize='horizontal']) .control {
        resize: horizontal;
    }
    :host([resize='vertical']) .control {
        resize: vertical;
    }
`.withBehaviors(Ct("outline",S`
            .control {
                border-color: rgba(${_e}, 0.3);
                background-color: transparent;
            }
        `),Ct("block",S`
            .control {
                background-color: rgba(${_e}, 0.1);
            }

            :host([readonly]) .control {
                background-color: transparent;
            }

            :host([disabled]) .control {
                border-color: transparent;
                background-color: rgba(${_e}, 0.1);
            }
        `));class r2 extends yb{constructor(){super(...arguments),this.appearance="outline"}}ne([D],r2.prototype,"appearance",void 0);const yq=r2.compose({baseName:"text-area",baseClass:yb,template:(t,n)=>L`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
            ${e=>"none"!==e.resize?`resize-${e.resize}`:""}"
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${at("defaultSlottedNodes")}></slot>
        </label>
        <textarea
            part="control"
            class="control"
            id="control"
            ?autofocus="${e=>e.autofocus}"
            cols="${e=>e.cols}"
            ?disabled="${e=>e.disabled}"
            form="${e=>e.form}"
            list="${e=>e.list}"
            maxlength="${e=>e.maxlength}"
            minlength="${e=>e.minlength}"
            name="${e=>e.name}"
            placeholder="${e=>e.placeholder}"
            ?readonly="${e=>e.readOnly}"
            ?required="${e=>e.required}"
            rows="${e=>e.rows}"
            ?spellcheck="${e=>e.spellcheck}"
            :value="${e=>e.value}"
            aria-atomic="${e=>e.ariaAtomic}"
            aria-busy="${e=>e.ariaBusy}"
            aria-controls="${e=>e.ariaControls}"
            aria-current="${e=>e.ariaCurrent}"
            aria-describedby="${e=>e.ariaDescribedby}"
            aria-details="${e=>e.ariaDetails}"
            aria-disabled="${e=>e.ariaDisabled}"
            aria-errormessage="${e=>e.ariaErrormessage}"
            aria-flowto="${e=>e.ariaFlowto}"
            aria-haspopup="${e=>e.ariaHaspopup}"
            aria-hidden="${e=>e.ariaHidden}"
            aria-invalid="${e=>e.ariaInvalid}"
            aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
            aria-label="${e=>e.ariaLabel}"
            aria-labelledby="${e=>e.ariaLabelledby}"
            aria-live="${e=>e.ariaLive}"
            aria-owns="${e=>e.ariaOwns}"
            aria-relevant="${e=>e.ariaRelevant}"
            aria-roledescription="${e=>e.ariaRoledescription}"
            @input="${(e,i)=>e.handleTextInput()}"
            @change="${e=>e.handleChange()}"
            ${Le("control")}
        ></textarea>
    </template>
`,styles:vq,shadowOptions:{delegatesFocus:!0}});B.getOrCreate().withPrefix("nimble").register(yq());function Dq(t,n,e){return t.nodeType!==Node.TEXT_NODE||"string"==typeof t.nodeValue&&!!t.nodeValue.trim().length}const Cq=S`
    ${Ge("inline-block")}
    ${Wd}

    :host {
        font: ${kn};
        outline: none;
        user-select: none;
        --webkit-user-select: none;
        color: ${Rt};
        height: calc(${DM} + ${Be});
        --ni-private-hover-indicator-width: calc(${P} + 1px);
        --ni-private-height-within-border: calc(
            ${Be} - 2 * ${P}
        );
    }

    :host([disabled]) {
        color: ${rn};
    }

    .label {
        display: flex;
        color: ${No};
        font: ${za};
    }

    :host([disabled]) .label {
        color: ${Bs};
    }

    .root {
        box-sizing: border-box;
        position: relative;
        display: flex;
        flex-direction: row;
        border-radius: 0px;
        font: inherit;
        align-items: center;
        justify-content: center;
        border: 0px solid rgba(${_e}, 0.3);
        gap: calc(${Ve} / 2);
        padding: ${P};
    }

    :host([readonly]) .root {
        border-color: rgba(${_e}, 0.1);
    }

    :host([disabled]) .root {
        border-color: rgba(${_e}, 0.1);
    }

    :host([error-visible]) .root {
        border-bottom-color: ${Xi};
    }

    .root:focus-within {
        border-bottom-color: ${z};
    }

    :host([appearance='frameless'][full-bleed]) .root {
        padding-left: 0px;
        padding-right: 0px;
    }

    .root::before {
        ${""}
        content: ' ';
        color: transparent;
        width: 0px;
        user-select: none;
    }

    :host([appearance='frameless'][full-bleed]) .root::before {
        display: none;
    }

    .root::after {
        ${""}
        content: ' ';
        color: transparent;
        width: 0px;
        user-select: none;
    }

    :host([appearance='frameless'][full-bleed]) .root::after {
        display: none;
    }

    [part='start'] {
        display: contents;
    }

    slot[name='start']::slotted(*) {
        flex: none;
    }

    .control {
        -webkit-appearance: none;
        font: inherit;
        background: transparent;
        color: inherit;
        padding: 0px;
        height: var(--ni-private-height-within-border);
        width: 100%;
        margin-top: auto;
        margin-bottom: auto;
        border: none;
        text-overflow: ellipsis;
    }

    .control:hover,
    .control:focus,
    .control:disabled,
    .control:active {
        outline: none;
    }

    .control:disabled {
        ${""}
        text-overflow: clip;
    }

    .control::placeholder {
        color: ${No};
    }

    .control[disabled]::placeholder {
        color: ${rn};
    }

    [part='end'] {
        display: contents;
    }

    [part='end']::after {
        content: '';
        position: absolute;
        bottom: calc(-1 * ${P});
        width: 0px;
        height: 0px;
        border-bottom: ${z}
            var(--ni-private-hover-indicator-width) solid;
        transition: width ${pn} ease-in;
    }

    @media (prefers-reduced-motion) {
        [part='end']::after {
            transition-duration: 0s;
        }
    }

    :host([error-visible]) [part='end']::after {
        border-bottom-color: ${Xi};
    }

    :host(:hover) [part='end']::after {
        width: 100%;
    }

    :host([disabled]:hover) [part='end']::after,
    :host([readonly]:hover) [part='end']::after {
        width: 0px;
    }

    [part='actions'] {
        display: contents;
    }

    slot[name='actions']::slotted(*) {
        ${Be.cssCustomProperty}: 24px;
    }
`.withBehaviors(Ct("underline",S`
            .root {
                border-bottom-width: ${P};
                padding-bottom: 0;
            }
        `),Ct("block",S`
            .root {
                background-color: rgba(${_e}, 0.1);
            }

            .control {
                padding-left: ${P};
                padding-right: ${P};
            }

            .root:focus-within,
            :host([error-visible]) .root {
                border-bottom-width: ${P};
                padding-bottom: 0;
            }

            :host(:hover) .root {
                padding-bottom: 0;
            }

            :host([readonly]) .root {
                background-color: rgba(${_e}, 0.07);
                border-color: transparent;
            }

            :host([disabled]) .root {
                background-color: rgba(${_e}, 0.07);
            }
        `),Ct("outline",S`
            .root {
                border-width: ${P};
                padding: 0;
            }
        `),Ct("frameless",S`
            .control {
                padding-left: ${P};
                padding-right: ${P};
            }

            :host([readonly]) .root {
                border-color: transparent;
            }
        `),pt(Fe.light,S`
            .control::-ms-reveal {
                filter: invert(0%);
            }
        `),pt([Fe.dark,Fe.color],S`
            .control::-ms-reveal {
                filter: invert(100%);
            }
        `));class Ya extends pb{constructor(){super(...arguments),this.appearance="underline",this.errorVisible=!1,this.fullBleed=!1}}ne([D],Ya.prototype,"appearance",void 0),ne([D({attribute:"error-text"})],Ya.prototype,"errorText",void 0),ne([D({attribute:"error-visible",mode:"boolean"})],Ya.prototype,"errorVisible",void 0),ne([D({attribute:"full-bleed",mode:"boolean"})],Ya.prototype,"fullBleed",void 0);const wq=Ya.compose({baseName:"text-field",baseClass:pb,template:(t,n)=>L`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${at({property:"defaultSlottedNodes",filter:Dq})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${Fn(0,n)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${e=>e.handleTextInput()}"
                @change="${e=>e.handleChange()}"
                ?autofocus="${e=>e.autofocus}"
                ?disabled="${e=>e.disabled}"
                list="${e=>e.list}"
                maxlength="${e=>e.maxlength}"
                minlength="${e=>e.minlength}"
                pattern="${e=>e.pattern}"
                placeholder="${e=>e.placeholder}"
                ?readonly="${e=>e.readOnly}"
                ?required="${e=>e.required}"
                size="${e=>e.size}"
                ?spellcheck="${e=>e.spellcheck}"
                :value="${e=>e.value}"
                type="${e=>e.type}"
                aria-atomic="${e=>e.ariaAtomic}"
                aria-busy="${e=>e.ariaBusy}"
                aria-controls="${e=>e.ariaControls}"
                aria-current="${e=>e.ariaCurrent}"
                aria-describedby="${e=>e.ariaDescribedby}"
                aria-details="${e=>e.ariaDetails}"
                aria-disabled="${e=>e.ariaDisabled}"
                aria-errormessage="${e=>e.ariaErrormessage}"
                aria-flowto="${e=>e.ariaFlowto}"
                aria-haspopup="${e=>e.ariaHaspopup}"
                aria-hidden="${e=>e.ariaHidden}"
                aria-invalid="${e=>e.ariaInvalid}"
                aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
                aria-label="${e=>e.ariaLabel}"
                aria-labelledby="${e=>e.ariaLabelledby}"
                aria-live="${e=>e.ariaLive}"
                aria-owns="${e=>e.ariaOwns}"
                aria-relevant="${e=>e.ariaRelevant}"
                aria-roledescription="${e=>e.ariaRoledescription}"
                ${Le("control")}
            />
            ${xn(0,n)}
        </div>
    </template>
`,styles:Cq,shadowOptions:{delegatesFocus:!0},end:L`
        <${B.tagFor(hi)}
            severity="error"
            class="error-icon"
        ></${B.tagFor(hi)}>
        <span part="actions">
            <slot name="actions"></slot>
        </span>
        ${Ud}
    `});B.getOrCreate().withPrefix("nimble").register(wq());var Ja="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Ib=function(n){return"INPUT"===n.tagName},Pq=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"].concat("iframe").join(","),c2=function(n,e){if(e=e||{},!n)throw new Error("No node provided");return!1!==Ja.call(n,Pq)&&function(n,e){return!(e.disabled||function(n){return Ib(n)&&"hidden"===n.type}(e)||function(n,e){if("hidden"===getComputedStyle(n).visibility)return!0;var i=Ja.call(n,"details>summary:first-of-type");if(Ja.call(i?n.parentElement:n,"details:not([open]) *"))return!0;if(e&&"full"!==e){if("non-zero-area"===e){var r=n.getBoundingClientRect();return 0===r.width&&0===r.height}}else for(;n;){if("none"===getComputedStyle(n).display)return!0;n=n.parentElement}return!1}(e,n.displayCheck)||function(n){return"DETAILS"===n.tagName&&Array.prototype.slice.apply(n.children).some(function(i){return"SUMMARY"===i.tagName})}(e)||function(n){if(Ib(n)||"SELECT"===n.tagName||"TEXTAREA"===n.tagName||"BUTTON"===n.tagName)for(var e=n.parentElement;e;){if("FIELDSET"===e.tagName&&e.disabled){for(var i=0;i<e.children.length;i++){var o=e.children.item(i);if("LEGEND"===o.tagName)return!o.contains(n)}return!0}e=e.parentElement}return!1}(e))}(e,n)};const u2=Object.freeze({[zs.ArrowUp]:{vertical:-1},[zs.ArrowDown]:{vertical:1},[zs.ArrowLeft]:{horizontal:{[Ft.ltr]:-1,[Ft.rtl]:1}},[zs.ArrowRight]:{horizontal:{[Ft.ltr]:1,[Ft.rtl]:-1}}});let wb=(()=>{class t extends Pe{constructor(){super(...arguments),this._activeIndex=0,this.direction=Ft.ltr,this.orientation="horizontal"}get activeIndex(){return me.track(this,"activeIndex"),this._activeIndex}set activeIndex(e){this.$fastController.isConnected&&(this._activeIndex=HM(0,this.focusableElements.length-1,e),me.notify(this,"activeIndex"))}slottedItemsChanged(){this.$fastController.isConnected&&this.reduceFocusableElements()}clickHandler(e){var i;const o=null===(i=this.focusableElements)||void 0===i?void 0:i.indexOf(e.target);return o>-1&&this.activeIndex!==o&&this.setFocusedElement(o),!0}childItemsChanged(e,i){this.$fastController.isConnected&&this.reduceFocusableElements()}connectedCallback(){super.connectedCallback(),this.direction=qs(this)}focusinHandler(e){const i=e.relatedTarget;!i||this.contains(i)||this.setFocusedElement()}getDirectionalIncrementer(e){var i,o,r,s,l;return null!==(l=null!==(r=null===(o=null===(i=u2[e])||void 0===i?void 0:i[this.orientation])||void 0===o?void 0:o[this.direction])&&void 0!==r?r:null===(s=u2[e])||void 0===s?void 0:s[this.orientation])&&void 0!==l?l:0}keydownHandler(e){const i=e.key;if(!(i in zs)||e.defaultPrevented||e.shiftKey)return!0;const o=this.getDirectionalIncrementer(i);if(!o)return!e.target.closest("[role=radiogroup]");const r=this.activeIndex+o;return this.focusableElements[r]&&e.preventDefault(),this.setFocusedElement(r),!0}get allSlottedItems(){return[...this.start.assignedElements(),...this.slottedItems,...this.end.assignedElements()]}reduceFocusableElements(){var e;const i=null===(e=this.focusableElements)||void 0===e?void 0:e[this.activeIndex];this.focusableElements=this.allSlottedItems.reduce(t.reduceFocusableItems,[]);const o=this.focusableElements.indexOf(i);this.activeIndex=Math.max(0,o),this.setFocusableElements()}setFocusedElement(e=this.activeIndex){var i;this.activeIndex=e,this.setFocusableElements(),null===(i=this.focusableElements[this.activeIndex])||void 0===i||i.focus()}static reduceFocusableItems(e,i){var o,r,s,l;const a="radio"===i.getAttribute("role"),c=null===(r=null===(o=i.$fastController)||void 0===o?void 0:o.definition.shadowOptions)||void 0===r?void 0:r.delegatesFocus,u=Array.from(null!==(l=null===(s=i.shadowRoot)||void 0===s?void 0:s.querySelectorAll("*"))&&void 0!==l?l:[]).some(d=>c2(d));return i.hasAttribute("disabled")||i.hasAttribute("hidden")||!(c2(i)||a||c||u)?i.childElementCount?e.concat(Array.from(i.children).reduce(t.reduceFocusableItems,[])):e:(e.push(i),e)}setFocusableElements(){this.$fastController.isConnected&&this.focusableElements.length>0&&this.focusableElements.forEach((e,i)=>{e.tabIndex=this.activeIndex===i?0:-1})}}return b([E],t.prototype,"direction",void 0),b([D],t.prototype,"orientation",void 0),b([E],t.prototype,"slottedItems",void 0),b([E],t.prototype,"slottedLabel",void 0),b([E],t.prototype,"childItems",void 0),t})(),d2=(()=>{class t{}return b([D({attribute:"aria-labelledby"})],t.prototype,"ariaLabelledby",void 0),b([D({attribute:"aria-label"})],t.prototype,"ariaLabel",void 0),t})();Qe(d2,_o),Qe(wb,Mn,d2);class Bq extends lM{constructor(n,e){super(n,e),this.observer=null,e.childList=!0}observe(){null===this.observer&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return Array.from("subtree"in this.options?this.target.querySelectorAll(this.options.selector):this.target.childNodes)}}function h2(t){return"string"==typeof t&&(t={property:t}),new Bg("fast-children",Bq,t)}const Lq=S`
    .positioning-region {
        display: flex;
        padding: ${En} ${Ve};
        align-items: center;
        gap: ${Ve};
        background: ${ja};
    }

    slot[name='label'] {
        display: none;
    }

    [part='start'] {
        display: flex;
        gap: ${Ve};
        margin-right: auto;
    }

    [part='end'] {
        display: flex;
        gap: ${Ve};
        margin-left: auto;
    }
`,$q=class extends wb{}.compose({baseName:"toolbar",baseClass:wb,template:(t,n)=>L`
    <template
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-orientation="${e=>e.orientation}"
        orientation="${e=>e.orientation}"
        role="toolbar"
        @click="${(e,i)=>e.clickHandler(i.event)}"
        @focusin="${(e,i)=>e.focusinHandler(i.event)}"
        @keydown="${(e,i)=>e.keydownHandler(i.event)}"
        ${h2({property:"childItems",attributeFilter:["disabled","hidden"],filter:ks(),subtree:!0})}
    >
        <slot name="label"></slot>
        <div class="positioning-region" part="positioning-region">
            ${Fn(0,n)}
            <slot
                ${at({filter:ks(),property:"slottedItems"})}
            ></slot>
            ${xn(0,n)}
        </div>
    </template>
`,styles:Lq,shadowOptions:{delegatesFocus:!0}});function Ji(t){return Os(t)&&"treeitem"===t.getAttribute("role")}B.getOrCreate().withPrefix("nimble").register($q());let Sn=(()=>{class t extends Pe{constructor(){super(...arguments),this.expanded=!1,this.focusable=!1,this.isNestedItem=()=>Ji(this.parentElement),this.handleExpandCollapseButtonClick=e=>{!this.disabled&&!e.defaultPrevented&&(this.expanded=!this.expanded)},this.handleFocus=e=>{this.setAttribute("tabindex","0")},this.handleBlur=e=>{this.setAttribute("tabindex","-1")}}expandedChanged(){this.$fastController.isConnected&&this.$emit("expanded-change",this)}selectedChanged(){this.$fastController.isConnected&&this.$emit("selected-change",this)}itemsChanged(e,i){this.$fastController.isConnected&&this.items.forEach(o=>{Ji(o)&&(o.nested=!0)})}static focusItem(e){e.focusable=!0,e.focus()}childItemLength(){const e=this.childItems.filter(i=>Ji(i));return e?e.length:0}}return b([D({mode:"boolean"})],t.prototype,"expanded",void 0),b([D({mode:"boolean"})],t.prototype,"selected",void 0),b([D({mode:"boolean"})],t.prototype,"disabled",void 0),b([E],t.prototype,"focusable",void 0),b([E],t.prototype,"childItems",void 0),b([E],t.prototype,"items",void 0),b([E],t.prototype,"nested",void 0),b([E],t.prototype,"renderCollapsedChildren",void 0),t})();Qe(Sn,Mn);const ec="group-selected";class zq{constructor(n,e,i){this.ltr=n,this.rtl=e,this.source=i,this.attached=null}handleChange({target:n,token:e}){this.attach(e.getValueFor(n))}attach(n){this.attached!==this[n]&&(null!==this.attached&&this.source.$fastController.removeStyles(this.attached),this.attached=this[n],null!==this.attached&&this.source.$fastController.addStyles(this.attached))}}const Uq=S`
    ${Ge("block")}

    :host {
        ${""}
        font-family: ${V$};
        font-weight: ${$$};
        contain: content;
        position: relative;
        outline: none;
        color: ${Rt};
        cursor: pointer;
        --ni-private-tree-item-nested-width: 0;
    }

    ${""}
    :host([${ec}])::after {
        background: ${z};
        border-radius: 0px;
        content: '';
        display: block;
        position: absolute;
        top: 0px;
        width: calc(${P} * 2);
        height: calc(${he} * 2);
    }

    .positioning-region {
        display: flex;
        position: relative;
        box-sizing: border-box;
        height: calc(${he} * 2);
    }

    .positioning-region:hover {
        background: ${Rs};
    }

    :host([${ec}]) .positioning-region:hover {
        background: ${Vd};
    }

    :host(${$e}) .positioning-region {
        box-shadow: 0px 0px 0px ${P} ${z} inset;
        outline: ${P} solid ${z};
        outline-offset: -2px;
    }

    :host([selected]) .positioning-region {
        background: ${Dt};
    }

    :host([selected]) .positioning-region:hover {
        background: ${Vd};
    }

    .positioning-region::before {
        content: '';
        display: block;
        width: var(--ni-private-tree-item-nested-width);
        flex-shrink: 0;
    }

    .content-region {
        display: inline-flex;
        align-items: center;
        white-space: nowrap;
        width: 100%;
        padding-left: 10px;
        font: inherit;
        font-size: ${H$};
        user-select: none;
        position: relative;
        margin-inline-start: ${he};
    }

    :host(${$e}) .content-region {
        outline: none;
    }

    :host([disabled]) .content-region {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .expand-collapse-button {
        background: none;
        border: none;
        outline: none;
        width: ${he};
        height: ${he};
        padding: 0px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin-left: 10px;
        position: absolute;
    }

    .expand-collapse-button svg {
        width: ${he};
        height: ${he};
        transition: transform 0.2s ease-in;
        pointer-events: none;
        fill: currentcolor;
    }

    ${""}
    span[part="start"] {
        width: ${he};
    }

    ${""}
    .start {
        display: flex;
        fill: currentcolor;
        margin-inline-start: ${he};
        margin-inline-end: ${he};
    }

    slot[name='start']::slotted(*) {
        width: ${he};
        height: ${he};
    }

    ${""}
    ::slotted([role='treeitem']) {
        --ni-private-tree-item-nested-width: 1em;
        --ni-private-expand-collapse-button-nested-width: calc(
            ${he} * -1
        );
    }

    ${""}
    .end {
        display: flex;
        fill: currentcolor;
        margin-inline-start: ${he};
    }

    .items {
        display: none;
        ${""}
        font-size: calc(1em + (${he} * 2));
    }

    :host([expanded]) .items {
        display: block;
    }
`.withBehaviors(new class{constructor(n,e){this.cache=new WeakMap,this.ltr=n,this.rtl=e}bind(n){this.attach(n)}unbind(n){const e=this.cache.get(n);e&&Ha.unsubscribe(e)}attach(n){const e=this.cache.get(n)||new zq(this.ltr,this.rtl,n),i=Ha.getValueFor(n);Ha.subscribe(e),e.attach(i),this.cache.set(n,e)}}(S`
            .expand-collapse-button {
                left: var(
                    --ni-private-expand-collapse-button-nested-width,
                    calc(${he} * -1)
                );
            }

            .expand-collapse-button svg {
                transform: rotate(90deg);
            }

            :host([expanded]) .expand-collapse-button svg {
                transform: rotate(180deg);
            }
        `,S`
            .expand-collapse-button {
                right: var(
                    --ni-private-expand-collapse-button-nested-width,
                    calc(${he} * -1)
                );
            }

            .expand-collapse-button svg {
                transform: rotate(180deg);
            }

            :host([expanded]) .expand-collapse-button svg {
                transform: rotate(135deg);
            }
        `)),Gq=class extends Sn{constructor(){super(...arguments),this.treeView=null,this.handleSelectedChange=n=>{n.target===this&&this.selected&&this.setGroupSelectionOnRootParentTreeItem(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("selected-change",this.handleSelectedChange),this.treeView=this.getParentTreeView(),this.treeView&&this.selected&&this.setGroupSelectionOnRootParentTreeItem(this)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("selected-change",this.handleSelectedChange),this.treeView=null}clearTreeGroupSelection(){var e;const n=null==(e=this.treeView)?void 0:e.querySelectorAll(`[${ec}]`);null==n||n.forEach(i=>i.removeAttribute(ec))}setGroupSelectionOnRootParentTreeItem(n){this.clearTreeGroupSelection();let e=n;for(;(null==e?void 0:e.parentElement)!==this.treeView;)e=null==e?void 0:e.parentElement;e&&e.setAttribute(ec,"true")}getParentTreeView(){return this.parentElement.closest("[role='tree']")}}.compose({baseName:"tree-item",baseClass:Sn,template:(t,n)=>L`
    <template
        role="treeitem"
        slot="${e=>e.isNestedItem()?"item":void 0}"
        tabindex="-1"
        class="${e=>e.expanded?"expanded":""} ${e=>e.selected?"selected":""} ${e=>e.nested?"nested":""}
            ${e=>e.disabled?"disabled":""}"
        aria-expanded="${e=>e.childItems&&e.childItemLength()>0?e.expanded:void 0}"
        aria-selected="${e=>e.selected}"
        aria-disabled="${e=>e.disabled}"
        @focusin="${(e,i)=>e.handleFocus(i.event)}"
        @focusout="${(e,i)=>e.handleBlur(i.event)}"
        ${h2({property:"childItems",filter:ks()})}
    >
        <div class="positioning-region" part="positioning-region">
            <div class="content-region" part="content-region">
                ${sn(e=>e.childItems&&e.childItemLength()>0,L`
                        <div
                            aria-hidden="true"
                            class="expand-collapse-button"
                            part="expand-collapse-button"
                            @click="${(e,i)=>e.handleExpandCollapseButtonClick(i.event)}"
                            ${Le("expandCollapseButton")}
                        >
                            <slot name="expand-collapse-glyph">
                                ${n.expandCollapseGlyph||""}
                            </slot>
                        </div>
                    `)}
                ${Fn(0,n)}
                <slot></slot>
                ${xn(0,n)}
            </div>
        </div>
        ${sn(e=>e.childItems&&e.childItemLength()>0&&(e.expanded||e.renderCollapsedChildren),L`
                <div role="group" class="items" part="items">
                    <slot name="item" ${at("items")}></slot>
                </div>
            `)}
    </template>
`,styles:Uq,expandCollapseGlyph:FM.data});B.getOrCreate().withPrefix("nimble").register(Gq());let f2=(()=>{class t extends Pe{constructor(){super(...arguments),this.currentFocused=null,this.handleFocus=e=>{if(!(this.slottedTreeItems.length<1)){if(e.target===this)return null===this.currentFocused&&(this.currentFocused=this.getValidFocusableItem()),void(null!==this.currentFocused&&Sn.focusItem(this.currentFocused));this.contains(e.target)&&(this.setAttribute("tabindex","-1"),this.currentFocused=e.target)}},this.handleBlur=e=>{e.target instanceof HTMLElement&&(null===e.relatedTarget||!this.contains(e.relatedTarget))&&this.setAttribute("tabindex","0")},this.handleKeyDown=e=>{if(e.defaultPrevented)return;if(this.slottedTreeItems.length<1)return!0;const i=this.getVisibleNodes();switch(e.key){case Hs:return void(i.length&&Sn.focusItem(i[0]));case js:return void(i.length&&Sn.focusItem(i[i.length-1]));case Vs:if(e.target&&this.isFocusableElement(e.target)){const o=e.target;o instanceof Sn&&o.childItemLength()>0&&o.expanded?o.expanded=!1:o instanceof Sn&&o.parentElement instanceof Sn&&Sn.focusItem(o.parentElement)}return!1;case $s:if(e.target&&this.isFocusableElement(e.target)){const o=e.target;o instanceof Sn&&o.childItemLength()>0&&!o.expanded?o.expanded=!0:o instanceof Sn&&o.childItemLength()>0&&this.focusNextNode(1,e.target)}return;case Wn:return void(e.target&&this.isFocusableElement(e.target)&&this.focusNextNode(1,e.target));case Gn:return void(e.target&&this.isFocusableElement(e.target)&&this.focusNextNode(-1,e.target));case Qi:return void this.handleClick(e)}return!0},this.handleSelectedChange=e=>{if(e.defaultPrevented)return;if(!(e.target instanceof Element&&Ji(e.target)))return!0;const i=e.target;i.selected?(this.currentSelected&&this.currentSelected!==i&&(this.currentSelected.selected=!1),this.currentSelected=i):!i.selected&&this.currentSelected===i&&(this.currentSelected=null)},this.setItems=()=>{const e=this.treeView.querySelector("[aria-selected='true']");this.currentSelected=e,(null===this.currentFocused||!this.contains(this.currentFocused))&&(this.currentFocused=this.getValidFocusableItem()),this.nested=this.checkForNestedItems(),this.getVisibleNodes().forEach(o=>{Ji(o)&&(o.nested=this.nested)})},this.isFocusableElement=e=>Ji(e),this.isSelectedElement=e=>e.selected}slottedTreeItemsChanged(){this.$fastController.isConnected&&this.setItems()}connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),ve.queueUpdate(()=>{this.setItems()})}handleClick(e){if(e.defaultPrevented)return;if(!(e.target instanceof Element&&Ji(e.target)))return!0;const i=e.target;i.disabled||(i.selected=!i.selected)}focusNextNode(e,i){const o=this.getVisibleNodes();if(!o)return;const r=o[o.indexOf(i)+e];Os(r)&&Sn.focusItem(r)}getValidFocusableItem(){const e=this.getVisibleNodes();let i=e.findIndex(this.isSelectedElement);return-1===i&&(i=e.findIndex(this.isFocusableElement)),-1!==i?e[i]:null}checkForNestedItems(){return this.slottedTreeItems.some(e=>Ji(e)&&e.querySelector("[role='treeitem']"))}getVisibleNodes(){return function(t,n){return t&&Os(t)?Array.from(t.querySelectorAll(n)).filter(i=>null!==i.offsetParent):void 0}(this,"[role='treeitem']")||[]}}return b([D({attribute:"render-collapsed-nodes"})],t.prototype,"renderCollapsedNodes",void 0),b([E],t.prototype,"currentSelected",void 0),b([E],t.prototype,"slottedTreeItems",void 0),t})();const Kq=S`
    ${Ge("flex")}

    :host {
        flex-direction: column;
        align-items: stretch;
        min-width: fit-content;
        font-size: 0;
    }
    :host(${$e}) {
        outline: none;
    }
`;class p2 extends f2{constructor(){super(...arguments),this.selectionMode="all"}handleClick(n){if(n.defaultPrevented)return!1;if(!(n.target instanceof Element&&Ji(n.target)))return!0;const e=n.target;return!e.disabled&&(this.canSelect(e)?e.selected=!0:this.itemHasChildren(e)&&(e.expanded=!e.expanded),!0)}canSelect(n){switch(this.selectionMode){case"all":return!0;case"none":return!1;case"leaves-only":return!this.itemHasChildren(n);default:return!0}}itemHasChildren(n){return null!==n.querySelector('[role="treeitem"]')}}ne([D({attribute:"selection-mode"})],p2.prototype,"selectionMode",void 0);const Xq=p2.compose({baseName:"tree-view",baseClass:f2,template:(t,n)=>L`
    <template
        role="tree"
        ${Le("treeView")}
        @keydown="${(e,i)=>e.handleKeyDown(i.event)}"
        @focusin="${(e,i)=>e.handleFocus(i.event)}"
        @focusout="${(e,i)=>e.handleBlur(i.event)}"
        @click="${(e,i)=>e.handleClick(i.event)}"
        @selected-change="${(e,i)=>e.handleSelectedChange(i.event)}"
    >
        <slot ${at("slottedTreeItems")}></slot>
    </template>
`,styles:Kq});B.getOrCreate().withPrefix("nimble").register(Xq());let m2=(()=>{class t extends Pe{constructor(){super(...arguments),this.anchor="",this.delay=300,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.horizontalInset="false",this.verticalInset="false",this.horizontalScaling="content",this.verticalScaling="content",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition=void 0,this.tooltipVisible=!1,this.currentDirection=Ft.ltr,this.showDelayTimer=null,this.hideDelayTimer=null,this.isAnchorHoveredFocused=!1,this.isRegionHovered=!1,this.handlePositionChange=e=>{this.classList.toggle("top","start"===this.region.verticalPosition),this.classList.toggle("bottom","end"===this.region.verticalPosition),this.classList.toggle("inset-top","insetStart"===this.region.verticalPosition),this.classList.toggle("inset-bottom","insetEnd"===this.region.verticalPosition),this.classList.toggle("center-vertical","center"===this.region.verticalPosition),this.classList.toggle("left","start"===this.region.horizontalPosition),this.classList.toggle("right","end"===this.region.horizontalPosition),this.classList.toggle("inset-left","insetStart"===this.region.horizontalPosition),this.classList.toggle("inset-right","insetEnd"===this.region.horizontalPosition),this.classList.toggle("center-horizontal","center"===this.region.horizontalPosition)},this.handleRegionMouseOver=e=>{this.isRegionHovered=!0},this.handleRegionMouseOut=e=>{this.isRegionHovered=!1,this.startHideDelayTimer()},this.handleAnchorMouseOver=e=>{this.tooltipVisible?this.isAnchorHoveredFocused=!0:this.startShowDelayTimer()},this.handleAnchorMouseOut=e=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.handleAnchorFocusIn=e=>{this.startShowDelayTimer()},this.handleAnchorFocusOut=e=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.startHideDelayTimer=()=>{this.clearHideDelayTimer(),this.tooltipVisible&&(this.hideDelayTimer=window.setTimeout(()=>{this.updateTooltipVisibility()},60))},this.clearHideDelayTimer=()=>{null!==this.hideDelayTimer&&(clearTimeout(this.hideDelayTimer),this.hideDelayTimer=null)},this.startShowDelayTimer=()=>{if(!this.isAnchorHoveredFocused){if(this.delay>1)return void(null===this.showDelayTimer&&(this.showDelayTimer=window.setTimeout(()=>{this.startHover()},this.delay)));this.startHover()}},this.startHover=()=>{this.isAnchorHoveredFocused=!0,this.updateTooltipVisibility()},this.clearShowDelayTimer=()=>{null!==this.showDelayTimer&&(clearTimeout(this.showDelayTimer),this.showDelayTimer=null)},this.getAnchor=()=>{const e=this.getRootNode();return e instanceof ShadowRoot?e.getElementById(this.anchor):document.getElementById(this.anchor)},this.handleDocumentKeydown=e=>{if(!e.defaultPrevented&&this.tooltipVisible)switch(e.key){case Ga:this.isAnchorHoveredFocused=!1,this.updateTooltipVisibility(),this.$emit("dismiss")}},this.updateTooltipVisibility=()=>{if(!1===this.visible)this.hideTooltip();else{if(!0===this.visible)return void this.showTooltip();if(this.isAnchorHoveredFocused||this.isRegionHovered)return void this.showTooltip();this.hideTooltip()}},this.showTooltip=()=>{this.tooltipVisible||(this.currentDirection=qs(this),this.tooltipVisible=!0,document.addEventListener("keydown",this.handleDocumentKeydown),ve.queueUpdate(this.setRegionProps))},this.hideTooltip=()=>{!this.tooltipVisible||(this.clearHideDelayTimer(),null!=this.region&&(this.region.removeEventListener("positionchange",this.handlePositionChange),this.region.viewportElement=null,this.region.anchorElement=null,this.region.removeEventListener("mouseover",this.handleRegionMouseOver),this.region.removeEventListener("mouseout",this.handleRegionMouseOut)),document.removeEventListener("keydown",this.handleDocumentKeydown),this.tooltipVisible=!1)},this.setRegionProps=()=>{!this.tooltipVisible||(this.region.viewportElement=this.viewportElement,this.region.anchorElement=this.anchorElement,this.region.addEventListener("positionchange",this.handlePositionChange),this.region.addEventListener("mouseover",this.handleRegionMouseOver,{passive:!0}),this.region.addEventListener("mouseout",this.handleRegionMouseOut,{passive:!0}))}}visibleChanged(){this.$fastController.isConnected&&(this.updateTooltipVisibility(),this.updateLayout())}anchorChanged(){this.$fastController.isConnected&&(this.anchorElement=this.getAnchor())}positionChanged(){this.$fastController.isConnected&&this.updateLayout()}anchorElementChanged(e){if(this.$fastController.isConnected){if(null!=e&&(e.removeEventListener("mouseover",this.handleAnchorMouseOver),e.removeEventListener("mouseout",this.handleAnchorMouseOut),e.removeEventListener("focusin",this.handleAnchorFocusIn),e.removeEventListener("focusout",this.handleAnchorFocusOut)),null!=this.anchorElement){this.anchorElement.addEventListener("mouseover",this.handleAnchorMouseOver,{passive:!0}),this.anchorElement.addEventListener("mouseout",this.handleAnchorMouseOut,{passive:!0}),this.anchorElement.addEventListener("focusin",this.handleAnchorFocusIn,{passive:!0}),this.anchorElement.addEventListener("focusout",this.handleAnchorFocusOut,{passive:!0});const i=this.anchorElement.id;null!==this.anchorElement.parentElement&&this.anchorElement.parentElement.querySelectorAll(":hover").forEach(o=>{o.id===i&&this.startShowDelayTimer()})}null!=this.region&&this.tooltipVisible&&(this.region.anchorElement=this.anchorElement),this.updateLayout()}}viewportElementChanged(){null!=this.region&&(this.region.viewportElement=this.viewportElement),this.updateLayout()}connectedCallback(){super.connectedCallback(),this.anchorElement=this.getAnchor(),this.updateTooltipVisibility()}disconnectedCallback(){this.hideTooltip(),this.clearShowDelayTimer(),this.clearHideDelayTimer(),super.disconnectedCallback()}updateLayout(){switch(this.verticalPositioningMode="locktodefault",this.horizontalPositioningMode="locktodefault",this.position){case"top":case"bottom":this.verticalDefaultPosition=this.position,this.horizontalDefaultPosition="center";break;case"right":case"left":case"start":case"end":this.verticalDefaultPosition="center",this.horizontalDefaultPosition=this.position;break;case"top-left":this.verticalDefaultPosition="top",this.horizontalDefaultPosition="left";break;case"top-right":this.verticalDefaultPosition="top",this.horizontalDefaultPosition="right";break;case"bottom-left":this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="left";break;case"bottom-right":this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="right";break;case"top-start":this.verticalDefaultPosition="top",this.horizontalDefaultPosition="start";break;case"top-end":this.verticalDefaultPosition="top",this.horizontalDefaultPosition="end";break;case"bottom-start":this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="start";break;case"bottom-end":this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="end";break;default:this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition="center"}}}return b([D({mode:"boolean"})],t.prototype,"visible",void 0),b([D],t.prototype,"anchor",void 0),b([D],t.prototype,"delay",void 0),b([D],t.prototype,"position",void 0),b([D({attribute:"auto-update-mode"})],t.prototype,"autoUpdateMode",void 0),b([D({attribute:"horizontal-viewport-lock"})],t.prototype,"horizontalViewportLock",void 0),b([D({attribute:"vertical-viewport-lock"})],t.prototype,"verticalViewportLock",void 0),b([E],t.prototype,"anchorElement",void 0),b([E],t.prototype,"viewportElement",void 0),b([E],t.prototype,"verticalPositioningMode",void 0),b([E],t.prototype,"horizontalPositioningMode",void 0),b([E],t.prototype,"horizontalInset",void 0),b([E],t.prototype,"verticalInset",void 0),b([E],t.prototype,"horizontalScaling",void 0),b([E],t.prototype,"verticalScaling",void 0),b([E],t.prototype,"verticalDefaultPosition",void 0),b([E],t.prototype,"horizontalDefaultPosition",void 0),b([E],t.prototype,"tooltipVisible",void 0),b([E],t.prototype,"currentDirection",void 0),t})();const Qq=S`
    ${Ge("inline-flex")}

    :host {
        font: ${U$};
        color: ${W$};
        text-align: left;
        --ni-private-tooltip-border-color: ${$(on,.3)};
        --ni-private-tooltip-background-color: ${At};
    }

    .tooltip {
        box-sizing: border-box;
        flex-shrink: 0;
        max-width: 440px;
        box-shadow: 0px 3px 4px ${pr};
        display: inline-flex;
        border: ${P} solid var(--ni-private-tooltip-border-color);
        background-color: var(--ni-private-tooltip-background-color);
        padding-bottom: 6px;
        padding-left: calc(${Ve} / 2);
        padding-right: calc(${Ve} / 2);
        padding-top: ${En};
    }

    .status-icon {
        display: none;
        width: 14px;
        height: 14px;
        padding-right: 8px;
    }

    :host([severity='error'][icon-visible]) [severity='error'] {
        display: flex;
        flex: 0 0 auto;
    }

    :host([severity='information'][icon-visible]) [severity='information'] {
        display: flex;
        flex: 0 0 auto;
    }
`.withBehaviors(pt(Fe.light,S`
            :host([severity='error']) {
                --ni-private-tooltip-border-color: ${pM};
                --ni-private-tooltip-background-color: ${Ce};
            }

            :host([severity='information']) {
                --ni-private-tooltip-border-color: ${hM};
                --ni-private-tooltip-background-color: ${Ce};
            }
        `),pt(Fe.dark,S`
            :host {
                --ni-private-tooltip-border-color: ${$(At,.3)};
                --ni-private-tooltip-background-color: ${La};
            }

            :host([severity='information']) {
                --ni-private-tooltip-border-color: ${dM};
            }

            :host([severity='error']) {
                --ni-private-tooltip-border-color: ${pM};
            }
        `),pt(Fe.color,S`
            .anchored-region {
                background-color: ${As};
            }

            :host {
                --ni-private-tooltip-border-color: ${$(Ce,.3)};
                --ni-private-tooltip-background-color: ${$(Ce,.15)};
            }

            :host([severity='error']) {
                --ni-private-tooltip-border-color: ${Ce};
            }

            :host([severity='information']) {
                --ni-private-tooltip-border-color: ${Ce};
            }

            .status-icon {
                opacity: 0.6;
            }
        `)),Zq=L`
            ${sn(t=>t.tooltipVisible,L`
            <${B.tagFor(Qa)}
                class="anchored-region"
                fixed-placement="true"
                auto-update-mode="${t=>t.autoUpdateMode}"
                vertical-positioning-mode="${t=>t.verticalPositioningMode}"
                vertical-default-position="${t=>t.verticalDefaultPosition}"
                vertical-inset="${t=>t.verticalInset}"
                vertical-scaling="${t=>t.verticalScaling}"
                horizontal-positioning-mode="${t=>t.horizontalPositioningMode}"
                horizontal-default-position="${t=>t.horizontalDefaultPosition}"
                horizontal-scaling="${t=>t.horizontalScaling}"
                horizontal-inset="${t=>t.horizontalInset}"
                vertical-viewport-lock="${t=>t.horizontalViewportLock}"
                horizontal-viewport-lock="${t=>t.verticalViewportLock}"
                dir="${t=>t.currentDirection}"
                ${Le("region")}
            >
                <div class="tooltip" part="tooltip" role="tooltip">
                    <${B.tagFor(hi)}
                        severity="error"
                        class="status-icon"
                    ></${B.tagFor(hi)}>
                    <${B.tagFor(hb)}
                        severity="information"
                        class="status-icon"
                    ></${B.tagFor(hb)}>
                    <slot></slot>
                </div>
            </${B.tagFor(Qa)}>
        `)}
`;class _b extends m2{constructor(){super(...arguments),this.iconVisible=!1}}ne([D],_b.prototype,"severity",void 0),ne([D({attribute:"icon-visible",mode:"boolean"})],_b.prototype,"iconVisible",void 0);const Yq=_b.compose({baseName:"tooltip",baseClass:m2,template:Zq,styles:Qq});B.getOrCreate().withPrefix("nimble").register(Yq());let Jq=(()=>{class t{constructor(e,i){this.renderer=e,this.elementRef=i}get appearance(){return this.elementRef.nativeElement.appearance}set appearance(e){this.renderer.setProperty(this.elementRef.nativeElement,"appearance",e)}}return t.\u0275fac=function(e){return new(e||t)(I(de),I(U))},t.\u0275dir=F({type:t,selectors:[["nimble-breadcrumb"]],inputs:{appearance:"appearance"}}),t})(),eK=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=oe({type:t}),t.\u0275inj=te({imports:[[xe]]}),t})(),tK=(()=>{class t extends wd{set nimbleRouterLink(e){this.routerLink=e}}return t.\u0275fac=function(){let n;return function(i){return(n||(n=kt(t)))(i||t)}}(),t.\u0275dir=F({type:t,selectors:[["nimble-breadcrumb-item","nimbleRouterLink",""]],inputs:{nimbleRouterLink:"nimbleRouterLink"},features:[we]}),t})(),nK=(()=>{class t{constructor(e,i){this.renderer=e,this.elementRef=i}get href(){return this.elementRef.nativeElement.href}set href(e){this.renderer.setProperty(this.elementRef.nativeElement,"href",e)}get hreflang(){return this.elementRef.nativeElement.hreflang}set hreflang(e){this.renderer.setProperty(this.elementRef.nativeElement,"hreflang",e)}get ping(){return this.elementRef.nativeElement.ping}set ping(e){this.renderer.setProperty(this.elementRef.nativeElement,"ping",e)}get referrerpolicy(){return this.elementRef.nativeElement.referrerpolicy}set referrerpolicy(e){this.renderer.setProperty(this.elementRef.nativeElement,"referrerpolicy",e)}get rel(){return this.elementRef.nativeElement.rel}set rel(e){this.renderer.setProperty(this.elementRef.nativeElement,"rel",e)}get target(){return this.elementRef.nativeElement.target}set target(e){this.renderer.setProperty(this.elementRef.nativeElement,"target",e)}get type(){return this.elementRef.nativeElement.type}set type(e){this.renderer.setProperty(this.elementRef.nativeElement,"type",e)}}return t.\u0275fac=function(e){return new(e||t)(I(de),I(U))},t.\u0275dir=F({type:t,selectors:[["nimble-breadcrumb-item"]],inputs:{href:"href",hreflang:"hreflang",ping:"ping",referrerpolicy:"referrerpolicy",rel:"rel",target:"target",type:"type"}}),t})(),iK=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=oe({type:t}),t.\u0275inj=te({imports:[[xe]]}),t})();const q=t=>!(!1===t||null===t),So=t=>Number(t);let g2=(()=>{class t{constructor(e,i){this.renderer=e,this.elementRef=i}get appearance(){return this.elementRef.nativeElement.appearance}set appearance(e){this.renderer.setProperty(this.elementRef.nativeElement,"appearance",e)}get appearanceVariant(){return this.elementRef.nativeElement.appearanceVariant}set appearanceVariant(e){this.renderer.setProperty(this.elementRef.nativeElement,"appearanceVariant",e)}get disabled(){return this.elementRef.nativeElement.disabled}set disabled(e){this.renderer.setProperty(this.elementRef.nativeElement,"disabled",q(e))}get type(){return this.elementRef.nativeElement.type}set type(e){this.renderer.setProperty(this.elementRef.nativeElement,"type",e)}get contentHidden(){return this.elementRef.nativeElement.contentHidden}set contentHidden(e){this.renderer.setProperty(this.elementRef.nativeElement,"contentHidden",q(e))}}return t.\u0275fac=function(e){return new(e||t)(I(de),I(U))},t.\u0275dir=F({type:t,selectors:[["nimble-button"]],inputs:{appearance:"appearance",appearanceVariant:["appearance-variant","appearanceVariant"],disabled:"disabled",type:"type",contentHidden:["content-hidden","contentHidden"]}}),t})(),rK=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=oe({type:t}),t.\u0275inj=te({imports:[[xe]]}),t})(),sK=(()=>{class t{constructor(e,i){this.renderer=e,this.elementRef=i}get disabled(){return this.elementRef.nativeElement.disabled}set disabled(e){this.renderer.setProperty(this.elementRef.nativeElement,"disabled",q(e))}get selected(){return this.elementRef.nativeElement.selected}set selected(e){this.renderer.setProperty(this.elementRef.nativeElement,"selected",q(e))}}return t.\u0275fac=function(e){return new(e||t)(I(de),I(U))},t.\u0275dir=F({type:t,selectors:[["nimble-card-button"]],inputs:{disabled:"disabled",selected:"selected"}}),t})(),lK=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=oe({type:t}),t.\u0275inj=te({imports:[[xe]]}),t})(),aK=(()=>{class t{constructor(e,i){this.renderer=e,this.elementRef=i}get disabled(){return this.elementRef.nativeElement.disabled}set disabled(e){this.renderer.setProperty(this.elementRef.nativeElement,"disabled",q(e))}get checked(){return this.elementRef.nativeElement.checked}set checked(e){this.renderer.setProperty(this.elementRef.nativeElement,"checked",q(e))}get indeterminate(){return this.elementRef.nativeElement.indeterminate}set indeterminate(e){this.renderer.setProperty(this.elementRef.nativeElement,"indeterminate",q(e))}}return t.\u0275fac=function(e){return new(e||t)(I(de),I(U))},t.\u0275dir=F({type:t,selectors:[["nimble-checkbox"]],inputs:{disabled:"disabled",checked:"checked",indeterminate:"indeterminate"}}),t})(),cK=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=oe({type:t}),t.\u0275inj=te({imports:[[xe]]}),t})();const b2=Symbol("not found");let v2=(()=>{class t{constructor(e,i){this._renderer=e,this._elementRef=i,this._optionMap=new Map,this._compareWith=Object.is}set compareWith(e){if("function"!=typeof e)throw new Error(`compareWith must be a function, but received ${JSON.stringify(e)}`);this._compareWith=e}writeValue(e){this._modelValue=e,this.updateDisplayValue()}registerOnChange(e){this.onChange=i=>{const o=this._optionMap.has(i)?this._optionMap.get(i):b2;this._modelValue=o,e(o)}}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.setProperty("disabled",e)}addOption(e,i){this._optionMap.set(e,i),this.updateDisplayValue()}removeOption(e){this._optionMap.delete(e)}updateDisplayValue(){const e=this.getValueStringFromValue(this._modelValue);this.setProperty("value",null!=e?e:"")}getValueStringFromValue(e){for(const[i,o]of this._optionMap.entries())if(this._compareWith(o,e))return i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}}return t.\u0275fac=function(e){return new(e||t)(I(de),I(U))},t.\u0275dir=F({type:t,selectors:[["nimble-combobox","formControlName",""],["nimble-combobox","formControl",""],["nimble-combobox","ngModel",""]],hostBindings:function(e,i){1&e&&se("input",function(r){return i.onChange(r.target.control.value)})("change",function(r){return i.onChange(r.target.value)})("blur",function(){return i.onTouched()})},inputs:{compareWith:"compareWith"},features:[Re([{provide:Jt,useExisting:Me(()=>t),multi:!0}])]}),t})(),uK=(()=>{class t{constructor(e,i){this.renderer=e,this.elementRef=i}get appearance(){return this.elementRef.nativeElement.appearance}set appearance(e){this.renderer.setProperty(this.elementRef.nativeElement,"appearance",e)}get disabled(){return this.elementRef.nativeElement.disabled}set disabled(e){this.renderer.setProperty(this.elementRef.nativeElement,"disabled",q(e))}get autocomplete(){return this.elementRef.nativeElement.autocomplete}set autocomplete(e){this.renderer.setProperty(this.elementRef.nativeElement,"autocomplete",e)}get placeholder(){return this.elementRef.nativeElement.placeholder}set placeholder(e){this.renderer.setProperty(this.elementRef.nativeElement,"placeholder",e)}get errorText(){return this.elementRef.nativeElement.errorText}set errorText(e){this.renderer.setProperty(this.elementRef.nativeElement,"errorText",e)}get errorVisible(){return this.elementRef.nativeElement.errorVisible}set errorVisible(e){this.renderer.setProperty(this.elementRef.nativeElement,"errorVisible",q(e))}}return t.\u0275fac=function(e){return new(e||t)(I(de),I(U))},t.\u0275dir=F({type:t,selectors:[["nimble-combobox"]],inputs:{appearance:"appearance",disabled:"disabled",autocomplete:"autocomplete",placeholder:"placeholder",errorText:["error-text","errorText"],errorVisible:["error-visible","errorVisible"]}}),t})(),dK=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=oe({type:t}),t.\u0275inj=te({imports:[[xe]]}),t})(),y2=(()=>{class t{constructor(e,i){this.renderer=e,this.elementRef=i}get preventDismiss(){return this.elementRef.nativeElement.preventDismiss}set preventDismiss(e){this.renderer.setProperty(this.elementRef.nativeElement,"preventDismiss",q(e))}get headerHidden(){return this.elementRef.nativeElement.headerHidden}set headerHidden(e){this.renderer.setProperty(this.elementRef.nativeElement,"headerHidden",q(e))}get footerHidden(){return this.elementRef.nativeElement.footerHidden}set footerHidden(e){this.renderer.setProperty(this.elementRef.nativeElement,"footerHidden",q(e))}get open(){return this.elementRef.nativeElement.open}show(){return _N(this,void 0,void 0,function*(){return this.elementRef.nativeElement.show()})}close(e){this.elementRef.nativeElement.close(e)}}return t.\u0275fac=function(e){return new(e||t)(I(de),I(U))},t.\u0275dir=F({type:t,selectors:[["nimble-dialog"]],inputs:{preventDismiss:["prevent-dismiss","preventDismiss"],headerHidden:["header-hidden","headerHidden"],footerHidden:["footer-hidden","footerHidden"]}}),t})(),hK=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=oe({type:t}),t.\u0275inj=te({imports:[[xe]]}),t})(),Jd=(()=>{class t{constructor(e,i){this.renderer=e,this.elementRef=i}get location(){return this.elementRef.nativeElement.location}set location(e){this.renderer.setProperty(this.elementRef.nativeElement,"location",e)}get preventDismiss(){return this.elementRef.nativeElement.preventDismiss}set preventDismiss(e){this.renderer.setProperty(this.elementRef.nativeElement,"preventDismiss",q(e))}get ariaLabel(){return this.elementRef.nativeElement.ariaLabel}set ariaLabel(e){this.renderer.setProperty(this.elementRef.nativeElement,"ariaLabel",e)}get open(){return this.elementRef.nativeElement.open}show(){return _N(this,void 0,void 0,function*(){return this.elementRef.nativeElement.show()})}close(e){this.elementRef.nativeElement.close(e)}}return t.\u0275fac=function(e){return new(e||t)(I(de),I(U))},t.\u0275dir=F({type:t,selectors:[["nimble-drawer"]],inputs:{location:"location",preventDismiss:["prevent-dismiss","preventDismiss"],ariaLabel:["aria-label","ariaLabel"]}}),t})(),fK=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=oe({type:t}),t.\u0275inj=te({imports:[[xe]]}),t})(),pK=(()=>{class t{constructor(e,i){this.renderer=e,this.elementRef=i}get severity(){return this.elementRef.nativeElement.severity}set severity(e){this.renderer.setProperty(this.elementRef.nativeElement,"severity",e)}}return t.\u0275fac=function(e){return new(e||t)(I(de),I(U))},t.\u0275dir=F({type:t,inputs:{severity:"severity"}}),t})(),mK=(()=>{class t extends pK{}return t.\u0275fac=function(){let n;return function(i){return(n||(n=kt(t)))(i||t)}}(),t.\u0275dir=F({type:t,selectors:[["nimble-icon-add"]],features:[we]}),t})(),gK=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=oe({type:t}),t.\u0275inj=te({imports:[[xe]]}),t})(),D2=(()=>{class t{constructor(e,i,o,r){this.elementRef=e,this.renderer=i,this.changeDetector=o,this.combobox=r,this._modelValue=void 0}get disabled(){return this.elementRef.nativeElement.disabled}set disabled(e){this.renderer.setProperty(this.elementRef.nativeElement,"disabled",q(e))}set ngValue(e){this.combobox&&(this._modelValue=e,this.updateComboboxValue(e))}ngAfterViewInit(){this.combobox&&(this._currentTextContent=this.elementRef.nativeElement.textContent,this.combobox.addOption(this._currentTextContent,this._modelValue))}ngOnDestroy(){this.combobox&&this.combobox.removeOption(this._currentTextContent)}updateComboboxValue(e){this.combobox.removeOption(this._currentTextContent),this.changeDetector.detectChanges(),this._currentTextContent=this.elementRef.nativeElement.textContent,this.combobox.addOption(this._currentTextContent,e)}}return t.\u0275fac=function(e){return new(e||t)(I(U),I(de),I(du),I(v2,9))},t.\u0275dir=F({type:t,selectors:[["nimble-list-option"]],inputs:{disabled:"disabled",ngValue:"ngValue"}}),t})(),Nb=(()=>{class t extends rd{}return t.\u0275fac=function(){let n;return function(i){return(n||(n=kt(t)))(i||t)}}(),t.\u0275dir=F({type:t,selectors:[["nimble-select","formControlName","",3,"multiple",""],["nimble-select","formControl","",3,"multiple",""],["nimble-select","ngModel","",3,"multiple",""]],hostBindings:function(e,i){1&e&&se("change",function(r){return i.onChange(r.target.value)})("blur",function(){return i.onTouched()})},features:[Re([{provide:Jt,useExisting:Me(()=>t),multi:!0}]),we]}),t})(),I2=(()=>{class t extends r_{constructor(e,i,o){super(e,i,o),this.elementRef=e,this.renderer=i}get disabled(){return this.elementRef.nativeElement.disabled}set disabled(e){this.renderer.setProperty(this.elementRef.nativeElement,"disabled",q(e))}}return t.\u0275fac=function(e){return new(e||t)(I(U),I(de),I(Nb,9))},t.\u0275dir=F({type:t,selectors:[["nimble-list-option"]],inputs:{disabled:"disabled"},features:[we]}),t})(),bK=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=oe({type:t}),t.\u0275inj=te({imports:[[xe]]}),t})(),C2=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=F({type:t,selectors:[["nimble-menu"]]}),t})(),vK=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=oe({type:t}),t.\u0275inj=te({imports:[[xe]]}),t})(),w2=(()=>{class t{constructor(e,i){this.renderer=e,this.elementRef=i,this.openChange=new et}get appearance(){return this.elementRef.nativeElement.appearance}set appearance(e){this.renderer.setProperty(this.elementRef.nativeElement,"appearance",e)}get disabled(){return this.elementRef.nativeElement.disabled}set disabled(e){this.renderer.setProperty(this.elementRef.nativeElement,"disabled",q(e))}get contentHidden(){return this.elementRef.nativeElement.contentHidden}set contentHidden(e){this.renderer.setProperty(this.elementRef.nativeElement,"contentHidden",q(e))}get open(){return this.elementRef.nativeElement.open}set open(e){this.renderer.setProperty(this.elementRef.nativeElement,"open",q(e))}onOpenChange(e){e.target===this.elementRef.nativeElement&&this.openChange.emit(this.open)}}return t.\u0275fac=function(e){return new(e||t)(I(de),I(U))},t.\u0275dir=F({type:t,selectors:[["nimble-menu-button"]],hostBindings:function(e,i){1&e&&se("open-change",function(r){return i.onOpenChange(r)})},inputs:{appearance:"appearance",disabled:"disabled",contentHidden:["content-hidden","contentHidden"],open:"open"},outputs:{openChange:"openChange"}}),t})(),yK=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=oe({type:t}),t.\u0275inj=te({imports:[[xe]]}),t})(),_2=(()=>{class t{constructor(e,i){this.renderer=e,this.elementRef=i}get disabled(){return this.elementRef.nativeElement.disabled}set disabled(e){this.renderer.setProperty(this.elementRef.nativeElement,"disabled",q(e))}}return t.\u0275fac=function(e){return new(e||t)(I(de),I(U))},t.\u0275dir=F({type:t,selectors:[["nimble-menu-item"]],inputs:{disabled:"disabled"}}),t})(),DK=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=oe({type:t}),t.\u0275inj=te({imports:[[xe]]}),t})(),IK=(()=>{class t{constructor(e,i){this.renderer=e,this.elementRef=i}get appearance(){return this.elementRef.nativeElement.appearance}set appearance(e){this.renderer.setProperty(this.elementRef.nativeElement,"appearance",e)}get readOnly(){return this.elementRef.nativeElement.readOnly}set readOnly(e){this.renderer.setProperty(this.elementRef.nativeElement,"readOnly",q(e))}get min(){return this.elementRef.nativeElement.min}set min(e){this.renderer.setProperty(this.elementRef.nativeElement,"min",So(e))}get max(){return this.elementRef.nativeElement.max}set max(e){this.renderer.setProperty(this.elementRef.nativeElement,"max",So(e))}get step(){return this.elementRef.nativeElement.step}set step(e){this.renderer.setProperty(this.elementRef.nativeElement,"step",So(e))}get placeholder(){return this.elementRef.nativeElement.placeholder}set placeholder(e){this.renderer.setProperty(this.elementRef.nativeElement,"placeholder",e)}get errorText(){return this.elementRef.nativeElement.errorText}set errorText(e){this.renderer.setProperty(this.elementRef.nativeElement,"errorText",e)}get errorVisible(){return this.elementRef.nativeElement.errorVisible}set errorVisible(e){this.renderer.setProperty(this.elementRef.nativeElement,"errorVisible",q(e))}}return t.\u0275fac=function(e){return new(e||t)(I(de),I(U))},t.\u0275dir=F({type:t,selectors:[["nimble-number-field"]],inputs:{appearance:"appearance",readOnly:["readonly","readOnly"],min:"min",max:"max",step:"step",placeholder:"placeholder",errorText:["error-text","errorText"],errorVisible:["error-visible","errorVisible"]}}),t})(),CK=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=oe({type:t}),t.\u0275inj=te({imports:[[xe]]}),t})(),wK=(()=>{class t{constructor(e,i){this._renderer=e,this._elementRef=i,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}return t.\u0275fac=function(e){return new(e||t)(I(de),I(U))},t.\u0275dir=F({type:t}),t})(),_K=(()=>{class t extends wK{}return t.\u0275fac=function(){let n;return function(i){return(n||(n=kt(t)))(i||t)}}(),t.\u0275dir=F({type:t,features:[we]}),t})();const NK={provide:Jt,useExisting:Me(()=>x2),multi:!0};let N2=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=oe({type:t}),t.\u0275inj=te({}),t})(),M2=(()=>{class t{constructor(){this._accessors=[]}add(e,i){this._accessors.push([e,i])}remove(e){for(let i=this._accessors.length-1;i>=0;--i)if(this._accessors[i][1]===e)return void this._accessors.splice(i,1)}select(e){this._accessors.forEach(i=>{this._isSameGroup(i,e)&&i[1]!==e&&i[1].fireUncheck(e.value)})}_isSameGroup(e,i){return!!e[0].control&&e[0]._parent===i._control._parent&&e[1].name===i.name}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=ie({token:t,factory:t.\u0275fac,providedIn:N2}),t})(),x2=(()=>{class t extends _K{constructor(e,i,o,r){super(e,i),this._registry=o,this._injector=r,this.onChange=()=>{}}ngOnInit(){this._control=this._injector.get(Ui),this._checkName(),this._registry.add(this._control,this)}ngOnDestroy(){this._registry.remove(this)}writeValue(e){this._state=e===this.value,this.setProperty("checked",this._state)}registerOnChange(e){this._fn=e,this.onChange=()=>{e(this.value),this._registry.select(this)}}fireUncheck(e){this.writeValue(e)}_checkName(){!this.name&&this.formControlName&&(this.name=this.formControlName)}}return t.\u0275fac=function(e){return new(e||t)(I(de),I(U),I(M2),I(ye))},t.\u0275dir=F({type:t,selectors:[["input","type","radio","formControlName",""],["input","type","radio","formControl",""],["input","type","radio","ngModel",""]],hostBindings:function(e,i){1&e&&se("change",function(){return i.onChange()})("blur",function(){return i.onTouched()})},inputs:{name:"name",formControlName:"formControlName",value:"value"},features:[Re([NK]),we]}),t})(),MK=(()=>{class t extends x2{constructor(e,i,o,r){super(e,i,o,r),this.elementRef=i}static allocateId(){const e=t._nextOpenId.toString();return t._nextOpenId+=1,e}ngOnInit(){super.ngOnInit(),this.elementRef.nativeElement.value=t.allocateId()}writeValue(e){super.writeValue(e);const i=this.elementRef.nativeElement.parentElement;this.value===e&&i&&i instanceof YM&&(i.value=this.elementRef.nativeElement.value)}nimbleOnChange(e){e&&this._privateOnChange&&this._privateOnChange()}registerOnChange(e){super.registerOnChange(e),this._privateOnChange=this.onChange,this.onChange=()=>{}}}return t._nextOpenId=0,t.\u0275fac=function(e){return new(e||t)(I(de),I(U),I(M2),I(ye))},t.\u0275dir=F({type:t,selectors:[["nimble-radio","formControlName",""],["nimble-radio","formControl",""],["nimble-radio","ngModel",""]],hostBindings:function(e,i){1&e&&se("change",function(r){return i.nimbleOnChange(r.target.checked)})("blur",function(){return i.onTouched()})},features:[Re([{provide:Jt,useExisting:Me(()=>t),multi:!0}]),we]}),t})(),xK=(()=>{class t{constructor(e,i){this.renderer=e,this.elementRef=i}get disabled(){return this.elementRef.nativeElement.disabled}set disabled(e){this.renderer.setProperty(this.elementRef.nativeElement,"disabled",q(e))}}return t.\u0275fac=function(e){return new(e||t)(I(de),I(U))},t.\u0275dir=F({type:t,selectors:[["nimble-radio"]],inputs:{disabled:"disabled"}}),t})(),FK=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=oe({type:t}),t.\u0275inj=te({imports:[[xe,N2]]}),t})(),EK=(()=>{class t{constructor(e,i){this.renderer=e,this.elementRef=i}get disabled(){return this.elementRef.nativeElement.disabled}set disabled(e){this.renderer.setProperty(this.elementRef.nativeElement,"disabled",q(e))}get name(){return this.elementRef.nativeElement.name}set name(e){this.renderer.setProperty(this.elementRef.nativeElement,"name",e)}get orientation(){return this.elementRef.nativeElement.orientation}set orientation(e){this.renderer.setProperty(this.elementRef.nativeElement,"orientation",e)}}return t.\u0275fac=function(e){return new(e||t)(I(de),I(U))},t.\u0275dir=F({type:t,selectors:[["nimble-radio-group"]],inputs:{disabled:"disabled",name:"name",orientation:"orientation"}}),t})(),kK=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=oe({type:t}),t.\u0275inj=te({imports:[[xe]]}),t})(),F2=(()=>{class t{constructor(e,i){this.renderer=e,this.elementRef=i}get appearance(){return this.elementRef.nativeElement.appearance}set appearance(e){this.renderer.setProperty(this.elementRef.nativeElement,"appearance",e)}get disabled(){return this.elementRef.nativeElement.disabled}set disabled(e){this.renderer.setProperty(this.elementRef.nativeElement,"disabled",q(e))}get errorText(){return this.elementRef.nativeElement.errorText}set errorText(e){this.renderer.setProperty(this.elementRef.nativeElement,"errorText",e)}get errorVisible(){return this.elementRef.nativeElement.errorVisible}set errorVisible(e){this.renderer.setProperty(this.elementRef.nativeElement,"errorVisible",q(e))}}return t.\u0275fac=function(e){return new(e||t)(I(de),I(U))},t.\u0275dir=F({type:t,selectors:[["nimble-select"]],inputs:{appearance:"appearance",disabled:"disabled",errorText:["error-text","errorText"],errorVisible:["error-visible","errorVisible"]}}),t})(),SK=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=oe({type:t}),t.\u0275inj=te({imports:[[xe]]}),t})(),TK=(()=>{class t{constructor(e,i){this.renderer=e,this.elementRef=i}get disabled(){return this.elementRef.nativeElement.disabled}set disabled(e){this.renderer.setProperty(this.elementRef.nativeElement,"disabled",q(e))}get checked(){return this.elementRef.nativeElement.checked}set checked(e){this.renderer.setProperty(this.elementRef.nativeElement,"checked",q(e))}}return t.\u0275fac=function(e){return new(e||t)(I(de),I(U))},t.\u0275dir=F({type:t,selectors:[["nimble-switch"]],inputs:{disabled:"disabled",checked:"checked"}}),t})(),AK=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=oe({type:t}),t.\u0275inj=te({imports:[[xe]]}),t})(),RK=(()=>{class t{constructor(e,i){this.renderer=e,this.elementRef=i}get disabled(){return this.elementRef.nativeElement.disabled}set disabled(e){this.renderer.setProperty(this.elementRef.nativeElement,"disabled",q(e))}}return t.\u0275fac=function(e){return new(e||t)(I(de),I(U))},t.\u0275dir=F({type:t,selectors:[["nimble-tab"]],inputs:{disabled:"disabled"}}),t})(),PK=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=oe({type:t}),t.\u0275inj=te({imports:[[xe]]}),t})(),BK=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=F({type:t,selectors:[["nimble-tab-panel"]]}),t})(),OK=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=oe({type:t}),t.\u0275inj=te({imports:[[xe]]}),t})(),LK=(()=>{class t{constructor(e,i){this.renderer=e,this.elementRef=i,this.activeidChange=new et}get activeid(){return this.elementRef.nativeElement.activeid}set activeid(e){this.renderer.setProperty(this.elementRef.nativeElement,"activeid",e)}onChange(e){e.target===this.elementRef.nativeElement&&this.activeidChange.emit(this.activeid)}}return t.\u0275fac=function(e){return new(e||t)(I(de),I(U))},t.\u0275dir=F({type:t,selectors:[["nimble-tabs"]],hostBindings:function(e,i){1&e&&se("change",function(r){return i.onChange(r)})},inputs:{activeid:"activeid"},outputs:{activeidChange:"activeidChange"}}),t})(),VK=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=oe({type:t}),t.\u0275inj=te({imports:[[xe]]}),t})(),$K=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=F({type:t,selectors:[["nimble-tabs-toolbar"]]}),t})(),HK=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=oe({type:t}),t.\u0275inj=te({imports:[[xe]]}),t})(),jK=(()=>{class t{constructor(e,i){this.renderer=e,this.elementRef=i}get appearance(){return this.elementRef.nativeElement.appearance}set appearance(e){this.renderer.setProperty(this.elementRef.nativeElement,"appearance",e)}get readOnly(){return this.elementRef.nativeElement.readOnly}set readOnly(e){this.renderer.setProperty(this.elementRef.nativeElement,"readOnly",q(e))}get resize(){return this.elementRef.nativeElement.resize}set resize(e){this.renderer.setProperty(this.elementRef.nativeElement,"resize",e)}get autofocus(){return this.elementRef.nativeElement.autofocus}set autofocus(e){this.renderer.setProperty(this.elementRef.nativeElement,"autofocus",q(e))}get disabled(){return this.elementRef.nativeElement.disabled}set disabled(e){this.renderer.setProperty(this.elementRef.nativeElement,"disabled",q(e))}get required(){return this.elementRef.nativeElement.required}set required(e){this.renderer.setProperty(this.elementRef.nativeElement,"required",q(e))}get formId(){return this.elementRef.nativeElement.formId}set formId(e){this.renderer.setProperty(this.elementRef.nativeElement,"formId",e)}get maxlength(){return this.elementRef.nativeElement.maxlength}set maxlength(e){this.renderer.setProperty(this.elementRef.nativeElement,"maxlength",So(e))}get minlength(){return this.elementRef.nativeElement.minlength}set minlength(e){this.renderer.setProperty(this.elementRef.nativeElement,"minlength",So(e))}get placeholder(){return this.elementRef.nativeElement.placeholder}set placeholder(e){this.renderer.setProperty(this.elementRef.nativeElement,"placeholder",e)}get cols(){return this.elementRef.nativeElement.cols}set cols(e){this.renderer.setProperty(this.elementRef.nativeElement,"cols",So(e))}get rows(){return this.elementRef.nativeElement.rows}set rows(e){this.renderer.setProperty(this.elementRef.nativeElement,"rows",So(e))}get spellcheck(){return this.elementRef.nativeElement.spellcheck}set spellcheck(e){this.renderer.setProperty(this.elementRef.nativeElement,"spellcheck",q(e))}}return t.\u0275fac=function(e){return new(e||t)(I(de),I(U))},t.\u0275dir=F({type:t,selectors:[["nimble-text-area"]],inputs:{appearance:"appearance",readOnly:["readonly","readOnly"],resize:"resize",autofocus:"autofocus",disabled:"disabled",required:"required",formId:["form","formId"],maxlength:"maxlength",minlength:"minlength",placeholder:"placeholder",cols:"cols",rows:"rows",spellcheck:"spellcheck"}}),t})(),zK=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=oe({type:t}),t.\u0275inj=te({imports:[[xe]]}),t})(),UK=(()=>{class t extends Xu{}return t.\u0275fac=function(){let n;return function(i){return(n||(n=kt(t)))(i||t)}}(),t.\u0275dir=F({type:t,selectors:[["nimble-text-field","formControlName",""],["nimble-text-field","formControl",""],["nimble-text-field","ngModel",""]],hostBindings:function(e,i){1&e&&se("input",function(r){return i._handleInput(r.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(r){return i._compositionEnd(r.target.value)})},features:[Re([{provide:Jt,useExisting:Me(()=>t),multi:!0}]),we]}),t})(),WK=(()=>{class t{constructor(e,i){this.renderer=e,this.elementRef=i}get appearance(){return this.elementRef.nativeElement.appearance}set appearance(e){this.renderer.setProperty(this.elementRef.nativeElement,"appearance",e)}get readOnly(){return this.elementRef.nativeElement.readOnly}set readOnly(e){this.renderer.setProperty(this.elementRef.nativeElement,"readOnly",q(e))}get type(){return this.elementRef.nativeElement.type}set type(e){this.renderer.setProperty(this.elementRef.nativeElement,"type",e)}get autofocus(){return this.elementRef.nativeElement.autofocus}set autofocus(e){this.renderer.setProperty(this.elementRef.nativeElement,"autofocus",q(e))}get disabled(){return this.elementRef.nativeElement.disabled}set disabled(e){this.renderer.setProperty(this.elementRef.nativeElement,"disabled",q(e))}get required(){return this.elementRef.nativeElement.required}set required(e){this.renderer.setProperty(this.elementRef.nativeElement,"required",q(e))}get placeholder(){return this.elementRef.nativeElement.placeholder}set placeholder(e){this.renderer.setProperty(this.elementRef.nativeElement,"placeholder",e)}get maxlength(){return this.elementRef.nativeElement.maxlength}set maxlength(e){this.renderer.setProperty(this.elementRef.nativeElement,"maxlength",e)}get minlength(){return this.elementRef.nativeElement.minlength}set minlength(e){this.renderer.setProperty(this.elementRef.nativeElement,"minlength",e)}get pattern(){return this.elementRef.nativeElement.pattern}set pattern(e){this.renderer.setProperty(this.elementRef.nativeElement,"pattern",e)}get errorText(){return this.elementRef.nativeElement.errorText}set errorText(e){this.renderer.setProperty(this.elementRef.nativeElement,"errorText",e)}get errorVisible(){return this.elementRef.nativeElement.errorVisible}set errorVisible(e){this.renderer.setProperty(this.elementRef.nativeElement,"errorVisible",q(e))}get size(){return this.elementRef.nativeElement.size}set size(e){this.renderer.setProperty(this.elementRef.nativeElement,"size",e)}get spellcheck(){return this.elementRef.nativeElement.spellcheck}set spellcheck(e){this.renderer.setProperty(this.elementRef.nativeElement,"spellcheck",q(e))}get fullBleed(){return this.elementRef.nativeElement.fullBleed}set fullBleed(e){this.renderer.setProperty(this.elementRef.nativeElement,"fullBleed",q(e))}}return t.\u0275fac=function(e){return new(e||t)(I(de),I(U))},t.\u0275dir=F({type:t,selectors:[["nimble-text-field"]],inputs:{appearance:"appearance",readOnly:["readonly","readOnly"],type:"type",autofocus:"autofocus",disabled:"disabled",required:"required",placeholder:"placeholder",maxlength:"maxlength",minlength:"minlength",pattern:"pattern",errorText:["error-text","errorText"],errorVisible:["error-visible","errorVisible"],size:"size",spellcheck:"spellcheck",fullBleed:["full-bleed","fullBleed"]}}),t})(),GK=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=oe({type:t}),t.\u0275inj=te({imports:[[xe]]}),t})(),qK=(()=>{class t{constructor(e,i){this.renderer=e,this.elementRef=i}get theme(){return this.elementRef.nativeElement.theme}set theme(e){this.renderer.setProperty(this.elementRef.nativeElement,"theme",e)}}return t.\u0275fac=function(e){return new(e||t)(I(de),I(U))},t.\u0275dir=F({type:t,selectors:[["nimble-theme-provider"]],inputs:{theme:"theme"}}),t})(),KK=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=oe({type:t}),t.\u0275inj=te({imports:[[xe]]}),t})(),XK=(()=>{class t{constructor(e,i){this.renderer=e,this.elementRef=i}get appearance(){return this.elementRef.nativeElement.appearance}set appearance(e){this.renderer.setProperty(this.elementRef.nativeElement,"appearance",e)}get disabled(){return this.elementRef.nativeElement.disabled}set disabled(e){this.renderer.setProperty(this.elementRef.nativeElement,"disabled",q(e))}get contentHidden(){return this.elementRef.nativeElement.contentHidden}set contentHidden(e){this.renderer.setProperty(this.elementRef.nativeElement,"contentHidden",q(e))}get checked(){return this.elementRef.nativeElement.checked}set checked(e){this.renderer.setProperty(this.elementRef.nativeElement,"checked",q(e))}}return t.\u0275fac=function(e){return new(e||t)(I(de),I(U))},t.\u0275dir=F({type:t,selectors:[["nimble-toggle-button"]],inputs:{appearance:"appearance",disabled:"disabled",contentHidden:["content-hidden","contentHidden"],checked:"checked"}}),t})(),QK=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=oe({type:t}),t.\u0275inj=te({imports:[[xe]]}),t})(),ZK=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=F({type:t,selectors:[["nimble-toolbar"]]}),t})(),YK=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=oe({type:t}),t.\u0275inj=te({imports:[[xe]]}),t})(),JK=(()=>{class t{constructor(e,i){this.renderer=e,this.elementRef=i,this.expandedChange=new et}get disabled(){return this.elementRef.nativeElement.disabled}set disabled(e){this.renderer.setProperty(this.elementRef.nativeElement,"disabled",q(e))}get expanded(){return this.elementRef.nativeElement.expanded}set expanded(e){this.renderer.setProperty(this.elementRef.nativeElement,"expanded",q(e))}get selected(){return this.elementRef.nativeElement.selected}set selected(e){this.renderer.setProperty(this.elementRef.nativeElement,"selected",q(e)),this.renderer.setAttribute(this.elementRef.nativeElement,"selected",(t=>!1===t||null===t?"false":"true")(e))}onExpandedChange(e){e.target===this.elementRef.nativeElement&&this.expandedChange.emit(this.expanded)}}return t.\u0275fac=function(e){return new(e||t)(I(de),I(U))},t.\u0275dir=F({type:t,selectors:[["nimble-tree-item"]],hostBindings:function(e,i){1&e&&se("expanded-change",function(r){return i.onExpandedChange(r)})},inputs:{disabled:"disabled",expanded:"expanded",selected:"selected"},outputs:{expandedChange:"expandedChange"}}),t})(),eX=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=oe({type:t}),t.\u0275inj=te({imports:[[xe]]}),t})(),tX=(()=>{class t{constructor(e,i){this.renderer=e,this.elementRef=i}get selectionMode(){return this.elementRef.nativeElement.selectionMode}set selectionMode(e){this.renderer.setProperty(this.elementRef.nativeElement,"selectionMode",e)}}return t.\u0275fac=function(e){return new(e||t)(I(de),I(U))},t.\u0275dir=F({type:t,selectors:[["nimble-tree-view"]],inputs:{selectionMode:["selection-mode","selectionMode"]}}),t})(),nX=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=oe({type:t}),t.\u0275inj=te({imports:[[xe]]}),t})(),iX=(()=>{class t{constructor(e,i){this.renderer=e,this.elementRef=i}get anchor(){return this.elementRef.nativeElement.anchor}set anchor(e){this.renderer.setProperty(this.elementRef.nativeElement,"anchor",e)}get delay(){return this.elementRef.nativeElement.delay}set delay(e){this.renderer.setProperty(this.elementRef.nativeElement,"delay",So(e))}get severity(){return this.elementRef.nativeElement.severity}set severity(e){this.renderer.setProperty(this.elementRef.nativeElement,"severity",e)}get iconVisible(){return this.elementRef.nativeElement.iconVisible}set iconVisible(e){this.renderer.setProperty(this.elementRef.nativeElement,"iconVisible",q(e))}}return t.\u0275fac=function(e){return new(e||t)(I(de),I(U))},t.\u0275dir=F({type:t,selectors:[["nimble-tooltip"]],inputs:{anchor:"anchor",delay:"delay",severity:"severity",iconVisible:["icon-visible","iconVisible"]}}),t})(),oX=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=oe({type:t}),t.\u0275inj=te({imports:[[xe]]}),t})();const rX=["drawerReference"];let sX=(()=>{class t{constructor(e){this.router=e,this.themeChange=new et,this.themes=Fe}onUserSettingsSelected(){this.userSettingsDrawer.show()}themeSelectionChange(e){this.themeChange.emit(e)}closeButtonClicked(){this.userSettingsDrawer.close()}}return t.\u0275fac=function(e){return new(e||t)(I(tn))},t.\u0275cmp=Dr({type:t,selectors:[["example-header"]],viewQuery:function(e,i){if(1&e&&vu(rX,5,Jd),2&e){let o;ps(o=ms())&&(i.userSettingsDrawer=o.first)}},inputs:{theme:"theme"},outputs:{themeChange:"themeChange"},decls:19,vars:3,consts:[[1,"header"],["location","right"],["drawerReference",""],[1,"user-settings-drawer"],[1,"theme-select",3,"ngModel","ngModelChange"],[3,"value"],["appearance","outline",1,"close-button",3,"click"],[1,"menu-container"],["appearance","outline"],["slot","menu"],[3,"change"]],template:function(e,i){1&e&&(v(0,"div",0),v(1,"nimble-drawer",1,2),v(3,"div",3),v(4,"h1"),N(5,"User settings"),y(),v(6,"nimble-select",4),se("ngModelChange",function(r){return i.themeSelectionChange(r)}),v(7,"nimble-list-option",5),N(8,"Light theme"),y(),v(9,"nimble-list-option",5),N(10,"Dark theme"),y(),y(),v(11,"nimble-button",6),se("click",function(){return i.closeButtonClicked()}),N(12,"Close"),y(),y(),y(),v(13,"div",7),v(14,"nimble-menu-button",8),N(15," Menu "),v(16,"nimble-menu",9),v(17,"nimble-menu-item",10),se("change",function(){return i.onUserSettingsSelected()}),N(18,"User Settings"),y(),y(),y(),y(),y()),2&e&&(Xe(6),Ue("ngModel",i.theme),Xe(1),Ue("value",i.themes.light),Xe(2),Ue("value",i.themes.dark))},directives:[Jd,F2,Nb,Am,od,I2,D2,g2,w2,C2,_2],styles:[".header[_ngcontent-%COMP%]{--example-client-header-height: 48px;background-color:var(--ni-nimble-header-background-color);display:flex;justify-content:flex-end;height:var(--example-client-header-height);--ni-nimble-drawer-width: 500px}.user-settings-drawer[_ngcontent-%COMP%]{padding:var(--ni-nimble-standard-padding);display:flex;flex-direction:column}.theme-select[_ngcontent-%COMP%]{width:150px;min-width:unset}.close-button[_ngcontent-%COMP%]{align-self:flex-end}.menu-container[_ngcontent-%COMP%]{display:flex;align-items:center;padding-right:var(--ni-nimble-standard-padding)}"]}),t})(),lX=(()=>{class t{constructor(){this.theme=Fe.light}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=Dr({type:t,selectors:[["app-root"]],decls:4,vars:2,consts:[[3,"theme"],[3,"theme","themeChange"],[1,"router-outlet-wrapper"]],template:function(e,i){1&e&&(v(0,"nimble-theme-provider",0),v(1,"example-header",1),se("themeChange",function(r){return i.theme=r}),y(),v(2,"div",2),Yo(3,"router-outlet"),y(),y()),2&e&&(Ue("theme",i.theme),Xe(1),Ue("theme",i.theme))},directives:[qK,sX,bg],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;overflow:hidden;height:100%}.router-outlet-wrapper[_ngcontent-%COMP%]{overflow-y:auto;height:100%}"]}),t})();const aX=["dialog"],cX=["drawer"];function uX(t,n){if(1&t&&(v(0,"nimble-list-option",60),N(1),y()),2&t){const e=n.$implicit;Ue("ngValue",e),Xe(1),Al(e?e.first:"")}}function dX(t,n){if(1&t&&(v(0,"nimble-list-option",60),N(1),y()),2&t){const e=n.$implicit;Ue("ngValue",e),Xe(1),Al(e?e.first:"")}}function hX(t,n){if(1&t&&(v(0,"nimble-list-option",60),N(1),y()),2&t){const e=n.$implicit;Ue("ngValue",e),Xe(1),Al(e?e.first:"")}}let fX=(()=>{class t{constructor(){var e;this.drawerLocation=cb.right,this.isDrawerPinned=!1,this.drawerLocations=cb,this.comboboxItems=[{first:"foo",last:"bar"},{first:"Bubba",last:"Hotep"},{first:"Mister",last:"Smithers"}],this.comboboxSelectedLastName=null===(e=this.comboboxSelectedOption)||void 0===e?void 0:e.last,this.selectedRadio="mango"}onMenuButtonMenuChange(e){alert(`${e.target.innerText} selected`)}onComboboxChange(e){this.comboboxSelectedLastName=e!==b2?e.last:"not found"}openDialog(){var e=this;return Gd(function*(){const i=yield e.dialog.show();e.dialogCloseReason=i===Gs?"escape pressed":i})()}closeDialog(e){this.dialog.close(e)}openDrawer(){var e=this;return Gd(function*(){const i=yield e.drawer.show();e.drawerCloseReason=i===Gs?"escape pressed":i})()}closeDrawer(e){this.drawer.close(e)}onTabToolbarButtonClick(){alert("Tab toolbar button clicked")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=Dr({type:t,selectors:[["example-customapp"]],viewQuery:function(e,i){if(1&e&&(vu(aX,5,y2),vu(cX,5,Jd)),2&e){let o;ps(o=ms())&&(i.dialog=o.first),ps(o=ms())&&(i.drawer=o.first)}},decls:289,vars:17,consts:[[1,"content","container"],["href","https://ni.github.io/nimble/storybook/?path=/story/getting-started--page"],[1,"container"],[1,"sub-container"],[1,"container-label"],["href","#"],["nimbleRouterLink","/customapp"],["appearance","outline"],["appearance","block"],["appearance","ghost"],[1,"card-button-content"],["selected",""],["name","fruit"],["value","apple",3,"ngModel","ngModelChange"],["value","banana",3,"ngModel","ngModelChange"],["value","mango",3,"ngModel","ngModelChange"],[3,"ngModel","ngModelChange"],["dialog",""],["slot","title"],["slot","footer",3,"click"],[3,"click"],["readonly","",3,"ngModel"],[3,"location"],["drawer",""],[2,"height","1000px"],[1,"drawer-footer"],["appearance","ghost",3,"click"],[1,"drawer-location-select",3,"ngModel","ngModelChange"],[3,"value"],["slot","start"],["slot","menu",3,"change"],["appearance","underline","placeholder","Number Field","value","42"],["appearance","outline","placeholder","Number Field","value","42"],["appearance","block","placeholder","Number Field","value","42"],["appearance","underline"],["aria-label","Combobox","appearance","underline","autocomplete","both","placeholder","Select value...",3,"ngModel","ngModelChange"],[3,"ngValue",4,"ngFor","ngForOf"],["aria-label","Combobox","appearance","outline","autocomplete","both","placeholder","Select value...",3,"ngModel","ngModelChange"],["aria-label","Combobox","appearance","block","autocomplete","both","placeholder","Select value...",3,"ngModel","ngModelChange"],["checked",""],["slot","unchecked-message"],["slot","checked-message"],["disabled",""],["placeholder","Text Area","cols","50","rows","5","resize","horizontal","value","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."],["appearance","underline","placeholder","Text Field","value","Here is text!"],["appearance","outline","placeholder","Text Field","value","Here is text!"],["appearance","block","placeholder","Text Field","value","Here is text!"],["slot","start","appearance","outline"],["slot","end","appearance","outline"],["id","anchor1"],["anchor","anchor1"],["id","anchor2"],["anchor","anchor2","severity","error"],["id","anchor3"],["anchor","anchor3","severity","information"],["id","anchor4"],["anchor","anchor4","severity","error","icon-visible",""],["id","anchor5"],["anchor","anchor5","severity","information","icon-visible",""],["expanded",""],[3,"ngValue"]],template:function(e,i){1&e&&(v(0,"div",0),v(1,"p"),N(2,"Explore the components below to see the Nimble components in action. See the "),v(3,"a",1),N(4,"Nimble component docs"),y(),N(5," for additional usage details."),y(),v(6,"div",2),v(7,"div",3),v(8,"div",4),N(9,"Breadcrumb"),y(),v(10,"nimble-breadcrumb"),v(11,"nimble-breadcrumb-item",5),N(12,"Page 1"),y(),v(13,"nimble-breadcrumb-item",6),N(14,"Page 2"),y(),v(15,"nimble-breadcrumb-item"),N(16,"Current Page (No Link)"),y(),y(),y(),v(17,"div",3),v(18,"div",4),N(19,"Buttons"),y(),v(20,"nimble-button",7),N(21,"Outline Button"),y(),v(22,"nimble-button",8),N(23,"Block Button"),y(),v(24,"nimble-button",9),N(25,"Ghost Button"),y(),y(),v(26,"div",3),v(27,"div",4),N(28,"Buttons - Toggle"),y(),v(29,"nimble-toggle-button",7),N(30,"Outline Toggle Button"),y(),v(31,"nimble-toggle-button",8),N(32,"Block Toggle Button"),y(),v(33,"nimble-toggle-button",9),N(34,"Ghost Toggle Button"),y(),y(),v(35,"div",3),v(36,"div",4),N(37,"Card Button"),y(),v(38,"nimble-card-button"),v(39,"span",10),N(40,"Card Button"),y(),y(),v(41,"nimble-card-button",11),v(42,"span",10),N(43,"Selected Card Button"),y(),y(),y(),v(44,"div",3),v(45,"div",4),N(46,"Checkbox"),y(),v(47,"nimble-checkbox"),N(48,"Checkbox label"),y(),v(49,"nimble-checkbox"),N(50,"Checkbox label"),y(),v(51,"nimble-checkbox"),N(52,"Checkbox label"),y(),y(),v(53,"div",3),v(54,"div",4),N(55,"Radio Buttons"),y(),v(56,"nimble-radio-group",12),v(57,"nimble-radio",13),se("ngModelChange",function(r){return i.selectedRadio=r}),N(58,"Apple"),y(),v(59,"nimble-radio",14),se("ngModelChange",function(r){return i.selectedRadio=r}),N(60,"Banana"),y(),v(61,"nimble-radio",15),se("ngModelChange",function(r){return i.selectedRadio=r}),N(62,"Mango"),y(),y(),v(63,"nimble-text-field",16),se("ngModelChange",function(r){return i.selectedRadio=r}),N(64,"Selected value"),y(),y(),v(65,"div",3),v(66,"div",4),N(67,"Dialog"),y(),v(68,"nimble-dialog",null,17),v(70,"span",18),N(71,"This is a dialog"),y(),v(72,"div"),N(73,"It opened when you pushed the button"),y(),v(74,"nimble-button",19),se("click",function(){return i.closeDialog("cancel pressed")}),N(75,"Cancel"),y(),v(76,"nimble-button",19),se("click",function(){return i.closeDialog("OK pressed")}),N(77,"OK"),y(),y(),v(78,"nimble-button",20),se("click",function(){return i.openDialog()}),N(79,"Open Dialog"),y(),v(80,"nimble-text-field",21),N(81,"Closed Reason"),y(),y(),v(82,"div",3),v(83,"div",4),N(84,"Drawer"),y(),v(85,"nimble-drawer",22,23),v(87,"header"),N(88,"This is a drawer"),y(),v(89,"section"),v(90,"p",24),N(91,"It opened when you pushed the button"),y(),v(92,"p"),N(93,"This is the bottom!"),y(),y(),v(94,"footer",25),v(95,"nimble-button",26),se("click",function(){return i.closeDrawer("cancel pressed")}),N(96,"Cancel"),y(),v(97,"nimble-button",20),se("click",function(){return i.closeDrawer("OK pressed")}),N(98,"OK"),y(),y(),y(),v(99,"nimble-button",20),se("click",function(){return i.openDrawer()}),N(100,"Open Drawer"),y(),v(101,"nimble-text-field",21),N(102,"Closed Reason"),y(),v(103,"nimble-select",27),se("ngModelChange",function(r){return i.drawerLocation=r}),v(104,"nimble-list-option",28),N(105,"Drawer: Left-side"),y(),v(106,"nimble-list-option",28),N(107,"Drawer: Right-side"),y(),y(),y(),v(108,"div",3),v(109,"div",4),N(110,"Menu"),y(),v(111,"nimble-menu"),v(112,"header"),N(113,"Header 1"),y(),v(114,"nimble-menu-item"),N(115," Item 1 "),Yo(116,"nimble-icon-add",29),y(),v(117,"nimble-menu-item"),N(118,"Item 2"),y(),Yo(119,"hr"),v(120,"header"),N(121,"Header 2"),y(),v(122,"nimble-menu-item"),N(123,"Item 4"),y(),y(),y(),v(124,"div",3),v(125,"div",4),N(126,"Menu Button"),y(),v(127,"nimble-menu-button"),N(128," Menu Button "),v(129,"nimble-menu",30),se("change",function(r){return i.onMenuButtonMenuChange(r)}),v(130,"header"),N(131,"Header 1"),y(),v(132,"nimble-menu-item"),N(133," Item 1 "),Yo(134,"nimble-icon-add",29),y(),v(135,"nimble-menu-item"),N(136,"Item 2"),y(),Yo(137,"hr"),v(138,"header"),N(139,"Header 2"),y(),v(140,"nimble-menu-item"),N(141,"Item 4"),y(),y(),y(),y(),v(142,"div",3),v(143,"div",4),N(144,"Number Field"),y(),v(145,"nimble-number-field",31),N(146,"Underline Number Field"),y(),v(147,"nimble-number-field",32),N(148,"Outline Number Field"),y(),v(149,"nimble-number-field",33),N(150,"Block Number Field"),y(),y(),v(151,"div",3),v(152,"div",4),N(153,"Select"),y(),v(154,"nimble-select",34),v(155,"nimble-list-option"),N(156,"Option 1"),y(),v(157,"nimble-list-option"),N(158,"Option 2"),y(),v(159,"nimble-list-option"),N(160,"Option 3"),y(),y(),v(161,"nimble-select",7),v(162,"nimble-list-option"),N(163,"Option 1"),y(),v(164,"nimble-list-option"),N(165,"Option 2"),y(),v(166,"nimble-list-option"),N(167,"Option 3"),y(),y(),v(168,"nimble-select",8),v(169,"nimble-list-option"),N(170,"Option 1"),y(),v(171,"nimble-list-option"),N(172,"Option 2"),y(),v(173,"nimble-list-option"),N(174,"Option 3"),y(),y(),y(),v(175,"div",3),v(176,"div",4),N(177,"Combobox"),y(),v(178,"nimble-combobox",35),se("ngModelChange",function(r){return i.comboboxSelectedOption=r})("ngModelChange",function(r){return i.onComboboxChange(r)}),Zc(179,uX,2,2,"nimble-list-option",36),y(),v(180,"div"),v(181,"span"),N(182),y(),y(),v(183,"nimble-combobox",37),se("ngModelChange",function(r){return i.comboboxSelectedOption=r})("ngModelChange",function(r){return i.onComboboxChange(r)}),Zc(184,dX,2,2,"nimble-list-option",36),y(),v(185,"nimble-combobox",38),se("ngModelChange",function(r){return i.comboboxSelectedOption=r})("ngModelChange",function(r){return i.onComboboxChange(r)}),Zc(186,hX,2,2,"nimble-list-option",36),y(),y(),v(187,"div",3),v(188,"div",4),N(189,"Switch"),y(),v(190,"nimble-switch"),N(191,"Switch"),y(),v(192,"nimble-switch",39),N(193," Switch with checked/unchecked messages "),v(194,"span",40),N(195,"Off"),y(),v(196,"span",41),N(197,"On"),y(),y(),y(),v(198,"div",3),v(199,"div",4),N(200,"Tabs"),y(),v(201,"nimble-tabs"),v(202,"nimble-tab"),N(203,"Tab 1"),y(),v(204,"nimble-tab"),N(205,"Tab 2"),y(),v(206,"nimble-tab",42),N(207,"Tab 3 (Disabled)"),y(),v(208,"nimble-tabs-toolbar"),v(209,"nimble-button",20),se("click",function(){return i.onTabToolbarButtonClick()}),N(210,"Toolbar button"),y(),y(),v(211,"nimble-tab-panel"),v(212,"div",4),N(213,"Tab 1 content"),y(),y(),v(214,"nimble-tab-panel"),v(215,"div",4),N(216,"Tab 2 content"),y(),y(),v(217,"nimble-tab-panel"),v(218,"div",4),N(219,"Tab 3 content"),y(),y(),y(),y(),v(220,"div",3),v(221,"div",4),N(222,"Text Area"),y(),v(223,"nimble-text-area",43),N(224,"Text Area Label"),y(),y(),v(225,"div",3),v(226,"div",4),N(227,"Text Field"),y(),v(228,"nimble-text-field",44),N(229,"Underline Text Field"),y(),v(230,"nimble-text-field",45),N(231,"Outline Text Field"),y(),v(232,"nimble-text-field",46),N(233,"Block Text Field"),y(),y(),v(234,"div",3),v(235,"div",4),N(236,"Toolbar"),y(),v(237,"nimble-toolbar"),v(238,"nimble-button",47),N(239,"First button"),y(),v(240,"nimble-button",47),N(241,"Second button"),y(),v(242,"nimble-button"),N(243,"Middle button"),y(),v(244,"nimble-button",48),N(245,"Last button"),y(),y(),y(),v(246,"div",3),v(247,"div",4),N(248,"Tooltip"),y(),v(249,"nimble-button",49),N(250,"Default"),y(),v(251,"nimble-tooltip",50),N(252,"Tooltip label"),y(),v(253,"nimble-button",51),N(254,"Fail"),y(),v(255,"nimble-tooltip",52),N(256,"Tooltip label"),y(),v(257,"nimble-button",53),N(258,"Information"),y(),v(259,"nimble-tooltip",54),N(260,"Tooltip label"),y(),v(261,"nimble-button",55),N(262,"Fail Icon "),y(),v(263,"nimble-tooltip",56),N(264,"Tooltip label"),y(),v(265,"nimble-button",57),N(266,"Information Icon"),y(),v(267,"nimble-tooltip",58),N(268,"Tooltip label"),y(),y(),v(269,"div",3),v(270,"div",4),N(271,"Tree View"),y(),v(272,"nimble-tree-view"),v(273,"nimble-tree-item"),N(274," Parent 1 "),v(275,"nimble-tree-item"),N(276,"Child 1"),y(),v(277,"nimble-tree-item"),N(278,"Child 2"),y(),v(279,"nimble-tree-item",42),N(280,"Child 3"),y(),y(),v(281,"nimble-tree-item",59),N(282," Parent 2 "),v(283,"nimble-tree-item",11),N(284,"Child 2-1"),y(),v(285,"nimble-tree-item"),N(286,"Child 2-2"),y(),v(287,"nimble-tree-item"),N(288,"Child 2-3"),y(),y(),y(),y(),y(),y()),2&e&&(Xe(57),Ue("ngModel",i.selectedRadio),Xe(2),Ue("ngModel",i.selectedRadio),Xe(2),Ue("ngModel",i.selectedRadio),Xe(2),Ue("ngModel",i.selectedRadio),Xe(17),Ue("ngModel",i.dialogCloseReason),Xe(5),Ue("location",i.drawerLocation),Xe(16),Ue("ngModel",i.drawerCloseReason),Xe(2),Ue("ngModel",i.drawerLocation),Xe(1),Ue("value",i.drawerLocations.left),Xe(2),Ue("value",i.drawerLocations.right),Xe(72),Ue("ngModel",i.comboboxSelectedOption),Xe(1),Ue("ngForOf",i.comboboxItems),Xe(3),nu(" Last name: ",i.comboboxSelectedLastName," "),Xe(1),Ue("ngModel",i.comboboxSelectedOption),Xe(1),Ue("ngForOf",i.comboboxItems),Xe(1),Ue("ngModel",i.comboboxSelectedOption),Xe(1),Ue("ngForOf",i.comboboxItems))},directives:[Jq,nK,tK,g2,XK,sK,aK,EK,xK,MK,Am,od,WK,UK,y2,Jd,F2,Nb,I2,D2,C2,_2,mK,w2,IK,uK,v2,XC,TK,LK,RK,$K,BK,jK,ZK,iX,tX,JK],styles:[".content[_ngcontent-%COMP%]{width:100%;box-sizing:border-box;font:var(--ni-nimble-body-font)}.container-label[_ngcontent-%COMP%]{font:var(--ni-nimble-group-header-font);color:var(--ni-nimble-group-header-font-color);padding-bottom:var(--ni-nimble-standard-padding)}p[_ngcontent-%COMP%], a[_ngcontent-%COMP%]{color:var(--ni-nimble-control-label-font-color)}.container[_ngcontent-%COMP%]{background-color:var(--ni-nimble-application-background-color);display:inline-flex;justify-content:left;flex-direction:column;padding:0 2px 0 10px}.sub-container[_ngcontent-%COMP%]{margin:var(--ni-nimble-standard-padding)}.sub-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-right:var(--ni-nimble-standard-padding)}.theme-select[_ngcontent-%COMP%]{display:block;width:150px;min-width:unset}.drawer-location-select[_ngcontent-%COMP%]{width:200px}example-header[_ngcontent-%COMP%]{display:block}nimble-toolbar[_ngcontent-%COMP%]::part(positioning-region){background-color:var(--ni-nimble-section-background-color)}.card-button-content[_ngcontent-%COMP%]{display:flex;margin:var(--ni-nimble-standard-padding)}.drawer-footer[_ngcontent-%COMP%]{grid-gap:var(--ni-nimble-standard-padding);gap:var(--ni-nimble-standard-padding)}nimble-dialog[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font:var(--ni-nimble-title-font);color:var(--ni-nimble-title-font-color)}nimble-dialog[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--ni-nimble-body-font-color)}nimble-drawer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--ni-nimble-body-font-color)}"]}),t})(),pX=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=oe({type:t,bootstrap:[lX]}),t.\u0275inj=te({providers:[L7],imports:[[k8,B7,b_,KK,zK,GK,CK,SK,bK,rK,nX,eX,vK,DK,VK,PK,OK,HK,fK,cK,QK,eK,iK,gK,AK,YK,dK,yK,oX,lK,hK,kK,FK,zO.forRoot([{path:"",redirectTo:"/customapp",pathMatch:"full"},{path:"customapp",component:fX}],{useHash:!0})]]}),t})();(function(){if(nC)throw new Error("Cannot enable prod mode after platform setup.");tC=!1})(),F8().bootstrapModule(pX).catch(t=>console.error(t))}},Zs=>{Zs(Zs.s=938)}]);
//# sourceMappingURL=main.8d0e4d9b506a18fbaf8c.js.map