import { computed, reactive, watchEffect } from "vue";
import { useMapStore } from "@/stores/common/map";
import { attributeText, type KeyChain, RoleTiles } from "@/constants";
import type { Role } from "@/element/role/role";
import { useCommonStore } from "@/stores/common/common";
import { has } from "lodash";
import type { Hero } from "@/element/role";
import { useSelectStore } from "@/stores/editMap/elementSelect";

const marginHeight = 10;

export function useDataPanelHeight() {
  const { step } = $(useCommonStore());
  const { col } = useMapStore();

  const abilityHeight = computed(() => {
    return step * 2 + "px";
  });

  const marginPx = computed(() => {
    if (step < 38) return "6px";
    if (step < 46) return "10px";
    return "18px";
  });

  const paddingPx = computed(() => {
    if (step < 38) return "4px";
    if (step < 46) return "10px";
    return "20px";
  });

  // 属性面板 占 3/4
  const attributeHeight = computed(() => {
    return (col / 24) * 17 * step + "px";
  });
  // 道具面板 占 1/4
  const propHeight = computed(() => {
    return (col / 24) * 7 * step - marginHeight + 6 + "px";
  });

  // 编辑框 占 1/1
  const editBoxHeight = computed(() => {
    return col * step - marginHeight + 6 + "px";
  });

  return {
    abilityHeight,
    marginHeightPx: marginHeight + "px",
    attributeHeight,
    propHeight,
    editBoxHeight,
    marginPx,
    paddingPx,
    step,
  };
}

export function useDataPanelValue(props: { element: Role | undefined }) {
  const formModal = computed((): { [key: string]: any } => {
    return props.element || {};
  });
  const keyModal = computed((): KeyChain | undefined => {
    let hero = props.element as Hero;
    if (hero?.id !== RoleTiles.HERO) return undefined;
    return hero._key;
  });

  const renderPanel = reactive<{ label: string; key: keyof Role }[]>([]);
  const { isMapElement } = $(useSelectStore());

  watchEffect(() => {
    let keys = Object.keys(attributeText);
    if (!isMapElement) {
      keys = keys.filter((item) => !["x", "y"].includes(item));
    }
    const list: { label: string; key: string }[] = [];
    const value = formModal.value;
    keys.forEach((key: string) => {
      if (has(value, key)) {
        list.push({ label: attributeText[key] || key, key: key });
      }
    });
    renderPanel.splice(0, renderPanel.length, ...(list as any));
  });

  return {
    renderPanel,
    formModal,
    keyModal,
  };
}
