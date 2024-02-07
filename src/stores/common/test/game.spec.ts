import { it, expect, describe, beforeAll, beforeEach } from "vitest";
import { initBeforeEachPinia, useSetup, filterTimeout } from "@/test/helper";
import { levelList, hero } from "@/test/data";
import { useGameStore } from "../game";
import { useElementRenderStore } from "../elementRender";
import { useMapStore } from "../map";
import { useHeroStore } from "../hero";
import { useInit } from "@/hooks/useInit";
import type { LevelListType } from "@/typings/constants";

const commonLevelList: LevelListType = {
  0: levelList[0],
  1: levelList[1],
  2: levelList[2],
};

function commonCheck(index: number) {
  const { map, renderList: _renderList, hero: _hero } = commonLevelList[index];

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
        levelList: commonLevelList,
      })
    );
  });

  describe("设置游戏关卡", () => {
    describe("正常关卡切换", () => {
      beforeEach(() => {
        useSetup(() => {
          useInit(1);
        });
      });

      it("上一关", async () => {
        const { prevGameLevels, getGameLevels } = useGameStore();
        await filterTimeout(() => {
          prevGameLevels();
        });
        commonCheck(0);
        expect(getGameLevels()).toBe(0);
      });

      it("下一关", async () => {
        const { nextGameLevels, getGameLevels } = useGameStore();

        await filterTimeout(() => {
          nextGameLevels();
        });
        commonCheck(2);
        expect(getGameLevels()).toBe(2);
      });
    });

    describe("超关卡切换", () => {
      beforeEach(() => {
        useSetup(() => {
          useInit(1);
        });
      });

      it("上一关", async () => {
        const { prevGameLevels, getGameLevels } = useGameStore();

        await filterTimeout(() => {
          prevGameLevels();
        });
        await filterTimeout(() => {
          prevGameLevels();
        });

        commonCheck(0);
        expect(getGameLevels()).toBe(0);
      });

      it("下一关：游戏状态", async () => {
        const { nextGameLevels, getGameLevels } = useGameStore();
        await filterTimeout(() => {
          nextGameLevels();
        });
        await filterTimeout(() => {
          nextGameLevels();
        });

        await filterTimeout(() => {
          nextGameLevels();
        });

        commonCheck(2);
        expect(getGameLevels()).toBe(2);
      });

      it("下一关: 编辑状态", async () => {
        const { nextGameLevels, getGameLevels } = useGameStore();

        await filterTimeout(() => {
          nextGameLevels(undefined, true);
        });
        await filterTimeout(() => {
          nextGameLevels(undefined, true);
        });
        await filterTimeout(() => {
          nextGameLevels(undefined, true);
        });

        expect(getGameLevels()).toBe(4);
      });
    });
  });
});
