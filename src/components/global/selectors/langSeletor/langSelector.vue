<script setup lang="ts">
import { onMounted, ref } from "vue";
import type {Langs} from "@/assets/interfaces/langs";

// props
const props = defineProps<{
    buttons: {
        title: string;
        name: Langs;
    }[];
}>();

// emit
const emit = defineEmits<{
    (e: "current", current: Langs): void;
}>();
// current
const current = ref<number>(0);

// change current
function changeCurrent(idx: number) {
    current.value = idx;
    console.log(props.buttons[idx].name);
    emit("current", props.buttons[idx].name);
}
</script>
<template>
    <nav class="lang-selector">
        <ul>
            <li v-for="(item, index) in buttons">
                <button
                    :class="{ active: current == index }"
                    @click="changeCurrent(index)"
                >
                    {{ item.title }}
                </button>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">
.lang-selector {
    margin: {
        bottom: 30px;
    }
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin: {
            top: 1%
        }
        li {
            button {
                color: var(--first-text-color);
                width: 100%;
                padding: 20px 0;
                border: 1px solid var(--second-gray-border-color);
                border-radius: var(--main-border-radius);

                &.active {
                    color: var(--white-color);
                    background: var(--first-color);
                    transform: scale(1.1);
                    border: none;
                    transition: var(--main-transition);
                }
            }
        }
    }
}
</style>
