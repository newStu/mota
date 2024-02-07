<template>
    <div class="map-wrapper">
        <div class="map-row" v-for="(row, y) in map" :key="y">
            <div class="map-item" v-for="(col, x) in row" :key="x + '' + y">
                <slot name="item" v-bind="{ x, y }"></slot>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { toRef } from 'vue'

import { MapTiles } from "@/constants";
import { useCommonStore } from "@/stores/common/common";

const __$temp_1 = (useCommonStore()),
  cssWidthHeight = toRef(__$temp_1, 'cssWidthHeight');;

defineProps<{ map: MapTiles[][] }>();
</script>

<style lang="scss" scoped>
.map-wrapper {
    display: inline-flex;
    flex-direction: column;
    background-image: url("@/assets/base/icon/map/road.png");

    .map-row {
        display: inline-flex;

        .map-item {
            width: v-bind(cssWidthHeight);
            height: v-bind(cssWidthHeight);
            text-align: center;
        }
    }
}
</style>
