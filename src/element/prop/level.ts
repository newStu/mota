import { PropNumerical, PropTiles, type MapItemProperty } from "@/constants";

import type {
  CommonFuncMap,
  ExecuteReturnType,
  PositionType,
} from "@/typings/constants";
import { PropItem } from "./prop";
import type { Hero } from "../role";

export class Level1 extends PropItem {
  constructor(
    property: MapItemProperty = PropNumerical[PropTiles.LEVEL_1],
    position?: PositionType
  ) {
    super(PropTiles.LEVEL_1, property, position);
  }

  execute(hero: Hero, { message }: CommonFuncMap): ExecuteReturnType {
    return {
      flag: true,
    };
  }
}

export class Level2 extends PropItem {
  constructor(
    property: MapItemProperty = PropNumerical[PropTiles.LEVEL_2],
    position?: PositionType
  ) {
    super(PropTiles.LEVEL_2, property, position);
  }

  execute(hero: Hero, { message }: CommonFuncMap): ExecuteReturnType {
    return {
      flag: true,
    };
  }
}

export class Level3 extends PropItem {
  constructor(
    property: MapItemProperty = PropNumerical[PropTiles.LEVEL_3],
    position?: PositionType
  ) {
    super(PropTiles.LEVEL_3, property, position);
  }

  execute(hero: Hero, { message }: CommonFuncMap): ExecuteReturnType {
    return {
      flag: true,
    };
  }
}
