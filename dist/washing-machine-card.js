/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function t(t,e,n,i){var s,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(r<3?s(o):r>3?s(e,n,o):s(e,n))||o);return r>3&&o&&Object.defineProperty(e,n,o),o
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(t,e,n=null)=>{for(;e!==n;){const n=e.nextSibling;t.removeChild(e),e=n}},i=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${i}--\x3e`,r=new RegExp(`${i}|${s}`);class o{constructor(t,e){this.parts=[],this.element=e;const n=[],s=[],o=document.createTreeWalker(e.content,133,null,!1);let c=0,d=-1,u=0;const{strings:p,values:{length:m}}=t;for(;u<m;){const t=o.nextNode();if(null!==t){if(d++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:n}=e;let i=0;for(let t=0;t<n;t++)a(e[t].name,"$lit$")&&i++;for(;i-- >0;){const e=p[u],n=l.exec(e)[2],i=n.toLowerCase()+"$lit$",s=t.getAttribute(i);t.removeAttribute(i);const o=s.split(r);this.parts.push({type:"attribute",index:d,name:n,strings:o}),u+=o.length-1}}"TEMPLATE"===t.tagName&&(s.push(t),o.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(i)>=0){const i=t.parentNode,s=e.split(r),o=s.length-1;for(let e=0;e<o;e++){let n,r=s[e];if(""===r)n=h();else{const t=l.exec(r);null!==t&&a(t[2],"$lit$")&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),n=document.createTextNode(r)}i.insertBefore(n,t),this.parts.push({type:"node",index:++d})}""===s[o]?(i.insertBefore(h(),t),n.push(t)):t.data=s[o],u+=o}}else if(8===t.nodeType)if(t.data===i){const e=t.parentNode;null!==t.previousSibling&&d!==c||(d++,e.insertBefore(h(),t)),c=d,this.parts.push({type:"node",index:d}),null===t.nextSibling?t.data="":(n.push(t),d--),u++}else{let e=-1;for(;-1!==(e=t.data.indexOf(i,e+1));)this.parts.push({type:"node",index:-1}),u++}}else o.currentNode=s.pop()}for(const t of n)t.parentNode.removeChild(t)}}const a=(t,e)=>{const n=t.length-e.length;return n>=0&&t.slice(n)===e},c=t=>-1!==t.index,h=()=>document.createComment(""),l=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function d(t,e){const{element:{content:n},parts:i}=t,s=document.createTreeWalker(n,133,null,!1);let r=p(i),o=i[r],a=-1,c=0;const h=[];let l=null;for(;s.nextNode();){a++;const t=s.currentNode;for(t.previousSibling===l&&(l=null),e.has(t)&&(h.push(t),null===l&&(l=t)),null!==l&&c++;void 0!==o&&o.index===a;)o.index=null!==l?-1:o.index-c,r=p(i,r),o=i[r]}h.forEach(t=>t.parentNode.removeChild(t))}const u=t=>{let e=11===t.nodeType?0:1;const n=document.createTreeWalker(t,133,null,!1);for(;n.nextNode();)e++;return e},p=(t,e=-1)=>{for(let n=e+1;n<t.length;n++){const e=t[n];if(c(e))return n}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const m=new WeakMap,f=t=>"function"==typeof t&&m.has(t),g={},y={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class w{constructor(t,e,n){this.__parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this.__parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=[],i=this.template.parts,s=document.createTreeWalker(t,133,null,!1);let r,o=0,a=0,h=s.nextNode();for(;o<i.length;)if(r=i[o],c(r)){for(;a<r.index;)a++,"TEMPLATE"===h.nodeName&&(n.push(h),s.currentNode=h.content),null===(h=s.nextNode())&&(s.currentNode=n.pop(),h=s.nextNode());if("node"===r.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(h.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(h,r.name,r.strings,this.options));o++}else this.__parts.push(void 0),o++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const v=` ${i} `;class b{constructor(t,e,n,i){this.strings=t,this.values=e,this.type=n,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let r=0;r<t;r++){const t=this.strings[r],o=t.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===t.indexOf("--\x3e",o+1);const a=l.exec(t);e+=null===a?t+(n?v:s):t.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+i}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const S=t=>null===t||!("object"==typeof t||"function"==typeof t),M=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class P{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new x(this)}_getValue(){const t=this.strings,e=t.length-1;let n="";for(let i=0;i<e;i++){n+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(S(t)||!M(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+=t[e],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class x{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===g||S(t)&&t===this.value||(this.value=t,f(t)||(this.committer.dirty=!0))}commit(){for(;f(this.value);){const t=this.value;this.value=g,t(this)}this.value!==g&&this.committer.commit()}}class I{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(h()),this.endNode=t.appendChild(h())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=h()),t.__insert(this.endNode=h())}insertAfterPart(t){t.__insert(this.startNode=h()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}const t=this.__pendingValue;t!==g&&(S(t)?t!==this.value&&this.__commitText(t):t instanceof b?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):M(t)?this.__commitIterable(t):t===y?(this.value=y,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof w&&this.value.template===e)this.value.update(t.values);else{const n=new w(e,t.processor,this.options),i=n._clone();n.update(t.values),this.__commitNode(i),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,i=0;for(const s of t)n=e[i],void 0===n&&(n=new I(this.options),e.push(n),0===i?n.appendIntoPart(this):n.insertAfterPart(e[i-1])),n.setValue(s),n.commit(),i++;i<e.length&&(e.length=i,this.clear(n&&n.endNode))}clear(t=this.startNode){n(this.startNode.parentNode,t.nextSibling,this.endNode)}}class j{constructor(t,e,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}if(this.__pendingValue===g)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=g}}class T extends P{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends x{}let A=!1;(()=>{try{const t={get capture(){return A=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class C{constructor(t,e,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}if(this.__pendingValue===g)return;const t=this.__pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=W(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=g}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const W=t=>t&&(A?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function O(t){let e=k.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},k.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const s=t.strings.join(i);return n=e.keyString.get(s),void 0===n&&(n=new o(t,t.getTemplateElement()),e.keyString.set(s,n)),e.stringsArray.set(t.strings,n),n}const k=new Map,Z=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const E=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,n,i){const s=e[0];if("."===s){return new T(t,e.slice(1),n).parts}if("@"===s)return[new C(t,e.slice(1),i.eventContext)];if("?"===s)return[new j(t,e.slice(1),n)];return new P(t,e,n).parts}handleTextExpression(t){return new I(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const R=(t,...e)=>new b(t,e,"html",E)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,z=(t,e)=>`${t}--${e}`;let D=!0;void 0===window.ShadyCSS?D=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),D=!1);const Y=t=>e=>{const n=z(e.type,t);let s=k.get(n);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},k.set(n,s));let r=s.stringsArray.get(e.strings);if(void 0!==r)return r;const a=e.strings.join(i);if(r=s.keyString.get(a),void 0===r){const n=e.getTemplateElement();D&&window.ShadyCSS.prepareTemplateDom(n,t),r=new o(e,n),s.keyString.set(a,r)}return s.stringsArray.set(e.strings,r),r},U=["html","svg"],G=new Set,H=(t,e,n)=>{G.add(t);const i=n?n.element:document.createElement("template"),s=e.querySelectorAll("style"),{length:r}=s;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(i,t);const o=document.createElement("style");for(let t=0;t<r;t++){const e=s[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{U.forEach(e=>{const n=k.get(z(e,t));void 0!==n&&n.keyString.forEach(t=>{const{element:{content:e}}=t,n=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{n.add(t)}),d(t,n)})})})(t);const a=i.content;n?function(t,e,n=null){const{element:{content:i},parts:s}=t;if(null==n)return void i.appendChild(e);const r=document.createTreeWalker(i,133,null,!1);let o=p(s),a=0,c=-1;for(;r.nextNode();){c++;for(r.currentNode===n&&(a=u(e),n.parentNode.insertBefore(e,n));-1!==o&&s[o].index===c;){if(a>0){for(;-1!==o;)s[o].index+=a,o=p(s,o);return}o=p(s,o)}}}(n,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(n){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),d(n,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const L={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},V=(t,e)=>e!==t&&(e==e||t==t),J={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:V};class X extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,n)=>{const i=this._attributeNameForProperty(n,e);void 0!==i&&(this._attributeToPropertyMap.set(i,n),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=J){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,n,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}static getPropertyDescriptor(t,e,n){return{get(){return this[e]},set(i){const s=this[t];this[e]=i,this.requestUpdateInternal(t,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||J}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const n of e)this.createProperty(n,t[n])}}static _attributeNameForProperty(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,n=V){return n(t,e)}static _propertyValueFromAttribute(t,e){const n=e.type,i=e.converter||L,s="function"==typeof i?i:i.fromAttribute;return s?s(t,n):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const n=e.type,i=e.converter;return(i&&i.toAttribute||L.toAttribute)(t,n)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,n){e!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,e,n=J){const i=this.constructor,s=i._attributeNameForProperty(t,n);if(void 0!==s){const t=i._propertyValueToAttribute(e,n);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(s):this.setAttribute(s,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const n=this.constructor,i=n._attributeToPropertyMap.get(t);if(void 0!==i){const t=n.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=n._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,n){let i=!0;if(void 0!==t){const s=this.constructor;n=n||s.getPropertyOptions(t),s._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}X.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const B=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:n,elements:i}=e;return{kind:n,elements:i,finisher(e){window.customElements.define(t,e)}}})(t,e),F=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(n){n.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}};function Q(t){return(e,n)=>void 0!==n?((t,e,n)=>{e.constructor.createProperty(n,t)})(t,e,n):F(t,e)}function q(t){return Q({attribute:!1,hasChanged:null==t?void 0:t.hasChanged})}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const K=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_=Symbol();class ${constructor(t,e){if(e!==_)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(K?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const tt=(t,...e)=>{const n=e.reduce((e,n,i)=>e+(t=>{if(t instanceof $)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+t[i+1],t[0]);return new $(n,_)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const et={};class nt extends X{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,n)=>t.reduceRight((t,n)=>Array.isArray(n)?e(n,t):(t.add(n),t),n),n=e(t,new Set),i=[];n.forEach(t=>i.unshift(t)),this._styles=i}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!K){const e=Array.prototype.slice.call(t.cssRules).reduce((t,e)=>t+e.cssText,"");return new $(String(e),_)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?K?this.renderRoot.adoptedStyleSheets=t.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==et&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return et}}nt.finalized=!0,nt.render=(t,e,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const s=i.scopeName,r=Z.has(e),o=D&&11===e.nodeType&&!!e.host,a=o&&!G.has(s),c=a?document.createDocumentFragment():e;if(((t,e,i)=>{let s=Z.get(e);void 0===s&&(n(e,e.firstChild),Z.set(e,s=new I(Object.assign({templateFactory:O},i))),s.appendInto(e)),s.setValue(t),s.commit()})(t,c,Object.assign({templateFactory:Y(s)},i)),a){const t=Z.get(c);Z.delete(c);const i=t.value instanceof w?t.value.template:void 0;H(s,c,i),n(e,e.firstChild),e.appendChild(c),Z.set(e,t)}!r&&o&&window.ShadyCSS.styleElement(e.host)};var it=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,st="[^\\s]+",rt=/\[([^]*?)\]/gm;function ot(t,e){for(var n=[],i=0,s=t.length;i<s;i++)n.push(t[i].substr(0,e));return n}var at=function(t){return function(e,n){var i=n[t].map((function(t){return t.toLowerCase()})).indexOf(e.toLowerCase());return i>-1?i:null}};function ct(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];for(var i=0,s=e;i<s.length;i++){var r=s[i];for(var o in r)t[o]=r[o]}return t}var ht=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],lt=["January","February","March","April","May","June","July","August","September","October","November","December"],dt=ot(lt,3),ut={dayNamesShort:ot(ht,3),dayNames:ht,monthNamesShort:dt,monthNames:lt,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10?1:0)*t%10]}},pt=ct({},ut),mt=function(t,e){for(void 0===e&&(e=2),t=String(t);t.length<e;)t="0"+t;return t},ft={D:function(t){return String(t.getDate())},DD:function(t){return mt(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return String(t.getDay())},dd:function(t){return mt(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return String(t.getMonth()+1)},MM:function(t){return mt(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return mt(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return mt(t.getFullYear(),4)},h:function(t){return String(t.getHours()%12||12)},hh:function(t){return mt(t.getHours()%12||12)},H:function(t){return String(t.getHours())},HH:function(t){return mt(t.getHours())},m:function(t){return String(t.getMinutes())},mm:function(t){return mt(t.getMinutes())},s:function(t){return String(t.getSeconds())},ss:function(t){return mt(t.getSeconds())},S:function(t){return String(Math.round(t.getMilliseconds()/100))},SS:function(t){return mt(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return mt(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+mt(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)},Z:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+mt(Math.floor(Math.abs(e)/60),2)+":"+mt(Math.abs(e)%60,2)}},gt=function(t){return+t-1},yt=[null,"[1-9]\\d?"],wt=[null,st],vt=["isPm",st,function(t,e){var n=t.toLowerCase();return n===e.amPm[0]?0:n===e.amPm[1]?1:null}],bt=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(t){var e=(t+"").match(/([+-]|\d\d)/gi);if(e){var n=60*+e[1]+parseInt(e[2],10);return"+"===e[0]?n:-n}return 0}],St=(at("monthNamesShort"),at("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var Mt=function(t,e,n){if(void 0===e&&(e=St.default),void 0===n&&(n={}),"number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date pass to format");var i=[];e=(e=St[e]||e).replace(rt,(function(t,e){return i.push(e),"@@@"}));var s=ct(ct({},pt),n);return(e=e.replace(it,(function(e){return ft[e](t,s)}))).replace(/@@@/g,(function(){return i.shift()}))};(function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}})(),function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}}();let Pt=class extends nt{constructor(){super(...arguments),this._initialized=!1}setConfig(t){this._config=t,this.loadCardHelpers()}shouldUpdate(){return this._initialized||this._initialize(),!0}get _name(){var t;return(null===(t=this._config)||void 0===t?void 0:t.name)||""}get _entity(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity)||""}get _show_warning(){var t;return(null===(t=this._config)||void 0===t?void 0:t.show_warning)||!1}get _show_error(){var t;return(null===(t=this._config)||void 0===t?void 0:t.show_error)||!1}render(){if(!this.hass||!this._helpers)return R``;this._helpers.importMoreInfoControl("climate");const t=Object.keys(this.hass.states).filter(t=>"sensor"===t.substr(0,t.indexOf("."))).sort();return R`
        <div class="values">
          <paper-input label="Name (Optional)" .value=${this._name} .configValue=${"name"} @value-changed=${this._valueChanged} ></paper-input>
          <paper-dropdown-menu
            label="Entity (Required)"
            @value-changed=${this._valueChanged}
            .configValue=${"entity"}
          >
            <paper-listbox slot="dropdown-content" .selected=${t.indexOf(this._entity)}>
              ${t.map(t=>R`
                  <paper-item>${t}</paper-item>
                `)}
            </paper-listbox>
          </paper-dropdown-menu>
        </div>
      </div>
    `}_initialize(){void 0!==this.hass&&void 0!==this._config&&void 0!==this._helpers&&(this._initialized=!0)}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target;this["_"+e.configValue]!==e.value&&(e.configValue&&(""===e.value?delete this._config[e.configValue]:this._config=Object.assign(Object.assign({},this._config),{[e.configValue]:void 0!==e.checked?e.checked:e.value})),function(t,e,n,i){i=i||{},n=null==n?{}:n;var s=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});s.detail=n,t.dispatchEvent(s)}(this,"config-changed",{config:this._config}))}static get styles(){return tt`
      .option {
        padding: 4px 0px;
        cursor: pointer;
      }
      .row {
        display: flex;
        margin-bottom: -14px;
        pointer-events: none;
      }
      .title {
        padding-left: 16px;
        margin-top: -6px;
        pointer-events: none;
      }
      .secondary {
        padding-left: 40px;
        color: var(--secondary-text-color);
        pointer-events: none;
      }
      .values {
        padding-left: 16px;
        background: var(--secondary-background-color);
        display: grid;
      }
      ha-formfield {
        padding-bottom: 8px;
      }
    `}};t([Q({attribute:!1})],Pt.prototype,"hass",void 0),t([q()],Pt.prototype,"_config",void 0),t([q()],Pt.prototype,"_toggle",void 0),t([q()],Pt.prototype,"_helpers",void 0),Pt=t([B("washing-machine-card-editor")],Pt);console.info("%c  WASHER-MACHINE-CARD %c  0.1.0    ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"washing-machine-card",name:"Washing Machine Card",description:"A washing machine card"});let xt=class extends nt{static async getConfigElement(){return document.createElement("washing-machine-card-editor")}static getStubConfig(){return{}}setConfig(t){if(!t)throw new Error("Invalid configuration");t.test_gui&&function(){var t=document.querySelector("home-assistant");if(t=(t=(t=(t=(t=(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root")){var e=t.lovelace;return e.current_view=t.___curView,e}return null}().setEditMode(!0),this.config=Object.assign({name:"Washer Machine"},t)}shouldUpdate(t){return!!this.config&&function(t,e,n){if(e.has("config")||n)return!0;if(t.config.entity){var i=e.get("hass");return!i||i.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}(this,t,!1)}timeToMinutes(t){const e=t.split(":"),n=[parseInt(e[0]),parseInt(e[1])];return 60*n[0]+n[1]}getTemperature(t){if("-"!=t){const e=t.replace(/^\D+/g,"");return R`<ha-icon class="washing-machine-card-icon" icon="mdi:thermometer"></ha-icon> ${e}°`}}getDoorLock(t){return console.log(t),"on"==t?R`<ha-icon class="washing-machine-card-icon" icon="mdi:lock"></ha-icon>`:R`<ha-icon class="washing-machine-card-icon" icon="mdi:lock-off"></ha-icon>`}render(){if(this.config.show_warning)return this._showWarning("Show Warning");if(this.config.show_error)return this._showError("Show Error");const t=this.hass.states[this.config.entity],e=t.attributes;return R`
      <ha-card tabindex="0">
        <div class="washing-machine-card washing-machine-card-${t.state}">
          <div class="bars top-bar">
            <div></div>
            <div><strong>${"-"==e.run_state?t.state:e.run_state}</strong></div>
            <div class="top-bar-right">
              ${this.getDoorLock(e.door_lock)}
              ${this.getTemperature(e.water_temp)}
            </div>
          </div>
          <div class="content">
            <div class="image">
              <img src="${"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAAHqCAQAAACt0T0fAAAACXBIWXMAAAsTAAALEwEAmpwYAAAIh2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMS0wNi0wNFQxNzozOToxMS0wMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wNi0wNFQxODo1NTowMS0wMzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjEtMDYtMDRUMTg6NTU6MDEtMDM6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmE0NTcxMmMzLTc5ZDItOWQ0Yi1hMjVkLTkzZjk3NjAyMDQyMCIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjE2NjYyOWRhLWQzZjYtYWY0Mi1hODE1LWE1Y2JlN2VlMWFiNSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmIwMjU2OGZmLTI5ODAtZDM0My04MjE1LTBlNzc3MzNiMjgyNCIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YjAyNTY4ZmYtMjk4MC1kMzQzLTgyMTUtMGU3NzczM2IyODI0IiBzdEV2dDp3aGVuPSIyMDIxLTA2LTA0VDE3OjM5OjExLTAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjIwOWVlZmNjLWJmMTctNWY0ZS04NzcxLTMyMDE4NWMxZWZjMyIgc3RFdnQ6d2hlbj0iMjAyMS0wNi0wNFQxODo1NTowMS0wMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphNDU3MTJjMy03OWQyLTlk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"}" />
            </div>
            <div class="name">
              ${e.friendly_name}
            </div>
          </div>
          <div class="bars bottom-bar">
            <div>
              <span class="number"> ${this.timeToMinutes(e.initial_time)} </span> minutes <br/> total
            </div>
            <div>
              <span class="number"> ${this.timeToMinutes(e.remain_time)} </span> minutes <br/> remaining
            </div>
          </div>
        </div>
      </ha-card>
    `}_showWarning(t){return R`
      <hui-warning>${t}</hui-warning>
    `}_showError(t){const e=document.createElement("hui-error-card");return e.setConfig({type:"error",error:t,origConfig:this.config}),R`
      ${e}
    `}static get styles(){return tt`
      .washing-machine-card {
        color: var(--primary-text-color);
        background: var(--card-background-color);
        border-radius: 4px;
        min-height: 100%;
        display: flex;
        flex-direction: column;
        align-items: stretch;
      }

      .washing-machine-card .content {
        display: flex;
        flex-grow: 1;
        justify-content: center;
        flex-direction: column;
        align-items: center;
      }

      .washing-machine-card .name {
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        padding-bottom: 10px;
      }

      .washing-machine-card .image {
        padding: 10px;
      }

      .washing-machine-card .image img {
        max-height: 180px;
      }

      .washing-machine-card .bars {
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
      }

      .washing-machine-card .top-bar > div {
        flex: 1;
        text-align: center;
      }

      .washing-machine-card .top-bar > div:first-child {
        text-align: left;
      }

      .washing-machine-card .top-bar > div:last-child {
        text-align: right;
      }

      .washing-machine-card .number {
        font-size: 18px;
        font-weight: bold;
      }

      .washing-machine-card .bottom-bar {
        border-top: 1px solid rgba(255, 255, 255, 0.2);
        padding: 10px 0;
        flex-shrink: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        text-align: center;
      }

      .washing-machine-card .bottom-bar > div {
        flex-grow: 1;
        border-right: 1px solid rgba(255, 255, 255, 0.2);
      }

      .washing-machine-card .bottom-bar > div:last-child {
        border-right: 0;
      }

      .washing-machine-card-icon {
        --mdc-icon-size: 16px;
        height: 16px;
        width: 16px;
      }

      .washing-machine-card-off .image {
        opacity: 0.5;
      }

      .washing-machine-card-off .top-bar-right {
        opacity: 0;
      }
    `}};t([Q({attribute:!1})],xt.prototype,"hass",void 0),t([q()],xt.prototype,"config",void 0),xt=t([B("washing-machine-card")],xt);export{xt as WashingMachineCard};
