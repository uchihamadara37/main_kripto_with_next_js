(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[539],{4593:(e,t,l)=>{Promise.resolve().then(l.bind(l,1466))},1466:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>I});var a=l(7988),r=l(4107),s=l(3745),n=l(7880),o=l(5207),i=l(6461);function c(e){let{label:t,placeholder:l,onChange:r,value:s,className:n}=e;return n+=" grid w-full max-w-full items-center gap-2 mt-4",(0,a.jsxs)("div",{className:n,children:[(0,a.jsx)(i.J,{htmlFor:"email",children:t}),(0,a.jsx)(o.p,{type:"text",id:"",className:"w-full",placeholder:l||"type your key",value:s,onChange:r})]})}var d=l(2558);let u=n.forwardRef((e,t)=>{let{className:l,...r}=e;return(0,a.jsx)("textarea",{className:(0,d.cn)("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",l),ref:t,...r})});u.displayName="Textarea";let m=(0,n.forwardRef)((e,t)=>{let{label:l,placeholder:r,onChange:s,value:o,readonly:c=!1}=e;return(0,n.useEffect)(()=>(console.log("TextareaWithLabel mounted"),()=>console.log("TextareaWithLabel unmounted")),[]),(0,a.jsxs)("div",{className:"grid w-full gap-2 mt-4",children:[(0,a.jsx)(i.J,{htmlFor:"message",className:"text-base",children:l}),(0,a.jsx)(u,{readOnly:c,className:"h-96 text-base",placeholder:r||"Type your message",id:"message",value:o,onChange:s,onFocus:()=>{console.log("Textarea focused")},onBlur:()=>{console.log("Textarea blurred")}})]})});var f=l(2937);let g=(e,t)=>{let l="";t=t.toUpperCase();for(let a=0,r=0;a<e.length;a++){let s=e.charCodeAt(a);s>=65&&s<=90?(l+=String.fromCharCode((s-65+(t.charCodeAt(r%t.length)-65))%26+65),r++):s>=97&&s<=122?(l+=String.fromCharCode((s-97+(t.charCodeAt(r%t.length)-65))%26+97),r++):l+=e.charAt(a)}return l},x=(e,t)=>{let l="";t=t.toUpperCase();for(let a=0,r=0;a<e.length;a++){let s=e.charCodeAt(a);s>=65&&s<=90?(l+=String.fromCharCode((s-65-(t.charCodeAt(r%t.length)-65)+26)%26+65),r++):s>=97&&s<=122?(l+=String.fromCharCode((s-97-(t.charCodeAt(r%t.length)-65)+26)%26+97),r++):l+=e.charAt(a)}return l},h=e=>{let{}=e,[t,l]=(0,n.useState)(""),[r,o]=(0,n.useState)(""),[i,d]=(0,n.useState)(""),[u,h]=(0,n.useState)(""),p=(0,n.useCallback)(()=>{if(!t||!r||!i){alert("Please fill in all fields");return}let e=g(t,r);h((0,f.B)(e,i))},[t,r,i]),b=(0,n.useCallback)(()=>{if(!u||!r||!i){alert("Please fill in all fields");return}l(x((0,f.L)(u,i),r))},[u,r,i]);return(0,a.jsxs)("div",{className:"flex flex-wrap sm:flex-nowrap sm:flex-col md:flex-row gap-4",children:[(0,a.jsxs)("div",{className:"w-full md:w-1/3 bg-card text-card-foreground p-6 rounded-lg shadow",children:[(0,a.jsx)("h2",{className:"text-2xl font-bold mb-4 text-cyan-500",children:"Input Text Message"}),(0,a.jsx)("p",{className:"text-lg",children:"Please insert the message you want to encrypt here..."}),(0,a.jsx)("div",{className:"absolute flex justify-between mt-[25rem] ",children:(0,a.jsx)("button",{title:"Copy now",className:"ml-2",onClick:()=>{t&&navigator.clipboard.writeText(t).then(()=>{console.log("Text copied to clipboard:",t)}).catch(e=>{console.error("Failed to copy text: ",e)})},children:(0,a.jsx)("img",{src:"/copy.png",alt:"..."})})}),(0,a.jsx)(m,{label:"Your message",value:t,onChange:e=>l(e.target.value)})]}),(0,a.jsx)("div",{className:"w-full md:w-1/3 bg-card text-card-foreground p-6 rounded-lg shadow",children:(0,a.jsxs)("div",{className:"h-full flex flex-col justify-center",children:[(0,a.jsx)(c,{label:"Insert Vigenere Key",value:r,onChange:e=>o(e.target.value)}),(0,a.jsx)(c,{label:"Insert Your AES key",value:i,onChange:e=>d(e.target.value)}),(0,a.jsxs)("div",{className:"flex justify-center items-center gap-3",children:[(0,a.jsx)(s.$,{className:(0,s.r)({variant:"destructive",size:"default",className:"bg-green-500 mt-3"}),onClick:p,children:"Encrypt Now"}),(0,a.jsx)(s.$,{className:(0,s.r)({variant:"destructive",size:"default",className:"bg-blue-500 mt-3"}),onClick:b,children:"Decrypt Now"})]}),(0,a.jsx)("div",{className:"flex justify-center mt-4",children:(0,a.jsx)(s.$,{className:(0,s.r)({variant:"outline",size:"default",className:"text-primary mt-3"}),onClick:()=>{o(""),h(""),d(""),l("")},children:"Clear all fields"})})]})}),(0,a.jsxs)("div",{className:"w-full md:w-1/3 bg-card text-card-foreground p-6 rounded-lg shadow",children:[(0,a.jsx)("h2",{className:"text-2xl font-bold mb-4 text-green-500",children:"Message Result"}),(0,a.jsx)("p",{className:"text-lg",children:"Please insert your chipper text in here if you want to decrypt message."}),(0,a.jsx)("div",{className:"absolute flex justify-between mt-[25rem] ",children:(0,a.jsx)("button",{title:"Copy now",className:"ml-2",onClick:()=>{u&&navigator.clipboard.writeText(u).then(()=>{}).catch(e=>{console.error("Failed to copy text: ",e)})},children:(0,a.jsx)("img",{src:"/copy.png",alt:"..."})})}),(0,a.jsx)(m,{label:"Your chipperText message",value:u,onChange:e=>h(e.target.value)})]})]})};var p=l(4314),b=l(961),v=l(6650);function y(){let[e,t]=(0,n.useState)(""),[l,r]=(0,n.useState)(""),[u,m]=(0,n.useState)(""),[f,g]=(0,n.useState)(null),[x,h]=(0,n.useState)(null),[y,j]=(0,n.useState)(null),[N,w]=(0,n.useState)(""),[C,k]=(0,n.useState)(!1),[S,E]=(0,n.useState)(null),[R,I]=(0,n.useState)(null);(0,n.useEffect)(()=>{console.log("Hasil file",x)},[x]),(0,n.useEffect)(()=>{console.log("Hasil file2",y)},[y]);let L=(0,n.useCallback)(async e=>{if(!x||!l){alert("pelase fill the file and key input");return}if(x&&l){k(!0),E(null);try{console.log(x),console.log("mulai encode");let e=await (0,p.oL)(x,l);console.log("hasil string : ",e),t(e)}catch(e){E(e instanceof Error?e.message:"Failed to process file"),console.error(e)}finally{k(!1),j(null)}}},[l,x]),U=(0,n.useCallback)(async t=>{if(k(!0),u&&e)try{console.log(y),console.log("mulai dekripsi");let t=await (0,p.It)(e,u);console.log(t),g(t)}catch(e){E(e instanceof Error?e.message:"Failed to process file")}finally{k(!1),m("")}else{alert("pelase fill the file and key input"),k(!1);return}},[u,y]),D=t=>{if(console.log("mulai nyoba download "),e)try{let t=prompt("Masukkan nama file:","tabel_export.xlsx");if(!t)return;console.log("string yang diunduh : ",e);let l=(0,p.Hg)(e,t.endsWith(".xlsx")?t:"".concat(t,".xlsx"));(0,p.vj)(l)}catch(e){console.error("Encrypt and download error:",e)}},A=async e=>{if(e.target.files&&e.target.files[0]){let l=e.target.files[0];if(console.log(l),l.name.endsWith(".xlsx")){if(j(l),l){let e=await (0,p.Po)(l);t(e),console.log("hasil dari file2 string : ",e)}else console.log("file2 masih undefined")}else alert("File tidak valid. Harus berformat .xlsx (Excel)")}},F=e=>{if(console.log("mulai nyoba download 2"),f)try{let e=prompt("Masukkan nama file:","tabel_export.xlsx");if(!e)return;(0,p.iu)(f,u,e.endsWith(".xlsx")?e:"".concat(e,".xlsx"))}catch(e){console.error("Decrypt and download error:",e)}},T=(0,n.useCallback)(e=>{console.log("refresh text dan hasil dekrip"),t(""),g(null)},[e,f]);return(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("h1",{className:"text-3xl font-semibold text-center mb-7",children:"Encrypt File Excel (.xlsx)"}),(0,a.jsxs)("div",{className:" flex flex-col lg:flex-row p-4 gap-5",children:[(0,a.jsxs)("div",{className:"flex-none w-[30rem]",children:[(0,a.jsx)(i.J,{className:"text-lg",children:"Select file.xlsx from local"}),(0,a.jsx)(o.p,{type:"file",onChange:e=>{e.target.files&&e.target.files[0]&&(h(e.target.files[0]),E(null))},disabled:C,className:"mb-4 mt-2"}),(0,a.jsx)(c,{label:"Insert the key",className:"mb-2",value:l,onChange:e=>r(e.target.value)}),(0,a.jsx)(i.J,{className:(0,d.cn)("mt-3"),children:"Start encrypt"}),(0,a.jsx)("div",{className:"mt-1",children:(0,a.jsx)(s.$,{variant:"default",className:"",onClick:e=>L(e),children:"Encrypt"})})]}),(0,a.jsxs)("div",{className:"flex-initial w-1/3",children:[e&&(0,a.jsx)("div",{className:"flex ",children:(0,a.jsx)(s.$,{className:"",onClick:e=>D(e),children:"Download Encrypted PDF"})}),e&&(0,a.jsxs)(b.Fc,{variant:"destructive",className:"border-green-400 text-green-500 [&>svg]:text-green-500 mt-5",children:[(0,a.jsx)(v.A,{className:"h-4 w-4"}),(0,a.jsx)(b.XL,{children:"Heads up!"}),(0,a.jsx)(b.TN,{children:"Your encrypted file is ready!"})]}),(0,a.jsx)("div",{className:"flex mt-5 justify-start",children:e&&(0,a.jsx)(s.$,{className:"border-2 bg-green-600",onClick:e=>T(e),children:"Refresh Any Result"})}),f&&(0,a.jsx)("div",{className:"flex mt-5 justify-end ",children:(0,a.jsx)(s.$,{className:"bg-blue-500",onClick:e=>F(e),children:"Download Original PDF"})})]}),(0,a.jsxs)("div",{className:"flex-none w-[30rem] lg:pl-10",children:[!e&&(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)(i.J,{className:"text-lg",children:"Select file.xlsx had already encrypted before from local"}),(0,a.jsx)(o.p,{type:"file",onChange:A,disabled:C,className:"mb-4 mt-2"})]}),(0,a.jsx)(c,{label:"Insert the key",className:"mb-2",value:u,onChange:e=>m(e.target.value)}),(0,a.jsx)(i.J,{className:(0,d.cn)("mt-3"),children:"Start encrypt"}),(0,a.jsx)("div",{className:"mt-1",children:(0,a.jsx)(s.$,{variant:"default",className:"",onClick:e=>U(e),children:"Decrypt"})})]})]})]})}let j=(0,n.forwardRef)(function(e,t){let{label:l,onChange:r,accept:s="image/*",maxSize:c,boolPreview:d=!0}=e,[u,m]=(0,n.useState)(null);return(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:"grid w-full items-center gap-3 mt-4",children:[(0,a.jsx)(i.J,{htmlFor:"picture",children:l}),(0,a.jsx)(o.p,{className:"",id:"picture",type:"file",ref:t,onChange:e=>{var t;let l=(null===(t=e.target.files)||void 0===t?void 0:t[0])||null;if(l){if(c&&l.size>c){alert("Image size is so big!, select another image"),console.log("ukurannya ",l.size," max : ",c);return}m(URL.createObjectURL(l)),r&&r(l)}else m(null)},accept:s}),u&&d&&(0,a.jsx)("div",{className:" w-full flex flex-col items-center",children:(0,a.jsx)("img",{src:u,alt:"Preview",className:"max-w-xs rounded-lg shadow"})})]})})});var N=l(8529);function w(e,t){let l="";for(let t=0;t<32;t++)l+=1&e.data[4*t];let a=parseInt(l,2),r="";for(let t=0;t<a;t++){let l=t+32;r+=1&e.data[4*l]}let s=(k(r,t).match(/.{1,8}/g)||[]).map(e=>String.fromCharCode(parseInt(e,2))).join(""),n=new ImageData(new Uint8ClampedArray(e.data),e.width,e.height);for(let e=0;e<n.data.length;e+=4)n.data[e]&=254;return{encryptedImage:e,originalImage:n,plaintext:s}}function C(e){return e.split("").map(e=>e.charCodeAt(0).toString(2).padStart(8,"0")).join("")}function k(e,t){let l=C(t),a="";for(let t=0;t<e.length;t++){let r=l[t%l.length];a+=e[t]===r?"0":"1"}return a}async function S(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"encrypted-image.png";try{let l=await new Promise(t=>{let l=document.createElement("canvas");l.width=e.width,l.height=e.height;let a=l.getContext("2d");a&&(a.putImageData(e,0,0),l.toBlob(e=>{e&&t(e)},"image/png",1))}),a=URL.createObjectURL(l),r=document.createElement("a");r.href=a,r.download=t,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(a)}catch(e){throw console.error("Error downloading image:",e),e}}let E=e=>{let{setStegaEText:t,stegaEText:l}=e;return(0,a.jsx)(c,{label:"Embedded Message",onChange:e=>t(e.target.value),placeholder:"type something..",value:l})},R=e=>{let{}=e,[t,l]=(0,n.useState)(""),[r,o]=(0,n.useState)(null),[i,d]=(0,n.useState)(null),[u,m]=(0,n.useState)(""),[f,g]=(0,n.useState)(null),[x,h]=(0,n.useState)(!1),[p,b]=(0,n.useState)(!1),[v,y]=(0,n.useState)(""),[R,I]=(0,n.useState)(""),[L,U]=(0,n.useState)(null),[D,A]=(0,n.useState)(null),F=(0,n.useRef)(null),[T,P]=(0,n.useState)(null),[O,$]=(0,n.useState)(null),[z,_]=(0,n.useState)(null);function B(e){return new Promise((t,l)=>{let a=new FileReader;a.onload=e=>{var a;let r=new Image;r.onload=()=>{let e=document.createElement("canvas");e.width=r.width,e.height=r.height;let a=e.getContext("2d");if(!a){l(Error("Failed to get canvas 2D context"));return}a.drawImage(r,0,0),t(a.getImageData(0,0,r.width,r.height))},r.onerror=()=>{l(Error("Failed to load image"))},(null===(a=e.target)||void 0===a?void 0:a.result)&&(r.src=e.target.result)},a.onerror=()=>{l(Error("Failed to read file"))},a.readAsDataURL(e)})}let M=async e=>{try{if(null!=e){let t=await B(e);console.log("ImageData:",t),o(t)}}catch(e){console.error("Error converting file to ImageData:",e)}},J=async e=>{try{if(null!=e){let t=await B(e);console.log("ImageData:",t),d(t)}}catch(e){console.error("Error converting file to ImageData:",e)}},H=(0,n.useCallback)(async()=>{if(t&&null!=r&&u){if(r){h(!0),b(!0);try{let{encryptedImage:e}=function(e,t,l){let a=new ImageData(new Uint8ClampedArray(l.data),l.width,l.height),r=k(C(e),t),s=r.length.toString(2).padStart(32,"0");for(let e=0;e<32;e++){let t=parseInt(s[e]);a.data[4*e]=254&a.data[4*e]|t}let n=32;for(let e=0;e<r.length;e++){let t=parseInt(r[e]);a.data[4*n]=254&a.data[4*n]|t,n++}return{encryptedImage:a}}(t,u,r);g(e),console.log("berhasil enkrip text+gambar")}catch(e){console.error("Error embedding text into image:",e)}finally{h(!1),b(!1)}}return}console.log("No text embedded"),alert("Please insert an embedded text")},[t,r,u]),Y=(0,n.useCallback)(()=>{if(null!=f&&null!=i||v){console.log("decryp via text"),h(!0),b(!0);try{if(null!=f&&null==i){let{encryptedImage:e,originalImage:t,plaintext:l}=w(f,v);l&&(I(l),console.log("berhasil decrypt",l)),t&&(U(t),console.log("gambar ori",t))}else if(null==f&&null!=i){let{encryptedImage:e,originalImage:t,plaintext:l}=w(i,v);l&&(I(l),console.log("berhasil decrypt",l)),t&&(U(t),console.log("gambar ori",t))}}catch(e){console.error("Error extracted text into image:",e)}finally{h(!1),b(!1)}}else{console.log("No image selected"),alert("Please insert key and Object Image you want to decrypt");return}},[v,f]);return(0,n.useEffect)(()=>{if(!f){P(null);return}let e=document.createElement("canvas");e.width=f.width,e.height=f.height;let t=e.getContext("2d");if(t)return t.putImageData(f,0,0),e.toBlob(e=>{e&&P(URL.createObjectURL(e))},"image/jpeg",.8),()=>{T&&URL.revokeObjectURL(T)}},[f]),(0,n.useEffect)(()=>{if(!L){$(null);return}let e=document.createElement("canvas");e.width=L.width,e.height=L.height;let t=e.getContext("2d");if(t)return t.putImageData(L,0,0),e.toBlob(e=>{e&&$(URL.createObjectURL(e))},"image/jpeg",.8),()=>{O&&URL.revokeObjectURL(O)}},[L]),(0,a.jsxs)("div",{className:"flex flex-wrap sm:flex-nowrap sm:flex-col md:flex-row gap-4",children:[(0,a.jsxs)("div",{className:"w-full md:w-1/3 bg-card text-card-foreground p-6 rounded-lg shadow",children:[(0,a.jsx)("h2",{className:"text-2xl font-bold mb-4 text-primary text-center lg:text-start",children:"Text and Image Encrypt (Steganography)"}),(0,a.jsx)("p",{className:"text-base font-semibold text-green-600 mt-10",children:"Embedded Message"}),(0,a.jsx)(E,{setStegaEText:l,stegaEText:t}),(0,a.jsx)("p",{className:"text-base font-semibold mt-10 text-blue-500",children:"Cover Object"}),(0,a.jsx)(j,{label:"Choose an Image (Max 10 Mb)",accept:"image/*",maxSize:0xa00000,onChange:M}),(0,a.jsx)(c,{className:"pt-10",label:"Insert Key",value:u,onChange:e=>m(e.target.value)}),(0,a.jsx)(s.$,{className:(0,s.r)({variant:"destructive",size:"default",className:"bg-green-500 mt-3"}),onClick:H,disabled:x,children:"Encrypt Now"})]}),(0,a.jsx)("div",{className:"w-full md:w-1/3 bg-card text-card-foreground p-6 rounded-lg shadow",children:(0,a.jsxs)("div",{className:"h-full flex flex-col justify-center",children:[(0,a.jsx)("p",{className:"text-center mb-3 text-lg font-semibold",children:f?"Image Result":"Open Image to Decrypt"}),T?(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("img",{alt:"Result",src:T,className:"w-full h-auto rounded-md"}),(0,a.jsxs)("div",{className:"flex flex-row justify-between mt-4",children:[(0,a.jsx)(s.$,{variant:"outline",className:"",onClick:()=>{f&&S(f)},children:"Download Encrypted Image"}),(0,a.jsx)(s.$,{variant:"default",onClick:()=>{g(null),y(""),I(""),U(null)},children:"Clear this result!"})]})]}):(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)(j,{label:"Input Image to Decrypt (Max 30 Mb)",accept:"image/*",maxSize:0x1e00000,onChange:J,boolPreview:null!=i}),null!=i&&(0,a.jsx)("div",{className:"flex flex-col justify-end mt-4",children:(0,a.jsx)(s.$,{variant:"default",onClick:()=>{d(null),y(""),I(""),U(null)},children:"Clear this Image!"})})]}),(0,a.jsx)("canvas",{ref:F,style:{display:"none"}}),(0,a.jsx)(N.lG,{open:p,onOpenChange:b,children:(0,a.jsxs)(N.Cf,{className:"sm:max-w-[425px]",children:[(0,a.jsxs)(N.c7,{children:[(0,a.jsx)(N.L3,{children:"Edit profile"}),(0,a.jsx)(N.rr,{children:"Make changes to your profile here. Click save when you're done."})]}),(0,a.jsxs)("div",{className:"grid gap-4 py-4",children:[(0,a.jsx)("div",{className:"grid grid-cols-4 items-center gap-4",children:"oi"}),(0,a.jsx)("div",{className:"grid grid-cols-4 items-center gap-4",children:"oi"})]}),(0,a.jsx)(N.Es,{children:(0,a.jsx)(s.$,{type:"submit",children:"Save changes"})})]})})]})}),(0,a.jsxs)("div",{className:"w-full md:w-1/3 bg-card text-card-foreground p-6 rounded-lg shadow",children:[(0,a.jsx)("h2",{className:"text-2xl font-bold mb-4 text-primary text-center lg:text-start",children:"Steganography Decryption"}),(0,a.jsx)(c,{className:"pt-10",label:"Insert Key",value:v,onChange:e=>y(e.target.value)}),(0,a.jsx)(s.$,{className:(0,s.r)({variant:"destructive",size:"default",className:"bg-blue-500 mt-3"}),onClick:Y,disabled:x,children:"Decrypt Now"}),(0,a.jsx)("p",{className:"text-lg font-semibold mt-10 text-green-500",children:"Decryption Result"}),(0,a.jsxs)("div",{className:"",children:[R&&(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("p",{className:"mt-3 font-semibold",children:"Plain Text"}),(0,a.jsx)("p",{className:"mt-1",children:R})]}),O?(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("p",{className:"mt-7 font-semibold mb-3",children:"Cover Image"}),(0,a.jsx)("img",{alt:"Result",src:O,className:"w-full h-auto rounded-md"})]}):(0,a.jsx)("p",{children:"There is no result or Image"})]})]})]})};function I(){let[e,t]=(0,n.useState)("text");return(0,a.jsxs)("div",{className:"min-h-screen flex flex-col",children:[(0,a.jsx)("nav",{className:"bg-primary p-4",children:(0,a.jsxs)("div",{className:"container mx-auto flex justify-between items-center",children:[(0,a.jsx)(r.default,{href:"/",className:"text-2xl font-bold text-primary-foreground",children:"Alfiander_ShadcnUI"}),(0,a.jsxs)("div",{className:"space-x-4",children:[(0,a.jsx)(s.$,{onClick:()=>t("text"),className:(0,s.r)({variant:"outline",className:"text"===e?"bg-slate-100 text-slate-800":"bg-slate-900 text-slate-50"}),children:"Text"}),(0,a.jsx)(s.$,{onClick:()=>t("image"),variant:"outline",className:(0,s.r)({variant:"outline",className:"image"===e?"bg-slate-100 text-slate-800":"bg-slate-900 text-slate-50"}),children:"Image"}),(0,a.jsx)(s.$,{onClick:()=>t("file"),variant:"outline",className:(0,s.r)({variant:"outline",className:"file"===e?"bg-slate-100 text-slate-800":"bg-slate-900 text-slate-50"}),children:"File"})]})]})}),(0,a.jsx)("main",{className:"flex-grow container mx-auto py-8",children:(()=>{switch(e){case"text":default:return(0,a.jsx)(h,{});case"image":return(0,a.jsx)(R,{});case"file":return(0,a.jsx)(y,{})}})()})]})}},2937:(e,t,l)=>{"use strict";l.d(t,{B:()=>s,L:()=>n});var a=l(1063),r=l(7411).Buffer;function s(e,t){try{if(t.length<32)for(let e=t.length;e<32;e++)t+="&";else t.length>32&&(t=t.slice(0,32));let l=(0,a.createCipheriv)("aes-256-gcm",t,"000000001110"),r=l.update(e,"utf8","base64");r+=l.final("base64");let s=l.getAuthTag();return r+"."+s.toString("base64")}catch(e){throw Error("Encryption failed: ".concat(e.message))}}function n(e,t){try{if(t.length<32)for(let e=t.length;e<32;e++)t+="&";else t.length>32&&(t=t.slice(0,32));console.log(t);let[l,s]=e.split("."),n=(0,a.createDecipheriv)("aes-256-gcm",t,"000000001110");n.setAuthTag(new Uint8Array(r.from(s,"base64")));let o=n.update(l,"base64","utf8");return o+=n.final("utf8")}catch(e){return alert("Dekripsi gagal"),""}}},961:(e,t,l)=>{"use strict";l.d(t,{Fc:()=>i,TN:()=>d,XL:()=>c});var a=l(7988),r=l(7880),s=l(824),n=l(2558);let o=(0,s.F)("relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),i=r.forwardRef((e,t)=>{let{className:l,variant:r,...s}=e;return(0,a.jsx)("div",{ref:t,role:"alert",className:(0,n.cn)(o({variant:r}),l),...s})});i.displayName="Alert";let c=r.forwardRef((e,t)=>{let{className:l,...r}=e;return(0,a.jsx)("h5",{ref:t,className:(0,n.cn)("mb-1 font-medium leading-none tracking-tight",l),...r})});c.displayName="AlertTitle";let d=r.forwardRef((e,t)=>{let{className:l,...r}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("text-sm [&_p]:leading-relaxed",l),...r})});d.displayName="AlertDescription"},3745:(e,t,l)=>{"use strict";l.d(t,{$:()=>c,r:()=>i});var a=l(7988),r=l(7880),s=l(7142),n=l(824),o=l(2558);let i=(0,n.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),c=r.forwardRef((e,t)=>{let{className:l,variant:r,size:n,asChild:c=!1,...d}=e,u=c?s.DX:"button";return(0,a.jsx)(u,{className:(0,o.cn)(i({variant:r,size:n,className:l})),ref:t,...d})});c.displayName="Button"},8529:(e,t,l)=>{"use strict";l.d(t,{Cf:()=>u,Es:()=>f,L3:()=>g,c7:()=>m,lG:()=>i,rr:()=>x});var a=l(7988),r=l(7880),s=l(4972),n=l(1018),o=l(2558);let i=s.bL;s.l9;let c=s.ZL;s.bm;let d=r.forwardRef((e,t)=>{let{className:l,...r}=e;return(0,a.jsx)(s.hJ,{ref:t,className:(0,o.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",l),...r})});d.displayName=s.hJ.displayName;let u=r.forwardRef((e,t)=>{let{className:l,children:r,...i}=e;return(0,a.jsxs)(c,{children:[(0,a.jsx)(d,{}),(0,a.jsxs)(s.UC,{ref:t,className:(0,o.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",l),...i,children:[r,(0,a.jsxs)(s.bm,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,a.jsx)(n.A,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});u.displayName=s.UC.displayName;let m=e=>{let{className:t,...l}=e;return(0,a.jsx)("div",{className:(0,o.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...l})};m.displayName="DialogHeader";let f=e=>{let{className:t,...l}=e;return(0,a.jsx)("div",{className:(0,o.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...l})};f.displayName="DialogFooter";let g=r.forwardRef((e,t)=>{let{className:l,...r}=e;return(0,a.jsx)(s.hE,{ref:t,className:(0,o.cn)("text-lg font-semibold leading-none tracking-tight",l),...r})});g.displayName=s.hE.displayName;let x=r.forwardRef((e,t)=>{let{className:l,...r}=e;return(0,a.jsx)(s.VY,{ref:t,className:(0,o.cn)("text-sm text-muted-foreground",l),...r})});x.displayName=s.VY.displayName},5207:(e,t,l)=>{"use strict";l.d(t,{p:()=>n});var a=l(7988),r=l(7880),s=l(2558);let n=r.forwardRef((e,t)=>{let{className:l,type:r,...n}=e;return(0,a.jsx)("input",{type:r,className:(0,s.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",l),ref:t,...n})});n.displayName="Input"},6461:(e,t,l)=>{"use strict";l.d(t,{J:()=>c});var a=l(7988),r=l(7880),s=l(1685),n=l(824),o=l(2558);let i=(0,n.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=r.forwardRef((e,t)=>{let{className:l,...r}=e;return(0,a.jsx)(s.b,{ref:t,className:(0,o.cn)(i(),l),...r})});c.displayName=s.b.displayName},4314:(e,t,l)=>{"use strict";l.d(t,{Hg:()=>i,It:()=>s,Po:()=>c,iu:()=>n,oL:()=>r,vj:()=>o});var a=l(2937);function r(e,t){return new Promise((l,r)=>{let s=new FileReader;s.onload=e=>{try{var s;let r=null===(s=e.target)||void 0===s?void 0:s.result;if(!r)throw Error("File reading failed");let n=new Uint8Array(r),o=btoa(n.reduce((e,t)=>e+String.fromCharCode(t),""));if(t.length<32)for(let e=t.length;e<32;e++)t+="&";else t.length>32&&(t=t.slice(0,32));console.log("base64 content : ",o);let i=(0,a.B)(o,t);l(i)}catch(e){r(e)}},s.onerror=e=>{r(e)},s.readAsArrayBuffer(e)})}function s(e,t){return new Promise((l,r)=>{try{if(t.length<32)for(let e=t.length;e<32;e++)t+="&";else t.length>32&&(t=t.slice(0,32));let s=(0,a.L)(e,t);if(console.log("base64 content hasil dekrip : ",s),!s)return r();let n=atob(s),o=Array(n.length);for(let e=0;e<n.length;e++)o[e]=n.charCodeAt(e);let i=new Uint8Array(o),c=new Blob([i],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});l(c)}catch(e){r()}})}async function n(e,t,l){try{let t=document.createElement("a");t.href=URL.createObjectURL(e),t.download=l,document.body.appendChild(t),t.click(),document.body.removeChild(t),URL.revokeObjectURL(t.href)}catch(e){console.error("Dekripsi dan download error:",e)}}function o(e){let t=URL.createObjectURL(e),l=document.createElement("a");l.href=t,l.download=e.name,document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(t)}function i(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"file.txt",l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"application/pdf";return new File([e],t,{type:l})}function c(e){return new Promise((t,l)=>{let a=new FileReader;a.onload=e=>{var a;let r=null===(a=e.target)||void 0===a?void 0:a.result;"string"==typeof r?t(r):l(Error("Failed to convert file to string"))},a.onerror=()=>{l(Error("Error reading file"))},a.readAsText(e)})}},2558:(e,t,l)=>{"use strict";l.d(t,{cn:()=>s});var a=l(8857),r=l(4927);function s(){for(var e=arguments.length,t=Array(e),l=0;l<e;l++)t[l]=arguments[l];return(0,r.QP)((0,a.$)(t))}}},e=>{var t=t=>e(e.s=t);e.O(0,[455,210,703,411,450,107,855,531,358],()=>t(4593)),_N_E=e.O()}]);