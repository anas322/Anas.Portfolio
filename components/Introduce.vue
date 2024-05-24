<template>
    <section>
        <UIButton>
            <template #icon>
                <UISVGHome class="text-white fill-current p-1 pl-0" />
            </template>
            Introduce
        </UIButton>

        <div class="pt-16">
            <p class="text-5xl sm:text-7xl desktop:text-8xl text-white leading-snug font-light">
                Say Hi from <span class="text-dark-green">Anas</span>,<br />
                Full-Stack Web <br />
                Developer
            </p>

            <p class="pt-16 text-light-gray">
                I design and code beautifully simple things and i love what i do. <br />
                Just simple like that!
            </p>
        </div>

        <!-- my projects -->
        <div class="absolute desktop:bottom-28 bottom-28 desktop:right-0 right-10 cursor-pointer">
            <svg
                class="absolute text-white fill-current p-14"
                clip-rule="evenodd"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="m5.214 14.522s4.505 4.502 6.259 6.255c.146.147.338.22.53.22s.384-.073.53-.22c1.754-1.752 6.249-6.244 6.249-6.244.144-.144.216-.334.217-.523 0-.193-.074-.386-.221-.534-.293-.293-.766-.294-1.057-.004l-4.968 4.968v-14.692c0-.414-.336-.75-.75-.75s-.75.336-.75.75v14.692l-4.979-4.978c-.289-.289-.761-.287-1.054.006-.148.148-.222.341-.221.534 0 .189.071.377.215.52z"
                    fill-rule="nonzero"
                />
            </svg>
            <div class="animate-spin-slow ring-1 ring-light-gray w-40 h-40 rounded-full">
                <div class="w-full flex justify-center items-stretch">
                    <span class="pb-14 absolute text-white origin-bottom rotate-[-65deg]">M</span>
                    <span class="pb-14 absolute text-white origin-bottom rotate-[-50deg]">Y</span>
                    <span class="pb-14 absolute text-white origin-bottom rotate-[-32deg]">P</span>
                    <span class="pb-14 absolute text-white origin-bottom rotate-[-21deg]">R</span>
                    <span class="pb-14 absolute text-white origin-bottom rotate-[-10deg]">O</span>
                    <span class="pb-14 absolute text-white origin-bottom rotate-[1deg]">J</span>
                    <span class="pb-14 absolute text-white origin-bottom rotate-[12deg]">E</span>
                    <span class="pb-14 absolute text-white origin-bottom rotate-[23deg]">C</span>
                    <span class="pb-14 absolute text-white origin-bottom rotate-[34deg]">T</span>
                    <span class="pb-14 absolute text-white origin-bottom rotate-[45deg]">S</span>
                </div>

                <div class="w-full flex justify-center items-stretch">
                    <span class="pb-14 absolute text-white origin-bottom rotate-[115deg]">M</span>
                    <span class="pb-14 absolute text-white origin-bottom rotate-[130deg]">Y</span>
                    <span class="pb-14 absolute text-white origin-bottom rotate-[148deg]">P</span>
                    <span class="pb-14 absolute text-white origin-bottom rotate-[159deg]">R</span>
                    <span class="pb-14 absolute text-white origin-bottom rotate-[170deg]">O</span>
                    <span class="pb-14 absolute text-white origin-bottom rotate-[181deg]">J</span>
                    <span class="pb-14 absolute text-white origin-bottom rotate-[192deg]">E</span>
                    <span class="pb-14 absolute text-white origin-bottom rotate-[203deg]">C</span>
                    <span class="pb-14 absolute text-white origin-bottom rotate-[214deg]">T</span>
                    <span class="pb-14 absolute text-white origin-bottom rotate-[225deg]">S</span>
                </div>
                <div class="w-full flex justify-center items-stretch">
                    <span class="pb-14 absolute text-2xl text-white origin-bottom rotate-[72deg]">&#x2022;</span>
                </div>
                <div class="w-full flex justify-center items-stretch">
                    <span class="pb-14 absolute text-2xl text-white origin-bottom rotate-[-95deg]">&#x2022;</span>
                </div>
            </div>
        </div>
    </section>
</template>
