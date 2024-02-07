import { RoleNumerical, RoleTiles } from "@/constants";
import { Role } from "./role";
import type { PositionType, RoleProperty } from "@/typings/constants";
// 魔法师
export class Magician extends Role {
  constructor(
    property: RoleProperty = RoleNumerical[RoleTiles.MAGICIAN],
    position?: PositionType
  ) {
    super(RoleTiles.MAGICIAN, property, position);
  }
}

export class MagicianLinen extends Role {
  constructor(
    property: RoleProperty = RoleNumerical[RoleTiles.MAGICIAN_LINEN],
    position?: PositionType
  ) {
    super(RoleTiles.MAGICIAN_LINEN, property, position);
  }
}

export class MagicianHeight extends Role {
  positionY: number = 1;
  constructor(
    property: RoleProperty = RoleNumerical[RoleTiles.MAGICIAN_HEIGHT],
    position?: PositionType
  ) {
    super(RoleTiles.MAGICIAN_HEIGHT, property, position);
  }
}

export class MagicianRed extends Role {
  positionY: number = 1;
  constructor(
    property: RoleProperty = RoleNumerical[RoleTiles.MAGICIAN_RED],
    position?: PositionType
  ) {
    super(RoleTiles.MAGICIAN_RED, property, position);
  }
}

export class MagicianQuick extends Role {
  positionY: number = 1;
  constructor(
    property: RoleProperty = RoleNumerical[RoleTiles.MAGICIAN_QUICK],
    position?: PositionType
  ) {
    super(RoleTiles.MAGICIAN_QUICK, property, position);
  }
}
