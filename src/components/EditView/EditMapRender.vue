<template>
    <div class="edit-map-render-wrapper">
        <DataPanel :element="element" :isEdit="true">
            <div class="edit-map-box">
                <UseMouse v-slot="{ x: px, y: py, isInside }" :dealwith="dealwith">
                    <Map :map="map">
                        <template #item="{ x, y }">
                            <EditRoad :x="x" :y="y"></EditRoad>
                        </template>
                    </Map>
                    <template v-for="item in renderList" :key="item.getRenderKey()">
                        <EditElementBlock :element="item"></EditElementBlock>
                    </template>
                    <EditElementBlock :element="hero"></EditElementBlock>
                    <div class="top-row">
                        <MapTag :isInside="isInside" :data="map" :value="px"></MapTag>
                    </div>
                    <div class="right-col">
                        <MapTag :isInside="isInside" :data="map[0]" :value="py"></MapTag>
                    </div>
                    <MapLine :step="step" :x="px" :y="py" :rowMax="map[0]?.length" :isInside="isInside"></MapLine>
                </UseMouse>
            </div>
        </DataPanel>
    </div>
</template>

<script setup lang="ts">
import Map from "../Common/Map.vue";
import DataPanel from "../Common/DataPanel.vue";
import { computed, toRef } from 'vue';
import { useSelectStore } from "@/stores/editMap/elementSelect";
import { EditElementBlock, EditRoad, UseMouse, MapTag, MapLine } from "./components";
import type { CommonProperty } from "@/element/common/CommonProperty";
import type { MapTiles } from "@/constants";
import { useCommonStore } from "@/stores/common/common";

defineProps<{
    map: MapTiles[][];
    renderList: CommonProperty[];
    hero: CommonProperty;
}>();

const { getCurrentSelectedElement } = useSelectStore();

const element = computed((): any => {
    return getCurrentSelectedElement() || {};
});
const __$temp_1 = (useCommonStore()),
  step = toRef(__$temp_1, 'step');;

function dealwith(value: number) {
    return Math.ceil(value / step.value) - 1;
}


</script>

<style lang="scss" scoped>
.edit-map-render-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    .edit-map-box {
        position: relative;
        display: inline-block;
        margin-top: 30px;
        margin-right: 30px;
        user-select: none;

        .top-row,
        .right-col {
            position: absolute;
            z-index: 1;
            display: flex;
        }

        .top-row {
            top: -30px;
            left: 0px;
            width: 100%;
            height: 30px;
            line-height: 30px;
        }

        .right-col {
            top: 0;
            right: -30px;
            width: 30px;
            text-align: center;
            height: 100%;
            flex-direction: column;
        }
    }
}
</style>
./components