(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{129:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(1),a=c.n(n),l=c(43),r=c.n(l),i=(c(51),c(8)),o=c(3),j=c.p+"static/media/a1image.50f75afd.jpg";function x(){return Object(s.jsxs)("main",{children:[Object(s.jsx)("img",{src:j,alt:"Victoria snap",className:"absolute object-cover w-full h-full"}),Object(s.jsx)("section",{className:"relative flex justify-center min-h-screen pt-12 lg:pt-56 px-8",children:Object(s.jsx)("h1",{className:"text-6xl text-green-1000 font-bold cursive leading-none lg:leading-snug home-name",children:"Hello. I'm Srinivasan."})})]})}var d=c(10),b=c(44),m=c.n(b)()({projectId:"vnsyb2k5",dataset:"production"}),h=c(14),u=c.n(h),g=c(18),p=c.n(g),f=u()(m);function O(){var e,t=Object(n.useState)(null),c=Object(d.a)(t,2),a=c[0],l=c[1];return Object(n.useEffect)((function(){m.fetch('*[_type=="author"]{\n            name,\n            bio,\n            "authorImage":image.asset->url\n        }').then((function(e){return l(e[0])})).catch(console.error)}),[]),a?Object(s.jsxs)("main",{className:"relative",children:[Object(s.jsx)("img",{src:j,alt:"My Image",className:"absolute w-full "}),Object(s.jsx)("div",{className:"p-10 lg:pt-48 container mx-auto relative",children:Object(s.jsxs)("section",{className:"bg-green-800 rounded-lg shadow-2xl lg: flex p-20",children:[Object(s.jsx)("img",{src:(e=a.authorImage,f.image(e)).url(),className:"rounded w-32 h-32 lg:w-64 lg:h-64 mr-8",alt:a.name}),Object(s.jsxs)("div",{className:"text-lg flex flex-col justify-center",children:[Object(s.jsxs)("h1",{className:"cursive text-6xl text-green-300 mb-4 ",children:["Hey. There I'm "," ",Object(s.jsx)("span",{className:"text-green-100 ",children:a.name})]}),Object(s.jsx)("div",{className:"prose lg:prose-xl text-white ",children:Object(s.jsx)(p.a,{blocks:a.bio,projectId:"vnsyb2k5",dataset:"production"})})]})]})})]}):Object(s.jsx)("div",{children:"Loading..."})}function N(){var e=Object(n.useState)(null),t=Object(d.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){m.fetch('*[_type == "post"]{\n            title,\n            slug,\n            mainImage{\n                asset->{\n                    _id,\n                    url\n                },\n                alt\n\n            }\n        }').then((function(e){return a(e)})).catch(console.error)}),[]),Object(s.jsx)("main",{className:"bg-green-100 min-h-screen p-12",children:Object(s.jsxs)("section",{className:"container mx-auto",children:[Object(s.jsx)("h1",{className:"text-5xl flex justify-center cursive",children:"Blog Post Page"}),Object(s.jsx)("h2",{className:"text-lg text-gray-600 flex justify-center mb-12",children:"Welcome to my page of Blog posts"}),Object(s.jsx)("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:c&&c.map((function(e,t){return Object(s.jsx)("article",{children:Object(s.jsx)(i.b,{to:"/post/"+e.slug.current,children:Object(s.jsxs)("span",{className:"block h-64 relative rounded shadow leading-slug bg-white border-l-8 border-green-400 key={index}",children:[Object(s.jsx)("img",{src:e.mainImage.asset.url,alt:e.mainImage.alt,className:"w-full h-full rounded-r object-cover absolute"}),Object(s.jsx)("span",{className:"block relative h-full flex justify-end items-end pr-4 pb-4",children:Object(s.jsx)("h3",{className:"text-gray-800 text-lg font-blog px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded",children:e.title})})]})},e.slug.current)})}))})]})})}function v(){var e=Object(n.useState)(null),t=Object(d.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){m.fetch('* [_type == "project"]{\n            title,\n            date,\n            place,\n            description,\n            projectType,\n            link,\n            tags\n\n        }').then((function(e){return a(e)})).catch(console.error)}),[]),Object(s.jsx)("main",{className:"bg-green-100 min-h-screen p-12",children:Object(s.jsxs)("section",{className:"container mx-auto",children:[Object(s.jsx)("h1",{className:"text-5xl flex justify-center cursive",children:"My Projects"}),Object(s.jsx)("h2",{className:"text-lg text-gray-600 flex justify-center mb-12",children:"Welcome to my Projects Page"}),Object(s.jsx)("section",{className:"grid grid-cols-2 gap-8 ",children:c&&c.map((function(e,t){return Object(s.jsxs)("article",{className:"relative rounded-lg shadow-xl bg-white p-16",children:[Object(s.jsx)("h3",{className:"text-gray-800 text-3xl font-bold mb-2 hover:text-red-700",children:Object(s.jsx)("a",{href:e.link,alt:e.title,target:"_blank",rel:"noopener norefferrer",children:e.title})}),Object(s.jsxs)("div",{className:"text-gray-500 text-xs space-x-4 ",children:[Object(s.jsxs)("span",{children:[Object(s.jsx)("strong",{className:"font-bold",children:"Finished on "}),": "," ",new Date(e.date).toLocaleDateString()]}),Object(s.jsx)("strong",{className:"font-bold",children:"Company"}),":"," ",e.place,Object(s.jsxs)("span",{children:[Object(s.jsx)("strong",{className:"font-bold ",children:"Type"}),":"," ",e.projectType]}),Object(s.jsx)("span",{}),Object(s.jsx)("p",{className:"my-6 text-lg text-gray-600 leading-relaxed",children:e.description}),Object(s.jsxs)("a",{href:e.link,rel:"noopener noreferrer",target:"_blank",className:"text-red-500\r font-bold hover:underline hover:text-red-400 text-xl",children:["View The Project"," ",Object(s.jsx)("span",{role:"img","aria-label":"right pointer"})]})]})]})}))})]})})}var y=u()(m);function w(){var e,t=Object(n.useState)(null),c=Object(d.a)(t,2),a=c[0],l=c[1],r=Object(o.f)().slug;return Object(n.useEffect)((function(){m.fetch('*[slug.current == "'.concat(r,'"]{\n            title,\n            _id,\n            slug,\n            mainImage{\n                asset->{\n                    _id,\n                    url  \n                }\n            },\n            body,\n            "name": author->name,\n            "authorImage": author->image,\n\n        }')).then((function(e){return l(e[0])})).catch(console.error)}),[r]),a?Object(s.jsx)("main",{className:"bg-gray-200 min-h-screen p-12",children:Object(s.jsxs)("article",{className:"container shadow-lg mx-auto bg-green-100 rounded-lg",children:[Object(s.jsxs)("header",{className:"relative",children:[Object(s.jsx)("div",{className:"absolute h-full w-full flex items-center justify-center p-8",children:Object(s.jsxs)("div",{className:"bg-white bg-opacity-75 rounded p-12",children:[Object(s.jsx)("h1",{className:"cursive text-3xl lg:text-6xl mb-4 ",children:a.title}),Object(s.jsx)("div",{className:"flex justify-center text-gray-800",children:Object(s.jsx)("img",{src:(e=a.authorImage,y.image(e)).url,alt:a.name,className:"w-10 h-10 rounded-full"})}),Object(s.jsx)("p",{className:"cursive flex items-center pl-2 text-2xl",children:a.name})]})}),Object(s.jsx)("img",{src:a.mainImage.asset.url,alt:a.title,className:"w-full object-cover rounded-t",style:{height:"400px"}})]}),Object(s.jsx)("div",{className:"px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full ",children:Object(s.jsx)(p.a,{blocks:a.body,projectId:"vnsyb2k5",dataset:"production"})})]})}):Object(s.jsx)("div",{children:"Loading..."})}var I=c(19);function k(){return Object(s.jsx)("header",{className:"bg-red-600",children:Object(s.jsxs)("div",{className:"container mx-auto flex justify-between",children:[Object(s.jsxs)("nav",{className:"flex",children:[Object(s.jsx)(i.c,{to:"/",exact:!0,activeClassName:"text-white",className:"inflex-flex items-center py-6 px-3 mx-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest",children:"Srinivasan"}),Object(s.jsx)(i.c,{to:"/post",className:"inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800 ",activeClassName:"text-red-100 bg-red-700",children:"Blog Posts"}),Object(s.jsx)(i.c,{to:"/project",className:"inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800 ",activeClassName:"text-red-100 bg-red-700",children:"Projects"}),Object(s.jsx)(i.c,{to:"/about",className:"inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800 ",activeClassName:"text-red-100 bg-red-700",children:"About Me!"})]}),Object(s.jsxs)("div",{className:"inline-flex py-6 px-6 mx-6",children:[Object(s.jsx)(I.SocialIcon,{url:"https://twitter.com/@srini04217167",className:"mr-4",target:"_blank",fgColor:"#fff",style:{height:35,width:35}}),Object(s.jsx)(I.SocialIcon,{url:"https://www.youtube.com/c/EEg7QL9KWFhSvxh9I5IWmQ",className:"mr-4",target:"_blank",fgColor:"#fff",style:{height:35,width:35}}),Object(s.jsx)(I.SocialIcon,{url:"http://au.linkedin.com/pub/srini-iyer/11/238/842/",className:"mr-4",target:"_blank",fgColor:"#fff",style:{height:35,width:35}})]})]})})}var S=function(){return Object(s.jsxs)(i.a,{children:[Object(s.jsx)(k,{}),Object(s.jsxs)(o.c,{children:[Object(s.jsx)(o.a,{component:x,path:"/",exact:!0}),Object(s.jsx)(o.a,{component:O,path:"/about"}),Object(s.jsx)(o.a,{component:w,path:"/post/:slug"}),Object(s.jsx)(o.a,{component:N,path:"/post"}),Object(s.jsx)(o.a,{component:v,path:"/project"})]})]})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,130)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,l=t.getTTFB;c(e),s(e),n(e),a(e),l(e)}))};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(S,{})}),document.getElementById("root")),C()},51:function(e,t,c){}},[[129,1,2]]]);
//# sourceMappingURL=main.9fd64d4c.chunk.js.map