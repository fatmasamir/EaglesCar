<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted, ref } from "vue";
import AOS from "aos";
const { t } = useI18n();
onMounted(() => {
  AOS.init();
});
</script>
<template>
  <section class="OurTeam">
    <div class="container">
      <div class="info">
        <h6 class="color-main">{{ t("More_info") }}</h6>
        <h2>{{ t("Our_Team") }}</h2>
        <ul class="list">
          <li>
            <img
              src="../../../../assets/images/global/icons/global/aboutus/man1.svg"
            />
            <div
              class="info_par"
              data-aos="zoom-in-up"
              data-aos-offset="300"
              data-aos-easing="ease-in-out"
            >
              <h5>Mohamed Ahmed</h5>
              <p>Agency owner</p>
            </div>
          </li>
          <li>
            <img
              src="../../../../assets/images/global/icons/global/aboutus/man2.svg"
            />
            <div
              class="info_par"
              data-aos="zoom-in-up"
              data-aos-offset="300"
              data-aos-easing="ease-in-out"
            >
              <h5>Mohamed Ahmed</h5>
              <p>Agency owner</p>
            </div>
          </li>
          <li>
            <img
              src="../../../../assets/images/global/icons/global/aboutus/man3.svg"
            />
            <div
              class="info_par"
              data-aos="zoom-in-up"
              data-aos-offset="300"
              data-aos-easing="ease-in-out"
            >
              <h5>Mohamed Ahmed</h5>
              <p>Agency owner</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.OurTeam {
  text-align: center;
  margin-top: 50px;
  height: auto;
  .list {
    height: auto;
    overflow-y: hidden;
    padding-bottom: 50px;
    padding-top: 20px;
    list-style-type: none;
    width: 90%;
    margin: auto;
    display: flex;
    align-items: flex-start;
    li {
      text-align: center;
      position: relative;
      img {
        width: 90%;
        height: 90%;
      }
      .info_par {
        text-align: left;
        position: absolute;
        bottom: 20px;
        color: white;
        left: 50px;
        p {
          color: #d1d1d1;
        }
      }
    }
  }
}
/*media" */

@media screen and (max-width: 1409px) {
}
@media screen and (max-width: 990px) {
  .OurTeam {
    .list {
      flex-direction: column;
      li {
        margin-bottom: 20px;
      }
    }
  }
}

/*ar version */
.is-ar {
}
</style>
