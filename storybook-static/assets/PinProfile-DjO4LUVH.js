import{j as i}from"./jsx-runtime-CexXSJP5.js";import{B as l}from"./Button-BkkHuhhg.js";import{B as d}from"./ButtonIcon-C1HictEz.js";import{C as m}from"./CardButton-DqlKyyLu.js";import{C as p}from"./CardProfile-Cg5Iwssm.js";import{I as c}from"./InternalLink-DHSMbK1G.js";import{a as o,F as x}from"./theme-ui-components.esm-Cq1N8tMa.js";const s=e=>{const{item:s,onClose:n}=e,{creator:t}=s,r=(null==t?void 0:t.profileType)&&"member"!==(null==t?void 0:t.profileType);return i.jsxs(m,{sx:{"&:hover":"none"},"data-cy":"PinProfile",children:[i.jsx(o,{sx:{position:"absolute",right:0},children:i.jsx(o,{sx:{float:"right",marginTop:1,marginRight:"8px"},children:i.jsx(d,{"data-cy":"PinProfileCloseButton",icon:"close",onClick:()=>n(),sx:{borderWidth:0,height:"auto"}})})}),i.jsxs(o,{sx:{width:"100%",height:"100%",zIndex:2},children:[i.jsx(p,{item:s,isLink:!0}),r&&!1!==(null==t?void 0:t.isContactableByPublic)&&i.jsx(x,{sx:{justifyContent:"flex-end"},children:i.jsx(c,{to:`/u/${null==t?void 0:t._id}#contact`,"data-cy":"PinProfileMessageLink",target:"_blank",children:i.jsx(l,{icon:"contact",sx:{margin:1},small:!0,children:"Send Message"})})})]})]})};try{s.displayName="PinProfile",s.__docgenInfo={description:"",displayName:"PinProfile",props:{item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"IMapPin"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}export{s as P};