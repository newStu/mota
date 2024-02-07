import { it, expect, describe, beforeAll, beforeEach } from "vitest";
import { initBeforeEachPinia, useSetup } from "@/test/helper";
import { levelList, hero } from "@/test/data";
import { useInit } from "@/hooks/useInit";
import { useMapStore } from "@/stores/common/map";
import { useElementRenderStore } from "@/stores/common/elementRender";
import { useHeroStore } from "@/stores/common/hero";
import { useGameStore } from "@/stores/common/game";

function commonCheck(index: number) {
  const { map, renderList: _renderList, hero: _hero } = levelList[index];
  // 验证地图数据
  const { col, row } = useMapStore();
  expect(col).toBe(map.col);
  expect(row).toBe(map.row);

  // 验证渲染元素
  const { renderList } = useElementRenderStore();
  expect(renderList.length).toBe(_renderList.length);

  // 验证hero位置
  const { hero } = useHeroStore();
  expect(hero.x).toBe(_hero.x);
  expect(hero.y).toBe(_hero.y);
}

// 直接读取ref的值,测试通不过
describe("游戏信息", () => {
  initBeforeEachPinia();

  beforeAll(() => {
    localStorage.setItem(
      "local",
      JSON.stringify({
        hero: hero,
        levelList: levelList,
      })
    );
  });

  beforeEach(() => {
    useSetup(() => {
      useInit(1);
    });
  });

  it("初始化关卡", async () => {
    const { getGameLevels } = useGameStore();

    commonCheck(1);
    expect(getGameLevels()).toBe(1);
  });
});
