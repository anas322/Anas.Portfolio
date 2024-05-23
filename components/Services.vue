<template>
    <section class="mt-48">
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
                        d="M21.698 10.658l2.302 1.342-12.002 7-11.998-7 2.301-1.342 9.697 5.658 9.7-5.658zm-9.7 10.657l-9.697-5.658-2.301 1.343 11.998 7 12.002-7-2.302-1.342-9.7 5.657zm0-19l8.032 4.685-8.032 4.685-8.029-4.685 8.029-4.685zm0-2.315l-11.998 7 11.998 7 12.002-7-12.002-7z"
                    />
                </svg>
            </template>
            Services</UIButton
        >

        <p class="text-5xl pt-24 text-white">My <span class="text-light-green"> Specializations</span></p>
        <div class="pt-16 space-y-6">
            <UISpecialCard>
                <template #header>Back-End Development </template>
                <template #body>
                    I have experience building and maintaining the back-end of websites using PHP and Laravel. I am
                    skilled in creating APIs, working with databases, and implementing security measures to protect user
                    data.
                </template>
                <template #footer> Laravel based projects </template>
            </UISpecialCard>

            <UISpecialCard>
                <template #header>Front-End Development </template>
                <template #body>
                    I have experience building and maintaining the front-end of websites using VUE.js - NUXT.js (ssr). I
                    am skilled in creating responsive designs, optimizing performance, and ensuring cross-browser
                    compatibility.
                </template>
                <template #footer> vue.js and nuxt.js based projects </template>
            </UISpecialCard>

            <UISpecialCard>
                <template #header>Problem Solving </template>
                <template #body>
                    I have experience solving complex problems and implementing creative solutions. I am skilled in
                    debugging, troubleshooting, and finding efficient ways to resolve issues.
                </template>
                <template #footer></template>
            </UISpecialCard>
        </div>
    </section>
</template>
