import { RoleNumerical, RoleTiles } from "@/constants";
import { Role } from "./role";
import type { PositionType, RoleProperty } from "@/typings/constants";

// 卫兵

export class GuardPrimary extends Role {
  constructor(
    property: RoleProperty = RoleNumerical[RoleTiles.GUARD_PRIMARY],
    position?: PositionType
  ) {
    super(RoleTiles.GUARD_PRIMARY, property, position);
  }
}

export class GuardUnderworld extends Role {
  positionY: number = 1;
  constructor(
    property: RoleProperty = RoleNumerical[RoleTiles.GUARD_UNDERWORLD],
    position?: PositionType
  ) {
    super(RoleTiles.GUARD_UNDERWORLD, property, position);
  }
}

export class GuardHeight extends Role {
  positionY: number = 2;
  constructor(
    property: RoleProperty = RoleNumerical[RoleTiles.GUARD_HEIGHT],
    position?: PositionType
  ) {
    super(RoleTiles.GUARD_HEIGHT, property, position);
  }
}
