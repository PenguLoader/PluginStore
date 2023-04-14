// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules : [
        '@nuxt/image-edge',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/device',
        '@nuxtjs/google-fonts',

],
    image: {
        // The screen sizes predefined by `@nuxt/image`:
        screens: {
            xs: 320,
            sm: 640,
            md: 768,
            lg: 1024,
            xxl: 1536,
            xl: 1280,
            '2xl': 1536
        },
        domains: [
            'user-images.githubusercontent.com',
        ],
    },
})
