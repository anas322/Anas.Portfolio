<template>
    <section>
        <UIButton>
            <template #icon>
                <UISVGAbout class="text-white fill-current p-1 pl-0" />
            </template>
            About</UIButton
        >

        <div class="pt-16">
            <p ref="element1" class="text-5xl sm:text-6xl text-white leading-snug font-light">
                Every great Application begin with an even
                <span class="text-dark-green">better Idea</span><br />
            </p>

            <p ref="element2" class="pt-16 text-justify text-light-gray">
                I am a Full-Stack Web Developer with a passion for creating beautiful and functional websites. I have a
                strong foundation in web development and design, and I am always looking to learn and grow in the field.
                I am a creative thinker and problem solver, and I love working with others to bring ideas to life. I am
                excited to continue my journey as a developer and to create amazing things along the way.
            </p>
        </div>
    </section>
</template>

<script setup>
const element1 = ref(null);
const element2 = ref(null);
onMounted(() => {
    addClass(element1.value, ["animate__animated", "animate__fadeInUp"]);
    addClass(element2.value, ["animate__animated", "animate__fadeInUp"]);
});
</script>
