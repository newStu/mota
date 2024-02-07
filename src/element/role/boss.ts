import { RoleNumerical, RoleTiles } from "@/constants";
import { Role, RoleBig } from "./role";
import type { PositionType, RoleProperty } from "@/typings/constants";
// Boss

export class DevilRed extends Role {
  positionY: number = 3;
  constructor(
    property: RoleProperty = RoleNumerical[RoleTiles.DEVIL_RED],
    position?: PositionType
  ) {
    super(RoleTiles.DEVIL_RED, property, position);
  }
}

export class DevilQueue extends Role {
  positionY: number = 3;

  constructor(
    property: RoleProperty = RoleNumerical[RoleTiles.DEVIL_QUEUE],
    position?: PositionType
  ) {
    super(RoleTiles.DEVIL_QUEUE, property, position);
  }
}

export class Dragon extends RoleBig {
  positionY: number = 0;
  width: number = 3;
  height: number = 3;

  constructor(
    property: RoleProperty = RoleNumerical[RoleTiles.DRAGON],
    position?: PositionType
  ) {
    super(RoleTiles.DRAGON, property, position);
  }
}

export class Octopus extends RoleBig {
  positionY: number = 0;
  width: number = 3;
  height: number = 3;

  constructor(
    property: RoleProperty = RoleNumerical[RoleTiles.OCTOPUS],
    position?: PositionType
  ) {
    super(RoleTiles.OCTOPUS, property, position);
  }
}
