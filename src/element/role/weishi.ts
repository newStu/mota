import { RoleNumerical, RoleTiles } from "@/constants";
import { Role } from "./role";
import type { PositionType, RoleProperty } from "@/typings/constants";

// 卫士

export class WeishiJin extends Role {
  positionY: number = 0;
  constructor(
    property: RoleProperty = RoleNumerical[RoleTiles.WEISHI_JIN],
    position?: PositionType
  ) {
    super(RoleTiles.WEISHI_JIN, property, position);
  }
}
