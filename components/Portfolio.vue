<template>
    <section class="mt-48">
        <UIButton>
            <template #icon>
                <UISVGPortfolio class="text-white fill-current p-1 pl-0" />
            </template>
            Portfolio</UIButton
        >
        <p ref="element1" class="text-4xl sm:text-5xl pt-24 text-white">
            Featured <span class="text-light-green">Projects</span>
        </p>

        <div class="pt-16">
            <div class="space-y-20">
                <div ref="element2" class="group">
                    <div class="relative w-11/12 rounded-3xl overflow-hidden">
                        <img
                            src="~/assets/portfolio/streetwear.png
                            "
                            alt="streetwear e-commerce website"
                            class="w-full h-min object-cover group-hover:scale-105 transition-transform duration-300"
                        />

                        <div class="absolute bottom-8 left-4">
                            <div class="flex flex-wrap gap-4">
                                <button
                                    class="font-medium bg-white group-hover:bg-dark-gray group-hover:text-white transition-colors duration-300 rounded-full text-xs sm:text-base py-1 px-3 sm:px-6"
                                >
                                    PHP
                                </button>
                                <button
                                    class="font-medium bg-white group-hover:bg-dark-gray group-hover:text-white transition-colors duration-300 rounded-full text-xs sm:text-base py-1 px-3 sm:px-6"
                                >
                                    Laravel
                                </button>
                                <button
                                    class="font-medium bg-white group-hover:bg-dark-gray group-hover:text-white transition-colors duration-300 rounded-full text-xs sm:text-base py-1 px-3 sm:px-6"
                                >
                                    MYSQL
                                </button>

                                <button
                                    class="font-medium bg-white group-hover:bg-dark-gray group-hover:text-white transition-colors duration-300 rounded-full text-xs sm:text-base py-1 px-3 sm:px-6"
                                >
                                    Livewire
                                </button>

                                <button
                                    class="font-medium bg-white group-hover:bg-dark-gray group-hover:text-white transition-colors duration-300 rounded-full text-xs sm:text-base py-1 px-3 sm:px-6"
                                >
                                    JQUERY
                                </button>
                                <button
                                    class="font-medium bg-white group-hover:bg-dark-gray group-hover:text-white transition-colors duration-300 rounded-full text-xs sm:text-base py-1 px-3 sm:px-6"
                                >
                                    TailwindCSS
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="pt-8">
                        <NuxtLink to="https://github.com/anas322/Streetwear-E-Commerce-Laravel" target="_blank">
                            <p
                                class="capitalize text-2xl sm:text-3xl group-hover:underline underline-offset-4 text-white transition-all duration-300"
                            >
                                Streetwear - Full-Stack E-commerce Website
                            </p>
                        </NuxtLink>
                    </div>
                </div>

                <div ref="element2" class="group">
                    <div class="relative w-11/12 rounded-3xl overflow-hidden">
                        <img
                            src="~/assets/portfolio/twitter.png
                            "
                            alt="Twitter clone website"
                            class="w-full h-min object-cover group-hover:scale-105 transition-transform duration-300"
                        />

                        <div class="absolute bottom-8 left-4">
                            <div class="flex flex-wrap gap-4">
                                <button
                                    class="font-medium bg-white group-hover:bg-dark-gray group-hover:text-white transition-colors duration-300 rounded-full text-xs sm:text-base py-1 px-3 sm:px-6"
                                >
                                    PHP
                                </button>
                                <button
                                    class="font-medium bg-white group-hover:bg-dark-gray group-hover:text-white transition-colors duration-300 rounded-full text-xs sm:text-base py-1 px-3 sm:px-6"
                                >
                                    Laravel
                                </button>
                                <button
                                    class="font-medium bg-white group-hover:bg-dark-gray group-hover:text-white transition-colors duration-300 rounded-full text-xs sm:text-base py-1 px-3 sm:px-6"
                                >
                                    MYSQL
                                </button>

                                <button
                                    class="font-medium bg-white group-hover:bg-dark-gray group-hover:text-white transition-colors duration-300 rounded-full text-xs sm:text-base py-1 px-3 sm:px-6"
                                >
                                    Nuxt.js 3
                                </button>

                                <button
                                    class="font-medium bg-white group-hover:bg-dark-gray group-hover:text-white transition-colors duration-300 rounded-full text-xs sm:text-base py-1 px-3 sm:px-6"
                                >
                                    TailwindCSS
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="pt-8">
                        <NuxtLink to="https://github.com/anas322/Twitter-Clone-App" target="_blank">
                            <p
                                class="capitalize text-2xl sm:text-3xl group-hover:underline underline-offset-4 text-white transition-all duration-300"
                            >
                                Twitter Clone - Two seperate Apps one for front-end and one for back-end
                            </p>
                        </NuxtLink>
                    </div>
                </div>
                <div ref="element3" class="group">
                    <div class="relative w-11/12 rounded-3xl overflow-hidden">
                        <img
                            src="~/assets/portfolio/instgram.png
                            "
                            alt="intagram clone website"
                            class="w-full h-min object-cover group-hover:scale-105 transition-transform duration-300"
                        />

                        <div class="absolute bottom-8 left-4">
                            <div class="flex flex-wrap gap-4">
                                <button
                                    class="font-medium bg-white group-hover:bg-dark-gray group-hover:text-white transition-colors duration-300 rounded-full text-xs sm:text-base py-1 px-3 sm:px-6"
                                >
                                    PHP
                                </button>
                                <button
                                    class="font-medium bg-white group-hover:bg-dark-gray group-hover:text-white transition-colors duration-300 rounded-full text-xs sm:text-base py-1 px-3 sm:px-6"
                                >
                                    Laravel
                                </button>
                                <button
                                    class="font-medium bg-white group-hover:bg-dark-gray group-hover:text-white transition-colors duration-300 rounded-full text-xs sm:text-base py-1 px-3 sm:px-6"
                                >
                                    inertia.js
                                </button>
                                <button
                                    class="font-medium bg-white group-hover:bg-dark-gray group-hover:text-white transition-colors duration-300 rounded-full text-xs sm:text-base py-1 px-3 sm:px-6"
                                >
                                    MYSQL
                                </button>

                                <button
                                    class="font-medium bg-white group-hover:bg-dark-gray group-hover:text-white transition-colors duration-300 rounded-full text-xs sm:text-base py-1 px-3 sm:px-6"
                                >
                                    TailwindCSS
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="pt-8">
                        <NuxtLink to="https://github.com/anas322/instagram-inspiration-app" target="_blank">
                            <p
                                class="capitalize text-2xl sm:text-3xl group-hover:underline underline-offset-4 text-white transition-all duration-300"
                            >
                                Instagram - Full-Stack Social Media Website (inspired by instagram)
                            </p>
                        </NuxtLink>
                    </div>
                </div>
                <div ref="element4" class="group">
                    <div class="relative w-11/12 rounded-3xl overflow-hidden">
                        <img
                            src="~/assets/portfolio/recipie.png
                            "
                            alt="recipe website"
                            class="w-full h-min object-cover group-hover:scale-105 transition-transform duration-300"
                        />

                        <div class="absolute bottom-8 left-4">
                            <div class="flex flex-wrap gap-4">
                                <button
                                    class="font-medium bg-white group-hover:bg-dark-gray group-hover:text-white transition-colors duration-300 rounded-full text-xs sm:text-base py-1 px-3 sm:px-6"
                                >
                                    Vue.js
                                </button>
                                <button
                                    class="font-medium bg-white group-hover:bg-dark-gray group-hover:text-white transition-colors duration-300 rounded-full text-xs sm:text-base py-1 px-3 sm:px-6"
                                >
                                    Vuex
                                </button>

                                <button
                                    class="font-medium bg-white group-hover:bg-dark-gray group-hover:text-white transition-colors duration-300 rounded-full text-xs sm:text-base py-1 px-3 sm:px-6"
                                >
                                    Vue Router
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="pt-8">
                        <NuxtLink to="https://github.com/anas322/recipes-app" target="_blank">
                            <p
                                class="capitalize text-2xl sm:text-3xl group-hover:underline underline-offset-4 text-white transition-all duration-300"
                            >
                                Recipe APP - Single Page Application for adding and tracing recipes
                            </p>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const element1 = ref(null);
const element2 = ref(null);
const element3 = ref(null);
const element4 = ref(null);
onMounted(() => {
    addClass(element1.value, ["animate__animated", "animate__fadeInUp"]);
    addClass(element2.value, ["animate__animated", "animate__fadeInUp"]);
    addClass(element3.value, ["animate__animated", "animate__fadeInUp"]);
    addClass(element4.value, ["animate__animated", "animate__fadeInUp"]);
});
</script>
