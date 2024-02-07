import { PropNumerical, PropTiles, type PropProperty } from "@/constants";
import { PropItem } from "./prop";
import type {
  CommonFuncMap,
  ExecuteReturnType,
  PositionType,
} from "@/typings/constants";
import type { Hero } from "../role";

class SwordItem extends PropItem {
  ATK: number = 0;

  constructor(id: PropTiles, property: PropProperty, position?: PositionType) {
    super(id, property, position);

    this.ATK = property.ATK || 0;
  }

  execute(hero: Hero, { message }: CommonFuncMap): ExecuteReturnType {
    hero.ATK += this.ATK;
    message("攻击力 +" + this.ATK);
    return { flag: true };
  }
}

export class Sword extends SwordItem {
  constructor(
    property: PropProperty = PropNumerical[PropTiles.SWORD],
    position?: PositionType
  ) {
    super(PropTiles.SWORD, property, position);
  }
}

export class SwordBig extends SwordItem {
  constructor(
    property: PropProperty = PropNumerical[PropTiles.SWORD_BIG],
    position?: PositionType
  ) {
    super(PropTiles.SWORD_BIG, property, position);
  }
}

export class SwordGod extends SwordItem {
  constructor(
    property: PropProperty = PropNumerical[PropTiles.SWORD_GOD],
    position?: PositionType
  ) {
    super(PropTiles.SWORD_GOD, property, position);
  }
}
