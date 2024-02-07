import { PropNumerical, PropTiles, type PropProperty } from "@/constants";

import type {
  CommonFuncMap,
  ExecuteReturnType,
  PositionType,
} from "@/typings/constants";
import { PropItem } from "./prop";
import type { Hero } from "../role";

export class DrugItem extends PropItem {
  HP: number = 0;

  constructor(id: PropTiles, property: PropProperty, position?: PositionType) {
    super(id, property, position);

    if (property.HP) {
      this.HP = property.HP;
    }
  }

  execute(hero: Hero, { message }: CommonFuncMap): ExecuteReturnType {
    hero.HP = hero.HP + this.HP;
    message("生命值 +" + this.HP);
    return { flag: true };
  }
}

export class DrugMini extends DrugItem {
  constructor(
    property: PropProperty = PropNumerical[PropTiles.DRUG_MINI],
    position?: PositionType
  ) {
    super(PropTiles.DRUG_MINI, property, position);
  }
}

export class Drug extends DrugItem {
  constructor(
    property: PropProperty = PropNumerical[PropTiles.DRUG],
    position?: PositionType
  ) {
    super(PropTiles.DRUG, property, position);
  }
}

export class DrugMiddle extends DrugItem {
  constructor(
    property: PropProperty = PropNumerical[PropTiles.DRUG_MIDDLE],
    position?: PositionType
  ) {
    super(PropTiles.DRUG_MIDDLE, property, position);
  }
}

export class DrugMax extends DrugItem {
  constructor(
    property: PropProperty = PropNumerical[PropTiles.DRUG_MAX],
    position?: PositionType
  ) {
    super(PropTiles.DRUG_MAX, property, position);
  }
}
