import { MapTiles, defaultPosition } from "@/constants";
import type {
  CommonFuncMap,
  ExecuteReturnType,
  IDType,
  OneElementType,
  PositionType,
} from "@/typings/constants";
import { cloneDeep } from "lodash";
import type { Hero } from "../role";

export class CommonProperty {
  id: IDType;
  x: number;
  y: number;
  width: number = 1;
  height: number = 1;
  positionY: number = 0;
  hasAnimation: boolean = true;
  onceAnimation: boolean = false;

  constructor(
    id: IDType = MapTiles.ROAD,
    position: PositionType = defaultPosition
  ) {
    this.id = id;
    this.x = position.x;
    this.y = position.y;
  }

  movePosition({ x, y }: PositionType) {
    this.x = x;
    this.y = y;
  }

  addToRender(x: number, y: number, _element?: OneElementType): any {
    const item = cloneDeep(this);
    item.x = x;
    item.y = y;

    return item;
  }

  getRenderKey() {
    return this.id + "_" + this.x + "_" + this.y;
  }

  // 保存當前元素的方法
  saveElement(_element: HTMLDivElement | null) {}

  /**
   * 执行操作,返回false代表不能继续往前进
   * @param _hero 英雄信息
   * @param _commonFuncMap 所有公共操作方法集合
   * @returns
   */
  execute(_hero: Hero, _commonFuncMap?: CommonFuncMap): ExecuteReturnType {
    return { flag: false };
  }
}
