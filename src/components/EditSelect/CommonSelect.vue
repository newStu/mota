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
import { RoleTiles, TilesImage } from "@/constants";
import type { CommonProperty } from "@/element/common/CommonProperty";
import { useHeroStore } from "@/stores/common/hero";
import { useSelectStore } from "@/stores/editMap/elementSelect";
import type { IDType, SelectRenderType } from "@/typings/constants";

defineProps<{ selectTilesList: SelectRenderType }>();
const { activeElement, setCurrentSelectedElement } = $(useSelectStore());
const { hero } = $(useHeroStore());
function handleChangeSelect(Element: typeof CommonProperty, id: IDType) {
    if (id === RoleTiles.HERO) {
        setCurrentSelectedElement(hero);
    } else {
        setCurrentSelectedElement(new Element());
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
