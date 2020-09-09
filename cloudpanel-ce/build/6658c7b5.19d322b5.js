(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var a=n(1),r=(n(0),n(173)),c=n(174);const l={id:"installation-google-cloud",title:"Google Cloud",sidebar_label:"Google Cloud"},o={id:"installation-google-cloud",title:"Google Cloud",description:"On this page, we explain step by step how to run CloudPanel on the Google Cloud.",source:"@site/docs/getting-started-installation-google-cloud.md",permalink:"/docs/cloudpanel-ce/installation-google-cloud",editUrl:"https://github.com/cloudpanel-io/docs/tree/master/cloudpanel-ce/docs/getting-started-installation-google-cloud.md",sidebar_label:"Google Cloud",sidebar:"sidebar",previous:{title:"Digital Ocean Installer",permalink:"/docs/cloudpanel-ce/installation-digital-ocean-installer"},next:{title:"Microsoft Azure",permalink:"/docs/cloudpanel-ce/installation-microsoft-azure"}},i=[{value:"Launching a VM Instance",id:"launching-a-vm-instance",children:[{value:"Name and Region",id:"name-and-region",children:[]},{value:"Machine Configuration",id:"machine-configuration",children:[]},{value:"Boot Disk",id:"boot-disk",children:[]},{value:"Firewall",id:"firewall",children:[]},{value:"Networking",id:"networking",children:[]},{value:"Create",id:"create",children:[]}]},{value:"Firewall Rules",id:"firewall-rules",children:[]},{value:"CloudPanel Installation",id:"cloudpanel-installation",children:[{value:"SSH Login",id:"ssh-login",children:[]},{value:"Installer",id:"installer",children:[]}]},{value:"Access CloudPanel",id:"access-cloudpanel",children:[]}],b={rightToc:i};function s({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"On this page, we explain step by step how to run ",Object(r.b)("strong",{parentName:"p"},"CloudPanel")," on the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://cloud.google.com"}),"Google Cloud"),"."),Object(r.b)("h2",{id:"launching-a-vm-instance"},"Launching a VM Instance"),Object(r.b)("p",null,"1) Login into the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://console.cloud.google.com/"}),"Google Cloud Console"),"."),Object(r.b)("p",null,"2) Click in the left navigation on ",Object(r.b)("strong",{parentName:"p"},"Compute Engine")," --\x3e ",Object(r.b)("strong",{parentName:"p"},"VM instances")," and click on the button ",Object(r.b)("strong",{parentName:"p"},"Create"),"."),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/getting_started/gce_installation/vm_instance.png")}),Object(r.b)("h3",{id:"name-and-region"},"Name and Region"),Object(r.b)("p",null,"Enter the ",Object(r.b)("strong",{parentName:"p"},"Name")," of the instance and select a ",Object(r.b)("strong",{parentName:"p"},"Region")," to deploy."),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/getting_started/gce_installation/vm_name_region.png")}),Object(r.b)("h3",{id:"machine-configuration"},"Machine Configuration"),Object(r.b)("p",null,"Select the ",Object(r.b)("strong",{parentName:"p"},"Machine Family"),", ",Object(r.b)("strong",{parentName:"p"},"Series")," and ",Object(r.b)("strong",{parentName:"p"},"Machine Type"),"."),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/getting_started/gce_installation/machine_configuration.png")}),Object(r.b)("h3",{id:"boot-disk"},"Boot Disk"),Object(r.b)("p",null,"Use ",Object(r.b)("strong",{parentName:"p"},"Debian 10 (Buster)")," as ",Object(r.b)("strong",{parentName:"p"},"Boot disk")," image."),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/getting_started/gce_installation/boot_disk_image.png")}),Object(r.b)("h3",{id:"firewall"},"Firewall"),Object(r.b)("p",null,"1) Allow ",Object(r.b)("strong",{parentName:"p"},"HTTP")," and ",Object(r.b)("strong",{parentName:"p"},"HTTPS")," Traffic."),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/getting_started/gce_installation/allow_http_https_traffic.png")})," ",Object(r.b)("br",null)," ",Object(r.b)("br",null),Object(r.b)("p",null,"2) Click on ",Object(r.b)("strong",{parentName:"p"},"Management, security, disks, networking, sole tenancy")," to continue with the next step."),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/getting_started/gce_installation/management_security_disk_settings.png")})," ",Object(r.b)("br",null)," ",Object(r.b)("br",null),Object(r.b)("p",null,"3) Click on the tab ",Object(r.b)("strong",{parentName:"p"},"Security")," and enter your ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://cloud.google.com/compute/docs/instances/adding-removing-ssh-keys#createsshkeys"}),"Public SSH Key"),"."),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/getting_started/gce_installation/public_ssh_key.png")}),Object(r.b)("h3",{id:"networking"},"Networking"),Object(r.b)("p",null,"In the ",Object(r.b)("strong",{parentName:"p"},"Networking")," section we will add a ",Object(r.b)("strong",{parentName:"p"},"Network Tag")," and create a ",Object(r.b)("strong",{parentName:"p"},"Static IP Address")," for our instance."),Object(r.b)("p",null,"1) In the field ",Object(r.b)("strong",{parentName:"p"},"Network tags")," add the tag: ",Object(r.b)("strong",{parentName:"p"},"cloudpanel"),". ",Object(r.b)("br",null),"\nThe ",Object(r.b)("strong",{parentName:"p"},"Network Tag")," is needed for assigning ",Object(r.b)("strong",{parentName:"p"},"Firewall Rules")," to our instance."),Object(r.b)("p",null,"2) In the ",Object(r.b)("strong",{parentName:"p"},"Network interface")," settings click on ",Object(r.b)("strong",{parentName:"p"},"External IP")," --\x3e ",Object(r.b)("strong",{parentName:"p"},"Create IP address")," to create a static IP address."),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/getting_started/gce_installation/networking_network_tag_static_ip_address.png")})," ",Object(r.b)("br",null)," ",Object(r.b)("br",null),Object(r.b)("h3",{id:"create"},"Create"),Object(r.b)("p",null,"Click on the button ",Object(r.b)("strong",{parentName:"p"},"Create")," to launch the ",Object(r.b)("strong",{parentName:"p"},"VM Instance"),"."),Object(r.b)("h2",{id:"firewall-rules"},"Firewall Rules"),Object(r.b)("p",null,"For accessing the ",Object(r.b)("strong",{parentName:"p"},"CloudPanel")," later, we need to create a ",Object(r.b)("strong",{parentName:"p"},"Firewall Rule"),"."),Object(r.b)("p",null,"1) Click in the left navigation on ",Object(r.b)("strong",{parentName:"p"},"Networking")," -> ",Object(r.b)("strong",{parentName:"p"},"VPC Network")," -> ",Object(r.b)("strong",{parentName:"p"},"Firewall"),"."),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/getting_started/gce_installation/vpc_network_firewall_rules.png?v=1")})," ",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("p",null,"2) Click on the button ",Object(r.b)("strong",{parentName:"p"},"CREATE FIREWALL RULE")," and create the following rule:"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Name:")," allow-cloudpanel ",Object(r.b)("br",null),"\n",Object(r.b)("strong",{parentName:"p"},"Targets:")," Specified target tags ",Object(r.b)("br",null),"\n",Object(r.b)("strong",{parentName:"p"},"Target tags:")," cloudpanel ",Object(r.b)("br",null),"\n",Object(r.b)("strong",{parentName:"p"},"Source filter:")," IP ranges ",Object(r.b)("br",null),"\n",Object(r.b)("strong",{parentName:"p"},"Source IP ranges:")," 0.0.0.0/0 or ",Object(r.b)("strong",{parentName:"p"},"your IP")," if you have a fixed IP ",Object(r.b)("br",null),"\n",Object(r.b)("strong",{parentName:"p"},"Protocols and ports:")," tcp: 8443 ",Object(r.b)("br",null)),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/getting_started/gce_installation/cloudpanel_firewall_rule.png")}),Object(r.b)("h2",{id:"cloudpanel-installation"},"CloudPanel Installation"),Object(r.b)("h3",{id:"ssh-login"},"SSH Login"),Object(r.b)("p",null,"For installing ",Object(r.b)("strong",{parentName:"p"},"CloudPanel"),", we first need to login with ",Object(r.b)("strong",{parentName:"p"},"SSH"),". ",Object(r.b)("br",null)),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"ssh -i path_to_your_private_key username@staticIpAddress\n")),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"username")," can be found at the end of your ",Object(r.b)("strong",{parentName:"p"},"Public SSH Key"),". ",Object(r.b)("br",null),"\nIn the following example, the ",Object(r.b)("strong",{parentName:"p"},"username")," would be ",Object(r.b)("strong",{parentName:"p"},"john"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDjC22YtN9qsN/F1piw5FHtG3RqXjHhI5CdHIpmN\npQ1LeXRmODsfzv4pntYeGw0dfBFidlmxujNLyd8FMZ8Yida5zcciWkLvqAAkTlwCAWNg/kdJI0R4B\nwuSgYUjxgOU5LPYkm4MixSOvC+jI27Ge0nKMiqUaJoSrYfNJqraMNuikNrwQn+I7w3var2aebhQtR\n77Lx1dHoAF/pP9DIFYfzFZ7CsQc8pBXj3 john@macbook\n")),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Do not use the username ",Object(r.b)("strong",{parentName:"p"},"cloudpanel")," as it's a reserved one."))),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"static IP Address")," can be found on the VM instances overview, it's called ",Object(r.b)("strong",{parentName:"p"},"External IP"),"."),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/getting_started/gce_installation/static_ip.png")})," ",Object(r.b)("br",null)," ",Object(r.b)("br",null),Object(r.b)("h3",{id:"installer"},"Installer"),Object(r.b)("p",null,"Before running the installer, we need to switch the user to ",Object(r.b)("strong",{parentName:"p"},"root")," to install the required packages."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo su root\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"apt update && apt -y install curl wget sudo\n")),Object(r.b)("p",null,"To start the ",Object(r.b)("strong",{parentName:"p"},"CloudPanel")," installation, execute the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"curl -sSL https://installer.cloudpanel.io/ce/v1/install.sh | sudo CLOUD=gce bash\n")),Object(r.b)("h2",{id:"access-cloudpanel"},"Access CloudPanel"),Object(r.b)("p",null,"You can now access the CloudPanel via Browser: ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",Object(a.a)({parentName:"strong"},{href:"https://yourStaticIpAddress:8443"}),"https://yourStaticIpAddress:8443"))),Object(r.b)("img",{class:"border",src:Object(c.a)("img/v1/getting_started/ignore_self_signed_certificate.png")}),Object(r.b)("p",null,"Ignore the self-signed certificate warning and click on ",Object(r.b)("strong",{parentName:"p"},"Advanced")," and ",Object(r.b)("strong",{parentName:"p"},"Proceed")," to continue to CloudPanel."))}s.isMDXComponent=!0},172:function(e,t,n){"use strict";var a=n(0),r=n(35);t.a=function(){return Object(a.useContext)(r.a)}},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,d=p["".concat(l,".").concat(u)]||p[u]||g[u]||c;return n?r.a.createElement(d,o({ref:t},b,{components:n})):r.a.createElement(d,o({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var b=2;b<c;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(172);function r(e){const{siteConfig:t}=Object(a.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}}}]);