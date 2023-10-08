<script setup lang="ts">
import { useI18n } from "vue-i18n";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import { onMounted } from "vue";
import AOS from "aos";
const { t } = useI18n();
onMounted(() => {
  AOS.init();
});
</script>
<template>
  <div class="FormContact">
    <div class="card">
      <div class="row">
        <div class="col-lg-7">
          <h2>Keep in touch with us</h2>
          <form>
            <div class="mb-3">
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Name"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label"
                >Example textarea</label
              >
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </form>
        </div>
        <div class="col-lg-5">saasdsd</div>
      </div>
      <SimpleButton type="send">
        <button to="/" type="submit" class="btn">
          {{ t("View") }}
        </button></SimpleButton
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
.FormContact {
  background: white;
  margin: 100px;
  .card {
    box-shadow: 0px 15px 50px 0px #0000000d;
    width: 90%;
    margin: auto;
    margin-top: -150px;
    padding: 15px 30px;
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
}
</style>
