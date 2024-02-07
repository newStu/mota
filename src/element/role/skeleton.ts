import { RoleNumerical, RoleTiles } from "@/constants";
import { Role } from "./role";
import type { PositionType, RoleProperty } from "@/typings/constants";
// 骷髅
export class Skeleton extends Role {
  constructor(
    property: RoleProperty = RoleNumerical[RoleTiles.SKELETON],
    position?: PositionType
  ) {
    super(RoleTiles.SKELETON, property, position);
  }
}

export class SkeletonSoldier extends Role {
  positionY: number = 1;
  constructor(
    property: RoleProperty = RoleNumerical[RoleTiles.SKELETON_SOLDIER],
    position?: PositionType
  ) {
    super(RoleTiles.SKELETON_SOLDIER, property, position);
  }
}
