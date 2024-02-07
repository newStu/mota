import { it, expect, describe, vi, beforeEach } from "vitest";
import { initBeforeEachPinia } from "@/test/helper";
import { useElementInteractive } from "../useElementInteractive";
import { Hero, SlimeGreen } from "@/element/role";
import { createRole } from "@/element/role/test/common";
import { DoorTiles, defaultPosition } from "@/constants";
import {
  DoorBlue,
  DoorSpecial,
  StaircaseDown,
  StaircaseUp,
  Wall,
} from "@/element/map";
import { useElementRenderStore } from "@/stores/common/elementRender";
import { GemstoneBlue } from "@/element/prop";
import { Spirit } from "@/element/npc";
import type { TalkInitType } from "@/typings/constants";

vi.mock("@/utils", async (importOriginal) => {
  const otherInfo: any = await importOriginal();
  return {
    ...otherInfo,
    successMessage: vi.fn(),
  };
});

vi.mock("@/stores/game/talk", async () => {
  return {
    useTalkStore: () => {
      return {
        initATalkDialog: ({ callback }: TalkInitType) => {
          callback?.();
        },
      };
    },
  };
});

vi.mock("@/stores/common/game", () => {
  return {
    useGameStore: () => {
      return {
        nextGameLevels: vi.fn(),
        prevGameLevels: vi.fn(),
      };
    },
  };
});

describe("useElementInteractive", () => {
  initBeforeEachPinia();
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("普通地图元素交互", () => {
    describe("门", () => {
      it("开普通门", () => {
        const { heroWithElementInteractive } = useElementInteractive();
        const hero = new Hero(
          createRole({ Name: "英雄", HP: 10, DEF: 10, ATK: 10 }),
          defaultPosition
        );
        hero.addKey(DoorTiles.BLUE);
        const door = new DoorBlue(undefined, defaultPosition);
        vi.spyOn(door, "removeDoor");
        const flag = heroWithElementInteractive(hero, door);

        expect(flag).toBeFalsy();
        expect(door.removeDoor).toBeCalled();
      });

      it("开不了普通门", () => {
        const { heroWithElementInteractive } = useElementInteractive();
        const hero = new Hero(
          createRole({ Name: "英雄", HP: 10, DEF: 10, ATK: 10 }),
          defaultPosition
        );

        const door = new DoorBlue(undefined, defaultPosition);
        vi.spyOn(door, "removeDoor");
        const flag = heroWithElementInteractive(hero, door);

        expect(flag).toBeFalsy();
        expect(door.removeDoor).not.toBeCalled();
      });

      it("开特殊门", () => {
        const { heroWithElementInteractive } = useElementInteractive();
        const hero = new Hero(
          createRole({ Name: "英雄", HP: 10, DEF: 10, ATK: 10 }),
          defaultPosition
        );
        hero.setOpenSpecialDoor();
        const door = new DoorSpecial(undefined, defaultPosition);
        vi.spyOn(door, "removeDoor");
        const flag = heroWithElementInteractive(hero, door);

        expect(flag).toBeFalsy();
        expect(door.removeDoor).toBeCalled();
      });

      it("开不了特殊门", () => {
        const { heroWithElementInteractive } = useElementInteractive();
        const hero = new Hero(
          createRole({ Name: "英雄", HP: 10, DEF: 10, ATK: 10 }),
          defaultPosition
        );

        const door = new DoorSpecial(undefined, defaultPosition);
        vi.spyOn(door, "removeDoor");
        const flag = heroWithElementInteractive(hero, door);

        expect(flag).toBeFalsy();
        expect(door.removeDoor).not.toBeCalled();
      });
    });

    it("墙面", () => {
      const { heroWithElementInteractive } = useElementInteractive();
      const hero = new Hero(
        createRole({ Name: "英雄", HP: 10, DEF: 10, ATK: 10 }),
        defaultPosition
      );
      const wall = new Wall(undefined, defaultPosition);
      const flag = heroWithElementInteractive(hero, wall);

      expect(flag).toBeFalsy();
    });
    it("没有元素", () => {
      const { heroWithElementInteractive } = useElementInteractive();
      const hero = new Hero(
        createRole({ Name: "英雄", HP: 10, DEF: 10, ATK: 10 }),
        defaultPosition
      );
      const flag = heroWithElementInteractive(hero, undefined);

      expect(flag).toBeTruthy();
    });
  });
  describe("楼梯元素交互", () => {
    it("上", () => {
      const { heroWithElementInteractive, getCommonFuncMap } =
        useElementInteractive();
      const hero = new Hero(
        createRole({ Name: "英雄", HP: 10, DEF: 10, ATK: 10 }),
        defaultPosition
      );
      const staircaseUp = new StaircaseUp(undefined, defaultPosition);
      const flag = heroWithElementInteractive(hero, staircaseUp);
      const commonFunc = getCommonFuncMap();
      expect(flag).toBeFalsy();
      expect(commonFunc.nextLevels).toBeCalled();
    });

    it("下", () => {
      const { heroWithElementInteractive, getCommonFuncMap } =
        useElementInteractive();
      const hero = new Hero(
        createRole({ Name: "英雄", HP: 10, DEF: 10, ATK: 10 }),
        defaultPosition
      );
      const staircaseUp = new StaircaseDown(undefined, defaultPosition);
      const flag = heroWithElementInteractive(hero, staircaseUp);
      const commonFunc = getCommonFuncMap();
      expect(flag).toBeFalsy();
      expect(commonFunc.prevLevels).toBeCalled();
    });
  });

  describe("与怪物交互", () => {
    it("成功", () => {
      const { renderList, addItem } = useElementRenderStore();
      const { heroWithElementInteractive, getCommonFuncMap } =
        useElementInteractive();
      const hero = new Hero(
        createRole({ Name: "英雄", HP: 10, DEF: 10, ATK: 20 }),
        defaultPosition
      );
      const monster = new SlimeGreen(
        createRole({ Name: "史莱姆", HP: 10, DEF: 10, ATK: 10 }),
        defaultPosition
      );
      addItem(monster);
      const beforeXP = hero.XP;
      const flag = heroWithElementInteractive(hero, monster);
      const commonFunc = getCommonFuncMap();
      expect(flag).toBeTruthy();
      expect(hero.XP).toBe(beforeXP + monster.XP);
      expect(commonFunc.message).toBeCalled();
      expect(renderList.length).toBe(0);
    });

    it("失败", () => {
      const { renderList, addItem } = useElementRenderStore();
      const { heroWithElementInteractive, getCommonFuncMap } =
        useElementInteractive();
      const hero = new Hero(
        createRole({ Name: "英雄", HP: 10, DEF: 10, ATK: 20 }),
        defaultPosition
      );
      const monster = new SlimeGreen(
        createRole({ Name: "史莱姆", HP: 10, DEF: 20, ATK: 10 }),
        defaultPosition
      );
      addItem(monster);
      const flag = heroWithElementInteractive(hero, monster);
      const commonFunc = getCommonFuncMap();
      expect(flag).toBeFalsy();
      expect(hero.HP).toBe(10);
      expect(renderList.length).toBe(1);
      expect(commonFunc.message).not.toBeCalled();
    });
  });

  describe("与精灵交互", () => {
    it("初次交互", () => {
      const { renderList, addItem } = useElementRenderStore();
      const { heroWithElementInteractive } = useElementInteractive();
      const hero = new Hero(
        createRole({ Name: "英雄", HP: 10, DEF: 10, ATK: 20 }),
        defaultPosition
      );
      const spirit = new Spirit(undefined, defaultPosition);
      addItem(spirit);
      const flag = heroWithElementInteractive(hero, spirit);
      expect(flag).toBeFalsy();
      expect(hero.spiritProgress).toBe("progress");
      expect(renderList.length).toBe(1);
      expect(spirit.x).toBe(spirit.afterX);
      expect(spirit.y).toBe(spirit.afterY);
    });

    it("二次交互", () => {
      const { renderList, addItem } = useElementRenderStore();
      const { heroWithElementInteractive } = useElementInteractive();
      const hero = new Hero(
        createRole({ Name: "英雄", HP: 10, DEF: 9, ATK: 18 }),
        defaultPosition
      );
      const spirit = new Spirit(undefined, defaultPosition);
      addItem(spirit);
      heroWithElementInteractive(hero, spirit);

      hero.spiritNextProgress();
      heroWithElementInteractive(hero, spirit);

      expect(hero.spiritProgress).toBe("end");
      expect(renderList.length).toBe(1);

      expect(hero.ATK).toBe(24);
      expect(hero.DEF).toBe(12);
    });
  });

  describe("与道具交互", () => {
    it("成功: 并移除该道具", () => {
      const { renderList, addItem } = useElementRenderStore();
      const { heroWithElementInteractive, getCommonFuncMap } =
        useElementInteractive();
      const hero = new Hero(
        createRole({ Name: "英雄", HP: 10, DEF: 10, ATK: 20 }),
        defaultPosition
      );

      const prop = new GemstoneBlue(undefined, defaultPosition);
      addItem(prop);
      expect(renderList.length).toBe(1);
      const beforeDef = hero.DEF;
      const flag = heroWithElementInteractive(hero, prop);
      const commonFunc = getCommonFuncMap();
      expect(flag).toBeTruthy();
      expect(hero.DEF).toBe(beforeDef + prop.DEF);
      expect(commonFunc.message).toBeCalled();
      expect(renderList.length).toBe(0);
    });
  });
});
