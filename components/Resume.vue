<template>
    <section>
        <UIButton>
            <template #icon>
                <svg
                    class="text-white fill-current p-1 pl-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M0 7v15h24v-15h-24zm22 13h-20v-11h15v5l1.5-1.5 1.5 1.5v-5h2v11zm-13-14h-2v-2c0-1.104.896-2 2-2h6c1.104 0 2 .896 2 2v2h-2v-1.5c0-.276-.224-.5-.5-.5h-5c-.276 0-.5.224-.5.5v1.5z"
                    />
                </svg>
            </template>
            Resume</UIButton
        >

        <div class="pt-16">
            <p class="text-5xl text-justify text-white leading-snug font-light">
                Education, Courses & <span class="text-dark-green">Experience</span><br />
            </p>

            <div class="pt-8">
                <div class="group relative pl-16 pb-12 border-l border-l-light-gray">
                    <span
                        class="absolute w-3 h-3 rounded-full bg-light-gray -left-[6px] -top-1 group-hover:bg-light-green transition-colors duration-300"
                    ></span>
                    <div class="space-y-8">
                        <p class="text-light-gray group-hover:text-light-green transition-colors duration-300">
                            June, 2023
                        </p>

                        <div class="space-y-2">
                            <p class="text-white text-3xl">Bachelor's degree in Computer Science</p>
                            <p class="text-light-gray text-sm">El Shorouk Academy</p>
                        </div>

                        <div class="space-y-2">
                            <p class="text-white text-3xl">Full-Stack Web Developer</p>
                            <p class="text-light-gray text-sm">Laravel - vue (nuxt.js)</p>
                        </div>
                    </div>
                </div>

                <div class="group relative pl-16 pb-12 border-l border-l-light-gray">
                    <span
                        class="absolute w-3 h-3 rounded-full bg-light-gray -left-[6px] -top-1 group-hover:bg-light-green transition-colors duration-300"
                    ></span>
                    <div class="space-y-8">
                        <p class="text-light-gray group-hover:text-light-green transition-colors duration-300">
                            July, 2021
                        </p>

                        <div class="space-y-2">
                            <p class="text-white text-3xl">Advanced Full-Stack Web Development Nanodegree Program</p>
                            <a href="https://confirm.udacity.com/TAKVPVFM" target="_blank" class="inline-block">
                                <img
                                    src="~/assets/certificate.png"
                                    alt="ministry of communications and information technology of egypt certificate"
                                    class="w-12"
                                />
                            </a>
                            <p class="text-light-gray text-sm">egFWD</p>
                        </div>

                        <div class="space-y-2">
                            <a
                                href="https://www.udemy.com/course/php-with-laravel-for-beginners-become-a-master-in-laravel/?couponCode=LETSLEARNNOW"
                                target="_blank"
                            >
                                <p
                                    class="group/link text-white text-3xl hover:text-light-green transition-colors duration-300"
                                >
                                    Udemy course - PHP with Laravel for beginners - Become a Master in Laravel
                                    <svg
                                        class="text-white group-hover/link:text-light-green fill-current inline-block p-1"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                    >
                                        <path
                                            d="M14 4h-13v18h20v-11h1v12h-22v-20h14v1zm10 5h-1v-6.293l-11.646 11.647-.708-.708 11.647-11.646h-6.293v-1h8v8z"
                                        />
                                    </svg>
                                </p>
                            </a>
                            <p class="text-light-gray text-sm">Udemy</p>
                        </div>
                    </div>
                </div>

                <div class="group relative pl-16 border-l border-l-light-gray">
                    <span
                        class="absolute w-3 h-3 rounded-full bg-light-gray -left-[6px] -top-1 group-hover:bg-light-green transition-colors duration-300"
                    ></span>
                    <div class="space-y-8">
                        <p class="text-light-gray group-hover:text-light-green transition-colors duration-300">
                            Jun, 2020
                        </p>

                        <div class="space-y-2">
                            <a
                                href="https://www.udemy.com/course/master-nuxt-full-stack-complete-guide/?couponCode=LETSLEARNNOW"
                                target="_blank"
                            >
                                <p
                                    class="group/link text-white text-3xl hover:text-light-green transition-colors duration-300"
                                >
                                    Udemy course - Master Nuxt 3 - Full-Stack Complete Guide
                                    <svg
                                        class="text-white group-hover/link:text-light-green fill-current inline-block p-1"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                    >
                                        <path
                                            d="M14 4h-13v18h20v-11h1v12h-22v-20h14v1zm10 5h-1v-6.293l-11.646 11.647-.708-.708 11.647-11.646h-6.293v-1h8v8z"
                                        />
                                    </svg>
                                </p>
                            </a>
                            <p class="text-light-gray text-sm">Udemy</p>
                        </div>
                        <div class="space-y-2">
                            <a
                                href="https://www.udemy.com/course/vuejs-2-the-complete-guide/?couponCode=LETSLEARNNOW"
                                target="_blank"
                            >
                                <p
                                    class="group/link text-white text-3xl hover:text-light-green transition-colors duration-300"
                                >
                                    Udemy Course - Vue - The Complete Guide (incl. Router & Composition API)
                                    <svg
                                        class="text-white group-hover/link:text-light-green fill-current inline-block p-1"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                    >
                                        <path
                                            d="M14 4h-13v18h20v-11h1v12h-22v-20h14v1zm10 5h-1v-6.293l-11.646 11.647-.708-.708 11.647-11.646h-6.293v-1h8v8z"
                                        />
                                    </svg>
                                </p>
                            </a>
                            <p class="text-light-gray text-sm">Udemy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
