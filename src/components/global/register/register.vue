<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { useI18n } from "vue-i18n";
import { useAuthStore } from "@/stores/auth";
import NicePassword from "@/components/global/CusomInputs/NicePassword/NicePassword.vue";
import { useRouter } from "vue-router";
import SimpleInput from "@/components/global/CusomInputs/SimpleInput/SimpleInput.vue";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";

// router
const router = useRouter();

// auth store
const authStore = useAuthStore();

// input
const username = ref<string>();
const email = ref<string>();
const phone = ref<string>();
const password = ref<string>();

// i18n
const { t } = useI18n();

// error
const error = ref<number>();

// update password
const updatePassword = (value: string) => {
  password.value = value;
};

// handel submit
const handelSubmit = async () => {
  try {
    const formData = new URLSearchParams();
    // console.log(formData.constructor.name)
    formData.append("username", username.value!);
    formData.append("email", email.value!);
    formData.append("password", password.value!);
    await authStore.login(formData).then(() => {
      if (authStore.is_auth) {
        setTimeout(() => {
          router.push("/");
        }, 1000);
        authStore.is_waiting = false;
      }
    });
  } catch (err) {
    error.value = err as number;
  }
};
const onChange = function (event) {
  let len = event.target.value.length;
  if (len === 0) {
    document
      .querySelectorAll(".form-2 .progress-bar_item")
      .forEach(function (el) {
        el.classList.remove("active");
      });
  } else if (len > 0 && len <= 4) {
    document
      .querySelector(".form-2 .progress-bar_item-1")
      ?.classList.add("active");
    document
      .querySelector(".form-2 .progress-bar_item-2")
      ?.classList.remove("active");
    document
      .querySelector(".form-2 .progress-bar_item-3")
      ?.classList.remove("active");
  } else if (len > 4 && len <= 8) {
    document
      .querySelector(".form-2 .progress-bar_item-2")
      ?.classList.add("active");
    document
      .querySelector(".form-2 .progress-bar_item-3")
      ?.classList.remove("active");
  } else {
    document
      .querySelectorAll(".form-2 .progress-bar_item")
      .forEach(function (el) {
        el.classList.add("active");
      });
  }
};
</script>

<template>
  <section class="row register-form px-2">
    <!-- main box -->
    <section class="col-md-6 col-sm-8 main-box">
      <div class="row">
        <div class="upload_corner col-md-12 mt-3">
          <SimpleInput>
            <label class="text-center"
              >{{ t("image") }}
              <span class="text-red">*</span>
            </label>
            <div class="text-center">
              <div class="upload_show mb-3">
                <img
                  src="@/assets/images/global/icons/global/image-gallery.png"
                  alt=""
                />
              </div>
              <input type="file" id="upload" hidden />
              <label for="upload" class="upload_btn"
                ><img
                  src="@/assets/images/global/icons/global/upload.png"
                  alt=""
              /></label>
            </div>
          </SimpleInput>
        </div>
        <div class="col-md-6 mt-3">
          <SimpleInput>
            <label
              >{{ t("name") }} ({{ t("english") }})
              <span class="text-red">*</span>
            </label>
            <input type="text" id="file-name" name="file-name" required />
          </SimpleInput>
        </div>
        <div class="col-md-6 mt-3">
          <SimpleInput>
            <label
              >{{ t("name") }} ({{ t("arabic") }})
              <span class="text-red">*</span>
            </label>
            <input type="text" id="file-name" name="file-name" required />
          </SimpleInput>
        </div>
        <div class="col-md-12 mt-3">
          <SimpleInput>
            <label>{{ t("country") }} <span class="text-red">*</span></label>
            <select class="form-select">
              <option selected>{{ t("choose_country") }}</option>
            </select>
          </SimpleInput>
        </div>
        <div class="col-md-12 mt-3">
          <SimpleInput>
            <label>{{ t("domain") }} <span class="text-red">*</span> </label>

            <div class="domin_group input-group">
              <input
                type="text"
                class="form-control domin_input"
                aria-describedby="basic-addon2"
              />
              <span class="input-group-text" id="basic-addon2"
                >.orcalabs.net</span
              >
            </div>
          </SimpleInput>
        </div>
        <div class="col-md-6 mt-3">
          <SimpleInput>
            <label
              >{{ t("admin_name") }} <span class="text-red">*</span>
            </label>
            <input type="text" id="file-name" name="file-name" required />
          </SimpleInput>
        </div>
        <div class="col-md-6 mt-3">
          <SimpleInput>
            <label>{{ t("the_phone") }} <span class="text-red">*</span> </label>
            <input type="tel" id="file-name" name="file-name" required />
          </SimpleInput>
        </div>
        <div class="col-md-6 mt-3">
          <SimpleInput>
            <label>{{ t("password") }} <span class="text-red">*</span></label>
            <div class="password_group">
              <form class="form-2" action="">
                <input
                  class="input-2"
                  type="password"
                  placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
                  @keyup="onChange"
                />
                <div class="progress-bar_wrap">
                  <div class="progress-bar_item progress-bar_item-1"></div>
                  <div class="progress-bar_item progress-bar_item-2"></div>
                  <div class="progress-bar_item progress-bar_item-3"></div>
                </div>
                <span class="progress-bar_text">{{ t("pass_valid") }}</span>
              </form>
            </div>
          </SimpleInput>
        </div>
        <div class="col-md-6 mt-3">
          <SimpleInput>
            <label
              >{{ t("password_confirmation") }}
              <span class="text-red">*</span></label
            >
            <div class="password_group">
              <form class="form-2" action="">
                <input
                  class="input-2"
                  type="password"
                  placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
                />
                <!-- <div class="progress-bar_wrap">
                  <div class="progress-bar_item progress-bar_item-1"></div>
                  <div class="progress-bar_item progress-bar_item-2"></div>
                  <div class="progress-bar_item progress-bar_item-3"></div>
                </div> -->
                <!-- <span class="progress-bar_text">Password is blank</span> -->
              </form>
            </div>
          </SimpleInput>
        </div>
        <div class="col-12 mt-5">
          <SimpleButton type="send" class="register_lab mx-2">
            <button type="submit">{{ t("reg_n_lab") }}</button>
          </SimpleButton>
        </div>
      </div>
    </section>
    <div class="col-lg-6 d-none d-xl-flex d-lg-flex logo_box">
      <div class="hex"></div>
      <div class="hex"></div>
      <div class="hex"></div>
      <div class="hex"></div>

      <img src="@/assets/images/global/Logos/orca.svg" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../../../assets/scss/_variables.scss";

@media screen and (max-width: 767px) {
  section {
    padding-top: 10px !important;
  }
}
@media screen and (max-width: 992px) {
  header {
    height: fit-content !important;
    background: transparent !important;
  }
}
// .register-form {
//   .main-box {
//     height: 100vh;
//     max-width: 100%;
//     max-height: 100vh;
//     overflow-y: auto;
//     overflow-x: hidden;
//     background: var(--white-color);
//     padding: 20px;
//     border-radius: var(--main-border-radius);
//     &::-webkit-scrollbar {
//       width: 5px;
//     }
//     &::-webkit-scrollbar-track {
//       box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.3);
//     }

//     &::-webkit-scrollbar-thumb {
//       background-color: transparent;
//       outline: 1px solid transparent;
//     }
//     .upload_corner {
//       .upload_show {
//         width: 120px;
//         height: 120px;
//         margin: 0 auto;
//         background: #f0f0f0;
//         border: 5px solid #fff;
//         box-shadow: 0 6px 6px rgba(0, 0, 0, 0.2);
//         border-radius: 8px;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         img {
//           width: 50%;
//         }
//       }
//       .upload_btn {
//         width: 120px;
//         background: #cfd4d9;
//         border-radius: 8px;
//         padding: 5px;
//         img {
//           width: 30px;
//         }
//       }
//     }
//     .login_header {
//       h3,
//       p {
//         margin: 0;
//       }
//       h3 {
//         color: #009ef7;
//         margin: {
//           bottom: 15px;
//         }
//       }
//       p {
//         color: var(--second-text-color);
//       }
//     }
//     .top {
//       position: relative;
//       .background {
//         height: 100%;
//         position: absolute;
//         left: -28px;
//         top: 35%;
//         transform: translateY(-50%);
//         svg {
//           height: 100%;
//           transform: rotate(180deg);
//         }
//       }
//       .close {
//         width: 100%;
//         display: flex;
//         margin: {
//           bottom: 10px;
//         }
//         button {
//           all: unset;
//           width: 40px;
//           height: 40px;
//           background: var(--first-button-background);
//           border-radius: var(--main-border-radius);
//           cursor: pointer;
//         }
//       }
//       .logo {
//         display: flex;
//         margin: {
//           bottom: 30px;
//         }
//         justify-content: center;
//         img {
//           width: 200px;
//           filter: invert(1);
//         }
//       }

//       > header {
//         display: flex;
//         flex-direction: column;
//         h3,
//         p {
//           margin: 0;
//         }
//         h3 {
//           color: #009ef7;
//           margin: {
//             bottom: 15px;
//           }
//         }
//         p {
//           color: var(--second-text-color);
//         }
//       }
//     }
//     .bottom {
//       width: 100%;
//       display: flex;
//       margin: {
//         top: 20px;
//       }
//       .forms {
//         width: 100%;
//         display: flex;
//         form {
//           width: 100%;
//           display: flex;
//           flex-direction: column;
//           .socail {
//             width: 100%;
//             display: flex;
//             justify-content: space-between;
//             a {
//               all: unset;
//               width: 48%;
//               padding: 12px 0;
//               border-radius: var(--main-border-radius);
//               display: flex;
//               justify-content: center;
//               align-items: center;
//               cursor: pointer;
//               &:first-of-type {
//                 background: var(--facebook-color);
//               }
//               &:last-of-type {
//                 background: var(--google-color);
//               }
//               svg {
//                 margin: {
//                   right: 10px;
//                 }
//               }
//               span {
//                 color: var(--white-color);
//               }
//             }
//           }
//           .inputs {
//             display: flex;
//             flex-direction: column;
//             margin: 20px 0;
//             .custom-input {
//               width: 100%;
//               display: flex;
//               position: relative;
//               &:not(:last-of-type) {
//                 margin: {
//                   bottom: 10px;
//                 }
//               }
//               .icon {
//                 width: 40px;
//                 height: 100%;
//                 display: flex;
//                 justify-content: center;
//                 align-items: center;
//                 position: absolute;
//                 top: 50%;
//                 left: 0;
//                 transform: translateY(-50%);
//                 z-index: 2;
//                 svg {
//                   width: 20px;
//                   height: 20px;
//                 }
//               }
//               input {
//                 width: 100%;
//                 padding: 10px 40px;
//                 background: var(--gray-color);
//                 border-radius: var(--main-border-radius);
//                 border: 1px solid var(--gray-color);
//                 outline: none;
//                 &[type="number"] {
//                   &::-webkit-outer-spin-button,
//                   &::-webkit-inner-spin-button {
//                     appearance: none;
//                     margin: 0;
//                   }
//                   /* Firefox */
//                   &[type="number"] {
//                     appearance: textfield;
//                   }
//                 }
//               }
//             }
//             .error {
//               color: var(--cancel-button-color);
//               display: flex;
//               justify-content: center;
//               padding: {
//                 bottom: 10px;
//               }
//               font: {
//                 weight: bold;
//               }
//             }
//           }
//           .license {
//             width: 100%;
//             display: flex;
//             p {
//               color: var(--first-text-color);
//               a {
//                 text-decoration: none;
//                 color: var(--first-color);
//               }
//             }
//           }
//           .submit {
//             width: 100%;
//             display: flex;
//             margin: 20px 0;
//             button {
//               all: unset;
//               width: 100%;
//               padding: 15px 0;
//               background: var(--first-color);
//               color: var(--white-color);
//               border-radius: var(--main-border-radius);
//               cursor: pointer;
//             }
//           }
//           .change {
//             color: var(--first-text-color);
//             margin: {
//               top: 10px;
//             }
//             p {
//               margin: 0;
//             }
//             button {
//               all: unset;
//               color: var(--third-color);
//               cursor: pointer;
//             }
//           }
//           &.login {
//             .error {
//               color: var(--cancel-button-color);
//               display: flex;
//               justify-content: center;
//               padding: {
//                 top: 10px;
//               }
//               font: {
//                 weight: bold;
//               }
//             }
//             .forget-password {
//               display: flex;
//               justify-content: flex-end;
//               button {
//                 all: unset;
//                 color: var(--third-color);
//                 cursor: pointer;
//               }
//             }
//           }
//         }
//       }
//     }
//     .simple-input {
//       label {
//         margin-bottom: 0;
//       }
//       text-align: initial;
//       input,
//       select {
//         height: 45px !important;
//       }
//     }
//     .simple-button.send button {
//       width: 100%;
//       background: #009ef7;
//       height: 50px;
//     }
//     .domin_group {
//       .input-group-text {
//         background-color: rgba($color: #006ce9, $alpha: 0.1) !important;
//         text-transform: lowercase;
//         border: 1px solid #dcddeb;
//         padding: 0 5px;
//         // border-top-left-radius: 8px !important;
//         // border-bottom-left-radius: 8px !important;
//         border-radius: 8px !important;
//         margin: 0 5px;
//         // order: 3;
//       }
//     }
//     .password_group {
//       input[type="password"] {
//         width: 100%;
//         box-sizing: border-box;
//         height: 45px;
//         display: inline-block;
//         // border: 3px solid #2f96ef;
//         border-radius: 5px;
//         padding: 0 15px;
//         margin: 10px 0;
//         transition: 0.2s;
//       }
//       input[type="password"]:focus {
//         outline: none;
//         -moz-outline: none;
//         -webkit-outline: none;
//       }
//       lable:before {
//         content: "\f070";
//         color: #aaa;
//         font-size: 22px;
//         font-family: FontAwesome;
//         position: absolute;
//         right: 25px;
//         top: 44px;
//       }
//       .progress-bar_wrap {
//         width: 300px;
//         height: 5px;
//         background: #f6f6fa;
//         display: inline-block;
//         vertical-align: middle;
//         overflow: hidden;
//         border-radius: 5px;
//       }
//       .form-1 .progress-bar_item {
//         display: inline-block;
//         height: 100%;
//         width: 33.33%;
//         float: left;
//         visibility: hidden;
//         transition: background-color 0.2s, visisility 0.1s;
//       }
//       .form-1 .active {
//         visibility: visible;
//       }
//       .progress-bar_item-1 {
//       }
//       .progress-bar_item-2 {
//       }
//       .progress-bar_item-3 {
//       }
//       .progress-bar_text {
//         display: inline-block;
//         color: #aaa;
//         margin-left: 5px;
//         transition: 0.2s;
//         font-weight: bold;
//         margin-top: 5px;
//       }

//       .form-2 .progress-bar_item {
//         display: inline-block;
//         height: 100%;
//         width: 32.5%;
//         margin-right: 0.8%;
//         border-radius: 5px;
//         float: left;
//         transition: background-color 0.2s, visisility 0.1s;
//       }
//       .form-2 .progress-bar_item-1.active {
//         background-color: #ff4b47;
//       }
//       .form-2 .progress-bar_item-2.active {
//         background-color: #f9ae35;
//       }
//       .form-2 .progress-bar_item-3.active {
//         background-color: #2daf7d;
//       }
//     }
//   }
//   .logo_box {
//     position: relative;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background: #006ce9;
//     overflow: hidden;
//     min-height: 100vh;
//     max-width: 100%;
//     max-height: 100vh;
//     border-top-left-radius: var(--main-border-radius);
//     border-bottom-left-radius: var(--main-border-radius);
//     img {
//       width: 50%;
//     }
//     .hex {
//       position: absolute;
//       &:first-child {
//         top: -5%;
//         right: -30%;
//         transform: rotate(-60deg);
//       }
//       &:nth-child(2) {
//         top: -5%;
//         left: -30%;
//         transform: rotate(-60deg);
//       }
//       &:nth-child(3) {
//         bottom: -5%;
//         left: -30%;
//         transform: rotate(-60deg);
//       }
//       &:nth-child(4) {
//         bottom: -5%;
//         right: -30%;
//         transform: rotate(-60deg);
//       }
//     }
//   }
// }
.is-ar {
  .register-form .main-box .bottom .forms form .socail a svg {
    margin: {
      right: 0;
      left: 10px;
    }
  }
  .register-form .main-box .top .background {
    right: unset;
    left: calc(-20px - 8px);
    svg {
      transform: rotate(0);
    }
  }
  .register-form .main-box .bottom .forms form .inputs .custom-input .icon {
    left: unset;
    right: 0;
  }
  .register-form
    .main-box
    .bottom
    .forms
    form
    .inputs
    .custom-input.password
    .show-hidden-password {
    right: unset;
    left: 0;
  }
  .register-form
    .main-box
    .bottom
    .forms
    form.confirmation-code
    .inputs
    .custom-input:not(:last-of-type) {
    margin: {
      right: 0;
      left: 10px;
    }
  }
}
</style>
