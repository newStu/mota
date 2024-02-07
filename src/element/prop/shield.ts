import { PropNumerical, PropTiles, type PropProperty } from "@/constants";
import { PropItem } from "./prop";
import type {
  CommonFuncMap,
  ExecuteReturnType,
  PositionType,
} from "@/typings/constants";
import type { Hero } from "../role";

class ShieldItem extends PropItem {
  DEF: number = 0;

  constructor(id: PropTiles, property: PropProperty, position?: PositionType) {
    super(id, property, position);

    this.DEF = property.DEF || 0;
  }

  execute(hero: Hero, { message }: CommonFuncMap): ExecuteReturnType {
    hero.DEF += this.DEF;
    message("防御力 +" + this.DEF);
    return { flag: true };
  }
}

export class Shield extends ShieldItem {
  constructor(
    property: PropProperty = PropNumerical[PropTiles.SHIELD],
    position?: PositionType
  ) {
    super(PropTiles.SHIELD, property, position);
  }
}

export class ShieldBig extends ShieldItem {
  constructor(
    property: PropProperty = PropNumerical[PropTiles.SHIELD_BIG],
    position?: PositionType
  ) {
    super(PropTiles.SHIELD_BIG, property, position);
  }
}

export class ShieldGod extends ShieldItem {
  constructor(
    property: PropProperty = PropNumerical[PropTiles.SHIELD_GOD],
    position?: PositionType
  ) {
    super(PropTiles.SHIELD_GOD, property, position);
  }
}
