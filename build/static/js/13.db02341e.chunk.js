(this.webpackJsonpmy=this.webpackJsonpmy||[]).push([[13],{209:function(e,t,n){},241:function(e,t,n){"use strict";n.r(t);var o=n(1),i=n(6),c=n(49),a=n(0),r=(n(209),n(27)),s=n(56),l=n(54),d=n.n(l),b=n(249),p=n(11),x=n(24),u=n(60),j=n(51);t.default=function(){var e=Object(a.useState)({hasError:!1,message:""}),t=Object(c.a)(e,2),n=t[0],l=t[1],g=Object(x.b)(),h=Object(c.a)(g,2),f=(h[0].user,h[1],Object(r.c)((function(e){return e.authorization.is_loggedin}))),O=Object(a.useState)(f),m=Object(c.a)(O,2),y=(m[0],m[1]),w=Object(r.b)(),v=Object(a.useState)({mobile_no:"",password:""}),S=Object(c.a)(v,2),k=S[0],C=S[1],_=function(e){localStorage.setItem(p.b,JSON.stringify(e.data.data)),localStorage.setItem(p.a,"user"),w(Object(u.a)({is_loggedin:!0,loggedin_as:"user",user_info:e.data.data})),window.history.go("-1"),y(!0),console.log("data1",e.data.data)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(s.a,{}),Object(o.jsxs)("div",{style:{backgroundColor:"#efefef",marginTop:"90px",width:"-webkit-fill-available"},children:[Object(o.jsxs)("div",{style:{fontSize:" 23px",color:"rgb(47 138 116)",marginBottom:"45px",textAlign:"center"},children:["CREATE ACCOUNT ",Object(o.jsx)("br",{}),"OR",Object(o.jsx)("br",{}),"LOGIN"]}),Object(o.jsxs)("div",{style:{textAlign:"center",width:"-webkit-fill-available"},children:[Object(o.jsx)("div",{style:{textAlign:"left",margin:"-5px 28px",fontSize:"17px"},children:"Mobile No"}),Object(o.jsx)("input",{style:{width:"-webkit-fill-available",border:"none",background:"black",outline:"none",borderRadius:"22px",height:"39px",fontSize:"17px",padding:"0px 18px 1px 18px",margin:"10px 18px",textTransform:"uppercase",color:"white"},value:k.mobile_no,onChange:function(e){return C(Object(i.a)(Object(i.a)({},k),{},{mobile_no:e.target.value}))},type:"text"})]}),Object(o.jsxs)("div",{style:{textAlign:"center",width:"-webkit-fill-available",marginTop:"20px"},children:[Object(o.jsx)("div",{style:{textAlign:"left",margin:"-5px 28px",fontSize:"17px"},children:"Password"}),Object(o.jsx)("input",{style:{width:"-webkit-fill-available",border:"none",background:"black",outline:"none",borderRadius:"22px",height:"39px",fontSize:"17px",padding:"0px 18px 1px 18px",margin:"10px 18px",textTransform:"password",color:"white"},value:k.password,onChange:function(e){return C(Object(i.a)(Object(i.a)({},k),{},{password:e.target.value}))}})]}),Object(o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",marginTop:"40px"},children:[Object(o.jsx)("button",{style:{width:"80%",border:"none",background:"#00b186",height:"35px",borderRadius:"10px",color:"white",fontSize:"19px",fontWeight:700,marginBottom:"10px",outline:"none"},onClick:function(){d.a.post(j.j,{mobile_no:k.mobile_no,password:k.password}).then((function(e){e.data.status?(console.log("data2",e.data.data),_(e)):l({hasError:!0,message:e.data.message}),console.log(e)}))},children:"log In"}),Object(o.jsx)("button",{style:{width:"80%",border:"none",background:"#0e8a45",height:"35px",borderRadius:"10px",color:"white",fontSize:"19px",fontWeight:700,outline:"none"},onClick:function(){d.a.post(j.l,{mobile_no:k.mobile_no,password:k.password}).then((function(e){e.data.status?_(e):l({hasError:!0,message:e.data.message})})),console.log(k)},children:"Creat account"})]})]}),Object(o.jsx)(b.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:n.hasError,autoHideDuration:1e3,onClose:function(){l(Object(i.a)(Object(i.a)({},Error),{},{hasError:!1}))},message:n.message})]})}},51:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return a})),n.d(t,"e",(function(){return r})),n.d(t,"k",(function(){return s})),n.d(t,"f",(function(){return l})),n.d(t,"m",(function(){return d})),n.d(t,"j",(function(){return b})),n.d(t,"l",(function(){return p})),n.d(t,"c",(function(){return x})),n.d(t,"g",(function(){return u})),n.d(t,"h",(function(){return j})),n.d(t,"a",(function(){return g})),n.d(t,"i",(function(){return h}));var o=function(){var e="http://localhost:9000/",t="http://localhost:9000/customer-app/";return"localhost"===window.location.hostname?(e="http://localhost:9000/",t="http://localhost:9000/customer-app/"):(e="http://192.168.43.77:9000/",t="http://192.168.43.77:9000/customer-app/"),{site_url:e,custumer_api:t}}(),i=(o.site_url,o.custumer_api),c=i+"get-products",a=i+"get-product-category",r=i+"get-product-qnt-options",s=i+"make-new-order",l=i+"get-products-by-category",d=i+"search-product-by-name",b=i+"get-users-details",p=i+"register-new-user",x=i+"get-product-details",u=i+"get-recipe-detail",j=i+"get-recipe-list",g=i+"get-all-product-category",h=i+"get-search-suggestion"},56:function(e,t,n){"use strict";var o=n(1),i=n(25),c=n(49),a=n(0),r=n.n(a),s=n(26),l=n(3),d=n(66),b=n.n(d),p=n(67),x=n.n(p),u=n(59),j=n.n(u),g=n(65),h=n.n(g),f=n(237),O=n(248),m=n(238),y=n(239),w=n(240),v=n(24),S=n(58),k=n(60),C=n(27),_=n(11);t.a=Object(l.h)((function(e){var t,n=e.pagetitle,l=Object(v.b)(),d=Object(c.a)(l,1)[0].basket,p=Object(C.b)(),u=Object(a.useState)(!1),g=Object(c.a)(u,2),z=g[0],D=g[1],E=Object(a.useState)(!1),I=Object(c.a)(E,2),R=I[0],T=I[1];return Object(a.useEffect)((function(){R&&(document.body.style.overflow="hidden"),R||(document.body.style.overflow="unset")}),[R]),Object(o.jsxs)(r.a.Fragment,{children:[Object(o.jsx)("div",{style:{},children:Object(o.jsxs)(f.a,{style:(t={display:"flex",backgroundColor:"#2f8a74",color:"white",width:"100%",position:"fixed",zIndex:99},Object(i.a)(t,"width","-webkit-fill-available"),Object(i.a)(t,"top",0),Object(i.a)(t,"borderRadius",0),t),children:[Object(o.jsx)("div",{children:n?Object(o.jsx)(O.a,{color:"inherit","aria-label":"Open drawer",onClick:function(){window.history.go("-1")},children:Object(o.jsx)(h.a,{})}):Object(o.jsx)(O.a,{onClick:function(){T(!0)},children:Object(o.jsx)(m.a,{children:Object(o.jsx)(b.a,{style:{color:"white"}})})})}),Object(o.jsxs)("div",{style:{flexDirection:"row",display:"flex",alignItems:"center"},children:[Object(o.jsx)("span",{children:Object(o.jsx)(s.b,{style:Object(i.a)({textDecoration:"none",fontSize:"20px",color:"white"},"textDecoration","none"),to:"/",children:n?n.length>15?"".concat(n.substring(0,10),"..."):n:"\u0b06\u0b2e \u0b2a\u0b30\u0b3f\u0b2c\u0b3e"})}),Object(o.jsx)("span",{style:{position:"absolute",right:0,margin:"9px 81px 0px 0px"},onClick:function(){D(!z)},children:Object(o.jsx)(j.a,{})}),Object(o.jsx)(s.b,{to:"/checkout",style:{color:"white",textDecoration:"none"},children:Object(o.jsxs)("div",{style:{display:"flex",alignItems:"center",marginLeft:"20px",right:0,position:"absolute",margin:"-11px 16px -1px"},children:[Object(o.jsx)(x.a,{}),Object(o.jsx)("span",{style:{fontSize:"13px",fontWeight:800,marginLeft:"10px",marginRight:"10px"},children:d.length})]})})]})]})}),Object(o.jsx)("div",{children:Object(o.jsx)(y.a,{open:R,anchor:"left",onClose:function(){T(!1)},children:Object(o.jsx)("div",{style:{width:"calc(100vw - 173px)",height:"-webkit-fill-available"},children:Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{style:{backgroundColor:"rgb(89, 26, 7)",height:"35px",width:"100%",marginBottom:"10px",display:"flex",alignItems:"center"},children:Object(o.jsx)("span",{style:{color:"white",fontSize:"20px",marginLeft:"10px"},children:"\u0b06\u0b2e \u0b2a\u0b30\u0b3f\u0b2c\u0b3e"})}),Object(o.jsxs)("div",{style:{padding:"5px"},children:[Object(o.jsx)(s.b,{onClick:function(){T(!1)},to:"/",style:{color:"black",textDecoration:"none",fontSize:"20px"},children:Object(o.jsx)("div",{style:{padding:"7px 4px",fontSize:"23px"},children:"Home"})}),Object(o.jsx)(w.a,{}),Object(o.jsx)(s.b,{onClick:function(){T(!1)},to:"/category",style:{color:"black",textDecoration:"none",fontSize:"20px"},children:Object(o.jsx)("div",{style:{padding:"7px 4px",fontSize:"23px"},children:"Category"})}),Object(o.jsx)(w.a,{})," ",Object(o.jsx)(s.b,{onClick:function(){T(!1)},to:"/login",style:{color:"black",textDecoration:"none",fontSize:"20px"},children:Object(o.jsx)("div",{style:{padding:"7px 4px",fontSize:"23px"},children:"Login"})}),Object(o.jsx)(w.a,{}),Object(o.jsx)("div",{onClick:function(){p(Object(k.b)()),localStorage.removeItem(_.b),T(!1)},style:{color:"black",textDecoration:"none",fontSize:"20px"},children:Object(o.jsx)("div",{style:{padding:"7px 4px",fontSize:"23px"},children:"logout"})})]})]})})})}),Object(o.jsx)(S.a,{openSearchDilog:z})]})}))},58:function(e,t,n){"use strict";var o=n(25),i=n(49),c=n(1),a=n(6),r=n(0),s=n.n(r),l=n(229),d=n(232),b=n(59),p=n.n(b),x=n(54),u=n.n(x),j=n(51),g=n(63),h=n.n(g),f=s.a.forwardRef((function(e,t){return Object(c.jsx)(l.a,Object(a.a)({direction:"up",ref:t},e))})),O=function(e){var t=e.item;return Object(c.jsxs)("li",{style:{padding:"10px 15px",display:"flex",alignItems:"center"},children:[Object(c.jsx)("span",{style:{marginLeft:"32px",color:"#5f5959",fontSize:"19px"},children:t.product_name}),Object(c.jsx)("button",{onClick:function(){t.product_name.replace(/ +/g,"");window.location.href="/search-results?id=".concat(t.product_category_id,"?name=").concat(t.product_name)},style:{position:"absolute",right:0,margin:"0px 10px 0px 0px",border:"none",background:"#ffb100",outline:"none",padding:"5px",width:"105px",borderRadius:"7px"},children:"SELECT"})]},t.product_id)};t.a=function(e){var t,n=e.openSearchDilog,a=(e.onSelectItems,Object(r.useState)(!0)),l=Object(i.a)(a,2),b=l[0],x=l[1],g=Object(r.useState)(""),m=Object(i.a)(g,2),y=m[0],w=m[1],v=Object(r.useState)([]),S=Object(i.a)(v,2),k=S[0],C=S[1],_=Object(r.useState)([]),z=Object(i.a)(_,2),D=z[0],E=z[1],I=function(){x(!1)};return Object(r.useEffect)((function(){y.length>0&&u.a.post(j.i,{product_name:y}).then((function(e){C(e.data.data.productSuggest),E(e.data.data.recipeSuggest)}))}),[y]),Object(r.useEffect)((function(){x(!b),console.log(b)}),[n]),Object(c.jsx)(s.a.Fragment,{children:Object(c.jsx)(d.a,{fullScreen:!0,open:b,onClose:I,TransitionComponent:f,children:Object(c.jsx)("div",{children:Object(c.jsx)("div",{style:{margin:"10px 10px",position:"absolute",width:"94%",background:"white",borderRadius:"10px",boxShadow:"rgba(0, 0, 0, 0.2) 0px 0px 0px 1px, rgba(0, 0, 0, 0.14) 0px 1px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px"},children:Object(c.jsxs)("div",{style:(t={display:"flex",borderRadius:"32px"},Object(o.a)(t,"display","flex"),Object(o.a)(t,"flexDirection","column"),Object(o.a)(t,"width","-webkit-fill-available"),Object(o.a)(t,"padding","10px"),t),children:[Object(c.jsxs)("div",{style:{display:"flex",flexDirection:"row "},children:[Object(c.jsx)(p.a,{}),Object(c.jsx)("input",{type:"text",placeholder:"Type hear",autoFocus:!0,onChange:function(e){w(e.target.value)},value:y,style:{border:"none",outline:"none",fontSize:"18px",width:"100%"}}),Object(c.jsx)("span",{onClick:function(){I()},children:Object(c.jsx)(h.a,{})})]}),Object(c.jsxs)("ul",{style:{margin:0,padding:0,listStyle:"none",position:"relative"},children:[k.length>0&&y.length>0&&k.map((function(e){return Object(c.jsx)(O,{item:e})})),D.length>0&&y.length>0&&D.map((function(e){return Object(c.jsx)(O,{item:e})}))]})]})})})})})}},60:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c}));var o=n(28),i=function(e){var t=e.is_loggedin,n=e.loggedin_as,i=e.user_info;return{type:o.b,payload:{is_loggedin:t,loggedin_as:n,user_info:i}}},c=function(){return{type:o.a,payload:{}}}}}]);
//# sourceMappingURL=13.db02341e.chunk.js.map