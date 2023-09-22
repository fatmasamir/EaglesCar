<script setup lang="ts">
import { defineProps } from "vue";
import { useI18n } from "vue-i18n";
const props = defineProps(["rep"]);
const { t } = useI18n();
</script>
<template>
  <section class="card">
    <section class="card-body">
      <section class="row">
        <section class="col-md-4">
          <div class="icon_report">
            <!-- <InlineSvg 
                :src="`/src/assets/images/global/icons/global//${rep.icon}.svg`"/> -->
            <img :src="rep.icon" />
          </div>
        </section>
        <section class="col-md-8 title">
          <p>{{ t(rep.title) }}</p>
        </section>
      </section>

      <div class="col-md-12">
        <router-link
          class="my-2 btn-subject"
          to="/customers/reports/reports-detailes"
          v-if="!rep.link"
        >
          <InlineSvg src="/src/assets/images/global/icons/global/eye.svg" />

          {{ t(rep.button) }}
        </router-link>
        <router-link class="my-2 btn-subject" :to="rep.link" v-else>
          <InlineSvg src="/src/assets/images/global/icons/global/eye.svg" />

          {{ t(rep.button) }}
        </router-link>
      </div>
    </section>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
.btn-subject {
  display: block;
  background: var(--first-color);
  color: var(--white-color);
  padding: 8px;
  width: 90%;
  margin: auto;
  border-radius: 8px;
  border: 0px;
  text-align: center;
  text-decoration: none;
  &:hover {
    color: #fff;
  }
}
.card {
  margin: 0px;
  min-height: 200px !important;
}
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.icon_report {
  background: rgba(9, 78, 129, 0.1);
  border-radius: 8px;
  width: 60px;
  height: 60px;
  text-align: center;
  margin: auto;
  margin-top: 10px;
  padding: 10px;
  img {
    width: 40px;
    height: 40px;
  }
}
.title {
  p {
    @media screen and (max-width: map-get($grid, md)) {
      text-align: center;
    }
    font-weight: 500;
    font-size: 18px;
    padding-top: 10%;
  }
}
.accordion-body {
  display: flex;
}
</style>
