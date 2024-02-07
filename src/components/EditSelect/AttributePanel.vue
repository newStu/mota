<template>
  <el-form :model="formModal" label-width="60px" label-position="left">
    <template v-for="{ label, key } in renderPanel" :key="key">
      <el-form-item :label="label">
        <template v-if="['Name'].includes(key)">
          <el-input v-model="formModal[key]" />
        </template>
        <template v-else>
          <el-input :disabled="!['x', 'y'].includes(key)" v-model.number="formModal[key]" />
        </template>

      </el-form-item>
    </template>
  </el-form>
</template>

<script lang="ts" setup>
import { attributeText } from "@/constants";
import { useSelectStore } from "@/stores/editMap/elementSelect";
import { computed, reactive, watchEffect } from "vue";

const { isMapElement, getCurrentSelectedElement } = useSelectStore();
const renderPanel = reactive<{ label: string; key: string }[]>([]);
const formModal = computed((): { [key: string]: any } => {
  const element = getCurrentSelectedElement() || {};
  return element;
});

watchEffect(() => {
  const filterKey = ["id"];
  if (!isMapElement) {
    filterKey.push("x", "y");
  }
  const element = formModal.value;
  const keys = Object.keys(element);
  const list: { label: string; key: string }[] = [];
  keys
    .filter((key) => {
      if (filterKey.includes(key)) return false;
      if (key.startsWith("_")) return false;
      return true;
    })
    .forEach((key: string) =>
      list.push({ label: attributeText[key] || key, key: key })
    );

  renderPanel.splice(0, renderPanel.length, ...list);
});
</script>

<style lang="scss" scoped></style>
