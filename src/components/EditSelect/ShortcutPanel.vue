<template>
    <el-form label-width="120px" label-position="left" inline>
        <el-form-item label="开启辅助定位线">
            <el-switch v-model="auxiliaryLine" />
        </el-form-item>
        <el-form-item label="单击删除元素">
            <el-switch v-model="useClickDelete" @change="clickDeleteChange" />
        </el-form-item>
        <el-form-item label="选择地图元素">
            <el-switch v-model="selectMapElement" @change="selectElementChange" />
        </el-form-item>

        <!-- todo: 选择一个地图元素,然后再点击其他位置,让两个元素之间的位置互换 -->
        <el-form-item label="地图元素互换">
            <el-switch />
        </el-form-item>
        <!-- todo: 这个是可以使用鼠标移动事件移除元素 -->
        <el-form-item label="开启批量移除">
            <el-switch />
        </el-form-item>
        <!-- todo: 这个是先选择需要批量移除的单位,然后点击该按钮就会批量移除元素 -->
        <el-form-item label="批量移除">
            <el-switch />
        </el-form-item>
    </el-form>
</template>

<script setup lang="ts">
import { useShortcutStore } from "@/stores/editMap/shortcut";

const {
    selectMapElement,
    selectElementChange,

    useClickDelete,
    clickDeleteChange,

    auxiliaryLine,

} = $(useShortcutStore());
</script>

<style scoped></style>
