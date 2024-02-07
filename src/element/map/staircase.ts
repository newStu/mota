import { MapNumerical, MapTiles, type MapItemProperty } from "@/constants";
import { MapItem } from "./map";
import type {
  CommonFuncMap,
  ExecuteReturnType,
  PositionType,
} from "@/typings/constants";
import type { Hero } from "../role";

export class StaircaseUp extends MapItem {
  constructor(
    property: MapItemProperty = MapNumerical[MapTiles.STAIRCASE_UP],
    position?: PositionType
  ) {
    super(MapTiles.STAIRCASE_UP, property, position);
  }
  // 将一些公共方法最后打包放在参数传入过来
  execute(_hero: Hero, commonFuncMap: CommonFuncMap): ExecuteReturnType {
    const { nextLevels } = commonFuncMap || {};
    nextLevels?.();
    return { flag: false };
  }
}

export class StaircaseDown extends MapItem {
  constructor(
    property: MapItemProperty = MapNumerical[MapTiles.STAIRCASE_DOWN],
    position?: PositionType
  ) {
    super(MapTiles.STAIRCASE_DOWN, property, position);
  }

  execute(_hero: Hero, commonFuncMap: CommonFuncMap): ExecuteReturnType {
    const { prevLevels } = commonFuncMap || {};
    prevLevels?.();
    return { flag: false };
  }
}
