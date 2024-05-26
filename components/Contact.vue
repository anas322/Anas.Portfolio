<template>
    <section class="mt-48">
        <UIButton>
            <template #icon>
                <UISVGContact class="text-white fill-current p-1 pl-0" />
            </template>
            Contact</UIButton
        >
        <p ref="element1" class="text-4xl sm:text-5xl pt-24 text-white">
            Let's Work <span class="text-light-green">Together!</span>
        </p>
        <p ref="element2" class="pt-10">
            <a
                href="mailto:anaselnahef12@gmail.com?subject=let's work together!"
                class="text-xl sm:text-2xl text-white hover:text-dark-green transition-colors duration-300 underline"
                >anaselnahef12@gmail.com</a
            >
        </p>
        <div class="pt-16">
            <form @submit.prevent="sendEmail">
                <div class="flex flex-wrap gap-6">
                    <div class="sm:basis-[calc(50%-24px)] flex-col">
                        <label for="name" class="text-white text-xs font-medium tracking-wider uppercase"
                            >FULL NAME <span class="text-red-600 text-lg">*</span></label
                        >
                        <input
                            type="text"
                            id="name"
                            class="w-full bg-transparent rounded border border-transparent h-12 text-xl text-white transition-colors duration-300 focus:outline-none focus:border-light-green"
                            placeholder="Your Full Name"
                            v-model.trim="name.value"
                            @change="name.error = false"
                        />
                        <p v-if="name.error" class="text-red-600 text-lg pt-1 font-medium">
                            Please fill out this field.
                        </p>
                    </div>

                    <div class="sm:basis-[calc(50%-24px)] flex-col">
                        <label for="email" class="text-white text-xs font-medium tracking-wider uppercase"
                            >EMAIL <span class="text-red-600 text-lg">*</span></label
                        >
                        <input
                            type="text"
                            id="email"
                            class="w-full bg-transparent rounded border border-transparent h-12 text-xl text-white transition-colors duration-300 focus:outline-none focus:border-light-green"
                            placeholder="Your Email Address"
                            v-model.trim="email.value"
                            @change="email.error = false"
                        />
                        <p v-if="email.error" class="text-red-600 text-lg pt-1 font-medium">
                            Please fill out this field.
                        </p>
                    </div>

                    <div class="sm:basis-[calc(50%-24px)] flex-col">
                        <label for="PHONE" class="text-white text-xs font-medium tracking-wider uppercase"
                            >PHONE
                        </label>
                        <span class="text-xs lowercase align-text-top text-white">(optional)</span>
                        <input
                            type="number"
                            id="PHONE"
                            class="w-full bg-transparent rounded border border-transparent h-12 text-xl text-white transition-colors duration-300 focus:outline-none focus:border-light-green"
                            placeholder="Your Phone Number"
                            v-model.trim="phone.value"
                            @change="phone.error = false"
                        />
                        <p v-if="phone.error" class="text-red-600 text-lg pt-1 font-medium">
                            Please enter a valid phone number.
                        </p>
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
                            v-model.trim="message.value"
                            @change="message.error = false"
                        ></textarea>
                        <p v-if="message.error" class="text-red-600 text-lg pt-1 font-medium">
                            Please fill out this field.
                        </p>
                    </div>
                </div>

                <button type="submit" class="mt-12 py-3 px-20 rounded-full bg-light-green">
                    <span class="text-lg p-0 uppercase font-light"> send message </span>
                </button>
            </form>
        </div>
    </section>
</template>

<script setup>
const name = reactive({ value: "", error: false });
const email = reactive({ value: "", error: false });
const phone = reactive({ value: "", error: false });
const message = reactive({ value: "", error: false });

const egyptianPhoneNumberPattern = /^(?:\+20|0)?(1[0125]\d{8}|2\d{7,8}|3\d{7,8}|[4-9]\d{7,8})$/;

const mail = ref("");

const sendEmail = () => {
    resetForm();

    if (!checkValidity()) {
        return;
    }
    mail.value = `mailto:anaselnahef12@gmail.com?subject=Let's work together!&body=${
        "Full Name: " + name.value + "  "
    }${phone.value ? "phone:" + phone.value + "  " : ""} ${message.value}`;

    window.open(mail.value, "_blank");
};

const checkValidity = () => {
    if (!name.value) {
        name.error = true;
    }

    if (!email.value) {
        email.error = true;
    }

    if (!message.value) {
        message.error = true;
    }

    if (phone.value && !egyptianPhoneNumberPattern.test(phone.value)) {
        phone.error = true;
    }

    if (name.error || email.error || message.error || phone.error) {
        return;
    }

    return true;
};

const resetForm = () => {
    name.error = false;
    email.error = false;
    message.error = false;
    phone.error = false;
};

// animatation code
const element1 = ref(null);
const element2 = ref(null);
onMounted(() => {
    addClass(element1.value, ["animate__animated", "animate__fadeInUp"]);
    addClass(element2.value, ["animate__animated", "animate__fadeInUp"]);
});
</script>
