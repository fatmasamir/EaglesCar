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
    Car_title: Yup.string().required(t("requiredFiled")),
    Make: Yup.string().required(t("requiredFiled")),
    Model: Yup.string().required(t("requiredFiled")),
    Year: Yup.string().required(t("requiredFiled")),
    Number_Seats: Yup.string().required(t("requiredFiled")),
    Number_Doors: Yup.string().required(t("requiredFiled")),
    Fuel_Type: Yup.string().required(t("requiredFiled")),
    Transmission: Yup.string().required(t("requiredFiled")),
    Mileage: Yup.string().required(t("requiredFiled")),
    Color: Yup.string().required(t("requiredFiled")),
    Car_Description_message: Yup.string().required(t("requiredFiled")),
  }),
});

//Car_title
const Car_title = defineInputBinds("Car_title");
const Make = defineInputBinds("Make");
const Model = defineInputBinds("Model");
const Year = defineInputBinds("Year");
const Number_Seats = defineInputBinds("Number_Seats");
const Number_Doors = defineInputBinds("Number_Doors");
const Fuel_Type = defineInputBinds("Fuel_Type");
const Transmission = defineInputBinds("Transmission");
const Mileage = defineInputBinds("Mileage");
const Color = defineInputBinds("Color");
const Car_Description_message = defineInputBinds("Car_Description_message");
// handel submit
let onSubmit = handleSubmit((values) => {
  console.log("values", values);
  emits("ChooseTabAccount", "Car license");
});
</script>
<template>
  <form @submit.prevent="onSubmit">
    <div class="box">
      <h4>{{ t("Car_Information") }}</h4>
      <div>
        <div class="form row mx-0 px-0">
          <div class="col-md-4 mx-0 px-0">
            <SimpleInput>
              <!-- <label>Email <span class="text-red">*</span> </label> -->
              <input
                type="text"
                id="Car_title"
                name="Car_title"
                v-bind="Car_title"
                :placeholder="t('Car_title')"
                required
                :class="{ 'is-invalid': errors.Car_title }"
              />

              <div class="invalid-feedback">{{ errors.Car_title }}</div>
            </SimpleInput>
          </div>
          <div class="col-md-4">
            <SimpleInput>
              <!-- <label>Email <span class="text-red">*</span> </label> -->
              <select
                type="text"
                id="Make"
                name="Make"
                v-bind="Make"
                required
                :class="{ 'is-invalid': errors.Make }"
              >
                <option disabled>{{ t("Make") }}</option>
                <option value="1">anythink</option>
              </select>
              <div class="invalid-feedback">{{ errors.LastName }}</div>
            </SimpleInput>
          </div>
          <div class="col-md-4">
            <SimpleInput>
              <!-- <label>Email <span class="text-red">*</span> </label> -->
              <select
                type="text"
                id="Model"
                name="Model"
                v-bind="Model"
                required
                :class="{ 'is-invalid': errors.Model }"
              >
                <option disabled>{{ t("Model") }}</option>
                <option value="1">anythink</option>
              </select>
              <div class="invalid-feedback">{{ errors.Model }}</div>
            </SimpleInput>
          </div>
          <div class="col-md-4 mx-0 px-0">
            <SimpleInput>
              <!-- <label>Email <span class="text-red">*</span> </label> -->
              <select
                type="text"
                id="Year"
                name="Year"
                v-bind="Year"
                required
                :class="{ 'is-invalid': errors.Year }"
              >
                <option disabled>{{ t("Year") }}</option>
                <option value="1">anythink</option>
              </select>
              <div class="invalid-feedback">{{ errors.Year }}</div>
            </SimpleInput>
          </div>
          <div class="col-md-4">
            <SimpleInput>
              <!-- <label>Email <span class="text-red">*</span> </label> -->
              <select
                type="text"
                id="Number_Seats"
                name="Number_Seats"
                v-bind="Number_Seats"
                required
                :class="{ 'is-invalid': errors.Number_Seats }"
              >
                <option disabled>{{ t("Number_Seats") }}</option>
                <option value="1">anythink</option>
              </select>
              <div class="invalid-feedback">{{ errors.Number_Seats }}</div>
            </SimpleInput>
          </div>
          <div class="col-md-4">
            <SimpleInput>
              <!-- <label>Email <span class="text-red">*</span> </label> -->
              <select
                type="text"
                id="Number_Doors"
                name="Number_Doors"
                v-bind="Number_Doors"
                required
                :class="{ 'is-invalid': errors.Number_Doors }"
              >
                <option disabled>{{ t("Number_Doors") }}</option>
                <option value="1">anythink</option>
              </select>
              <div class="invalid-feedback">{{ errors.Number_Doors }}</div>
            </SimpleInput>
          </div>
          <div class="col-md-4 mx-0 px-0">
            <SimpleInput>
              <!-- <label>Email <span class="text-red">*</span> </label> -->
              <select
                type="text"
                id="Fuel_Type"
                name="Fuel_Type"
                v-bind="Fuel_Type"
                required
                :class="{ 'is-invalid': errors.Fuel_Type }"
              >
                <option disabled>{{ t("Fuel_Type") }}</option>
                <option value="1">anythink</option>
              </select>
              <div class="invalid-feedback">{{ errors.Fuel_Type }}</div>
            </SimpleInput>
          </div>
          <div class="col-md-4">
            <SimpleInput>
              <select
                type="text"
                id="Transmission"
                name="Transmission"
                v-bind="Transmission"
                required
                :class="{ 'is-invalid': errors.Transmission }"
              >
                <option disabled>{{ t("Transmission") }}</option>
                <option value="1">anythink</option>
              </select>
              <div class="invalid-feedback">{{ errors.Transmission }}</div>
            </SimpleInput>
          </div>
          <div class="col-md-4">
            <SimpleInput>
              <select
                type="text"
                id="Mileage"
                name="Mileage"
                v-bind="Mileage"
                required
                :class="{ 'is-invalid': errors.Mileage }"
              >
                <option disabled>{{ t("Mileage") }}</option>
                <option value="1">anythink</option>
              </select>
              <div class="invalid-feedback">{{ errors.Transmission }}</div>
            </SimpleInput>
          </div>
          <div class="col-md-4 mx-0 px-0">
            <SimpleInput>
              <select
                type="text"
                id="Color"
                name="Color"
                v-bind="Color"
                required
                :class="{ 'is-invalid': errors.Color }"
              >
                <option disabled>{{ t("Color") }}</option>
                <option value="1">anythink</option>
              </select>
              <div class="invalid-feedback">{{ errors.Transmission }}</div>
            </SimpleInput>
          </div>
        </div>
      </div>
    </div>
    <div class="box my-5">
      <h4>{{ t("Car_Description") }}</h4>
      <div class="row mx-0 px-0">
        <div class="col-md-12 mx-0 px-0">
          <SimpleInput>
            <textarea
              id="Car_Description_message"
              name="Car_Description_message"
              v-bind="Car_Description_message"
              :placeholder="t('Car_Description_message')"
              required
              :class="{ 'is-invalid': errors.Car_Description_message }"
              rows="5"
              cols="50"
            >
            </textarea>

            <div class="invalid-feedback">
              {{ errors.Car_Description_message }}
            </div>
          </SimpleInput>
        </div>
      </div>
    </div>
    <div class="row my-5">
      <div class="col-12 text-center direction_ar">
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
@media screen and (max-width: 992px) {
  .simple-button.sub_button,
  .simple-button.send {
    min-width: max-content !important;
  }
}
</style>
