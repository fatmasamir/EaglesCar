<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted } from "vue";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import { defineProps } from "vue";
import AOS from "aos";
const { t } = useI18n();
// props
let props = defineProps(["data"]);
onMounted(() => {
  AOS.init();
});
</script>
<template>
  <div class="the_block">
    <div class="image_car">
      <img :src="data.image_car" />
    </div>
    <div class="card">
      <div class="title">
        <h3>C200</h3>
        <div class="buttons">
          <div class="rating_number">
            <img
              src="../../../assets/images/global/icons/global/carRental/star.svg"
            />
            {{ data.numbrtFavorit }}
          </div>
          <SimpleButton type="send">
            <button to="/" type="submit" class="btn">
              {{ t("Available") }}
            </button></SimpleButton
          >
        </div>
      </div>
      <p class="my-3">
        Lorem ipsum dolor sit amet, conse ctetur adipiscing elit ut elit tellus.
      </p>
      <div class="row list">
        <div class="col-lg-4">
          <div class="content">
            <span>Power:</span>
            {{ data.turbo }}
          </div>
        </div>
        <div class="col-lg-4">
          <div class="content">
            <span>Bag:</span>
            {{ data.turbo2 }}
          </div>
        </div>
        <div class="col-lg-4">
          <div class="content">
            <span>Seat:</span>
            {{ data.babyCarSeat }}
          </div>
        </div>
      </div>
      <hr />
      <div class="BookNow">
        <h5>120000 LE <span>(per week)</span></h5>
        <SimpleButton type="send">
          <button to="/" type="submit" class="btn">
            {{ t("BookNow") }}
          </button></SimpleButton
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.the_block {
  .image_car img {
    width: 100%;
    margin: auto auto 20px;
  }
  .card {
    border: 1px solid #e7e7e7 !important;
    border-top: 0px !important;
    margin-bottom: 100px;
    padding: 20px;
    .title {
      justify-content: space-between;
      align-items: center;
      display: flex;
      h3 {
        font-weight: 700;
      }
      .buttons {
        display: flex;
        align-items: center;
        .rating_number {
          background: black;
          color: white;
          border-radius: 8px;
          padding: 8px 0px;
          margin-right: 10px;
          width: 70px;
          text-align: center;
        }
        button {
          height: 44px;
          padding: 5px 10px;
          background: #44c308;
          border-radius: 8px;
        }
      }
    }
    p {
      color: #818181;
    }
    .list {
      border-radius: 4px;
      > div {
        text-align: center;
        padding: 0px 5px;
        .content {
          background: #fbfbfb;
          img {
            width: 30px;
            height: 30px;
          }
        }
      }
    }
    .BookNow {
      align-items: center;
      justify-content: space-between;
      margin: 20px 0px;
      display: flex;
      h5 {
        font-size: 18px;
        span {
          font-size: 15px;
          vertical-align: sub;
        }
      }
      button {
        height: 50px;
      }
    }
    hr {
      margin-top: 30px;
      border: 1px solid;
      height: 0px;
    }
  }
}
/*media" */

@media screen and (max-width: 1409px) {
}
@media screen and (max-width: 990px) {
}

/*ar version */
.is-ar {
}
</style>
