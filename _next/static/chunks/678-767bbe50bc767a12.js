(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[678],{8250:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(1287),c=n(5893);function a(e){var t=e.tokenId,n=e.cardClick,a=(0,r.Z)(t);return(0,c.jsxs)("div",{children:[void 0==a||""==a?null:a?(0,c.jsxs)("div",{id:"gameCard"+t,className:"flex flex-col transform hover:-translate-y-2 hover:border-gray-600  duration-150",children:[(0,c.jsxs)("h2",{className:"text-center",children:["#",t]}),(0,c.jsx)("div",{onClick:function(){return null===n||void 0===n?void 0:n(a)},className:"game-card px-20 ",dangerouslySetInnerHTML:{__html:a}})]}):null," "]})}var s=n(9622),o=n(7294),i=n(3244);function l(e){var t=(0,o.useState)(-1),n=t[0],r=t[1],l=(0,o.useState)(!1),u=l[0],d=l[1],f=(0,o.useState)(""),h=f[0],m=f[1],p=(0,o.useState)(-1),x=p[0],v=p[1],g=(0,o.useRef)(null);return(0,i.t$)(g,(function(){r(-1)})),(0,o.useEffect)((function(){e.showTokenId>=0&&(r(e.showTokenId),d(!0))}),[e.showTokenId>=0]),(0,c.jsxs)("div",{id:"game-card-panel",children:[(0,c.jsx)("div",{className:"my-10 sm:my-20",children:(0,c.jsx)("div",{className:"flex flex-wrap justify-center",children:e.tokenIdAry.map((function(e,t){if(e!=x)return(0,c.jsx)(a,{tokenId:e,selected:n===t,cardClick:function(t){return function(e,t,n){d(!0),m(t),r(n)}(0,t,e)}},e)}))})}),(0,c.jsx)(s.p,{id:"gameCardPanel-OverlayPhoto",show:u,handleClose:function(){d(!1),m("")},handleEndGame:function(e){v(e)},tokenId:n,cardSVG:h,description:"",canPlay:e.canPlay,isNewGame:!1})]})}},6262:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r=n(7294),c=n(1664),a=n(8223),s=n.n(a),o=n(7575),i=n(5893);function l(e){var t=e.hidden,n=e.onClick,r=(0,o.t)(),a=r.connectWallet,l=(r.isConnected,r.disconnectWallet),u=r.displayName;return(0,i.jsxs)("div",{className:t?"ease-in-out transition-all duration-300 transform fixed h-full top-0 z-30 w-full sm:w-1/3 flex flex-wrap left-0 bg-gray-1000 sm:p-8 overflow-y-scroll translate-x-0":"ease-in-out transition-all duration-300 transform fixed h-full top-0 z-30 w-full sm:w-1/3 flex flex-wrap left-0 bg-gray-1000 sm:p-8 overflow-y-scroll -translate-x-full",children:[(0,i.jsx)("div",{className:"ml-auto m-2",children:(0,i.jsx)("button",{className:"bg-gray-800 rounded px-2 m-2",onClick:n,children:"close"})}),(0,i.jsx)("div",{className:"w-full",children:(0,i.jsx)("div",{className:"self-center",children:(0,i.jsxs)("ul",{className:"flex flex-col space-y-8",children:[e.links.map((function(e,t){var r=e.name,a=e.path;return(0,i.jsx)("li",{className:"self-center text-xl",children:(0,i.jsx)(c.default,{href:a,children:(0,i.jsx)("a",{onClick:n,children:r})})},t)})),(0,i.jsxs)("li",{className:"bg-gray-700 px-4 py-1 rounded text-center",children:[u.length>0&&(0,i.jsxs)("span",{children:[u," "," ",(0,i.jsx)("a",{className:[s().header__links_active,"cursor-pointer  font-body"].join(" "),onClick:l,children:"[ disconnect ]"})]}),u.length<=0&&(0,i.jsx)("button",{className:[s().header__button,"cursor-pointer  font-body"].join(" "),onClick:a,children:"Connect Wallet"})]})]})})})]})}var u=n(9499),d=n(1163);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=function(e){return(0,i.jsx)("svg",h(h({},e),{},{children:(0,i.jsx)("path",{d:"M3 12h18M3 6h18M3 18h18"})}))};m.defaultProps={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-menu"};var p=function(e){return(0,i.jsx)("svg",h(h({},e),{},{children:(0,i.jsx)("path",{fill:"#8247E5",d:"M17.71 8.215c-.412-.237-.944-.237-1.416 0l-3.307 1.948-2.243 1.24-3.248 1.948c-.413.237-.944.237-1.417 0L3.54 11.816a1.44 1.44 0 0 1-.708-1.24V7.624c0-.472.236-.945.708-1.24l2.54-1.476c.413-.236.944-.236 1.416 0l2.54 1.535c.413.236.708.709.708 1.24v1.949l2.243-1.3V6.326c0-.472-.236-.944-.708-1.24L7.555 2.31c-.413-.236-.944-.236-1.417 0L1.297 5.144c-.473.237-.709.709-.709 1.181v5.55c0 .473.236.945.709 1.24l4.782 2.775c.414.236.945.236 1.417 0L10.744 14l2.243-1.298 3.248-1.89c.413-.236.945-.236 1.417 0l2.539 1.477c.413.236.708.708.708 1.24v2.952c0 .472-.236.944-.708 1.24l-2.48 1.476c-.413.236-.945.236-1.417 0l-2.539-1.476a1.44 1.44 0 0 1-.709-1.24v-1.89l-2.243 1.3v1.948c0 .472.236.944.708 1.24l4.783 2.775c.413.236.945.236 1.417 0l4.782-2.775a1.44 1.44 0 0 0 .709-1.24v-5.61c0-.472-.236-.944-.709-1.24l-4.782-2.774z",className:"st0",stroke:"null"})}))};function x(e){var t=(0,d.useRouter)().pathname,n=(0,o.t)(),r=n.connectWallet,a=(n.isConnected,n.disconnectWallet),l=n.displayName,u=e.onClick;return(0,i.jsxs)("div",{className:"w-full flex justify-between py-2 bg-black px-4 bg-opacity-90",children:[(0,i.jsx)("div",{className:s().header__logo,children:(0,i.jsx)(c.default,{href:"/",children:(0,i.jsx)("a",{children:(0,i.jsx)("h2",{children:"OOXX NFT"})})})}),(0,i.jsx)("div",{className:"self-center hidden sm:block",children:(0,i.jsx)("ul",{className:"flex space-x-8",children:e.links.map((function(e,n){var r=e.name,a=e.path;return(0,i.jsx)("li",{className:"self-center text-xl",children:(0,i.jsx)(c.default,{href:a,children:(0,i.jsx)("a",{className:t===a?"bg-gray-900 px-4 py-2 rounded":void 0+"bg-gray-900 px-4 py-2 rounded",children:r})})},n)}))})}),(0,i.jsx)("div",{className:"self-center block sm:hidden",children:(0,i.jsx)("button",{onClick:u,children:(0,i.jsx)(m,{})})}),(0,i.jsx)("div",{className:"self-center hidden sm:block",children:(0,i.jsx)("ul",{className:"flex space-x-4 mr-auto",children:(0,i.jsxs)("li",{className:"bg-gray-700 px-4 py-1 rounded  ml-auto",children:[l.length>0&&(0,i.jsxs)("span",{children:[l," "," ",(0,i.jsx)("a",{className:[s().header__links_active,"cursor-pointer  font-body"].join(" "),onClick:a,children:"[ disconnect ]"})]}),l.length<=0&&(0,i.jsxs)("button",{className:["flex cursor-pointer  font-body"].join(" "),onClick:r,children:[(0,i.jsx)(p,{className:"mr-2"})," Connect Polygon Wallet"]})]})})})]})}p.defaultProps={width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve"};var v=n(9008);function g(){return(0,i.jsxs)(v.default,{children:[(0,i.jsx)("title",{children:"OOXX NFT"}),(0,i.jsx)("meta",{name:"title",content:"OOXX NFT"}),(0,i.jsx)("meta",{name:"description",content:"OOXXNFT is a meme NFT game and data stored on chain. Play tic-tac-toe to earn lots of NFT!"}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),(0,i.jsx)("meta",{property:"og:url",content:"https://www.ooxxnft.com/"}),(0,i.jsx)("meta",{property:"og:title",content:"OOXXNFT"}),(0,i.jsx)("meta",{property:"og:description",content:"OOXXNFT is a meme NFT game and data stored on chain."}),(0,i.jsx)("meta",{property:"og:image",content:"https://ooxxnft.com/meta.png"}),(0,i.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{property:"twitter:url",content:"https://www.ooxxnft.com/"}),(0,i.jsx)("meta",{property:"twitter:title",content:"OOXXNFT"}),(0,i.jsx)("meta",{property:"twitter:description",content:"OOXXNFT is a meme NFT game and data stored on chain. Play tic-tac-toe to earn lots of NFT!"}),(0,i.jsx)("meta",{property:"twitter:image",content:"https://ooxxnft.com/meta.png"})]})}function w(){return(0,i.jsx)("div",{className:s().footer,children:(0,i.jsxs)("p",{children:["This website is community maintained and"," ",(0,i.jsx)("a",{href:"https://github.com/ooxxnft",target:"_blank",rel:"project github",children:"open source"}),"."]})})}var b=[{name:"End games",path:"/end_games"},{name:"Ongoing games",path:"/ongoing"},{name:"My NFT",path:"/my_nft"}],y=n(171),k=n(4289);function j(e){var t=e.children,n=(0,r.useState)(!1),c=n[0],a=n[1];return(0,i.jsxs)("div",{children:[(0,i.jsx)(y.b,{}),(0,i.jsx)(k.F,{}),(0,i.jsx)(g,{}),(0,i.jsx)(x,{links:b,hidden:c,onClick:function(){return a((function(e){return!e}))}}),(0,i.jsx)(l,{links:b,hidden:c,onClick:function(){return a((function(e){return!e}))}}),(0,i.jsx)("div",{children:t}),(0,i.jsx)(w,{})]})}},4289:function(e,t,n){"use strict";n.d(t,{K:function(){return u},F:function(){return d}});var r=n(7294),c=n(733),a=n.n(c),s=n(1131),o=n(4824),i=n(5893),l=(0,s.cn)(!1);function u(){var e=(0,o.yW)(l);return{showLoadingBar:(0,r.useCallback)((function(){e(!0)}),[]),hideLoadingBar:(0,r.useCallback)((function(){e(!1)}),[])}}function d(){return(0,o.Dv)(l)?(0,i.jsx)("div",{id:"loading_overlay",className:"w-full h-full fixed z-40  top-0 -10 left-0 mb-10 bg-gray-800 opacity-90",children:(0,i.jsxs)("div",{className:"w-full h-full flex flex-col  justify-center items-center",children:[(0,i.jsx)("h3",{className:"mb-12",children:"Waiting transaction ..."}),(0,i.jsx)(a(),{type:"bars",color:"#fff",height:"20%",width:"20%"})]})}):null}},9622:function(e,t,n){"use strict";n.d(t,{p:function(){return T}});var r=n(9499),c=n(29),a=n(7794),s=n.n(a),o=n(7294),i=n(4074),l=n.n(i),u=n(5893);function d(e){var t=(0,o.useRef)(null);return(0,o.useEffect)((function(){if(t.current){var n=t.current.getContext("2d"),r=t.current;return r.addEventListener("mouseup",(function(t){t.stopImmediatePropagation();var n=r.getBoundingClientRect(),c=(t.clientX-n.left)/n.width,a=(t.clientY-n.top)/n.height;e.canvasClick(c,a)})),e.draw(n),function(){r.removeEventListener("mouseup",e.canvasClick)}}}),[e.canvasClick]),(0,u.jsx)("canvas",{className:"w-4/5  xl:w-3/5",ref:t,height:e.height,width:e.width})}var f=n(7575),h=n(9822),m=n(6731),p=n(1287),x=n(171),v=n(4289),g=n(261),w=n(6835),b=n(5907),y=n(9994),k=n.n(y),j=n(1131),_="#ffffff",N=(0,j.cn)(_),O=function(e){var t=(0,j.KO)(N),n=(0,w.Z)(t,2),r=n[0],c=n[1],a="0x"+r.substring(1),s=parseInt(a);return e.onChange(s),(0,u.jsxs)("div",{id:"ColorPicker",children:[(0,u.jsxs)("div",{className:k().picker,children:[(0,u.jsx)(b.gW,{color:r,onChange:c}),(0,u.jsxs)("div",{className:k().picker__swatches,children:[(0,u.jsx)("button",{className:k().picker__swatch,style:{background:_},onClick:function(){return c(_)}},_)," ",(0,u.jsx)("h3",{className:"text-black-600",children:" default color"}),["#cd9323","#1a53d8","#9a2151","#0d6416","#8d2808"].map((function(e){return(0,u.jsx)("button",{className:k().picker__swatch,style:{background:e},onClick:function(){return c(e)}},e)}))]})]}),(0,u.jsxs)("div",{className:k().picker__value,style:{borderLeftColor:r},children:[r," ","#ffffff"==r?"(default color)":""]})]})},C=function(e){var t=e.id,n=e.checked,r=e.onChange,c=e.name,a=e.optionLabels,s=e.small,o=e.disabled;return(0,u.jsxs)("div",{className:"toggle-switch"+(s?" small-switch":""),children:[(0,u.jsx)("input",{type:"checkbox",name:c,className:"toggle-switch-checkbox",id:t,checked:n,onChange:function(e){return r(e.target.checked)},disabled:o}),t?(0,u.jsxs)("label",{className:"toggle-switch-label",tabIndex:o?-1:1,onKeyDown:function(e){return function(e){32===e.keyCode&&(e.preventDefault(),r(!n))}(e)},htmlFor:t,children:[(0,u.jsx)("span",{className:o?"toggle-switch-inner toggle-switch-disabled":"toggle-switch-inner","data-yes":a[0],"data-no":a[1],tabIndex:-1}),(0,u.jsx)("span",{className:o?"toggle-switch-switch toggle-switch-disabled":"toggle-switch-switch",tabIndex:-1})]}):null]})},P=n(2870),I=n(4824),S=n(9362);function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=function(e){return(0,u.jsx)("svg",L(L({},e),{},{children:(0,u.jsx)("path",{d:"M45 0C20.151 0 0 20.151 0 45s20.151 45 45 45 45-20.151 45-45S69.858 0 45 0ZM22.203 46.512l.189-.306 11.709-18.315c.171-.261.576-.234.702.054 1.953 4.383 3.645 9.837 2.853 13.23-.333 1.395-1.26 3.285-2.304 5.031a9.02 9.02 0 0 1-.441.747.397.397 0 0 1-.333.171H22.545a.398.398 0 0 1-.342-.612Zm52.173 6.3a.408.408 0 0 1-.243.378c-.909.387-4.014 1.818-5.301 3.609-3.294 4.581-5.805 11.133-11.43 11.133H33.948c-8.316 0-15.048-6.759-15.048-15.102v-.27c0-.216.18-.396.405-.396h13.068c.261 0 .45.234.432.495a4.397 4.397 0 0 0 .468 2.511 4.594 4.594 0 0 0 4.122 2.556h6.471v-5.049h-6.399a.414.414 0 0 1-.333-.648c.072-.108.144-.216.234-.342a49.469 49.469 0 0 0 2.331-3.717 29.88 29.88 0 0 0 1.611-3.222c.09-.198.162-.405.243-.603.126-.351.252-.684.342-1.008.09-.279.171-.567.243-.837.216-.936.306-1.926.306-2.952 0-.405-.018-.828-.054-1.224-.018-.441-.072-.882-.126-1.323-.036-.387-.108-.774-.18-1.17a24.352 24.352 0 0 0-.369-1.755l-.054-.225c-.108-.405-.207-.783-.333-1.188a44.34 44.34 0 0 0-1.233-3.645c-.162-.459-.342-.9-.531-1.332-.27-.666-.549-1.269-.801-1.836a13.363 13.363 0 0 1-.351-.738 21.95 21.95 0 0 0-.387-.801c-.09-.198-.198-.387-.27-.567l-.792-1.458c-.108-.198.072-.441.288-.378l4.95 1.341h.036l.648.189.72.198.261.072v-2.934C43.866 19.152 45 18 46.413 18c.702 0 1.341.288 1.791.756.459.468.747 1.107.747 1.818v4.365l.531.144c.036.018.081.036.117.063.126.09.315.234.549.414.189.144.387.324.621.513.477.387 1.053.882 1.674 1.449.162.144.324.288.477.441.801.747 1.701 1.62 2.565 2.592.243.279.477.549.72.846.234.297.495.585.711.873.297.387.603.792.882 1.215.126.198.279.405.396.603.36.531.666 1.08.963 1.629.126.252.252.531.36.801.333.738.594 1.485.756 2.241.054.162.09.333.108.495v.036c.054.216.072.45.09.693a7.714 7.714 0 0 1-.126 2.313c-.072.324-.162.63-.27.963-.117.315-.225.639-.369.954a12.946 12.946 0 0 1-.99 1.881c-.126.225-.279.459-.423.684-.162.234-.333.459-.477.675-.207.279-.423.567-.648.828-.198.27-.396.54-.621.783-.306.369-.603.711-.918 1.044-.18.216-.378.441-.585.639-.198.225-.405.423-.585.603-.315.315-.567.549-.783.756l-.513.459a.381.381 0 0 1-.27.108h-3.942v5.049h4.959c1.107 0 2.16-.387 3.015-1.116.288-.252 1.557-1.35 3.06-3.006a.354.354 0 0 1 .189-.117l13.689-3.96a.4.4 0 0 1 .513.387v2.898Z",fill:"#fff"})}))};function T(e){if(!e.show)return null;var t=(0,h.L)(!0),n=(0,f.t)().account,r=(0,o.useState)(),a=r[0],i=r[1],w=(0,o.useRef)(!1),b=(0,o.useState)(!w.current),y=b[0],k=b[1],j=(0,o.useRef)(null),_=(0,o.useRef)(16777215),N=(0,o.useRef)(""),A=(0,o.useRef)(-1),L=(0,x.W)().setAndShowTopAlert,T=(0,v.K)(),X=T.showLoadingBar,R=T.hideLoadingBar,F=(0,o.useState)(window.innerWidth>640),G=F[0],W=F[1],Z=(0,o.useState)(""),M=Z[0],z=Z[1],D=(0,I.yW)(S.p5),B=(0,o.useRef)(e.canPlay),V=(0,o.useRef)(window.innerWidth>640),K=(0,o.useRef)(null);(0,o.useEffect)((function(){if(e.tokenId>=0){var n=function(){var n=(0,c.Z)(s().mark((function n(){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null==t){n.next=6;break}return n.next=3,null===t||void 0===t?void 0:t.getGame(e.tokenId);case 3:r=n.sent,j.current=r,w.current=r[3];case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}}),[t,e.tokenId,a]),(0,o.useEffect)((function(){var n=function(){var n=(0,c.Z)(s().mark((function n(){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,p.l)(t,e.tokenId);case 2:r=n.sent,i(r);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();""!=e.cardSVG?i(e.cardSVG):n()}),[e.cardSVG]),(0,o.useEffect)((function(){if(!B.current){var n=function(){var n=(0,c.Z)(s().mark((function n(){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null==t){n.next=5;break}return n.next=3,null===t||void 0===t?void 0:t.ownerOf(e.tokenId);case 3:r=n.sent,z(r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}}),[B.current]),(0,o.useEffect)((function(){var t=a||e.cardSVG;N.current=t}),[e.cardSVG,a]);var U=function(e){var t=new Image;t.onload=function(){K.current.drawImage(t,0,0,g.LA,g.k2)},t.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(e)},Y=(0,o.useCallback)(function(){var n=(0,c.Z)(s().mark((function n(r){var c,a,o,l,u;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(null!=t&&r>=0)){n.next=28;break}return c=m.O$.from(e.tokenId),a=m.O$.from(r),X(),n.prev=4,n.next=7,null===t||void 0===t?void 0:t.play(c,a,!w.current,_.current,P.eF);case 7:return o=n.sent,n.next=10,o.wait();case 10:if(1!=(l=n.sent).status){n.next=21;break}return void 0!=l.events&&l.events.map((function(t){var n,r,c,a=null===(n=t.args)||void 0===n?void 0:n.info,s=null===(r=t.args)||void 0===r||null===(c=r.gameID)||void 0===c?void 0:c.toNumber();s==e.tokenId&&"end"==a&&(D(s),e.handleEndGame(s),B.current=!1)})),n.next=16,(0,p.l)(t,e.tokenId);case 16:u=n.sent,w.current=!w.current,A.current=-1,i(u),U(u);case 21:n.next=27;break;case 23:n.prev=23,n.t0=n.catch(4),L("Transaction with blockchain fail: ".concat(null===n.t0||void 0===n.t0?void 0:n.t0.message),"red"),console.error("Transaction with blockchain fail: ".concat(null===n.t0||void 0===n.t0?void 0:n.t0.message));case 27:R();case 28:case"end":return n.stop()}}),n,null,[[4,23]])})));return function(e){return n.apply(this,arguments)}}(),[]),$=(0,o.useCallback)(function(){var n=(0,c.Z)(s().mark((function n(r){var c,a,o,i,l;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null==t){n.next=18;break}return c=m.O$.from(r),n.prev=2,X(),n.next=6,null===t||void 0===t?void 0:t.newGame(c,!w.current,_.current,P.eF);case 6:return a=n.sent,n.next=9,a.wait();case 9:void 0!==(o=n.sent)&&1==o.status&&void 0!=o.events&&(l=null===(i=o.events[0].args)||void 0===i?void 0:i.gameID.toNumber(),e.handleNewGameCreate(l),L("Game '#".concat(l,"' Created!"),"green")),n.next=17;break;case 13:n.prev=13,n.t0=n.catch(2),L("Transaction with blockchain fail: ".concat(n.t0.message),"red"),console.error("Transaction with blockchain fail: ".concat(n.t0.message));case 17:R();case 18:case"end":return n.stop()}}),n,null,[[2,13]])})));return function(e){return n.apply(this,arguments)}}(),[]),Q=(0,o.useCallback)((function(e){if(V.current){var t=(new DOMParser).parseFromString(N.current,"image/svg+xml");w.current?(0,g.N_)(t,e,_.current):(0,g.Qz)(t,e,_.current),A.current=e;var n=(new XMLSerializer).serializeToString(t.documentElement);U(n)}}),[]),H=(0,o.useCallback)((function(t,r){if(B.current)if(void 0!==n&&null!=n&&""!=n)if(void 0!==w.current&&null!==w.current){var c=(0,g.IA)(t,r);if(!(c<0)){if(!e.isNewGame){if(void 0===j.current||null==j.current)return void console.log("game not ready");var a=(0,g.Rz)(j.current[1],j.current[2],c);if(null!=a)return void console.log("space(".concat(c,") had taken with ").concat(a," "))}V.current?Q(c):e.isNewGame?$(c):Y(c)}}else console.log("premark not ready");else L("Please Connect Polygon Wallet!","red")}),[]),J="".concat(l().overlay_photo," w-full grow   md:w-1/2 lg: w-1/3 "),q=e.isNewGame?"New Game":"#".concat(e.tokenId," ");return(0,u.jsxs)("div",{className:"w-full h-full fixed z-20  top-0 -10 left-0 mb-10 bg-gray-800 opacity-95",children:[(0,u.jsxs)("div",{className:"flex  items-stretch mt-2",children:[(0,u.jsxs)("h2",{className:"text-center w-full ",children:["\xa0\xa0",q]}),(0,u.jsx)("h2",{className:"text-right cursor-pointer mr-5",onClick:e.handleClose,children:"\xd7"})]}),""!=M?(0,u.jsxs)("div",{className:"text-center text-zinc-400 text-sm md:text-2xl lg:text-3l",children:["Owner: ",M]}):"",(0,u.jsxs)("div",{className:"flex items-start",children:[(0,u.jsx)("div",{className:"hidden lg:block w-1/3 "}),(0,u.jsx)("div",{className:J,children:(0,u.jsx)(d,{draw:function(t){K.current=t;var n=a||e.cardSVG;if(""==n)return null;U(n)},height:g.k2,width:g.LA,canvasClick:H,premark:w})}),B.current?(0,u.jsxs)("div",{className:"hidden md:block w-1/2 flex flex-col justify-center content-center align-center lg:w-1/3",children:[(0,u.jsx)(O,{onChange:function(e){_.current=e,A.current>=0&&V.current&&Q(A.current)}}),e.isNewGame?(0,u.jsx)("div",{className:"my-5 justify-center content-center align-center",children:(0,u.jsx)(C,{id:"toggle-ox",disabled:!1,name:"toggle-ox",small:!1,optionLabels:["O","X"],checked:y,onChange:function(e){console.log("onOXChange checked: "+e),w.current=!e,k(e)}})}):"",(0,u.jsx)("div",{className:"my-5 justify-center content-center align-center",children:(0,u.jsx)(C,{id:"toggle-preview",disabled:!1,name:"toggle-preview",small:!1,optionLabels:["preview","send"],checked:G,onChange:function(e){console.log("preview checked: "+e),W(e),V.current=e,U(N.current)}})}),G?(0,u.jsx)("button",{onClick:function(){e.isNewGame?$(A.current):Y(A.current)},className:"w-1/2 ml-7 mt-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded",children:"Send"}):""]}):(0,u.jsx)("div",{className:"hidden lg:block w-1/3 flex flex-col py-8  align-middle h-screen",children:(0,u.jsx)("a",{href:(0,P.J5)(e.tokenId),className:" bg-black border-gray-300 hover:bg-gray-600 rounded-xl p-6 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center",target:"_blank",children:(0,u.jsx)(E,{className:" fill-current w-24 h-24"})})})]})]})}E.defaultProps={viewBox:"0 0 90 90",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},171:function(e,t,n){"use strict";n.d(t,{W:function(){return f},b:function(){return h}});var r=n(6835),c=n(1131),a=n(4824),s=n(7294),o=n(5893),i="hidden",l=(0,c.cn)(i),u=(0,c.cn)(""),d=(0,c.cn)("red");function f(){var e=(0,a.yW)(l),t=(0,a.yW)(u),n=(0,a.yW)(d);return{showTopAlert:(0,s.useCallback)((function(){e("")}),[]),setTopAlertMsg:(0,s.useCallback)((function(e,r){t(e),n(r)}),[]),setAndShowTopAlert:(0,s.useCallback)((function(r,c){""==r?e(i):(t(r),n(c),e(""))}),[])}}function h(){var e=(0,c.KO)(l),t=(0,r.Z)(e,2),n=t[0],f=t[1],h=(0,a.Dv)(u),m=(0,a.Dv)(d);(0,s.useEffect)((function(){var e=setTimeout((function(){return f(i)}),1e4);return function(){clearTimeout(e)}}),[n]);var p="bg-".concat(m,"-100 z-50 border border-").concat(m,"-400 text-").concat(m,"-700 px-4 py-3 rounded relative");return(0,o.jsx)("div",{id:"topAlert",className:n,children:(0,o.jsxs)("div",{className:p,role:"alert",children:[(0,o.jsx)("span",{className:"block sm:inline",children:h}),(0,o.jsx)("span",{className:"absolute top-0 bottom-0 right-0 px-4 py-3",onClick:function(){f(i)},children:(0,o.jsxs)("svg",{className:"fill-current h-6 w-6 text-".concat(m,"-500"),role:"button",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:[(0,o.jsx)("title",{children:"Close"}),(0,o.jsx)("path",{d:"M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"})]})})]})})}},1287:function(e,t,n){"use strict";n.d(t,{l:function(){return u}});var r=n(29),c=n(7794),a=n.n(c),s=n(7294),o=n(6731),i=n(9822),l=n(6087),u=function(){var e=(0,r.Z)(a().mark((function e(t,n){var r,c,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.O$.from(n),e.next=3,null===t||void 0===t?void 0:t.tokenURI(r);case 3:if(void 0!=(c=e.sent)){e.next=6;break}return e.abrupt("return","");case 6:return e.prev=6,s=atob(JSON.parse(atob(c.replace("data:application/json;base64,",""))).image.replace("data:image/svg+xml;base64,","")),e.abrupt("return",s);case 11:return e.prev=11,e.t0=e.catch(6),console.log(e.t0),e.abrupt("return","");case 15:case"end":return e.stop()}}),e,null,[[6,11]])})));return function(t,n){return e.apply(this,arguments)}}();t.Z=function(e){var t=(0,i.L)(),n=(0,s.useState)(),c=n[0],o=n[1],d=(0,l.hf)();return(0,s.useEffect)((function(){var n=function(){var n=(0,r.Z)(a().mark((function n(){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u(t,e);case 2:r=n.sent,o(r);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),c=function(){var c=(0,r.Z)(a().mark((function r(){return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(void 0==t){r.next=5;break}return r.next=3,null===t||void 0===t?void 0:t.getIsEnd(e);case 3:r.sent||null===d||void 0===d||d(e,n);case 5:case"end":return r.stop()}}),r)})));return function(){return c.apply(this,arguments)}}();n(),c()}),[t]),c}},261:function(e,t,n){"use strict";n.d(t,{LA:function(){return r},k2:function(){return c},YA:function(){return a},IA:function(){return s},Qz:function(){return i},N_:function(){return l},Rz:function(){return d}});var r=440,c=660,a='<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 420 660"><style>.base { fill: white; font-family: serif; font-size: 14px; }</style><rect width="100%" height="100%" fill="black" /><line x1="140" y1="0" x2="140" y2="420" stroke="white" stroke-width="3" /><line x1="280" y1="0" x2="280" y2="420" stroke="white" stroke-width="3" /><line x1="0" y1="140" x2="420" y2="140" stroke="white" stroke-width="3" /><line x1="0" y1="280" x2="420" y2="280" stroke="white" stroke-width="3" /></svg>';function s(e,t){var n=t<130/660?0:t>150/660&&t<270/660?1:t>290/660&&t<410/660?2:-1;if(n<0)return-1;var r=e<130/420?0:e>150/420&&e<270/420?1:e>290/420&&e<1?2:-1;return r<0?-1:r+3*n}function o(e){var t=Number(e).toString(16);return t="000000".substr(0,6-t.length)+t}function i(e,t,n){var r=t%3*140+70,c=140*Math.floor(t/3)+70,a=e.createElementNS(e.documentElement.namespaceURI,"circle");a.setAttribute("cx",r),a.setAttribute("cy",c),a.setAttribute("r","50"),a.setAttribute("stroke","#"+o(n)),a.setAttribute("stroke-width","3"),a.setAttribute("fill","none"),e.childNodes[0].insertBefore(a,e.childNodes[0].childNodes[3])}function l(e,t,n){var r=t%3*140+20,c=140*Math.floor(t/3)+20,a=e.createElementNS(e.documentElement.namespaceURI,"line");a.setAttribute("x1",r),a.setAttribute("y1",c),a.setAttribute("x2",r+100),a.setAttribute("y2",c+100),a.setAttribute("stroke","#"+o(n)),a.setAttribute("stroke-width","3");var s=e.createElementNS(e.documentElement.namespaceURI,"line");s.setAttribute("x1",r+100),s.setAttribute("y1",c),s.setAttribute("x2",r),s.setAttribute("y2",c+100),s.setAttribute("stroke","#"+o(n)),s.setAttribute("stroke-width","3"),e.childNodes[0].insertBefore(a,e.childNodes[0].childNodes[3]),e.childNodes[0].insertBefore(s,e.childNodes[0].childNodes[3])}function u(e,t){return 1==(e>>t&1)}function d(e,t,n){return u(e,n)?"O":u(t,n)?"X":null}},4074:function(e){e.exports={overlay:"OverlayPhoto_overlay__6MsCt",overlay_content:"OverlayPhoto_overlay_content__RL1Vj",overlay_arrow:"OverlayPhoto_overlay_arrow__Sx4bt",overlay_photo:"OverlayPhoto_overlay_photo__RnBXd",date:"OverlayPhoto_date__lpQI4",overlay_closebtn:"OverlayPhoto_overlay_closebtn__Tgzqd"}},9994:function(e){e.exports={picker:"ColorPicker_picker__8LvtY",picker__swatches:"ColorPicker_picker__swatches__4CK4A",picker__swatch:"ColorPicker_picker__swatch__EbNl3",picker__value:"ColorPicker_picker__value__BwXL6"}},8223:function(e){e.exports={header:"Layout_header__wAQMh",header__logo:"Layout_header__logo__WhuoU",header__links:"Layout_header__links__EXYOR",header__links_active:"Layout_header__links_active__zE6c9",footer:"Layout_footer__c3Del"}}}]);