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
import { watchEffect, toRef } from 'vue';
import { useMapStore } from "@/stores/common/map";
const __$temp_1 = (useMapStore()),
  row = toRef(__$temp_1, 'row'),
  col = toRef(__$temp_1, 'col'),
  updateMapCol = toRef(__$temp_1, 'updateMapCol'),
  updateMapRow = toRef(__$temp_1, 'updateMapRow');;


watchEffect(() => {
    if (col.value > 0) {
        updateMapCol.value();
    }
});

watchEffect(() => {
    if (row.value > 0) {
        updateMapRow.value();
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
