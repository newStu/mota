import { CommonProperty } from "@/element/common/CommonProperty";
import { RoleTiles } from "@/constants";
import type {
  CommonFuncMap,
  PositionType,
  RoleProperty,
} from "@/typings/constants";
import type { Hero } from "./hero";
import { BigCommonProperty } from "../common/BigCommonProperty";

export class Role extends CommonProperty {
  Name: string = "";
  HP: number = 0;
  MP: number = 0;
  XP: number = 0;
  Gold: number = 0;
  DEF: number = 0;
  ATK: number = 0;

  constructor(id: RoleTiles, property?: RoleProperty, position?: PositionType) {
    super(id, position);
    this.initValue(property);
  }

  initValue(property?: RoleProperty) {
    if (property) {
      this.Name = property.Name;
      this.HP = property.HP;
      this.ATK = property.ATK;
      this.DEF = property.DEF;
      this.XP = property.XP;
      this.Gold = property.Gold;
      this.MP = property.MP;
    }
  }

  execute(_hero: Hero, _commonFuncMap: CommonFuncMap) {
    return { flag: false, isFight: true };
  }
}

export class RoleBig extends BigCommonProperty {
  Name: string = "";
  HP: number = 0;
  MP: number = 0;
  XP: number = 0;
  Gold: number = 0;
  DEF: number = 0;
  ATK: number = 0;

  constructor(id: RoleTiles, property?: RoleProperty, position?: PositionType) {
    super(id, position);
    this.initValue(property);
  }

  initValue(property?: RoleProperty) {
    if (property) {
      this.Name = property.Name;
      this.HP = property.HP;
      this.ATK = property.ATK;
      this.DEF = property.DEF;
      this.XP = property.XP;
      this.Gold = property.Gold;
      this.MP = property.MP;
    }
  }

  execute(_hero: Hero, _commonFuncMap: CommonFuncMap) {
    return { flag: false, isFight: true };
  }
}
