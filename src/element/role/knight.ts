import { RoleNumerical, RoleTiles } from "@/constants";
import { Role } from "./role";
import type { PositionType, RoleProperty } from "@/typings/constants";
// 武士
export class KnightWhite extends Role {
  positionY: number = 0;
  constructor(
    property: RoleProperty = RoleNumerical[RoleTiles.KNIGHT_WHITE],
    position?: PositionType
  ) {
    super(RoleTiles.KNIGHT_WHITE, property, position);
  }
}
