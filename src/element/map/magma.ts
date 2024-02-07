import { MapNumerical, MapTiles, type MapItemProperty } from "@/constants";
import { MapItem } from "./map";
import type { ExecuteReturnType, PositionType } from "@/typings/constants";
import type { Hero } from "../role";

export class Magma extends MapItem {
  hasAnimation: boolean = true;
  constructor(
    property: MapItemProperty = MapNumerical[MapTiles.MAGMA],
    position: PositionType
  ) {
    super(MapTiles.MAGMA, property, position);
  }

  execute(hero: Hero): ExecuteReturnType {
    // 判断是否有熔岩靴，有执行操作，没有就返回false
  }
}
