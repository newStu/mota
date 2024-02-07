import { getIconUrl } from "@/assets/base";
import { PropTiles } from "../../id";

export function getPropIcon(name: string) {
  return getIconUrl("icon/prop", name);
}
export const PropTilesImage: { [key in PropTiles]: string } = {
  [PropTiles.GEMSTONE_RED]: getPropIcon("gemstone_red"),
  [PropTiles.GEMSTONE_BLUE]: getPropIcon("gemstone_blue"),
  [PropTiles.GEMSTONE_GREEN]: getPropIcon("gemstone_green"),
  [PropTiles.KEY_RED]: getPropIcon("key_red"),
  [PropTiles.KEY_BLUE]: getPropIcon("key_blue"),
  [PropTiles.KEY_YELLOW]: getPropIcon("key_yellow"),
  [PropTiles.KEY_BAG]: getPropIcon("key_bag"),
  [PropTiles.DRUG_MINI]: getPropIcon("drug_mini"),
  [PropTiles.SWORD]: getPropIcon("sword"),
  [PropTiles.SWORD_BIG]: getPropIcon("sword_big"),
  [PropTiles.SWORD_GOD]: getPropIcon("sword_god"),
  [PropTiles.DRUG]: getPropIcon("drug"),
  [PropTiles.DRUG_MIDDLE]: getPropIcon("drug_middle"),
  [PropTiles.DRUG_MAX]: getPropIcon("drug_max"),
  [PropTiles.BOOK]: getPropIcon("book"),
  [PropTiles.SHIELD]: getPropIcon("shield"),
  [PropTiles.SHIELD_BIG]: getPropIcon("shield_big"),
  [PropTiles.SHIELD_GOD]: getPropIcon("shield_god"),
  [PropTiles.COIN_GOLD]: getPropIcon("coin_gold"),
  [PropTiles.COIN_SILVER]: getPropIcon("coin_silver"),
  [PropTiles.LEVEL_1]: getPropIcon("level"),
  [PropTiles.LEVEL_2]: getPropIcon("level2"),
  [PropTiles.LEVEL_3]: getPropIcon("level3"),
  [PropTiles.COMPASS]: getPropIcon("compass"),
  [PropTiles.PICKAXE]: getPropIcon("pickaxe"),
  [PropTiles.CROSS]: getPropIcon("cross"),
};
