const e=Symbol("mount"),t=Symbol("mounted"),n=Symbol("update"),l=Symbol("updated"),r=Symbol("unmount"),o={};function i(e,t){e[0]&&(e[1]=e[0](e[1],t));}function u(e,t){for(let n in e)i(e[n],t);}function s(e,t){if(o.ref.hook)return o.ref.hook.use(e,t)[1]}function c(){return o.ref.render}const a=[],f=Symbol("limitNode"),d={innerHTML:1,textContent:1,contenteditable:1},h={style:1},p={id:1,className:1,checked:1,value:1,selected:1};function m(e,t){let n=e.length;if(n!==t.length)return !1;for(let l=0;l<n;l++)if(e[l]!==t[l])return !1;return !0}const y=e=>"function"==typeof e;function b(e,t,n,l,r,o){if(n=null==n?null:n,l=null==l?null:l,(t="class"!=t||r?t:"className")in e&&p[t]&&(n=e[t]),l!==n)if("o"!=t[0]||"n"!=t[1]||!y(l)&&!y(n))switch(t){case"key":e.dataset.key=l;break;case"ref":l&&(l.current=e);break;case"style":!function(e,t,n){let l,r=e.style;if("object"==typeof t){l=!0;for(let e in t)e in n||v(r,e,null);}if("object"==typeof n)for(let e in n){let o=n[e];l&&t[e]===o||v(r,e,o);}else r.cssText=n;}(e,n||"",l||"");break;default:!r&&"list"!=t&&t in e?e[t]=null==l?"":l:null==l?e.removeAttribute(t):e.setAttribute(t,"object"==typeof l?JSON.stringify(l):l);}else !function(e,t,n,l){t=t.slice("-"==t[2]?3:2),l.handleEvent||(l.handleEvent=t=>l[t.type].call(e,t));n?(l[t]||e.addEventListener(t,l),l[t]=n):l[t]&&(e.removeEventListener(t,l),delete l[t]);}(e,t,l,o);}function v(e,t,n){let l="setProperty";null==n&&(l="removeProperty",n=null),~t.indexOf("-")?e[l](t,n):e[t]=n;}let g=_(null,{children:""}),k=_(null,{children:a});const N=Symbol("mapChildren"),w=Symbol("keyes");function _(e,t,...n){return {children:n,...t,nodeType:e||null}}function C(e){if(S(e))return e;if(!e[N]){let{children:t,keyes:n}=function e(t,n={children:[]},l=0){if((e=>Array.isArray(e))(t)){let r=t.length;for(let o=0;o<r;o++)e(t[o],n,l+1);}else {if(null==t&&!l)return n;let r=C(t);if(null!=r&&"object"==typeof r){if(y(r.nodeType)){let{nodeType:t,...o}=r;return e(t(o),n,l+1)}let{key:t}=r;null!=t&&(t+="",n.keyes=n.keyes||[],n.keyes.includes(t)||n.keyes.push(t));}n.children.push(r);}return n}(e.children);e.children=t.length?t:a,n&&n.length==t.length&&(e[w]=n),e[N]=!0;}return e}function S(e){let t=typeof e;return null==e||"string"==t||"number"==t||"function"==t||"boolean"==t}const j=e=>e instanceof Node,x=e=>e[f]=e.appendChild(new Comment);function A(e,t,n,l){let r=e[f];if(!r){let{childNodes:t}=e,n=t.length;for(let e=0;e<n;e++){let e=t[n];if(e instanceof Comment){r=e;break}}}r||(r=x(e)),e[l?"appendChild":"insertBefore"](t,n||r);}function E(e,t,n,l){let{vnode:r,handlers:o={}}=t&&t[e]||{};if(r==n&&null!=r)return t;var i;n=S(n)?function(e){let t=typeof e;return null==e||"boolean"==t||"function"==t}(i=n)?g:_(null,{children:""+i}):n;let{nodeType:u,shadowDom:s,children:c,is:a,...p}=r||k,{nodeType:m,shadowDom:y,children:v,is:N,...C}=n;if(l=l||"svg"==m,"host"!=m&&(!function(e,t){let n=e&&j(e),l=t&&j(t);if(l&&n)return l==l;if(e){e.localName||(e.localName=e.nodeName.toLowerCase());let n=e.localName;return ("#text"==n?null:n)==t}}(t,m)||a!=N)){let e=function(e,t,n){let l,r=document;if(null!=e){if(j(e))return e;l=t?r.createElementNS("http://www.w3.org/2000/svg",e):r.createElement(e,n?{is:n}:null);}else l=r.createTextNode("");return l}(m,l,N),n=t&&t.parentNode;n&&n.replaceChild(e,t),t=e,o={};}if(h[m]&&(m=null,v=v.join("")),null==m)t.textContent!=v&&(t.textContent=v);else {if(s!=y){let{shadowRoot:e}=t,n=y&&!e?"open":!y&&e?"closed":0;n&&t.attachShadow({mode:n});}(function(e,t,n,l,r){t=t||{};for(let o in t)o in n||b(e,o,t[o],null,l,r);let o;for(let i in n)b(e,i,t[i],n[i],l,r),o=o||d[i];return o})(t,p,C,l,o)||c==v||function(e,t,n,l,r){let o=n.length,{childNodes:i}=t,u={},s=i.length,c=0,a=t[f];for(;c<s;c++){let e=i[c];if(e==a||e instanceof Comment){a=e;break}if(l){let t=e.dataset.key;if(l.includes(t)){u[t]=e;continue}}(l||c>=o)&&(c--,s--,e.remove());}a||(a=x(t));for(let s=0;s<o;s++){let o=n[s],f=s==c?null:i[s],d=l?o.key:s,h=l?u[d]:f;l&&h&&h!=f&&t.insertBefore(h,f);let p=E(e,h,o,r);h||(A(t,p,s==c?a:i[s]),c++);}}(e,y?t.shadowRoot:t,v,C[w],l);}return t[e]={vnode:n,handlers:o},t}function T(e,t,n="vnode"){return null!=e&&"object"==typeof e&&"host"!=e.nodeType&&(e=_("host",{children:e})),E(n,t,e=C(e)),t}const L=null;class O extends HTMLElement{constructor(){super(),this._create();}async _update(){if(!this._prevent){let e;this._prevent=!0,this.updated=new Promise(t=>e=t),await this.mounted,this._prevent=!1,this.update(),e();}}static get observedAttributes(){let{props:e={}}=this,t=[],n=[];for(let l in e)D(this.prototype,l,e[l],n,t);return this.prototype._create=function(){this._attrs={},this._props={},t.forEach(e=>e(this)),this.mounted=new Promise(e=>this.mount=e),this.unmounted=new Promise(e=>this.unmount=e),this.create&&this.create(),this._update();},n}attributeChangedCallback(e,t,n){e!==this._ignoreAttr&&t!==n&&(this[this._attrs[e]]=n);}connectedCallback(){this.mount();}disconnectedCallback(){this.unmount();}}const P=(e,t,n)=>e.dispatchEvent(new CustomEvent(t,"object"==typeof n?n:null)),B=[!0,1,"","1","true"],$=[Function,null],J=e=>e.replace(/([A-Z])/g,"-$1").toLowerCase();function D(e,t,n,l,r){if(!(t in e)){let{type:o,reflect:i,event:u,value:s,attr:c=J(t)}="object"==typeof n&&null!=n?n:{type:n},a=!$.includes(o);l.push(c),Object.defineProperty(e,t,{set:function(e){let n=this[t],{error:l,value:r}=function(e,t){if(null==e)return {value:t};try{if(e==Boolean?t=B.includes(t):"string"==typeof t&&(t=e==Number?Number(t):e==Object||e==Array?JSON.parse(t):t),{}.toString.call(t)==`[object ${e.name}]`)return {value:t,error:e==Number&&Number.isNaN(t)}}catch(e){}return {value:t,error:!0}}(o,a&&y(e)?e(n):e);if(l&&null!=r)throw `The value defined for prop '${t}' must be of type '${o.name}'`;n!=r&&(this._props[t]=r,this._update(),this.updated.then(()=>{u&&P(this,u),i&&(this._ignoreAttr=c,((e,t,n,l)=>{null==l||t==Boolean&&!l?e.removeAttribute(n):e.setAttribute(n,"object"==typeof l?JSON.stringify(l):t==Boolean?"":l);})(this,o,c,this[t]),this._ignoreAttr=null);}));},get(){return this._props[t]}}),r.push(e=>{null!=s&&(e[t]=s),e._attrs[c]=t;});}}function H(s){let c=class extends O{async create(){let c=Symbol();this.update=()=>{T(a.load(s,{...this._props}),this,c),a.updated();};let a=function(s,c){let a,f={},d={use:function(t,l){let r,u=o.index++;f[u]||(f[u]=[null,l],r=1);return f[u][0]=t,i(f[u],r?e:n),f[u]},load:function(e,t){o.index=0,o.ref=h;let n=e(t);return o.ref=0,n},updated:function(){let e=a?l:t;a=1,u(f,e);},unmount:function(){u(f,r);}},h={hook:d,host:c,render:s};return d}(()=>this._update(),this);await this.unmounted,a.unmount();}};return c.props=s.props,c}const M=(e,t)=>y(e)?H(e):customElements.define(e,H(t));function R(){return s(0,{current:o.ref.host})}function F(t){let n=c();return s((l,r)=>(e==r&&(l[0]=y(t)?t():t,l[1]=e=>{(e=y(e)?e(l[0]):e)!=l[0]&&(l[0]=e,n());}),l),[])}function Z(e,o){let i;s((u,s)=>{switch(null==i&&(i=!o||!u[0]||!m(o,u[0]),u[0]=o),s){case n:case r:(i||s==r)&&u[1]&&(u[1](),u[1]=0),s==r&&(u[0]=null);break;case t:case l:(i||s==t)&&(u[1]=e());}return u},[]);}function q(e){return s(0,{current:e})}function z(e,t){let n=s(0,[]);return n[0]&&(!n[0]||t&&m(n[0],t))||(n[1]=e()),n[0]=t,n[1]}function G(t,n){let l=c(),r=s((t,r)=>(e==r&&(t[0]=n,t[1]=e=>{let n=t[2](t[0],e);n!=t[0]&&(t[0]=n,l());}),t),[]);return r[2]=t,r}function I(e,t){return z(()=>e,t)}function K(e){let t=R();if(e in t.current)return t[e]||(t[e]=[null,n=>t.current[e]=n]),t[e][0]=t.current[e],t[e]}function Q(e,t){let n=R();return n[e]||(n[e]=l=>P(n.current,e,l?{...t,detail:l}:t)),n[e]}

export { L as Any, O as BaseElement, M as customElement, _ as h, T as render, C as toVnode, I as useCallback, Z as useEffect, Q as useEvent, R as useHost, z as useMemo, K as useProp, G as useReducer, q as useRef, F as useState };
