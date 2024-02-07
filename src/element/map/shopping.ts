import { MapTiles, type MapItemProperty, MapNumerical } from "@/constants";
import { BigMapItem } from "./map";
import type { CommonFuncMap, PositionType } from "@/typings/constants";
import type { Hero } from "../role";

/**
 * 商店
 */
class ShoppingCommon extends BigMapItem {
  width: number = 3;
  height: number = 1;

  constructor(
    id: MapTiles,
    property: MapItemProperty,
    position?: PositionType
  ) {
    super(id, property, position);
  }
}

/**
 * 小商店
 */
export class ShoppingMin extends ShoppingCommon {
  constructor(
    property: MapItemProperty = MapNumerical[MapTiles.SHOPPING_MIN],
    position?: PositionType
  ) {
    super(MapTiles.SHOPPING_MIN, property, position);
  }

  execute(hero: Hero, { openMinGoldStore }: CommonFuncMap) {
    if (!hero.hasMinGoldStore) {
      hero.setOpenMinGoldStore();
    }
    openMinGoldStore();
    return { flag: false, isFight: false };
  }
}

/**
 * 大商店
 */
export class Shopping extends ShoppingCommon {
  constructor(
    property: MapItemProperty = MapNumerical[MapTiles.SHOPPING],
    position?: PositionType
  ) {
    super(MapTiles.SHOPPING, property, position);
  }

  execute(hero: Hero, { openGoldStore }: CommonFuncMap) {
    if (!hero.hasGoldStore) {
      hero.setOpenGoldStore();
    }
    openGoldStore();
    return { flag: false, isFight: false };
  }
}
