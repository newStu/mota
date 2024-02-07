import { PropNumerical, PropTiles, type MapItemProperty } from "@/constants";

import type {
  CommonFuncMap,
  ExecuteReturnType,
  PositionType,
} from "@/typings/constants";
import { PropItem } from "./prop";
import type { Hero } from "../role";

export class Cross extends PropItem {
  constructor(
    property: MapItemProperty = PropNumerical[PropTiles.CROSS],
    position?: PositionType
  ) {
    super(PropTiles.CROSS, property, position);
  }

  execute(hero: Hero, { message }: CommonFuncMap): ExecuteReturnType {
    return { flag: true };
  }
}

export class Pickaxe extends PropItem {
  constructor(
    property: MapItemProperty = PropNumerical[PropTiles.PICKAXE],
    position?: PositionType
  ) {
    super(PropTiles.PICKAXE, property, position);
  }

  execute(hero: Hero, { message }: CommonFuncMap): ExecuteReturnType {
    return { flag: true };
  }
}
