export default defineNuxtConfig({
   pages: true,
   app: {
      head: {
         title: 'Checker game',
         meta: [
            { charset: 'utf-8' },
            {
               name: 'viewport',
               content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
         ],
      },
   },
   vite: {
      css: {
         preprocessorOptions: {
            scss: {
               additionalData: '@import "@/assets/scss/variables.scss";',
            },
         },
      },
   },
   dev: process.env.NODE_ENV !== 'production',
})
