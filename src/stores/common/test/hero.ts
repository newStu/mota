import { it, expect, describe } from "vitest";
import { hero } from "@/test/data";
import { useGameStore } from "../game";
import { useHeroStore } from "../hero";
import { initBeforeEachPinia } from "@/test/helper";

describe("游戏初始化", () => {
  initBeforeEachPinia();
  it("英雄数据初始化", () => {
    useGameStore();
    const { hero: _hero, initHero } = useHeroStore();
    initHero(hero as any);

    expect(_hero.ATK).toBe(hero.ATK);
    expect(_hero.Name).toBe(hero.Name);
    expect(_hero.DEF).toBe(hero.DEF);
  });

  describe("英雄移动", () => {
    it("左移动", () => {
      const { operations, hero, setHeroPosition } = useHeroStore();
      setHeroPosition({ x: 1, y: 1 });
      operations.ArrowLeft();
      expect(hero.x).toBe(0);
    });

    it("右移", () => {
      const { operations, hero, setHeroPosition } = useHeroStore();
      setHeroPosition({ x: 1, y: 1 });
      operations.ArrowRight();

      expect(hero.x).toBe(2);
    });

    it("下移", () => {
      const { operations, hero, setHeroPosition } = useHeroStore();
      setHeroPosition({ x: 1, y: 1 });
      operations.ArrowDown();
      expect(hero.y).toBe(2);
    });

    it("上移", () => {
      const { operations, hero, setHeroPosition } = useHeroStore();
      setHeroPosition({ x: 1, y: 1 });
      operations.ArrowUp();
      expect(hero.y).toBe(0);
    });
  });
});
