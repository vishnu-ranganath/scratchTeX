function O(){throw new Error("setTimeout has not been defined")}function W(){throw new Error("clearTimeout has not been defined")}var h=O,g=W,E;typeof window!="undefined"?E=window:typeof self!="undefined"?E=self:E={};typeof E.setTimeout=="function"&&(h=setTimeout);typeof E.clearTimeout=="function"&&(g=clearTimeout);function V(e){if(h===setTimeout)return setTimeout(e,0);if((h===O||!h)&&setTimeout)return h=setTimeout,setTimeout(e,0);try{return h(e,0)}catch(t){try{return h.call(null,e,0)}catch(n){return h.call(this,e,0)}}}function fe(e){if(g===clearTimeout)return clearTimeout(e);if((g===W||!g)&&clearTimeout)return g=clearTimeout,clearTimeout(e);try{return g(e)}catch(t){try{return g.call(null,e)}catch(n){return g.call(this,e)}}}var m=[],b=!1,p,C=-1;function me(){!b||!p||(b=!1,p.length?m=p.concat(m):C=-1,m.length&&j())}function j(){if(!b){var e=V(me);b=!0;for(var t=m.length;t;){for(p=m,m=[];++C<t;)p&&p[C].run();C=-1,t=m.length}p=null,b=!1,fe(e)}}function he(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];m.push(new z(e,t)),m.length===1&&!b&&V(j)}function z(e,t){this.fun=e,this.array=t}z.prototype.run=function(){this.fun.apply(null,this.array)};var ge="browser",pe="browser",ve=!0,we=[],ye="",Ee={},be={},xe={};function v(){}var Ie=v,Te=v,Ce=v,Be=v,Le=v,Re=v,Se=v;function Pe(e){throw new Error("process.binding is not supported")}function ke(){return"/"}function $e(e){throw new Error("process.chdir is not supported")}function De(){return 0}var x=E.performance||{},_e=x.now||x.mozNow||x.msNow||x.oNow||x.webkitNow||function(){return new Date().getTime()};function qe(e){var t=_e.call(x)*.001,n=Math.floor(t),r=Math.floor(t%1*1e9);return e&&(n=n-e[0],r=r-e[1],r<0&&(n--,r+=1e9)),[n,r]}var Ae=new Date;function Fe(){var e=new Date,t=e-Ae;return t/1e3}var Me={nextTick:he,title:ge,browser:ve,env:{NODE_ENV:"production"},argv:we,version:ye,versions:Ee,on:Ie,addListener:Te,once:Ce,off:Be,removeListener:Le,removeAllListeners:Re,emit:Se,binding:Pe,cwd:ke,chdir:$e,umask:De,hrtime:qe,platform:pe,release:be,config:xe,uptime:Fe},He=function(e,t,n,r){function o(u){return u instanceof n?u:new n(function(i){i(u)})}return new(n||(n=Promise))(function(u,i){function s(c){try{l(r.next(c))}catch(d){i(d)}}function a(c){try{l(r.throw(c))}catch(d){i(d)}}function l(c){c.done?u(c.value):o(c.value).then(s,a)}l((r=r.apply(e,t||[])).next())})},G="application/font-woff",X="image/jpeg",Ue={woff:G,woff2:G,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:X,jpeg:X,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"},Oe=function(){let t=0,n=()=>`0000${(Math.random()*Math.pow(36,4)<<0).toString(36)}`.slice(-4);return()=>(t+=1,`u${n()}${t}`)}();function We(e){let t=/\.([^./]*?)$/g.exec(e);return t?t[1]:""}function k(e){let t=We(e).toLowerCase();return Ue[t]||""}function Ve(e){return t=>new Promise(n=>{setTimeout(()=>{n(t)},e)})}function J(e){return e.search(/^(data:)/)!==-1}function $(e,t){return`data:${t};base64,${e}`}function Q(e){return e.split(/,/)[1]}function w(e){let t=[];for(let n=0,r=e.length;n<r;n+=1)t.push(e[n]);return t}function B(e,t){let n=window.getComputedStyle(e).getPropertyValue(t);return parseFloat(n.replace("px",""))}function je(e){let t=B(e,"border-left-width"),n=B(e,"border-right-width");return e.scrollWidth+t+n}function ze(e){let t=B(e,"border-top-width"),n=B(e,"border-bottom-width");return e.scrollHeight+t+n}function Ge(){let e,t;try{t=Me}catch(r){}let n=t&&t.env?t.env.devicePixelRatio:null;return n&&(e=parseInt(n,10),isNaN(e)&&(e=1)),e||window.devicePixelRatio||1}function K(e){return new Promise((t,n)=>{let r=new Image;r.onload=()=>t(r),r.onerror=n,r.crossOrigin="anonymous",r.src=e})}function Xe(e){return He(this,void 0,void 0,function*(){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then(t=>`data:image/svg+xml;charset=utf-8,${t}`)})}function Je(e,t){[":before",":after"].forEach(r=>D.clonePseudoElement(e,t,r))}var D;(function(e){function t(u,i,s){let a=window.getComputedStyle(u,s),l=a.getPropertyValue("content");if(l===""||l==="none")return;let c=Oe();try{i.className=`${i.className} ${c}`}catch(P){return}let d=document.createElement("style");d.appendChild(n(c,s,a)),i.appendChild(d)}e.clonePseudoElement=t;function n(u,i,s){let a=`.${u}:${i}`,l=s.cssText?r(s):o(s);return document.createTextNode(`${a}{${l}}`)}function r(u){let i=u.getPropertyValue("content");return`${u.cssText} content: ${i};`}function o(u){return w(u).map(i=>{let s=u.getPropertyValue(i),a=u.getPropertyPriority(i);return`${i}: ${s}${a?" !important":""};`}).join(" ")}})(D||(D={}));var L=function(e,t,n,r){function o(u){return u instanceof n?u:new n(function(i){i(u)})}return new(n||(n=Promise))(function(u,i){function s(c){try{l(r.next(c))}catch(d){i(d)}}function a(c){try{l(r.throw(c))}catch(d){i(d)}}function l(c){c.done?u(c.value):o(c.value).then(s,a)}l((r=r.apply(e,t||[])).next())})};function Qe(e){return L(this,void 0,void 0,function*(){if(e instanceof HTMLCanvasElement){let t=e.toDataURL();return t==="data:,"?Promise.resolve(e.cloneNode(!1)):K(t)}return Promise.resolve(e.cloneNode(!1))})}function Ke(e,t,n){return L(this,void 0,void 0,function*(){let r=w(e.childNodes);return r.length===0?Promise.resolve(t):r.reduce((o,u)=>o.then(()=>Y(u,n)).then(i=>{i&&t.appendChild(i)}),Promise.resolve()).then(()=>t)})}function Ne(e,t){return L(this,void 0,void 0,function*(){return t instanceof Element?Promise.resolve().then(()=>Ye(e,t)).then(()=>Je(e,t)).then(()=>Ze(e,t)).then(()=>t):t})}function Ye(e,t){let n=window.getComputedStyle(e),r=t.style;n.cssText?r.cssText=n.cssText:w(n).forEach(o=>{r.setProperty(o,n.getPropertyValue(o),n.getPropertyPriority(o))})}function Ze(e,t){e instanceof HTMLTextAreaElement&&(t.innerHTML=e.value),e instanceof HTMLInputElement&&t.setAttribute("value",e.value)}function Y(e,t,n){return L(this,void 0,void 0,function*(){return!n&&t&&!t(e)?Promise.resolve(null):Promise.resolve(e).then(Qe).then(r=>Ke(e,r,t)).then(r=>Ne(e,r))})}var Z=3e4,_={};function et(e){return/ttf|otf|eot|woff2?/i.test(e)}function N(e,t){let n=e.replace(/\?.*/,"");if(et(n)&&(n=n.replace(/.*\//,"")),_[n])return _[n];t.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+new Date().getTime());let r=i=>{let s="";if(t.imagePlaceholder){let l=t.imagePlaceholder.split(/,/);l&&l[1]&&(s=l[1])}let a=`Failed to fetch resource: ${e}`;return i&&(a=typeof i=="string"?i:i.message),a&&console.error(a),s},u=(window.fetch?window.fetch(e).then(i=>new Promise((s,a)=>{i.blob().then(l=>{s({blob:l,contentType:i.headers.get("Content-Type")})})})).then(({blob:i,contentType:s})=>new Promise((a,l)=>{let c=new FileReader;c.onloadend=()=>a({contentType:s,blob:c.result}),c.onerror=l,c.readAsDataURL(i)})).then(({blob:i,contentType:s})=>({contentType:s,blob:Q(i)})).catch(()=>new Promise((i,s)=>s())):new Promise((i,s)=>{let a=new XMLHttpRequest,l=()=>{s(new Error(`Timeout of ${Z}ms occured while fetching resource: ${e}`))},c=()=>{if(a.readyState!==4)return;if(a.status!==200){s(new Error(`Failed to fetch resource: ${e}, status: ${a.status}`));return}let d=new FileReader;d.onloadend=()=>{i({blob:Q(d.result),contentType:a.getResponseHeader("Content-Type")||""})},d.readAsDataURL(a.response)};a.onreadystatechange=c,a.ontimeout=l,a.responseType="blob",a.timeout=Z,a.open("GET",e,!0),a.send()})).catch(r);return _[n]=u,u}var ee=/url\((['"]?)([^'"]+?)\1\)/g,tt=/url\([^)]+\)\s*format\((["'])([^"']+)\1\)/g,nt=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function te(e){return e.search(ee)!==-1}function ne(e,t,n){if(!te(e))return Promise.resolve(e);let r=rt(e,n);return Promise.resolve(r).then(ot).then(o=>o.reduce((u,i)=>u.then(s=>it(s,i,t,n)),Promise.resolve(r)))}function rt(e,{preferredFontFormat:t}){return t?e.replace(nt,n=>{for(;;){let[r,,o]=tt.exec(n)||[];if(!o)return"";if(o===t)return`src: ${r};`}}):e}function ot(e){let t=[];return e.replace(ee,(n,r,o)=>(t.push(o),n)),t.filter(n=>!J(n))}function it(e,t,n,r,o){let u=n?ut(t,n):t;return Promise.resolve(u).then(i=>o?o(i):N(i,r)).then(i=>typeof i=="string"?$(i,k(t)):$(i.blob,k(t)||i.contentType)).then(i=>e.replace(at(t),`$1${i}$3`)).then(i=>i,()=>u)}function ut(e,t){if(e.match(/^[a-z]+:\/\//i))return e;if(e.match(/^\/\//))return window.location.protocol+e;if(e.match(/^[a-z]+:/i))return e;let n=document.implementation.createHTMLDocument(),r=n.createElement("base"),o=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(o),t&&(r.href=t),o.href=e,o.href}function at(e){return new RegExp(`(url\\(['"]?)(${ct(e)})(['"]?\\))`,"g")}function ct(e){return e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")}var q=function(e,t,n,r){function o(u){return u instanceof n?u:new n(function(i){i(u)})}return new(n||(n=Promise))(function(u,i){function s(c){try{l(r.next(c))}catch(d){i(d)}}function a(c){try{l(r.throw(c))}catch(d){i(d)}}function l(c){c.done?u(c.value):o(c.value).then(s,a)}l((r=r.apply(e,t||[])).next())})};function re(e,t){return q(this,void 0,void 0,function*(){return e instanceof Element?Promise.resolve(e).then(n=>st(n,t)).then(n=>lt(n,t)).then(n=>dt(n,t)):Promise.resolve(e)})}function st(e,t){return q(this,void 0,void 0,function*(){let n=e.style.getPropertyValue("background");return n?Promise.resolve(n).then(r=>ne(r,null,t)).then(r=>(e.style.setProperty("background",r,e.style.getPropertyPriority("background")),e)):Promise.resolve(e)})}function lt(e,t){return!(e instanceof HTMLImageElement)||J(e.src)?Promise.resolve(e):Promise.resolve(e.src).then(n=>N(n,t)).then(n=>$(n.blob,k(e.src)||n.contentType)).then(n=>new Promise((r,o)=>{e.onload=r,e.onerror=o,e.src=n})).then(()=>e,()=>e)}function dt(e,t){return q(this,void 0,void 0,function*(){let r=w(e.childNodes).map(o=>re(o,t));return Promise.all(r).then(()=>e)})}var I=function(e,t,n,r){function o(u){return u instanceof n?u:new n(function(i){i(u)})}return new(n||(n=Promise))(function(u,i){function s(c){try{l(r.next(c))}catch(d){i(d)}}function a(c){try{l(r.throw(c))}catch(d){i(d)}}function l(c){c.done?u(c.value):o(c.value).then(s,a)}l((r=r.apply(e,t||[])).next())})},A={};function ht(e){return I(this,void 0,void 0,function*(){return new Promise((t,n)=>{e.ownerDocument||n(new Error("Provided element is not within a Document")),t(w(e.ownerDocument.styleSheets))}).then(t=>ft(t)).then(mt)})}function pt(e,t){return I(this,void 0,void 0,function*(){return(t.fontEmbedCss!=null?Promise.resolve(t.fontEmbedCss):gt(e,t)).then(n=>{let r=document.createElement("style"),o=document.createTextNode(n);return r.appendChild(o),e.firstChild?e.insertBefore(r,e.firstChild):e.appendChild(r),e})})}function gt(e,t){return I(this,void 0,void 0,function*(){return ht(e).then(n=>Promise.all(n.map(r=>{let o=r.parentStyleSheet?r.parentStyleSheet.href:null;return ne(r.cssText,o,t)}))).then(n=>n.join(`
`))})}function ft(e){return I(this,void 0,void 0,function*(){let t=[],n=[];return e.forEach(r=>{if("cssRules"in r)try{w(r.cssRules).forEach((o,u)=>{if(o.type===CSSRule.IMPORT_RULE){let i=u+1;n.push(ie(o.href,r).then(ue).then(s=>{oe(s).forEach(l=>{try{r.insertRule(l,l.startsWith("@import")?i=i+1:r.cssRules.length)}catch(c){console.log("Error inserting rule from remote css",{rule:l,error:c})}})}).catch(s=>{console.log("Error loading remote css",s.toString())}))}})}catch(o){let u=e.find(i=>i.href===null)||document.styleSheets[0];r.href!=null&&n.push(ie(r.href).then(ue).then(i=>{oe(i).forEach(a=>{u.insertRule(a,r.cssRules.length)})}).catch(i=>{console.log("Error loading remote stylesheet",i.toString())})),console.log("Error inlining remote css file",o.toString())}}),Promise.all(n).then(()=>(e.forEach(r=>{if("cssRules"in r)try{w(r.cssRules).forEach(o=>{t.push(o)})}catch(o){console.log(`Error while reading CSS rules from ${r.href}`,o.toString())}}),t))})}function mt(e){return e.filter(t=>t.type===CSSRule.FONT_FACE_RULE).filter(t=>te(t.style.getPropertyValue("src")))}function oe(e){if(e===void 0)return[];let t=e,n=[],r="((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})",o="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",u=/(\/\*[\s\S]*?\*\/)/gi,i=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi;t=t.replace(u,"");let s=new RegExp(r,"gi"),a;for(;a=s.exec(t),a!==null;)n.push(a[0]);t=t.replace(s,"");let l=new RegExp(o,"gi");for(;;){if(a=i.exec(t),a===null){if(a=l.exec(t),a===null)break;i.lastIndex=l.lastIndex}else l.lastIndex=i.lastIndex;n.push(a[0])}return n}function ie(e,t){if(A[e])return A[e];let n=fetch(e).then(r=>({url:e,cssText:r.text()}),r=>{console.log("ERROR FETCHING CSS: ",r.toString())});return A[e]=n,n}function ue(e){return I(this,void 0,void 0,function*(){return e.cssText.then(t=>{let n=t,r=/url\(["']?([^"')]+)["']?\)/g,u=(n.match(/url\([^)]+\)/g)||[]).map(i=>{let s=i.replace(r,"$1");if(!s.startsWith("https://")){let a=e.url;s=new URL(s,a).href}return new Promise((a,l)=>{fetch(s).then(c=>c.blob()).then(c=>{let d=new FileReader;d.addEventListener("load",P=>{n=n.replace(i,`url(${d.result})`),a([i,d.result])}),d.readAsDataURL(c)}).catch(l)})});return Promise.all(u).then(()=>n)})})}function vt(e,t,n){let r="http://www.w3.org/2000/svg",o=document.createElementNS(r,"svg"),u=document.createElementNS(r,"foreignObject");return o.setAttributeNS("","width",`${t}`),o.setAttributeNS("","height",`${n}`),u.setAttributeNS("","width","100%"),u.setAttributeNS("","height","100%"),u.setAttributeNS("","x","0"),u.setAttributeNS("","y","0"),u.setAttributeNS("","externalResourcesRequired","true"),o.appendChild(u),u.appendChild(e),Xe(o)}function wt(e,t){let{style:n}=e;t.backgroundColor&&(n.backgroundColor=t.backgroundColor),t.width&&(n.width=`${t.width}px`),t.height&&(n.height=`${t.height}px`);let r=t.style;return r!=null&&Object.keys(r).forEach(o=>{n[o]=r[o]}),e}var ae=function(e,t,n,r){function o(u){return u instanceof n?u:new n(function(i){i(u)})}return new(n||(n=Promise))(function(u,i){function s(c){try{l(r.next(c))}catch(d){i(d)}}function a(c){try{l(r.throw(c))}catch(d){i(d)}}function l(c){c.done?u(c.value):o(c.value).then(s,a)}l((r=r.apply(e,t||[])).next())})};function ce(e,t={}){let n=t.width||je(e),r=t.height||ze(e);return{width:n,height:r}}function yt(e,t={}){return ae(this,void 0,void 0,function*(){let{width:n,height:r}=ce(e,t);return Y(e,t.filter,!0).then(o=>pt(o,t)).then(o=>re(o,t)).then(o=>wt(o,t)).then(o=>vt(o,n,r))})}function se(e,t={}){return ae(this,void 0,void 0,function*(){return yt(e,t).then(K).then(Ve(100)).then(n=>{let r=document.createElement("canvas"),o=r.getContext("2d"),u=t.pixelRatio||Ge(),{width:i,height:s}=ce(e,t),a=t.canvasWidth||i,l=t.canvasHeight||s;return r.width=a*u,r.height=l*u,r.style.width=`${a}`,r.style.height=`${l}`,t.backgroundColor&&(o.fillStyle=t.backgroundColor,o.fillRect(0,0,r.width,r.height)),o.drawImage(n,0,0,r.width,r.height),r})})}var T=document.getElementById("button-column"),R=document.getElementById("input-column"),S=document.getElementById("output-column"),le=document.getElementById("button-holder-footer"),F=document.getElementById("input-footer"),de=document.getElementById("output-footer"),y=document.getElementById("popup-container"),f=0;window.triggerInputEvent=function(e){var t=document.getElementById("input-"+e);t.addEventListener("click",updateEquation),t.click(),t.removeEventListener("click",updateEquation)};window.updateEquation=function(e){var t=this.value;t=t.replace(/\n/g," ").replace(/\r/g," ");var n=+this.id.replace("input-",""),r=document.getElementById("output-"+n);try{var o=katex.renderToString(t,{throwOnError:!0,displayMode:!0,output:"html",fleqn:!0,macros:{"\\diff":"\\,\\mathrm{d}"}});r.innerHTML=o,this.classList.remove("invalid-tex")}catch(u){this.classList.add("invalid-tex")}alignRow(n)};window.alignRow=function(e){var t=document.getElementById("button-holder-"+e),n=document.getElementById("input-"+e),r=document.getElementById("output-"+e);t.style.height="initial",n.style.height="initial",r.style.height="initial";var o=e==="footer"||e==="header"||r.childElementCount==0?0:32,u=t.clientHeight-o,i=n.clientHeight-o,s=r.childElementCount==0?r.clientHeight:r.children[0].clientHeight,a=Math.max(u,Math.max(i,s));t.style.height=a+o+"px",n.style.height=a+o+"px",r.style.height=a+o/2+"px",e!=="footer"&&e!=="header"&&(n.style.width=F.clientWidth+"px")};window.addRow=function(e){f!=0&&(document.getElementById("output-"+f).style.borderBottom="2px transparent solid");var t=f+1,n=document.createElement("div"),r=document.createElement("textarea"),o=document.createElement("div"),u=document.createElement("img"),i=document.createElement("img");u.classList=["rem-btn"],u.classList.add("clickable-icon"),u.src="svg/remove.svg",u.id="remove-button-"+t,u.setAttribute("draggable",!1),i.classList=["clickable-icon"],i.src="svg/duplicate.svg",i.id="duplicate-button-"+t,i.setAttribute("draggable",!1),n.classList=["button-holder"],n.setAttribute("draggable",!0),n.appendChild(u),n.appendChild(i),n.id="button-holder-"+t,r.classList=["tex-input"],r.id="input-"+t,o.classList=["svg-output"],o.id="output-"+t,f=t,r.addEventListener("keyup",updateEquation),u.addEventListener("click",removeEquation),i.addEventListener("click",copyEquation),n.addEventListener("dragstart",moveEquation),n.addEventListener("dragend",releaseEquation),n.addEventListener("dragover",dragEquationOver),n.addEventListener("dragenter",dragEquationEnter),n.addEventListener("dragleave",dragEquationLeave),n.addEventListener("drop",dropEquation),T.removeChild(le),R.removeChild(F),S.removeChild(de),T.appendChild(n),R.appendChild(r),S.appendChild(o),T.appendChild(le),R.appendChild(F),S.appendChild(de),triggerInputEvent(t),r.focus(),document.getElementById("output-"+f).style.borderBottom="2px black solid"};window.removeEquation=function(e){var t=+this.id.replace("remove-button-",""),n=document.getElementById("output-"+t);if(n.innerHTML="",T.removeChild(document.getElementById("button-holder-"+t)),R.removeChild(document.getElementById("input-"+t)),S.removeChild(document.getElementById("output-"+t)),T.childElementCount==2)f=0,addRow();else{for(var r=t;r<f;r++){var o=r+1;document.getElementById("button-holder-"+o).id="button-holder-"+r,document.getElementById("remove-button-"+o).id="remove-button-"+r,document.getElementById("duplicate-button-"+o).id="duplicate-button-"+r,document.getElementById("input-"+o).id="input-"+r,document.getElementById("output-"+o).id="output-"+r}f-=1}document.getElementById("output-"+f).style.borderBottom="2px black solid"};window.removeAll=function(e){if(!confirm("Delete all rows?"))return!1;for(var t=document.getElementsByClassName("rem-btn"),n=t.length,r=n-1;r>-1;r--)t[r].click()};window.copyEquation=function(e){var t=+this.id.replace("duplicate-button-","");addRow();for(var n=f;n>t;n--){var r=n-1;document.getElementById("input-"+n).value=document.getElementById("input-"+r).value,triggerInputEvent(n)}document.getElementById("input-"+(+t+1)).focus()};window.moveEquation=function(e){e.dataTransfer.setData("scratchtex/row",e.target.id),e.dataTransfer.dropEffect="move";var t=+e.target.id.split("-")[2];document.getElementById("button-holder-"+t).classList.add("drag-from"),document.getElementById("input-"+t).classList.add("drag-from")};window.releaseEquation=function(e){for(var t=1;t<=f;t++)document.getElementById("button-holder-"+t).classList.remove("drag-from"),document.getElementById("input-"+t).classList.remove("drag-from"),document.getElementById("button-holder-"+t).classList.remove("drag-to"),document.getElementById("input-"+t).classList.remove("drag-to")};window.dragEquationOver=function(e){if(!e.dataTransfer.types.includes("scratchtex/row"))return!0;e.preventDefault()};window.dragEquationEnter=function(e){if(!e.dataTransfer.types.includes("scratchtex/row"))return!0;var t=+this.id.split("-")[2];document.getElementById("button-holder-"+t).classList.add("drag-to"),document.getElementById("input-"+t).classList.add("drag-to"),e.preventDefault()};window.dragEquationLeave=function(e){if(e.relatedTarget.parentNode===this||e.relatedTarget===this)return e.preventDefault(),!1;var t=+this.id.split("-")[2];document.getElementById("button-holder-"+t).classList.remove("drag-to"),document.getElementById("input-"+t).classList.remove("drag-to")};window.dropEquation=function(e){e.preventDefault();var t=+this.id.split("-")[2],n=+e.dataTransfer.getData("scratchtex/row").split("-")[2];if(n<t){for(var r=document.getElementById("input-"+n).value,o=n;o<t;o++){var u=o+1;document.getElementById("input-"+o).value=document.getElementById("input-"+u).value,triggerInputEvent(o)}document.getElementById("input-"+t).value=r,triggerInputEvent(t)}else{for(var r=document.getElementById("input-"+n).value,o=n;o>t;o--){var u=o-1;document.getElementById("input-"+o).value=document.getElementById("input-"+u).value,triggerInputEvent(o)}document.getElementById("input-"+t).value=r,triggerInputEvent(t)}};window.showSidebar=function(e){document.getElementById("settings-sidebar").style.display="block"};window.hideSidebar=function(e){document.getElementById("settings-sidebar").style.display="none"};window.takeScreenshot=function(e){var t=document.createElement("canvas"),n=t.getContext("2d");t.height=0,t.width=0;for(var r=[],o=1;o<=f;o++)r.push(se(document.getElementById("output-"+o),{backgroundColor:"#ffffff"}));Promise.all(r).then(u=>{for(var i=0;i<u.length;i++){var s=u[i],a=t.width,l=t.height,c;l>0&&a>0&&(c=n.getImageData(0,0,a,l)),t.height+=s.height,t.width=Math.max(s.width,t.width);var d=s.getContext("2d").getImageData(0,0,s.width,s.height);n.putImageData(d,0,l),l>0&&a>0&&n.putImageData(c,0,0)}var P=t.toDataURL(t),M=document.createElement("img");M.src=P,document.getElementById("popup-background").style.display="block",y.style.display="block",y.innerHTML="",y.appendChild(M);var H=Math.max(0,(window.innerWidth-t.width)/2)+"px",U=Math.max(0,(window.innerHeight-t.height)/2)+"px";y.style.left=H,y.style.right=H,y.style.top=U,y.style.bottom=U})};window.closePopup=function(e){document.getElementById("popup-background").style.display="none",document.getElementById("popup-container").style.display="none"};document.getElementById("removeAll").addEventListener("click",removeAll);document.getElementById("add-btn").addEventListener("click",addRow);document.getElementById("settings-btn").addEventListener("click",showSidebar);document.getElementById("close-settings-btn").addEventListener("click",hideSidebar);document.getElementById("screenshot-btn").addEventListener("click",takeScreenshot);document.getElementById("popup-background").addEventListener("click",closePopup);window.alignRow("header");window.alignRow("footer");
//# sourceMappingURL=//.//scratchTeX.js.map
