(()=>{var e={};e.id=893,e.ids=[893],e.modules={7356:e=>{function r(e){var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}r.keys=()=>[],r.resolve=r,r.id=7356,e.exports=r},846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},9428:e=>{"use strict";e.exports=require("buffer")},5511:e=>{"use strict";e.exports=require("crypto")},4735:e=>{"use strict";e.exports=require("events")},1645:e=>{"use strict";e.exports=require("net")},9771:e=>{"use strict";e.exports=require("process")},7910:e=>{"use strict";e.exports=require("stream")},1204:e=>{"use strict";e.exports=require("string_decoder")},6136:e=>{"use strict";e.exports=require("timers")},4631:e=>{"use strict";e.exports=require("tls")},9551:e=>{"use strict";e.exports=require("url")},8354:e=>{"use strict";e.exports=require("util")},4075:e=>{"use strict";e.exports=require("zlib")},2793:(e,r,t)=>{"use strict";t.r(r),t.d(r,{patchFetch:()=>m,routeModule:()=>c,serverHooks:()=>x,workAsyncStorage:()=>l,workUnitAsyncStorage:()=>d});var s={};t.r(s),t.d(s,{GET:()=>p});var i=t(615),o=t(9088),u=t(7439),a=t(8838),n=t(1739);async function p(e,{params:r}){try{let{email:e}=await r,t=await (0,n.e)({query:"SELECT * FROM user WHERE email = ?",values:[e]});return a.NextResponse.json({data:t})}catch(e){return a.NextResponse.json({error:e.message},{status:500})}}let c=new i.AppRouteRouteModule({definition:{kind:o.RouteKind.APP_ROUTE,page:"/api/email/[email]/route",pathname:"/api/email/[email]",filename:"route",bundlePath:"app/api/email/[email]/route"},resolvedPagePath:"D:\\next_js_kriptografi\\app\\api\\email\\[email]\\route.js",nextConfigOutput:"",userland:s}),{workAsyncStorage:l,workUnitAsyncStorage:d,serverHooks:x}=c;function m(){return(0,u.patchFetch)({workAsyncStorage:l,workUnitAsyncStorage:d})}},4868:()=>{},7076:()=>{},1739:(e,r,t)=>{"use strict";t.d(r,{e:()=>i});let s=t(6851).createPool({host:process.env.MYSQL_HOST,user:process.env.MYSQL_USER,password:process.env.MYSQL_PASSWORD,database:process.env.MYSQL_DATABASE,waitForConnections:!0,connectionLimit:10,queueLimit:0});async function i({query:e,values:r=[]}){try{let[t]=await s.execute(e,r);return t}catch(e){throw console.log("Error mase : ",e),Error(e.message)}}}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[439,304],()=>t(2793));module.exports=s})();