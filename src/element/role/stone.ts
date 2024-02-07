import { RoleNumerical, RoleTiles } from "@/constants";
import { Role } from "./role";
import type { PositionType, RoleProperty } from "@/typings/constants";
// 石头人
export class StoneMonster extends Role {
  positionY: number = 0;
  constructor(
    property: RoleProperty | undefined = RoleNumerical[RoleTiles.STONE_MONSTER],
    position?: PositionType
  ) {
    super(RoleTiles.STONE_MONSTER, property, position);
  }
}
