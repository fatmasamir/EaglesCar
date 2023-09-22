<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { useI18n } from "vue-i18n";
import NicePassword from "../../../../Global/CusomInputs/NicePassword/NicePassword.vue";
import callServer from "../../../../../assets/scripts/callServer/callServer";
import type Forms from "../../interface/forms";

// emit
const emit = defineEmits<{
    (e: 'changeForm', form: Forms): void,
}>();
// store

// i18n
const { t } = useI18n();
// inputs
const new_password = ref<string>();
const confirm_new_password = ref<string>();

// handel submit
async function handelSubmit() {
    if (new_password.value != confirm_new_password.value) {
        // store.commit("toast/push", {
        //     type: "error",
        //     msg: t("navbar.register.newPassword.errors.notSame"),
        // });
    } else {
        // const response = await callServer("reset", false, {
        //     code: store.state.resetPassword.reset_code,
        //     password: new_password.value,
        //     password_confirmation: confirm_new_password.value,
        // });
        // if (response.ok) {
        //     emit("changeForm", "login");
        //     store.commit("toast/push", {
        //         type: "success",
        //         msg: t("navbar.register.newPassword.success"),
        //     });
        //     store.commit("resetPassword/changeReset", null);
        // } else if (response.status == 401) {
        //     emit("changeForm", "confirmationCode");
        //     store.commit("toast/push", {
        //         type: "error",
        //         msg: t("navbar.register.newPassword.errors.incorrectCode"),
        //     });
        //     store.commit("resetPassword/changeReset", null);
        // }
    }
}
</script>

<template>
    <form action="" class="new-password" @submit.prevent="handelSubmit">
        <!-- inputs -->
        <section class="inputs">
            <!-- password -->
            <section class="custom-input password">
                <NicePassword
                    name="password"
                    :placeholder="t('navbar.register.inputs.password')"
                    id="password"
                    @currentValue="(password: string) => (new_password = password)"
                />
            </section>
            <!-- confirm password -->
            <section class="custom-input password">
                <NicePassword
                    name="confirmPassword"
                    :placeholder="t('navbar.register.inputs.confirm_password')"
                    id="confirm-password"
                    @currentValue="
                        (password: string) => (confirm_new_password = password)
                    "
                />
            </section>
        </section>
        <!-- submit -->
        <section class="submit">
            <button type="submit">
                {{ t("navbar.register.newPassword.submit") }}
            </button>
        </section>
        <section class="change">
            <p>
                {{ t("navbar.register.newPassword.changer.title") }}
                <button @click="emit('changeForm', 'login')" type="button">
                    {{ t("navbar.register.newPassword.changer.target") }}
                </button>
            </p>
        </section>
    </form>
</template>
