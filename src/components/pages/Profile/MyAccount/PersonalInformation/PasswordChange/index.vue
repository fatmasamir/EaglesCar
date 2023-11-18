<script setup lang="ts">
import AOS from "aos";
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import SimpleInput from "@/components/global/CusomInputs/SimpleInput/SimpleInput.vue";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import { useForm } from "vee-validate";
import * as Yup from "yup";

//i18n
const { t } = useI18n();

// meta
const { meta } = useForm();

// formLogin
const { errors, handleSubmit, defineInputBinds } = useForm({
  validationSchema: Yup.object({
    Old_Password: Yup.string().required(t("requiredFiled")),
    New_Password: Yup.string().required(t("requiredFiled")),
    Rewrite_new_Password: Yup.string().required(t("requiredFiled")),
  }),
});

//login ,password
const Old_Password = defineInputBinds("Old_Password");
const New_Password = defineInputBinds("New_Password");
const Rewrite_new_Password = defineInputBinds("Rewrite_new_Password");
// input password type
const passwordFieldoldPass = ref("password");
// input password type
const passwordFieldoldPassNew = ref<string>("password");
// input password type
const passwordFieldNewRewrite = ref<string>("password");

// show/hide new password
const switchVisibility = () => {
  passwordFieldoldPass.value =
    passwordFieldoldPass.value === "password" ? "text" : "password";
};
// show/hide new password
const switchVisibilityNewPass = () => {
  passwordFieldoldPassNew.value =
    passwordFieldoldPassNew.value === "password" ? "text" : "password";
};
// show/hide new password
const switchVisibilityNewRewrite = () => {
  passwordFieldNewRewrite.value =
    passwordFieldNewRewrite.value === "password" ? "text" : "password";
};
const image = ref();
const imageUrl = ref();
// handel submit
let onSubmit = handleSubmit((values) => {
  console.log("values", values);
});
// onMounted
onMounted(() => {
  AOS.init();
});
</script>
<template>
  <div class="box my-5">
    <h4>{{ t("Change_password") }}</h4>
    <div class="row">
      <div class="col-lg-2"></div>
      <div class="col-lg-10">
        <form @submit.prevent="onSubmit">
          <div class="form row">
            <div class="col-md-4 passwordField">
              <SimpleInput>
                <!-- <label>Email <span class="text-red">*</span> </label> -->
                <input
                  :type="passwordFieldoldPass"
                  id="Old_Password"
                  name="Old_Password"
                  :placeholder="t('Old_Password')"
                  required
                  v-bind="Old_Password"
                  :class="{ 'is-invalid': errors.Old_Password }"
                /><img
                  src="@/assets/images/global/icons/global/eye-svgrepo.svg"
                  @click="switchVisibility"
                  class="pass_icon"
                  v-if="passwordFieldoldPass == 'password'"
                /><img
                  src="@/assets/images/global/icons/global/eye-slash.svg"
                  @click="switchVisibility"
                  class="pass_icon"
                  v-else
                />
                <div class="invalid-feedback">{{ errors.Old_Password }}</div>
              </SimpleInput>
            </div>
            <div class="col-md-4 passwordField">
              <SimpleInput>
                <!-- <label>Email <span class="text-red">*</span> </label> -->
                <input
                  :type="passwordFieldoldPassNew"
                  id="New_Password"
                  name="New_Password"
                  :placeholder="t('New_Password')"
                  required
                  v-bind="New_Password"
                  :class="{ 'is-invalid': errors.New_Password }"
                /><img
                  src="@/assets/images/global/icons/global/eye-svgrepo.svg"
                  @click="switchVisibilityNewPass"
                  class="pass_icon"
                  v-if="passwordFieldoldPassNew == 'password'"
                /><img
                  src="@/assets/images/global/icons/global/eye-slash.svg"
                  @click="switchVisibilityNewPass"
                  class="pass_icon"
                  v-else
                />
                <div class="invalid-feedback">
                  {{ errors.New_Password }}
                </div>
              </SimpleInput>
            </div>
            <div class="col-md-4 passwordField">
              <SimpleInput>
                <!-- <label>Email <span class="text-red">*</span> </label> -->
                <input
                  :type="passwordFieldNewRewrite"
                  id="Rewrite_new_Password"
                  name="Rewrite_new_Password"
                  :placeholder="t('Rewrite_new_Password')"
                  required
                  v-bind="Rewrite_new_Password"
                  :class="{ 'is-invalid': errors.Rewrite_new_Password }"
                /><img
                  src="@/assets/images/global/icons/global/eye-svgrepo.svg"
                  @click="switchVisibilityNewRewrite"
                  class="pass_icon"
                  v-if="passwordFieldNewRewrite == 'password'"
                /><img
                  src="@/assets/images/global/icons/global/eye-slash.svg"
                  @click="switchVisibilityNewRewrite"
                  class="pass_icon"
                  v-else
                />
                <div class="invalid-feedback">
                  {{ errors.Rewrite_new_Password }}
                </div>
              </SimpleInput>
            </div>
            <div class="col-md-4">
              <SimpleButton type="send" class="register_lab">
                <button type="submit">
                  {{ t("Save_changes") }}
                </button>
                <!-- <button type="submit" disabled v-else>
                  {{ t("wait") }}
                </button> -->
              </SimpleButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "../../../_stylingProfile.scss";
</style>
