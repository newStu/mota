import { useLocalStorageSaveGame } from "@/hooks/useLocalStorageSaveGame";
import { useRenderGameInfo } from "@/hooks/useRenderGameInfo";
import type { LevelListType } from "@/typings/constants";
import { cloneDeepWith } from "lodash";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";

/**
 * 这里的保存功能需要优化处理一下
 */

export const useGameStore = defineStore("game-store", () => {
  const { getTotalGameInfo } = useLocalStorageSaveGame();
  const totalSaveGameInfo = getTotalGameInfo();

  let levelList = reactive<LevelListType>(totalSaveGameInfo.levelList);

  // 层数设置
  const gameLevels = ref<number>(0);
  const { getGameLevelsInfo } = useRenderGameInfo();

  // 设置本地关卡数据
  function updateGameLevelList() {
    const { hero, renderList, map } = getGameLevelsInfo();
    Object.assign(levelList, {
      [gameLevels.value]: cloneDeepWith({
        hero: { x: hero.x, y: hero.y },
        renderList,
        map,
      }),
    });
  }

  function nextGameLevels(saveLevelInfo?: () => void, isEdit: boolean = false) {
    saveLevelInfo?.();
    updateGameLevelList();
    let newLevel = gameLevels.value + 1;
    const levelInfo = levelList[newLevel];
    // 不是编辑状态，并且没有数据就不要下一关了
    if (!isEdit && !levelInfo) return;
    gameLevels.value = newLevel;
  }

  function prevGameLevels(saveLevelInfo?: () => void, isEdit: boolean = false) {
    saveLevelInfo?.();
    updateGameLevelList();
    if (gameLevels.value > 0) {
      let newLevel = gameLevels.value - 1;
      gameLevels.value = newLevel;
    }
  }

  function getGameLevels() {
    return gameLevels.value;
  }

  function setGameLevels(value: number) {
    if (value < 0) return;
    gameLevels.value = value;
    const levelInfo = levelList[value];
    return levelInfo;
  }

  return {
    setGameLevels,
    prevGameLevels,
    nextGameLevels,
    getGameLevels,
    gameLevels,
    initHeroInfo: totalSaveGameInfo.hero,
    levelList,
  };
});
