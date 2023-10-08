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
const email = ref<string>("");
const password = ref<string>("");
// input password type
const passwordFieldType = ref<string>("password");

// i18n
const { t } = useI18n();

// error
const error = ref<number>();

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
  console.log("Login ");
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
            <h3>{{ t("Login") }}</h3>
            <p>{{ t("login_msg") }}</p>
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
              class="col-md-12 mt-3"
              data-aos="zoom-in-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <SimpleInput>
                <!-- <label>Email <span class="text-red">*</span> </label> -->
                <input
                  type="email"
                  id="email"
                  name="email"
                  :placeholder="t('email')"
                  required
                  v-model="email"
                />
              </SimpleInput>
            </div>
            <div
              class="col-md-12 mt-2 passwordField"
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
                  v-model="password"
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
            <div
              class="col-md-12 mt-1 mb-4 forget_remember"
              data-aos="zoom-in-up"
              data-aos-easing="linear"
              data-aos-duration="900"
            >
              <div class="d-flex align-items-center">
                <input type="checkbox" value="lsRememberMe" id="rememberMe" />
                <label for="rememberMe" class="mx-2">
                  {{ t("remember_me") }}</label
                >
              </div>
              <router-link to="/forget-password">{{
                t("forgetPass")
              }}</router-link>
            </div>
            <div
              class="col-12 mt-3"
              data-aos="zoom-in-up"
              data-aos-easing="linear"
              data-aos-duration="1100"
            >
              <SimpleButton type="send" class="register_lab">
                <button
                  type="submit"
                  @click="handelSubmit"
                  v-if="!authStore.is_loading"
                >
                  {{ t("Login") }}
                </button>
                <button type="submit" disabled v-else>
                  {{ t("wait") }}
                </button>
              </SimpleButton>
            </div>
            <div
              class="col-12 register mt-3"
              data-aos="zoom-in-up"
              data-aos-easing="linear"
              data-aos-duration="1300"
            >
              <p>{{ t("Dont_have_account") }}</p>
              <router-link to="/register" class="new_lab px-2">
                {{ t("Signup") }}
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
@import "./AuthSyling.scss";
</style>
