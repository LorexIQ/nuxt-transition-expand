export default defineNuxtConfig({
  modules: ['../src/module'],

  devtools: { enabled: true },

  app: {
    head: {
      title: 'NuxtTransitionExpand: Playground'
    }
  },

  compatibilityDate: '2024-11-22',

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern'
        }
      }
    }
  }
});
