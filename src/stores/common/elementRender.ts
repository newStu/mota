import type { CommonProperty } from "@/element/common/CommonProperty";
import { elements } from "@/render";
import type {
  ForwardPositionType,
  IDType,
  PositionType,
} from "@/typings/constants";
import { getForwardPositionKey } from "@/utils/position";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useElementRenderStore = defineStore("element-render", () => {
  const renderList = reactive<CommonProperty[]>([]);
  function clearRenderList() {
    renderList.splice(0, renderList.length);
  }
  function addItem(item: CommonProperty) {
    renderList.push(item);
  }
  function findItem(info: CommonProperty) {
    return renderList.find(
      (item) => item.getRenderKey() === info.getRenderKey()
    );
  }
  function findItemByXy(info: PositionType) {
    return renderList.find((item) => item.x === info.x && item.y === info.y);
  }
  function findItemsById(ids: Array<IDType>): Array<CommonProperty>;
  function findItemsById(id: IDType): Array<CommonProperty>;
  function findItemsById(ids: IDType | Array<IDType>): Array<CommonProperty> {
    let filterFunc = (item: CommonProperty) => item.id === ids;
    if (Array.isArray(ids)) {
      filterFunc = (item) => ids.includes(item.id);
    }
    return renderList.filter(filterFunc);
  }
  function findItemIndex(info: CommonProperty) {
    return renderList.findIndex(
      (item) => item.getRenderKey() === info.getRenderKey()
    );
  }
  function removeItemByIndex(index: number) {
    if (index > -1) {
      renderList.splice(index, 1);
    }
  }
  function removeItem(item: CommonProperty) {
    const index = findItemIndex(item);
    removeItemByIndex(index);
  }
  function removeItemById(id: IDType) {
    const filters = renderList.filter((item) => item.id !== id);
    renderList.splice(0, renderList.length, ...filters);
  }
  function initOtherRenderList(renderList: Array<CommonProperty>) {
    clearRenderList();
    renderList.map(({ x, y, id, ...property }) => {
      const Element = elements[id];
      if (Element) {
        addItem(new Element(property, { x, y }));
      }
    });
  }

  const forwardMap = ref<ForwardPositionType>({});
  function addForward(forward: ForwardPositionType) {
    for (const key in forward) {
      const element = forward[key];
      forwardMap.value[key] = element;
    }
  }
  function deleteForward(forward: ForwardPositionType) {
    for (const key in forward) {
      const element = forward[key];
      const ele = forwardMap.value[key];
      if (element.x === ele?.x && element.y === ele?.y) {
        delete forwardMap.value[key];
      }
    }
  }
  function getForwardPosition(pos: PositionType) {
    const key = getForwardPositionKey(pos);
    const forwardPosition = forwardMap.value[key];
    return forwardPosition || pos;
  }

  function initForwardMap(forward?: ForwardPositionType) {
    forwardMap.value = forward || {};
  }

  return {
    renderList,
    addItem,
    removeItem,
    removeItemById,
    initOtherRenderList,
    clearRenderList,
    findItem,
    findItemByXy,
    findItemsById,
    forwardMap,
    addForward,
    deleteForward,
    initForwardMap,
    getForwardPosition,
  };
});
