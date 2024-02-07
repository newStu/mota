<template>
    <div class="map-block-wrapper" @click="handleClick" @mousedown="handleMouseDown" @mousemove="handleMouseMove">
        <div class="map-icon" draggable="false"></div>
    </div>
</template>

<script setup lang="ts">
import { oneElementIds } from "@/constants";
import { useDrag } from "@/hooks/EditView/useDrag";
import { useCommonStore } from "@/stores/common/common";
import { useElementRenderStore } from "@/stores/common/elementRender";
import { useHeroStore } from "@/stores/common/hero";
import { useSelectStore } from "@/stores/editMap/elementSelect";
import { computed } from "vue";

const { x, y } = defineProps<{
    x: number;
    y: number;
}>();
let { getCurrentSelectedElement } = useSelectStore();
const { addItem, findItemsById, addForward, deleteForward } = useElementRenderStore();

const oneElements = computed(() => {
    return findItemsById(oneElementIds)
})

const { hero } = useHeroStore();
const handleClick = () => {
    const item = getCurrentSelectedElement()?.addToRender(x, y, { hero, oneElements: oneElements.value });
    if (item) {
        let ele = item;
        if (item.hasForward) {
            const { element, forwardPosition, deleteForwardPosition } = item;
            ele = element;
            deleteForward(deleteForwardPosition);
            addForward(forwardPosition);
        }
        ele && addItem(ele);
    }
};

const handleMouseMove = () => {
    if (isDragging()) handleClick();
};

const { isDragging, startDrag, stopDrag } = useDrag();

function handleMouseup() {
    stopDrag();
    window.removeEventListener("mouseup", handleMouseup);
}

function handleMouseDown() {
    startDrag();
    window.addEventListener("mouseup", handleMouseup);
}

const { cssWidthHeight } = $(useCommonStore());
</script>

<style scoped lang="scss">
.map-block-wrapper {
    .map-icon {
        width: v-bind(cssWidthHeight);
        height: v-bind(cssWidthHeight);
    }
}
</style>
