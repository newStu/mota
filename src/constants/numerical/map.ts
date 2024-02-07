import { MapTiles } from "../id";

export interface MapItemProperty {
  Name: string;
}

export const MapNumerical: { [key in MapTiles]: MapItemProperty } = {
  [MapTiles.ROAD]: {
    Name: "路",
  },
  [MapTiles.WALL]: {
    Name: "土墙",
  },
  [MapTiles.WALL_1]: {
    Name: "水泥墙",
  },
  [MapTiles.MAGMA]: {
    Name: "熔岩",
  },
  [MapTiles.STAR]: {
    Name: "星辰",
  },
  [MapTiles.DOOR_RED]: {
    Name: "红门",
  },
  [MapTiles.DOOR_YELLOW]: {
    Name: "黄门",
  },
  [MapTiles.DOOR_SPECIAL]: {
    Name: "特殊门",
  },
  [MapTiles.DOOR_IRON_GATE]: {
    Name: "铁门",
  },
  [MapTiles.DOOR_BLUE]: {
    Name: "蓝门",
  },
  [MapTiles.STAIRCASE_DOWN]: {
    Name: "楼梯_下",
  },
  [MapTiles.STAIRCASE_UP]: {
    Name: "楼梯_上",
  },
  [MapTiles.SHOPPING_MIN]: {
    Name: "小商店",
  },
  [MapTiles.SHOPPING]: {
    Name: "大商店",
  },
};
