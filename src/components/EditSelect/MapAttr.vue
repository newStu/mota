<template>
    <el-form class="select-wrapper" label-width="40px" label-position="top">
        <el-form-item label="Row">
            <el-input v-model.number="row" />
        </el-form-item>
        <el-form-item label="Col">
            <el-input v-model.number="col" />
        </el-form-item>
    </el-form>
</template>

<script setup lang="ts">
import { watchEffect } from "vue";
import { useMapStore } from "@/stores/common/map";
const { row, col, updateMapCol, updateMapRow } = $(useMapStore());


watchEffect(() => {
    if (col > 0) {
        updateMapCol();
    }
});

watchEffect(() => {
    if (row > 0) {
        updateMapRow();
    }
});
</script>

<style lang="scss" scoped>
:deep(.el-form-item) {
    .el-form-item__label {
        font-weight: 800;
    }
}
</style>
