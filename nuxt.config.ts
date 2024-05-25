// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    devServer: {
        port: 8000, // default: 3000
        host: "0.0.0.0", // default: localhost
    },
    app: {
        head: {
            link: [
                {
                    rel: "stylesheet",
                    href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
                },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap",
                },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Jersey+15&display=swap",
                },
            ],
        },
        pageTransition: { name: "page", mode: "out-in" },
    },

    modules: ["@nuxtjs/tailwindcss"],
});
