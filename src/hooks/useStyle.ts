import type { CommonProperty } from "@/element/common/CommonProperty";
import { useCommonStore } from "@/stores/common/common";
import { getRealXY } from "@/utils/position";
import { GameTilesImage } from "@/constants";
import { computed, type CSSProperties, toRef } from 'vue';
import { useMapStore } from "@/stores/common/map";

export function useElementStyle(element: CommonProperty) {
  const __$temp_1 = (useCommonStore()),
  step = toRef(__$temp_1, 'step');;
  const style = computed(() => {
    const { width, height, x, y } = getRealXY(element);

    return {
      width: step.value * width + "px",
      height: step.value * height + "px",
      left: step.value * x + "px",
      top: step.value * y + "px",
    };
  });

  return { style, step: step.value };
}

export function useGameElementStyle(element: CommonProperty) {
  const __$temp_2 = (useCommonStore()),
  step = toRef(__$temp_2, 'step');;
  const __$temp_3 = (useMapStore()),
  col = toRef(__$temp_3, 'col');;
  const { width, height, id, onceAnimation } = element;
  const img = GameTilesImage[id];

  const className = computed(() => {
    const { width, height, hasAnimation } = element;
    const newWidth = width * step.value;
    const newHeight = height * step.value;
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
      transform: `translate(${step.value * x}px, ${step.value * (y - col.value)}px)`,
    };
  });

  const style = computed(() => {
    const { x, y } = getRealXY(element);
    let style: CSSProperties = {
      left: step.value * x + "px",
      top: step.value * y + "px",
    };
    return style;
  });

  const backgroundImage = computed(() => {
    return `url(${img})`;
  });
  const backgroundPositionY = computed(() => {
    const { positionY } = element;
    return `-${positionY * step.value * height}px`;
  });

  return {
    style,
    step: step.value,
    backgroundImage,
    backgroundPositionY,
    heroStyle,
    className,
  };
}
