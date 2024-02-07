import { CommonProperty } from "@/element/common/CommonProperty";
import { NPCTiles } from "@/constants";
import type {
  CommonFuncMap,
  NPCProperty,
  PositionType,
} from "@/typings/constants";
import type { Hero } from "../role";

export class NPC extends CommonProperty {
  Name: string = "";

  constructor(id: NPCTiles, property?: NPCProperty, position?: PositionType) {
    super(id, position);
    this.initValue(property);
  }

  initValue(property?: NPCProperty) {
    if (property) {
      this.Name = property.Name;
    }
  }

  execute(_hero?: Hero, _commonFuncMap?: CommonFuncMap) {
    return { flag: false, isFight: false };
  }
}
