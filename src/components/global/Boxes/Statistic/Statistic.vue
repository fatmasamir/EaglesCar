<script setup lang="ts">
import { ref } from "vue";
import serveMedia from "../../../../assets/scripts/serveMedia/serveMedia";

const props = defineProps<{
    title: string;
    count: number;
    category: string;
}>();
const meta = ref<string>(import.meta.url);
</script>
<template>
    <section class="statistic" :class="{ [category]: true }">
        <section class="info">
            <h3>{{ title }}</h3>
            <span>{{ count }}{{ category == "earn" ? "$" : "" }}</span>
        </section>
        <section class="icon">
            <InlineSvg
                :src="`/images/global/icons/statistics/${category}.svg`"
            />
            
        </section>
    </section>
</template>
<style lang="scss">
@import "../../../../assets/scss/functions";
.statistic {
    height: 100%;
    background: var(--white-color);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 10px;
    border-radius: var(--main-border-radius);
    position: relative;
    @include mainBoxShadow();
    transition: var(--main-transition);
    &:hover {
        box-shadow: none;
    }
    &.file {
        .info {
            span {
                color: var(--first-color);
            }
        }
    }
    &.download {
        .info {
            span {
                color: var(--status-published);
            }
        }
    }
    &.earn {
        .info {
            span {
                color: var(--status-pending);
            }
        }
    }
    .cover {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
    }
    .info,
    .icon {
        display: grid;
        position: relative;
        z-index: 1;
    }
    .info {
        grid-template-rows: repeat(2, 2fr);

        align-content: center;

        h3 {
            color: var(--second-text-color);
            font: {
                size: 16px;
            }
        }
        span {
            font: {
                size: 28px;
                weight: bold;
            }
        }
    }
    .icon {
        justify-content: flex-end;
        align-content: center;
    }
}
</style>
