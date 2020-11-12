(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{384:function(t,e,r){"use strict";r.r(e);r(31),r(60);var n={name:"NewsletterForm",data:function(){return{email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}]}},methods:{mailernwletter:function(){if(""!=this.email){var t="I want to subscribe to you news letter : "+this.email,e="mailto:infoThunder Enterprises@gmail.com?subject="+encodeURIComponent(t)+"&body="+encodeURIComponent(this.email);window.location.replace(e)}else alert("please ensure all fields are filled correctly with valid details")}}},l=r(66),o=r(79),c=r.n(o),v=r(243),m=r(437),d=r(385),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-form",[r("div",{staticClass:"d-flex flex-column flex-md-row justify-center align-top mx-auto",staticStyle:{"max-width":"600px"}},[r("v-text-field",{staticClass:"mr-md-2",attrs:{outlined:"",placeholder:"Email",rules:t.emailRules},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),r("v-btn",{attrs:{"x-large":"",color:"primary"},on:{click:t.mailernwletter}},[t._v("Subscribe")])],1)])}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:v.a,VForm:m.a,VTextField:d.a})},448:function(t,e,r){"use strict";r.r(e);r(28),r(31),r(60);var n={components:{NewsletterForm:r(384).default},data:function(){return{userNumber:"",valid:!0,userEmail:"",nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length>=3||"Name greater than 5 characters"}],userFullName:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}],dialog:!1,features:[{image:"/feature4.svg",title:"Innovative & Simple",text:"Open an investment portfolio in Naira on our easy-to-use digital platform. You can now easily access short and medium-term investment opportunities."},{image:"/feature2.svg",title:"Secure & Consistent",text:"Get 20% return on investment in 25 working days. Invest your funds in a secure platform with guaranteed consistent returns paid promptly into your bank account."},{image:"/features.svg",title:"Social media platforms",text:" Connect with us on all major social media pages. You can also subscribe to our newsletter to receive major updates and finance tips and news. "}],testimonies:[{image:"/icon.png",name:"Papa ",company:"Lagos State, Nigeria",text:" Started investing with Thunder Enterprises investment 7months ago,so far, it has \nbeen a great experience. I've been able to meet up with some of my \nfinancial goals for the year. The management-investor relationship have \nbeen professional. I get alerted of my money being available a day before \nand I get option on how to reinvest. It's been a joy ride."},{image:"/icon.png",name:"Kehinde Aguda",company:"Lagos State, Nigeria",text:" I started forex investment with Thunder Enterprises in February 2020 and I've been \ninvesting up until now because my personal expectations were met and \nThunder enterprisesdelivered the services absolutely! I've been meeting my financial \nexpectations since I started in February and the Interest always come on \ndue date. My personal experience has an investor has been smooth, no \ncomplaints whatsoever. "},{image:"/icon.png",name:"Blessing Justin",company:"Kaduna state, Nigeria",text:"This is the first time I am investing my money and for once I feel at peace... \nI don't even remember or panic about the cash sef cos I just know its super \nsafe and growing. Thanks for not giving up on all my enquiry times."}]}},methods:{investNow:function(){this.userNumber&&this.userEmail&&""!=this.userFullName?(this.contactUrl="https://api.whatsapp.com/send?phone=2349019881034&text=Hello+I+want+to+invest+with+Thunder Enterprises+my+name+is+".concat(this.userFullName,"%0Amy+email+addresss+is+").concat(this.userEmail,"%0Aand+my+phone+number+is").concat(this.userNumber),window.location.replace(this.contactUrl),this.dialog=!1):alert("please ensure all fields are filled correctly with valid details")}}},l=r(66),o=r(79),c=r.n(o),v=r(180),m=r(243),d=r(178),f=r(188),h=r(356),_=r(354),y=r(439),w=r(371),x=r(437),C=r(440),k=r(179),N=r(148),I=r(361),E=r(362),S=r(385),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"force"},[r("section",{staticClass:"my-12 px-5"},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{staticClass:"mt-md-8 text-center my-5 px-5",attrs:{cols:"12",md:"6"}},[r("h2",{staticClass:"display-1 mb-6 my-5"},[t._v("Welcome to")]),t._v(" "),r("h1",{staticClass:"display-2 primary--text font-weight-bold mb-6 my-5"},[t._v("\n          Thunder Enterprises\n        ")]),t._v(" "),r("p",{staticClass:"body-1"},[t._v("\n          One of Nigeria’s leading investment firms. With our digital\n          platform, investing is now simplified and you can invest safely\n          without having to navigate the complex financial markets.\n        ")]),t._v(" "),r("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,l=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"text-uppercase",attrs:{color:"primary","x-large":"",dark:""}},"v-btn",l,!1),n),[t._v("Invest")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),r("v-card",[r("v-card-title",{},[t._v("Open an Investment"),r("br"),t._v("\n              Portfolio.")]),t._v(" "),r("v-card-text",[t._v("Fill in your details below and submit. You will be contacted\n              shortly.")]),t._v(" "),r("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{rules:t.nameRules,label:"Full Name",required:""},model:{value:t.userFullName,callback:function(e){t.userFullName=e},expression:"userFullName"}})],1)],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{rules:t.emailRules,type:"email",label:"Email Address",required:""},model:{value:t.userEmail,callback:function(e){t.userEmail=e},expression:"userEmail"}})],1)],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{type:"number",label:"Phone number",required:""},model:{value:t.userNumber,callback:function(e){t.userNumber=e},expression:"userNumber"}})],1)],1)],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.investNow()}}},[t._v("Submit")])],1)],1)],1),t._v(" "),r("v-btn",{staticClass:"ml-2 text-uppercase",attrs:{"x-large":"",nuxt:"",to:"/about"}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-magnify")]),t._v("About\n        ")],1)],1),t._v(" "),r("v-col",{staticClass:"landing-image pt-12",attrs:{cols:"12",md:"6"}},[r("v-img",{attrs:{contain:"","max-height":"300",src:"/feature1.svg"}})],1)],1)],1),t._v(" "),r("section",{staticClass:"text-center primary pb-16"},[r("v-container",[r("div",{staticClass:"display-1 white--text font-weight-bold my-14"},[r("p",[t._v("Achieve Financial Growth")])]),t._v(" "),r("v-row",t._l(t.features,(function(e,i){return r("v-col",{key:i,attrs:{cols:"12",md:"4"}},[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(n){var l=n.hover;return[r("v-card",{staticClass:"py-12 px-4",attrs:{elevation:l?24:0}},[r("img",{staticClass:"mb-5",attrs:{height:"150px",contain:"",src:e.image}}),t._v(" "),r("v-card-title",{staticClass:"justify-center primary--text"},[t._v(t._s(e.title))]),t._v(" "),r("v-card-text",{staticClass:"subtitle-1",domProps:{textContent:t._s(e.text)}})],1)]}}],null,!0)})],1)})),1)],1)],1),t._v(" "),r("svg",{attrs:{viewBox:"0 0 1920 135"}},[r("defs",[r("filter",{attrs:{id:"Path_1006",x:"-152.573",y:"-460.806",width:"2324.175",height:"631.369",filterUnits:"userSpaceOnUse"}},[r("feOffset",{attrs:{input:"SourceAlpha"}}),t._v(" "),r("feGaussianBlur",{attrs:{stdDeviation:"25",result:"blur"}}),t._v(" "),r("feFlood",{attrs:{"flood-opacity":"0.161"}}),t._v(" "),r("feComposite",{attrs:{operator:"in",in2:"blur"}}),t._v(" "),r("feComposite",{attrs:{in:"SourceGraphic"}})],1),t._v(" "),r("clipPath",{attrs:{id:"clip-Home"}},[r("rect",{attrs:{width:"1920",height:"135"}})])]),t._v(" "),r("g",{attrs:{id:"Home","clip-path":"url(#clip-Home)"}},[r("rect",{attrs:{width:"1920",height:"135",fill:"#ffffff00"}}),t._v(" "),r("g",{attrs:{transform:"matrix(1, 0, 0, 1, 0, 0)",filter:"url(#Path_1006)"}},[r("path",{attrs:{id:"Path_1006-2","data-name":"Path 1006",d:"M-9948.83,7778.837s223.576,20.394,386.754,27.238,264.528,2.657,433.32-7.967,394.238-56.657,849.857-44.854,433.191,56.657,433.191,56.657l-37.3-459.818H-8937.946s-717.868,3.541-721.409,0S-9970.4,7333.23-9970.4,7333.23l-47.161,238.25,15.345,197.12Z",transform:"translate(9941 -7718)",fill:"#ca902b",stroke:"#ca902b","stroke-width":"2"}})])])]),t._v(" "),r("section",{staticClass:"universal pa-5"},[r("v-container",{staticClass:"text-center"},[r("v-row",[r("v-col",{attrs:{cols:"6",md:"3"}},[r("div",{staticClass:"text-uppercase caption"},[t._v("Days")]),t._v(" "),r("div",{staticClass:"display-1"},[t._v("365+")])]),t._v(" "),r("v-col",{attrs:{cols:"6",md:"3"}},[r("div",{staticClass:"text-uppercase caption"},[t._v("Investors")]),t._v(" "),r("div",{staticClass:"display-1"},[t._v("100+")])]),t._v(" "),r("v-col",{attrs:{cols:"6",md:"3"}},[r("div",{staticClass:"text-uppercase caption"},[t._v("Up time")]),t._v(" "),r("div",{staticClass:"display-1"},[t._v("365+")])]),t._v(" "),r("v-col",{attrs:{cols:"6",md:"3"}},[r("div",{staticClass:"text-uppercase caption"},[t._v("Active Members")]),t._v(" "),r("div",{staticClass:"display-1"},[t._v("235+")])])],1)],1)],1),t._v(" "),r("section",{staticClass:"my-12"},[r("v-container",[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{staticClass:"landing-image",attrs:{cols:"12",md:"6"}},[r("v-img",{attrs:{contain:"","max-height":"300",src:"/finalfeature.svg"}})],1),t._v(" "),r("v-col",{staticClass:"mt-md-8 text-center",attrs:{cols:"12",md:"6"}},[r("p",{staticClass:"display-1 font-weight-thin"},[t._v("\n            Never depend on single income. Make investment to create a second\n            source.'\n          ")]),t._v(" "),r("p",[t._v("Warren Buffet- CEO of Berkshire Hathaway")])])],1)],1)],1),t._v(" "),r("section",{staticClass:"pa-5 primary"},[r("v-container",{staticClass:"text-center"},[r("h2",{staticClass:"display-1 ma-4 white--text"},[t._v("Investors Testimonials!")]),t._v(" "),r("v-row",t._l(t.testimonies,(function(e,i){var image=e.image,text=e.text,n=e.name,l=e.company;return r("v-col",{key:i,attrs:{cols:"12",md:"4"}},[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.hover;return[r("v-card",{staticClass:"py-12 px-4",attrs:{elevation:o?24:1}},[r("div",[r("v-avatar",{attrs:{size:"88"}},[r("img",{attrs:{src:image}})])],1),t._v(" "),r("v-card-text",[r("div",{staticClass:"subtitle-1"},[t._v(t._s(text))]),t._v(" "),r("div",{staticClass:"subtitle-1 font-weight-bold mt-5 primary--text"},[t._v("\n                    "+t._s(n)+"\n                  ")]),t._v(" "),r("div",{staticClass:"caption"},[t._v(t._s(l))])])],1)]}}],null,!0)})],1)})),1)],1)],1),t._v(" "),r("svg",{attrs:{viewBox:"0 0 1920 135"}},[r("defs",[r("filter",{attrs:{id:"Path_1006",x:"-152.573",y:"-460.806",width:"2324.175",height:"631.369",filterUnits:"userSpaceOnUse"}},[r("feOffset",{attrs:{input:"SourceAlpha"}}),t._v(" "),r("feGaussianBlur",{attrs:{stdDeviation:"25",result:"blur"}}),t._v(" "),r("feFlood",{attrs:{"flood-opacity":"0.161"}}),t._v(" "),r("feComposite",{attrs:{operator:"in",in2:"blur"}}),t._v(" "),r("feComposite",{attrs:{in:"SourceGraphic"}})],1),t._v(" "),r("clipPath",{attrs:{id:"clip-Home"}},[r("rect",{attrs:{width:"1920",height:"135"}})])]),t._v(" "),r("g",{attrs:{id:"Home","clip-path":"url(#clip-Home)"}},[r("rect",{attrs:{width:"1920",height:"135",fill:"#ffffff00"}}),t._v(" "),r("g",{attrs:{transform:"matrix(1, 0, 0, 1, 0, 0)",filter:"url(#Path_1006)"}},[r("path",{attrs:{id:"Path_1006-2","data-name":"Path 1006",d:"M-9948.83,7778.837s223.576,20.394,386.754,27.238,264.528,2.657,433.32-7.967,394.238-56.657,849.857-44.854,433.191,56.657,433.191,56.657l-37.3-459.818H-8937.946s-717.868,3.541-721.409,0S-9970.4,7333.23-9970.4,7333.23l-47.161,238.25,15.345,197.12Z",transform:"translate(9941 -7718)",fill:"#ca902b",stroke:"#ca902b","stroke-width":"2"}})])])]),t._v(" "),r("section",{staticClass:"text-center pt-2"},[r("v-container",[r("div",{staticClass:"text-h5 primary--text"},[t._v("Thunder Enterprises newsletter")]),t._v(" "),r("p",{staticClass:"mt-2"},[t._v("Subscribe to Thunder Enterprises newsletter")]),t._v(" "),r("NewsletterForm")],1),t._v(" "),r("v-divider",{staticClass:"mt-2"})],1)])}),[],!1,null,null,null);e.default=component.exports;c()(component,{NewsletterForm:r(384).default}),c()(component,{VAvatar:v.a,VBtn:m.a,VCard:d.a,VCardActions:f.a,VCardText:f.b,VCardTitle:f.c,VCol:h.a,VContainer:_.a,VDialog:y.a,VDivider:w.a,VForm:x.a,VHover:C.a,VIcon:k.a,VImg:N.a,VRow:I.a,VSpacer:E.a,VTextField:S.a})}}]);