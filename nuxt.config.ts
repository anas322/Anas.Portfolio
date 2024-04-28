// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

    app: {
        head: {
            link: [
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap",
                },
            ],
        },
        pageTransition: { name: "page", mode: "out-in" },
    },

    modules: ["@nuxtjs/tailwindcss"],
});
