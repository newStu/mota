import { PropTiles, type MapItemProperty, PropNumerical } from "@/constants";
import { PropItem } from "./prop";
import type {
  CommonFuncMap,
  ExecuteReturnType,
  PositionType,
} from "@/typings/constants";
import type { Hero } from "../role";

export class CoinGold extends PropItem {
  constructor(
    property: MapItemProperty = PropNumerical[PropTiles.COIN_GOLD],
    position?: PositionType
  ) {
    super(PropTiles.COIN_GOLD, property, position);
  }

  execute(hero: Hero, { message }: CommonFuncMap): ExecuteReturnType {
    return {
      flag: true,
    };
  }
}

export class CoinSilver extends PropItem {
  constructor(
    property: MapItemProperty = PropNumerical[PropTiles.KEY_RED],
    position?: PositionType
  ) {
    super(PropTiles.KEY_RED, property, position);
  }

  execute(hero: Hero, { message }: CommonFuncMap): ExecuteReturnType {
    return {
      flag: true,
    };
  }
}
