<template>
    <div class="use-mouse-box" ref="parentEl" @mouseleave="mouseleaveAndEnter(false)"
        @mouseenter="mouseleaveAndEnter(true)">
        <slot :x="x" :y="y" :isInside="isInside"></slot>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { type UseMouseEventExtractor, useMouse } from '@vueuse/core'

const { dealwith } = withDefaults(defineProps<{ dealwith?: (value: number) => number }>(), {
    dealwith: (value: number) => value
})


const extractor: UseMouseEventExtractor = (event: MouseEvent | Touch) => {
    if (typeof Touch !== 'undefined' && event instanceof Touch)
        return null
    else {
        const { x, y } = parentEl.value?.getBoundingClientRect() || { x: 0, y: 0 };
        const { pageX, pageY } = event as MouseEvent || { offsetX: 0, offsetY: 0 };

        return [dealwith(pageX - x), dealwith(pageY - y)]
    }
}

const parentEl = ref<HTMLDivElement | null>(null)
const { x, y } = useMouse({ type: extractor, target: parentEl })
const isInside = ref(false);

function mouseleaveAndEnter(value: boolean) {
    isInside.value = value;
}

</script>
 
<style scoped lang="scss">
.use-mouse-box {
    display: inline-block;
}
</style>