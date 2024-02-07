import type { Hero } from "@/element/role";
import type { Role } from "@/element/role/role";

/**
 * 一个一人一回合方法
 * @param hero    英雄
 * @param monster 怪物
 * @param hooks
 *   begin: 开始的钩子
 *   fight: 打架的钩子
 *   end: 结束的钩子
 * @returns
 */
export function heroFightMonsterRound(
  hero: Hero,
  monster: Role,
  hooks: {
    begin: () => void;
    fight: () => void;
    end: () => void;
  }
): boolean {
  return true;
}

/**
 * 快速计算方法
 * @param hero      英雄
 * @param monster   怪物
 * @returns true: 成功, false: 失败
 */
export function heroFightMonster(
  hero: Hero,
  monster: Role
): {
  win: boolean;
  minusHP: number;
} {
  const res = { win: false, minusHP: 0 };
  // 怪物一次扣血
  const monsterOnceMinus = hero.ATK - monster.DEF;
  // 怪物未扣血,直接失败
  if (monsterOnceMinus <= 0) return res;
  // 怪物一次扣血量大于怪物的血量, 胜利并不扣血
  if (monsterOnceMinus > monster.HP) {
    res.win = true;
    return res;
  }

  // 英雄一次扣血
  const heroOnceMinus = monster.ATK - hero.DEF;
  // 怪物对英雄未破防,直接成功,并不扣血
  if (heroOnceMinus <= 0) return { ...res, win: true };
  // 英雄一次扣血大于自身血量,直接失败
  if (heroOnceMinus > hero.HP) return res;

  // 求回合數, 英雄永远先手,所以回合减1
  const round = Math.ceil(monster.HP / monsterOnceMinus) - 1;

  // 求扣血数
  const minusHP = round * heroOnceMinus;

  return {
    win: hero.HP > minusHP,
    minusHP,
  };
}
