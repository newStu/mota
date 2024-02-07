import type { CommonProperty } from "@/element/common/CommonProperty";
import { useElementRenderStore } from "@/stores/common/elementRender";
import { useGameStore } from "@/stores/common/game";
import { useHeroStore } from "@/stores/common/hero";
import { useMapStore } from "@/stores/common/map";
import type { GameLevelType } from "@/typings/constants";
import { onMounted, watch, toRef } from 'vue';

/**
 * 初始化操作
 * @param level: 初始化关卡
 */
export function useInit(level: number = 0) {
  const { initMap } = useMapStore();
  const { initOtherRenderList, initForwardMap } = useElementRenderStore();
  const { setHeroPosition, initHero } = useHeroStore();
  const __$temp_1 = (
    useGameStore()
  ),
  setGameLevels = toRef(__$temp_1, 'setGameLevels'),
  initHeroInfo = toRef(__$temp_1, 'initHeroInfo'),
  levelList = toRef(__$temp_1, 'levelList'),
  gameLevels = toRef(__$temp_1, 'gameLevels');;

  function initLevel(levelInfo: GameLevelType) {
    const { map, renderList, hero, forwardMap } = levelInfo || {
      map: { col: 11, row: 11 },
      renderList: [],
      hero: { x: 0, y: 0 },
      forwardMap: {},
    };

    initMap(map.row, map.col);
    initOtherRenderList(renderList as Array<CommonProperty>);
    initForwardMap(forwardMap);
    setHeroPosition(hero as any);
  }

  watch(
    () => gameLevels.value,
    () => {
      initLevel(levelList.value[gameLevels.value]);
    }
  );

  onMounted(() => {
    // 初始化操作
    if (initHeroInfo.value) initHero(initHeroInfo.value);
    setGameLevels.value(level);
    initLevel(levelList.value[level]);
  });
}
