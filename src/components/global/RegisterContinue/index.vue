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
  type: String;
}>({
  type: "",
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
  router.push("/otp-registerion");
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
          </div>
          <div class="form mt-4">
            <div
              class="row mt-3 mx-0 px-0"
              data-aos="zoom-in-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <div class="col-md-6 p-0">
                <div class="content_Borrower">
                  <div
                    class="image_chooes"
                    :class="FormData.type == 'Borrower' ? 'active' : ''"
                    @click="FormData.type = 'Borrower'"
                  >
                    <img src="@/assets/images/global/icons/global/rental.svg" />
                  </div>
                  <p class="text-center">{{ t("Borrower") }}</p>
                </div>
              </div>
              <div class="col-md-6 p-0">
                <div class="content_Car_rental">
                  <div
                    class="image_chooes"
                    :class="FormData.type == 'Carrental' ? 'active' : ''"
                    @click="FormData.type = 'Carrental'"
                  >
                    <img
                      src="@/assets/images/global/icons/global/car-rental.svg"
                    />
                  </div>
                  <p class="text-center">{{ t("Car_rental") }}</p>
                </div>
              </div>
            </div>
            <div class="col-12 mt-2 mx-1">
              <SimpleButton type="send" class="register_lab">
                <button
                  type="submit"
                  @click="handelSubmit"
                  v-if="!authStore.is_loading"
                >
                  {{ t("Signup") }}
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
    .content_Car_rental,
    .content_Borrower {
      margin: 0px;
      padding: 0px;
      &:first-child {
        padding-left: 5px;
      }
      &:last-child {
        padding-right: 5px;
      }
    }
    .image_chooes {
      background: #c4c4c43d;
      width: 100%;
      height: auto;
      border-radius: 8px;
      margin-bottom: 10px;
      cursor: pointer;
      padding: 20px;
      img {
        width: 50px;
        height: 50px;
        margin: auto;
        display: block;
      }
    }
    .active {
      background: #d4effe;
    }
  }
}
</style>
