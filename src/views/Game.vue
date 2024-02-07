<template>
    <div class="game-wrapper">
        <el-row>
            <el-col :span="23" class="game-box">
                <MapRender :map="map" :renderList="renderList"></MapRender>
            </el-col>
            <el-col :span="1">
                <SizeSlider></SizeSlider>
            </el-col>
        </el-row>

        <Talk></Talk>
    </div>
</template>

<script setup lang="ts">
import { toRef } from 'vue'

import { useMapStore } from "@/stores/common/map";
import { useElementRenderStore } from "@/stores/common/elementRender";
import MapRender from "@/components/GameView/MapRender.vue";
import { useInit } from "@/hooks/useInit";
import SizeSlider from "@/components/Common/SizeSlider.vue";
import Talk from "@/components/GameView/Talk.vue"

const __$temp_1 = (useMapStore()),
  map = toRef(__$temp_1, 'map');;
const __$temp_2 = (useElementRenderStore()),
  renderList = toRef(__$temp_2, 'renderList');;

useInit(0);
</script>

<style lang="scss" scoped>
.game-wrapper {
    .game-box {
        margin-top: 150px;
        text-align: center;
    }
}
</style>
