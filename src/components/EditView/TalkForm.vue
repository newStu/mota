<template>
    <el-form :model="form" label-width="120px">
        <el-form-item label="前期对话">

        </el-form-item>
        <el-form-item label="中期对话">

        </el-form-item>
        <el-form-item label="后期对话">

        </el-form-item>
    </el-form>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const form = reactive({
    begin: [],
    process: [],
    end: []
})
</script>

<style lang="scss" scoped></style>