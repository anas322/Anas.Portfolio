<template>
    <section class="mt-48">
        <UIButton>
            <template #icon>
                <svg
                    class="text-white fill-current p-1 pl-0"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="m14.865 16.6c0-.53-.47-1-1-1h-3.73c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.73c.53 0 1-.47 1-1zm-7.135 0c0-.53-.47-1-1-1h-3.73c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.73c.53 0 1-.47 1-1zm14.27 0c0-.53-.47-1-1-1h-3.73c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.73c.53 0 1-.47 1-1zm-11.365.5h2.73v1.4h-2.73zm-7.135 0h2.73v1.4h-2.73zm14.27 0h2.73v1.4h-2.73zm-2.905-6.3c0-.53-.47-1-1-1h-3.73c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.73c.53 0 1-.47 1-1zm-7.135 0c0-.53-.47-1-1-1h-3.73c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.73c.53 0 1-.47 1-1zm14.27 0c0-.53-.47-1-1-1h-3.73c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.73c.53 0 1-.47 1-1zm-11.365.5h2.73v1.4h-2.73zm-7.135 0h2.73v1.4h-2.73zm14.27 0h2.73v1.4h-2.73zm-2.905-6.3c0-.53-.47-1-1-1h-3.73c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.73c.53 0 1-.47 1-1zm-7.135 0c0-.53-.47-1-1-1h-3.73c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.73c.53 0 1-.47 1-1zm14.27 0c0-.53-.47-1-1-1h-3.73c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.73c.53 0 1-.47 1-1zm-11.365.5h2.73v1.4h-2.73zm-7.135 0h2.73v1.4h-2.73zm14.27 0h2.73v1.4h-2.73z"
                        fill-rule="nonzero"
                    />
                </svg>
            </template>
            Portfolio</UIButton
        >
        <p class="text-5xl pt-24 text-white">Featured <span class="text-light-green">Projects</span></p>

        <div class="pt-16">
            <div class="group">
                <div class="relative w-11/12 rounded-lg overflow-hidden">
                    <img
                        src="https://via.placeholder.com/800x400"
                        alt="Project 1"
                        class="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    <div class="absolute space-x-4 bottom-8 left-8">
                        <button
                            class="bg-white group-hover:bg-light-gray group-hover:text-white transition-colors duration-300 rounded-full py-2 px-6"
                        >
                            Figma
                        </button>
                        <button
                            class="bg-white group-hover:bg-light-gray group-hover:text-white transition-colors duration-300 rounded-full py-2 px-6"
                        >
                            Figma
                        </button>
                    </div>
                </div>
                <div class="pt-8">
                    <p class="text-3xl group-hover:underline underline-offset-4 text-white transition-all duration-300">
                        Bureau - Architecture Studio Website
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
