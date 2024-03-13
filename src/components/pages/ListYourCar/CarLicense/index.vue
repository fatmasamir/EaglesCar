<script setup lang="ts">
import { ref, defineEmits } from "vue";
import { useI18n } from "vue-i18n";
import SimpleInput from "@/components/global/CusomInputs/SimpleInput/SimpleInput.vue";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import { useForm } from "vee-validate";
import * as Yup from "yup";

// emit
let emits = defineEmits(["ChooseTabAccount"]);
//i18n
const { t } = useI18n();

// meta
const { meta } = useForm();

// formLogin
const { errors, handleSubmit, defineInputBinds } = useForm({
  validationSchema: Yup.object({
    Country_registeration: Yup.string().required(t("requiredFiled")),
    City: Yup.string().required(t("requiredFiled")),
    Plate_number: Yup.string().required(t("requiredFiled")),
    License_expiration_date: Yup.string().required(t("requiredFiled")),
  }),
});

//Car_title
const Country_registeration = defineInputBinds("Country_registeration");
const City = defineInputBinds("City");
const Plate_number = defineInputBinds("Plate_number");
const License_expiration_date = defineInputBinds("License_expiration_date");
// handel submit
let onSubmit = handleSubmit((values) => {
  console.log("values", values);
  emits("ChooseTabAccount", "Photo and prices");
});
</script>
<template>
  <form @submit.prevent="onSubmit">
    <div class="box">
      <h4>{{ t("Car_license") }}</h4>
      <div>
        <div class="row mx-0 px-0">
          <div class="col-md-4 mx-0 px-0">
            <SimpleInput>
              <!-- <label>Email <span class="text-red">*</span> </label> -->
              <input
                type="text"
                id="Country_registeration"
                name="Country_registeration"
                v-bind="Country_registeration"
                :placeholder="t('Country_registeration')"
                required
                :class="{ 'is-invalid': errors.Country_registeration }"
              />

              <div class="invalid-feedback">
                {{ errors.Country_registeration }}
              </div>
            </SimpleInput>
          </div>
          <div class="col-md-4">
            <SimpleInput>
              <!-- <label>Email <span class="text-red">*</span> </label> -->
              <select
                type="text"
                id="City"
                name="City"
                v-bind="City"
                required
                :class="{ 'is-invalid': errors.City }"
              >
                <option value="" disabled selected>{{ t("City") }}</option>
                <option value="1">anythink</option>
              </select>
              <div class="invalid-feedback">{{ errors.City }}</div>
            </SimpleInput>
          </div>
          <div class="col-md-4">
            <SimpleInput>
              <!-- <label>Email <span class="text-red">*</span> </label> -->
              <select
                type="text"
                id="Plate_number"
                name="Plate_number"
                v-bind="Plate_number"
                required
                :class="{ 'is-invalid': errors.Plate_number }"
              >
                <option value="" disabled selected>
                  {{ t("Plate_number") }}
                </option>
                <option value="1">anythink</option>
              </select>
              <div class="invalid-feedback">{{ errors.Plate_number }}</div>
            </SimpleInput>
          </div>
          <div class="col-md-4 mx-0 px-0">
            <SimpleInput>
              <!-- <label>Email <span class="text-red">*</span> </label> -->
              <select
                type="text"
                id="License_expiration_date"
                name="License_expiration_date"
                v-bind="License_expiration_date"
                required
                :class="{ 'is-invalid': errors.License_expiration_date }"
              >
                <option value="" disabled selected>
                  {{ t("License_expiration_date") }}
                </option>
                <option value="1">anythink</option>
              </select>
              <div class="invalid-feedback">
                {{ errors.License_expiration_date }}
              </div>
            </SimpleInput>
          </div>
        </div>
      </div>
    </div>
    <div class="Upload_Papers">
      <div class="content">
        <div class="">
          <h5>{{ t("Upload_Papers_car_license") }}</h5>
          <p>{{ t("messageIdentity_document") }}</p>
        </div>
        <SimpleInput class="upload">
          <SimpleButton type="send" class="">
            <img
              src="@/assets/images/global/icons/global/profile/document-upload-white.svg"
            />
            {{ t("upload") }}</SimpleButton
          >
          <input type="file" />
        </SimpleInput>
      </div>
    </div>
    <div class="box mt-3 Insurance">
      <h4>{{ t("Insurance") }}</h4>
      <div class="row">
        <div class="col-md-6 px-0">
          <SimpleInput>
            <label>{{ t("Insurance_yearly_cost") }}</label>
            <input
              type="text"
              id="Insurance_yearly_cost"
              name="Insurance_yearly_cost"
              v-bind="Insurance_yearly_cost"
              placeholder="0000000"
              required
              :class="{ 'is-invalid': errors.Insurance_yearly_cost }"
            />

            <div class="invalid-feedback">
              {{ errors.Insurance_yearly_cost }}
            </div>
            <span class="currency">EGP</span>
          </SimpleInput>
        </div>
        <div class="col-md-6 pr-0">
          <SimpleInput>
            <label>{{ t("Insurance_excess_value") }}</label>
            <input
              type="text"
              id="Insurance_yearly_cost"
              name="Insurance_yearly_cost"
              placeholder="0000000"
              required
              :class="{ 'is-invalid': errors.Insurance_yearly_cost }"
            />

            <div class="invalid-feedback">
              {{ errors.Insurance_yearly_cost }}
            </div>
            <span class="currency">EGP</span>
          </SimpleInput>
        </div>
      </div>
    </div>
    <div class="Upload_Papers">
      <div class="content">
        <div class="">
          <h5>{{ t("Upload_Papers_car_license") }}</h5>
          <p>{{ t("messageIdentity_document") }}</p>
        </div>
        <SimpleInput class="upload">
          <SimpleButton type="send" class="">
            <img
              src="@/assets/images/global/icons/global/profile/document-upload-white.svg"
            />
            {{ t("upload") }}</SimpleButton
          >
          <input type="file" />
        </SimpleInput>
      </div>
    </div>
    <div class="Upload_Papers">
      <div class="content">
        <div class="">
          <h5>{{ t("Upload_Papers") }}</h5>
          <p>{{ t("messageIdentity_document") }}</p>
        </div>
        <SimpleInput class="upload">
          <SimpleButton type="send" class="">
            <img
              src="@/assets/images/global/icons/global/profile/document-upload-white.svg"
            />
            {{ t("upload") }}</SimpleButton
          >
          <input type="file" />
        </SimpleInput>
      </div>
    </div>
    <div class="col-12 text-center mb-5 mt-5 direction_ar">
      <SimpleButton type="sub_button">
        <button>
          {{ t("Finish_later") }}
        </button>
      </SimpleButton>
      <SimpleButton type="send">
        <button type="submit">
          {{ t("Next_step") }}
        </button>
        <!-- <button type="submit" disabled v-else>
                  {{ t("wait") }}
                </button> -->
      </SimpleButton>
    </div>
  </form>
</template>
<style scoped lang="scss">
@import "../../Profile/_stylingProfile.scss";
.simple-button.sub_button,
.simple-button.send {
  width: max-content;
  display: inline-block;
  text-align: center;
  width: 30% !important;
  margin: 0px 10px;
}
.simple-button.sub_button button,
.simple-button.send button {
  width: 100%;
}
</style>
