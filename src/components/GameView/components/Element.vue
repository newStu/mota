<template>
    <div ref="elementRef" :class="`element-block-wrapper ${className}`" :style="style"></div>
</template>

<script setup lang="ts">
import type { CommonProperty } from "@/element/common/CommonProperty";
import { useGameElementStyle } from "@/hooks/useStyle";
import { onMounted, ref, toRef } from 'vue';

const { element } = defineProps<{
    element: CommonProperty;
}>();
const __$temp_1 = (useGameElementStyle(element)),
  style = toRef(__$temp_1, 'style'),
  backgroundImage = toRef(__$temp_1, 'backgroundImage'),
  backgroundPositionY = toRef(__$temp_1, 'backgroundPositionY'),
  className = toRef(__$temp_1, 'className');;
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