<template>
    <div :class="['element-block-wrapper', active ? 'active' : '']" @dblclick="dbHandleClick" @click="handleClick" :style="style">
        <img draggable="false" :src="TilesImage[element.id]" class="icon" />
    </div>
</template>

<script setup lang="ts">
import { TilesImage } from "@/constants";
import type { CommonProperty } from "@/element/common/CommonProperty";
import { useElementStyle } from "@/hooks/useStyle";
import { useElementRenderStore } from "@/stores/common/elementRender";
import { useSelectStore } from "@/stores/editMap/elementSelect";
import { useShortcutStore } from "@/stores/editMap/shortcut";
import { computed } from "vue";

const { element } = defineProps<{
    element: CommonProperty;
}>();
const { useClickDelete, selectMapElement } = $(useShortcutStore());
const { removeItem } = useElementRenderStore();
const { setCurrentSelectedElement, mapActiveElement } = $(useSelectStore());


const active = computed(() => {
    return mapActiveElement === element.getRenderKey() && selectMapElement;
});

const dbHandleClick = () => {
    removeItem(element);
};

const handleClick = () => {
    if (useClickDelete) {
        dbHandleClick();
    }

    if (selectMapElement) {
        setCurrentSelectedElement(element, true);
    }
};

const { style } = $(useElementStyle(element)); 
</script>

<style scoped lang="scss">
.element-block-wrapper {
    position: absolute;

    &.active {
        box-shadow: 0px 0px 0px 2px rgb(186 136 7);
        z-index: 1;
    }

    .icon {
        width: 100%
    }

}
</style> 