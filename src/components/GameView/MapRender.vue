<template>
    <DataPanel :element="hero" :isEdit="false">
        <div class="edit-map-box">
            <Map :map="map"></Map>
            <template v-for="item in renderList" :key="item.getRenderKey()">
                <Element :element="item"></Element>
            </template>
            <HeroElement :hero="(hero as any)"></HeroElement>
        </div>
    </DataPanel>
</template>

<script setup lang="ts">
import Map from "../Common/Map.vue";
import DataPanel from "../Common/DataPanel.vue"
import { Element, HeroElement } from "./components";
import type { CommonProperty } from "@/element/common/CommonProperty";
import type { MapTiles } from "@/constants";
import { useHeroStore } from "@/stores/common/hero";
defineProps<{
    map: MapTiles[][];
    renderList: CommonProperty[];
}>();
const { hero } = $(useHeroStore());
</script>

<style scoped>
.edit-map-box {
    position: relative;
    display: inline-block;
}
</style>
