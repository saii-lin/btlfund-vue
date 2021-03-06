import i18nOptions from "./locales/i18n";

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "銀信資產管理有限公司",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [{ src: "/jquery-3.5.1.min.js" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [
    "@/assets/style/app.styl",
    "@/assets/css/app.css",
    "normalize.css/normalize.css"
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/vuescroll.js", "@/plugins/vuetify"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    ["vue-scrollto/nuxt"],
    ["nuxt-i18n", i18nOptions],
    "nuxt-material-design-icons"
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
