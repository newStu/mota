<template>
    <div class="map-block-wrapper">
        <img class="map-icon" draggable="false" :src="TilesImage[MapTiles.ROAD]" />
    </div>
</template>

<script setup lang="ts">
import { MapTiles, TilesImage } from "@/constants";
import { useCommonStore } from "@/stores/common/common";

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
