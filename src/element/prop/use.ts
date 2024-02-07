import { PropNumerical, PropTiles, type MapItemProperty } from "@/constants";

import type {
  CommonFuncMap,
  ExecuteReturnType,
  PositionType,
} from "@/typings/constants";
import { PropItem } from "./prop";
import type { Hero } from "../role";

export class Book extends PropItem {
  constructor(
    property: MapItemProperty = PropNumerical[PropTiles.BOOK],
    position?: PositionType
  ) {
    super(PropTiles.BOOK, property, position);
  }

  execute(hero: Hero, { message }: CommonFuncMap): ExecuteReturnType {
    return { flag: true };
  }
}

export class Compass extends PropItem {
  constructor(
    property: MapItemProperty = PropNumerical[PropTiles.COMPASS],
    position?: PositionType
  ) {
    super(PropTiles.COMPASS, property, position);
  }

  execute(hero: Hero, { message }: CommonFuncMap): ExecuteReturnType {
    return { flag: true };
  }
}
