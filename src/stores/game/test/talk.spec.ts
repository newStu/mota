import { initBeforeEachPinia } from "@/test/helper";
import { it, expect, describe, vi } from "vitest";
import { useTalkStore } from "../talk";
import { RoleTiles } from "@/constants";

describe("对话弹窗", () => {
  initBeforeEachPinia();

  describe("左右两人对话内容相同的情况", () => {
    function init(callback: () => void) {
      const { initATalkDialog } = useTalkStore();

      initATalkDialog({
        talk: [
          { id: RoleTiles.HERO, text: "测试英雄" },
          { id: RoleTiles.SPIRIT, text: "测试精灵" },
          { id: RoleTiles.HERO, text: "测试英雄3" },
        ],
        talkName: { [RoleTiles.HERO]: "英雄", [RoleTiles.SPIRIT]: "精灵" },
        callback,
      });
    }

    it("初始化弹窗: initATalkDialog", () => {
      const callback = vi.fn();
      init(callback);
      const { talkInfo, talkVisible } = $(useTalkStore());
      expect(talkVisible).toBeTruthy();
      expect(talkInfo.name).toBe("英雄");
      expect(talkInfo.text).toBe("测试英雄");
    });

    it("下一条对话", () => {
      const callback = vi.fn();
      init(callback);
      const { talkInfo, talkVisible, nextTalk } = $(useTalkStore());
      expect(talkVisible).toBeTruthy();
      expect(talkInfo.name).toBe("英雄");
      expect(talkInfo.text).toBe("测试英雄");

      nextTalk();
      expect(talkInfo.name).toBe("精灵");
      expect(talkInfo.text).toBe("测试精灵");

      nextTalk();
      expect(talkInfo.name).toBe("英雄");
      expect(talkInfo.text).toBe("测试英雄3");

      nextTalk();
      expect(talkVisible).toBeFalsy();

      expect(callback).toBeCalled();
    });
  });
});
