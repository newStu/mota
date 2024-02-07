import type { IDType, PositionType } from "@/typings/constants";
import { NPCTiles } from "./id/npc";
import { MapTiles } from "./id/map";

export const defaultPosition: PositionType = { x: -1, y: -1 };

export const attributeText: { [key: string]: string } = {
  x: "x",
  y: "y",
  Name: "名称",
  HP: "血量",
  ATK: "攻击力",
  DEF: "防御力",
  XP: "经验值",
  Gold: "金币",
  // MP: "魔法量",
};

export const numberToText: { [key: number]: string } = {
  0: "零",
  1: "壹",
  2: "贰",
  3: "叁",
  4: "肆",
  5: "伍",
  6: "陆",
  7: "柒",
  8: "捌",
  9: "玖",
};

export const oneElementIds: Array<IDType> = [
  NPCTiles.SPIRIT,
  NPCTiles.MERCHANT_MIN_EXP,
  NPCTiles.MERCHANT_KEY,
  NPCTiles.MERCHANT_EXP,
  MapTiles.SHOPPING,
  MapTiles.SHOPPING_MIN,
];
