import{j as t}from"./jsx-runtime-CexXSJP5.js";import{r as i}from"./index-BP8_t0zE.js";import{B as d}from"./Button-Cxq2M3_J.js";import{T as c}from"./Tooltip-B29JjCvL.js";import{u as f}from"./emotion-element-43c6fea0.browser.esm-B3fc_abn.js";import{u as m}from"./index-DDbH4maQ.js";import{T as a}from"./theme-ui-components.esm-D5Q63Fx1.js";const r=e=>{const s=f(),o=m(),[r,n]=i.useState();return t.jsxs(t.Fragment,{children:[t.jsxs(d,{type:"button","data-tip":e.isLoggedIn?"":"Login to add your vote","data-cy":e.isLoggedIn?"vote-useful":"vote-useful-redirect",onClick:()=>e.isLoggedIn?(async()=>{n(!0);try{await e.onUsefulClick()}catch{}n(!1)})():o("/sign-in"),disabled:r,sx:{fontSize:2,backgroundColor:s.colors.white,py:0,"&:hover":{backgroundColor:s.colors.softblue},...e.sx},icon:e.hasUserVotedUseful?"star":"star-active",children:[t.jsx(a,{pr:2,py:2,sx:{display:"inline-block"},children:e.votedUsefulCount}),t.jsx(a,{pl:2,py:2,sx:{display:"inline-block",borderLeft:`1px solid ${s.colors.black}`},children:e.hasUserVotedUseful?"Marked as useful":"Mark as useful"})]}),t.jsx(c,{})]})};try{r.displayName="UsefulStatsButton",r.__docgenInfo={description:"",displayName:"UsefulStatsButton",props:{hasUserVotedUseful:{defaultValue:null,description:"",name:"hasUserVotedUseful",required:!0,type:{name:"boolean"}},votedUsefulCount:{defaultValue:null,description:"",name:"votedUsefulCount",required:!0,type:{name:"number | undefined"}},isLoggedIn:{defaultValue:null,description:"",name:"isLoggedIn",required:!0,type:{name:"boolean"}},onUsefulClick:{defaultValue:null,description:"",name:"onUsefulClick",required:!0,type:{name:"() => Promise<void>"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"ThemeUIStyleObject"}}}}}catch{}export{r as U};