(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{443:function(e,t,n){"use strict";n.r(t);n(6),n(9),n(7),n(12),n(13),n(11),n(8),n(71);var l=n(22),r=n(2),o=n(99),c=n.n(o),v=(n(388),n(374)),d=n.n(v);n(390),n(393);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h={asyncData:function(e){e.req;var t=e.redirect;c.a.auth().currentUser||t("/login")},data:function(){return{valid:!1,checkbox:!0,loggedIn:!0,clientName:"",clientPlan:"",currentInvestDate:"",dueDate:"",email:"",initialDate:"",investmentState:"",nextOfKinEmail:"",nextOfKinName:"",nextOfKinPhoneNum:"",phoneNumber:"",investmentStateType:["ongoing","dormant","pending"],nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length>=5||"Name greater than 5 characters"}],clients:[],emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+/.test(e)||"E-mail must be valid"}]}},methods:{getClients:function(){var e=this;this.$fireStore.collection("clients").onSnapshot((function(data){data.forEach((function(t){e.clients.push(m(m({},t.data()),{},{id:t.id}))}))}))},addClient:function(){var e={clientName:this.clientName,clientPlan:this.clientPlan,currentInvestDate:this.currentInvestDate,dueDate:this.dueDate,email:this.email,initialDate:this.initialDate,investmentState:this.investmentState,nextOfKinEmail:this.nextOfKinEmail,nextOfKinName:this.nextOfKinName,nextOfKinPhoneNum:this.nextOfKinPhoneNum,phoneNumber:this.phoneNumber};console.log(e),this.$fireStore.collection("clients").add(e).then((function(e){return alert(" document sent"+e.id)})).catch((function(e){return console.log(e)}))},validateClient:function(){this.$refs.form.validate(),this.addClient()},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()},deleteClient:function(e){this.$fireStore.collection("clients").doc(e.id).delete().then((function(){console.log("deleted succesfully")})).catch((function(e){return console.log(e)}))},signOut:function(){var e=this;this.$fireAuth.signOut().then((function(t){e.$router.push("/login"),console.log(t)})).catch((function(e){console.log(e)})),this.$fireAuth.onAuthStateChanged((function(t){t?(console.log("signed in"),e.$fireAuth.currentUser.getIdToken(!0).then((function(e){return d.a.set("access_token",e)})),e.loggedIn=!0):(d.a.remove("access_token"),e.loggedIn=!1,console.log("signed out",e.loggedIn))}))}},beforeMount:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.getClients();case 1:case"end":return t.stop()}}),t)})))()}},_=n(66),x=n(79),O=n.n(x),N=n(243),k=n(451),D=n(404),P=n(405),C=n(406),y=n(407),K=n(437),S=n(442),E=n(438),w=n(385),component=Object(_.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-expansion-panels",[n("v-expansion-panel",[n("v-expansion-panel-header",[e._v("client manager")]),e._v(" "),n("v-expansion-panel-content",[n("v-expansion-panels",[n("v-expansion-panel",[n("v-expansion-panel-header",[e._v("Add client")]),e._v(" "),n("v-expansion-panel-content",[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{attrs:{"prepend-icon":"mdi-chart-bubble",rules:e.nameRules,label:"client Name",required:""},model:{value:e.clientName,callback:function(t){e.clientName=t},expression:"clientName"}}),e._v(" "),n("v-text-field",{attrs:{rules:e.nameRules,"prepend-icon":"mdi-information-outline",label:"client plan",required:""},model:{value:e.clientPlan,callback:function(t){e.clientPlan=t},expression:"clientPlan"}}),e._v(" "),n("v-text-field",{attrs:{rules:e.emailRules,"prepend-icon":"mdi-information-outline",label:"client email",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),n("v-text-field",{attrs:{type:"number",rules:e.nameRules,"prepend-icon":"mdi-information-outline",label:"client phone number",required:""},model:{value:e.phoneNumber,callback:function(t){e.phoneNumber=t},expression:"phoneNumber"}}),e._v(" "),n("v-text-field",{attrs:{"prepend-icon":"mdi-wallet",label:"Current Investment Date",rules:[function(e){return!!e||"date  is required"}],required:""},model:{value:e.currentInvestDate,callback:function(t){e.currentInvestDate=t},expression:"currentInvestDate"}}),e._v(" "),n("v-text-field",{attrs:{"prepend-icon":"mdi-wallet",label:"initial registration Date",rules:[function(e){return!!e||"date  is required"}],required:""},model:{value:e.initialDate,callback:function(t){e.initialDate=t},expression:"initialDate"}}),e._v(" "),n("v-text-field",{attrs:{"prepend-icon":"mdi-wallet",label:"Due Date",rules:[function(e){return!!e||"date  is required"}],required:""},model:{value:e.dueDate,callback:function(t){e.dueDate=t},expression:"dueDate"}}),e._v(" "),n("v-select",{attrs:{items:e.investmentStateType,rules:[function(e){return!!e||"category  is required"}],label:"investment state",required:"","prepend-icon":"mdi-format-list-bulleted-type"},model:{value:e.investmentState,callback:function(t){e.investmentState=t},expression:"investmentState"}}),e._v(" "),n("h3",[e._v("Next of kin")]),e._v(" "),n("v-text-field",{attrs:{"prepend-icon":"mdi-chart-bubble",rules:e.nameRules,label:"Next of kin Name",required:""},model:{value:e.nextOfKinName,callback:function(t){e.nextOfKinName=t},expression:"nextOfKinName"}}),e._v(" "),n("v-text-field",{attrs:{rules:e.emailRules,"prepend-icon":"mdi-information-outline",label:"Next of kin email",required:""},model:{value:e.nextOfKinEmail,callback:function(t){e.nextOfKinEmail=t},expression:"nextOfKinEmail"}}),e._v(" "),n("v-text-field",{attrs:{type:"number",rules:e.nameRules,"prepend-icon":"mdi-information-outline",label:"Next of kin phone number",required:""},model:{value:e.nextOfKinPhoneNum,callback:function(t){e.nextOfKinPhoneNum=t},expression:"nextOfKinPhoneNum"}}),e._v(" "),n("v-checkbox",{attrs:{rules:[function(e){return!!e||"You must agree to continue!"}],label:"are you done?",required:""},model:{value:e.checkbox,callback:function(t){e.checkbox=t},expression:"checkbox"}}),e._v(" "),n("v-btn",{staticClass:"mr-4",attrs:{color:"success",disabled:!e.valid},on:{click:e.validateClient}},[e._v("Add Client")]),e._v(" "),n("v-btn",{staticClass:"mr-4",attrs:{color:"error"},on:{click:e.reset}},[e._v("Reset Form")]),e._v(" "),n("v-btn",{attrs:{color:"warning"},on:{click:e.resetValidation}},[e._v("Reset Validation")])],1)],1)],1)],1),e._v(" "),n("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[e._v("client Name")]),e._v(" "),n("th",{staticClass:"text-left"},[e._v("client Plan")]),e._v(" "),n("th",{staticClass:"text-left"},[e._v("Investment State")]),e._v(" "),n("th",{staticClass:"text-left"},[e._v("Email")]),e._v(" "),n("th",{staticClass:"text-left"},[e._v("Phone Number")]),e._v(" "),n("th",{staticClass:"text-left"},[e._v("Due Date")]),e._v(" "),n("th",{staticClass:"text-left"},[e._v("Registration Date")]),e._v(" "),n("th",{staticClass:"text-left"},[e._v("Current Investment Date")]),e._v(" "),n("th",{staticClass:"text-left"},[e._v("Next of Kin Name")]),e._v(" "),n("th",{staticClass:"text-left"},[e._v("Next of Kin Email")]),e._v(" "),n("th",{staticClass:"text-left"},[e._v("Next of Kin Phone Number")]),e._v(" "),n("th",{staticClass:"text-left"},[e._v("delete")])])]),e._v(" "),n("tbody",e._l(e.clients,(function(t){return n("tr",{key:t.id},[n("td",[e._v(e._s(t.clientName))]),e._v(" "),n("td",[e._v(e._s(t.clientPlan))]),e._v(" "),n("td",[e._v(e._s(t.investmentState))]),e._v(" "),n("td",[e._v(e._s(t.email))]),e._v(" "),n("td",[e._v(e._s(t.phoneNumber))]),e._v(" "),n("td",[e._v(e._s(t.dueDate))]),e._v(" "),n("td",[e._v(e._s(t.initialDate))]),e._v(" "),n("td",[e._v(e._s(t.currentInvestDate))]),e._v(" "),n("td",[e._v(e._s(t.nextOfKinName))]),e._v(" "),n("td",[e._v(e._s(t.nextOfKinEmail))]),e._v(" "),n("td",[e._v(e._s(t.nextOfKinPhoneNum))]),e._v(" "),n("td",[n("v-btn",{attrs:{color:"error"},on:{click:function(n){return e.deleteClient(t)}}},[e._v("remove")])],1)])})),0)]},proxy:!0}])})],1)],1)],1),e._v(" "),e.loggedIn?n("v-btn",{attrs:{color:"error",block:""},on:{click:e.signOut}},[e._v("logout")]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;O()(component,{VBtn:N.a,VCheckbox:k.a,VExpansionPanel:D.a,VExpansionPanelContent:P.a,VExpansionPanelHeader:C.a,VExpansionPanels:y.a,VForm:K.a,VSelect:S.a,VSimpleTable:E.a,VTextField:w.a})}}]);