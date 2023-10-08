<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted, ref } from "vue";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import AOS from "aos";
const { t } = useI18n();
const Lists = [
  {
    id: 1,
    date: "18 May 2022",
    name: "Article name",
    image: new URL(`./images/blog1.png`, import.meta.url).href,
    paragraph: "Here it will include the data about this article",
  },
  {
    id: 2,
    date: "18 May 2022",
    name: "Article name",
    image: new URL(`./images/blog2.png`, import.meta.url).href,
    paragraph: "Here it will include the data about this article",
  },
  {
    id: 3,
    date: "18 May 2022",
    name: "Article name",
    image: new URL(`./images/blog3.png`, import.meta.url).href,
    paragraph: "Here it will include the data about this article",
  },
  {
    id: 4,
    date: "18 May 2022",
    name: "Article name",
    image: new URL(`./images/blog4.png`, import.meta.url).href,
    paragraph: "Here it will include the data about this article",
  },
];
onMounted(() => {
  AOS.init();
});
</script>
<template>
  <section class="Blogs">
    <div class="container">
      <div class="row">
        <h6 class="color-main p-0">{{ t("New_information") }}</h6>
        <h3>{{ t("Our_blogs") }}</h3>
        <ul class="blogs_list row">
          <li class="col-lg-3 col-md-6" v-for="list in Lists" :key="list.id">
            <img :src="list.image" />
            <div
              class="info"
              data-aos="zoom-in-up"
              data-aos-offset="300"
              data-aos-easing="ease-in-out"
            >
              <span>{{ list.date }}</span>
              <h5>{{ list.name }}</h5>
              <p>{{ list.paragraph }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
/****media****/
.Blogs {
  margin-top: 150px;
  .container {
    max-width: 95%;
    .row {
      overflow-x: hidden;
      margin: 0px !important;
      h3 {
        font-weight: 700;
        padding: 0px;
        margin-bottom: 50px;
      }
      .blogs_list {
        padding: 0px;
        list-style-type: none;
        overflow: hidden;
        li {
          margin: auto;
          position: relative;
          padding-left: 0px;
          img {
            width: 100%;
            object-fit: contain;
          }
          .info {
            position: absolute;
            bottom: 0px;
            padding: 15px;
            span {
              color: #d8d8d8;
              font-size: 14px;
            }
            p {
              color: #d8d8d8;
              font-size: 14px;
            }
            h5 {
              color: white;
              margin: 10px 0px;
            }
          }
        }
      }
    }
  }
}
/*media" */
@media screen and (min-width: 1240px) {
  .Blogs {
    .container {
      max-width: 95%;
      margin-left: auto;
      margin-right: -30px;
    }
  }
  /*ar version */
  .is-ar {
    .Blogs {
      .container {
        margin-left: -30px;
        margin-right: auto;
      }
    }
  }
}
@media screen and (max-width: 992px) {
  .Blogs {
    text-align: center;
    .container {
      padding: 20px;
      ul li {
        img {
          height: auto;
        }
      }
      .row .blogs_list li .info {
        width: 100%;
      }
    }
  }
}

/*ar version */
.is-ar {
  .Blogs .container .row .blogs_list li {
    padding-right: 5px;
    padding-left: 0px;
  }
}
</style>
