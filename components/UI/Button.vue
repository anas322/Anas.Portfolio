<template>
    <div ref="element" class="flex items-center py-1 px-6 w-max rounded-full border border-light-gray">
        <slot name="icon" />
        <span class="text-white text-xs font-light uppercase pl-1"><slot /></span>
    </div>
</template>

<script setup>
const element = ref(null);
onMounted(() => {
    addClass(element.value, ["animate__animated", "animate__fadeInUp"]);
});
</script>
