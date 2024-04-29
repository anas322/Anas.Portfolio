<template>
    <div
        class="group p-8 border border-light-gray hover:border-light-green rounded-3xl space-y-8 transition-colors duration-300"
    >
        <div>
            <p class="text-white group-hover:text-light-green text-2xl transition-colors duration-300">
                <slot name="header"></slot>
            </p>
            <p class="text-light-gray text-sm text-justify pt-4">
                <slot name="body"></slot>
            </p>
        </div>

        <p class="group-hover:underline text-white text-sm transition-colors duration-300">
            <slot name="footer"></slot>
        </p>
    </div>
</template>
