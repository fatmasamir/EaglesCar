<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted, ref } from "vue";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import AOS from "aos";
const { t } = useI18n();
const slides = [
  {
    author: "Ahmed ali",
    content: `
          It is always a positive experience when renting from your 5th street
          location. The staff is very 
          professional and efficient and always smiling. And I always feel
          welcome and appreciated. The 
          management is always prompt to solve any issue at any moment. Their
          efficiency and
          professionalism makes it my number one choice.`,
  },
  {
    author: "Ahmed ali",
    content: `
          It is always a positive experience when renting from your 5th street
          location. The staff is very 
          professional and efficient and always smiling. And I always feel
          welcome and appreciated. The 
          management is always prompt to solve any issue at any moment. Their
          efficiency and
          professionalism makes it my number one choice.`,
  },
  {
    author: "Ahmed ali",
    content: `
          It is always a positive experience when renting from your 5th street
          location. The staff is very 
          professional and efficient and always smiling. And I always feel
          welcome and appreciated. The 
          management is always prompt to solve any issue at any moment. Their
          efficiency and
          professionalism makes it my number one choice.`,
  },
];
onMounted(() => {
  AOS.init();
});
</script>
<template>
  <section class="ClientsTestimonials">
    <div class="container">
      <div class="row">
        <h6 class="color-main">{{ t("Reviewed_People") }}</h6>
        <h2 class="header_title">{{ t("Clients_testimonials") }}</h2>
        <img
          src="../../../../assets/images/global/icons/global/Homepage/rate.svg"
          class="rateing"
        />
        <carousel :items-to-show="1">
          <slide v-for="slide in slides" :key="slide" class="mx-1">
            <div class="review">
              <!-- <div class="rate">
                <input type="radio" id="star5" name="rate" value="5" />
                <label for="star5" title="5">5 stars</label>
                <input type="radio" id="star4" name="rate" value="4" />
                <label for="star4" title="4">4 stars</label>
                <input type="radio" id="star3" name="rate" value="3" />
                <label for="star3" title="3">3 stars</label>
                <input type="radio" id="star2" name="rate" value="2" />
                <label for="star2" title="2">2 stars</label>
                <input type="radio" id="star1" name="rate" value="1" />
                <label for="star1" title="1">1 star</label>
              </div> -->

              <p>{{ slide.content }}</p>
              <h5>- {{ slide.author }}</h5>
            </div>
          </slide>

          <template #addons>
            <!-- <navigation /> -->
            <pagination />
          </template>
        </carousel>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
/****media****/
.ClientsTestimonials {
  text-align: center;
  margin-top: 150px;
  padding: 100px;
  background: #f9f9f9;
  .row {
    max-width: 70% !important;
    margin: auto;
    .rateing {
      width: 200px;
      text-align: center;
      margin: 20px auto 30px;
    }
    p {
      color: #716d6e;
      line-height: 35px;
    }
    h5 {
      font-weight: 700;
      font-size: 15px;
    }
    .review {
      margin: auto;
      text-align: center;
      /* Rate */
      // .rate {
      //   width: 100%;
      //   /* float: left; */
      //   height: 46px;
      //   padding: 0 10px;
      // }
      // .rate:not(:checked) > input {
      //   position: absolute;
      //   top: -9999px;
      // }
      // .rate:not(:checked) > label {
      //   float: right;
      //   width: 1em;
      //   overflow: hidden;
      //   white-space: nowrap;
      //   cursor: pointer;
      //   font-size: 30px;
      //   color: #ccc;
      // }
      // .rate:not(:checked) > label:before {
      //   content: "★ ";
      // }
      // .rate > input:checked ~ label {
      //   color: #ffc700;
      // }
      // .rate:not(:checked) > label:hover,
      // .rate:not(:checked) > label:hover ~ label {
      //   color: #deb217;
      // }
      // .rate > input:checked + label:hover,
      // .rate > input:checked + label:hover ~ label,
      // .rate > input:checked ~ label:hover,
      // .rate > input:checked ~ label:hover ~ label,
      // .rate > label:hover ~ input:checked ~ label {
      //   color: #c59b08;
      // }
    }
  }
}
/*media" */
@media screen and (max-width: 992px) {
  .ClientsTestimonials {
    padding: 100px 0px;
    .row {
      max-width: 100% !important;
    }
  }
}
/*ar version */
.is-ar {
}
</style>
<style>
.carousel__pagination {
  padding: 0px !important;
  width: 100%;
  text-align: center;
}
.carousel__pagination-button::after {
  width: 10px;
  height: 10px;
  border-radius: 100%;
}
</style>
