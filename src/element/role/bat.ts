import { RoleNumerical, RoleTiles } from "@/constants";
import { Role } from "./role";
import type { PositionType, RoleProperty } from "@/typings/constants";
// 蝙蝠
export class Bat extends Role {
  constructor(
    property: RoleProperty = RoleNumerical[RoleTiles.BAT],
    position?: PositionType
  ) {
    super(RoleTiles.BAT, property, position);
  }
}

export class BatBig extends Role {
  positionY: number = 1;
  constructor(
    property: RoleProperty = RoleNumerical[RoleTiles.BAT_BIG],
    position?: PositionType
  ) {
    super(RoleTiles.BAT_BIG, property, position);
  }
}

export class BatRed extends Role {
  positionY: number = 2;
  constructor(
    property: RoleProperty = RoleNumerical[RoleTiles.BAT_RED],
    position?: PositionType
  ) {
    super(RoleTiles.BAT_RED, property, position);
  }
}
