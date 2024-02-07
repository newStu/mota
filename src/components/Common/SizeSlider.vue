<template>
    <div class="slider-box">
        <el-slider class="slider-info" :format-tooltip="formatToolTip" vertical size="small" :min="32" :max="46"
            v-model="step" />
    </div>
</template>

<script setup lang="ts">
import { useCommonStore } from '@/stores/common/common';


const { step } = $(useCommonStore());

function formatToolTip(value: number) {
    return `地图元素尺寸: ${value}px`
}
</script>

<style lang="scss" scoped>
.slider-box {
    position: relative;
    height: 100%;

    .slider-info {
        position: absolute;
        top: 100px;
        left: 0;
        right: 0;
        width: 38px;
        height: 600px;
    }
}
</style>