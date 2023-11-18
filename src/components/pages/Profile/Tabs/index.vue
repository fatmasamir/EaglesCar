<script setup>
import { ref, defineEmits } from "vue";

// emit
let emits = defineEmits(["ChooseTab"]);
let activeItem = ref("My account");
let ListIcons = ref([
  {
    id: 0,
    image_icon: new URL(
      `../../../../assets/images/global/icons/global/profile/profile.svg`,
      import.meta.url
    ).href,
    image_icon_active: new URL(
      `../../../../assets/images/global/icons/global/profile/profile-active.svg`,
      import.meta.url
    ).href,
    title: "My account",
  },
  {
    id: 1,
    image_icon: new URL(
      `../../../../assets/images/global/icons/global/profile/car.svg`,
      import.meta.url
    ).href,
    image_icon_active: new URL(
      `../../../../assets/images/global/icons/global/profile/car-active.svg`,
      import.meta.url
    ).href,
    title: "My cars",
  },
  {
    id: 2,
    image_icon: new URL(
      `../../../../assets/images/global/icons/global/profile/voice-square.svg`,
      import.meta.url
    ).href,
    image_icon_active: new URL(
      `../../../../assets/images/global/icons/global/profile/voice-square-active.svg`,
      import.meta.url
    ).href,
    title: "My requests",
  },
  {
    id: 3,
    image_icon: new URL(
      `../../../../assets/images/global/icons/global/profile/key.svg`,
      import.meta.url
    ).href,
    image_icon_active: new URL(
      `../../../../assets/images/global/icons/global/profile/key-active.svg`,
      import.meta.url
    ).href,
    title: "My borrowings",
  },
  {
    id: 3,
    image_icon: new URL(
      `../../../../assets/images/global/icons/global/profile/money-3.svg`,
      import.meta.url
    ).href,
    image_icon_active: new URL(
      `../../../../assets/images/global/icons/global/profile/money-3-active.svg`,
      import.meta.url
    ).href,
    title: "Payement",
  },
]);
const ChooseTabFun = (value) => {
  activeItem.value = value;
  emits("ChooseTab", value);
};
</script>

<template>
  <ul class="TabProfile">
    <li
      v-for="item in ListIcons"
      :key="item.id"
      :class="activeItem == item.title ? 'active' : ''"
      @click="ChooseTabFun(item.title)"
    >
      <div class="content">
        <img :src="item.image_icon" class="normal" />
        <img :src="item.image_icon_active" class="activeImage" />
        <h5>{{ item.title }}</h5>
      </div>
    </li>
  </ul>
</template>
<style scoped lang="scss">
@import "./styling.scss";
</style>
