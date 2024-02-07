import { defineStore } from "pinia";
import { ref } from "vue";

export const useShortcutStore = defineStore("shortcut-store", () => {
  const useClickDelete = ref<boolean>(false);
  function clickDeleteChange(value: string | number | boolean) {
    if (value) {
      selectMapElement.value = false;
    }
  }

  const selectMapElement = ref<boolean>(false);
  function selectElementChange(value: string | number | boolean) {
    if (value) {
      useClickDelete.value = false;
    }
  }

  const auxiliaryLine = ref<boolean>(true);

  return {
    selectMapElement,
    selectElementChange,

    useClickDelete,
    clickDeleteChange,

    auxiliaryLine,
  };
});
