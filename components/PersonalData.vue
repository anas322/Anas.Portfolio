<template>
    <section
        class="desktop:fixed left-6 top-1/2 desktop:-translate-y-1/2 desktop:w-1/4 sm:w-3/4 mx-auto mt-4 desktop:mt-0 desktop:min-w-max"
    >
        <div class="flex flex-col items-center gap-y-8 p-8 border-light-gray border rounded-3xl h-full">
            <header class="w-full">
                <p class="flex justify-between">
                    <span class="text-4xl sm:text-5xl text-white font-semibold leading-8">Anas.</span>
                    <span class="text-xs sm:text-sm font-semibold text-white">Full-Stack<br />Web Developer</span>
                </p>
            </header>

            <div class="overflow-hidden rounded-2xl">
                <img
                    class="object-cover h-64 grayscale transform scale-150 -translate-y-10 pointer-events-none"
                    src="~/assets/developer.jpg"
                    alt="Anas Personal Photo"
                    width="100%"
                />
            </div>

            <div>
                <p class="text-white text-center sm:text-2xl">anaselnahef12@gmail.com</p>
                <p class="text-white text-center sm:text-2xl">Based in Cairo, Egypt</p>
                <p class="text-sm sm:text-base text-light-gray text-center font-semibold pt-5">
                    &#169; Anas. All Rights Reserved
                </p>
            </div>

            <div class="flex gap-3">
                <NuxtLink to="https://www.instagram.com/anas0dev/" target="_blank">
                    <div
                        class="group p-2 border-2 border-light-gray group rounded-full hover:border-light-green transition-colors duration-300"
                    >
                        <UISVGSocialInstagram
                            class="text-light-gray group-hover:text-light-green fill-current box-border p-1 transition-colors duration-300"
                        />
                    </div>
                </NuxtLink>

                <NuxtLink to="https://www.linkedin.com/in/anas-elnahef/" target="_blank">
                    <div
                        class="group p-2 border-2 border-light-gray group rounded-full hover:border-light-green transition-colors duration-300"
                    >
                        <UISVGSocialLinkedin
                            class="text-light-gray group-hover:text-light-green fill-current box-border p-1 transition-colors duration-300"
                        />
                    </div>
                </NuxtLink>

                <NuxtLink to="https://github.com/anas322" target="_blank">
                    <div
                        class="group p-2 border-2 border-light-gray group rounded-full hover:border-light-green transition-colors duration-300"
                    >
                        <UISVGSocialGithub
                            class="text-light-gray group-hover:text-light-green fill-current box-border p-1 transition-colors duration-300"
                        />
                    </div>
                </NuxtLink>

                <NuxtLink to="https://twitter.com/Anas0Dev" target="_blank">
                    <div
                        class="group p-2 border-2 border-light-gray group rounded-full hover:border-light-green transition-colors duration-300"
                    >
                        <UISVGSocialTwitter
                            class="text-light-gray group-hover:text-light-green fill-current box-border p-1 transition-colors duration-300"
                        />
                    </div>
                </NuxtLink>

                <NuxtLink to="https://wa.me/+201554581957" target="_blank">
                    <div
                        class="group p-2 border-2 border-light-gray group rounded-full hover:border-light-green transition-colors duration-300"
                    >
                        <UISVGSocialWhatsup
                            class="text-light-gray group-hover:text-light-green fill-current box-border p-1 transition-colors duration-300"
                        />
                    </div>
                </NuxtLink>
            </div>

            <button
                class="flex justify-center items-center py-3 gap-x-4 w-full rounded-full bg-light-green"
                @click="goTo('contact')"
            >
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                    <path
                        d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z"
                    />
                </svg>
                <span class="text-lg p-0"> HIRE ME! </span>
            </button>
        </div>
    </section>
</template>

<script setup>
const goTo = (name) => {
    goToElement(name);
};
</script>
