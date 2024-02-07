import { getIconUrl } from "@/assets/base";
import { RoleTiles } from "../../id";

export function getRoleIcon(name: string) {
  return getIconUrl("game/role", name);
}
export const RoleGameTilesImage: { [key in RoleTiles]: string } = {
  [RoleTiles.HERO]: getRoleIcon("hero"),
  [RoleTiles.SLIME_GREEN]: getRoleIcon("slime"),
  [RoleTiles.KNIGHT_WHITE]: getRoleIcon("devil_min"),
  [RoleTiles.SLIME_RED]: getRoleIcon("slime"),
  [RoleTiles.SLIME_BLACK]: getRoleIcon("slime"),
  [RoleTiles.ORC]: getRoleIcon("orc"),
  [RoleTiles.BAT]: getRoleIcon("bat"),
  [RoleTiles.MAGICIAN]: getRoleIcon("magician"),
  [RoleTiles.SKELETON]: getRoleIcon("skeleton"),
  [RoleTiles.SKELETON_SOLDIER]: getRoleIcon("skeleton"),
  [RoleTiles.SLIME_KING]: getRoleIcon("slime"),
  [RoleTiles.ORC_WARRIOR]: getRoleIcon("orc_height"),
  [RoleTiles.BAT_BIG]: getRoleIcon("bat"),
  [RoleTiles.BAT_RED]: getRoleIcon("bat"),
  [RoleTiles.MAGICIAN_LINEN]: getRoleIcon("magician_height"),
  [RoleTiles.MAGICIAN_HEIGHT]: getRoleIcon("magician"),
  [RoleTiles.MAGICIAN_RED]: getRoleIcon("magician_height"),
  [RoleTiles.MAGICIAN_QUICK]: getRoleIcon("knight_queue"),
  [RoleTiles.SKELETON_QUEUE]: getRoleIcon("skeleton"),
  [RoleTiles.STONE_MONSTER]: getRoleIcon("stone"),
  [RoleTiles.KNIGHT_QUEUE]: getRoleIcon("knight_queue"),
  [RoleTiles.WEISHI_JIN]: getRoleIcon("weishi"),
  [RoleTiles.GUARD_UNDERWORLD]: getRoleIcon("guard"),
  [RoleTiles.GUARD_PRIMARY]: getRoleIcon("guard"),
  [RoleTiles.GUARD_HEIGHT]: getRoleIcon("guard"),
  [RoleTiles.SWORDSMAN_BOTH_HANDS]: getRoleIcon("swordsman"),
  [RoleTiles.WARRIOR_UNDERWORLD]: getRoleIcon("warrior"),
  [RoleTiles.METALS_QUEUE]: getRoleIcon("weishi"),
  [RoleTiles.UNDERWORLD_QUEUE]: getRoleIcon("warrior"),
  [RoleTiles.WARRIOR_SHADOW]: getRoleIcon("shadow"),
  [RoleTiles.DEVIL_RED]: getRoleIcon("devil"),
  [RoleTiles.DEVIL_QUEUE]: getRoleIcon("bat"),
  [RoleTiles.DRAGON]: getRoleIcon("octopus"),
  [RoleTiles.OCTOPUS]: getRoleIcon("dragon"),
};
