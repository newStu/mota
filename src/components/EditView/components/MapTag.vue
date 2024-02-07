<template>
    <template v-for="(_item, index) in  data " :key="index">
        <span :class="['item', (value === index && isInside) ? 'active' : '']">{{ index }} </span>
    </template>
</template>

<script setup lang="ts">

const { value, isInside } = defineProps<{
    data: Array<any> | undefined,
    value: number,
    isInside: boolean;
}>()

</script>

<style lang="scss" scoped>
.item {
    flex: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: #3f3c3c;
    font-size: 18px;
    font-weight: 800;

    &.active {
        background-color: #c11d1d !important;
    }
}
</style>