import {
  DoorTiles,
  MapNumerical,
  MapTiles,
  type MapItemProperty,
} from "@/constants";
import { MapItem } from "./map";
import type {
  CommonFuncMap,
  ExecuteReturnType,
  PositionType,
} from "@/typings/constants";
import type { Hero } from "../role";

export class Door extends MapItem {
  hasAnimation: boolean = false;
  onceAnimation: boolean = true;
  renderElement: HTMLDivElement | null = null;

  constructor(
    id: MapTiles,
    property?: MapItemProperty,
    position?: PositionType
  ) {
    super(id, property, position);
  }

  saveElement(element: HTMLDivElement | null) {
    this.renderElement = element;
  }

  removeDoor(hero: Hero, removeElement: () => void) {
    if (this.renderElement) {
      this.renderElement.addEventListener("animationend", () => {
        removeElement();
        hero.movePosition(this);
      });
    }
  }

  execute(hero: Hero, { removeElement }: CommonFuncMap): ExecuteReturnType {
    const flag = hero.useKey(this.id as unknown as DoorTiles);
    if (flag) {
      this.hasAnimation = true;
      this.removeDoor(hero, removeElement);
    }
    return {
      flag: false,
    };
  }
}
export class DoorRed extends Door {
  positionY: number = 2;
  constructor(
    property: MapItemProperty = MapNumerical[MapTiles.DOOR_RED],
    position?: PositionType
  ) {
    super(MapTiles.DOOR_RED, property, position);
  }
}

export class DoorBlue extends Door {
  positionY: number = 1;

  constructor(
    property: MapItemProperty = MapNumerical[MapTiles.DOOR_BLUE],
    position?: PositionType
  ) {
    super(MapTiles.DOOR_BLUE, property, position);
  }
}

export class DoorYellow extends Door {
  positionY: number = 0;
  constructor(
    property: MapItemProperty = MapNumerical[MapTiles.DOOR_YELLOW],
    position?: PositionType
  ) {
    super(MapTiles.DOOR_YELLOW, property, position);
  }
}

export class DoorSpecial extends Door {
  positionY: number = 1;
  constructor(
    property: MapItemProperty = MapNumerical[MapTiles.DOOR_SPECIAL],
    position?: PositionType
  ) {
    super(MapTiles.DOOR_SPECIAL, property, position);
  }

  execute(hero: Hero, { removeElement }: CommonFuncMap): ExecuteReturnType {
    const flag = hero.openSpecialDoor;
    if (flag) {
      this.hasAnimation = true;
      this.removeDoor(hero, removeElement);
    }
    return { flag: false };
  }
}

export class DoorIronGate extends Door {
  positionY: number = 0;
  constructor(
    property: MapItemProperty = MapNumerical[MapTiles.DOOR_IRON_GATE],
    position?: PositionType
  ) {
    super(MapTiles.DOOR_IRON_GATE, property, position);
  }

  execute(hero: Hero, { removeElement }: CommonFuncMap): ExecuteReturnType {
    const flag = hero.openSpecialDoor;
    if (flag) {
      this.hasAnimation = true;
      this.removeDoor(hero, removeElement);
    }
    return { flag: false };
  }
}
