import { defaultPosition } from "@/constants";
import { DoorYellow } from "@/element/map";
import { Book } from "@/element/prop";
import { Bat, Hero } from "@/element/role";
import { createRole } from "@/element/role/test/common";
import type { LevelListType } from "@/typings/constants";

export const mapTile = new DoorYellow(undefined, {
  x: 10,
  y: 10,
});
export const propTile = new Book(undefined, {
  x: 20,
  y: 20,
});
export const roleTile = new Bat(undefined, {
  x: 30,
  y: 30,
});
export const elementList = [mapTile, propTile, roleTile];

export const hero = new Hero(
  createRole({ Name: "英雄", HP: 10, ATK: 20, DEF: 5 }),
  defaultPosition
);

export const levelList: LevelListType = {
  0: {
    map: { col: 8, row: 9 },
    renderList: [mapTile],
    hero: { x: 0, y: 0 },
  },
  1: {
    map: { col: 10, row: 10 },
    renderList: elementList,
    hero: { x: 1, y: 1 },
  },
  2: {
    map: { col: 11, row: 12 },
    renderList: [propTile, roleTile],
    hero: { x: 2, y: 2 },
  },
};
