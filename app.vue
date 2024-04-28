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
.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
body {
    background-color: #1f1f1f;
}
* {
    font-family: "Inter", sans-serif;
    font-weight: 200;
}
</style>
