(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{451:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{cart:[],sheet:!1,total:{price:0,info:"",productMessage:null},contactUrl:""}},methods:{getCart:function(){this.cart=this.$store.getters.getCartItems},removeItem:function(t){this.$store.commit("removeFromCart",t)},emptyCart:function(){this.$store.commit("clearCart",[]),this.getCart()},getTotal:function(){return this.$store.commit("calcTotal",{zero:0,comma:", ",empty:"",plus:"+"}),this.total=this.$store.getters.getTotal,this.total},setTotal:function(){0==this.cart.length?this.total={price:0,info:"The Cart is empty go to products to add item",productMessage:null}:(this.total=this.getTotal(),this.contactUrl="https://api.whatsapp.com/send?phone=2348130617579&text=Hi+I+want+to+buy+".concat(this.total.productMessage,"the+total+is+").concat(this.total.price))}},mounted:function(){this.getCart(),this.setTotal()}},r=o(70),c=o(101),l=o.n(c),v=o(150),h=o(458),m=o(443),d=o(457),_=o(167),f=o(151),y=o(127),C=o(351),x=o(327),V=o(358),k=o(148),w=o(121),T=o(329),S=o(35),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"my-5"},[o("v-layout",{attrs:{row:"",wrap:""}},t._l(t.cart,(function(e){return o("v-flex",{key:e.title},[o("v-hover",{scopedSlots:t._u([{key:"default",fn:function(n){var r=n.hover;return[o("v-banner",{staticClass:"universal",attrs:{elevation:r?24:1},scopedSlots:t._u([{key:"actions",fn:function(){return[o("span",{attrs:{text:"",green:""}},[t._v("₦"+t._s(e.price*e.quantity))]),t._v(" "),o("v-btn",{attrs:{text:"",color:"error"},on:{click:function(o){return t.removeItem(e)}}},[t._v("\n                remove\n                "),o("v-icon",[t._v("mdi-minus")])],1)]},proxy:!0}],null,!0)},[o("v-avatar",{attrs:{slot:"icon",color:"deep-purple accent-4",size:"60"},slot:"icon"},[o("v-img",{attrs:{src:e.src}})],1),t._v(" "),o("v-badge",{attrs:{color:"green",content:e.quantity}},[t._v(t._s(e.tittle))])],1)]}}],null,!0)})],1)})),1),t._v(" "),o("div",{staticClass:"text-center"},[o("v-bottom-sheet",{attrs:{persistent:"",scrollable:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[o("v-btn",t._g(t._b({staticClass:"mx-3 my-3",attrs:{color:"accent",outlined:"",large:""},on:{click:function(e){return t.setTotal()}}},"v-btn",r,!1),n),[o("v-icon",[t._v("mdi-cash-multiple")]),t._v("checkout\n        ")],1),t._v(" "),o("v-btn",{staticClass:"mx-3 my-3",attrs:{color:"error",outlined:"",large:""},on:{click:function(e){return t.emptyCart()}}},[o("v-icon",[t._v("mdi-close")]),t._v("Remove all\n        ")],1),t._v(" "),o("v-btn",{staticClass:"mx-3 my-3",attrs:{color:"primary",outlined:"",large:"",nuxt:"",to:"/products"}},[o("v-icon",[t._v("mdi-chart-bubble")]),t._v("continue shopping\n        ")],1)]}}]),model:{value:t.sheet,callback:function(e){t.sheet=e},expression:"sheet"}},[t._v(" "),o("v-sheet",{staticClass:"text-center",attrs:{height:"75vh",scrollable:""}},[o("v-btn",{staticClass:"mt-6",attrs:{outlined:"",fab:"",small:"",color:"warning"},on:{click:function(e){t.sheet=!t.sheet}}},[o("v-icon",[t._v("mdi-close")])],1),t._v(" "),o("div",{staticClass:"py-3",attrs:{scrollable:""}},[o("v-banner",{scopedSlots:t._u([{key:"actions",fn:function(){return[o("v-btn",{attrs:{text:"",color:"primary"}},[t._v(t._s(t.total.price))]),t._v(" "),o("v-btn",{attrs:{text:"",color:"accent",href:t.contactUrl}},[t._v("Pay")])]},proxy:!0}])},[o("v-card",{attrs:{flat:""}},[o("v-card-text",{staticStyle:{height:"300px"}},[t._v(t._s(t.total.info))])],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VAvatar:v.a,VBadge:h.a,VBanner:m.a,VBottomSheet:d.a,VBtn:_.a,VCard:f.a,VCardText:y.b,VContainer:C.a,VFlex:x.a,VHover:V.a,VIcon:k.a,VImg:w.a,VLayout:T.a,VSheet:S.a})}}]);