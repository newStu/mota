import { defaultPosition } from "@/constants";
import { Hero, Orc, SlimeGreen } from "@/element/role";
import { createRole } from "@/element/role/test/common";
import { it, expect, describe } from "vitest";
import { heroFightMonster } from "..";

describe("快速计算结果: heroFightMonster", () => {
  describe("英雄胜利", () => {
    it("普通胜利", () => {
      const hero = new Hero(
        createRole({ Name: "英雄", HP: 100, ATK: 20, DEF: 10 }),
        defaultPosition
      );
      const slime = new SlimeGreen(
        createRole({ Name: "绿色史莱姆", HP: 20, ATK: 20, DEF: 10 }),
        defaultPosition
      );

      const { win, minusHP } = heroFightMonster(hero, slime);
      expect(win).toBeTruthy();
      expect(minusHP).toBe(10);
    });

    it("一击致命", () => {
      const hero = new Hero(
        createRole({ Name: "英雄", HP: 1000, ATK: 20, DEF: 10 }),
        defaultPosition
      );
      const slime = new Orc(
        createRole({ Name: "兽面人", HP: 10, DEF: 10, ATK: 5 }),
        defaultPosition
      );
      const { win, minusHP } = heroFightMonster(hero, slime);
      expect(win).toBeTruthy();
      expect(minusHP).toBe(0);
    });

    it("怪物攻击未破防胜利", () => {
      const hero = new Hero(
        createRole({ Name: "英雄", HP: 1000, ATK: 20, DEF: 10 }),
        defaultPosition
      );
      const slime = new Orc(
        createRole({ Name: "兽面人", HP: 300, DEF: 10, ATK: 5 }),
        defaultPosition
      );
      const { win, minusHP } = heroFightMonster(hero, slime);
      expect(win).toBeTruthy();
      expect(minusHP).toBe(0);
    });
  });

  describe("英雄失败", () => {
    it("一击致命", () => {
      const hero = new Hero(
        createRole({ Name: "英雄", HP: 100, ATK: 20, DEF: 10 }),
        defaultPosition
      );
      const slime = new SlimeGreen(
        createRole({ Name: "绿色史莱姆", HP: 20, ATK: 200, DEF: 10 }),
        defaultPosition
      );

      const { win, minusHP } = heroFightMonster(hero, slime);
      expect(win).toBeFalsy();
      expect(minusHP).toBe(0);
    });

    it("英雄攻击未破防", () => {
      const hero = new Hero(
        createRole({ Name: "英雄", HP: 1000, ATK: 20, DEF: 10 }),
        defaultPosition
      );
      const slime = new Orc(
        createRole({ Name: "兽面人", HP: 300, DEF: 100, ATK: 100 }),
        defaultPosition
      );
      const { win, minusHP } = heroFightMonster(hero, slime);
      expect(win).toBeFalsy();
    });

    it("英雄生命为0, 失败", () => {
      const hero = new Hero(
        createRole({ Name: "英雄", HP: 50, ATK: 20, DEF: 10 }),
        defaultPosition
      );
      const slime = new Orc(
        createRole({ Name: "兽面人", HP: 60, DEF: 10, ATK: 20 }),
        defaultPosition
      );
      const { win, minusHP } = heroFightMonster(hero, slime);
      expect(win).toBeFalsy();
      expect(minusHP).toBe(50);
    });
  });
});
