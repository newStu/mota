import { it, expect, describe } from "vitest";
import { getForwardPosition } from "../position";
import type { CommonProperty } from "@/element/common/CommonProperty";

describe("获取转发x,y", () => {
  it("w: 1, h: 1", () => {
    const forwardPosition = getForwardPosition({
      x: 1,
      y: 1,
      width: 1,
      height: 1,
    } as CommonProperty);
    expect(Object.keys(forwardPosition).length).toBe(0);
  });

  it("w: 3, h: 1", () => {
    const forwardPosition = getForwardPosition({
      x: 1,
      y: 1,
      width: 3,
      height: 1,
    } as CommonProperty);

    expect(Object.keys(forwardPosition).length).toBe(2);
    expect(forwardPosition).toHaveProperty("0-1");
    expect(forwardPosition).toHaveProperty("2-1");
  });

  it("w: 3, h: 3", () => {
    const forwardPosition = getForwardPosition({
      x: 3,
      y: 5,
      width: 3,
      height: 3,
    } as CommonProperty);

    expect(Object.keys(forwardPosition).length).toBe(8);
    expect(forwardPosition).toHaveProperty("2-4");
    expect(forwardPosition).toHaveProperty("2-5");
    expect(forwardPosition).toHaveProperty("2-6");
    expect(forwardPosition).toHaveProperty("3-4");
    expect(forwardPosition).toHaveProperty("3-6");
    expect(forwardPosition).toHaveProperty("4-4");
    expect(forwardPosition).toHaveProperty("4-5");
    expect(forwardPosition).toHaveProperty("4-6");
  });
});
