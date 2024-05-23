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
                        d="M22 5v14h-20v-14h20zm2-2h-24v18h24v-18zm-2 16l-6.526-6.618-3.445 3.483-3.418-3.525-6.611 6.66 5.051-8-5.051-6 10.029 7.446 9.971-7.446-4.998 6.01 4.998 7.99z"
                    />
                </svg>
            </template>
            Contact</UIButton
        >
        <p class="text-5xl pt-24 text-white">Let's Work <span class="text-light-green">Together!</span></p>
        <p class="pt-10">
            <a
                href="mailto:anaselnahef12@gmail.com?subject=let's work together!"
                class="text-2xl text-white hover:text-dark-green transition-colors duration-300 underline"
                >anaselnahef12@gmail.com</a
            >
        </p>
        <div class="pt-16">
            <form>
                <div class="flex flex-wrap gap-6">
                    <div class="basis-[calc(50%-24px)] flex-col">
                        <label for="name" class="text-white text-xs font-medium tracking-wider uppercase"
                            >FULL NAME <span class="text-red-600 text-lg">*</span></label
                        >
                        <input
                            type="text"
                            id="name"
                            class="w-full bg-transparent rounded border border-transparent h-12 text-xl text-white transition-colors duration-300 focus:outline-none focus:border-light-green"
                            placeholder="Your Full Name"
                        />
                        <p class="text-red-600 text-lg pt-1 font-medium">Please fill out this field.</p>
                    </div>

                    <div class="basis-[calc(50%-24px)] flex-col">
                        <label for="email" class="text-white text-xs font-medium tracking-wider uppercase"
                            >EMAIL <span class="text-red-600 text-lg">*</span></label
                        >
                        <input
                            type="email"
                            id="email"
                            class="w-full bg-transparent rounded border border-transparent h-12 text-xl text-white transition-colors duration-300 focus:outline-none focus:border-light-green"
                            placeholder="Your Email Address"
                        />
                        <p class="text-red-600 text-lg pt-1 font-medium">Please fill out this field.</p>
                    </div>

                    <div class="basis-[calc(50%-24px)] flex-col">
                        <label for="PHONE" class="text-white text-xs font-medium tracking-wider uppercase"
                            >PHONE
                        </label>
                        <span class="text-xs lowercase align-text-top text-white">(optional)</span>
                        <input
                            type="number"
                            id="PHONE"
                            class="w-full bg-transparent rounded border border-transparent h-12 text-xl text-white transition-colors duration-300 focus:outline-none focus:border-light-green"
                            placeholder="Your Phone Number"
                        />
                    </div>

                    <div class="basis-full flex-1 flex-col">
                        <label for="MESSAGE" class="text-white text-xs font-medium tracking-wider uppercase"
                            >MESSAGE <span class="text-red-600 text-lg">*</span>
                        </label>
                        <textarea
                            id="MESSAGE"
                            class="w-full bg-transparent rounded border border-transparent text-xl text-white transition-colors duration-300 focus:outline-none focus:border-light-green"
                            placeholder="Your Message To Me..."
                            rows="3"
                            cols="50"
                        ></textarea>
                        <p class="text-red-600 text-lg pt-1 font-medium">Please fill out this field.</p>
                    </div>
                </div>

                <button class="mt-12 py-3 px-20 rounded-full bg-light-green">
                    <span class="text-lg p-0 uppercase font-light"> send message </span>
                </button>
            </form>
        </div>
    </section>
</template>
