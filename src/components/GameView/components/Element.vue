<template>
    <div ref="elementRef" :class="`element-block-wrapper ${className}`" :style="style"></div>
</template>

<script setup lang="ts">
import type { CommonProperty } from "@/element/common/CommonProperty";
import { useGameElementStyle } from "@/hooks/useStyle";
import { onMounted, ref } from "vue";

const { element } = defineProps<{
    element: CommonProperty;
}>();
const {
    style,
    backgroundImage,
    backgroundPositionY,
    className
} = $(useGameElementStyle(element));
const elementRef = ref<null | HTMLDivElement>(null);
const { onceAnimation } = element;



onMounted(() => {
    if (onceAnimation && elementRef.value) {
        element.saveElement(elementRef.value);
    }
})

</script>

<style scoped lang="scss">
.element-block-wrapper {
    position: absolute;
    background-image: v-bind(backgroundImage);
    background-position-y: v-bind(backgroundPositionY);

    &.bgCover {
        background-size: cover;
    }
}
</style> 