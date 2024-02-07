import type { IDType, OneElementType, PositionType } from "@/typings/constants";
import { CommonProperty } from "./CommonProperty";
import { getForwardPosition } from "@/utils/position";

export class BigCommonProperty extends CommonProperty {
  width: number = 3;
  height: number = 1;

  constructor(id: IDType, position?: PositionType) {
    super(id, position);
  }

  addToRender(x: number, y: number, { oneElements }: OneElementType) {
    const element = oneElements.find((item) => item.id === this.id);
    if (element) {
      const newElement = element as CommonProperty;
      const deleteForwardPosition = getForwardPosition(newElement);
      newElement.movePosition({ x, y });
      const forwardPosition = getForwardPosition(newElement);
      return {
        forwardPosition,
        hasForward: true,
        deleteForwardPosition,
      };
    } else {
      const element = super.addToRender(x, y);
      return {
        element: element,
        hasForward: true,
        forwardPosition: getForwardPosition(element),
      };
    }
  }
}
