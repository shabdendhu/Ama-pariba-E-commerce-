(this.webpackJsonpmy=this.webpackJsonpmy||[]).push([[5,14],{116:function(e,t,n){"use strict";var i=n(2),c=n(48),a=n(0),o=(n(9),n(50)),r=n(52),d=a.forwardRef((function(e,t){var n=e.classes,r=e.className,d=e.dividers,l=void 0!==d&&d,s=Object(c.a)(e,["classes","className","dividers"]);return a.createElement("div",Object(i.a)({className:Object(o.a)(n.root,r,l&&n.dividers),ref:t},s))}));t.a=Object(r.a)((function(e){return{root:{flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"8px 24px","&:first-child":{paddingTop:20}},dividers:{padding:"16px 24px",borderTop:"1px solid ".concat(e.palette.divider),borderBottom:"1px solid ".concat(e.palette.divider)}}}),{name:"MuiDialogContent"})(d)},119:function(e,t,n){"use strict";var i=n(2),c=n(48),a=n(0),o=(n(9),n(50)),r=n(52),d=n(57),l={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},s=a.forwardRef((function(e,t){var n=e.align,r=void 0===n?"inherit":n,s=e.classes,p=e.className,u=e.color,b=void 0===u?"initial":u,x=e.component,j=e.display,h=void 0===j?"initial":j,f=e.gutterBottom,g=void 0!==f&&f,O=e.noWrap,m=void 0!==O&&O,y=e.paragraph,v=void 0!==y&&y,w=e.variant,k=void 0===w?"body1":w,S=e.variantMapping,_=void 0===S?l:S,C=Object(c.a)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),z=x||(v?"p":_[k]||l[k])||"span";return a.createElement(z,Object(i.a)({className:Object(o.a)(s.root,p,"inherit"!==k&&s[k],"initial"!==b&&s["color".concat(Object(d.a)(b))],m&&s.noWrap,g&&s.gutterBottom,v&&s.paragraph,"inherit"!==r&&s["align".concat(Object(d.a)(r))],"initial"!==h&&s["display".concat(Object(d.a)(h))]),ref:t},C))})),p=Object(r.a)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(s),u=a.forwardRef((function(e,t){var n=e.children,r=e.classes,d=e.className,l=e.disableTypography,s=void 0!==l&&l,u=Object(c.a)(e,["children","classes","className","disableTypography"]);return a.createElement("div",Object(i.a)({className:Object(o.a)(r.root,d),ref:t},u),s?n:a.createElement(p,{component:"h2",variant:"h6"},n))}));t.a=Object(r.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(u)},246:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n(49),a=n(54),o=n.n(a),r=n(0),d=n(86),l=n(73),s=n(56),p=n(51);t.default=function(){var e=Object(r.useState)([]),t=Object(c.a)(e,2),n=t[0],a=t[1],u=window.location.search,b=u.substring(u.lastIndexOf("=")+1).replace("%20"," ");return Object(r.useEffect)((function(){o.a.post(p.m,{product_name:b}).then((function(e){a(e.data.data),console.log(e.data.data)}))}),[]),Object(i.jsxs)("div",{children:[Object(i.jsx)(s.a,{pagetitle:b}),Object(i.jsxs)("div",{style:{marginTop:"50px"},children:[Object(i.jsx)(l.a,{}),n.map((function(e,t){return Object(i.jsx)(d.a,{data:e},e.product_id)}))]})]})}},51:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"e",(function(){return r})),n.d(t,"k",(function(){return d})),n.d(t,"f",(function(){return l})),n.d(t,"m",(function(){return s})),n.d(t,"j",(function(){return p})),n.d(t,"l",(function(){return u})),n.d(t,"c",(function(){return b})),n.d(t,"g",(function(){return x})),n.d(t,"h",(function(){return j})),n.d(t,"a",(function(){return h})),n.d(t,"i",(function(){return f}));var i=function(){var e="http://localhost:9000/",t="http://localhost:9000/customer-app/";return"localhost"===window.location.hostname?(e="http://localhost:9000/",t="http://localhost:9000/customer-app/"):(e="http://192.168.43.77:9000/",t="http://192.168.43.77:9000/customer-app/"),{site_url:e,custumer_api:t}}(),c=(i.site_url,i.custumer_api),a=c+"get-products",o=c+"get-product-category",r=c+"get-product-qnt-options",d=c+"make-new-order",l=c+"get-products-by-category",s=c+"search-product-by-name",p=c+"get-users-details",u=c+"register-new-user",b=c+"get-product-details",x=c+"get-recipe-detail",j=c+"get-recipe-list",h=c+"get-all-product-category",f=c+"get-search-suggestion"},56:function(e,t,n){"use strict";var i=n(1),c=n(25),a=n(49),o=n(0),r=n.n(o),d=n(26),l=n(3),s=n(66),p=n.n(s),u=n(67),b=n.n(u),x=n(59),j=n.n(x),h=n(65),f=n.n(h),g=n(237),O=n(248),m=n(238),y=n(239),v=n(240),w=n(24),k=n(58),S=n(60),_=n(27),C=n(11);t.a=Object(l.h)((function(e){var t,n=e.pagetitle,l=Object(w.b)(),s=Object(a.a)(l,1)[0].basket,u=Object(_.b)(),x=Object(o.useState)(!1),h=Object(a.a)(x,2),z=h[0],E=h[1],B=Object(o.useState)(!1),R=Object(a.a)(B,2),I=R[0],D=R[1];return Object(o.useEffect)((function(){I&&(document.body.style.overflow="hidden"),I||(document.body.style.overflow="unset")}),[I]),Object(i.jsxs)(r.a.Fragment,{children:[Object(i.jsx)("div",{style:{},children:Object(i.jsxs)(g.a,{style:(t={display:"flex",backgroundColor:"#2f8a74",color:"white",width:"100%",position:"fixed",zIndex:99},Object(c.a)(t,"width","-webkit-fill-available"),Object(c.a)(t,"top",0),Object(c.a)(t,"borderRadius",0),t),children:[Object(i.jsx)("div",{children:n?Object(i.jsx)(O.a,{color:"inherit","aria-label":"Open drawer",onClick:function(){window.history.go("-1")},children:Object(i.jsx)(f.a,{})}):Object(i.jsx)(O.a,{onClick:function(){D(!0)},children:Object(i.jsx)(m.a,{children:Object(i.jsx)(p.a,{style:{color:"white"}})})})}),Object(i.jsxs)("div",{style:{flexDirection:"row",display:"flex",alignItems:"center"},children:[Object(i.jsx)("span",{children:Object(i.jsx)(d.b,{style:Object(c.a)({textDecoration:"none",fontSize:"20px",color:"white"},"textDecoration","none"),to:"/",children:n?n.length>15?"".concat(n.substring(0,10),"..."):n:"\u0b06\u0b2e \u0b2a\u0b30\u0b3f\u0b2c\u0b3e"})}),Object(i.jsx)("span",{style:{position:"absolute",right:0,margin:"9px 81px 0px 0px"},onClick:function(){E(!z)},children:Object(i.jsx)(j.a,{})}),Object(i.jsx)(d.b,{to:"/checkout",style:{color:"white",textDecoration:"none"},children:Object(i.jsxs)("div",{style:{display:"flex",alignItems:"center",marginLeft:"20px",right:0,position:"absolute",margin:"-11px 16px -1px"},children:[Object(i.jsx)(b.a,{}),Object(i.jsx)("span",{style:{fontSize:"13px",fontWeight:800,marginLeft:"10px",marginRight:"10px"},children:s.length})]})})]})]})}),Object(i.jsx)("div",{children:Object(i.jsx)(y.a,{open:I,anchor:"left",onClose:function(){D(!1)},children:Object(i.jsx)("div",{style:{width:"calc(100vw - 173px)",height:"-webkit-fill-available"},children:Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{style:{backgroundColor:"rgb(89, 26, 7)",height:"35px",width:"100%",marginBottom:"10px",display:"flex",alignItems:"center"},children:Object(i.jsx)("span",{style:{color:"white",fontSize:"20px",marginLeft:"10px"},children:"\u0b06\u0b2e \u0b2a\u0b30\u0b3f\u0b2c\u0b3e"})}),Object(i.jsxs)("div",{style:{padding:"5px"},children:[Object(i.jsx)(d.b,{onClick:function(){D(!1)},to:"/",style:{color:"black",textDecoration:"none",fontSize:"20px"},children:Object(i.jsx)("div",{style:{padding:"7px 4px",fontSize:"23px"},children:"Home"})}),Object(i.jsx)(v.a,{}),Object(i.jsx)(d.b,{onClick:function(){D(!1)},to:"/category",style:{color:"black",textDecoration:"none",fontSize:"20px"},children:Object(i.jsx)("div",{style:{padding:"7px 4px",fontSize:"23px"},children:"Category"})}),Object(i.jsx)(v.a,{})," ",Object(i.jsx)(d.b,{onClick:function(){D(!1)},to:"/login",style:{color:"black",textDecoration:"none",fontSize:"20px"},children:Object(i.jsx)("div",{style:{padding:"7px 4px",fontSize:"23px"},children:"Login"})}),Object(i.jsx)(v.a,{}),Object(i.jsx)("div",{onClick:function(){u(Object(S.b)()),localStorage.removeItem(C.b),D(!1)},style:{color:"black",textDecoration:"none",fontSize:"20px"},children:Object(i.jsx)("div",{style:{padding:"7px 4px",fontSize:"23px"},children:"logout"})})]})]})})})}),Object(i.jsx)(k.a,{openSearchDilog:z})]})}))},58:function(e,t,n){"use strict";var i=n(25),c=n(49),a=n(1),o=n(6),r=n(0),d=n.n(r),l=n(229),s=n(232),p=n(59),u=n.n(p),b=n(54),x=n.n(b),j=n(51),h=n(63),f=n.n(h),g=d.a.forwardRef((function(e,t){return Object(a.jsx)(l.a,Object(o.a)({direction:"up",ref:t},e))})),O=function(e){var t=e.item;return Object(a.jsxs)("li",{style:{padding:"10px 15px",display:"flex",alignItems:"center"},children:[Object(a.jsx)("span",{style:{marginLeft:"32px",color:"#5f5959",fontSize:"19px"},children:t.product_name}),Object(a.jsx)("button",{onClick:function(){t.product_name.replace(/ +/g,"");window.location.href="/search-results?id=".concat(t.product_category_id,"?name=").concat(t.product_name)},style:{position:"absolute",right:0,margin:"0px 10px 0px 0px",border:"none",background:"#ffb100",outline:"none",padding:"5px",width:"105px",borderRadius:"7px"},children:"SELECT"})]},t.product_id)};t.a=function(e){var t,n=e.openSearchDilog,o=(e.onSelectItems,Object(r.useState)(!0)),l=Object(c.a)(o,2),p=l[0],b=l[1],h=Object(r.useState)(""),m=Object(c.a)(h,2),y=m[0],v=m[1],w=Object(r.useState)([]),k=Object(c.a)(w,2),S=k[0],_=k[1],C=Object(r.useState)([]),z=Object(c.a)(C,2),E=z[0],B=z[1],R=function(){b(!1)};return Object(r.useEffect)((function(){y.length>0&&x.a.post(j.i,{product_name:y}).then((function(e){_(e.data.data.productSuggest),B(e.data.data.recipeSuggest)}))}),[y]),Object(r.useEffect)((function(){b(!p),console.log(p)}),[n]),Object(a.jsx)(d.a.Fragment,{children:Object(a.jsx)(s.a,{fullScreen:!0,open:p,onClose:R,TransitionComponent:g,children:Object(a.jsx)("div",{children:Object(a.jsx)("div",{style:{margin:"10px 10px",position:"absolute",width:"94%",background:"white",borderRadius:"10px",boxShadow:"rgba(0, 0, 0, 0.2) 0px 0px 0px 1px, rgba(0, 0, 0, 0.14) 0px 1px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px"},children:Object(a.jsxs)("div",{style:(t={display:"flex",borderRadius:"32px"},Object(i.a)(t,"display","flex"),Object(i.a)(t,"flexDirection","column"),Object(i.a)(t,"width","-webkit-fill-available"),Object(i.a)(t,"padding","10px"),t),children:[Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"row "},children:[Object(a.jsx)(u.a,{}),Object(a.jsx)("input",{type:"text",placeholder:"Type hear",autoFocus:!0,onChange:function(e){v(e.target.value)},value:y,style:{border:"none",outline:"none",fontSize:"18px",width:"100%"}}),Object(a.jsx)("span",{onClick:function(){R()},children:Object(a.jsx)(f.a,{})})]}),Object(a.jsxs)("ul",{style:{margin:0,padding:0,listStyle:"none",position:"relative"},children:[S.length>0&&y.length>0&&S.map((function(e){return Object(a.jsx)(O,{item:e})})),E.length>0&&y.length>0&&E.map((function(e){return Object(a.jsx)(O,{item:e})}))]})]})})})})})}},60:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return a}));var i=n(28),c=function(e){var t=e.is_loggedin,n=e.loggedin_as,c=e.user_info;return{type:i.b,payload:{is_loggedin:t,loggedin_as:n,user_info:c}}},a=function(){return{type:i.a,payload:{}}}},62:function(e,t,n){"use strict";var i=n(1),c=n(49),a=n(248),o=(n(54),n(0)),r=n(27),d=(n(51),n(24));t.a=function(e){var t=e.id,n=e.image,l=e.name,s=e.amount,p=e.price,u=e.stage,b=e.count,x=e.width,j=Object(d.b)(),h=Object(c.a)(j,2),f=(h[0].basket,h[1]),g=Object(r.c)((function(e){return e.authorization.is_loggedin})),O=Object(o.useState)(0),m=Object(c.a)(O,2),y=m[0],v=m[1],w=function(){g?(v(y+1),f({type:"ADD_TO_BASKET",item:{id:t,image:n,name:l,amount:s,price:p}})):window.location.href="/login"},k=function(){v(y-1),f({type:"REMOVE_FROM_BASKET",id:t})};return Object(o.useEffect)((function(){b&&v(b)}),[b]),Object(i.jsx)(i.Fragment,{children:0==y?Object(i.jsx)("button",{onClick:"add"===u?w:k,style:{backgroundColor:"#9e2121",marginBottom:"5px",marginLeft:"5px",height:"35px",width:x,color:"white",border:"none",outline:"none",borderRadius:"5px",fontSize:"15px"},children:"add"===u?"ADD":"REMOVE"}):Object(i.jsx)("div",{onClick:function(){1==y&&"remove"===u&&k()},style:{backgroundColor:"#9e2121",marginBottom:"5px",marginLeft:"5px",height:"35px",width:x,color:"white",border:"none",outline:"none",borderRadius:"5px",fontSize:"17px",display:"flex",alignItems:"center",justifyContent:"space-around"},children:1==y&&"remove"===u?"REMOVE":Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(a.a,{style:{fontSize:"24px",fontWeight:500,color:"white"},onClick:function(){w()},children:"+"}),Object(i.jsx)("span",{style:{fontSize:"19px",fontWeight:500},children:y}),Object(i.jsx)(a.a,{style:{fontSize:"24px",fontWeight:500,color:"white"},onClick:function(){k()},children:"-"})]})})})}},73:function(e,t,n){"use strict";var i=n(1),c=n(49),a=n(0),o=n(84),r=n.n(o),d=n(85),l=Object(d.autoPlay)(r.a);t.a=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=(t[0],t[1],Object(a.useState)(window.innerWidth)),o=Object(c.a)(n,2),r=o[0],d=o[1];function s(){d(window.innerWidth)}Object(a.useEffect)((function(){return window.addEventListener("resize",s),function(){window.removeEventListener("resize",s)}}),[]);var p=r<=650;return console.log(p),Object(i.jsx)(i.Fragment,{children:p&&Object(i.jsx)("div",{className:"hide-scroll-bar",style:{display:"flex",flexDirection:"row",overflowX:"auto",width:"100%",background:"#efefef",padding:"10px 0px"},children:Object(i.jsx)(l,{children:["amaparibaBanner.jpg","amaparibaBanner2.jpg","amaparibaBanner3.jpg","amaparibaBanner4.jpg"].map((function(e,t){return Object(i.jsx)("div",{style:{flexShrink:0,marginRight:"5px",marginLeft:"5px",width:"calc(100vw - 10px)",height:"100px",position:"relative",background:"white",borderRadius:"20px",border:"1px solid rgb(126 217 255)"},children:Object(i.jsx)("img",{src:e,style:{width:"calc(100vw - 10px)",height:"100px",borderRadius:"20px"}})},t)}))})})})}},74:function(e,t,n){"use strict";var i=n(70),c=n(71);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(0)),o=(0,i(n(72)).default)(a.createElement("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),"KeyboardArrowDown");t.default=o},81:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n(49),a=n(6),o=n(0),r=n.n(o),d=n(229),l=n(232),s=n(89),p=n(56),u=n(62),b=n(51),x=n(54),j=n.n(x),h=r.a.forwardRef((function(e,t){return Object(i.jsx)(d.a,Object(a.a)({direction:"up",ref:t},e))}));t.default=function(e){e.openDetailDilog;var t=window.location.search,n=t.substring(t.lastIndexOf("=")+1),r=Object(o.useState)([]),d=Object(c.a)(r,2),x=d[0],f=d[1],g=Object(o.useState)([]),O=Object(c.a)(g,2),m=O[0],y=O[1],v=Object(o.useState)(0),w=Object(c.a)(v,2),k=w[0],S=w[1],_=Object(o.useState)(""),C=Object(c.a)(_,2),z=C[0],E=C[1],B=Object(o.useState)(),R=Object(c.a)(B,2),I=R[0],D=R[1],L=Object(o.useState)({productId:"",image:"",name:""}),T=Object(c.a)(L,2),F=T[0],W=T[1];return Object(o.useEffect)((function(){var e=new URLSearchParams(window.location.search);j.a.get("".concat(b.c,"/").concat(parseInt(e.get("id")))).then((function(e){var t=e.data.data;if(t&&t.pack_size){var n=e.data.data.product;f(e.data.data.product),y(e.data.data.pack_size),S(n.product_price),E("".concat(n.default_amt).concat(n.unit_quantity)),W(Object(a.a)(Object(a.a)({},F),{},{productId:n.product_id,image:n.image_url,name:n.product_name}))}}))}),[]),Object(i.jsxs)(l.a,{fullScreen:!0,open:!0,TransitionComponent:h,children:[Object(i.jsx)(p.a,{pagetitle:n}),Object(i.jsxs)("div",{style:{marginTop:"50px",background:"white"},children:[Object(i.jsx)("div",{style:{padding:"5px",fontFamily:"fantasy",fontWeight:600,color:"#4e0202"},children:x.product_name}),Object(i.jsxs)("div",{style:{paddingLeft:"5px",fontWeight:600,margin:"0PX 1px 5px 3px"},children:["\u20b9",k," / ",z]}),Object(i.jsx)("img",{src:x.image_url,style:{width:"100vw"}}),Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{style:{paddingLeft:"5px"},children:"Pake Size"}),m.map((function(e,t){return Object(i.jsx)("div",{onClick:function(){S(e.price),E("".concat(e.quantity).concat(e.short_unit)),D(e.id)},style:{display:"flex",flexDirection:"column",justifyContent:"space-between"},children:Object(i.jsxs)("div",{style:{padding:"15px",borderRadius:"4px",fontSize:"18px",marginBottom:"10px",border:"1px solid rgba(0, 128, 0, 0.45)",margin:"5px"},children:[Object(i.jsxs)("span",{children:[e.quantity,"/",e.short_unit,Object(i.jsxs)("span",{style:{marginLeft:"134px",color:"green",fontWeight:400},children:["\u20b9",e.price]})]}),Object(i.jsx)("span",{style:{right:0,position:"absolute",margin:"-1px 15px 0px 0px"},children:Object(i.jsx)(s.a,{checked:I===e.id,style:{padding:"0px"}})})]})},e.id)}))]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{style:{fontWeight:500,padding:"5px",borderBottom:"2px solid black",borderTop:"2px solid black",marginTop:"10px",textAlign:"center",fontSize:"18px"},children:"About Product"}),Object(i.jsx)("div",{style:{padding:"10px"},children:x.about_product})]}),Object(i.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(i.jsx)(u.a,{id:F.productId,image:F.image,name:F.name,amount:z,price:parseInt(k),width:"80%",stage:"add"})})]})]})}},86:function(e,t,n){"use strict";var i=n(1),c=n(49),a=n(0),o=n.n(a),r=n(74),d=n.n(r),l=n(24),s=n(62),p=n(51),u=n(63),b=n.n(u),x=n(54),j=n.n(x),h=n(232),f=n(119),g=n(116),O=n(237),m=n(89),y=(n(81),n(3));t.a=function(e){var t=e.data,n=Object(y.g)(),r=Object(a.useState)(!1),u=Object(c.a)(r,2),x=u[0],v=u[1],w=Object(l.b)(),k=Object(c.a)(w,2),S=k[0].basket,_=(k[1],Object(a.useState)([])),C=Object(c.a)(_,2),z=C[0],E=C[1],B=Object(a.useState)(t.discounted_price),R=Object(c.a)(B,2),I=R[0],D=R[1],L=Object(a.useState)("".concat(t.product_price)),T=Object(c.a)(L,2),F=T[0],W=T[1],P=Object(a.useState)("".concat(t.default_amt).concat(t.unit_quantity)),M=Object(c.a)(P,2),N=M[0],A=M[1],q=[];S.forEach((function(e){q.push(e.id)}));var V={};q.forEach((function(e){V[e]=(V[e]||0)+1}));return Object(a.useEffect)((function(){x&&(document.body.style.overflow="hidden"),x||(document.body.style.overflow="unset")}),[x]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o.a.Fragment,{children:Object(i.jsxs)("div",{style:{borderBottom:"1px solid #80808052",background:"rgb(249 249 249)"},children:[Object(i.jsxs)("div",{style:{display:"flex",flexDirection:"row",padding:"10px",marginBottom:"5px"},children:[Object(i.jsx)("div",{style:{flex:1,display:"flex",flexDirection:"column"},children:Object(i.jsxs)("div",{style:{flex:" 3 1 0%",border:"1px solid rgba(128, 128, 128, 0.32)",margin:"5px",padding:"5px",borderRadius:"10px",marginRight:"19px",background:"rgb(253, 253, 253)",boxShadow:"0 5px 15px rgba(0,0,0,.05)"},children:[Object(i.jsxs)("div",{style:{background:"green",color:"white",padding:"3px",borderRadius:"0px 0px 45px 45px",fontSize:"13px",height:"13px",width:"100px",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",marginTop:"-5px"},children:[t.discount,"% off"]}),Object(i.jsx)("img",{onClick:function(){n.push("/product-details?id=".concat(t.product_id,"?name=").concat(t.product_name))},style:{width:"100px",height:"100px"},src:t.image_url})]})}),Object(i.jsxs)("div",{style:{flex:2,display:"flex",flexDirection:"column",height:"100px"},children:[Object(i.jsx)("div",{style:{paddingLeft:"7px",fontSize:"18px",fontFamily:"ProximaNova-Regular",margin:"9px 0px"},children:t.product_name}),Object(i.jsx)("div",{style:{},children:Object(i.jsxs)("div",{onClick:function(){var e;e=t.product_id,j.a.get("".concat(p.e,"/").concat(e)).then((function(e){var t=e.data;!0===t.status&&t.data.length>0&&(E(e.data.data),v(!0))}))},style:{borderRadius:"5px",border:"1px solid #0080003b",padding:"2px 0px 2px 6px",display:"flex",alignItems:"center",flexDirection:"row",fontSize:"15px",height:"25px",justifyContent:"center"},children:[Object(i.jsx)("span",{style:{},children:N}),Object(i.jsx)("span",{style:{flex:1,textAlign:"end",paddingRight:"8px"},children:Object(i.jsx)(d.a,{style:{fontSize:"15px"}})})]})}),Object(i.jsxs)("div",{style:{flex:1,width:"fit-content",height:" fit-content",margin:"4px",marginTop:"8px"},children:[Object(i.jsxs)("del",{children:["\u20b9",F]}),Object(i.jsxs)("span",{style:{marginLeft:"15px"},children:["\u20b9",I]})]})]})]}),Object(i.jsx)("div",{style:{float:"right",marginTop:"-44px",marginRight:"14px"},children:Object(i.jsx)(s.a,{id:t.product_id,image:t.image_url,name:t.product_name,amount:N,price:parseInt(F),width:"117px",stage:"add",count:V[t.product_id]})})]})}),Object(i.jsxs)(h.a,{fullWidth:!0,onClose:function(){v(!1)},open:x,children:[Object(i.jsx)(f.a,{style:{borderBottom:"1px solid gray",padding:"7px"},onClose:function(){v(!1)},children:Object(i.jsxs)("div",{style:{position:"relative",paddingLeft:"18px"},children:[Object(i.jsx)("span",{style:{fontSize:" 24px",fontWeight:600,fontFamily:"auto",color:"#a70606"},children:t.product_name}),Object(i.jsx)("span",{onClick:function(){v(!1)},style:{position:"fixed",right:0,border:"1px solid #a7a3a3",margin:"-57px 20px 0px 0px",borderRadius:"15px",padding:"1px",background:"white",display:"flex"},children:Object(i.jsx)(b.a,{})})]})}),Object(i.jsx)(g.a,{style:{padding:"9px 8px"},children:z.map((function(e,t){return Object(i.jsx)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between"},children:Object(i.jsxs)(O.a,{style:{padding:"5px",borderRadius:"4px",fontSize:"19px",marginBottom:" 10px"},children:[Object(i.jsxs)("span",{children:[e.quantity," ",e.short_unit,Object(i.jsxs)("del",{style:{marginLeft:"90px",color:"green",fontWeight:500},children:["\u20b9",e.price]}),Object(i.jsxs)("span",{style:{marginLeft:"14px",color:"green",fontWeight:600},children:["\u20b9",e.discounted_price]})]}),Object(i.jsx)("span",{style:{right:0,position:"absolute",margin:"-1px 15px 0px 0px"},children:Object(i.jsx)(m.a,{style:{padding:"0px"},onClick:function(){!function(e){A("".concat(e.quantity).concat(e.short_unit)),W(e.price),D(e.discounted_price),setTimeout((function(){v(!1)}),100)}(e)}})})]})},t)}))})]})]})}},89:function(e,t,n){"use strict";var i=n(2),c=n(48),a=n(0),o=(n(9),n(50)),r=n(75),d=n(76),l=a.createContext();var s=l;var p=n(52),u=n(248),b=a.forwardRef((function(e,t){var n=e.autoFocus,l=e.checked,p=e.checkedIcon,b=e.classes,x=e.className,j=e.defaultChecked,h=e.disabled,f=e.icon,g=e.id,O=e.inputProps,m=e.inputRef,y=e.name,v=e.onBlur,w=e.onChange,k=e.onFocus,S=e.readOnly,_=e.required,C=e.tabIndex,z=e.type,E=e.value,B=Object(c.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),R=Object(d.a)({controlled:l,default:Boolean(j),name:"SwitchBase",state:"checked"}),I=Object(r.a)(R,2),D=I[0],L=I[1],T=a.useContext(s),F=h;T&&"undefined"===typeof F&&(F=T.disabled);var W="checkbox"===z||"radio"===z;return a.createElement(u.a,Object(i.a)({component:"span",className:Object(o.a)(b.root,x,D&&b.checked,F&&b.disabled),disabled:F,tabIndex:null,role:void 0,onFocus:function(e){k&&k(e),T&&T.onFocus&&T.onFocus(e)},onBlur:function(e){v&&v(e),T&&T.onBlur&&T.onBlur(e)},ref:t},B),a.createElement("input",Object(i.a)({autoFocus:n,checked:l,defaultChecked:j,className:b.input,disabled:F,id:W&&g,name:y,onChange:function(e){var t=e.target.checked;L(t),w&&w(e,t)},readOnly:S,ref:m,required:_,tabIndex:C,type:z,value:E},O)),D?p:f)})),x=Object(p.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(b),j=n(61),h=Object(j.a)(a.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),f=Object(j.a)(a.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),g=n(68),O=Object(j.a)(a.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),m=n(57),y=a.createElement(f,null),v=a.createElement(h,null),w=a.createElement(O,null),k=a.forwardRef((function(e,t){var n=e.checkedIcon,r=void 0===n?y:n,d=e.classes,l=e.color,s=void 0===l?"secondary":l,p=e.icon,u=void 0===p?v:p,b=e.indeterminate,j=void 0!==b&&b,h=e.indeterminateIcon,f=void 0===h?w:h,g=e.inputProps,O=e.size,k=void 0===O?"medium":O,S=Object(c.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),_=j?f:u,C=j?f:r;return a.createElement(x,Object(i.a)({type:"checkbox",classes:{root:Object(o.a)(d.root,d["color".concat(Object(m.a)(s))],j&&d.indeterminate),checked:d.checked,disabled:d.disabled},color:s,inputProps:Object(i.a)({"data-indeterminate":j},g),icon:a.cloneElement(_,{fontSize:void 0===_.props.fontSize&&"small"===k?k:_.props.fontSize}),checkedIcon:a.cloneElement(C,{fontSize:void 0===C.props.fontSize&&"small"===k?k:C.props.fontSize}),ref:t},S))}));t.a=Object(p.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(g.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(g.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(k)}}]);
//# sourceMappingURL=5.1bd397d1.chunk.js.map