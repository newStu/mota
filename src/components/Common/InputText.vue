<template>
  <div class="input-text-wrapper" @click="clickText">
    <template v-if="isEdit && canEdit && !disabled">
      <el-input ref="inputRef" v-bind="$attrs" :disabled="disabled" @blur="clickText" />
    </template>
    <template v-else>
      <el-text>{{ $attrs.modelValue || 0 }}</el-text>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick } from 'vue';

const { isEdit, disabled } = defineProps<{
  isEdit: boolean,
  disabled?: boolean
}>()

const inputRef = ref<HTMLInputElement | null>(null)

const canEdit = ref(false);
function clickText() {
  if (isEdit && !disabled) {
    canEdit.value = !canEdit.value;
    nextTick(() => {
      inputRef.value?.focus()
    })
  }
}
</script>

<style lang="scss" scoped>
.input-text-wrapper {
  width: 100%;

  :deep(.el-text) {
    width: 100%;
    color: #fff;
  }
}
</style>