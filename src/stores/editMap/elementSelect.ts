import type { CommonProperty } from "@/element/common/CommonProperty";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useSelectStore = defineStore("element-select", () => {
  let currentSelectedElement = ref<CommonProperty>();
  let isMapElement = ref<boolean>(false);

  function getCurrentSelectedElement() {
    return currentSelectedElement.value;
  }

  function setCurrentSelectedElement(
    selectedElement: CommonProperty,
    _isMapElement: boolean = false
  ) {
    currentSelectedElement.value = selectedElement;
    isMapElement.value = _isMapElement;
  }

  const activeElement = computed(() => {
    const item = getCurrentSelectedElement();
    return item?.id;
  });

  const mapActiveElement = computed(() => {
    const item = getCurrentSelectedElement();
    return item?.getRenderKey();
  });

  return {
    getCurrentSelectedElement,
    setCurrentSelectedElement,
    activeElement,
    mapActiveElement,
    isMapElement,
  };
});
