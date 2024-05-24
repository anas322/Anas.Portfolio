<template>
    <div
        class="group flex justify-center flex-col space-y-4 rounded-full w-[calc(50%-8px)] h-40 sm:h-44 sm:w-44 border border-light-gray hover:border-light-green transition-colors duration-300"
    >
        <slot name="svg"></slot>
        <p class="group-hover:text-light-green text-lg text-center text-white transition-colors duration-300">
            <slot></slot>
        </p>
    </div>
</template>
