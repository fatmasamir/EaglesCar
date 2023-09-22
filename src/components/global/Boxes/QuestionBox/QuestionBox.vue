<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

interface Question {
    question: string;
    answer: string;
    status?: boolean;
}
const props = defineProps<Question>()

// vars
const status = ref<boolean>(false);
const question_box = ref<HTMLElement>();
const question_header = ref<HTMLElement>();
const header_height = ref<string>();
const real_height = ref<string>();

// change status
function changeStatus(): void {
    if (status.value) {
        question_box.value!.style.height = header_height.value!;
        status.value = false;
    } else {
        question_box.value!.style.height = real_height.value!;
        status.value = true;
    }
}

onMounted(() => {
    // init box height
    real_height.value = getComputedStyle(question_box.value!).height;
    header_height.value = getComputedStyle(question_header.value!).height;
    question_box.value!.style.height = header_height.value;
});
</script>

<template>
    <section class="question-box" ref="question_box" @click="changeStatus">
        <header ref="question_header">
            <section class="question" :class="{ open: status }">
                <p>{{question}}</p>
            </section>
            <section class="icon"></section>
        </header>
        <section class="result">
            <p>
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
                سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع
                الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم
                إيبسوم لأنها تعطي توزيعاَ طبيعياَ
            </p>
        </section>
    </section>
</template>

<style lang="scss" scoped>
@import "../../../../assets/scss/_functions.scss";

.question-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 20px 20px 20px;
    @include mainBoxShadow();
    overflow: hidden;
    cursor: pointer;
    transition: var(--main-transition);
    p {
        text-align: start;
        margin: 0;
    }
    header {
        width: 100%;
        padding: 20px 0;
        .question {
            &.open {
                p {
                    color: var(--third-color);
                }
            }
        }
    }
    .result {
        padding: {
            bottom: 20px;
        }
    }
}
</style>
