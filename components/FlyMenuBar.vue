<template>
    <div>
        <div :class="toggleMenu.bgToggle" @click="showMenu"></div>

        <div :class="toggleMenu.menuToggle">
            <div class="h-screen w-min mx-auto pt-12">
                <p class="mb-10 text-lg text-light-gray font-normal">Menu</p>

                <div class="flex flex-col gap-y-2">
                    <div class="group flex gap-1 cursor-pointer py-1">
                        <UISVGHome
                            class="text-light-gray group-hover:text-dark-green fill-current p-1 pl-0 transition-colors duration-300"
                        />
                        <p
                            class="text-xs text-light-gray group-hover:text-white font-medium leading-7 transition-colors duration-300"
                        >
                            Home
                        </p>
                    </div>

                    <div class="group flex gap-1 cursor-pointer py-1">
                        <UISVGAbout
                            class="text-light-gray group-hover:text-dark-green fill-current p-1 pl-0 transition-colors duration-300"
                        />
                        <p
                            class="text-xs text-light-gray group-hover:text-white font-medium leading-7 transition-colors duration-300"
                        >
                            About
                        </p>
                    </div>

                    <div class="group flex gap-1 cursor-pointer py-1">
                        <UISVGReseme
                            class="text-light-gray group-hover:text-dark-green fill-current p-1 pl-0 transition-colors duration-300 dua"
                        />
                        <p
                            class="text-xs text-light-gray group-hover:text-white font-medium leading-7 transition-colors duration-300"
                        >
                            Resume
                        </p>
                    </div>

                    <div class="group flex gap-1 cursor-pointer py-1">
                        <UISVGServices
                            class="text-light-gray group-hover:text-dark-green fill-current p-1 pl-0 transition-colors duration-300"
                        />
                        <p
                            class="text-xs text-light-gray group-hover:text-white font-medium leading-7 transition-colors duration-300"
                        >
                            Services
                        </p>
                    </div>

                    <div class="group flex gap-1 cursor-pointer py-1">
                        <UISVGSkills
                            class="text-light-gray group-hover:text-dark-green fill-current p-1 pl-0 transition-colors duration-300"
                        />
                        <p
                            class="text-xs text-light-gray group-hover:text-white font-medium leading-7 transition-colors duration-300"
                        >
                            Skills
                        </p>
                    </div>

                    <div class="group flex gap-1 cursor-pointer py-1">
                        <UISVGPortfolio
                            class="text-light-gray group-hover:text-dark-green fill-current p-1 pl-0 transition-colors duration-300"
                        />
                        <p
                            class="text-xs text-light-gray group-hover:text-white font-medium leading-7 transition-colors duration-300"
                        >
                            Portfolio
                        </p>
                    </div>

                    <div class="group flex gap-1 cursor-pointer py-1">
                        <UISVGContact
                            class="text-light-gray group-hover:text-dark-green fill-current p-1 pl-0 transition-colors duration-300"
                        />
                        <p
                            class="text-xs text-light-gray group-hover:text-white font-medium leading-7 transition-colors duration-300"
                        >
                            Contact
                        </p>
                    </div>
                </div>

                <p class="mt-10 mb-4 text-lg text-light-gray font-normal">Social</p>

                <div class="flex gap-x-4">
                    <NuxtLink to="https://www.linkedin.com/in/anas-elnahef/" target="_blank">
                        <div class="flex cursor-pointer">
                            <UISVGSocialLinkedin
                                class="text-light-gray hover:text-light-green fill-current box-border p-1 transition-colors duration-300"
                            />
                        </div>
                    </NuxtLink>

                    <NuxtLink to="https://www.instagram.com/anas0dev/" target="_blank">
                        <div class="flex cursor-pointer">
                            <UISVGSocialInstagram
                                class="text-light-gray hover:text-light-green fill-current box-border p-1 transition-colors duration-300"
                            />
                        </div>
                    </NuxtLink>

                    <NuxtLink to="https://twitter.com/Anas0Dev" target="_blank">
                        <div class="flex cursor-pointer">
                            <UISVGSocialTwitter
                                class="text-light-gray hover:text-light-green fill-current box-border p-1 transition-colors duration-300"
                            />
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(["FlyButton"]);
const props = defineProps(["FlyButton"]);

const toggleMenu = computed(() =>
    props.FlyButton
        ? {
              bgToggle: "z-10 fixed inset-0 w-full bg-light-gray opacity-30 transition-all duration-700",
              menuToggle:
                  "fixed max-w-[345px] w-full top-0 right-0 bottom-0 opacity-100 z-10 bg-dark-gray transition-all duration-700",
          }
        : {
              bgToggle: "z-10 fixed inset-0 bg-light-gray w-0 transition-all duration-700",
              menuToggle:
                  "fixed max-w-[345px] w-0 top-0 right-0 bottom-0 opacity-100 z-10 bg-dark-gray transition-all duration-700",
          }
);

const showMenu = () => {
    emit("FlyButton");
};
</script>
