import { RoleNumerical, RoleTiles } from "@/constants";
import { Role } from "./role";
import type { PositionType, RoleProperty } from "@/typings/constants";
// 兽人

export class Orc extends Role {
  constructor(
    property: RoleProperty = RoleNumerical[RoleTiles.ORC],
    position?: PositionType
  ) {
    super(RoleTiles.ORC, property, position);
  }
}

export class OrcWarrior extends Role {
  constructor(
    property: RoleProperty = RoleNumerical[RoleTiles.ORC_WARRIOR],
    position?: PositionType
  ) {
    super(RoleTiles.ORC_WARRIOR, property, position);
  }
}
