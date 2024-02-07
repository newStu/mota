<template>
    <template v-if="auxiliaryLine && isInside">
        <div v-show="colLine.flag" class="line col" :style="{ transform: colLine.top }"></div>
        <div v-show="colLine.flag" class="line col" :style="{ transform: colLine.bottom }"></div>
        <div v-show="rowLine.flag" class="line row" :style="{ transform: rowLine.left }"></div>
        <div v-show="rowLine.flag" class="line row" :style="{ transform: rowLine.right }"></div>
    </template>
</template>

<script setup lang="ts">
import { useShortcutStore } from '@/stores/editMap/shortcut';
import { computed, toRef } from 'vue';
const __$temp_1 = (useShortcutStore()),
  auxiliaryLine = toRef(__$temp_1, 'auxiliaryLine');;
const { x, y, step, isInside, rowMax } = defineProps<{ x: number, y: number, isInside: boolean, step: number, rowMax?: number }>()

const rowLine = computed(() => {
    const topX = x + 1;
    return {
        flag: rowMax && x < rowMax,
        left: `translateX(${x * step}px)`,
        right: `translateX(${topX * step}px)`
    }
})

const colLine = computed(() => {
    const topY = y + 1;
    return {
        flag: y > -1,
        top: `translateY(${y * step}px)`,
        bottom: `translateY(${topY * step}px)`
    }
})


</script>

<style lang="scss" scoped>
.line {
    position: absolute;
    background-color: #c11d1d;
    z-index: 2;
    transition: transform 0.1s;

    &.col {
        width: 100%;
        height: 1px;
        left: 0;
        top: 0;

    }

    &.row {
        width: 1px;
        height: 100%;
        top: 0;
        left: 0;
    }
}
</style>