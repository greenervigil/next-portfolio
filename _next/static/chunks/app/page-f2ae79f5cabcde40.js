(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{5873:(e,t,a)=>{Promise.resolve().then(a.bind(a,251))},251:(e,t,a)=>{"use strict";a.d(t,{Testimonials:()=>d});var l=a(5155),s=a(4247),n=a(1283),r=a(7672),i=a(7605),c=a(2115),o=a(5565);let d=e=>{let{testimonials:t,autoplay:a=!1}=e,[d,u]=(0,c.useState)(0),[x,m]=(0,c.useState)(!1);(0,c.useEffect)(()=>{m(!0)},[]),(0,c.useEffect)(()=>{if(a){let e=setInterval(()=>u(e=>(e+1)%t.length),5e3);return()=>clearInterval(e)}},[a,t.length]);let h=e=>e===d,p=()=>Math.floor(21*Math.random())-10;return x?(0,l.jsx)("div",{className:"max-w-sm md:max-w-4xl mx-auto antialiased px-4 md:px-8 lg:px-12 py-20",children:(0,l.jsxs)("div",{className:"relative flex flex-col md:flex-row gap-20",children:[(0,l.jsx)("div",{className:"w-full md:w-1/3",children:(0,l.jsx)("div",{className:"relative h-80 w-full",children:(0,l.jsx)(s.N,{children:t.map((e,a)=>(0,l.jsx)(n.P.div,{initial:{opacity:0,scale:.9,z:-100,rotate:p()},animate:{opacity:h(a)?1:.7,scale:h(a)?1:.95,z:h(a)?0:-100,rotate:h(a)?0:p(),zIndex:h(a)?999:t.length+2-a,y:h(a)?[0,-80,0]:0},exit:{opacity:0,scale:.9,z:100,rotate:p()},transition:{duration:.4,ease:"easeInOut"},className:"absolute inset-0 origin-bottom",children:(0,l.jsx)(o.default,{src:e.src,alt:e.name,width:400,height:400,draggable:!1,className:"h-full w-full rounded-3xl object-cover object-center"})},e.src))})})}),(0,l.jsxs)("div",{className:"w-2/3 flex justify-between flex-col py-4",children:[(0,l.jsxs)(n.P.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},exit:{y:-20,opacity:0},transition:{duration:.2,ease:"easeInOut"},children:[(0,l.jsx)("h3",{className:"text-2xl font-bold dark:text-white text-black",children:t[d].name}),(0,l.jsx)("p",{className:"text-sm text-gray-500 dark:text-neutral-500",children:t[d].designation}),(0,l.jsx)(n.P.p,{className:"text-lg text-gray-500 mt-8 dark:text-neutral-300",children:t[d].quote.split(" ").map((e,t)=>(0,l.jsxs)(n.P.span,{initial:{filter:"blur(10px)",opacity:0,y:5},animate:{filter:"blur(0px)",opacity:1,y:0},transition:{duration:.2,ease:"easeInOut",delay:.02*t},className:"inline-block",children:[e,"\xa0"]},t))})]},d),(0,l.jsxs)("div",{className:"flex gap-4 pt-12 md:pt-0",children:[(0,l.jsx)("button",{onClick:()=>u(e=>(e-1+t.length)%t.length),className:"h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button",children:(0,l.jsx)(r.A,{className:"h-5 w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300"})}),(0,l.jsx)("button",{onClick:()=>u(e=>(e+1)%t.length),className:"h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button",children:(0,l.jsx)(i.A,{className:"h-5 w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300"})})]})]})]})}):null}}},e=>{var t=t=>e(e.s=t);e.O(0,[565,104,441,517,358],()=>t(5873)),_N_E=e.O()}]);