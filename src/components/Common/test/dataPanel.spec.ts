import { filterTimeout, initBeforeEachPinia } from "@/test/helper";
import { vi, expect, it, describe, beforeEach } from "vitest";
import { useDataPanelValue } from "../dataPanel";
import { reactive } from "vue";
import { Hero } from "@/element/role";
import { DoorTiles, HeroNumerical, attributeText } from "@/constants";
import { Wall } from "@/element/map";
import type { Role } from "@/element/role/role";
import { useSelectStore } from "@/stores/editMap/elementSelect";

vi.mock("@/stores/editMap/elementSelect");

describe("获取面板数值: useDataPanelValue", () => {
    initBeforeEachPinia();
    describe("钥匙包", () => {
        beforeEach(() => {
            vi.mocked(useSelectStore).mockReturnValue({
                isMapElement: false,
            } as any);
        });
        it("获取", () => {
            const element = reactive(new Hero(HeroNumerical, { x: 0, y: 0 }));
            const { keyModal } = useDataPanelValue({ element });
            expect(keyModal.value).not.toBeUndefined();
            expect(keyModal.value?.[DoorTiles.RED]).toBe(1);
            expect(keyModal.value?.[DoorTiles.BLUE]).toBe(1);
            expect(keyModal.value?.[DoorTiles.YELLOW]).toBe(1);
        });

        it("修改钥匙包", () => {
            const element = reactive(new Hero(HeroNumerical, { x: 0, y: 0 }));
            const { keyModal } = useDataPanelValue({ element });

            element.addKey(DoorTiles.RED, 3);

            expect(keyModal.value?.[DoorTiles.RED]).toBe(4);
        });
    });

    describe("属性获取", () => {
        beforeEach(() => {
            vi.mocked(useSelectStore).mockReturnValue({ isMapElement: false } as any);
        });

        it("hero属性获取", () => {
            const element = reactive(new Hero(HeroNumerical, { x: 0, y: 0 }));
            const { renderPanel } = useDataPanelValue({ element });

            expect(renderPanel.length).toBe(Object.keys(attributeText).length - 2);
        });

        it("wall属性获取", () => {
            const element = reactive(new Wall(undefined, { x: 0, y: 0 }) as Role);
            const { renderPanel } = useDataPanelValue({ element });
            expect(renderPanel.length).toBe(1);
        });

        it("选取物切换所带来的属性列表变化", async () => {
            let element = reactive({ element: new Wall(undefined, { x: 0, y: 0 }) as Role });
            const { renderPanel } = useDataPanelValue(element);
            await filterTimeout(() => {
                element.element = new Hero(HeroNumerical, { x: 0, y: 0 });
            });
            expect(renderPanel.length).toBe(Object.keys(attributeText).length - 2);
        });
    });

    describe("选中地图是的属性获取", () => {
        beforeEach(() => {
            vi.mocked(useSelectStore).mockReturnValue({ isMapElement: true } as any);
        });
        it("hero属性获取", () => {
            const element = reactive(new Hero(HeroNumerical, { x: 0, y: 0 }));
            const { renderPanel } = useDataPanelValue({ element });

            expect(renderPanel.length).toBe(Object.keys(attributeText).length);
        });

        it("wall属性获取", () => {
            const element = reactive(new Wall(undefined, { x: 0, y: 0 }) as Role);
            const { renderPanel } = useDataPanelValue({ element });
            expect(renderPanel.length).toBe(3);
        });
    });
});
