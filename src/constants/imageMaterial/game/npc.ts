import { getIconUrl } from "@/assets/base";
import { NPCTiles } from "../../id";

export function getNPCIcon(name: string) {
  return getIconUrl("game/npc", name);
}
export const NPCGameTilesImage: { [key in NPCTiles]: string } = {
  [NPCTiles.SPIRIT]: getNPCIcon("npc"),
  [NPCTiles.MERCHANT_MIN_EXP]: getNPCIcon("npc"),
  [NPCTiles.MERCHANT_EXP]: getNPCIcon("npc"),
  [NPCTiles.MERCHANT_KEY]: getNPCIcon("npc"),
  [NPCTiles.THIEF]: getNPCIcon("npc"),
};
