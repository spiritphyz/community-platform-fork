import{j as e}from"./jsx-runtime-CexXSJP5.js";import{r as v}from"./index-BP8_t0zE.js";import{s as C}from"./contact-DD4r1-LP.js";import{M as V}from"./MemberBadge-BQcPvDsK.js";import{L as k}from"./components-CyP20DXM.js";import{F as r,a as i,c as q,T as s,B as w,I}from"./theme-ui-components.esm-Cq1N8tMa.js";const g=n=>{const[a,t]=v.useState(!1),{comment:o,isLoggedIn:l,isReply:d,maxLength:m,onSubmit:u,isLoading:c}=n,p=n.userProfileType||"member",g=n.placeholder||"Leave your questions or feedback...",x=n.buttonLabel??"Leave a comment",h=({parentNode:e,value:a})=>{e.dataset.replicatedValue=a,null==n||n.onChange(a)},y=o.length>0||a;return e.jsx(r,{sx:{flexDirection:"column"},children:e.jsxs(r,{"data-target":"create-comment-container",sx:{gap:2},children:[e.jsx(i,{sx:{lineHeight:0,display:["none","block"],flexShrink:0},children:e.jsx(V,{profileType:p,useLowDetailVersion:!0})}),e.jsxs(i,{sx:{display:"block",background:"white",flex:1,marginLeft:[0,3],borderRadius:1,position:"relative",width:"min-content","&:before":{display:["none","block"],content:'""',position:"absolute",borderWidth:"1em 1em",borderStyle:"solid",borderColor:"transparent white transparent transparent",margin:".5em -2em"}},children:[!l&&e.jsx(S,{}),l&&e.jsxs(r,{sx:{flexDirection:"column"},children:[e.jsx(i,{className:"grow-wrap "+(y?"value-set":""),children:e.jsx(q,{value:o,maxLength:m,onChange:e=>{h&&h(e.target)},"aria-label":"Comment","data-cy":d?"reply-form":"comments-form",placeholder:g,rows:1,onFocus:()=>t(!0),onBlur:()=>t(!1)})}),e.jsxs(s,{sx:{fontSize:1,display:y?"flex":"none",alignSelf:"flex-end",padding:2},children:[o.length,"/",m]})]})]}),e.jsx(r,{sx:{alignSelf:"flex-end",height:["40px","52px"],width:["40px","auto"]},children:e.jsxs(w,{"data-cy":d?"reply-submit":"comment-submit","data-testid":"send-comment-button",disabled:!o.trim()||!l||c,variant:"primary",onClick:()=>{!c&&u(o)},sx:{height:["40px","100%"],width:["40px","auto"],padding:[0,1]},children:[c&&"Loading...",!c&&e.jsxs(e.Fragment,{children:[e.jsx(s,{sx:{display:["none","block"]},children:x}),e.jsx(I,{src:C,sx:{display:["block","none"],width:"22px",margin:"auto"}})]})]})})]})})},S=()=>e.jsx(i,{sx:{padding:[3,4]},children:e.jsx(s,{"data-cy":"comments-login-prompt",children:e.jsx(k,{to:"/sign-in",style:{textDecoration:"underline",color:"inherit"},children:"Hi there! Login to leave a comment"})})});try{g.displayName="CreateComment",g.__docgenInfo={description:"",displayName:"CreateComment",props:{maxLength:{defaultValue:null,description:"",name:"maxLength",required:!0,type:{name:"number"}},isLoggedIn:{defaultValue:null,description:"",name:"isLoggedIn",required:!0,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},isReply:{defaultValue:null,description:"",name:"isReply",required:!1,type:{name:"boolean"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(value: string) => void"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string) => void"}},comment:{defaultValue:null,description:"",name:"comment",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},userProfileType:{defaultValue:null,description:"",name:"userProfileType",required:!1,type:{name:"enum",value:[{value:'"member"'},{value:'"space"'},{value:'"workspace"'},{value:'"machine-builder"'},{value:'"community-builder"'},{value:'"collection-point"'}]}},buttonLabel:{defaultValue:null,description:"",name:"buttonLabel",required:!1,type:{name:"string"}}}}}catch{}export{g as C};