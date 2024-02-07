import { RoleNumerical, RoleTiles } from "@/constants";
import { Role } from "./role";
import type { PositionType, RoleProperty } from "@/typings/constants";
// 剑士
export class SwordsmanBothHands extends Role {
  constructor(
    property: RoleProperty = RoleNumerical[RoleTiles.SWORDSMAN_BOTH_HANDS],
    position?: PositionType
  ) {
    super(RoleTiles.SWORDSMAN_BOTH_HANDS, property, position);
  }
}
