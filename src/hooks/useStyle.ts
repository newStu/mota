import type { CommonProperty } from "@/element/common/CommonProperty";
import { useCommonStore } from "@/stores/common/common";
import { getRealXY } from "@/utils/position";
import { GameTilesImage } from "@/constants";
import { computed, type CSSProperties } from "vue";
import { useMapStore } from "@/stores/common/map";

export function useElementStyle(element: CommonProperty) {
  const { step } = $(useCommonStore());
  const style = computed(() => {
    const { width, height, x, y } = getRealXY(element);

    return {
      width: step * width + "px",
      height: step * height + "px",
      left: step * x + "px",
      top: step * y + "px",
    };
  });

  return { style, step };
}

export function useGameElementStyle(element: CommonProperty) {
  const { step } = $(useCommonStore());
  const { col } = $(useMapStore());
  const { width, height, id, onceAnimation } = element;
  const img = GameTilesImage[id];

  const className = computed(() => {
    const { width, height, hasAnimation } = element;
    const newWidth = width * step;
    const newHeight = height * step;
    let commonClass = `w${newWidth}-h${newHeight} background-size-${newWidth}`;
    // 沒有动画效果就直接图片全覆盖
    if (!hasAnimation) {
      if (onceAnimation) return commonClass;
      return (commonClass += ` bgCover`);
    }
    commonClass += ` base-animation animation-name-${newWidth}`;
    if (onceAnimation) {
      commonClass += " once";
    }
    return commonClass;
  });

  const heroStyle = computed(() => {
    const { x, y } = getRealXY(element);
    return {
      transform: `translate(${step * x}px, ${step * (y - col)}px)`,
    };
  });

  const style = computed(() => {
    const { x, y } = getRealXY(element);
    let style: CSSProperties = {
      left: step * x + "px",
      top: step * y + "px",
    };
    return style;
  });

  const backgroundImage = computed(() => {
    return `url(${img})`;
  });
  const backgroundPositionY = computed(() => {
    const { positionY } = element;
    return `-${positionY * step * height}px`;
  });

  return {
    style,
    step,
    backgroundImage,
    backgroundPositionY,
    heroStyle,
    className,
  };
}
