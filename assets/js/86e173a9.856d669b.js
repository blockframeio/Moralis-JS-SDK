"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7081],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6649:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},i=void 0,l={unversionedId:"demos/firebase-nextjs",id:"demos/firebase-nextjs",title:"firebase-nextjs",description:"Download",source:"@site/docs/demos/firebase-nextjs.md",sourceDirName:"demos",slug:"/demos/firebase-nextjs",permalink:"/Moralis-JS-SDK/demos/firebase-nextjs",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"firebase-auth-ext",permalink:"/Moralis-JS-SDK/demos/firebase-auth-ext"},next:{title:"firebase-proxy",permalink:"/Moralis-JS-SDK/demos/firebase-proxy"}},s={},p=[{value:"\ud83d\ude80 How to Start",id:"-how-to-start",level:2},{value:"\ud83d\udd0c Run Locally",id:"-run-locally",level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://moralisweb3.github.io/Moralis-JS-SDK/downloads/firebase-nextjs.zip"},"Download")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/MoralisWeb3/Moralis-JS-SDK/tree/main/demos/firebase-nextjs"},"View code")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"This project contains a simple Next.js app integrated with Moralis and Firebase."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u26a0\ufe0f Warning"),": This demo is under development.")),(0,a.kt)("p",null,"Required Google Cloud services:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/hosting"},"Firebase Hosting")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/auth"},"Firebase Authentication")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/secret-manager/"},"Secret Manager")," (check the ",(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/secret-manager/pricing"},"pricing"),")")),(0,a.kt)("h2",{id:"-how-to-start"},"\ud83d\ude80 How to Start"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Clone this repo."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/cli"},"Install Firebase CLI")," globally: ",(0,a.kt)("inlineCode",{parentName:"li"},"npm install -g firebase-tools")),(0,a.kt)("li",{parentName:"ol"},"Login to your account: ",(0,a.kt)("inlineCode",{parentName:"li"},"firebase login")),(0,a.kt)("li",{parentName:"ol"},"Get list of your projects: ",(0,a.kt)("inlineCode",{parentName:"li"},"firebase projects:list"),". If this list is empty you should add a new project. You can do it by the Firebase Console."),(0,a.kt)("li",{parentName:"ol"},"Set your project ID: ",(0,a.kt)("inlineCode",{parentName:"li"},"firebase use <PROJECT_ID>")),(0,a.kt)("li",{parentName:"ol"},"Enable the ",(0,a.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/hosting/frameworks-overview"},"webframeworks feature"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"firebase experiments:enable webframeworks")),(0,a.kt)("li",{parentName:"ol"},"Generate a certificate for the ",(0,a.kt)("a",{parentName:"li",href:"https://firebase.google.com/support/guides/service-accounts"},"Service Account"),". You will need it in the next step."),(0,a.kt)("li",{parentName:"ol"},"Convert the certificate to extension variables by ",(0,a.kt)("a",{parentName:"li",href:"https://moralisweb3.github.io/firebase-extensions/service-account-converter/"},"this online converter"),". You will use these variables in the next step."),(0,a.kt)("li",{parentName:"ol"},"Install the Authenticate with Moralis Web3 extension: ",(0,a.kt)("inlineCode",{parentName:"li"},"firebase ext:install moralis/moralis-auth"),"."),(0,a.kt)("li",{parentName:"ol"},"Copy ",(0,a.kt)("inlineCode",{parentName:"li"},"hosting/.env.example")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"hosting/.env")," and set all variables."),(0,a.kt)("li",{parentName:"ol"},"Activate the ",(0,a.kt)("inlineCode",{parentName:"li"},"Authentication")," feature in the Firebase Console. Go to the Firebase Console > Your Project > Build > Authentication and click the Get Started button.")),(0,a.kt)("h3",{id:"-run-locally"},"\ud83d\udd0c Run Locally"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Run emulators: ",(0,a.kt)("inlineCode",{parentName:"li"},"firebase emulators:start")),(0,a.kt)("li",{parentName:"ol"},"Open ",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:5555/")," in your browser.")))}u.isMDXComponent=!0}}]);