import { RoleNumerical, RoleTiles } from "@/constants";
import { Role } from "./role";
import type { PositionType, RoleProperty } from "@/typings/constants";
// 战士

export class WarriorUnderworld extends Role {
  constructor(
    property: RoleProperty = RoleNumerical[RoleTiles.WARRIOR_UNDERWORLD],
    position?: PositionType
  ) {
    super(RoleTiles.WARRIOR_UNDERWORLD, property, position);
  }
}

export class WarriorShadow extends Role {
  constructor(
    property: RoleProperty = RoleNumerical[RoleTiles.WARRIOR_SHADOW],
    position?: PositionType
  ) {
    super(RoleTiles.WARRIOR_SHADOW, property, position);
  }
}
