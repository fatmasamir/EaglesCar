<script setup lang="ts">
import { ref } from "vue";
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
    FirstName: Yup.string().required(t("requiredFiled")),
    LastName: Yup.string().required(t("requiredFiled")),
    Nationality: Yup.string().required(t("requiredFiled")),
    login: Yup.string()
      .email(t("requiredFiledemail"))
      .required(t("requiredFiled")),
    ID: Yup.string().min(12).max(12).required(t("requiredFiled")),
    Date_of_birth: Yup.string().required(t("requiredFiled")),
    Primary_phone_number: Yup.string().required(t("requiredFiled")),
    Secondary_phone_number: Yup.string().required(t("requiredFiled")),
    Location: Yup.string().required(t("requiredFiled")),
  }),
});

//login ,password
const FirstName = defineInputBinds("FirstName");
const LastName = defineInputBinds("LastName");
const Nationality = defineInputBinds("Nationality");
const login = defineInputBinds("login");
const ID = defineInputBinds("ID");
const Date_of_birth = defineInputBinds("Date_of_birth");
const Primary_phone_number = defineInputBinds("Primary_phone_number");
const Secondary_phone_number = defineInputBinds("Secondary_phone_number");
const Location = defineInputBinds("Location");

// input password type
const passwordFieldType = ref("password");

// show/hide new password
const switchVisibility = () => {
  passwordFieldType.value =
    passwordFieldType.value === "password" ? "text" : "password";
};
const image = ref();
const imageUrl = ref();
// handel submit
let onSubmit = handleSubmit((values) => {
  console.log("values", values);
});
// fileSelected
let fileSelected = (event) => {
  const file = event.target.files.item(0);
  const reader = new FileReader();
  reader.addEventListener("load", imageLoaded);
  reader.readAsDataURL(file);
  image.value = file;
};
let imageLoaded = (event) => {
  imageUrl.value = event.target.result;
};
</script>
<template>
  <div class="box">
    <h4>{{ t("Basic_information") }}</h4>
    <div class="row">
      <div class="col-lg-2">
        <div class="profile_img">
          <img :src="imageUrl" v-if="imageUrl" />
          <img src="@/assets/images/global/icons/global/man.svg" v-else />
          <button class="btn btn-upload">+</button>
          <input
            type="file"
            accept="image/*"
            @change="fileSelected"
            class="imgfileType"
          />
        </div>
      </div>
      <div class="col-lg-10">
        <form @submit.prevent="onSubmit">
          <div class="form mt-4 row">
            <div class="col-md-4">
              <SimpleInput>
                <!-- <label>Email <span class="text-red">*</span> </label> -->
                <input
                  type="text"
                  id="FirstName"
                  name="FirstName"
                  v-bind="FirstName"
                  :placeholder="t('FirstName')"
                  :class="{ 'is-invalid': errors.FirstName }"
                />

                <div class="invalid-feedback">{{ errors.FirstName }}</div>
              </SimpleInput>
            </div>
            <div class="col-md-4">
              <SimpleInput>
                <!-- <label>Email <span class="text-red">*</span> </label> -->
                <input
                  type="text"
                  id="LastName"
                  name="LastName"
                  v-bind="LastName"
                  :placeholder="t('LastName')"
                  :class="{ 'is-invalid': errors.LastName }"
                />

                <div class="invalid-feedback">{{ errors.LastName }}</div>
              </SimpleInput>
            </div>
            <div class="col-md-4">
              <SimpleInput>
                <SimpleInput>
                  <!-- <label>Email <span class="text-red">*</span> </label> -->
                  <select
                    id="Expiration_Date"
                    name="Expiration_Date"
                    v-bind="Nationality"
                    :class="{ 'is-invalid': errors.Nationality }"
                  >
                    <option value="" disabled selected>
                      {{ t("Nationality") }}
                    </option>
                    <option value="1">anythink</option>
                  </select>
                  <div class="invalid-feedback">{{ errors.Nationality }}</div>
                </SimpleInput>
              </SimpleInput>
            </div>
            <div class="col-md-4">
              <SimpleInput>
                <!-- <label>Email <span class="text-red">*</span> </label> -->
                <input
                  type="email"
                  id="login"
                  name="login"
                  v-bind="login"
                  :placeholder="t('Email')"
                  :class="{ 'is-invalid': errors.login }"
                />

                <div class="invalid-feedback">{{ errors.login }}</div>
              </SimpleInput>
            </div>
            <div class="col-md-4">
              <SimpleInput>
                <!-- <label>Email <span class="text-red">*</span> </label> -->
                <input
                  type="text"
                  id="ID"
                  name="ID"
                  v-bind="ID"
                  :placeholder="t('ID')"
                  :class="{ 'is-invalid': errors.ID }"
                />

                <div class="invalid-feedback">{{ errors.ID }}</div>
              </SimpleInput>
            </div>
            <div class="col-md-4">
              <SimpleInput>
                <!-- <label>Email <span class="text-red">*</span> </label> -->
                <input
                  type="date"
                  id="Date_of_birth"
                  name="Date_of_birth"
                  v-bind="Date_of_birth"
                  :placeholder="t('Date_of_birth')"
                  :class="{ 'is-invalid': errors.Date_of_birth }"
                />

                <div class="invalid-feedback">{{ errors.Date_of_birth }}</div>
              </SimpleInput>
            </div>
            <div class="col-md-4">
              <SimpleInput>
                <!-- <label>Email <span class="text-red">*</span> </label> -->
                <input
                  type="text"
                  id="Primary_phone_number"
                  name="Primary_phone_number"
                  v-bind="Primary_phone_number"
                  :placeholder="t('Primary_phone_number')"
                  :class="{ 'is-invalid': errors.Primary_phone_number }"
                />

                <div class="invalid-feedback">
                  {{ errors.Primary_phone_number }}
                </div>
              </SimpleInput>
            </div>
            <div class="col-md-4">
              <SimpleInput>
                <!-- <label>Email <span class="text-red">*</span> </label> -->
                <input
                  type="text"
                  id="Secondary_phone_number"
                  name="Secondary_phone_number"
                  v-bind="Secondary_phone_number"
                  :placeholder="t('Secondary_phone_number')"
                  :class="{ 'is-invalid': errors.Secondary_phone_number }"
                />

                <div class="invalid-feedback">
                  {{ errors.Secondary_phone_number }}
                </div>
              </SimpleInput>
            </div>
            <div class="col-md-4">
              <SimpleInput>
                <!-- <label>Email <span class="text-red">*</span> </label> -->
                <input
                  type="text"
                  id="Location"
                  name="Location"
                  v-bind="Location"
                  :placeholder="t('Location')"
                  :class="{ 'is-invalid': errors.Location }"
                />

                <div class="invalid-feedback">
                  {{ errors.Location }}
                </div>
              </SimpleInput>
            </div>
            <div class="col-md-4">
              <SimpleButton type="send">
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
.profile_img {
  position: relative;
  width: 100px;
  margin: auto;
  height: 100px;
  img {
    width: 100px;
    height: 100px;
    border-radius: 100%;
  }
  .btn-upload {
    background: #f4a71d;
    color: white;
    padding: 5px;
    width: 35px;
    /* height: 20px; */
    border-radius: 100%;
    position: absolute;
    bottom: 0px;
    right: 0px;
  }
  .imgfileType {
    position: absolute;
    opacity: 0;
    right: 0px;
    bottom: 0px;
    width: 35px;
    height: 35px;
    padding: 5px;
    top: auto;
    cursor: pointer;
    z-index: 999;
  }
}
</style>
