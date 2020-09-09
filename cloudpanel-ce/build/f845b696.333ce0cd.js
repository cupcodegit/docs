(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{168:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return c})),n.d(e,"metadata",(function(){return i})),n.d(e,"rightToc",(function(){return b})),n.d(e,"default",(function(){return l}));var a=n(1),r=(n(0),n(173)),o=n(174);const c={id:"account",title:"Account",sidebar_label:"Account"},i={id:"account",title:"Account",description:"Account Information",source:"@site/docs/frontend-area-account.md",permalink:"/docs/cloudpanel-ce/account",editUrl:"https://github.com/cloudpanel-io/docs/tree/master/cloudpanel-ce/docs/frontend-area-account.md",sidebar_label:"Account",sidebar:"sidebar",previous:{title:"Other",permalink:"/docs/cloudpanel-ce/installation-other"},next:{title:"Domains",permalink:"/docs/cloudpanel-ce/domains"}},b=[{value:"Account Information",id:"account-information",children:[]},{value:"Two-Factor Authentication",id:"two-factor-authentication",children:[{value:"Enable 2-FA",id:"enable-2-fa",children:[]},{value:"Disable 2-FA",id:"disable-2-fa",children:[]}]}],u={rightToc:b};function l({components:t,...e}){return Object(r.b)("wrapper",Object(a.a)({},u,e,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"account-information"},"Account Information"),Object(r.b)("p",null,"To edit account information, click on your name in the top right header."),Object(r.b)("img",{class:"border",src:Object(o.a)("img/v1/account/header_account_menu.png")})," ",Object(r.b)("br",null)," ",Object(r.b)("br",null),Object(r.b)("p",null,"In the account area, you can change personal information like ",Object(r.b)("strong",{parentName:"p"},"E-Mail"),", ",Object(r.b)("strong",{parentName:"p"},"First Name"),", ",Object(r.b)("strong",{parentName:"p"},"Last Name"),", ",Object(r.b)("strong",{parentName:"p"},"Password"),"\nand, the ",Object(r.b)("strong",{parentName:"p"},"Timezone"),". The ",Object(r.b)("strong",{parentName:"p"},"Timezone")," is important to see the right times in the monitoring graphs on the dashboard."),Object(r.b)("img",{class:"border",src:Object(o.a)("img/v1/account/account_information.png")}),Object(r.b)("h2",{id:"two-factor-authentication"},"Two-Factor Authentication"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Two-Factor Authentication")," adds an extra layer of security to your account. ",Object(r.b)("br",null),"\nWhenever you sign in, you\u2019ll need to enter both your password and also a security code."),Object(r.b)("h3",{id:"enable-2-fa"},"Enable 2-FA"),Object(r.b)("p",null,"To enable ",Object(r.b)("strong",{parentName:"p"},"Two-Factor Authentication")," click in your account on the tab ",Object(r.b)("strong",{parentName:"p"},"Security")," and click on the button ",Object(r.b)("br",null),"\n",Object(r.b)("strong",{parentName:"p"},"Enable Two-Factor Authentication"),"."),Object(r.b)("img",{class:"border",src:Object(o.a)("img/v1/account/enable_two_factor_authentication.png")})," ",Object(r.b)("br",null)," ",Object(r.b)("br",null),Object(r.b)("p",null,"Open an app like ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://support.google.com/accounts/answer/1066447?hl=en"}),"Google Authenticator")," or ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://duo.com/product/multi-factor-authentication-mfa/duo-mobile-app"}),"Duo"),"\nand scan the QR code and enter one ",Object(r.b)("strong",{parentName:"p"},"authentication code")," to confirm."),Object(r.b)("img",{class:"border",src:Object(o.a)("img/v1/account/connect_app_two_factor_authentication.png")}),Object(r.b)("h3",{id:"disable-2-fa"},"Disable 2-FA"),Object(r.b)("p",null,"To disable ",Object(r.b)("strong",{parentName:"p"},"Two-Factor Authentication")," click in your account on the tab ",Object(r.b)("strong",{parentName:"p"},"Security")," and click on the button ",Object(r.b)("br",null),"\n",Object(r.b)("strong",{parentName:"p"},"Disable Two-Factor Authentication"),"."),Object(r.b)("img",{class:"border",src:Object(o.a)("img/v1/account/disable_two_factor_authentication.png")})," ",Object(r.b)("br",null)," ",Object(r.b)("br",null),Object(r.b)("p",null,"If you can't log in into your account anymore, you can disable the ",Object(r.b)("strong",{parentName:"p"},"Two-Factor Authentication")," via the command line."),Object(r.b)("p",null,"1) Login with SSH and switch the user to ",Object(r.b)("strong",{parentName:"p"},"root"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo su root\n")),Object(r.b)("p",null,"2) Execute the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"clpctl user:disable:mfa 'john.doe'\n")))}l.isMDXComponent=!0},172:function(t,e,n){"use strict";var a=n(0),r=n(35);e.a=function(){return Object(a.useContext)(r.a)}},173:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function b(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=r.a.createContext({}),l=function(t){var e=r.a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i({},e,{},t)),n},p=function(t){var e=l(t.components);return r.a.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},d=Object(a.forwardRef)((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,u=b(t,["components","mdxType","originalType","parentName"]),p=l(n),d=a,m=p["".concat(c,".").concat(d)]||p[d]||s[d]||o;return n?r.a.createElement(m,i({ref:e},u,{components:n})):r.a.createElement(m,i({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var b in e)hasOwnProperty.call(e,b)&&(i[b]=e[b]);i.originalType=t,i.mdxType="string"==typeof t?t:a,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},174:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(172);function r(t){const{siteConfig:e}=Object(a.a)(),{baseUrl:n="/"}=e||{};if(!t)return t;return/^(https?:|\/\/)/.test(t)?t:t.startsWith("/")?n+t.slice(1):n+t}}}]);