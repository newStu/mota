import { RoleTiles, CommonMerchantNumerical, NPCTiles } from "@/constants";

import type {
  CommonFuncMap,
  IDType,
  NPCProperty,
  OneElementType,
  PositionType,
  TalkInitType,
} from "@/typings/constants";
import type { Hero } from "../role/hero";
import { NPC } from "./npc";

/**
 * 商人
 */
class Merchant extends NPC {
  talk: Array<{ id: IDType; text: string }> = [];

  constructor(id: NPCTiles, property: NPCProperty, position?: PositionType) {
    super(id, property, position);
  }

  _getTalkParams(hero: Hero, callback?: () => void): TalkInitType {
    return {
      talk: this.talk,
      talkName: {
        [hero.id]: hero.Name,
        [this.id]: this.Name,
      },
      callback: callback,
    };
  }

  addToRender(x: number, y: number, { oneElements }: OneElementType): void {
    const spirit = oneElements.find((item) => item.id === this.id);
    if (spirit) {
      spirit.x = x;
      spirit.y = y;
    } else {
      return super.addToRender(x, y);
    }
  }
}

/**
 * 小经验商人
 */
export class MerchantMinExp extends Merchant {
  talk: Array<{ id: IDType; text: string }> = [
    { id: RoleTiles.HERO, text: "。。。。。。" },
    { id: NPCTiles.MERCHANT_MIN_EXP, text: "你醒了！" },
    { id: RoleTiles.HERO, text: "。。。。。。你是谁？我在哪里？" },
  ];

  constructor(
    property: NPCProperty = CommonMerchantNumerical("小经验商人"),
    position?: PositionType
  ) {
    super(NPCTiles.MERCHANT_MIN_EXP, property, position);
    this.initValue(property);
  }

  execute(hero: Hero, { initATalkDialog, openMinExpStore }: CommonFuncMap) {
    if (!hero.hasMinExpStore) {
      initATalkDialog(
        this._getTalkParams(hero, () => {
          openMinExpStore();
          hero.setOpenMinExpStore();
        })
      );
    } else {
      openMinExpStore();
    }
    return super.execute();
  }
}

/**
 * 大经验商人
 */
export class MerchantExp extends Merchant {
  talk: Array<{ id: IDType; text: string }> = [
    { id: RoleTiles.HERO, text: "。。。。。。" },
    { id: NPCTiles.MERCHANT_EXP, text: "你醒了！" },
    { id: RoleTiles.HERO, text: "。。。。。。你是谁？我在哪里？" },
  ];

  constructor(
    property: NPCProperty = CommonMerchantNumerical("大经验商人"),
    position?: PositionType
  ) {
    super(NPCTiles.MERCHANT_EXP, property, position);
    this.initValue(property);
  }

  execute(hero: Hero, { initATalkDialog, openExpStore }: CommonFuncMap) {
    if (!hero.hasExpStore) {
      initATalkDialog(
        this._getTalkParams(hero, () => {
          openExpStore();
          hero.setOpenExpStore();
        })
      );
    } else {
      openExpStore();
    }
    return super.execute();
  }
}

/**
 * 钥匙商人
 */
export class MerchantKey extends Merchant {
  talk: Array<{ id: IDType; text: string }> = [
    { id: RoleTiles.HERO, text: "。。。。。。" },
    { id: NPCTiles.MERCHANT_KEY, text: "你醒了！" },
    { id: RoleTiles.HERO, text: "。。。。。。你是谁？我在哪里？" },
  ];

  positionY: number = 3;

  constructor(
    property: NPCProperty = CommonMerchantNumerical("钥匙商人"),
    position?: PositionType
  ) {
    super(NPCTiles.MERCHANT_KEY, property, position);
    this.initValue(property);
  }

  execute(hero: Hero, { initATalkDialog, openKeyStore }: CommonFuncMap) {
    if (!hero.hasKeyStore) {
      initATalkDialog(
        this._getTalkParams(hero, () => {
          openKeyStore();
          hero.setOpenKeyStore();
        })
      );
    } else {
      openKeyStore();
    }
    return super.execute();
  }
}
