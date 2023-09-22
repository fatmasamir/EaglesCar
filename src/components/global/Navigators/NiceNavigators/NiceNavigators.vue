<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { inject, onMounted } from "@vue/runtime-core";
import type { Types } from "@/stores/upload/interface";

// props
const props = defineProps<{
  page: {
    name: string;
  };
  buttons: {
    title: string;
    name: string;
    icon: string;
  }[];
}>();
// emit
const emit = defineEmits<{
  (e: "changeCurrent", current: Types): void;
}>();

// router
const router = useRouter();

// route
const route = useRoute();

// currentNav
function currentFavNav(): void {
  let buttons = document.querySelectorAll(
    ".nice-navigator li button"
  ) as NodeListOf<HTMLElement>;
  let marker = document.querySelector(".nice-navigator .marker") as HTMLElement;
  buttons.forEach((button: HTMLElement) => {
    button.onclick = () => {
      // change marker height and position to current target
      marker.style.width = getComputedStyle(button).width;
      marker.style.left = button.offsetLeft + "px";

      // custom event to send current nav
      emit("changeCurrent", button.parentElement!.dataset.nav as Types);

      // change current query
      router.push({
        name: props.page.name,
        query: {
          type: button.parentElement!.dataset.nav,
        },
      });
    };
  });
}
// setup nav
function setUpFavNav() {
  let current_nav = document.querySelector(
    `.nice-navigator ul li[data-nav=${route.query.type}] button`
  ) as HTMLButtonElement;

  if (current_nav) {
    current_nav.click();
  } else {
    let init_button = document.querySelectorAll(
      ".nice-navigator ul li button"
    )[0] as HTMLButtonElement;

    init_button.click();
  }
}
function changeOnTab(tabName) {
  // console.log(tabName);
  return tabName
}
onMounted(() => {
  currentFavNav();
  setUpFavNav();
});
</script>

<template>
  <section class="nice-navigator">
    <section class="marker"></section>
    <ul ref="list">
      <!-- element -->
      <li
        :data-nav="button.name"
        v-for="button in buttons"
        @click="changeOnTab(button.name)"
      >
        <button>
          <!-- icon -->
          <section class="icon">
            <InlineSvg
              :src="`/images/global/icons/global/${button.icon}.svg`"
            />
          </section>

          <!-- title -->
          <span>{{ button.title }}</span>
        </button>
      </li>
    </ul>
  </section>
</template>

<style lang="scss">
@import "../../../../assets/scss/variables";

.nice-navigator {
  width: 100%;
  display: flex;
  position: relative;
  padding: {
    bottom: 8px;
  }
  .marker {
    width: 100px;
    height: 2px;
    background: var(--first-color);
    position: absolute;
    left: 0;
    bottom: 0;
    transition: var(--main-transition);
  }
  &::before {
    content: "";
    width: 100%;
    height: 1px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: var(--button-border);
  }
  ul {
    width: 100%;
    display: flex;
    column-gap: 10px;
    list: {
      style: none;
    }
    margin: 0;
    padding: 0;
    @media screen and (max-width: map-get($grid, md)) {
      justify-content: center;
    }
    li {
      display: flex;
      button {
        background: unset;
        border: none;
        outline: none;
        display: flex;
        align-items: center;
        column-gap: 5px;

        padding: 5px 10px;
        cursor: pointer;
        .icon {
          width: 24px;
          margin: {
            right: 10px;
          }
        }
      }
    }
  }
}
</style>
