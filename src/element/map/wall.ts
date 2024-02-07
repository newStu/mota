import { MapNumerical, MapTiles, type MapItemProperty } from "@/constants";
import { MapItem } from "./map";
import type {
  CommonFuncMap,
  ExecuteReturnType,
  PositionType,
} from "@/typings/constants";
import type { Hero } from "../role";

export class Wall extends MapItem {
  hasAnimation: boolean = false;

  constructor(
    property: MapItemProperty = MapNumerical[MapTiles.WALL],
    position?: PositionType
  ) {
    super(MapTiles.WALL, property, position);
  }

  execute(hero: Hero, commonFuncMap: CommonFuncMap): ExecuteReturnType {
    // 判断是否有破墙镐，有执行操作，没有就返回false
  }
}

export class CementWall extends MapItem {
  constructor(
    property: MapItemProperty = MapNumerical[MapTiles.WALL_1],
    position?: PositionType
  ) {
    super(MapTiles.WALL_1, property, position);
  }

  execute(hero: Hero, commonFuncMap: CommonFuncMap): ExecuteReturnType {
    // 判断是否有破墙镐，有执行操作，没有就返回false
  }
}
