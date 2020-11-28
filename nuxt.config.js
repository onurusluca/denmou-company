export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Denmou - 電網株式会社",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "あなたのビジネスをデジタルの世界にお連れします。人の目を引く、唯一のウェブサイトとソーシャルメディアを作りましょう。 "
      },
      {
        name: "keywords",
        content:
          "denmou, でんもう, 電網, SASS, デジタル, ウェブサイト, ウェブアプリケーション"
      },
      { hid: "robots", name: "robots", content: "index, follow" },
      { hid: "language", name: "language", content: "Japanese" },
      { hid: "revisit-after", name: "revisit-after", content: "2 days" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      },
      { rel: "manifest", href: "/site.webmanifest" },
 
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["./assets/styles/variables.scss"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ["@nuxtjs/style-resources"],

  styleResources: {
    scss: ["./assets/styles/variables.scss"]
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [/* "nuxt-webfontloader" */],
/*   webfontloader: {
    google: {
      families: ["Noto+Sans+JP:300,700"] //Loads Lato font with weights 400 and 700
    }
  }, */
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
