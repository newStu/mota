import { it, expect, describe } from "vitest";
import { Hero } from "../hero";
import { createRole } from "./common";
import { DoorTiles, defaultPosition } from "@/constants";

function getOneHero(name: string) {
  return new Hero(
    createRole({ Name: name, HP: 10, ATK: 20, DEF: 5 }),
    defaultPosition
  );
}

function getKeyChain(yellow = 10, blue = 8, red = 6) {
  return {
    [DoorTiles.YELLOW]: yellow,
    [DoorTiles.BLUE]: blue,
    [DoorTiles.RED]: red,
  };
}

describe("角色基础能力测试", () => {
  describe("钥匙", () => {
    it("整体设置钥匙包: setKey", () => {
      const hero = getOneHero("xxx");
      hero.setKey(getKeyChain(10, 8, 6));

      expect(hero.getKey(DoorTiles.YELLOW)).toBe(10);
      expect(hero.getKey(DoorTiles.BLUE)).toBe(8);
      expect(hero.getKey(DoorTiles.RED)).toBe(6);
    });
    it("设置钥匙包：setKeyChain, addKey, useKey", () => {
      const hero = getOneHero("xxx");
      hero.setKeyChain(getKeyChain(10, 8, 6));

      hero.setKeyChain(getKeyChain(5, 4, 3), "use");

      expect(hero.getKey(DoorTiles.YELLOW)).toBe(5);
      expect(hero.getKey(DoorTiles.BLUE)).toBe(4);
      expect(hero.getKey(DoorTiles.RED)).toBe(3);
    });

    it("获取指定钥匙: getKey", () => {
      const hero = getOneHero("xxx");

      hero.setKeyChain(getKeyChain(10, 8, 6));

      const keyNum = hero.getKey(DoorTiles.YELLOW);

      expect(keyNum).toBe(10);
    });

    it("批量获取指定钥匙: getKey", () => {
      const hero = getOneHero("xxx");

      hero.setKeyChain(getKeyChain(10, 8, 6));

      const keyNum = hero.getKey([DoorTiles.RED, DoorTiles.YELLOW]);

      expect(keyNum).toEqual({ [DoorTiles.YELLOW]: 10, [DoorTiles.RED]: 6 });
    });
  });
});
