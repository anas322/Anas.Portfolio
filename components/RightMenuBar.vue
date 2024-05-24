<template>
    <div
        class="flex flex-col gap-y-6 fixed right-16 top-1/2 -translate-y-1/2 px-3 py-8 border border-light-gray rounded-full"
    >
        <!-- home -->
        <div class="group relative">
            <UISVGHome
                class="text-light-gray hover:text-dark-green fill-current transition-colors duration-300 cursor-pointer"
            />
            <span
                class="absolute top-0 right-12 w-max scale-0 rounded bg-light-gray p-2 text-xs text-white group-hover:scale-100 transition-all"
                >✨ Home
                <span
                    class="w-1 h-1 inline-block absolute top-1/2 -translate-y-1/2 right-0 border-8 border-light-gray border-t-transparent border-b-transparent border-r-transparent translate-x-3.5"
                ></span
            ></span>
        </div>

        <!-- about -->
        <div class="group relative">
            <UISVGAbout
                class="text-light-gray hover:text-dark-green fill-current transition-colors duration-300 cursor-pointer"
            />
            <span
                class="absolute top-0 right-12 w-max scale-0 rounded bg-light-gray p-2 text-xs text-white group-hover:scale-100 transition-all"
                >✨ About
                <span
                    class="w-1 h-1 inline-block absolute top-1/2 -translate-y-1/2 right-0 border-8 border-light-gray border-t-transparent border-b-transparent border-r-transparent translate-x-3.5"
                ></span
            ></span>
        </div>

        <!-- reseme -->
        <div class="group relative">
            <UISVGReseme
                class="text-light-gray hover:text-dark-green fill-current transition-colors duration-300 cursor-pointer"
            />

            <span
                class="absolute top-0 right-12 w-max scale-0 rounded bg-light-gray p-2 text-xs text-white group-hover:scale-100 transition-all"
                >✨ Resume
                <span
                    class="w-1 h-1 inline-block absolute top-1/2 -translate-y-1/2 right-0 border-8 border-light-gray border-t-transparent border-b-transparent border-r-transparent translate-x-3.5"
                ></span
            ></span>
        </div>

        <!-- services -->
        <div class="group relative">
            <UISVGServices
                class="text-light-gray hover:text-dark-green fill-current transition-colors duration-300 cursor-pointer"
            />

            <span
                class="absolute top-0 right-12 w-max scale-0 rounded bg-light-gray p-2 text-xs text-white group-hover:scale-100 transition-all"
                >✨ Services
                <span
                    class="w-1 h-1 inline-block absolute top-1/2 -translate-y-1/2 right-0 border-8 border-light-gray border-t-transparent border-b-transparent border-r-transparent translate-x-3.5"
                ></span
            ></span>
        </div>

        <!-- skill -->
        <div class="group relative">
            <UISVGSkills
                class="text-light-gray hover:text-dark-green fill-current transition-colors duration-300 cursor-pointer"
            />

            <span
                class="absolute top-0 right-12 w-max scale-0 rounded bg-light-gray p-2 text-xs text-white group-hover:scale-100 transition-all"
                >✨ Skills
                <span
                    class="w-1 h-1 inline-block absolute top-1/2 -translate-y-1/2 right-0 border-8 border-light-gray border-t-transparent border-b-transparent border-r-transparent translate-x-3.5"
                ></span
            ></span>
        </div>

        <!-- portfolio -->
        <div class="group relative">
            <UISVGPortfolio
                class="text-light-gray hover:text-dark-green fill-current transition-colors duration-300 cursor-pointer"
            />

            <span
                class="absolute top-0 right-12 w-max scale-0 rounded bg-light-gray p-2 text-xs text-white group-hover:scale-100 transition-all"
                >✨ Portfolio
                <span
                    class="w-1 h-1 inline-block absolute top-1/2 -translate-y-1/2 right-0 border-8 border-light-gray border-t-transparent border-b-transparent border-r-transparent translate-x-3.5"
                ></span
            ></span>
        </div>

        <!-- contact -->
        <div class="group relative">
            <UISVGContact
                class="text-light-gray hover:text-dark-green fill-current transition-colors duration-300 cursor-pointer"
            />

            <span
                class="absolute top-0 right-12 w-max scale-0 rounded bg-light-gray p-2 text-xs text-white group-hover:scale-100 transition-all"
                >✨ Contact
                <span
                    class="w-1 h-1 inline-block absolute top-1/2 -translate-y-1/2 right-0 border-8 border-light-gray border-t-transparent border-b-transparent border-r-transparent translate-x-3.5"
                ></span
            ></span>
        </div>
    </div>
</template>
