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
const email = ref<string>("user@app.com");
const password = ref<string>("");
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

// handel submit
const handelSubmit = async () => {
  try {
    const formData = new URLSearchParams();
    formData.append("email", email.value!);
    formData.append("password", password.value!);
    await authStore.login(formData).then(() => {
      if (authStore.is_auth) {
        setTimeout(() => {
          router.push("/Dashboard");
        }, 1000);
        authStore.is_waiting = false;
      }
    });
  } catch (err) {
    error.value = err as number;
  }
};
const switchVisibility = () => {
  passwordFieldType.value =
    passwordFieldType.value === "password" ? "text" : "password";
};
onMounted(() => {
  AOS.init();
});
</script>

<template>
  <section class="login-form">
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
          <div class="login_header text-start">
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
          <div class="form mx-3">
            <div
              class="col-md-12 mt-3"
              data-aos="zoom-in-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <SimpleInput>
                <!-- <label>Email <span class="text-red">*</span> </label> -->
                <input
                  type="number"
                  id="file-name"
                  name="file-name"
                  :placeholder="t('number')"
                  required
                  v-model="Number"
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
              class="col-md-12 mt-3 forget_remember"
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
@import "../../../assets/scss/_variables.scss";

/* login-form */
.login-form {
  /* main-box */
  .main-box {
    height: 100vh;
    max-width: 100%;
    max-height: 100vh;
    background: var(--white-color);
    padding: 100px 40px 50px 60px;
    border-radius: var(--main-border-radius);
    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.3);
    }

    &::-webkit-scrollbar-thumb {
      background-color: transparent;
      outline: 1px solid transparent;
    }
    .login_header {
      h3,
      p {
        margin: 0;
      }
      h3 {
        font-weight: 700;
        margin: {
          bottom: 10px;
        }
      }
      p {
        color: var(--second-text-color);
        padding: 0px;
      }
    }

    /* simple-input */
    .simple-input {
      label {
        margin-bottom: 0;
      }
      text-align: initial;
      input,
      select {
        height: 55px !important;
        text-align: left;
        background: #f9f9f9;
      }
    }
    /* simple-button.send button */
    .simple-button.send button {
      width: 100%;
      background: var(--orange-text-color);
      height: 55px !important;
    }
    /* passwordField */
    .passwordField {
      position: relative;
      /* pass_icon */
      .pass_icon {
        position: absolute;
        right: 10px;
        bottom: 15px;
        cursor: pointer;
        width: 24px;
        height: 24px;
      }
    }
    .domin_group {
      .input-group-text {
        background-color: rgba(
          $color: var(--orange-text-color),
          $alpha: 0.1
        ) !important;
        text-transform: lowercase;
        border: 1px solid #dcddeb;
        padding: 0 5px;
        // border-top-left-radius: 8px !important;
        // border-bottom-left-radius: 8px !important;
        border-radius: 8px !important;
        margin: 0 5px;
        // order: 3;
      }
    }
    /* ContinueWith */
    .ContinueWith {
      display: flex;
      justify-content: start;
      align-items: center;
      margin: 10px 0px 30px;
      margin-right: 50px;
      a.card {
        display: flex;
        padding: 15px 14px;
        justify-content: space-around;
        background: #e5ecf3 !important;
        cursor: pointer;
        margin: 0px 10px;
        width: max-content;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
        margin: 0px 10px;
        color: #2f3b48;
        p {
          margin: 0px 5px;
        }
        img {
          width: 29px;
          height: 29px;
        }
        &:first-child {
          background: (229, 236, 243, 1);
        }
        &:hover {
          background: #d4effe;
        }
      }
    }
    /* Or */
    .Or {
      p {
        color: var(--orange-text-color);
      }
    }
    /* register */
    .register {
      display: flex;
      justify-content: center;
      align-items: top;
      p {
        margin: 0px;
      }
      a {
        color: var(--orange-text-color);
      }
    }
    /* forget_remember */
    .forget_remember {
      display: flex;
      justify-content: space-between;
      align-content: center;
      a {
        color: #f4a71d !important;
      }
    }
  }
  /* logo_box */
  .logo_box {
    background: white;
    margin: 0px;
    padding: 0px;
    position: relative;

    /* logo */
    .logo {
      position: absolute;
      top: 50px;
      left: 50px;
      right: auto;
      color: white;
      z-index: 2;
    }

    /* logo_box_img */
    .logo_box_img {
      width: 95%;
      margin-right: 5%;
      background: url(../../../assets/images/global/icons/global/Carbackground.svg)
        no-repeat right center;
      background-size: cover;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        display: none;
      }
    }
  }
}

/*media query */

@media screen and (max-width: 1240px) {
  .login-form .main-box .ContinueWith {
    margin-right: 0px;
    a.card {
      margin-bottom: 20px;
    }
  }
}
@media screen and (max-width: 1078px) {
  .login-form .main-box .ContinueWith {
    a.card {
      margin: 0px 5px;
      padding: 8px;
      p {
        display: none;
      }
    }
  }
}
@media screen and (max-width: 991px) {
  .login-form .main-box {
    width: 90%;
    margin: auto;
    .login_header {
      p {
        margin-right: 10px;
      }
    }
    .forget_remember,
    .register {
      flex-direction: column;
      text-align: center;
    }
  }
  .login-form .logo_box .logo_box_img {
    background: none;
    img {
      display: block;
      width: 90%;
      height: 100%;
    }
  }
}
@media screen and (max-width: 494px) {
  .login-form .main-box {
    padding: 60px 25px 50px;
  }
}
</style>
<style lang="scss">
/*ar version */
.is-ar {
  .login-form {
    .logo_box {
      .logo {
        position: absolute;
        top: 50px;
        right: 50px;
        left: auto;
      }
      .logo_box_img {
        transform: scaleX(-1);
        -webkit-transform: scaleX(-1);
        -ms-transform: scaleX(-1);
        -o-transform: scaleX(-1);
        margin-right: 0px;
        margin-left: 5%;
      }
    }
    .main-box .passwordField .pass_icon {
      right: auto;
      left: 10px;
    }
  }
  .text-start,
  .login-form .main-box .simple-input input[data-v-2ad4f39d],
  .login-form .main-box .simple-input select[data-v-2ad4f39d] {
    text-align: right !important;
  }
}
</style>
