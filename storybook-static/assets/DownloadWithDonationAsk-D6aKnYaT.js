import{j as n}from"./jsx-runtime-CexXSJP5.js";import{r as u}from"./index-BP8_t0zE.js";import{D as w}from"./DonationRequestModal-CxTYtfwL.js";import{D as x}from"./DownloadButton-CisodYYa.js";import{D as L}from"./DownloadStaticFile-DwX4I5oN.js";const m=e=>{const{body:i,iframeSrc:l,imageURL:a,handleClick:o,fileDownloadCount:t,fileLink:r,files:d}=e,[s,m]=u.useState(!1),[f,p]=u.useState(""),c=()=>m(!s),D=null==d?void 0:d.filter((e=>null!==e&&"downloadUrl"in e));return n.jsxs(n.Fragment,{children:[n.jsx(w,{body:i,callback:()=>{o(),c()},iframeSrc:l,imageURL:a,isOpen:s,link:f,onDidDismiss:()=>c()}),n.jsxs(n.Fragment,{children:[r&&n.jsx(x,{fileDownloadCount:t,isLoggedIn:!0,onClick:()=>{p(r),c()}}),D&&D.map(((e,i)=>n.jsx(L,{file:e,handleClick:()=>{p(e.downloadUrl),c()},fileDownloadCount:t,isLoggedIn:!0},e?e.name:`file-${i}`)))]})]})};try{m.displayName="DownloadWithDonationAsk",m.__docgenInfo={description:"",displayName:"DownloadWithDonationAsk",props:{body:{defaultValue:null,description:"",name:"body",required:!0,type:{name:"string"}},handleClick:{defaultValue:null,description:"",name:"handleClick",required:!0,type:{name:"() => Promise<void>"}},iframeSrc:{defaultValue:null,description:"",name:"iframeSrc",required:!0,type:{name:"string"}},imageURL:{defaultValue:null,description:"",name:"imageURL",required:!0,type:{name:"string"}},fileDownloadCount:{defaultValue:null,description:"",name:"fileDownloadCount",required:!0,type:{name:"number"}},fileLink:{defaultValue:null,description:"",name:"fileLink",required:!1,type:{name:"string"}},files:{defaultValue:null,description:"",name:"files",required:!1,type:{name:"(IUploadedFileMeta | File | null)[]"}}}}}catch{}export{m as D};