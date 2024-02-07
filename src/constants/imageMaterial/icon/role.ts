import { getIconUrl } from "@/assets/base";
import { RoleTiles } from "../../id";

export function getRoleIcon(name: string) {
  return getIconUrl("icon/role", name);
}
export const RoleTilesImage: { [key in RoleTiles]: string } = {
  [RoleTiles.HERO]: getRoleIcon("hero"),
  [RoleTiles.SLIME_GREEN]: getRoleIcon("slime_green"),
  [RoleTiles.KNIGHT_WHITE]: getRoleIcon("knight_white"),
  [RoleTiles.SLIME_RED]: getRoleIcon("slime_red"),
  [RoleTiles.SLIME_BLACK]: getRoleIcon("slime_black"),
  [RoleTiles.ORC]: getRoleIcon("orc"),
  [RoleTiles.BAT]: getRoleIcon("bat"),
  [RoleTiles.MAGICIAN]: getRoleIcon("magician"),
  [RoleTiles.SKELETON]: getRoleIcon("skeleton"),
  [RoleTiles.SKELETON_SOLDIER]: getRoleIcon("skeleton_soldier"),
  [RoleTiles.SLIME_KING]: getRoleIcon("slime_king"),
  [RoleTiles.ORC_WARRIOR]: getRoleIcon("orc_warrior"),
  [RoleTiles.BAT_BIG]: getRoleIcon("bat_big"),
  [RoleTiles.BAT_RED]: getRoleIcon("bat_red"),
  [RoleTiles.MAGICIAN_LINEN]: getRoleIcon("magician_linen"),
  [RoleTiles.MAGICIAN_HEIGHT]: getRoleIcon("magician_height"),
  [RoleTiles.MAGICIAN_RED]: getRoleIcon("magician_red"),
  [RoleTiles.MAGICIAN_QUICK]: getRoleIcon("magician_quick"),
  [RoleTiles.SKELETON_QUEUE]: getRoleIcon("skeleton_queue"),
  [RoleTiles.STONE_MONSTER]: getRoleIcon("stone_monster"),
  [RoleTiles.KNIGHT_QUEUE]: getRoleIcon("knight_queue"),
  [RoleTiles.WEISHI_JIN]: getRoleIcon("weishi_jin"),
  [RoleTiles.GUARD_UNDERWORLD]: getRoleIcon("guard_underworld"),
  [RoleTiles.GUARD_PRIMARY]: getRoleIcon("guard_primary"),
  [RoleTiles.GUARD_HEIGHT]: getRoleIcon("guard_height"),
  [RoleTiles.SWORDSMAN_BOTH_HANDS]: getRoleIcon("swordsman_both_hands"),
  [RoleTiles.WARRIOR_UNDERWORLD]: getRoleIcon("warrior_underworld"),
  [RoleTiles.METALS_QUEUE]: getRoleIcon("metals_queue"),
  [RoleTiles.UNDERWORLD_QUEUE]: getRoleIcon("underworld_queue"),
  [RoleTiles.WARRIOR_SHADOW]: getRoleIcon("shadow_warrior"),
  [RoleTiles.DEVIL_RED]: getRoleIcon("devil_red"),
  [RoleTiles.DEVIL_QUEUE]: getRoleIcon("devil_queue"),
  [RoleTiles.DRAGON]: getRoleIcon("dragon"),
  [RoleTiles.OCTOPUS]: getRoleIcon("octopus"),
};
