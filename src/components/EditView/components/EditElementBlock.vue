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
import { computed, toRef } from 'vue';

const { element } = defineProps<{
    element: CommonProperty;
}>();
const __$temp_1 = (useShortcutStore()),
  useClickDelete = toRef(__$temp_1, 'useClickDelete'),
  selectMapElement = toRef(__$temp_1, 'selectMapElement');;
const { removeItem } = useElementRenderStore();
const __$temp_2 = (useSelectStore()),
  setCurrentSelectedElement = toRef(__$temp_2, 'setCurrentSelectedElement'),
  mapActiveElement = toRef(__$temp_2, 'mapActiveElement');;


const active = computed(() => {
    return mapActiveElement.value === element.getRenderKey() && selectMapElement.value;
});

const dbHandleClick = () => {
    removeItem(element);
};

const handleClick = () => {
    if (useClickDelete.value) {
        dbHandleClick();
    }

    if (selectMapElement.value) {
        setCurrentSelectedElement.value(element, true);
    }
};

const __$temp_3 = (useElementStyle(element)),
  style = toRef(__$temp_3, 'style');; 
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