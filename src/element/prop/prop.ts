import { PropTiles, type MapItemProperty } from "@/constants";
import { CommonProperty } from "../common/CommonProperty";
import type {
  CommonFuncMap,
  ExecuteReturnType,
  PositionType,
} from "@/typings/constants";
import type { Hero } from "../role";

export class PropItem extends CommonProperty {
  Name: string = "";
  hasAnimation: boolean = false;

  constructor(
    id: PropTiles,
    property?: MapItemProperty,
    position?: PositionType
  ) {
    super(id, position);
    if (property) {
      this.Name = property.Name;
    }
  }

  // 碰撞操作
  execute(hero: Hero, commonFuncMap: CommonFuncMap): ExecuteReturnType {}
}
