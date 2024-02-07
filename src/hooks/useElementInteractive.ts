import { attributeText } from "@/constants";
import { useElementRenderStore } from "@/stores/common/elementRender";
import { useGameStore } from "@/stores/common/game";
import { heroFightMonster, successMessage } from "@/utils";
import type { CommonProperty } from "@/element/common/CommonProperty";
import type { Hero } from "@/element/role";
import type { Role } from "@/element/role/role";
import { useTalkStore } from "@/stores/game/talk";
import type { CommonFuncMap } from "@/typings/constants";

const defaultValue = { flag: false, isFight: false };

export function useElementInteractive() {
  const { nextGameLevels, prevGameLevels } = useGameStore();
  const { removeItem } = useElementRenderStore();
  const { initATalkDialog } = useTalkStore();

  function getCommonFuncMap(element?: CommonProperty): CommonFuncMap {
    return {
      nextLevels: nextGameLevels,
      prevLevels: prevGameLevels,
      message: successMessage,
      initATalkDialog,
      openMinExpStore: () => {
        console.log("开启小经验商店");
      },
      openExpStore: () => {
        console.log("开启经验商店");
      },
      openMinGoldStore: () => {
        console.log("开启小商店");
      },
      openGoldStore: () => {
        console.log("开启商店");
      },
      openKeyStore: () => {
        console.log("开启钥匙商店");
      },
      removeElement() {
        element && removeItem(element);
      },
    };
  }

  function dealwithHeroInfo(
    hero: Hero,
    { HP, XP, Gold }: { HP: number; XP: number; Gold: number }
  ) {
    hero.HP += HP;
    hero.XP += XP;
    hero.Gold += Gold;

    successMessage(
      `${attributeText["XP"]}: +${XP} ${attributeText["Gold"]}: +${Gold} `,
      500
    );
  }

  function fightMonster(
    { isFight, flag }: { isFight?: boolean; flag: boolean },
    element: Role,
    hero: Hero
  ) {
    if (!isFight) return flag;
    const { win, minusHP } = heroFightMonster(hero, element);
    if (win) {
      dealwithHeroInfo(hero, {
        HP: -minusHP,
        XP: element.XP,
        Gold: element.Gold,
      });
    }
    return win;
  }

  function heroWithElementInteractive(
    hero: Hero,
    element: CommonProperty | undefined
  ): boolean {
    if (element === undefined) return true;
    // 基础操作
    const result =
      element.execute(hero, getCommonFuncMap(element)) || defaultValue;
    // 打怪操作
    const flag = fightMonster(result, element as Role, hero);
    // TODO 因为不是路,所以可以通过的话就需要移除这个元素,但是如果可以走岩浆,这里可能要改变
    if (flag) removeItem(element);
    return flag;
  }

  return { heroWithElementInteractive, getCommonFuncMap };
}
