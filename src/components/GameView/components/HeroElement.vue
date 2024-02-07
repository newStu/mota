<template>
    <div :class="`element-block-wrapper ${className}`" :style="heroStyle"></div>
</template>

<script setup lang="ts">
import type { Hero } from "@/element/role";
import { useGameElementStyle } from "@/hooks/useStyle";
import { useHeroStore, type KeywordCodeType } from "@/stores/common/hero";
import { onMounted, onUnmounted, toRef } from 'vue';
const { hero } = defineProps<{ hero: Hero }>()
const __$temp_1 = (useGameElementStyle(hero)),
  heroStyle = toRef(__$temp_1, 'heroStyle'),
  backgroundImage = toRef(__$temp_1, 'backgroundImage'),
  backgroundPositionY = toRef(__$temp_1, 'backgroundPositionY'),
  className = toRef(__$temp_1, 'className');;
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