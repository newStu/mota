import { it, expect, describe, beforeEach } from "vitest";
import { useMapStore } from "../map";
import { initBeforeEachPinia } from "@/test/helper";

describe("地图数据", () => {
  initBeforeEachPinia();

  it("初始化数据: initMap", () => {
    const { map, initMap } = useMapStore();
    initMap(10, 5);

    expect(map.length).toBe(10);
    expect(map[0].length).toBe(5);
  });

  describe("设置行: updateMapRow", () => {
    it("行增加", () => {
      const { updateMapRow, setRow, initMap, map } = useMapStore();

      initMap(1, 1);

      setRow(2);

      updateMapRow();

      expect(map).toMatchInlineSnapshot(`
        [
          [
            4,
          ],
          [
            4,
          ],
        ]
      `);
    });

    it("行减少", () => {
      const { updateMapRow, setRow, initMap, map } = useMapStore();

      initMap(2, 2);

      setRow(1);

      updateMapRow();

      expect(map).toMatchInlineSnapshot(`
        [
          [
            4,
            4,
          ],
        ]
      `);
    });
  });

  describe("设置列: updateMapCol", () => {
    it("列增加", () => {
      const { updateMapRow, setRow, initMap, map } = useMapStore();

      initMap(1, 1);

      setRow(2);

      updateMapRow();

      expect(map).toMatchInlineSnapshot(`
        [
          [
            4,
          ],
          [
            4,
          ],
        ]
      `);
    });

    it("列减少", () => {
      const { updateMapRow, setRow, initMap, map } = useMapStore();

      initMap(2, 2);

      setRow(1);

      updateMapRow();

      expect(map).toMatchInlineSnapshot(`
        [
          [
            4,
            4,
          ],
        ]
      `);
    });
  });

  describe("判断坐标是否在地图之外: isInnerMap", () => {
    beforeEach(async () => {
      const { setCol, setRow } = useMapStore();
      setRow(3); // y
      setCol(4); // x
    });
    it("左边界", () => {
      const { isInnerMap } = useMapStore();
      expect(isInnerMap({ x: -1, y: 1 })).toBeFalsy();
    });
    it("右边界", () => {
      const { isInnerMap } = useMapStore();
      expect(isInnerMap({ x: 4, y: 1 })).toBeFalsy();
    });
    it("上边界", () => {
      const { isInnerMap } = useMapStore();
      expect(isInnerMap({ x: 0, y: -1 })).toBeFalsy();
    });
    it("下边界", () => {
      const { isInnerMap } = useMapStore();
      expect(isInnerMap({ x: 0, y: 3 })).toBeFalsy();
    });

    it("四个角落", () => {
      const { isInnerMap } = useMapStore();
      expect(isInnerMap({ x: 0, y: 0 })).toBeTruthy();
      expect(isInnerMap({ x: 3, y: 2 })).toBeTruthy();
      expect(isInnerMap({ x: 0, y: 2 })).toBeTruthy();
      expect(isInnerMap({ x: 3, y: 0 })).toBeTruthy();
    });
  });
});
