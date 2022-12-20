"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6324],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>d});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(o),d=n,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return o?r.createElement(f,i(i({ref:t},c),{},{components:o})):r.createElement(f,i({ref:t},c))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=o[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},2859:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=o(7462),n=(o(7294),o(3905));const a={},i=void 0,l={unversionedId:"demos/firebase-proxy",id:"demos/firebase-proxy",title:"firebase-proxy",description:"Download",source:"@site/docs/demos/firebase-proxy.md",sourceDirName:"demos",slug:"/demos/firebase-proxy",permalink:"/Moralis-JS-SDK/demos/firebase-proxy",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"firebase-nextjs",permalink:"/Moralis-JS-SDK/demos/firebase-nextjs"},next:{title:"firebase-streams-ext",permalink:"/Moralis-JS-SDK/demos/firebase-streams-ext"}},s={},p=[{value:"\ud83d\ude80 How to Start",id:"-how-to-start",level:2},{value:"\ud83d\udd0c Run Locally",id:"-run-locally",level:3},{value:"\ud83d\udd25 Deploy to Production",id:"-deploy-to-production",level:3}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://moralisweb3.github.io/Moralis-JS-SDK/downloads/firebase-proxy.zip"},"Download")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/MoralisWeb3/Moralis-JS-SDK/tree/main/demos/firebase-proxy"},"View code")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"This project contains a simple demo of Moralis API Proxy with the rate-limiting per a user IP."),(0,n.kt)("p",null,"Required Firebase services:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/hosting"},"Hosting")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/firestore"},"Firestore")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/functions"},"Cloud Functions"),' (only in the "Pay as you go" billing plan).')),(0,n.kt)("h2",{id:"-how-to-start"},"\ud83d\ude80 How to Start"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Clone this repo."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/cli"},"Install Firebase CLI")," globally: ",(0,n.kt)("inlineCode",{parentName:"li"},"npm install -g firebase-tools")),(0,n.kt)("li",{parentName:"ol"},"Login to your account: ",(0,n.kt)("inlineCode",{parentName:"li"},"firebase login")),(0,n.kt)("li",{parentName:"ol"},"Get list of your projects: ",(0,n.kt)("inlineCode",{parentName:"li"},"firebase projects:list"),". If this list is empty you should add a new project. You can do it by the Firebase Console."),(0,n.kt)("li",{parentName:"ol"},"Set your project ID: ",(0,n.kt)("inlineCode",{parentName:"li"},"firebase use <PROJECT_ID>")),(0,n.kt)("li",{parentName:"ol"},"Copy ",(0,n.kt)("inlineCode",{parentName:"li"},"functions/.env.example")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"functions/.env")," and set your Moralis API key in the file.")),(0,n.kt)("h3",{id:"-run-locally"},"\ud83d\udd0c Run Locally"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://www.oracle.com/java/technologies/javase/jdk18-archive-downloads.html"},"Install Java")," on your computer. Functions Emulator requires Java."),(0,n.kt)("li",{parentName:"ol"},"Run emulators: ",(0,n.kt)("inlineCode",{parentName:"li"},"firebase emulators:start")),(0,n.kt)("li",{parentName:"ol"},"Open ",(0,n.kt)("inlineCode",{parentName:"li"},"http://localhost:5555/")," in your browser.")),(0,n.kt)("h3",{id:"-deploy-to-production"},"\ud83d\udd25 Deploy to Production"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Activate Firestore."),(0,n.kt)("li",{parentName:"ol"},"Deploy: ",(0,n.kt)("inlineCode",{parentName:"li"},"firebase deploy")),(0,n.kt)("li",{parentName:"ol"},"If you have any problem with the CORS on the production, probably you should allow unauthenticated HTTP function invocation. To allow unauthenticated invocation you must specify this at or after deployment. ",(0,n.kt)("a",{parentName:"li",href:"https://cloud.google.com/functions/docs/securing/managing-access-iam#allowing_unauthenticated_http_function_invocation"},"Here")," you can read more about it.")))}u.isMDXComponent=!0}}]);