<script setup lang="ts">
import { ref } from "@vue/reactivity";
import callServer from "../../../../../assets/scripts/callServer/callServer";
import { useI18n } from "vue-i18n";
import type Forms from "../../interface/forms";
import { useAuthStore } from "../../../../../stores/auth";

// emit
const emit = defineEmits<{
    (e: 'changeForm', form: Forms): void,
    (e: 'close'): void
}>();

// register store
const authStore = useAuthStore();

// i18n
const { t } = useI18n();
// email
const email = ref();

// handel submit
async function handelSubmit() {
    // store.commit("resetPassword/changeEmail", email.value);
    // await store.dispatch("resetPassword/sendCode");
    // store.commit("toast/push", {
    //     type: "success",
    //     msg: t("navbar.register.resetPassword.codeSend"),
    // });
    emit("changeForm", "confirmationCode");
}
</script>

<template>
    <form action="" class="reset-password" @submit.prevent="handelSubmit">
        <!-- inputs -->
        <section class="inputs">
            <!-- email -->
            <section class="custom-input">
                <!-- icon -->
                <section class="icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <g
                            id="Group_21"
                            data-name="Group 21"
                            transform="translate(-1193 -417)"
                        >
                            <rect
                                id="Rectangle_9"
                                data-name="Rectangle 9"
                                width="24"
                                height="24"
                                transform="translate(1193 417)"
                                fill="none"
                            />
                            <path
                                id="envelope"
                                d="M19,1H5A5.006,5.006,0,0,0,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6a5.006,5.006,0,0,0-5-5ZM5,3H19a3,3,0,0,1,2.78,1.887l-7.658,7.659a3.007,3.007,0,0,1-4.244,0L2.22,4.887A3,3,0,0,1,5,3ZM19,21H5a3,3,0,0,1-3-3V7.5l6.464,6.46a5.007,5.007,0,0,0,7.072,0L22,7.5V18A3,3,0,0,1,19,21Z"
                                transform="translate(1193 417)"
                                fill="#8f8f8f"
                            />
                        </g>
                    </svg>
                </section>
                <input
                    type="text"
                    name="user-email"
                    :placeholder="t('navbar.register.inputs.email')"
                    v-model="email"
                    required
                />
            </section>
        </section>
        <!-- submit -->
        <section class="submit">
            <button type="submit">
                {{ t("navbar.register.resetPassword.submit") }}
            </button>
        </section>
        <!-- back to login -->
        <section class="change">
            <p>
                {{ t("navbar.register.resetPassword.changer.return.title") }}
                <button @click="emit('changeForm', 'login')" type="button">
                    {{
                        t("navbar.register.resetPassword.changer.return.target")
                    }}
                </button>
            </p>
        </section>
        <!-- call support -->
        <section class="call-support">
            <!-- icon -->
            <section class="icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Outline"
                    viewBox="0 0 24 24"
                    width="512"
                    height="512"
                >
                    <path
                        d="M21,12.424V11A9,9,0,0,0,3,11v1.424A5,5,0,0,0,5,22a2,2,0,0,0,2-2V14a2,2,0,0,0-2-2V11a7,7,0,0,1,14,0v1a2,2,0,0,0-2,2v6H14a1,1,0,0,0,0,2h5a5,5,0,0,0,2-9.576ZM5,20H5a3,3,0,0,1,0-6Zm14,0V14a3,3,0,0,1,0,6Z"
                    />
                </svg>
            </section>
            <p>
                {{ t("navbar.register.resetPassword.changer.contact.title") }}
            </p>
            <router-link to="#" @click="emit('close')">{{
                t("navbar.register.resetPassword.changer.contact.target")
            }}</router-link>
        </section>
    </form>
</template>
