import{j as r}from"./jsx-runtime-CexXSJP5.js";import{I as l}from"./Icon-kurJjUQ2.js";import{B as s}from"./Button-Cxq2M3_J.js";import{L as c}from"./components-B4bBPZFA.js";import{a as m,T as p,F as o}from"./theme-ui-components.esm-D5Q63Fx1.js";const u=({text:e,link:t})=>t?r.jsx(c,{to:t,children:r.jsx(s,{type:"button",variant:"breadcrumb",children:e})}):r.jsx(s,{type:"button",variant:"breadcrumb",children:e}),n=({text:e,link:t,isLast:s})=>r.jsx(m,{style:{display:"inline-flex",marginRight:"3px"},"data-testid":"breadcrumbsItem","data-cy":"breadcrumbsItem",children:s?r.jsx(p,{sx:{display:"block",color:"black",fontSize:15,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",width:[100,"100%"]},children:e}):r.jsx(u,{link:t,text:e})});try{n.displayName="BreadcrumbItem",n.__docgenInfo={description:"",displayName:"BreadcrumbItem",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"string"}},isLast:{defaultValue:null,description:"",name:"isLast",required:!0,type:{name:"boolean"}}}}}catch{}const d=({steps:e})=>r.jsx(o,{sx:{marginLeft:-1,marginTop:[2,2,7],marginBottom:2,padding:0,alignItems:"center"},children:e.map(((t,s)=>{const a=s===e.length-1;return r.jsxs(o,{sx:{alignItems:"center"},children:[r.jsx(n,{text:t.text,link:t.link,isLast:a}),!a&&r.jsx(l,{glyph:"chevron-right",color:"black",marginRight:"8px","data-testid":"breadcrumbsChevron"})]},s)}))});try{d.displayName="Breadcrumbs",d.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{steps:{defaultValue:null,description:"",name:"steps",required:!0,type:{name:"Step[]"}}}}}catch{}export{d as B};