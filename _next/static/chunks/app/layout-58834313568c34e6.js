(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{5378:(e,t,l)=>{Promise.resolve().then(l.t.bind(l,9324,23)),Promise.resolve().then(l.bind(l,7649))},6654:(e,t,l)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return a}});let r=l(2115);function a(e,t){let l=(0,r.useRef)(null),a=(0,r.useRef)(null);return(0,r.useCallback)(r=>{if(null===r){let e=l.current;e&&(l.current=null,e());let t=a.current;t&&(a.current=null,t())}else e&&(l.current=n(e,r)),t&&(a.current=n(t,r))},[e,t])}function n(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let l=e(t);return"function"==typeof l?l:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7649:(e,t,l)=>{"use strict";l.d(t,{default:()=>d});var r=l(5155),a=l(6874),n=l.n(a);let s=e=>{let{text:t,href:l,active:a}=e;return(0,r.jsx)(n(),{href:l,className:"font-mono text-lg transition ".concat(a?"text-teal-600":""," hover:font-bold"),children:t})};var i=l(2115);let c=[{text:"Home",href:"/"},{text:"Experience",href:"/experience"},{text:"Projects",href:"/projects"},{text:"Contact",href:"/contact"}],d=()=>{let[e,t]=i.useState(!1),[l,a]=i.useState(!1),[n,d]=i.useState(0);return(0,r.jsx)("header",{className:"bg-white h-20 sticky z-[9999] top-0 shadow-lg shadow-teal-600 border border-solid border-teal-600 rounded-b-xl dark:bg-black",children:(0,r.jsxs)("nav",{className:"font-mono flex filter drop-shadow-md bg-white dark:bg-black px-4 py-4 h-20 items-center",children:[(0,r.jsxs)("div",{className:"absolute top-0 left-0 h-screen w-screen bg-white dark:bg-black transform ".concat(e?"-translate-x-0":"-translate-x-full"," transition-transform duration-300 ease-in-out filter drop-shadow-md "),children:[(0,r.jsx)("div",{className:"flex items-center justify-center filter shadow-lg shadow-teal-600 border border-solid border-teal-600 bg-white dark:bg-black h-20",children:(0,r.jsx)("div",{className:"text-xl text-teal-700 font-semibold",children:"DJGV"})}),(0,r.jsx)("div",{className:"flex flex-col text-center mt-7 gap-5",children:c.map((e,l)=>(0,r.jsx)("div",{onClick:()=>{d(l),a(!1),t(!1)},children:(0,r.jsx)(s,{active:n===l,...e})},e.text))})]}),(0,r.jsx)("div",{className:"w-3/12 flex items-center",children:(0,r.jsx)("div",{className:"text-3xl text-teal-700 font-semibold",children:"DJGV"})}),(0,r.jsxs)("div",{className:"w-9/12 flex justify-end items-center",children:[(0,r.jsxs)("div",{className:"z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden",onClick:()=>{t(!e)},children:[(0,r.jsx)("span",{className:"h-1 w-full bg-black dark:bg-white rounded-lg transform transition duration-300 ease-in-out ".concat(e?"rotate-45 translate-y-3.5":"")}),(0,r.jsx)("span",{className:"h-1 w-full bg-black dark:bg-white rounded-lg transition-all duration-300 ease-in-out ".concat(e?"w-0":"w-full")}),(0,r.jsx)("span",{className:"h-1 w-full bg-black dark:bg-white rounded-lg transform transition duration-300 ease-in-out ".concat(e?"-rotate-45 -translate-y-3.5":"")})]}),(0,r.jsx)("div",{className:"hidden md:flex md:gap-10",children:c.map((e,t)=>(0,r.jsx)("div",{onClick:()=>{d(t),a(!1)},children:(0,r.jsx)(s,{active:n===t,...e})},e.text))})]})]})})}},9324:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[533,874,441,684,358],()=>t(5378)),_N_E=e.O()}]);