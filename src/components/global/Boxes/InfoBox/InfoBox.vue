<script setup lang="ts">
interface Props {
    data: {
        icon: string;
        title: string;
    };
}
const { data } = defineProps<Props>();
</script>

<template>
    <section class="info-box">
        <!-- header -->
        <header>
            <!-- icon -->
            <section class="icon">
                <InlineSvg :src="data.icon" />
            </section>
        </header>
        <!-- target -->
        <section class="target">
            <router-link to="">{{data.title}}</router-link>
        </section>
    </section>
</template>
<style lang="scss" scoped>
@import "../../../../assets/scss/_variables.scss";

.info-box {
    display: flex;
    flex-direction: column;
    @media screen and (max-width: map-get($grid, xl)){
        margin: {
            bottom: 20px;
        };
    }
    header {
        height: 200px;
        background: var(--white-color);
        display: flex;
        justify-content: center;
        align-items: center;
        .icon {
            svg {
                width: 120px;
            }
        }
    }
    .target {
        display: flex;
        a {
            width: 100%;
            background: var(--first-color);
            color: var(--white-color);
            text-decoration: none;
            padding: 8px 0;
            border-bottom-left-radius: var(--main-border-radius);
            border-bottom-right-radius: var(--main-border-radius);
            text-align: center;
        }
    }
}
</style>
