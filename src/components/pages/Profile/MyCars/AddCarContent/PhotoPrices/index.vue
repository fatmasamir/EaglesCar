<script setup lang="ts">
import { ref, defineEmits } from "vue";
import { useI18n } from "vue-i18n";
import SimpleInput from "@/components/global/CusomInputs/SimpleInput/SimpleInput.vue";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import { UseProfile } from "@/stores/Profile/index";
//Bloges
const Profile = UseProfile();
// emit
let emits = defineEmits(["ChooseTabAccount"]);
//i18n
const { t } = useI18n();

// ListCar
let ListCar = ref({
  Short_term: 0,
  long_term: 0,
  with_driver: 0,
  without_driver: 0,
});
let ListShort_term = ref([]);
let ListShortTerms = ref(false);
let error = ref(false);

// Changecheckbox submit
let Changecheckbox = (e) => {
  const valueChecked = e.target.checked;
  if (valueChecked) {
    if (ListCar.value.Short_term) {
      ListShortTerms.value = true;
    }
  } else {
    ListShortTerms.value = false;
    ListCar.value.with_driver = false;
    ListCar.value.without_driver = false;
  }
};
// handel submit
let onSubmit = () => {
  if (ListCar.value.length !== 0) {
    Profile.AccountVerified.Short_term = ListCar.value.Short_term;
    Profile.AccountVerified.long_term = ListCar.value.long_term;
    Profile.AccountVerified.with_driver = ListCar.value.with_driver;
    Profile.AccountVerified.without_driver = ListCar.value.without_driver;
    console.log("Profile.AccountVerified=", Profile.AccountVerified);
    // for (let key in ListCar.value) {
    //   console.log(ListCar.value[key]);
    //   if (ListCar.value[key] == "Short_term") {
    //     Profile.AccountVerified.plate_number = values.Plate_number;
    //   }
    // }
    // emits("ChooseTabAccount", "Parking address");
  } else {
    error.value = true;
  }
};
</script>
<template>
  <form @submit.prevent="onSubmit">
    <div class="Upload_Papers">
      <div class="content">
        <div class="">
          <h5>{{ t("Upload_Papers_car") }} :</h5>
          <p>
            {{ t("message_Upload_Papers_car") }}
            <span class="color-denger">{{
              t("message_Upload_Papers_car_required")
            }}</span>
          </p>
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
    <div class="box mt-3 mb-3 Insurance">
      <h4>{{ t("Recommended_daily_price") }}</h4>
      <div class="row">
        <div class="col-md-6 px-0">
          <div class="ranking">
            <img
              src="../../../../../../assets/images/global/icons/global/profile/ranking.svg"
            />
            <p>
              {{ t("Our_Recommended_daily_price") }}
              <span class="color-main">{{
                t("Our_Recommended_daily_price_number")
              }}</span>
            </p>
          </div>
        </div>
        <div class="col-md-6 pr-0">
          <SimpleInput>
            <label>{{ t("Market_value_your_car") }}</label>
            <input
              type="text"
              id="Market_value_your_car"
              name="Market_value_your_car"
              placeholder="0000000"
            />
            <span class="currency">EGP</span>
          </SimpleInput>
        </div>
      </div>
    </div>
    <div class="box mt-3 mb-3 SELECT_HOW_WANT">
      <h6>{{ t("SELECT_HOW_WANT") }}</h6>
      <p class="mt-3 mb-4">{{ t("messageIdentity_document") }}</p>
      <pre>{{ ListCar }}</pre>
      <ul class="List">
        <li>
          <div class="content">
            <input
              type="checkbox"
              value="0"
              v-model="ListCar.Short_term"
              @change="Changecheckbox($event)"
            />
            <p>
              <span class="color-gray">{{ t("Short_term") }}</span> (
              {{ t("Short_term_mess") }}
              )
            </p>
          </div>
          <ul v-if="ListShortTerms" class="SubList">
            <li>
              <input type="checkbox" v-model="ListCar.with_driver" />
              <p>
                {{ t("With_driver") }}
              </p>
            </li>
            <li>
              <input
                type="checkbox"
                value="Without_driver"
                v-model="ListCar.without_driver"
              />
              <p>
                {{ t("Without_driver") }}
              </p>
            </li>
          </ul>
        </li>
        <li>
          <div class="content">
            <input type="checkbox" value="0" v-model="ListCar.long_term" />
            <p>
              <span class="color-gray">{{ t("Long_term") }}</span> (
              {{ t("Long_term_mess") }}
              )
            </p>
          </div>
        </li>
      </ul>
      <!-- <span v-if="error" class="color-denger">{{ t("requiredFiled") }}</span> -->
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
@import "../../../_stylingProfile.scss";
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
.ranking {
  display: flex;
  background: #f9f9f9;
  align-items: center;
  height: 92px;
  border-radius: 8px;
  padding: 10px;
  p {
    padding: 0px;
    margin: 0px;
  }
}
.Upload_Papers {
  margin: 30px 0px;
  align-items: center;
  display: flex;
  padding: 20px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #f5f5f5;
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    .upload {
      width: max-content;
      margin-bottom: 0px !important;
      height: max-content;
      input {
        width: 100%;
        top: 0px;
        padding: 0px !important;
        margin: 0px;
        height: 47px !important;
      }
      .simple-button.send {
        height: max-content;
        background: #f4a71d;
        color: white;
        border-radius: 8px;
        padding: 10px;
        width: 100% !important;
      }
    }
  }
}
.SELECT_HOW_WANT {
  .List {
    padding: 0px;
    list-style-type: none;
    li {
      margin-bottom: 20px;
      .content {
        display: flex;
        align-items: center;
      }
      p {
        margin: 0px;
        padding: 0px;
      }
      input {
        margin-right: 10px;
        width: 20px;
        height: 20px;
        vertical-align: middle;
      }
      .SubList {
        margin: 15px 0px;
        list-style-type: none;
        li {
          display: flex;
          align-items: center;
        }
      }
    }
  }
}
.is-ar {
  .SELECT_HOW_WANT {
    .List {
      input {
        margin-left: 10px;
        margin-right: 0px;
      }
    }
  }
}
</style>
