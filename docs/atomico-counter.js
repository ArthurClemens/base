import { p, x, J } from './chunks/711364dc.js';

var n=function(t,r,s,e){var u;r[0]=0;for(var p=1;p<r.length;p++){var h=r[p++],a=r[p]?(r[0]|=h?1:2,s[r[p++]]):r[++p];3===h?e[0]=a:4===h?e[1]=Object.assign(e[1]||{},a):5===h?(e[1]=e[1]||{})[r[++p]]=a:6===h?e[1][r[++p]]+=a+"":h?(u=t.apply(a,n(t,a,s,["",null])),e.push(u),a[0]?r[0]|=2:(r[p-2]=0,r[p]=u)):e.push(a);}return e},r=new Map;const s=function(t){var s=r.get(this);return s||(s=new Map,r.set(this,s)),(s=n(this,s.get(t)||(s.set(t,s=function(t){for(var n,r,s=1,e="",u="",p=[0],h=function(t){1===s&&(t||(e=e.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?p.push(0,t,e):3===s&&(t||e)?(p.push(3,t,e),s=2):2===s&&"..."===e&&t?p.push(4,t,0):2===s&&e&&!t?p.push(5,0,!0,e):s>=5&&((e||!t&&5===s)&&(p.push(s,0,e,r),s=6),t&&(p.push(s,t,0,r),s=6)),e="";},a=0;a<t.length;a++){a&&(1===s&&h(),h(a));for(var o=0;o<t[a].length;o++)n=t[a][o],1===s?"<"===n?(h(),p=[p],s=3):e+=n:4===s?"--"===e&&">"===n?(s=1,e=""):e=n+e[0]:u?n===u?u="":e+=n:'"'===n||"'"===n?u=n:">"===n?(h(),s=1):s&&("="===n?(s=5,r=e,e=""):"/"===n&&(s<5||">"===t[a][o+1])?(h(),3===s&&(p=p[0]),s=p,(p=p[0]).push(2,0,s),s=0):" "===n||"\t"===n||"\n"===n||"\r"===n?(h(),s=2):e+=n),3===s&&"!--"===e&&(s=4,p=p[0]);}return h(),p}(t)),s),arguments,[])).length>1?s:s[0]}.bind(p);

var style = "*{font-size:200%;}span{width:4rem; display:inline-block; text-align:center;}button{width:4rem; height:4rem; border:none; border-radius:10px; background-color:seagreen; color:white;}";

function AtomicoCounter() {
  let [count, setCount] = J("count");
  return s`<host shadowDom>
    <style>
      ${style}
    </style>
    <button onclick=${() => setCount(count - 1)}>-</button>
    <span>${count}</span>
    <button onclick=${() => setCount(count + 1)}>+</button>
  </host>`;
}

AtomicoCounter.props = {
  count: {
    type: Number,
    reflect: true,
    value: 0,
    event: { type: "ChangeCount" },
  },
};

x("atomico-counter", AtomicoCounter);
//# sourceMappingURL=atomico-counter.js.map
