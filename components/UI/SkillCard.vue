<template>
    <div
        class="group flex justify-center flex-col space-y-4 rounded-full w-1/5 h-44 border border-light-gray hover:border-light-green transition-colors duration-300"
    >
        <slot name="svg"></slot>
        <p class="group-hover:text-light-green text-lg text-center text-white transition-colors duration-300">
            <slot></slot>
        </p>
    </div>
</template>
