<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { useI18n } from "vue-i18n";
import callServer from "../../../../../assets/scripts/callServer/callServer";
import type Forms from "../../interface/forms";

// emit
const emit = defineEmits<{
    (e: 'changeForm', form: Forms): void,
    (e: 'close'): void
}>();



// i18n
const { t } = useI18n();

// vars
const reset_code = ref<string|null>(null);
const resend_statue = ref(true);
const reset_counter = ref(60);

// handel submit
async function handelSubmit() {
    if (reset_code.value == null || reset_code.value.toString().length != 6) {
        // store.commit("toast/push", {
        //     type: "error",
        //     msg: t("navbar.register.confirmCode.error"),
        // });
    } else {
        // store.commit("resetPassword/changeReset", reset_code.value);
        emit("changeForm", "newPassword");
    }
}

// resend code
async function resendCode() {
    if (resend_statue.value) {
        // await store.dispatch("resetPassword/sendCode");
        // store.commit("toast/push", {
        //     type: "success",
        //     msg: t("navbar.register.confirmCode.resend.success"),
        // });
        resend_statue.value = false;
        let counter = setInterval(() => {
            reset_counter.value -= 1;
            if (reset_counter.value == 0) {
                reset_counter.value = 60;
                resend_statue.value = true;
                clearInterval(counter);
            }
        }, 1000);
    }
}
</script>

<template>
    <form action="" class="confirmation-code" @submit.prevent>
        <!-- resend code -->
        <section class="resend-code">
            <button
                @click="resendCode"
                :class="{ not_allowed: !resend_statue }"
            >
                {{ t("navbar.register.confirmCode.resend.title") }}
            </button>
            <transition name="fade">
                <section class="resend_counter" v-if="!resend_statue">
                    {{ t("navbar.register.confirmCode.resend.message.title") }}
                    {{ reset_counter }}
                    {{ t("navbar.register.confirmCode.resend.message.unit") }}
                </section>
            </transition>
        </section>
        <!-- inputs -->
        <section class="inputs">
            <!-- custom number -->
            <section class="custom-input">
                <input
                    type="number"
                    v-model="reset_code"
                    placeholder="123456"
                />
            </section>
        </section>
        <!-- submit -->
        <section class="submit">
            <button type="submit" @click.prevent="handelSubmit">
                {{ t("navbar.register.confirmCode.submit") }}
            </button>
        </section>
        <!-- call support -->
        <section class="call-support">
            <p>{{ t("navbar.register.confirmCode.changer.title") }}</p>
            <router-link to="#" @click="emit('close')">{{
                t("navbar.register.confirmCode.changer.target")
            }}</router-link>
        </section>
    </form>
</template>
