<template>
    <div class="bg-dark-gray">
        <NuxtLoadingIndicator />
        <NuxtPage />
    </div>
</template>

<script setup>
useHead({
    title: "Anas.",
});
</script>

<style>
* {
    font-family: "Inter", sans-serif;
    font-weight: 200;
    box-sizing: border-box;
}

/* transition classes */
.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}

/* custom scrollbar */

::-webkit-scrollbar {
    width: 12px;
    height: 20px;
}

::-webkit-scrollbar-track {
    border-radius: 100vh;
    background: #434343;
}

::-webkit-scrollbar-thumb {
    background: #5c5b5b;
    border-radius: 100vh;
    border: 2px solid #6c6c6c;
}

::-webkit-scrollbar-thumb:hover {
    background: #519172;
}
/*  */
body {
    background-color: #1f1f1f;
}
</style>
