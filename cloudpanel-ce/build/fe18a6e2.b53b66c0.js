(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{170:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return i}));var a=n(1),r=(n(0),n(173)),c=n(174);const o={id:"cloud-features-digital-ocean",title:"Digital Ocean",sidebar_label:"Digital Ocean"},b={id:"cloud-features-digital-ocean",title:"Digital Ocean",description:"Access Token",source:"@site/docs/frontend-area-cloud-features-digital-ocean.md",permalink:"/docs/cloudpanel-ce/cloud-features-digital-ocean",editUrl:"https://github.com/cloudpanel-io/docs/tree/master/cloudpanel-ce/docs/frontend-area-cloud-features-digital-ocean.md",sidebar_label:"Digital Ocean",sidebar:"sidebar",previous:{title:"Amazon Web Services",permalink:"/docs/cloudpanel-ce/cloud-features-aws"},next:{title:"Google Cloud",permalink:"/docs/cloudpanel-ce/cloud-features-google-cloud"}},l=[{value:"Access Token",id:"access-token",children:[{value:"Create Access Token",id:"create-access-token",children:[]},{value:"Enter Access Token",id:"enter-access-token",children:[]}]},{value:"Droplet",id:"droplet",children:[]},{value:"Firewalls",id:"firewalls",children:[{value:"Adding a Rule",id:"adding-a-rule",children:[]},{value:"Deleting a Rule",id:"deleting-a-rule",children:[]}]},{value:"Domains",id:"domains",children:[{value:"New Domain",id:"new-domain",children:[]},{value:"Import Domain",id:"import-domain",children:[]},{value:"Adding a DNS Record",id:"adding-a-dns-record",children:[]},{value:"Deleting a DNS Record",id:"deleting-a-dns-record",children:[]}]},{value:"Snapshots",id:"snapshots",children:[{value:"Automatic Backups",id:"automatic-backups",children:[]},{value:"Manual Backups",id:"manual-backups",children:[]}]}],s={rightToc:l};function i({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"access-token"},"Access Token"),Object(r.b)("p",null,"To enable all ",Object(r.b)("strong",{parentName:"p"},"cloud functionalities"),", you need to enter an ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.digitalocean.com/docs/apis-clis/api/create-personal-access-token/"}),"Access Token"),",\nthat ",Object(r.b)("strong",{parentName:"p"},"CloudPanel")," can communicate with ",Object(r.b)("strong",{parentName:"p"},"Digital Ocean"),"."),Object(r.b)("h3",{id:"create-access-token"},"Create Access Token"),Object(r.b)("p",null,"To create an ",Object(r.b)("strong",{parentName:"p"},"Access Token")," do the following steps:"),Object(r.b)("p",null,"1) Login into your ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://cloud.digitalocean.com/login"}),"Digital Ocean")," account. ",Object(r.b)("br",null)),Object(r.b)("p",null,"2) Click in the left navigation on ",Object(r.b)("strong",{parentName:"p"},"API")," and click on button ",Object(r.b)("strong",{parentName:"p"},"Generate New Token"),"."),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/cloud_features/do/new_access_token.png")})," ",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("p",null,"3) Enter a ",Object(r.b)("strong",{parentName:"p"},"Token name")," and click on the button ",Object(r.b)("strong",{parentName:"p"},"Generate Token"),"."),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/cloud_features/do/generate_access_token.png")})," ",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("p",null,"Copy the ",Object(r.b)("strong",{parentName:"p"},"Access Token")," and enter it in ",Object(r.b)("strong",{parentName:"p"},"CloudPanel")," to enable all ",Object(r.b)("strong",{parentName:"p"},"cloud functionalities"),"."),Object(r.b)("h3",{id:"enter-access-token"},"Enter Access Token"),Object(r.b)("p",null,"To enter the ",Object(r.b)("strong",{parentName:"p"},"Access Token")," in ",Object(r.b)("strong",{parentName:"p"},"CloudPanel")," do the following:"),Object(r.b)("p",null,"1) Login into your ",Object(r.b)("strong",{parentName:"p"},"CloudPanel")," as ",Object(r.b)("strong",{parentName:"p"},"Admin")," and go to the ",Object(r.b)("strong",{parentName:"p"},"Admin Adrea"),"."),Object(r.b)("p",null,"2) Click on the left menu on the ",Object(r.b)("strong",{parentName:"p"},"Digital Ocean")," settings."),Object(r.b)("p",null,"Enter the ",Object(r.b)("strong",{parentName:"p"},"Access Token")," and click on the button ",Object(r.b)("strong",{parentName:"p"},"Save"),"."),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/cloud_features/do/enter_access_token.png")}),Object(r.b)("h2",{id:"droplet"},"Droplet"),Object(r.b)("p",null,"In the ",Object(r.b)("strong",{parentName:"p"},"Droplet")," area, you find information about your ",Object(r.b)("strong",{parentName:"p"},"Droplet")," like ",Object(r.b)("strong",{parentName:"p"},"Droplet Name"),", ",Object(r.b)("strong",{parentName:"p"},"Droplet ID"),",\n",Object(r.b)("strong",{parentName:"p"},"Region"),", ",Object(r.b)("strong",{parentName:"p"},"IPv4 Public IP")," and, ",Object(r.b)("strong",{parentName:"p"},"Floating IP"),"."),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/cloud_features/do/droplet.png")}),Object(r.b)("h2",{id:"firewalls"},"Firewalls"),Object(r.b)("p",null,"In this ",Object(r.b)("strong",{parentName:"p"},"Firewalls")," area, you see all assigned ",Object(r.b)("strong",{parentName:"p"},"Firewalls")," of your ",Object(r.b)("strong",{parentName:"p"},"Droplet"),".\nWith a click on a ",Object(r.b)("strong",{parentName:"p"},"Firewall"),", you can edit rules like adding IPs for SSH or other services."),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/cloud_features/do/firewalls.png")}),Object(r.b)("h3",{id:"adding-a-rule"},"Adding a Rule"),Object(r.b)("p",null,"To ",Object(r.b)("strong",{parentName:"p"},"Add a Rule")," click on the ",Object(r.b)("strong",{parentName:"p"},"Firewall")," and then on the button ",Object(r.b)("strong",{parentName:"p"},"Add Rule")," top right."),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/cloud_features/do/add_firewall_rule.png")})," ",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("p",null,"Select a ",Object(r.b)("strong",{parentName:"p"},"Rule Type")," from a list and select the ",Object(r.b)("strong",{parentName:"p"},"Source"),", which should have access to the service."),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/cloud_features/do/new_firewall_rule.png")}),Object(r.b)("h3",{id:"deleting-a-rule"},"Deleting a Rule"),Object(r.b)("p",null,"On the ",Object(r.b)("strong",{parentName:"p"},"Firewall")," overview site you can delete a rule by clicking on the button ",Object(r.b)("strong",{parentName:"p"},"Delete"),"."),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/cloud_features/do/delete_firewall_rule.png")}),Object(r.b)("h2",{id:"domains"},"Domains"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Digital Ocean's")," ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.digitalocean.com/docs/networking/dns/"}),"Domains")," are basically ",Object(r.b)("strong",{parentName:"p"},"Hosted DNS Zones")," where you can manage the ",Object(r.b)("strong",{parentName:"p"},"DNS Records"),"."),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"DNS Records")," of a domain can be managed via ",Object(r.b)("strong",{parentName:"p"},"Digital Ocean's")," control panel or via ",Object(r.b)("strong",{parentName:"p"},"CloudPanel"),"."),Object(r.b)("h3",{id:"new-domain"},"New Domain"),Object(r.b)("p",null,"To add a ",Object(r.b)("strong",{parentName:"p"},"New Domain"),", click on the button top right on ",Object(r.b)("strong",{parentName:"p"},"New Domain"),"."),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/cloud_features/do/new_domain_1.png")})," ",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("p",null,"Enter the ",Object(r.b)("strong",{parentName:"p"},"Domain Name")," and click on ",Object(r.b)("strong",{parentName:"p"},"Add Domain")," to create a ",Object(r.b)("strong",{parentName:"p"},"New Domain")," for managing ",Object(r.b)("strong",{parentName:"p"},"DNS Records"),"."),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/cloud_features/do/new_domain_2.png")}),Object(r.b)("h3",{id:"import-domain"},"Import Domain"),Object(r.b)("p",null,"If you already have an existing ",Object(r.b)("strong",{parentName:"p"},"Domain")," in your ",Object(r.b)("strong",{parentName:"p"},"Digital Ocean")," account,\nand if you want to manage the ",Object(r.b)("strong",{parentName:"p"},"DNS Records")," via ",Object(r.b)("strong",{parentName:"p"},"CloudPanel"),", you can import the ",Object(r.b)("strong",{parentName:"p"},"Domain"),"."),Object(r.b)("p",null,"To import an existing ",Object(r.b)("strong",{parentName:"p"},"Domain"),", click on the button top right on ",Object(r.b)("strong",{parentName:"p"},"Import Domain"),"."),Object(r.b)("p",null,"Enter the ",Object(r.b)("strong",{parentName:"p"},"Domain Name")," and click on the button ",Object(r.b)("strong",{parentName:"p"},"Import Domain")," to import the ",Object(r.b)("strong",{parentName:"p"},"Domain")," including all ",Object(r.b)("strong",{parentName:"p"},"DNS Records"),"."),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/cloud_features/do/import_domain.png")}),Object(r.b)("h3",{id:"adding-a-dns-record"},"Adding a DNS Record"),Object(r.b)("p",null,"To add a ",Object(r.b)("strong",{parentName:"p"},"DNS Record"),", click on your ",Object(r.b)("strong",{parentName:"p"},"Domain")," and click on the button ",Object(r.b)("strong",{parentName:"p"},"Add Record")," top right."),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/cloud_features/do/add_dns_record_1.png")})," ",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("p",null,"Select the ",Object(r.b)("strong",{parentName:"p"},"Type"),", enter the ",Object(r.b)("strong",{parentName:"p"},"Name"),", ",Object(r.b)("strong",{parentName:"p"},"Value"),", and select the ",Object(r.b)("strong",{parentName:"p"},"TTL")," before clicking on the button ",Object(r.b)("strong",{parentName:"p"},"Add Record"),"."),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/cloud_features/do/add_dns_record_2.png")}),Object(r.b)("h3",{id:"deleting-a-dns-record"},"Deleting a DNS Record"),Object(r.b)("p",null,"To delete a ",Object(r.b)("strong",{parentName:"p"},"DNS Record"),", click on your ",Object(r.b)("strong",{parentName:"p"},"Domain")," and click on the button ",Object(r.b)("strong",{parentName:"p"},"Delete"),"."),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/cloud_features/do/delete_dns_record.png")}),Object(r.b)("h2",{id:"snapshots"},"Snapshots"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.digitalocean.com/docs/images/snapshots/"}),"Snapshots")," are on-demand disk images of ",Object(r.b)("strong",{parentName:"p"},"DigitalOcean Droplets"),"\nand volumes saved to your ",Object(r.b)("strong",{parentName:"p"},"Digital Ocean")," account. "),Object(r.b)("h3",{id:"automatic-backups"},"Automatic Backups"),Object(r.b)("p",null,"We use ",Object(r.b)("strong",{parentName:"p"},"Snapshots")," to backup the entire ",Object(r.b)("strong",{parentName:"p"},"Droplet"),", including all ",Object(r.b)("strong",{parentName:"p"},"Volumes"),".\nAll ",Object(r.b)("strong",{parentName:"p"},"Snapshots")," are done incrementally, which means the first ",Object(r.b)("strong",{parentName:"p"},"Snapshot")," is a full backup, and all further ",Object(r.b)("strong",{parentName:"p"},"Snapshots")," contain the data differences."),Object(r.b)("p",null,"To enable ",Object(r.b)("strong",{parentName:"p"},"Automatic Backups")," do the following:"),Object(r.b)("p",null,"1) Login into your ",Object(r.b)("strong",{parentName:"p"},"CloudPanel")," as ",Object(r.b)("strong",{parentName:"p"},"Admin")," and go to the ",Object(r.b)("strong",{parentName:"p"},"Admin Adrea"),"."),Object(r.b)("p",null,"2) Click on the left menu on the ",Object(r.b)("strong",{parentName:"p"},"Digital Ocean")," settings."),Object(r.b)("p",null,"Set ",Object(r.b)("strong",{parentName:"p"},"Automatic Backups")," to ",Object(r.b)("strong",{parentName:"p"},"Yes")," and select the ",Object(r.b)("strong",{parentName:"p"},"Backup Frequency")," and ",Object(r.b)("strong",{parentName:"p"},"Backup Retention Period"),"."),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/cloud_features/do/automatic_backup_settings.png")})," ",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("p",null,"With the following configuration, two ",Object(r.b)("strong",{parentName:"p"},"Snapshots")," will be created per day and held for seven days, 14 ",Object(r.b)("strong",{parentName:"p"},"Snapshots")," in total."),Object(r.b)("h3",{id:"manual-backups"},"Manual Backups"),Object(r.b)("p",null,"Often you want to do a ",Object(r.b)("strong",{parentName:"p"},"Backup")," before releasing a new version or feature of your application."),Object(r.b)("p",null,"To create a ",Object(r.b)("strong",{parentName:"p"},"Backup"),", click on the tab ",Object(r.b)("strong",{parentName:"p"},"Snapshots")," and then on the button ",Object(r.b)("strong",{parentName:"p"},"Create Snapshot")," top right."),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/cloud_features/do/create_manual_snapshot_1.png")})," ",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("p",null,"Enter the ",Object(r.b)("strong",{parentName:"p"},"Name")," of your ",Object(r.b)("strong",{parentName:"p"},"Snapshot")," and click on the button ",Object(r.b)("strong",{parentName:"p"},"Create Snapshot"),".  ",Object(r.b)("br",null),"\n",Object(r.b)("strong",{parentName:"p"},"Digital Ocean")," will immediately start creating a ",Object(r.b)("strong",{parentName:"p"},"Snapshot")," of your ",Object(r.b)("strong",{parentName:"p"},"Droplet"),"."),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/cloud_features/do/create_manual_snapshot_2.png")}))}i.isMDXComponent=!0},172:function(e,t,n){"use strict";var a=n(0),r=n(35);t.a=function(){return Object(a.useContext)(r.a)}},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),i=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):b({},t,{},e)),n},p=function(e){var t=i(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=i(n),u=a,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||c;return n?r.a.createElement(m,b({ref:t},s,{components:n})):r.a.createElement(m,b({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=u;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:a,o[1]=b;for(var s=2;s<c;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(172);function r(e){const{siteConfig:t}=Object(a.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}}}]);