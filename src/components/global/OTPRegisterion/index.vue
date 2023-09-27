<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useAuthStore } from "@/stores/auth";
import NicePassword from "@/components/global/CusomInputs/NicePassword/NicePassword.vue";
import { useRouter } from "vue-router";
import SimpleInput from "@/components/global/CusomInputs/SimpleInput/SimpleInput.vue";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import AOS from "aos";
import VOtpInput from "vue3-otp-input";

// router
const router = useRouter();

// auth store
const authStore = useAuthStore();

// i18n
const { t } = useI18n();

// date
let date = new Date();

// otpInput
const otpInput = ref<InstanceType<typeof VOtpInput> | null>(null);
const bindModal = ref("");

// handleOnComplete
const handleOnComplete = (value: string) => {
  console.log("OTP completed: ", value);
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

  console.log("OTP changed: ", bindModal.value);
};
onMounted(() => {
  AOS.init();
});
</script>

<template>
  <section class="auth-form otp-form">
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
            <h3>{{ t("OTP") }}</h3>
            <p>{{ t("forget_msg") }}</p>
          </div>
          <div class="form mt-5">
            <div class="style_otp">
              <v-otp-input
                ref="otpInput"
                v-model:value="bindModal"
                input-classes="otp-input"
                separator=" "
                :num-inputs="6"
                :should-auto-focus="true"
                input-type="letter-numeric"
                :conditionalClass="[
                  'one',
                  'two',
                  'three',
                  'four',
                  'five',
                  'six',
                ]"
                :placeholder="['-', '-', '-', '-', '-', '-']"
                @on-change="handleOnChange"
                @on-complete="handleOnComplete"
              />
            </div>
            <p class="invalid-error">{{ t("Wrong") }}</p>
            <div
              class="col-12 mt-3"
              data-aos="zoom-in-up"
              data-aos-easing="linear"
              data-aos-duration="1100"
            >
              <SimpleButton type="send" class="register_lab mx-3">
                <button
                  type="submit"
                  @click="handelSubmit"
                  v-if="!authStore.is_loading"
                  :disabled="bindModal.length < 6"
                >
                  {{ t("send") }}
                </button>
                <button type="submit" disabled v-else>
                  {{ t("wait") }} ...
                </button>
              </SimpleButton>
            </div>
            <div
              class="col-12 register mt-3"
              data-aos="zoom-in-up"
              data-aos-easing="linear"
              data-aos-duration="1300"
            >
              <p>
                {{ t("SendAgain") }} <span class="color-main">(30:00)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- main box -->
  </section>
</template>
<style lang="scss">
@import "../Login/AuthSyling.scss";

/* otp-form */
.otp-form {
  /* main-box */
  .main-box {
    padding: 100px 0px 70px;
    /* otp-input  */
    .style_otp {
      flex-direction: row;
      display: flex;
      .otp-input {
        width: 65%;
        height: 40px;
        padding: 5px;
        margin: 0 10px;
        font-size: 20px;
        border-radius: 4px;
        border: 1px solid rgba(0, 0, 0, 0.3);
        text-align: center;
        padding: 8px;
        outline: none;
        height: 55px !important;
        background: #f9f9f9;
        border: 1px solid var(--second-gray-border-color);
      }
      /* Background colour of an input field with value */

      .otp-input.is-complete {
        background-color: #e4e4e4;
      }
      .otp-input::-webkit-inner-spin-button,
      .otp-input::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      input::placeholder {
        font-size: 15px;
        text-align: center;
        font-weight: 600;
      }
    }
  }
}

/*media query */
@media screen and (max-width: 991px) {
  .auth-form .main-box {
    width: 80%;
    margin: auto;
    .forget-header {
      p {
        margin-right: 10px;
      }
    }
  }
}
@media screen and (max-width: 494px) {
  .auth-form .main-box {
    padding: 50px 5px;
    .col-4 {
      margin: 0px;
      padding: 5px;
    }
  }
  .otp-form .main-box .style_otp .otp-input {
    margin: 0px;
    width: 85%;
  }
}
</style>
