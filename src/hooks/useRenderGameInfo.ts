import { useElementRenderStore } from "@/stores/common/elementRender";
import { useHeroStore } from "@/stores/common/hero";
import { useMapStore } from "@/stores/common/map";

/**
 * 获取所有的渲染数据
 * @returns
 */
export function useRenderGameInfo() {
  const { col, row } = $(useMapStore());
  const { renderList, forwardMap } = $(useElementRenderStore());
  const { hero } = $(useHeroStore());

  function getGameLevelsInfo() {
    return {
      map: { col, row },
      renderList: renderList,
      hero: hero,
      forwardMap,
    };
  }

  return { getGameLevelsInfo };
}
