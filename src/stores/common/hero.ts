import { HeroNumerical } from "@/constants";
import { Hero } from "@/element/role";
import type { MoveDirectionType, PositionType } from "@/typings/constants";
import { defineStore } from "pinia";
import { reactive } from "vue";
import { useMapStore } from "./map";
import { useElementRenderStore } from "./elementRender";
import { useElementInteractive } from "@/hooks/useElementInteractive";

export type KeywordCodeType =
  | "ArrowLeft"
  | "ArrowRight"
  | "ArrowUp"
  | "ArrowDown";

export const useHeroStore = defineStore("hero-store", () => {
  let hero = reactive<Hero>(new Hero(HeroNumerical, { x: 0, y: 0 }));

  function setHeroPosition(_hero: PositionType) {
    hero.x = _hero.x || 0;
    hero.y = _hero.y || 0;
  }

  function initHero(_hero: Hero) {
    // 初始化hero
    hero.initValue(_hero as any);
    setHeroPosition(_hero as PositionType);
  }

  const { findItemByXy, getForwardPosition } = useElementRenderStore();
  const { isInnerMap } = useMapStore();
  const { heroWithElementInteractive } = useElementInteractive();

  function setHeroMoveDirection(dx: number, dy: number) {
    let moveDirection: MoveDirectionType = "up";
    if (dx > 0) {
      moveDirection = "right";
    } else if (dx < 0) {
      moveDirection = "left";
    } else if (dy > 0) {
      moveDirection = "down";
    } else if (dy < 0) {
      moveDirection = "up";
    }
    hero.setMoveDirection(moveDirection);
  }

  function _move(dx: number, dy: number) {
    setHeroMoveDirection(dx, dy);
    let nextPosition = {
      x: hero.x + dx,
      y: hero.y + dy,
    };
    // 判断是否出地图
    if (!isInnerMap(nextPosition)) return;
    // 添加转发坐标查找
    let targetPosition = getForwardPosition(nextPosition);
    const element = findItemByXy(targetPosition);
    if (!heroWithElementInteractive(hero as any, element)) return;

    hero.movePosition(nextPosition);
  }

  function moveHeroToLeft() {
    _move(-1, 0);
  }
  function moveHeroToRight() {
    _move(1, 0);
  }
  function moveHeroToDown() {
    _move(0, 1);
  }
  function moveHeroToUp() {
    _move(0, -1);
  }

  const operations: { [key in KeywordCodeType]: () => void } = {
    ArrowLeft: moveHeroToLeft,
    ArrowRight: moveHeroToRight,
    ArrowUp: moveHeroToUp,
    ArrowDown: moveHeroToDown,
  };

  return {
    initHero,
    setHeroPosition,
    hero,
    operations,
  };
});
