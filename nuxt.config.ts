// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  build: {
    quiet: false
  },
  modules: ["@nuxtjs/tailwindcss"], // モジュールの使用
  runtimeConfig: {
      apiKey: '',
      public: {
        apiKey: process.env.ENV_APIKEY,
        authDomain: process.env.ENV_AUTHDOMAIN,
        databaseURL: process.env.ENV_DATABASEURL,
        projectId: process.env.ENV_PROJECTID,
        storageBucket: process.env.ENV_STORAGEBUCKET,
        messagingSenderId: process.env.ENV_MESSAGINGSENDERID,
        appId: process.env.ENV_APPID
          
      }
  },
  components: [
    {
      path: "@/components",
      pathPrefix: false,
    },
  ],
  css: [
    '~/assets/css/main.css'
  ],
  ssr:false,
    // 以下追記項目
    experimental: {
      inlineSSRStyles: false,
    }
});

