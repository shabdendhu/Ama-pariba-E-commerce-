(this.webpackJsonpmy=this.webpackJsonpmy||[]).push([[10],{117:function(e,t,n){"use strict";var i=n(48),a=n(2),r=n(0),c=(n(9),n(50)),o=n(52),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var x=r.forwardRef((function(e,t){var n=e.alignContent,o=void 0===n?"stretch":n,s=e.alignItems,l=void 0===s?"stretch":s,d=e.classes,x=e.className,p=e.component,u=void 0===p?"div":p,j=e.container,b=void 0!==j&&j,f=e.direction,g=void 0===f?"row":f,h=e.item,m=void 0!==h&&h,O=e.justify,y=void 0===O?"flex-start":O,v=e.lg,w=void 0!==v&&v,k=e.md,S=void 0!==k&&k,C=e.sm,D=void 0!==C&&C,z=e.spacing,_=void 0===z?0:z,I=e.wrap,E=void 0===I?"wrap":I,W=e.xl,R=void 0!==W&&W,B=e.xs,M=void 0!==B&&B,L=e.zeroMinWidth,F=void 0!==L&&L,N=Object(i.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),T=Object(c.a)(d.root,x,b&&[d.container,0!==_&&d["spacing-xs-".concat(String(_))]],m&&d.item,F&&d.zeroMinWidth,"row"!==g&&d["direction-xs-".concat(String(g))],"wrap"!==E&&d["wrap-xs-".concat(String(E))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==o&&d["align-content-xs-".concat(String(o))],"flex-start"!==y&&d["justify-xs-".concat(String(y))],!1!==M&&d["grid-xs-".concat(String(M))],!1!==D&&d["grid-sm-".concat(String(D))],!1!==S&&d["grid-md-".concat(String(S))],!1!==w&&d["grid-lg-".concat(String(w))],!1!==R&&d["grid-xl-".concat(String(R))]);return r.createElement(u,Object(a.a)({className:T,ref:t},N))})),p=Object(o.a)((function(e){return Object(a.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return s.forEach((function(i){var a=e.spacing(i);0!==a&&(n["spacing-".concat(t,"-").concat(i)]={margin:"-".concat(d(a,2)),width:"calc(100% + ".concat(d(a),")"),"& > $item":{padding:d(a,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var i={};l.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var a="".concat(Math.round(e/12*1e8)/1e6,"%");i[t]={flexBasis:a,flexGrow:0,maxWidth:a}}else i[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else i[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(a.a)(e,i):e[t.breakpoints.up(n)]=i}(t,e,n),t}),{}))}),{name:"MuiGrid"})(x);t.a=p},118:function(e,t,n){"use strict";var i=n(1),a=n(49),r=n(0),c=n(237),o=n(88),s=n(117),l=(n(73),n(54)),d=n.n(l),x=n(51),p=(n(56),n(3)),u=function(e){var t=e.data,n=Object(p.g)();return Object(i.jsxs)(c.a,{onClick:function(){n.push("/show-items-with-id?id=".concat(t.id,"?name=").concat(t.category_name))},style:{display:"flex",flexDirection:"row",flex:1,padding:"10px",margin:"0px 5px 5px 5px"},children:[Object(i.jsx)("span",{style:{flex:1},children:Object(i.jsx)("img",{style:{height:"45px",width:"45px",borderRadius:"30px"},src:t.category_img,alt:"image"})}),Object(i.jsx)("span",{style:{flex:2,paddingLeft:"10px",display:"flex",alignItems:"center"},children:t.category_name})]})};t.a=function(e){var t=e.all,n=Object(r.useState)([]),c=Object(a.a)(n,2),l=c[0],j=c[1],b=Object(r.useState)(!1),f=Object(a.a)(b,2),g=f[0],h=f[1],m=Object(p.g)();return console.log(t),Object(r.useEffect)((function(){t?(h(!0),d.a.get(x.a).then((function(e){e.data.status&&(h(!1),j(e.data.data))}))):(h(!0),d.a.post(x.b,{is_popular:1}).then((function(e){e.data.status&&(h(!1),j(e.data.data))})))}),[]),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{children:g?Object(i.jsx)("div",{style:{textAlign:"center"},children:Object(i.jsx)(o.a,{})}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{style:{display:"flex",flexDirection:"row",overflowX:"auto",width:"100%",background:"#e8e7e7ad",padding:"10px 0px"},children:Object(i.jsx)(s.a,{container:!0,children:l.map((function(e,t){return Object(i.jsx)(s.a,{item:!0,xs:6,sm:4,md:2,children:Object(i.jsx)(u,{data:e})},t)}))})}),!t&&Object(i.jsx)("div",{style:{textAlign:"center",margin:"0px 3px 0px 0px",paddingBottom:"10px"},children:Object(i.jsx)("span",{onClick:function(){m.push("/shop-by-items")},style:{textAlign:"center",border:"1px solid black",width:"fit-content",padding:"3px 100px",borderRadius:"6px",background:"#591a07",color:"white",textDecoration:"none"},children:"VIEW MORE"})})]})})})}},244:function(e,t,n){"use strict";n.r(t);var i=n(1),a=(n(0),n(118)),r=n(56),c={header:{background:"white",margin:0,borderBottom:"1px solid gray",borderTop:"1px solid gray",padding:"5px",textAlign:"center"}};t.default=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(r.a,{pagetitle:"Items Categorys"}),Object(i.jsxs)("div",{style:{marginTop:"55px"},children:[Object(i.jsx)("h3",{style:c.header,children:"SHOP BY ITEM CATEGORY "}),Object(i.jsx)(a.a,{all:!0})]})]})}},51:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"e",(function(){return o})),n.d(t,"k",(function(){return s})),n.d(t,"f",(function(){return l})),n.d(t,"m",(function(){return d})),n.d(t,"j",(function(){return x})),n.d(t,"l",(function(){return p})),n.d(t,"c",(function(){return u})),n.d(t,"g",(function(){return j})),n.d(t,"h",(function(){return b})),n.d(t,"a",(function(){return f})),n.d(t,"i",(function(){return g}));var i=function(){var e="http://localhost:9000/",t="http://localhost:9000/customer-app/";return"localhost"===window.location.hostname?(e="http://localhost:9000/",t="http://localhost:9000/customer-app/"):(e="http://192.168.43.77:9000/",t="http://192.168.43.77:9000/customer-app/"),{site_url:e,custumer_api:t}}(),a=(i.site_url,i.custumer_api),r=a+"get-products",c=a+"get-product-category",o=a+"get-product-qnt-options",s=a+"make-new-order",l=a+"get-products-by-category",d=a+"search-product-by-name",x=a+"get-users-details",p=a+"register-new-user",u=a+"get-product-details",j=a+"get-recipe-detail",b=a+"get-recipe-list",f=a+"get-all-product-category",g=a+"get-search-suggestion"},56:function(e,t,n){"use strict";var i=n(1),a=n(25),r=n(49),c=n(0),o=n.n(c),s=n(26),l=n(3),d=n(66),x=n.n(d),p=n(67),u=n.n(p),j=n(59),b=n.n(j),f=n(65),g=n.n(f),h=n(237),m=n(248),O=n(238),y=n(239),v=n(240),w=n(24),k=n(58),S=n(60),C=n(27),D=n(11);t.a=Object(l.h)((function(e){var t,n=e.pagetitle,l=Object(w.b)(),d=Object(r.a)(l,1)[0].basket,p=Object(C.b)(),j=Object(c.useState)(!1),f=Object(r.a)(j,2),z=f[0],_=f[1],I=Object(c.useState)(!1),E=Object(r.a)(I,2),W=E[0],R=E[1];return Object(c.useEffect)((function(){W&&(document.body.style.overflow="hidden"),W||(document.body.style.overflow="unset")}),[W]),Object(i.jsxs)(o.a.Fragment,{children:[Object(i.jsx)("div",{style:{},children:Object(i.jsxs)(h.a,{style:(t={display:"flex",backgroundColor:"#2f8a74",color:"white",width:"100%",position:"fixed",zIndex:99},Object(a.a)(t,"width","-webkit-fill-available"),Object(a.a)(t,"top",0),Object(a.a)(t,"borderRadius",0),t),children:[Object(i.jsx)("div",{children:n?Object(i.jsx)(m.a,{color:"inherit","aria-label":"Open drawer",onClick:function(){window.history.go("-1")},children:Object(i.jsx)(g.a,{})}):Object(i.jsx)(m.a,{onClick:function(){R(!0)},children:Object(i.jsx)(O.a,{children:Object(i.jsx)(x.a,{style:{color:"white"}})})})}),Object(i.jsxs)("div",{style:{flexDirection:"row",display:"flex",alignItems:"center"},children:[Object(i.jsx)("span",{children:Object(i.jsx)(s.b,{style:Object(a.a)({textDecoration:"none",fontSize:"20px",color:"white"},"textDecoration","none"),to:"/",children:n?n.length>15?"".concat(n.substring(0,10),"..."):n:"\u0b06\u0b2e \u0b2a\u0b30\u0b3f\u0b2c\u0b3e"})}),Object(i.jsx)("span",{style:{position:"absolute",right:0,margin:"9px 81px 0px 0px"},onClick:function(){_(!z)},children:Object(i.jsx)(b.a,{})}),Object(i.jsx)(s.b,{to:"/checkout",style:{color:"white",textDecoration:"none"},children:Object(i.jsxs)("div",{style:{display:"flex",alignItems:"center",marginLeft:"20px",right:0,position:"absolute",margin:"-11px 16px -1px"},children:[Object(i.jsx)(u.a,{}),Object(i.jsx)("span",{style:{fontSize:"13px",fontWeight:800,marginLeft:"10px",marginRight:"10px"},children:d.length})]})})]})]})}),Object(i.jsx)("div",{children:Object(i.jsx)(y.a,{open:W,anchor:"left",onClose:function(){R(!1)},children:Object(i.jsx)("div",{style:{width:"calc(100vw - 173px)",height:"-webkit-fill-available"},children:Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{style:{backgroundColor:"rgb(89, 26, 7)",height:"35px",width:"100%",marginBottom:"10px",display:"flex",alignItems:"center"},children:Object(i.jsx)("span",{style:{color:"white",fontSize:"20px",marginLeft:"10px"},children:"\u0b06\u0b2e \u0b2a\u0b30\u0b3f\u0b2c\u0b3e"})}),Object(i.jsxs)("div",{style:{padding:"5px"},children:[Object(i.jsx)(s.b,{onClick:function(){R(!1)},to:"/",style:{color:"black",textDecoration:"none",fontSize:"20px"},children:Object(i.jsx)("div",{style:{padding:"7px 4px",fontSize:"23px"},children:"Home"})}),Object(i.jsx)(v.a,{}),Object(i.jsx)(s.b,{onClick:function(){R(!1)},to:"/category",style:{color:"black",textDecoration:"none",fontSize:"20px"},children:Object(i.jsx)("div",{style:{padding:"7px 4px",fontSize:"23px"},children:"Category"})}),Object(i.jsx)(v.a,{})," ",Object(i.jsx)(s.b,{onClick:function(){R(!1)},to:"/login",style:{color:"black",textDecoration:"none",fontSize:"20px"},children:Object(i.jsx)("div",{style:{padding:"7px 4px",fontSize:"23px"},children:"Login"})}),Object(i.jsx)(v.a,{}),Object(i.jsx)("div",{onClick:function(){p(Object(S.b)()),localStorage.removeItem(D.b),R(!1)},style:{color:"black",textDecoration:"none",fontSize:"20px"},children:Object(i.jsx)("div",{style:{padding:"7px 4px",fontSize:"23px"},children:"logout"})})]})]})})})}),Object(i.jsx)(k.a,{openSearchDilog:z})]})}))},58:function(e,t,n){"use strict";var i=n(25),a=n(49),r=n(1),c=n(6),o=n(0),s=n.n(o),l=n(229),d=n(232),x=n(59),p=n.n(x),u=n(54),j=n.n(u),b=n(51),f=n(63),g=n.n(f),h=s.a.forwardRef((function(e,t){return Object(r.jsx)(l.a,Object(c.a)({direction:"up",ref:t},e))})),m=function(e){var t=e.item;return Object(r.jsxs)("li",{style:{padding:"10px 15px",display:"flex",alignItems:"center"},children:[Object(r.jsx)("span",{style:{marginLeft:"32px",color:"#5f5959",fontSize:"19px"},children:t.product_name}),Object(r.jsx)("button",{onClick:function(){t.product_name.replace(/ +/g,"");window.location.href="/search-results?id=".concat(t.product_category_id,"?name=").concat(t.product_name)},style:{position:"absolute",right:0,margin:"0px 10px 0px 0px",border:"none",background:"#ffb100",outline:"none",padding:"5px",width:"105px",borderRadius:"7px"},children:"SELECT"})]},t.product_id)};t.a=function(e){var t,n=e.openSearchDilog,c=(e.onSelectItems,Object(o.useState)(!0)),l=Object(a.a)(c,2),x=l[0],u=l[1],f=Object(o.useState)(""),O=Object(a.a)(f,2),y=O[0],v=O[1],w=Object(o.useState)([]),k=Object(a.a)(w,2),S=k[0],C=k[1],D=Object(o.useState)([]),z=Object(a.a)(D,2),_=z[0],I=z[1],E=function(){u(!1)};return Object(o.useEffect)((function(){y.length>0&&j.a.post(b.i,{product_name:y}).then((function(e){C(e.data.data.productSuggest),I(e.data.data.recipeSuggest)}))}),[y]),Object(o.useEffect)((function(){u(!x),console.log(x)}),[n]),Object(r.jsx)(s.a.Fragment,{children:Object(r.jsx)(d.a,{fullScreen:!0,open:x,onClose:E,TransitionComponent:h,children:Object(r.jsx)("div",{children:Object(r.jsx)("div",{style:{margin:"10px 10px",position:"absolute",width:"94%",background:"white",borderRadius:"10px",boxShadow:"rgba(0, 0, 0, 0.2) 0px 0px 0px 1px, rgba(0, 0, 0, 0.14) 0px 1px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px"},children:Object(r.jsxs)("div",{style:(t={display:"flex",borderRadius:"32px"},Object(i.a)(t,"display","flex"),Object(i.a)(t,"flexDirection","column"),Object(i.a)(t,"width","-webkit-fill-available"),Object(i.a)(t,"padding","10px"),t),children:[Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"row "},children:[Object(r.jsx)(p.a,{}),Object(r.jsx)("input",{type:"text",placeholder:"Type hear",autoFocus:!0,onChange:function(e){v(e.target.value)},value:y,style:{border:"none",outline:"none",fontSize:"18px",width:"100%"}}),Object(r.jsx)("span",{onClick:function(){E()},children:Object(r.jsx)(g.a,{})})]}),Object(r.jsxs)("ul",{style:{margin:0,padding:0,listStyle:"none",position:"relative"},children:[S.length>0&&y.length>0&&S.map((function(e){return Object(r.jsx)(m,{item:e})})),_.length>0&&y.length>0&&_.map((function(e){return Object(r.jsx)(m,{item:e})}))]})]})})})})})}},60:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var i=n(28),a=function(e){var t=e.is_loggedin,n=e.loggedin_as,a=e.user_info;return{type:i.b,payload:{is_loggedin:t,loggedin_as:n,user_info:a}}},r=function(){return{type:i.a,payload:{}}}},73:function(e,t,n){"use strict";var i=n(1),a=n(49),r=n(0),c=n(84),o=n.n(c),s=n(85),l=Object(s.autoPlay)(o.a);t.a=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),n=(t[0],t[1],Object(r.useState)(window.innerWidth)),c=Object(a.a)(n,2),o=c[0],s=c[1];function d(){s(window.innerWidth)}Object(r.useEffect)((function(){return window.addEventListener("resize",d),function(){window.removeEventListener("resize",d)}}),[]);var x=o<=650;return console.log(x),Object(i.jsx)(i.Fragment,{children:x&&Object(i.jsx)("div",{className:"hide-scroll-bar",style:{display:"flex",flexDirection:"row",overflowX:"auto",width:"100%",background:"#efefef",padding:"10px 0px"},children:Object(i.jsx)(l,{children:["amaparibaBanner.jpg","amaparibaBanner2.jpg","amaparibaBanner3.jpg","amaparibaBanner4.jpg"].map((function(e,t){return Object(i.jsx)("div",{style:{flexShrink:0,marginRight:"5px",marginLeft:"5px",width:"calc(100vw - 10px)",height:"100px",position:"relative",background:"white",borderRadius:"20px",border:"1px solid rgb(126 217 255)"},children:Object(i.jsx)("img",{src:e,style:{width:"calc(100vw - 10px)",height:"100px",borderRadius:"20px"}})},t)}))})})})}},88:function(e,t,n){"use strict";var i=n(2),a=n(48),r=n(0),c=(n(9),n(50)),o=n(52),s=n(57),l=44,d=r.forwardRef((function(e,t){var n=e.classes,o=e.className,d=e.color,x=void 0===d?"primary":d,p=e.disableShrink,u=void 0!==p&&p,j=e.size,b=void 0===j?40:j,f=e.style,g=e.thickness,h=void 0===g?3.6:g,m=e.value,O=void 0===m?0:m,y=e.variant,v=void 0===y?"indeterminate":y,w=Object(a.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),k={},S={},C={};if("determinate"===v||"static"===v){var D=2*Math.PI*((l-h)/2);k.strokeDasharray=D.toFixed(3),C["aria-valuenow"]=Math.round(O),k.strokeDashoffset="".concat(((100-O)/100*D).toFixed(3),"px"),S.transform="rotate(-90deg)"}return r.createElement("div",Object(i.a)({className:Object(c.a)(n.root,o,"inherit"!==x&&n["color".concat(Object(s.a)(x))],{determinate:n.determinate,indeterminate:n.indeterminate,static:n.static}[v]),style:Object(i.a)({width:b,height:b},S,f),ref:t,role:"progressbar"},C,w),r.createElement("svg",{className:n.svg,viewBox:"".concat(22," ").concat(22," ").concat(l," ").concat(l)},r.createElement("circle",{className:Object(c.a)(n.circle,u&&n.circleDisableShrink,{determinate:n.circleDeterminate,indeterminate:n.circleIndeterminate,static:n.circleStatic}[v]),style:k,cx:l,cy:l,r:(l-h)/2,fill:"none",strokeWidth:h})))}));t.a=Object(o.a)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},determinate:{transition:e.transitions.create("transform")},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},circleDeterminate:{transition:e.transitions.create("stroke-dashoffset")},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(d)}}]);
//# sourceMappingURL=10.35ca08e4.chunk.js.map