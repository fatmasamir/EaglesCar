<script setup lang="ts">
import { useI18n } from "vue-i18n";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import SimpleInput from "@/components/global/CusomInputs/SimpleInput/SimpleInput.vue";
import { onMounted } from "vue";
import AOS from "aos";
const { t } = useI18n();
onMounted(() => {
  AOS.init();
});
</script>
<template>
  <form>
    <div class="row">
      <div class="">
        <SimpleInput>
          <input
            type="email"
            id="exampleFormControlInput1"
            :placeholder="t('Name')" /><img
            src="../../../../../assets/images/global/icons/global/contactUs/user.svg"
        /></SimpleInput>
      </div>
      <div class="row p-0 m-0">
        <div class="col-md-6">
          <SimpleInput>
            <input type="tel" :placeholder="t('Mobile_number')" /><img
              src="../../../../../assets/images/global/icons/global/contactUs/mobile_form.svg"
          /></SimpleInput>
        </div>
        <div class="col-md-6">
          <SimpleInput>
            <input type="email" id="Email" :placeholder="t('Email')" /><img
              src="../../../../../assets/images/global/icons/global/contactUs/sms_form.svg"
          /></SimpleInput>
        </div>
      </div>
      <div class="">
        <SimpleInput>
          <input type="text" id="Subject" :placeholder="t('Subject')" /><img
            src="../../../../../assets/images/global/icons/global/contactUs/edit-2.svg"
        /></SimpleInput>
      </div>
      <div class="">
        <SimpleInput>
          <textarea
            id="exampleFormControlTextarea1"
            rows="3"
            :placeholder="t('message')"
          ></textarea
          ><img
            src="../../../../../assets/images/global/icons/global/contactUs/message-2.svg"
        /></SimpleInput>
      </div>
    </div>
    <SimpleButton type="send">
      <button to="/" type="submit" class="btn">
        {{ t("send") }}
      </button></SimpleButton
    >
  </form>
</template>
<style lang="scss" scoped>
form {
  /* simple-input */
  .simple-input {
    position: relative;
    margin-bottom: 25px !important;
    label {
      margin-bottom: 0;
    }
    text-align: initial;
    input,
    select {
      height: 60px !important;
    }
    input,
    select,
    textarea {
      text-align: left;
      background: #f9f9f9;
      width: 100%;
      margin-bottom: 0px !important;
      padding-left: 39px !important;
      padding-top: 13px;
    }
    img {
      position: absolute;
      top: 15px;
      left: 10px;
      width: 25px;
      height: 25px;
    }
  }
  .simple-button.send button {
    width: 30%;
  }
}

/****media****/

@media screen and (max-width: 1240px) {
}
@media screen and (max-width: 1210px) {
}
@media screen and (max-width: 992px) {
}

/*ar version */
.is-ar {
  form {
    .simple-input {
      input,
      select,
      textarea {
        text-align: right;
        padding-right: 39px !important;
        padding-left: 10px !important;
      }
      img {
        right: 10px;
        left: auto;
      }
    }
  }
}
</style>
