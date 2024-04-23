"use strict";(self.webpackChunkgatsby_starter_comt=self.webpackChunkgatsby_starter_comt||[]).push([[245],{7190:function(e,t,r){r.r(t),r.d(t,{default:function(){return ne}});var n={};r.r(n),r.d(n,{exclude:function(){return te},extract:function(){return Q},parse:function(){return V},parseUrl:function(){return X},pick:function(){return ee},stringify:function(){return W},stringifyUrl:function(){return Z}});var o=r(644),a=r(6540),i=r(8060),s=r(4810),l=r(7437);const c=(0,o.A)("div",{target:"el024hc1"})({name:"7on4i6",styles:"display:flex;flex-wrap:wrap;width:768px;margin:100px auto 0;@media (max-width: 768px){width:100%;margin-top:50px;padding:0 20px;}"}),u=(0,o.A)((e=>{let{active:t,...r}=e;return(0,l.Y)(s.N_,r)}),{target:"el024hc0"})("margin-right:20px;padding:5px 0;font-size:18px;font-weight:",(e=>{let{active:t}=e;return t?"800":"400"}),";cursor:pointer;&:last-of-type{margin-right:0;}@media (max-width: 768px){font-size:15px;}");var p=function(e){let{selectedCategory:t,categoryList:r}=e;return(0,l.Y)(c,null,Object.entries(r).map((e=>{let[r,n]=e;return(0,l.Y)(u,{to:"/?category="+r,active:r===t,key:r},"#",r,"(",n,")")})))},d=r(2532);const f=(0,o.A)(d.G,{target:"eapcmkh0"})({name:"1on2x4e",styles:"width:120px;height:120px;margin-bottom:30px;border-radius:50%;@media (max-width: 768px){width:80px;height:80px;}"});var m=function(e){let{profileImage:t}=e;return(0,l.Y)(f,{image:t,alt:"Profile Image"})};const g=(0,o.A)("div",{target:"e7e6za13"})({name:"1u7ncg7",styles:"width:100%;background-image:linear-gradient(60deg, #29323c 0%, #485563 100%);color:#ffffff"}),y=(0,o.A)("div",{target:"e7e6za12"})({name:"1kisa53",styles:"display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:768px;height:400px;margin:0 auto;@media (max-width: 768px){width:100%;height:300px;padding:0 20px;}"}),x=(0,o.A)("div",{target:"e7e6za10"})({name:"1mgdphf",styles:"margin-top:5px;font-size:35px;font-weight:700;@media (max-width: 768px){font-size:25px;}"});var h=function(e){let{profileImage:t}=e;return(0,l.Y)(g,null,(0,l.Y)(y,null,(0,l.Y)(m,{profileImage:t}),(0,l.Y)("div",null,(0,l.Y)(x,null,"Frontend Developer Comt"))))},b=r(8168);const w=(0,o.A)(s.N_,{target:"ersx7z77"})({name:"m7gxp6",styles:"display:flex;flex-direction:column;border-radius:10px;box-shadow:0 0 8px rgba(0, 0, 0, 0.15);transition:0.3s box-shadow;cursor:pointer;&:hover{box-shadow:0 0 10px rgba(0, 0, 0, 0.3);}"}),v=(0,o.A)(d.G,{target:"ersx7z76"})({name:"1axbq5h",styles:"width:100%;height:200px;border-radius:10px 10px 0 0"}),k=(0,o.A)("div",{target:"ersx7z75"})({name:"1do7u82",styles:"flex:1;display:flex;flex-direction:column;padding:15px"}),A=(0,o.A)("div",{target:"ersx7z74"})({name:"kw2b4d",styles:"display:-webkit-box;overflow:hidden;margin-bottom:3px;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:20px;font-weight:700"}),j=(0,o.A)("div",{target:"ersx7z73"})({name:"xm5j9w",styles:"font-size:14px;font-weight:400;opacity:0.7"}),I=(0,o.A)("div",{target:"ersx7z72"})({name:"1bobky6",styles:"display:flex;flex-wrap:wrap;margin-top:10px;margin:10px -5px"}),F=(0,o.A)("div",{target:"ersx7z71"})({name:"1bzcbme",styles:"margin:2.5px 5px;padding:3px 5px;border-radius:3px;background:black;font-size:14px;font-weight:700;color:white"}),Y=(0,o.A)("div",{target:"ersx7z70"})({name:"1wehmme",styles:"display:-webkit-box;overflow:hidden;margin-top:auto;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:16px;opacity:0.8"});var O=function(e){let{title:t,date:r,categories:n,summary:o,thumbnail:{childImageSharp:{gatsbyImageData:a}},link:i}=e;return(0,l.Y)(w,{to:i},(0,l.Y)(v,{image:a,alt:"Post Item Image"}),(0,l.Y)(k,null,(0,l.Y)(A,null,t),(0,l.Y)(j,null,r),(0,l.Y)(I,null,n.map((e=>(0,l.Y)(F,{key:e},e)))),(0,l.Y)(Y,null,o)))};var S=function(e,t){const r=(0,a.useRef)(null),n=(0,a.useRef)(null),{0:o,1:i}=(0,a.useState)(1),s=(0,a.useMemo)((()=>t.filter((t=>{let{node:{frontmatter:{categories:r}}}=t;return"All"===e||r.includes(e)}))),[e]);return(0,a.useEffect)((()=>{n.current=new IntersectionObserver(((e,t)=>{e[0].isIntersecting&&(i((e=>e+1)),t.unobserve(e[0].target))}))}),[]),(0,a.useEffect)((()=>i(1)),[e]),(0,a.useEffect)((()=>{10*o>=s.length||null===r.current||0===r.current.children.length||null===n.current||n.current.observe(r.current.children[r.current.children.length-1])}),[o,e]),{containerRef:r,postList:s.slice(0,10*o)}};const z=(0,o.A)("div",{target:"epn69vj0"})({name:"11grurp",styles:"display:grid;grid-template-columns:1fr 1fr;grid-gap:20px;width:768px;margin:0 auto;padding:50px 0 100px;@media (max-width: 768px){grid-template-columns:1fr;width:100%;padding:50px 20px;}"});var E=function(e){let{seletedCategory:t,posts:r}=e;const{containerRef:n,postList:o}=S(t,r);return(0,l.Y)(z,{ref:n},o.map((e=>{let{node:{id:t,fields:{slug:r},frontmatter:n}}=e;return(0,l.Y)(O,(0,b.A)({},n,{link:r,key:t}))})))};const C="%[a-f0-9]{2}",R=new RegExp("("+C+")|([^%]+?)","gi"),N=new RegExp("("+C+")+","gi");function $(e,t){try{return[decodeURIComponent(e.join(""))]}catch{}if(1===e.length)return e;t=t||1;const r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],$(r),$(n))}function U(e){try{return decodeURIComponent(e)}catch{let t=e.match(R)||[];for(let r=1;r<t.length;r++)t=(e=$(t,r).join("")).match(R)||[];return e}}function L(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return decodeURIComponent(e)}catch{return function(e){const t={"%FE%FF":"��","%FF%FE":"��"};let r=N.exec(e);for(;r;){try{t[r[0]]=decodeURIComponent(r[0])}catch{const e=U(r[0]);e!==r[0]&&(t[r[0]]=e)}r=N.exec(e)}t["%C2"]="�";const n=Object.keys(t);for(const o of n)e=e.replace(new RegExp(o,"g"),t[o]);return e}(e)}}function P(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===e||""===t)return[];const r=e.indexOf(t);return-1===r?[]:[e.slice(0,r),e.slice(r+t.length)]}function _(e,t){const r={};if(Array.isArray(t))for(const n of t){const t=Object.getOwnPropertyDescriptor(e,n);t?.enumerable&&Object.defineProperty(r,n,t)}else for(const n of Reflect.ownKeys(e)){const o=Object.getOwnPropertyDescriptor(e,n);if(o.enumerable){t(n,e[n],e)&&Object.defineProperty(r,n,o)}}return r}const q=e=>null==e,D=e=>encodeURIComponent(e).replaceAll(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)),M=Symbol("encodeFragmentIdentifier");function B(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function T(e,t){return t.encode?t.strict?D(e):encodeURIComponent(e):e}function G(e,t){return t.decode?L(e):e}function K(e){return Array.isArray(e)?e.sort():"object"==typeof e?K(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function H(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function J(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function Q(e){const t=(e=H(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function V(e,t){B((t={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,...t}).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)]$/.exec(e),e=e.replace(/\[\d*]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[])$/.exec(e),e=e.replace(/\[]$/,""),t?void 0!==n[e]?n[e]=[...n[e],r]:n[e]=[r]:n[e]=r};case"colon-list-separator":return(e,r,n)=>{t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==n[e]?n[e]=[...n[e],r]:n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{const o="string"==typeof r&&r.includes(e.arrayFormatSeparator),a="string"==typeof r&&!o&&G(r,e).includes(e.arrayFormatSeparator);r=a?G(r,e):r;const i=o||a?r.split(e.arrayFormatSeparator).map((t=>G(t,e))):null===r?r:G(r,e);n[t]=i};case"bracket-separator":return(t,r,n)=>{const o=/(\[])$/.test(t);if(t=t.replace(/\[]$/,""),!o)return void(n[t]=r?G(r,e):r);const a=null===r?[]:r.split(e.arrayFormatSeparator).map((t=>G(t,e)));void 0!==n[t]?n[t]=[...n[t],...a]:n[t]=a};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[...[r[e]].flat(),t]:r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const o of e.split("&")){if(""===o)continue;const e=t.decode?o.replaceAll("+"," "):o;let[a,i]=P(e,"=");void 0===a&&(a=e),i=void 0===i?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?i:G(i,t),r(G(a,t),i,n)}for(const[o,a]of Object.entries(n))if("object"==typeof a&&null!==a)for(const[e,r]of Object.entries(a))a[e]=J(r,t);else n[o]=J(a,t);return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce(((e,t)=>{const r=n[t];return e[t]=Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?K(r):r,e}),Object.create(null))}function W(e,t){if(!e)return"";B((t={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...t}).arrayFormatSeparator);const r=r=>t.skipNull&&q(e[r])||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[T(t,e),"[",o,"]"].join("")]:[...r,[T(t,e),"[",T(o,e),"]=",T(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[T(t,e),"[]"].join("")]:[...r,[T(t,e),"[]=",T(n,e)].join("")];case"colon-list-separator":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[T(t,e),":list="].join("")]:[...r,[T(t,e),":list=",T(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(n,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[T(r,e),t,T(o,e)].join("")]:[[n,T(o,e)].join(e.arrayFormatSeparator)])}default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,T(t,e)]:[...r,[T(t,e),"=",T(n,e)].join("")]}}(t),o={};for(const[i,s]of Object.entries(e))r(i)||(o[i]=s);const a=Object.keys(o);return!1!==t.sort&&a.sort(t.sort),a.map((r=>{const o=e[r];return void 0===o?"":null===o?T(r,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?T(r,t)+"[]":o.reduce(n(r),[]).join("&"):T(r,t)+"="+T(o,t)})).filter((e=>e.length>0)).join("&")}function X(e,t){t={decode:!0,...t};let[r,n]=P(e,"#");return void 0===r&&(r=e),{url:r?.split("?")?.[0]??"",query:V(Q(e),t),...t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:G(n,t)}:{}}}function Z(e,t){t={encode:!0,strict:!0,[M]:!0,...t};const r=H(e.url).split("?")[0]||"";let n=W({...V(Q(e.url),{sort:!1}),...e.query},t);n&&=`?${n}`;let o=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);if("string"==typeof e.fragmentIdentifier){const n=new URL(r);n.hash=e.fragmentIdentifier,o=t[M]?n.hash:`#${e.fragmentIdentifier}`}return`${r}${n}${o}`}function ee(e,t,r){r={parseFragmentIdentifier:!0,[M]:!1,...r};const{url:n,query:o,fragmentIdentifier:a}=X(e,r);return Z({url:n,query:_(o,t),fragmentIdentifier:a},r)}function te(e,t,r){return ee(e,Array.isArray(t)?e=>!t.includes(e):(e,r)=>!t(e,r),r)}var re=n;var ne=function(e){let{location:{search:t},data:{site:{siteMetadata:{title:r,description:n,siteUrl:o}},allMarkdownRemark:{edges:s},file:{childImageSharp:{gatsbyImageData:c},publicURL:u}}}=e;const d=re.parse(t),f="string"==typeof d.category&&d.category?d.category:"All",m=(0,a.useMemo)((()=>s.reduce(((e,t)=>{let{node:{frontmatter:{categories:r}}}=t;return r.forEach((t=>{void 0===e[t]?e[t]=1:e[t]++})),e.All++,e}),{All:0})),[]);return(0,l.Y)(i.A,{title:r,description:n,url:o,image:u},(0,l.Y)(h,{profileImage:c}),(0,l.Y)(p,{selectedCategory:f,categoryList:m}),(0,l.Y)(E,{seletedCategory:f,posts:s}))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-0c82eb505b8cfc888489.js.map