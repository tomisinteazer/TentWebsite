import colors from "vuetify/es5/util/colors";

export default {
  mode: "universal",
  buildDir: "functions/.nuxt",

  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: "%s - " + process.env.npm_package_name,
    title: "Thunder Enterprises - The official website of Thunder Enterprises.",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "One of Nigeria’s leading investment firms."
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Global CSS
   */

  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/vuetify"],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/pwa", "@nuxtjs/firebase"],
  firebase: {
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    config: {
      apiKey: "AIzaSyDuNXqxPz2MMvp5Sd-SfIsje6hJUOSs8yg",
      authDomain: "thunder-ent.firebaseapp.com",
      databaseURL: "https://thunder-ent.firebaseio.com",
      projectId: "thunder-ent",
      storageBucket: "thunder-ent.appspot.com",
      messagingSenderId: "767636914051",
      appId: "1:767636914051:web:c6e2993124e13799bd00b6",
      measurementId: "G-1BQ89HB821"
    },
    services: {
      auth: true,
      firestore: true // Just as example. Can be any other service.
    }
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ["~/assets/variables.scss"],

    theme: {
      dark: false,
      themes: {
        dark: {
          primary: "#ca902b",
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: "#ca902b",
          secondary: "#00bcd4"
        }
      }
    }
  },

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    public: "/",
    extracrCSS: true
  }
};
