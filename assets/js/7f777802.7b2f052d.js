(self.webpackChunk=self.webpackChunk||[]).push([[6565],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(r),d=i,g=f["".concat(l,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2498:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>c,metadata:()=>l,toc:()=>s,default:()=>u});var n=r(2122),i=r(9756),a=(r(7294),r(3905)),o=["components"],c={id:"certificates",title:"Certificates"},l={unversionedId:"engineering/certificates",id:"engineering/certificates",isDocsHomePage:!1,title:"Certificates",description:"Free, reliable public certificates can be generated at any time with the help of LetsEncrypt. Certificates for the 'app' service or any of the other services can be generated with the help of a script shared in `./scripts` of the 'app' repo.",source:"@site/../docs/engineering/Certificates.md",sourceDirName:"engineering",slug:"/engineering/certificates",permalink:"/docs/engineering/certificates",version:"current",frontMatter:{id:"certificates",title:"Certificates"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/engineering/webaverse-overview"},next:{title:"App Quick Start Guide",permalink:"/docs/engineering/app/app-quickstart"}},s=[{value:"<strong><code>certbot_utils.sh</code></strong>",id:"certbot_utilssh",children:[{value:"Requirements",id:"requirements",children:[]},{value:"Usage",id:"usage",children:[]}]},{value:"Local Certs",id:"local-certs",children:[]}],p={toc:s};function u(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Free, reliable public certificates can be generated at any time with the help of LetsEncrypt. Certificates for the 'app' service or any of the other services can be generated with the help of a script shared in ",(0,a.kt)("inlineCode",{parentName:"p"},"./scripts")," of the 'app' repo."),(0,a.kt)("h2",{id:"certbot_utilssh"},(0,a.kt)("strong",{parentName:"h2"},(0,a.kt)("inlineCode",{parentName:"strong"},"certbot_utils.sh"))),(0,a.kt)("h3",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"certbot")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"cloudflare certbot plugin")," (If using cloudflare as DNS provider)"),(0,a.kt)("p",null,"When running, use root or sudo"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Flags/Options")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"-d")," --domains : individual domain names to be registered with the certificate. can be used multiple times to register multiple domain names."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"-c")," --cloudflare : (Optional) a flag to indicate whether or not you're using cloudflare as a dns provider "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"-a")," --apikey : if using cloudflare, apikey is required. generate at cloudflare with permissions for the domains you're requesting.")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"local-certs"},"Local Certs"),(0,a.kt)("p",null,"Certificate files are provided in ",(0,a.kt)("inlineCode",{parentName:"p"},"./certs-local")," of the 'app' repo as a local dev alternative to generating your own certs. By default the 'app' will search for certificate files in ",(0,a.kt)("inlineCode",{parentName:"p"},"./certs"),", which is where you should load any certs you generate yourself. However, if none are found there, the 'app' will search in ",(0,a.kt)("inlineCode",{parentName:"p"},"./certs-local")," instead."),(0,a.kt)("hr",null))}u.isMDXComponent=!0}}]);