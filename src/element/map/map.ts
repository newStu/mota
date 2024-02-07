import { CommonProperty } from "../common/CommonProperty";
import { MapTiles, type MapItemProperty } from "@/constants";
import type { PositionType } from "@/typings/constants";
import { BigCommonProperty } from "../common/BigCommonProperty";

export class MapItem extends CommonProperty {
  Name: string = "";
  hasAnimation: boolean = false;

  constructor(
    id: MapTiles,
    property?: MapItemProperty,
    position?: PositionType
  ) {
    super(id, position);
    if (property) {
      this.Name = property.Name;
    }
  }
}

export class BigMapItem extends BigCommonProperty {
  Name: string = "";
  hasAnimation: boolean = false;

  constructor(
    id: MapTiles,
    property?: MapItemProperty,
    position?: PositionType
  ) {
    super(id, position);
    if (property) {
      this.Name = property.Name;
    }
  }
}
