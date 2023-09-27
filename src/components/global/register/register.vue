<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useAuthStore } from "@/stores/auth";
import NicePassword from "@/components/global/CusomInputs/NicePassword/NicePassword.vue";
import { useRouter } from "vue-router";
import SimpleInput from "@/components/global/CusomInputs/SimpleInput/SimpleInput.vue";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import AOS from "aos";
// router
const router = useRouter();

// auth store
const authStore = useAuthStore();

// input
let FormData = ref<{
  FristName: String;
  LastName: String;
  email: String;
  password: String;
  phone: Number;
}>({
  FristName: "fatma",
  LastName: "samir",
  email: "user@gmail",
  password: "2323423",
  phone: 23234234234,
});
// input password type
const passwordFieldType = ref<string>("password");

// i18n
const { t } = useI18n();

// error
const error = ref<number>();

let date = new Date();

// update password
// const updatePassword = (value: string) => {
//   password.value = value;
// };

// show/hide new password
const switchVisibility = () => {
  passwordFieldType.value =
    passwordFieldType.value === "password" ? "text" : "password";
};

// handel submit
const handelSubmit = async () => {
  // try {
  //   const formData = new URLSearchParams();
  //   formData.append("email", email.value!);
  //   formData.append("password", password.value!);
  //   await authStore.login(formData).then(() => {
  //     if (authStore.is_auth) {
  //       setTimeout(() => {
  //         router.push("/Dashboard");
  //       }, 1000);
  //       authStore.is_waiting = false;
  //     }
  //   });
  // } catch (err) {
  //   error.value = err as number;
  // }
  router.push("/register-continue");
};

onMounted(() => {
  AOS.init();
});
</script>

<template>
  <section class="auth-form">
    <div class="row">
      <div class="col-lg-7 col-12 m-0 p-0 logo_box">
        <div
          class="logo"
          data-aos="flip-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-out"
        >
          <h4>Logo</h4>
        </div>
        <div class="logo_box_img">
          <img src="@/assets/images/global/icons/global/Carbackground.svg" />
        </div>
      </div>
      <div
        class="col-lg-5 col-12 main-box"
        data-aos="zoom-in-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-out"
      >
        <div class="middle">
          <div class="auth_header text-start">
            <h3>{{ t("Register") }}</h3>
            <p>{{ t("Register_msg") }}</p>
            <div class="ContinueWith">
              <p>{{ t("ContinueWith") }} :</p>
              <router-link to="/" class="card">
                <img src="@/assets/images/global/icons/global/Email.svg" />
                <p>{{ t("Google") }}</p>
              </router-link>
              <router-link to="/" class="card">
                <img src="@/assets/images/global/icons/global/facebook.svg" />
                <p>{{ t("Facebook") }}</p>
              </router-link>
            </div>
            <div class="Or mx-3">
              <p>{{ t("OR") }}</p>
            </div>
          </div>
          <div class="form mt-4">
            <div
              class="row mt-3 mx-0 px-0"
              data-aos="zoom-in-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <div class="col-md-6 mx-0 px-0">
                <SimpleInput>
                  <!-- <label>Email <span class="text-red">*</span> </label> -->
                  <input
                    type="text"
                    id="fristName"
                    name="fristName"
                    :placeholder="t('fristName')"
                    required
                    v-model="FormData.FristName"
                  />
                </SimpleInput>
              </div>
              <div class="col-md-6">
                <SimpleInput>
                  <!-- <label>Email <span class="text-red">*</span> </label> -->
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    :placeholder="t('lastName')"
                    required
                    v-model="FormData.LastName"
                  />
                </SimpleInput>
              </div>
            </div>
            <div
              class="col-md-12 mt-3 passwordField"
              data-aos="zoom-in-up"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <SimpleInput>
                <!-- <label>Email <span class="text-red">*</span> </label> -->
                <input
                  type="email"
                  id="email"
                  name="email"
                  :placeholder="t('email')"
                  required
                  v-model="FormData.email"
                />
              </SimpleInput>
            </div>
            <div
              class="col-md-12 mt-3 passwordField"
              data-aos="zoom-in-up"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <SimpleInput>
                <!-- <label>Email <span class="text-red">*</span> </label> -->
                <input
                  type="number"
                  id="number"
                  name="number"
                  :placeholder="t('number')"
                  required
                  v-model="FormData.phone"
                />
              </SimpleInput>
            </div>
            <div
              class="col-md-12 mt-3 passwordField"
              data-aos="zoom-in-up"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <SimpleInput>
                <!-- <label>Email <span class="text-red">*</span> </label> -->
                <input
                  :type="passwordFieldType"
                  id="file-name"
                  name="file-name"
                  :placeholder="t('password')"
                  required
                  v-model="FormData.password"
                /><img
                  src="@/assets/images/global/icons/global/eye-svgrepo.svg"
                  @click="switchVisibility"
                  class="pass_icon"
                  v-if="passwordFieldType == 'password'"
                /><img
                  src="@/assets/images/global/icons/global/eye-slash.svg"
                  @click="switchVisibility"
                  class="pass_icon"
                  v-else
                />
              </SimpleInput>
            </div>
            <div class="col-md-12 mt-3 forget_remember">
              <div class="d-flex align-items-center">
                <input type="checkbox" value="lsRememberMe" id="rememberMe" />
                <label for="rememberMe" class="mx-2">
                  {{ t("Iaccept_conditions1") }}
                  <span class="color-main">{{
                    t("Iaccept_conditions2")
                  }}</span></label
                >
              </div>
            </div>
            <div class="col-12 mt-3">
              <SimpleButton type="send" class="register_lab">
                <button
                  type="submit"
                  @click="handelSubmit"
                  v-if="!authStore.is_loading"
                >
                  {{ t("Continue") }}
                </button>
                <button type="submit" disabled v-else>
                  {{ t("wait") }}
                </button>
              </SimpleButton>
            </div>
            <div class="col-12 register mt-3">
              <p>{{ t("Have_an_account") }}</p>
              <router-link to="/login" class="new_lab px-2">
                {{ t("Login") }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- main box -->
  </section>
</template>
<style lang="scss" scoped>
@import "../Login/AuthSyling.scss";
.auth-form {
  /* main-box */
  .main-box {
    height: 100%;
  }
}
</style>
