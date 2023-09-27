// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

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

});
