<script setup lang="ts">
import { useI18n } from "vue-i18n";

interface Props {
    user: {
        image: string;
        name: string;
        username: string;
        location: string;
    };
}
// props
const props = defineProps<Props>();

// i18n
const { t } = useI18n();
</script>
<template>
    <section class="follower-box">
        <!-- image -->
        <section class="image">
            <img :src="user.image" />
        </section>
        <!-- info -->
        <section class="info">
            <h3>{{ user.name }}</h3>
            <span>@ {{ user.username }}</span>
            <section class="location">
                <InlineSvg src="/images/global/icons/global/marker.svg" />
                <span> {{ user.location }}</span>
            </section>
        </section>
    </section>
</template>
<style scoped lang="scss">
.follower-box {
    display: grid;
    grid-template-columns: 70px 1fr 42px;
    column-gap: 10px;
    background: var(--white-color);
    border-radius: var(--main-border-radius);
    padding: 20px;
    position: relative;
    h3 {
        margin: 0;
        font: {
            size: 18px;
        }
    }
    span {
        font: {
            size: 14px;
        }
    }
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
        row-gap: 10px;
        align-content: center;
        .location {
            display: flex;
            column-gap: 5px;
        }
    }
}
</style>
