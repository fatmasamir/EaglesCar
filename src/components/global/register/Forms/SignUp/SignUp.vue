<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useI18n } from "vue-i18n";
import type { Error } from "./interface";
import { useAuthStore } from "@/stores/auth";
import NicePassword from "../../../../Global/CusomInputs/NicePassword/NicePassword.vue";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";

// emit
const emit = defineEmits(["changeForm", "close"]);

// i18n
const { t } = useI18n();

// auth store
const authStore = useAuthStore();

// vars
const name = ref();
const email = ref();
const phone = ref();
const password = ref();
const password_confirmation = ref();

// -- intlTelInput
const input_phone = ref();
const intlTel = ref<any | null>(null);
function getUdserIp(callBack: (country: string) => void) {
    fetch("https://ipinfo.io/json?token=b40685e42ea02b", {
        headers: { Accept: "application/json" },
    })
        .then((response) => response.json())
        .then((data) => callBack(data.country))
        .catch(() => callBack("sa"));
}

// errors
const errors = ref<{
    username: string;
    email: string;
    phone: string;
    password: string;
}>({
    username: "",
    email: "",
    phone: "",
    password: "",
});

// update passwords
const updatePassword = (value: string) => {
    password.value = value;
};
const updatePasswordConfarmation = (value: string) => {
    password_confirmation.value = value;
};
const handelSubmit = async () => {
    if (intlTel.value!.isValidNumber()) {
        try {
            await authStore.register({
                name: name.value,
                email: email.value,
                phone: phone.value,
                country_code: intlTel.value.selectedCountryData.dialCode,
                password: password.value,
                password_confirmation: password_confirmation.value,
            });
            emit("changeForm", "login");
        } catch (err: any) {
            for (let error in errors.value) {
                errors.value[error] = "";
            }
            for (let error in err) {
                errors.value[error] = err[error][0];
            }
        }
    } else errors.value.phone = "يجب عليك ادخال رقم هاتف صحيح";
};

onMounted(() => {
    intlTel.value = intlTelInput(input_phone.value, {
        initialCountry: "auto",
        geoIpLookup: getUdserIp,
        preferredCountries: ["eg", "sa"],
        utilsScript:
            "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });
});
</script>

<template>
    <form action="" class="sign-up" @submit.prevent="handelSubmit">
        <!-- socail -->
        <section class="socail">
            <a id="facebook" href="https://www.dev.arabpik.com/auth/facebook">
                <svg
                    id="_x30_1._Facebook"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.945"
                    height="27.705"
                    viewBox="0 0 14.945 27.705"
                >
                    <path
                        id="Icon_11_"
                        d="M32.561,25.738H29.128c-.555,0-.728-.208-.728-.728v-4.2c0-.555.208-.728.728-.728h3.433V17.035a7.7,7.7,0,0,1,.936-3.918,5.753,5.753,0,0,1,3.086-2.566,7.715,7.715,0,0,1,2.67-.451h3.4c.485,0,.693.208.693.693v3.953c0,.485-.208.693-.693.693-.936,0-1.872,0-2.809.035A1.252,1.252,0,0,0,38.421,16.9c-.035,1.04,0,2.046,0,3.121h4.022c.555,0,.763.208.763.763v4.2c0,.555-.173.728-.763.728H38.421v11.3c0,.589-.173.8-.8.8H33.289c-.52,0-.728-.208-.728-.728V25.738Z"
                        transform="translate(-28.4 -10.1)"
                        fill="#fff"
                    />
                </svg>
                <span>{{ t("navbar.register.social.facebook") }}</span>
            </a>
            <a id="google" href="https://www.dev.arabpik.com/auth/google">
                <svg
                    id="svgexport-6"
                    xmlns="http://www.w3.org/2000/svg"
                    width="27.705"
                    height="27.705"
                    viewBox="0 0 27.705 27.705"
                >
                    <path
                        id="Path_6"
                        data-name="Path 6"
                        d="M0,13.852A13.868,13.868,0,0,1,13.852,0,13.725,13.725,0,0,1,22.3,2.87L19.077,7.052a8.492,8.492,0,0,0-5.225-1.775,8.575,8.575,0,1,0,8.16,11.214h-8.16V11.214H27.7v2.639a13.852,13.852,0,0,1-27.7,0Z"
                        transform="translate(0 0)"
                        fill="#fff"
                    />
                </svg>

                <span>{{ t("navbar.register.social.google") }}</span>
            </a>
        </section>

        <!-- inputs -->
        <section class="inputs">
            <!-- user name -->
            <section class="error" v-if="errors.username">
                <span>{{ errors.username }}</span>
            </section>
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
                            id="Group_24"
                            data-name="Group 24"
                            transform="translate(-1208 -575)"
                        >
                            <rect
                                id="Rectangle_9"
                                data-name="Rectangle 9"
                                width="24"
                                height="24"
                                transform="translate(1208 575)"
                                fill="none"
                            />
                            <g id="user" transform="translate(1208 575)">
                                <path
                                    id="Path_8"
                                    data-name="Path 8"
                                    d="M12,12A6,6,0,1,0,6,6a6,6,0,0,0,6,6ZM12,2A4,4,0,1,1,8,6a4,4,0,0,1,4-4Z"
                                    fill="#8f8f8f"
                                />
                                <path
                                    id="Path_9"
                                    data-name="Path 9"
                                    d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,1,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z"
                                    fill="#8f8f8f"
                                />
                            </g>
                        </g>
                    </svg>
                </section>
                <input
                    type="text"
                    name="user-name"
                    :placeholder="t('navbar.register.inputs.name')"
                    v-model="name"
                    required
                />
            </section>
            <!-- email -->
            <section class="error" v-if="errors.email">
                <span>{{ errors.email }}</span>
            </section>
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
            <!-- phone -->
            <section class="error" v-if="errors.phone">
                <span>{{ errors.phone }}</span>
            </section>
            <section class="custom-input">
                <!-- icon -->
                <section class="icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24.002"
                        viewBox="0 0 24 24.002"
                    >
                        <g
                            id="Group_25"
                            data-name="Group 25"
                            transform="translate(-1208 -751)"
                        >
                            <rect
                                id="Rectangle_10"
                                data-name="Rectangle 10"
                                width="24"
                                height="24"
                                transform="translate(1208 751)"
                                fill="none"
                            />
                            <path
                                id="call-history"
                                d="M17.762,24C9.631,24.275-5.017,9.745,1.784,1.867l1.15-1A3.08,3.08,0,0,1,7.26.911a1,1,0,0,1,.086.1l1.8,2.339a3.108,3.108,0,0,1-.01,4.28L7.978,9.086a12.789,12.789,0,0,0,6.931,6.946l1.464-1.165a3.17,3.17,0,0,1,4.282-.006l2.34,1.8a1.126,1.126,0,0,1,.1.085,3.11,3.11,0,0,1,0,4.378l-.911,1.05A6.154,6.154,0,0,1,17.762,24ZM5.071,2a1.094,1.094,0,0,0-.774.32l-1.151,1C-2.5,10.108,14.777,26.423,20.72,20.808l.912-1.051a1.1,1.1,0,0,0,.085-1.559L19.39,16.411a.811.811,0,0,1-.1-.087,1.122,1.122,0,0,0-1.548,0,1.01,1.01,0,0,1-.084.076L15.7,17.96a1,1,0,0,1-.979.152A15.011,15.011,0,0,1,5.9,9.3a1,1,0,0,1,.146-1L7.6,6.344a.849.849,0,0,1,.075-.084,1.1,1.1,0,0,0,0-1.549.866.866,0,0,1-.086-.1L5.806,2.287a1.093,1.093,0,0,0-.735-.282ZM17.036,15.618Z"
                                transform="translate(1207.967 750.999)"
                                fill="#8f8f8f"
                            />
                        </g>
                    </svg>
                </section>
                <input
                    type="tel"
                    name="user-phone"
                    v-model="phone"
                    required
                    min="9999999"
                    ref="input_phone"
                    id="phone"
                />
            </section>
            <!-- password -->
            <section class="error" v-if="errors.password">
                <span>{{ errors.password }}</span>
            </section>
            <section class="custom-input password">
                <NicePassword
                    name="user-password"
                    :placeholder="t('navbar.register.inputs.password')"
                    @currentValue="updatePassword"
                />
            </section>
            <!-- confirm password -->
            <section class="custom-input password">
                <NicePassword
                    name="user-confirm-password"
                    :placeholder="t('navbar.register.inputs.confirm_password')"
                    @currentValue="updatePasswordConfarmation"
                />
            </section>
        </section>

        <!-- license -->
        <section class="license">
            <p>
                {{ t("navbar.register.signup.rule.title") }}
                <router-link to="#" @click="emit('close')">{{
                    t("navbar.register.signup.rule.privacy")
                }}</router-link>
                {{ t("navbar.register.signup.rule.and") }}
                <router-link to="#" @click="emit('close')">{{
                    t("navbar.register.signup.rule.agreement")
                }}</router-link>
            </p>
        </section>
        <!-- submit -->
        <section class="submit">
            <button type="submit">
                {{ t("navbar.register.signup.title") }}
            </button>
        </section>
        <!-- login -->
        <section class="change">
            <p>
                {{ t("navbar.register.signup.changer.title") }}
                <button @click="emit('changeForm', 'login')" type="button">
                    {{ t("navbar.register.signup.changer.target") }}
                </button>
            </p>
        </section>
    </form>
</template>

<style lang="scss">
.iti.iti--allow-dropdown {
    width: 100%;
    .iti__arrow {
        margin: 0 6px;
    }
    .iti__country-list {
        z-index: 3;
        left: 0;
        .iti__country {
            display: flex;
            align-items: center;
        }
    }
}
</style>
