<template>
    <el-form class="select-wrapper" label-width="40px" label-position="top">
        <template v-for="{ text, list } in selectTilesList" :key="text">
            <el-form-item :label="text">
                <div v-for="{ Element, id } in list" @click="handleChangeSelect(Element, id)" :key="id"
                    :class="['element-icon', activeElement === id ? 'active' : '']">
                    <el-image shape="square" fit="fill" :src="TilesImage[id]" />
                </div>
            </el-form-item>
        </template>
    </el-form>
</template>

<script setup lang="ts">
import { toRef } from 'vue'

import { RoleTiles, TilesImage } from "@/constants";
import type { CommonProperty } from "@/element/common/CommonProperty";
import { useHeroStore } from "@/stores/common/hero";
import { useSelectStore } from "@/stores/editMap/elementSelect";
import type { IDType, SelectRenderType } from "@/typings/constants";

defineProps<{ selectTilesList: SelectRenderType }>();
const __$temp_1 = (useSelectStore()),
  activeElement = toRef(__$temp_1, 'activeElement'),
  setCurrentSelectedElement = toRef(__$temp_1, 'setCurrentSelectedElement');;
const __$temp_2 = (useHeroStore()),
  hero = toRef(__$temp_2, 'hero');;
function handleChangeSelect(Element: typeof CommonProperty, id: IDType) {
    if (id === RoleTiles.HERO) {
        setCurrentSelectedElement.value(hero.value);
    } else {
        setCurrentSelectedElement.value(new Element());
    }
}
</script>

<style lang="scss" scoped>
@use "./index.scss";

:deep(.el-form-item) {
    .el-form-item__label {
        font-weight: 800;
    }
}
</style>
