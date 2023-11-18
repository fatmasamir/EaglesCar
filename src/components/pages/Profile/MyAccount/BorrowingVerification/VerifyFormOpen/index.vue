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
    License_Number: Yup.string().required(t("requiredFiled")),
    Issuance_Date: Yup.string().required(t("requiredFiled")),
    Expiration_Date: Yup.string().required(t("requiredFiled")),
    Country_Issue: Yup.string().required(t("requiredFiled")),
    Driver_Phone_Number: Yup.string().required(t("requiredFiled")),
    effect: Yup.string().required(t("requiredFiled")),
    yearsDriving: Yup.string().required(t("requiredFiled")),
  }),
});

//login ,password
const License_Number = defineInputBinds("License_Number");
const Issuance_Date = defineInputBinds("Issuance_Date");
const Expiration_Date = defineInputBinds("Expiration_Date");
const Country_Issue = defineInputBinds("Country_Issue");
const Driver_Phone_Number = defineInputBinds("Driver_Phone_Number");
const effect = defineInputBinds("effect");
const yearsDriving = defineInputBinds("yearsDriving");

// Driver_license
const Driver_license = ref();
const image = ref();
const imageUrl = ref();
const F = ref();
// handel submit
let onSubmit = handleSubmit((values) => {
  console.log("values", values);
});
// fileSelected
let fileSelected = (event) => {
  const file = event.target.files.item(0);
  Driver_license.value = event.target.files.item(0).name;
  const reader = new FileReader();
  reader.addEventListener("load", imageLoaded);
  reader.readAsDataURL(file);
};
// imageLoaded
let imageLoaded = (event) => {
  imageUrl.value = event.target.result;
};
// emptyFileDriver_license
let emptyFileDriver_license = () => {
  imageUrl.value = "";
  image.value = "";
  Driver_license.value = "";
};
</script>
<template>
  <h5>{{ t("Driver_License") }}</h5>
  <form @submit.prevent="onSubmit">
    <div>
      <div class="form row mx-0 px-0">
        <div class="col-md-4 mx-0 px-0">
          <SimpleInput>
            <!-- <label>Email <span class="text-red">*</span> </label> -->
            <input
              type="text"
              id="License_Number"
              name="License_Number"
              v-bind="License_Number"
              :placeholder="t('License_Number')"
              required
              :class="{ 'is-invalid': errors.License_Number }"
            />

            <div class="invalid-feedback">{{ errors.License_Number }}</div>
          </SimpleInput>
        </div>
        <div class="col-md-4">
          <SimpleInput>
            <!-- <label>Email <span class="text-red">*</span> </label> -->
            <input
              type="date"
              id="Issuance_Date"
              name="Issuance_Date"
              v-bind="Issuance_Date"
              :placeholder="t('Issuance_Date')"
              required
              :class="{ 'is-invalid': errors.Issuance_Date }"
            />

            <div class="invalid-feedback">{{ errors.Issuance_Date }}</div>
          </SimpleInput>
        </div>
        <div class="col-md-4">
          <SimpleInput>
            <!-- <label>Email <span class="text-red">*</span> </label> -->
            <input
              type="date"
              id="Expiration_Date"
              name="Expiration_Date"
              v-bind="Expiration_Date"
              :placeholder="t('Expiration_Date')"
              required
              :class="{ 'is-invalid': errors.Expiration_Date }"
            />

            <div class="invalid-feedback">{{ errors.Nationality }}</div>
          </SimpleInput>
        </div>
        <div class="col-md-4 mx-0 px-0">
          <SimpleInput>
            <!-- <label>Email <span class="text-red">*</span> </label> -->
            <input
              type="text"
              id="Country_Issue"
              name="Country_Issue"
              v-bind="Country_Issue"
              :placeholder="t('Country_Issue')"
              required
              :class="{ 'is-invalid': errors.Country_Issue }"
            />

            <div class="invalid-feedback">{{ errors.Country_Issue }}</div>
          </SimpleInput>
        </div>
        <div class="col-md-4">
          <SimpleInput>
            <!-- <label>Email <span class="text-red">*</span> </label> -->
            <input
              type="text"
              id="Driver_Phone_Number"
              name="Driver_Phone_Number"
              v-bind="Driver_Phone_Number"
              :placeholder="t('Driver_Phone_Number')"
              required
              :class="{ 'is-invalid': errors.Driver_Phone_Number }"
            />

            <div class="invalid-feedback">{{ errors.ID }}</div>
          </SimpleInput>
        </div>
        <div class="col-md-4">
          <SimpleInput>
            <!-- <label>Email <span class="text-red">*</span> </label> -->
            <div
              class="upload_file"
              :class="{ 'is-invalid': errors.Driver_license }"
            >
              <div class="content">
                <span>
                  {{ Driver_license ? Driver_license : t("Driver_license") }}
                </span>
                <img
                  src="../../../../../../assets/images/global/icons/global/profile/document-upload.svg"
                  v-if="!Driver_license"
                />
                <img
                  src="../../../../../../assets/images/global/icons/global/profile/forbidden-2.svg"
                  v-if="Driver_license"
                  @click="emptyFileDriver_license"
                />
              </div>
              <input
                type="file"
                @change="fileSelected"
                required
                v-if="!Driver_license"
              />
            </div>
            <div class="invalid-feedback">{{ errors.Driver_license }}</div>
          </SimpleInput>
        </div>
        <div class="col-md-12 Identity_document">
          <div class="content">
            <div class="">
              <h5>{{ t("Identity_document") }}</h5>
              <p>{{ t("messageIdentity_document") }}</p>
            </div>
            <SimpleInput class="upload">
              <SimpleButton type="send" class="">
                <img
                  src="../../../../../../assets/images/global/icons/global/profile/document-upload-white.svg"
                />
                {{ t("upload") }}</SimpleButton
              >
              <input type="file" />
            </SimpleInput>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <h5>{{ t("Identity_document") }}</h5>
      <div class="col-md-6">
        <SimpleInput>
          <label class="py-3">{{ t("drivingEffect") }} </label>
          <select
            id="effect"
            name="effect"
            v-bind="effect"
            required
            :class="{ 'is-invalid': errors.effect }"
          >
            <option value="1">Anything</option>
            <option value="2">Anything</option>
            <option value="3">Anything</option>
          </select>
          <div class="invalid-feedback">{{ errors.effect }}</div>
        </SimpleInput>
      </div>
      <div class="col-md-6">
        <SimpleInput>
          <label class="py-3">{{ t("yearsDriving") }} </label>
          <select
            id="yearsDriving"
            name="yearsDriving"
            v-bind="yearsDriving"
            required
            :class="{ 'is-invalid': errors.yearsDriving }"
          >
            <option value="1">Anything</option>
            <option value="2">Anything</option>
            <option value="3">Anything</option>
          </select>
          <div class="invalid-feedback">{{ errors.yearsDriving }}</div>
        </SimpleInput>
      </div>
      <div class="col-md-12">
        <SimpleButton type="send" class="submit_button">
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
</template>
<style scoped lang="scss">
@import "../../../_stylingProfile.scss";
.simple-input .upload_file {
  height: auto !important;
  .content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 15px;
    align-content: center;
    img {
      width: 24px;
      height: 24px;
    }
  }
}
.Identity_document {
  background: #f9f9f9;
}
.submit_button.send {
  width: 200px;
  margin: auto;
  button {
    padding: 15px;
    height: max-content !important;
  }
}
</style>
