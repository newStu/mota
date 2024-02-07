import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCommonStore = defineStore("common-store", () => {
  const step = ref<number>(32);

  const cssWidthHeight = computed(() => step.value + "px");

  return { step, cssWidthHeight };
});
