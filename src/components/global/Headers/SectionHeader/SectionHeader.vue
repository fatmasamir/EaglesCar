<script setup lang="ts">
import MainButton from "../../Buttons/MainButton/MainButton.vue";

const props = defineProps<{
    data?: {
        title: string;
        description?: string;
        target?: {
            info: {
                title: string;
                name: string;
            };
            icon?: {
                name: string;
                reverse: boolean;
            };
        };
    };
}>();
</script>
<template>
    <section class="section-header">
        <template v-if="data">
            <h2 class="title_page">{{ data.title }}</h2>
            <section class="target-button" v-if="data.target">
                <MainButton
                    v-if="data.target.icon"
                    :target="{
                        title: data.target.info.title,
                        name: data.target.info.name,
                    }"
                    :icon="data.target.icon"
                />
                <MainButton
                    v-else
                    :target="{
                        title: data.target.info.title,
                        name: data.target.info.name,
                    }"
                />
            </section>
            <p v-if="data.description">{{ data.description }}</p>
        </template>
        <template v-else>
            <h2 class="title_page"><slot name="title"></slot></h2>
            <section class="buttons">
                <slot name="buttons"></slot>
            </section>
            <p><slot name="description"></slot></p>
        </template>
    </section>
</template>

<style lang="scss">
@import "../../../../assets/scss/variables";
.section-header {
    grid-template-columns: repeat(2, 1fr);
    padding: 20px 0;
    @media screen and (max-width: map-get($grid, lg)) {
        grid-template-columns: 1fr;
        justify-items: center;
        row-gap: 15px;
    }
    h2 {
        color: var(--first-text-color);
    }
    .target-button {
        width: 100%;
        display: flex;
        margin-top: 10px;
        align-items: right;
        @media screen and (max-width: map-get($grid, lg)) {
            justify-content: right;
        }
        .main-button {
            a {
                padding: 10px 38px;
            }
        }
    }
    p {
        color: var(--second-text-color);
        grid-row: 2;
        @media screen and (max-width: map-get($grid, lg)) {
            text-align: center;
        }
        a {
            color: var(--third-color);
            margin: 0 10px;
            text-decoration: none;
            svg {
                transform: rotate(180deg);
                margin: 0 5px;
            }
        }
    }
    .buttons {
        width: 100%;
        display: flex;
        margin-top: 20px;
        align-items: center;
        column-gap: 10px;
        button {
            all: unset;
            color: var(--white-color);
            background: var(--first-color);
            display: flex;
            justify-content: center;
            align-items: center;
            column-gap: 10px;
            padding: 12px 20px;
            border-radius: var(--main-border-radius);
            cursor: pointer;
            &.success {
                background: var(--third-color);
            }
        }
    }
}
</style>
