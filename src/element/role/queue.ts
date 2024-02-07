import { RoleNumerical, RoleTiles } from "@/constants";
import { Role } from "./role";
import type { PositionType, RoleProperty } from "@/typings/constants";

// 队长
export class MetalsQueue extends Role {
  positionY: number = 2;
  constructor(
    property: RoleProperty = RoleNumerical[RoleTiles.METALS_QUEUE],
    position?: PositionType
  ) {
    super(RoleTiles.METALS_QUEUE, property, position);
  }
}

export class SkeletonQueue extends Role {
  positionY: number = 2;
  constructor(
    property: RoleProperty = RoleNumerical[RoleTiles.SKELETON_QUEUE],
    position?: PositionType
  ) {
    super(RoleTiles.SKELETON_QUEUE, property, position);
  }
}

export class UnderworldQueue extends Role {
  positionY: number = 1;
  constructor(
    property: RoleProperty = RoleNumerical[RoleTiles.UNDERWORLD_QUEUE],
    position?: PositionType
  ) {
    super(RoleTiles.UNDERWORLD_QUEUE, property, position);
  }
}

export class KnightQueue extends Role {
  positionY: number = 2;
  constructor(
    property: RoleProperty = RoleNumerical[RoleTiles.KNIGHT_QUEUE],
    position?: PositionType
  ) {
    super(RoleTiles.KNIGHT_QUEUE, property, position);
  }
}
