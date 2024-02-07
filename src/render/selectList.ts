import type { IDType, SelectRenderType } from "@/typings/constants";
import {
  RoleTiles,
  MapTiles,
  PropTiles,
  DoorTiles,
  NPCTiles,
} from "../constants";
import { elements } from "./element";

function getSelectList(idList: Array<IDType>) {
  return idList.map((id) => ({
    id: id,
    Element: elements[id],
  }));
}

const abilitySelectRoleTilesList: SelectRenderType = [
  {
    text: "英雄",
    list: getSelectList([RoleTiles.HERO]),
  },
  {
    text: "精灵",
    list: getSelectList([NPCTiles.SPIRIT]),
  },
  {
    text: "小偷",
    list: getSelectList([NPCTiles.THIEF]),
  },
  {
    text: "商人",
    list: getSelectList([
      NPCTiles.MERCHANT_MIN_EXP,
      NPCTiles.MERCHANT_KEY,
      NPCTiles.MERCHANT_EXP,
    ]),
  },
];

const monsterSelectRoleTilesList: SelectRenderType = [
  {
    text: "初级怪物",
    list: getSelectList([
      RoleTiles.SLIME_GREEN,
      RoleTiles.SLIME_RED,
      RoleTiles.SLIME_BLACK,
      RoleTiles.BAT,
      RoleTiles.SKELETON,
      RoleTiles.SKELETON_SOLDIER,
      RoleTiles.MAGICIAN,
      RoleTiles.BAT_BIG,
    ]),
  },
  {
    text: "中级怪物",
    list: getSelectList([
      RoleTiles.ORC,
      RoleTiles.SKELETON_QUEUE,
      RoleTiles.STONE_MONSTER,
      RoleTiles.MAGICIAN_LINEN,
      RoleTiles.GUARD_PRIMARY,
      RoleTiles.BAT_RED,
      RoleTiles.MAGICIAN_HEIGHT,
      RoleTiles.SLIME_KING,
      RoleTiles.KNIGHT_WHITE,
    ]),
  },
  {
    text: "高级怪物",
    list: getSelectList([
      RoleTiles.WEISHI_JIN,
      RoleTiles.MAGICIAN_RED,
      RoleTiles.ORC_WARRIOR,
      RoleTiles.GUARD_UNDERWORLD,
      RoleTiles.GUARD_HEIGHT,
      RoleTiles.SWORDSMAN_BOTH_HANDS,
      RoleTiles.WARRIOR_UNDERWORLD,
      RoleTiles.METALS_QUEUE,
      RoleTiles.MAGICIAN_QUICK,
      RoleTiles.UNDERWORLD_QUEUE,
      RoleTiles.KNIGHT_QUEUE,
      RoleTiles.WARRIOR_SHADOW,
    ]),
  },
  {
    text: "特殊怪物",
    list: getSelectList([RoleTiles.DRAGON, RoleTiles.OCTOPUS]),
  },
  {
    text: "BOSS",
    list: getSelectList([RoleTiles.DEVIL_RED, RoleTiles.DEVIL_QUEUE]),
  },
];

export const selectMapTilesList: SelectRenderType = [
  {
    text: "墙体",
    list: getSelectList([MapTiles.WALL, MapTiles.WALL_1]),
  },
  {
    text: "门",
    list: getSelectList([
      MapTiles.DOOR_RED,
      MapTiles.DOOR_BLUE,
      MapTiles.DOOR_YELLOW,
      MapTiles.DOOR_SPECIAL,
      MapTiles.DOOR_IRON_GATE,
    ]),
  },
  {
    text: "楼梯",
    list: getSelectList([MapTiles.STAIRCASE_UP, MapTiles.STAIRCASE_DOWN]),
  },
  {
    text: "商店",
    list: getSelectList([MapTiles.SHOPPING, MapTiles.SHOPPING_MIN]),
  },
  {
    text: "其他",
    list: getSelectList([MapTiles.MAGMA, MapTiles.STAR]),
  },
];

export const keyList = [
  {
    id: PropTiles.KEY_RED,
    Element: elements[PropTiles.KEY_RED],
    DoorId: DoorTiles.RED,
  },
  {
    id: PropTiles.KEY_BLUE,
    Element: elements[PropTiles.KEY_BLUE],
    DoorId: DoorTiles.BLUE,
  },
  {
    id: PropTiles.KEY_YELLOW,
    Element: elements[PropTiles.KEY_YELLOW],
    DoorId: DoorTiles.YELLOW,
  },
];

// 功能性道具
export const abilityList = [
  { id: PropTiles.BOOK, Element: elements[PropTiles.BOOK] },
  { id: PropTiles.COMPASS, Element: elements[PropTiles.COMPASS] },
];

const selectPropTilesList: SelectRenderType = [
  {
    text: "钥匙",
    list: [...keyList, ...getSelectList([PropTiles.KEY_BAG])],
  },
  {
    text: "金币",
    list: getSelectList([PropTiles.COIN_GOLD, PropTiles.COIN_SILVER]),
  },
  {
    text: "宝石",
    list: getSelectList([
      PropTiles.GEMSTONE_RED,
      PropTiles.GEMSTONE_BLUE,
      PropTiles.GEMSTONE_GREEN,
    ]),
  },
  {
    text: "回复药水",
    list: getSelectList([
      PropTiles.DRUG_MINI,
      PropTiles.DRUG,
      PropTiles.DRUG_MIDDLE,
      PropTiles.DRUG_MAX,
    ]),
  },
  {
    text: "等级道具",
    list: getSelectList([
      PropTiles.LEVEL_1,
      PropTiles.LEVEL_2,
      PropTiles.LEVEL_3,
    ]),
  },
  {
    text: "武器",
    list: getSelectList([
      PropTiles.SWORD,
      PropTiles.SWORD_BIG,
      PropTiles.SWORD_GOD,
    ]),
  },
  {
    text: "防具",
    list: getSelectList([
      PropTiles.SHIELD,
      PropTiles.SHIELD_BIG,
      PropTiles.SHIELD_GOD,
    ]),
  },
  {
    text: "NPC道具",
    list: getSelectList([PropTiles.CROSS, PropTiles.PICKAXE]),
  },
  {
    text: "功能性道具",
    list: abilityList,
  },
];

export const renderElementTabs = [
  {
    label: "地图",
    selectionList: selectMapTilesList,
    name: "map",
  },
  {
    label: "角色",
    selectionList: abilitySelectRoleTilesList,
    name: "role",
  },
  {
    label: "怪物",
    selectionList: monsterSelectRoleTilesList,
    name: "monster",
  },
  {
    label: "道具",
    selectionList: selectPropTilesList,
    name: "prop",
  },
];
