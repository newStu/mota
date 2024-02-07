import { it, expect, describe, beforeEach } from "vitest";
import { useMapStore } from "@/stores/common/map";
import { Wall } from "@/element/map/wall";
import { initBeforeEachPinia } from "@/test/helper";
import { useElementRenderStore } from "../elementRender";
import { DoorTiles, MapTiles } from "@/constants";
import { createRole } from "@/element/role/test/common";
import { elementList, hero, mapTile, propTile, roleTile } from "@/test/data";
import { useHeroStore } from "../hero";
import { DoorBlue } from "@/element/map";
import type { Hero } from "@/element/role";

describe("测试编辑元素", () => {
  initBeforeEachPinia();

  beforeEach(() => {
    const { initMap } = useMapStore();
    initMap();
  });

  describe("添加指定元素:  findItem, addToRender", () => {
    it("添加墙", () => {
      let wall = new Wall();
      const { renderList, addItem, findItem } = useElementRenderStore();
      addItem(wall);
      let newWall = findItem(wall);
      expect(renderList).toContain(newWall);
    });

    it("初始化英雄: initHero initPosition", () => {
      const { initHero, hero: heroItem } = useHeroStore();
      initHero({
        x: 4,
        y: 4,
        ...createRole({ Name: "xx", HP: 10, ATK: 20, DEF: 5 }),
        _hasBook: true,
        _key: { [DoorTiles.BLUE]: 10 },
      } as unknown as Hero);

      expect(heroItem.x).toBe(4);
      expect(heroItem.y).toBe(4);
      expect(heroItem.HP).toBe(10);
      expect(heroItem.hasBook).toBeTruthy();
      expect(heroItem.Name).toBe("xx");
      expect(heroItem.getKey(DoorTiles.BLUE)).toBe(10);
    });

    it("初始化其它元素: initOtherRenderList", () => {
      const { initOtherRenderList, renderList, findItem } =
        useElementRenderStore();

      initOtherRenderList(elementList);

      const roleItem = findItem(roleTile);
      const propItem = findItem(propTile);
      const mapItem = findItem(mapTile);

      expect(renderList.length).toBe(3);
      expect(renderList).toContain(roleItem);
      expect(renderList).toContain(propItem);
      expect(renderList).toContain(mapItem);
    });
  });

  describe("移除指定元素: removeItem", () => {
    it("移除墙:removeItem", () => {
      let wall = new Wall();
      const { addItem, renderList, removeItem } = useElementRenderStore();
      addItem(wall);

      removeItem(wall);

      expect(renderList.length).toBe(0);
    });

    it("移除相同的元素:removeItemById", () => {
      const { addItem, renderList, removeItemById } = useElementRenderStore();
      for (let index = 0; index < 5; index++) {
        let wall = new Wall(undefined, { x: 0, y: index });
        addItem(wall);
      }
      removeItemById(MapTiles.WALL);

      addItem(hero);
      expect(renderList.length).toBe(1);
    });
  });

  describe("查找元素", () => {
    describe("findItemByXy", () => {
      it("普通查找: findItemByXy", () => {
        let position = { x: 3, y: 4 };
        let door = new DoorBlue(undefined, { x: 1, y: 2 });
        let wall = new Wall(undefined, position);
        const { addItem, findItemByXy } = useElementRenderStore();
        addItem(door);
        addItem(wall);

        const item = findItemByXy(position);
        const itemInfo = findItemByXy({ x: 0, y: 0 });

        expect(item?.getRenderKey()).toBe(wall.getRenderKey());
        expect(itemInfo).toBeUndefined();
      });

      it("fix: x相同查找", () => {
        let position = { x: 3, y: 4 };
        let wall = new Wall(undefined, position);
        const { addItem, findItemByXy } = useElementRenderStore();
        addItem(wall);

        const item = findItemByXy({ x: 3, y: 5 });

        expect(item).toBeUndefined();
      });

      it("fix: y相同查找", () => {
        let position = { x: 3, y: 4 };
        let wall = new Wall(undefined, position);
        const { addItem, findItemByXy } = useElementRenderStore();
        addItem(wall);

        const item = findItemByXy({ x: 5, y: 4 });

        expect(item).toBeUndefined();
      });
    });

    it("findItem", () => {
      let position = { x: 3, y: 4 };
      let door = new DoorBlue(undefined, { x: 1, y: 2 });
      let wall = new Wall(undefined, position);
      const { addItem, findItem } = useElementRenderStore();
      addItem(door);
      addItem(wall);

      const item: any = findItem(door);

      expect(item?.id).toBe(door.id);
      expect(item?.x).toBe(door.x);
      expect(item?.y).toBe(door.y);
      expect(item?.Name).toBe(door.Name);
    });

    describe("findItemsById", () => {
      it("单个id查找", () => {
        let door = new DoorBlue(undefined, { x: 1, y: 2 });
        const { addItem, findItemsById } = useElementRenderStore();
        addItem(door);
        for (let index = 0; index < 5; index++) {
          let wall = new Wall(undefined, { x: 0, y: index });
          addItem(wall);
        }
        const items = findItemsById(MapTiles.WALL);

        expect(items.length).toBe(5);
      });

      it("多id查找", () => {
        let door = new DoorBlue(undefined, { x: 1, y: 2 });
        const { addItem, findItemsById } = useElementRenderStore();
        addItem(door);
        for (let index = 0; index < 5; index++) {
          let wall = new Wall(undefined, { x: 0, y: index });
          addItem(wall);
        }
        const items = findItemsById([MapTiles.WALL, MapTiles.DOOR_BLUE]);

        expect(items.length).toBe(6);
      });
    });
  });
});
