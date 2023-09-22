<script setup lang="ts">
const props = defineProps<{
  type: "send" | "end" | "sub_button" | "send_blue";
}>();
</script>
<template>
  <section class="simple-button" :class="{ [type]: type }">
    <slot></slot>
  </section>
</template>
<style lang="scss">
.simple-button {
  button,
  .btn {
    min-width: 100px;
    padding: 10px;
    border: none;
    border-radius: var(--main-border-radius);
    svg {
      width: 18px;
      height: 20px;
    }
  }
  &.send,
  &.send_blue {
    button,
    .btn {
      background: var(--first-color);
      color: var(--white-color);
      min-width: 170px;
    }
  }
  &.send_blue {
    button,
    .btn {
      background: #094e81;
    }
  }
  &.end {
    button,
    .btn {
      background: var(--second-background);
      color: var(--text-gray-color);
      min-width: 170px;
    }
  }
  &.sub_button {
    button,
    .btn {
      background-color: transparent;
      color: var(--first-color);
      border: 1px solid;
      min-width: 170px;
    }
  }
}
</style>
