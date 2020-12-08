exports.ids = [1];
exports.modules = {

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(217);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("7132a15d", content, true)

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VDivider_VDivider_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(216);
/* harmony import */ var _src_components_VDivider_VDivider_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VDivider_VDivider_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
// Styles
 // Mixins


/* harmony default export */ __webpack_exports__["a"] = (_mixins_themeable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].extend({
  name: 'v-divider',
  props: {
    inset: Boolean,
    vertical: Boolean
  },

  render(h) {
    // WAI-ARIA attributes
    let orientation;

    if (!this.$attrs.role || this.$attrs.role === 'separator') {
      orientation = this.vertical ? 'vertical' : 'horizontal';
    }

    return h('hr', {
      class: {
        'v-divider': true,
        'v-divider--inset': this.inset,
        'v-divider--vertical': this.vertical,
        ...this.themeClasses
      },
      attrs: {
        role: 'separator',
        'aria-orientation': orientation,
        ...this.$attrs
      },
      on: this.$listeners
    });
  }

}));

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=template&id=406ee392&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pb-6 pt-4 text-center"},[_c('v-container',[_c('div',{staticClass:"mb-10"},[_c('h1',{staticClass:"display-2 mb-6 text-uppercase primary--text"},[_vm._v("About us")]),_vm._v(" "),_c('div',{staticClass:"mx-auto text-left",staticStyle:{"max-width":"700px"}},[_c('p',{staticClass:"body-1"},[_vm._v("\n          Thunder Enterprises is an investment form which deals in various\n          forms of investment deals from funds management to Automobiles to\n          Real estate to Agriculture, Entertainment and many more. As a\n          registered company, we offers various services and opportunities and\n          protocols have been put in place to make operations easy as our\n          major aim is to provide financial freedom for our investor and\n          clients\n        ")])]),_vm._v(" "),_c('h1',{staticClass:"mb-4 mx-auto text-h5 primary--text"},[_vm._v("What we offer")]),_vm._v(" "),_c('div',{staticClass:"mx-auto text-left",staticStyle:{"max-width":"700px"}},[_c('p',{staticClass:"body-1"},[_vm._v("\n          We offer a platform where individuals with no knowledge of the\n          Foreign Exchange [Forex] market can understand how their funds can\n          work for them and provide access to financial freedom. We also offer\n          training classes to those willing to learn how to maneuver the forex\n          market. We also provide consultations on other investment\n          operations.\n        ")]),_vm._v(" "),_c('p',{staticClass:"body-1"},[_vm._v("\n          A cryptocurrency exchange platform that offers value for virtual\n          coins.\n        ")])])]),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('div',{staticClass:"my-10"},[_c('h2',{staticClass:"text-h5 primary--text"},[_vm._v("COMPANY’S WATCHWORD")]),_vm._v(" "),_c('p',{staticClass:"body-1"},[_vm._v("“Your financial freedom, Our Pride”")]),_vm._v(" "),_c('h2',{staticClass:"text-h5 primary--text"},[_vm._v("OUR VISION")]),_vm._v(" "),_c('p',{staticClass:"body-1"},[_vm._v("To maintain a high level of profitability.")]),_vm._v(" "),_c('h2',{staticClass:"text-h5 primary--text"},[_vm._v("OUR MISSION")]),_vm._v(" "),_c('p',{staticClass:"body-1"},[_vm._v("\n        At Thunder Enterprises, we desire to change the financial structure\n        and help our clients in achieving financial success as well as provide\n        the best quality of services in all operations.\n      ")]),_vm._v(" "),_c('h2',{staticClass:"text-h5 primary--text"},[_vm._v("OUR CORE VALUES")]),_vm._v(" "),_c('p',{staticClass:"body-1"},[_vm._v("Innovation")]),_vm._v(" "),_c('p',[_vm._v("Integrity")]),_vm._v(" "),_c('p',[_vm._v("Accountability.")])]),_vm._v(" "),_c('v-divider')],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/about.vue?vue&type=template&id=406ee392&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(16);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(197);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(222);

// CONCATENATED MODULE: ./pages/about.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "465a2cc6"
  
)

/* harmony default export */ var about = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VContainer: VContainer["a" /* default */],VDivider: VDivider["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=about.js.map