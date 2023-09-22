<script setup lang="ts">
import { useI18n } from "vue-i18n";
// props
const props = defineProps(["user"]);

// i18n
const { t } = useI18n();

// counters
const counters_titles = [
  t("global.boxes.userBox.counters[0]"),
  t("global.boxes.userBox.counters[1]"),
  t("global.boxes.userBox.counters[2]"),
];
// ranks
const ranks = ["first", "second", "third"];
</script>
<template>
  <section class="user-box">
    <!-- header -->
    <header>
      <!-- image -->
      <section class="image">
        <img
          :src="
            user.avatar
              ? user.avatar
              : 'https://www.svgrepo.com/show/382102/male-avatar-boy-face-man-user-8.svg'
          "
        />
      </section>
      <!-- info -->
      <section class="info">
        <h3>{{ user.name }}</h3>
        <span
          >{{ t("global.boxes.userBox.level") }}
          {{ user.level ? user.level : 1 }}</span
        >
      </section>

      <!-- rank -->

      <section
        class="rank"
        :class="{
          [ranks[user.rank - 1]]: user.rank < 4 ? true : false,
        }"
      >
        <span>#{{ user.rank }}</span>
      </section>
    </header>
    <!-- counter -->
    <section class="counters">
      <div class="counter">
        <h3 v-if="user.photos">{{ user.photos + user.videos + user.graphics }}</h3>
        <h3 v-else-if="user.resources">{{ user.resources }}</h3>
        <h3 v-else>0</h3>
        <span>عدد المصادر</span>
      </div>
      <div class="counter">
        <h3>{{ user.followers_count ? user.followers_count : 0 }}</h3>
        <span>عدد المتابعين</span>
      </div>
      <div class="counter">
        <h3>{{ user.downloads ? user.downloads : 0 }}</h3>
        <span>عدد التحميلات</span>
      </div>
    </section>
  </section>
</template>
<style scoped lang="scss">
.user-box {
  display: grid;
  row-gap: 15px;
  background: var(--white-color);
  border-radius: var(--main-border-radius);
  padding: 20px;
  h3 {
    font: {
      size: 18px;
    }
  }
  span {
    font: {
      size: 14px;
    }
  }
  header {
    display: grid;
    grid-template-columns: 70px 1fr 42px;
    column-gap: 10px;
    position: relative;
    .image {
      width: 100%;
      img {
        width: 100%;
        height: 70px;
        border-radius: 50%;
        object-fit: cover;
      }
    }
    .info {
      display: grid;
      align-content: center;
    }
    .rank {
      color: var(--white-color);
      background: var(--rank-init);
      position: absolute;
      top: -20px;
      right: 0;
      padding: 10px;
      &.first {
        background: var(--rank-first);
      }
      &.second {
        background: var(--rank-second);
      }
      &.third {
        background: var(--rank-third);
      }
      span {
        font: {
          size: 20px;
        }
      }
    }
  }
  .counters {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 4px;
    .counter {
      display: grid;
      justify-items: center;
      span {
        font: {
          size: 12px;
        }
      }
      &:not(:last-of-type) {
        border: {
          right: 2px solid var(--third-border-color);
        }
      }
    }
  }
}
[lang="ar"] {
  .user-box {
    header .rank {
      right: unset;
      left: 0;
    }

    .counters .counter:not(:last-of-type) {
      border-right: unset;
      border-left: 2px solid var(--third-border-color);
    }
  }
}
</style>
