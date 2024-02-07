<template>
    <div :class="`element-block-wrapper ${className}`" :style="heroStyle"></div>
</template>

<script setup lang="ts">
import type { Hero } from "@/element/role";
import { useGameElementStyle } from "@/hooks/useStyle";
import { useHeroStore, type KeywordCodeType } from "@/stores/common/hero";
import { onMounted, onUnmounted } from "vue";
const { hero } = defineProps<{ hero: Hero }>()
const {
    heroStyle,
    backgroundImage,
    backgroundPositionY,
    className
} = $(useGameElementStyle(hero));
const { operations } = useHeroStore();
const keywordEvent = (e: KeyboardEvent) => {
    const operationKey = e.code as KeywordCodeType;
    operations[operationKey]?.();
};



onMounted(() => {
    window.addEventListener("keyup", keywordEvent);
});

onUnmounted(() => {
    window.removeEventListener("keyup", keywordEvent);
});
</script>

<style scoped lang="scss">
.element-block-wrapper {
    position: absolute;
    background-image: v-bind(backgroundImage);
    background-position-y: v-bind(backgroundPositionY);
    // transition: transform linear 0.2s;
    // will-change: auto;

    &.active {
        box-shadow: 0px 0px 0px 2px rgb(186 136 7);
    }
}
</style> 