<script setup>
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import AddCarContent from "./AddCarContent/index.vue";
import { UseCars } from "@/stores/Cars/index";
import Tabs from "./SubTab/index.vue";
//i18n
const { t } = useI18n();
const Cars = UseCars();
//i18n
const AddCar = ref(false);
//itemChooseAddCar
const itemChooseAddCar = ref("All_Requests");

//ChooseTabAccount
const ChooseTabAccount = (nameTab) => {
  console.log("ChooseTab==", nameTab);
  itemChooseAddCar.value = nameTab;
};
const ListOfCar = ref([
  {
    id: 0,
    title: "C200",
    description:
      "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit ut elit tellus.",
    pre: "120000",
    img: new URL(
      `../../../../assets/images/global/icons/global/carRental/car1.svg`,
      import.meta.url
    ).href,
    status: "Pending",
  },
  {
    id: 1,
    title: "C200",
    description:
      "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit ut elit tellus.",
    pre: "120000",
    img: new URL(
      `../../../../assets/images/global/icons/global/carRental/car2.svg`,
      import.meta.url
    ).href,
    status: "Refused",
  },
]);
onMounted(() => {
  Cars.get_Cars();
});
</script>
<template>
  <Tabs
    @ChooseTabAccount="ChooseTabAccount"
    :itemChooseAddCar="itemChooseAddCar"
  ></Tabs>
  <div v-if="!AddCar">
    <pre>{{ Cars.Cars }}</pre>
    <div class="text-center mb-5" v-if="!Cars.Cars">
      <img
        src="../../../../assets/images/global/icons/global/profile/drunk_driving-cuate.svg"
      />
      <h6>{{ t("Add_car") }}</h6>
      <p>{{ t("messageAdd_car") }}</p>
      <SimpleButton type="send">
        <button class="btn" @click="AddCar = true">
          {{ t("add") }}
        </button></SimpleButton
      >
    </div>
    <div v-else>
      <ul>
        <li v-for="item in Cars.Cars" :key="item.id">
          <div class="box">
            <div class="img_div"><img :src="item.media.cover" /></div>
            <div class="content">
              <div class="title">
                <h3>
                  {{ item.title }}
                </h3>
              </div>
              <p>{{ item.short_description }}</p>
              <hr />
              <div class="end">
                <span
                  ><strong>{{ item.price }} LE</strong>
                  <span class="per_week">(per week)</span></span
                >
                <div class="buttons">
                  <!-- <SimpleButton type="send">
                    <button class="btn" @click="AddCar = true">
                      {{ t("Finish_now") }}
                    </button></SimpleButton
                  > -->
                  <SimpleButton type="send">
                    <!-- <button class="btn">
                      {{ t("Finish now") }}
                    </button> -->
                    <button class="btn btn-Edit">
                      {{ t("Edit") }}
                    </button></SimpleButton
                  >
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="plus" @click="AddCar = true">+</div>
    </div>
  </div>
  <AddCarContent v-else />
</template>
<style lang="scss" scoped>
@import "../stylingProfile.scss";
.simple-button.send button,
.simple-button.send .btn {
  padding: 15px 30px;
  width: max-content !important;
  height: max-content !important;
  border-radius: 8px;
}
.box {
  display: flex;
  overflow: visible;
  width: 95%;
  margin: 50px auto 70px;
  padding: 30px 10px;
  .img_div {
    position: relative;
    overflow: visible;
    width: 572px;
    img {
      width: 100%;
      height: 100%;
      position: absolute;
      right: 20px;
      bottom: -50px;
      transform: scale(1.2);
    }
  }
  .end {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .per_week {
      vertical-align: sub;
      font-size: 13px;
    }
    // .buttons {
    //   display: flex;
    //   .simple-button button {
    //     width: 150px !important;
    //   }
    // }
  }
  .content {
    margin-left: 50px;
    width: 100%;
    hr {
      background: white;
      height: 1px;
      border-color: #b1b1b1;
    }
  }
}
.plus {
  cursor: pointer !important;
  width: 80px;
  height: 80px;
  font-size: 33px;
  margin-left: auto;
  border-radius: 100%;
  color: white;
  background: #f4a71d;
  text-align: center;
  padding: 15px;
  margin-bottom: 40px;
}
.simple-button.send .btn.btn-Edit {
  background: rgba(244, 167, 29, 0.1);
  color: rgba(244, 167, 29, 1);
}
@media screen and (max-width: 992px) {
  .box {
    width: 100%;
    text-align: center;
    flex-direction: column;
    .img_div {
      width: 100%;
      margin-bottom: 50px;
      text-align: center;
      img {
        position: relative;
        top: 0px;
        right: 0px;
        width: 200px;
        text-align: center;
      }
    }
    .content {
      margin-left: 0px;
    }
    .end {
      display: block;
      button {
        margin-top: 20px;
      }
    }
  }
  .plus {
    width: 50px;
    height: 50px;
    margin: auto auto 50px;
    font-size: 30px;
    padding: 5px;
  }
}
//.is-ar
.is-ar {
  .box .content {
    margin-right: 50px;
    text-align: right;
  }
  .plus {
    margin-left: 0px;
    margin-right: auto;
  }
}
</style>
