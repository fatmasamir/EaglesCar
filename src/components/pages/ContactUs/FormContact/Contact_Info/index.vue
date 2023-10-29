<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted } from "vue";
import AOS from "aos";
const { t } = useI18n();
onMounted(() => {
  AOS.init();
});
</script>
<template>
  <div class="Contact_Info">
    <h3>{{ t("Contact_Info") }}</h3>
    <ul class="list_contact">
      <li>
        <router-link to="/"
          ><img
            src="@//assets/images/global/icons/global/contactUs/map.svg"
          />{{ t("location") }}</router-link
        >
      </li>
      <li>
        <router-link to="/"
          ><img
            src="@//assets/images/global/icons/global/contactUs/mobile.svg"
          />{{ t("Phone_number") }}</router-link
        >
      </li>
      <li>
        <router-link to="/"
          ><img
            src="@//assets/images/global/icons/global/contactUs/sms.svg"
          />{{ t("Email") }}</router-link
        >
      </li>
    </ul>
    <h6>{{ t("Social_media_contacts") }}</h6>
    <ul class="Social_media_contacts">
      <li>
        <router-link to="/">
          <img
            src="@//assets/images/global/icons/global/contactUs/facebook.svg"
        /></router-link>
      </li>
      <li>
        <router-link to="/">
          <img src="@//assets/images/global/icons/global/contactUs/twitter.svg"
        /></router-link>
      </li>
      <li>
        <router-link to="/">
          <img
            src="@//assets/images/global/icons/global/contactUs/instagram.svg"
        /></router-link>
      </li>
      <li>
        <router-link to="/">
          <img src="@//assets/images/global/icons/global/contactUs/youtube.svg"
        /></router-link>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.Contact_Info {
  h3,
  h6 {
    font-weight: 700;
  }
  ul {
    list-style-type: none;
    padding: 0px;
  }
  .list_contact {
    display: block;
    margin: 20px 0px;
    li {
      margin-bottom: 20px;
      a {
        color: black;
        img {
          width: 35px;
          height: 35px;
          margin-right: 10px;
        }
      }
    }
  }
  .Social_media_contacts {
    margin-top: 20px;
    li {
      display: inline-block;
      border: 1px solid #e7e7e7;
      background: #fcfdff;
      border-radius: 100%;
      padding: 10px;
      margin-right: 20px;
    }
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
  .Contact_Info {
    .list_contact {
      li {
        a {
          img {
            margin-right: 0px;
            margin-left: 10px;
          }
        }
      }
    }
    .Social_media_contacts {
      li {
        margin-left: 20px;
        margin-right: 0px;
      }
    }
  }
}
</style>
