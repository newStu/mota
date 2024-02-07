import { HeroNumerical } from "@/constants";
import type { Hero } from "@/element/role";
import type { GameLevelType, TotalGameLevelType } from "@/typings/constants";

/**
 * 获取缓存数据，和设置缓存数据
 * @param key
 * @returns
 */
export function useLocalStorageSaveGame(key = "local") {
  function getTotalGameInfo() {
    const info: any = localStorage.getItem(key);
    let value: TotalGameLevelType = {
      hero: HeroNumerical,
      levelList: {},
    };
    if (info) value = JSON.parse(info);

    return value;
  }

  function saveTotalGameInfo(level: number, hero: Hero, value: GameLevelType) {
    const totalGameInfo = getTotalGameInfo();
    const levelList = totalGameInfo?.levelList || {};
    levelList[level] = value;
    const storageInfo: TotalGameLevelType = {
      hero,
      levelList: levelList,
    };
    localStorage.setItem(key, JSON.stringify(storageInfo));
  }

  return { getTotalGameInfo, saveTotalGameInfo };
}
