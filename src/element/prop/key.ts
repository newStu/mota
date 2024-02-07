import {
  DoorTiles,
  PropNumerical,
  PropTiles,
  type MapItemProperty,
} from "@/constants";

import type {
  CommonFuncMap,
  ExecuteReturnType,
  PositionType,
} from "@/typings/constants";
import { PropItem } from "./prop";
import type { Hero } from "../role";

export class KeyBlue extends PropItem {
  constructor(
    property: MapItemProperty = PropNumerical[PropTiles.KEY_BLUE],
    position?: PositionType
  ) {
    super(PropTiles.KEY_BLUE, property, position);
  }

  execute(hero: Hero, { message }: CommonFuncMap): ExecuteReturnType {
    hero.addKey(DoorTiles.BLUE);
    message(this.Name + " +1");
    return {
      flag: true,
    };
  }
}

export class KeyRed extends PropItem {
  constructor(
    property: MapItemProperty = PropNumerical[PropTiles.KEY_RED],
    position?: PositionType
  ) {
    super(PropTiles.KEY_RED, property, position);
  }

  execute(hero: Hero, { message }: CommonFuncMap): ExecuteReturnType {
    hero.addKey(DoorTiles.RED);
    message(this.Name + " +1");
    return {
      flag: true,
    };
  }
}

export class KeyYellow extends PropItem {
  constructor(
    property: MapItemProperty = PropNumerical[PropTiles.KEY_YELLOW],
    position?: PositionType
  ) {
    super(PropTiles.KEY_YELLOW, property, position);
  }

  execute(hero: Hero, { message }: CommonFuncMap): ExecuteReturnType {
    hero.addKey(DoorTiles.YELLOW);
    message(this.Name + " +1");
    return {
      flag: true,
    };
  }
}

export class KeyBag extends PropItem {
  constructor(
    property: MapItemProperty = PropNumerical[PropTiles.KEY_BAG],
    position?: PositionType
  ) {
    super(PropTiles.KEY_BAG, property, position);
  }

  execute(hero: Hero, { message }: CommonFuncMap): ExecuteReturnType {
    return {
      flag: true,
    };
  }
}
