import{j as t}from"./jsx-runtime-CexXSJP5.js";import{C as p}from"./CardButton-DqlKyyLu.js";import{C as c}from"./CardProfile-Cg5Iwssm.js";import{I as m}from"./InternalLink-DHSMbK1G.js";import{a as u}from"./theme-ui-components.esm-Cq1N8tMa.js";const d=e=>{const{item:i,onPinClick:a,isSelectedPin:d,viewport:n}=e,r="CardListItem"+(d?"-selected":""),s=t.jsx(p,{isSelected:d,children:t.jsx(c,{item:i})}),o={"data-cy":r,"data-testid":r,sx:{borderRadius:2,padding:2}};return"mobile"===n?t.jsx(m,{target:"_blank",to:`/u/${i._id}`,...o,children:s}):t.jsx(u,{"data-cy":r,"data-testid":r,onClick:()=>a(i),sx:{borderRadius:2,padding:2},children:s})};try{d.displayName="CardListItem",d.__docgenInfo={description:"",displayName:"CardListItem",props:{item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"IMapPin"}},isSelectedPin:{defaultValue:null,description:"",name:"isSelectedPin",required:!0,type:{name:"boolean"}},onPinClick:{defaultValue:null,description:"",name:"onPinClick",required:!0,type:{name:"(arg: IMapPin) => void"}},viewport:{defaultValue:null,description:"",name:"viewport",required:!0,type:{name:"string"}}}}}catch{}export{d as C};