// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-fonts',
        '@nuxt/image-edge',
        '@nuxtjs/color-mode',
        '@tailvue/nuxt',
],
    tailwindcss: {
        // Options
    },
    googleFonts: {
        families: {
            Roboto: true,
            'Josefin+Sans': true,
            Lato: [100, 300],
            Raleway: {
                wght: [100, 400],
                ital: [100]
            },
        }
    },
})
