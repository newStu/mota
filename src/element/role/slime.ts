import { RoleNumerical, RoleTiles } from "@/constants";
import { Role } from "./role";
import type { PositionType, RoleProperty } from "@/typings/constants";
// 史莱姆
export class SlimeGreen extends Role {
  constructor(
    property: RoleProperty | undefined = RoleNumerical[RoleTiles.SLIME_GREEN],
    position?: PositionType
  ) {
    super(RoleTiles.SLIME_GREEN, property, position);
  }
}

export class SlimeRed extends Role {
  positionY: number = 1;
  constructor(
    property: RoleProperty | undefined = RoleNumerical[RoleTiles.SLIME_RED],
    position?: PositionType
  ) {
    super(RoleTiles.SLIME_RED, property, position);
  }
}

export class SlimeBlack extends Role {
  positionY: number = 2;
  constructor(
    property: RoleProperty | undefined = RoleNumerical[RoleTiles.SLIME_BLACK],
    position?: PositionType
  ) {
    super(RoleTiles.SLIME_BLACK, property, position);
  }
}

export class SlimeKing extends Role {
  positionY: number = 3;
  constructor(
    property: RoleProperty | undefined = RoleNumerical[RoleTiles.SLIME_KING],
    position?: PositionType
  ) {
    super(RoleTiles.SLIME_KING, property, position);
  }
}
