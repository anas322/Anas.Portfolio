<template>
    <section class="mt-48">
        <UIButton>
            <template #icon>
                <UISVGServices class="text-white fill-current p-1 pl-0" />
            </template>
            Services</UIButton
        >

        <p class="text-4xl sm:text-5xl pt-24 text-white animate__animated animate__fadeInUp">
            My <span class="text-light-green"> Specializations</span>
        </p>
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
