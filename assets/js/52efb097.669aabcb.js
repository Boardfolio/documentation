"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[955],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6448:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_label:"Finanzielle Angaben",sidebar_position:2},o="Bankverbindung",l={unversionedId:"tutorial/finanzielleAngaben",id:"tutorial/finanzielleAngaben",title:"Bankverbindung",description:"Dieser Schritt ist unbedingt Notwendig zu erf\xfcllen bevor es dir m\xf6glich ist Produkte auf unserer Plattform zu verkaufen",source:"@site/docs/tutorial/finanzielleAngaben.md",sourceDirName:"tutorial",slug:"/tutorial/finanzielleAngaben",permalink:"/documentation/tutorial/finanzielleAngaben",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial/finanzielleAngaben.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Finanzielle Angaben",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Erste Schritte",permalink:"/documentation/tutorial/ersteSchritte"},next:{title:"Das erste Produkt",permalink:"/documentation/tutorial/erstesProdukt"}},s={},u=[],c={toc:u},p="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bankverbindung"},"Bankverbindung"),(0,i.kt)("admonition",{title:"Notwendig",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"Dieser Schritt ist unbedingt Notwendig zu erf\xfcllen bevor es dir m\xf6glich ist Produkte auf unserer Plattform zu verkaufen")),(0,i.kt)("admonition",{title:"Provisions Raten",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Auf dieser Seite k\xf6nnt ihr ausserdem sehen wie es mit eurer derzeitige Provisionrate aussieht.")),(0,i.kt)("h1",{id:"stripe-connect-verbinden"},"Stripe Connect Verbinden"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Ich verkaufe etwas, aber wie landet das Geld dann bei mir?"),' Eine sehr wichtige Frage. Wir arbeiten mit Stripe Connect, daher ist es notwendig, ein Stripe-Konto zu besitzen. Unter dem Tab "Finanzielle Angaben" findet ihr eure Stripe Connect Verkn\xfcpfung. Mit einem Klick auf "Connect with Stripe" werdet ihr auf die Boardfolio.gg Stripe Connect Seite weitergeleitet. Solltet ihr bereits ein Stripe Konto besitzen, k\xf6nnt ihr euch damit einloggen. Andernfalls habt ihr nun die M\xf6glichkeit, eines zu erstellen.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"StripeConnectImg",src:n(6174).Z,width:"942",height:"444"})),(0,i.kt)("p",null,"Habt ihr euch ",(0,i.kt)("strong",{parentName:"p"},"erfolgreich verbunden")," sollte es jetzt in eurem Backend angezeigt werden:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"StripeConnectedImg",src:n(6705).Z,width:"808",height:"122"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Gl\xfcckwunsch!")," Ihr seid nun bereit euer ",(0,i.kt)("a",{parentName:"p",href:"/documentation/tutorial/erstesProdukt"},(0,i.kt)("strong",{parentName:"a"},"erstes Produkt"))," einzustellen!"))}d.isMDXComponent=!0},6174:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/StripeConnect-cbd86caf749f418e9c2a839492eac566.png"},6705:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/StripeConnected-4259135150719c2652cc6cb08e914acb.png"}}]);