<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useI18n } from "vue-i18n";

// props
interface Props {
    number_of_pages: Number
}
const props = defineProps<Props>();

// emit
const emit = defineEmits(["changeCurrent"]);

// i18n
const { t } = useI18n();

// refs
const prev = ref();
const prev_button = ref();
const next = ref();
const next_button = ref();

// current page
const current_page = ref<number>(1);
const target = ref<number>(current_page.value);

// change current
function changeCurrent() {
    target.value = current_page.value;
    emit("changeCurrent", current_page.value);
    document.body.scrollIntoView();
}

// remove disable
/**
 * check disable button
 * @param {string} - current button
 */
function remove_disable(button: string) {
    if (button == "next") {
        if (next.value.classList.contains("disable")) {
            next.value.classList.remove("disable");
            next_button.value.classList.remove("disable");
        }
    } else {
        if (prev.value.classList.contains("disable")) {
            prev.value.classList.remove("disable");
            prev_button.value.classList.remove("disable");
        }
    }
}
// -- buttons
// prev
function prevButton() {
    if (current_page.value != 1) {
        current_page.value -= 1;
        changeCurrent();
        if (current_page.value == 1) {
            prev.value.classList.add("disable");
            prev_button.value.classList.add("disable");
        }
        remove_disable("next");
    }
}

// next
function nextButton() {
    if (current_page.value != props.number_of_pages) {
        current_page.value += 1;
        changeCurrent();
        if (current_page.value == props.number_of_pages) {
            next.value.classList.add("disable");
            next_button.value.classList.add("disable");
        }
        remove_disable("prev");
    }
}

// travel

/**
 * use this function to travel to target page
 */
function travel() {
    if (target.value != current_page.value) {
        if (target.value > 0 && target.value <= props.number_of_pages) {
            current_page.value = parseInt(target.value);
            changeCurrent();

            // check for next and prev
            if (current_page.value == 1) {
                prev.value.classList.add("disable");
                prev_button.value.classList.add("disable");
                remove_disable("next");
            } else if (current_page.value == props.number_of_pages) {
                next.value.classList.add("disable");
                next_button.value.classList.add("disable");
                remove_disable("prev");
            } else {
                remove_disable("prev");
                remove_disable("next");
            }
        } else target.value = current_page.value;
    }
}
// setup
function setUpPaganition() {
    prev.value.classList.add("disable");
    prev_button.value.classList.add("disable");
}

onMounted(() => {
    if (props.number_of_pages > 1) setUpPaganition();
});
</script>

<template>
    <section class="pagination" v-if="number_of_pages > 1">
        <section class="container-fluid">
            <!-- controle -->
            <section class="controle">
                <section class="buttons"  style="display: none;">
                    <button class="prev" ref="prev_button" @click="prevButton" >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="23.997"
                            height="12.592"
                            viewBox="0 0 23.997 12.592"
                        >
                            <path
                                id="arrow-left"
                                d="M.88,14.09,4.75,18a1,1,0,0,0,1.42,0h0a1,1,0,0,0,0-1.42L2.61,13H23a1,1,0,0,0,1-1h0a1,1,0,0,0-1-1H2.55L6.17,7.38A1,1,0,0,0,6.17,6h0A1,1,0,0,0,4.75,6L.88,9.85a3,3,0,0,0,0,4.24Z"
                                transform="translate(-0.003 -5.704)"
                                fill="#fff"
                            />
                        </svg>
                        <span>{{ t("global.pagination.prev") }}</span>
                    </button>
                    <button class="next" ref="next_button" @click="nextButton">
                        <span>{{ t("global.pagination.next") }}</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="23.997"
                            height="12.592"
                            viewBox="0 0 23.997 12.592"
                        >
                            <path
                                id="arrow-left"
                                d="M.88,14.09,4.75,18a1,1,0,0,0,1.42,0h0a1,1,0,0,0,0-1.42L2.61,13H23a1,1,0,0,0,1-1h0a1,1,0,0,0-1-1H2.55L6.17,7.38A1,1,0,0,0,6.17,6h0A1,1,0,0,0,4.75,6L.88,9.85a3,3,0,0,0,0,4.24Z"
                                transform="translate(-0.003 -5.704)"
                                fill="#fff"
                            />
                        </svg>
                    </button>
                </section>
                <section class="simple-controle">
                    <!-- prev -->
                    <section class="prev box" ref="prev" @click="prevButton">
                        <button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="7.173"
                                height="14.001"
                                viewBox="0 0 7.173 14.001"
                            >
                                <path
                                    id="angle-small-right"
                                    d="M15.4,9.88,10.81,5.29A1,1,0,1,0,9.4,6.71L14,11.29a1,1,0,0,1,0,1.42L9.4,17.29a1,1,0,0,0,1.41,1.42l4.59-4.59A3,3,0,0,0,15.4,9.88Z"
                                    transform="translate(-9.104 -4.999)"
                                    fill="#101010"
                                />
                            </svg>
                        </button>
                    </section>
                    <!-- current -->
                    <section class="current box">
                        <input
                            type="text"
                            v-model="target"
                            @keyup.enter="travel"
                            disabled
                        />
                    </section>
                    <!-- next -->
                    <section class="next box" ref="next" @click="nextButton">
                        <button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="7.173"
                                height="14.001"
                                viewBox="0 0 7.173 14.001"
                            >
                                <path
                                    id="angle-small-right"
                                    d="M9.982,9.88l4.59-4.59a1,1,0,1,1,1.41,1.42l-4.6,4.58a1,1,0,0,0,0,1.42l4.6,4.58a1,1,0,0,1-1.41,1.42l-4.59-4.59A3,3,0,0,1,9.982,9.88Z"
                                    transform="translate(-9.104 -4.999)"
                                />
                            </svg>
                        </button>
                    </section>
                    <!-- all -->
                    <!-- <section class="all">
                        {{ t("global.pagination.from") }}
                        <span>{{ number_of_pages }}</span>
                    </section> -->
                </section>
            </section>
        </section>
    </section>
</template>

<style scoped lang="scss">
@import "@/assets/scss/_variables.scss";
.pagination {
    width: 100%;
    display: flex;
   
    .controle {
        width: 100%;
        display: flex;
        position: relative;
        @media screen and (max-width: map-get($grid, lg)) {
            flex-direction: column;
        }
        .buttons {
            display: flex;
            width: 100%;
            justify-content: center;
            @media screen and (max-width: map-get($grid, sm)) {
                flex-direction: column;
            }
            button {
                background: var(--first-color);
                color: var(--white-color);
                height: 42px;
                padding: 0 20px;
                border: 1px solid var(--first-color);
                border-radius: var(--main-border-radius);
                margin: 0 5px;
                cursor: pointer;
                @media screen and (max-width: map-get($grid, sm)) {
                    width: 100%;
                    margin: 5px 0;
                }
                &.prev {
                    color: var(--first-color);
                    background: none;
                    svg {
                        path {
                            fill: var(--first-color) !important;
                        }
                    }
                }
                &.disable {
                    opacity: 0;
                    display: none;
                }
                &.next {
                    svg {
                        margin: {
                            left: 10px;
                        }
                        transform: rotate(180deg);
                    }
                }
                &.prev {
                    svg {
                        margin: {
                            right: 10px;
                        }
                    }
                }
            }
        }
        .simple-controle {
            display: flex;
            position: absolute;
            top: 0;
            right: 0;
            @media screen and (max-width: map-get($grid, lg)) {
                position: relative;
                justify-content: center;
                margin: {
                    top: 30px;
                }
            }
            .box,
            .all {
                display: flex;
                button,
                input,
                span {
                    all: unset;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0 5px;
                    text-align: center;
                }
                span {
                    color: var(--first-text-color);
                }
            }
            .box {
                &.next,
                &.prev {
                    svg {
                        transform: rotate(180deg);
                    }
                    &.disable {
                        button {
                            cursor: not-allowed;
                            svg {
                                path {
                                    fill: var(--second-button-color) !important;
                                }
                            }
                        }
                    }
                }
            }
            .box {
                button,
                input,
                span {
                    border: 1px solid var(--second-button-border);
                    border-radius: var(--main-border-radius);
                }
                button {
                    cursor: pointer;
                }
            }
            .all {
                display: flex;
                justify-content: center;
                align-items: center;
                span {
                    width: auto;
                    height: auto;
                }
            }
        }
    }
}
.is-ar {
    .pagination .controle .simple-controle {
        right: unset;
        left: 0;
        .box.next svg,
        .box.prev svg {
            transform: rotate(0deg);
        }
    }
    .pagination .controle .buttons {
        button.next svg {
            margin: {
                left: 0;
                right: 10px;
            }
            transform: rotate(0);
        }
        button.prev svg {
            margin: {
                left: 10px;
                right: 0;
            }
            transform: rotate(180deg);
        }
    }
}
</style>