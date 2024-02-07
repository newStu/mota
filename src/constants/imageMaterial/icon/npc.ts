import { getIconUrl } from "@/assets/base";
import { NPCTiles } from "../../id";

export function getNPCIcon(name: string) {
  return getIconUrl("icon/npc", name);
}
export const NPCTilesImage: { [key in NPCTiles]: string } = {
  [NPCTiles.SPIRIT]: getNPCIcon("spirit"),
  [NPCTiles.MERCHANT_MIN_EXP]: getNPCIcon("merchant_exp"),
  [NPCTiles.MERCHANT_EXP]: getNPCIcon("merchant_exp"),
  [NPCTiles.MERCHANT_KEY]: getNPCIcon("merchant_key"),
  [NPCTiles.THIEF]: getNPCIcon("thief"),
};
