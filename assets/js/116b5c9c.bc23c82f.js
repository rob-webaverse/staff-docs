(self.webpackChunk=self.webpackChunk||[]).push([[8008],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>m,kt:()=>s});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(n),s=r,k=c["".concat(d,".").concat(s)]||c[s]||u[s]||i;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3397:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>o,metadata:()=>d,toc:()=>p,default:()=>u});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),l=["components"],o={id:"runtime-api",title:"Runtime API"},d={unversionedId:"developer/runtime-api",id:"developer/runtime-api",isDocsHomePage:!1,title:"Runtime API",description:"The Runtime API exposes everything you could possibly want to access within the Webaverse runtime. This includes access to crypto minting, the world scene, camera, physics, and more.",source:"@site/../docs/developer/runtime-api.md",sourceDirName:"developer",slug:"/developer/runtime-api",permalink:"/docs/developer/runtime-api",version:"current",lastUpdatedBy:"jin",lastUpdatedAt:1621530937,formattedLastUpdatedAt:"5/20/2021",frontMatter:{id:"runtime-api",title:"Runtime API"},sidebar:"guides",previous:{title:"Examples",permalink:"/docs/developer/examples"},next:{title:"Manifest API",permalink:"/docs/developer/manifest-api"}},p=[{value:"<code>renderer</code>",id:"renderer",children:[]},{value:"<code>camera</code>",id:"camera",children:[]},{value:"<code>crypto</code>",id:"crypto",children:[{value:"<code>mintToken</code>",id:"minttoken",children:[]}]},{value:"<code>physics</code>",id:"physics",children:[{value:"<code>addGeometry</code>",id:"addgeometry",children:[]},{value:"<code>removeGeometry</code>",id:"removegeometry",children:[]},{value:"<code>getRigTransforms</code>",id:"getrigtransforms",children:[]}]},{value:"<code>app</code>",id:"app",children:[{value:"<code>object.add</code>",id:"objectadd",children:[]},{value:"<code>files[]</code>",id:"files",children:[]},{value:"<code>unload</code>",id:"unload",children:[]},{value:"<code>onBeforeRender()</code>",id:"onbeforerender",children:[]},{value:"<code>onAfterRender()</code>",id:"onafterrender",children:[]}]},{value:"<code>runtime</code>",id:"runtime",children:[{value:"<code>loadFile</code>",id:"loadfile",children:[]}]},{value:"<code>world</code>",id:"world",children:[{value:"<code>object</code>",id:"object",children:[]},{value:"<code>addObject</code>",id:"addobject",children:[]}]}],m={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Runtime API exposes everything you could possibly want to access within the Webaverse runtime. This includes access to crypto minting, the world scene, camera, physics, and more."),(0,i.kt)("p",null,"You can call these directly within your app without any extra requirements on your end. This is because the Runtime API is exposed to your code at runtime."),(0,i.kt)("h2",{id:"renderer"},(0,i.kt)("inlineCode",{parentName:"h2"},"renderer")),(0,i.kt)("p",null,"This provides a THREE.js renderer at runtime that can be used to ",(0,i.kt)("inlineCode",{parentName:"p"},"setAnimationLoop")," on."),(0,i.kt)("h2",{id:"camera"},(0,i.kt)("inlineCode",{parentName:"h2"},"camera")),(0,i.kt)("p",null,"This provides a THREE.js camera at runtime."),(0,i.kt)("h2",{id:"crypto"},(0,i.kt)("inlineCode",{parentName:"h2"},"crypto")),(0,i.kt)("h3",{id:"minttoken"},(0,i.kt)("inlineCode",{parentName:"h3"},"mintToken")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"file")),(0,i.kt)("td",{parentName:"tr",align:null},"blob"),(0,i.kt)("td",{parentName:"tr",align:null},"The data of the file to be tokenized")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"options")),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null},"You can define the ",(0,i.kt)("inlineCode",{parentName:"td"},"description")," of the token here")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"tokenId")),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"The id of the newly minted token")))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"physics"},(0,i.kt)("inlineCode",{parentName:"h2"},"physics")),(0,i.kt)("h3",{id:"addgeometry"},(0,i.kt)("inlineCode",{parentName:"h3"},"addGeometry")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"mesh")),(0,i.kt)("td",{parentName:"tr",align:null},"mesh")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"removegeometry"},(0,i.kt)("inlineCode",{parentName:"h3"},"removeGeometry")),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"physicsId")),(0,i.kt)("td",{parentName:"tr",align:null},"number")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getrigtransforms"},(0,i.kt)("inlineCode",{parentName:"h3"},"getRigTransforms")),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"[\n  {\n    position: this.localRig.inputs.leftGamepad.position,\n    quaternion: this.localRig.inputs.leftGamepad.quaternion,\n  },\n  {\n    position: this.localRig.inputs.rightGamepad.position,\n    quaternion: this.localRig.inputs.rightGamepad.quaternion,\n  },\n];\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"app"},(0,i.kt)("inlineCode",{parentName:"h2"},"app")),(0,i.kt)("h3",{id:"objectadd"},(0,i.kt)("inlineCode",{parentName:"h3"},"object.add")),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"mesh")),(0,i.kt)("td",{parentName:"tr",align:null},"mesh")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"files"},(0,i.kt)("inlineCode",{parentName:"h3"},"files[]")),(0,i.kt)("p",null,"This is a map of relative file URL -> file load URL you can ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch"),"."),(0,i.kt)("p",null,"No matter how you are loading the package, whether it is an XRPK or a URL or an NFT, this map should let you access all of the app's files."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," Files in this map are prefixed with ",(0,i.kt)("inlineCode",{parentName:"p"},"./")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"unload"},(0,i.kt)("inlineCode",{parentName:"h3"},"unload")),(0,i.kt)("p",null,"This is an event that gets emitted when the app instance is deleted. You should clean up anything you app is doing here, such as removing physics, objects, timers, etc."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," The ",(0,i.kt)("inlineCode",{parentName:"p"},"app.object")," will be automatically removed from the scene so there is no need to clean up that."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"onbeforerender"},(0,i.kt)("inlineCode",{parentName:"h3"},"onBeforeRender()")),(0,i.kt)("p",null,"This is a function to run alongside anything you want to run before rendering."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," If you do mirror rendering, it should occur between ",(0,i.kt)("inlineCode",{parentName:"p"},"onBeforeRender")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"onAfterRender")," to ensure proper recursion."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"onafterrender"},(0,i.kt)("inlineCode",{parentName:"h3"},"onAfterRender()")),(0,i.kt)("p",null,"This is a function to run alongisde anyhting you want to run after rendering."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"runtime"},(0,i.kt)("inlineCode",{parentName:"h2"},"runtime")),(0,i.kt)("h3",{id:"loadfile"},(0,i.kt)("inlineCode",{parentName:"h3"},"loadFile")),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"file")),(0,i.kt)("td",{parentName:"tr",align:null},"file")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"opts")),(0,i.kt)("td",{parentName:"tr",align:null},"object")))),(0,i.kt)("h2",{id:"world"},(0,i.kt)("inlineCode",{parentName:"h2"},"world")),(0,i.kt)("h3",{id:"object"},(0,i.kt)("inlineCode",{parentName:"h3"},"object")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"app.object")," is a THREE.js  object where you should attach your app (using ",(0,i.kt)("inlineCode",{parentName:"p"},"app.object.add"),", see below), this should be used instead of a ",(0,i.kt)("inlineCode",{parentName:"p"},"scene.")),(0,i.kt)("h3",{id:"addobject"},(0,i.kt)("inlineCode",{parentName:"h3"},"addObject")),(0,i.kt)("h4",{id:"parameters-5"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"contentId")),(0,i.kt)("td",{parentName:"tr",align:null},"number ",(0,i.kt)("em",{parentName:"td"},"or")," URL")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"parentId")),(0,i.kt)("td",{parentName:"tr",align:null},"number")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"position")),(0,i.kt)("td",{parentName:"tr",align:null},"THREE.Vector3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"quaternion")),(0,i.kt)("td",{parentName:"tr",align:null},"THREE.Quaternion")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"options")),(0,i.kt)("td",{parentName:"tr",align:null},"object")))))}u.isMDXComponent=!0}}]);