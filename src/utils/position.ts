import { CommonProperty } from "@/element/common/CommonProperty";
import type { PositionType } from "@/typings/constants";

export function getForwardPositionKey({ x, y }: PositionType) {
  return `${x}-${y}`;
}

/**
 * 获取渲染真正开始渲染的位置
 * @param element 元素，主要有w，h，x，y属性
 * @returns
 */
export function getRealXY(element: CommonProperty) {
  const { width, height, x: originX, y: originY } = element;
  let x = originX,
    y = originY;
  if (width > 1) {
    x = x - (width - 1) / 2;
  }
  if (height > 1) {
    y = y - (height - 1) / 2;
  }

  return {
    width,
    height,
    x,
    y,
  };
}

/**
 * 获取所有的转发对象
 * @param element 元素，主要有w，h，x，y属性
 * @returns
 */
export function getForwardPosition(element: CommonProperty) {
  const { x, y } = element;
  const { width, height, x: beginX, y: beginY } = getRealXY(element);
  const targetPosition = { x, y };

  const forwardPosition: { [key: string]: PositionType } = {};
  for (let i = beginX; i <= beginX + (width - 1); i++) {
    for (let j = beginY; j <= beginY + (height - 1); j++) {
      if (i === x && j === y) {
        continue;
      }
      const key = getForwardPositionKey({ x: i, y: j });
      forwardPosition[key] = targetPosition;
    }
  }

  return forwardPosition;
}
