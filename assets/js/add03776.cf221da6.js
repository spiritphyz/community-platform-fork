"use strict";(self.webpackChunkoa_docs=self.webpackChunkoa_docs||[]).push([[325],{2237:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(4848),i=n(8453);const r={id:"dataMigration",title:"Automated Backup and Migration"},o=void 0,s={id:"Server Maintenance/dataMigration",title:"Automated Backup and Migration",description:"The platform consists of many interacting components, including local cache and server databases, frontend code, backend code and serverless functions, and cloud file storage.",source:"@site/docs/Server Maintenance/data-migration.md",sourceDirName:"Server Maintenance",slug:"/Server Maintenance/dataMigration",permalink:"/Server Maintenance/dataMigration",draft:!1,unlisted:!1,editUrl:"https://github.com/ONEARMY/community-platform/edit/master/packages/documentation/docs/Server Maintenance/data-migration.md",tags:[],version:"current",frontMatter:{id:"dataMigration",title:"Automated Backup and Migration"},sidebar:"mainSidebar",previous:{title:"Deployment via CircleCI",permalink:"/Deployment/circle-ci"},next:{title:"Manual Backups",permalink:"/Server Maintenance/manualBackups"}},c={},d=[];function l(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"The platform consists of many interacting components, including local cache and server databases, frontend code, backend code and serverless functions, and cloud file storage."}),"\n",(0,a.jsx)(t.p,{children:"From time to time (such as ahead of large updates), it might be useful to migrate all data to a In order to fully ensure major updates aren't breaking, a full preview deployment is a useful way to check for legacy or unexpected issues."}),"\n",(0,a.jsx)(t.p,{children:"Currently this can be done in a semi-automated way using a script in the scripts folder to take a copy of the production site database and copy it to a preview site."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"cd scripts\nts-node ./maintenance/resetStagingSite.ts\n"})}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:"This script requires access to a service worker with specific permissions for source and target projects, and intermediate storage buckets."})}),"\n",(0,a.jsxs)(t.p,{children:["For more information about the script and known limitations see the source code at ",(0,a.jsx)(t.a,{href:"https://github.com/ONEARMY/community-platform/blob/master/scripts/maintenance/resetStagingSite.ts",children:"scripts/maintenance/resetStagingSite.ts"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["The script is currently run weekly via the github action, see the source code at ",(0,a.jsx)(t.a,{href:"https://github.com/ONEARMY/community-platform/blob/master/.github/workflows/reset-staging-site.yml",children:".github/workflows/reset-staging-site.yml"}),")"]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var a=n(6540);const i={},r=a.createContext(i);function o(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);