
import { toRef } from 'vue'
import { initBeforeEachPinia } from "@/test/helper";
import { it, expect, describe, vi } from "vitest";
import { useTalkStore } from "../talk";
import { NPCTiles, RoleTiles } from "@/constants";

describe("对话弹窗", () => {
    initBeforeEachPinia();

    describe("左右两人对话内容相同的情况", () => {
        function init(callback: () => void) {
            const { initATalkDialog } = useTalkStore();

            initATalkDialog({
                talk: [
                    { id: RoleTiles.HERO, text: "测试英雄" },
                    { id: NPCTiles.SPIRIT, text: "测试精灵" },
                    { id: RoleTiles.HERO, text: "测试英雄3" },
                ],
                talkName: { [RoleTiles.HERO]: "英雄", [NPCTiles.SPIRIT]: "精灵" },
                callback,
            });
        }

        it("初始化弹窗: initATalkDialog", () => {
            const callback = vi.fn();
            init(callback);
            const __$temp_1 = (useTalkStore()),
                talkInfo = toRef(__$temp_1, 'talkInfo'),
                talkVisible = toRef(__$temp_1, 'talkVisible');
            expect(talkVisible.value).toBeTruthy();
            expect(talkInfo.value.name).toBe("英雄");
            expect(talkInfo.value.text).toBe("测试英雄");
        });

        it("下一条对话", () => {
            const callback = vi.fn();
            init(callback);
            const __$temp_2 = (useTalkStore()),
                talkInfo = toRef(__$temp_2, 'talkInfo'),
                talkVisible = toRef(__$temp_2, 'talkVisible'),
                nextTalk = toRef(__$temp_2, 'nextTalk');
            expect(talkVisible.value).toBeTruthy();
            expect(talkInfo.value.name).toBe("英雄");
            expect(talkInfo.value.text).toBe("测试英雄");

            nextTalk.value();
            expect(talkInfo.value.name).toBe("精灵");
            expect(talkInfo.value.text).toBe("测试精灵");

            nextTalk.value();
            expect(talkInfo.value.name).toBe("英雄");
            expect(talkInfo.value.text).toBe("测试英雄3");

            nextTalk.value();
            expect(talkVisible.value).toBeFalsy();

            expect(callback).toBeCalled();
        });
    });
});
