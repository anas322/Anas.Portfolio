<template>
    <div class="relative -">
        <FlyToggleButton @click="toggleFlyButton" />
        <FlyMenuBar :FlyButton="FlyButton" @FlyButton="toggleFlyButton" />
        <PersonalData />
        <MainSection />
        <RightMenuBar />
    </div>
</template>

<script setup>
const FlyButton = ref(false);

const toggleFlyButton = () => {
    FlyButton.value = !FlyButton.value;
};
</script>
