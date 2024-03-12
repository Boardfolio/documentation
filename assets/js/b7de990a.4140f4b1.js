"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[626],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>f});var a=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,a,o=function(t,e){if(null==t)return{};var r,a,o={},n=Object.keys(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var u=a.createContext({}),l=function(t){var e=a.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},d=function(t){var e=l(t.components);return a.createElement(u.Provider,{value:e},t.children)},p="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var r=t.components,o=t.mdxType,n=t.originalType,u=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),p=l(r),h=o,f=p["".concat(u,".").concat(h)]||p[h]||c[h]||n;return r?a.createElement(f,i(i({ref:e},d),{},{components:r})):a.createElement(f,i({ref:e},d))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var n=r.length,i=new Array(n);i[0]=h;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=t,s[p]="string"==typeof t?t:o,i[1]=s;for(var l=2;l<n;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3114:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var a=r(7462),o=(r(7294),r(3905));const n={sidebar_label:"Creating Your First Product",sidebar_position:3},i=void 0,s={unversionedId:"tutorial/erstesProdukt",id:"tutorial/erstesProdukt",title:"erstesProdukt",description:"Creating Your First Product",source:"@site/docs/tutorial/erstesProdukt.md",sourceDirName:"tutorial",slug:"/tutorial/erstesProdukt",permalink:"/documentation/tutorial/erstesProdukt",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial/erstesProdukt.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Creating Your First Product",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Financial Details",permalink:"/documentation/tutorial/finanzielleAngaben"},next:{title:"Produkte",permalink:"/documentation/category/produkte"}},u={},l=[{value:"Creating Your First Product",id:"creating-your-first-product",level:2},{value:"Basic Data",id:"basic-data",level:2},{value:"Product Description",id:"product-description",level:2},{value:"Price and Taxes",id:"price-and-taxes",level:2},{value:"Shipping",id:"shipping",level:2},{value:"Product Attributes",id:"product-attributes",level:2}],d={toc:l},p="wrapper";function c(t){let{components:e,...n}=t;return(0,o.kt)(p,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"creating-your-first-product"},"Creating Your First Product"),(0,o.kt)("p",null,"Let's get started! Your first product is ready to be created! To do this, we navigate to the product catalog."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Product_01",src:r(3895).Z,width:"304",height:"310"})),(0,o.kt)("p",null,"Now you're in the product catalog, where all your created products are listed. To create a new product, click on ",(0,o.kt)("strong",{parentName:"p"},'"New Product"'),".\nOn this page, you need to provide all master data as well as additional information about the product."),(0,o.kt)("h2",{id:"basic-data"},"Basic Data"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Product_02",src:r(6942).Z,width:"527",height:"278"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"Product Name")," is the final display name of your product on the frontend. Make sure it is ",(0,o.kt)("strong",{parentName:"li"},"unique")," within your product catalog."),(0,o.kt)("li",{parentName:"ul"},"If you work with your own ",(0,o.kt)("strong",{parentName:"li"},"article numbers"),", you can also enter them here."),(0,o.kt)("li",{parentName:"ul"},"You can upload as many ",(0,o.kt)("strong",{parentName:"li"},"images")," of your product as you like (at least 1). The first image will be used as the thumbnail of your product (the order can be changed via drag and drop)."),(0,o.kt)("li",{parentName:"ul"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Category"),", you select a suitable one for your product from the existing categories.")),(0,o.kt)("h2",{id:"product-description"},"Product Description"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Product_03",src:r(9033).Z,width:"889",height:"680"})),(0,o.kt)("p",null,"While you only need to provide the most important facts in the short description, you can really let loose in the description. The description displayed on the product page below the product offers space for detailed information about your product."),(0,o.kt)("h2",{id:"price-and-taxes"},"Price and Taxes"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Product_04",src:r(1451).Z,width:"552",height:"418"})),(0,o.kt)("p",null,"The most important thing if you want to sell a product is your tax class and the product price. Here you enter your net price ",(0,o.kt)("strong",{parentName:"p"},"(price without taxes)"),". If you use the sale function, you can also enter a reduced price that your product will assume during the sale."),(0,o.kt)("p",null,"To ensure the correct tax, you must select the option that is ",(0,o.kt)("strong",{parentName:"p"},"appropriate for you and the product")," from the dropdown box:"),(0,o.kt)("admonition",{title:"TAX CLASS",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"The topic may scare many, but it's still important. Don't worry, we'll make it as easy as possible for you!\nThere are exactly ",(0,o.kt)("strong",{parentName:"p"},"3")," options for you:")),(0,o.kt)("admonition",{title:"Option 1",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You are a small business owner, meaning you have an annual turnover of less than \u20ac22,000 (You don't have to pay value-added tax):"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},'You select "Small Business Owner".'))),(0,o.kt)("admonition",{title:"Option 2",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You are ",(0,o.kt)("strong",{parentName:"p"},"not")," a small business owner, but your ",(0,o.kt)("strong",{parentName:"p"},"total annual turnover in the EU")," is below \u20ac10,000:"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},'You select one of the "less than 10k" options.'))),(0,o.kt)("admonition",{title:"Option 3",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You are not a small business owner, but you have a turnover that exceeds \u20ac10,000 in the EU:"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},'You select "Standard" or "Reduced".'))),(0,o.kt)("p",null,"Whether you should use the standard or reduced tax rate depends on your product. In Germany, for example, only books enjoy the reduced tax rate, while all",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," other products are charged the standard rate."),(0,o.kt)("h2",{id:"shipping"},"Shipping"),(0,o.kt)("p",null,"In the Shipping section, ",(0,o.kt)("strong",{parentName:"p"},'activate the "Requires Shipping" slider')," so that the shop automatically adds the shipping costs to your product. The flat rate you set up for the buyer's country of origin will be used for this purpose (More on this in the ",(0,o.kt)("a",{parentName:"p",href:"/documentation/tutorial/firstProduct#Shipping"},"Shipping")," section). ",(0,o.kt)("strong",{parentName:"p"},"So leave the shipping costs at 0.00 \u20ac in normal cases.")),(0,o.kt)("admonition",{title:"Fixed Shipping Costs",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you want specific shipping costs for a product (e.g., because it is very large or very small), you can enter your individual shipping costs here. These will then override the flat rate.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Product_05",src:r(3418).Z,width:"338",height:"98"})),(0,o.kt)("admonition",{title:"Digital Products",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you have a ",(0,o.kt)("a",{parentName:"p",href:"/documentation/Products/expandingProduct/#Digital"},(0,o.kt)("strong",{parentName:"a"},"digital product")),' such as a PDF or a 3D model, then deactivate the "Requires Shipping" slider.\nMore on how to create a ',(0,o.kt)("a",{parentName:"p",href:"/documentation/Products/expandingProduct/#Digital"},(0,o.kt)("strong",{parentName:"a"},"digital product"))," can be found ",(0,o.kt)("a",{parentName:"p",href:"/documentation/Products/expandingProduct/#Digital"},"here"),".")),(0,o.kt)("h2",{id:"product-attributes"},"Product Attributes"),(0,o.kt)("p",null,"Finally, we need to assign attributes to the product so that customers can find your product using filters and search functionality. After completing your product, call it up again via your product list. Now you'll see additional tabs at the top."),(0,o.kt)("p",null,'To add attributes, go to the "Attributes" tab and navigate to the "Global" tab. For the "Language" attribute, select a language from the dropdown box and also check the "multi value" box.\n',(0,o.kt)("img",{alt:"Language01",src:r(6002).Z,width:"1068",height:"354"}),"\nNow another dropdown box will appear where you can select a different language. Save your changes."),(0,o.kt)("p",null,"Use this page to specify all product details such as language, number of players, and genre."),(0,o.kt)("p",null,"Congratulations, you have successfully created your first product!"),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"Products that typically fall into the hobby category.",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}c.isMDXComponent=!0},6002:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/Language_01-673e99165ec36a948aabd69e8d34392e.png"},3895:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/ProduktAnlegen_01-b410faf0d5539e428d23fb0ac227612d.png"},6942:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/Produkt_02-1ad3ba76734e227a80e0851ff1291702.png"},9033:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/Produkt_03-090e8a70e4b47eb257bb46ec4e046638.png"},1451:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/Produkt_04-8ca2c7725a26a7e528dfff1d9982afff.png"},3418:(t,e,r)=>{r.d(e,{Z:()=>a});const a="data:image/png;base64,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"}}]);