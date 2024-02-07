import { PropNumerical, PropTiles, type PropProperty } from "@/constants";

import type {
  CommonFuncMap,
  ExecuteReturnType,
  PositionType,
} from "@/typings/constants";
import { PropItem } from "./prop";
import { has } from "lodash";
import type { Hero } from "../role";

export class GemstoneItem extends PropItem {
  ATK: number = 0;
  DEF: number = 0;

  constructor(id: PropTiles, property: PropProperty, position?: PositionType) {
    super(id, property, position);

    ["ATK", "DEF"].forEach((key) => {
      let newKey = key as keyof PropProperty;
      const value = property[newKey];
      if (value && has(this, newKey)) {
        // @ts-ignore
        this[newKey] = value;
      }
    });
  }

  execute(hero: Hero, { message }: CommonFuncMap): ExecuteReturnType {
    hero.ATK += this.ATK;
    hero.DEF += this.DEF;
    this.ATK !== 0 && message("攻击力 +" + this.ATK);
    this.DEF !== 0 && message("防御力 +" + this.DEF);
    return { flag: true };
  }
}

export class GemstoneBlue extends GemstoneItem {
  constructor(
    property: PropProperty = PropNumerical[PropTiles.GEMSTONE_BLUE],
    position?: PositionType
  ) {
    super(PropTiles.GEMSTONE_BLUE, property, position);
  }
}

export class GemstoneRed extends GemstoneItem {
  constructor(
    property: PropProperty = PropNumerical[PropTiles.GEMSTONE_RED],
    position?: PositionType
  ) {
    super(PropTiles.GEMSTONE_RED, property, position);
  }
}

export class GemstoneGreen extends GemstoneItem {
  constructor(
    property: PropProperty = PropNumerical[PropTiles.GEMSTONE_GREEN],
    position?: PositionType
  ) {
    super(PropTiles.GEMSTONE_GREEN, property, position);
  }
}
