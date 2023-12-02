<script setup lang="ts">
import { ref, defineEmits } from "vue";
import { useI18n } from "vue-i18n";
import SimpleInput from "@/components/global/CusomInputs/SimpleInput/SimpleInput.vue";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import Map from "./Map.vue";

// emit
let emits = defineEmits(["ChooseTabAccount"]);
//i18n
const { t } = useI18n();

// handel submit
let onSubmit = () => {
  console.log("Publish");
};
</script>
<template>
  <form @submit.prevent="onSubmit">
    <div class="box mt-3 mb-3 Insurance">
      <h4>{{ t("Parking_address") }}</h4>
      <div class="row">
        <div class="col-md-12 pr-0">
          <SimpleInput>
            <input
              type="text"
              id="Market_value_your_car"
              name="Market_value_your_car"
              placeholder="0000000"
            />
          </SimpleInput>
        </div>
      </div>
      <Map />
    </div>
    <div class="col-12 text-center mb-5 mt-5">
      <SimpleButton type="sub_button">
        <button>
          {{ t("Finish_later") }}
        </button>
      </SimpleButton>
      <SimpleButton type="send">
        <button type="submit">
          {{ t("Publish") }}
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
