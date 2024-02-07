
import { toRef } from 'vue'
import { useElementRenderStore } from "@/stores/common/elementRender";
import { useHeroStore } from "@/stores/common/hero";
import { useMapStore } from "@/stores/common/map";

/**
 * 获取所有的渲染数据
 * @returns
 */
export function useRenderGameInfo() {
  const __$temp_1 = (useMapStore()),
  col = toRef(__$temp_1, 'col'),
  row = toRef(__$temp_1, 'row');;
  const __$temp_2 = (useElementRenderStore()),
  renderList = toRef(__$temp_2, 'renderList'),
  forwardMap = toRef(__$temp_2, 'forwardMap');;
  const __$temp_3 = (useHeroStore()),
  hero = toRef(__$temp_3, 'hero');;

  function getGameLevelsInfo() {
    return {
      map: { col: col.value, row: row.value },
      renderList: renderList.value,
      hero: hero.value,
      forwardMap: forwardMap.value,
    };
  }

  return { getGameLevelsInfo };
}
