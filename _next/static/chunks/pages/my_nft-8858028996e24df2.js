(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[829],{924:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return x}});var r=e(7812),c=e(29),a=e(7794),s=e.n(a),u=e(6262),o=e(8250),i=e(7294),f=e(7575),d=e(171),l=e(4765),p=e(2870),h="Please Connect Polygon Wallet!",_=e(5893);function x(){var n=(0,i.useState)([]),t=n[0],e=n[1],a=(0,f.t)().account,x=(0,d.W)().setAndShowTopAlert;return(0,i.useEffect)((function(){function n(){return n=(0,c.Z)(s().mark((function n(c){var a,u,o,i,f,d,_=arguments;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=_.length>1&&void 0!==_[1]?_[1]:1,u=_.length>2&&void 0!==_[2]?_[2]:100,""!=c){n.next=5;break}return x(h,"red"),n.abrupt("return");case 5:return x("","red"),o="".concat(p.oc,"&contractaddress=").concat(l.$G,"&address=").concat(c,"&page=").concat(a,"&offset=").concat(u,"&sort=asc"),n.next=9,fetch(o).then((function(n){return n.json()}));case 9:if("1"==(i=n.sent).status){n.next=14;break}return f="".concat(i.message,". ").concat(i.result),x(f,"red"),n.abrupt("return");case 14:d=(0,r.Z)(t),i.result.map((function(n){var t=parseInt(n.tokenID);d.includes(t)||d.push(t)})),d=d.sort((function(n,t){return t-n})),e(d);case 18:case"end":return n.stop()}}),n)}))),n.apply(this,arguments)}!function(t){n.apply(this,arguments)}(a)}),[a]),(0,_.jsx)(u.Z,{children:(0,_.jsx)("div",{id:"my_nft",className:"bg-black  sm:py-5 pb-40 ",children:(0,_.jsxs)("div",{className:"container mx-auto ",children:[(0,_.jsx)("div",{className:"flex justify-around",children:(0,_.jsx)("h1",{className:"text-center mt-4 capitalize",children:"My NFTs"})}),(0,_.jsx)(o.Z,{tokenIdAry:t,canPlay:!1,showTokenId:-1})]})})})}},4169:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my_nft",function(){return e(924)}])}},function(n){n.O(0,[858,103,678,774,888,179],(function(){return t=4169,n(n.s=t);var t}));var t=n.O();_N_E=t}]);