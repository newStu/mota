import { MapNumerical, MapTiles, type MapItemProperty } from "@/constants";
import { MapItem } from "./map";
import type {
  CommonFuncMap,
  ExecuteReturnType,
  PositionType,
} from "@/typings/constants";
import type { Hero } from "../role";

export class Star extends MapItem {
  positionY: number = 1;
  hasAnimation: boolean = true;
  constructor(
    property: MapItemProperty = MapNumerical[MapTiles.STAR],
    position?: PositionType
  ) {
    super(MapTiles.STAR, property, position);
  }

  execute(hero: Hero, commonFuncMap: CommonFuncMap): ExecuteReturnType {}
}
