(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>f});var a=t(81),i=t.n(a),r=t(645),o=t.n(r),s=t(667),c=t.n(s),d=new URL(t(408),t.b),l=new URL(t(865),t.b),p=o()(i()),m=c()(d),u=c()(l);p.push([e.id,`@font-face {\n  font-family: "Momcake";\n  src: url(${m}) format('woff');\n  font-weight: 800;\n}\n\n@font-face {\n  font-family: "Coco-Gothic";\n  src: url(${u}) format('woff');\n}\n\nbody {\n  background-image: linear-gradient(45deg,#000000, #06203a);\n  \n  color: white;\n  font-family: "Coco-Gothic";\n}\n\n#head {\n  margin: 5%;\n  padding-bottom: 20px;\n  \n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  \n  border-bottom: 3px solid #fefefedc;\n}\n\n#navtabs {\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n}\n\n#navtabs button {\n  border: none;\n  background: none;\n  \n  border-bottom: 2px #eaf2cd ;\n  border-bottom-style: none;\n  padding: 5px;\n  \n  font-family: 'Coco-Gothic';\n  color: white;\n  font-size: 1rem;\n}\n\n#head #restaurant-name {\n  font-size: 3rem;\n}\n\n.tabHead, #restaurant-name {\n  color: #cdf2ec;\n  font-family: "Momcake";\n}\n\n.tabHead {\n  \n  align-self: center;\n  font-size: 2rem;\n}\n\nsection {\n  margin: 5%;\n  padding: 15px;\n  \n  background-color: #00000033;\n  border-radius: 15px;\n}\n\n#home {\n  padding-top: 5px;\n  \n  display: none;\n  flex-direction: column;\n  \n  gap: 0.6rem;\n  \n  font-size: 0.7rem;\n}\n\n#home .para span {\n  font-weight: 400;\n  font-size: 1rem;\n}\n\n#home .image {\n  align-self: center;\n  width: 70%;\n}\n\n#menu {\n  display: none;\n  flex-direction: column;\n  align-items: center;\n}\n\n.menu-item{\n  padding: 10px;\n  \n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(3, auto-fill);\n  \n  gap: 10px;\n}\n\n\n.menu-item .item-img{\n  border-radius: 10px;\n  width: 100%;\n}\n\n.menu-item .item-img[data = 'left']{\n  grid-column: 1/2;\n  grid-row: 1/4;\n}\n\n.menu-item .item-img[data = 'right']{\n  justify-self: end;\n  grid-column: 2/3;\n  grid-row: 1/4;\n}\n\n.menu-item .item-name {\n  color: #eaf2cd;\n  font-size: 1.2rem;\n  font-weight: 600;\n  letter-spacing: 2px;\n}\n\n.menu-item .item-info {\n  font-size: 0.7rem;\n}\n\n.menu-item .item-price {\n  font-size: 1rem;\n  font-weight: 600;\n}\n\n#contact {\n  padding-bottom: 30px;\n  \n  display: none;\n  flex-direction: column;\n  align-items: center;\n  \n  gap: 20px;\n}\n\n#contact .about {\n  padding: 10px;\n  \n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  \n  font-size: 0.7rem;\n  text-align: center;\n}\n\n.times {\n  width: 80%;\n  \n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  \n  font-size: 0.75rem;\n}\n\n.times .t-slot {\n  display: flex;\n}\n\n.t-slot span {\n  width: 100%;\n  text-align: center;\n}\n\n.contacts {\n  padding: 5px;\n  \n  display: grid;\n  grid-auto-columns: repeat(4, 1fr);\n  grid-template-rows: 1fr 1fr;\n  justify-items: center;\n  \n  column-gap: 2rem;\n  row-gap: 0.8rem;\n}\n\n.contacts > span {\n  width: 100%;\n  \n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n}\n\n.contacts .c-call {\n  grid-column: 1/3;\n}\n\n.contacts .c-email {\n  grid-column: 3/5;\n}\n\n.contacts .c-social {\n  width: 2.2em;\n}\n\n@media only screen and (min-width: 768px){\n  #home {\n    padding: 80px;\n    padding-top: 30px;\n  }\n  \n  .items {\n    padding: 10px;\n    \n    display: grid;\n    grid-template-columns: repeat(2, 30%);\n    grid-auto-rows: 1fr;\n    justify-content: center;\n    \n    gap: 80px;\n  }\n  \n  .menu-item {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr repeat(3, 0.1fr);\n    width: 100%;\n  }\n  \n  .menu-item .item-img[data = 'left']{\n    grid-column: 1/2;\n    grid-row: 1/2;\n  }\n  \n  .menu-item .item-img[data = 'right']{\n    grid-column: 1/2;\n    grid-row: 1/2;\n  }\n  \n  #contact .about {\n    font-size: 0.4rem;\n  }\n  \n}`,""]);const f=p},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&o[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var r={},o=[],s=0;s<e.length;s++){var c=e[s],d=a.base?c[0]+a.base:c[0],l=r[d]||0,p="".concat(d," ").concat(l);r[d]=l+1;var m=t(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)n[m].references++,n[m].updater(u);else{var f=i(u,a);a.byIndex=s,n.splice(s,0,{identifier:p,updater:f,references:1})}o.push(p)}return o}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var r=a(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<r.length;o++){var s=t(r[o]);n[s].references--}for(var c=a(e,i),d=0;d<r.length;d++){var l=t(r[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}r=c}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,i&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},865:(e,n,t)=>{e.exports=t.p+"9bb41a94aa3a07de0fdc.woff"},408:(e,n,t)=>{e.exports=t.p+"b919e82cb9ea005bd07c.woff"}},n={};function t(a){var i=n[a];if(void 0!==i)return i.exports;var r=n[a]={id:a,exports:{}};return e[a](r,r.exports,t),r.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");if(a.length)for(var i=a.length-1;i>-1&&!e;)e=a[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),a=t(795),i=t.n(a),r=t(569),o=t.n(r),s=t(565),c=t.n(s),d=t(216),l=t.n(d),p=t(589),m=t.n(p),u=t(426),f={};f.styleTagTransform=m(),f.setAttributes=c(),f.insert=o().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=l(),n()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals;const h=t.p+"67922ab6174198daa177.jpg",b=t.p+"1d1baf31c0cd56fbd1a9.jpg",g=function(e){const n=document.createElement("span");n.setAttribute("class","tabHead"),n.textContent="Home";const t=document.createElement("p");t.setAttribute("class","para"),t.innerHTML='\n        <span >Welcome to "Savor Haven"</span> \n        <br/> Where culinary artistry meets a welcoming ambiance. \n        <br/> Nestled in the heart of the city, our restaurant offers a fusion of flavors crafted from locally sourced ingredients and inspired by global cuisine.';const a=new Image;a.src=h,a.setAttribute("class","image");const i=document.createElement("p");i.setAttribute("class","para"),i.textContent="Step into an inviting space adorned with warm hues and contemporary design, where each detail, from the flickering candlelight to the soothing background music, is curated to elevate your dining experience.";const r=new Image;r.src=b,r.setAttribute("class","image");const o=document.createElement("p");o.setAttribute("class","para"),o.textContent='Our menu is a symphony of delectable options, catering to diverse palates and dietary preferences, ensuring an unforgettable culinary journey. Whether you\'re seeking an intimate dinner for two or a celebration with loved ones, our attentive staff is dedicated to providing impeccable service, making every visit to "Savor Haven" a feast for the senses and a cherished memory.',e.appendChild(n),e.appendChild(t),e.appendChild(a),e.appendChild(i),e.appendChild(r),e.appendChild(o)},y=[{picsrc:t.p+"eb09f5f51f96e6ee656a.jpeg",name:"Seared Scallops with Citrus Risotto",info:"Pan-seared jumbo scallops served atop creamy citrus-infused risotto, garnished with fresh herbs.",price:"R215",side:"left"},{picsrc:t.p+"08026a8dfc8c070dd275.jpeg",name:"Miso-Glazed Chilean Sea Bass",info:"Grilled Chilean sea bass glazed with savory miso, accompanied by a medley of roasted seasonal vegetables.",price:"R104",side:"right"},{picsrc:t.p+"13d3065834cb074527f8.jpeg",name:"Truffle Mushroom Ravioli",info:"Handcrafted ravioli stuffed with wild mushrooms and drizzled with a luxurious truffle-infused cream sauce, finished with shaved parmesan.",price:"R99",side:"left"},{picsrc:t.p+"b2ede80f55e6cfa0bc14.jpeg",name:"Moroccan Spiced Lamb Tagine",info:"Tender braised lamb infused with Moroccan spices, served with couscous and a medley of roasted vegetables.",price:"R129",side:"right"},{picsrc:t.p+"627e6c680dfc38af8224.jpeg",name:"Szechuan Crispy Tofu Stir-Fry",info:"Crispy tofu cubes tossed in a zesty Szechuan sauce with colorful bell peppers, snow peas, and served over fragrant jasmine rice.",price:"R164",side:"left"},{picsrc:t.p+"3cc4445b590165f81fa9.jpeg",name:"Prime Ribeye Steak",info:"A succulent grilled ribeye steak seasoned to perfection, accompanied by garlic mashed potatoes and sauteed spinach.",price:"R225",side:"right"},{picsrc:t.p+"0405192b82647e5b0d79.jpeg",name:"Gourmet Veggie Pizza",info:"A thin-crust pizza topped with a vibrant assortment of roasted vegetables, artisanal cheeses, and a drizzle of balsamic glaze.",price:"R169",side:"left"},{picsrc:t.p+"307058d88a588b7b52b3.jpeg",name:"Decadent Chocolate Lava Cake",info:"A rich, warm chocolate cake with a molten center, paired with a scoop of vanilla bean ice cream and a raspberry coulis.",price:"R108",side:"right"}],v=t.p+"9814ad5f6233d82f6ab4.png",w=t.p+"2e823b7c0c57adaf73bb.png",x=t.p+"eab6abeda6e455921dbc.png",C=t.p+"0ca9606bdfbab539a366.png",A=t.p+"5538a6c11d3360181f52.png",E=t.p+"b39463c75aa0d0871746.png",S=[{days:"Monday - Thursday",time:"08:00 - 21:00"},{days:"Friday",time:"08:00 - 20:00"},{days:"Saturday & Sunday",time:"08:00 - 20:00"},{days:"Public Holidays",time:"08:00 - 19:00"}],z=document.getElementById("restaurant-page");function j(){const e=document.createElement("section");e.setAttribute("id","home"),g(e),z.appendChild(e),e.style.display="flex"}(()=>{const e=document.createElement("header");e.setAttribute("id","head");const n=document.createElement("span");n.setAttribute("id","restaurant-name"),n.textContent="SAVOUR HAVEN";const t=document.createElement("div");t.setAttribute("id","navtabs");const a=document.createElement("button"),i=document.createElement("button"),r=document.createElement("button");a.setAttribute("name","home"),i.setAttribute("name","menu"),r.setAttribute("name","contact"),a.textContent="Home",i.textContent="Menu",r.textContent="Contact",a.style="border-bottom-style: solid",t.appendChild(a),t.appendChild(i),t.appendChild(r),e.appendChild(n),e.appendChild(t),z.appendChild(e)})();const M=document.querySelectorAll("#navtabs button");let H="home";function T(e){switch(e){case"home":M[0].style="border-bottom-style: solid;",M[2].style="border-bottom-style: none;",M[1].style="border-bottom-style: none;",j();break;case"menu":M[1].style="border-bottom-style: solid;",M[0].style="border-bottom-style: none;",M[2].style="border-bottom-style: none;",function(){const e=document.createElement("section");e.setAttribute("id","menu"),function(e){const n=document.createElement("span");n.setAttribute("class","tabHead"),n.textContent="Menu",e.appendChild(n);const t=document.createElement("div");t.setAttribute("class","items");for(let e of y){const n=document.createElement("div");n.setAttribute("class","menu-item");const a=document.createElement("img");a.setAttribute("class","item-img"),a.src=e.picsrc,a.setAttribute("data",`${e.side}`);const i=document.createElement("span");i.setAttribute("class","item-name"),i.textContent=e.name;const r=document.createElement("span");r.setAttribute("class","item-info"),r.textContent=e.info;const o=document.createElement("span");o.setAttribute("class","item-price"),o.textContent=e.price,n.appendChild(a),n.appendChild(i),n.appendChild(r),n.appendChild(o),t.appendChild(n)}e.appendChild(t)}(e),z.appendChild(e),e.style.display="flex"}();break;case"contact":M[2].style="border-bottom-style: solid;",M[1].style="border-bottom-style: none;",M[0].style="border-bottom-style: none;",function(){const e=document.createElement("section");e.setAttribute("id","contact"),function(e){const n=document.createElement("span");n.setAttribute("class","tabHead"),n.textContent="About Us";const t=document.createElement("span");t.setAttribute("class","about"),t.innerHTML="\n        <p>\n      \"Since its inception in 2015, 'Savor Haven' has been a vibrant culinary haven nestled in the heart of our community. Co-founded by Chef Mia Rodriguez and Restaurateur Max Bennett, our restaurant was born from a shared vision to create a dining experience that marries innovation with tradition. Through the years, we've evolved into a cherished destination, drawing inspiration from local produce and global flavors to craft a menu that delights the senses.\n        </p>\n      <p>\n      At 'Savor Haven,' we prioritize quality and sustainability, sourcing fresh, seasonal ingredients from trusted local farmers and artisans. Our commitment to excellence extends beyond the kitchen—our warm and attentive staff ensures each guest feels welcomed and valued. We pride ourselves on creating an inviting atmosphere where friends and families gather to share moments, savor exceptional cuisine, and create lasting memories.\n      </p>\n      <p>\n      Driven by our passion for culinary artistry and community, 'Savor Haven' continues to be a place where every dish tells a story, and every visit leaves a lasting impression. Join us on this gastronomic journey where tradition meets innovation, and every bite is an invitation to indulge in the finest flavors.\"\n      </p>\n      ";const a=document.createElement("span");a.setAttribute("class","tabHead"),a.textContent="Contact";const i=document.createElement("div");i.setAttribute("class","times");for(let e of S){const n=document.createElement("div");n.setAttribute("class","t-slot");const t=document.createElement("span");t.classList.add("day");const a=document.createElement("span");a.classList.add("time"),t.textContent=e.days,a.textContent=e.time,n.appendChild(t),n.appendChild(a),i.appendChild(n)}const r=document.createElement("div");r.setAttribute("class","contacts");const o=document.createElement("span");o.setAttribute("class","c-call"),o.innerHTML=`\n          <img class="c-social" src='${v}'/> \n          <span>Call</span>`;const s=document.createElement("span");s.setAttribute("class","c-email"),s.innerHTML=`\n          <img class="c-social" src='${w}'/> \n          <span>Email</span>`;const c=new Image;c.src=x,c.setAttribute("class","c-social");const d=new Image;d.src=C,d.setAttribute("class","c-social");const l=new Image;l.src=A,l.setAttribute("class","c-social");const p=new Image;p.src=E,p.setAttribute("class","c-social"),r.appendChild(o),r.appendChild(s),r.appendChild(c),r.appendChild(d),r.appendChild(l),r.appendChild(p),e.appendChild(n),e.appendChild(t),e.appendChild(a),e.appendChild(i),e.appendChild(r)}(e),z.appendChild(e),e.style.display="flex"}();break;default:return!1}}j(),M.forEach((e=>{e.addEventListener("click",(()=>{z.removeChild(z.children[1]),H=e.name,T(H)}))}))})()})();